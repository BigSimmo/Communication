import type { CardData } from "../card-types";

export const TC024: CardData = {
  pdfUrl: "cards/TC024/TC024_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC024/TC024_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC024/TC024_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC024/TC024_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC024/TC024_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC024/TC024_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC024/TC024_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC024/TC024_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC024",
  whyItWorks:
    "A warm opening is the first five to fifteen seconds of an interaction, where you make the other person feel recognised, socially safe and oriented before you move into the real purpose. Warm first, then clear: the warmth is not there to delay the point but to make it easier to receive. A brief, genuine signal that you see the person lowers the sense of threat, so a request, a piece of feedback or a disagreement lands with less friction and less defensiveness.",
  whatItIsNot: [
    "It is not long small talk or a whole rapport routine performed before you get to the point.",
    "It is not fake cheerfulness or forced enthusiasm: calm, quiet warmth counts too.",
    "It is not apologetic padding or over-apologising for taking up someone's time.",
    "It is not a friendly preamble used to hide or soften a dishonest ask.",
    "It is not a delay: warm first, then clear, so the point arrives faster, not slower.",
  ],
  overview: {
    coreFormula: [
      "Recognition + a small warm or context signal + a clean purpose bridge.",
      "Good to see you. Quick one, I wanted to ask about Friday.",
      "Thanks for making time. I know your day is packed, so I'll keep this tight.",
      "Nice to meet you. I heard you're the person who knows this area well.",
      "Before I jump in, I appreciate you being open to talking this through.",
      "This is slightly awkward to raise, but I'd rather do it clearly and respectfully.",
    ],
    minimumViableMove:
      "Offer a simple greeting plus one warm, relevant line, then bridge straight to why you are there.",
    impact: "Medium",
    difficulty: "Easy-Medium",
    misuse:
      "It fails when the warm-up runs longer than the substance, or curdles into over-apologising, fake enthusiasm, or a friendly preamble that hides the real ask. Delivered mechanically, the warmth reads as a technique rather than genuine recognition.",
    bestFor: [
      "First meetings, calls, messages and re-opened conversations.",
      "Starting a request, feedback, disagreement or negotiation without sounding abrupt.",
      "Networking, dating and social interactions, work conversations and leadership moments.",
      "Moving from small talk into substance while keeping the warmth.",
      "Repairing slight awkwardness after silence, an interruption or a cold start.",
    ],
  },
  notFor: [
    "Urgency or safety needs immediate directness.",
    "The other person is clearly rushed and just needs the bottom line.",
    "Warmth would be used to soften a dishonest ask or hide pressure.",
    "You are overdoing friendliness because you feel anxious or approval-seeking.",
    "The conversation is already emotionally serious and cheerfulness would feel mismatched.",
  ],
  phraseBank: [
    {
      id: "quick_low_pressure",
      label: "Quick / low-pressure",
      tag: "Quick / low-pressure phrases",
      tone: "Quick",
      phrases: [
        "Good to see you. Quick one...",
        "Thanks for making time. I'll keep this brief.",
        "I know you're busy, so straight to the useful bit.",
        "Before we get into it, good to see you.",
        "Quick check-in before I ask something.",
        "Got a second? Nothing heavy.",
        "One quick thing while I've got you.",
      ],
    },
    {
      id: "social_casual",
      label: "Social / casual",
      tag: "Social / casual phrases",
      tone: "Warm",
      phrases: [
        "Good to see you. How's your day actually been?",
        "Nice to run into you. What have you been up to?",
        "I was hoping I'd get to ask you about this.",
        "You look like you've had a full day.",
        "I'm glad we got a minute to talk.",
        "It's been too long. I've been meaning to catch you.",
        "Good to meet you. How do you know everyone here?",
      ],
    },
    {
      id: "professional_workplace",
      label: "Professional / workplace",
      tag: "Professional / workplace phrases",
      tone: "Professional",
      phrases: [
        "Thanks for making time. The thing I wanted to cover is...",
        "Good to connect. I'll give you the short version first.",
        "I appreciate you looking at this with me.",
        "Before the details, here's the main point.",
        "I wanted to get your read on something specific.",
        "Thanks for making time. The main thing I want to settle is...",
        "I'll give you the useful version first, then you can tell me if detail would help.",
      ],
    },
    {
      id: "requests",
      label: "Requests",
      tag: "Requests phrases",
      tone: "Direct",
      phrases: [
        "Can I ask a small favour?",
        "Would you be open to a quick ask?",
        "I wanted to ask something specific and easy to answer.",
        "No pressure if not, but I wanted to check...",
        "I'll make the ask clear so it's easy to say yes or no.",
        "One specific question, and it's an easy yes or no.",
      ],
    },
    {
      id: "conflict_difficult_topics",
      label: "Conflict / difficult topics",
      tag: "Conflict / difficult topics phrases",
      tone: "High-stakes",
      phrases: [
        "I want to raise this carefully, not make it heavier than it needs to be.",
        "I value the relationship, so I'd rather be direct and respectful.",
        "This may be a bit uncomfortable, but I think it's worth saying clearly.",
        "Before I respond, I want to acknowledge this matters.",
        "I'm not trying to attack the person. I want to sort out the issue.",
        "I want to raise this carefully because I think it matters.",
      ],
    },
    {
      id: "high_status_busy_person",
      label: "High-status / busy person",
      tag: "High-status / busy person phrases",
      tone: "Direct",
      phrases: [
        "I know your time is tight, so I'll be brief.",
        "Bottom line first, then I can give detail if useful.",
        "I have one specific question.",
        "I'll keep this to two minutes.",
        "The reason I'm bringing this to you is specific.",
        "I know your time is tight. One specific question...",
      ],
    },
    {
      id: "digital_text",
      label: "Digital / text",
      tag: "Digital / text phrases",
      tone: "Quick",
      phrases: [
        "Quick ask, no pressure if today is too full.",
        "Thought of you because of your point about X.",
        "Hope your week is going okay. One specific question...",
        "Can I get your quick read on this?",
        "Short version: I'm trying to decide between X and Y.",
        "No rush on this. Whenever suits.",
      ],
    },
    {
      id: "re_open_after_silence",
      label: "Re-open after silence",
      tag: "Re-open after silence phrases",
      tone: "Repair",
      phrases: [
        "Picking this back up from the other day...",
        "I wanted to come back to what we were discussing.",
        "I realised I left this hanging.",
        "Circling back, because your point stuck with me.",
        "Before we move on, I wanted to return to one thing.",
        "Picking this back up from our last chat. Your point about X stuck with me.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "They respond warmly.",
      action:
        "Continue naturally into the conversation or ask. Don't over-explain the opening.",
      phrase: "Great, so the thing I wanted to check is...",
    },
    {
      condition: "They seem rushed.",
      action: "Shift straight to the bottom line.",
      phrase: "Quick version is...",
    },
    {
      condition: "They seem guarded.",
      action: "Clarify your purpose and lower the stakes.",
      phrase:
        "I'm not trying to put you on the spot. I just wanted to ask one thing.",
    },
    {
      condition: 'They ask "What do you need?"',
      action: "Drop the warm-up and state the clean request.",
      phrase: "Fair enough. Could you review the one-page version by Thursday?",
    },
    {
      condition: "They seem irritated.",
      action: "Acknowledge the time or pressure, then shorten or defer.",
      phrase: "I can tell it's a bad moment, shall I catch you later?",
    },
    {
      condition: "They engage with small talk.",
      action: "Follow one live thread, then bridge back to your purpose.",
      phrase:
        "Sounds like a week. On that note, the thing I wanted to raise is...",
    },
  ],
  ladder: [
    {
      weak: "Heyyyyy! Hope you're amazing! Sorry to bother you, this will only take a second...",
      better: "Hey, hope your day's going okay. Quick ask...",
      best: "Hey, quick ask. No pressure if today's full.",
    },
    {
      weak: "How are you? Good? Great. Anyway, I need...",
      better: "Good to see you. I wanted to ask about...",
      best: "Good to see you. I'll keep this simple. I wanted your read on...",
    },
    {
      weak: "Sorry, sorry, I know you're busy, sorry, can I...",
      better: "I know you're busy, so I'll be brief.",
      best: "I know your time is tight. One specific question...",
    },
    {
      weak: "We need to talk.",
      better: "Can we talk through something quickly?",
      best: "I want to raise something directly, but not make it dramatic.",
    },
  ],
  scenarios: [
    {
      situation: "Social first contact",
      move: "Offer one warm observation, then an easy question.",
      phrase: "Good to meet you. How do you know everyone here?",
    },
    {
      situation: "Work meeting",
      move: "Respect their time, orient, then state your purpose.",
      phrase: "Thanks for making time. The main thing I want to settle is...",
    },
    {
      situation: "A difficult issue",
      move: "Let warmth mean respectful directness, not cheerfulness.",
      phrase: "I want to raise this carefully because I think it matters.",
    },
    {
      situation: "High-status or busy person",
      move: "Keep the warmth compact and the relevance high.",
      phrase: "I know your time is tight. One specific question...",
    },
    {
      situation: "Digital message",
      move: "Lead with a brief human line, then a clear ask.",
      phrase: "Quick ask, no pressure if today is full.",
    },
    {
      situation: "Re-opening after silence",
      move: "Acknowledge the gap and reconnect with the earlier thread.",
      phrase:
        "Picking this back up from our last chat. Your point about X stuck with me.",
    },
  ],
  calibration: {
    working: [
      "They orient toward you or respond warmly.",
      "They answer the opening rather than bracing for a demand.",
      "The transition to the ask or topic feels smooth.",
      "They seem less guarded or rushed.",
      'They give you permission to continue: "Sure", "Go on", "What\'s up?"',
      "Their shoulders drop and their tone softens.",
      "They ask you a question back before you've even made your ask.",
    ],
    adjust: [
      'They say "What do you need?" or look impatient: give the bottom line sooner.',
      "They give clipped answers to the warm opening. Drop the small talk and get to the point.",
      "The topic is urgent or emotionally serious: match the seriousness rather than opening cheerful.",
      'You hear yourself apologising repeatedly: respect their time without shrinking: "I\'ll be brief."',
      "The opening is running longer than the substance: bridge to purpose now.",
      'The tone feels mismatched: reset: "Let me say this more directly."',
      "You're reaching for warmth out of anxiety: shift to plain, respectful directness.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Learn the formula",
      task: "Say the minimum viable move aloud three times: a simple greeting plus one warm, relevant line. Notice how short it can be and still land.",
    },
    {
      day: "Day 2",
      title: "Write your openers",
      task: "Write a warm opening for three people you'll actually speak to today, each following Recognition + warm signal + purpose bridge.",
    },
    {
      day: "Day 3",
      title: "Cut the padding",
      task: 'Take yesterday\'s lines and delete every "sorry", "just", and "quick question if that\'s okay". Keep the warmth, lose the shrinking.',
    },
    {
      day: "Day 4",
      title: "First request of the day",
      task: "Before your first ask of the day, use a 10-second warm opening. Afterwards, check: did I recognise the person and bridge to purpose early?",
    },
    {
      day: "Day 5",
      title: "Match the temperature",
      task: "Use a warm opening on a busy or serious person. Make warmth mean calm and concise, not upbeat. Note whether the tone actually fit.",
    },
    {
      day: "Day 6",
      title: "Practise a recovery",
      task: 'After a deliberately over-long opening, practise one recovery line: "I\'m giving too much preamble. Quick version is..."',
    },
    {
      day: "Day 7",
      title: "Re-open a cold thread",
      task: "Use a warm opening to restart a conversation that went quiet, reconnecting to the earlier thread. Watch whether they re-engage more easily.",
    },
  ],
  checklist: [
    "Did I open warm because it fit the moment, or because I was anxious and performing?",
    "Was my wording shorter than my instinct?",
    "Did the person have more room after my move, or less?",
    "Did I bridge to purpose early, or let the warmth drift?",
    "Did I adjust if they became closed, pressured or rushed?",
    "What neighbouring technique would have been better if this one missed?",
  ],
  example: {
    without: [
      "You: \"Hey, sorry, sorry, I know you're busy. I just wanted to maybe ask something quickly, if that's okay...\"",
      'Person: "What\'s it?"',
      'You: "It\'s not a big deal, but..."',
      "Why it's weak:",
      "buries the ask under apology and hedging",
      "makes the other person do the work of dragging it out",
      "signals low status and wastes the very time it claims to protect",
    ],
    with: [
      "You: \"I know you're busy, so I'll keep this tight. I wanted to ask one specific thing about Friday.\"",
      'Person: "Sure, what\'s up?"',
      'You: "Could you review the one-page version by Thursday afternoon?"',
      "Or, more warmly:",
      'You: "Good to see you. I\'ll give you the useful version first, then you can tell me if detail would help."',
      'Person: "Perfect."',
      'You: "The decision is whether we go with the simpler option now or wait for more certainty. My leaning is simpler now."',
      "Why this works:",
      "names the time pressure without apologising for existing",
      "recognises the person, then bridges straight to a clear ask",
      "leaves them an easy yes and room to ask for more",
    ],
    note: "Warm first, then clear: the recognition makes the ask easier to receive, it doesn't replace it.",
  },
  influencePayoff: {
    feeling: '"They saw me before they wanted something from me."',
    principle:
      "People are more receptive to you when they first feel recognised rather than managed.",
    gains: [
      "Reduces abruptness and the sense of threat before a request, advice or disagreement.",
      "Makes you seem socially easy, respectful and non-needy.",
      "Creates a smoother emotional frame, so what follows is easier to receive.",
      "Signals that you see the person before the task.",
      "Lowers the other person's guard without any pressure or flattery.",
      "Buys a little goodwill you can spend on a direct, honest point.",
    ],
    whyMostFail: [
      "They let the warm-up run longer than the substance, so it feels like stalling.",
      "They over-apologise or perform fake enthusiasm, which reads as neediness.",
      "They hide the ask behind friendliness, then spring it, which feels like a bait and switch.",
      "They deliver the warmth mechanically, so it lands as a routine rather than recognition.",
    ],
  },
  fieldTip: {
    headline: "Warm first, then clear.",
    body: "The best warm opening makes the other person feel seen without making them wait for the point.",
    example:
      '"Good to see you. I\'ll keep this simple. I wanted your read on one thing."',
    dont: "Open cheerful and chatty before serious content, then bury the ask at the very end.",
    do: "Recognise the person, match their temperature, then bridge straight to why you're there.",
  },
  method: [
    {
      step: "1",
      title: "Orient to the person",
      body: "Use their name, eye contact, a brief greeting, or a nod to the shared context. Make them feel noticed before you move into content.",
      examples: [
        { label: "Say", text: "Good to see you. I was hoping to catch you." },
      ],
    },
    {
      step: "2",
      title: "Match the emotional temperature",
      body: "Warm does not always mean upbeat. With busy, serious or tense people, warmth may mean calm, respectful and concise.",
      examples: [
        {
          label: "Serious topic",
          text: "I want to raise this carefully, not make it heavier than it needs to be.",
        },
      ],
    },
    {
      step: "3",
      title: "Add one genuine warm signal",
      body: "One small line is enough: appreciation, shared context, recognition, or ease. Don't perform a whole rapport routine.",
      examples: [
        {
          label: "Signal",
          text: "Thanks for making time. I know your day is packed.",
        },
      ],
    },
    {
      step: "4",
      title: "Bridge to purpose early",
      body: "After the warm signal, say clearly why you're there. Warmth without direction can feel inefficient or evasive.",
      examples: [
        { label: "Bridge", text: "Quick one, I wanted to ask about Friday." },
      ],
    },
    {
      step: "5",
      title: "Calibrate the length",
      body: "Around 5 seconds for busy people, 10-15 seconds socially, and longer only if they clearly engage.",
    },
    {
      step: "6",
      title: "Proceed cleanly",
      body: "Move into the next move: a live-thread follow-up, a clean request, validation, appreciation, or your direct point.",
    },
  ],
  liveThreadClues: [
    '"What do you need?" Drop the warm-up and go straight to the ask.',
    "Clipped, one-word replies: shorten and get to the point.",
    "Phone in hand, half-turned away: lead with the bottom line.",
    '"Good to see you too". There\'s room for a warm beat.',
    "A heavy topic already in the air: match it, don't brighten it.",
  ],
  depthDial: [
    {
      depth: "Minimal (~5 sec)",
      useWhen: "Busy or high-status person",
      phrase: "I know your time is tight. One specific question...",
    },
    {
      depth: "Brief (~10 sec)",
      useWhen: "Most work conversations",
      phrase: "Thanks for making time. The thing I wanted to cover is...",
    },
    {
      depth: "Warm (10-15 sec)",
      useWhen: "Social meetings or first contact",
      phrase: "Good to see you. How's your day actually been?",
    },
    {
      depth: "Extended",
      useWhen: "They clearly engage and there's time",
      phrase: "Nice to run into you. What have you been up to?",
    },
    {
      depth: "Respectful-direct",
      useWhen: "A serious or tense topic",
      phrase:
        "I want to raise this carefully, not make it heavier than it needs to be.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Too much preamble",
      soundsLike: '"How are you? Busy? Sorry. This is small. Maybe..."',
      better: 'Warm line, then purpose: "Good to see you. Quick one..."',
    },
    {
      mistake: "Fake enthusiasm",
      soundsLike: '"Amazing to connect!!! So excited!!!"',
      better: 'Calm warmth: "Good to connect. I wanted to ask..."',
    },
    {
      mistake: "Hiding the ask",
      soundsLike: "A long friendly opening, then a sudden demand.",
      better: 'Bridge early: "The reason I\'m asking is..."',
    },
    {
      mistake: "Over-apologising",
      soundsLike: '"Sorry, sorry, sorry to bother you..."',
      better:
        "Respect time without shrinking: \"I know you're busy, so I'll be brief.\"",
    },
    {
      mistake: "Warmth mismatched to the mood",
      soundsLike: "A cheerful opening before serious content.",
      better: 'Match the seriousness: "I want to raise this carefully."',
    },
    {
      mistake: "No transition to purpose",
      soundsLike: "Friendly chat that drifts with no direction.",
      better: 'Use a purpose bridge: "The thing I wanted to check is..."',
    },
  ],
  recoveryPhrases: [
    "I'm giving too much preamble. Quick version is...",
    "Let me get to the point.",
    "That sounded more apologetic than I meant. The simple ask is...",
    "I don't want to bury the lead.",
    "Let me say this more directly and respectfully.",
    "I realise that came across a bit formal. What I mean is...",
    "I'm trying to be considerate of your time, so I'll make it clear.",
  ],
  bestRecoveryLine: "I'm giving too much preamble. Quick version is...",
  chains: [
    {
      label: "Rapport chain",
      sequence:
        "Warm opening → contextual opener → live-thread follow-up → reflection → light self-disclosure",
      example: [
        '"Good to see you. How\'s your day actually been?"',
        '"Busy one? What\'s been the most full-on part?"',
        '"That makes sense. I had a week like that recently too."',
      ],
    },
    {
      label: "Request chain",
      sequence:
        "Warm opening → clean request → autonomy release → next-action clarity",
      example: [
        '"Thanks for making time. Quick one."',
        '"Could you review the one-pager by Thursday?"',
        '"No pressure if that\'s tight, just let me know either way."',
      ],
    },
    {
      label: "Conflict chain",
      sequence:
        "Warm opening → validate concern → shared goal → direct issue → repair if needed",
      example: [
        '"I value the relationship, so I\'d rather be direct."',
        '"I know the deadline mattered to you too."',
        '"The handover slipped, and I\'d like us to sort out why."',
      ],
    },
    {
      label: "Professional chain",
      sequence: "Warm opening → BLUF → key reason → ask/check → summary check",
      example: [
        '"Good to connect. I\'ll give you the short version first."',
        '"My leaning is the simpler option now."',
        '"The main reason is that certainty won\'t improve much by waiting. Does that match your read?"',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC010",
      reason:
        "Warm presence keeps warmth running across the whole interaction through attention, tone and timing. Warm opening is only the first 5-15 seconds. Use TC010 when the issue is your overall manner, not the entry.",
    },
    {
      id: "TC012",
      reason:
        "Full-attention signal explicitly shows the person they have your focus. Warm opening recognises them and then bridges to purpose. Use TC012 when the point is to prove you're listening, not to open.",
    },
    {
      id: "TC036",
      reason:
        "Contextual opener starts from the shared situation or something specific in front of you. Warm opening can be a simple recognition. Use TC036 when a generic warm line would feel flat and the context gives you a better way in.",
    },
    {
      id: "TC032",
      reason:
        "Name and detail memory recalls something specific about the person. Warm opening needn't. Use TC032 when remembering a detail is itself the warm signal.",
    },
    {
      id: "TC044",
      reason:
        "BLUF leads with the bottom line and no warm-up. Warm opening spends a few seconds on recognition first. Use TC044 when they're rushed or warmth would only delay the point.",
    },
    {
      id: "TC013",
      reason:
        "Clean request is the ask a Warm opening bridges into: the opening warms the entry, the request states the ask plainly. Use TC013 for the ask itself once you've opened.",
    },
  ],
};
