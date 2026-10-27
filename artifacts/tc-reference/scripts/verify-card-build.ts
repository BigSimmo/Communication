import { readFile, readdir } from "node:fs/promises";
import { gzipSync } from "node:zlib";
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

export type BuildFileContents = Record<string, string | Uint8Array | undefined>;

const MAX_STATIC_CARD_AGGREGATE_BYTES = 500 * 1024;

const CARD_SCRIPT_CACHE_FIRST_ROUTE =
  /registerRoute\(\s*\/\\\/assets\\\/cards\\\/TC\\d\{3\}-\[\^\/]\+\\\.js\$\/\s*,\s*new\s+[\w$.]+\.CacheFirst\(\s*\{[^}]*\bcacheName\s*:\s*["']card-scripts["']/;

const CARD_SCRIPT_CACHE_FIRST =
  /new\s+[\w$.]+\.CacheFirst\(\s*\{[^}]*\bcacheName\s*:\s*["']card-scripts["']/;

function byteLength(source: string | Uint8Array): number {
  return typeof source === "string"
    ? Buffer.byteLength(source)
    : source.byteLength;
}

export function verifyCardBuildContract(
  manifest: ViteManifest,
  serviceWorkerSource: string,
  expectedCardCount = 107,
  buildFiles?: BuildFileContents,
): CardBuildProof {
  const cardDetailKey = Object.keys(manifest).find((key) =>
    key.endsWith("src/pages/card-detail.tsx"),
  );
  if (!cardDetailKey)
    throw new Error("Card Detail is missing from the Vite manifest");

  const requiredKeys = new Set<string>();
  const visitRequiredImport = (key: string) => {
    if (requiredKeys.has(key)) return;
    const entry = manifest[key];
    if (!entry) throw new Error(`Manifest import ${key} is missing`);
    requiredKeys.add(key);
    entry.imports?.forEach(visitRequiredImport);
  };
  visitRequiredImport(cardDetailKey);

  const cardDetailRequiredFiles = Array.from(
    requiredKeys,
    (key) => manifest[key].file,
  ).sort();
  const oversizedStaticAggregate = cardDetailRequiredFiles.find((file) => {
    const source = buildFiles?.[file];
    return (
      source !== undefined &&
      byteLength(source) > MAX_STATIC_CARD_AGGREGATE_BYTES
    );
  });
  if (oversizedStaticAggregate) {
    throw new Error(
      `Card Detail requires production-reachable static aggregate ${oversizedStaticAggregate} above ${MAX_STATIC_CARD_AGGREGATE_BYTES} decoded bytes`,
    );
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
    throw new Error(
      "Card modules were not emitted as unique individual chunks",
    );
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
  if (!CARD_SCRIPT_CACHE_FIRST.test(serviceWorkerSource)) {
    throw new Error(
      "Service worker must use CacheFirst for the card-scripts runtime cache",
    );
  }
  if (!CARD_SCRIPT_CACHE_FIRST_ROUTE.test(serviceWorkerSource)) {
    throw new Error(
      "Service worker card-scripts CacheFirst route must use the individual card asset URL matcher",
    );
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

/** Upper bound for the precached offline text index (decoded bytes). */
export const MAX_TEXT_INDEX_BYTES = 1024 * 1024;

export interface TextIndexProof {
  file: string;
  bytes: number;
  gzipBytes: number;
  precached: true;
}

/**
 * The card text index (search / Phrase Bank / Quick Lookup offline data)
 * must be emitted once, be precached by the service worker, and stay small.
 */
export function verifyOfflineTextIndex(
  assetFiles: string[],
  serviceWorkerSource: string,
  readAsset: (file: string) => Uint8Array,
): TextIndexProof {
  const indexFiles = assetFiles.filter((file) =>
    /^assets\/card-text-data-[A-Za-z0-9_-]{6,}\.js$/.test(file),
  );
  if (indexFiles.length !== 1) {
    throw new Error(
      `Expected exactly one card text index chunk, found ${indexFiles.length}`,
    );
  }
  const [file] = indexFiles;
  if (!serviceWorkerSource.includes(file)) {
    throw new Error(`Card text index ${file} must be in the precache`);
  }
  const source = readAsset(file);
  if (source.byteLength > MAX_TEXT_INDEX_BYTES) {
    throw new Error(
      `Card text index ${file} is ${source.byteLength} bytes, above ${MAX_TEXT_INDEX_BYTES}`,
    );
  }
  return {
    file,
    bytes: source.byteLength,
    gzipBytes: gzipSync(source).byteLength,
    precached: true,
  };
}

async function main() {
  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  const outputDir = path.resolve(scriptDir, "../dist/public");
  const [manifestSource, serviceWorkerSource] = await Promise.all([
    readFile(path.join(outputDir, ".vite/manifest.json"), "utf8"),
    readFile(path.join(outputDir, "sw.js"), "utf8"),
  ]);
  const manifest = JSON.parse(manifestSource) as ViteManifest;
  const buildFiles = Object.fromEntries(
    await Promise.all(
      Array.from(
        new Set(Object.values(manifest).map((entry) => entry.file)),
        async (file) =>
          [file, await readFile(path.join(outputDir, file))] as const,
      ),
    ),
  );
  const proof = verifyCardBuildContract(
    manifest,
    serviceWorkerSource,
    107,
    buildFiles,
  );
  process.stdout.write(`CARD_BUILD_CONTRACT ${JSON.stringify(proof)}\n`);

  const assetFiles = (await readdir(path.join(outputDir, "assets"))).map(
    (name) => `assets/${name}`,
  );
  const indexSources = new Map(
    await Promise.all(
      assetFiles
        .filter((file) => file.includes("card-text-data"))
        .map(
          async (file) =>
            [file, await readFile(path.join(outputDir, file))] as const,
        ),
    ),
  );
  const textIndex = verifyOfflineTextIndex(
    assetFiles,
    serviceWorkerSource,
    (file) => indexSources.get(file) ?? new Uint8Array(),
  );
  process.stdout.write(`CARD_TEXT_INDEX ${JSON.stringify(textIndex)}\n`);
}

const invokedPath = process.argv[1]
  ? pathToFileURL(path.resolve(process.argv[1])).href
  : "";
if (import.meta.url === invokedPath) {
  await main();
}
