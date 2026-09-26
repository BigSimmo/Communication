import type { CardData } from "../card-types";

export const TC023: CardData = {
  pdfUrl: "cards/TC023/TC023_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet — the designed visual card.",
      href: "cards/TC023/TC023_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC023/TC023_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC023/TC023_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC023/TC023_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC023/TC023_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC023/TC023_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC023/TC023_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC023",
  whyItWorks:
    'A loaded-word follow-up picks up the one emotionally charged word someone just used — "weird", "intense", "messy", "freeing" — and asks about that exact word in a short, natural way. It works because that charged word is usually the doorway into the meaningful part of what they were saying, and inviting them to define it makes them feel precisely heard rather than merely answered.',
  whatItIsNot: [
    "It is not parroting every interesting word back at someone.",
    'It is not interrogating with a string of "why?" questions.',
    "It is not pretending to read hidden meaning from a single word.",
    "It is a precise curiosity move: notice the word that carries energy and invite them to define it.",
  ],
  overview: {
    coreFormula: [
      'Their word + "how?" — "Weird how?" / "Intense how?" / "Messy how?"',
      'Small comment first — "That sounds like the important word. Intense how?"',
      "Meaning check — \"When you say 'freeing', what do you mean?\"",
      'Two options — "Good-weird or bad-weird?" / "Exciting-intense or stressful-intense?"',
      "For a decision — \"When you say 'risky', is the concern timing, cost, or quality?\"",
    ],
    minimumViableMove:
      'Pick the word carrying the most emotional charge and ask "[word] how?" — "Weird how?", "Intense how?", "Messy how?", "Freeing how?"',
    impact: "Medium",
    difficulty: "Easy-Medium",
    misuse:
      "It fails when the echo sounds like a tactic, a challenge, or a therapy move — or when you keep echoing words to steer rather than to understand. The fix is a warm tone: ask once, let them answer, then reflect or contribute.",
    bestFor: [
      'Someone uses a vague but charged descriptor — "weird", "messy", "intense", "complicated", "freeing", "awkward", "surprisingly good".',
      "The conversation is drifting and you want a simple way to deepen it.",
      "You want the other person to keep talking without a broad, generic question.",
      "Someone hints at emotion but does not fully spell it out.",
      "Networking, dating, social conversation, leadership, coaching, conflict-softening and understanding before persuasion.",
      'Digital or text conversations where a short follow-up keeps momentum: "Good-weird or bad-weird?"',
    ],
  },
  notFor: [
    "They are giving short answers, rushed, distracted, or clearly not interested in expanding.",
    "The word is too private, painful or sensitive for the depth of the relationship.",
    "Your tone might sound sceptical, mocking or cross-examining.",
    "You have already used it several times and it is starting to feel like a technique.",
    "They need a direct answer, a decision, or practical help rather than more exploration.",
    'You are using the word as "evidence" to prove your interpretation rather than inviting their meaning.',
  ],
  phraseBank: [
    {
      id: "quick-openers",
      label: "Quick openers",
      tag: 'One-line "how?" follow-ups',
      tone: "Quick",
      phrases: [
        "Weird how?",
        "Intense how?",
        "Messy how?",
        "Complicated how?",
        "Awkward how?",
        "Different how?",
        "Unexpected how?",
        "Good-different or bad-different?",
      ],
    },
    {
      id: "warm-connecting",
      label: "Warm / connecting",
      tag: "Noticing the word with warmth",
      tone: "Warm",
      phrases: [
        "That word sounds like it carries a bit. What made it feel that way?",
        "You said 'intense' like there's a story there. Intense how?",
        "That sounds like the important word. What made it complicated?",
        "When you say it was 'strange', what was strange about it?",
        "I'm curious about the word you used there. What made it feel messy?",
      ],
    },
    {
      id: "social-dating",
      label: "Social / dating",
      tag: "Playful, charismatic openers",
      tone: "Warm",
      phrases: [
        "That sentence is doing a lot of work. 'Weird' how?",
        "Okay, 'surprisingly good' needs unpacking.",
        "You can't say 'wild' and then just move on.",
        "You said 'weirdly fun'. I like that phrase. Weirdly how?",
        "Good-chaos or absolutely-not-chaos?",
        "What kind of 'different' do you mean?",
        "That sounds like a story hiding in one word.",
        "When you say 'I'm particular', particular how?",
      ],
    },
    {
      id: "professional-leadership",
      label: "Professional / leadership",
      tag: "Clarifying the word for a decision",
      tone: "Professional",
      phrases: [
        "When you say 'risky', what risk are you most concerned about?",
        "You called it 'messy'. Is that a people issue, a process issue, or a timing issue?",
        "When you say 'not aligned', where exactly is the mismatch?",
        "You said 'unclear'. What part needs clarifying first?",
        "What makes this feel more complicated than it looks?",
      ],
    },
    {
      id: "conflict-softening",
      label: "Conflict-softening",
      tag: "Defusing a charged word",
      tone: "Repair",
      phrases: [
        "You said it felt 'dismissive'. What made it land that way?",
        "When you say 'unfair', what part feels most unfair?",
        "That word matters. What felt disrespectful about it?",
        "You used 'pressure'. Where did the pressure come from?",
        "I don't want to assume. What does 'not heard' mean from your side?",
      ],
    },
    {
      id: "digital-text",
      label: "Digital / text",
      tag: "Short follow-ups that keep momentum",
      tone: "Quick",
      phrases: [
        "Good-weird or bad-weird?",
        "Good-intense or bad-intense?",
        "What made it feel messy?",
        "When you say 'off', what felt off?",
        "That word seems important. What do you mean by it?",
        "Complicated in a practical way or emotional way?",
      ],
    },
    {
      id: "high-status-busy",
      label: "High-status / busy person",
      tag: "Cutting straight to the constraint",
      tone: "Direct",
      phrases: [
        "When you say 'risky', which risk should I prioritise?",
        "What part feels least workable?",
        "Where's the real constraint?",
        "What makes that the key issue?",
        "What does 'too slow' mean in practical terms?",
      ],
    },
    {
      id: "shy-guarded",
      label: "Shy / guarded person",
      tag: "Low-pressure invitations with an exit",
      tone: "High-stakes",
      phrases: [
        "No pressure to go into it, but when you say 'weird', what kind of weird?",
        "Only if you want to unpack it — complicated how?",
        "Was it more awkward or more frustrating?",
        "What part of it felt most off?",
        "You don't have to explain the whole thing — I'm just curious what you meant by 'intense'.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "They elaborate warmly",
      action:
        "Reflect the meaning, then ask one more follow-up or contribute something of your own.",
      phrase: "So it was less about the work and more about the people.",
    },
    {
      condition: "They answer briefly",
      action: "Do not push. Comment lightly or move on.",
      phrase: "Fair enough — sounds like one of those days.",
    },
    {
      condition: "They seem guarded",
      action: "Give them an exit rather than pressing.",
      phrase: "No pressure if you'd rather leave it there.",
    },
    {
      condition: "They correct you",
      action: "Accept the correction and adjust your read.",
      phrase: "Got it — not intense, more uncertain.",
    },
    {
      condition: "They become vulnerable",
      action: "Slow down, validate, and avoid humour too early.",
      phrase: "That sounds like it actually mattered.",
    },
    {
      condition: "They get defensive",
      action: "Back off the interpretation and validate.",
      phrase: "Fair — I may be over-reading one word.",
    },
  ],
  ladder: [
    {
      weak: "Uses the technique mechanically or too often.",
      better: "Uses the smallest useful version, then listens.",
      best: "Uses it only when the cue is present, keeps the wording natural, and adjusts to the response.",
    },
    {
      weak: "Talks about the technique instead of doing it.",
      better: "Performs one clear behavioural move.",
      best: "Makes the move feel like ordinary skilled conversation.",
    },
  ],
  scenarios: [
    {
      situation: 'Casual conversation — they say "It was weirdly intense."',
      move: "Echo the charged word, then reflect their answer before adding your own experience.",
      phrase: "Weirdly intense how?",
    },
    {
      situation:
        'Networking — they say "It\'s been a messy year for the industry."',
      move: "Offer a two-option version so they can point at what they mean.",
      phrase: "Messy in what way — people, funding, or direction?",
    },
    {
      situation: 'Workplace influence — they say "The plan feels risky."',
      move: "Clarify the word toward a decision rather than debating it.",
      phrase: "When you say risky, which risk should we solve first?",
    },
    {
      situation: 'Conflict — they say "That felt dismissive."',
      move: "Name that you don't want to assume, then let them define the word.",
      phrase: "I don't want to assume. What made it feel dismissive?",
    },
    {
      situation: 'Dating / social — they say "That trip was chaotic but fun."',
      move: "Play with a light two-option question to keep the energy up.",
      phrase: "Good-chaotic or never-again chaotic?",
    },
    {
      situation: 'Digital / text — they text "Today was weird."',
      move: "Keep it to one short line so it's easy to answer.",
      phrase: "Good-weird or bad-weird?",
    },
  ],
  calibration: {
    working: [
      "They define the word in more detail.",
      "Their answer becomes warmer or more animated.",
      'They say "exactly", "yes", or "that\'s what I mean".',
      "They offer a story, example or extra context.",
      "They seem relieved that you noticed the nuance.",
      "The conversation becomes easier rather than more effortful.",
    ],
    adjust: [
      "Short or flat answers.",
      "They seem watched, analysed or pressured.",
      'They correct your tone: "No, not like that."',
      "They change topic quickly.",
      "They look away, withdraw or seem embarrassed.",
      "You've echoed several words in a row without contributing.",
      'Soften it: add a small comment before the question, or offer an exit — "No pressure if you don\'t want to unpack it."',
      'Move one step lighter — from meaning to fact — or switch from a question to a reflection: "So it felt off, but hard to name."',
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Notice the word",
      task: "In every real conversation today, silently spot the one charged word — weird, messy, intense, freeing — without acting on it. Just train your ear.",
    },
    {
      day: "Day 2",
      title: "Rehearse the move",
      task: 'Say the minimum viable move out loud three times: pick a charged word and ask "[word] how?" — "Weird how?", "Intense how?", "Messy how?" Make it sound casual, not clever.',
    },
    {
      day: "Day 3",
      title: "One follow-up, live",
      task: "Use exactly one loaded-word follow-up in each conversation so it never feels mechanical, then let them define the word without helping.",
    },
    {
      day: "Day 4",
      title: 'Convert every "why?"',
      task: 'Turn "Why?" into "What made it [word]?" Rewrite three recent "why" questions this way and use one for real.',
    },
    {
      day: "Day 5",
      title: "Two-option versions",
      task: 'Practise the two-option form: "good-weird or bad-weird?", "task issue or people issue?", "exciting-intense or stressful-intense?"',
    },
    {
      day: "Day 6",
      title: "Reflect, then contribute",
      task: "After each follow-up, add a one-line reflection or a small thought of your own so it stays a conversation, not an interview.",
    },
    {
      day: "Day 7",
      title: "Practise the repair",
      task: 'Deliberately over-ask once, then use a recovery line — "That came out like an interrogation; I was just curious about the word you used" — and note how the repair lands.',
    },
  ],
  checklist: [
    "Did I pick a word with real energy, not just a random adjective?",
    "Did my tone sound curious rather than sceptical?",
    "Did I ask one short follow-up instead of stacking questions?",
    "Did I let them define the word rather than interpreting it for them?",
    "Did I reflect or contribute after one or two follow-ups?",
    "Did I stop when they gave short or guarded answers?",
  ],
  example: {
    without: [
      'Person: "The meeting was fine, but the whole thing felt weirdly tense."',
      'You: "Why? What happened? Who was there? Was everyone angry?"',
      'Person: "No, not exactly..."',
      'Why it fails: too many questions, too fast — it chases details before letting them define "weirdly tense".',
    ],
    with: [
      'Person: "The meeting was fine, but the whole thing felt weirdly tense."',
      "You: \"'Fine but weirdly tense' sounds like the real story. Was it tense because of what was said, or what people avoided saying?\"",
      'Person: "What people avoided saying. Definitely."',
      'You: "That makes sense. The silence was doing the work."',
      'Person: "Yes, exactly."',
      "Why it works: it echoes their own phrase, offers a gentle two-option question, and reflects the meaning back instead of interrogating.",
    ],
    note: 'The quick version — just "Weirdly tense how?" — works too. The advanced version simply adds a light two-option question and a short reflection so they feel tracked, not questioned.',
  },
  influencePayoff: {
    feeling: '"They noticed the word that actually mattered to me."',
    principle:
      "People become more open with you once they feel you've registered their meaning, not just their topic.",
    gains: [
      "Makes people feel precisely heard — you noticed the word that carried their meaning, not just the surface topic.",
      "Creates momentum — they don't have to invent a new topic; they simply explain their own word.",
      "Signals attention, curiosity and social intelligence without a long or clever question.",
      "Surfaces values, concerns, hidden objections, excitement or uncertainty before you persuade or advise.",
      'Keeps things natural — "Messy how?" sounds like a skilled conversationalist, not "Can you elaborate?"',
      "Deepens a drifting conversation with the smallest possible move.",
    ],
    whyMostFail: [
      "They echo every interesting word and turn the exchange into an interview.",
      "They deliver it mechanically, so it sounds like a tactic rather than curiosity.",
      "Their tone tips into scepticism or cross-examination.",
      "They use the word as evidence for their own interpretation instead of inviting the person's meaning.",
    ],
  },
  fieldTip: {
    headline: "The loaded word is the doorway.",
    body: "The emotionally charged word is usually where the real conversation lives. Pick it up lightly, then let them define it — the value is in their explanation, not your interpretation.",
    example:
      'They say "It was technically fine, just draining." Follow "draining", not "where was it?"',
    dont: "Use it to corner, flatter, extract or prove a point.",
    do: "Use it to clarify, respect and connect.",
  },
  method: [
    {
      step: "1",
      title: "Listen for the loaded word",
      body: 'Catch the emotionally coloured, meaning-heavy words: "honestly", "weirdly", "intense", "messy", "strange", "freeing", "annoying", "surprising", "not what I expected".',
      examples: [
        {
          label: "Loaded",
          text: "\"It was technically fine, just weird.\" — the live word is 'weird'.",
        },
      ],
    },
    {
      step: "2",
      title: "Choose the word with energy",
      body: 'Pick the word that seems alive, not the one that lets you sound clever. The charged word often lands right after "but", "honestly", "weirdly" or "the thing is".',
    },
    {
      step: "3",
      title: "Echo it lightly",
      body: "Repeat the word or phrase in a curious, warm tone. Keep it short. A tiny pause before the echo helps it land naturally.",
      examples: [{ label: "Light echo", text: '"Weird how?"' }],
    },
    {
      step: "4",
      title: "Ask one small question",
      body: 'Use "how?", "in what way?", "what made it that?", or a two-option version. Do not stack several questions.',
      examples: [
        { label: "Two-option", text: '"Good-weird or bad-weird?"' },
        {
          label: "Meaning",
          text: "\"When you say 'freeing', what do you mean?\"",
        },
      ],
    },
    {
      step: "5",
      title: "Let them define it",
      body: "Do not answer for them. The whole value is that they explain what the word meant to them.",
    },
    {
      step: "6",
      title: "Reflect, then contribute",
      body: "After they answer, reflect the meaning or follow the next loaded word — then add a little of your own after one or two follow-ups so it stays a conversation, not an interview.",
    },
  ],
  liveThreadClues: [
    '"honestly..."',
    '"weirdly..."',
    '"the thing is..."',
    '"intense" / "messy" / "strange"',
    '"freeing" / "surprising"',
    '"not what I expected"',
    '"...but..." — the charged word often lands right after',
  ],
  commonMistakes: [
    {
      mistake: "Echoing every interesting word",
      soundsLike: '"Weird? Intense? Messy?"',
      better: "Pick one word with energy, then stop.",
    },
    {
      mistake: "Sounding challenging",
      soundsLike: '"Weird how?" said with a sceptical edge',
      better: "Use warm curiosity, not cross-examination.",
    },
    {
      mistake: "Chasing the factual word",
      soundsLike: 'They say "good but draining" and you ask where it was.',
      better: 'Follow "draining", not "where".',
    },
    {
      mistake: 'Reaching for "why?" too fast',
      soundsLike: '"Why was it awkward?"',
      better: 'Ask "awkward how?" or "what made it awkward?" first.',
    },
    {
      mistake: "Going too deep too soon",
      soundsLike: '"What wound did that touch?"',
      better: 'Stay at their level: "Did that throw you a bit?"',
    },
    {
      mistake: "Over-interpreting the word",
      soundsLike: '"So you were angry."',
      better: "Ask what the word means to them instead.",
    },
    {
      mistake: "Never contributing",
      soundsLike: "Only ever asking loaded-word questions.",
      better:
        "After one or two follow-ups, reflect or share a small relevant thought.",
    },
  ],
  recoveryPhrases: [
    "That sounded more intense than I meant. I was just curious about the word you used.",
    "No pressure to unpack it. I just noticed that word.",
    "Let me ask that less clumsily.",
    "I may be reading too much into one word. What did you mean by it?",
    "That came out like an interrogation. What I meant was, what kind of 'weird'?",
    "We can leave it there if it's not worth going into.",
    "Ignore the question if it's too much — I didn't mean to put you on the spot.",
    "Fair enough — I'll stop analysing your word choice.",
  ],
  bestRecoveryLine:
    "I may be reading too much into one word — what did you mean by it?",
  chains: [
    {
      label: "Rapport chain",
      sequence:
        "Warm comment -> loaded-word follow-up -> reflection -> light self-disclosure -> appreciation",
      example: [
        '"That sounds like the good kind of tired. Rewarding how?"',
        '"So it was draining but worth it."',
        '"I know that feeling — the best projects usually cost the most."',
      ],
    },
    {
      label: "Conversation-flow chain",
      sequence:
        'Notice the charged word -> ask "[word] how?" -> let them define it -> follow the next thread',
      example: [
        '"Messy how?"',
        '"...so it was really the timing that made it messy."',
        '"And the funding side — was that messy too?"',
      ],
    },
    {
      label: "Conflict chain",
      sequence:
        "Validate the emotion -> loaded-word follow-up -> clarify the concern -> reflect -> propose a next step",
      example: [
        '"I can hear that landed badly. What made it feel dismissive?"',
        '"So it was being talked over, not the decision itself."',
        '"Let\'s make sure you get the floor first next time."',
      ],
    },
    {
      label: "Persuasion chain",
      sequence:
        "Loaded-word follow-up -> identify the value or concern -> frame the suggestion around it -> release the decision",
      example: [
        "\"When you say 'risky', is it timing, cost, or quality?\"",
        '"If timing is the worry, we could stage it."',
        '"But it\'s your call."',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC001",
      reason:
        "Live thread follow-ups follows the most alive part of the whole utterance, not one word. Use it when continuity matters more than a single charged word.",
    },
    {
      id: "TC025",
      reason:
        "Exact word pickup reuses the person's precise word to show you caught it. Use it when their specific wording matters more than your paraphrase.",
    },
    {
      id: "TC026",
      reason:
        "Tactical mirroring repeats one to three key words and pauses. Use it when you want more detail with the least possible steering.",
    },
    {
      id: "TC030",
      reason:
        "Echo plus question echoes a key phrase and adds one clean forward question. Use it when you need both acknowledgement and movement.",
    },
    {
      id: "TC038",
      reason:
        "Conversation threading tracks and returns to the important thread across turns. Use it when the conversation has several branches to manage.",
    },
    {
      id: "TC040",
      reason:
        "Meaning reflection mirrors back the meaning beneath the words rather than asking about one word. Use it when you already grasp what they mean and want to confirm it.",
    },
  ],
};
