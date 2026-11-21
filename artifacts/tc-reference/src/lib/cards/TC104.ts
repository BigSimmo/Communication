import type { CardData } from "../card-types";

export const TC104: CardData = {
  id: "TC104",
  resources: [
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC104/TC104_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC104/TC104_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC104/TC104_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC104/TC104_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC104/TC104_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  sources: [
    {
      label: "Gottman Institute, How to Fight Smarter: Soften Your Start-Up",
      url: "https://www.gottman.com/blog/softening-startup/",
    },
    {
      label: "Gottman Institute, The Four Horsemen: The Antidotes",
      url: "https://www.gottman.com/blog/the-four-horsemen-the-antidotes/",
    },
  ],
  whyItWorks:
    'The Gottman Institute\'s research on couples found that how a conflict conversation starts largely predicts how it ends. A harsh start-up ("You always...", "Why don\'t you ever...") is heard as an attack on character, so the other person defends. A soft start-up complains about a situation without blaming the person: say what you feel, about what specific situation, and what you need, phrased as a positive request. It\'s the Gottman antidote to criticism, and it works just as well with flatmates, family and colleagues.',
  whatItIsNot: [
    "Not hiding the complaint. You still raise it.",
    'Not "I feel like you never listen", which is still blame in disguise.',
    "Not sugar-coating so much that the request gets lost.",
    "Not saving it up until you explode.",
    "Not a script that has to sound soft. Plain and calm is enough.",
  ],
  overview: {
    coreFormula: [
      "I feel... (one emotion word)",
      "about... (the specific situation, not their character)",
      "I need... (what you'd like to happen, said positively)",
      "Add please and appreciation where you can.",
    ],
    minimumViableMove:
      "Name one feeling and the specific situation, then ask for what you need, positively.",
    impact: "High",
    difficulty: "Easy-Medium",
    misuse:
      'It turns into manipulation if the feeling words are used to guilt-trip, or if "I feel" is followed by an accusation.',
    bestFor: [
      "Raising a household issue with a partner or flatmate.",
      "Telling a friend something bothered you.",
      "Bringing up a recurring annoyance before it builds.",
      "Any complaint where you want the other person on your side.",
      "Raising a workload or rostering issue with a colleague or manager.",
      "Bringing up a recurring handover or communication problem in a team.",
    ],
  },
  notFor: [
    "Safety issues or abuse. Be direct and get support.",
    "When you're already flooded. Take a break first (TC105).",
    "Formal workplace feedback, where SBI (TC052) fits better.",
    "A conduct or policy concern that needs formal reporting. Use your organisation's process.",
    "The other person is in the middle of something urgent. Wait for a calm moment.",
    'You\'re using "I feel" to slip in blame. Describe the situation instead.',
  ],
  phraseBank: [
    {
      id: "quick",
      label: "Quick soft start-ups",
      tag: "Feel, about, need",
      tone: "Quick",
      phrases: [
        "I'm feeling a bit stretched with the dishes this week. Could we split them?",
        "I'm a bit hurt about last night. Can we talk?",
        "I'm stressed about money this month. Can we look at the budget together?",
        "I felt left out at the party. Could you check in with me next time?",
        "I'm a bit frazzled about the roster. Can we look at it together?",
        "I'm worried about Friday. Could we plan it now?",
      ],
    },
    {
      id: "describe",
      label: "Describe, don't judge",
      tag: "Situation, not character",
      tone: "Direct",
      phrases: [
        "The bins have been full since Monday.",
        "We've cancelled the last three dinners.",
        "I've done the school run every day this week.",
        "Your phone was out for most of dinner.",
        "The handover notes were missing on Tuesday and Thursday.",
        "The last two meetings ran half an hour over.",
      ],
    },
    {
      id: "positive-need",
      label: "Say what you want",
      tag: "Positive requests",
      tone: "Warm",
      phrases: [
        "I'd love some time just us this weekend.",
        "Could you text me if you're running late?",
        "It would really help if you could take the bins out on Thursdays.",
        "Can we put phones away at dinner?",
        "Could we agree a time each week to go through the jobs?",
        "I'd really like a heads-up before plans change.",
      ],
    },
    {
      id: "responsibility",
      label: "Share responsibility",
      tag: "Lower defences",
      tone: "Repair",
      phrases: [
        "I should have said something sooner.",
        "I know I've been short with you too.",
        "I share some of this, and I'd like to sort it together.",
        "I haven't been clear about what I needed, and I'd like to fix that.",
        "I've probably let this build up, so I'm raising it now while it's small.",
      ],
    },
    {
      id: "work",
      label: "Colleague version",
      tag: "Calm and specific",
      tone: "Professional",
      phrases: [
        "I'm a bit worried about the deadline. Could we agree on check-ins?",
        "I felt caught off guard in the meeting. Could you give me a heads-up next time?",
        "I'm finding the late changes hard. Could we lock the brief by Wednesday?",
        "I'm feeling stretched with the extra referrals. Could we look at how they're shared?",
        "I'm concerned the handovers are getting rushed. Could we try a quick checklist?",
        "I felt a bit sidelined when the plan changed without me. Could you loop me in next time?",
      ],
    },
    {
      id: "appreciate",
      label: "Add warmth",
      tag: "Politeness and appreciation",
      tone: "Warm",
      phrases: [
        "I really appreciate how much you've been doing with the kids.",
        "Thanks for hearing me out.",
        "I know you've had a big week.",
        "I know the team's been under a lot of pressure.",
        "I really value working with you, which is why I want to sort this.",
      ],
    },
    {
      id: "in-writing",
      label: "In writing",
      tag: "Raise it by message",
      tone: "Quick",
      phrases: [
        "Hi Sam, I'm feeling a bit stuck with the shared inbox lately. Could we agree who checks it each morning?",
        "I'm a little worried about next week's roster. Could we have ten minutes on Monday to look at it?",
        "Quick one: I'm finding the late changes hard to keep up with. Could we lock the plan by Wednesday?",
      ],
    },
    {
      id: "high-stakes",
      label: "When it matters a lot",
      tag: "Bigger or long-running issues",
      tone: "High-stakes",
      phrases: [
        "This is hard for me to bring up. I'm feeling worn down by how often plans change, and I'd like us to find a way that works for both of us.",
        "I'm raising this because the relationship matters to me. I've felt left out of decisions lately. Could we talk about how we make them?",
        "I'm not after blame. I'm worried about how stretched we both are, and I'd like us to plan the next month together.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: 'You\'re about to say "you always"',
      action: "Swap it for the specific situation.",
      phrase: "Last night the dishes were left out.",
    },
    {
      condition: "You feel angry",
      action: "Name a softer, more accurate feeling if it fits.",
      phrase: "I'm feeling hurt and a bit overwhelmed.",
    },
    {
      condition: "You don't know what you need",
      action: "Work it out before you start.",
      phrase: "I'd like us to share the cooking.",
    },
    {
      condition: "They get defensive anyway",
      action: "Take some responsibility and slow down.",
      phrase: "I should have raised this sooner. I'm not blaming you.",
    },
    {
      condition: "It's a long-running issue",
      action: "Pick one example, not the whole history.",
      phrase: "This week especially, it's been a lot.",
    },
    {
      condition: "It's a workplace issue",
      action: "Keep the feeling word mild and the request practical.",
      phrase:
        "I'm a bit concerned about the handovers. Could we try a short checklist?",
    },
  ],
  ladder: [
    {
      weak: '"You never help around here."',
      better: '"I feel like you never help."',
      best: '"I\'m feeling worn out about the cooking. Could we take turns this week?"',
    },
    {
      weak: '"Why are you always on your phone?"',
      better: '"You\'re on your phone a lot."',
      best: '"I miss talking to you at dinner. Can we keep phones away while we eat?"',
    },
    {
      weak: '"You\'re so selfish."',
      better: '"That was selfish."',
      best: '"I felt left out of the plans. Next time, could you ask me first?"',
    },
    {
      weak: '"You never tell me anything about the roster."',
      better: '"I wish you\'d tell me about roster changes."',
      best: '"I\'m feeling caught out by the roster changes. Could you message me when they happen?"',
    },
  ],
  scenarios: [
    {
      situation: "Partner leaves dishes",
      move: "Feel, situation, positive need.",
      phrase:
        '"I\'m feeling tired about the dishes. Could you do them on nights I cook?"',
    },
    {
      situation: "Friend always late",
      move: "Describe, ask for what you need.",
      phrase:
        '"I was waiting a while last time and felt a bit flat. Could you text if you\'re running late?"',
    },
    {
      situation: "Flatmate's noise",
      move: "Specific, polite request.",
      phrase:
        '"I\'m struggling to sleep with the music after eleven. Could you turn it down then?"',
    },
    {
      situation: "Parent comments on your choices",
      move: "Feel, need, warmth.",
      phrase:
        '"I feel judged when my job comes up. I\'d love it if we talked about other things at dinner."',
    },
    {
      situation: "A colleague keeps leaving handover notes incomplete",
      move: "Mild feeling, specific situation, practical request.",
      phrase:
        '"I\'m a bit concerned about the handover notes. The last two were missing the plan. Could we use the checklist each time?"',
    },
    {
      situation: "A manager adds work without asking",
      move: "Name the situation and ask for a process, not a confession.",
      phrase:
        '"I\'m feeling stretched since the new referrals came in. Could we look at priorities together on Monday?"',
    },
  ],
  calibration: {
    working: [
      "They listen without defending.",
      "They offer to help or suggest a fix.",
      "The talk stays calm.",
      "You both end up on the same side of the problem.",
      "They offer their own idea for fixing it.",
      "You don't need to raise it again next week.",
    ],
    adjust: [
      'They get defensive: check you didn\'t slip into "you always".',
      "They agree but nothing changes: make the request more specific.",
      "You feel yourself escalating: pause or take a break.",
      "The feeling words sound fake: use plainer ones.",
      "Your feeling word is too strong for the setting: try concerned, stretched or stuck.",
      "They hear the request as criticism: add what you appreciate.",
      "You've raised several issues at once: pick the one that matters most.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Catch the harsh start",
      task: 'Notice any "you always" or "why don\'t you" you say or think today.',
    },
    {
      day: "Day 2",
      title: "Rewrite one",
      task: "Rewrite one harsh complaint as feel, about, need.",
    },
    {
      day: "Day 3",
      title: "Find the need",
      task: "For a current annoyance, write what you want to happen, not what you don't want.",
    },
    {
      day: "Day 4",
      title: "Add warmth",
      task: "Add one line of appreciation to your soft start-up.",
    },
    {
      day: "Day 5",
      title: "Say it aloud",
      task: "Rehearse it until it takes under 15 seconds and sounds like you.",
    },
    {
      day: "Day 6",
      title: "Use it",
      task: "Raise one small complaint today with a soft start-up.",
    },
    {
      day: "Day 7",
      title: "Review",
      task: "How did they react? What would you change in the first sentence?",
    },
  ],
  checklist: [
    'Did I start with "I", not "you"?',
    "Did I describe a situation, not their character?",
    "Did I say what I need in positive terms?",
    "Did I keep it to one issue?",
    "Was I polite and appreciative?",
    "Did I pick a calm moment?",
  ],
  example: {
    without: [
      "A: You never do anything around here.",
      "B: That's rubbish. I did the shopping yesterday.",
      "A: Once. You did it once.",
      "B: Here we go again.",
    ],
    with: [
      "A: I'm feeling worn out about the housework this week.",
      "A: Could we split the cooking and the washing up?",
      "B: Yeah, fair. I'll do the dishes on the nights you cook.",
      "A: Thanks. That would really help.",
    ],
    note: "The second version names a feeling and a need without a verdict on B, so B can offer help instead of a defence.",
  },
  influencePayoff: {
    feeling: '"They\'re telling me what they need, not attacking me."',
    principle:
      "Complain without blame. When people don't feel attacked, they can listen and help.",
    gains: [
      "Complaints get heard instead of argued.",
      "Fewer fights escalate.",
      "Problems get solved while they're small.",
      "Relationships feel safer.",
    ],
    whyMostFail: [
      'They start with "you always" or "you never".',
      'They say "I feel like you..." which is still blame.',
      "They state what they don't want, not what they do.",
      "They let things build up and explode.",
    ],
  },
  fieldTip: {
    headline: "The first sentence sets the tone.",
    body: "Gottman's research shows the start of a conflict conversation predicts how it ends. Spend your effort on the first sentence: one feeling, one situation, one positive need.",
    example:
      '"I\'m stressed about the bills. Can we sit down Sunday and go through them?"',
    dont: '"Why do I always have to deal with the bills?"',
    do: '"I\'m stressed about the bills. Could we go through them together on Sunday?"',
  },
  method: [
    {
      step: "1",
      title: "Pick your moment",
      body: "Raise it when you're both calm and not rushing.",
    },
    {
      step: "2",
      title: "Name one feeling",
      body: "Use a simple emotion word: worried, hurt, stressed, tired.",
    },
    {
      step: "3",
      title: "Describe the situation",
      body: "Say what's happening, not what's wrong with them.",
      examples: [
        {
          label: "Say",
          text: '"The bins have been full since Monday."',
        },
        {
          label: "Avoid",
          text: '"You\'re so lazy."',
        },
      ],
    },
    {
      step: "4",
      title: "Say what you need, positively",
      body: "Ask for what you want to happen.",
    },
    {
      step: "5",
      title: "Add please and thanks",
      body: "Politeness and appreciation keep warmth in the room.",
    },
    {
      step: "6",
      title: "Listen to their side",
      body: "Then work on it together.",
    },
  ],
  liveThreadClues: [
    "You're rehearsing a speech in your head",
    '"Here we go again"',
    'Thinking "they always..."',
    "Tension at home before anyone has said anything",
    "A small issue that keeps coming back",
    'Starting a sentence with "Why do you always..."',
  ],
  depthDial: [
    {
      depth: "Light nudge",
      useWhen: "a small, one-off annoyance",
      phrase:
        "Small thing: could you give me a quick text if you're running late?",
    },
    {
      depth: "Standard soft start-up",
      useWhen: "most everyday complaints",
      phrase:
        "I'm feeling stretched with the cooking this week. Could we take turns?",
    },
    {
      depth: "Shared responsibility",
      useWhen: "you've added to the problem too",
      phrase:
        "I think I've added to this by not saying anything. I'm feeling overwhelmed with the jobs, and I'd like us to split them.",
    },
    {
      depth: "Bigger conversation",
      useWhen: "a long-running issue that needs proper time",
      phrase:
        "There's something I'd like to talk about properly. Could we find half an hour this weekend?",
    },
    {
      depth: "Pause first",
      useWhen: "you're too angry to start softly",
      phrase:
        "I want to raise something, but not while I'm this wound up. Can we talk tonight?",
    },
  ],
  commonMistakes: [
    {
      mistake: "Hidden blame",
      soundsLike: '"I feel like you\'re lazy."',
      better: '"I feel tired about the housework."',
    },
    {
      mistake: "Kitchen-sinking",
      soundsLike: "Every grievance from the last year.",
      better: "One issue, this week.",
    },
    {
      mistake: "Negative request",
      soundsLike: '"Stop leaving your stuff everywhere."',
      better: '"Could you keep your bag in your room?"',
    },
    {
      mistake: "Waiting too long",
      soundsLike: "Bottling it up until you snap.",
      better: "Raise it while it's small.",
    },
    {
      mistake: "A question that's really an accusation",
      soundsLike: '"Why didn\'t you do the handover properly?"',
      better:
        '"I\'m concerned the handover missed the plan. Could we use the checklist?"',
    },
    {
      mistake: "Feeling words that are really judgements",
      soundsLike: '"I feel disrespected by your laziness."',
      better: '"I feel stretched about the jobs this week."',
    },
    {
      mistake: "Burying the request",
      soundsLike: "Describing the problem and stopping there.",
      better: 'End with what you\'d like: "Could we...?"',
    },
  ],
  recoveryPhrases: [
    "That came out harsher than I meant. Let me start again.",
    "Sorry, I'm not trying to blame you. I just need some help with it.",
    "Let me say what I actually need.",
    'I started with "you always", and that\'s not fair. Let me try again.',
    "I've brought up too much at once. The main thing is the roster.",
    "I didn't say what I need. Could we agree a time to go through it?",
    "That sounded like an attack, and I didn't mean it to. I'm feeling stretched, that's all.",
  ],
  bestRecoveryLine: "That came out harsher than I meant. Let me start again.",
  chains: [
    {
      label: "Soft start-up, then looping",
      sequence: "Raise it softly, then make sure you've understood their side.",
      example: [
        '"I\'m feeling stretched with the cooking. Could we take turns?"',
        '"So weeknights are hard because of your shifts. Is that right?"',
      ],
    },
    {
      label: "Soft start-up, then contrasting",
      sequence: "If they get defensive, clarify your intent.",
      example: [
        "\"I'm not saying you don't pull your weight.\"",
        '"I just want us to find a split that works."',
      ],
    },
    {
      label: "Soft start-up, then clean request",
      sequence: "Make the need specific enough to say yes to.",
      example: [
        '"I\'m feeling stretched with the referrals."',
        '"Could we share them between the three of us from Monday?"',
      ],
    },
    {
      label: "Take a break, then soft start-up",
      sequence: "Calm down first, then open gently.",
      example: [
        '"Can we talk tonight once I\'ve cooled off?"',
        '"I\'m feeling hurt about the plans. Could we decide them together next time?"',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC053",
      reason:
        "NVC adds observation and request detail for bigger or more formal conversations.",
    },
    {
      id: "TC105",
      reason:
        "If the conversation heats up anyway, take a break and come back.",
    },
    {
      id: "TC106",
      reason: "Use contrasting if they hear blame you didn't intend.",
    },
    {
      id: "TC013",
      reason: "Turn the need into a clear, specific request.",
    },
    {
      id: "TC052",
      reason:
        "For formal workplace feedback, use situation, behaviour and impact.",
    },
    {
      id: "TC074",
      reason:
        "For a more structured complaint, describe, express, specify and name the consequences.",
    },
  ],
};
