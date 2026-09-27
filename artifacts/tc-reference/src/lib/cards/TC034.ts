import type { CardData } from "../card-types";

export const TC034: CardData = {
  pdfUrl: "cards/TC034/TC034_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC034/TC034_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC034/TC034_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC034/TC034_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC034/TC034_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC034/TC034_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC034/TC034_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC034/TC034_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC034",
  whyItWorks:
    'A two-option question turns a broad or heavy question into two clear paths (with an escape hatch such as "or something else") so the other person can answer easily without feeling trapped in a false choice. It works because an open question can be paralysing when someone is tired, unsure or overwhelmed: naming two plausible directions lowers the effort of replying and gives their thinking something to push against, while the escape hatch protects their autonomy and keeps the move a genuine offer rather than a nudge.',
  whatItIsNot: [
    "It is not a trick, a dominance move, or a way to push someone past their boundary.",
    "It is not a rigid script: the two options are a starting offer, not the only answers allowed.",
    "It is not a way to disguise your preferred answer as a free choice.",
    "It is a specific, observable conversation move, not a general personality trait.",
  ],
  overview: {
    coreFormula: [
      "Cue → small move → pause → observe → follow or release.",
      "Is it more X, or more Y, or something else?",
      "Is it more timing or workload?",
      "Short version or the detailed one, or neither right now?",
      "Would email or a quick call be easier?",
    ],
    minimumViableMove:
      'Offer two clear paths with a way out: "Is it more X, or more Y, or something else?"',
    impact: "Medium",
    difficulty: "Easy-Medium",
    misuse:
      "Creating false choices that make the person feel cornered or led: two options that are really one disguised demand.",
    bestFor: [
      "When a question is too broad to answer easily",
      "When you want to reduce someone's cognitive load",
      "When choosing between two directions clarifies the next step",
      "When someone is stuck or overwhelmed by an open question",
      "Helping a quiet or tired person answer without effort",
      "Narrowing a vague problem into something workable",
    ],
  },
  notFor: [
    "The person needs an open field, not a narrowed one",
    "You are disguising your preferred answer as a choice",
    "Neither option is genuinely acceptable",
    "They are already giving clear, detailed answers",
    "The moment calls for direct action, not a question",
    "They seem tense, guarded or already cornered",
  ],
  phraseBank: [
    {
      id: "quick",
      label: "Quick",
      tag: "Quick two-option openers",
      tone: "Quick",
      phrases: [
        "Is it more X, or more Y?",
        "Now problem or later problem?",
        "Short version or the long one?",
        "Big deal or small deal?",
        "Vent, or fix it?",
        "Talk it out, or leave it for now?",
        "Good news or complicated news?",
        "Text or call?",
        "Sooner or later?",
        "Yes, no, or maybe?",
      ],
    },
    {
      id: "warm",
      label: "Warm / low-pressure",
      tag: "Warm, gentle options",
      tone: "Warm",
      phrases: [
        "No rush. Is it more the timing, or more the workload?",
        "Whatever's easier: quick summary, or the full story?",
        "Do you want me to just listen, or actually help think it through?",
        "Happy either way. Dig into it now, or leave it for later?",
        "Is this a 'need advice' thing, or a 'need a minute' thing?",
        "Sounds like a lot. Is it one big thing, or lots of small ones?",
        "Would a chat help, or would some space be better?",
      ],
    },
    {
      id: "professional",
      label: "Work / meetings / email",
      tag: "Professional options",
      tone: "Professional",
      phrases: [
        "Is the blocker mainly clarity, or capacity?",
        "Do you want to decide today, or revisit tomorrow?",
        "Would email or a quick call be easier?",
        "Is this a scope question, or a timeline one?",
        "Should we ship the smaller version now, or hold for the full one?",
        "Is the concern the cost, or the risk, or something else?",
        "Are we aligned on the what, and just sorting the when?",
        "Is this a 'decide now' moment, or a 'gather more' one?",
      ],
    },
    {
      id: "direct",
      label: "Narrowing a vague answer",
      tag: "Direct, clarifying pairs",
      tone: "Direct",
      phrases: [
        "Is it more timing or workload?",
        "Short version or detailed version?",
        "Mainly clarity or capacity?",
        "Is that a yes, a no, or a 'not yet'?",
        "Do you want the decision from me, or just my read on it?",
        "Is the problem the plan, or the people?",
        "Is it done, or nearly done?",
      ],
    },
    {
      id: "repair",
      label: "Softening and the escape hatch",
      tag: "Release and de-escalate",
      tone: "Repair",
      phrases: [
        "We can stay with this, or move on. Your call.",
        "Ignore the options if neither fits.",
        "Or something else entirely. I might be reading it wrong.",
        "No pressure to pick either. I just wanted to make it easier to answer.",
        "Would it help to name it, or would you rather leave it?",
        "Say 'neither' if I've missed it.",
        "Or neither. Tell me in your own words.",
      ],
    },
    {
      id: "high-stakes",
      label: "Pressure / conflict",
      tag: "Clarity first, then options",
      tone: "High-stakes",
      phrases: [
        "Before we go further, is this a today problem or a this-week problem?",
        "Do you want to solve it now, or cool off and come back to it?",
        "Is the sticking point the money, or the trust?",
        "Are we deciding this together, or do you need me to make the call?",
        "Is it something I did, or something else going on, or both?",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "They add detail after the options",
      action: "Follow the thread they chose.",
      phrase: '"Say more about that."',
    },
    {
      condition: "They pause thoughtfully",
      action: "Wait: don't fill the silence.",
      phrase: "",
    },
    {
      condition: "They look uncomfortable or cornered",
      action: "Release the move and widen it back out.",
      phrase: '"Or something else entirely. Your call."',
    },
    {
      condition: "They ask for advice",
      action: "Switch to Permission-based advice (TC027).",
      phrase: '"Want my take, or just a sounding board?"',
    },
    {
      condition: "Action is needed, not a question",
      action: "Act directly instead of offering options.",
      phrase: "",
    },
    {
      condition: "Neither option is genuinely acceptable",
      action: "Drop the pair and ask openly.",
      phrase: '"Forget those two. What would actually help?"',
    },
  ],
  ladder: [
    {
      weak: 'Too broad, too fast: "Tell me everything."',
      better: "Is it more X, or more Y?",
      best: "Is it more X, or more Y, or something else? Then stop and watch the response.",
    },
    {
      weak: "Tell me everything.",
      better: "Is it more timing or workload?",
      best: "Is it more timing or workload? (only if that framing fits)",
    },
    {
      weak: "That's wrong.",
      better: "Short version or detailed version?",
      best: "I might be reading it wrong, but short version or the detailed one?",
    },
  ],
  scenarios: [
    {
      situation: "Casual conversation",
      move: "Use the smallest natural version and keep it light.",
      phrase: '"Big deal or small deal?"',
    },
    {
      situation: "Professional discussion",
      move: "Keep it concise and non-performative. Tie it to the decision.",
      phrase: '"Do you want to decide today, or revisit tomorrow?"',
    },
    {
      situation: "Conflict or objection",
      move: "Pair it with validation or autonomy release so it doesn't feel like steering.",
      phrase:
        '"I can see this matters. Is it the timing, or the trust, or something else?"',
    },
    {
      situation: "Digital message",
      move: "One sentence, one pair of options, no stacking.",
      phrase: '"Would email or a quick call be easier?"',
    },
    {
      situation: "High-stakes moment",
      move: "Lead with direct clarity, then offer options only if it lowers pressure.",
      phrase:
        "\"Here's where I've landed. Do you want the reasoning now, or after you've slept on it?\"",
    },
    {
      situation: "Quiet or overwhelmed person",
      move: "Offer two gentle paths plus an easy exit so answering costs almost nothing.",
      phrase: '"No rush. Is it more one big thing, or lots of small ones?"',
    },
  ],
  calibration: {
    working: [
      "They add detail and pick up the thread.",
      "Their tone softens.",
      "They answer quickly and easily.",
      "They give you a third option: the real one.",
      "They relax into the topic instead of defending it.",
      "They start thinking out loud.",
    ],
    adjust: [
      "Short answers, polite but low in energy.",
      "They keep shifting the topic.",
      "They look confused by the framing.",
      "Withdrawal, defensiveness or refusal.",
      "They pick an option just to end the question.",
      "If in doubt, make the move smaller.",
      "Drop back to an open question or add validation.",
      'Offer the escape hatch again: "or something else entirely."',
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the cue",
      task: "Notice three moments today where someone gives a broad, stuck or overwhelmed answer. Write down exactly what they said.",
    },
    {
      day: "Day 2",
      title: "Draft the pairs",
      task: 'Write five lines where a two-option question might help, each ending with an escape hatch ("or something else").',
    },
    {
      day: "Day 3",
      title: "Weak, better, best",
      task: "Take two of your lines and write a weak, a better and a best version of each.",
    },
    {
      day: "Day 4",
      title: "Cut it back",
      task: "Reduce your best versions by about 30 percent until they sound like ordinary speech, not a technique.",
    },
    {
      day: "Day 5",
      title: "Add the exit",
      task: "For each line, write one recovery phrase you'd use if neither option fits.",
    },
    {
      day: "Day 6",
      title: "Say them aloud",
      task: "Read every line out loud once in a normal voice. Cut any that sound clever, coaxing or scripted.",
    },
    {
      day: "Day 7",
      title: "Use one live",
      task: "In a real low-stakes conversation, use the smallest version once, pause, watch the response, then stop.",
    },
  ],
  checklist: [
    "Did I preserve their autonomy? Was there a genuine way out?",
    "Did I use one move rather than several?",
    "Did I watch the response instead of pushing on?",
    "Did I stop when the energy dropped?",
    "Were the two options both genuinely acceptable?",
    "Would a simpler, open response have been better?",
  ],
  example: {
    without: [
      'Person: "I\'m not sure how to handle it."',
      'You: "You\'re overthinking this. Just deal with it."',
      "Why it's weak:",
      "dismisses the difficulty instead of helping",
      "leaves the open question just as heavy as before",
      "gives them nothing concrete to push against",
      "makes them defend themselves rather than think",
    ],
    with: [
      'Person: "I\'m not sure how to handle it."',
      'You: "Is it more the timing, or more the workload, or something else?"',
      "Person: \"Honestly, the timing. The work's fine, I just can't do it this week.\"",
      'You: "That helps. Do you want to decide the date now, or park it till tomorrow?"',
      "Person: \"Let's park it. I'll have a clearer head then.\"",
      'You: "Good. We can stay with that or adjust."',
      "Why this works:",
      "turns a heavy open question into two easy paths",
      "the escape hatch keeps their autonomy intact",
      "pauses to follow their actual answer",
      "offers a second small option instead of pushing",
    ],
    note: "The two options are a doorway, not a cage. The best answer is often the third one they give once the door is open.",
  },
  influencePayoff: {
    feeling: '"That was easy to answer, and I still had a way out."',
    principle:
      "People answer more freely when the effort is low and their autonomy is visibly protected.",
    gains: [
      "Clarity",
      "Lower friction",
      "Faster decisions",
      "Reduced cognitive load",
      "Trust",
      "They feel respected, not steered",
      "Momentum when a conversation stalls",
    ],
    whyMostFail: [
      "They build false choices, so the two options feel like a trap rather than a help.",
      "They overuse the move until it sounds like a technique.",
      "They keep pushing after offering the options instead of pausing to watch the response.",
      "They use it to steer toward their own agenda rather than to reduce effort.",
    ],
  },
  fieldTip: {
    headline: "Two options should reduce effort, not remove freedom.",
    body: 'The pair is a doorway, not a cage. Always leave the door open with "or something else" so the other person can hand you the answer you didn\'t think of, which is usually the real one.',
    example:
      'You: "Is it more the timing, or the workload, or something else?" They say: "Actually, it\'s neither. I just don\'t trust the plan."',
    dont: "Don't offer two options that both lead where you want to go.",
    do: "Do make both options ones they'd be genuinely happy to pick, then add an exit.",
  },
  method: [
    {
      step: "1",
      title: "Notice the cue",
      body: 'Reach for this when an open question has stalled: the other person is vague, tired, overwhelmed, or answering "I don\'t know where to start." That heaviness is the signal that two clear paths would help.',
    },
    {
      step: "2",
      title: "Choose the smallest useful version",
      body: "Pick the two directions that most usefully split the problem, and stop there. Two options, not five. The aim is to lighten the load, not to run an interrogation or show off a framework.",
    },
    {
      step: "3",
      title: "Use plain language",
      body: 'Say it the way you\'d say anything else ("Now problem or later problem?") not "Let me offer you two options here." The moment it sounds like a technique, it stops working. Add the escape hatch: "or something else."',
    },
    {
      step: "4",
      title: "Pause and observe",
      body: "Ask, then stop. Give them room to pick, reject both, or hand you the third answer. Watch the tone and energy of the reply. That tells you whether the move landed or crowded them.",
    },
    {
      step: "5",
      title: "Follow or release",
      body: "If they take an option and add detail, follow that thread. If they go short, confused or guarded, release the move: widen back to an open question or add warmth. Never repeat it mechanically.",
    },
  ],
  liveThreadClues: [
    '"I\'m not sure how to handle it."',
    '"It\'s complicated."',
    '"I don\'t know where to start."',
    '"There\'s a lot going on."',
    '"It could be a few things."',
    '"Honestly, I can\'t tell."',
  ],
  commonMistakes: [
    {
      mistake: "Building a false choice",
      soundsLike: '"Do you want to do it my way, or the wrong way?"',
      better: '"Is it more X, or more Y, or something else?"',
    },
    {
      mistake: "Overusing the move",
      soundsLike: "Every reply framed as two options",
      better: "One two-option question, then let them run.",
    },
    {
      mistake: "Making it sound like a technique",
      soundsLike: '"Let me offer you two options here."',
      better: '"Now problem or later problem?"',
    },
    {
      mistake: "Ignoring the response",
      soundsLike: "Pushing on after they've gone quiet",
      better: "Pause to watch, then follow or release.",
    },
    {
      mistake: "Using it to steer",
      soundsLike: "Two options that both lead to your agenda",
      better: "Two options they'd genuinely be happy with, plus an exit.",
    },
    {
      mistake: "Dropping the escape hatch",
      soundsLike: '"So is it A or B?"',
      better: '"Is it A, or B, or neither?"',
    },
    {
      mistake: "Stacking the options too high",
      soundsLike: '"Is it A, B, C, D or E?"',
      better: '"Roughly A or B?"',
    },
  ],
  recoveryPhrases: [
    "Or neither. Tell me in your own words.",
    "Ignore the options if neither fits.",
    "Forget the two. What's the honest answer?",
    "No pressure to pick either.",
  ],
  bestRecoveryLine:
    "Ignore the options if neither fits. What's the honest answer?",
  chains: [
    {
      label: "Clarify then explore",
      sequence:
        "Two-option questions → Summary check (TC011) → Live thread follow-ups (TC001)",
      example: [
        '"Is it more timing or workload?"',
        '"So it\'s mainly the timing."',
        '"What makes this week the hard one?"',
      ],
    },
    {
      label: "Reassure then release",
      sequence:
        "Validation without agreement (TC005) → Two-option questions → Autonomy release (TC021)",
      example: [
        '"I can see why that\'s stressful."',
        '"Do you want to decide today, or revisit tomorrow?"',
        '"Either way, it\'s your call."',
      ],
    },
    {
      label: "Steady then narrow",
      sequence:
        "Slow down under pressure (TC031) → Two-option questions → Meaning reflection (TC040)",
      example: [
        '"Let\'s take this a step at a time."',
        '"Is the sticking point the plan, or the people?"',
        '"So what really matters here is being trusted with it."',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC013",
      reason:
        "Clean request asks for an action. A two-option question makes answering easier. Use TC013 when you need a thing done, TC034 when you need a decision made.",
    },
    {
      id: "TC019",
      reason:
        "Small ask reduces the scope of the action. A two-option question reduces the scope of the response. Reach for TC019 to shrink the task, TC034 to shrink the answer.",
    },
    {
      id: "TC020",
      reason:
        "Low-friction ask reduces the burden of saying yes. A two-option question reduces the ambiguity of how to answer.",
    },
    {
      id: "TC003",
      reason:
        "Comment-before-question warms the question. A two-option question structures the answer. They combine well: comment first, then offer the pair.",
    },
    {
      id: "TC027",
      reason:
        "Permission-based advice is where you hand off when the two options surface a request for advice rather than a decision.",
    },
  ],
};
