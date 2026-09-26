import type { CardData } from "../card-types";

export const TC008: CardData = {
  pdfUrl: "cards/TC008/TC008_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet — the designed visual card.",
      href: "cards/TC008/TC008_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC008/TC008_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC008/TC008_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC008/TC008_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC008/TC008_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC008/TC008_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC008/TC008_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC008",
  whyItWorks:
    "No-overexplaining discipline is the skill of noticing when your point has landed and resisting the urge to add more words for reassurance, approval, or anxiety relief. The rule of thumb is simple: explain until the listener can act or understand, not until you feel emotionally safe. It works because concise points feel more considered than long anxious ones, and because leaving space invites the other person in rather than burying your meaning under excess words.",
  whatItIsNot: [
    "It is not being abrupt, withholding context, or acting mysterious.",
    "It is not giving less information than the situation requires.",
    "It is not a rule to always be brief - it is knowing when your point has already landed.",
    "It is giving enough, then stopping cleanly.",
  ],
  overview: {
    coreFormula: [
      "Point -> one reason -> optional example -> pause or check.",
      "My view is X. The main reason is Y. [pause]",
      "Short version: X. The detail is Y if useful.",
      "I'd do X, mainly because Y. Happy to unpack it if helpful.",
      "I can't do X. I can do Y. [stop]",
      "That came out long. Simple version: X.",
    ],
    minimumViableMove: "Make the point once, give one reason, then pause.",
    impact: "Low",
    difficulty: "Medium",
    misuse:
      "The move fails when brevity becomes evasive, cold or under-informative - when you use fewer words to dodge accountability rather than to be clearer.",
    bestFor: [
      "Workplace updates, meetings and senior conversations",
      "Dating and social conversation where over-talking kills ease",
      "Requests, boundaries, refusals and apologies",
      "Explaining opinions, recommendations or decisions",
      "Conflict or disagreement where too many words look defensive",
      "Text messages, emails and follow-ups",
      "Any moment where you notice yourself talking to reduce your own discomfort",
    ],
  },
  notFor: [
    "The person is genuinely confused and needs more explanation",
    "The topic is high stakes and detail is required for safety or fairness",
    "You are using brevity to avoid accountability",
    "The other person has asked for your reasoning",
    "The relationship needs warmth and your short answer could sound cold",
    "You are trying to seem mysterious rather than clear",
  ],
  phraseBank: [
    {
      id: "concise_opinions",
      label: "Concise opinions",
      tag: "Stating a view cleanly",
      tone: "Direct",
      phrases: [
        "My view is X, mainly because Y.",
        "I'd choose X. The reason is pretty simple: Y.",
        "The headline is X. The detail is Y.",
        "I think X is the better move.",
        "I'm leaning X because it solves the main issue.",
        "Honestly, X. That's the whole answer.",
      ],
    },
    {
      id: "check_instead_of_continuing",
      label: "Check instead of continuing",
      tag: "Hand over rather than pad",
      tone: "Quick",
      phrases: [
        "Does that answer the question?",
        "Do you want the short version or the full version?",
        "Is that enough detail, or useful to go deeper?",
        "I can unpack that if helpful.",
        "I'll pause there.",
        "That's the gist - want more?",
      ],
    },
    {
      id: "boundaries_saying_no",
      label: "Boundaries / saying no",
      tag: "Clean refusals",
      tone: "Direct",
      phrases: [
        "I can't do that, but I can do this.",
        "I'm not available for that.",
        "That won't work for me.",
        "I'm going to say no to that.",
        "I don't want to overcommit, so I'll leave it there.",
        "No, but thank you for asking.",
      ],
    },
    {
      id: "work_leadership",
      label: "Work / leadership",
      tag: "Bottom line first",
      tone: "Professional",
      phrases: [
        "Bottom line: I recommend X.",
        "The decision I'd make is X.",
        "The main risk is Y.",
        "The next step is X by Friday.",
        "My recommendation is X; the trade-off is Y.",
        "Headline first: we're on track. Detail if you want it.",
      ],
    },
    {
      id: "social_dating",
      label: "Social / dating",
      tag: "Brevity plus warmth",
      tone: "Warm",
      phrases: [
        "Simple answer: yes.",
        "I liked it. Not because it was perfect - because it felt easy.",
        "I'll spare you the essay: I'm into it.",
        "Short version: I had a good time.",
        "I could overanalyse it, but the honest answer is X.",
        "Yeah, I'd like to see you again. That simple.",
      ],
    },
    {
      id: "conflict_disagreement",
      label: "Conflict / disagreement",
      tag: "One concern, not a case",
      tone: "High-stakes",
      phrases: [
        "The part I disagree with is X.",
        "My concern is Y.",
        "I see it differently, mainly because X.",
        "I don't want to over-argue it. My view is X.",
        "I'll say the key point and stop: X.",
        "Here's my one concern, then I'll listen.",
      ],
    },
    {
      id: "digital_text",
      label: "Digital / text",
      tag: "One-screen replies",
      tone: "Quick",
      phrases: [
        "Quick answer: yes.",
        "Short version: I can do Thursday.",
        "I'm out this week, but keen another time.",
        "Main thought: choose option B.",
        "No long explanation - I just don't think that works for me.",
        "On it - done by Thursday.",
      ],
    },
    {
      id: "recovery_reset",
      label: "Recovery / reset",
      tag: "Catch and simplify",
      tone: "Repair",
      phrases: [
        "I'm overexplaining. Short version: X.",
        "Let me make that cleaner.",
        "I'm giving too much detail. The point is X.",
        "I'll stop there before I turn this into a TED Talk.",
        "Simple version: X. Happy to expand if useful.",
        "Ignore the ramble - the point is X.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "You've made your point and feel the urge to keep talking",
      action: "Stop. Make the point once, give one reason, then pause.",
      phrase: "My view is X, mainly because Y.",
    },
    {
      condition: 'They look genuinely confused or ask "what do you mean?"',
      action:
        "Add one clarifying reason or example - don't just repeat the same words.",
      phrase: "Let me put it another way: the key thing is X.",
    },
    {
      condition: "They actually ask for your full reasoning",
      action:
        "Give the longer version in one clean layer; staying terse here reads as evasive.",
      phrase: "Happy to walk through it - the main factors are...",
    },
    {
      condition:
        "The topic is high-stakes and detail matters for fairness or safety",
      action:
        "Prioritise completeness over brevity, and say why you're going long.",
      phrase: "This one needs the full picture, so bear with me.",
    },
    {
      condition: "Your short answer risks sounding cold",
      action: "Add one warm line, not five defensive ones.",
      phrase: "Short answer is no - but I'm really glad you asked me.",
    },
    {
      condition: "You've already landed the point and are now rephrasing it",
      action: "Stop and hand over with a check instead of another lap.",
      phrase: "Does that answer it, or want me to go deeper?",
    },
  ],
  ladder: [
    {
      weak: "Uses the technique mechanically or too often, clipping every answer short.",
      better: "Uses the smallest useful version, then listens.",
      best: "Uses it only when the cue is present, keeps the wording natural, and adjusts to the response.",
    },
    {
      weak: "Blurts a short answer, then fills the silence with justifications.",
      better: "Gives the point and one reason, then stops.",
      best: "Says just enough that the point lands, and lets the pause do the rest.",
    },
    {
      weak: "Talks about being concise instead of just being concise.",
      better: "Performs one clear behavioural move.",
      best: "Makes brevity feel like ordinary, confident conversation.",
    },
  ],
  scenarios: [
    {
      situation: "High-status or senior person",
      move: "Lead with the answer, then one reason. Rambling doesn't read as respect - it reads as nerves.",
      phrase: "My recommendation is X. The main reason is Y.",
    },
    {
      situation: "Dating or social",
      move: "Keep answers alive but not over-explained. Brevity plus warmth creates ease.",
      phrase: "I had a really good time. That's the honest version.",
    },
    {
      situation: "Conflict or disagreement",
      move: "Too much detail sounds defensive. State the concern, pause, and invite their response.",
      phrase: "My one concern is X. What's your read?",
    },
    {
      situation: "Digital or text",
      move: "Shorter is usually warmer than a defensive paragraph. Add one human line if needed.",
      phrase: "Can't make Thursday - free most of next week though.",
    },
    {
      situation: "After an awkward moment",
      move: "Name the over-explaining lightly and reset rather than piling on more words.",
      phrase: "I'm overexplaining - let me simplify.",
    },
    {
      situation: "When detail is genuinely needed",
      move: "Use layers: give the headline first, then offer the long version.",
      phrase: "Short answer is X. Want the full reasoning?",
    },
  ],
  calibration: {
    working: [
      "They answer or decide without asking you to repeat.",
      "They seem clearer, not more confused.",
      "They ask a specific follow-up instead of looking overwhelmed.",
      "The conversation feels calmer and more efficient.",
      "Your point carries more weight because it is not diluted.",
      "They summarise your point back accurately.",
    ],
    adjust: [
      'They look confused or ask "wait, what do you mean?" - add one clarifying reason.',
      "Your brevity sounded cold and they seem hurt - add a warm line.",
      "They ask for your reasoning and you're withholding it - give the longer version.",
      "You're using shortness to dodge accountability - say the real thing plainly.",
      "They need detail for a practical decision - offer the full picture.",
      "You feel yourself getting abrupt or dismissive - slow down and add warmth.",
      'If unsure whether it lands as blunt, say: "I\'m keeping it short, not trying to be blunt."',
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the urge",
      task: "Through the day, just notice the moments where you keep talking after your point has already landed. Change nothing yet - only count them.",
    },
    {
      day: "Day 2",
      title: "Point plus one reason",
      task: "In three conversations, answer a question with exactly the point, one reason, then a pause. Nothing after the pause.",
    },
    {
      day: "Day 3",
      title: "Hold the silence",
      task: "Pick one moment where a pause feels uncomfortable and let it sit for two seconds instead of filling it with words.",
    },
    {
      day: "Day 4",
      title: "Trim a message",
      task: "Take one text or email before you send it and cut it by 30% while keeping the warmth intact.",
    },
    {
      day: "Day 5",
      title: "One example only",
      task: 'When you explain a view, give a single concrete example, then check "want more detail?" rather than stacking more.',
    },
    {
      day: "Day 6",
      title: "Clean boundary",
      task: "Say one no or one boundary in a single warm sentence, with no apology-spiral or justification afterwards.",
    },
    {
      day: "Day 7",
      title: "Repair on the fly",
      task: 'Next time you catch yourself over-explaining, name it and reset out loud: "I\'m overexplaining - short version is X."',
    },
  ],
  checklist: [
    "Did I answer before explaining?",
    "Did I give one main reason rather than every reason?",
    "Did I stop once the point had landed, instead of defending it?",
    "Did I let a pause sit instead of filling it?",
    "Did I check before adding more detail?",
    "Did my brevity still sound warm, not cold?",
  ],
  example: {
    without: [
      'Person: "Can you make Friday?"',
      "You: \"Um, maybe not. I mean, I've got a thing in the morning, then another thing that might run late, and I'm not sure about traffic, plus I don't want to promise and then let you down...\"",
      'Person: "So... no?"',
      "Why it is weak:",
      "buries a simple answer under anxious detail",
      "the listener has to dig out what you actually mean",
      "the over-explaining reads as unsure, not considerate",
    ],
    with: [
      'Person: "Can you make Friday?"',
      'You: "I can\'t do Friday, but I can do Monday afternoon."',
      'Person: "Monday works."',
      'You: "Great - I\'ll lock it in."',
      "Why this works:",
      "answers first, offers the alternative, then stops",
      "no apology-spiral and no traffic report",
      "Advanced version:",
      'Person: "Why do you think we should choose option B?"',
      'You: "Bottom line: B solves the main problem with the least added complexity. The trade-off is it\'s less flexible later. Happy to walk through the long version if useful."',
      "Person: \"No, that's clear. Let's go with B.\"",
      "Why this works:",
      "headline, one reason, one honest trade-off, then an offer - not a lecture",
      "leaves the door open without forcing the detail on them",
    ],
    note: "Same discipline in both: answer, one reason, then stop and hand over.",
  },
  influencePayoff: {
    feeling: '"That was clear. I know exactly where they stand."',
    principle:
      "Concise points feel more considered than long anxious ones, and clarity reads as confidence.",
    gains: [
      "Makes you sound clearer, calmer and more confident.",
      "Reduces the sense that you are seeking approval, defending yourself, or trying too hard.",
      "Makes your ideas easier to process because the listener doesn't have to sort the point from the excess words.",
      "Creates more conversational space, which often makes the other person contribute more.",
      "Improves persuasive force: a concise point usually feels more considered than a long anxious explanation.",
      "Gives your key point more weight because it is not diluted.",
    ],
    whyMostFail: [
      "They keep talking to relieve their own anxiety, not because the listener needs more.",
      "They mistake brevity for coldness and either over-pad or turn abrupt.",
      "They use shortness to dodge accountability, so it reads as evasive.",
      "They repeat the point in new words when they feel unheard, diluting it.",
    ],
  },
  fieldTip: {
    headline: "Stop one sentence early.",
    body: 'The point is usually at its strongest right before you start repeating it. The urge to add "just one more thing" is almost always about calming your own nerves, not helping the listener. Trust the pause and let them respond.',
    dont: '"...and also, I mean, what I\'m basically trying to say is..."',
    do: '"That\'s the main thing. Happy to go deeper if useful."',
  },
  method: [
    {
      step: "1",
      title: "Lead with the point",
      body: "State the actual answer, recommendation or boundary first. Skip the long warm-up - the preamble is usually anxiety, not information.",
      examples: [
        {
          label: "Weak",
          text: '"So there are a few things to consider first..."',
        },
        {
          label: "Better",
          text: '"My recommendation is B. Here\'s the one reason."',
        },
      ],
    },
    {
      step: "2",
      title: "Add one reason",
      body: 'Give the strongest reason, not every reason. One clear "because" is more persuasive than a stack of justifications. If they need more, they will ask.',
    },
    {
      step: "3",
      title: "Use one example only if needed",
      body: "A single concrete example usually lands the point. Stacking examples to prove you're right signals that you feel unsure, not that you're being thorough.",
    },
    {
      step: "4",
      title: "Stop at the first landing point",
      body: 'When they nod, say "right", answer, or otherwise show they\'ve got it, stop adding. The point is strongest just before you start repeating it.',
      examples: [
        {
          label: "Landing signal",
          text: 'They say "got it" or start answering - that\'s your cue to stop.',
        },
      ],
    },
    {
      step: "5",
      title: "Check instead of continuing",
      body: 'Replace the extra explanation with a short check: "Does that answer it?" or "Want the longer version?" This hands them control instead of burying them.',
    },
    {
      step: "6",
      title: "Add detail only by invitation",
      body: "If they ask, expand in one clean second layer. Don't dump everything at once - offer it in tiers, shortest first.",
    },
    {
      step: "7",
      title: "Repair if you overdo it",
      body: 'If you catch yourself rambling, name it lightly and reset: "I\'m overexplaining - short version is X." A clean reset costs nothing and buys back your credibility.',
    },
  ],
  liveThreadClues: [
    'You hear yourself opening with "Well, there are a few things..."',
    "You've already made the point and are now rephrasing it.",
    "The silence feels uncomfortable and you want to fill it.",
    "You're adding reasons to feel safe, not because they asked.",
    'You notice "just", "sorry", or "I mean" creeping in.',
    "You're still explaining a boundary you already stated cleanly.",
  ],
  depthDial: [
    {
      depth: "Headline only",
      useWhen: "quick yes/no, texts, low stakes",
      phrase: '"Quick answer: yes."',
    },
    {
      depth: "Headline + one reason",
      useWhen: "most everyday conversations",
      phrase: '"My view is X, mainly because Y."',
    },
    {
      depth: "+ one example",
      useWhen: "they look unsure or want it concrete",
      phrase: '"For instance, last time we tried X and it worked."',
    },
    {
      depth: "Full version",
      useWhen: "they ask, or the stakes are high",
      phrase: '"Happy to walk through the whole thing."',
    },
  ],
  commonMistakes: [
    {
      mistake: "Explaining before answering",
      soundsLike: '"Well, there are a few things..."',
      better: "Give the headline first, context second.",
    },
    {
      mistake: "Adding every reason",
      soundsLike: "Long lists of justifications.",
      better: "Give the strongest reason and stop.",
    },
    {
      mistake: "Approval-checking after every sentence",
      soundsLike: '"Does that make sense?" repeated anxiously.',
      better: "Check once, after the useful chunk.",
    },
    {
      mistake: "Filling silence with more words",
      soundsLike: "Adding detail because the pause feels uncomfortable.",
      better: "Pause and let them respond.",
    },
    {
      mistake: "Over-apologising around a boundary",
      soundsLike: '"Sorry, I\'m so sorry, I just..."',
      better: "Say the boundary warmly and cleanly, once.",
    },
    {
      mistake: "Mistaking brevity for coldness",
      soundsLike: "A short answer with no warmth at all.",
      better: "Add one warm line, not five defensive ones.",
    },
    {
      mistake: "Repeating the same point in new words",
      soundsLike: "Restating it because you feel unheard.",
      better: "Ask what part is unclear instead.",
    },
    {
      mistake: "Dumping detail too early",
      soundsLike: "Giving the long version before they ask.",
      better: "Offer layers: short version first, more if useful.",
    },
  ],
  recoveryPhrases: [
    "I'm overexplaining. Short version: X.",
    "Let me make that cleaner.",
    "That sounded colder than I meant. What I mean is...",
    "I'm giving too much detail. The point is X.",
    "I'll pause there.",
    "I can explain the longer version if useful.",
    "I think I repeated myself there. The useful bit is X.",
    "Simple answer: X.",
  ],
  bestRecoveryLine: "I'm overexplaining - short version is X.",
  chains: [
    {
      label: "Boundary chain",
      sequence: "Warmth -> clean no -> alternative -> stop explaining",
      example: [
        '"I\'d genuinely love to help with this."',
        '"I can\'t take it on right now, though."',
        '"I could point you to Sam, who knows the area."',
        "Then stop - no apology paragraph.",
      ],
    },
    {
      label: "Influence chain",
      sequence: "BLUF -> one reason -> values frame -> autonomy release",
      example: [
        '"Bottom line: I\'d go with B."',
        '"It solves the main issue with the least complexity."',
        '"It fits what you said matters most - keeping it simple."',
        '"But it\'s your call."',
      ],
    },
    {
      label: "Leadership chain",
      sequence: "Headline -> rationale -> next action -> check obstacles",
      example: [
        '"We\'re on track for Friday."',
        '"The one risk is the vendor sign-off."',
        '"I\'ll chase that today."',
        '"Anything you\'d add?"',
      ],
    },
    {
      label: "Conflict chain",
      sequence:
        "Validate -> key concern -> one reason -> pause -> clarify if needed",
      example: [
        '"I get why you\'d want to ship now."',
        '"My one concern is the data migration."',
        '"If it slips, we lose the weekend."',
        "Then pause and let them respond.",
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC031",
      reason:
        "Slow down under pressure: when the over-talking is driven by nerves, the fix is pace, not word-count - slow down first, then trim.",
    },
    {
      id: "TC035",
      reason:
        "Strategic pause: use for a deliberate one-beat pause around your key line, rather than the whole discipline of stopping cleanly.",
    },
    {
      id: "TC013",
      reason:
        "Clean request: when the job is to make one clear ask, use the clean-request shape rather than trimming an explanation.",
    },
    {
      id: "TC014",
      reason:
        "Validate the concern: when the person needs their worry acknowledged first, a bare short answer will land cold - validate, then shorten.",
    },
    {
      id: "TC044",
      reason:
        "BLUF: the structured cousin for written and work contexts - lead with the bottom line, then support it.",
    },
    {
      id: "TC029",
      reason:
        "Strategic silence: when holding the silence, rather than shortening your words, is the actual move.",
    },
  ],
};
