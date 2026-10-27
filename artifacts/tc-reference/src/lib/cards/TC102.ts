import type { CardData } from "../card-types";

export const TC102: CardData = {
  id: "TC102",
  resources: [
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC102/TC102_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC102/TC102_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC102/TC102_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC102/TC102_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC102/TC102_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  sources: [
    {
      label:
        "William Ury, The Power of a Positive No (Harvard Program on Negotiation)",
      url: "https://www.pon.harvard.edu/tag/positive-no/",
    },
    {
      label: "Ury, The Power of a Positive No (book summary PDF)",
      url: "https://frenchamerican.org/wp-content/uploads/urypowerofpositiveno.pdf",
    },
  ],
  whyItWorks:
    "William Ury's Positive No has three parts: Yes! No. Yes? The first yes names what you are protecting (your time, family, quality or health). The no then states the limit calmly and matter-of-factly. The final yes offers the other person a way forward, so the relationship stays intact. Rooting the no in what you are for, rather than what you are against, makes it firm without sounding hostile, and the closing offer stops it feeling like rejection.",
  whatItIsNot: [
    "Not a soft maybe that keeps the door open when you mean no.",
    "Not a long justification. One reason is enough.",
    "Not a counter-offer you don't actually want to give.",
    "Not an attack on the request or the person.",
  ],
  overview: {
    coreFormula: [
      "Yes: name what you're protecting. \"I've promised Sundays to my family.\"",
      'No: say the limit plainly. "So I can\'t do this weekend."',
      'Yes?: offer a way forward. "I could do Thursday evening if that helps."',
    ],
    minimumViableMove:
      "\"I want to [what you're protecting], so I can't [request]. What I can do is [alternative].\"",
    impact: "High",
    difficulty: "Medium",
    misuse:
      "It becomes a trick if the final yes is fake or if the stated value is invented to sound noble.",
    bestFor: [
      "Being asked for a favour you can't fit in.",
      "Extra work when your plate is full.",
      "Social plans you don't want to commit to.",
      "Family requests that clash with your own plans.",
      "Saying no to someone you want to stay close to.",
    ],
  },
  notFor: [
    "Unsafe or abusive situations. A plain no is enough and you owe no alternative.",
    "When any alternative would be a lie. Skip the final yes and stay kind.",
    "Someone who keeps pushing after a clear no. Switch to broken record (TC107).",
  ],
  phraseBank: [
    {
      id: "quick",
      label: "Quick no",
      tag: "Short and kind",
      tone: "Quick",
      phrases: [
        "I'd love to, but I can't this time.",
        "That doesn't work for me, but thanks for thinking of me.",
        "I can't take that on right now.",
        "Not this week. Next week could work.",
        "I'm going to pass on this one.",
      ],
    },
    {
      id: "protect",
      label: "Name what you're protecting",
      tag: "The first yes",
      tone: "Warm",
      phrases: [
        "I've promised myself a quiet weekend, so I'm going to say no.",
        "I want to do a good job on what I've already got, so I can't take this on.",
        "Evenings are family time for me, so I won't make it.",
        "I'm trying to save at the moment, so I'll skip this trip.",
      ],
    },
    {
      id: "alternative",
      label: "Offer a way forward",
      tag: "The final yes",
      tone: "Repair",
      phrases: [
        "I can't do the whole thing, but I could help for an hour.",
        "I can't lend it, but I can show you where I got mine.",
        "I can't make dinner, but could we get coffee next week?",
        "Could someone else take it, and I'll do the next one?",
      ],
    },
    {
      id: "work",
      label: "At work",
      tag: "Workload and priorities",
      tone: "Professional",
      phrases: [
        "To hit the Friday deadline, I can't take this as well. Which should I drop?",
        "I want to give this proper attention, so I can start it Monday.",
        "I can't join that meeting, but I'll read the notes and reply by noon.",
        "I'm at capacity. Can we look at priorities together?",
      ],
    },
    {
      id: "family",
      label: "Family and friends",
      tag: "Warm but firm",
      tone: "Direct",
      phrases: [
        "I love you, and I'm not coming this year. Can I call you on the day?",
        "I'm not able to lend money right now. I'm happy to help you look at options.",
        "I'm staying in tonight. Let's do something this weekend.",
        "I can't host this time. I'd love to bring something though.",
      ],
    },
    {
      id: "firm",
      label: "When they push",
      tag: "Hold it calmly",
      tone: "High-stakes",
      phrases: [
        "I understand. It's still a no for me.",
        "I know it's not what you hoped. My answer's the same.",
        "I've thought about it, and I'm sticking with no.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "You want to help but not as asked",
      action: "Offer a smaller or different yes.",
      phrase: "I can't do all of it, but I could do the first part.",
    },
    {
      condition: "You don't want to help at all",
      action: "Keep the closing yes about the relationship, not the task.",
      phrase: "I'm going to say no, but I hope it goes really well.",
    },
    {
      condition: "They push back",
      action: "Restate calmly without new reasons.",
      phrase: "I understand. It's still a no for me.",
    },
    {
      condition: "Power is uneven (a boss)",
      action: "Name the trade-off and ask them to choose.",
      phrase: "If I take this, the report slips. Which matters more?",
    },
    {
      condition: "You feel guilty",
      action: "Remember that the no protects something real.",
      phrase: "I'm protecting my weekend, and that's okay.",
    },
  ],
  ladder: [
    {
      weak: '"Um, maybe, I\'ll see."',
      better: '"Sorry, I can\'t."',
      best: "\"I'm keeping Saturday for my family, so I can't. I could help Sunday afternoon if that's useful.\"",
    },
    {
      weak: '"No, that\'s ridiculous."',
      better: '"No, I\'m too busy."',
      best: '"To do a good job on the report, I can\'t take that on too. Which should I put first?"',
    },
    {
      weak: '"Fine, I guess." (resentful yes)',
      better: '"I\'d rather not."',
      best: '"I\'m going to pass on this one. Thanks for asking me though."',
    },
  ],
  scenarios: [
    {
      situation: "A friend asks you to help them move",
      move: "Value, no, smaller yes.",
      phrase:
        "\"I've got my back to look after, so I can't lift. I'll bring pizza and help pack though.\"",
    },
    {
      situation: "Boss adds a task",
      move: "Name the trade-off.",
      phrase:
        '"I want to deliver the launch properly. If I take this too, something slips. Which is the priority?"',
    },
    {
      situation: "Relative asks you to host",
      move: "Warm no plus an offer.",
      phrase: "\"I can't host this year. I'd love to bring dessert.\"",
    },
    {
      situation: "Colleague wants a favour at 5pm",
      move: "Protect your evening, offer a time.",
      phrase: '"I\'m heading off now. I can look first thing tomorrow."',
    },
  ],
  calibration: {
    working: [
      "They accept and move on.",
      "They take your alternative.",
      "The relationship feels unchanged or warmer.",
      "You feel calm, not guilty.",
    ],
    adjust: [
      "They keep pushing: stop giving reasons and repeat your answer.",
      "You hear yourself over-explaining: cut to one reason.",
      "Your alternative isn't something you want: drop it.",
      "They sound hurt: acknowledge it without changing your answer.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Notice the asks",
      task: "Note every request today and whether you said yes when you meant no.",
    },
    {
      day: "Day 2",
      title: "Find your yes",
      task: "For one request you'd like to decline, write what you're protecting in one sentence.",
    },
    {
      day: "Day 3",
      title: "Write the no",
      task: "Write the plain no in under 10 words. No apology chain.",
    },
    {
      day: "Day 4",
      title: "Craft the final yes",
      task: "Write one genuine alternative or warm close you'd be happy to give.",
    },
    {
      day: "Day 5",
      title: "Say it aloud",
      task: "Rehearse Yes! No. Yes? aloud until it takes under 15 seconds.",
    },
    {
      day: "Day 6",
      title: "Use it",
      task: "Decline one real low-stakes request using the three parts.",
    },
    {
      day: "Day 7",
      title: "Review",
      task: "Did you over-explain? Did the relationship feel okay? Note one tweak.",
    },
  ],
  checklist: [
    "Did I name what I'm protecting?",
    "Was my no clear, not a maybe?",
    "Did I give one reason at most?",
    "Was my alternative genuine?",
    "Did I hold it calmly if they pushed?",
  ],
  example: {
    without: [
      "A: Can you cover my shift on Saturday?",
      "B: Ugh, I don't know, I've kind of got stuff on.",
      "A: Please, it's just a few hours.",
      "B: Fine. (Annoyed all week.)",
    ],
    with: [
      "A: Can you cover my shift on Saturday?",
      "B: I've promised Saturday to my kids, so I can't.",
      "B: I could swap you for Thursday if that helps.",
      "A: Oh, Thursday would actually work. Thanks.",
    ],
  },
  influencePayoff: {
    feeling: '"They said no, but I don\'t feel rejected."',
    principle:
      "Saying no from what you're for, then opening a door, protects both your interests and the relationship.",
    gains: [
      "Fewer resentful yeses.",
      "People trust your yes because you can say no.",
      "Keeps relationships warm through refusals.",
      "Saves time and energy for what matters.",
    ],
    whyMostFail: [
      "They start with the no and sound cold.",
      "They give a long list of reasons that can each be argued with.",
      "They offer an alternative they don't want, then resent it.",
      "They say maybe to avoid the moment.",
    ],
  },
  fieldTip: {
    headline: "Start from what you're protecting.",
    body: "Ury's point is that a strong no comes from a deeper yes. When you know what you're protecting, the no is easier to say calmly and the alternative is easier to find. Keep the reason to one line. The more reasons you give, the more there is to argue with.",
    example: "\"I'm keeping tonight free, so I'll pass. Lunch on Friday?\"",
    dont: "\"I'm so sorry, it's just that I've got this and that and I'm so tired and...\"",
    do: "\"I'm keeping tonight free, so I can't. Friday works though.\"",
  },
  method: [
    {
      step: "1",
      title: "Pause before answering",
      body: 'Buy a moment if you need it: "Let me check and get back to you."',
    },
    {
      step: "2",
      title: "Find your yes",
      body: "Work out what you're protecting: time, health, family, quality, money, or a promise.",
    },
    {
      step: "3",
      title: "Say the no plainly",
      body: "Matter-of-fact tone. No apology spiral.",
      examples: [
        {
          label: "Say",
          text: '"So I can\'t this weekend."',
        },
        {
          label: "Avoid",
          text: '"I\'m so sorry, I really wish I could, maybe..."',
        },
      ],
    },
    {
      step: "4",
      title: "Offer the final yes",
      body: "A genuine alternative, or a warm close if there is none.",
    },
    {
      step: "5",
      title: "Hold steady",
      body: "If they push, repeat the no without new reasons.",
    },
  ],
  liveThreadClues: [
    '"Could you just..."',
    '"It\'ll only take a minute."',
    '"You\'re so good at this."',
    "Your stomach drops when you hear the ask",
    '"Can I count on you?"',
  ],
  commonMistakes: [
    {
      mistake: "The fake maybe",
      soundsLike: '"I\'ll see how I go."',
      better: '"I can\'t this time. Thanks for asking."',
    },
    {
      mistake: "Too many reasons",
      soundsLike: "Five reasons, each one argued away.",
      better: "One reason, then the no.",
    },
    {
      mistake: "Cold no",
      soundsLike: '"No." (and nothing else) to a friend',
      better: '"I can\'t, but I hope it goes brilliantly."',
    },
    {
      mistake: "A yes you'll resent",
      soundsLike: '"I suppose I could do Sunday..."',
      better: "Only offer what you're genuinely happy to give.",
    },
  ],
  recoveryPhrases: [
    "Actually, I said yes too fast. I need to change my answer to no.",
    "I over-explained. Simply put, I can't this time.",
    "I'm sorry to back out. I should have said no at the start.",
  ],
  bestRecoveryLine:
    "Actually, I said yes too fast. I need to change my answer to no.",
  chains: [
    {
      label: "Positive no, then broken record",
      sequence: "Decline warmly, then repeat calmly if they push.",
      example: [
        "\"I've promised Saturday to the kids, so I can't. I could do Thursday.\"",
        '"I understand. It\'s still a no for Saturday."',
      ],
    },
    {
      label: "Positive no, then calibrated question",
      sequence: "Decline, then invite them to solve the constraint.",
      example: [
        '"I can\'t do both by Friday."',
        '"How would you like me to prioritise?"',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC095",
      reason:
        "DEAR MAN is a longer script for bigger asks and refusals. Use the Positive no for everyday ones.",
    },
    {
      id: "TC107",
      reason: "If they keep pushing after your no, switch to broken record.",
    },
    {
      id: "TC083",
      reason:
        "After a no at work, ask what would make an alternative workable.",
    },
  ],
};
