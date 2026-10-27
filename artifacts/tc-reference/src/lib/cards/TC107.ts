import type { CardData } from "../card-types";

export const TC107: CardData = {
  id: "TC107",
  resources: [
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC107/TC107_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC107/TC107_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC107/TC107_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC107/TC107_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC107/TC107_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  sources: [
    {
      label:
        "Revolution Learning, The Fogging Technique (from Manuel J. Smith, When I Say No, I Feel Guilty)",
      url: "https://www.revolutionlearning.co.uk/article/the-fogging-technique/",
    },
    {
      label: "Revolution Learning, The Broken Record Technique",
      url: "https://www.revolutionlearning.co.uk/article/the-broken-record-technique/",
    },
  ],
  whyItWorks:
    "Both come from Manuel J. Smith's assertiveness book When I Say No, I Feel Guilty. Fogging means calmly agreeing with whatever is true in a criticism, without defending, justifying or over-apologising. It takes away the fuel the other person expected, so the heat tends to drop. Broken record means repeating a short, calm statement of your position, without adding new reasons each round, so there's nothing new to argue with. Together they let you stay calm and hold your ground under pressure without getting aggressive.",
  whatItIsNot: [
    "Not sarcasm (\"Yeah, I'm terrible, aren't I?\").",
    "Not agreeing with things that aren't true.",
    "Not ignoring a fair point that deserves a real answer.",
    "Not a way to steamroll someone who is upset for good reason.",
  ],
  overview: {
    coreFormula: [
      'Fog: agree with what\'s true or possible. "You might be right that..."',
      "Don't justify or argue the rest.",
      'Broken record: repeat your short position calmly. "And I\'m still not..."',
      "Same words, same calm tone, each time.",
      "Acknowledge what they say before repeating.",
    ],
    minimumViableMove:
      '"You may be right. And my answer is still no." Said calmly, as often as needed.',
    impact: "Medium",
    difficulty: "Medium",
    misuse:
      "It's dismissive if you use it on someone with a real grievance you should be listening to. Broken record should hold your boundary, not wear someone down into giving you what you want.",
    bestFor: [
      "Pushy sales calls or pressure to buy.",
      "Nagging or guilt-tripping from family or friends.",
      "Someone criticising you to get a rise.",
      "Holding a refund or service request.",
      "Staying calm when someone is needling you.",
    ],
  },
  notFor: [
    "Someone close to you raising a fair issue. Listen and use receiving feedback (TC103).",
    "Anyone who may become dangerous. Leave and get help.",
    "Negotiations where you want to find a creative solution together.",
  ],
  phraseBank: [
    {
      id: "fog",
      label: "Fogging",
      tag: "Agree with what's true",
      tone: "Quick",
      phrases: [
        "You could be right.",
        "That's possible.",
        "I can see why you'd think that.",
        "Yes, I was late. That's true.",
        "You might be right that I'm stubborn about this.",
        "Maybe I could have done it differently.",
      ],
    },
    {
      id: "record",
      label: "Broken record",
      tag: "Repeat calmly",
      tone: "Direct",
      phrases: [
        "I understand. I'm still not going to buy it today.",
        "I hear you. My answer is still no.",
        "That may be so. I'd still like a refund.",
        "I get that. I'm still not lending the car.",
        "Thanks, but no.",
      ],
    },
    {
      id: "combined",
      label: "Fog plus record",
      tag: "The full move",
      tone: "High-stakes",
      phrases: [
        "You may be right that it's a good deal. I'm still not signing today.",
        "Yes, I've said no before. And it's still no.",
        "I can see you're disappointed. I'm still not coming.",
        "That might be your policy. I'd still like a refund.",
      ],
    },
    {
      id: "exit",
      label: "Wrapping up",
      tag: "End it kindly",
      tone: "Professional",
      phrases: [
        "I'm going to leave it there. Thanks for your time.",
        "I've given my answer, so I'll go now.",
        "Let's leave this here for today.",
      ],
    },
    {
      id: "warm",
      label: "With people you love",
      tag: "Softer version",
      tone: "Warm",
      phrases: [
        "I know you worry about me. I'm still going on the trip.",
        "You might be right that I'll regret it. It's my call though.",
        "I love you, and I'm not changing my mind on this.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "The criticism has some truth",
      action: "Agree with that part only.",
      phrase: "Yes, I did forget. That's true.",
    },
    {
      condition: "They're pushing for a yes",
      action: "Repeat your position, same words.",
      phrase: "I understand. It's still no.",
    },
    {
      condition: "They give a new argument",
      action: "Acknowledge it, don't debate it.",
      phrase: "That's a fair point. I'm still not doing it.",
    },
    {
      condition: "They raise a genuine concern",
      action: "Stop fogging and listen properly.",
      phrase: "Actually, that's important. Tell me more.",
    },
    {
      condition: "It's going nowhere",
      action: "Close politely.",
      phrase: "I'm going to leave it there. Thanks.",
    },
  ],
  ladder: [
    {
      weak: '"That\'s not true and you know it!"',
      better: '"Whatever."',
      best: '"You might be right. I still see it differently."',
    },
    {
      weak: '"Fine, I\'ll buy it." (to end the pressure)',
      better: '"I don\'t think so."',
      best: '"Thanks. I\'m not buying today."',
    },
    {
      weak: '"Stop nagging me!"',
      better: '"I said no."',
      best: "\"I know you'd like me to. I'm still not going to.\"",
    },
  ],
  scenarios: [
    {
      situation: "Salesperson pressure",
      move: "Broken record.",
      phrase: '"Thanks. I\'m not signing up today."',
    },
    {
      situation: "Relative criticises your choices",
      move: "Fog the possible truth.",
      phrase: '"You might be right. It\'s still my decision."',
    },
    {
      situation: "Friend pushes for a loan",
      move: "Fog and repeat kindly.",
      phrase:
        "\"I know it's tough right now. I'm still not able to lend money.\"",
    },
    {
      situation: "Customer service runaround",
      move: "Repeat the request calmly.",
      phrase:
        "\"I understand that's the policy. I'd still like a refund for the broken item.\"",
    },
    {
      situation: "Someone needling you",
      move: "Fog without taking the bait.",
      phrase: '"Maybe I am a bit pedantic."',
    },
  ],
  calibration: {
    working: [
      "They run out of arguments.",
      "The heat drops.",
      "They accept your answer.",
      "You stay calm throughout.",
    ],
    adjust: [
      "You're getting louder: slow down and lower your voice.",
      "You've started justifying: go back to your short line.",
      "They raise a real point: switch to listening.",
      "You sound sarcastic: soften your tone.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Pick your line",
      task: "Write a short broken-record line for a situation you face often.",
    },
    {
      day: "Day 2",
      title: "Find the truth",
      task: "Take a criticism you've received and find the part that's true or possible.",
    },
    {
      day: "Day 3",
      title: "Fog aloud",
      task: 'Practise saying "You might be right" calmly, without sarcasm.',
    },
    {
      day: "Day 4",
      title: "Combine",
      task: "Write one fog plus record line together.",
    },
    {
      day: "Day 5",
      title: "Role-play",
      task: "Have a friend push for a yes. Repeat your line three times calmly.",
    },
    {
      day: "Day 6",
      title: "Use it",
      task: "Use broken record with a sales call or pushy request.",
    },
    {
      day: "Day 7",
      title: "Review",
      task: "Did you stay calm? Did you add reasons you didn't need?",
    },
  ],
  checklist: [
    "Did I agree only with what's true?",
    "Did I avoid justifying?",
    "Did I repeat the same short line?",
    "Did I keep a calm, even tone?",
    "Did I switch to listening when a real concern came up?",
  ],
  example: {
    without: [
      "A: You're being ridiculous, everyone else is coming.",
      "B: I'm not being ridiculous! I've got loads on and...",
      "A: You always have loads on.",
      "B: That's not fair!",
    ],
    with: [
      "A: You're being ridiculous, everyone else is coming.",
      "B: Maybe it seems that way. I'm still not coming this time.",
      "A: But it's my birthday.",
      "B: I know, and I hope it's great. I'm still not coming. Can I take you for lunch next week?",
    ],
  },
  influencePayoff: {
    feeling: "\"They didn't rise to it, and they didn't budge.\"",
    principle:
      "Calm agreement with what's true removes the fight. Calm repetition removes the debate.",
    gains: [
      "You stay in control under pressure.",
      "Fewer things you regret saying.",
      "Pushy people learn that pressure doesn't work.",
      "You don't have to win the argument to keep your position.",
    ],
    whyMostFail: [
      "They defend every point and get pulled in.",
      "They add a new reason each time.",
      "Their tone turns sarcastic.",
      "They give in to end the discomfort.",
    ],
  },
  fieldTip: {
    headline: "Agree with the truth, repeat your line.",
    body: "You don't need to win the argument, just to stay calm and clear. Agree with whatever is true, skip the rest, and say your short line again in the same tone.",
    example: '"You might be right. I\'m still not lending it."',
    dont: "\"That's so unfair, you don't understand, I've got reasons...\"",
    do: '"I understand. It\'s still a no."',
  },
  method: [
    {
      step: "1",
      title: "Decide your position",
      body: "Know what you want before the conversation.",
    },
    {
      step: "2",
      title: "Choose a short line",
      body: 'Under ten words. "I\'d like a refund."',
    },
    {
      step: "3",
      title: "Fog the criticism",
      body: "Agree calmly with whatever is true or possible.",
      examples: [
        {
          label: "Say",
          text: '"You might be right."',
        },
        {
          label: "Avoid",
          text: '"Yeah, sure, I\'m the worst person ever."',
        },
      ],
    },
    {
      step: "4",
      title: "Repeat without reasons",
      body: "Same words, same tone, each time.",
    },
    {
      step: "5",
      title: "Acknowledge them",
      body: 'Show you heard: "I understand that\'s the policy."',
    },
    {
      step: "6",
      title: "Close",
      body: "When it's clear, end politely.",
    },
  ],
  liveThreadClues: [
    '"Everyone else is..."',
    '"Just this once."',
    '"You always..."',
    "Being asked the same thing again and again",
    'A salesperson\'s "limited time offer"',
    'Guilt: "After all I\'ve done for you."',
  ],
  commonMistakes: [
    {
      mistake: "Justifying",
      soundsLike: "A new reason every round.",
      better: "One line, repeated.",
    },
    {
      mistake: "Sarcastic fog",
      soundsLike: '"Oh yeah, I\'m SO selfish."',
      better: '"Maybe I am being selfish about this."',
    },
    {
      mistake: "Getting louder",
      soundsLike: "Raising your voice to be heard.",
      better: "Slower and quieter each time.",
    },
    {
      mistake: "Using it on a fair point",
      soundsLike: "Fogging a partner's real hurt.",
      better: "Stop and listen.",
    },
  ],
  recoveryPhrases: [
    "I got drawn into arguing. Let me just say it simply. It's still no.",
    "That sounded sarcastic. I meant you could be right.",
    "I've repeated myself a lot. Let me hear your concern properly.",
  ],
  bestRecoveryLine:
    "I got drawn into arguing. Let me just say it simply. It's still no.",
  chains: [
    {
      label: "Positive no, then broken record",
      sequence: "Decline warmly first, then hold it calmly.",
      example: [
        "\"I've promised Saturday to the kids, so I can't.\"",
        '"I understand. It\'s still no for Saturday."',
      ],
    },
    {
      label: "Fog, then graceful exit",
      sequence: "Calm agreement, then leave.",
      example: [
        '"You might be right."',
        '"I\'ll leave it there. Thanks for your time."',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC102",
      reason:
        "Start with a Positive no. Use broken record when they keep pushing.",
    },
    {
      id: "TC066",
      reason: "For hostile messages in writing, use BIFF.",
    },
    {
      id: "TC103",
      reason:
        "When the criticism is fair and from someone who matters, receive it instead of fogging it.",
    },
  ],
};
