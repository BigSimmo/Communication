import type { CardData } from "../card-types";

export const TC101: CardData = {
  id: "TC101",
  resources: [
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC101/TC101_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC101/TC101_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC101/TC101_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC101/TC101_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC101/TC101_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  sources: [
    {
      label:
        "Lewicki, Polin & Lount (2016), six elements of an effective apology (Ohio State summary)",
      url: "https://news.osu.edu/the-6-elements-of-an-effective-apology-according-to-science/",
    },
    {
      label:
        "Lewicki et al. (2016), Negotiation and Conflict Management Research",
      url: "https://doi.org/10.1111/ncmr.12073",
    },
  ],
  whyItWorks:
    "An apology lands when it owns the mistake and commits to fixing it. In Lewicki and colleagues' 2016 experiments, apologies were rated more effective the more of six elements they contained (regret, explanation, acknowledgement of responsibility, repentance, offer of repair, request for forgiveness), and the two that mattered most were acknowledging responsibility and offering repair. Asking for forgiveness mattered least. Naming the specific thing you did shows you understand the impact, and a concrete fix turns words into evidence.",
  whatItIsNot: [
    'Not "I\'m sorry if you were upset." That apologises for their feelings, not your action.',
    "Not an explanation that turns into an excuse.",
    "Not a demand to be forgiven on the spot.",
    "Not grovelling or a long speech about how bad you feel.",
    "Not a tool to end a conversation you'd rather not have.",
  ],
  overview: {
    coreFormula: [
      'Regret: "I\'m sorry."',
      'Own it, specifically: "I [did the thing]. That\'s on me."',
      'Show you get the impact: "It meant you [impact]."',
      "Offer repair: \"Here's what I'll do: [fix].\"",
      "Commit going forward, then stop talking and let them respond.",
    ],
    minimumViableMove:
      "\"I'm sorry. I [specific thing], and that's on me. Here's what I'll do to fix it.\" Then let them talk.",
    impact: "High",
    difficulty: "Medium",
    misuse:
      "It turns manipulative when the apology is a tactic to close the topic, get something back, or make them feel obliged to forgive.",
    bestFor: [
      "You were late, forgot something, snapped, or let someone down.",
      "You broke a promise or a confidence.",
      "A joke or comment landed badly.",
      "You made a mistake at work that affected someone else.",
      "Any time you can name what you did and fix some of it.",
    ],
  },
  notFor: [
    "You genuinely did nothing wrong. Use empathy without false blame instead.",
    "Someone is pressuring you to apologise for holding a fair boundary.",
    "A legal or formal process needs advice before you admit fault.",
    "They have asked for space. Respect that and apologise when they're ready.",
  ],
  phraseBank: [
    {
      id: "quick-openers",
      label: "Quick openers",
      tag: "Short, owned apologies",
      tone: "Quick",
      phrases: [
        "I'm sorry. That was on me.",
        "I got that wrong. I'm sorry.",
        "You're right, I dropped the ball. Sorry.",
        "I'm sorry I was late. I'll leave earlier next time.",
        "Sorry I snapped. That wasn't fair to you.",
        "I forgot, and I'm sorry. I'll sort it today.",
      ],
    },
    {
      id: "own-it",
      label: "Own it specifically",
      tag: "Name the action, not their feelings",
      tone: "Direct",
      phrases: [
        "I'm sorry I interrupted you in the meeting.",
        "I'm sorry I didn't call when I said I would.",
        "I made a joke at your expense, and I'm sorry.",
        "I told someone what you'd told me privately. That was wrong of me.",
        "I promised and didn't follow through. I'm sorry.",
      ],
    },
    {
      id: "impact",
      label: "Show you get the impact",
      tag: "Acknowledge what it cost them",
      tone: "Warm",
      phrases: [
        "That meant you were waiting on your own. I'm sorry.",
        "I can see that left you looking bad in front of the team.",
        "That probably made you feel like I wasn't listening.",
        "You had to pick up the slack because of me.",
      ],
    },
    {
      id: "repair",
      label: "Offer repair",
      tag: "Make it concrete",
      tone: "Repair",
      phrases: [
        "Here's what I'll do: I'll redo it tonight.",
        "Can I make it up to you by covering Friday?",
        "What would help put this right?",
        "From now on I'll check with you before I share anything.",
        "I'll message the group and correct it.",
      ],
    },
    {
      id: "work",
      label: "Work version",
      tag: "Calm, owned, practical",
      tone: "Professional",
      phrases: [
        "That error was mine. I've already fixed the figures and resent the file.",
        "I'm sorry for the delay on my side. You'll have it by 3pm.",
        "I should have flagged this earlier. Here's the plan to catch up.",
        "I'm sorry I spoke over you. I'd like to hear the rest of your point.",
      ],
    },
    {
      id: "after",
      label: "After they respond",
      tag: "Receive their reaction",
      tone: "Repair",
      phrases: [
        "That's fair. Thank you for telling me.",
        "I understand if you need a bit of time.",
        "I get why you're still annoyed.",
        "Thanks for hearing me out.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "They're still angry",
      action: "Listen first. Don't defend or explain yet.",
      phrase: "I can hear how much this annoyed you. Tell me.",
    },
    {
      condition: "They ask why it happened",
      action: "Give a short explanation, then return to ownership.",
      phrase: "I left it too late. That's still on me.",
    },
    {
      condition: "You're only partly at fault",
      action: "Own your part fully. Don't trade blame.",
      phrase: "I can't speak for the rest, but my part was not checking in.",
    },
    {
      condition: "They don't accept it yet",
      action: "Don't push for forgiveness. Let your actions show it.",
      phrase: "That's fair. I'll show you rather than tell you.",
    },
    {
      condition: "The same thing has happened before",
      action: "Name the pattern and a real change.",
      phrase: "This keeps happening, and I'm changing how I do it.",
    },
  ],
  ladder: [
    {
      weak: '"Sorry if you were offended."',
      better: '"Sorry about earlier."',
      best: "\"I'm sorry I made that joke about your work. It wasn't fair, and I won't do it again.\"",
    },
    {
      weak: '"Sorry, but I was really busy."',
      better: '"Sorry I forgot."',
      best: "\"I'm sorry I forgot to call. I'll put a reminder in now and call you tonight.\"",
    },
    {
      weak: '"Mistakes were made."',
      better: '"I\'m sorry about the error."',
      best: "\"That error was mine. I've fixed it and I'll double-check before I send next time.\"",
    },
    {
      weak: '"Can you just forgive me?"',
      better: '"I hope we\'re okay."',
      best: "\"I'm sorry. Take whatever time you need. I'll keep my end of it.\"",
    },
  ],
  scenarios: [
    {
      situation: "Late to meet a friend",
      move: "Own it, no excuses, small repair.",
      phrase: "\"I'm sorry I kept you waiting. First round's on me.\"",
    },
    {
      situation: "Snapped at your partner",
      move: "Name the behaviour and the impact.",
      phrase:
        "\"I'm sorry I snapped. You didn't deserve that, and I was taking out my day on you.\"",
    },
    {
      situation: "Missed a work deadline",
      move: "Own it, give the fix and the new time.",
      phrase:
        "\"That's on me. I'll have it to you by 3pm, and I'll flag sooner next time.\"",
    },
    {
      situation: "Shared something private",
      move: "Acknowledge the breach and commit.",
      phrase:
        "\"I shouldn't have repeated what you told me. I'm sorry. It won't happen again.\"",
    },
    {
      situation: "A joke landed badly",
      move: "Apologise for the joke, not their reaction.",
      phrase: '"That joke was out of line. Sorry."',
    },
  ],
  calibration: {
    working: [
      "They relax or soften.",
      "They tell you more about how it felt.",
      "The conversation moves on to what's next.",
      "They accept the repair or suggest a different one.",
    ],
    adjust: [
      "They get angrier: you may have explained too much. Return to ownership.",
      'They say "it\'s fine" flatly: give them time and follow through.',
      'You hear yourself say "but": restart with just the apology.',
      "They bring up older hurts: listen, and don't argue the record.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot one",
      task: "Recall something small you'd like to apologise for. Write down exactly what you did, in one sentence.",
    },
    {
      day: "Day 2",
      title: "Strip the excuses",
      task: 'Rewrite yesterday\'s sentence without "if", "but" or "you". Keep only what you did.',
    },
    {
      day: "Day 3",
      title: "Name the impact",
      task: 'Add one line on what it cost the other person, e.g. "It meant you waited alone."',
    },
    {
      day: "Day 4",
      title: "Find the repair",
      task: "Write one concrete thing you can do to fix it or prevent it happening again.",
    },
    {
      day: "Day 5",
      title: "Say it aloud",
      task: "Rehearse the full apology aloud in under 20 seconds. Then stop.",
    },
    {
      day: "Day 6",
      title: "Do a small one",
      task: "Make one small real apology today, e.g. for being late or interrupting.",
    },
    {
      day: "Day 7",
      title: "Review",
      task: "Did you own it, offer repair and stop talking? Note how they reacted.",
    },
  ],
  checklist: [
    "Did I name what I did, specifically?",
    'Did I avoid "if" and "but"?',
    "Did I acknowledge the impact on them?",
    "Did I offer a concrete repair?",
    "Did I stop talking and let them respond?",
    "Did I follow through?",
  ],
  example: {
    without: [
      "A: You didn't even tell me you'd be late.",
      "B: Sorry, but traffic was crazy and my boss kept me back.",
      "A: You always have a reason.",
      "B: I said sorry, didn't I?",
    ],
    with: [
      "A: You didn't even tell me you'd be late.",
      "B: You're right. I'm sorry. I should have texted you when I left.",
      "B: You were sitting here on your own for half an hour.",
      "A: Yeah, it wasn't great.",
      "B: Next time I'll message before I leave work. Can I get dinner tonight?",
      "A: Okay. Thanks.",
    ],
  },
  influencePayoff: {
    feeling: '"They actually get what they did, and they\'re going to fix it."',
    principle:
      "Ownership plus repair rebuilds trust faster than explanation. People forgive what they see someone take responsibility for.",
    gains: [
      "Ends the argument about whose fault it was.",
      "Shows maturity and makes you more trustworthy.",
      "Gives the other person something concrete to hold you to.",
      "Makes future honest conversations easier.",
    ],
    whyMostFail: [
      'They add "but" and an excuse straight after "sorry".',
      "They apologise for the other person's feelings instead of their own action.",
      "They ask for forgiveness before offering any repair.",
      "They keep talking and turn it into a speech about themselves.",
    ],
  },
  fieldTip: {
    headline: "Own it, fix it, stop.",
    body: "The most important parts are saying it was your fault and offering to put it right. Explanations are fine, but keep them short and after the ownership. Then stop talking. Silence after an apology is respect, not awkwardness.",
    example: "\"I'm sorry I forgot. That's on me. I'll book it now.\"",
    dont: "\"I'm sorry, but you have to understand how busy I've been.\"",
    do: "\"I'm sorry I didn't call. I'll call you tonight at seven.\"",
  },
  method: [
    {
      step: "1",
      title: "Pick the moment",
      body: "Apologise soon, in private if it's personal, and when they can actually hear you.",
    },
    {
      step: "2",
      title: "Say sorry plainly",
      body: 'Start with "I\'m sorry" or "I got that wrong". No warm-up and no qualifiers.',
    },
    {
      step: "3",
      title: "Name what you did",
      body: "Describe your action specifically, not their reaction.",
      examples: [
        {
          label: "Say",
          text: '"I\'m sorry I talked over you."',
        },
        {
          label: "Avoid",
          text: '"I\'m sorry you felt talked over."',
        },
      ],
    },
    {
      step: "4",
      title: "Acknowledge the impact",
      body: "One line on what it cost them. It proves you understand.",
    },
    {
      step: "5",
      title: "Offer repair",
      body: "Say what you'll do to fix it or stop it happening again. Ask what would help if you're not sure.",
    },
    {
      step: "6",
      title: "Stop and listen",
      body: "Let them respond. Accept anger or a slow reply without defending yourself.",
    },
    {
      step: "7",
      title: "Follow through",
      body: "The repair is the apology people remember. Do what you said.",
    },
  ],
  liveThreadClues: [
    '"You didn\'t even..."',
    '"Do you know how that made me look?"',
    '"Forget it."',
    "A cold or short reply after something you did",
    "Them going quiet around you",
    '"It\'s fine" said flatly',
  ],
  commonMistakes: [
    {
      mistake: "The non-apology",
      soundsLike: '"I\'m sorry if you were offended."',
      better: '"I\'m sorry I said that. It was unfair."',
    },
    {
      mistake: "Sorry, but",
      soundsLike: '"Sorry, but I was exhausted."',
      better: "\"I'm sorry. I was exhausted, and that's still not okay.\"",
    },
    {
      mistake: "Demanding forgiveness",
      soundsLike: '"So are we good now?"',
      better: '"Take whatever time you need."',
    },
    {
      mistake: "Over-apologising",
      soundsLike: "A long speech about how terrible you feel.",
      better: "One clear apology, one repair, then listen.",
    },
    {
      mistake: "Vague ownership",
      soundsLike: '"Sorry about everything."',
      better: '"I\'m sorry I missed your birthday dinner."',
    },
  ],
  recoveryPhrases: [
    "Let me try that again without the excuse.",
    "I just made that about me. Sorry. How did it land for you?",
    'I said "but" and I shouldn\'t have. It was my fault.',
    "I'd still like to fix this whenever you're ready.",
  ],
  bestRecoveryLine: "Let me try that again without the excuse.",
  chains: [
    {
      label: "Apology, then emotional labelling",
      sequence: "Own it, then name how it probably felt for them.",
      example: [
        '"I\'m sorry I forgot."',
        '"You probably felt pretty unimportant."',
        '"I\'ll make it right on Saturday."',
      ],
    },
    {
      label: "Apology, then looping",
      sequence: "Apologise, then check you understand the impact.",
      example: [
        '"I\'m sorry I shared that."',
        '"So the worst part was hearing it from someone else. Is that right?"',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC006",
      reason:
        "Name their emotion after you own the action so they feel understood, not just apologised to.",
    },
    {
      id: "TC109",
      reason:
        "Loop back what they say about the impact to show you've really heard it.",
    },
    {
      id: "TC105",
      reason:
        "After a fight, apologise for your part once you've both cooled down.",
    },
  ],
};
