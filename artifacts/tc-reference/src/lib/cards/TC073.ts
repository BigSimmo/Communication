import type { CardData } from "../card-types";

export const TC073: CardData = {
  pdfUrl: "cards/TC073/TC073_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC073/TC073_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC073/TC073_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC073/TC073_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC073/TC073_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC073/TC073_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC073/TC073_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC073",
  whyItWorks:
    'Resistance-as-information means treating pushback (a pause, an objection, a delay, a "yes, but", a guarded answer) as useful data about a concern, constraint, value, risk, missing trust, or unmet condition, rather than as an enemy to defeat. The practical move is to notice the resistance, name it neutrally, and ask what it is telling you before you explain, defend, persuade, or walk away. It works because resistance met as a threat makes people argue, over-explain, or withdraw, which usually increases it. Resistance met as information lowers the temperature, brings the real blocker into view, and lets you adapt to the actual concern instead of a guessed one. The payoff is not that you become more forceful. It is that you become less blind.',
  whatItIsNot: [
    "Not a trick for overcoming objections or a sales pressure tactic.",
    "Not a way to make people justify their boundaries or explain their no.",
    "Not passive agreement with every objection, and not endless processing that avoids a decision.",
    'Not therapy language dressed up as workplace talk ("I sense resistance in your body").',
    "Not a debate move for proving the other person inconsistent, or for banking their vulnerabilities to use later.",
  ],
  overview: {
    coreFormula: [
      "Notice resistance → name it neutrally → ask what it carries → reflect the answer → adapt or stop.",
      "Hesitation + neutral label + one diagnostic question + respect for the choice.",
      "I'm hearing some hesitation. What's the main thing that doesn't work for you?",
      "I'm noticing a yes-but. I don't want to push past it. Is the concern risk, timing, workload, trust, or fit?",
      "If it reveals a constraint, adapt. If it reveals a value, validate it. If it reveals a firm boundary, stop.",
    ],
    minimumViableMove:
      "Notice the resistance, name it neutrally, and ask once what it is telling you before you explain, defend, or persuade.",
    impact: "Medium",
    difficulty: "Hard",
    misuse:
      "It fails when you use a respectful-sounding question to keep pressure alive: probing a firm no, cornering the person, or asking what the resistance means and then leaving the plan unchanged.",
    bestFor: [
      "Objections to a proposal, request, plan, offer, change, or piece of feedback",
      'Vague hesitation: "maybe", "I am not sure", "I guess", "yes, but"',
      "Repeated delays, silence, partial compliance, or guarded agreement",
      "Workplace disagreement where the real constraint is not yet explicit",
      "Personal conversations where someone seems reluctant but will not name why",
      "Coaching or leadership moments where defensiveness may be protecting a real concern",
      "Repair conversations where the other person has lost trust in the process",
    ],
  },
  notFor: [
    "They have given a clear boundary and do not want to explain it",
    "There is danger, abuse, coercion, or a need for immediate safety action",
    "You are using the question to keep a negotiation open after a no",
    "You cannot accept that the information may point to stopping",
    "The person is overwhelmed and needs space rather than inquiry",
    "You are not actually willing to adapt based on what you learn",
  ],
  phraseBank: [
    {
      id: "quick-openers",
      label: "Quick openers",
      tag: "Minimum-viable one-liners",
      tone: "Quick",
      phrases: [
        "I'm hearing some hesitation. What's the main thing that doesn't work for you?",
        "Something in this isn't landing. What should I understand before I respond?",
        "That resistance is useful information. What's it pointing to?",
        "What's the resistance telling us?",
        "I'd rather understand the hesitation than argue past it.",
        "What's the actual no or not-yet here?",
      ],
    },
    {
      id: "warm-social",
      label: "Warm / social",
      tag: "Low-pressure, personal",
      tone: "Warm",
      phrases: [
        "I don't want to push past that. What feels off about it?",
        "There's a no in there somewhere. What's the no protecting?",
        "I'm not trying to convince you. I want to understand the hesitation first.",
        "What part of this feels too much, too soon, or not right?",
        "No pressure. Is something about it not sitting right, or is it just a busy week?",
        "You don't have to explain if you'd rather not.",
        "Is the issue the idea itself, the timing, or how I'm framing it?",
      ],
    },
    {
      id: "professional",
      label: "Professional",
      tag: "Work, meetings, proposals",
      tone: "Professional",
      phrases: [
        "I'm hearing resistance, which usually means we're missing a constraint. What constraint should we put on the table?",
        "Before I defend the proposal, what's the risk you're seeing?",
        "What information is the pushback giving us about the plan?",
        "Is your concern about priority, workload, trust, evidence, authority, or timing?",
        "What would need to be true for this to become workable?",
        "The action isn't moving, which may be useful information. What's making it hard to commit?",
        "Useful signal. Is the concern budget, value, timing, or internal approval?",
      ],
    },
    {
      id: "digital-text",
      label: "Digital / text",
      tag: "Async and written replies",
      tone: "Quick",
      phrases: [
        "I'm reading your reply as hesitation rather than a simple no. What's the main blocker?",
        "Useful signal. Is the concern scope, timing, risk, or fit?",
        "Before I respond point-by-point, what's the underlying objection?",
        "I don't want to over-persuade here. What should I understand about the resistance?",
        "Quick check before I reply properly: is this a no, a not-yet, or a yes-if?",
      ],
    },
    {
      id: "diagnostic-asks",
      label: "Diagnostic asks",
      tag: "Naming the real blocker",
      tone: "Direct",
      phrases: [
        "Is this a no, a not-yet, or a yes-if?",
        "What part of this feels unworkable?",
        "What condition would need to be met first?",
        "What risk should I be taking more seriously?",
        "What am I missing about how this lands for you?",
        "Is the resistance about the idea, the timing, the trust level, or the amount of pressure?",
        "What's the biggest risk for you if we go ahead?",
        "What would make this workable?",
      ],
    },
    {
      id: "boundary-safe",
      label: "Boundary-safe",
      tag: "Respecting a no",
      tone: "Repair",
      phrases: [
        "A no is enough. You don't have to justify it. If you want to share the reason, I'll listen.",
        "We can stop here. I'm asking to understand, not to reopen pressure.",
        "If this is a firm boundary, I'll respect it and not keep probing.",
        "You don't have to justify it. I asked to understand, not to push.",
        "Is it useful to unpack the hesitation, or would you rather leave it there?",
        "I can work with that. We can adapt, pause, or drop it.",
      ],
    },
    {
      id: "high-pressure",
      label: "Under pressure",
      tag: "Conflict and debate",
      tone: "High-stakes",
      phrases: [
        "Let's pause the persuasion for a moment. What's the resistance telling us?",
        "I don't want to bulldoze the concern. Name the blocker and I'll work with that.",
        "Before this turns into a debate, what's the actual no or not-yet?",
        "What risk are you trying to prevent by pushing back?",
        "I don't want to sell past this. What's the resistance telling us about the plan?",
        "If this is a firm no, I'll respect it. If it's a not-yet, what would need to change?",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "The resistance is a firm boundary or a safety signal",
      action: "Respect it. Do not probe unless the person invites discussion.",
      phrase: "Understood. I'll leave it there.",
    },
    {
      condition: "You have not yet asked what the resistance means",
      action: "Name it neutrally and ask one diagnostic question.",
      phrase:
        "I'm hearing some hesitation. What's the main thing that doesn't work?",
    },
    {
      condition:
        "The answer revealed a real constraint, risk, value, or missing condition",
      action: "Reflect it back and adapt the plan.",
      phrase:
        "So the issue is quality risk, not unwillingness. What deadline would protect accuracy?",
    },
    {
      condition: "You asked but nothing concrete surfaced",
      action: "Ask one narrower diagnostic question.",
      phrase:
        "Is the concern the idea, the timing, the trust level, or the pressure?",
    },
    {
      condition: "The person is becoming more tense or less clear",
      action: "Release pressure and offer to stop.",
      phrase: "You don't have to justify it. We can leave this here.",
    },
    {
      condition: "The blocker is now clear: choose the next move",
      action:
        "Chain into the right package: validation for a concern, autonomy release for choice pressure, SBI for feedback pushback, NVC for an unmet need, a clean request for practical adaptation.",
      phrase: "That makes sense. What would make this workable?",
    },
  ],
  ladder: [
    {
      weak: '"Why are you being so negative?"',
      better: '"I hear the concern. What\'s the biggest risk for you?"',
      best: "\"I'm hearing some hesitation, and I don't want to push past it. What's the resistance telling us about the plan?\"",
    },
    {
      weak: '"You just don\'t understand the benefits."',
      better: '"Is the issue timing, workload, or something else?"',
      best: "\"If this is a firm no, I'll respect it. If it's a not-yet, what condition would need to change?\"",
    },
    {
      weak: "\"It's only a few emails, it shouldn't be that hard.\"",
      better: '"What\'s the main blocker on the timing?"',
      best: '"So the issue is quality risk, not unwillingness. What deadline would protect accuracy?"',
    },
  ],
  scenarios: [
    {
      situation: "Team member resists a deadline",
      move: "Pause defending the deadline. Name the timing resistance and find the real blocker: workload, approvals, quality risk, or unclear scope.",
      phrase: "I'm hearing timing resistance. What's the blocker?",
    },
    {
      situation: "A friend seems reluctant to attend",
      move: "Keep it low-pressure. Offer an easy exit and a lighter option rather than pressing for a reason.",
      phrase:
        "No pressure. Is something about it not sitting right, or is it just a busy week?",
    },
    {
      situation: "A client objects to price",
      move: "Treat it as a fit signal, not a hurdle. Find which concern it is before you respond, and do not use the answer to corner them.",
      phrase:
        "Useful signal. Is the concern budget, value, timing, or internal approval?",
    },
    {
      situation: "A partner resists feedback",
      move: "Check how the feedback is landing before repeating it. Repair the tone if it is landing as blame.",
      phrase:
        "I think this may be landing as blame. What are you hearing me say?",
    },
    {
      situation: "A stakeholder resists a change initiative",
      move: "Read polite-but-no-action as data. Look for authority, trust, incentives, or workload behind the stall.",
      phrase:
        "The action isn't moving, which may be useful. What's making it hard to commit?",
    },
  ],
  calibration: {
    working: [
      "Their shoulders or tone relax after you name the hesitation.",
      "They give a more specific concern.",
      "They shift from defending themselves to explaining a constraint.",
      "They correct your assumption without withdrawing.",
      "They offer a condition, an alternative, or a clearer no.",
      "They lean in and add detail rather than closing down.",
    ],
    adjust: [
      "Short, clipped answers.",
      'Repeated "I do not know".',
      "Rising irritation.",
      "They explain themselves only to appease you.",
      "Confusion about whether you are asking, challenging, or negotiating.",
      '"I said no" or "I do not want to talk about it": stop and release pressure.',
      "Signs of threat, shame, fear, or overwhelm: stop.",
      "You are asking again after they already answered: the conversation has shifted from understanding to extraction.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot resistance",
      task: 'Through the day, notice three moments of resistance: a no, a delay, a "yes, but", a topic change, or tense agreement. Write down the exact surface words each time.',
    },
    {
      day: "Day 2",
      title: "Name the form",
      task: "For each moment, label the form: objection, silence, delay, humour, defensiveness, vague agreement, or firm no. Notice which form you meet most often.",
    },
    {
      day: "Day 3",
      title: "List the hidden information",
      task: "Take one of those moments and list five things the resistance might be carrying: a constraint, a risk, a value, a trust signal, or a boundary.",
    },
    {
      day: "Day 4",
      title: "Draft neutral labels",
      task: 'Practise naming resistance without drama. Write three low-key labels you could say out loud: "I am hearing hesitation", "Something is not landing", "There is a blocker here".',
    },
    {
      day: "Day 5",
      title: "Draft the diagnostic question",
      task: 'Write one clean diagnostic question for each label: for example "What is the main thing that does not work?" or "Is this a no, a not-yet, or a yes-if?" Say each aloud once.',
    },
    {
      day: "Day 6",
      title: "Add the recovery line",
      task: 'Write one recovery phrase that restores choice if the question starts to feel like pressure: "You do not have to justify it. I asked to understand, not to push." Rehearse it until it sounds natural.',
    },
    {
      day: "Day 7",
      title: "Use it live",
      task: "In one real conversation, run the whole move once: notice, name neutrally, ask one question, listen, then adapt or stop. Afterwards, note what the resistance actually revealed.",
    },
  ],
  checklist: [
    "What form did the resistance take, objection, silence, delay, humour, defensiveness, vague agreement, or firm no?",
    "Did I treat the resistance as information, or as an obstacle to remove?",
    "Did I ask one clean diagnostic question, or did I interrogate?",
    "What did it reveal, a constraint, risk, value, boundary, missing trust, or missing condition?",
    "Did my next move actually change based on what I learned?",
    "Did I restore autonomy if the person seemed pressured?",
  ],
  example: {
    without: [
      'A: "Can you take on the client follow-up by Friday?"',
      'B: "I don\'t know. Friday seems unrealistic."',
      "A: \"It shouldn't be that hard. It's only a few emails.\"",
      'B: "That\'s not the point."',
      'A: "We all have a lot on. I need you to be flexible."',
      "Why it's weak: A treats resistance as a motivation problem and turns up the pressure, so the real blocker never surfaces.",
    ],
    with: [
      'A: "Can you take on the client follow-up by Friday?"',
      'B: "I don\'t know. Friday seems unrealistic."',
      "A: \"I'm hearing timing resistance. What's the main blocker?\"",
      'B: "I have two approvals stuck and I don\'t want to send half-accurate answers."',
      'A: "So the issue is quality risk, not unwillingness. What deadline would protect accuracy?"',
      'B: "Monday morning, unless someone clears the approvals today."',
      "Then, on a bigger disagreement:",
      'A: "I\'d like us to move to the new workflow next week."',
      "B: \"I'm not convinced. We've tried 'new workflows' before.\"",
      "A: \"That sounds like more than a surface objection. I don't want to sell past it. What's the resistance telling us?\"",
      'B: "People announce a new process, then the old urgent requests still come through. So it just becomes extra admin."',
      'A: "So the blocker is trust in enforcement, not the workflow itself."',
      'B: "Exactly."',
      "A: \"Then the useful question isn't 'can I convince you?' but 'what rule would make the workflow real?'\"",
      'B: "Requests outside the system need manager approval. Otherwise we\'ll not believe it."',
      'A: "Good. Let\'s design that condition before asking for buy-in."',
    ],
    note: "The move each time is the same: stop rebutting, name the resistance neutrally, ask one question, then let the answer change the plan.",
  },
  influencePayoff: {
    feeling:
      '"My hesitation was heard, not punished. They actually want to understand the concern, not steamroll it."',
    principle:
      "When resistance is met with curiosity instead of counter-argument, the real blocker comes into view, and you can only solve the problem you can actually see.",
    gains: [
      "Trust rises, because hesitation is not punished",
      "Accuracy rises, because the real blocker comes into view",
      "Options improve, because you adapt to the actual concern, not a guessed one",
      'Conflict cools, because it stops being "me versus you"',
      "Consent improves, because a no is not treated as an obstacle to break down",
      "You end up with a cleaner map of what is possible, not possible, not yet, or possible only under conditions",
    ],
    whyMostFail: [
      "They treat resistance as a threat and defend, argue, or over-explain, which increases it.",
      "They use a respectful-sounding question to keep pressure alive rather than to understand.",
      "They rebut the first objection before finding the real blocker underneath it.",
      "They ask what the resistance means, then carry on with the plan unchanged.",
    ],
  },
  fieldTip: {
    headline: "Resistance is often a signpost, not a wall.",
    body: 'When someone pushes back, read the signpost before trying to climb over it. Name what you notice, ask one question, listen cleanly, then adapt or stop. The quick line to keep in your pocket is: "What is the resistance telling us?"',
    example: '"What\'s the resistance telling us?"',
    dont: "Do not use a polite-sounding question to keep the pressure alive after a no.",
    do: "Do let the answer actually change the plan. That is what makes it inquiry rather than persuasion.",
  },
  method: [
    {
      step: "1",
      title: "Perception: notice the form of resistance",
      body: 'Listen for hesitation, objection, delay, silence, tense agreement, over-justification, sarcasm, a repeated "yes, but", or a sudden loss of energy. The resistance is the signal. Do not talk over it.',
      examples: [
        {
          label: "Cue words",
          text: '"maybe", "I guess", "yes, but", "we tried that before", a long pause.',
        },
      ],
    },
    {
      step: "2",
      title: "Move: stop the rebuttal reflex",
      body: "Do not answer the surface objection straight away. Pause the persuasion track for one turn. The urge to defend is exactly the thing you interrupt.",
      examples: [
        {
          label: "Instead of",
          text: "\"Well, actually, here's why that's not a problem...\"",
        },
        {
          label: "Do",
          text: "Let the objection sit for a beat, then get curious about it.",
        },
      ],
    },
    {
      step: "3",
      title: "Phrase: name the resistance neutrally",
      body: "Use low-drama language that describes what you notice without judging it. A neutral label lowers the temperature and makes it safe to be honest.",
      examples: [
        { label: "Weak", text: '"Why are you being difficult?"' },
        {
          label: "Better",
          text: '"I\'m hearing some hesitation." / "Something isn\'t landing."',
        },
      ],
    },
    {
      step: "4",
      title: "Calibration: ask what it is pointing to",
      body: "Invite the real information with one clean diagnostic question. Give categories if it helps, but do not force a narrow answer.",
      examples: [
        {
          label: "Ask",
          text: '"What\'s the concern?" / "What risk are you seeing?" / "Is this a no, a not-yet, or a yes-if?"',
        },
      ],
    },
    {
      step: "5",
      title: "Recovery: respect boundaries and repair pressure",
      body: "If the question starts to feel like pressure, explicitly restore the choice. A firm no is respected, not solved.",
      examples: [
        {
          label: "Say",
          text: '"You don\'t have to justify it. I asked to understand, not to push."',
        },
      ],
    },
    {
      step: "6",
      title: "Chain: choose the next package",
      body: "Depending on what you learn, chain into validation, autonomy release, double-sided reflection, NVC/OFNR, SBI, or a concrete request. The move should feel calm, curious, and practical: never like a trap.",
      examples: [
        {
          label: "Then",
          text: '"That makes sense. What would make this workable?"',
        },
      ],
    },
  ],
  liveThreadClues: [
    '"maybe" / "I\'m not sure" / "I guess"',
    '"yes, but..."',
    '"we tried that before"',
    "A long pause or sudden silence",
    "Tense or clipped agreement",
    "Over-justifying or repeating themselves",
    "Sarcasm or a sudden drop in energy",
    "Polite agreement followed by no action",
  ],
  commonMistakes: [
    {
      mistake: "Rebutting too soon",
      soundsLike: "\"Well, actually, here's why that's not a problem...\"",
      better:
        '"Before I respond to that. What\'s the real blocker underneath it?"',
    },
    {
      mistake: "Calling the resistance irrational",
      soundsLike: '"Why are you being so negative about this?"',
      better: '"I hear a real concern in there. What\'s it protecting?"',
    },
    {
      mistake: "Using therapy-speak",
      soundsLike: '"I sense resistance in your body."',
      better: "\"Something in this isn't landing for you. What's it?\"",
    },
    {
      mistake: "Over-categorising into a cage",
      soundsLike: '"So it\'s either timing or fear, right?"',
      better: '"Is it timing, workload, trust, or something I\'ve not named?"',
    },
    {
      mistake: "Turning curiosity into cross-examination",
      soundsLike: '"Why? But why? And why that?"',
      better: "\"One question: what's the main thing that doesn't work?\"",
    },
    {
      mistake: "Ignoring the answer",
      soundsLike:
        "asking the concern, then pressing on with the same plan unchanged",
      better:
        '"You said the deadline is the issue, so let\'s change the deadline."',
    },
    {
      mistake: "Confusing delay with consent",
      soundsLike: 'treating "not yet" as a quiet yes and moving ahead',
      better:
        '"A not-yet isn\'t a yes. What condition would need to be met first?"',
    },
    {
      mistake: "Treating a boundary as a puzzle",
      soundsLike: '"I still don\'t understand why not. Help me get it."',
      better: "\"That's a clear no. I'll respect it and stop here.\"",
    },
  ],
  recoveryPhrases: [
    "I realise that sounded like I was trying to talk you out of your concern. I'm not.",
    "You don't have to justify the no. I was asking to understand, not to pressure you.",
    "Let me slow down. I moved into persuasion before I understood the blocker.",
    "That was too many questions. The short version: what should I understand?",
    "I hear that this is a firm boundary. I'll stop pushing.",
    "I treated the resistance as a problem to remove. It may actually be useful information about the plan.",
    "Let me reflect what I think I heard: the concern isn't the goal, it's how we're getting there.",
    "I can work with that. We can adapt, pause, or drop it.",
  ],
  bestRecoveryLine:
    "You don't have to justify the no. I was asking to understand, not to pressure you.",
  chains: [
    {
      label: "Concern → workable",
      sequence:
        "Resistance-as-information → Validation without agreement → Ask what would make it workable",
      example: [
        '"I hear hesitation. What\'s the main concern?"',
        '"That concern makes sense. I\'m not assuming the whole conclusion is right."',
        '"So what would make this workable?"',
      ],
    },
    {
      label: "Release the pressure",
      sequence:
        "Resistance-as-information → Autonomy release → Low-friction ask",
      example: [
        "\"I'm hearing resistance. What's it pointing to?\"",
        '"A no is genuinely okay here."',
        '"Would a smaller next step help, or should we leave it?"',
      ],
    },
    {
      label: "Hold both sides",
      sequence:
        "Resistance-as-information → Double-sided reflection → Permission-based advice",
      example: [
        '"Part of you sees the value, and part of you sees the risk."',
        '"Would it help if I shared one option, or would you rather stay with the concern?"',
      ],
    },
    {
      label: "After feedback",
      sequence: "Resistance-as-information → SBI → Repair",
      example: [
        '"I think my feedback landed as blame. What are you hearing me say?"',
        '"Here\'s the specific behaviour and its impact, cleanly."',
        '"Let\'s repair the process before going further."',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC005",
      reason:
        "Validation without agreement acknowledges an emotion or concern without agreeing the person is right. Use it once resistance-as-information has surfaced a feeling. Use TC073 first when you still do not know what the resistance is about.",
    },
    {
      id: "TC021",
      reason:
        "Autonomy release removes pressure and hands the choice back. TC073 diagnoses why the choice is being withheld. Reach for autonomy release when the person needs room, not more questions.",
    },
    {
      id: "TC037",
      reason:
        'Double-sided reflection mirrors both sides of ambivalence ("part of you... part of you..."). Use it when the resistance is mixed feelings. Use TC073 when you are still hunting for a hidden constraint or value.',
    },
    {
      id: "TC052",
      reason:
        "SBI structures Situation-Behaviour-Impact for feedback. TC073 is what you switch to when the feedback is pushed back on: diagnose the pushback before restating the point.",
    },
    {
      id: "TC053",
      reason:
        "NVC / OFNR structures observation, feeling, need and request. Use it to name the unmet need behind resistance and make a clean request. TC073 is the earlier pause that finds the need in the first place.",
    },
    {
      id: "TC083",
      reason:
        "Ask what would make it workable searches for the condition that would make a plan acceptable. It is the natural next step once TC073 has named the resistance and adaptation looks possible.",
    },
  ],
};
