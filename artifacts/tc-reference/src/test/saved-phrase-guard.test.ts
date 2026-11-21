import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { CARD_DATA, type CardData } from "@/lib/cards";
import { REPHRASED } from "@/lib/favourites-state";

/**
 * Saved phrases are stored as (cardId, exact text). If a card's wording
 * changes, a phrase someone saved silently stops matching that card. This
 * guard keeps a committed list of hashes of every saveable phrase and fails
 * when one disappears without being accounted for.
 *
 * When it fails:
 *  - Reworded a phrase: add REPHRASED[cardId]["old text"] = "new text" in
 *    src/lib/favourites-state.ts (saved copies then follow the new wording).
 *  - Removed a phrase on purpose: add its hash, as printed, to "retired" in
 *    the snapshot file.
 * Then refresh the snapshot (it refuses while anything is unaccounted for):
 *   UPDATE_PHRASE_SNAPSHOT=1 pnpm --filter @workspace/tc-reference exec \
 *     vitest run src/test/saved-phrase-guard.test.ts
 * and commit saved-phrase-snapshot.json. New phrases need only the refresh.
 */

const SNAPSHOT_PATH = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "fixtures",
  "saved-phrase-snapshot.json",
);

const README =
  "Hashes of every phrase a person can save, per card. See src/test/saved-phrase-guard.test.ts before editing.";

interface Snapshot {
  readme: string;
  retired: string[];
  phrases: Record<string, string[]>;
}

function phraseHash(cardId: string, text: string): string {
  return createHash("sha256")
    .update(`${cardId}\u0000${text}`)
    .digest("hex")
    .slice(0, 12);
}

/** Every text a heart button can save, matching the card detail sections. */
function saveableTexts(card: CardData): string[] {
  return [
    ...card.phraseBank.flatMap((g) => g.phrases),
    ...card.ladder.map((row) => row.best),
    ...card.scenarios.map((s) => s.phrase),
    ...(card.recoveryPhrases ?? []),
  ];
}

function currentHashes(): Record<string, string[]> {
  const out: Record<string, string[]> = {};
  for (const cardId of Object.keys(CARD_DATA).sort()) {
    const hashes = new Set(
      saveableTexts(CARD_DATA[cardId]).map((t) => phraseHash(cardId, t)),
    );
    out[cardId] = [...hashes].sort();
  }
  return out;
}

function readSnapshot(): Snapshot {
  return JSON.parse(readFileSync(SNAPSHOT_PATH, "utf8")) as Snapshot;
}

/** Snapshot entries that are gone and not covered by REPHRASED or retired. */
function unaccountedPhrases(
  snapshot: Snapshot,
  current: Record<string, string[]>,
  rephrased: typeof REPHRASED,
): { cardId: string; hash: string }[] {
  const covered = new Set(snapshot.retired);
  for (const [cardId, map] of Object.entries(rephrased)) {
    for (const oldText of Object.keys(map)) {
      covered.add(phraseHash(cardId, oldText));
    }
  }
  const missing: { cardId: string; hash: string }[] = [];
  for (const [cardId, hashes] of Object.entries(snapshot.phrases)) {
    const now = new Set(current[cardId] ?? []);
    for (const hash of hashes) {
      if (!now.has(hash) && !covered.has(hash)) missing.push({ cardId, hash });
    }
  }
  return missing;
}

function failureMessage(missing: { cardId: string; hash: string }[]): string {
  const lines = missing.map((m) => `  ${m.cardId}  ${m.hash}`);
  return [
    `${missing.length} saveable phrase(s) disappeared from the cards. People who saved them would lose them from Saved.`,
    ...lines,
    "",
    "Find the change with `git diff` on the card file, then for each one:",
    '  - reworded: add REPHRASED[cardId]["old text"] = "new text" in src/lib/favourites-state.ts',
    '  - removed on purpose: add the hash to "retired" in src/test/fixtures/saved-phrase-snapshot.json',
    "Then refresh the snapshot: UPDATE_PHRASE_SNAPSHOT=1 pnpm --filter @workspace/tc-reference exec vitest run src/test/saved-phrase-guard.test.ts",
  ].join("\n");
}

describe("saved phrase guard", () => {
  it("every saved phrase still matches its card, or has a REPHRASED/retired entry", () => {
    const current = currentHashes();
    const snapshot = readSnapshot();
    const missing = unaccountedPhrases(snapshot, current, REPHRASED);
    if (missing.length > 0) throw new Error(failureMessage(missing));

    if (process.env.UPDATE_PHRASE_SNAPSHOT === "1") {
      const next: Snapshot = { readme: README, retired: [], phrases: current };
      writeFileSync(SNAPSHOT_PATH, `${JSON.stringify(next, null, 2)}\n`);
    }
  });

  // Older REPHRASED targets were themselves rewritten later (before this
  // guard existed), so only the card ids are checked, not the targets.
  it("REPHRASED only names cards that exist", () => {
    for (const cardId of Object.keys(REPHRASED)) {
      expect(CARD_DATA[cardId], `unknown card ${cardId}`).toBeDefined();
    }
  });

  it("flags a removed phrase until it is rephrased or retired", () => {
    const snapshot: Snapshot = {
      readme: README,
      retired: [],
      phrases: {
        TC900: [phraseHash("TC900", "Kept."), phraseHash("TC900", "Gone.")],
      },
    };
    const current = { TC900: [phraseHash("TC900", "Kept.")] };

    expect(unaccountedPhrases(snapshot, current, {})).toEqual([
      { cardId: "TC900", hash: phraseHash("TC900", "Gone.") },
    ]);
    expect(
      unaccountedPhrases(snapshot, current, { TC900: { "Gone.": "Kept." } }),
    ).toEqual([]);
    expect(
      unaccountedPhrases(
        { ...snapshot, retired: [phraseHash("TC900", "Gone.")] },
        current,
        {},
      ),
    ).toEqual([]);
    expect(failureMessage([{ cardId: "TC900", hash: "abc" }])).toMatch(
      /REPHRASED.*favourites-state\.ts[\s\S]*retired[\s\S]*UPDATE_PHRASE_SNAPSHOT=1/,
    );
  });
});
