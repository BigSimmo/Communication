import type { CardData } from "../card-types";

export const TC031: CardData = {
  pdfUrl: "cards/TC031/TC031_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC031/TC031_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC031/TC031_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC031/TC031_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC031/TC031_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC031/TC031_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC031/TC031_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC031/TC031_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC031",
  whyItWorks:
    "Slow down under pressure is a deliberate voice move: the moment you feel pressure rising, you drop your speaking pace by a notch and answer with a shorter, calmer first sentence. It is a specific, observable action, not a personality trait. It works because pressure makes almost everyone speed up, and speed reads as anxiety, defensiveness or aggression. A slower first sentence signals control, buys your own thinking time to catch up, and lowers the temperature for the other person, who tends to match the pace you set.",
  whatItIsNot: [
    "It is not a trick, a dominance move or a way to unsettle the other person.",
    "It is not stalling, going quiet or dodging the question. You still answer, just more slowly.",
    "It is not a fixed script. It is a real-time adjustment to how fast and how hard you are talking.",
    "It is not passivity: a slow sentence can still be firm, clear and direct.",
  ],
  overview: {
    coreFormula: [
      "Cue → one beat → drop the pace → simplest true sentence → pause → follow or release.",
      '"Let me slow that down. The main point is..."',
      '"I need a beat before I answer." (then answer, slowly)',
      '"One thing at a time. Here\'s the simple version."',
    ],
    minimumViableMove:
      "Pause for one beat, drop your pace by a notch, and answer with the simplest true sentence.",
    impact: "Medium",
    difficulty: "Hard",
    misuse:
      "It fails when the pause becomes stalling: using a calm, slow delivery to dodge the question, run out the clock or quietly steer, rather than actually answering.",
    bestFor: [
      "When pressure makes you rush or talk over people",
      "When your voice is turning sharp, clipped or defensive",
      "When a slower first sentence would take the heat out of things",
      "When you are being pushed for an instant answer and need a beat to give a good one",
      "In tense meetings, disagreements or hard feedback",
      "When staying steady matters more than being fast",
    ],
  },
  notFor: [
    "When physical safety or an emergency needs immediate action, not a pause",
    "When you would be using the slowdown to dodge accountability or run out the clock",
    "When the answer is already clear and direct, and slowing it down just adds drag",
    "When a fast, decisive yes or no is exactly what the moment needs",
    "When the other person is already calm and the pace is fine as it is",
  ],
  phraseBank: [
    {
      id: "quick",
      label: "Quick",
      tag: "Buy-a-beat one-liners",
      tone: "Quick",
      phrases: [
        "Let me slow that down.",
        "One thing at a time.",
        "Give me a beat.",
        "Let me get this right.",
        "Hang on, one sec.",
        "Let me answer that properly.",
        "Short version first.",
      ],
    },
    {
      id: "warm",
      label: "Warm",
      tag: "Steady, keeps rapport",
      tone: "Warm",
      phrases: [
        "I want to answer that carefully.",
        "Let me think about that for a second.",
        "That's a fair question. Give me a moment.",
        "I'd rather get this right than get it fast.",
        "Bear with me a second.",
        "Let me take that in properly.",
      ],
    },
    {
      id: "professional",
      label: "Professional",
      tag: "Work / meeting / decisions",
      tone: "Professional",
      phrases: [
        "The main point is...",
        "The simple version is...",
        "Let me take these one at a time.",
        "Before I answer, let me make sure I've got the question.",
        "I'll give you a clear answer in a moment.",
        "Let me separate the two things you asked.",
        "Here's where I've landed.",
      ],
    },
    {
      id: "direct",
      label: "Direct",
      tag: "Firm, clear first sentence",
      tone: "Direct",
      phrases: [
        "Here's the short answer.",
        "The main thing is this.",
        "Let me be clear and brief.",
        "One point, then I'll stop.",
        "Straight answer: here it is.",
        "I'll say the important part first.",
      ],
    },
    {
      id: "repair",
      label: "Repair",
      tag: "When it got heated or fast",
      tone: "Repair",
      phrases: [
        "Let me say that more simply.",
        "I may be reading this wrong.",
        "Let me back up and slow this down.",
        "That came out faster than I meant.",
        "We can stay with this or move on. Your call.",
        "Ignore that if it doesn't fit.",
      ],
    },
    {
      id: "high-stakes",
      label: "High-stakes",
      tag: "Pressure / conflict / put on the spot",
      tone: "High-stakes",
      phrases: [
        "I hear the urgency. Give me one beat.",
        "I want to get this right, not just quick.",
        "Let me slow us both down for a second.",
        "I'm not dodging. I want to answer it properly.",
        "Let me take a breath and answer plainly.",
        "One thing at a time, even now.",
      ],
    },
    {
      id: "digital-text",
      label: "Digital / text",
      tag: "Written variants",
      tone: "Quick",
      phrases: [
        "Give me a bit to answer this properly.",
        "Short version now, fuller version later if useful.",
        "I may be reading this wrong, but this seems like the relevant thread.",
        "One thing at a time. Let me take the first.",
        "Let me come back to this clearly rather than fire off a quick reply.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "They add detail",
      action: "Stay with it at the steadier pace.",
      phrase: "Good, keep going.",
    },
    {
      condition: "They pause thoughtfully",
      action: "Wait. Do not rush to fill the silence.",
      phrase: "",
    },
    {
      condition: "They look uncomfortable or confused",
      action: "Release the move: make it smaller or drop it.",
      phrase: "Let me say that more simply.",
    },
    {
      condition: "They ask for advice",
      action: "Switch to Permission-based advice.",
      phrase: "Want my take, or just a sounding board?",
    },
    {
      condition: "Action is genuinely needed now",
      action: "Stop slowing down and act directly.",
      phrase: "Here's what we do.",
    },
  ],
  ladder: [
    {
      weak: "Answering everything at once, fast and defensive.",
      better: "One beat, then the simplest true sentence.",
      best: "One beat, the simplest true sentence, then stop and watch how they take it.",
    },
    {
      weak: '"That\'s wrong." (fast, sharp)',
      better: '"The simple version is..." (slower, one point)',
      best: '"I might be reading this wrong, but the simple version is..." (slow, one point, leaves them room)',
    },
    {
      weak: "Talking faster to win the moment.",
      better: "Slowing your first sentence to steady it.",
      best: "Slowing your first sentence, then pausing so the other person can catch up too.",
    },
  ],
  scenarios: [
    {
      situation: "Casual conversation",
      move: "Use the smallest version: a single beat before you answer.",
      phrase: "Give me a sec. Let me get this right.",
    },
    {
      situation: "Professional / meeting",
      move: "Keep it concise and non-performative. Lead with the main point.",
      phrase: "The main point is the supplier delay. About a week.",
    },
    {
      situation: "Conflict or disagreement",
      move: "Pair the slowdown with validation or an autonomy release so it doesn't read as stonewalling.",
      phrase: "I hear you. Let me slow down and take the main thing first.",
    },
    {
      situation: "Digital / text",
      move: "One sentence only. Resist firing off a fast reply.",
      phrase: "Let me come back to this properly rather than reply on the fly.",
    },
    {
      situation: "High-stakes / pushed for an instant answer",
      move: "Give direct clarity first, then slow down only if it lowers the pressure.",
      phrase: "Straight answer: yes. Now let me explain why, slowly.",
    },
    {
      situation: "Hard feedback landing on you",
      move: "Take one beat before responding so you answer the point, not the sting.",
      phrase: "Let me take that in for a second before I respond.",
    },
  ],
  calibration: {
    working: [
      "Your own voice steadies within a sentence or two.",
      "The other person slows down to match you.",
      "Their tone softens and they add detail.",
      "The thread gets clearer, not muddier.",
      "They stop talking over you.",
      "The room feels a notch calmer.",
    ],
    adjust: [
      "Short answers and politeness without energy.",
      "Repeated topic shifts.",
      "They pull back, go quiet or look confused.",
      "Defensiveness or refusal.",
      "You feel yourself performing calm rather than being calm.",
      "The moment actually needs a fast, direct answer: switch to that.",
      "When in doubt, make the move smaller.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the cue",
      task: "List five moments this week where pressure made you speed up. Note the physical tell each time: fast breath, tight chest, talking over someone.",
    },
    {
      day: "Day 2",
      title: "Write the lines",
      task: "For three of those moments, write the fast, defensive version and the simplest-true-sentence version side by side.",
    },
    {
      day: "Day 3",
      title: "Cut it down",
      task: "Take your best sentence from Day 2 and reduce it by 30 percent. Say it out loud at a slower pace.",
    },
    {
      day: "Day 4",
      title: "Add the beat",
      task: "Practise the one-beat pause before speaking. Read each line aloud with a deliberate breath first, then the slow first sentence.",
    },
    {
      day: "Day 5",
      title: "Bank a recovery line",
      task: "Pick one recovery phrase you'd actually say and rehearse it, so you have it ready when a slowdown lands badly.",
    },
    {
      day: "Day 6",
      title: "Use it live, low-stakes",
      task: "In one low-pressure conversation, take a beat and lead with a single slow sentence, then stop and watch the response.",
    },
    {
      day: "Day 7",
      title: "Use it under real pressure",
      task: "In one genuinely pressured moment, notice the rush, drop your pace by a notch, say the simplest true sentence, and release. Note afterwards what changed.",
    },
  ],
  checklist: [
    "Did I notice the cue before I sped up?",
    "Did I lead with one simple true sentence rather than a rush?",
    "Did I pause and watch the response?",
    "Did I stop when the energy dropped or the moment needed speed?",
    "Was I steadying myself, or using the pause to dodge or steer?",
    "Would a faster, more direct answer actually have been better?",
  ],
  example: {
    without: [
      "Manager: So why did the numbers slip? I need an answer now.",
      "You (fast, defensive): Well it wasn't just me, there were loads of things, the supplier was late and then the brief changed twice and honestly nobody told me the deadline had moved so it's not really...",
      "Manager: I didn't ask whose fault it was.",
      "Why it's weak:",
      "speeds up and over-explains under pressure",
      "sounds defensive and scattered",
      "buries the actual answer in excuses",
      "invites more pressure instead of settling it",
    ],
    with: [
      "Manager: So why did the numbers slip? I need an answer now.",
      "You (one beat, slower): The main reason was the supplier delay.",
      "Manager: How far behind did it put us?",
      "You: About a week. I've already moved the reorder forward so it doesn't repeat.",
      "Manager: Good. That's what I needed.",
      "Why this works:",
      "takes one beat instead of rushing in",
      "leads with a single true sentence",
      "stops and lets them steer the next question",
      "reads as steady and accountable, not defensive",
    ],
    note: "Same facts, same person: the only change is pace. The slow first sentence carries more authority than the fast paragraph.",
  },
  influencePayoff: {
    feeling:
      '"They stayed steady and actually heard me, instead of talking over me."',
    principle:
      "People match the pace you set. Slow down first, and the exchange slows with you: a steadier pace lowers the emotional temperature for both of you.",
    gains: [
      "Clarity: your first sentence carries the point instead of burying it",
      "Lower friction and less escalation",
      "You are read as steady and in control",
      "The other person feels respected, not steered",
      "Time for your own thinking to catch up",
      "A calmer tone the other person tends to mirror",
    ],
    whyMostFail: [
      "They confuse slowing down with passivity, delay or evasion.",
      "They deliver it mechanically, so it sounds like a technique rather than a natural pause.",
      "They keep talking after the first slow sentence instead of stopping to watch the response.",
      "They use the pause to steer toward their own agenda.",
    ],
  },
  fieldTip: {
    headline: "Shorten the first sentence, not the whole answer.",
    body: "You don't have to speak slowly for the whole conversation. That just sounds laboured. The leverage is all in the first sentence. Make that one shorter and slower, and the rest tends to follow at a steadier pace.",
    example:
      '"The main issue is the timeline." (said slowly) beats a fast paragraph of context.',
    dont: "Don't announce that you're slowing down. It turns the move into a performance.",
    do: "Do take one real beat before the first word, then lead with the simplest true thing.",
  },
  method: [
    {
      step: "1",
      title: "Notice the cue",
      body: "Catch the physical tell before the words. Under pressure the body speeds up first: faster breath, a tightening chest, the urge to jump in before the other person has finished. That rush is the cue to slow down, not to push harder.",
    },
    {
      step: "2",
      title: "Drop the pace by a notch",
      body: "You don't need to crawl. Take one beat before you start, then speak about ten percent slower than the urge wants you to. One notch is enough to break the acceleration and steady your voice.",
    },
    {
      step: "3",
      title: "Lead with the simplest true sentence",
      body: "Say the shortest honest version of your point first, then stop. Pressure tempts you to over-explain. A single clear sentence does more work than a paragraph.",
      examples: [
        {
          label: "Rushed",
          text: '"It\'s complicated, there were loads of factors and honestly..."',
        },
        { label: "Slower", text: '"The main reason was the supplier delay."' },
      ],
    },
    {
      step: "4",
      title: "Pause and watch",
      body: "After the first slow sentence, stop and read the response. The pause is not dead air. It is where you check whether they relaxed, followed, or pulled back.",
    },
    {
      step: "5",
      title: "Follow or release",
      body: "If they soften or add detail, carry on at the steadier pace. If they tense up, or the moment genuinely needs a fast, direct answer, drop the technique and act plainly.",
    },
  ],
  liveThreadClues: [
    "Your words are speeding up",
    "You have started talking over them",
    "Your voice is getting sharp or clipped",
    "You feel the urge to answer before they finish",
    "Your chest or jaw tightens",
    "You are explaining more than the question asked for",
    '"Just give me an answer."',
    '"Well? So?"',
  ],
  commonMistakes: [
    {
      mistake: "Slowing down so much it becomes stalling",
      soundsLike: '"Well... let me see... hmm... that\'s a big question..."',
      better: '"The short answer is yes. Here\'s why."',
    },
    {
      mistake: "Making it sound like a technique",
      soundsLike: '"Let me just slow down and lower my pace here."',
      better: "Just say the next sentence more slowly. No announcement.",
    },
    {
      mistake: "Using the pause to dodge the question",
      soundsLike:
        "\"That's a really good question, and there's a lot to unpack...\"",
      better: '"Give me a beat." (then actually answer it)',
    },
    {
      mistake: "Carrying on talking instead of stopping",
      soundsLike: "One slow sentence followed by five fast ones.",
      better: "Say the first sentence, then stop and watch.",
    },
    {
      mistake: "Slowing down to dominate the room",
      soundsLike: "A drawn-out, weighty pace used to control everyone.",
      better: "Slow down to steady yourself, not to perform gravitas.",
    },
    {
      mistake: "Confusing slow with passive",
      soundsLike: "A soft, vague answer that avoids the point.",
      better: "A slow sentence that's still clear and firm.",
    },
  ],
  recoveryPhrases: [
    "I may be reading that wrong.",
    "We don't have to stay with that.",
    "Let me say that more simply.",
    "Ignore that if it doesn't fit.",
    "What would be more useful right now?",
    "That came out faster than I meant. Let me try again.",
    "Let me back up and take that one thing at a time.",
  ],
  bestRecoveryLine: "Let me say that more simply.",
  chains: [
    {
      label: "Steady then clarify",
      sequence:
        "Slow down under pressure → Summary check → Live-Thread Follow-Ups",
      example: [
        '"Let me slow that down. The main issue is the timeline."',
        '"So the timeline is the sticking point, not the budget?"',
        '"Say more about what\'s driving the deadline."',
      ],
    },
    {
      label: "Validate then release",
      sequence:
        "Validation without agreement → Slow down under pressure → Autonomy release",
      example: [
        '"I can see why this is frustrating."',
        '"Let me take it one thing at a time. The core point is this."',
        '"But it\'s your call in the end."',
      ],
    },
    {
      label: "Steady then go deeper",
      sequence: "Slow down under pressure → Meaning reflection",
      example: [
        '"Give me a beat. The main thing I\'m hearing is you feel rushed on this."',
        '"It sounds like what matters to you is having enough time to do it well."',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC029",
      reason:
        "Strategic silence gives the other person space. Slowing down steadies your own delivery.",
    },
    {
      id: "TC035",
      reason:
        "Strategic pause punctuates a single point. Slowing down adjusts the pace of the whole response.",
    },
    {
      id: "TC028",
      reason:
        "Warm vocal baseline is your default tone. Slowing down is the pressure-time correction to it.",
    },
    {
      id: "TC011",
      reason:
        "Summary check comes after slowing down, when complexity still remains.",
    },
    {
      id: "TC027",
      reason:
        "Permission-based advice is where to switch if, once things are calm, they actually want your advice.",
    },
  ],
};
