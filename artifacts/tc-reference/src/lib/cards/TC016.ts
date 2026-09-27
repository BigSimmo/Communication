import type { CardData } from "../card-types";

export const TC016: CardData = {
  pdfUrl: "cards/TC016/TC016_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC016/TC016_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC016/TC016_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC016/TC016_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC016/TC016_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC016/TC016_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC016/TC016_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC016/TC016_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC016",
  whyItWorks:
    "Active-constructive responding means meeting someone's good news with visible interest, a specific note of what is good about it, and one follow-up that helps them relive or expand the moment: treating good news as a thread to join, not a cue to change the subject. It works because how you respond to a person's wins shapes the relationship as much as how you respond to their setbacks. When you actively share their positive emotion, they feel seen, the good moment lasts longer, and the bond gets stronger. A flat \"nice\" or a quick pivot to your own story quietly tells them their news did not really matter to you.",
  whatItIsNot: [
    'It is not generic praise or a flat "nice" before moving on.',
    "It is not stealing the spotlight or turning their news into your own story.",
    "It is not immediately warning about problems or poking holes in the good news.",
    "It is not a script to force intimacy, a status move, or flattery with an agenda.",
  ],
  overview: {
    coreFormula: [
      "Notice the good news → show real interest → name a specific positive part → ask one energising follow-up → stay with their answer.",
      "That's genuinely good news. What was the best part of it?",
      "That's a proper milestone. What moment made it feel real?",
      "You worked hard for that. How did you find out?",
      "That sounds like a real win. What made it land for you?",
    ],
    minimumViableMove:
      'Catch the good news, resist the reflexive "nice", and say one warm, specific line with a single follow-up: "That\'s genuinely good news. What was the best part of it?"',
    impact: "High",
    difficulty: "Easy-Medium",
    misuse:
      "The move fails when you hijack the topic, turn their news into your own story, jump straight to problems, or perform enthusiasm mechanically: celebration that is really about you stops feeling like celebration.",
    bestFor: [
      "Good news and wins",
      "Promotions and milestones",
      "Relief after a hard stretch",
      "Creative or personal progress",
      "Moments when someone is quietly testing whether you will share their joy",
      "Rebuilding warmth after a run of flat, distracted responses",
    ],
  },
  notFor: [
    "The person is ambivalent or clearly not celebrating",
    "The news has ethical or safety problems",
    "Strong enthusiasm would feel fake or forced",
    "They want privacy or containment, not a spotlight",
    "The move would add pressure, exposure or embarrassment",
    "Physical safety or an immediate emergency takes priority",
  ],
  phraseBank: [
    {
      id: "quick_reactions",
      label: "Quick reactions",
      tag: "Short openers",
      tone: "Quick",
      phrases: [
        "That's brilliant.",
        "Oh, that's the best news.",
        "What a result.",
        "Genuinely pleased for you.",
        "That's a proper win.",
        "I love that for you.",
        "That made my day.",
        "Well deserved, that.",
      ],
    },
    {
      id: "digital_text",
      label: "Digital / text",
      tag: "One clean line",
      tone: "Quick",
      phrases: [
        "That's brilliant news. Genuinely pleased for you.",
        "Amazing. Tell me how it happened when you've got a sec.",
        "That's such good news to wake up to.",
        "So happy for you. What's the first thing you did?",
        "Been hoping this would come through for you. Congratulations.",
        "This deserves more than a thumbs-up. Properly well done.",
      ],
    },
    {
      id: "share_the_joy",
      label: "Share the joy",
      tag: "Warmth and feeling",
      tone: "Warm",
      phrases: [
        "That's lovely. You must be so pleased.",
        "You worked hard for that.",
        "That's worth enjoying for a second.",
        "I'm really glad this landed for you.",
        "You've earned this one.",
        "I can see how much this means to you.",
        "That's the kind of news that makes your week.",
      ],
    },
    {
      id: "energising_followups",
      label: "Energising follow-ups",
      tag: "One good question",
      tone: "Direct",
      phrases: [
        "What was the best part of finding out?",
        "What made it land for you?",
        "Who did you tell first?",
        "What's the first thing you did?",
        "What moment made it feel real?",
        "What are you most pleased about?",
        "How did it actually happen?",
        "What's next now this has come through?",
      ],
    },
    {
      id: "professional_wins",
      label: "Professional wins",
      tag: "Work and results",
      tone: "Professional",
      phrases: [
        "Landing that is a real result. What made the difference?",
        "That's a strong outcome. What are you most pleased with?",
        "Big milestone for the team. How did it come together?",
        "That's worth marking properly. What was the turning point?",
        "Genuinely good work on that. What are you taking from it?",
        "That's the sort of win that gets noticed. How does it feel?",
      ],
    },
    {
      id: "guarded_or_mixed",
      label: "Guarded or mixed news",
      tag: "Low-pressure celebration",
      tone: "High-stakes",
      phrases: [
        "That's a good result. Happy to hear more if you feel like sharing.",
        "First things first. That's a real win. We can sort the rest after.",
        "No pressure to make a thing of it, but I'm genuinely glad for you.",
        "Sounds like good news with a catch. What's the good part first?",
        "Only if you want to get into it. How are you feeling about it?",
        "I don't want to overdo it, but quietly, well done.",
      ],
    },
    {
      id: "repair_and_soften",
      label: "Repair and soften",
      tag: "When it misses",
      tone: "Repair",
      phrases: [
        "I may have read that wrong. What's the honest version?",
        "Sorry, I got carried away. How are you actually feeling about it?",
        "We don't have to make a big thing of it.",
        "I jumped ahead there. Sorry.",
        "I don't want to make a bigger deal of it than you want.",
        "Happy to just be quietly pleased for you.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "They're still sharing the news",
      action: "Don't interrupt. Let them finish, then respond.",
      phrase: "Go on. What happened next?",
    },
    {
      condition: "You're not sure which part they're most pleased about",
      action: "Check before you celebrate the wrong thing.",
      phrase: "What's the part that feels best to you?",
    },
    {
      condition: "The news is mixed or they seem unsure",
      action: "Match their actual feeling rather than forcing enthusiasm.",
      phrase:
        "How are you feeling about it? Pleased, or more complicated than that?",
    },
    {
      condition: "They lean in and expand",
      action: "Stay with it. Ask one more genuine question.",
      phrase: "What made it finally click?",
    },
    {
      condition: "They shrink, correct you, or go flat",
      action: "Ease off and repair.",
      phrase:
        "I may have made more of that than you wanted. Tell me where to land.",
    },
    {
      condition: "They start hinting they want help or advice",
      action:
        "Ask permission before switching from celebration to problem-solving.",
      phrase: "Do you want to think it through, or just enjoy it for now?",
    },
  ],
  ladder: [
    {
      weak: "Nice. Anyway, about the meeting...",
      better: "That's great news. What was the best part?",
      best: "That's a proper win. You've been working toward that for months. What was the moment you realised it had actually happened?",
    },
    {
      weak: "Nice one.",
      better: "Congrats! That's great.",
      best: "That's brilliant, you earned that. What's the first thing you did when you found out?",
    },
    {
      weak: "Well done.",
      better: "Well done, that's a big deal.",
      best: "Well done, I know how much the client side was worrying you, so getting that sign-off must feel great.",
    },
  ],
  scenarios: [
    {
      situation: "Social conversation",
      move: "Keep it warm and brief. Share the feeling and ask one light follow-up.",
      phrase: "That's great. What's the first thing you did when you heard?",
    },
    {
      situation: "Professional / work win",
      move: "Name the specific achievement, then hand it back to them.",
      phrase:
        "Landing that account is a big deal. What made the difference in the end?",
    },
    {
      situation: "Digital / text",
      move: "Write one clean, specific line and avoid overexplaining.",
      phrase:
        "That's brilliant news, genuinely pleased for you. How did it come about?",
    },
    {
      situation: "Guarded or high-status person",
      move: "Make the celebration optional and low-pressure.",
      phrase:
        "That's a good result. Happy to hear more if you feel like sharing.",
    },
    {
      situation: "Close relationship",
      move: "Drop the technique feel. Use ordinary, unpolished words.",
      phrase: "Oh, that's the best news. Come here, tell me everything.",
    },
    {
      situation: "Mixed news (good with a catch)",
      move: "Celebrate the good part first. Hold the problem for later.",
      phrase: "First, that's a real win. We can sort the logistics after.",
    },
  ],
  calibration: {
    working: [
      "They give more detail and expand the story.",
      "Their tone relaxes and they speak a little faster.",
      "They correct you easily, without tension.",
      'They say "yes", "exactly", or "that\'s it".',
      "They offer a next step or bring you further in.",
      "They stay engaged rather than closing the topic.",
    ],
    adjust: [
      "Shorter answers, or a flat one-word reply.",
      "Visible tension or a forced smile.",
      "They correct you but don't warm up.",
      "They change the topic.",
      "Sarcasm creeps in.",
      "It starts to feel like the moment is about your reaction, not their news.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the cue",
      task: "Through the day, notice every time someone shares good news, however small. Just count them: don't change what you do yet.",
    },
    {
      day: "Day 2",
      title: "Catch your default",
      task: "Take five recent conversations and write how you actually responded to good news. Mark which were flat, which turned back to you, which shared the moment.",
    },
    {
      day: "Day 3",
      title: "Write the move",
      task: "For each of those five, write the one warm, specific line and single follow-up you could have used instead.",
    },
    {
      day: "Day 4",
      title: "Say it plainly",
      task: "Rehearse those lines aloud until they stop sounding scripted. Cut anything that sounds polished or performative.",
    },
    {
      day: "Day 5",
      title: "One live rep",
      task: "In a real conversation, respond to one piece of good news with interest, a specific note, and one follow-up. Then just listen to the answer.",
    },
    {
      day: "Day 6",
      title: "Read the response",
      task: "Do it again, and this time watch the calibration cue: did they expand and relax, or shrink? Adjust in the moment.",
    },
    {
      day: "Day 7",
      title: "Recover on purpose",
      task: 'Practise one recovery line after a response that lands flat, so repairing feels natural: "I may have read that wrong. What\'s the honest version?"',
    },
  ],
  checklist: [
    "Did I notice the good-news cue instead of talking over it?",
    "Did I keep the move short and specific?",
    "Did I share their feeling rather than redirect to myself?",
    "Did I ask one genuine follow-up and then listen?",
    "Did I watch their response and adjust?",
    "Did I repair quickly if it missed?",
  ],
  example: {
    without: [
      "A: I got the role.",
      "B: Nice. I applied for something similar once.",
      "A: Oh. Yeah.",
      "Why it falls flat:",
      "turns their news into your own story",
      "offers no specific interest or follow-up",
      "leaves them with nowhere to go",
    ],
    with: [
      "A: I got the role.",
      "B: That's excellent. What was the best part of finding out?",
      "A: Honestly, calling my mum.",
      "B: That's lovely. What did she say?",
      "Going a step deeper:",
      "A: I got the role.",
      "B: That's a proper milestone. You sounded unsure last month, so I'm really glad this landed. What moment made it feel real?",
      "A: When they said they wanted me specifically.",
      "Why this works:",
      "shares the emotion instead of deflecting",
      "names something specific and true",
      "one warm follow-up keeps them in the moment",
    ],
    note: 'The best version references what the win cost them ("you sounded unsure last month"), which makes the celebration feel earned rather than automatic.',
  },
  influencePayoff: {
    feeling: '"They were genuinely happy for me. It wasn\'t just about them."',
    principle:
      "How you respond to someone's good news shapes the bond as much as how you respond to their bad news. Sharing a person's positive emotion tells them the relationship is a safe place to bring good things.",
    gains: [
      "Warmth and closeness",
      "Trust that you're on their side",
      "Good feeling that lasts longer for both of you",
      "A reputation as someone worth sharing news with",
      "Less quiet resentment from wins that fell flat",
      "Easier honest conversation later, because celebration came first",
    ],
    whyMostFail: [
      'They give a flat "nice" and move straight on.',
      "They hijack the topic with their own similar story.",
      'They jump to problems, risks or "have you thought about...".',
      "They perform enthusiasm mechanically, so it reads as about them, not the other person.",
    ],
  },
  fieldTip: {
    headline: "Join the good news, don't change the subject.",
    body: "The strongest version of this move points at what the win cost them. Referencing the effort or worry behind it turns automatic congratulations into celebration that feels earned and personal.",
    example:
      "You sounded unsure about this last month. So getting it must feel brilliant. What moment made it real?",
    dont: "Nice. Anyway, did you see the email about Thursday?",
    do: "That's a proper win. What are you most pleased about?",
  },
  method: [
    {
      step: "1",
      title: "Notice the cue",
      body: 'Catch the moment someone offers good news. It is often a small bid to see whether you\'ll share the feeling. Good-news openers sound like "guess what", "I finally...", "it actually happened", "I got the...". The cue is the invitation. The rest of the move only works if you spot it.',
    },
    {
      step: "2",
      title: "Pause before the reflexive response",
      body: 'The default replies (a flat "nice", your own similar story, or a jump to logistics) all quietly deflate the moment. A half-second pause is enough to choose the celebrating version instead of the automatic one.',
    },
    {
      step: "3",
      title: "Show interest and name the specific part",
      body: 'Say what is genuinely good about it, and be specific rather than generic.\nGeneric:\n"That\'s great."\nSpecific:\n"That\'s a proper milestone. You\'ve been working toward that for months."\nNaming the real thing shows you were actually listening.',
    },
    {
      step: "4",
      title: "Ask one energising follow-up",
      body: 'One warm question invites them to relive and expand the moment.\nExamples:\n"What was the best part of finding out?"\n"Who did you tell first?"\n"What moment made it feel real?"\nKeep it to one: a string of questions turns celebration into an interview.',
    },
    {
      step: "5",
      title: "Stay with their answer",
      body: "This is where the move becomes warm rather than a tactic. Follow what they say, react to it, and let the good feeling sit before you steer anywhere else. Don't reroute to your own news or to the next task.",
    },
    {
      step: "6",
      title: "Watch, and repair if it misses",
      body: "If they expand and relax, you're on track. If they shrink, correct you, or go flat, ease off quickly.\nRecovery:\n\"I may have read that wrong. What's the honest version?\"\nRepairing well matters more than getting it perfect first time.",
    },
  ],
  liveThreadClues: [
    '"Guess what..."',
    '"I finally..."',
    '"It actually happened."',
    '"I got the..."',
    '"You won\'t believe..."',
    '"I\'m really pleased with..."',
    '"We pulled it off."',
  ],
  commonMistakes: [
    {
      mistake: "One-upping with your own story",
      soundsLike: '"Nice, I applied for something like that once."',
      better: '"That\'s brilliant. What was the best part of finding out?"',
    },
    {
      mistake: "The flat acknowledgement",
      soundsLike: '"Cool. Anyway, about the meeting..."',
      better: '"That\'s a proper win. Tell me how it happened."',
    },
    {
      mistake: "Jumping straight to problems",
      soundsLike: '"Great. Have you thought about the extra hours though?"',
      better:
        "\"That's great news. Let's enjoy it before we get into logistics.\"",
    },
    {
      mistake: "Overcooking the enthusiasm",
      soundsLike:
        '"This is the most amazing thing I\'ve ever heard, honestly incredible!"',
      better: '"That\'s genuinely good news. What made it land for you?"',
    },
    {
      mistake: "Sounding performative or scripted",
      soundsLike: '"I\'m actively delighted to celebrate your success."',
      better: "\"Ah, that's great. What's the first thing you did?\"",
    },
    {
      mistake: "Ignoring their correction",
      soundsLike: "Keeping the praise going after they've gone quiet",
      better: '"I may have made too much of that. What\'s the honest version?"',
    },
    {
      mistake: "Making it about your own performance",
      soundsLike: "Fishing for credit for being supportive",
      better: "Stay with their answer and ask one more real question.",
    },
  ],
  recoveryPhrases: [
    "I may have read that wrong.",
    "Sorry, I got carried away. How are you actually feeling about it?",
    "We don't have to make a big thing of it.",
    "I jumped ahead there.",
    "How are you actually feeling about it?",
    "We can talk details another time. Well done.",
    "I don't want to make a bigger deal of it than you want. Tell me where to land.",
    "That came out more over-the-top than I meant. I'm just genuinely pleased for you.",
  ],
  bestRecoveryLine: "I may have read that wrong. What's the honest version?",
  chains: [
    {
      label: "Full celebration",
      sequence:
        "Full-attention signal → Active-constructive responding → Summary check",
      example: [
        "Put your phone down and turn toward them.",
        '"That\'s a real win. What was the best part of finding out?"',
        '"So the part that meant the most was them asking for you by name."',
      ],
    },
    {
      label: "Celebrate before advising",
      sequence:
        "Reflective listening → Active-constructive responding → Permission-based advice",
      example: [
        '"So you weren\'t sure it would come through, and now it has."',
        '"That\'s brilliant, you earned that. What are you most pleased about?"',
        '"Do you want to think through the next bit together, or just enjoy it for now?"',
      ],
    },
    {
      label: "Low-pressure celebration",
      sequence: "Active-constructive responding → Autonomy release",
      example: [
        '"That\'s genuinely good news. What made it land for you?"',
        '"No pressure to make a thing of it. I\'m just really glad for you."',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC002",
      reason:
        "Support response over shift response is the parent discipline: choosing to support rather than shift the focus to yourself. TC016 is the active, enthusiastic version aimed specifically at someone's good news.",
    },
    {
      id: "TC096",
      reason:
        "Capitalisation extension keeps a shared positive moment going over time. TC016 is the in-the-moment response. Reach for TC096 to stretch the good feeling out afterwards.",
    },
    {
      id: "TC018",
      reason:
        "Specific appreciation names what is valued about a person or their behaviour. Use TC016 when you are responding to their good news in real time rather than praising a trait.",
    },
    {
      id: "TC022",
      reason:
        "Status generosity gives dignifying credit or status. Use TC016 when the person is sharing a win and needs active celebration rather than a boost to their standing.",
    },
    {
      id: "TC007",
      reason:
        "No one-upping discipline prevents you stealing the spotlight with your own story. Use TC016 as the positive move that fills the space one-upping would have taken.",
    },
  ],
};
