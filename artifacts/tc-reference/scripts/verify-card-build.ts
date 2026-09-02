import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

export interface ViteManifestEntry {
  file: string;
  imports?: string[];
  dynamicImports?: string[];
}

export type ViteManifest = Record<string, ViteManifestEntry>;

export interface CardBuildProof {
  cardChunkCount: number;
  cardDetailDynamicCardChunks: number;
  cardDetailRequiredFiles: string[];
  cardChunkExample: string;
  cardChunksPrecached: number;
  runtimeCache: string;
}

export function verifyCardBuildContract(
  manifest: ViteManifest,
  serviceWorkerSource: string,
  expectedCardCount = 98,
): CardBuildProof {
  const cardDetailKey = Object.keys(manifest).find((key) =>
    key.endsWith("src/pages/card-detail.tsx"),
  );
  if (!cardDetailKey) throw new Error("Card Detail is missing from the Vite manifest");

  const requiredKeys = new Set<string>();
  const visitRequiredImport = (key: string) => {
    if (requiredKeys.has(key)) return;
    const entry = manifest[key];
    if (!entry) throw new Error(`Manifest import ${key} is missing`);
    requiredKeys.add(key);
    entry.imports?.forEach(visitRequiredImport);
  };
  visitRequiredImport(cardDetailKey);

  const cardDetailRequiredFiles = Array.from(requiredKeys, (key) => manifest[key].file).sort();
  if (cardDetailRequiredFiles.some((file) => /card-data/i.test(file))) {
    throw new Error("Card Detail still requires the monolithic card-data chunk");
  }

  const cardChunkFiles = Object.entries(manifest)
    .filter(([key]) => /src\/lib\/cards\/TC\d{3}\.ts$/.test(key))
    .map(([, entry]) => entry.file)
    .sort();

  if (cardChunkFiles.length !== expectedCardCount) {
    throw new Error(
      `Expected ${expectedCardCount} individual card chunks, found ${cardChunkFiles.length}`,
    );
  }
  if (
    cardChunkFiles.some(
      (file) => !/^assets\/cards\/TC\d{3}-[A-Za-z0-9_-]{6,}\.js$/.test(file),
    )
  ) {
    throw new Error("Card chunks must use hashed assets/cards/TCxxx filenames");
  }
  if (new Set(cardChunkFiles).size !== cardChunkFiles.length) {
    throw new Error("Card modules were not emitted as unique individual chunks");
  }

  const reachableDynamicCardKeys = new Set(
    Array.from(requiredKeys).flatMap((key) =>
      (manifest[key].dynamicImports ?? []).filter((dynamicKey) =>
        /src\/lib\/cards\/TC\d{3}\.ts$/.test(dynamicKey),
      ),
    ),
  );
  if (reachableDynamicCardKeys.size !== expectedCardCount) {
    throw new Error(
      `Expected ${expectedCardCount} card chunks dynamically reachable from Card Detail, found ${reachableDynamicCardKeys.size}`,
    );
  }

  const precachedCardFiles = cardChunkFiles.filter((file) =>
    serviceWorkerSource.includes(file),
  );
  if (precachedCardFiles.length > 0) {
    throw new Error(
      `Individual card chunks must not be in the initial precache: ${precachedCardFiles[0]}`,
    );
  }
  if (!serviceWorkerSource.includes("card-scripts")) {
    throw new Error("Service worker is missing the card-scripts runtime cache");
  }

  return {
    cardChunkCount: cardChunkFiles.length,
    cardDetailDynamicCardChunks: reachableDynamicCardKeys.size,
    cardDetailRequiredFiles,
    cardChunkExample: cardChunkFiles[0],
    cardChunksPrecached: 0,
    runtimeCache: "card-scripts",
  };
}

async function main() {
  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  const outputDir = path.resolve(scriptDir, "../dist/public");
  const [manifestSource, serviceWorkerSource] = await Promise.all([
    readFile(path.join(outputDir, ".vite/manifest.json"), "utf8"),
    readFile(path.join(outputDir, "sw.js"), "utf8"),
  ]);
  const proof = verifyCardBuildContract(
    JSON.parse(manifestSource) as ViteManifest,
    serviceWorkerSource,
  );
  process.stdout.write(`CARD_BUILD_CONTRACT ${JSON.stringify(proof)}\n`);
}

const invokedPath = process.argv[1] ? pathToFileURL(path.resolve(process.argv[1])).href : "";
if (import.meta.url === invokedPath) {
  await main();
}
