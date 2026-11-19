import type { Plugin } from "vite";

/** Published path of the list, relative to the app base. */
export const CARD_CHUNK_LIST_FILE = "card-chunks.json";

const CARD_CHUNK = /^assets\/cards\/TC\d{3}-[^/]+\.js$/;

/**
 * Writes `card-chunks.json`: the hashed file name of every card chunk in this
 * build. "Save all cards for offline" (src/lib/offline-cards.ts) reads it to
 * put each chunk in the card-scripts cache without running the card code.
 */
export function cardChunkListPlugin(): Plugin {
  return {
    name: "tc-card-chunk-list",
    apply: "build",
    generateBundle(_options, bundle) {
      const chunks = Object.keys(bundle)
        .filter((fileName) => CARD_CHUNK.test(fileName))
        .sort();
      this.emitFile({
        type: "asset",
        fileName: CARD_CHUNK_LIST_FILE,
        source: JSON.stringify({ chunks }),
      });
    },
  };
}
