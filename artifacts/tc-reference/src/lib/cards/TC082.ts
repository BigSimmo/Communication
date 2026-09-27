import type { CardData } from "../card-types";

export const TC082: CardData = {
  pdfUrl: "cards/TC082/TC082_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC082/TC082_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC082/TC082_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC082/TC082_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC082/TC082_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC082/TC082_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC082/TC082_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC082/TC082_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC082",
  whyItWorks:
    'Turn-toward bids means noticing a small bid for contact, attention, help, humour, acknowledgement, or shared focus, then giving it a clear, warm response instead of ignoring it, dismissing it, or competing with it. A bid is a small invitation for a response: sometimes obvious ("Can I show you something?"), more often indirect: a sigh, a joke, a side comment, a shared look, a photo, a question, a complaint, or a tiny update. It works because people rarely judge warmth by big speeches. They judge it by whether you noticed the small reach and did not make them fight for contact. Answered bids are trust deposits, and they compound.',
  whatItIsNot: [
    "Not constant availability, and not letting every small signal override your task, boundary, or fatigue.",
    "Not interrogation: turning every bid into a long question chain.",
    "Not performance warmth: a dramatic show of caring without real attention.",
    "Not people-pleasing: saying yes to every interruption because you fear disappointing someone.",
    "Not forced intimacy: treating a tiny bid as permission to pry, tease, or deepen faster than the relationship can hold.",
  ],
  overview: {
    coreFormula: [
      "Notice: this is a bid, not background noise.",
      'Name or join: "That sounds exciting," "That looks frustrating," "Show me," "I saw this."',
      "Follow through: ask one relevant question, celebrate, help, laugh with them, or schedule a return.",
      "Calibrate: watch whether they relax, expand, smile, clarify, or pull back.",
      'Minimum viable sentence: "I saw that. Tell me the important part."',
      'Boundary version: "I want to turn toward this, but not while I finish this. Can I come back in ten minutes?"',
    ],
    minimumViableMove:
      "Look up or reply, name the signal in ordinary language, and add one small follow-through, or, if you cannot respond well now, acknowledge the bid and schedule a clean return.",
    impact: "High",
    difficulty: "Easy-Medium",
    misuse:
      "It fails when you treat every bid as either an interruption to reject or a full conversation to enter, instead of giving a small real response. It also fails when warm response is used to pressure closeness, reward boundary-violating access demands, or perform interest without sincerity.",
    bestFor: [
      "Everyday relationships where warmth depends on repeated small contact.",
      "Team settings where people share updates, concerns, wins, and informal signals.",
      "Digital conversations where ignoring a bid can feel colder than intended.",
      "Moments when someone is testing whether it is safe to share more.",
      "Repairing a pattern of distraction, abruptness, or emotional absence.",
      "Parenting, friendship, partnership, mentoring, client care, and leadership.",
    ],
  },
  notFor: [
    "The bid is unsafe, coercive, harassing, or boundary-violating.",
    "You are exhausted enough that a fake warm response would be dishonest.",
    "A crisis requires direct action rather than relational expansion.",
    "The other person has asked for space.",
    "A repeated bid is actually a demand for constant access.",
    "The setting requires privacy, confidentiality, or role boundaries.",
  ],
  phraseBank: [
    {
      id: "fast-acknowledgement",
      label: "Fast acknowledgement",
      tag: "Quick one-liners",
      tone: "Quick",
      phrases: [
        "I saw that.",
        "Show me.",
        "That sounds like it mattered.",
        "I hear the concern under that.",
        "Nice. What changed?",
        "Say the headline.",
        "Sorry, what? Say that again.",
        "I saw that. Tell me the important part.",
      ],
    },
    {
      id: "social-humour-bids",
      label: "Social and humour bids",
      tag: "Warmth and connection",
      tone: "Warm",
      phrases: [
        "Wait, that sounds interesting. What happened?",
        "I heard the excitement in that. Tell me the win.",
        "That was a bid for a laugh, and I missed it. Try me again.",
        "I can see why you wanted to show me that.",
        "That's exactly your kind of humour.",
        "That looks like a good moment.",
        "I nearly missed that. That was good.",
        "Show me. What do you like about it?",
      ],
    },
    {
      id: "join-the-bid",
      label: "Join the bid",
      tag: "One light follow-up",
      tone: "Direct",
      phrases: [
        "What should I notice?",
        "What was the best part?",
        "What made that frustrating?",
        "That sounds like a signal. What should we not miss?",
        "That sounds like a real win. What part felt best?",
        "I hear a concern under that. What should we slow down and look at?",
        "What did you do differently this time?",
        "Show me. What am I looking at?",
      ],
    },
    {
      id: "professional-bids",
      label: "Professional and effort signals",
      tag: "Work, status, and updates",
      tone: "Professional",
      phrases: [
        "I hear there's a concern under that. What should I not miss?",
        "That update sounds like it took real effort. What changed?",
        "I saw your note. Before we move on, what do you need from me?",
        "That sounds like a small signal of a bigger issue. Is that right?",
        "I want to give this more than a hallway answer. Can we put ten minutes on it?",
        "I saw this. I can't answer fully yet, but I do want to come back to it.",
        "That's worth more than a reaction emoji. Give me a little time to reply properly.",
        "I missed this earlier. Thanks for sending it. What mattered most to you here?",
      ],
    },
    {
      id: "busy-boundaries",
      label: "Busy moments and timing boundaries",
      tag: "Warmth plus a clear limit",
      tone: "High-stakes",
      phrases: [
        "I can't pause fully, but I heard the concern. Say the headline.",
        "I'm focused on the deadline, not ignoring you. Give me the key signal.",
        "I want to respond well. The cleanest time is after this meeting.",
        "I want to hear this properly. I can't do it well right now. Can we come back at 3?",
        "I can give this five real minutes after the call.",
        "I want to answer that, and I'm at capacity. Can I respond after dinner?",
        "I want to turn toward this, but not while I finish this task. Can I come back in ten minutes?",
        "I want to hear it properly. I'm finishing this, then I can give you five minutes.",
      ],
    },
    {
      id: "repair-and-return",
      label: "Repair and return",
      tag: "After a missed or fumbled bid",
      tone: "Repair",
      phrases: [
        "I missed that. Say it again. I want to catch it.",
        "I was distracted and gave you nothing back. What were you showing me?",
        "I treated that as small. It sounds like it mattered.",
        "That came out too abrupt. I do want to hear the point.",
        "I turned away too fast. Say that again.",
        "I gave you a logistics answer when you were asking for presence. Let me try again.",
        "I jumped to fixing. Let me first understand why this mattered.",
        "I missed that because I was distracted. I want to catch it. Say it again?",
      ],
    },
  ],
  decisionTree: [
    {
      condition:
        "Someone made a small reach: a comment, look, joke, update, question, or sigh.",
      action:
        "Treat it as a real bid. Do not dismiss it as noise, and do not invent one that is not there.",
      phrase: "I saw that. Tell me the important part.",
    },
    {
      condition: "The bid is unsafe, coercive, or wrong for this setting.",
      action: "Set a respectful boundary instead of turning toward it.",
      phrase: "I'm not available for this here.",
    },
    {
      condition: "You cannot give real attention right now.",
      action: "Acknowledge the bid and schedule a clean return, then keep it.",
      phrase: "I want to hear this properly. Can we come back at 3?",
    },
    {
      condition: "You can respond now: match the type of bid.",
      action:
        "Win: celebrate. Concern: validate. Humour: join. Help: clarify. Presence: slow down and show attention.",
      phrase: "Nice. What changed?",
    },
    {
      condition: "You are unsure whether your response landed.",
      action:
        "Check rather than assume, and adjust with a recovery line if you misread it.",
      phrase: "Did I catch the right thing?",
    },
    {
      condition:
        "The bid keeps repeating in a way that drains or pressures you.",
      action:
        "Combine warmth with a clear limit rather than granting more access.",
      phrase: "I care about this, and I also need a clear time boundary.",
    },
  ],
  ladder: [
    {
      weak: 'Someone shares a small win: "Cool," while looking away.',
      better: '"Nice. What changed?"',
      best: '"That sounds like a real win. What part felt best?"',
    },
    {
      weak: 'Someone hints at a concern: "Anyway, next item."',
      better: '"Sounds like there\'s a concern there."',
      best: '"I hear a concern under that. What should we slow down and look at?"',
    },
    {
      weak: 'You\'re busy: no response, or a flat "later."',
      better: '"Busy, later."',
      best: '"I want to hear it properly. I\'m finishing this, then I can give you five minutes."',
    },
    {
      weak: "You missed the bid: pretend you didn't.",
      better: '"Sorry, what?"',
      best: '"I missed that because I was distracted. I want to catch it. Say it again?"',
    },
  ],
  scenarios: [
    {
      situation:
        "A partner, friend, or family member shows you something small.",
      move: "Pause enough to actually receive it before you move on.",
      phrase: "Show me. What do you like about it?",
    },
    {
      situation: "A colleague hints that a project issue is bothering them.",
      move: "Treat the side comment as a possible concern, not a debate to win.",
      phrase: "That sounds like a signal. What should we not miss?",
    },
    {
      situation: "A direct report shares a tiny win.",
      move: "Acknowledge the win and the effort, not just the output.",
      phrase: "Nice. What did you do differently this time?",
    },
    {
      situation: "A friend sends a meme or photo.",
      move: "Respond to the bid for contact, not just the file.",
      phrase: "That's exactly your kind of humour.",
    },
    {
      situation: "A child asks you to watch something.",
      move: 'Give a real window or a clear promise, not a vague "in a minute."',
      phrase: "I can watch one now. Show me the part you want me to see.",
    },
    {
      situation: "You are overloaded when a bid arrives.",
      move: "Acknowledge plus boundary, so warmth does not curdle into resentment.",
      phrase:
        "I want to answer that, and I'm at capacity. Can I respond after dinner?",
    },
  ],
  calibration: {
    working: [
      "They relax, smile, expand, or give more specific detail.",
      "Their voice steadies or warms.",
      "They continue without pushing harder for attention.",
      "The conversation feels easier rather than more demanding.",
      "They accept a timing boundary because the bid was acknowledged.",
      "They move from a small signal into the real thing they wanted to share.",
    ],
    adjust: [
      'They pull back, go flat, or say "never mind."',
      "They repeat the same point more intensely.",
      'They shift from a light bid to frustration: "You never listen."',
      "Your response made it bigger than they intended: ease off.",
      "Your question chain is starting to feel like interrogation: stop asking.",
      "The bid has become pressure for immediate access: add a boundary.",
      "You cannot respond honestly or attentively. Name the limit instead of faking warmth.",
      "Ask yourself: am I matching the bid, or reacting to my own guilt, hurry, or need to be liked?",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the bids",
      task: "Through the day, catch three small bids: live, digital, work, or home. Just write down each signal: a comment, look, joke, update, sigh, or photo. Noticing is the whole task.",
    },
    {
      day: "Day 2",
      title: "Name the type",
      task: "For yesterday's bids and three new ones, label each type: attention, celebration, concern, humour, help, reassurance, presence, or shared focus. Matching the type is how you avoid stock warmth.",
    },
    {
      day: "Day 3",
      title: "Toward, away, or against",
      task: "For each bid today, record whether you turned toward, away, or against it. No judgement: you are building an honest picture of your default reaction.",
    },
    {
      day: "Day 4",
      title: "One-sentence turns",
      task: "Practise the minimum viable move: on three real bids, give one clear turn-toward sentence and then stop. Notice how a short, matched response often does more than a long one.",
    },
    {
      day: "Day 5",
      title: "Boundary plus warmth",
      task: 'Twice today, acknowledge a bid you cannot fully take right now and schedule a clean return, then keep it. Try: "I want to hear this properly. Can we come back at 3?"',
    },
    {
      day: "Day 6",
      title: "Repair a miss",
      task: 'Find one bid you ignored, dismissed, or over-entered, and repair it cleanly: "I treated that as small. It sounds like it mattered." Return without defensiveness.',
    },
    {
      day: "Day 7",
      title: "Live reps and score",
      task: "With a partner (or in real conversations), respond to five small bids, one sentence each. Score yourself 0-3: 0 missed, 1 generic, 2 matched the type, 3 matched the type, respected timing, and calibrated.",
    },
  ],
  checklist: [
    "What small bids did I notice, and which did I miss because I was busy, anxious, or self-focused?",
    "Did I turn toward without overcommitting?",
    "Did I respond to the actual bid type, or give a stock answer?",
    "Did I turn a bid into advice, one-upping, interrogation, or a story about me?",
    "Did I set boundaries cleanly when I could not respond, and return when I said I would?",
    "What is one bid I can repair now?",
  ],
  example: {
    without: [
      'Colleague: "I finally got that client to reply."',
      'You: "Okay, send me the update."',
      'Colleague: "Sure."',
      "Why it's weak: the reply treats the bid as logistics only. The colleague was probably also offering effort, relief, or a small win, and got none of it back.",
    ],
    with: [
      'Colleague: "I finally got that client to reply."',
      'You: "Nice, that sounded like it took persistence. What did they say?"',
      'Colleague: "They approved the revised scope."',
      'You: "Good. Send me the details and we\'ll adjust the plan."',
      "Better: you acknowledged the effort first, then moved to useful action.",
      "Advanced:",
      "You: \"That's the thing you've been chasing since Tuesday, right? Nice. What unlocked it?\"",
      'Colleague: "I stopped explaining everything and just asked for the one decision."',
      'You: "Good move. Shorter ask, clearer decision. Let\'s use that in the next client thread."',
      "Why this works: you turned toward the win, remembered the context, drew out a reusable lesson, and didn't hijack the moment.",
    ],
    note: "The bid was never really about logistics. Match the effort or feeling under the words first, then act.",
  },
  influencePayoff: {
    feeling: '"They noticed me. I didn\'t have to fight for contact."',
    principle:
      "People rarely judge warmth by big speeches. They judge it by repeated small moments, whether you noticed the joke, answered the quick update, looked up from the screen, or made room for the thing they were trying to show you. The effect is cumulative: many clean turns build a reputation for being safe to reach.",
    gains: [
      "Rapport that builds without forcing depth.",
      "A lower cost for people to approach you.",
      "Everyday conversations that feel less transactional.",
      "Professional trust, from responding to small status, concern, or effort signals.",
      "Protection against the slow relational erosion caused by repeatedly ignored bids.",
      "A base for deeper moves: reflective listening, celebrating wins, or finding common ground.",
    ],
    whyMostFail: [
      "They treat every bid as either an interruption to reject or a full conversation to enter, and miss the small real middle.",
      'They use stock warmth ("That\'s nice") that does not match the actual signal.',
      "They hijack the bid with advice or a story about themselves.",
      "They deliver the response mechanically, so it reads as performance rather than attention.",
    ],
  },
  fieldTip: {
    headline: "Treat bids like door knocks, not alarms.",
    body: "You do not have to abandon everything when someone knocks, but you should not pretend you heard nothing. Look up. Name the signal. Give one real response. If you cannot enter now, promise a clean return and keep it. Small bids are trust deposits waiting for a response.",
    example:
      '"I finally finished that thing." → "Nice, that was the one hanging over you, right?"',
    dont: "Leave an effortful or vulnerable message at a bare emoji, or answer a bid for presence with logistics.",
    do: "Match the size and type of your response to the size and type of the bid.",
  },
  method: [
    {
      step: "1",
      title: "Catch the bid",
      body: 'Notice the small reach before you file it as noise: a comment, look, joke, update, complaint, question, link, photo, sigh, or "you know what happened?" Indirect bids are often the ones being tested for safety, so the quiet ones matter most.',
    },
    {
      step: "2",
      title: "Classify it lightly",
      body: "Ask, quietly, what is being reached for: attention, celebration, comfort, practical help, shared humour, reassurance, or simple presence. You are not diagnosing. You are aiming your response so it matches the signal.",
      examples: [
        { label: "Win", text: '"Nice. What changed?"' },
        {
          label: "Concern",
          text: '"I hear a concern under that. What should we not miss?"',
        },
        { label: "Presence", text: '"Show me. What do you like about it?"' },
      ],
    },
    {
      step: "3",
      title: "Turn toward visibly",
      body: "Shift eyes, voice, posture, or message response enough that the person knows the bid was received. In live conversation, respond within the next beat if you can. The visible turn is often more important than the words.",
    },
    {
      step: "4",
      title: "Give one matching response",
      body: "One move, matched to the type: acknowledge, join, ask a light follow-up, celebrate, validate, or set a respectful timing boundary. Small bid, small real response. Important bid, a slower one. Boundary-violating bid, a respectful limit.",
      examples: [
        {
          label: "Live",
          text: "A look plus one sentence, within the next beat.",
        },
        {
          label: "Digital",
          text: "Send a real signal, not an empty reaction, when the bid is relational.",
        },
        {
          label: "Busy",
          text: '"I want to hear this, but I\'m not fully here for five minutes."',
        },
      ],
    },
    {
      step: "5",
      title: "Calibrate, then close or extend",
      body: "If they open up, continue. If timing is poor, park it cleanly and return when you said you would. If you misread it, repair without defensiveness. Autonomy line: you are responding to an invitation, not taking ownership of someone's attention or emotion.",
    },
  ],
  liveThreadClues: [
    "a sigh or a loaded pause",
    "a joke or a light tease",
    "a side comment or a small complaint",
    'a photo, a link, or "look at this"',
    '"you know what happened?"',
    "a tiny update or status share",
    '"I don\'t know if this matters, but..."',
    "a glance up, or catching your eye",
  ],
  depthDial: [
    {
      depth: "Minimal",
      useWhen: "the bid is small, quick, or just testing contact",
      phrase: '"I saw that. Nice."',
    },
    {
      depth: "One follow-up",
      useWhen: "the bid carries a little feeling or meaning",
      phrase: '"That sounds like it mattered. What happened?"',
    },
    {
      depth: "Full turn",
      useWhen: "there is real effort, vulnerability, or a genuine win",
      phrase: '"That sounds like a real win. What part felt best?"',
    },
    {
      depth: "Park and return",
      useWhen: "you cannot respond well right now",
      phrase: '"I want to hear this properly. Can we come back at 3?"',
    },
  ],
  commonMistakes: [
    {
      mistake: "Ignoring tiny signals as inefficient",
      soundsLike: "Reading the message and saying nothing.",
      better: '"I saw this. What mattered most to you here?"',
    },
    {
      mistake: "Over-entering every bid",
      soundsLike: "Turning a quick share into a full emotional meeting.",
      better:
        "A warm acknowledgement and one light follow-up, then let it rest.",
    },
    {
      mistake: "Stock warmth that misses the signal",
      soundsLike: '"That\'s nice." Said to news that clearly stung.',
      better: '"That sounds like it actually stung. What happened?"',
    },
    {
      mistake: "Advice too early",
      soundsLike: '"Here\'s what you should do..." before they finish.',
      better: '"Before I jump in. What did you want me to notice?"',
    },
    {
      mistake: "Making the bid about yourself",
      soundsLike: '"That reminds me of the time I..."',
      better: '"Tell me more about yours first."',
    },
    {
      mistake: "Dismissive digital minimalism",
      soundsLike: "A bare thumbs-up on an effortful, vulnerable message.",
      better:
        '"That clearly took a lot. Give me a little time to reply properly."',
    },
    {
      mistake: "Skipping the repair after a miss",
      soundsLike: "Pretending you didn't miss it.",
      better: '"I missed that because I was distracted. Say it again?"',
    },
  ],
  recoveryPhrases: [
    "I missed that. Say it again. I want to catch it.",
    "I was distracted and gave you nothing back. What were you showing me?",
    "I treated that as small. It sounds like it mattered.",
    "That came out too abrupt. I do want to hear the point.",
    "I may be making this bigger than you meant. What kind of response did you want?",
    "I jumped to fixing. Let me first understand why this mattered.",
    "I care about this, and I need a clear time boundary. I can give you ten minutes after lunch.",
    "I'm not ignoring you. I'm just not available for this level of conversation right now.",
  ],
  bestRecoveryLine:
    "I treated that as small, but it wasn't small to you. I'm listening now.",
  chains: [
    {
      label: "Live social warmth",
      sequence:
        "TC010 Warm presence → TC082 Turn-toward bids → TC039 Common-ground discovery",
      example: [
        "They make a small show-and-tell bid.",
        'You: "Show me. What am I looking at?"',
        'If they brighten, explore the overlap: "Wait, you\'re into this too?"',
      ],
    },
    {
      label: "Professional effort signal",
      sequence:
        "TC082 Turn-toward bids → TC018 Specific appreciation → TC011 Summary check",
      example: [
        "They mention a small win or some friction.",
        'You: "That sounds like it took persistence. What changed?"',
        "Name the specific effort, then confirm the takeaway together.",
      ],
    },
    {
      label: "Digital repair",
      sequence:
        "TC082 Turn-toward bids → TC021 Autonomy release → TC072 Low-pressure invitation",
      example: [
        "A message sat unanswered and the sender may feel ignored.",
        'You: "I saw this late. I do want to respond to what you were showing me."',
        'Reopen without pressure: "No rush if the moment has passed."',
      ],
    },
    {
      label: "Boundary plus warmth",
      sequence:
        "TC082 Turn-toward bids → TC013 Clean request → TC021 Autonomy release",
      example: [
        "A bid arrives at a bad time.",
        "You: \"I want to hear it properly. I can't while I'm presenting. Come back at 2?\"",
        "Honour the return, then leave the next step genuinely optional.",
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC010",
      reason:
        "General warmth vs. responding to a specific reach: if there is a small bid, use TC082. If the whole interaction needs a calm, friendly baseline, use TC010 (Warm presence).",
    },
    {
      id: "TC012",
      reason:
        "TC082 is a small turn. TC012 (Full-attention signal) is proof of undivided attention. Use TC012 when divided attention would damage trust.",
    },
    {
      id: "TC016",
      reason:
        "When the bid is a win, chain into TC016 (Active-constructive responding) to celebrate it properly, rather than treating every turn-toward as a celebration.",
    },
    {
      id: "TC018",
      reason:
        "When the bid carries visible effort or care, add one specific appreciation (TC018) instead of generic warmth.",
    },
    {
      id: "TC024",
      reason:
        "TC024 (Warm opening) starts a thread. TC082 responds once someone has already reached. Use TC024 before the thread, TC082 once they bid.",
    },
    {
      id: "TC072",
      reason:
        "After turning toward, offer an opt-in next step with TC072 (Low-pressure invitation), invitation without obligation, rather than treating the bid as permission to extend.",
    },
  ],
};
