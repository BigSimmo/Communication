import type { CardData } from "../card-types";

export const TC109: CardData = {
  id: "TC109",
  resources: [
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC109/TC109_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC109/TC109_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC109/TC109_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC109/TC109_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC109/TC109_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  sources: [
    {
      label:
        "Center for Understanding in Conflict, Looping for Understanding cheat sheet",
      url: "https://understandinginconflict.org/wp-content/uploads/2024/07/Looping-Quick-Reference-Guide-2.pdf",
    },
  ],
  whyItWorks:
    'Looping is taught by the Center for Understanding in Conflict and described by mediators Gary Friedman and Jack Himmelstein in their book Challenging Conflict. You say back what you understood, especially what seems to matter most to the person, and then check: "Did I get that right?" If not, you ask what you missed and try again until they say yes. As they put it, people are far more willing to understand you once they feel understood themselves. The check is what makes it different from just paraphrasing: it proves you\'re listening rather than assuming.',
  whatItIsNot: [
    "Not parroting their exact words.",
    "Not agreeing with them.",
    "Not a set-up for your rebuttal.",
    "Not looping every sentence. Use it for what matters most.",
  ],
  overview: {
    coreFormula: [
      "Listen for what matters most to them (strong words, emotion).",
      'Say what you understood: "So what matters to you is..."',
      'Check: "Did I get that right?"',
      'If not: "What did I miss?"',
      "Loop again until you get a real yes.",
    ],
    minimumViableMove:
      '"So the main thing for you is [X]. Did I get that right?"',
    impact: "High",
    difficulty: "Medium",
    misuse:
      "It becomes manipulative if you loop only to look reasonable and then ignore what they said.",
    bestFor: [
      "Disagreements with a partner or friend.",
      "Someone feels unheard.",
      "Family arguments that go in circles.",
      "Before you give your own view.",
      "Hearing a complaint you want to resolve.",
    ],
  },
  notFor: [
    "Quick practical chats where it would feel odd.",
    "When they just want comfort, not analysis. Stay with support (TC002).",
    "If you can't stay neutral right now. Take a break first.",
  ],
  phraseBank: [
    {
      id: "quick",
      label: "Quick loops",
      tag: "Say it, check it",
      tone: "Quick",
      phrases: [
        "So you're saying... Is that right?",
        "Let me check I've got this.",
        "Did I get that right?",
        "What did I miss?",
        "Is that it, or is there more?",
      ],
    },
    {
      id: "matters",
      label: "Find what matters",
      tag: "Go beyond the facts",
      tone: "Warm",
      phrases: [
        "So the hardest part was feeling left out. Is that it?",
        "It sounds like what really matters is being trusted with it. Right?",
        "So it's not the money, it's that you weren't asked. Did I get that?",
        "You're worried this will keep happening. Is that right?",
      ],
    },
    {
      id: "correct",
      label: "When you miss",
      tag: "Ask and try again",
      tone: "Repair",
      phrases: [
        "I don't think I got that quite right. What did I miss?",
        "Okay, so it's more about the timing. Let me try again.",
        "Tell me the bit I didn't get.",
      ],
    },
    {
      id: "disagree",
      label: "In disagreement",
      tag: "Understand before you reply",
      tone: "Direct",
      phrases: [
        "Before I give my view, let me check I understand yours.",
        "So from your side, I made the decision without you. Is that right?",
        "I see it differently, but first, is this how you see it?",
      ],
    },
    {
      id: "work",
      label: "At work",
      tag: "Clarify and align",
      tone: "Professional",
      phrases: [
        "So the priority for you is hitting the date, even if scope drops. Right?",
        "Let me play that back to make sure I've got it.",
        "So your concern is the client hearing it from someone else first. Is that it?",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "They seem unheard",
      action: "Loop what matters most.",
      phrase: "So what upset you most was... Is that right?",
    },
    {
      condition: 'They say "sort of"',
      action: "Ask what you missed.",
      phrase: "What did I miss?",
    },
    {
      condition: 'They say "exactly"',
      action: "Now share your view, or ask what they'd like.",
      phrase: "Thanks. Can I tell you how it looked from my side?",
    },
    {
      condition: "They're very emotional",
      action: "Loop the feeling, not just the facts.",
      phrase: "You're really hurt about this. Is that right?",
    },
    {
      condition: "You disagree strongly",
      action: "Loop anyway before replying.",
      phrase: "Let me make sure I understand you first.",
    },
  ],
  ladder: [
    {
      weak: '"I know what you mean, but..."',
      better: '"So you\'re upset."',
      best: '"So the worst part was hearing it from someone else. Did I get that right?"',
    },
    {
      weak: '"You\'re overreacting."',
      better: '"I hear you."',
      best: "\"You're worried we won't have enough for the holiday. Is that it?\"",
    },
    {
      weak: '"Okay, my turn."',
      better: '"Got it."',
      best: '"Let me check I\'ve got it before I reply. You felt I decided without you. Right?"',
    },
  ],
  scenarios: [
    {
      situation: "Partner upset about plans",
      move: "Loop what matters.",
      phrase:
        "\"So it's not the party, it's that I didn't ask you first. Is that right?\"",
    },
    {
      situation: "Friend frustrated with work",
      move: "Loop the feeling.",
      phrase: '"So you feel like nobody notices how much you do. Is that it?"',
    },
    {
      situation: "Family disagreement",
      move: "Understand before replying.",
      phrase:
        '"Let me check I understand. You think we should host because Mum can\'t travel. Right?"',
    },
    {
      situation: "Colleague pushing back",
      move: "Clarify their concern.",
      phrase: '"So your worry is the extra load on your team. Did I get that?"',
    },
  ],
  calibration: {
    working: [
      'They say "yes, exactly".',
      "They relax and slow down.",
      "They become more open to your view.",
      "The argument stops going in circles.",
    ],
    adjust: [
      'They say "sort of": ask what you missed.',
      "They get irritated: you may be parroting. Use your own words.",
      "They feel analysed: drop the technique and just listen.",
      "You're looping to rebut: pause and be genuinely curious.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Listen for what matters",
      task: "In one conversation today, notice the strongest word the other person uses.",
    },
    {
      day: "Day 2",
      title: "Distil it",
      task: "Write one sentence capturing what mattered most to them.",
    },
    {
      day: "Day 3",
      title: "Add the check",
      task: 'Practise adding "Did I get that right?" to the end.',
    },
    {
      day: "Day 4",
      title: "Ask what you missed",
      task: 'Next time you get a "sort of", ask "What did I miss?"',
    },
    {
      day: "Day 5",
      title: "Use it in a disagreement",
      task: "Loop the other person's view once before giving yours.",
    },
    {
      day: "Day 6",
      title: "Loop a feeling",
      task: "Loop an emotion, not just facts.",
    },
    {
      day: "Day 7",
      title: "Review",
      task: "Did you get a real yes? What changed after you did?",
    },
  ],
  checklist: [
    "Did I loop what mattered most, not just the facts?",
    "Did I use my own words?",
    "Did I check whether I got it right?",
    "Did I ask what I missed?",
    "Did I wait for a real yes before giving my view?",
  ],
  example: {
    without: [
      "A: I can't believe you told your mum before me.",
      "B: It just came up, it's not a big deal.",
      "A: It is to me!",
      "B: Why are you overreacting?",
    ],
    with: [
      "A: I can't believe you told your mum before me.",
      "B: So it hurt that you weren't the first to know. Is that right?",
      "A: Yes. It felt like I came second.",
      "B: That makes sense. What did I miss?",
      "A: Just that. I want to hear things from you first.",
      "B: Okay. I'll make sure you do.",
    ],
  },
  influencePayoff: {
    feeling: '"They actually get it."',
    principle:
      "People listen better once they feel understood. Checking your understanding proves you're listening.",
    gains: [
      "Ends arguments that go in circles.",
      "People feel genuinely heard.",
      "Fewer misunderstandings.",
      "Makes them more open to your view.",
    ],
    whyMostFail: [
      "They paraphrase but don't check.",
      "They loop the facts and miss the feeling.",
      "They loop to set up a rebuttal.",
      "They assume they understand.",
    ],
  },
  fieldTip: {
    headline: "Say it, check it, try again.",
    body: 'The check is the magic. "Did I get that right?" shows you care more about understanding than being right. If you get anything less than "yes, exactly", ask what you missed.',
    example: '"So you felt left out. Did I get that right?"',
    dont: '"I know exactly what you mean, but..."',
    do: '"So what matters most is... Is that right?"',
  },
  method: [
    {
      step: "1",
      title: "Listen for what matters",
      body: "Strong words, emotion, repeated points.",
    },
    {
      step: "2",
      title: "Distil it in your words",
      body: "One sentence, not a word-for-word repeat.",
      examples: [
        {
          label: "Say",
          text: '"So the worst part was the surprise."',
        },
        {
          label: "Avoid",
          text: "Repeating their whole speech back.",
        },
      ],
    },
    {
      step: "3",
      title: "Check",
      body: '"Did I get that right?"',
    },
    {
      step: "4",
      title: "Correct",
      body: "If not, ask what you missed.",
    },
    {
      step: "5",
      title: "Check again",
      body: "Until you get a clear yes.",
    },
    {
      step: "6",
      title: "Then respond",
      body: "Share your view or ask what they'd like.",
    },
  ],
  liveThreadClues: [
    '"You\'re not listening!"',
    '"That\'s not what I said."',
    "The same point repeated",
    "Raised emotion",
    '"You don\'t get it."',
  ],
  commonMistakes: [
    {
      mistake: "No check",
      soundsLike: '"So you\'re upset." (and moving on)',
      better: '"So you\'re upset. Is that right?"',
    },
    {
      mistake: "Parroting",
      soundsLike: "Repeating word for word.",
      better: "Distil it in your own words.",
    },
    {
      mistake: "Looping to rebut",
      soundsLike: '"So you think X. Well, actually..."',
      better: "Wait for a yes, then respond.",
    },
    {
      mistake: "Facts only",
      soundsLike: '"So I was late twice."',
      better: '"So it felt like I didn\'t care. Is that it?"',
    },
  ],
  recoveryPhrases: [
    "I jumped to my side too fast. Let me check I understood you.",
    "I don't think I got that. What did I miss?",
    "Sorry, I was waiting to talk instead of listening. Say it again?",
  ],
  bestRecoveryLine: "I don't think I got that. What did I miss?",
  chains: [
    {
      label: "Looping, then soft start-up",
      sequence: "Understand their view, then share yours softly.",
      example: [
        '"So you felt left out. Right?"',
        '"Thanks. I was feeling stretched about the plans too."',
      ],
    },
    {
      label: "Looping, then apology",
      sequence: "Understand the impact, then own your part.",
      example: [
        '"So it hurt hearing it second. Is that it?"',
        '"I\'m sorry. You should have been first."',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC004",
      reason:
        "Reflective listening is the lighter everyday version. Looping adds the check.",
    },
    {
      id: "TC011",
      reason:
        "Summary check rounds up a whole conversation. Looping checks one point at a time.",
    },
    {
      id: "TC101",
      reason:
        "Loop the impact before you apologise so the apology is specific.",
    },
  ],
};
