import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import type { Plugin } from "vite";
import type { CardData } from "./src/lib/card-types";
import { projectCardText } from "./src/lib/card-text-index-build";

const VIRTUAL_ID = "virtual:card-text-index";
const RESOLVED_ID = "\0" + VIRTUAL_ID;

/**
 * Builds `virtual:card-text-index`: the search / phrase text of every card
 * as one small module. The app imports it dynamically, so it becomes its own
 * chunk that the service worker precaches with the app shell (card chunks
 * themselves stay runtime-cached). Card sources are loaded with Node's
 * TypeScript type stripping; they only use type imports.
 */
export function cardTextIndexPlugin(cardsDir: string): Plugin {
  return {
    name: "tc-card-text-index",
    resolveId(id) {
      return id === VIRTUAL_ID ? RESOLVED_ID : undefined;
    },
    async load(id) {
      if (id !== RESOLVED_ID) return undefined;
      const files = (await readdir(cardsDir))
        .filter((file) => /^TC\d{3}\.ts$/.test(file))
        .sort();
      const index: Record<string, unknown> = {};
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
      // JSON.parse of a string literal parses faster than an object literal.
      return `export default JSON.parse(${JSON.stringify(JSON.stringify(index))});`;
    },
  };
}
