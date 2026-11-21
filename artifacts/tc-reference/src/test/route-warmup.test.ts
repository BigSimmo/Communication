import { describe, expect, it } from "vitest";
import { routeToWarm } from "../lib/route-warmup";

describe("route warm-up", () => {
  it("warms a card deep link's page and card data", () => {
    expect(routeToWarm("/card/TC001", "/")).toEqual({
      kind: "card",
      cardId: "TC001",
    });
    expect(routeToWarm("/card/TC107/", "/")).toEqual({
      kind: "card",
      cardId: "TC107",
    });
  });

  it("warms the Phrase Bank", () => {
    expect(routeToWarm("/phrases", "/")).toEqual({ kind: "phrases" });
  });

  it("honours a sub-path base", () => {
    expect(routeToWarm("/tc/card/TC010", "/tc/")).toEqual({
      kind: "card",
      cardId: "TC010",
    });
    expect(routeToWarm("/tc/phrases", "/tc/")).toEqual({ kind: "phrases" });
  });

  it("leaves other routes alone", () => {
    for (const path of [
      "/",
      "/search",
      "/card/nope",
      "/card/TC001/x",
      "/drill",
    ])
      expect(routeToWarm(path, "/")).toBeNull();
  });
});
