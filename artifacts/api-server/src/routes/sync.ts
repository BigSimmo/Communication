import { Router, Request, Response, RequestHandler } from "express";
import {
  db,
  favouritesTable,
  playbooksTable,
  drillProgressTable,
} from "@workspace/db";
import { eq } from "drizzle-orm";

const router = Router();

// Backup user data (Favourites, Playbooks, and SRS Progress)
const backupHandler: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { userId, favourites, playbooks, srsProgress } = req.body;

  if (!userId) {
    res.status(400).json({ error: "Missing userId in request body." });
    return;
  }

  try {
    // 1. Sync Favourites
    if (Array.isArray(favourites)) {
      await db
        .delete(favouritesTable)
        .where(eq(favouritesTable.userId, userId));
      if (favourites.length > 0) {
        await db.insert(favouritesTable).values(
          favourites.map((fav: any) => ({
            userId,
            cardId: fav.cardId,
            type: fav.type,
            phraseText: fav.phraseText,
          })),
        );
      }
    }

    // 2. Sync Playbooks
    if (Array.isArray(playbooks)) {
      await db.delete(playbooksTable).where(eq(playbooksTable.userId, userId));
      if (playbooks.length > 0) {
        await db.insert(playbooksTable).values(
          playbooks.map((pb: any) => ({
            userId,
            name: pb.name,
            description: pb.description,
            cardIds: pb.cardIds,
          })),
        );
      }
    }

    // 3. Sync SRS Progress
    if (Array.isArray(srsProgress)) {
      await db
        .delete(drillProgressTable)
        .where(eq(drillProgressTable.userId, userId));
      if (srsProgress.length > 0) {
        await db.insert(drillProgressTable).values(
          srsProgress.map((p: any) => ({
            userId,
            cardId: p.cardId,
            interval: p.interval,
            repetition: p.repetition,
            efactor: p.efactor,
            nextReviewDate: p.nextReviewDate,
          })),
        );
      }
    }

    res
      .status(200)
      .json({ success: true, message: "User data backed up successfully." });
    return;
  } catch (error: any) {
    res
      .status(500)
      .json({ error: error.message || "Failed to backup user data." });
    return;
  }
};

// Restore user data
const restoreHandler: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const userIdStr = req.params.userId;
  const userId = parseInt(
    Array.isArray(userIdStr) ? userIdStr[0] : userIdStr,
    10,
  );

  if (isNaN(userId)) {
    res.status(400).json({ error: "Invalid userId parameter." });
    return;
  }

  try {
    const favourites = await db
      .select()
      .from(favouritesTable)
      .where(eq(favouritesTable.userId, userId));

    const playbooks = await db
      .select()
      .from(playbooksTable)
      .where(eq(playbooksTable.userId, userId));

    const srsProgress = await db
      .select()
      .from(drillProgressTable)
      .where(eq(drillProgressTable.userId, userId));

    res.status(200).json({
      favourites,
      playbooks,
      srsProgress,
    });
    return;
  } catch (error: any) {
    res
      .status(500)
      .json({ error: error.message || "Failed to restore user data." });
    return;
  }
};

router.post("/sync/backup", backupHandler);
router.get("/sync/restore/:userId", restoreHandler);

export default router;
