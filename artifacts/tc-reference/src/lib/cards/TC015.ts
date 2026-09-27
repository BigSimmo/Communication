import type { CardData } from "../card-types";

export const TC015: CardData = {
  pdfUrl: "cards/TC015/TC015_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC015/TC015_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC015/TC015_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC015/TC015_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC015/TC015_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC015/TC015_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC015/TC015_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC015/TC015_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC015",
  whyItWorks:
    "Premature advice restraint is the deliberate move of holding back advice until you understand whether it is wanted, useful and well timed. It works because most people share a problem to feel understood first, not to be fixed: when you solve too fast you answer a question they never asked, and your suggestion arrives as pressure or superiority rather than help. Restraint earns you the right to advise, and it makes the advice you eventually give land better, because it fits the real problem instead of the one you assumed.",
  whatItIsNot: [
    "Not a script, trick, diagnosis, dominance move, interrogation, or shortcut around consent.",
    'Not something to repeat mechanically until every conversation becomes "do you want advice?"',
    "Not a substitute for direct action when action is genuinely needed.",
    "Not a way to pressure, extract or control, and not withholding help to seem wise.",
    "Not a substitute for actually listening to the response you get.",
  ],
  overview: {
    coreFormula: [
      "Reflect first → mode check → permissioned suggestion → fit check.",
      '"That sounds [hard part]. Do you want me to listen, help think it through, or suggest options?"',
      '"I have one thought, but I don\'t want to steamroll you. Useful, or not yet?"',
      "Operating rhythm: notice → small move → pause → calibrate → follow or release.",
    ],
    minimumViableMove:
      'Reflect once, then ask: "Do you want ideas, or do you want me to just hear you out for a minute?"',
    impact: "Medium",
    difficulty: "Medium",
    misuse:
      'It fails when you perform it at someone: reflecting mechanically, stalling with "do you want advice?" while they clearly need action, sounding clinical or superior, or using restraint as a polite way to steer them toward your own agenda.',
    bestFor: [
      "Someone venting who needs to feel heard before anything else",
      "Friends or partners sharing a frustration, not asking for a fix",
      "Leadership and coaching, where advice should follow understanding",
      "Emotionally charged moments where a quick fix would feel dismissive",
      "Building trust, so people can talk to you without getting a lecture",
      "Making later advice land, because it fits the actual problem",
    ],
  },
  notFor: [
    "Physical safety or an immediate emergency, where you act rather than reflect",
    "They have clearly and explicitly asked for advice",
    "Urgent time pressure where a decision is genuinely needed now",
    "They are stuck in repeated venting with no movement and want to move on",
    "Practical help is what is needed, not emotional attunement",
    "You would only be stalling with mode-checks to avoid giving a straight answer",
  ],
  phraseBank: [
    {
      id: "quick-restraint",
      label: "Quick restraint",
      tag: "Openers and quick texts",
      tone: "Quick",
      phrases: [
        "Before I try to solve it, that sounds really frustrating.",
        "I'm going to resist advice-mode for a second.",
        "Let me make sure I understand the hard part first.",
        "I don't want to fix too fast and miss the point.",
        "That sounds like a lot. Do you want a sounding board or suggestions?",
        "That sounds rough. Do you want advice or just a sympathetic witness?",
        "Before I give suggestions: what's the part that's most annoying?",
        "I have a thought if you want it, but no pressure.",
        "Want me to help draft a reply, or are you just venting?",
        "I'll not jump straight to fixing unless it's useful.",
      ],
    },
    {
      id: "mode-check",
      label: "Mode check",
      tag: "Ask what they want",
      tone: "Direct",
      phrases: [
        "Do you want me to listen, help think it through, or suggest options?",
        "Are you wanting advice, or do you mostly need to vent this one out?",
        "Do you want comfort, clarity, or a plan?",
        "Would problem-solving help, or would that be annoying right now?",
        "Do you want my honest read, or just space to talk it through first?",
      ],
    },
    {
      id: "reflect-first",
      label: "Reflect before advice",
      tag: "Name the hard part",
      tone: "Warm",
      phrases: [
        "The hard part sounds less like the task and more like feeling unsupported.",
        "It sounds like you're not short on ideas. You're tired of carrying it.",
        "That sounds frustrating because it was avoidable.",
        "It sounds like the unfairness is the part that's sticking.",
        "So this is less about what happened and more about what it meant.",
      ],
    },
    {
      id: "permissioned-advice",
      label: "Permissioned advice",
      tag: "Offer with consent",
      tone: "Professional",
      phrases: [
        "I have one thought, but only if you want suggestions.",
        "Would it help if I offered a possible next step?",
        "Can I give you a practical option, or would that be too soon?",
        "My instinct is one thing, but I want to check you want advice first.",
        "I can give you the short version of what I'd try, if useful.",
        "Okay, if we're in problem-solving mode, I'd start small.",
        "Given what you've said, I wouldn't try to fix the whole thing today.",
        "The move I'd consider is one small change first.",
        "The lowest-friction next step might be to name the pattern, not the incident.",
        "The part I'd protect first is your standing, not the deadline.",
      ],
    },
    {
      id: "social-friendship",
      label: "Social / friendship",
      tag: "Casual and low-key",
      tone: "Warm",
      phrases: [
        "That sounds awful. Do you want solutions or solidarity?",
        "I can be useful or just be outraged with you. Your call.",
        "Do you want me in advice mode or friend mode?",
        "I can help solve it, but I also get if you just need to be annoyed for a minute.",
        "That sounds miserable. I'll not try to silver-line it.",
      ],
    },
    {
      id: "professional-leadership",
      label: "Professional / leadership",
      tag: "Work, coaching, busy people",
      tone: "Professional",
      phrases: [
        "Before I suggest fixes, I want to understand the constraint.",
        "Is this a moment for advice, or do you want me to help map the problem first?",
        "What outcome are you trying to protect here?",
        "Would a recommendation be useful now, or should we clarify the issue first?",
        "If you want options, I can give two possible paths.",
        "Before I recommend, what constraint matters most?",
        "Do you want a quick read or a few options?",
        "I'll hold advice until I know the outcome you're after.",
        "What are you optimising for here?",
        "My concise suggestion, if useful, is to solve one part and revisit the rest.",
      ],
    },
    {
      id: "conflict-safe",
      label: "Conflict-safe",
      tag: "Charged moments",
      tone: "High-stakes",
      phrases: [
        "I might be moving too quickly to solution mode. What do I need to understand first?",
        "I don't want to talk you out of the feeling. What part matters most?",
        "Before I respond, I want to separate what happened from what it meant.",
        "I can see why advice might feel dismissive right now.",
        "Let me slow down and hear the concern properly.",
      ],
    },
    {
      id: "shy-guarded",
      label: "Shy or guarded",
      tag: "Low pressure",
      tone: "Repair",
      phrases: [
        "No need to solve it right now. I'm happy just to listen.",
        "We can keep this simple. Do you want ideas or just space?",
        "I'll not push advice unless you want it.",
        "It makes sense to take a moment before deciding.",
        "Would a small next step feel useful, or not yet?",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "They are venting emotionally",
      action: "Reflect and stay with them. Do not advise yet.",
      phrase: '"That sounds exhausting."',
    },
    {
      condition: 'They ask "what should I do?"',
      action: "Give concise advice, but check the desired outcome first.",
      phrase: '"What are you hoping to protect or change?"',
    },
    {
      condition: "They reject your advice",
      action:
        "You probably advised too early or solved the wrong problem. Ask what matters most.",
      phrase: '"Fair. What\'s the part that actually matters here?"',
    },
    {
      condition: "They keep repeating the issue",
      action: "Summarise and ask whether they want to problem-solve now.",
      phrase:
        '"You\'ve come back to this a few times. Want to think through a next step?"',
    },
    {
      condition: "Urgent action is needed",
      action: "Be direct, but briefly acknowledge the feeling.",
      phrase:
        '"This is stressful. Let\'s deal with the urgent bit now, then talk properly."',
    },
    {
      condition: "Advice would be unwelcome",
      action: "Use validation, curiosity and support instead of fixing.",
      phrase: '"I\'m just going to be on your side with this one."',
    },
  ],
  ladder: [
    {
      weak: '"You should just..."',
      better: '"That sounds hard. Do you want advice or space?"',
      best: '"That sounds like the kind of day where advice too fast would be annoying. Do you want solutions, solidarity, or a bit of both?"',
    },
    {
      weak: '"Have you tried..."',
      better: '"What have you already tried?"',
      best: '"Before I suggest the obvious, what have you already tried and what felt useless?"',
    },
    {
      weak: '"At least..."',
      better: '"That sounds frustrating."',
      best: '"I can see why that would get under your skin. It sounds less like workload and more like being taken for granted."',
    },
    {
      weak: "\"Here's what I'd do.\"",
      better: '"Want my read?"',
      best: '"I have one practical thought, but I don\'t want to steamroll you. Useful, or not yet?"',
    },
  ],
  scenarios: [
    {
      situation: "Friend venting",
      move: "Reflect the emotion and offer solidarity before any fix. Do not open with obvious solutions.",
      phrase: '"That sounds awful. Do you want solutions or solidarity?"',
    },
    {
      situation: "Partner upset",
      move: "Do not fix the feeling. Show you are with them first.",
      phrase: "\"I'm here. Tell me the part that's bothering you most.\"",
    },
    {
      situation: "Colleague at work",
      move: "Ask whether they want a sounding board or practical options, and keep advice brief.",
      phrase:
        '"Do you want a sounding board, or a couple of practical options?"',
    },
    {
      situation: "Leadership or coaching",
      move: "Clarify whether they want coaching or a recommendation. Avoid rescuing too quickly.",
      phrase:
        '"Do you want me to help you think, or do you want my recommendation?"',
    },
    {
      situation: "Digital or text",
      move: "Use one clean mode-check sentence rather than a wall of suggestions.",
      phrase: '"Want advice, or just a sympathetic witness?"',
    },
    {
      situation: "Shy or guarded person",
      move: "Offer space and control. No pressure to solve it right now.",
      phrase: '"No pressure to solve this now. I\'m happy just to listen."',
    },
  ],
  calibration: {
    working: [
      "They relax, continue, or give more detail.",
      "They clarify what kind of support they want.",
      'They say "exactly" or "that\'s the issue".',
      "They ask for your view after feeling heard.",
      "They consider advice rather than pushing it away.",
      "They correct you comfortably and become clearer, not managed.",
    ],
    adjust: [
      "They explicitly ask for advice, so move to it.",
      "They seem stuck in repeated venting with no movement.",
      "There is urgent safety, risk or time pressure.",
      'They look annoyed by repeated "how are you feeling" questions.',
      'They say "I know, but what should I do?"',
      "They shorten, defend, go vague, or seem managed.",
      "Offer two small options instead of a lecture, and ask what outcome they want first.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the reflex",
      task: "Three times today, catch the urge to jump in with advice, reassurance or a fix. Just notice it and let it pass without acting on it.",
    },
    {
      day: "Day 2",
      title: "Name the hard part",
      task: "Take three things people said recently and write one sentence each naming the feeling underneath (unfairness, overload, disrespect), not the fix.",
    },
    {
      day: "Day 3",
      title: "Own the mode check",
      task: 'Write and say aloud three natural versions of "Do you want me to listen, think it through, or suggest options?" in your own voice, until none sound scripted.',
    },
    {
      day: "Day 4",
      title: "Reflect, then pause",
      task: "In one real conversation, reflect the hard part once and then stay silent. Let them fill the space instead of rushing to solve it.",
    },
    {
      day: "Day 5",
      title: "Ask before advising",
      task: 'When you have a suggestion, ask permission first ("I have one thought, if it\'s useful") and offer only one idea, not a plan.',
    },
    {
      day: "Day 6",
      title: "Check the fit",
      task: "After giving a suggestion, ask whether it actually fits. If it does not, return to understanding rather than pushing the idea harder.",
    },
    {
      day: "Day 7",
      title: "Recover a miss",
      task: 'Catch one moment where you advised too fast and use a recovery line: "I jumped into fixing too quickly. What do I need to understand first?"',
    },
  ],
  checklist: [
    "Did I hold advice until I understood what they actually wanted?",
    "Was my wording shorter than my instinct?",
    "Did I reflect the feeling before offering anything?",
    "Did the person have more room after my move, or less?",
    "Did I leave room for them to correct or decline?",
    "Did I notice whether it actually helped?",
  ],
  example: {
    without: [
      'Person: "Work was awful today. My manager dumped another project on me."',
      'You: "You should just tell them no. You need better boundaries."',
      "Why it's weak:",
      "jumps straight to fixing before understanding",
      "tells them what to do, which lands as criticism",
      "misses the real feeling, being taken for granted",
      "gives them something to defend instead of someone who gets it",
    ],
    with: [
      'Person: "Work was awful today. My manager dumped another project on me."',
      'You: "That sounds exhausting. Is this a venting moment, or do you want help thinking through what to say?"',
      'Person: "Mostly venting. I\'m just so annoyed."',
      "You: \"Fair. It sounds like the worst part isn't just the extra work, but that it was assumed you'd absorb it.\"",
      "Advanced:",
      'Person: "Work was awful today. My manager dumped another project on me."',
      'You: "That sounds like the kind of thing where advice too fast would be annoying. Is the main feeling anger, overload, or being taken for granted?"',
      'Person: "Taken for granted."',
      "You: \"That makes sense. Then the real issue isn't just workload. It's respect and expectation-setting. If you want later, we can think about how to say that without escalating it.\"",
      "Why this works:",
      "doesn't rush to fixing, so they need not defend their distress",
      "asks what mode of support they actually want",
      "names the emotional meaning: being expected to absorb extra work",
      "distinguishes anger, overload and being taken for granted",
    ],
    note: "The advanced version should make the other person feel clearer, not managed.",
  },
  influencePayoff: {
    feeling: '"They actually listened before trying to fix me."',
    principle:
      "People become more receptive to your advice once they feel understood. Solving before understanding lands as pressure, not help.",
    gains: [
      "People feel respected rather than fixed, corrected, rushed, or subtly judged.",
      "Less defensiveness, because advice does not arrive as pressure or superiority.",
      "Your later advice is more persuasive, because it fits the real problem, constraints and readiness.",
      "Trust builds: talking to you does not automatically become a lecture or interrogation.",
      "More emotional safety in friendship, dating, leadership, coaching, conflict and family.",
      "You avoid the likability failure of solving before understanding.",
    ],
    whyMostFail: [
      "They solve to ease their own discomfort, not to meet the other person's need.",
      "They reflect mechanically, so it reads as a technique performed at someone.",
      'They stall with "do you want advice?" when the person clearly needs action.',
      "They use restraint to steer quietly toward their own agenda.",
    ],
  },
  fieldTip: {
    headline: "Earn the right to advise by showing you understand first.",
    body: "The goal is not to display skill. It is to make the next human moment easier. Reflect the hard part, check what they actually want, and let one clean suggestion follow only if it is invited.",
    dont: 'Do not open with "You should just..." or "Have you tried..." before you understand the feeling.',
    do: 'Do reflect once, then ask: "Do you want ideas, or do you want me to just hear you out for a minute?"',
  },
  method: [
    {
      step: "1",
      title: "Catch the advice reflex",
      body: "Notice the urge to solve, reassure, teach, correct, diagnose, compare, or optimise. That impulse is usually about easing your own discomfort, not meeting their need. Before it lands, ask yourself whether they have actually asked for it.",
      examples: [
        { label: "Reflex", text: '"You should just tell them no."' },
        {
          label: "Restraint",
          text: '"That sounds exhausting. Tell me what happened."',
        },
      ],
    },
    {
      step: "2",
      title: "Reflect the hard part",
      body: "Name the emotional or meaningful piece first: unfairness, overload, disappointment, embarrassment, uncertainty, disrespect, or pressure. Naming it well is often more useful than any suggestion.",
      examples: [
        { label: "Surface", text: '"That\'s a lot of extra work."' },
        {
          label: "Deeper",
          text: '"It sounds like the galling part is being expected to just absorb it."',
        },
      ],
    },
    {
      step: "3",
      title: "Ask what mode they want",
      body: "Check whether they want listening, thinking together, direct advice, practical options, or help acting. Offering the choice makes your response feel chosen rather than imposed.",
      examples: [
        {
          label: "Mode check",
          text: '"Do you want me to listen, help think it through, or suggest options?"',
        },
      ],
    },
    {
      step: "4",
      title: "Clarify the desired outcome",
      body: "If they do want help, ask what they want to protect, change, avoid, or decide. This stops you solving the wrong problem confidently.",
      examples: [
        {
          label: "Ask",
          text: '"What are you hoping to protect here, the relationship, the workload, or the principle?"',
        },
      ],
    },
    {
      step: "5",
      title: "Offer one clean suggestion",
      body: "If advice is invited, give one relevant idea, not a long plan. Keep ownership with them and hold the idea lightly.",
      examples: [
        {
          label: "One idea",
          text: '"One option is to name the pattern, not just this instance. But it\'s your call."',
        },
      ],
    },
    {
      step: "6",
      title: "Check the fit, then adjust",
      body: "Ask whether the suggestion actually fits. If it does not, return to understanding rather than pushing harder. Then stop, read the response, and adjust.",
      examples: [
        {
          label: "Fit check",
          text: '"Does that actually fit, or am I missing something?"',
        },
      ],
    },
  ],
  liveThreadClues: [
    '"I just need to vent."',
    '"It\'s been one of those days."',
    '"I\'m so done with this."',
    "\"I don't even know why I'm telling you this.\"",
    'Your own "you should just..." starting to form',
    'The urge to say "have you tried..."',
  ],
  depthDial: [
    {
      depth: "Just listen",
      useWhen: "raw venting",
      phrase: '"I\'m just going to be annoyed on your behalf for a minute."',
    },
    {
      depth: "Reflect",
      useWhen: "they want to feel understood",
      phrase: '"It sounds like the unfair part is what\'s sticking."',
    },
    {
      depth: "Mode check",
      useWhen: "you're unsure what they want",
      phrase: '"Do you want me to listen, or help think it through?"',
    },
    {
      depth: "Permissioned advice",
      useWhen: "they've asked or agreed",
      phrase: '"I have one thought, if it\'s useful."',
    },
    {
      depth: "Direct steer",
      useWhen: "urgent action is needed",
      phrase: '"Given the deadline, I\'d do this first, then we can talk."',
    },
  ],
  commonMistakes: [
    {
      mistake: "Advising too fast",
      soundsLike: '"You should just..."',
      better: '"Before I jump in, what\'s the hardest part?"',
    },
    {
      mistake: "Using the move mechanically",
      soundsLike:
        '"Do you want me to listen or give advice?" (every time, robotically)',
      better:
        '"That sounds rough. Do you want to think it through, or just get it off your chest?"',
    },
    {
      mistake: "Making it too long",
      soundsLike: "a paragraph of reflecting before they can get a word in",
      better: "One short reflection, then a pause.",
    },
    {
      mistake: "Sounding clinical or superior",
      soundsLike: '"I\'m hearing that you feel invalidated."',
      better: '"That sounds genuinely unfair."',
    },
    {
      mistake: "Ignoring cues to stop",
      soundsLike:
        'still mode-checking after they\'ve said "just tell me what to do"',
      better: "\"Okay. Here's what I'd actually do.\"",
    },
    {
      mistake: "Steering toward your own agenda",
      soundsLike: '"Well, what I\'d do is..." (before they asked)',
      better: '"What are you hoping to protect here?"',
    },
    {
      mistake: "Stalling when action is needed",
      soundsLike: '"But how are you feeling about it?" during an emergency',
      better:
        '"Let\'s deal with the urgent bit now. We can talk properly after."',
    },
  ],
  recoveryPhrases: [
    "I jumped into fixing too quickly. Sorry, what do I need to understand first?",
    "That was advice-mode too fast. Do you want me to back up?",
    "I'm solving before I've actually heard you. Let me slow down.",
    "That came out like a lecture. The part I meant to ask is...",
    "I may be giving suggestions when you just need space. Which would help?",
    "Let me reset: what's the hardest part of this for you?",
    "I may have framed that badly. Let me step back.",
    "We can leave that if it isn't the useful thread.",
  ],
  bestRecoveryLine:
    "I jumped into fixing too quickly. Sorry, what do I need to understand first?",
  chains: [
    {
      label: "Friendship chain",
      sequence:
        'Validate → "solutions or solidarity?" → let them vent → reflect → contribute lightly',
      example: [
        "\"That's rubbish, I'm sorry.\"",
        '"Do you want solutions or solidarity?"',
        "(they vent. You stay with it)",
        '"So the galling part is being taken for granted."',
      ],
    },
    {
      label: "Workplace chain",
      sequence:
        "Clarify outcome → ask if advice is wanted → give one concise option → check fit",
      example: [
        '"What are you trying to protect here?"',
        '"Want a recommendation, or shall we map it first?"',
        '"One option is to push the deadline a week."',
        '"Does that actually fit?"',
      ],
    },
    {
      label: "Conflict chain",
      sequence:
        "Pause → validate the concern → don't fix or defend → ask what needs understanding → respond",
      example: [
        '"Let me slow down."',
        '"I can see why that felt dismissive."',
        '"What do I need to understand before I respond?"',
      ],
    },
    {
      label: "Influence chain",
      sequence:
        "Understand goal → identify constraint → permissioned advice → small next step → release",
      example: [
        '"What matters most to you here?"',
        '"So the constraint is time, not money."',
        '"I have one thought, if it\'s useful."',
        '"But it\'s completely your call."',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC090",
      reason:
        "Closest sibling. TC090 Do-not-fix-yet is the raw discipline of not jumping to a solution. TC015 adds the mode-check and the permissioned hand-off into advice once it is wanted.",
    },
    {
      id: "TC027",
      reason:
        "TC027 Permission-based advice is the moment you ask to give advice. TC015 is the earlier restraint that holds advice back until the person is actually understood.",
    },
    {
      id: "TC021",
      reason:
        'TC021 Autonomy release hands the decision back explicitly ("it\'s your call") after you advise. TC015 is about not advising too soon in the first place.',
    },
    {
      id: "TC037",
      reason:
        "TC037 Double-sided reflection is the specific reflecting move that buys you time. TC015 is the broader restraint that decides whether to reflect or advise at all.",
    },
    {
      id: "TC067",
      reason:
        "TC067 Advice Request is the other side of the exchange: recognising and responding cleanly when advice is genuinely being asked for, rather than assumed.",
    },
  ],
};
