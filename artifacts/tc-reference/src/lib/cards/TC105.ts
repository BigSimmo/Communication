import type { CardData } from "../card-types";

export const TC105: CardData = {
  id: "TC105",
  resources: [
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC105/TC105_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC105/TC105_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC105/TC105_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC105/TC105_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC105/TC105_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  sources: [
    {
      label: "Gottman Institute, Love Smarter by Learning When to Take a Break",
      url: "https://www.gottman.com/blog/love-smarter-learning-take-break/",
    },
    {
      label: "Gottman Institute, R is for Repair",
      url: "https://www.gottman.com/blog/r-is-for-repair/",
    },
  ],
  whyItWorks:
    'When an argument gets heated, people can become "flooded": the body goes into fight-or-flight, and listening becomes very hard. The Gottman Institute recommends calling a break at that point, and making it at least twenty minutes because the body needs about that long to calm down. Spend it doing something soothing, not rehearsing the argument, and avoid letting it stretch past a day. Saying when you\'ll come back is what separates a break from stonewalling. Gottman defines a repair attempt as any statement or action, silly or otherwise, that stops negativity escalating.',
  whatItIsNot: [
    "Not storming out or going silent.",
    'Not "calm down" said to the other person.',
    "Not a way to avoid the topic for good.",
    "Not time to stew over how wrong they are.",
    "Not punishing the other person with silence.",
  ],
  overview: {
    coreFormula: [
      "Notice you're flooding: racing heart, raised voice, wanting to win.",
      'Name it about you: "I\'m getting overwhelmed."',
      'Ask for a break with a return time: "Can we take twenty minutes and come back to this?"',
      "Soothe yourself: walk, breathe, do something unrelated.",
      'Come back and repair: "I\'m sorry I got heated. Can we try again?"',
    ],
    minimumViableMove:
      "Say you're too worked up to listen, ask for a break and say when you'll come back.",
    impact: "High",
    difficulty: "Medium",
    misuse:
      'It becomes stonewalling if you never come back, or if you use "I need a break" every time a topic gets uncomfortable.',
    bestFor: [
      "An argument with a partner is escalating.",
      "A family conversation is going round in circles.",
      "You can feel yourself about to say something you'd regret.",
      "Both of you are raising your voices.",
      "A tense conversation with a colleague that's getting heated.",
      "Noticing you're getting sharp at the end of a long shift.",
    ],
  },
  notFor: [
    "You are unsafe. Leave and get help rather than negotiating a break.",
    "A quick practical decision that has to be made now.",
    "When the other person has asked you not to leave mid-talk. Agree a break rule together in a calm moment.",
    "Using breaks to avoid every hard topic. If it keeps happening, talk about the pattern.",
    "Formal meetings with a set agenda. Ask the chair for a short adjournment instead.",
  ],
  phraseBank: [
    {
      id: "quick",
      label: "Call the break",
      tag: "Short and owned",
      tone: "Quick",
      phrases: [
        "I need a few minutes. I'm not leaving the conversation.",
        "Can we pause? I'm getting too heated.",
        "Let's take twenty minutes and come back.",
        "I want to get this right. Can I have a break?",
        "I'm too wound up to think straight. Can I have ten minutes?",
        "Let me step away for a moment. I'll be back.",
      ],
    },
    {
      id: "return",
      label: "Promise the return",
      tag: "Say when you'll be back",
      tone: "Warm",
      phrases: [
        "I'll come find you in half an hour.",
        "Can we pick this up after dinner?",
        "I'll be back in twenty minutes. This matters to me.",
        "Let's talk again tonight once we've both cooled off.",
        "Can we come back to this at two, once I've had a breather?",
        "I'll ring you back in half an hour so we can finish this properly.",
      ],
    },
    {
      id: "repair",
      label: "Repair attempts",
      tag: "Stop the escalation",
      tone: "Repair",
      phrases: [
        "Can we start that again?",
        "I'm sorry, that came out wrong.",
        "I'm on your side here.",
        "Let's slow down.",
        "I hear you. Give me a second.",
        "Can I try saying that more kindly?",
      ],
    },
    {
      id: "comeback",
      label: "Coming back",
      tag: "Reconnect, then continue",
      tone: "Warm",
      phrases: [
        "Thanks for waiting. I'm calmer now.",
        "I'm sorry I raised my voice.",
        "I've been thinking about what you said, and you've got a point.",
        "Can I hear your side again? I wasn't really listening before.",
        "I've had time to think. Can we start with what matters most to you?",
        "Thanks for giving me a moment. I'm ready to listen now.",
      ],
    },
    {
      id: "agree",
      label: "Agree a break rule",
      tag: "Set it up in a calm moment",
      tone: "Direct",
      phrases: [
        "Can we agree a signal for when one of us needs a break?",
        'If either of us says "pause", let\'s take twenty minutes.',
        "Let's promise to always come back to it the same day.",
        "Can we agree that either of us can call a pause, as long as we say when we'll come back?",
        "Next time it gets heated, let's take a breather and pick it up the same day.",
      ],
    },
    {
      id: "work",
      label: "At work",
      tag: "Meetings, colleagues and long shifts",
      tone: "Professional",
      phrases: [
        "I'd like to pause this and come back after lunch with a clearer head.",
        "Can we take a short break? I want to give this proper thought.",
        "I'm not at my best right now. Could we pick this up at the start of tomorrow's shift?",
        "Let's take five minutes and then look at the options again.",
        "I've realised I'm getting frustrated, and that's not helping. Can we reset in ten minutes?",
      ],
    },
    {
      id: "in-writing",
      label: "Messages and calls",
      tag: "When the heat is in a thread",
      tone: "Quick",
      phrases: [
        "I want to reply properly, not quickly. I'll get back to you this afternoon.",
        "I'm going to step away from this thread for an hour and come back with a clear reply.",
        "Can we finish this on a call tomorrow? It's getting tangled by text.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "You notice you're flooding",
      action: "Name it about yourself and ask for a break.",
      phrase: "I'm getting too worked up. Can we take twenty minutes?",
    },
    {
      condition: "They ask for a break",
      action: "Agree, and ask when you'll pick it up.",
      phrase: "Okay. Can we talk again after dinner?",
    },
    {
      condition: "The break went past a day",
      action: "Reach out first with a repair.",
      phrase: "I don't want to leave this hanging. Can we talk tonight?",
    },
    {
      condition: "They keep following you",
      action: "Reassure them that you're coming back.",
      phrase: "I'm not leaving you. I'll be back at eight.",
    },
    {
      condition: "A repair attempt is ignored",
      action: "Try a different one, more gently.",
      phrase: "I'm sorry. Can we start again?",
    },
    {
      condition: "You're at work and can't leave",
      action:
        "Take a micro-pause: slow your breathing and voice, then continue or hand over.",
      phrase: "Give me a moment. I want to answer this properly.",
    },
  ],
  ladder: [
    {
      weak: '"Calm down!"',
      better: '"I\'m done talking."',
      best: '"I\'m getting overwhelmed. Can we take twenty minutes and come back to this?"',
    },
    {
      weak: "(Walking off in silence)",
      better: '"I need space."',
      best: '"I need a bit of space. I\'ll come and find you in half an hour."',
    },
    {
      weak: '"Fine, whatever."',
      better: '"Let\'s stop."',
      best: "\"Let's pause. I want to hear you properly, and I can't right now.\"",
    },
    {
      weak: '"I can\'t deal with you right now."',
      better: '"I need a minute."',
      best: "\"I'm getting frustrated and I don't want that to come out on you. Can we pick this up in ten minutes?\"",
    },
  ],
  scenarios: [
    {
      situation: "Argument about money",
      move: "Call it, set the time.",
      phrase:
        '"I\'m getting heated about this. Can we sit down again at seven?"',
    },
    {
      situation: "Teenager shouting",
      move: "Model the break calmly.",
      phrase:
        '"I want to sort this out. Let\'s both take ten minutes and try again."',
    },
    {
      situation: "Partner raising old hurts",
      move: "Repair and pause.",
      phrase:
        "\"I'm sorry. I'm too wound up to do this well. Can we come back to it tonight?\"",
    },
    {
      situation: "Coming back after a break",
      move: "Repair first.",
      phrase:
        '"Thanks for the break. I\'m sorry I got loud. Can I hear your side again?"',
    },
    {
      situation: "A heated disagreement with a colleague",
      move: "Name it about you and set a return time.",
      phrase:
        '"I\'m getting worked up, and I want to get this right. Can we talk again after lunch?"',
    },
    {
      situation: "A tense text thread",
      move: "Stop replying fast and say when you'll answer.",
      phrase:
        "\"I'd rather reply properly than quickly. I'll message you back tonight.\"",
    },
  ],
  calibration: {
    working: [
      "You both come back calmer.",
      "Voices drop and you can listen.",
      "The topic gets resolved, not buried.",
      "Breaks become shorter and easier over time.",
      "You return with something new to say, not the same argument.",
      "The other person trusts the break because you came back last time.",
    ],
    adjust: [
      "They feel abandoned: give a clear return time.",
      "You spent the break rehearsing: do something unrelated next time.",
      "The issue keeps getting dropped: put a time on picking it up.",
      "Breaks happen every conversation: look at how the talks start (TC104).",
      "They follow you or keep talking: say again when you'll be back.",
      "You can't leave the room: slow your breathing and voice instead.",
      "The break turned into avoiding the topic: set a time and keep it.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Know your signs",
      task: "Write down three signs you're getting flooded, e.g. hot face, fast heart, wanting to win.",
    },
    {
      day: "Day 2",
      title: "Write your break line",
      task: "Write your own one-line break request with a return time.",
    },
    {
      day: "Day 3",
      title: "Plan the soothe",
      task: "List three things that calm you in twenty minutes, like a walk, music or a shower.",
    },
    {
      day: "Day 4",
      title: "Write a repair",
      task: "Write two repair phrases that sound like you.",
    },
    {
      day: "Day 5",
      title: "Agree a signal",
      task: "In a calm moment, agree a break word with someone close.",
    },
    {
      day: "Day 6",
      title: "Practise",
      task: "Next time you feel heated, even in traffic, notice it and breathe for a minute.",
    },
    {
      day: "Day 7",
      title: "Review",
      task: "After a break, did you come back? What helped you calm down?",
    },
  ],
  checklist: [
    "Did I call the break about me, not them?",
    "Did I give a return time?",
    "Did I do something soothing, not stew?",
    "Did I come back?",
    "Did I open with a repair?",
    "Did I come back at the time I said?",
  ],
  example: {
    without: [
      "A: You always do this.",
      "B: Calm down!",
      "A: Don't tell me to calm down!",
      "B: (Walks out and slams the door.)",
    ],
    with: [
      "A: You always do this.",
      "B: I'm getting really heated. Can we take twenty minutes and come back to this?",
      "A: Fine.",
      "B: (Twenty minutes later) Thanks for waiting. I'm sorry I raised my voice. Can I hear your side again?",
    ],
    note: "In the second version the break is about B's own state, comes with a time, and ends in a repair, so it reads as care rather than an exit.",
  },
  influencePayoff: {
    feeling: '"They didn\'t walk out on me. They came back."',
    principle:
      "Nobody listens well while flooded. A planned break with a promised return protects both the relationship and the issue.",
    gains: [
      "Fewer things said in anger.",
      "Arguments get resolved instead of repeated.",
      "Builds trust that conflict is safe.",
      "Keeps you in control of how you come across.",
    ],
    whyMostFail: [
      "They tell the other person to calm down.",
      "They leave without saying when they'll be back.",
      "They spend the break rehearsing their case.",
      "They never come back to the topic.",
    ],
  },
  fieldTip: {
    headline: "Break, with a time to come back.",
    body: "Gottman's advice is at least twenty minutes, doing something soothing and unrelated, and not longer than a day. The return time is what makes it a break rather than an exit.",
    example: '"I need twenty minutes. I\'ll come and find you."',
    dont: '"Calm down." (or walking out in silence)',
    do: '"I\'m overwhelmed. Can we take twenty minutes and come back to this?"',
  },
  method: [
    {
      step: "1",
      title: "Spot the signs",
      body: "Heart racing, voice rising, thinking only about winning.",
    },
    {
      step: "2",
      title: "Name it about you",
      body: "Say what's happening for you, not what they're doing wrong.",
    },
    {
      step: "3",
      title: "Ask for a break with a return time",
      body: "At least twenty minutes, and the same day if you can.",
      examples: [
        {
          label: "Say",
          text: '"Can we take twenty minutes and pick this up at eight?"',
        },
        {
          label: "Avoid",
          text: '"I\'m done."',
        },
      ],
    },
    {
      step: "4",
      title: "Soothe, don't stew",
      body: "Walk, breathe, shower, music. Avoid replaying the fight.",
    },
    {
      step: "5",
      title: "Come back and repair",
      body: "Open with something warm or an apology for your part.",
    },
    {
      step: "6",
      title: "Continue gently",
      body: "Restart with a soft start-up (TC104) and listen first.",
    },
  ],
  liveThreadClues: [
    "Voices getting louder",
    '"You always..." from either side',
    "Your heart pounding",
    "Wanting to say the one thing that will hurt",
    "Going round in circles",
    "Someone crying or shutting down",
  ],
  depthDial: [
    {
      depth: "Micro-pause",
      useWhen: "you feel the heat rising but can still listen",
      phrase: "Hang on, let me take a breath before I answer.",
    },
    {
      depth: "Short break",
      useWhen: "voices are rising or you're going round in circles",
      phrase: "Let's take twenty minutes and come back to this at four.",
    },
    {
      depth: "Longer break",
      useWhen: "you're both exhausted or it's late",
      phrase:
        "We're both tired. Can we sit down tomorrow morning and finish this?",
    },
    {
      depth: "Agreed rule",
      useWhen: "breaks keep happening with the same person",
      phrase:
        "Can we agree a signal for when one of us needs a pause, and a time to come back?",
    },
  ],
  commonMistakes: [
    {
      mistake: '"Calm down"',
      soundsLike: '"Just calm down!"',
      better: '"I\'m getting heated. Can we pause?"',
    },
    {
      mistake: "The silent exit",
      soundsLike: "Walking out with no word.",
      better: '"I need twenty minutes. I\'ll be back."',
    },
    {
      mistake: "Stewing",
      soundsLike: "Replaying the argument for an hour.",
      better: "Do something unrelated and soothing.",
    },
    {
      mistake: "Never returning",
      soundsLike: "The topic quietly disappears.",
      better: '"Can we finish what we started earlier?"',
    },
    {
      mistake: "Making the break about them",
      soundsLike: '"You need to calm down. Let\'s take a break."',
      better: "\"I'm getting heated. Let's take a break.\"",
    },
    {
      mistake: "Too short a break",
      soundsLike: "Coming back after two minutes, still wound up.",
      better: "Give it at least twenty minutes if you can.",
    },
    {
      mistake: "Leaving on a hurtful line",
      soundsLike: "Walking off straight after saying something cutting.",
      better: 'Repair first: "That came out wrong. I need a break."',
    },
  ],
  recoveryPhrases: [
    "I walked off without saying when I'd be back. I'm sorry. Can we talk now?",
    "I told you to calm down, and that wasn't fair.",
    "I'm back. I want to understand your side.",
    "I said I'd be back in twenty minutes and it's been two hours. I'm sorry. Can we talk now?",
    "I told you to calm down when it was me who needed to. Sorry.",
    "I left in a way that felt like a slammed door. That wasn't fair. I'm ready to listen.",
    "I came back still wound up. Can we try again after dinner?",
  ],
  bestRecoveryLine:
    "I walked off without saying when I'd be back. I'm sorry. Can we talk now?",
  chains: [
    {
      label: "Break, then apology, then soft start-up",
      sequence: "Pause, repair, restart gently.",
      example: [
        '"Can we take twenty minutes?"',
        '"Sorry I got loud."',
        '"I\'m worried about the money. Could we look at it together?"',
      ],
    },
    {
      label: "Break, then looping",
      sequence: "Come back and check understanding first.",
      example: [
        '"I\'m back. Can I hear it again?"',
        '"So the main thing is you felt dismissed. Is that right?"',
      ],
    },
    {
      label: "Break, then receive feedback",
      sequence: "Come back ready to hear their side, even the hard bits.",
      example: [
        "\"I'm back. I'd like to hear what upset you most.\"",
        '"Can you give me an example?"',
      ],
    },
    {
      label: "Strategic pause, then break",
      sequence:
        "Try a short pause first. If it's not enough, call a proper break.",
      example: [
        '"Give me a second."',
        '"Actually, I need longer. Can we pick this up at four?"',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC104",
      reason: "Restart with a soft start-up after the break.",
    },
    {
      id: "TC101",
      reason: "Open the return with an apology for your part.",
    },
    {
      id: "TC109",
      reason: "Loop their view back once you're calm enough to listen.",
    },
    {
      id: "TC031",
      reason: "When you can't leave, slow your pace and voice instead.",
    },
    {
      id: "TC103",
      reason: "Come back ready to hear their side without defending.",
    },
    {
      id: "TC035",
      reason:
        "For a few seconds rather than twenty minutes, use a strategic pause.",
    },
  ],
};
