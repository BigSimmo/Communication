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
    "Not a way to refuse something you're obliged to do. If it's part of your role, negotiate the how or when instead.",
  ],
  overview: {
    coreFormula: [
      "Yes: name what you're protecting. \"I've promised Sundays to my family.\"",
      'No: say the limit plainly. "So I can\'t do this weekend."',
      'Yes?: offer a way forward. "I could do Thursday evening if that helps."',
    ],
    minimumViableMove:
      "Name what you're protecting, say no plainly, then offer a genuine way forward.",
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
      "Being asked to pick up an extra shift or cover a colleague when you're already stretched.",
      "A patient, client or family member asks for something outside what you can offer.",
    ],
  },
  notFor: [
    "Unsafe or abusive situations. A plain no is enough and you owe no alternative.",
    "When any alternative would be a lie. Skip the final yes and stay kind.",
    "Someone who keeps pushing after a clear no. Switch to broken record (TC107).",
    "The request is a core part of your role. Negotiate timing or support instead of refusing outright.",
    "You're tempted to refuse because the person is difficult, not because you can't help.",
    'You haven\'t decided yet. Buy time honestly instead: "Let me check and come back to you by 3pm."',
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
        "Thanks for asking. It's a no from me this time.",
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
        "I've got a full list today, and I want to do each one properly, so I can't add this.",
        "I'm protecting my days off at the moment, so I'll say no to the extra shift.",
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
        "I can't do it today, but I could look at it first thing tomorrow.",
        "I can't do that, but I can point you to the person who can.",
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
        "I can't cover Saturday. I could do the Thursday late if that helps the roster.",
        "I can't take another referral this week without dropping something. Which one should wait?",
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
        "I'm going to say no to Christmas at ours this year, and I'd love to see you on Boxing Day.",
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
        "I hear that it's hard. I'm still not able to do it.",
        "I've given you my answer, and I'm not going to change it today.",
        "I know this isn't what you wanted. It's still a no, and I'm happy to help find another option.",
      ],
    },
    {
      id: "care-settings",
      label: "Patients, clients and families",
      tag: "Outside what you can offer",
      tone: "Professional",
      phrases: [
        "I can't change the appointment time myself, but I can ask the front desk to look at other times with you.",
        "I'm not able to give out my personal number. You can reach the team on the main line any time we're open.",
        "I can't stay longer right now because someone else is waiting for me. I'll come back at three.",
        "That's not something I'm able to do, but I'll find out who can and let you know today.",
      ],
    },
    {
      id: "in-writing",
      label: "In writing",
      tag: "A no by email or message",
      tone: "Quick",
      phrases: [
        "Thanks for thinking of me for this. I can't take it on this term, as I'm committed to the audit. Happy to suggest someone who might be keen.",
        "I won't make the working group this time. I'll read the minutes and send any comments by Friday.",
        "I'm keeping Friday clear for my family, so I'll say no to drinks. Have a great night.",
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
    {
      condition: "It's beyond your role or against policy",
      action: "Say no plainly, then point them to who or what can help.",
      phrase:
        "I can't do that myself, but I'll find out who can and let you know.",
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
    {
      weak: '"I suppose I could squeeze it in..."',
      better: '"I\'m too busy for that."',
      best: '"I want to give my current list my full attention, so I can\'t take another today. I could look at it first thing tomorrow."',
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
    {
      situation: "Asked to pick up an extra shift",
      move: "Protect your rest, and give a genuine alternative if you have one.",
      phrase:
        '"I need my days off this week, so I can\'t do Saturday. I could do the Tuesday late if that helps."',
    },
    {
      situation: "A family member asks you to stay longer than you can",
      move: "Decline kindly and give a time you'll be back.",
      phrase:
        "\"I can't stay right now, because someone else is waiting for me. I'll be back to see you at three.\"",
    },
  ],
  calibration: {
    working: [
      "They accept and move on.",
      "They take your alternative.",
      "The relationship feels unchanged or warmer.",
      "You feel calm, not guilty.",
      "They solve the problem another way without resentment.",
      "You keep your yes for what matters.",
    ],
    adjust: [
      "They keep pushing: stop giving reasons and repeat your answer.",
      "You hear yourself over-explaining: cut to one reason.",
      "Your alternative isn't something you want: drop it.",
      "They sound hurt: acknowledge it without changing your answer.",
      "They seem distressed rather than disappointed: slow down and check what they need before you hold the line.",
      "Your no is about your role, not your preference: say who can help instead.",
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
    "Did I check it's mine to refuse, and not a core part of my role?",
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
    note: "The second version gives one reason, a clear no and a real alternative, so the other person has something to say yes to.",
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
    '"You\'re the only one who can do it."',
  ],
  depthDial: [
    {
      depth: "Light decline",
      useWhen: "a casual or low-stakes ask from someone you like",
      phrase: "I'll pass this time, but thanks for thinking of me.",
    },
    {
      depth: "Standard positive no",
      useWhen: "most requests that clash with your time or priorities",
      phrase:
        "I've promised Saturday to my family, so I can't. I could do Thursday if that helps.",
    },
    {
      depth: "Trade-off no",
      useWhen: "the ask comes from a manager or someone with more power",
      phrase:
        "If I take this on, the audit slips. Which would you like me to put first?",
    },
    {
      depth: "Firm no",
      useWhen: "any alternative would be a lie, or they keep pushing",
      phrase: "I understand. My answer is still no.",
    },
    {
      depth: "Point elsewhere",
      useWhen: "the request is beyond your role or against policy",
      phrase:
        "I'm not able to do that. I'll check with my manager about what we can offer instead.",
    },
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
    {
      mistake: "Apologising your way out",
      soundsLike: '"I\'m so sorry, I feel terrible, I really wish I could..."',
      better: '"I can\'t this time. Thanks for asking."',
    },
    {
      mistake: "Saying yes to escape the moment",
      soundsLike: '"Sure, no worries," while your stomach drops',
      better: '"Let me check my week and come back to you by three."',
    },
    {
      mistake: "Blaming someone else",
      soundsLike: "\"My manager won't let me.\" (when it's your choice)",
      better: 'Own the no: "I\'m not able to take it on."',
    },
  ],
  recoveryPhrases: [
    "Actually, I said yes too fast. I need to change my answer to no.",
    "I over-explained. Simply put, I can't this time.",
    "I'm sorry to back out. I should have said no at the start.",
    "I gave you a maybe, and that wasn't fair. The honest answer is no.",
    "I offered Thursday, but I can't actually do it. I'm sorry. It's a no for this week.",
    "That came out sharper than I meant. I still can't, but I do want to help you find another way.",
    "I said yes to the shift, but I've realised I need the rest. I'm telling you now so there's time to find cover.",
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
    {
      label: "Positive no, then validate the concern",
      sequence:
        "Acknowledge their disappointment without changing your answer.",
      example: [
        '"I can\'t cover Saturday."',
        "\"I can hear that leaves you stuck. It's still a no from me, and I'll ask around for you.\"",
      ],
    },
    {
      label: "Strategic pause, then positive no",
      sequence: "Buy time instead of giving a reflex yes.",
      example: [
        '"Let me check and get back to you by three."',
        "\"I've looked, and I can't take it on. I could help with the handover notes though.\"",
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
    {
      id: "TC014",
      reason:
        "Acknowledge their disappointment before or after the no, without changing your answer.",
    },
    {
      id: "TC035",
      reason: "Pause before answering so you don't give a reflex yes.",
    },
    {
      id: "TC008",
      reason:
        "Keep the reason to one line. Extra reasons give them more to argue with.",
    },
  ],
};
