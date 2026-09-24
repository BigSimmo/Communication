import type { CardData } from "../card-types";

export const TC013: CardData = {
  pdfUrl: "cards/TC013/TC013_TwoCard_Combined.pdf",
  resources: [
    { label: "Two-card (combined)", description: "Front and back study cards on one sheet — the designed visual card.", href: "cards/TC013/TC013_TwoCard_Combined.pdf", type: "pdf", group: "Visual Cards" },
    { label: "One-card summary", description: "The whole technique on a single designed card.", href: "cards/TC013/TC013_OneCard.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Quick card", description: "One-page glance card for fast recall.", href: "cards/TC013/TC013_Quick_Card.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Detailed guide", description: "The full written guide with every section.", href: "cards/TC013/TC013_Detailed_Guide.pdf", type: "pdf", group: "Written Guides" },
    { label: "Reference sheet", description: "Dense one-page reference of the key moves.", href: "cards/TC013/TC013_Reference.pdf", type: "pdf", group: "Written Guides" },
    { label: "Phrase bank (CSV)", description: "Every phrase, ready to import or drill.", href: "cards/TC013/TC013_Phrase_Bank.csv", type: "csv", group: "Practice Tools" },
    { label: "Anki flashcards", description: "Import into Anki for spaced-repetition practice.", href: "cards/TC013/TC013_Anki_Flashcards.csv", type: "csv", group: "Practice Tools" },
  ],
  id: "TC013",
  whyItWorks:
    "A clean request asks directly for the specific action you want, with just enough context and no hidden pressure. It works because it removes the load the other person would otherwise carry — the guessing about what you need, by when, and how much it matters. When the ask is clear, people can say yes, no, or offer a workable alternative without friction, and you come across as organised, respectful and easy to help.",
  whatItIsNot: [
    "It is not bluntness, pressure, passive-aggression, or overexplaining.",
    "It is not \"Can you help?\" with the real ask hidden underneath.",
    "It is not a script for pressure, extraction or control.",
    "It is not a substitute for listening to the response.",
    "A clean request is direct enough to be useful and warm enough to preserve goodwill.",
  ],
  overview: {
    coreFormula: [
      "I'm finalising the plan by Friday. Could you review the one-page version by Thursday afternoon? Even a yes/no on option B would help.",
      "Could you send me the exact address before 5 pm so I can book the transport?",
      "No pressure if your week is packed, but would you be open to a 10-minute call next Tuesday or Wednesday?",
      "The decision I need is A or B. Could you send your preference by midday so I can finalise it?",
    ],
    minimumViableMove:
      "Ask for the exact action and timeframe: \"Could you do X by Y?\"",
    impact: "High",
    difficulty: "Easy-Medium",
    misuse:
      "It fails when the request stays vague (\"Can you help?\") or turns to pressure (\"I need this now\") without context, reason, realism or an easy way to respond — which reads as demanding rather than clear.",
    bestFor: [
      "Work requests",
      "Asking busy or high-status people for help",
      "Delegation",
      "Digital messages",
      "Relationship logistics",
      "Getting stuck decisions moving",
      "Turning goodwill into action",
      "Reducing ambiguity",
    ],
  },
  notFor: [
    "You have not yet worked out what you actually want",
    "You need consent or buy-in before assigning any action",
    "The other person needs safety, privacy, silence or practical help, not a task",
    "Physical safety or an emergency response takes priority",
    "You would be using clarity as cover for pressure or control",
    "The relationship needs listening or repair before any ask lands",
  ],
  phraseBank: [
    {
      id: "core-ask",
      label: "Core ask",
      tag: "Default / specific",
      tone: "Direct",
      phrases: [
        "Could you do X by Y?",
        "The specific thing I need is...",
        "What would be realistic from your side?",
        "Could you send the final version, not the draft?",
        "Could you review page 2 by Thursday and tell me whether the recommendation is clear?",
      ],
    },
    {
      id: "professional",
      label: "Professional",
      tag: "Work & decisions",
      tone: "Professional",
      phrases: [
        "Could you review the one-page summary by Thursday?",
        "The decision I need from you is A or B.",
        "Could you confirm the owner and deadline?",
        "Could you send the final version by close of business?",
        "Could you give me one-line approval or one-line objection?",
        "By 3 pm Friday, so I can finalise it before the meeting.",
      ],
    },
    {
      id: "digital-text",
      label: "Digital / text",
      tag: "Messages & email",
      tone: "Quick",
      phrases: [
        "Quick ask: could you reply yes/no by Friday?",
        "If easier, just pick 1, 2, or 3.",
        "Could you send the file name and deadline in one message?",
        "One sentence is enough.",
        "No need for detail — just whether this direction is okay.",
      ],
    },
    {
      id: "high-status",
      label: "High-status / busy person",
      tag: "Time-pressured asks",
      tone: "High-stakes",
      phrases: [
        "To make this easy to respond to, the ask is...",
        "One line of direction would be enough.",
        "Would it be useful if I sent a concise version for review?",
        "The only decision I need from you is...",
        "If this is not your call, who is the right person?",
      ],
    },
    {
      id: "low-pressure",
      label: "Low-pressure / social",
      tag: "Optional & goodwill",
      tone: "Warm",
      phrases: [
        "Only if it is easy.",
        "No issue if not.",
        "If now is not a good time, I can ask someone else.",
        "Would you be up for...?",
        "Completely fine if the answer is no.",
        "Could you send me that link later? No rush.",
      ],
    },
    {
      id: "leadership",
      label: "Leadership / delegation",
      tag: "Ownership & done",
      tone: "Professional",
      phrases: [
        "The outcome I need is...",
        "The first step is...",
        "Please send me a two-line update by Friday.",
        "What support do you need to get this done?",
        "Let's define done: X, Y and Z.",
        "Could you give me one line: approve, reject, or main concern?",
      ],
    },
    {
      id: "relationship-home",
      label: "Relationship / home",
      tag: "Shared logistics",
      tone: "Warm",
      phrases: [
        "Could we decide this tonight so it is not hanging over us?",
        "Could you handle the booking and I'll do the transport?",
        "What would be a fair split from your side?",
        "Can we agree who is doing what by when?",
        "Would you rather do X or Y?",
      ],
    },
    {
      id: "repair-reset",
      label: "Repair / reset",
      tag: "Recover a clumsy ask",
      tone: "Repair",
      phrases: [
        "I made that too vague. The actual ask is...",
        "Let me make this easier to answer.",
        "That sounded more demanding than intended.",
        "I buried the ask in too much context.",
        "No pressure if that timeline does not work.",
        "A no is okay. I just wanted to ask clearly.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "If they say yes",
      action: "Confirm who does what and by when, and thank them specifically.",
      phrase:
        "Great — so you'll send the reviewed page by Thursday and I'll finalise Friday. Thank you.",
    },
    {
      condition: "If they say no",
      action: "Accept it cleanly; ask about an alternative only if appropriate.",
      phrase: "Completely fine. Thanks for telling me straight.",
    },
    {
      condition: "If they are vague",
      action: "Narrow the ask to a concrete choice.",
      phrase: "Would Thursday or Friday be more realistic?",
    },
    {
      condition: "If they delay",
      action: "Reduce the friction or clarify the real priority.",
      phrase: "If it helps, a one-line yes/no is all I need today.",
    },
    {
      condition: "If they seem pressured",
      action: "Release the pressure and restate that a no is fine.",
      phrase: "A no is okay. I just wanted to ask clearly.",
    },
    {
      condition: "If they counteroffer",
      action: "Clarify the new action and close the loop.",
      phrase: "That works — so you'll do X by Monday instead. Shall I confirm that?",
    },
  ],
  ladder: [
    {
      weak: "Can you help?",
      better: "Could you look at this?",
      best: "Could you review page 2 by Thursday and tell me whether the recommendation is clear?",
    },
    {
      weak: "When you get a chance.",
      better: "Sometime this week.",
      best: "By 3 pm Friday, so I can finalise it before the meeting.",
    },
    {
      weak: "Any thoughts?",
      better: "What do you think?",
      best: "Could you give me one line: approve, reject, or main concern?",
    },
    {
      weak: "I need this urgently.",
      better: "I need this soon.",
      best: "The actual deadline is Friday because the booking closes at 5 pm.",
    },
  ],
  scenarios: [
    {
      situation: "Casual / social",
      move: "Keep it light and genuinely optional.",
      phrase: "Could you send me that link later? No rush.",
    },
    {
      situation: "Professional",
      move: "Lead with the ask early, then add the context.",
      phrase: "Could you review the one-page version by Thursday?",
    },
    {
      situation: "High-status person",
      move: "Respect their time; narrow it to a single decision.",
      phrase: "The only decision I need is A or B.",
    },
    {
      situation: "Guarded or resistant person",
      move: "Reduce the pressure and ask what would be realistic.",
      phrase: "What would be realistic from your side?",
    },
    {
      situation: "Digital / text",
      move: "Open with \"Quick ask\", give a deadline and an easy reply option.",
      phrase: "Quick ask: could you reply yes/no by Friday?",
    },
    {
      situation: "Conflict",
      move: "Validate the concern first, then make the behavioural request specific.",
      phrase: "I hear the worry about time. Could we agree who does what by Friday?",
    },
  ],
  calibration: {
    working: [
      "They answer faster because the ask is clear.",
      "They can repeat the next step back to you.",
      "They ask execution-level questions, not \"What exactly do you mean?\"",
      "They say yes, no, or offer a workable alternative clearly.",
      "They follow through without needing repeated clarification.",
      "They relax, add detail, or correct you comfortably.",
    ],
    adjust: [
      "They look confused or ask \"What exactly do you need?\"",
      "They delay because the ask feels too large.",
      "They seem pressured, cornered or guilty.",
      "They agree vaguely but do not commit to a next step.",
      "Fix: make the ask smaller and state the deadline plainly.",
      "Fix: define what done looks like, or offer a template or example.",
      "Fix: give an easy reply option, and release the pressure if it is optional.",
      "Fix: ask what would be realistic from their side.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the vague ask",
      task: "Catch and write down three vague or pressured asks you would normally make today, such as \"Can you help?\" or \"When you get a chance.\"",
    },
    {
      day: "Day 2",
      title: "Build the clean version",
      task: "Rewrite each one as action + timeframe + reason + easy reply option. Name the real deadline, not a fake one.",
    },
    {
      day: "Day 3",
      title: "Cut the padding",
      task: "Trim each clean ask so the action comes first and the context is one line, not a paragraph. Delete anything the person does not need to act.",
    },
    {
      day: "Day 4",
      title: "Say it out loud",
      task: "Speak each version once in a normal voice and drop anything that sounds demanding, guilt-laden or over-polite.",
    },
    {
      day: "Day 5",
      title: "Three-rep drill",
      task: "In real life, use one low-stakes ask, one professional ask, and one recovery line after a request that landed badly.",
    },
    {
      day: "Day 6",
      title: "Make the response easy",
      task: "Send one request built around a single yes/no or a two-option choice, so the reply takes the other person seconds, not minutes.",
    },
    {
      day: "Day 7",
      title: "Calibrate and release",
      task: "Make a clean ask, then pause, read the response, and practise accepting a no cleanly without adding pressure.",
    },
  ],
  checklist: [
    "Did I ask for one clear action?",
    "Did I name the timeframe?",
    "Did I explain why it mattered without overexplaining?",
    "Did I make the response easy — a yes/no or a simple choice?",
    "Did I preserve choice if the ask was genuinely optional?",
    "Did I confirm the next step, and notice whether it actually helped?",
  ],
  example: {
    without: [
      "You: \"Can you help with this?\"",
      "Them: \"Maybe. What do you need?\"",
      "You: \"Just whatever you think.\"",
      "Why it is weak: the other person has to discover the task, the effort, the deadline and what a good result even looks like.",
    ],
    with: [
      "You: \"I'm trying to finalise this by Friday. Could you look over the one-page summary by Thursday afternoon and tell me if option B makes sense?\"",
      "Them: \"Yes, send it through.\"",
      "You (lighter version): \"Quick ask, and a no is fine — could you give me a one-line steer by Thursday on whether option B is sensible?\"",
      "Digital version: \"Quick ask: could you reply yes/no by Friday on whether option B is acceptable? No detail needed unless there's a problem.\"",
      "Why this works: the action, the deadline and the reason are all present, and there is an easy way to reply.",
    ],
    note: "The advanced version should make the other person feel clearer, not managed.",
  },
  influencePayoff: {
    feeling: "\"I know exactly what they need, and it's easy to say yes.\"",
    principle:
      "People cooperate more readily when a request is clear, because it removes cognitive load, ambiguity, status risk and decision friction.",
    gains: [
      "Cooperation",
      "Clarity",
      "Faster replies",
      "Perceived competence",
      "Preserved goodwill",
      "Momentum on stuck decisions",
    ],
    whyMostFail: [
      "They stay vague — \"Can you help?\" — so the other person has to reverse-engineer the ask.",
      "They apply pressure — \"I need this now\" — without context, reason or realism.",
      "They bury the action under two paragraphs of context.",
      "They leave no easy response path, so the reply feels effortful and gets delayed.",
    ],
  },
  fieldTip: {
    headline:
      "If the other person has to translate your request into an action, the request is not clean.",
    body: "The goal is not to display skill. It is to make the next human moment easier — easy for them to answer, and easy for you to move forward.",
    example:
      "\"Could you send the final version by 3 pm Friday? A one-line yes is all I need.\"",
    dont: "Wrap the ask in so much politeness or context that the action disappears.",
    do: "Put the action first, name the deadline and the reason, and leave an easy way to say no.",
  },
  method: [
    {
      step: "1",
      title: "Notice the cue",
      body: "Clean request fits when you genuinely need someone to do something specific and the moment calls for clarity — not when you simply want to look capable. If you have not yet worked out what you want, sort that out before you ask.",
    },
    {
      step: "2",
      title: "Choose the smallest version",
      body: "Ask for the least that would genuinely work. Overloading the request with scope or urgency makes it harder to accept, not easier.",
      examples: [
        { label: "Light", text: "A one-line yes/no is enough." },
        { label: "Fuller", text: "Could you review the one-page version and flag anything that worries you?" },
      ],
    },
    {
      step: "3",
      title: "Ask for the exact action and timeframe",
      body: "State the specific action and when you need it, then add a short reason. The pattern is: context + specific ask + reason + timeframe + easy response option.",
      examples: [
        {
          label: "Example",
          text: "I'm finalising the plan by Friday. Could you review the one-page version by Thursday? Even a yes/no on option B would help.",
        },
      ],
    },
    {
      step: "4",
      title: "Stop and listen",
      body: "Once you have made the ask, stop talking. Let them answer with a yes, a no, or an alternative rather than filling the silence with more context or pressure.",
    },
    {
      step: "5",
      title: "Adjust warmth, directness or brevity",
      body: "Read how it landed. If they look confused, make it smaller and clearer. If they seem pressured, release it — a no is fine. If they are on board, keep going.",
    },
    {
      step: "6",
      title: "Confirm and close the loop",
      body: "When they agree, restate the next step in one line and thank them specifically, so nothing is left ambiguous.",
      examples: [
        { label: "Close", text: "Great — you'll send it by Thursday and I'll finalise Friday. Thank you." },
      ],
    },
  ],
  liveThreadClues: [
    "Can you help?",
    "When you get a chance...",
    "Any thoughts?",
    "Sometime this week...",
    "I need this urgently...",
    "No worries if not, but...",
  ],
  commonMistakes: [
    {
      mistake: "Vague ask",
      soundsLike: "\"Can you help?\"",
      better:
        "\"Could you review page 2 by Thursday and tell me if the recommendation is clear?\"",
    },
    {
      mistake: "No deadline",
      soundsLike: "\"Can you send it when you get a chance?\"",
      better: "\"Could you send it by 3 pm Friday?\"",
    },
    {
      mistake: "Buried ask",
      soundsLike: "Two paragraphs of context before the actual request.",
      better: "Put the ask first, then add the context.",
    },
    {
      mistake: "False urgency",
      soundsLike: "\"I need this urgently\" when it is not actually urgent.",
      better: "Name the real deadline and why it matters.",
    },
    {
      mistake: "No easy response path",
      soundsLike: "A long request with no clear yes/no or next step.",
      better: "\"A yes/no is enough,\" or \"just pick A, B or C.\"",
    },
    {
      mistake: "Pressure disguised as politeness",
      soundsLike: "\"No worries if not, but I really need you to...\"",
      better: "Either make it genuinely optional, or clearly explain the need.",
    },
  ],
  recoveryPhrases: [
    "I realise I buried the ask — the specific thing is...",
    "That was too vague. Let me simplify.",
    "No pressure if that timeline does not work.",
    "What part of that is unclear or unrealistic?",
    "I think I made this sound bigger than it is. The only thing I need is...",
    "Let me separate the context from the ask.",
    "I may have framed that badly — let me step back.",
    "We can leave that if it is not the useful thread.",
  ],
  bestRecoveryLine: "I realise I buried the ask — the specific thing I need is...",
  chains: [
    {
      label: "Rapport chain",
      sequence: "Warm presence -> clean request -> autonomy release -> appreciation",
      example: [
        "\"Good to see you — quick one.\"",
        "\"Could you send the signed form by Thursday?\"",
        "\"No rush if today is mad; just let me know.\"",
        "\"Thanks, that genuinely helps.\"",
      ],
    },
    {
      label: "Influence chain",
      sequence: "Understand their goal -> clean request -> reduce friction -> confirm next step",
      example: [
        "\"You want this shipped without another delay, right?\"",
        "\"Could you approve the one-pager by midday?\"",
        "\"I've attached it so it's a two-minute read.\"",
        "\"Great — you'll approve by midday and I'll ship this afternoon.\"",
      ],
    },
    {
      label: "Conflict chain",
      sequence: "Validate concern -> define request -> offer choice -> check fairness",
      example: [
        "\"I get that the timing feels tight.\"",
        "\"Could we lock who does what by Friday?\"",
        "\"Would you rather take the booking or the transport?\"",
        "\"Does that feel like a fair split?\"",
      ],
    },
    {
      label: "Digital chain",
      sequence: "Subject line -> one-line context -> clean ask -> deadline -> easy reply option",
      example: [
        "Subject: \"Quick decision needed — option B\"",
        "\"We're finalising Friday.\"",
        "\"Could you confirm option B is acceptable?\"",
        "\"By Thursday would be ideal — a yes/no is enough.\"",
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC019",
      reason:
        "Small ask shrinks the scope so it is easier to accept; use Clean request when the ask is the right size but needs to be stated clearly and answerably.",
    },
    {
      id: "TC020",
      reason:
        "Low-friction ask removes the effort or ambiguity around responding; Clean request focuses on naming the exact action and timeframe.",
    },
    {
      id: "TC034",
      reason:
        "Two-option questions offer two clear choices when an open-ended ask would stall; use Clean request when a single specific action is what you need.",
    },
    {
      id: "TC021",
      reason:
        "Autonomy release explicitly hands the choice back so a no stays safe; pair it after a Clean request to keep the ask free of pressure.",
    },
    {
      id: "TC018",
      reason:
        "Specific appreciation thanks the person for the exact thing they did; it is the natural close once a clean request is answered.",
    },
  ],
};
