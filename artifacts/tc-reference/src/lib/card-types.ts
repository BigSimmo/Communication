export type CanonicalTone = "Quick" | "Warm" | "Professional" | "Direct" | "Repair" | "High-stakes";

export const CANONICAL_TONES: CanonicalTone[] = [
  "Quick",
  "Warm",
  "Professional",
  "Direct",
  "Repair",
  "High-stakes",
];

export interface PhraseGroup {
  id: string;
  label: string;
  tag: string;
  tone?: CanonicalTone;
  phrases: string[];
}

/**
 * A few phrase groups contain bracketed stage directions rather than lines to
 * say out loud, e.g. "[Plant feet. Pause. Continue.]". Those are reserved for
 * coach-side practice and should not appear in the spoken phrase browser.
 */
export function isSpeakablePhrase(text: string): boolean {
  return !(text.startsWith("[") && text.endsWith("]"));
}

/**
 * Resolve a tone from the current group metadata. New card content can now
 * omit explicit tone values; this keeps legacy filters stable during content
 * rewrites while enforcing canonical tone output.
 */
export function inferPhraseTone(group: PhraseGroup): CanonicalTone {
  if (group.tone && CANONICAL_TONES.includes(group.tone)) return group.tone;

  const signal = `${group.id} ${group.label} ${group.tag}`.toLowerCase();

  if (/\bprofessional\b|work|meeting|document|decision|mail|email|report|client|office|status/i.test(signal))
    return "Professional";
  if (/\brepair\b|soften|soothe|sorry|apolog|conflict|boundary|tone|no\b|decline|reject|pressur|escalat|defens/i.test(signal))
    return "Repair";
  if (/\bquick\b|starter|one-option|two-option|short|text|sms|dm\b/i.test(signal))
    return "Quick";
  if (/\bdirect\b|ask|clarif|limit|firm|clear|decide|request|say no|refuse|stop/i.test(signal))
    return "Direct";
  if (/\bwarm\b|support|validation|praise|gratitude|connection|rapport|encourage|positive|appreci/i.test(signal))
    return "Warm";

  return "Professional";
}

export interface DecisionNode {
  condition: string;
  action: string;
  phrase: string;
}

export interface LadderRow {
  weak: string;
  better: string;
  best: string;
}

export interface ScenarioEntry {
  situation: string;
  move: string;
  phrase: string;
}

export interface CardResource {
  label: string;
  description: string;
  href: string;
  type: "pdf" | "docx" | "png" | "csv";
  group: "Visual Cards" | "Written Guides" | "Practice Tools";
}

export interface CardOverview {
  coreFormula: string[];
  minimumViableMove: string;
  impact: "High" | "Medium" | "Low";
  difficulty: string;
  misuse: string;
  bestFor: string[];
}

export interface CardExample {
  without: string[];
  with: string[];
  note?: string;
}

export interface MethodStep {
  step: string;
  title: string;
  body: string;
  examples?: { label: string; text: string }[];
}

export interface DepthDialRow {
  depth: string;
  useWhen: string;
  phrase: string;
}

export interface InfluencePayoff {
  feeling: string;
  principle: string;
  gains: string[];
  whyMostFail: string[];
}

export interface MistakeRow {
  mistake: string;
  soundsLike: string;
  better: string;
}

export interface TechniqueChain {
  label: string;
  sequence: string;
  example: string[];
}

export interface RelatedTechnique {
  id: string;
  reason: string;
}

export interface FieldTip {
  headline: string;
  body: string;
  example?: string;
  dont?: string;
  do?: string;
}

export interface CardData {
  id: string;
  pdfUrl?: string;
  overview: CardOverview;
  phraseBank: PhraseGroup[];
  decisionTree: DecisionNode[];
  ladder: LadderRow[];
  scenarios: ScenarioEntry[];
  calibration: { working: string[]; adjust: string[] };
  drill: { day: string; title: string; task: string }[];
  checklist: string[];
  whyItWorks: string;
  example: CardExample;
  notFor: string[];
  resources?: CardResource[];
  whatItIsNot?: string[];
  influencePayoff?: InfluencePayoff;
  fieldTip?: FieldTip;
  method?: MethodStep[];
  liveThreadClues?: string[];
  depthDial?: DepthDialRow[];
  commonMistakes?: MistakeRow[];
  recoveryPhrases?: string[];
  bestRecoveryLine?: string;
  chains?: TechniqueChain[];
  relatedTechniques?: RelatedTechnique[];
}
