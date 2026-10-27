declare module "virtual:card-text-index" {
  import type { CardTextIndex } from "./lib/card-text-index-build";
  /** Null where the build plugin is absent (unit tests). */
  const index: CardTextIndex | null;
  export default index;
}
