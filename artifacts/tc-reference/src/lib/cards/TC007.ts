import type { CardData } from "../card-types";

export const TC007: CardData = {
  pdfUrl: "cards/TC007/TC007_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet — the designed visual card.",
      href: "cards/TC007/TC007_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC007/TC007_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC007/TC007_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC007/TC007_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC007/TC007_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC007/TC007_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC007/TC007_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC007",
  whyItWorks:
    "No one-upping discipline is the practice of resisting the impulse to top, match, correct, or redirect someone's story with your own bigger, worse, better, more dramatic, or more impressive version. It works because it changes who the moment belongs to: when you let their story land before adding yours, they feel respected rather than outshone, and people become more receptive to you once they sense you are not competing with them.",
  whatItIsNot: [
    "It is not never sharing your own experiences.",
    "It is not being passive, bland, or falsely humble.",
    "It is not silent withholding — the goal is generous timing, not going quiet.",
    "It is about timing: let their moment land before adding yours.",
  ],
  overview: {
    coreFormula: [
      "Their moment → acknowledge → follow-up → optional brief bridge → return",
      '"That sounds [specific quality]. What was [the alive part]?"',
      '"I have a version of that too, but I want to stay with yours first. What happened next?"',
      '"That reminds me of something similar, but your part is the interesting bit here: what did you do after that?"',
    ],
    minimumViableMove:
      'Before saying "me too", ask one more question about their story.',
    impact: "Low",
    difficulty: "Medium",
    misuse:
      "The move fails when you suppress all contribution and go flat, or when your later contribution still competes — turning their story into a doorway to your own.",
    bestFor: [
      "When someone shares a win, achievement, compliment, or proud moment.",
      "When someone shares hardship, stress, embarrassment, vulnerability, or frustration.",
      'When you feel a strong impulse to say "me too", "same", "that\'s nothing", or "when I…".',
      "Networking, dating, friendships, workplace rapport, group conversations, and leadership.",
      "Any situation where likability depends on making the other person feel interesting, not overshadowed.",
    ],
  },
  notFor: [
    "They directly ask for your story, experience, view, or advice.",
    "The conversation has clearly become mutual story-swapping and both people are enjoying the rhythm.",
    "Your related story is genuinely useful, brief, and you can return the focus quickly.",
    "A direct answer is needed more than rapport-building.",
    "You are withholding so much that the conversation becomes an interview — the goal is generous timing, not silence.",
  ],
  phraseBank: [
    {
      id: "default_support",
      label: "Default support responses",
      tag: "All-purpose openers",
      tone: "Quick",
      phrases: [
        "That sounds like a big moment. What was the best part?",
        "There's more in that than the headline. What happened next?",
        "That sounds like it mattered. What made it important?",
        "I want to hear your version properly. How did it play out?",
        "That's interesting. What was the turning point?",
        "What did you make of it at the time?",
      ],
    },
    {
      id: "tempted_me_too",
      label: 'When tempted to say "me too"',
      tag: "Catch and redirect the impulse",
      tone: "Direct",
      phrases: [
        "I've had a version of that, but yours sounds more interesting. What happened next?",
        "That resonates, but I don't want to make it about me. What was it like for you?",
        "I'm tempted to tell my similar story, but first: what was the hardest part of yours?",
        "I can relate to the feeling. What did you do after that?",
        "I've been in the neighbourhood of that, but not exactly. What made yours different?",
        "Before I tell my version, I want to hear how yours ended.",
      ],
    },
    {
      id: "responding_win",
      label: "Responding to a win",
      tag: "Let them savour it",
      tone: "Warm",
      phrases: [
        "That's a proper win. When did it sink in?",
        "You should actually enjoy that one. What part took the most work?",
        "That's not a small thing. What made it happen?",
        'What was the moment where you thought, "this is actually working"?',
        "Who was the first person you told?",
        "What did you do differently that made it come together?",
      ],
    },
    {
      id: "responding_hardship",
      label: "Responding to hardship",
      tag: "Do not compete with pain",
      tone: "High-stakes",
      phrases: [
        "That sounds heavy. What made it hardest?",
        "That sounds like a lot to carry. What helped you get through it?",
        "I can see why that stayed with you. What part still sticks?",
        "That sounds less annoying and more draining. Is that right?",
        "What did people miss about how hard that was?",
        "What would have helped at the time?",
      ],
    },
    {
      id: "professional_group",
      label: "Professional, leadership & groups",
      tag: "Work, meetings, and group amplifying",
      tone: "Professional",
      phrases: [
        "That probably took more coordination than it looks. What was the key move?",
        "You made that sound simple, but I'm guessing it wasn't. What was the constraint?",
        "That's a useful insight. What led you to that read?",
        "Good call. What did you notice that others missed?",
        "That's your win. What should we learn from it?",
        "I want to come back to what Sam just said, because that was the useful part.",
        "Before I add my view, I think Priya's point deserves a second.",
        "Can we stay with that for a moment? There's a good lesson in it.",
      ],
    },
    {
      id: "social_dating",
      label: "Social / dating",
      tag: "Playful, warm, low-pressure",
      tone: "Warm",
      phrases: [
        "Wait, that's your story. I want the director's cut.",
        "You can't drop that and let me hijack it. What happened?",
        "I have a related story, but yours has priority. Continue.",
        "That sounds like the actual interesting part. Go on.",
        "I'm resisting the urge to make this about me, which is very mature of me. What happened next?",
        'That deserves more than a polite "nice". What was the best bit?',
      ],
    },
    {
      id: "digital_text",
      label: "Digital / text",
      tag: "One-line messages",
      tone: "Quick",
      phrases: [
        "That's a big deal. What happened after?",
        "I'm not going to make this about my similar story — tell me the full version.",
        "That sounds like it took more than people would realise.",
        "What was the best part of that?",
        "I can relate, but I want to understand your version first.",
        "That sounds intense. What made it hardest?",
      ],
    },
    {
      id: "repair_reset",
      label: "Repair / reset",
      tag: "After you have hijacked the thread",
      tone: "Repair",
      phrases: [
        "I just made that about me. Sorry — go back.",
        "That came out as a one-up. Not what I meant.",
        "I jumped in too fast. What I should have asked is...",
        "Let me rewind. Your point was the important one.",
        "I think I hijacked the thread. Continue from where you were.",
        "I answered with my story before I understood yours. My bad.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "They share a win",
      action:
        "Celebrate and ask about the moment, effort, or meaning before mentioning any win of your own.",
      phrase: "That's a proper win. What part took the most work?",
    },
    {
      condition: "They share hardship",
      action:
        "Validate and ask what made it hardest. Do not compete with pain.",
      phrase: "That sounds heavy. What made it hardest?",
    },
    {
      condition: "They ask if it happened to you",
      action: "Answer briefly, then hand it straight back to them.",
      phrase: "A bit, but yours sounds different — what was it like for you?",
    },
    {
      condition: "You have already one-upped",
      action: "Name it lightly and repair, without over-apologising.",
      phrase: "I just made that about me. Sorry — go back.",
    },
    {
      condition: "Group story-sharing starts",
      action: "Amplify the current speaker before adding your own story.",
      phrase: "Can we stay with that a second? There's a good lesson in it.",
    },
    {
      condition: "They go flat after your story",
      action: "Cut it short, reflect, and ask about them again.",
      phrase: "Anyway, yours is the point — what happened after?",
    },
  ],
  ladder: [
    {
      weak: '"Same thing happened to me."',
      better: '"I\'ve had a version of that."',
      best: '"I\'ve had a version of that, but yours sounds more complicated. What happened next?"',
    },
    {
      weak: '"That\'s nothing."',
      better: '"That sounds intense."',
      best: '"That sounds intense in a way people might not realise. What was the hardest part?"',
    },
    {
      weak: '"I know exactly how you feel."',
      better: '"I can relate to part of that."',
      best: '"I can relate to part of that, though I don\'t want to assume it was the same. What was it like for you?"',
    },
    {
      weak: '"Mine was worse."',
      better: '"That sounds rough."',
      best: '"That sounds rough. What do you think people missed about how hard it was?"',
    },
  ],
  scenarios: [
    {
      situation: "Social conversation",
      move: "Use the smallest natural version so the other person feels heard without being analysed.",
      phrase: "That sounds like the best bit. What happened next?",
    },
    {
      situation: "Professional discussion",
      move: "Keep it concise and tie the move to the task, decision, or concern.",
      phrase: "That's your call to make. What led you there?",
    },
    {
      situation: "Conflict or objection",
      move: "Add validation and reduce speed; do not weaponise the technique.",
      phrase: "I want to understand your version before I add mine.",
    },
    {
      situation: "Digital message",
      move: "Use one sentence. Avoid long explanations or stacked questions.",
      phrase: "That's a big deal — what was the best part?",
    },
    {
      situation: "Shy or guarded person",
      move: "Make the move lighter, more tentative, and lower pressure.",
      phrase: "No rush, but I'd like to hear more if you're up for it.",
    },
    {
      situation: "High-status or busy person",
      move: "Keep the wording brief, grounded, and useful.",
      phrase: "Good call. What did you notice that others missed?",
    },
  ],
  calibration: {
    working: [
      "They expand their story rather than closing down.",
      "Their tone warms or they become more animated.",
      "They share the emotional or meaningful layer, not just the facts.",
      "They ask about your story later, once they feel heard.",
      "Other people in the group stay engaged rather than competing.",
      'They land on "exactly" — you named the part nobody else saw.',
    ],
    adjust: [
      "You have been talking longer than they did about their own story.",
      'Their replies become polite but flat: "yeah", "true", "fair".',
      "You start comparing intensity, success, suffering, or expertise.",
      "You are using their story mainly as a doorway to yours.",
      "You sense the conversation has become a subtle status contest.",
      'You notice yourself opening with "Same" or "When I…".',
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the impulse",
      task: 'For a whole day, silently notice every time you want to say "same", "me too", "that\'s nothing", or "when I…". Just count them; change nothing yet.',
    },
    {
      day: "Day 2",
      title: "One extra question",
      task: "In five conversations, before sharing anything about yourself, ask one follow-up about their story first.",
    },
    {
      day: "Day 3",
      title: "Bridge and return",
      task: "When you do share, keep it to two sentences, then hand the focus straight back with a question about them.",
    },
    {
      day: "Day 4",
      title: "Win practice",
      task: "Find someone sharing good news and centre their win — ask what part took the most work — without mentioning any win of your own.",
    },
    {
      day: "Day 5",
      title: "Hardship practice",
      task: "When someone shares something hard, validate and ask what made it hardest, resisting any urge to match it with your own difficulty.",
    },
    {
      day: "Day 6",
      title: "Group amplify",
      task: "In a group, credit or amplify one person's point before you add your own: \"That point matters — I'd add…\".",
    },
    {
      day: "Day 7",
      title: "Repair and review",
      task: "Catch one moment you slip into competing, name it lightly, and return the spotlight. Then review the week: did you add connection or competition?",
    },
  ],
  checklist: [
    "Did I let their story have the first turn?",
    "Did I avoid comparing intensity, success, hardship, or expertise?",
    "Did I ask at least one follow-up before sharing?",
    "If I shared, did I bridge and return the focus?",
    "Did they seem more open, animated, or respected afterwards?",
    "Did I repair quickly if I hijacked the thread?",
  ],
  example: {
    without: [
      "Person: I finally got the promotion.",
      "You: Nice. When I got promoted it was after only six months, which was wild.",
      "Person: Oh, yeah... nice.",
      "Why it fails:",
      "Turns their win into your status display.",
      "Makes their story feel smaller.",
      "Gives them no reason to expand.",
      "Creates quiet competition rather than connection.",
    ],
    with: [
      "Person: I finally got the promotion.",
      "You: That's a proper win. When did it sink in?",
      "Person: Honestly, when my manager said they had noticed the extra work.",
      "You: So the recognition mattered as much as the title.",
      "Person: Exactly.",
      "Advanced version:",
      "Person: I finally got the promotion.",
      "You: That's the kind of win people underplay. What part took the most work?",
      "Person: Probably staying consistent when nothing was happening.",
      "You: That's the invisible bit. People see the promotion, not the months of being reliable before it.",
      "Person: Exactly. That's the part nobody saw.",
      "You: That's worth acknowledging properly.",
      "Why this works:",
      "Centres their moment and notices the invisible effort.",
      "Adds status generously without stealing it.",
      "Makes them feel understood rather than competed with.",
      "Shows social intelligence without sounding scripted.",
    ],
    note: 'The "better" reply already wins by centring their moment; the advanced reply simply goes one layer deeper and names the effort nobody else saw.',
  },
  influencePayoff: {
    feeling: '"They let my moment be mine instead of turning it into theirs."',
    principle:
      "People become more receptive to you once they sense you are not competing with them.",
    gains: [
      "Makes people feel respected rather than outshone.",
      "Signals security — you do not need to prove you have the better story.",
      "Creates warmth, because the other person's experience gets room to breathe.",
      "Builds trust, because you do not use their disclosure as a springboard for self-display.",
      "Reads as charisma: socially generous, composed, and easy to talk to.",
      "Improves influence, because people open up more once they feel you are on their side.",
    ],
    whyMostFail: [
      'They match immediately — "same thing happened to me" — before the moment has landed.',
      "They rank the experience: bigger, worse, or more impressive.",
      "They ask one polite question, then launch straight into their own story.",
      "They over-correct into silence, so the exchange feels flat or like an interview.",
    ],
  },
  fieldTip: {
    headline: "Relate after they feel heard, not before.",
    body: 'The urge to say "me too" is not the enemy — the timing is. A related story lands as warmth once the other person feels understood, and as competition when it arrives too soon. Let their moment finish first, then bridge briefly and hand it straight back.',
    dont: '"Same — when I did that, it was even bigger."',
    do: '"That\'s the interesting part. What happened next?" (then, later) "I\'ve had a smaller version of that too."',
  },
  method: [
    {
      step: "1",
      title: "Catch the one-up impulse",
      body: "Notice the internal urge to top or match their story. This feeling is the cue to pause, not the cue to speak.",
      examples: [
        { label: "The impulse", text: '"That happened to me too."' },
        {
          label: "The impulse",
          text: '"Mine was worse." / "That\'s nothing." / "When I…"',
        },
        {
          label: "The cue",
          text: "Feeling any of these is the signal to slow down for one beat.",
        },
      ],
    },
    {
      step: "2",
      title: "Give their story the first turn",
      body: "Acknowledge the point before adding yours. Use a reflection, appreciation, or follow-up question so their moment stays central.",
    },
    {
      step: "3",
      title: "Ask one live follow-up",
      body: "Ask about the most alive part of their story: the best moment, hardest part, surprise, decision, effort, feeling, or consequence.",
      examples: [
        { label: "Win", text: '"What part took the most work?"' },
        { label: "Hardship", text: '"What made it hardest?"' },
      ],
    },
    {
      step: "4",
      title: "If you relate, bridge briefly",
      body: "A short bridge keeps you human without taking over. Keep it to one or two sentences, not a full retelling.",
      examples: [
        { label: "Bridge", text: '"I\'ve had a smaller version of that…"' },
        {
          label: "Bridge",
          text: '"That resonates —" then straight back: "what did you do next?"',
        },
      ],
    },
    {
      step: "5",
      title: "Return the spotlight",
      body: "End your contribution with a question or reflection that hands the conversation back to them, so your story reads as connection rather than a takeover.",
    },
    {
      step: "6",
      title: "In groups, amplify before adding",
      body: 'Before adding your own point, credit or amplify theirs: "That point about timing matters. I\'d add…". In a group, one-upping is louder and lands harder.',
    },
  ],
  liveThreadClues: [
    '"That happened to me too…"',
    '"Mine was worse."',
    '"That\'s nothing…"',
    '"When I…"',
    '"Same."',
    '"I did that as well…"',
    "Feeling the urge to top, match, or correct their story.",
  ],
  commonMistakes: [
    {
      mistake: "Immediate matching",
      soundsLike: '"Same thing happened to me."',
      better: "Acknowledge their story first, then share only if it is useful.",
    },
    {
      mistake: "Status escalation",
      soundsLike: '"Mine was even harder / bigger / better."',
      better: "Drop the comparison. Ask about their experience instead.",
    },
    {
      mistake: "Hardship competition",
      soundsLike: '"That\'s nothing; I went through..."',
      better: "Do not rank pain. Validate the difficulty.",
    },
    {
      mistake: "Win hijacking",
      soundsLike: "Turning their achievement into your achievement.",
      better: "Celebrate their win and ask what made it meaningful.",
    },
    {
      mistake: "Advice as takeover",
      soundsLike: '"Here\'s what you should have done."',
      better: "Ask whether advice is wanted before offering it.",
    },
    {
      mistake: "False sameness",
      soundsLike: '"I know exactly how you feel."',
      better: 'Use "I can relate to part of that" and stay curious.',
    },
    {
      mistake: "Delayed one-up",
      soundsLike: "Asking one question, then launching your own story.",
      better: "After sharing briefly, return the focus to them.",
    },
    {
      mistake: "Only asking forever",
      soundsLike: "Never contributing, making it feel like an interview.",
      better:
        "Use bridge-and-return: a brief self-disclosure, then back to them.",
    },
  ],
  recoveryPhrases: [
    "I just made that about me. Sorry — go back.",
    "That came out as a one-up. Not what I meant.",
    "I jumped in too fast. What I should have asked is...",
    "Let me rewind. Your point was the important one.",
    "I think I hijacked the thread. Continue from where you were.",
    "I answered with my story before I understood yours. My bad.",
    "That was me trying to relate, but it probably sounded like competing.",
    "I want to hear your version properly.",
  ],
  bestRecoveryLine: "I just made that about me. Sorry — go back.",
  chains: [
    {
      label: "Rapport chain",
      sequence:
        "Acknowledge → follow-up → reflect → optional brief bridge → return → appreciation",
      example: [
        '"That sounds like it mattered. What made it important?"',
        '"So the recognition landed more than the title."',
        '"I\'ve had a smaller version of that — anyway, what happened next?"',
        '"Honestly, that\'s a great result."',
      ],
    },
    {
      label: "Win chain",
      sequence:
        "Celebrate → ask the best moment → notice the effort → reflect the meaning → let them savour it",
      example: [
        '"That\'s a proper win. When did it sink in?"',
        '"What part took the most work?"',
        '"That\'s the invisible bit people never see."',
        '"Enjoy that one properly."',
      ],
    },
    {
      label: "Vulnerability chain",
      sequence:
        "Slow down → validate → ask one gentle question → avoid matching pain → stay present",
      example: [
        '"That sounds heavy."',
        '"What made it hardest?"',
        '"What did people miss about how hard it was?"',
        '"I\'m glad you told me."',
      ],
    },
    {
      label: "Group chain",
      sequence:
        "Amplify their point → credit them → add briefly → return to the speaker",
      example: [
        '"Can we stay with that? There\'s a good lesson in it."',
        '"That\'s a better example than the one I had."',
        '"I\'d build on it rather than replace it."',
        '"Say more about how you got there."',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC002",
      reason:
        "The parent discipline. TC002 is the broad choice to respond to their news rather than shifting attention to yourself; TC007 is the narrower rule against topping their story with a bigger version of your own.",
    },
    {
      id: "TC016",
      reason:
        "Use TC016 when someone shares good news and you want to actively enlarge their moment; TC007 is the restraint that stops you hijacking that moment with your own.",
    },
    {
      id: "TC009",
      reason:
        "TC009 stops you asking a question only to swing it back to yourself; TC007 stops you matching their story with a bigger one. Both resist making the exchange about you.",
    },
    {
      id: "TC018",
      reason:
        "Reach for TC018 when the generous move is to name what they did well; TC007 is the discipline that keeps that praise from curving back toward yourself.",
    },
  ],
};
