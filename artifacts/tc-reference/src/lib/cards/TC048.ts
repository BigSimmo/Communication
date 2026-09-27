import type { CardData } from "../card-types";

export const TC048: CardData = {
  pdfUrl: "cards/TC048/TC048_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC048/TC048_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC048/TC048_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC048/TC048_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC048/TC048_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC048/TC048_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC048/TC048_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC048/TC048_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC048",
  whyItWorks:
    "SCQA is a way of organising what you say so the listener can follow it without effort: you frame the Situation, name the Complication that makes it matter, make the Question explicit, then give your Answer. It works because it hands the listener the shape of your point before asking them to judge it. They know where things stand, what has changed, what decision is on the table, and what you recommend, in the order the mind naturally wants them. Clarity, not pressure, is what makes it persuasive.",
  whatItIsNot: [
    "It is not a script to recite mechanically or announce out loud.",
    "It is not a way to avoid listening, compress emotion into a template, or force the other person into your structure.",
    "It is not a licence to manufacture drama: inflating a minor issue into a 'complication' for effect.",
    "If the structure makes the conversation less humane, it is the wrong move. Slow down and speak plainly instead.",
  ],
  overview: {
    coreFormula: [
      "Situation → Complication → Question → Answer",
      "Situation: where things stand. Complication: what has changed or gone wrong. Question: the decision it forces. Answer: what you recommend.",
      "Minimum viable move: Situation X. Complication Y. Question: what should we do? Answer: Z.",
      'Worked example: "We shipped on time (S). But support tickets have doubled (C). Do we pause new features to fix it (Q)? I\'d pause for two weeks (A)."',
      "Field rule: use the structure to organise your thinking, then speak like a person.",
    ],
    minimumViableMove:
      "Say it in four short beats (the situation, the one complication that actually matters, the question it forces, and your answer) then speak it like a person, not a template.",
    impact: "Medium",
    difficulty: "Easy-Medium",
    misuse:
      "It fails when you manufacture drama (inflating a small issue into a 'complication' for effect) or when you announce the framework and force every sentence into it after the listener is already clear.",
    bestFor: [
      "Briefings and status updates",
      "Proposals and recommendations",
      "Strategy narratives and presentations",
      "Framing a problem before a decision",
      "Making a scattered thought concise",
      "Emails that need to be scannable",
    ],
  },
  notFor: [
    "The issue is simple and needs no framing",
    "The listener needs speed and you are withholding the answer",
    "Emotion is high and validation should come first",
    "You would be inflating a minor issue into false drama",
    "The other person needs to be heard, not organised",
    "Physical safety or an immediate emergency takes priority",
  ],
  phraseBank: [
    {
      id: "quick-frames",
      label: "Quick frames",
      tag: "Openers",
      tone: "Quick",
      phrases: [
        "Here's where we are, here's the snag, here's what I'd do.",
        "Short version: the setup, the catch, then my answer.",
        "One situation, one problem, one recommendation. Quickly.",
        "Let me give you the frame first, then the detail.",
        "Give me thirty seconds to lay it out cleanly.",
        "Context, complication, then the call.",
        "The point up front, the reasoning after, sound alright?",
      ],
    },
    {
      id: "briefings-proposals",
      label: "Briefings & proposals",
      tag: "Work / meetings / email",
      tone: "Professional",
      phrases: [
        "Where we are: [situation]. What's changed: [complication]. The question this raises: [question]. My recommendation: [answer].",
        "The situation's stable. The complication is the deadline. So the question is whether we cut scope. I think we should.",
        "Two lines of background, then the decision we actually need to make.",
        "I'll set the scene, flag the risk, and put my recommendation at the end.",
        "For the email: a short paragraph of context, one of the problem, then the ask in bold.",
        "The headline is the answer. Everything above it's just how I got there.",
        "Here's the background you need, and here's the call I'm asking you to make.",
        "Let me frame the problem before I bring the recommendation.",
      ],
    },
    {
      id: "landing-the-question",
      label: "Landing the question",
      tag: "Making the ask explicit",
      tone: "Direct",
      phrases: [
        "The real question here's this one, not the ten smaller ones around it.",
        "So the decision in front of us is whether we [do X].",
        "Given all that, here's what I'd do.",
        "My answer is [X]. Happy to walk back through the reasoning if it helps.",
        "The one thing I need from you is a yes or no on [X].",
        "Let me name the actual question before we go any further.",
        "That's the situation and the snag. So what should we do about it?",
      ],
    },
    {
      id: "structure-with-warmth",
      label: "Structure with warmth",
      tag: "Check before you organise",
      tone: "Warm",
      phrases: [
        "Can I lay this out in a structured way, or would you rather just talk it through?",
        "I've got a tidy version of this. Tell me if that's useful or too neat.",
        "Before I organise it, is a clear summary what you're after right now?",
        "I'll keep it simple: here's the situation, here's the catch, here's my thought.",
        "Let me make this easy to follow rather than dumping it all at once.",
        "If the structure gets in the way, stop me and I'll just say it plainly.",
        "I want this to be clear for you, not polished for me.",
      ],
    },
    {
      id: "when-it-lands-badly",
      label: "When it lands badly",
      tag: "Softening / recovery",
      tone: "Repair",
      phrases: [
        "I made that too structured. Let me say it more simply.",
        "That may not be the useful frame. Let me back up.",
        "I don't want the structure to override the actual issue.",
        "What part of that was useful, and what should we drop?",
        "That came out like a presentation. Here's what I actually mean.",
        "Forget the framework for a second. The honest version is this.",
        "I think I over-organised that. What did you actually need from me?",
      ],
    },
    {
      id: "pressure-and-sensitive-rooms",
      label: "Pressure & sensitive rooms",
      tag: "Conflict / distress / guarded",
      tone: "High-stakes",
      phrases: [
        "There's a lot here, so let me keep it to one clear point at a time.",
        "I'll say the situation, then the problem, then stop so we can talk.",
        "Before any structure. I know this one matters, so tell me what you need first.",
        "One sentence each, then I'll pause: this is the situation. This is what's gone wrong.",
        "I'm not trying to manage you with a framework. I just want us clear on the problem.",
        "Let me name the real problem plainly, without dressing it up.",
        "The situation's hard and the complication's real. I'd rather work out the question together than hand you an answer.",
      ],
    },
  ],
  method: [
    {
      step: "1",
      title: "Choose the frame on purpose",
      body: "Decide whether structure actually helps here. SCQA suits briefings, proposals and problem-framing, not moments that need listening or warmth first. Never say the framework's name out loud. It is for your head, not the conversation.",
    },
    {
      step: "2",
      title: "Set the situation",
      body: "Give one or two lines of shared, neutral context: the ground you both already stand on. Keep it short. This is the setup, not the story.",
      examples: [
        { label: "Situation", text: '"The migration\'s on track for Friday."' },
      ],
    },
    {
      step: "3",
      title: "Name the one complication",
      body: "State the single thing that has changed or gone wrong and makes this worth raising. One complication, not five, and resist inflating a minor issue for effect.",
      examples: [
        {
          label: "Complication",
          text: '"But the vendor changed their API last week, which adds about a week of work."',
        },
      ],
    },
    {
      step: "4",
      title: "Make the question explicit",
      body: "Say the actual decision the complication forces, so you are both solving the same problem instead of guessing at it. This is the step people skip most.",
      examples: [
        {
          label: "Question",
          text: '"So do we hold the launch date or cut the reporting feature?"',
        },
      ],
    },
    {
      step: "5",
      title: "Give the answer, then check",
      body: "Offer your recommendation plainly, then watch the listener. If they are clearer and able to act, you are done. If they look confused or resistant, summarise and invite correction rather than pushing the structure harder.",
      examples: [
        {
          label: "Answer",
          text: '"I\'d cut reporting and keep the date. We can add it next release. Happy to talk it through."',
        },
      ],
    },
  ],
  liveThreadClues: [
    '"Sorry. What\'s the actual point?"',
    '"I\'m not following."',
    '"So what are you asking me to decide?"',
    '"Can you get to the bottom line?"',
    '"Wait, back up."',
    '"What do you want me to do with this?"',
    '"We keep going in circles."',
  ],
  depthDial: [
    {
      depth: "Answer only",
      useWhen: "They need speed and already know the context",
      phrase: '"Short answer: we pause for two weeks."',
    },
    {
      depth: "Question + Answer",
      useWhen: "The situation is shared but the decision isn't named",
      phrase: '"The question is whether we pause. I\'d pause."',
    },
    {
      depth: "Complication + Question + Answer",
      useWhen: "They know where things stand but not what's changed",
      phrase: '"Tickets have doubled. Do we pause? I think yes."',
    },
    {
      depth: "Full SCQA",
      useWhen: "The listener is new to the problem",
      phrase:
        "\"Here's the situation, here's what changed, here's the call, here's my answer.\"",
    },
    {
      depth: "Situation only, then stop",
      useWhen: "Emotion is high and you need to check in first",
      phrase:
        '"Here\'s where things stand. How are you feeling about it before I go on?"',
    },
  ],
  decisionTree: [
    {
      condition: "The listener needs speed",
      action:
        "Use the shortest version: answer first, structure only if they ask for it.",
      phrase:
        '"Short answer: pause for two weeks. I can give you the why if you want it."',
    },
    {
      condition: "The listener needs support",
      action:
        "Validate first and delay the framework until the emotion settles.",
      phrase:
        '"That\'s a lot to carry. Tell me what you need before I get into the detail."',
    },
    {
      condition: "The listener needs a story or example",
      action: "Switch to an example-led neighbour such as STAR or CARL.",
      phrase: '"Let me give you a concrete example of how this played out."',
    },
    {
      condition: "The listener needs to act",
      action: "End with one clean, specific next step.",
      phrase: '"So the one thing I need is a yes or no on cutting reporting."',
    },
    {
      condition: "You notice you're inflating the problem",
      action: "Drop the drama and name the issue at its true size.",
      phrase: '"Honestly it\'s a small thing, but worth a heads-up."',
    },
    {
      condition: "The listener is already clear",
      action: "Stop structuring: don't force the remaining steps.",
      phrase: "\"Sounds like you've got it. I'll leave it there.\"",
    },
  ],
  ladder: [
    {
      weak: "Using SCQA as a visible script and sounding rehearsed.",
      better: "Using SCQA silently to organise a concise response.",
      best: "Using SCQA flexibly, then checking whether the listener is clearer, more heard, or better able to respond.",
    },
  ],
  scenarios: [
    {
      situation: "Work meeting",
      move: "Make a scattered contribution concise and memorable: one line per step.",
      phrase:
        "\"Here's where we are, here's the snag, here's the call, here's what I'd do.\"",
    },
    {
      situation: "Email or written update",
      move: "Put each step in a short labelled paragraph or bullet so the reader can scan it.",
      phrase:
        '"Background: ... / What\'s changed: ... / Decision needed: ... / My recommendation: ..."',
    },
    {
      situation: "Giving feedback",
      move: "Check what kind of feedback is wanted before you structure it.",
      phrase:
        "\"Do you want my read on it, or just a sounding board? If it's useful, here's the shape of it.\"",
    },
    {
      situation: "Difficult conversation",
      move: "One sentence per step, then pause so it stays a conversation.",
      phrase:
        "\"Here's the situation. Here's what's gone wrong. Can we work out the question together?\"",
    },
    {
      situation: "Someone is upset",
      move: "Validate first. Only structure once they feel heard.",
      phrase:
        '"That sounds really frustrating. When you\'re ready, I can lay out where things stand."',
    },
    {
      situation: "Pitching a proposal",
      move: "Lead from shared context to your recommendation without hiding the ask.",
      phrase:
        "\"We agreed on the goal. Here's the obstacle. Here's the question. Here's what I'd back.\"",
    },
  ],
  calibration: {
    working: [
      "The listener becomes clearer or more focused.",
      "They ask a more specific question.",
      "They summarise your point back accurately.",
      "They can choose a next step.",
      "They relax because they can see where you're going.",
      "The back-and-forth gets shorter.",
    ],
    adjust: [
      "They look confused or go quiet.",
      "They challenge the framing itself.",
      "They seem to need the human context before the structure.",
      "You're stretching to fill the 'complication' slot with a minor issue.",
      "The structure starts to sound defensive, salesy or like a lecture.",
      "You're still structuring after they've already got the point.",
    ],
  },
  commonMistakes: [
    {
      mistake: "Announcing the framework",
      soundsLike: '"I\'m going to use SCQA here. Situation, colon..."',
      better: '"Here\'s the short version..." Use the structure silently.',
    },
    {
      mistake: "Manufacturing a complication",
      soundsLike: '"This is a huge problem". About a minor issue.',
      better: '"It\'s a small snag, but worth flagging: ..."',
    },
    {
      mistake: "Over-structuring",
      soundsLike:
        "Forcing every sentence into a step after they're already clear.",
      better: "Stopping the moment the point has landed.",
    },
    {
      mistake: "Burying the question",
      soundsLike: "Lots of context, no explicit decision.",
      better: '"So the question is whether we hold the date or cut a feature."',
    },
    {
      mistake: "Over-explaining after the answer",
      soundsLike: "Adding five more reasons once they've already agreed.",
      better: "Giving the answer, then stopping.",
    },
    {
      mistake: "Structuring over emotion",
      soundsLike: "A tidy framework when someone is clearly upset.",
      better: "Validating first, then structuring only if it still helps.",
    },
  ],
  recoveryPhrases: [
    "I made that too structured. Let me say it more simply.",
    "That may not be the useful frame. Let me back up.",
    "I don't want the structure to override the actual issue.",
    "What part of that was useful, and what should we drop?",
    "That came out like a presentation. Here's what I actually mean.",
    "Forget the framework for a second. The real problem is this.",
    "I think I over-organised that. What did you actually need from me?",
  ],
  bestRecoveryLine: "I made that too structured. Let me just say what I mean.",
  chains: [
    {
      label: "Structure then confirm",
      sequence: "SCQA → Summary check",
      example: [
        "Give the four-beat frame, then check it landed.",
        '"Before we move on. What did you take as the main point?"',
      ],
    },
    {
      label: "Structure then ask",
      sequence: "SCQA → Clean request",
      example: [
        "Once the frame has made the problem clear, make the next step concrete.",
        '"So. Can you approve the scope cut by Thursday?"',
      ],
    },
    {
      label: "Structure then release",
      sequence: "SCQA → Autonomy release",
      example: [
        "Offer the answer, then hand the choice back.",
        "\"That's my recommendation, but it's genuinely your call.\"",
      ],
    },
    {
      label: "Validate then structure",
      sequence: "Validate the concern → SCQA",
      example: [
        "When emotion is present, acknowledge it before you organise anything.",
        "\"I know this deadline's been brutal. Can I lay out where we're and what I'd do?\"",
      ],
    },
  ],
  drill: [
    {
      day: "Day 1",
      title: "Spot the shape",
      task: "Pick one briefing or email you receive today and label its Situation, Complication, Question and Answer, or note which of the four is missing.",
    },
    {
      day: "Day 2",
      title: "Write one",
      task: "Take a real work issue and write a 60-second response that moves through all four steps.",
    },
    {
      day: "Day 3",
      title: "Cut it down",
      task: "Cut yesterday's response by a third, to about 30 seconds, without losing the core point.",
    },
    {
      day: "Day 4",
      title: "Say it two ways",
      task: "Say it aloud once as visible structure and once as plain speech. Keep the plainer version.",
    },
    {
      day: "Day 5",
      title: "Make the question explicit",
      task: "Take three updates you'd normally give and add one sentence to each that names the actual decision it forces.",
    },
    {
      day: "Day 6",
      title: "Use it live, lightly",
      task: "In one real conversation, use SCQA without announcing it, then watch whether the listener gets clearer or more able to act.",
    },
    {
      day: "Day 7",
      title: "Practise the recovery",
      task: "Deliberately over-structure something, then practise a recovery line that drops the frame and says the point plainly.",
    },
  ],
  checklist: [
    "Did I use SCQA to serve the listener, or to sound polished?",
    "Was the core point clear?",
    "Did I keep it concise?",
    "Was the complication real, or manufactured for effect?",
    "Did I adapt when the listener needed something else?",
    "Did I preserve autonomy and dignity?",
  ],
  example: {
    without: [
      "You: \"So, um, a few things: the migration's mostly done, though there were issues with staging, and also the vendor's API changed, which affects the timeline, and I've been meaning to mention the budget too...\"",
      'Manager: "Sorry. What do you actually need from me?"',
      "You: \"Well, it's complicated. There's a lot going on.\"",
      "Why it's weak:",
      "buries the real decision under background",
      "never names the actual question",
      "leaves the listener to do the sorting",
      "sounds anxious rather than clear",
    ],
    with: [
      'You: "Quick one. Can I give you the shape of it in four lines?"',
      'Manager: "Go for it."',
      'You: "The migration\'s on track for Friday. But the vendor changed their API last week, which adds about a week of work. So the question is whether we hold the launch date or cut the reporting feature."',
      'Manager: "And what do you think?"',
      "You: \"I'd cut reporting and keep the date. We can add it next release. Happy to talk it through if you'd rather hold.\"",
      "Manager: \"No, that's clear. Let's cut reporting.\"",
      "Why this works:",
      "names the situation, the snag and the decision in order",
      "makes the question explicit so they can actually answer it",
      "offers a recommendation without forcing it",
      "leaves room to disagree",
    ],
    note: "The structure never gets announced. The listener just feels the point arrive in a clear order.",
  },
  influencePayoff: {
    feeling: '"I know exactly what they\'re asking me and why it matters."',
    principle:
      "People engage with a point more readily when they can see its shape (context, problem, question, answer) before they're asked to judge it.",
    gains: [
      "Lower cognitive load for the listener",
      "A clear path through your point",
      "Better sequencing: what matters comes first",
      "Faster decisions because the question is explicit",
      "Credibility from clarity rather than volume",
      "Less back-and-forth working out what you meant",
    ],
    whyMostFail: [
      "They announce the framework and sound rehearsed.",
      "They manufacture a complication where none exists.",
      "They keep structuring after the listener is already clear.",
      "They use it to avoid listening or to compress emotion into a template.",
    ],
  },
  fieldTip: {
    headline: "Scaffolding, not the conversation.",
    body: "Use SCQA to organise your own thinking before you speak, then let the structure disappear. The other person should feel clarity, not choreography. They should never hear the framework, only a point that arrives in the right order.",
    example:
      "\"The migration's on track, but the vendor changed their API. So do we hold the date or cut a feature? I'd cut the feature.\"",
    dont: "Don't announce the steps or force a sentence into each one.",
    do: "Do let the answer land first if that's all they need.",
  },
  relatedTechniques: [
    {
      id: "TC044",
      reason:
        "BLUF leads with the bottom line and adds support after. SCQA walks the listener from context to the answer. Use BLUF when they only need the conclusion. Use SCQA when the problem needs framing first.",
    },
    {
      id: "TC042",
      reason:
        "PREP is point-first for a single opinion (Point, Reason, Example, Point). SCQA is problem-first for a decision. Use PREP to defend a view. Use SCQA to frame a question and answer it.",
    },
    {
      id: "TC047",
      reason:
        "STAR narrates a past example (Situation, Task, Action, Result). SCQA frames a live problem and its answer. Use STAR to evidence what you did. Use SCQA to drive a decision.",
    },
    {
      id: "TC013",
      reason:
        "Clean request makes a single clear ask. SCQA builds the case that leads to one. Use Clean request when the context is shared. Use SCQA when you must first establish why the ask matters.",
    },
    {
      id: "TC049",
      reason:
        "CARL is a reflective narrative (Context, Action, Result, Learning). SCQA is a forward-looking decision frame. Use CARL to debrief what happened. Use SCQA to propose what to do next.",
    },
  ],
};
