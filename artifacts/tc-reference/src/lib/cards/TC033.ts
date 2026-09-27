import type { CardData } from "../card-types";

export const TC033: CardData = {
  pdfUrl: "cards/TC033/TC033_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC033/TC033_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC033/TC033_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC033/TC033_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC033/TC033_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC033/TC033_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC033/TC033_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC033/TC033_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC033",
  whyItWorks:
    'A minimal encourager is a small verbal or non-verbal signal ("mm", "yeah", "go on", a nod) that shows you are following without taking the floor. It keeps the other person talking while leaving their direction untouched. It works because people carry their own thread further when they can feel someone is with them: a tiny continuer removes the need to keep checking whether you are still listening, so they keep going and often reach clarity on their own.',
  whatItIsNot: [
    "It is not a trick, a dominance move, or a script you run on someone.",
    "It is not a way to push someone past a boundary. If they go tense, shorter or guarded, you ease off.",
    "It is not filler on autopilot. An encourager only counts when you are actually listening.",
    'It is not agreement. "Mm" or "go on" keeps them talking. It does not endorse what they said.',
  ],
  overview: {
    coreFormula: [
      "Cue → small move → pause → observe → follow or release.",
      'They trail off mid-thought. You: "mm", then stay quiet.',
      '"...and I didn\'t know what to say." You: "Go on."',
      '"Yeah." (then nothing, let them keep the floor)',
      '"Right, and then?"',
    ],
    minimumViableMove:
      'Say "mm," "yeah," or "go on" once, then keep listening.',
    impact: "Low",
    difficulty: "Easy",
    misuse:
      "Overusing fillers until they sound automatic, impatient or fake, or using encouragers to nudge someone toward your agenda instead of theirs.",
    bestFor: [
      "Someone is mid-story and doesn't need a question",
      "A small signal keeps silence from turning awkward, without steering",
      "You want their thread to stay central, not yours",
      "They're thinking aloud and just need room to keep going",
      "On the phone, where a nod won't carry but a quiet sound will",
      "Early in a hard conversation, before you've earned bigger moves",
    ],
  },
  notFor: [
    "They've asked you a direct question: answer it",
    "Encouragement would pressure them to disclose more than they want",
    'You\'re not actually listening: an empty "mm" is worse than silence',
    "The moment needs a decision or direct action, not more talking",
    "Physical safety or an emergency takes priority",
  ],
  phraseBank: [
    {
      id: "quick-sounds",
      label: "Sound continuers",
      tag: "Shortest signals",
      tone: "Quick",
      phrases: [
        "Mm.",
        "Mm-hm.",
        "Yeah.",
        "Right.",
        "Okay.",
        "Sure.",
        "Uh-huh.",
        "Ah, okay.",
      ],
    },
    {
      id: "carry-on",
      label: "Carry-on nudges",
      tag: "Keep them going",
      tone: "Direct",
      phrases: [
        "Go on.",
        "Keep going.",
        "And then?",
        "So...?",
        "Then?",
        "Say more about that.",
        "Tell me the rest.",
        "Go on, I'm listening.",
      ],
    },
    {
      id: "with-you",
      label: "With-you signals",
      tag: "I'm following",
      tone: "Warm",
      phrases: [
        "I'm with you.",
        "That makes sense.",
        "I hear you.",
        "Yeah, I get that.",
        "Of course.",
        "That's fair.",
        "I can see that.",
        "Makes sense so far.",
      ],
    },
    {
      id: "work-signals",
      label: "Meeting and call signals",
      tag: "Work conversations",
      tone: "Professional",
      phrases: [
        "Noted.",
        "Right, go on.",
        "I follow.",
        "Understood, keep going.",
        "Okay, with you.",
        "That tracks.",
        "Makes sense, and?",
        "Go ahead.",
      ],
    },
    {
      id: "ease-off",
      label: "Ease-off lines",
      tag: "Soften or step back",
      tone: "Repair",
      phrases: [
        "No rush.",
        "Take your time.",
        "Whenever you're ready.",
        "We can stay with this or move on. Your call.",
        "Only if you want to.",
        "No pressure either way.",
        "In your own time.",
        "Say as much or as little as you like.",
      ],
    },
    {
      id: "digital",
      label: "Text and message signals",
      tag: "Digital / text",
      tone: "Quick",
      phrases: [
        "Go on...",
        "I'm listening.",
        "Mm, keep going.",
        "Right, and?",
        "Still with you.",
        "Say more?",
        "Ah, I see.",
        "Yeah, then?",
      ],
    },
    {
      id: "high-stakes",
      label: "When it's tense",
      tag: "Pressure / conflict",
      tone: "High-stakes",
      phrases: [
        "Okay. Go on.",
        "I'm listening, take your time.",
        "Yeah. Keep going, I want to understand.",
        "Right. What else?",
        "I'm here. Say it however it comes out.",
        "Go on, I'm not going anywhere.",
        "Take the time you need.",
        "Okay. And what's under that?",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "They add detail after your signal",
      action: "Follow the thread: stay with what they raised.",
      phrase: "Go on.",
    },
    {
      condition: "They pause to think",
      action: "Wait. Don't fill it. Let them find the next line.",
      phrase: "",
    },
    {
      condition: "They look uncomfortable or go guarded",
      action: "Release the move and ease the pressure.",
      phrase: "No rush, we don't have to stay with this.",
    },
    {
      condition: "They ask for advice",
      action: "Switch to Permission-based advice (TC027).",
      phrase: "Want my honest read, or just a sounding board?",
    },
    {
      condition: "Something actually needs doing",
      action: "Stop encouraging and act: give the answer or take the step.",
      phrase: "Okay, here's what I'd do.",
    },
  ],
  ladder: [
    {
      weak: 'Too broad, too fast: "Tell me everything."',
      better: 'One small continuer: "mm" or "go on."',
      best: "One continuer, then stop and watch how they respond before adding another.",
    },
    {
      weak: 'Filling the gap with your own take: "You\'re overthinking this."',
      better: '"Yeah."',
      best: '"Yeah.", then silence, so the floor stays theirs.',
    },
    {
      weak: 'Correcting them, "That\'s not right."',
      better: '"Right."',
      best: '"I might be reading it wrong. Go on."',
    },
  ],
  scenarios: [
    {
      situation: "Casual chat",
      move: "Use the smallest move, a sound and a nod, so they keep the story.",
      phrase: "Mm, go on.",
    },
    {
      situation: "Professional / meeting",
      move: "Keep it concise and non-performative. Signal you're tracking without interrupting.",
      phrase: "Right, with you. Keep going.",
    },
    {
      situation: "Conflict or upset",
      move: "Pair the encourager with validation or an autonomy release. Never use it to steer.",
      phrase: "Okay. Take your time. Say it however it comes.",
    },
    {
      situation: "Digital / text",
      move: 'One sentence only: a single line that says "still here".',
      phrase: "I'm listening, go on.",
    },
    {
      situation: "High-stakes",
      move: "Lead with direct clarity first. Add a minimal encourager only if it lowers the pressure.",
      phrase: "Understood. Go on, I want to get this right.",
    },
    {
      situation: "Phone call",
      move: "Swap the nod for a quiet sound so they can hear you're still there.",
      phrase: "Mm-hm.",
    },
  ],
  calibration: {
    working: [
      "They keep talking and add more detail.",
      "Their tone softens.",
      "The thread gets clearer, not more tangled.",
      "They slow down and think aloud rather than performing.",
      "They reach something they hadn't planned to say.",
      "You feel like you're following, not leading.",
    ],
    adjust: [
      "Short answers with no energy behind them.",
      "Politeness without warmth.",
      "They keep shifting topic.",
      "They go quiet, guarded or defensive.",
      'Your "mm"s start sounding automatic or impatient.',
      "You realise you've stopped actually listening.",
      "When in doubt, make the move smaller, or drop it.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the openings",
      task: "Write down five moments from today's conversations where a small continuer would have kept someone talking.",
    },
    {
      day: "Day 2",
      title: "Build the ladder",
      task: "Take one of those moments and write a weak, a better and a best response for it.",
    },
    {
      day: "Day 3",
      title: "Cut it back",
      task: "Shorten your best response by a third. Notice how little is actually needed to signal you're with them.",
    },
    {
      day: "Day 4",
      title: "Stock the sounds",
      task: 'Say your shortlist out loud ("mm", "yeah", "go on", "right") until they sound like you, not a technique.',
    },
    {
      day: "Day 5",
      title: "One and stop",
      task: "In a low-stakes chat, use a single encourager, then go quiet and watch what the other person does with the space.",
    },
    {
      day: "Day 6",
      title: "Add a release",
      task: 'Practise one easing-off line for when someone tenses: e.g. "No rush, we don\'t have to stay with this."',
    },
    {
      day: "Day 7",
      title: "Full pass",
      task: "In a real conversation, run cue → small move → pause → observe → follow or release, and notice the moment to stop entirely.",
    },
  ],
  checklist: [
    "Did I preserve their autonomy, or steer them?",
    "Did I use one move rather than stacking several?",
    "Did I actually watch how they responded?",
    "Did I stop when their energy dropped?",
    "Would silence have done the job better?",
    "Was I genuinely listening, or just making the sounds?",
  ],
  example: {
    without: [
      'Person: "I\'m not sure how to handle it."',
      'You: "You\'re overthinking this."',
      "Why it's weak:",
      "takes the floor away from them",
      "closes the thread with your verdict",
      "gives them nothing to continue from",
      "now they have to defend themselves instead of thinking aloud",
    ],
    with: [
      'Person: "I\'m not sure how to handle it."',
      'You: "Mm. Go on."',
      'Person: "I keep going back and forth. Part of me wants to just say something."',
      'You: "Yeah."',
      'Person: "...and part of me thinks I\'ll regret it. Actually, I think I already know."',
      'You: "Right."',
      'Person: "Yeah. I\'ll talk to her tomorrow. That helps."',
      'You: "Good, we can stay with it or leave it there, your call."',
      "Why this works:",
      "each signal keeps the floor with them",
      "no advice, no steering. They reach their own answer",
      'the small "good" and the release close it warmly, not abruptly',
    ],
    note: "The advanced version barely says anything. That's the point. The person solves it themselves because the space stayed open.",
  },
  influencePayoff: {
    feeling: '"They were actually listening. I didn\'t have to check."',
    principle:
      "People carry their own thread further when they can feel someone is with them. A tiny continuer supplies that presence without taking the floor, so they keep going and often reach clarity on their own.",
    gains: [
      "Warmth",
      "Trust",
      "Clearer thinking from the other person",
      "Less friction",
      "They feel respected, not steered",
      "You come across as a good listener without effort",
    ],
    whyMostFail: [
      "They overuse the sounds until they read as automatic or impatient.",
      "They use encouragers to nudge the person toward their own agenda.",
      "They keep making the noises after their attention has already drifted.",
    ],
  },
  fieldTip: {
    headline:
      "Encourage just enough that they never have to check you're still there.",
    body: "The whole skill is restraint. One small sound, then stop. If you find yourself adding a second and a third in a row, you've stopped listening and started performing.",
    example: '"...and I didn\'t know what to say." → "Mm." (then nothing)',
    dont: '"Mm, yeah, right, totally, go on, uh-huh..." A pile-up that sounds impatient.',
    do: 'One "mm", then silence, and let it land.',
  },
  method: [
    {
      step: "1",
      title: "Notice the cue",
      body: "Listen for the moment someone is still going but momentarily open: a trailing-off sentence, a mid-thought pause, a glance up to check you're there. That gap is where a small signal helps.",
      examples: [
        { label: "Trailing off", text: '"...anyway, I don\'t know."' },
        { label: "Checking in", text: '"...if that makes sense?"' },
      ],
    },
    {
      step: "2",
      title: "Choose the smallest useful version",
      body: "Reach for the least you can offer: a sound over a word, a word over a sentence. The point is to keep their thread central, not add your own.",
    },
    {
      step: "3",
      title: "Use plain language",
      body: '"Mm", "yeah", "go on", "right" beat anything clever or writerly. The moment an encourager sounds crafted, it stops sounding like listening.',
    },
    {
      step: "4",
      title: "Pause and observe",
      body: "After the signal, stop. Watch whether they carry on, pause to think, or close down. The pause is doing as much work as the word.",
      examples: [
        { label: "They open up", text: "keep the floor with them" },
        { label: "They tense", text: "ease off" },
      ],
    },
    {
      step: "5",
      title: "Follow or release",
      body: "If they add detail, stay with their thread. If they go guarded or short, release the move: soften, give an exit, or switch to a different technique. When in doubt, make the move smaller.",
    },
  ],
  liveThreadClues: [
    'They trail off: "...anyway."',
    "A mid-thought pause where they're clearly still going",
    '"...you know?"',
    '"...if that makes sense."',
    "Rising, unfinished intonation",
    "They glance up to check you're still with them",
    '"...and then, I don\'t know."',
  ],
  depthDial: [
    {
      depth: "Non-verbal",
      useWhen: "Face to face and they're flowing",
      phrase: "A nod, eye contact, a slight lean in",
    },
    {
      depth: "Sound",
      useWhen: "On the phone, or they're mid-flow",
      phrase: '"Mm." / "Mm-hm."',
    },
    {
      depth: "Word",
      useWhen: "A small nudge to continue",
      phrase: '"Yeah." / "Right." / "Go on."',
    },
    {
      depth: "Short phrase",
      useWhen: "They've slowed and might stop",
      phrase: '"Keep going." / "Say more about that."',
    },
    {
      depth: "Written line",
      useWhen: "Text or chat",
      phrase: '"I\'m listening, go on."',
    },
  ],
  commonMistakes: [
    {
      mistake: "Overusing the move",
      soundsLike: '"Mm, yeah, right, uh-huh, totally, go on..."',
      better: "One signal, then silence.",
    },
    {
      mistake: "Making it sound like a technique",
      soundsLike: 'A flat, evenly-spaced "mm-hm" every few seconds.',
      better: "A natural sound that lands where you actually reacted.",
    },
    {
      mistake: "Ignoring their response",
      soundsLike: '"Go on" while looking at your phone.',
      better: "Signal, then watch what they do with the space.",
    },
    {
      mistake: "Using it to steer",
      soundsLike: '"Mm" when they say what you want, silence when they don\'t.',
      better: "Encourage the thread they're on, not the one you want.",
    },
    {
      mistake: "Encouraging when you've stopped listening",
      soundsLike: '"Yeah, totally", to something you missed.',
      better: 'If you\'ve drifted, own it: "Sorry. Say that last part again?"',
    },
    {
      mistake: "Encouraging when they wanted an answer",
      soundsLike: '"Go on..." after they asked "What should I do?"',
      better: 'Answer, or ask permission first: "Want my take?"',
    },
  ],
  recoveryPhrases: [
    "I may be reading that wrong.",
    "We don't have to stay with that.",
    "Let me say that more simply.",
    "Ignore that if it doesn't fit.",
    "What would be more useful right now?",
    "Sorry, I drifted for a second. Say that again?",
    "I'll stop making the noises and just listen.",
  ],
  bestRecoveryLine: "I might be reading it wrong. Go on, I'm listening.",
  chains: [
    {
      label: "Draw out, then check",
      sequence:
        "Minimal encouragers → Summary check (TC011) → Live-Thread Follow-Ups (TC001)",
      example: [
        'Person talks it out while you signal: "Mm... go on."',
        'You: "So the sticking point is really the timing."',
        'You: "What made the timing feel off?"',
      ],
    },
    {
      label: "Steady an upset person",
      sequence:
        "Validation without agreement (TC005) → Minimal encouragers → Autonomy release (TC021)",
      example: [
        '"That\'d frustrate anyone."',
        '"Mm. Go on."',
        '"It\'s your call how you handle it."',
      ],
    },
    {
      label: "Slow a heated moment",
      sequence:
        "Slow down under pressure (TC031) → Minimal encouragers → Meaning reflection (TC040)",
      example: [
        '"Let\'s take this slowly."',
        '"Okay. Keep going."',
        '"So what matters most here\'s being trusted."',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC004",
      reason:
        "Reflective listening reflects the content back. Minimal encouragers add no content and just keep the floor open.",
    },
    {
      id: "TC026",
      reason:
        "Tactical mirroring repeats a phrase to draw out more. Encouragers add nothing to repeat, only presence.",
    },
    {
      id: "TC029",
      reason:
        "Strategic silence gives the person full empty space. An encourager fills a sliver of it to signal you're still there.",
    },
    {
      id: "TC030",
      reason:
        "Echo plus question echoes then moves the thread forward. Encouragers simply sustain the thread they're already on.",
    },
    {
      id: "TC027",
      reason:
        "Permission-based advice is where you switch when they stop thinking aloud and actually ask what to do.",
    },
    {
      id: "TC012",
      reason:
        "Full-attention signal is the non-verbal bedrock: posture and eye contact. Minimal encouragers are its audible counterpart.",
    },
  ],
};
