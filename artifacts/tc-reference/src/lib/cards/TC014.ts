import type { CardData } from "../card-types";

export const TC014: CardData = {
  pdfUrl: "cards/TC014/TC014_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC014/TC014_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC014/TC014_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC014/TC014_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC014/TC014_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC014/TC014_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC014/TC014_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC014/TC014_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC014",
  whyItWorks:
    "Validate the concern is the deliberate move of acknowledging that a worry is legitimate before you answer or reframe it. You validate the concern, not the conclusion. You are not agreeing that they are right, only that the worry is reasonable. It works because people become far less defensive once they feel their concern has genuinely been heard: resistance stops being something they must defend and becomes information you can both work with, and you stay warm and credible instead of steamrolling their point.",
  whatItIsNot: [
    "It is not agreeing their conclusion is right, pretending to share their view, or flattering resistance.",
    "You validate the concern, not necessarily the conclusion, and never a false fact.",
    "It is not a script for pressure, extraction or control.",
    "It is not a substitute for actually listening to the answer they give back.",
  ],
  overview: {
    coreFormula: [
      "Concern named + why it makes sense + clarifying bridge + response.",
      "That's a fair concern. If this felt rushed, I'd be cautious too. Is the main worry timing or risk?",
      "I can see why cost would be the sticking point. The question is whether the saving is worth the trade-off.",
      "That makes sense. You're not saying no to the idea. You're worried about whether it will actually work.",
      "I'd worry about follow-through too. That's why I'd start with one owner and a two-week trial.",
    ],
    minimumViableMove:
      'Say "That\'s a fair concern" and name the concern out loud before you respond.',
    impact: "High",
    difficulty: "Medium",
    misuse:
      "It fails when you validate mechanically or use the acknowledgement as a soft opening to push your own agenda: the person feels handled rather than heard. It also fails if you validate a false conclusion as if it were true, which costs you credibility.",
    bestFor: [
      "Handling objections without arguing",
      "Lowering defensiveness before you persuade or recommend",
      'Turning a vague "no" into a specific, workable concern',
      "Giving feedback or correction that could trigger resistance",
      "Sales, pitching or proposing a change",
      "Disagreements where the other person feels dismissed",
      "Negotiating a next step after pushback",
    ],
  },
  notFor: [
    "The person needs safety, privacy, silence or direct practical help instead",
    "They want a straight answer or information, not more acknowledgement",
    "The issue is a firm boundary, not a negotiable concern",
    "Physical safety or an immediate emergency takes priority",
    "You would be validating a false fact as if it were true",
    "They have already accused you of patronising them",
  ],
  phraseBank: [
    {
      id: "quick-validators",
      label: "Quick validators",
      tag: "One-line acknowledgements",
      tone: "Quick",
      phrases: [
        "That's a fair concern.",
        "I can see why that would give you pause.",
        "That part makes sense.",
        "That's not a silly worry.",
        "I get why you'd be cautious.",
        "That's a legitimate thing to check.",
        "That's worth pausing on before we go further.",
      ],
    },
    {
      id: "natural-warm",
      label: "Natural and warm",
      tag: "Warmth before the answer",
      tone: "Warm",
      phrases: [
        "Given what happened last time, I'd be cautious too.",
        "I can see why you wouldn't want to rush into this.",
        "That sounds less like resistance and more like wanting to be careful.",
        "If I thought this might create more work without payoff, I'd hesitate too.",
        "That's exactly the kind of thing that can quietly derail a plan.",
        "Honestly, I'd be asking the same thing in your position.",
      ],
    },
    {
      id: "professional",
      label: "Professional",
      tag: "Work, meetings and decisions",
      tone: "Professional",
      phrases: [
        "That's a legitimate risk to consider.",
        "The concern I'm hearing is reliability, not the principle.",
        "It sounds like the main issue is implementation.",
        "I agree that sustainability is the key risk.",
        "The worry isn't whether the idea is appealing. It's whether the execution is realistic.",
        "Let me make sure I have the concern right before I answer it.",
      ],
    },
    {
      id: "bridge-to-options",
      label: "Persuasive / bridge to options",
      tag: "From objection to a smaller step",
      tone: "Direct",
      phrases: [
        "That concern is exactly why I'd suggest a smaller first step.",
        "If that's the worry, I wouldn't push the full version either.",
        "Let's design around that constraint rather than ignore it.",
        "That's the reason I'd make this reversible.",
        "If we can't solve that concern, I wouldn't recommend moving ahead.",
        "Is the main worry the time, the cost, or whether it will actually work?",
      ],
    },
    {
      id: "conflict-safe",
      label: "Conflict-safe",
      tag: "When it has turned tense",
      tone: "Repair",
      phrases: [
        "I'm not dismissing that.",
        "I can see why it landed that way.",
        "Before I respond, I want to make sure I understand the concern.",
        "I think there's a fair point in what you're saying.",
        "I see the part where this felt unfair.",
      ],
    },
    {
      id: "high-status-pressure",
      label: "High-status / busy person",
      tag: "Brief, under time or status pressure",
      tone: "High-stakes",
      phrases: [
        "That's the right risk to test.",
        "I agree that execution is the constraint.",
        "The concern is valid. My answer is...",
        "Yes, that's the key trade-off.",
        "I wouldn't ignore that constraint either.",
      ],
    },
    {
      id: "digital-text",
      label: "Digital / text",
      tag: "One clean sentence",
      tone: "Quick",
      phrases: [
        "Fair concern. I think the key issue is...",
        "I get the hesitation. The way I'd reduce the risk is...",
        "Is your main worry time, cost, or complexity?",
        "That's a reasonable pushback. I'd solve it by...",
        "Agree that follow-through is the risk. My suggestion is...",
      ],
    },
    {
      id: "shy-guarded",
      label: "Shy / guarded person",
      tag: "Low pressure, easy to decline",
      tone: "Warm",
      phrases: [
        "That makes sense. No pressure to decide now.",
        "It's reasonable to want more certainty first.",
        "I can see why you'd want to slow it down.",
        "We can keep it small if that feels safer.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "They repeat the same concern",
      action:
        "Reflect it back more specifically, then ask what would actually reduce the risk.",
      phrase:
        "So the sticking point is follow-through. What would make it realistic rather than wishful?",
    },
    {
      condition: "They soften or get more specific",
      action: "Move to options or a small next step.",
      phrase: "Then how about we start small: one owner, a two-week trial?",
    },
    {
      condition: "They accuse you of patronising them",
      action: "Drop the validation script and answer directly.",
      phrase: "Fair. Let me be direct.",
    },
    {
      condition: "They raise a new objection",
      action:
        "Treat it as information and clarify which category it belongs to.",
      phrase: "Is that a cost worry or a trust worry?",
    },
    {
      condition: "They are right",
      action: "Say so cleanly, then adjust the plan.",
      phrase: "You're right. Let me change the approach.",
    },
    {
      condition: "The concern is actually a boundary",
      action: "Validate briefly, then state the limit.",
      phrase: "That's fair, and I still need to hold this line.",
    },
  ],
  ladder: [
    {
      weak: "Uses the technique mechanically or too often.",
      better: "Uses the smallest useful version and then listens.",
      best: "Uses it only when the cue is present, keeps the wording natural, and adjusts to the response.",
    },
    {
      weak: "Validates, then immediately argues the conclusion.",
      better: "Validates the concern, then asks a clarifying question.",
      best: "Validates, clarifies, and turns the objection into a smaller, workable step.",
    },
    {
      weak: "Talks about the technique instead of doing it.",
      better: "Performs one clear behavioural move.",
      best: "Makes the move feel like ordinary skilled conversation.",
    },
  ],
  scenarios: [
    {
      situation: "Workplace objection",
      move: "Name the risk worth testing, then ask which part actually worries them.",
      phrase:
        "That's the right risk to test. Is your concern the workload, the owner, or whether people will actually use it?",
    },
    {
      situation: "Sales / pitching",
      move: "Validate the cost worry, then offer a smaller trial rather than the full version.",
      phrase:
        "Fair concern. I wouldn't recommend the full version if the risk is cost. A smaller trial may tell us whether the value is there.",
    },
    {
      situation: "Friend / family disagreement",
      move: "Acknowledge how it landed without conceding the intent.",
      phrase:
        "I can see why that felt dismissive. I see the intent differently, but I do understand why it landed badly.",
    },
    {
      situation: "High-status person",
      move: "Agree on the constraint and show your recommendation is built around it.",
      phrase:
        "Yes, implementation is the key constraint. My recommendation is designed around that.",
    },
    {
      situation: "Digital message",
      move: "Write one clean sentence: validate, then point at the fix.",
      phrase:
        "Fair concern. I think the way to reduce that risk is to keep the first step small.",
    },
    {
      situation: "Defensive person",
      move: "Make clear you are not fighting the concern. Ask which part feels most risky.",
      phrase:
        "I'm not arguing with the concern. I want to understand which part feels most risky.",
    },
  ],
  calibration: {
    working: [
      "They stop repeating the same objection.",
      "Their tone softens or becomes more specific.",
      "They clarify the real worry.",
      "They ask about options rather than defending the objection.",
      'They move from "no" to "maybe if..."',
      "They add detail, relax, or correct you comfortably.",
    ],
    adjust: [
      "They accuse you of patronising them.",
      "They want direct information, not more acknowledgement.",
      "You have validated but still not answered.",
      "The issue is a firm boundary, not a negotiable concern.",
      "The conversation is becoming circular: move to options.",
      "If they shorten, defend or go vague, drop the acknowledgement and answer directly.",
      "State plainly where you agree and where you see it differently.",
      "Use a shorter, cleaner acknowledgement next time.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the category",
      task: "In the next five objections you hear, pause before answering and silently name the category: cost, trust, risk, fairness, control, workload, embarrassment, reliability, or uncertainty. Do not respond to it yet, just notice which one it is.",
    },
    {
      day: "Day 2",
      title: "One-sentence validation",
      task: "For each objection today, say one plain sentence that names the concern and why it makes sense before you answer. Keep it under ten words and stop.",
    },
    {
      day: "Day 3",
      title: "Validate, then clarify",
      task: 'After validating, add a single clarifying question ("Is the main worry X or Y?") instead of a rebuttal. Notice whether the real concern changes once they answer.',
    },
    {
      day: "Day 4",
      title: "Bridge to a smaller step",
      task: "Take one live objection and turn it into a design change: a smaller trial, one clear owner, a reversible step. Validate, then offer the smaller version.",
    },
    {
      day: "Day 5",
      title: "Practise the recovery",
      task: 'Deliberately use one recovery line after a miss: "I may have over-acknowledged that. Here\'s my actual answer." Say it once for real and watch it reset the exchange.',
    },
    {
      day: "Day 6",
      title: "Switch registers",
      task: "Run the move in three registers in one day: a low-stakes chat, a professional or meeting setting, and a single clean text message. Notice how the wording tightens each time.",
    },
    {
      day: "Day 7",
      title: "Calibrate and release",
      task: "In a real disagreement, validate once, then read the response. If they soften, move to options. If they harden or feel patronised, drop the script and answer plainly.",
    },
  ],
  checklist: [
    "Did I validate the concern rather than the false conclusion?",
    "Did I identify the actual category of concern?",
    "Did I move from acknowledgement to an actual answer?",
    "Did I keep the person's dignity intact, no patronising, no script?",
    "Did I use the smallest version that would work, and leave room to decline?",
    "Did I notice whether it actually helped, and adjust?",
  ],
  example: {
    without: [
      'Person: "I don\'t think this will work."',
      'You: "It will. You just need to trust the process."',
      "Why it's weak:",
      "It argues against a vague objection instead of understanding it.",
      "It dismisses the worry, so the person digs in harder.",
      "It leaves them feeling managed rather than heard.",
    ],
    with: [
      'Person: "I don\'t think this will work."',
      "You: \"That's a fair concern. If previous attempts have been messy, I'd be cautious too. Is the main worry that it will take too much time, or that people won't follow through?\"",
      'Person: "Mostly follow-through."',
      "You: \"Then I wouldn't suggest a broad rollout. I'd suggest a small trial with one clear owner.\"",
      'Person: "This sounds good on paper, but it will become another thing nobody maintains."',
      "You: \"That's probably the right thing to worry about. The idea isn't the hard part. Keeping it alive is. What would make maintenance realistic rather than wishful?\"",
      "Why this works:",
      "It validates the real concern without pretending the conclusion is correct.",
      "It asks a clarifying question instead of arguing against a vague objection.",
      "It converts resistance into design: smaller trial, clearer owner, lower risk.",
      "It keeps dignity intact, making the other person more willing to collaborate.",
    ],
    note: "The advanced version should make the other person feel clearer, not managed.",
  },
  influencePayoff: {
    feeling: "They took my worry seriously instead of arguing me out of it.",
    principle:
      "People become more receptive to you once they feel you have been receptive to them.",
    gains: [
      "Lowers defensiveness before persuasion, correction, recommendation or problem-solving.",
      "Makes the other person feel respected rather than dismissed or managed.",
      "Turns resistance into useful information about what they value, fear or want protected.",
      "Creates a bridge from objection to options: a smaller step, less risk, clearer criteria, a better trade-off.",
      "Keeps you warm and credible. You are not surrendering your point, but you are not steamrolling theirs.",
      "Makes the other person more willing to collaborate on the fix.",
    ],
    whyMostFail: [
      "They rush past the acknowledgement straight into rebuttal, so it never lands.",
      "They deliver it mechanically, and the person feels handled rather than heard.",
      "They use the validation as a soft opening to push their own agenda.",
      "They validate a false conclusion as if it were true, and lose credibility.",
    ],
  },
  fieldTip: {
    headline:
      "Validate the worry before you answer the worry: never validate false facts as true.",
    body: "The goal is not to display skill. It is to make the next human moment easier. A concern held gently for one sentence stops being a wall and becomes a door.",
    example:
      'Concern: "This will just become another thing nobody maintains." → "That\'s probably the right thing to worry about. What would make maintenance realistic rather than wishful?"',
    dont: "Don't rush to prove them wrong, and don't agree with a conclusion you think is false.",
    do: "Do name the concern, say why it makes sense, then bridge to a smaller, workable step.",
  },
  method: [
    {
      step: "1",
      title: "Notice the cue",
      body: 'The cue is resistance: an objection, a hesitation, a "yes, but", a worried tone. That is the moment to acknowledge, before you have already started arguing, not after.',
      examples: [{ label: "Cue", text: '"I don\'t think this will work."' }],
    },
    {
      step: "2",
      title: "Name the concern and why it makes sense",
      body: "Say the concern back plainly and add why it is reasonable. Validate the concern, not the conclusion. Keep it to one sentence: the smallest version that shows you actually heard it.",
      examples: [
        {
          label: "Say",
          text: "\"That's a fair concern. If previous attempts were messy, I'd be cautious too.\"",
        },
      ],
    },
    {
      step: "3",
      title: "Bridge with a clarifying question",
      body: "Turn a vague objection into a specific one by asking which part is the real worry. This converts resistance into information you can both use.",
      examples: [
        {
          label: "Ask",
          text: '"Is the main worry the time, or whether people will follow through?"',
        },
      ],
    },
    {
      step: "4",
      title: "Stop and listen",
      body: "After the move, stop. Let them answer. The point of validating is to hear the real concern, not to launch your rebuttal the moment they pause.",
    },
    {
      step: "5",
      title: "Answer or reframe",
      body: "Now respond to the concern they actually named, often by making the step smaller, more reversible, or more clearly owned. Say cleanly where you agree and where you see it differently.",
      examples: [
        {
          label: "Respond",
          text: "\"Then I wouldn't suggest a broad rollout. I'd start with one owner and a two-week trial.\"",
        },
      ],
    },
    {
      step: "6",
      title: "Calibrate warmth, directness and brevity",
      body: "Read how it landed. If they soften, move to options. If they seem patronised or want a straight answer, drop the acknowledgement and be direct.",
    },
  ],
  liveThreadClues: [
    "I do not think this will work...",
    "Yes, but...",
    "I am not sure about...",
    "My worry is...",
    "This will just become...",
    "It is going to take too much...",
    "We tried this before and...",
    "I do not have time for...",
  ],
  commonMistakes: [
    {
      mistake: "Validating mechanically",
      soundsLike: '"I hear you. Anyway, as I was saying..."',
      better:
        '"That\'s a fair concern: the follow-through risk is real. What would make it realistic?"',
    },
    {
      mistake: "Making it too long",
      soundsLike: "A three-sentence speech about how valid their feelings are.",
      better: '"Fair concern. Is the worry cost or timing?"',
    },
    {
      mistake: "Sounding clinical or superior",
      soundsLike:
        '"I understand that you\'re experiencing some resistance to this."',
      better: '"Yeah, I\'d be wary of that too."',
    },
    {
      mistake: "Rushing to rebuttal",
      soundsLike: '"It will work, you just need to trust the process."',
      better:
        '"That\'s probably the right thing to worry about. What would reduce the risk?"',
    },
    {
      mistake: "Ignoring cues to stop",
      soundsLike: "Validating a third time while they get more annoyed.",
      better: '"Fair. Let me just be direct: here\'s my actual answer."',
    },
    {
      mistake: "Using it to steer your own agenda",
      soundsLike:
        '"Great point, which is exactly why you should do what I wanted."',
      better:
        "\"If we can't solve that concern, I wouldn't push this either.\"",
    },
  ],
  recoveryPhrases: [
    "I don't mean that as a script. I genuinely think that's the right concern to raise.",
    "Let me answer the actual issue rather than just acknowledge it.",
    "I can see the concern. I also see the conclusion differently.",
    "I may have over-acknowledged that. Here's my actual answer.",
    "I'm not saying the whole conclusion is right. I'm saying the worry makes sense.",
    "I may have framed that badly.",
    "Let me step back.",
    "We can leave that if it's not the useful thread.",
  ],
  bestRecoveryLine:
    "I may have over-acknowledged that. Here's my actual answer.",
  chains: [
    {
      label: "Objection chain",
      sequence:
        "Validate concern → clarify objection → reduce risk → clean recommendation",
      example: [
        '"That\'s a fair concern."',
        '"Is the worry the cost or the upkeep?"',
        '"Then let\'s make the first step small and reversible."',
        '"My recommendation is a two-week trial with one owner."',
      ],
    },
    {
      label: "Conflict chain",
      sequence:
        "Name concern → agreement before disagreement → shared goal → next step",
      example: [
        '"I can see why that felt unfair."',
        '"You\'re right that we moved too fast."',
        '"We both want this to actually stick."',
        '"So let\'s agree the pace together."',
      ],
    },
    {
      label: "Persuasion chain",
      sequence: "Validate → values frame → smaller ask → autonomy release",
      example: [
        '"That\'s a legitimate risk."',
        '"I know reliability matters most to you here."',
        '"Could we just test it on one team first?"',
        '"But it\'s entirely your call."',
      ],
    },
    {
      label: "Boundary chain",
      sequence:
        "Validate feeling → state limit → explain briefly → offer alternative",
      example: [
        '"I get why you\'d want an answer tonight."',
        '"I\'m not able to decide this by then."',
        '"I\'d rather be slow than wrong on this one."',
        '"I can give you a firm answer by Friday."',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC005",
      reason:
        "Validation without agreement validates the person's emotion, context or logic. Validate the concern validates a specific objection before you answer it. Use it when resistance needs respect before a response.",
    },
    {
      id: "TC069",
      reason:
        "Clarify objection digs into what the objection actually is. Validate the concern first grants that the worry is fair, then clarifies: reach for TC069 when the objection is vague rather than resisted.",
    },
    {
      id: "TC073",
      reason:
        "Resistance-as-information treats pushback as data about needs. Validate the concern is the acknowledgement that makes the person willing to share that data.",
    },
    {
      id: "TC077",
      reason:
        "Agreement before disagreement leads with a genuine point of agreement. Validate the concern leads with the legitimacy of the worry. Use TC077 when you can honestly agree with part of their position.",
    },
    {
      id: "TC083",
      reason:
        "Ask what would make it workable converts an objection into criteria for a solution. Validate the concern is the step before it: make the worry feel heard, then ask what would make it workable.",
    },
    {
      id: "TC021",
      reason:
        'Autonomy release hands the decision back ("it\'s your call"). Validate the concern earns the right to be heard first: pair them, but use TC021 when the person mainly needs to feel unpressured.',
    },
  ],
};
