import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import type { Plugin } from "vite";
import type { CardData } from "./src/lib/card-types";
import {
  projectCardText,
  type CardTextEntry,
} from "./src/lib/card-text-index-build";
import { aggregatePhrases } from "./src/lib/phrase-aggregate";

const VIRTUAL_ID = "virtual:card-text-index";
const RESOLVED_ID = "\0" + VIRTUAL_ID;
const SUMMARY_ID = "virtual:phrase-bank-summary";
const RESOLVED_SUMMARY_ID = "\0" + SUMMARY_ID;

/** The totals in `virtual:phrase-bank-summary`, from the same aggregation. */
export function phraseBankSummary(index: Record<string, CardTextEntry>): {
  phraseCount: number;
} {
  // Titles do not affect the count.
  return { phraseCount: aggregatePhrases(index, (cardId) => cardId).length };
}

/**
 * Builds `virtual:card-text-index`: the search / phrase text of every card
 * as one small module. The app imports it dynamically, so it becomes its own
 * chunk that the service worker precaches with the app shell (card chunks
 * themselves stay runtime-cached). Card sources are loaded with Node's
 * TypeScript type stripping; they only use type imports.
 *
 * Also builds `virtual:phrase-bank-summary`, a few bytes of totals the Phrase
 * Bank imports statically so its intro paints before the index arrives.
 */
export function cardTextIndexPlugin(cardsDir: string): Plugin {
  return {
    name: "tc-card-text-index",
    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_ID;
      if (id === SUMMARY_ID) return RESOLVED_SUMMARY_ID;
      return undefined;
    },
    async load(id) {
      if (id !== RESOLVED_ID && id !== RESOLVED_SUMMARY_ID) return undefined;
      const files = (await readdir(cardsDir))
        .filter((file) => /^TC\d{3}\.ts$/.test(file))
        .sort();
      const index: Record<string, CardTextEntry> = {};
      for (const file of files) {
        const fullPath = path.join(cardsDir, file);
        this.addWatchFile(fullPath);
        const { mtimeMs } = await stat(fullPath);
        // The query busts Node's module cache when a card changes in dev.
        const url = `${pathToFileURL(fullPath).href}?v=${mtimeMs}`;
        const cardId = file.slice(0, -3);
        const card = (await import(url))[cardId] as CardData | undefined;
        if (!card) throw new Error(`${file} does not export ${cardId}`);
        index[cardId] = projectCardText(card);
      }
      if (id === RESOLVED_SUMMARY_ID) {
        return `export default ${JSON.stringify(phraseBankSummary(index))};`;
      }
      // JSON.parse of a string literal parses faster than an object literal.
      return `export default JSON.parse(${JSON.stringify(JSON.stringify(index))});`;
    },
  };
}
