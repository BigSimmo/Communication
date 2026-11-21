declare module "virtual:card-text-index" {
  import type { CardTextIndex } from "./lib/card-text-index-build";
  /** Null where the build plugin is absent (unit tests). */
  const index: CardTextIndex | null;
  export default index;
}

declare module "virtual:phrase-bank-summary" {
  /**
   * Phrase Bank totals computed at build time from the same text index, so
   * the page can paint its intro before the index chunk loads. Null where
   * the build plugin is absent (unit tests).
   */
  const summary: { phraseCount: number } | null;
  export default summary;
}
