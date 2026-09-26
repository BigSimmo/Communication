import {
  Router,
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from "express";
import {
  db,
  favouritesTable,
  playbooksTable,
  drillProgressTable,
  type InsertFavourite,
  type InsertPlaybook,
  type InsertDrillProgress,
} from "@workspace/db";
import { eq } from "drizzle-orm";

const router = Router();

const MAX_ITEMS = 5000;
const MAX_TEXT = 2000;
const CARD_ID = /^TC\d{3}$/;

class ValidationError extends Error {}

// The user is taken from the authenticated session only, never from the
// request body or URL. An upstream auth middleware must verify the caller and
// set res.locals.userId before these routes are reachable.
const requireUser = (req: Request, res: Response, next: NextFunction) => {
  const userId = res.locals.userId;
  if (!Number.isInteger(userId) || userId <= 0) {
    res.status(401).json({ error: "Authentication required." });
    return;
  }
  next();
};

function text(value: unknown, field: string, optional = false): string | null {
  if (value == null && optional) return null;
  // Postgres text columns reject NUL bytes
  if (
    typeof value !== "string" ||
    value.length > MAX_TEXT ||
    value.includes("\u0000")
  ) {
    throw new ValidationError(`Invalid ${field}.`);
  }
  return value;
}

function cardId(value: unknown): string {
  if (typeof value !== "string" || !CARD_ID.test(value)) {
    throw new ValidationError("Invalid cardId.");
  }
  return value;
}

function number(
  value: unknown,
  field: string,
  min: number,
  max: number,
): number {
  if (typeof value !== "number" || !(value >= min && value <= max)) {
    throw new ValidationError(`Invalid ${field}.`);
  }
  return value;
}

// Non-negative and within Postgres int4 range
function int(value: unknown, field: string): number {
  if (!Number.isInteger(value)) throw new ValidationError(`Invalid ${field}.`);
  return number(value, field, 0, 2_147_483_647);
}

// The client compares review dates as YYYY-MM-DD strings
function isoDate(value: unknown): string {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    throw new ValidationError("Invalid nextReviewDate.");
  }
  return value;
}

function list(value: unknown, field: string): unknown[] | undefined {
  if (value === undefined) return undefined;
  if (!Array.isArray(value) || value.length > MAX_ITEMS) {
    throw new ValidationError(`Invalid ${field}.`);
  }
  return value;
}

function record(value: unknown): Record<string, unknown> {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    throw new ValidationError("Invalid item.");
  }
  return value as Record<string, unknown>;
}

function parseFavourite(item: unknown, userId: number): InsertFavourite {
  const fav = record(item);
  const type = fav.type;
  if (type !== "card" && type !== "phrase") {
    throw new ValidationError("Invalid favourite type.");
  }
  return {
    userId,
    cardId: cardId(fav.cardId),
    type,
    phraseText: type === "phrase" ? text(fav.phraseText, "phraseText") : null,
  };
}

function parsePlaybook(item: unknown, userId: number): InsertPlaybook {
  const pb = record(item);
  const cardIds = list(pb.cardIds, "cardIds");
  if (!cardIds) throw new ValidationError("Invalid cardIds.");
  return {
    userId,
    name: text(pb.name, "name") as string,
    description: text(pb.description, "description", true),
    cardIds: cardIds.map(cardId),
  };
}

function parseProgress(item: unknown, userId: number): InsertDrillProgress {
  const p = record(item);
  return {
    userId,
    cardId: cardId(p.cardId),
    interval: int(p.interval, "interval"),
    repetition: int(p.repetition, "repetition"),
    // SM-2 floor is 1.3; the client has no ceiling, so only bound sanity
    efactor: number(p.efactor, "efactor", 1.3, 1000),
    nextReviewDate: isoDate(p.nextReviewDate),
  };
}

// Backup user data (Favourites, Playbooks, and SRS Progress)
const backupHandler: RequestHandler = async (req, res): Promise<void> => {
  const userId: number = res.locals.userId;
  let favourites: InsertFavourite[] | undefined;
  let playbooks: InsertPlaybook[] | undefined;
  let srsProgress: InsertDrillProgress[] | undefined;
  try {
    // req.body is undefined when no JSON body parser matched
    const body = record(req.body);
    favourites = list(body.favourites, "favourites")?.map((f) =>
      parseFavourite(f, userId),
    );
    playbooks = list(body.playbooks, "playbooks")?.map((p) =>
      parsePlaybook(p, userId),
    );
    srsProgress = list(body.srsProgress, "srsProgress")?.map((p) =>
      parseProgress(p, userId),
    );
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(400).json({ error: error.message });
      return;
    }
    throw error;
  }

  try {
    // Replace each section atomically so a failed insert never leaves the
    // user with their previous data deleted
    await db.transaction(async (tx) => {
      if (favourites) {
        await tx
          .delete(favouritesTable)
          .where(eq(favouritesTable.userId, userId));
        if (favourites.length > 0) {
          await tx.insert(favouritesTable).values(favourites);
        }
      }
      if (playbooks) {
        await tx
          .delete(playbooksTable)
          .where(eq(playbooksTable.userId, userId));
        if (playbooks.length > 0) {
          await tx.insert(playbooksTable).values(playbooks);
        }
      }
      if (srsProgress) {
        await tx
          .delete(drillProgressTable)
          .where(eq(drillProgressTable.userId, userId));
        if (srsProgress.length > 0) {
          await tx.insert(drillProgressTable).values(srsProgress);
        }
      }
    });

    res
      .status(200)
      .json({ success: true, message: "User data backed up successfully." });
  } catch (error) {
    console.error("Sync backup failed", error);
    res.status(500).json({ error: "Failed to backup user data." });
  }
};

// Restore user data
const restoreHandler: RequestHandler = async (_req, res): Promise<void> => {
  const userId: number = res.locals.userId;

  try {
    const [favourites, playbooks, srsProgress] = await Promise.all([
      db
        .select()
        .from(favouritesTable)
        .where(eq(favouritesTable.userId, userId)),
      db.select().from(playbooksTable).where(eq(playbooksTable.userId, userId)),
      db
        .select()
        .from(drillProgressTable)
        .where(eq(drillProgressTable.userId, userId)),
    ]);

    res.status(200).json({ favourites, playbooks, srsProgress });
  } catch (error) {
    console.error("Sync restore failed", error);
    res.status(500).json({ error: "Failed to restore user data." });
  }
};

router.post("/sync/backup", requireUser, backupHandler);
router.get("/sync/restore", requireUser, restoreHandler);

export default router;
