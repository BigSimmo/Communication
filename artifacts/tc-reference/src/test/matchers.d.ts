import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";
import "vitest";

// Vitest 5 separates matcher return types from received values. Extend its
// shared matcher interface so sync, async, and asymmetric assertions agree.
declare module "vitest" {
  // Declaration merging requires an interface to add the existing matcher API.
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Matchers<
    R extends void | Promise<void>,
    T,
  > extends TestingLibraryMatchers<T, R> {}
}
