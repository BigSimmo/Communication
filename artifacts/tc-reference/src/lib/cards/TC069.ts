import type { CardData } from "../card-types";

export const TC069: CardData = {
  pdfUrl: "cards/TC069/TC069_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC069/TC069_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC069/TC069_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC069/TC069_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC069/TC069_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC069/TC069_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC069/TC069_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC069/TC069_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC069",
  whyItWorks:
    "Clarify objection is the deliberate move of slowing down when resistance appears and asking what the objection is really about before you answer it. When someone pushes back, you don't answer the objection you assume they mean. You ask one small, neutral question that locates the real concern: risk, cost, timing, trust, fairness, workload, or a missing detail. It works because most objections are compressed signals, not finished arguments, and naming the actual concern lets you respond accurately instead of arguing with a guess.",
  whatItIsNot: [
    "It is not objection-handling as a pressure tactic, or talking someone out of a no.",
    "It is not debating, correcting, cornering, or asking a chain of questions until they give in.",
    "It is not pretending to listen while you quietly load your rebuttal.",
    "It is not labelling someone as resistant, difficult, irrational, or scared.",
    "It is not a substitute for accepting a clear boundary. If the objection is a final no, respect it.",
  ],
  overview: {
    coreFormula: [
      "Cue → Pause → Clarify → Name → Check → Respond.",
      "Cue: notice the objection without treating it as a threat.",
      "Pause: resist the reflex to explain or rebut.",
      "Clarify: ask one short neutral question about the real concern.",
      'Name: reflect the concern in their words, "So the main issue is timeline risk."',
      "Check, then respond: confirm you have it right, then answer the actual concern or accept the boundary.",
    ],
    minimumViableMove:
      'When resistance appears, ask one short neutral question ("What part of that is the main concern?") then pause and listen before you respond.',
    impact: "High",
    difficulty: "Medium",
    misuse:
      "It fails when you answer the objection you guessed at instead of clarifying the real one, which leaves the person feeling managed or misunderstood. It tips into manipulation if the questions are used to corner someone, wear resistance down, or extract a concession. Use it to understand and respect the concern, not to override a no.",
    bestFor: [
      'Vague pushback like "I\'m not sure" or "That won\'t work"',
      '"Too risky", "I don\'t like it", or "We tried that"',
      '"I need to think about it" and other stalls',
      "Objections that could be about several different things",
      "Decisions with real trade-offs",
      "Feedback conversations and change proposals",
      "Requests, negotiations, and repair conversations",
    ],
  },
  notFor: [
    "They have already given a clear, final no or boundary",
    "The moment calls for an apology, not more questions",
    "Safety, privacy, or immediate practical help matters more",
    "Silence would serve them better than another question",
    "You are using questions to stall, win, or keep the pressure on",
    "You want them to justify themselves rather than be understood",
  ],
  phraseBank: [
    {
      id: "quick-openers",
      label: "Quick openers",
      tag: "Short one-liners",
      tone: "Quick",
      phrases: [
        "What part of that's the main concern?",
        "What's the main worry here?",
        "What's the sticking point?",
        "Which bit feels off?",
        "What's the real hesitation?",
        "What would need to change?",
        "Say more about what's not sitting right?",
        "What's the one thing that's stopping you?",
      ],
    },
    {
      id: "soft-warm",
      label: "Soft and warm",
      tag: "Fragile or sensitive moments",
      tone: "Warm",
      phrases: [
        "Help me understand what feels off about it.",
        "I want to get this right. What's the concern underneath it?",
        "No rush. What's making you hesitate?",
        "What matters most to you here?",
        "Fair enough. What would you need to feel okay about it?",
        "I'd rather understand than guess. What's the worry?",
        "What am I not seeing yet?",
      ],
    },
    {
      id: "work-decisions",
      label: "Work and decisions",
      tag: "Meetings, proposals, decisions",
      tone: "Professional",
      phrases: [
        "Is your concern mainly about risk, timing, cost, or something else?",
        "Before I respond, is the blocker the plan itself or the deadline?",
        "Is this a scope worry, a resourcing worry, or confidence in delivery?",
        "When you say it feels risky, is that the timeline, the budget, or delivery?",
        "Is the hesitation about the change itself, or how the rollout will land?",
        "When you say this isn't workable, is the blocker scope, timing, or resourcing?",
        "Is the obstacle the number, the risk attached to it, or the terms?",
      ],
    },
    {
      id: "two-option-questions",
      label: "Two-option questions",
      tag: "Narrow it to a choice",
      tone: "Direct",
      phrases: [
        "Is the concern the risk itself, or the confidence that we can manage it?",
        "When you say it won't work, do you mean it can't, or not by Friday?",
        "Is it the idea you're unsure about, or the timing?",
        "Is this more about trust, or about workload?",
        "Do you mean it's wrong, or that it's not the right moment?",
        "Is that a not-yet, or a not-at-all?",
        "Is the issue the decision, or how it gets rolled out?",
      ],
    },
    {
      id: "complaints-repair",
      label: "Complaints and repair",
      tag: "When you missed or over-reached",
      tone: "Repair",
      phrases: [
        "Is the frustrating part the outcome, the delay, or how it was communicated?",
        "Is the main issue the original problem, or how we handled it after?",
        "I may have answered the wrong thing. What was the concern you wanted me to hear?",
        "I jumped ahead. Before options, what's the core concern?",
        "Let me make that simpler: is the concern more about timing, or trust?",
        "I'm not trying to talk you out of it. I'm trying to understand what matters.",
        "No need to justify it. I just want to understand, not argue.",
      ],
    },
    {
      id: "boundary-high-pressure",
      label: "Boundary and high-pressure",
      tag: "Possible no, high stakes",
      tone: "High-stakes",
      phrases: [
        "You don't have to justify the no. If it's useful, I'd like to understand which concern matters most.",
        "Let me slow down. What's the non-negotiable issue here?",
        "I'll respect your no. If you want to say, is there a specific concern you'd want me to understand?",
        "Before I try to answer, can I separate the concerns. Is it evidence, risk, trust, or the precedent it sets?",
        "When you say this doesn't feel right, is it about trust, timing, or feeling pressured?",
        "This matters, so I'd rather get it right than get it fast. What's the real objection?",
        "If this is a firm no, tell me and I'll stop. If not, what's the concern?",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "They gave a clear, final no or boundary",
      action: "Respect it. Don't clarify unless they invite you.",
      phrase: "Understood. I'll respect that.",
    },
    {
      condition: "The objection is vague, compressed, or ambiguous",
      action: "Ask one neutral clarifying question about the concern.",
      phrase: "What part of that's the main concern?",
    },
    {
      condition: "They named a specific concern",
      action: "Reflect it back and check before you respond.",
      phrase: "So the main concern is the timeline, not the plan?",
    },
    {
      condition: "The concern comes from missing information",
      action: "Answer that specific gap, headline first.",
      phrase: "Here's the part you didn't have yet...",
    },
    {
      condition: "The concern is about trust, fairness, or past harm",
      action: "Slow down. Validate or repair before problem-solving.",
      phrase: "That makes sense given what happened last time.",
    },
    {
      condition: "Your question landed badly",
      action: "Recover and give them room.",
      phrase: "No need to justify it. I'm trying to understand, not argue.",
    },
  ],
  ladder: [
    {
      weak: '"Why not?" This sounds like a challenge and makes the person defend themselves.',
      better:
        '"What\'s your hesitation?" This opens the door, but can still sound slightly evaluative.',
      best: '"What part of that\'s the main concern?" This focuses on the issue rather than the person.',
    },
    {
      weak: '"That\'s not really a problem." This dismisses the objection outright.',
      better:
        '"I think I can solve that." This may help, but it rushes past the concern.',
      best: '"Is the concern the risk itself, or the confidence that we can manage it?" This separates concern types before solving.',
    },
    {
      weak: '"You\'re overthinking it." This attacks the person.',
      better:
        "\"I can see why you'd ask.\" This validates, but doesn't clarify anything.",
      best: '"Fair question. What would you need to know before this felt safe enough to consider?" This clarifies their decision criteria.',
    },
    {
      weak: '"But the data says it works." This buries the objection under proof.',
      better:
        '"What data would help?" This offers evidence, but may still miss the point.',
      best: '"Is your concern the evidence, the rollout risk, or trust in the source?" This diagnoses before proving.',
    },
  ],
  scenarios: [
    {
      situation: "Work proposal called risky",
      move: "Split the vague risk into concrete categories before defending the plan.",
      phrase:
        "When you say the plan feels risky, is that the timeline, the budget, or confidence in delivery?",
    },
    {
      situation: "Customer complaint",
      move: "Separate the original problem from how it was handled.",
      phrase:
        "Is the main issue the original problem, the delay, or how the update was handled?",
    },
    {
      situation: "Feedback pushback",
      move: "Find whether they dispute the content or the fairness.",
      phrase:
        "When you push back on that, is the concern accuracy, fairness, or what happens next?",
    },
    {
      situation: "Boundary conversation",
      move: "Respect the no first, then offer an optional door to the concern.",
      phrase:
        "I'll respect your no. If you want to say, is there a specific concern you'd want me to understand?",
    },
    {
      situation: "Negotiation stall",
      move: "Locate whether the block is the number, the risk, or the terms.",
      phrase:
        "Is the obstacle the number itself, the risk attached to it, or the terms around it?",
    },
    {
      situation: "Team change resisted",
      move: "Separate the change itself from how it gets rolled out.",
      phrase:
        "Is the hesitation about the change itself, or about how people will experience the rollout?",
    },
  ],
  calibration: {
    working: [
      "They become more specific and add detail.",
      "They relax slightly and drop the defensive edge.",
      "They correct your understanding without bristling.",
      'You hear a clean landing: "Yes, exactly," "That\'s the issue," or "It\'s mostly the timeline."',
      "They move from a vague no to a named concern.",
      "The conversation shifts from defending to problem-solving.",
    ],
    adjust: [
      'They go terse or repeat "I already said no."',
      "They laugh awkwardly, look away, or answer only to escape the question.",
      "Soften your wording when the relationship is fragile or the status gap is wide.",
      "Use more structured wording when several concerns are tangled and the stakes are high.",
      'Stop entirely at a boundary: "I\'m not interested," "No," or "This isn\'t up for debate."',
      "If you've already asked one question, stop and let them have the floor.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Sort the concern",
      task: "Take ten vague objections you've heard recently and, for each, list which concern categories it could belong to: risk, cost, timing, trust, fairness, workload, evidence, identity, control, or values.",
    },
    {
      day: "Day 2",
      title: "One question each",
      task: "For each of those ten objections, write a single clarifying question. Delete any second question unless the first answer would clearly invite it.",
    },
    {
      day: "Day 3",
      title: "Tone calibration",
      task: 'Say "What part of that is the main concern?" out loud in three tones: defensive, clinical, and warm. Record yourself if you can. Keep only the warm version.',
    },
    {
      day: "Day 4",
      title: "Reflect before answering",
      task: 'In a low-stakes conversation, practise saying "So the concern is..." and checking it back before you offer any response.',
    },
    {
      day: "Day 5",
      title: "Boundary stop",
      task: 'Rehearse accepting a clear no with "Understood. I\'ll respect that." Practise until stopping feels as natural as continuing.',
    },
    {
      day: "Day 6",
      title: "Two-option questions",
      task: 'Turn five of your open clarifiers into two-option questions ("Is it the risk, or the confidence we can manage it?") and notice which ones lower the effort of answering.',
    },
    {
      day: "Day 7",
      title: "Live run",
      task: "In one real conversation where someone pushes back, make exactly one clarifying move, reflect the concern back, then respond to the actual concern, and notice whether the exchange got more accurate.",
    },
  ],
  checklist: [
    "Did I clarify the objection before answering it?",
    "Did my question sound curious rather than challenging?",
    "Did I ask about the concern, not the person?",
    "Did I reflect the actual concern back in their words?",
    "Did I stop after one question when they needed space?",
    "Did I protect autonomy, dignity, and safety, and respect a clear no?",
  ],
  example: {
    without: [
      'A: "I don\'t think this plan will work."',
      'B: "It will. We already checked the numbers."',
      'A: "That\'s not what I meant."',
      "Why it's weak:",
      "answers an objection B only guessed at",
      "turns pushback into a disagreement to win",
      "leaves A feeling unheard and managed",
    ],
    with: [
      'A: "I don\'t think this plan will work."',
      'B: "What part feels least workable?"',
      'A: "The timeline. We can do the work, but not by Friday."',
      "B: \"So the issue isn't the plan itself. It's the deadline.\"",
      "Why this is better:",
      "B locates the category before solving anything",
      "the real concern (the deadline) is now on the table",
      'A: "I\'m not comfortable approving this."',
      'B: "Before I answer, can I separate the concerns? Is the main issue evidence, risk ownership, stakeholder trust, or the precedent it sets?"',
      'A: "Stakeholder trust. Last time we changed direction, people felt blindsided."',
      "B: \"That's useful. So the objection isn't only the decision. It's the rollout risk. Would a consultation step before approval help, or is the concern stronger than that?\"",
      "Why this is advanced:",
      "B clarifies, reflects it back, and checks before responding",
      "B respects autonomy and doesn't force agreement",
    ],
    note: "The poor version wins an argument the person never made. The advanced version finds the objection they actually had.",
  },
  influencePayoff: {
    feeling:
      '"They actually wanted to understand my concern, not just get past it."',
    principle:
      "People drop their guard when their resistance is treated as information worth understanding, not an obstacle to remove.",
    gains: [
      "Less wasted persuasion: you stop answering the wrong issue.",
      "Dignity is protected: the other person is treated as someone with a reason, not an obstacle.",
      "Defensiveness drops, because your first response to resistance is curiosity rather than rebuttal.",
      "Cleaner problem-solving: once the real concern is named, the next move can be smaller and more useful.",
      "The influence comes from accuracy and respect, not pressure.",
      "The outcome stays honest: agreement, a better option, a boundary, or a clean no.",
    ],
    whyMostFail: [
      "They answer the objection they guessed at instead of the one the person actually has.",
      "They fire off several clarifying questions in a row until it feels like an interrogation.",
      "They clarify only to load a better rebuttal, so the curiosity is fake.",
      'They label the concern too early ("So you\'re afraid of change") instead of letting the person name it.',
    ],
  },
  fieldTip: {
    headline:
      "Don't answer the first shape of the objection: clarify the concern underneath it.",
    body: "The first thing someone objects to is rarely the whole story. Ask one neutral question, then wait: the wait is part of the technique. If the answer turns out to be a firm no, the best use of the move is to stop.",
    example: "What part of that's the main concern?",
    dont: "Rebut the objection you assumed they meant.",
    do: "Ask one question, name the real concern, then respond to that.",
  },
  method: [
    {
      step: "1",
      title: "Catch the objection cue",
      body: "Notice the objection without treating it as a threat. It might be a flat no, a hesitation, a change in expression, a complaint, or the same concern raised again. The cue is a signal to slow down, not to defend.",
      examples: [
        {
          label: "Cues",
          text: '"I\'m not sure..." / "That won\'t work." / "Too risky." / "We tried that."',
        },
      ],
    },
    {
      step: "2",
      title: "Pause instead of answering",
      body: "Don't answer immediately. The reflex is to explain, reassure, or rebut: resist it. One breath of pause is what separates clarifying from arguing. Choose a single neutral question rather than a defence.",
      examples: [
        { label: "Instead of", text: "\"It'll be fine, here's why...\"" },
        { label: "Try", text: '"What part of that\'s the main concern?"' },
      ],
    },
    {
      step: "3",
      title: "Ask about the concern, not the person",
      body: 'Aim the question at the issue, never at their character. Useful openers: "What part...", "Is the main concern...", or "When you say X, do you mean Y or Z?" A two-option question lowers the effort of answering.',
      examples: [
        { label: "Open", text: '"What\'s the sticking point?"' },
        { label: "Two-option", text: '"Is it the cost, or the timing?"' },
      ],
    },
    {
      step: "4",
      title: "Name the category",
      body: "As they answer, place the concern: risk, trust, cost, timing, fairness, control, workload, values, or evidence. Naming the category, out loud or to yourself, is what makes the next move accurate.",
      examples: [
        {
          label: "Name it",
          text: '"So the issue is the timeline, not the plan itself."',
        },
      ],
    },
    {
      step: "5",
      title: "Reflect and check before you respond",
      body: "Say the concern back in their words and confirm it before answering. Only once they agree do you respond to the actual concern, or accept the boundary.",
      examples: [
        {
          label: "Check",
          text: '"So the main concern is the deadline, have I got that right?"',
        },
      ],
    },
    {
      step: "6",
      title: "Recover or chain",
      body: 'If the question felt too pointed, give them room: "No need to justify it. I\'m just trying to understand what matters most." Once the concern is clear, chain into the right next move: validate it, answer headline-first, make a specific ask, or release the pressure.',
      examples: [
        {
          label: "Recover",
          text: '"No need to justify it. I\'m trying to understand, not argue."',
        },
        {
          label: "Release",
          text: '"That may or may not change your decision."',
        },
      ],
    },
  ],
  liveThreadClues: [
    '"I\'m not sure..."',
    '"That won\'t work."',
    '"Too risky."',
    '"I don\'t like it."',
    '"We tried that."',
    '"I need to think about it."',
    '"This doesn\'t feel right."',
    '"I\'m not comfortable with this."',
  ],
  depthDial: [
    {
      depth: "Light",
      useWhen:
        "the relationship is fragile, the status gap is wide, or they may feel evaluated",
      phrase: "Help me understand what feels off about it.",
    },
    {
      depth: "Neutral",
      useWhen: "ordinary pushback where you just need the concern",
      phrase: "What part of that's the main concern?",
    },
    {
      depth: "Structured",
      useWhen: "stakes are high and several concerns are tangled together",
      phrase: "Is the main issue risk, timing, cost, or something else?",
    },
  ],
  commonMistakes: [
    {
      mistake: 'Asking "Why?" like a cross-examination',
      soundsLike: '"Why would you object to that?"',
      better: '"What part of that\'s the main concern?"',
    },
    {
      mistake: "Stacking clarifying questions until it's an interrogation",
      soundsLike: '"Is it cost? Timing? Scope? The team? The risk?"',
      better: 'Ask one, then listen: "What\'s the main worry?"',
    },
    {
      mistake: "Clarifying only to load a rebuttal",
      soundsLike: "\"Right, but here's why that's not actually a problem...\"",
      better:
        "Clarify to understand, and let the answer change your next move.",
    },
    {
      mistake: "Labelling the concern too early",
      soundsLike: '"So you\'re afraid of change."',
      better: '"What\'s the part that feels riskiest to you?"',
    },
    {
      mistake: "Turning a clear no into a problem to solve",
      soundsLike: '"I hear your no. So how do we get you to yes?"',
      better: '"Understood. I\'ll respect that."',
    },
    {
      mistake: "Validating, then ignoring the answer",
      soundsLike:
        '"That\'s fair," then carrying on with exactly what they objected to',
      better: "Let the clarified concern actually shape what you do next.",
    },
    {
      mistake: "Business-speak when the person is simply hurt",
      soundsLike: '"Can you unpack your stakeholder concern?"',
      better:
        '"It sounds like this stung. What\'s the bit that mattered most?"',
    },
    {
      mistake: "Pushing on after the concern is clear",
      soundsLike: "one more question, then one more...",
      better: "Stop clarifying once you understand. Accuracy, not pressure.",
    },
  ],
  recoveryPhrases: [
    "I answered the wrong objection. What should I've asked first?",
    "I'm not trying to talk you out of it. I'm trying to understand what matters.",
    "No need to justify it. We can stop there.",
    "Let me make that simpler: is the concern more about timing, or trust?",
    "I jumped ahead. Before options, what's the core concern?",
    "Understood. I'll respect that.",
    "That's landing more sharply than I meant. Let me pause and listen first.",
  ],
  bestRecoveryLine:
    "No need to justify it. I'm trying to understand, not argue.",
  chains: [
    {
      label: "Clarify then acknowledge",
      sequence: "Clarify objection → Validate the concern (TC014) → BLUF",
      example: [
        '"What part feels least workable?"',
        '"The timeline, not by Friday."',
        "\"That's fair, the deadline's genuinely tight.\"",
        '"Here\'s the shortest path: we move the launch to Monday."',
      ],
    },
    {
      label: "Clarify then hold your line",
      sequence:
        "Clarify objection → Validation without agreement (TC005) → Specific ask (TC068)",
      example: [
        '"Is the worry the cost, or the timing?"',
        '"The cost."',
        '"I get why the number feels high."',
        '"I\'d still like to go ahead at this price. Can we?"',
      ],
    },
    {
      label: "Clarify then release the pressure",
      sequence: "Clarify objection → Autonomy release",
      example: [
        '"What\'s the real hesitation?"',
        '"I need to think it over."',
        '"That\'s completely fine."',
        '"You don\'t have to decide now. Take the week."',
      ],
    },
    {
      label: "Clarify then ask permission",
      sequence: "Clarify objection → Permission to disagree (TC079)",
      example: [
        '"Is it the plan, or the risk attached to it?"',
        '"The risk."',
        '"Can I offer a different read on that risk?"',
        '"Go on."',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC014",
      reason:
        "Clarify first when the objection isn't clear enough to validate accurately. Use TC014 to acknowledge a concern that's already clear. The trap is validating a guessed concern.",
    },
    {
      id: "TC005",
      reason:
        "Use TC069 to find what they're objecting to. Use TC005 when you understand the concern but don't agree with the conclusion. Clarify first, then validate without agreeing.",
    },
    {
      id: "TC068",
      reason:
        "If you're the one asking, use TC068's specific ask. If they push back, switch to TC069 to locate the objection. Don't mistake a weak request for a real objection.",
    },
    {
      id: "TC073",
      reason:
        "TC069 gets the one objection in front of you now. TC073 reads resistance as a pattern across the whole interaction. One question versus pattern-reading.",
    },
    {
      id: "TC077",
      reason:
        "Clarify first when the objection is vague. Lead with TC077's shared point when the common ground is already obvious.",
    },
    {
      id: "TC079",
      reason:
        "Once the concern is clear and you hold a different view, use TC079 to ask consent before pushing back, especially when the objection is personal or values-based.",
    },
  ],
};
