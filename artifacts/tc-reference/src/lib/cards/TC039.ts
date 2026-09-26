import type { CardData } from "../card-types";

export const TC039: CardData = {
  pdfUrl: "cards/TC039/TC039_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet — the designed visual card.",
      href: "cards/TC039/TC039_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC039/TC039_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC039/TC039_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC039/TC039_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC039/TC039_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC039/TC039_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC039/TC039_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC039",
  whyItWorks:
    "Common-ground discovery means finding one real shared point — a concern, value, experience, goal or constraint — and naming it lightly, without pretending sameness or forcing agreement. It works because it changes the conversation at the level of timing, attention and response choice rather than adding a script: the other person feels genuinely heard, friction drops, and a stuck exchange gets one honest overlap to build from.",
  whatItIsNot: [
    "It is not a trick, a performance, a dominance move, or a shortcut around consent.",
    "It is not a way to extract more than the other person wants to give.",
    "It is not a replacement for listening, context, judgement, or direct action when direct action is needed.",
    "It is not manufactured sameness — the overlap has to be real, or it quietly backfires.",
  ],
  overview: {
    coreFormula: [
      "Listen for overlap, name it specifically, avoid overclaiming, then invite the next practical step.",
      "It sounds like we both care about getting this handled cleanly.",
      "Different reasons, same concern about timing.",
      "We may not agree on the cause, but we both want a cleaner next step.",
      "The common thread is that nobody wants surprises here.",
    ],
    minimumViableMove:
      "It sounds like we both care about getting this handled cleanly.",
    impact: "Medium",
    difficulty: "Medium",
    misuse:
      "Manufacturing fake similarity, overclaiming shared experience, or using common ground to bypass a real disagreement rather than work with it.",
    bestFor: [
      "When trust is low but there is a shared goal",
      "When a conversation is stuck in difference and needs one honest overlap",
      "When you need alignment without pretending full agreement",
      "When friction or overtalking is pulling the conversation off the thread that matters",
      "When you want to lower the temperature without conceding your own position",
    ],
  },
  notFor: [
    "When common ground would minimise a real power difference or harm",
    "When the person needs their difference acknowledged before any overlap",
    "When the overlap would be fake, exaggerated, or self-serving",
    "When the situation needs direct action rather than more conversation",
    "When you would only be using the overlap to push toward your own outcome",
  ],
  phraseBank: [
    {
      id: "quick-openers",
      label: "Quick openers",
      tag: "Short one-liners",
      tone: "Quick",
      phrases: [
        "It sounds like we both want this to go well.",
        "Same goal, different angle.",
        "We both want this handled cleanly.",
        "I think we're after the same thing here.",
        "Different reasons, same concern.",
        "We both care about getting this right.",
        "Sounds like we agree on the destination.",
      ],
    },
    {
      id: "warmth",
      label: "Warmth and connection",
      tag: "Rapport phrases",
      tone: "Warm",
      phrases: [
        "It sounds like we both care about getting this handled cleanly.",
        "We may be coming from different angles, but I think we both want this to be clear.",
        "The shared point seems to be protecting the relationship and the work.",
        "We both seem to care about not making this worse.",
        "It matters to both of us that this lands well.",
        "I think we both want the same person to come out of this okay.",
        "We're both trying to look after the same thing here.",
      ],
    },
    {
      id: "work-decisions",
      label: "Work and decisions",
      tag: "Meeting / decision phrases",
      tone: "Professional",
      phrases: [
        "It sounds like we're aligned on the timeline, even if the budget still needs a look.",
        "The shared goal seems to be making the next step workable.",
        "Different reasons, same concern about timing.",
        "We both want a decision we can actually stand behind.",
        "The common thread is that nobody wants surprises here.",
        "We both want this to hold up when it's reviewed.",
        "Whatever we decide, we both want something the team can run with.",
      ],
    },
    {
      id: "name-overlap",
      label: "Naming the overlap",
      tag: "Clear, direct phrases",
      tone: "Direct",
      phrases: [
        "The overlap I hear is that neither of us wants this to get messier.",
        "We don't need full agreement to share the goal of a fairer process.",
        "We may not agree on the cause, but we both want a cleaner next step.",
        "Can we build from the part we do agree on?",
        "The useful part might be this: we both want a workable next step.",
        "Where we line up is the timing — can we work from that?",
        "If we both want it to be fair, let's start there.",
      ],
    },
    {
      id: "repair-softening",
      label: "Softening and repair",
      tag: "De-escalation phrases",
      tone: "Repair",
      phrases: [
        "I don't want to pretend we see it the same way, but there is overlap in wanting a fair process.",
        "We're on the same side of at least one thing here.",
        "Neither of us wants this to blow up — can we start there?",
        "I know we disagree on the how; I think we agree on the why.",
        "Let's not lose the thing we both actually want.",
        "Before we get into where we differ, we both want this sorted.",
      ],
    },
    {
      id: "digital-text",
      label: "Digital / text",
      tag: "Written, one line",
      tone: "Quick",
      phrases: [
        "I may be reading this wrong, but that seems like the key thread.",
        "We can stay with that or move on — your call.",
        "The useful part may be this: we both want the same outcome.",
        "Sounds like we both want the same result, even if the route's different.",
        "Feels like we agree on the goal — want to sort the how?",
      ],
    },
    {
      id: "high-stakes",
      label: "Conflict and pressure",
      tag: "Low-trust phrases",
      tone: "High-stakes",
      phrases: [
        "I'm not asking you to drop your position — I think we still share one concern.",
        "Even here, we both want this to be fair.",
        "The last thing either of us wants is for this to get worse.",
        "We can hold our differences and still work the part we share.",
        "We may not agree on the cause, but we both want it sorted properly.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "They add detail",
      action:
        "Follow the same thread; build on the overlap they just extended.",
      phrase: "Say more about that part.",
    },
    {
      condition: "They look uncomfortable or tense",
      action: "Release the move and reduce intensity.",
      phrase: "We don't have to stay with that.",
    },
    {
      condition: "They ask for advice",
      action:
        "Switch to Permission-based advice rather than pressing the overlap.",
      phrase: "Want my take, or just a sounding board?",
    },
    {
      condition: "They give a direct answer",
      action: "Take it and move on — don't keep hunting for overlap.",
      phrase: "",
    },
    {
      condition: "The situation needs action",
      action:
        "Act directly rather than decorating the conversation with rapport.",
      phrase: "",
    },
    {
      condition: "When unsure",
      action: "One small move, then observe.",
      phrase: "It sounds like we both care about getting this handled cleanly.",
    },
  ],
  ladder: [
    {
      weak: "We're exactly the same.",
      better: "We both care about this.",
      best: "We may not agree on the cause, but we both want a cleaner next step.",
    },
    {
      weak: "You know what I mean.",
      better: "There's some overlap.",
      best: "The overlap I hear is that neither of us wants this to get messier.",
    },
    {
      weak: "Let's just agree.",
      better: "We share one concern.",
      best: "We don't need full agreement to share the goal of a fairer process.",
    },
  ],
  scenarios: [
    {
      situation: "Casual conversation",
      move: "Use the minimum viable move and keep the tone light.",
      phrase: "It sounds like we both want this to go smoothly.",
    },
    {
      situation: "Workplace conversation",
      move: "Keep the wording concise and non-performative; avoid emotional overreach.",
      phrase: "The shared goal seems to be making the next step workable.",
    },
    {
      situation: "Conflict or repair",
      move: "Pair the move with validation or autonomy release before naming the overlap.",
      phrase:
        "We may not agree on the cause, but neither of us wants this to get messier.",
    },
    {
      situation: "Digital message",
      move: "Use one sentence only. Don't stack multiple prompts.",
      phrase:
        "I may be reading this wrong, but that seems like the key thread.",
    },
    {
      situation: "High-stakes context",
      move: "Lead with direct clarity; add common ground only if it lowers pressure and improves understanding.",
      phrase: "Even here, we both want this to be fair.",
    },
    {
      situation: "Low-trust negotiation",
      move: "Name one honest overlap early so you're clearly not there only to win.",
      phrase: "Different reasons, same concern about timing.",
    },
  ],
  calibration: {
    working: [
      "They add detail.",
      "Their tone softens or becomes more specific.",
      "They correct you without getting defensive.",
      "They stay on the same thread.",
      "They ask something back.",
      "They pick up the shared word and run with it.",
    ],
    adjust: [
      "Shorter answers.",
      "Polite but flat tone.",
      "They keep shifting the topic.",
      "Forced laughter.",
      "Visible tension.",
      "Defensiveness or confusion.",
      "They withdraw or refuse directly.",
      "The move makes the conversation feel less safe — make it smaller or release it.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the overlaps",
      task: "Think back over three recent conversations and write down the one honest thing you and the other person both wanted, even where you disagreed.",
    },
    {
      day: "Day 2",
      title: "Write realistic lines",
      task: "Write five real situations where naming common ground would help, and draft one overlap sentence for each.",
    },
    {
      day: "Day 3",
      title: "Weak, better, best",
      task: "For each of the five, write a weak version, a better version, and a best version that is short and tentative.",
    },
    {
      day: "Day 4",
      title: "Cut by a third",
      task: "Reduce each best version by about 30 percent so it sounds like attention, not a speech.",
    },
    {
      day: "Day 5",
      title: "Add a recovery line",
      task: 'Pair each line with a recovery phrase you could use if the overlap doesn\'t land, such as "I may be reading that wrong."',
    },
    {
      day: "Day 6",
      title: "Say it plainly",
      task: "Say each line aloud in an ordinary tone until it stops sounding like a technique and starts sounding like you.",
    },
    {
      day: "Day 7",
      title: "Use it once, then stop",
      task: "In a real, low-stakes conversation, name one honest overlap, let it sit, and watch the response before doing anything else.",
    },
  ],
  checklist: [
    "Did I keep the other person's autonomy intact?",
    "Did I use one move, or stack several?",
    "Did my tone fit the relationship and the context?",
    "Did I stop when the signal weakened?",
    "Did I follow their thread rather than my own agenda?",
    "Would a simpler response have been better?",
  ],
  example: {
    without: [
      "A: It just felt like too much at once.",
      "B: Why did you let it get like that? You should have said something earlier.",
      "Why it's weak:",
      "jumps to blame instead of looking for anything shared",
      "treats their feeling as a mistake to correct",
      "gives them nothing in common to hold on to",
    ],
    with: [
      "A: It just felt like too much at once.",
      "B: That sounds like it had more weight than the facts alone. (better)",
      "A: Yes — it felt like I was suddenly carrying all of it.",
      "A: It just felt like too much at once.",
      "B: It sounds like the hard part wasn't just the amount, but what it meant about being left with it. (advanced)",
      "A: Exactly. I could have handled the work if someone had acknowledged it.",
      "B: So the shared thread is being left alone with it, not just being busy.",
      "Why this works:",
      "names the real overlap without taking over the thread",
      "stays tentative, so they can correct or redirect",
      "builds from what they both actually care about",
    ],
    note: "The advanced version keeps the other person's thread alive without taking control of it.",
  },
  influencePayoff: {
    feeling: '"This person is looking for what we share, not scoring points."',
    principle:
      "People soften once they can see one honest thing you both want; a real overlap lowers defensiveness faster than any argument.",
    gains: [
      "Better conversational accuracy",
      "Trust",
      "Less friction",
      "Less overtalking",
      "The conversation stays on the thread that matters",
      "Alignment without pretending full agreement",
      "Dignity preserved — they can accept, redirect, or decline without being cornered",
    ],
    whyMostFail: [
      "They manufacture fake similarity, so the overlap rings hollow.",
      "They overclaim shared experience the other person never signalled.",
      "They use common ground to skip past a real disagreement instead of working with it.",
      "They repeat the move until it sounds like a technique rather than a person.",
    ],
  },
  fieldTip: {
    headline: "Common ground must be discovered, not invented.",
    body: "The overlap only works if it's real. If you have to reach for it or exaggerate it, the other person feels the stretch and trusts you less, not more. Wait until you actually hear a shared concern, value or goal, then name that and only that.",
    example: '"Different reasons, same concern about timing."',
    dont: 'Manufacture sameness to smooth things over — "We\'re basically the same, you and me."',
    do: 'Name the one real thing you both want — "We may not agree on the cause, but we both want a cleaner next step."',
  },
  method: [
    {
      step: "1",
      title: "Notice the shared thread",
      body: "Listen underneath the disagreement for one real thing you both want — a concern, value, goal or constraint. Don't reach for it; wait until a genuine overlap actually surfaces.",
      examples: [
        { label: "Cue", text: '"I just don\'t want this to blow up."' },
        {
          label: "Shared thread",
          text: "Neither of you wants it to get worse.",
        },
      ],
    },
    {
      step: "2",
      title: "Choose the smallest overlap",
      body: "Name one honest overlap, not a list. The smaller and more specific it is, the more believable it sounds and the less it feels like a move.",
    },
    {
      step: "3",
      title: "Say it in ordinary language",
      body: 'Keep it plain and tentative — "seems", "sounds like", "I think". Tentative wording leaves them room to correct you instead of resisting you.',
      examples: [
        {
          label: "Too strong",
          text: '"We both obviously want the same thing."',
        },
        {
          label: "Natural",
          text: '"It sounds like we both care about getting this handled cleanly."',
        },
      ],
    },
    {
      step: "4",
      title: "Pause and let it land",
      body: "Say the overlap, then stop. Give them a beat to accept it, adjust it, or push back. The pause is part of the move, not dead air to fill.",
    },
    {
      step: "5",
      title: "Follow their next signal",
      body: "If they add detail or soften, build on the shared thread. If they correct the overlap, take the correction — a corrected overlap is usually the real one.",
    },
    {
      step: "6",
      title: "Release if it's weak",
      body: "If they go shorter, flatter, or tense, don't push. Make the move smaller or drop it entirely and return to plain conversation.",
      examples: [
        {
          label: "Release",
          text: '"I may be reading that wrong — we don\'t have to stay with it."',
        },
      ],
    },
  ],
  liveThreadClues: [
    '"we both…"',
    '"all I want is…"',
    '"the last thing I want is…"',
    '"no one wants…"',
    '"I just want this to be fair."',
    '"at the end of the day…"',
    '"same here."',
  ],
  depthDial: [
    {
      depth: "Light",
      useWhen: "casual or early, low stakes",
      phrase: "We both want this to go smoothly.",
    },
    {
      depth: "Warm",
      useWhen: "rapport is forming",
      phrase: "It sounds like we both care about getting this handled cleanly.",
    },
    {
      depth: "Work",
      useWhen: "a decision or plan is on the table",
      phrase:
        "Different reasons, same concern about timing — can we plan around that?",
    },
    {
      depth: "Guarded",
      useWhen: "conflict, low trust, or high stakes",
      phrase:
        "We may not agree on the cause, but neither of us wants this to get messier.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Manufacturing fake similarity",
      soundsLike: '"Oh, me too, we\'re exactly the same!"',
      better:
        '"We\'re coming at this differently, but we both want it to be fair."',
    },
    {
      mistake: "Overclaiming shared experience",
      soundsLike: '"I know exactly how you feel."',
      better:
        '"I haven\'t been where you are, but I think we want the same outcome here."',
    },
    {
      mistake: "Using overlap to bypass a real disagreement",
      soundsLike: "\"We both want what's best, so let's just move on.\"",
      better:
        '"We agree on the goal — can we stay with where we actually differ for a moment?"',
    },
    {
      mistake: "Using the move too many times in a row",
      soundsLike: '"We both… and we both… and really we both…"',
      better: "Name one honest overlap, then let it sit.",
    },
    {
      mistake: "Sounding like a technique instead of a person",
      soundsLike: '"What I\'m hearing is that we have common ground."',
      better: '"Sounds like we both just want this handled cleanly."',
    },
    {
      mistake: "Mistaking politeness or fatigue for agreement",
      soundsLike: '"Great, sounds like we\'re aligned!"',
      better:
        '"I don\'t want to put words in your mouth — does that overlap actually feel real to you?"',
    },
  ],
  recoveryPhrases: [
    "I may be reading that wrong.",
    "We don't have to stay with that.",
    "Let me say that more simply.",
    "That came out too strong.",
    "Ignore that if it doesn't fit.",
    "We can go another direction.",
    "What would be more useful right now?",
  ],
  bestRecoveryLine:
    "I may be reading that wrong — ignore it if it doesn't fit.",
  chains: [
    {
      label: "Repair to request",
      sequence:
        "TC005 Validation without agreement → TC039 Common-ground discovery → TC013 Clean request",
      example: [
        "\"That's a fair worry, and I'm not going to pretend it isn't.\" (validate)",
        '"We both want a process people can trust." (common ground)',
        '"So could you send me the figures by Thursday?" (clean request)',
      ],
    },
    {
      label: "Concern to ask",
      sequence:
        "TC014 Validate the concern → TC039 Common-ground discovery → TC020 Low-friction ask",
      example: [
        '"I get why the timing feels risky." (validate the concern)',
        '"Neither of us wants a rushed launch." (common ground)',
        '"Would a quick fifteen-minute check-in on Friday help?" (low-friction ask)',
      ],
    },
    {
      label: "Status to summary",
      sequence:
        "TC022 Status generosity → TC039 Common-ground discovery → TC011 Summary check",
      example: [
        '"You\'ve carried most of this, and it shows." (status generosity)',
        '"We both want it to land well." (common ground)',
        '"So the plan is X, then Y — have I got that right?" (summary check)',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC017",
      reason:
        "Values-based framing uses one person's values to frame a point; common-ground discovery finds a point both people already share.",
    },
    {
      id: "TC005",
      reason:
        "Validation acknowledges their concern without agreeing; common ground names a genuine overlap you can both build on.",
    },
    {
      id: "TC022",
      reason:
        "Status generosity hands dignity to the other person; common ground finds the mutuality between you.",
    },
    {
      id: "TC014",
      reason:
        "Validate the concern first if the person needs to feel heard before any overlap will land.",
    },
    {
      id: "TC077",
      reason:
        "Agreement-before-disagreement leads with the point you agree on before pushing back; common-ground discovery is how you find that shared point in the first place.",
    },
  ],
};
