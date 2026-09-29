// Small, dependency-free shape checks for data read back from localStorage.
// Stored values can be anything: hand-edited, written by an older build, or
// truncated. Each loader parses defensively with these helpers, keeping valid
// entries and dropping or defaulting the rest, so a bad value can never crash
// a render or poison arithmetic (e.g. NaN intervals in the SRS maths).

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function isFiniteNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

export function isIntegerInRange(
  value: unknown,
  min: number,
  max: number,
): value is number {
  return (
    Number.isInteger(value) && Number(value) >= min && Number(value) <= max
  );
}

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

/** A calendar date in YYYY-MM-DD form (the format every stored date uses). */
export function isISODate(value: unknown): value is string {
  if (typeof value !== "string" || !ISO_DATE.test(value)) return false;
  const [y, m, d] = value.split("-").map(Number);
  if (m < 1 || m > 12 || d < 1) return false;
  // Day 0 of the next month is the last day of month m.
  return d <= new Date(Date.UTC(y, m, 0)).getUTCDate();
}

/** Keeps only the string entries of an array; anything else yields []. */
export function sanitiseStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((v): v is string => typeof v === "string");
}

/** JSON.parse that returns undefined instead of throwing. */
export function safeParseJSON(raw: string): unknown {
  try {
    return JSON.parse(raw);
  } catch {
    return undefined;
  }
}
