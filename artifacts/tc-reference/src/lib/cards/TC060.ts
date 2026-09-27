import type { CardData } from "../card-types";

export const TC060: CardData = {
  pdfUrl: "cards/TC060/TC060_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC060/TC060_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC060/TC060_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC060/TC060_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC060/TC060_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC060/TC060_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC060/TC060_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC060/TC060_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC060",
  whyItWorks:
    "Positive assumption is starting from a respectful, benign reading of an ambiguous action before you ask, correct, or disagree. It is a framing move placed just before a potentially face-threatening question, correction, request, or boundary, and it quietly signals: I am not starting from the worst interpretation of you. It works because people explain far more honestly when they do not feel attacked before the facts are even understood: the charitable reading separates the person from the problem and buys a pause between annoyance and accusation, so accountability stays possible without starting from blame.",
  whatItIsNot: [
    "Not blind optimism, forced trust, conflict avoidance, or fake praise. It does not pretend the behaviour is fine.",
    'Not a way to excuse harm: "You obviously meant well, so there\'s no problem."',
    "Not a demand that the other person accept your version of events.",
    "Not minimising: it never makes the person who was actually affected feel unreasonable.",
    'The honest, checkable version stays precise: "I don\'t know your intent, and the impact still needs addressing."',
  ],
  overview: {
    coreFormula: [
      "Assume a reasonable reason + name the observable issue + invite correction or a next step.",
      "I'm assuming [reasonable reason / good intent / constraint], and I noticed [observable issue]. Can we [check / decide / repair / agree a next step]?",
      "I may be wrong, but I'm reading this as [benign interpretation], not [negative interpretation]. Is that right?",
      "My guess is [charitable reason]. If that's off, correct me. What happened?",
      "Minimum viable: \"I'm assuming there's a reasonable reason. Can you walk me through it?\"",
    ],
    minimumViableMove:
      "Notice the ambiguity, choose the most plausible benign reading, say it in one light sentence, ask for the missing context, then respond to the facts: \"I'm assuming there's a reasonable reason. Can you walk me through it?\"",
    impact: "High",
    difficulty: "Medium",
    misuse:
      "The move fails when you soften the issue so far that impact, accountability, or safety disappears, or when you deliver the assumption mechanically, so it reads as a manipulative script rather than genuine goodwill.",
    bestFor: [
      "A missed reply or deadline where the reason is unknown.",
      "A blunt message that may be compressed rather than hostile.",
      "A disagreement where the person may be protecting a valid concern.",
      "High-pressure work where assumptions can quickly become blame.",
      "Early conflict and cross-functional friction.",
      "Customer support and family logistics where intent is easy to misread.",
      "Digital messages where tone is hard to read.",
    ],
  },
  notFor: [
    "Repeated breaches after you have already asked directly.",
    "Abusive, discriminatory, coercive, or unsafe behaviour.",
    "When a harmed person needs you to name the impact plainly first.",
    "When the assumption would sound like minimising or excuse-making.",
    "A power imbalance where softening would protect the wrong person.",
    "When you already know the answer and the assumption would be a pretence.",
  ],
  phraseBank: [
    {
      id: "starters",
      label: "Quick openers",
      tag: "Starter one-liners",
      tone: "Quick",
      phrases: [
        "I'm assuming there's a reasonable reason. Can you walk me through it?",
        "I might be reading this generously, but I'm guessing there's a reason. Can we check what happened?",
        "My guess is there's more to this. What actually happened?",
        "I'd rather ask than assume the worst. What's going on?",
        "I'm reading this charitably. Correct me if I'm off.",
        "Before I jump to conclusions, give me the context?",
        "I'm assuming there's a story here I'm missing.",
      ],
    },
    {
      id: "charitable-readings",
      label: "Charitable readings",
      tag: "Benign interpretations",
      tone: "Warm",
      phrases: [
        "I'm guessing you were trying to keep this simple.",
        "I imagine time was tight.",
        "This may be a crossed-wire thing rather than a real disagreement.",
        "I can see you were trying not to make it heavier.",
        "I'm assuming you were trying to be efficient, not dismissive.",
        "I'm not reading this as you not caring.",
        "I'd bet good intentions got tangled up in a busy week.",
        "I'm assuming there's a reason that makes sense from where you're sitting.",
      ],
    },
    {
      id: "professional",
      label: "Work and decisions",
      tag: "Professional context",
      tone: "Professional",
      phrases: [
        "I'm assuming this was a bandwidth issue rather than a priority call. Where does it stand now?",
        "I'm reading this as a constraint, not resistance. What constraint should we solve for?",
        "I'm assuming the team had a reason for that trade-off. Can you talk me through it?",
        "I'm assuming there's a process reason behind that. Let me check before I give a firm answer.",
        "I'm assuming everyone's trying to protect the outcome. What's the clean next step?",
        "I'm assuming the escalation pulled you away, not a change in priorities.",
        "I'm assuming this got crowded out rather than dropped. Can we reset the deadline?",
      ],
    },
    {
      id: "assumption-plus-ask",
      label: "Assumption plus ask",
      tag: "Name the issue, then check",
      tone: "Direct",
      phrases: [
        "I'm assuming this got crowded out rather than ignored. Can we reset the deadline now?",
        "I'm reading this as risk protection, not obstruction. What risk are you seeing?",
        "I'm assuming this was a miss rather than neglect. Let's check what safeguard failed.",
        "I'm assuming you're trying to solve this quickly. I need two minutes of listening before solutions.",
        "I'm assuming there's a reason for the approach. Can you walk me through the thinking?",
        "I may be wrong, but I'm reading this as a timing problem, not a commitment one. Is that right?",
        "My guess is the brief was unclear. If that's off, tell me what actually happened.",
      ],
    },
    {
      id: "digital",
      label: "Digital / text",
      tag: "Tone-over-text",
      tone: "Quick",
      phrases: [
        "Tone's hard over text, so I'm assuming this is concise rather than sharp. Fair?",
        "Reading that as brief, not blunt. Let me know if I've got it wrong.",
        "Hard to read tone here, so I'm assuming good faith. What did you need?",
        "I'm taking that as shorthand, not shortness.",
        "No tone in text, so I'm assuming you're just busy. All good?",
      ],
    },
    {
      id: "repair",
      label: "When it lands wrong",
      tag: "Softened too much",
      tone: "Repair",
      phrases: [
        "I may have softened that too much. The issue is still real.",
        "I may have read that too generously. Let me name the impact directly.",
        "Let me correct that. I don't know your intent. I can name the impact more clearly.",
        "I was trying not to assume the worst, but I hear it sounded like I was excusing it.",
        "That assumption may be wrong. What was actually happening for you?",
        "I don't want to put words in your mouth. How would you describe it?",
      ],
    },
    {
      id: "boundary",
      label: "After a pattern",
      tag: "Charity has run out",
      tone: "High-stakes",
      phrases: [
        "I don't want to assume the worst, and I also need this to stop.",
        "I gave the benefit of the doubt. Now we need a clear agreement.",
        "I'm going to be more direct, because this has repeated.",
        "I don't want to assume the worst, and this is now a repeated issue. I need it to change.",
        "I've assumed good reasons a few times now. This time I need a firm commitment.",
        "I'm not questioning your intent. I'm telling you the impact has to change.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "Is there immediate risk or harm?",
      action: "Don't soften: set a boundary or escalate.",
      phrase: "This needs to stop now. I'll come back to the context later.",
    },
    {
      condition: "Is the behaviour genuinely ambiguous?",
      action: "Use positive assumption.",
      phrase:
        "I'm assuming there's a reasonable reason. Can you walk me through it?",
    },
    {
      condition: "Is this a clear pattern after prior requests?",
      action: "Use a direct request, boundary, or consequence.",
      phrase:
        "I've given the benefit of the doubt before. This time I need a firm commitment.",
    },
    {
      condition: "Is someone voicing a concern?",
      action: "Validate the concern before assuming intent.",
      phrase:
        "That worry makes sense. Let me make sure I understand it before we move on.",
    },
    {
      condition: "Did your assumption land as minimising?",
      action: "Recover with intent-impact separation.",
      phrase:
        "I may have softened that too much. The impact still needs addressing.",
    },
    {
      condition: "Did they accept the frame and explain?",
      action: "Move to a concrete next step.",
      phrase: "Thanks, let's agree what happens next.",
    },
  ],
  ladder: [
    {
      weak: "You ignored the deadline.",
      better: "Maybe you were busy, but the deadline passed.",
      best: "I'm assuming this got crowded out rather than ignored. Can we reset the deadline now?",
    },
    {
      weak: "That message was rude.",
      better: "I'm sure you didn't mean it badly.",
      best: "Tone's hard in chat, so I'm reading it as brief rather than hostile. Can you clarify what you need?",
    },
    {
      weak: "You're blocking this.",
      better: "I guess you have concerns.",
      best: "I'm reading this as risk protection, not obstruction. What risk are you seeing?",
    },
    {
      weak: "That was careless.",
      better: "Maybe it was an accident.",
      best: "I'm assuming this was a miss rather than neglect. Let's check what safeguard failed.",
    },
  ],
  scenarios: [
    {
      situation: "Missed deadline",
      move: "Assume bandwidth or constraint, then reset the next action.",
      phrase:
        "I'm assuming this slipped because the week got crowded, not because it stopped mattering. What's the realistic reset?",
    },
    {
      situation: "Blunt message",
      move: "Assume compression before hostility, then ask for intent.",
      phrase:
        "Tone's hard in text, so I'm reading that as brief rather than sharp. Are you asking for a decision today?",
    },
    {
      situation: "Team resistance",
      move: "Assume risk protection, then identify the risk.",
      phrase:
        "I'm reading the pushback as risk protection, not blocking. What risk are you trying to keep us from missing?",
    },
    {
      situation: "Family logistics",
      move: "Assume overload before carelessness.",
      phrase:
        "I'm guessing this got lost in a busy day. Can we decide who owns it now?",
    },
    {
      situation: "Customer complaint",
      move: "Assume the frustration has a valid trigger, then investigate.",
      phrase:
        "I'm assuming something in the process made this harder than it should be. Let me check what happened.",
    },
    {
      situation: "Boundary repeat",
      move: "Start direct. Don't keep assuming positively after a pattern.",
      phrase:
        "I don't want to assume the worst, and this is now a repeated issue. I need it to change.",
    },
  ],
  calibration: {
    working: [
      "They relax and their tone drops.",
      "They explain what actually happened.",
      "They correct a detail, which means they felt safe enough to.",
      "They own a piece of it without being cornered.",
      "The conversation moves from motive to facts.",
      "They thank you for not assuming the worst.",
    ],
    adjust: [
      "They seem confused. Your reading was too abstract. Name the observable issue plainly.",
      "They hide behind intent to deny impact: switch to intent-impact separation.",
      "A harmed person looks minimised: pause the assumption and validate the impact first.",
      "They get defensive anyway: slow down, own it as your interpretation, and ask for theirs.",
      "They exploit the benefit of the doubt again: stop softening and move to a boundary.",
      "You catch yourself assuming to avoid a hard sentence. Say the hard sentence.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the ambiguity",
      task: "Collect five real moments this week where you assumed the worst. For each, write the observable fact separately from the story you added about their intent.",
    },
    {
      day: "Day 2",
      title: "Rewrite the blame",
      task: 'Take ten blame statements ("You ignored my message", "They obviously don\'t care", "You forgot again") and convert each into an "I\'m assuming..." line with one concrete question.',
    },
    {
      day: "Day 3",
      title: "Under pressure",
      task: "Give yourself five seconds per scenario. Keep every assumption under fifteen words before the question, so it still works when you're annoyed.",
    },
    {
      day: "Day 4",
      title: "Calibrate",
      task: "For each rewrite, write one cue that means keep going and one cue that means stop softening and name the issue directly.",
    },
    {
      day: "Day 5",
      title: "Recover",
      task: 'Practise the repair out loud ("I may have softened that too much. The issue is...") until it sounds calm rather than defensive.',
    },
    {
      day: "Day 6",
      title: "Chain it",
      task: "Add a clean request, summary check, or boundary after each assumption so it never dead-ends in vague niceness.",
    },
    {
      day: "Day 7",
      title: "Live rep",
      task: "In one real, low-stakes conversation, catch an ambiguous moment and use a single positive assumption. Note whether they relaxed, explained, or corrected you.",
    },
  ],
  checklist: [
    "Did I separate the observable behaviour from my story about their intent?",
    "Was the assumption plausible and respectful, not fake or flattering?",
    "Did I leave room for correction and move into a concrete next step?",
    "Did I avoid minimising the impact on anyone who was affected?",
    "Did I stop softening once the behaviour was repeated or harmful?",
    "Did I recover cleanly when the assumption turned out to be wrong?",
  ],
  example: {
    without: [
      "A: You missed the update again. Are you even tracking this?",
      "B: I had three urgent issues come up.",
      "A: That sounds like an excuse.",
      "Why it's weak:",
      "opens from the worst interpretation",
      "puts B on the defensive before any facts are shared",
      'turns a real reason into an "excuse"',
      "leaves no path to a clean next step",
    ],
    with: [
      "A: I'm assuming the escalation crowded this out rather than you choosing to drop it. Is that right?",
      "B: Yes. I should have flagged the delay sooner.",
      "A: Thanks. Let's reset cleanly: send a short status by 3, and flag earlier next time if it slips.",
      "B: That works. I'll send it by 3.",
      "Why this works:",
      "names a plausible benign reading, then checks it",
      "keeps accountability, B still owns the missed flag",
      "moves straight to a concrete reset",
      "lowers the threat without minimising the miss",
    ],
    note: "There's a middle version that's better than blame but still weak: \"I know you were probably busy, but the update was missing.\" It softens the tone yet never checks the assumption or sets a clean next step. So the conversation stalls in vague niceness.",
  },
  influencePayoff: {
    feeling:
      "\"They're not starting from the worst version of me. I'm being asked to explain, not defend.\"",
    principle:
      "People are far more likely to explain honestly when they do not feel attacked before the facts are even understood.",
    gains: [
      "Lower threat and higher candour.",
      "Reduces defensiveness without removing accountability.",
      "Protects status and dignity in corrective conversations.",
      "Makes it easier for someone to admit an error or reveal a constraint.",
      "Keeps your own tone clean: a pause between stimulus and accusation.",
      "Separates the person from the problem.",
      "Builds a smoother bridge into clean requests, validation, and repair.",
    ],
    whyMostFail: [
      "They use the generous reading to dodge the actual problem instead of raising clarity after it.",
      "They over-do it: too many charitable interpretations sound patronising or strategic.",
      "They deliver it mechanically, so it reads as a manipulative script.",
      "They assume positively when the impact needed naming first.",
    ],
  },
  fieldTip: {
    headline: "Assume a reasonable reason, then ask for the real one.",
    body: "The move is strongest when it's brief. One generous sentence is enough, after that, go to the facts, the impact, or the next agreement. Long reassurance starts to sound like nervousness or a sales pitch.",
    example: '"Start generous. Stay precise."',
    dont: "Don't let the charity become the whole conversation and quietly bury the issue.",
    do: "Do pair every generous reading with one concrete question or request.",
  },
  method: [
    {
      step: "1",
      title: "Perception",
      body: "Notice the ambiguous cue or behaviour without bolting a negative story onto it. Separate what you can actually observe (a missed update, a blunt line, a slow reply) from the motive you're tempted to assign it.",
    },
    {
      step: "2",
      title: "Choose a charitable hypothesis",
      body: "Pick the most plausible benign reading that still preserves dignity: reasonable intent, a real constraint, a crossed wire, or ordinary overload. Plausible matters more than flattering.",
      examples: [
        {
          label: "Reasonable intent",
          text: "I'm guessing you were trying to keep this simple.",
        },
        { label: "Reasonable constraint", text: "I imagine time was tight." },
        { label: "Crossed wire", text: "This may be a crossed-wire thing." },
        {
          label: "Reasonable care",
          text: "I can see you were trying not to make it heavier.",
        },
      ],
    },
    {
      step: "3",
      title: "Say it in one sentence",
      body: 'Keep the phrase light and provisional. "I\'m assuming..." and "I may be wrong..." leave room for correction, so it sounds like an opening rather than a verdict. Then name the observable issue and ask for the missing context.',
    },
    {
      step: "4",
      title: "Calibrate",
      body: "Watch what the assumption does. Relief, an explanation, or a correction means it worked: move into the facts. Confusion, defensiveness, or silence means adjust: name the observable issue more plainly, or slow down.",
    },
    {
      step: "5",
      title: "Recover if it lands wrong",
      body: 'If it reads as excusing or minimising, don\'t defend it: separate intent from impact and ask plainly. "I may have softened that too much. The issue is still real."',
    },
    {
      step: "6",
      title: "Chain",
      body: "Move quickly into a clean request, validation without agreement, a summary check, or repair. Long reassurance after the assumption sounds like nervousness or manipulation.",
    },
  ],
  liveThreadClues: [
    "A reply that's later than you expected",
    "A message that reads blunt or clipped",
    '"They obviously don\'t care" running through your head',
    "Pushback that could be obstruction or a genuine concern",
    "A missed step that could be neglect or overload",
    "Tone you simply can't read over text",
    'The urge to open with "Why did you..."',
  ],
  commonMistakes: [
    {
      mistake: "Using the assumption to dodge the problem",
      soundsLike:
        '"I\'m sure you meant well", and then quietly dropping the issue.',
      better:
        '"I\'m assuming you meant well. The update was still missing. Can we fix that now?"',
    },
    {
      mistake: "Assuming positive intent when the impact needs naming first",
      soundsLike:
        "\"I'm sure you didn't mean it\". Said to someone who was hurt.",
      better:
        '"That landed badly on me. I\'ll get to intent, but first I need to name the impact."',
    },
    {
      mistake: "Making the assumption too flattering",
      soundsLike: "\"You're always so thoughtful, so I'm sure...\"",
      better: '"I\'m assuming there was a reason. What happened?"',
    },
    {
      mistake: "Treating the assumption as fact, not a hypothesis",
      soundsLike: '"I know you were just busy."',
      better:
        '"I\'m guessing you were busy. Is that right, or was it something else?"',
    },
    {
      mistake: "Adding a long lecture after the soft opening",
      soundsLike: "A generous sentence followed by three minutes of grievance.",
      better:
        "One generous sentence, one clear question, then stop and listen.",
    },
    {
      mistake: "Keeping the benefit of the doubt after a pattern",
      soundsLike: "\"I'm sure there's a reason\". For the fourth time.",
      better:
        '"I\'ve assumed good reasons a few times now. This needs to change."',
    },
    {
      mistake: "Making them explain when you already know",
      soundsLike: 'A hollow "walk me through it" when the answer is obvious.',
      better:
        "Skip the theatre. Name what you know and ask what you'd both change.",
    },
  ],
  recoveryPhrases: [
    "Let me correct that. I don't know your intent. I can name the impact more clearly.",
    "I may have softened that too much. The issue is still real.",
    "I was trying not to assume the worst, but I hear that it sounded like I was excusing it.",
    "Let me separate intent and impact: I don't think you meant harm, and this still needs repair.",
    "That assumption may be wrong. What was actually happening for you?",
    "I don't want to put words in your mouth. How would you describe it?",
    "I gave the benefit of the doubt. Now we need a clear agreement.",
    "I'm going to be more direct, because this has repeated.",
  ],
  bestRecoveryLine:
    "I may have softened that too much. The issue is still real.",
  chains: [
    {
      label: "Assumption to clean request",
      sequence: "Positive assumption → Clean request",
      example: [
        '"I\'m assuming this got crowded out. Can you send the status by 3?"',
      ],
    },
    {
      label: "Assumption to validation without agreement",
      sequence: "Positive assumption → Validation without agreement",
      example: [
        "\"I'm reading this as a risk concern. I can see why that matters. I don't yet agree with the conclusion.\"",
      ],
    },
    {
      label: "Assumption to permission-based advice",
      sequence: "Positive assumption → Permission-based advice",
      example: [
        "\"I'm assuming you've got a reason for the approach. Would it help if I shared one concern?\"",
      ],
    },
    {
      label: "Assumption to summary check",
      sequence: "Positive assumption → Summary check",
      example: [
        '"Let me check I\'ve got this right: the delay was the escalation, not a change in priority."',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC005",
      reason:
        "Validation without agreement: both avoid a needless argument. Assume positively when you're interpreting ambiguous conduct. Validate without agreeing when the person has actually stated a concern you can acknowledge.",
    },
    {
      id: "TC014",
      reason:
        "Validate the concern. If someone is worried, validate the concern first. If someone did something ambiguous, open with a positive assumption instead.",
    },
    {
      id: "TC061",
      reason:
        "Tone reflection: both address hidden meaning. If the issue is the emotional tone you're hearing, reflect the tone. If the issue is your interpretation of their motive, assume positively.",
    },
    {
      id: "TC022",
      reason:
        "Status generosity: a positive assumption can sound like praise. Use status generosity to credit real competence or effort. Use positive assumption to prevent blame around something ambiguous.",
    },
    {
      id: "TC039",
      reason:
        "Common-ground discovery: both build connection. Use common-ground discovery to find genuine overlap. Use positive assumption when you're interpreting an unclear action and want to avoid blame.",
    },
    {
      id: "TC054",
      reason:
        "Similarity signalling: both create warmth. Name a real shared trait with similarity signalling. Use positive assumption when there's a potential problem to defuse first.",
    },
  ],
};
