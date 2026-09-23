import type { CardData } from "../card-types";

export const TC001: CardData = {
  pdfUrl: "cards/TC001/TC001_TwoCard_Combined.pdf",
  resources: [
    { label: "Two-card (combined)", description: "Front and back study cards on one sheet — the designed visual card.", href: "cards/TC001/TC001_TwoCard_Combined.pdf", type: "pdf", group: "Visual Cards" },
    { label: "One-card summary", description: "The whole technique on a single designed card.", href: "cards/TC001/TC001_OneCard.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Detailed guide", description: "The full written guide with every section.", href: "cards/TC001/TC001_Detailed_Guide_Normal.pdf", type: "pdf", group: "Written Guides" },
    { label: "Detailed guide (table)", description: "The full guide laid out as reference tables.", href: "cards/TC001/TC001_Detailed_Guide_Table.pdf", type: "pdf", group: "Written Guides" },
    { label: "Detailed guide (Word)", description: "Editable Word version of the full guide.", href: "cards/TC001/TC001_Detailed_Guide_Normal.docx", type: "docx", group: "Written Guides" },
    { label: "Phrase bank (CSV)", description: "Every phrase, ready to import or drill.", href: "cards/TC001/TC001_Phrase_Bank.csv", type: "csv", group: "Practice Tools" },
    { label: "Anki flashcards", description: "Import into Anki for spaced-repetition practice.", href: "cards/TC001/TC001_Anki_Flashcards.csv", type: "csv", group: "Practice Tools" },
  ],
  id: "TC001",
  whyItWorks:
    "A live-thread follow-up is a question or comment that follows the most emotionally alive, meaningful, surprising, funny, tense, proud, uncertain, or specific part of what someone just said. It works because people open up and warm to you when they feel you noticed the real part of what they said, not just the surface facts.",
  whatItIsNot: [
    "It is not simply \"ask more questions\" - too many questions can feel like an interview.",
    "It is not therapy-speak or clinical probing.",
    "It is not interrogation, or a trick to steer the person.",
    "It is not a tactic - it is socially intelligent responsiveness.",
  ],
  overview: {
    coreFormula: [
      "The sequence: Notice -> Comment -> Ask -> Reflect -> Contribute.",
      "Charged detail -> small comment -> one natural question.",
      "You said it was weirdly intense. Weirdly intense how?",
      "That sounds like it mattered. What made it important?",
      "You seemed to light up when you mentioned that. What do you like about it?",
      "You said it changed things. Did it change how you felt, or what you decided?",
    ],
    minimumViableMove:
      "Ask one small follow-up about the detail, emotion, value or unfinished thread that seems most alive.",
    impact: "High",
    difficulty: "Easy-Medium",
    misuse:
      "The move fails when you follow every possible detail or turn the exchange into an interview rather than letting the person continue naturally.",
    bestFor: [
      "Building rapport quickly",
      "Moving beyond small talk",
      "Dating or social chemistry",
      "Networking without sounding transactional",
      "Understanding before persuading",
      "Softening disagreement",
      "Making someone feel valued without flattery",
    ],
  },
  notFor: [
    "They are giving short answers",
    "They seem rushed or distracted",
    "The topic is too private for the relationship",
    "You have already asked several questions in a row",
    "They need a direct answer, not exploration",
    "You are steering, prying, or pressuring",
    "You are not willing to share anything yourself",
  ],
  phraseBank: [
    {
      id: "quick",
      label: "Quick",
      tag: "Short openers",
      tone: "Quick",
      phrases: [
        "What was that like?",
        "How did that happen?",
        "What happened next?",
        "What made that stand out?",
        "How did it go from there?",
      ],
    },
    {
      id: "warm",
      label: "Warm",
      tag: "Warmth and validation",
      tone: "Warm",
      phrases: [
        "That sounds like it mattered.",
        "That must have been a lot in the moment.",
        "What was going through your head?",
        "What was the best part of that?",
        "What was the hardest part?",
      ],
    },
    {
      id: "more_charismatic",
      label: "More charismatic",
      tag: "Noticing the interesting part",
      tone: "Warm",
      phrases: [
        "There's a detail in that I want to ask about.",
        "That sounds like the interesting part.",
        "That sentence is doing a lot of work.",
        "That sounds more complicated than the short version.",
        "I feel like there's a story behind that.",
      ],
    },
    {
      id: "two_option_questions",
      label: "Two-option questions",
      tag: "Playful either/or",
      tone: "Direct",
      phrases: [
        "Was that exciting-intense or stressful-intense?",
        "Did that feel like a relief or more like pressure?",
        "Was the hard part the task or the uncertainty?",
        "Did that change your mind or confirm what you already thought?",
        "Was it a good surprise or a complicated surprise?",
        "Did that make things clearer or messier?",
      ],
    },
    {
      id: "professional",
      label: "Professional",
      tag: "Work, decisions and status",
      tone: "Professional",
      phrases: [
        "What led you to that decision?",
        "What was the key factor?",
        "What constraint were you working around?",
        "What would good look like from your side?",
        "What part of this matters most to get right?",
        "What would make the next step easier?",
      ],
    },
    {
      id: "social_dating",
      label: "Social / dating",
      tag: "Chemistry and connection",
      tone: "Warm",
      phrases: [
        "What are you like when you're really into something?",
        "What makes you lose track of time?",
        "What are you weirdly passionate about?",
        "What's the most 'you' thing you've done recently?",
        "What do people usually get wrong about you?",
        "What kind of person brings out your best side?",
      ],
    },
    {
      id: "conflict_softening",
      label: "Conflict softening",
      tag: "De-escalating in disagreement",
      tone: "Repair",
      phrases: [
        "What part of this feels most important to you?",
        "What are you worried I'm not seeing?",
        "What would feel fair from your side?",
        "What did that mean to you when it happened?",
        "What do you need me to understand before I respond?",
      ],
    },
    {
      id: "digital_text",
      label: "Digital / text",
      tag: "One-line messages",
      tone: "Quick",
      phrases: [
        "Curious, what made you choose that?",
        "What's the short version and the honest version?",
        "Was that good-intense or bad-intense?",
        "What happened after that?",
        "What's the part you're still thinking about?",
      ],
    },
  ],
  method: [
    {
      step: "1",
      title: "Catch the live thread",
      body: "Listen for the word or detail carrying the most energy, not the most obvious fact. In \"It was technically fine, just weird,\" the live thread is \"weird\" - so the natural follow-up is \"Weird how?\"",
      examples: [
        { label: "They say", text: "It was technically fine, just weird." },
        { label: "Live thread", text: "Weird how?" },
      ],
    },
    {
      step: "2",
      title: "Comment before you question",
      body: "A small comment makes the question warmer and less interrogative. The comment shows you noticed the nuance; the question invites them to expand.",
      examples: [
        { label: "Weak", text: "Why was it intense?" },
        { label: "Better", text: "Weirdly intense sounds specific. What made it intense?" },
        { label: "More charismatic", text: "Good-intense or what-have-I-done intense?" },
      ],
    },
    {
      step: "3",
      title: "Ask one short question",
      body: "Good follow-ups are short, easy to answer, connected to their words, not too deep too early, and warm rather than analytical.",
      examples: [
        { label: "Too clinical", text: "How did that impact you emotionally?" },
        { label: "More natural", text: "Did that throw you a bit?" },
      ],
    },
    {
      step: "4",
      title: "Use the depth dial",
      body: "Match the depth of your question to the trust in the room. Most everyday charisma lives in the middle - warm and personal, not overly deep. Use the depth dial to judge how far to reach.",
    },
    {
      step: "5",
      title: "Reflect briefly",
      body: "After they answer, show you understood. This is where the technique becomes likable: you are not just asking, you are tracking them.",
      examples: [
        { label: "Reflect", text: "So it was exciting, but a lot to absorb." },
        { label: "Reflect", text: "Sounds like the job was fine, but the uncertainty was draining." },
      ],
    },
    {
      step: "6",
      title: "Contribute after curiosity",
      body: "After one or two follow-ups, add something small from yourself. This keeps it a conversation rather than an interview.",
      examples: [
        { label: "Contribute", text: "I get that. New places are tiring - you're learning the job and the hidden rules at once." },
        { label: "Contribute", text: "That makes sense. There's a difference between being busy and feeling unanchored." },
      ],
    },
  ],
  liveThreadClues: [
    "honestly...",
    "weirdly...",
    "the strange thing was...",
    "I didn't expect...",
    "the best part was...",
    "the annoying part was...",
    "it sounds silly, but...",
    "I was surprised that...",
  ],
  depthDial: [
    { depth: "Light", useWhen: "Early conversation", phrase: "What happened next?" },
    { depth: "Warm", useWhen: "Rapport forming", phrase: "What was that like?" },
    { depth: "Personal", useWhen: "Trust present", phrase: "Did that throw you a bit?" },
    { depth: "Meaningful", useWhen: "Deeper conversation", phrase: "What did that change for you?" },
    { depth: "Intimate", useWhen: "Strong trust only", phrase: "Did that change how you saw yourself?" },
  ],
  decisionTree: [
    {
      condition: "They give a cue this technique is built for - a charged word, vivid detail, or clear emotion.",
      action: "Use the minimum viable move: one short follow-up on the most alive part.",
      phrase: "Weirdly intense how?",
    },
    {
      condition: "There is no live cue, or they want a straight answer.",
      action: "Listen normally, answer directly, or pick a neighbouring technique.",
      phrase: "Fair enough - what do you need from me on it?",
    },
    {
      condition: "The move opened useful information or connection.",
      action: "Stay with the thread once, then reflect back what you heard.",
      phrase: "So it was less the work and more the uncertainty.",
    },
    {
      condition: "The move landed flat - short answers, flat tone, a topic change.",
      action: "Reduce intensity, comment instead of asking, or move back to the task.",
      phrase: "No pressure - I was just curious.",
    },
    {
      condition: "There is pressure, distress, or urgency.",
      action: "Slow down and shorten under pressure; add warmth under distress; act directly under urgency.",
      phrase: "That sounds like a lot. What do you most need right now?",
    },
    {
      condition: "You have already used the move once or twice.",
      action: "Do not repeat it mechanically - switch to a summary, a small contribution, or action.",
      phrase: "Here's what I'm taking from this...",
    },
  ],
  ladder: [
    {
      weak: "Uses the technique mechanically or too often.",
      better: "Uses the smallest useful version and then listens.",
      best: "Uses the technique only when the cue is present, keeps the wording natural, and adjusts based on the response.",
    },
    {
      weak: "Talks about the technique instead of doing it.",
      better: "Performs one clear behavioural move.",
      best: "Makes the move feel like ordinary skilled conversation.",
    },
  ],
  example: {
    without: [
      "Person: \"I just started a new job.\"",
      "You: \"Nice. I hated my first job. My boss was awful.\"",
      "Why it is weak:",
      "Turns the conversation back to you.",
      "Misses the emotional opening.",
      "Gives them no reason to elaborate.",
      "Creates parallel monologues rather than connection.",
    ],
    with: [
      "Person: \"I just started a new job.\"",
      "You: \"Nice. How has the first week actually felt?\"",
      "Person: \"Exciting, but honestly pretty overwhelming.\"",
      "You: \"Good-overwhelming or what-have-I-done overwhelming?\"",
      "Person: \"A bit of both.\"",
      "You: \"That's usually the honest answer. What's been the most full-on part?\"",
      "Person: \"Learning how everything works. It's not even the job itself.\"",
      "You: \"So it's the hidden rules layer.\"",
      "Person: \"Exactly.\"",
      "Why this works:",
      "Follows their actual experience, not the surface facts.",
      "Uses a playful two-option question.",
      "Reflects the deeper thread back to them.",
      "Creates warmth without forcing intimacy.",
      "Gives them more to respond to than \"How's the job?\"",
    ],
    note:
      "Going one level deeper, you can push once more - \"Intense because there's a lot to learn, or because you're still figuring out the people?\" - then reflect: \"The social map is usually the harder part. That's the real onboarding.\"",
  },
  commonMistakes: [
    {
      mistake: "Asking naked questions",
      soundsLike: "\"Why?\"",
      better: "\"That sounds like it mattered. Why was it important?\"",
    },
    {
      mistake: "Asking too many questions",
      soundsLike: "\"Where? Who? Why? How?\"",
      better: "\"What's been the most interesting part?\"",
    },
    {
      mistake: "Following facts, not energy",
      soundsLike: "\"Where was it?\"",
      better: "\"Weird how?\"",
    },
    {
      mistake: "Going too deep too early",
      soundsLike: "\"What did that reveal about your deepest fear?\"",
      better: "\"Did that throw you a bit?\"",
    },
    {
      mistake: "Turning back to yourself too soon",
      soundsLike: "\"That happened to me too...\"",
      better: "\"That makes sense. What did you do next?\"",
    },
    {
      mistake: "Sounding too clinical",
      soundsLike: "\"How did that impact you emotionally?\"",
      better: "\"Did that hit harder than expected?\"",
    },
    {
      mistake: "Never contributing",
      soundsLike: "Only asking questions, never sharing.",
      better: "\"I get that. I usually find the social side of new places more tiring than the work itself.\"",
    },
  ],
  calibration: {
    working: [
      "They give longer answers.",
      "Their tone warms.",
      "They become more animated.",
      "They add extra detail.",
      "They ask you questions back.",
      "They laugh or soften.",
      "They say \"Exactly\", \"Yeah\", \"That's it\", or \"That's what I mean.\"",
      "They move from facts into stories, feelings, or meaning.",
    ],
    adjust: [
      "Short answers or a flat tone.",
      "They look away, check their phone, or change the topic.",
      "Polite but low-energy responses; they answer but do not elaborate.",
      "They seem analysed or pressured.",
      "You have asked three questions without sharing anything.",
      "Fix it by asking less and commenting more, or sharing something small yourself.",
      "Fix it by moving one step lighter on the depth dial.",
      "Fix it by giving them an exit: \"No pressure if you don't want to get into it. I was just curious.\"",
    ],
  },
  recoveryPhrases: [
    "I'm asking because it sounded interesting, not because I'm trying to interrogate you.",
    "No pressure if you'd rather not get into it.",
    "That came out more intense than I meant.",
    "Let me ask that in a less clunky way.",
    "We can change topic if you'd rather.",
    "I got curious there. My bad.",
    "I'll stop making you do all the talking.",
    "That sounded like a job interview question. What I meant was...",
  ],
  bestRecoveryLine:
    "I'm asking because it sounded interesting, but no pressure if you'd rather move on.",
  influencePayoff: {
    feeling: "\"They noticed the real part of what I said.\"",
    principle:
      "People become more receptive to you when they first feel you have been receptive to them.",
    gains: [
      "Warmth",
      "Trust",
      "Conversational flow",
      "Perceived social intelligence",
      "Emotional connection",
      "Openness",
      "Later receptiveness to your ideas",
    ],
    whyMostFail: [
      "They turn the conversation back to themselves too quickly.",
      "They ask bland, generic questions.",
      "They follow factual details instead of emotional energy.",
      "They ask too many questions and it starts to feel like an interview.",
    ],
  },
  chains: [
    {
      label: "Rapport chain",
      sequence:
        "Warm comment -> live-thread follow-up -> reflection -> light self-disclosure -> appreciation",
      example: [
        "\"That sounds like a big shift.\"",
        "\"What made you choose it?\"",
        "\"So it was partly excitement and partly needing a change.\"",
        "\"I get that. I'm usually slow to make changes, but once I know, I know.\"",
        "\"I like how clearly you thought about it.\"",
      ],
    },
    {
      label: "Influence chain",
      sequence:
        "Understand goal -> ask follow-up about values -> frame suggestion around that value -> release pressure",
      example: [
        "\"What are you hoping this solves?\"",
        "\"What matters most: speed, quality, or less stress?\"",
        "\"Given that you care most about reducing stress, I'd probably choose the simpler option.\"",
        "\"But it's your call.\"",
      ],
    },
    {
      label: "Conflict chain",
      sequence: "Validate -> live-thread follow-up -> clarify need -> propose next step",
      example: [
        "\"I can see why that felt frustrating.\"",
        "\"What part bothered you most?\"",
        "\"So the issue is less the decision and more that it felt sprung on you.\"",
        "\"Can we step back and talk through the reasoning properly?\"",
      ],
    },
    {
      label: "Charisma chain",
      sequence: "Playful observation -> live-thread follow-up -> reflection -> light humour",
      example: [
        "\"That sounds like the short version of a chaotic story.\"",
        "\"What actually happened?\"",
        "\"So you were improvising the entire time.\"",
        "\"Respectfully, that is both impressive and concerning.\"",
      ],
    },
  ],
  scenarios: [
    {
      situation: "Social conversation",
      move: "Use the smallest natural version so the other person feels heard without being analysed.",
      phrase: "What was that like?",
    },
    {
      situation: "Professional discussion",
      move: "Keep it concise and tie the move to the task, decision or concern.",
      phrase: "What part of this matters most to get right?",
    },
    {
      situation: "Conflict or objection",
      move: "Add validation and reduce speed; do not weaponise the technique.",
      phrase: "What did that mean to you when it happened?",
    },
    {
      situation: "Digital message",
      move: "Use one sentence. Avoid long explanations or stacked questions.",
      phrase: "Was that good-intense or bad-intense?",
    },
    {
      situation: "Shy or guarded person",
      move: "Make the move lighter, more tentative and lower pressure.",
      phrase: "No pressure, but what was the best part?",
    },
    {
      situation: "High-status or busy person",
      move: "Keep the wording brief, grounded and useful.",
      phrase: "What was the key factor for you?",
    },
  ],
  drill: [
    {
      day: "Day 1",
      title: "Collect raw material",
      task: "Pick three ordinary comments someone might make today, and underline the emotionally loaded word in each.",
    },
    {
      day: "Day 2",
      title: "Write the minimum viable move",
      task: "For each comment, write the smallest live-thread follow-up you could ask - often just \"[word] how?\"",
    },
    {
      day: "Day 3",
      title: "Say it out loud",
      task: "Say each line out loud once in a normal, unforced voice to hear whether it sounds like you.",
    },
    {
      day: "Day 4",
      title: "Cut the performance",
      task: "Cut any line that sounds clever, therapeutic, corporate or performative, and keep only the plain versions.",
    },
    {
      day: "Day 5",
      title: "Use it once, live",
      task: "In the next real conversation, use the smallest version once and observe the response before doing anything else.",
    },
    {
      day: "Day 6",
      title: "Run the \"[word] how?\" drill",
      task: "Across three conversations, listen for a loaded word and ask about it - \"Weird how?\", \"Intense how?\" - adding one warm comment before the question.",
    },
    {
      day: "Day 7",
      title: "Complete the sequence",
      task: "Run the full sequence once - Notice, Comment, Ask, Reflect, Contribute - then review: did they give longer answers, and did you contribute after one or two follow-ups rather than interviewing them?",
    },
  ],
  checklist: [
    "Did I use the technique because the cue was present, or because I wanted to perform skill?",
    "Was my wording shorter than my instinct?",
    "Did I comment before asking, and contribute after one or two follow-ups?",
    "Did the person have more room after my move, or less?",
    "Did I adjust if they became closed, pressured or confused?",
    "What neighbouring technique would have been better if this one missed?",
  ],
  fieldTip: {
    headline: "Follow emotional energy, not just information.",
    body: "The best follow-up often comes from the word they load with feeling. That loaded word is the live thread - follow it rather than the surface facts.",
    example: "They say: \"It was technically fine, just weird.\"",
    dont: "Where was it?",
    do: "Weird how?",
  },
  relatedTechniques: [
    {
      id: "TC023",
      reason:
        "TC001 follows the most alive part of the whole utterance; use TC023 Loaded word follow-up when the energy sits in one specific loaded word.",
    },
    {
      id: "TC025",
      reason:
        "Use TC025 Exact word pickup when the move is to reuse their exact word, rather than follow the broader thread.",
    },
    {
      id: "TC026",
      reason:
        "Use TC026 Tactical mirroring when repeating a short phrase back does the job without adding a question.",
    },
    {
      id: "TC030",
      reason:
        "Use TC030 Echo plus question when you want to echo their words first and then ask - a tighter, more structured cousin.",
    },
    {
      id: "TC038",
      reason:
        "Use TC038 Conversation threading when several threads are open and the real skill is choosing which one to follow deliberately.",
    },
  ],
};
