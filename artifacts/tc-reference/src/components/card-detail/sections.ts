// Card page sections, shared by the page and its sticky section nav.
export type CardSection =
  | "overview"
  | "why"
  | "method"
  | "phrases"
  | "ladder"
  | "inpractice"
  | "tree"
  | "scenarios"
  | "chains"
  | "calibration"
  | "mistakes"
  | "recovery"
  | "practice"
  | "checklist"
  | "related"
  | "resources";

export const SECTIONS: { id: CardSection; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "why", label: "Why it works" },
  { id: "method", label: "Method" },
  { id: "phrases", label: "Phrases" },
  { id: "ladder", label: "Ladder" },
  { id: "inpractice", label: "In practice" },
  { id: "tree", label: "Decision tree" },
  { id: "scenarios", label: "Scenarios" },
  { id: "chains", label: "Chains" },
  { id: "calibration", label: "Calibration" },
  { id: "mistakes", label: "Mistakes" },
  { id: "recovery", label: "Recovery" },
  { id: "practice", label: "Practice" },
  { id: "checklist", label: "Checklist" },
  { id: "related", label: "Related" },
  { id: "resources", label: "Downloads" },
];
