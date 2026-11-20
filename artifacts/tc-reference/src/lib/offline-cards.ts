// "Save all cards for offline": puts every card chunk of the current build in
// the card-scripts cache, which the service worker serves CacheFirst (see
// vite.config.ts). Card downloads (PDFs etc.) stay on demand: together they
// are far larger than the cards themselves.
//
// The chunks are written to Cache Storage from the page rather than imported,
// so no card code runs and nothing is held in memory. The saved count is read
// back from the cache itself, so it is accurate for the current build.
//
// card-chunks.json always describes the newest deploy, but the open app may be
// an older build still served by the waiting-for-update service worker. Every
// list carries its build id; when it doesn't match the running app we neither
// save nor prune, and the UI asks the user to update first.

/** Must match the runtime cache name in vite.config.ts. */
export const CARD_SCRIPTS_CACHE = "card-scripts";
export const OFFLINE_CARDS_PREF_KEY = "tc-offline-all-cards";
const CHUNK_LIST_FILE = "card-chunks.json";
const CARD_CHUNK_PATH = /\/assets\/cards\/TC\d{3}-[^/]+\.js$/;
const CONCURRENCY = 4;

export interface OfflineCardsEnv {
  base: string;
  /** Build id compiled into the running app (vite.config.ts). */
  buildId: string | undefined;
  fetch: typeof fetch;
  caches: CacheStorage;
  origin: string;
}

export interface OfflineCardsStatus {
  saved: number;
  total: number;
}

export function offlineCardsSupported(): boolean {
  return (
    typeof window !== "undefined" &&
    "caches" in window &&
    typeof navigator !== "undefined" &&
    "serviceWorker" in navigator
  );
}

function defaultEnv(): OfflineCardsEnv {
  return {
    base: import.meta.env.BASE_URL,
    buildId: import.meta.env.VITE_CARD_BUILD_ID as string | undefined,
    fetch: (input, init) => globalThis.fetch(input, init),
    caches: window.caches,
    origin: window.location.origin,
  };
}

/** The server holds a newer (or older) build than the open app. */
export class OfflineCardsBuildMismatch extends Error {
  constructor() {
    super("The app needs updating before cards can be saved");
    this.name = "OfflineCardsBuildMismatch";
  }
}

/**
 * Absolute URLs of the running build's card chunks. Needs the network.
 * Throws OfflineCardsBuildMismatch when the server's list is another build's.
 */
export async function cardChunkUrls(
  env: OfflineCardsEnv = defaultEnv(),
): Promise<string[]> {
  const listUrl = new URL(`${env.base}${CHUNK_LIST_FILE}`, env.origin).href;
  const response = await env.fetch(listUrl, { cache: "no-store" });
  if (!response.ok)
    throw new Error(`Card list unavailable (${response.status})`);
  const body = (await response.json()) as {
    buildId?: unknown;
    chunks?: unknown;
  };
  if (!Array.isArray(body.chunks)) throw new Error("Card list is malformed");
  if (!env.buildId || body.buildId !== env.buildId) {
    throw new OfflineCardsBuildMismatch();
  }
  return body.chunks
    .filter((chunk): chunk is string => typeof chunk === "string")
    .map((chunk) => new URL(`${env.base}${chunk}`, env.origin).href);
}

async function cachedSet(cache: Cache): Promise<Set<string>> {
  return new Set((await cache.keys()).map((request) => request.url));
}

/** How many of this build's cards are in the cache. */
export async function offlineCardsStatus(
  env: OfflineCardsEnv = defaultEnv(),
): Promise<OfflineCardsStatus> {
  const urls = await cardChunkUrls(env);
  const cached = await cachedSet(await env.caches.open(CARD_SCRIPTS_CACHE));
  return {
    saved: urls.filter((url) => cached.has(url)).length,
    total: urls.length,
  };
}

/**
 * Cache every card chunk not yet saved, then drop chunks from older builds.
 * A failed chunk is skipped, not fatal; the returned count says what stuck.
 */
export async function saveAllCards(
  onProgress: (status: OfflineCardsStatus) => void = () => {},
  env: OfflineCardsEnv = defaultEnv(),
): Promise<OfflineCardsStatus> {
  const urls = await cardChunkUrls(env);
  const cache = await env.caches.open(CARD_SCRIPTS_CACHE);
  const cached = await cachedSet(cache);
  const current = new Set(urls);
  const pending = urls.filter((url) => !cached.has(url));
  let saved = urls.length - pending.length;
  onProgress({ saved, total: urls.length });

  let next = 0;
  const worker = async () => {
    while (next < pending.length) {
      const url = pending[next++];
      try {
        const response = await env.fetch(url);
        if (!response.ok) continue;
        await cache.put(url, response);
        saved += 1;
        onProgress({ saved, total: urls.length });
      } catch {
        // Offline mid-save or a flaky chunk: leave it for the next run.
      }
    }
  };
  await Promise.all(
    Array.from({ length: Math.min(CONCURRENCY, pending.length) }, worker),
  );

  // The list matched the running build, so chunks outside it belong to older
  // builds and are never requested again.
  for (const url of cached) {
    if (CARD_CHUNK_PATH.test(new URL(url).pathname) && !current.has(url)) {
      await cache.delete(url);
    }
  }
  return { saved, total: urls.length };
}

export function readOfflineCardsPref(): boolean {
  try {
    return localStorage.getItem(OFFLINE_CARDS_PREF_KEY) === "1";
  } catch {
    return false;
  }
}

export function writeOfflineCardsPref(enabled: boolean) {
  try {
    if (enabled) localStorage.setItem(OFFLINE_CARDS_PREF_KEY, "1");
    else localStorage.removeItem(OFFLINE_CARDS_PREF_KEY);
  } catch {
    // Storage blocked: the save still happens, it just won't repeat itself.
  }
}

/**
 * After an app update the card chunks get new names. If the user asked for
 * all cards offline, quietly fetch the new ones in the background.
 */
export function refreshOfflineCardsInBackground() {
  if (!offlineCardsSupported() || !readOfflineCardsPref() || !navigator.onLine)
    return;
  const run = () => {
    void saveAllCards().catch(() => {});
  };
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(run, { timeout: 10_000 });
  } else {
    setTimeout(run, 3_000);
  }
}
