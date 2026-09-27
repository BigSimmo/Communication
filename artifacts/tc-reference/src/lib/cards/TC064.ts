import type { CardData } from "../card-types";

export const TC064: CardData = {
  pdfUrl: "cards/TC064/TC064_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC064/TC064_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC064/TC064_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC064/TC064_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC064/TC064_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC064/TC064_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC064/TC064_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC064/TC064_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC064",
  whyItWorks:
    "Check before interpreting is a listening move for moments when you have a plausible read but not enough evidence to state it as fact. Before you say what someone meant, felt, wanted or intended, you turn your interpretation into a low-pressure question and let them confirm, correct or reject it. It works because people defend themselves when they feel interpreted without permission, even when you are partly right, but they relax and clarify when they are invited to correct your read. You get a more accurate picture, and they stay the authority on their own meaning.",
  whatItIsNot: [
    'Not mind-reading: "You\'re only saying that because..."',
    'Not a soft accusation: "So what you really mean is..."',
    'Not premature labelling: "You\'re anxious about this."',
    'Not a debate trap dressed as a question: "Let me check. You admit you were wrong?"',
    'Not vague empathy theatre: "I sense something deep here."',
  ],
  overview: {
    coreFormula: [
      "Tentative marker + specific interpretation + correction invitation.",
      "I may be reading this wrong: is the main concern [X], or is it more [Y]?",
      "Before I assume, do you mean [specific read]?",
      "Can I check whether this is about [topic], or something else?",
      "Tell me if I'm off: are you looking for [support], [clarity], or [a decision]?",
      "Can I check my read, is it [A], [B], or neither?",
    ],
    minimumViableMove: "Can I check my read before I respond?",
    impact: "High",
    difficulty: "Medium",
    misuse:
      'Making the check sound like a polished version of "I know what\'s really going on with you": a leading accusation, a quiet diagnosis, or a way to delay an apology dressed up as a question.',
    bestFor: [
      "Ambiguous statements where several meanings are plausible.",
      "Emotional conversations where a wrong label would irritate or shame the speaker.",
      "Workplace moments where motive, concern, priority or risk is unclear.",
      "Text or email threads where tone is easy to misread.",
      "Conflict, where you need to test your understanding before you respond.",
      "Coaching, feedback, support, mediation and debrief conversations.",
    ],
  },
  notFor: [
    "The person has already clearly stated what they mean.",
    "Immediate safety or emergency action takes priority.",
    "You are using the check to delay accountability.",
    "They have signalled they do not want to be analysed.",
    'Your "check" is really a leading accusation.',
    "The moment needs a direct apology, boundary or decision, not more interpretation.",
  ],
  phraseBank: [
    {
      id: "everyday-openers",
      label: "Everyday openers",
      tag: "Short everyday checks",
      tone: "Quick",
      phrases: [
        "Can I check what you mean before I jump in?",
        "Can I check my read before I respond?",
        "Hang on. Can I check I have understood you right?",
        "I might be misreading this. Is it the plan, the timing, or something else?",
        "Is the frustrating part what happened, or how it happened?",
        "Do you want me to take this as a big deal, or more as a quick vent?",
        "Before I assume, do you mean it that way?",
      ],
    },
    {
      id: "two-option-checks",
      label: "Two-option checks",
      tag: "Correctable A-or-B reads",
      tone: "Direct",
      phrases: [
        "Can I check my read, is it this, that, or neither?",
        "Is the frustrating part the plan, or the way it landed?",
        "Is it more hurt, frustration or disappointment, or something else?",
        "Are you saying I missed the mark, or that the constraints changed?",
        "Is this a blocker, a risk to monitor, or a preference?",
        "Is the main issue confidence, clarity, or choosing between priorities?",
        "Do you mean it as a criticism, or as a suggestion?",
      ],
    },
    {
      id: "workplace",
      label: "Workplace / professional",
      tag: "Meetings, decisions and reviews",
      tone: "Professional",
      phrases: [
        "Before I respond, can I check the concern you want me to address?",
        "Is the risk you're flagging mainly quality, timing, cost, or stakeholder trust?",
        "I hear a possible concern about ownership. Is that accurate?",
        "Are you asking for a decision, a sounding board, or just visibility?",
        "Can I check the frame, are we reviewing quality, alignment, or next steps?",
        "Before I plan around this, is it a hard blocker or a preference?",
        "Is this feedback on the direction, or on the detail?",
      ],
    },
    {
      id: "digital-text",
      label: "Digital / text",
      tag: "When tone is hard to read",
      tone: "Quick",
      phrases: [
        "Tone is hard to read here. Are you asking for input, or just flagging this?",
        "Before I assume, is this a blocker or a heads-up?",
        "Checking my read: do you need action from me, or just awareness?",
        "Is your main concern the deadline, or the decision path?",
        "Reading this cold. Is the tone frustrated, or just brief?",
        "Quick check so I don't misread: urgent, or when-you-can?",
      ],
    },
    {
      id: "high-pressure",
      label: "High-pressure / conflict",
      tag: "Before you get defensive",
      tone: "High-stakes",
      phrases: [
        "I don't want to put words in your mouth. Is the issue the decision, the process, or both?",
        "Let me check before I react: are you saying I missed the mark, or that the constraints changed?",
        "I may be off. Are you asking me to explain, fix, or just acknowledge it?",
        "Before I defend anything, what's the part you most want me to understand?",
        "Before I explain, did that land as unclear, unfair, or too abrupt?",
        "Before I get defensive. What's the actual thing you need me to hear?",
      ],
    },
    {
      id: "sensitive-emotional",
      label: "Sensitive / emotional",
      tag: "Careful checks about feeling",
      tone: "Warm",
      phrases: [
        "I want to be careful with this. Is it more hurt, frustration, disappointment, or something else?",
        "Would it be right to say this felt dismissive, or is that not quite it?",
        "I'm not trying to analyse you. I just want to check I understood the impact.",
        "Is it okay if I test a read, and you can correct it?",
        "Are you annoyed, tired, or just keeping it brief?",
        "I might have this wrong. Did that feel like being overlooked, or something else?",
      ],
    },
    {
      id: "repair-reset",
      label: "Repair / reset",
      tag: "When you have already misread",
      tone: "Repair",
      phrases: [
        "I think I jumped ahead. Can I check what you actually meant?",
        "Let me back up. Did I misread that, or just the emphasis?",
        "I may have put words in your mouth. Say it your way and I'll follow.",
        "That came out more like a conclusion than a question. What did you mean?",
        "I don't want to over-interpret this. What should I take from it?",
      ],
    },
  ],
  decisionTree: [
    {
      condition:
        "You are about to infer motive, emotion, meaning, priority or intent",
      action:
        "If not, just listen or respond directly. If so, treat the read as a guess and continue.",
      phrase: "Can I check my read before I respond?",
    },
    {
      condition: "They have already stated the meaning clearly",
      action:
        "Do not re-interpret: reflect, validate, summarise or act on what they actually said.",
      phrase: "So the main thing is the timeline, have I got that right?",
    },
    {
      condition: "Your read could embarrass, accuse, diagnose or corner them",
      action: "Soften and ask permission before you offer it.",
      phrase: "Is it okay if I test a read, and you can correct me?",
    },
    {
      condition: "You can make the read specific and easy to correct",
      action:
        "If yes, offer one or two options with an exit. If no, ask a broader clarifying question instead.",
      phrase: "Is it more the workload, the timing, or something else?",
    },
    {
      condition: "They correct or reject the read",
      action:
        "Accept the correction cleanly and update. If they close down, stop interpreting and switch to listening, apology or a boundary.",
      phrase: "Got it, I'll drop that read.",
    },
    {
      condition: "The meaning is now clear. Pick the next move",
      action:
        "Feeling → emotional labelling. Concern → validate it. Ambivalence → double-sided reflection. Deeper value → meaning reflection. Next action → a clean request.",
      phrase: "Okay, so what would actually help here is...",
    },
  ],
  ladder: [
    {
      weak: 'Friend says "Whatever, it\'s fine." You reply: "You\'re clearly angry."',
      better: '"Are you annoyed?"',
      best: '"I might be misreading this. Is it actually fine, or does something still feel unresolved?"',
    },
    {
      weak: 'Colleague says "This process isn\'t working." You reply: "You just don\'t like the new system."',
      better: '"Is this about the system?"',
      best: '"Before I assume, is the issue the system itself, the handoff, or the decision rights around it?"',
    },
    {
      weak: 'Partner says "You always do this." You reply: "That\'s unfair."',
      better: '"What do you mean?"',
      best: '"Let me check before I react. Are you saying this is a pattern, or that this moment hit a sore point?"',
    },
    {
      weak: 'Client writes "Concerned about the timeline." You reply: "We can still deliver."',
      better: '"What concern?"',
      best: '"Checking my read: is it the final date, the milestones, or confidence in the path?"',
    },
  ],
  scenarios: [
    {
      situation: "A friend sounds short with you",
      move: "You might be reading irritation into brevity: check the tone without accusing.",
      phrase:
        "I may be misreading the tone. Are you annoyed, tired, or just keeping it brief?",
    },
    {
      situation: "A team member criticises a plan",
      move: "The issue could be quality, process, ownership or risk: offer specific options.",
      phrase:
        "Is the concern the timeline, the owner, or the risk we're carrying?",
    },
    {
      situation: 'A partner says "never mind"',
      move: "It could mean closed, hurt, tired or overwhelmed: check consent and meaning.",
      phrase:
        "Do you want to leave it there, or is there something I'm missing?",
    },
    {
      situation: "A client flags a concern by email",
      move: "Digital tone is under-specified: clarify the category before you respond.",
      phrase:
        "Checking my read: is this a blocker, a risk to monitor, or a preference?",
    },
    {
      situation: "A feedback conversation gets tense",
      move: "Do not assume defensiveness: check how it landed before you explain.",
      phrase:
        "Before I explain, did my feedback land as unclear, unfair, or too abrupt?",
    },
    {
      situation: "A coaching conversation",
      move: "You have a possible pattern but not enough evidence: test it gently.",
      phrase:
        "Can I test a read? Is the main issue confidence, clarity, or choosing between priorities?",
    },
  ],
  calibration: {
    working: [
      "They correct you and then keep talking.",
      "Their face, tone or wording softens after the check.",
      'They say "Yes, exactly" or "More like..."',
      "They move from defensiveness into explanation.",
      "They lean in and add detail you did not have.",
      "They sound relieved to be asked rather than told.",
    ],
    adjust: [
      "They answer only yes or no and close down: widen the question or drop it.",
      "They seem examined rather than understood: soften and slow down.",
      'They say "That\'s not what I mean" with irritation: accept it and stop guessing.',
      "They ask why you are making it so complicated: switch to plain listening.",
      "They say they do not want to discuss it: stop and respect that.",
      "You are repeatedly wrong and they are losing patience: put the reads away.",
      "The moment actually needs an apology, boundary or decision: act, do not analyse.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot your reads",
      task: "Through one day, notice every time you silently decide what someone meant, felt or intended. Jot down five of these snap interpretations.",
    },
    {
      day: "Day 2",
      title: "Write them as claims",
      task: 'Take five real statements you might hear and write the risky interpretation as a flat claim, e.g. "You\'re angry because I changed the plan."',
    },
    {
      day: "Day 3",
      title: "Convert to checks",
      task: 'Rewrite each claim as a check: tentative marker + specific read + a "something else" option, e.g. "I may be reading this wrong. Is the change the problem, or the lack of notice?"',
    },
    {
      day: "Day 4",
      title: "Add correction power",
      task: 'Add an easy correction invitation to each check ("tell me if I\'m off", "or is it something else") then read them aloud and cut any that sound diagnostic, superior or leading.',
    },
    {
      day: "Day 5",
      title: "Rehearse the recovery",
      task: 'For each check, practise accepting a correction cleanly: "Got it. I\'ll drop that read," with no defence of your first guess.',
    },
    {
      day: "Day 6",
      title: "Use it live, once",
      task: 'In a real conversation, use the minimum viable move a single time: "Can I check my read before I respond?" Notice whether they relax.',
    },
    {
      day: "Day 7",
      title: "Two-option and chain",
      task: 'Use a two-option check ("Is it more A or B?"), accept the answer, then chain into the right next move: label the feeling, validate the concern, or make a clean request.',
    },
  ],
  checklist: [
    "Did I notice the moment I was about to interpret?",
    "Did I mark my read as a guess, not a fact?",
    "Was the check specific enough to answer in a sentence?",
    "Did I give them easy power to correct me?",
    "Did I accept the correction without defending my first read?",
    "Did the check lower defensiveness, and did I chain into the right next move?",
  ],
  example: {
    without: [
      'A: "I don\'t know. The proposal just feels off."',
      "B: \"You're worried because you don't trust the team.\"",
      'A: "No, that\'s not what I said."',
      "Why it fails: B jumps from vague discomfort to motive and mistrust without consent, so A pushes back instead of opening up.",
    ],
    with: [
      'A: "I don\'t know. The proposal just feels off."',
      'B: "Before I respond, can I test a couple of reads? Is it the numbers, the team\'s capacity, or the way the risk is being presented?"',
      'A: "The numbers and the risk. The team is fine."',
      'B: "Got it. So the useful focus is confidence in the assumptions, not team capability."',
      'A: "Exactly."',
      "Why it works: B offers several correctable options instead of one verdict, accepts the correction cleanly, then reflects the clarified meaning back.",
    ],
    note: 'Halfway house: "Is the concern about trust in the team?" is better than asserting, but a single narrow guess still leaves them doing the widening. Offer two or three correctable options and a "something else" instead.',
  },
  influencePayoff: {
    feeling: '"They actually checked, instead of assuming they knew me."',
    principle:
      "When people feel interpreted without permission, they defend themselves even when the interpretation is partly right. When they are invited to correct it, they relax, clarify and help build the meaning with you.",
    gains: [
      "Fewer misread motives.",
      "Less defensiveness in sensitive conversations.",
      "More accurate emotional and practical information.",
      "Better timing before advice, validation or problem solving.",
      "Stronger trust, because the speaker stays the authority on their own experience.",
    ],
    whyMostFail: [
      'They disguise a conclusion as a question, so the "check" is really an accusation.',
      "They make the read too big or too clever, so it lands as a diagnosis.",
      "They defend their first guess instead of accepting the correction.",
      "They overuse it until an ordinary conversation starts to feel clinical.",
    ],
  },
  fieldTip: {
    headline:
      "If you would not want someone certain about that read of you, do not be certain about it for them.",
    body: 'The safety valve is the phrase "or something else." It keeps your read useful without trapping the other person inside the options you happened to think of.',
    example: "I may be reading this wrong. Is it A, B, or something else?",
    dont: '"I sense your resistance here\'s really about control." Diagnostic and intrusive.',
    do: '"Can I check, is it the workload, the timing, or something I\'ve missed?"',
  },
  method: [
    {
      step: "1",
      title: "Catch the inference",
      body: 'Notice the moment you are about to say what their silence, tone, wording, reaction or choice means. The tell is a sentence forming in your head that starts with "they\'re obviously..." or "what they really mean is...". That is your cue to slow down.',
    },
    {
      step: "2",
      title: "Name the uncertainty",
      body: 'Mark the read as a guess before you offer it. A short marker like "I may be reading this wrong" or "Before I assume" lowers the pressure and signals you are not claiming to know.',
    },
    {
      step: "3",
      title: "Offer a specific read",
      body: 'Do not fall back on a vague "What do you mean?" if you already have a hypothesis. Make it testable and small. Name one or two plausible reads they can confirm or knock down in a sentence.',
      examples: [
        { label: "Too vague", text: "Can you say more?" },
        {
          label: "Testable",
          text: "Is the concern mainly the timeline, or the fact that you weren't consulted?",
        },
      ],
    },
    {
      step: "4",
      title: "Give correction power",
      body: 'Hand them an easy exit from your read. Add "tell me if not", "or is it something else", or "you can correct me" so disagreeing costs them nothing. "Something else" is the safety valve that keeps them out of your box.',
    },
    {
      step: "5",
      title: "Accept the correction cleanly",
      body: 'If they correct you, take it. Do not explain why your first read was reasonable. That turns a check into a debate. "Got it," then update.',
    },
    {
      step: "6",
      title: "Respond to the clarified meaning",
      body: "Now reflect, validate, ask, advise or decide based on the corrected version, not your first guess. This is where the check pays off. You are responding to what is actually there.",
      examples: [
        {
          label: "Minimum viable move",
          text: "Before I respond, can I check what you mean by that?",
        },
        {
          label: "Stronger move",
          text: "I might be reading this wrong. Is the concern mainly the timeline, or the fact that you weren't consulted?",
        },
      ],
    },
  ],
  liveThreadClues: [
    "You're only saying that because...",
    "So what you really mean is...",
    "You're obviously upset about...",
    "They must think...",
    "This is clearly about...",
    "I know what's really going on here...",
  ],
  commonMistakes: [
    {
      mistake: "Disguising a conclusion as a question",
      soundsLike: '"Are you just afraid of being wrong?"',
      better:
        '"Can I check, is part of this about how it\'ll be judged, or something else?"',
    },
    {
      mistake: "Making the interpretation too big",
      soundsLike: '"Is this really about your relationship with authority?"',
      better:
        '"Is this about this decision, or a wider pattern you\'re seeing?"',
    },
    {
      mistake: "Stacking too many reads at once",
      soundsLike:
        '"Is it the timing, or the budget, or trust, or the way I said it, or...?"',
      better: '"Is it mainly the timing, or something else?"',
    },
    {
      mistake: "Correcting their correction",
      soundsLike: '"No, I think it\'s actually about..."',
      better: '"Okay, so it\'s the numbers, not the team. Got it."',
    },
    {
      mistake: "Overusing the move until it feels clinical",
      soundsLike: "checking the meaning of every ordinary sentence",
      better: "save it for moments where a wrong read would actually cost you",
    },
    {
      mistake: "Using a check to dodge accountability",
      soundsLike:
        '"Can I check what you meant by that?" when they\'re plainly owed an apology',
      better: "\"You're right, and I'm sorry.\"",
    },
    {
      mistake: "Ignoring the answer once they give it",
      soundsLike: "asking, then responding to your original guess anyway",
      better: "let their correction change what you say next",
    },
  ],
  recoveryPhrases: [
    "Thanks, I was reading that too narrowly.",
    "Got it. I'll drop that interpretation.",
    "I put words in your mouth there. Let me reset.",
    "That was more analysis than you asked for. What's the useful part to focus on?",
    "I misunderstood. Say it your way and I'll follow.",
    "I don't want to over-interpret this. What should I take from it?",
    "You're right, I jumped ahead. Let me listen first.",
    "I treated my guess like evidence. Let me back up.",
  ],
  bestRecoveryLine: "I put words in your mouth there. Let me reset.",
  chains: [
    {
      label: "Let-them-talk chain",
      sequence:
        "TC033 Minimal encouragers → TC064 Check before interpreting → TC004 Reflective listening",
      example: [
        "Give them room to keep going.",
        "Check the one read you're unsure about.",
        "Reflect the meaning back once they've confirmed it.",
      ],
    },
    {
      label: "Emotion chain",
      sequence:
        "TC064 Check before interpreting → TC006 Emotional labelling → TC005 Validation without agreement",
      example: [
        "Check which feeling is actually present.",
        "Name it only once it's confirmed.",
        "Validate the feeling without endorsing every premise.",
      ],
    },
    {
      label: "Clarify-then-act chain",
      sequence:
        "TC064 Check before interpreting → TC011 Summary check → TC013 Clean request",
      example: [
        "Check the interpretation.",
        "Summarise the clarified point back to them.",
        "Make or invite a clean next step.",
      ],
    },
    {
      label: "Advice chain",
      sequence:
        "TC036 Contextual opener → TC064 Check before interpreting → TC027 Permission-based advice",
      example: [
        "Set the context.",
        "Clarify what they actually need.",
        "Offer advice only once they want it.",
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC004",
      reason:
        'Reflective listening. Use TC064 when the meaning is only plausible, not confirmed. Use TC004 once you understand the statement well enough to reflect it back. If you\'d have to add "I might be wrong," check first.',
    },
    {
      id: "TC006",
      reason:
        "Emotional labelling. Use TC064 when you're unsure which emotion is present. Use TC006 when the feeling is clear and naming it would help. If two emotions could fit, check before you label.",
    },
    {
      id: "TC005",
      reason:
        "Validation without agreement. Use TC064 when you can't yet name what needs validating. Use TC005 when the concern is clear but you don't share the conclusion. If you can't state the concern in one sentence, check first.",
    },
    {
      id: "TC014",
      reason:
        "Validate the concern. Use TC064 when the concern itself is ambiguous. Use TC014 when it's clear and just needs acknowledging. If it could be process, outcome, fairness or respect, check before validating.",
    },
    {
      id: "TC037",
      reason:
        "Double-sided reflection. Use TC064 when you're guessing what the two sides are. Use TC037 when both sides of the tension are already explicit. Don't invent ambivalence: check first.",
    },
    {
      id: "TC040",
      reason:
        "Meaning reflection. Use TC064 when you're tempted to name a deeper meaning on incomplete evidence. Use TC040 when the person has already made that meaning visible. If it would surprise them, check before reflecting it.",
    },
  ],
};
