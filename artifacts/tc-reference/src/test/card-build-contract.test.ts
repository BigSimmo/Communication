import { describe, expect, it } from "vitest";
import { verifyCardBuildContract } from "../../scripts/verify-card-build";

const splitManifest = {
  "src/pages/card-detail.tsx": {
    file: "assets/card-detail-route.js",
    imports: ["_shared.js"],
    dynamicImports: ["src/lib/cards/TC001.ts", "src/lib/cards/TC002.ts"],
  },
  "_shared.js": { file: "assets/shared.js" },
  "src/lib/cards/TC001.ts": { file: "assets/cards/TC001-a1b2c3.js" },
  "src/lib/cards/TC002.ts": { file: "assets/cards/TC002-d4e5f6.js" },
};

const cardScriptCacheRoute =
  'registerRoute(/\\/assets\\/cards\\/TC\\d{3}-[^/]+\\.js$/,new Workbox.CacheFirst({cacheName:"card-scripts"}))';

describe("individual-card production build contract", () => {
  it("accepts independently cached card chunks outside the precache", () => {
    expect(
      verifyCardBuildContract(
        splitManifest,
        `${cardScriptCacheRoute} precacheAndRoute([{url:"assets/shared.js"}])`,
        2,
      ),
    ).toMatchObject({
      cardChunkCount: 2,
      cardDetailRequiredFiles: [
        "assets/card-detail-route.js",
        "assets/shared.js",
      ],
    });
  });

  it("rejects a production-reachable static aggregate regardless of its filename", () => {
    const monolithicManifest = {
      ...splitManifest,
      "_shared.js": {
        file: "assets/renamed-shared-deadbeef.js",
      },
    };

    expect(() =>
      verifyCardBuildContract(monolithicManifest, cardScriptCacheRoute, 2, {
        "assets/renamed-shared-deadbeef.js": "x".repeat(500 * 1024 + 1),
      }),
    ).toThrow(/production-reachable static aggregate/i);
  });

  it("rejects precached card chunks", () => {
    expect(() =>
      verifyCardBuildContract(
        splitManifest,
        `${cardScriptCacheRoute} precacheAndRoute([{url:"assets/cards/TC001-a1b2c3.js"}])`,
        2,
      ),
    ).toThrow(/precache/i);
  });

  it("requires a CacheFirst route for the card-script cache", () => {
    expect(() =>
      verifyCardBuildContract(splitManifest, 'cacheName:"card-scripts"', 2),
    ).toThrow(/CacheFirst/i);
  });

  it("requires the card-script cache route to match individual card assets", () => {
    expect(() =>
      verifyCardBuildContract(
        splitManifest,
        'registerRoute(/\\/assets\\/cards\\/.*\\.js$/,new Workbox.CacheFirst({cacheName:"card-scripts"}))',
        2,
      ),
    ).toThrow(/URL matcher/i);
  });

  it("rejects card chunks that are not dynamically reachable from Card Detail", () => {
    const unreachableManifest = {
      ...splitManifest,
      "src/pages/card-detail.tsx": {
        file: "assets/card-detail-route.js",
        imports: ["_shared.js"],
      },
    };

    expect(() =>
      verifyCardBuildContract(
        unreachableManifest,
        'cacheName:"card-scripts"',
        2,
      ),
    ).toThrow(/dynamically reachable/i);
  });
});
