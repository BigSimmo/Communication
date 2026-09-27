import type { CardData } from "../card-types";

export const TC025: CardData = {
  pdfUrl: "cards/TC025/TC025_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC025/TC025_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC025/TC025_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC025/TC025_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC025/TC025_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC025/TC025_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC025/TC025_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC025/TC025_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC025",
  whyItWorks:
    "Exact word pickup means noticing the exact word or phrase someone chose (usually a vivid adjective, metaphor, label, contrast or repeated phrase) and reusing that wording back to them instead of swapping in your own paraphrase. It works because a person's own word usually carries the meaning they care about most. Reflecting it back tells them you were listening to them specifically, not just to the gist. Keeping their word intact preserves the nuance and hands you the next natural thread, so the conversation deepens without turning into an interview.",
  whatItIsNot: [
    "It is not mechanical parroting.",
    "It is not correcting their word choice.",
    "It is not quoting them in a mocking or forensic way.",
    "It is not using their words as evidence against them.",
    "It is not repeating every sentence. Pick the one word or phrase that seems to carry the energy.",
  ],
  overview: {
    coreFormula: [
      "Exact phrase → small comment → natural follow-up.",
      "You called it 'oddly freeing', freeing how?",
      "'Hidden rules' is a good phrase. What are you noticing?",
      "When you say 'messy', do you mean emotionally or logistically?",
      "'Not quite right' sounds specific. What was off?",
    ],
    minimumViableMove:
      "Pick one distinctive word they used and ask '[word] how?' or 'What do you mean by [word]?'",
    impact: "Medium",
    difficulty: "Easy-Medium",
    misuse:
      "It fails when you parrot too much or reuse the word with a mocking or forensic tone: echoing whole sentences, or quoting their words back as evidence ('but you said...') rather than curiosity. Repeating a private, shame-laden or joking word directly is the quickest way to make someone feel caught rather than heard.",
    bestFor: [
      "Keeping a conversation going without asking generic questions",
      "Deepening small talk naturally",
      "Making someone feel precisely understood",
      "Networking and professional conversations where nuance matters",
      "Conflict, when you want to understand the exact concern",
      "Dating or social chemistry, when their wording reveals personality",
      "Digital and text replies where one exact phrase can create warmth",
      "Building callbacks for later in the conversation",
    ],
  },
  notFor: [
    "The word is too private, shame-laden, traumatic, or potentially embarrassing to repeat directly",
    "They used the word jokingly and repeating it would sound like mockery",
    "You are tempted to use their wording as evidence against them",
    "You have already mirrored or repeated several words and it is starting to feel mechanical",
    "The person seems guarded, rushed, or annoyed by being analysed",
    "A direct response, apology, boundary, or answer is more appropriate than further exploration",
  ],
  phraseBank: [
    {
      id: "quick",
      label: "Quick",
      tag: "Short one-liners",
      tone: "Quick",
      phrases: [
        "Weird how?",
        "Messy how?",
        "Freeing in what way?",
        "What do you mean by 'stuck'?",
        "When you say 'intense', what kind of intense?",
        "What made it feel 'off'?",
        "'Heavy' how?",
        "Say more about 'clunky'?",
      ],
    },
    {
      id: "warm",
      label: "Warm",
      tag: "Curious and warm",
      tone: "Warm",
      phrases: [
        "That word sounds like it matters.",
        "'Oddly freeing' is interesting. What made it feel that way?",
        "I want to ask about the word you used there.",
        "That sounds more specific than it first seemed.",
        "There's something in that phrase I want to understand.",
        "You said 'relief'. I'd love to hear more about that.",
      ],
    },
    {
      id: "professional",
      label: "Professional",
      tag: "Work and decisions",
      tone: "Professional",
      phrases: [
        "When you say 'misaligned', what's the part that isn't lining up?",
        "'Hidden constraints' sounds important. What constraints are you seeing?",
        "You described it as 'fragile'. Where's the fragility?",
        "What does 'cleaner' look like in this context?",
        "When you say 'blocked', is that a people issue, a process issue, or timing?",
        "You called the plan 'ambitious', ambitious where, specifically?",
      ],
    },
    {
      id: "conflict-softening",
      label: "Conflict-softening",
      tag: "Understand the concern",
      tone: "Repair",
      phrases: [
        "When you say it felt 'dismissive', what did that look like from your side?",
        "'Unfair' is the key word I'm hearing. What part felt unfair?",
        "I don't want to miss your meaning. When you say 'ignored', what was the moment that felt like that?",
        "'Pressured' matters here. What made it feel pressured?",
        "Help me understand your word 'disrespected'. What was the part that landed that way?",
      ],
    },
    {
      id: "social-dating",
      label: "Social / dating",
      tag: "Chemistry and personality",
      tone: "Warm",
      phrases: [
        "'Chaotic but fun' is a strong phrase. What happened?",
        "You said 'weirdly wholesome'. I need that story.",
        "'Comfortably awkward' is very specific. Explain.",
        "You called it 'your kind of strange'. What kind is that?",
        "That phrase has personality. What do you mean by it?",
      ],
    },
    {
      id: "digital-text",
      label: "Digital / text",
      tag: "One exact phrase back",
      tone: "Quick",
      phrases: [
        "'Oddly freeing' caught my eye, freeing how?",
        "When you say 'messy', do you mean emotionally or logistically?",
        "'Hidden rules' is a great phrase. What are the rules?",
        "That 'not quite right' bit sounds important.",
        "Curious what you mean by 'strangely calm'.",
      ],
    },
    {
      id: "high-status-busy",
      label: "High-status / busy person",
      tag: "Crisp and to the point",
      tone: "Direct",
      phrases: [
        "When you say 'risk', which risk matters most?",
        "You mentioned 'quality drift'. Where are you seeing it?",
        "'Decision latency' is the phrase I'm picking up. What's causing the delay?",
        "When you say 'not worth it', is the issue effort, timing, or payoff?",
        "You said 'good enough'. Good enough for now, or good enough to ship?",
      ],
    },
    {
      id: "shy-guarded",
      label: "Shy / guarded person",
      tag: "Optional and low-pressure",
      tone: "High-stakes",
      phrases: [
        "You used the word 'strange', only if you want to, strange how?",
        "I might be picking up the wrong word, but 'tiring' stood out.",
        "No pressure to go into it, but what did you mean by 'heavy'?",
        "You said 'fine-ish'. That sounds like there's a caveat.",
        "'Draining' stood out. You don't have to unpack it, but I noticed.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "They expand warmly",
      action:
        "Reflect the meaning, then ask one more follow-up if the energy is still there.",
      phrase: "So it was less about the work and more about the people?",
    },
    {
      condition: "They correct your interpretation",
      action: "Accept the correction quickly and carry on with their version.",
      phrase: "Got it, not X, more Y.",
    },
    {
      condition: "They seem mocked or analysed",
      action: "Repair your tone and name your intent.",
      phrase: "I meant that as curiosity, not a gotcha.",
    },
    {
      condition: "They give a vague answer",
      action: "Offer two gentle options rather than pushing.",
      phrase: "Do you mean X, or more Y?",
    },
    {
      condition: "They become vulnerable",
      action: "Slow down, reflect, and don't reach for a joke too quickly.",
      phrase: "That sounds like it mattered.",
    },
    {
      condition: "They ask you back",
      action: "Answer briefly, then hand the thread back to them.",
      phrase: "For me it was similar, but what was it like for you?",
    },
    {
      condition: "They say it was just a throwaway word",
      action: "Drop it gracefully and move to something lighter.",
      phrase: "Fair enough, no need to unpack it.",
    },
  ],
  ladder: [
    {
      weak: "How was it?",
      better: "What was it like?",
      best: "You called it 'oddly freeing', freeing how?",
    },
    {
      weak: "Why?",
      better: "Why did that matter?",
      best: "'Not quite right' sounds specific. What was off?",
    },
    {
      weak: "Tell me more.",
      better: "What happened next?",
      best: "'Hidden rules' is the phrase I want to ask about. What were the rules?",
    },
    {
      weak: "That sounds bad.",
      better: "That sounds frustrating.",
      best: "When you say it felt 'dismissive', what did that look like from your side?",
    },
    {
      weak: "Interesting.",
      better: "That's interesting.",
      best: "'A strange relief' is interesting. Was it relief because something ended, or because something became clearer?",
    },
  ],
  scenarios: [
    {
      situation: "Casual conversation",
      move: "Pick the unusual word and ask about it lightly, without making it a big deal.",
      phrase: "'Chaotic but fun' sounds like there's a story.",
    },
    {
      situation: "Professional conversation",
      move: "Use their exact words to clarify criteria, risk or constraints.",
      phrase: "When you say 'fragile', where is the fragility?",
    },
    {
      situation: "Conflict",
      move: "Pick up the complaint word without debating it.",
      phrase:
        "When you say it felt 'dismissive', what was the moment that landed that way?",
    },
    {
      situation: "Digital or text",
      move: "Quote one phrase briefly and ask a concise follow-up.",
      phrase: "'Strange relief' caught my eye, relief how?",
    },
    {
      situation: "High-status person",
      move: "Use their exact terminology to show you understand the frame.",
      phrase: "You mentioned 'quality drift'. Where is it showing up first?",
    },
    {
      situation: "Shy or guarded person",
      move: "Make it optional and low-pressure so there's an easy exit.",
      phrase: "You said 'heavy'. No pressure, but heavy how?",
    },
    {
      situation: "Dating or social chemistry",
      move: "Pick phrases with personality and respond playfully.",
      phrase: "'Your kind of strange' is a sentence that needs explaining.",
    },
  ],
  calibration: {
    working: [
      "They clarify the word with more detail.",
      "They say 'yes, exactly' or refine it.",
      "Their tone warms because you caught the nuance.",
      "They volunteer the story behind the phrase.",
      "They use the phrase again or build on it.",
      "The conversation feels more precise and alive.",
    ],
    adjust: [
      "They seem mocked, analysed, or put on the spot.",
      "They answer 'I don't know' or 'I just meant...' flatly.",
      "They correct you sharply, or go shorter and more guarded.",
      "You've repeated several words in a row, or the topic is too sensitive to echo.",
      "Switch from repeating their word to reflecting the meaning: 'That part sounds important.'",
      "Give them an exit: 'No need to unpack it if it was just a throwaway phrase.'",
      "Share a small contribution so it doesn't turn into an interview.",
      "Apologise if your tone came out mocking or analytical, then ask something lighter.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Notice the wording",
      task: "Through one day, spot a single distinctive word or phrase in each real conversation: a vivid adjective, metaphor, label or contrast. Just notice it. Don't act on it yet.",
    },
    {
      day: "Day 2",
      title: "Say the move aloud",
      task: "Say the minimum viable move aloud three times until it sounds natural: '[word] how?' and 'What do you mean by [word]?'",
    },
    {
      day: "Day 3",
      title: "Pick one up",
      task: "In one real conversation, pick up a single distinctive word with a short, natural question. Use it once only, and watch how they respond.",
    },
    {
      day: "Day 4",
      title: "Comment before the question",
      task: "Practise adding a light comment before the question: \"'Oddly freeing' is interesting. Freeing how?\" So it lands as curiosity, not an interview.",
    },
    {
      day: "Day 5",
      title: "Reflect the meaning",
      task: "After they explain, reflect the underlying point back in one sentence: 'So it was less about the work, more about the people.'",
    },
    {
      day: "Day 6",
      title: "Recover from a miss",
      task: "Deliberately over-read a phrase, then practise one recovery line out loud: 'I was picking up your word, not trying to pin you to it.'",
    },
    {
      day: "Day 7",
      title: "Use a callback",
      task: "Pick up a phrase early in a conversation, then return to it later, 'That sounds like another hidden-rules moment', and notice whether they feel remembered.",
    },
  ],
  checklist: [
    "Did I pick one word rather than repeat too much?",
    "Did my tone sound curious, not mocking?",
    "Did I ask from their frame rather than impose mine?",
    "Did I let them correct me?",
    "Did I contribute after one or two follow-ups, instead of only asking?",
    "Did the conversation become more precise or warmer?",
  ],
  example: {
    without: [
      "Person: The whole reorg has been oddly freeing, to be honest.",
      "You: Change is good. Everyone hates it at first, then it works out.",
      "Person: Yeah... I guess.",
      "Why it's weak:",
      "drops their word 'freeing' and replaces it with a cliché",
      "steers to your opinion instead of their experience",
      "gives them nothing specific to open up about",
      "the conversation flattens instead of deepening",
    ],
    with: [
      "Person: The whole reorg has been oddly freeing, to be honest.",
      "You: 'Oddly freeing' is interesting, freeing how?",
      "Person: I stopped waiting for permission on the small stuff.",
      "You: So it was less about the restructure and more about not needing sign-off?",
      "Person: Exactly. That's the part that actually changed.",
      "You: That makes sense. I've noticed the same thing when a layer of approval disappears.",
      "Why this works:",
      "reuses their exact word, so they feel precisely heard",
      "comments before questioning, so it isn't an interview",
      "reflects the underlying meaning back in their own language",
      "adds a small contribution instead of only asking",
    ],
    note: "The move is one word of theirs, held intact, then a light question, not a summary in your words.",
  },
  influencePayoff: {
    feeling: "They actually caught what I meant, not just the gist.",
    principle:
      "People open up more when they feel heard in their own words, not translated into yours.",
    gains: [
      "Makes people feel accurately heard, because you respond to the language they actually used rather than your own summary.",
      "Keeps the conversation natural, because their own wording hands you the next thread.",
      "Raises perceived social intelligence. You seem attentive to nuance, not merely polite.",
      "Helps people elaborate without feeling interrogated, because you ask from inside their frame.",
      "Creates useful callbacks later, so the interaction feels continuous and memorable.",
      "Preserves their nuance instead of flattening it into a generic paraphrase.",
    ],
    whyMostFail: [
      "They parrot whole sentences instead of picking the one word with energy.",
      "They reuse the word with a mocking or teasing tone, so it sounds performative.",
      "They quote it forensically ('earlier you said...') using the word to trap rather than understand.",
      "They only ask and never contribute, so it turns into an interrogation.",
    ],
  },
  fieldTip: {
    headline: "Use their words as handles, not hooks.",
    body: "A handle helps them open the door. A hook makes them feel caught. Reuse their word to clarify, respect and connect: never to pressure, corner or extract.",
    example:
      "They say 'It was technically fine, just off.' Pick up the live word: 'Off how?'",
    dont: "Quote their word back as evidence: 'But you said it was fine.'",
    do: "Hold their word lightly and ask from curiosity: 'Off how?'",
  },
  method: [
    {
      step: "1",
      title: "Listen for distinctive wording",
      body: "Notice the words that stand out: unusual adjectives, metaphors, labels, repeated words, contrasts, or phrases said with emphasis. These carry more of the person's real meaning than the sentence around them.",
      examples: [
        {
          label: "Words worth catching",
          text: "'oddly freeing', 'hidden rules', 'messy', 'not quite right', 'a weird kind of relief'",
        },
      ],
    },
    {
      step: "2",
      title: "Choose one word or phrase",
      body: "Don't pick up every interesting word. Choose the one that seems to hold emotion, meaning, identity, confusion, pride, tension or humour. One is enough.",
    },
    {
      step: "3",
      title: "Keep their word intact",
      body: "Use their actual wording before you translate it. That is what preserves the nuance. If they say 'boxed in', resist swapping it straight to 'restricted'. The picture is theirs, not yours.",
    },
    {
      step: "4",
      title: "Add a light comment or question",
      body: "Wrap the word in a small comment so it doesn't feel like an interview. The comment shows you noticed. The question invites them to expand.",
      examples: [
        {
          label: "Comment + question",
          text: "'Oddly freeing' is interesting, freeing how?",
        },
        {
          label: "Comment + question",
          text: "'Hidden rules' is a good phrase. What are you noticing?",
        },
      ],
    },
    {
      step: "5",
      title: "Let them clarify or correct",
      body: "If they say 'not exactly', take the correction straight away. You're after accuracy, not proving your reading was right.",
      examples: [
        { label: "Accept the correction", text: "Got it, not X, more Y." },
      ],
    },
    {
      step: "6",
      title: "Reflect the meaning, then call back later",
      body: "Once they explain, reflect the underlying point in one sentence. Later in the conversation, return to the same phrase: a callback makes people feel remembered and understood.",
      examples: [
        {
          label: "Reflect",
          text: "So it was less about the work and more about not knowing the informal rules.",
        },
        {
          label: "Callback",
          text: "That sounds like another hidden-rules moment.",
        },
      ],
    },
  ],
  liveThreadClues: [
    "A vivid adjective: 'oddly freeing', 'strangely calm', 'fine-ish'",
    "A metaphor or image: 'boxed in', 'hidden rules', 'quality drift'",
    "A contrast: 'chaotic but fun', 'comfortably awkward'",
    "A word said with emphasis or repeated more than once",
    "A label they coined: 'your kind of strange', 'a weird kind of relief'",
    "A hedge that hints at more: 'not quite right', 'off', 'heavy'",
  ],
  commonMistakes: [
    {
      mistake: "Repeating too much",
      soundsLike: "Echoing whole sentences back at them.",
      better: "Pick the one word or phrase that carries the energy.",
    },
    {
      mistake: "Mocking tone",
      soundsLike: "'Oh, \"hidden rules\", is it?'",
      better:
        "Reuse the word with genuine curiosity, not a teasing or performative tone.",
    },
    {
      mistake: "Forensic quoting",
      soundsLike: "'Earlier you said X, so clearly...'",
      better: "Use their words to understand them, not to trap them.",
    },
    {
      mistake: "Over-interpreting",
      soundsLike: "'So by \"tired\" you mean emotionally abandoned.'",
      better: "Ask before interpreting: 'Tired how?'",
    },
    {
      mistake: "Correcting their word",
      soundsLike: "'Do you mean frustrated, not angry?'",
      better: "Let their word stand unless they ask for a better one.",
    },
    {
      mistake: "Using sensitive words too directly",
      soundsLike: "Repeating a shame-laden or painful word loudly, in public.",
      better: "Soften or generalise: 'That part sounds important.'",
    },
    {
      mistake: "Never contributing",
      soundsLike: "One exact-word question after another.",
      better:
        "After one or two, reflect or share a small relevant thought of your own.",
    },
  ],
  recoveryPhrases: [
    "I'm not trying to put words in your mouth. That word just sounded important.",
    "I may have over-read that phrase. What did you mean by it?",
    "That came out more analytical than I meant.",
    "I was picking up your word, not trying to pin you to it.",
    "No pressure to unpack it if it was just a throwaway phrase.",
    "Let me ask that more normally.",
    "I think I repeated that with the wrong tone. I meant it as curiosity.",
  ],
  bestRecoveryLine: "I was picking up your word, not trying to pin you to it.",
  chains: [
    {
      label: "Conversation flow chain",
      sequence:
        "Listen for the phrase → ask about the exact word → let them clarify → follow the new thread",
      example: [
        "Them: 'It's been messy.'",
        "You: 'Messy how. Emotionally or logistically?'",
        "Them: 'Logistically. Three people own the same task.'",
        "You: 'Ah, so it's an ownership tangle, not a people problem.'",
      ],
    },
    {
      label: "Rapport chain",
      sequence:
        "Warm comment → exact-word pickup → reflection → small self-disclosure → appreciation",
      example: [
        "'Chaotic but fun'. I love that. Chaotic how?",
        "'So the chaos was the good part.'",
        "'I'm the same at big gatherings, honestly.'",
        "'Good description, by the way.'",
      ],
    },
    {
      label: "Conflict chain",
      sequence:
        "Validate the concern → exact-word pickup → clarify the meaning → summarise accurately → respond",
      example: [
        "'I can see this matters.'",
        "'When you say it felt \"dismissive\", what was the moment that landed that way?'",
        "'So it was being talked over in the meeting, specifically.'",
        "'Let me make sure I've got that right before I respond.'",
      ],
    },
    {
      label: "Callback chain",
      sequence:
        "Exact-word pickup now → return to the phrase later → continuity and remembered detail",
      example: [
        "Early: \"'Hidden rules'. What are they?\"",
        "Later: 'That sounds like another hidden-rules moment.'",
        "The callback tells them you were still holding their words.",
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC001",
      reason:
        "Live thread follow-ups follows the most alive part of a whole utterance. Reach for it when continuity matters more than reusing one exact word.",
    },
    {
      id: "TC023",
      reason:
        "Loaded word follow-up picks up an emotionally charged word and asks what it carries. Use it when a charged word reveals the real issue, not just a vivid one.",
    },
    {
      id: "TC026",
      reason:
        "Tactical mirroring mirrors one to three key words and then pauses. Use it when you want to invite more with minimal steering, rather than adding a question.",
    },
    {
      id: "TC030",
      reason:
        "Echo plus question echoes a key phrase and adds one clean forward question. Use it when you need both acknowledgement and movement in the same beat.",
    },
    {
      id: "TC038",
      reason:
        "Conversation threading tracks and returns to the important thread across turns. Use it when the conversation has several branches to hold, not just one word.",
    },
  ],
};
