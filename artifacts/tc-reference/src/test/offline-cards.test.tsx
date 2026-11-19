import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  CARD_SCRIPTS_CACHE,
  OFFLINE_CARDS_PREF_KEY,
  offlineCardsStatus,
  saveAllCards,
  type OfflineCardsEnv,
} from "../lib/offline-cards";
import { OfflineCardsSection } from "../components/offline-cards-section";

const ORIGIN = "https://tc.example";

/** Minimal in-memory Cache Storage keyed by URL. */
function fakeCaches() {
  const stores = new Map<string, Map<string, Response>>();
  const open = async (name: string) => {
    const store = stores.get(name) ?? new Map<string, Response>();
    stores.set(name, store);
    return {
      keys: async () => Array.from(store.keys(), (url) => new Request(url)),
      put: async (url: string, response: Response) => {
        store.set(url, response);
      },
      delete: async (url: string) => store.delete(url),
    } as unknown as Cache;
  };
  return { caches: { open } as unknown as CacheStorage, stores };
}

/** `failing` holds chunk paths (e.g. assets/cards/TC002-…js) that 503. */
function fakeFetch(chunks: string[], failing = new Set<string>()) {
  return vi.fn(async (input: RequestInfo | URL) => {
    const url = String(input);
    if (url.endsWith("/card-chunks.json")) {
      return new Response(JSON.stringify({ chunks }), { status: 200 });
    }
    if (failing.has(new URL(url).pathname.slice(1)))
      return new Response("nope", { status: 503 });
    return new Response("export const X = {};", { status: 200 });
  });
}

function envFor(
  chunks: string[],
  options: { failing?: Set<string> } = {},
): OfflineCardsEnv & { stores: Map<string, Map<string, Response>> } {
  const { caches, stores } = fakeCaches();
  return {
    base: "/",
    origin: ORIGIN,
    caches,
    fetch: fakeFetch(chunks, options.failing) as unknown as typeof fetch,
    stores,
  };
}

const CHUNKS = [
  "assets/cards/TC001-aaaaaa.js",
  "assets/cards/TC002-bbbbbb.js",
  "assets/cards/TC003-cccccc.js",
];
const url = (chunk: string) => `${ORIGIN}/${chunk}`;

describe("saveAllCards", () => {
  it("caches every card chunk and reports progress", async () => {
    const env = envFor(CHUNKS);
    const progress: number[] = [];
    const result = await saveAllCards((s) => progress.push(s.saved), env);

    expect(result).toEqual({ saved: 3, total: 3 });
    expect(progress.at(0)).toBe(0);
    expect(progress.at(-1)).toBe(3);
    expect([...env.stores.get(CARD_SCRIPTS_CACHE)!.keys()].sort()).toEqual(
      CHUNKS.map(url),
    );
  });

  it("skips chunks already cached and removes chunks from older builds", async () => {
    const env = envFor(CHUNKS);
    const cache = await env.caches.open(CARD_SCRIPTS_CACHE);
    await cache.put(url(CHUNKS[0]), new Response("cached"));
    await cache.put(url("assets/cards/TC002-oldold.js"), new Response("old"));
    await cache.put(`${ORIGIN}/other.js`, new Response("kept"));

    const result = await saveAllCards(undefined, env);

    expect(result).toEqual({ saved: 3, total: 3 });
    // The list plus the two missing chunks; TC001 was not fetched again.
    expect(env.fetch).toHaveBeenCalledTimes(3);
    const keys = [...env.stores.get(CARD_SCRIPTS_CACHE)!.keys()].sort();
    expect(keys).toEqual([...CHUNKS.map(url), `${ORIGIN}/other.js`].sort());
  });

  it("counts only chunks that actually saved", async () => {
    const env = envFor(CHUNKS, { failing: new Set([CHUNKS[1]]) });
    expect(await saveAllCards(undefined, env)).toEqual({ saved: 2, total: 3 });
    expect(await offlineCardsStatus(env)).toEqual({ saved: 2, total: 3 });
  });

  it("throws when the card list cannot be fetched", async () => {
    const env = envFor(CHUNKS);
    env.fetch = vi.fn(
      async () => new Response("", { status: 404 }),
    ) as unknown as typeof fetch;
    await expect(saveAllCards(undefined, env)).rejects.toThrow(/Card list/);
  });
});

describe("OfflineCardsSection", () => {
  let env: ReturnType<typeof envFor>;
  const originalCaches = Object.getOwnPropertyDescriptor(window, "caches");
  const originalSw = Object.getOwnPropertyDescriptor(
    navigator,
    "serviceWorker",
  );

  beforeEach(() => {
    localStorage.clear();
    env = envFor(CHUNKS);
    Object.defineProperty(window, "caches", {
      configurable: true,
      value: env.caches,
    });
    Object.defineProperty(navigator, "serviceWorker", {
      configurable: true,
      value: {},
    });
    vi.stubGlobal("fetch", env.fetch);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    if (originalCaches) Object.defineProperty(window, "caches", originalCaches);
    else delete (window as { caches?: unknown }).caches;
    if (originalSw)
      Object.defineProperty(navigator, "serviceWorker", originalSw);
    else delete (navigator as { serviceWorker?: unknown }).serviceWorker;
  });

  it("saves every card, remembers the choice and says so", async () => {
    await act(async () => {
      render(<OfflineCardsSection />);
    });
    const button = screen.getByTestId("offline-cards-save");
    expect(button).toHaveTextContent("Save all cards for offline");

    await act(async () => {
      fireEvent.click(button);
    });

    expect(screen.getByTestId("offline-cards-message")).toHaveTextContent(
      "All 3 cards are saved on this device",
    );
    expect(button).toHaveTextContent("All cards saved");
    expect(button).toBeDisabled();
    expect(localStorage.getItem(OFFLINE_CARDS_PREF_KEY)).toBe("1");
  });

  it("shows a partial save and offers a retry", async () => {
    vi.stubGlobal("fetch", fakeFetch(CHUNKS, new Set([CHUNKS[2]])));
    await act(async () => {
      render(<OfflineCardsSection />);
    });
    await act(async () => {
      fireEvent.click(screen.getByTestId("offline-cards-save"));
    });
    expect(screen.getByTestId("offline-cards-message")).toHaveTextContent(
      "Saved 2 of 3 cards. Check your connection and try again.",
    );
    expect(screen.getByTestId("offline-cards-save")).toHaveTextContent(
      "Try again",
    );
  });

  it("explains when the browser cannot save cards", async () => {
    delete (window as { caches?: unknown }).caches;
    await act(async () => {
      render(<OfflineCardsSection />);
    });
    expect(screen.getByTestId("offline-cards-message")).toHaveTextContent(
      "This browser can't save cards for offline use.",
    );
    expect(screen.queryByTestId("offline-cards-save")).toBeNull();
  });
});
