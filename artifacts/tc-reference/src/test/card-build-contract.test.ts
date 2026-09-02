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

describe("individual-card production build contract", () => {
  it("accepts independently cached card chunks outside the precache", () => {
    expect(
      verifyCardBuildContract(
        splitManifest,
        'cacheName:"card-scripts" precacheAndRoute([{url:"assets/shared.js"}])',
        2,
      ),
    ).toMatchObject({
      cardChunkCount: 2,
      cardDetailRequiredFiles: ["assets/card-detail-route.js", "assets/shared.js"],
    });
  });

  it("rejects a monolithic card-data dependency or precached card chunk", () => {
    const monolithicManifest = {
      ...splitManifest,
      "_shared.js": {
        file: "assets/card-data-deadbeef.js",
      },
    };

    expect(() =>
      verifyCardBuildContract(monolithicManifest, 'cacheName:"card-scripts"', 2),
    ).toThrow(/monolithic card-data/i);

    expect(() =>
      verifyCardBuildContract(
        splitManifest,
        'cacheName:"card-scripts" precacheAndRoute([{url:"assets/cards/TC001-a1b2c3.js"}])',
        2,
      ),
    ).toThrow(/precache/i);
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
      verifyCardBuildContract(unreachableManifest, 'cacheName:"card-scripts"', 2),
    ).toThrow(/dynamically reachable/i);
  });
});
