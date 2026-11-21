// "Help me right now" situation map: the picker shows these nine situations,
// and each answer screen leads with one technique, three lines to say, one
// follow-on step and one thing to avoid.
//
// Light data only. Like ./data.ts, this module must never import from ./cards,
// so the picker can render without loading the heavy card content.
//
// Every spoken line, follow-on line and avoid note is copied word for word
// from the named card's existing text (content-invariants test
// `situations.test.ts` checks this), so the map adds no new advice of its
// own. Only `label`, `tagline` and `safetyNote` are new wording. The lead instruction shown
// on the answer screen is the lead card's `summary` in ./data.ts.

export interface SituationFollowOn {
  /** Technique to open next. */
  cardId: string;
  /** One line from that card's phrase bank, shown under its title. */
  line: string;
}

export interface Situation {
  /** Stable slug, used in the /help/:id route. */
  id: string;
  /** What the person picks: their situation, in their own words. */
  label: string;
  /** Two to four words under the label on the picker tile. */
  tagline: string;
  /** The one technique the answer screen leads with. */
  leadCardId: string;
  /** Exactly three lines to say, from the lead card's phrase bank. */
  lines: readonly [string, string, string];
  /** What to do once the first move has landed. */
  followOn: SituationFollowOn;
  /** One thing to avoid, from the lead card's "what it is not" or "not for" text. */
  avoid: string;
  /**
   * Shown before anything else on the answer screen when someone may be at
   * risk: points to local protocol and emergency services, not clinical advice.
   */
  safetyNote?: string;
}

export const SITUATIONS: readonly Situation[] = [
  {
    id: "upset-with-me",
    label: "They're upset with me",
    tagline: "Calm it, then listen",
    leadCardId: "TC006",
    lines: [
      "That sounds frustrating.",
      "I can hear why that landed badly.",
      "It sounds like that felt unfair.",
    ],
    followOn: { cardId: "TC014", line: "That's a fair concern." },
    avoid: "Not mind-reading, diagnosing, or telling someone how they feel.",
  },
  {
    id: "say-no",
    label: "I need to say no",
    tagline: "Clear and kind",
    leadCardId: "TC102",
    lines: [
      "I can't take that on right now.",
      "That doesn't work for me, but thanks for thinking of me.",
      "I can't do the whole thing, but I could help for an hour.",
    ],
    followOn: {
      cardId: "TC005",
      line: "I get the frustration, even if I disagree.",
    },
    avoid: "Not a soft maybe that keeps the door open when you mean no.",
  },
  {
    id: "made-a-mistake",
    label: "I've made a mistake",
    tagline: "Own it and repair",
    leadCardId: "TC101",
    lines: [
      "I got that wrong. I'm sorry.",
      "I'm sorry. That was on me.",
      "What would help put this right?",
    ],
    followOn: { cardId: "TC109", line: "Let me check I've got this." },
    avoid: "Not an explanation that turns into an excuse.",
  },
  {
    id: "being-pushed",
    label: "I'm being pushed",
    tagline: "Hold your ground",
    leadCardId: "TC031",
    lines: [
      "I hear the urgency. Give me one beat.",
      "I want to get this right, not just quick.",
      "Let me take a breath and answer plainly.",
    ],
    followOn: { cardId: "TC107", line: "I hear you. My answer is still no." },
    avoid:
      "It is not stalling, going quiet or dodging the question. You still answer, just more slowly.",
  },
  {
    id: "hard-news",
    label: "I have hard news",
    tagline: "Say it plainly",
    leadCardId: "TC044",
    lines: [
      "I'll be direct, because you deserve a straight answer.",
      "I'll say the main thing plainly, then we can sit with it.",
      "The answer is no, and here's the one reason.",
    ],
    followOn: { cardId: "TC006", line: "That sounds like a lot." },
    avoid:
      "It is not a way to avoid listening, or to compress someone's emotion into a template.",
  },
  {
    id: "gone-blank",
    label: "I've gone blank",
    tagline: "Buy a moment",
    leadCardId: "TC035",
    lines: [
      "Give me one moment to think.",
      "Let me take a second with that.",
      "That's worth answering properly.",
    ],
    followOn: { cardId: "TC011", line: "Let me check I have this right." },
    avoid:
      "You would only be pausing to perform composure or make someone wait",
  },
  {
    id: "ask-for-something",
    label: "I need to ask for something",
    tagline: "Make it easy to say yes",
    leadCardId: "TC013",
    lines: [
      "The specific thing I need is...",
      "Could you confirm the owner and deadline?",
      "Can we agree who's doing what by when?",
    ],
    followOn: { cardId: "TC021", line: "No pressure if not." },
    avoid: 'It is not "Can you help?" with the real ask hidden underneath.',
  },
  {
    id: "gone-quiet",
    label: "They've gone quiet",
    tagline: "Open the door",
    leadCardId: "TC029",
    lines: [
      "You don't have to answer immediately.",
      "There's no rush to put words to it.",
      "What part is still sitting with you?",
    ],
    followOn: {
      cardId: "TC064",
      line: "Is it okay if I test a read, and you can correct it?",
    },
    avoid:
      "It works when the silence feels like space. It fails the moment it feels like pressure.",
  },
];

const SITUATION_BY_ID: ReadonlyMap<string, Situation> = new Map(
  SITUATIONS.map((s) => [s.id, s]),
);

export function getSituation(id: string): Situation | undefined {
  return SITUATION_BY_ID.get(id);
}
