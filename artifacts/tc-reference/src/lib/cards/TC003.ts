import type { CardData } from "../card-types";

export const TC003: CardData = {
  pdfUrl: "cards/TC003/TC003_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC003/TC003_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC003/TC003_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC003/TC003_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC003/TC003_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC003/TC003_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC003/TC003_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC003/TC003_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC003",
  whyItWorks:
    "Comment-before-question is the habit of adding one short, honest reaction to what someone just said before you ask your next question, so they feel met rather than interrogated. Because they can tell you took in what they already said, the question lands as interest instead of a demand, and they answer more openly.",
  whatItIsNot: [
    "It is not padding, flattery, therapy-speak, fake intimacy or a trick to earn a question. The comment must be true, brief and connected.",
    "It is not a licence to keep talking. If the person resists, shortens their answers or redirects, release the technique and follow them.",
  ],
  overview: {
    coreFormula: [
      "Hear the content → make one relevant comment → ask one question → stop and listen.",
      "Short form: notice → name or respond → invite → calibrate → release.",
      '"That sounds like a big shift. What made you decide?"',
      '"That\'s a lot to weigh up. Which part mattered most?"',
      '"Sounds like it came after some thought. What tipped it?"',
    ],
    minimumViableMove:
      'Say one honest comment, then ask one clean question: "That sounds like a big shift. What made you decide?"',
    impact: "Medium",
    difficulty: "Easy-Medium",
    misuse:
      "The main failure mode is adding a fake or overlong comment that feels like a scripted preamble before an interrogation.",
    bestFor: [
      "Meeting someone new",
      "Following up on a story",
      "Professional discovery without sounding like a checklist",
      "Digital messages where a bare question feels abrupt",
      "Interviews or supervision where you need specifics",
      "Softening a pointed or sensitive question",
    ],
  },
  notFor: [
    "The situation needs a direct, urgent answer",
    "The comment would be fake",
    "You are already stacking several questions",
    "They have asked for a concise, straight answer",
    "Physical safety or an emergency takes priority",
  ],
  phraseBank: [
    {
      id: "quick-openers",
      label: "Quick openers",
      tag: "Short comment + question",
      tone: "Quick",
      phrases: [
        "That's a big shift. What changed?",
        "Makes sense. What tipped it?",
        "Big call. How come?",
        "That's interesting. Why that one?",
        "Sounds full-on. What was the hardest part?",
        "That's a lot. What happened next?",
        "Fair enough. What made it click?",
        "Nice. What got you into it?",
      ],
    },
    {
      id: "social-rapport",
      label: "Social & rapport",
      tag: "Warm reactions in casual chat",
      tone: "Warm",
      phrases: [
        "That sounds like a big shift. What changed for you?",
        "That's a strange spot to be in. How did you handle it?",
        "I can see why that stuck with you. What happened next?",
        "That sounds like it mattered. What made it feel that way?",
        "You lit up talking about that. What do you love about it?",
        "That sounds like a lot to sit with. What was the best part?",
        "I like that you went for it. What made you take the leap?",
        "That's a good story. What's the bit you usually leave out?",
      ],
    },
    {
      id: "work-discovery",
      label: "Work & discovery",
      tag: "Meetings, clients, supervision",
      tone: "Professional",
      phrases: [
        "That's useful context. What was the main constraint?",
        "That sounds like a major transition. What drove it?",
        "That's a meaningful trade-off. How did you land on it?",
        "That's a helpful way to frame it. What would good look like from here?",
        "Sounds like the timeline was the pressure. What gave first?",
        "That's a fair concern. What would need to change to fix it?",
        "That's a big call for the team. What was the deciding factor?",
        "Good to know the history. What's the part you'd do differently?",
      ],
    },
    {
      id: "getting-specifics",
      label: "Getting to the specifics",
      tag: "Comment, then a clear ask",
      tone: "Direct",
      phrases: [
        "That's the crux of it. What exactly are you asking me to decide?",
        "That's clear enough. What do you need from me, and by when?",
        "That's a big claim. What's the evidence you're leaning on?",
        "Fair point. What specifically would you change first?",
        "That matters. What's the one thing that has to be true for this to work?",
        "Understood. Which option are you actually leaning towards?",
        "That's the sticking point. What's stopping you deciding today?",
        "Right, that's the real issue. What outcome do you want here?",
      ],
    },
    {
      id: "softening-recovery",
      label: "Softening & sensitive ground",
      tag: "Acknowledge before you ask",
      tone: "Repair",
      phrases: [
        "That sounds like it wasn't easy to talk about. Can I ask what the turning point was?",
        "I don't want to poke a sore spot. Is it okay to ask what happened?",
        "That clearly landed hard. What did you need at the time?",
        "I might be reading this wrong. What did you actually mean by that?",
        "That came out blunter than I intended. What's the part I'm missing?",
        "No pressure at all. If you're up for it, what changed things?",
        "I can tell this is delicate. Where would you rather I didn't push?",
        "Take your time. What feels most important for me to understand?",
      ],
    },
    {
      id: "conflict-pressure",
      label: "Conflict & pressure",
      tag: "Neutral observation, then impact",
      tone: "High-stakes",
      phrases: [
        "I can see this really frustrated you. What did it cost you on your end?",
        "That clearly hit a nerve. What would make this feel fairer to you?",
        "We're both wound up. What's the thing you most need me to get?",
        "This has been sitting between us a while. What do you want to be different?",
        "I hear how serious this is for you. What's the impact I'm not seeing?",
        "That's a strong reaction, and probably a fair one. What set it off?",
        "Something in that clearly stung. What crossed a line for you?",
        "I don't want to make this worse. What would actually help right now?",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "You're about to ask a question",
      action:
        "Add one true comment first, unless urgency demands a direct answer.",
      phrase: '"That\'s a big shift. What made you decide?"',
    },
    {
      condition: "The comment would be fake",
      action:
        "Skip it and ask the question plainly. A false comment is worse than none.",
      phrase: '"Can I ask what changed?"',
    },
    {
      condition: "You've already asked a question",
      action: "Don't stack another. Wait until they've finished answering.",
      phrase: "",
    },
    {
      condition: "They gave a short, closed answer",
      action: "Lower the pressure or change direction. Don't push harder.",
      phrase: '"No need to get into it. I was just curious."',
    },
    {
      condition: "It's a tense or emotional moment",
      action: "Keep the comment neutral and ask about impact, not motive.",
      phrase: '"I can see it mattered. What did you need at the time?"',
    },
    {
      condition: "They corrected your frame",
      action: "Take the correction, drop the technique, and just follow them.",
      phrase: '"Fair enough, say more."',
    },
  ],
  ladder: [
    {
      weak: "Why did you do that? (A bare question can sound cross-examining.)",
      better:
        "That's a big choice. Why did you do it? (Adds context, but still slightly blunt.)",
      best: "That's a big choice. What made it feel like the right move? (Warmer and easier to answer.)",
    },
    {
      weak: "What's the budget? (Lands as a demand.)",
      better:
        "Budgets are always tight on these. What's the budget? (Softer, but generic.)",
      best: "Budget's usually the hard part of these. Where does it need to land for this to work? (Invites the real answer.)",
    },
    {
      weak: "Are you okay? (Easy to bat away with 'fine'.)",
      better: "You seem a bit off. Are you okay? (Names it, but still yes/no.)",
      best: "You've gone quiet since that meeting. What's sitting with you? (Specific, and opens a door.)",
    },
  ],
  scenarios: [
    {
      situation: "First date or social chat",
      move: "React briefly to their story before asking about it, so it reads as interest, not vetting.",
      phrase: '"That\'s a great way to spend a weekend. What got you into it?"',
    },
    {
      situation: "Interview or supervision",
      move: "Signal you followed their point before asking for specifics.",
      phrase:
        '"That\'s a useful bit of context. What was the constraint you were working around?"',
    },
    {
      situation: "Text or DM",
      move: "Add one contextual sentence so a bare question doesn't read as abrupt.",
      phrase: '"That\'s a lot to land in one week. What was the hardest part?"',
    },
    {
      situation: "Conflict or tension",
      move: "Offer a neutral observation before asking about impact. Keep any judgement out of the comment.",
      phrase:
        '"I can see this really got to you. What did it cost you on your side?"',
    },
    {
      situation: "Networking",
      move: "Validate the interest before asking how, so it doesn't feel transactional.",
      phrase:
        '"That sounds like a genuinely hard problem to work on. How did you get into it?"',
    },
    {
      situation: "Catching up with a friend",
      move: "Name the shift you heard before asking them to unpack it.",
      phrase:
        '"That\'s a big change since we last spoke. How are you actually finding it?"',
    },
  ],
  calibration: {
    working: [
      "They answer with more detail than the question asked for.",
      "They don't tense or get defensive at the question.",
      "The exchange feels smoother than question-answer-question.",
      "They pick up the thread and keep going on their own.",
      "They ask you something back.",
      "Their tone warms or slows down.",
      "They correct a detail while still staying engaged, rather than shutting down.",
    ],
    adjust: [
      "They give shorter answers than before.",
      "They look tense or guarded after the question.",
      "They reword or correct the frame you offered.",
      "They go quiet or change the subject.",
      "You notice your comment was longer than their reply.",
      "You've asked twice without them finishing an answer.",
      "When any of these show up: shorten the comment, lower the intensity, or drop the technique and just listen.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the moments",
      task: "Through today, catch three times someone shared something you could have reacted to before asking a question. Jot each one down. You're only training your eye for the cue.",
    },
    {
      day: "Day 2",
      title: "Write the minimum move",
      task: "For each of yesterday's three moments, write the shortest honest comment plus one clean question you could have said.",
    },
    {
      day: "Day 3",
      title: "Weak → better → best",
      task: "Take one bare question you ask often. Write it three ways: weak (bare), better (add context), best (warm and easy to answer).",
    },
    {
      day: "Day 4",
      title: "Say it, then shorten it",
      task: "Say your best lines aloud twice, then cut each by about a third until only the true part is left.",
    },
    {
      day: "Day 5",
      title: "One live rep",
      task: "In a low-stakes conversation, use the move once (one comment, one question) then stop and listen. Note what the person did next.",
    },
    {
      day: "Day 6",
      title: "Calibrate",
      task: "Use it two or three times today. For each, record whether they expanded, corrected, softened, shortened or redirected.",
    },
    {
      day: "Day 7",
      title: "Recover on purpose",
      task: 'Let one question come out too blunt on purpose, then use a recovery line ("That came out more like an interview than I meant") and notice how the moment resets.',
    },
  ],
  checklist: [
    "Did I catch the right moment to comment, or force one?",
    "Was my comment true, or just padding to soften the question?",
    "Did I keep it to one comment and one question?",
    "Did I leave their autonomy intact, no disguised judgement or pressure?",
    "Did I stop after one move instead of overusing it?",
    "Did the exchange feel easier, or more self-conscious?",
  ],
  example: {
    without: [
      'Them: "I quit the course."',
      'You: "Why?"',
      'Them: "It just wasn\'t right."',
      "Why it's weak:",
      "the bare question reads as a challenge",
      "they have to defend a decision instead of explaining it",
      "you get a closed, guarded answer",
      "the conversation stalls after one exchange",
    ],
    with: [
      'Them: "I quit the course."',
      'You: "That\'s a big decision. What changed?"',
      'Them: "I realised I hated the practical work."',
      'You: "That sounds like it came after some thought, not a random impulse. What was the moment it became obvious?"',
      'Them: "The placement, honestly. Two weeks in and I knew."',
      'You: "That\'s a hard thing to admit to yourself mid-course."',
      'Them: "It was. But better than three more years of it."',
      "Why this works:",
      "the comment shows you took in the decision before probing it",
      "the question asks how it happened, not just why, so it invites the story",
      "one comment, one question, nothing stacked",
      "they open up instead of defending",
    ],
    note: "The poor version interrogates. The advanced version reacts first, then asks, and the person keeps talking.",
  },
  influencePayoff: {
    feeling: '"They actually took in what I said before asking for more."',
    principle:
      "People become more receptive to you when they feel heard first.",
    gains: [
      "Questions become warmer and easier to answer.",
      "The other person doesn't have to defend, decode or rescue the conversation.",
      "Bare questions stop reading as challenges.",
      "Relevance goes up: your question is visibly tied to what they just said.",
      "Trust and conversational ease build without any exaggeration.",
      "The exchange flows instead of turning into question-answer-question.",
    ],
    whyMostFail: [
      "They add a fake or overlong comment that feels like a scripted preamble before interrogation.",
      "They stack two or three questions after the comment, so it stops feeling like listening.",
      'They lean on generic filler like "that\'s interesting" until it means nothing.',
      "They slip a judgement into the comment, so it lands as criticism, not interest.",
    ],
  },
  fieldTip: {
    headline: "One real comment buys one clean question.",
    body: "The comment isn't there to be clever or kind. It's there to show you actually heard them before you ask for more. Keep it to a phrase, keep it true, then ask one thing and stop.",
    example: '"That\'s a big shift. What made you decide?"',
    dont: "Don't manufacture warmth you don't feel: a fake comment is more obvious than a bare question.",
    do: "Do let the comment be small. A five-word reaction is plenty.",
  },
  method: [
    {
      step: "1",
      title: "Notice the cue",
      body: "Listen for the moment worth reacting to: a decision, a change, a surprise or a strong feeling they've just shared. That's what earns a comment before your question.",
      examples: [
        { label: "They say", text: '"I ended up moving back home."' },
        {
          label: "The cue",
          text: "A big change, said plainly, and worth acknowledging",
        },
      ],
    },
    {
      step: "2",
      title: "Choose the smallest useful move",
      body: "Pick the shortest true reaction, not the cleverest one. A five-word comment does the job. A paragraph turns it into a performance.",
      examples: [
        {
          label: "Too much",
          text: '"Wow, that must have been such a complicated, emotional thing to navigate..."',
        },
        { label: "Enough", text: '"That\'s a big move. What prompted it?"' },
      ],
    },
    {
      step: "3",
      title: "Say it in plain language",
      body: "Use ordinary adult speech. The comment should sound like something you'd actually say, not a line from a script.",
      examples: [
        {
          label: "Scripted",
          text: '"I hear that this was significant for you."',
        },
        {
          label: "Natural",
          text: '"That sounds like it mattered. What made it feel that way?"',
        },
      ],
    },
    {
      step: "4",
      title: "Ask one question, then stop",
      body: "Add a single clean question and let it land. Don't stack a second one: give them room to answer the first.",
      examples: [
        { label: "Stacked", text: '"Where was it? Who with? How long?"' },
        { label: "One clean question", text: '"What was the hardest part?"' },
      ],
    },
    {
      step: "5",
      title: "Watch and release",
      body: "Read the response. If they expand, stay with it. If they shorten, tense up, correct your frame or move on, drop the technique and just follow them.",
      examples: [
        {
          label: "It's landing",
          text: "they answer with more than you asked for",
        },
        { label: "Ease off", text: '"No pressure, we can leave it there."' },
      ],
    },
  ],
  liveThreadClues: [
    '"I just..." / "I finally..." A change or a relief worth naming',
    '"I ended up..." An unexpected path',
    '"It turned out..." A surprise',
    '"I decided to..." A choice they might want to explain',
    '"We\'ve been..." An ongoing situation with weight',
    "Any decision, transition or strong reaction they've just handed you",
  ],
  depthDial: [
    {
      depth: "Light",
      useWhen: "early or casual, so keep it feather-light",
      phrase: '"Nice. What got you into it?"',
    },
    {
      depth: "Warm",
      useWhen: "rapport is forming",
      phrase: '"That sounds like it mattered. What made it feel that way?"',
    },
    {
      depth: "Reflective",
      useWhen: "they've shared something with weight",
      phrase: '"That sounds like it took a toll. What was the hardest part?"',
    },
    {
      depth: "Interpretive",
      useWhen: "trust is solid and you've earned a read: hold it loosely",
      phrase:
        '"That sounds like it came after real thought, not impulse. What was the moment it clarified?"',
    },
  ],
  commonMistakes: [
    {
      mistake: "The comment is longer than the question",
      soundsLike: "A thirty-second preamble in front of a one-line question",
      better:
        'Keep the comment to a phrase: "That\'s a big shift. What changed?"',
    },
    {
      mistake: "Generic filler on repeat",
      soundsLike:
        '"That\'s interesting." ... "That\'s interesting." ... "Interesting."',
      better:
        "Say something only you'd say: \"That's the opposite of what I expected. What shifted it?\"",
    },
    {
      mistake: "Stacking questions after the comment",
      soundsLike: '"Nice. Where was it? Who with? How long?"',
      better:
        'One comment, one question, then stop: "Sounds fun. Who talked you into it?"',
    },
    {
      mistake: "Making the interpretation too certain",
      soundsLike: '"So you clearly hated it."',
      better: 'Hold it loosely: "Sounds like it wore you down. Is that fair?"',
    },
    {
      mistake: "Sneaking a judgement into the comment",
      soundsLike: '"That was a risky move. Why\'d you do it?"',
      better:
        'Keep the comment neutral: "That was a bold call. What made it feel right?"',
    },
    {
      mistake: "Faking the comment to earn the question",
      soundsLike: "A warm-sounding line you don't actually mean",
      better:
        "If nothing genuine comes to mind, just ask the question plainly.",
    },
  ],
  recoveryPhrases: [
    "That came out more like an interview than I meant.",
    "Let me put that more simply.",
    "No need to answer that if it's too much detail.",
    "I'm curious, but we can leave it there.",
    "Ignore the preamble. What I'm really asking is simpler.",
    "I got ahead of myself there. No pressure to get into it.",
    "That was a clumsy way to ask. Let me try again.",
    "Forget how I framed it. What's the honest version?",
  ],
  bestRecoveryLine: "That came out more like an interview than I meant.",
  chains: [
    {
      label: "Comment → follow the answer",
      sequence: "TC003 → TC001",
      example: [
        'Them: "We finally moved house."',
        "You: \"That's a huge job. How's it feeling now it's done?\" (TC003)",
        'Them: "Exhausting but right."',
        'You: "Exhausting how? The logistics, or the goodbyes?" (TC001)',
      ],
    },
    {
      label: "Comment → offer two options",
      sequence: "TC003 → TC034",
      example: [
        'Them: "I\'m rethinking the whole plan."',
        "You: \"That's a big rethink. What's driving it?\" (TC003)",
        'Them: "A bit of everything."',
        'You: "Is it more the timing, or the direction?" (TC034)',
      ],
    },
    {
      label: "Comment → check the summary",
      sequence: "TC003 → TC011",
      example: [
        'You: "That\'s a lot of moving parts. What matters most to get right?" (TC003)',
        "Them: [lays out the priorities]",
        'You: "So the deadline is fixed and the budget can flex a little. Have I got that right?" (TC011)',
      ],
    },
    {
      label: "Comment → reflect the meaning",
      sequence: "TC003 → TC040",
      example: [
        'You: "That sounds like a real turning point. What made it land?" (TC003)',
        "Them: [explains]",
        'You: "So it wasn\'t the job itself. It was finally trusting your own read on it." (TC040)',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC001",
      reason:
        "TC001 Live thread follow-ups follows the most alive part of their answer. TC003 shapes the question you ask next so it doesn't land abruptly. Comment first (TC003), then follow the thread (TC001).",
    },
    {
      id: "TC033",
      reason:
        'TC033 Minimal encouragers uses tiny signals ("mm", "go on") to keep them talking. TC003 adds one substantive comment before a question. Use TC033 to sustain, TC003 to open.',
    },
    {
      id: "TC034",
      reason:
        "TC034 Two-option questions narrows the answer to two choices. TC003 warms the question before you ask it. Chain them when someone is vague.",
    },
    {
      id: "TC038",
      reason:
        "TC038 Conversation threading reopens or links earlier threads. TC003 makes the question that reopens a thread feel less abrupt.",
    },
    {
      id: "TC011",
      reason:
        "TC011 Summary check reflects back a summary to confirm you've understood. TC003 is the lighter opener that earns the question. Comment, ask, then confirm with TC011.",
    },
    {
      id: "TC040",
      reason:
        "TC040 Meaning reflection reflects the deeper meaning back. TC003 is the everyday version that softens a single question. Reach for TC040 once the conversation has deepened.",
    },
  ],
};
