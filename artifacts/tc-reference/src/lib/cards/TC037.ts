import type { CardData } from "../card-types";

export const TC037: CardData = {
  pdfUrl: "cards/TC037/TC037_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet — the designed visual card.",
      href: "cards/TC037/TC037_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC037/TC037_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC037/TC037_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC037/TC037_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC037/TC037_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC037/TC037_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC037/TC037_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC037",
  whyItWorks:
    "Double-sided reflection is naming the two live sides of someone's mixed position in one balanced sentence, so they feel accurately understood without being pushed to choose. It works because it changes the conversation at the level of timing, attention and response choice rather than adding a script: once a person feels both halves of their ambivalence have been heard, the pressure to defend either half drops and they can think out loud instead of bracing.",
  whatItIsNot: [
    "It is not a trick, a performance, or a dominance move, and it is not a shortcut around consent.",
    "It is not a way to extract more than the other person wants to give.",
    "It is not a replacement for listening, context, judgement, or direct action when direct action is needed.",
    "It is not false balance: some things do not have two equal sides, and forcing symmetry onto harm or coercion is a misuse of it.",
  ],
  overview: {
    coreFormula: [
      "Notice the tension -> reflect side A -> reflect side B -> keep both respectful -> pause for correction or elaboration.",
      "Part of you wants one thing, and part of you is worried about the cost.",
      "You can see the upside, and you are also tracking the risk.",
      "You want to say yes, and you are noticing what it would cost.",
      "Two sides, one balanced sentence, then silence.",
    ],
    minimumViableMove:
      "Part of you wants one thing, and part of you is worried about the cost.",
    impact: "Medium",
    difficulty: "Hard",
    misuse:
      "Flattening the person into a false equivalence, sounding like a therapist, or using the reflection to nudge them toward the side you prefer.",
    bestFor: [
      "When someone sounds torn, ambivalent, or pulled between two values.",
      "When a debate is tipping into persuasion and the person needs to feel understood first.",
      "When both sides are real and neither should be mocked or dismissed.",
      "When someone keeps circling the same decision without landing.",
      "When you are tempted to argue one side and want to lower the pressure instead.",
      "Helping someone hear their own ambivalence clearly enough to think about it.",
    ],
  },
  notFor: [
    "When one side involves immediate harm or coercion that has to be named directly.",
    "When the person has already made a clear decision and just needs practical support.",
    "When reflecting both sides would create false equivalence around abuse, risk, or deception.",
    "When they are giving short, flat answers and want the conversation to end.",
    "When the situation needs action, not a mirror.",
  ],
  phraseBank: [
    {
      id: "two_sided_starters",
      label: "Two-sided starters",
      tag: "Short one-liners",
      tone: "Quick",
      phrases: [
        "Part of you wants it, and part of you doesn't.",
        "You're drawn to it, and also wary of it.",
        "Yes and no, at the same time.",
        "You want it, and it scares you a bit.",
        "Half of you is in, half is holding back.",
        "Tempted and cautious at once.",
        "You like the idea, less the cost.",
      ],
    },
    {
      id: "torn_between_feelings",
      label: "Torn between two feelings",
      tag: "Warm / personal",
      tone: "Warm",
      phrases: [
        "Part of you wants to move, and part of you is tired of starting over.",
        "There's relief in the idea, and also some grief in it.",
        "You can see why they acted that way, and it still hurt.",
        "You love them, and you're worn out by it right now.",
        "You're proud of how it went, and a bit sad it's ending.",
        "It mattered to you, and it also cost you something.",
        "You want to forgive it, and you haven't quite got there yet.",
      ],
    },
    {
      id: "work_and_decisions",
      label: "Work and decisions",
      tag: "Meeting / decision / status",
      tone: "Professional",
      phrases: [
        "You're sold on the direction, and not yet on the timeline.",
        "You want to back it, and you're not sure about the budget.",
        "It sounds like we're aligned on the goal, and still working out the how.",
        "You think it's the right call, and you want more cover before you commit.",
        "You'd take the role, and you're weighing what it would ask of you.",
        "The plan makes sense on paper, and something about the pace worries you.",
        "You want to ship it, and you don't want to rush it.",
      ],
    },
    {
      id: "name_the_tradeoff",
      label: "Naming the trade-off plainly",
      tag: "Clear / firm",
      tone: "Direct",
      phrases: [
        "You want the opportunity, and you don't want the version of yourself it might require.",
        "You can see the upside, and you're also tracking the risk.",
        "You want momentum, and you don't want to rush it.",
        "You care about being fair, and you also don't want to be taken for granted.",
        "You want to say yes, and you're noticing what it would cost.",
        "It matters, and it also feels exhausting.",
        "You want the change, and you're protecting what still matters.",
      ],
    },
    {
      id: "tentative_openers_and_outs",
      label: "Tentative openers and outs",
      tag: "Hedged / digital / low-pressure",
      tone: "Repair",
      phrases: [
        "I may be reading this wrong, but that seems like the key thread.",
        "We can stay with that, or move on - your call.",
        "Tell me if this is off: you want both, and neither feels free.",
        "Maybe it's two things at once - the wanting and the worry.",
        "If I've got this wrong, say so.",
        "It might be that part of you agrees and part of you doesn't - does that fit?",
        "No need to land it now; it sounds like both are true.",
      ],
    },
    {
      id: "under_tension",
      label: "Under tension or conflict",
      tag: "Pressured / emotional",
      tone: "High-stakes",
      phrases: [
        "You believe you're right, and you can see why they don't.",
        "You want to hold your ground, and you don't want to lose them over it.",
        "Part of you wants to fight it, and part of you just wants it over.",
        "You're angry about it, and you still care what happens to them.",
        "You want an apology, and you're not sure one would fix it.",
        "You want to stay, and part of you has already left.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "They add detail after your reflection",
      action: "Stay on that thread; don't open a new one.",
      phrase: "So the harder part was being left with it.",
    },
    {
      condition: "They pause thoughtfully",
      action: "Wait. Let the silence do the work.",
      phrase: "",
    },
    {
      condition: "They look uncomfortable or go flat",
      action: "Release the move and lower the pressure.",
      phrase: "We don't have to stay with that.",
    },
    {
      condition: "They ask you what to do",
      action: "Switch to permission-based advice before offering anything.",
      phrase: "Do you want a thought, or just a sounding board?",
    },
    {
      condition: "They give a clear, single answer",
      action: "Don't reflect two sides that aren't there. Move on.",
      phrase: "",
    },
    {
      condition: "The situation needs action, not a mirror",
      action: "Act or speak directly rather than decorating the conversation.",
      phrase: "",
    },
  ],
  ladder: [
    {
      weak: "You are overthinking it.",
      better: "You are torn about it.",
      best: "Part of you wants the change, and part of you is protecting what still matters.",
    },
    {
      weak: "Just pick one.",
      better: "There are two sides to it.",
      best: "You can see the upside, and you're also tracking the risk.",
    },
    {
      weak: "So you don't know what you want.",
      better: "You want both things.",
      best: "You want the opportunity, and you don't want the version of yourself it might require.",
    },
  ],
  scenarios: [
    {
      situation: "Casual conversation",
      move: "Use the minimum viable move and keep the tone light.",
      phrase: "Part of you wants to go, and part of you would rather stay in.",
    },
    {
      situation: "Workplace conversation",
      move: "Use concise, non-performative wording and avoid emotional overreach.",
      phrase:
        "You want to back the plan, and you want to pressure-test the timeline first.",
    },
    {
      situation: "Conflict or repair",
      move: "Pair the reflection with validation or an autonomy release.",
      phrase: "You can see why they did it, and it still landed badly.",
    },
    {
      situation: "Digital message",
      move: "One sentence only. Don't stack multiple prompts.",
      phrase:
        "Sounds like you want in, and the timing's the real problem - is that it?",
    },
    {
      situation: "High-stakes context",
      move: "Lead with direct clarity; add the reflection only if it lowers pressure and improves understanding.",
      phrase:
        "You need this handled today, and you also don't want it to blow up.",
    },
    {
      situation: "Someone circling a decision",
      move: "Name both sides once, then leave room; don't push a resolution.",
      phrase: "You want to leave, and you don't want to have wasted the years.",
    },
  ],
  calibration: {
    working: [
      "They add detail instead of just agreeing.",
      "Their tone softens or gets more specific.",
      "They correct you without getting defensive.",
      "They stay on the same thread.",
      "They ask you something back.",
      "They sound relieved to have both sides named at once.",
    ],
    adjust: [
      "Answers get shorter or flatter.",
      "Polite but low-energy tone.",
      "They keep shifting the topic.",
      "Forced laughter or visible tension.",
      "They get defensive or confused.",
      "They withdraw or refuse outright.",
      "The move makes the conversation feel less safe - make it smaller or drop it.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the tension",
      task: "Notice three moments today where someone sounds torn between two things. Just write down the two sides - don't respond yet.",
    },
    {
      day: "Day 2",
      title: "Write five lines",
      task: "Write five realistic situations where Double-sided reflection would help, capturing one sentence of what the person said in each.",
    },
    {
      day: "Day 3",
      title: "Name both sides",
      task: "For each of the five, draft one balanced sentence that names both live sides without picking a winner.",
    },
    {
      day: "Day 4",
      title: "Cut by a third",
      task: "Shorten each reflection by about 30 percent and make it more tentative than certain.",
    },
    {
      day: "Day 5",
      title: "Add an out",
      task: "Attach one recovery phrase to each, so the person can decline, correct, or move on freely.",
    },
    {
      day: "Day 6",
      title: "Say it plainly",
      task: "Read each line aloud in an ordinary voice. Cut anything that sounds like a therapist or a technique.",
    },
    {
      day: "Day 7",
      title: "Use it once",
      task: "In a real, low-stakes conversation, use it a single time, then stop and watch what happens.",
    },
  ],
  checklist: [
    "Did I keep the other person's autonomy intact?",
    "Did I make one move, or stack several?",
    "Did my tone fit the relationship and the moment?",
    "Did I stop when the signal weakened?",
    "Did I follow their thread rather than my agenda?",
    "Would a simpler response have done the job?",
  ],
  example: {
    without: [
      "A: It just felt like too much at once.",
      "B: Why did you let it get like that? You should have said something earlier.",
      "Why it is weak:",
      "jumps to blame instead of the feeling",
      "names only one side and turns it into a fault",
      "gives them nothing true to agree with",
    ],
    with: [
      "A: It just felt like too much at once.",
      "B: That sounds like it carried more weight than the facts alone.",
      "A: Yes - it felt like I was suddenly carrying all of it.",
      "B: So the hard part wasn't only the amount, but being left with it on your own.",
      "A: Exactly. I could have handled the work if someone had just acknowledged it.",
      "B: So it's the being-left-alone part, not only being busy.",
      "Why this works:",
      "names both live sides - the load and what it meant",
      "stays tentative, so they can correct it",
      "keeps their thread alive without taking it over",
    ],
    note: "The advanced move holds both halves gently and lets the person keep the lead.",
  },
  influencePayoff: {
    feeling:
      '"They actually get it - both halves, not just the convenient one."',
    principle:
      "People stop defending a position once they feel both sides of it have been heard. Naming the tension accurately lowers the need to argue and lets them think out loud.",
    gains: [
      "Better conversational accuracy",
      "Trust",
      "Less friction and overtalking",
      "The person stays on the thread that matters",
      "Dignity - they can accept, redirect, or decline without being cornered",
      "Room to think instead of defend",
    ],
    whyMostFail: [
      "They flatten the person into a false equivalence, forcing symmetry where there isn't any.",
      "They slip into therapist voice and it stops sounding like a person.",
      "They use the reflection to steer the person toward the side they prefer.",
      "They repeat it until it becomes a tic rather than a response.",
    ],
  },
  fieldTip: {
    headline: "Hold both sides gently.",
    body: "The goal is accuracy, not resolution. You are not solving the tension or nudging them off the fence - you are naming it clearly enough that they can look at it. Keep the sentence balanced, tentative, and short, then stop talking.",
    example:
      '"You want to take it, and you don\'t want what it would cost you."',
    dont: "Don't tack on advice or lean the sentence toward the side you'd choose.",
    do: "Do name both sides, then leave a silence for them to correct or continue.",
  },
  method: [
    {
      step: "1",
      title: "Catch the tension",
      body: "Listen for the two-sidedness: a 'but', a 'part of me', a sentence that leans one way then pulls back. That pull between two things is the cue, not the topic itself.",
      examples: [
        { label: "Cue", text: '"I want to take it, but..."' },
        {
          label: "What's live",
          text: "the wanting and the hesitation, both at once",
        },
      ],
    },
    {
      step: "2",
      title: "Choose the smallest useful move",
      body: "You don't need to map their whole psychology. Pick the two sides that are most alive right now and leave the rest alone.",
    },
    {
      step: "3",
      title: "Name both sides in one balanced sentence",
      body: "Reflect side A and side B in ordinary language, giving each equal weight. Keep it tentative - 'It sounds like...', 'Part of you...'. No lecture, no diagnosis.",
      examples: [
        {
          label: "Clinical",
          text: '"You\'re experiencing a values conflict."',
        },
        {
          label: "Natural",
          text: '"You want to go, and you don\'t want to leave them short."',
        },
      ],
    },
    {
      step: "4",
      title: "Pause and let it land",
      body: "Stop talking. The silence is where they either agree, correct you, or add the real detail. Don't rush to fill it.",
    },
    {
      step: "5",
      title: "Follow their next signal",
      body: "If they add detail, stay on that thread. If they correct you, take the correction - being a little wrong out loud is fine, and often it draws out the truer version.",
    },
    {
      step: "6",
      title: "Release if the signal is weak",
      body: "If they go shorter, flatter, or tense, make the move smaller or drop it. One accurate reflection beats three that push.",
    },
  ],
  liveThreadClues: [
    '"...but..."',
    '"part of me..."',
    '"on the other hand..."',
    '"at the same time..."',
    '"I don\'t know, I..."',
    '"both, really"',
    '"torn"',
    "a sentence that leans one way then pulls back",
  ],
  commonMistakes: [
    {
      mistake: "Using it too many times in a row",
      soundsLike: 'Every reply is "part of you... and part of you..."',
      better: "Use it once, then just listen or contribute normally.",
    },
    {
      mistake: "Sounding like a technique, not a person",
      soundsLike: '"What I\'m hearing is that you hold two competing truths."',
      better: "\"You want it, and you're not sure it's worth it.\"",
    },
    {
      mistake: "Ignoring a decline or topic change",
      soundsLike: "Reflecting both sides again after they've clearly moved on",
      better:
        'Follow their exit: "Fair enough - where do you want to take it?"',
    },
    {
      mistake: "Over-explaining after the reflection",
      soundsLike:
        '"I said that because you seemed conflicted, which usually means..."',
      better: "Say the one sentence, then stop and let them respond.",
    },
    {
      mistake: "Steering toward your preferred side",
      soundsLike:
        '"Part of you wants to stay, but really you know you should go."',
      better:
        'Keep both sides equal: "You want to stay, and part of you is ready to go."',
    },
    {
      mistake: "Forcing false balance",
      soundsLike:
        "Giving equal weight to real harm and to a reasonable concern",
      better: "Name the harm directly; don't dress it up as two fair sides.",
    },
    {
      mistake: "Reading politeness as engagement",
      soundsLike: "Pushing deeper because they nodded politely",
      better:
        "Treat flat, tired, or merely polite responses as a cue to ease off.",
    },
  ],
  recoveryPhrases: [
    "I may be reading that wrong.",
    "We don't have to stay with that.",
    "Let me say that more simply.",
    "That came out stronger than I meant.",
    "Ignore that if it doesn't fit.",
    "We can go another direction.",
    "What would actually be useful right now?",
  ],
  bestRecoveryLine: "I may be reading that wrong - tell me what actually fits.",
  chains: [
    {
      label: "Hear it, then hold the silence",
      sequence:
        "TC004 Reflective listening -> TC037 Double-sided reflection -> TC029 Strategic silence",
      example: [
        '"So it really knocked you."',
        '"Part of you wants to push on, and part of you needs a break first."',
        "(then say nothing and let them think)",
      ],
    },
    {
      label: "Both sides, then hand it back",
      sequence:
        "TC005 Validation without agreement -> TC037 Double-sided reflection -> TC021 Autonomy release",
      example: [
        '"It makes sense you\'d be wary."',
        '"You want to trust it, and you\'re not there yet."',
        '"Totally your call which way you go."',
      ],
    },
    {
      label: "Meaning first, then confirm",
      sequence:
        "TC040 Meaning reflection -> TC037 Double-sided reflection -> TC011 Summary check",
      example: [
        '"Sounds like it was about respect, not the money."',
        '"You want the apology, and you\'re not sure it would land."',
        '"So - heard properly first, then talk numbers. Have I got that right?"',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC004",
      reason:
        "Reflective listening mirrors one clear meaning; use Double-sided reflection when two live sides are both present.",
    },
    {
      id: "TC040",
      reason:
        "Meaning reflection captures why something matters; Double-sided reflection captures the ambivalence or tension between two pulls.",
    },
    {
      id: "TC005",
      reason:
        "Validation without agreement supports a concern without endorsing it; Double-sided reflection maps both halves of a mixed position.",
    },
    {
      id: "TC011",
      reason:
        "Summary check confirms the broad understanding; Double-sided reflection names one specific internal conflict.",
    },
    {
      id: "TC027",
      reason:
        "When the reflection lands and they ask what to do, switch to Permission-based advice before offering anything.",
    },
    {
      id: "TC058",
      reason:
        "Feeling-plus-need reflection names one feeling and the need under it; Double-sided reflection names two competing pulls at once.",
    },
  ],
};
