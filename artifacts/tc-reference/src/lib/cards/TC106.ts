import type { CardData } from "../card-types";

export const TC106: CardData = {
  id: "TC106",
  resources: [
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC106/TC106_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC106/TC106_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC106/TC106_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC106/TC106_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC106/TC106_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  sources: [
    {
      label:
        "Crucial Learning, Crucial Conversations Skill Summary: Make It Safe (contrasting)",
      url: "https://cruciallearning.com/blog/crucial-conversations-skill-summary-make-it-safe/",
    },
  ],
  whyItWorks:
    "Crucial Learning, the team behind Crucial Conversations, points out that people get defensive not because of what you say but because of why they think you're saying it. Contrasting fixes a misread intent with a don't/do statement: first say what you don't mean (\"I'm not saying you did a bad job\"), then say what you do mean (\"I want to make the next one easier\"). Stepping briefly out of the topic to restore safety lets the real conversation continue. It isn't an apology. Use it when your intent has been misunderstood, or just before saying something that could easily be misread.",
  whatItIsNot: [
    'Not "no offence, but..." followed by an insult.',
    "Not taking back a fair point.",
    "Not an apology when you've done nothing wrong.",
    "Not a way to sneak in criticism.",
  ],
  overview: {
    coreFormula: [
      "Notice the misread: they look hurt, defensive or go quiet.",
      "Don't: say what you're not intending. \"I'm not saying...\"",
      'Do: say what you are intending. "What I do want is..."',
      "Return to the topic.",
    ],
    minimumViableMove:
      '"I\'m not saying [what they fear]. I do want [your real aim]."',
    impact: "Medium",
    difficulty: "Easy-Medium",
    misuse:
      'It\'s manipulative when the "don\'t" is false, e.g. "I\'m not criticising you" before a criticism.',
    bestFor: [
      "A friend takes a suggestion as a criticism.",
      "Your partner thinks you're blaming them.",
      "A colleague bristles at feedback.",
      "Before raising something that could be misread.",
    ],
  },
  notFor: [
    "You actually do mean the thing you're denying. Be honest instead.",
    "When you've done harm. Apologise (TC101).",
    "Every sentence. Overused, it sounds defensive.",
  ],
  phraseBank: [
    {
      id: "quick",
      label: "Quick contrasts",
      tag: "Don't, then do",
      tone: "Quick",
      phrases: [
        "I'm not blaming you. I just want to sort it out.",
        "This isn't a criticism. I want to help.",
        "I'm not saying no. I'm saying not yet.",
        "I don't want to change the plan, just the timing.",
      ],
    },
    {
      id: "relationship",
      label: "With people close to you",
      tag: "Protect the relationship",
      tone: "Warm",
      phrases: [
        "I'm not trying to start a fight. I really want us to be on the same page.",
        "I don't think you're a bad friend at all. I missed you, that's all.",
        "This isn't about you doing it wrong. I'd just like to help more.",
        "I'm not upset with you. I'm upset about the situation.",
      ],
    },
    {
      id: "work",
      label: "At work",
      tag: "Clarify intent",
      tone: "Professional",
      phrases: [
        "I'm not questioning your work. I want to make sure the client is happy.",
        "I don't want to slow you down. I want to avoid a redo later.",
        "This isn't a judgement on the team. It's a process gap.",
        "I'm not taking this off you. I'd like to share the load.",
      ],
    },
    {
      id: "pre-empt",
      label: "Before a tricky point",
      tag: "Pre-emptive contrasting",
      tone: "Direct",
      phrases: [
        "I don't want this to sound like a complaint, because I love working with you. I do want to raise the late changes.",
        "I'm not asking you to give up the gym. I'd love one evening a week together.",
      ],
    },
    {
      id: "return",
      label: "Back to the topic",
      tag: "After the contrast",
      tone: "Repair",
      phrases: [
        "So, back to what I was saying.",
        "With that clear, can we look at the plan?",
        "Does that make more sense of what I meant?",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "They look hurt or defensive",
      action: "Pause the topic and contrast.",
      phrase: "I'm not saying you did it wrong. I want to help next time.",
    },
    {
      condition: "You're about to say something easy to misread",
      action: "Contrast first, then say it.",
      phrase: "I'm not criticising. I've noticed something I want to mention.",
    },
    {
      condition: "They still seem upset",
      action: "Ask what they heard.",
      phrase: "What did that sound like from your side?",
    },
    {
      condition: "Your intent was actually unkind",
      action: "Don't contrast. Apologise.",
      phrase: "That was unfair of me. I'm sorry.",
    },
  ],
  ladder: [
    {
      weak: '"No offence, but..."',
      better: '"Don\'t take this the wrong way."',
      best: "\"I'm not saying you did a bad job. I'd like us to try a different approach next time.\"",
    },
    {
      weak: '"Calm down, I\'m not attacking you."',
      better: '"I didn\'t mean it like that."',
      best: '"I\'m not blaming you at all. I just want us to fix the timing."',
    },
    {
      weak: '"Whatever, forget it."',
      better: '"That\'s not what I meant."',
      best: '"I don\'t want you to feel criticised. I do want to understand what happened."',
    },
  ],
  scenarios: [
    {
      situation: "Partner hears criticism of their cooking",
      move: "Clarify intent.",
      phrase:
        "\"I'm not saying it wasn't good. I'd love to cook together sometimes.\"",
    },
    {
      situation: "Friend thinks you're angry",
      move: "Separate person from issue.",
      phrase:
        "\"I'm not angry with you. I'm frustrated the plans fell through.\"",
    },
    {
      situation: "Colleague defensive about feedback",
      move: "Restore safety.",
      phrase:
        '"This isn\'t about your ability. I want the handover to be smoother."',
    },
    {
      situation: "Raising a sensitive topic",
      move: "Pre-empt it.",
      phrase:
        "\"I don't want to tell you how to parent. I did notice something I'd like to mention.\"",
    },
  ],
  calibration: {
    working: [
      "Their shoulders drop.",
      "They re-engage with the topic.",
      'They say "oh, okay".',
      "The conversation moves forward.",
    ],
    adjust: [
      "They're still defensive: ask what they heard.",
      "It sounds like an excuse: shorten it.",
      "You're using it constantly: look at how you're raising things.",
      "Your \"don't\" isn't true: be honest instead.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot misreads",
      task: "Notice one moment today where someone misread your intent.",
    },
    {
      day: "Day 2",
      title: "Write the don't",
      task: "Write what they feared you meant.",
    },
    {
      day: "Day 3",
      title: "Write the do",
      task: "Write what you really meant, in one short sentence.",
    },
    {
      day: "Day 4",
      title: "Combine",
      task: 'Join them: "I\'m not... I do want..."',
    },
    {
      day: "Day 5",
      title: "Pre-empt one",
      task: "Before raising a small issue, open with a contrast.",
    },
    {
      day: "Day 6",
      title: "Use it live",
      task: "Use one contrast in a real conversation.",
    },
    {
      day: "Day 7",
      title: "Review",
      task: 'Did it restore calm? Was the "don\'t" honest?',
    },
  ],
  checklist: [
    'Was my "don\'t" honest?',
    "Did I say what I do want?",
    "Did I keep it short?",
    "Did I return to the topic?",
    'Did I avoid "no offence, but"?',
  ],
  example: {
    without: [
      "A: Could you maybe send the slides earlier next time?",
      "B: So I'm useless now?",
      "A: I didn't say that.",
      "B: You basically did.",
    ],
    with: [
      "A: Could you send the slides a day earlier next time?",
      "B: So I'm useless now?",
      "A: Not at all. I'm not criticising your work. I want time to add my bit properly.",
      "B: Oh, okay. Tuesday then?",
    ],
  },
  influencePayoff: {
    feeling: '"Oh, they\'re not having a go at me."',
    principle:
      "Safety is about intent, not content. Clear up the intent and people can hear the content.",
    gains: [
      "Defuses misunderstandings quickly.",
      "Keeps hard conversations going.",
      "Shows care for the person, not just the issue.",
      "Lets you be candid without being harsh.",
    ],
    whyMostFail: [
      "They argue about the content instead of fixing the misread intent.",
      'They use "no offence, but" as a free pass.',
      "They deny an intent they actually had.",
      "They contrast so much it sounds defensive.",
    ],
  },
  fieldTip: {
    headline: "Fix the intent, not the content.",
    body: "When someone bristles, they're usually reacting to what they think you meant. Step out of the topic for one sentence, clear up your intent, then step back in.",
    example: "\"I'm not saying you're wrong. I want to understand.\"",
    dont: '"No offence, but..."',
    do: '"I\'m not blaming you. I want us to fix it together."',
  },
  method: [
    {
      step: "1",
      title: "Watch for the misread",
      body: "A flinch, defensiveness, sudden silence.",
    },
    {
      step: "2",
      title: "Step out of the topic",
      body: "Pause the content for a moment.",
    },
    {
      step: "3",
      title: "Say the don't",
      body: "Name the intent they fear, honestly.",
      examples: [
        {
          label: "Say",
          text: '"I\'m not saying you did it badly."',
        },
        {
          label: "Avoid",
          text: '"No offence, but you did it badly."',
        },
      ],
    },
    {
      step: "4",
      title: "Say the do",
      body: "State your real aim in one line.",
    },
    {
      step: "5",
      title: "Step back in",
      body: "Return to the topic once they relax.",
    },
  ],
  liveThreadClues: [
    "\"So you're saying I'm...\"",
    "Arms folding",
    "A sudden short answer",
    '"Fine."',
    "They start defending something you didn't criticise",
  ],
  commonMistakes: [
    {
      mistake: "The fake don't",
      soundsLike: "\"I'm not criticising, but you're hopeless with money.\"",
      better: "Only deny what's genuinely untrue.",
    },
    {
      mistake: "Arguing the point",
      soundsLike: "Repeating your point louder.",
      better: "Fix the intent first.",
    },
    {
      mistake: "Overusing it",
      soundsLike: "Contrasting every sentence.",
      better: "Use it when you see a misread.",
    },
  ],
  recoveryPhrases: [
    "Let me say that better. I'm not having a go. I'd like to help.",
    "That came out wrong. What I meant was...",
    "I think I worried you. That wasn't my intent.",
  ],
  bestRecoveryLine: "That came out wrong. What I meant was...",
  chains: [
    {
      label: "Contrasting, then soft start-up",
      sequence: "Clarify intent, then raise the issue softly.",
      example: [
        '"I\'m not blaming you."',
        '"I\'m feeling stretched about the bills. Could we go through them together?"',
      ],
    },
    {
      label: "Contrasting, then looping",
      sequence: "Clear the misread, then check their view.",
      example: [
        '"I\'m not saying you were wrong."',
        '"Tell me how it looked from your side."',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC104",
      reason:
        "Contrasting often rescues a soft start-up that still landed as blame.",
    },
    {
      id: "TC101",
      reason: "If your intent really was unkind, apologise instead.",
    },
    {
      id: "TC052",
      reason: "Pair with SBI when giving feedback that might be misread.",
    },
  ],
};
