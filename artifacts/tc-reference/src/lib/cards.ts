export interface PhraseGroup {
  id: string;
  label: string;
  tag: string;
  phrases: string[];
}

export interface DecisionNode {
  condition: string;
  action: string;
  phrase: string;
}

export interface LadderRow {
  weak: string;
  better: string;
  best: string;
}

export interface ScenarioEntry {
  situation: string;
  move: string;
  phrase: string;
}

export interface CardResource {
  label: string;
  description: string;
  href: string;
  type: "pdf" | "docx" | "png" | "csv";
  group: "Visual Cards" | "Written Guides" | "Practice Tools";
}

export interface CardOverview {
  coreFormula: string[];
  minimumViableMove: string;
  impact: "High" | "Medium" | "Low";
  difficulty: string;
  misuse: string;
  bestFor: string[];
}

export interface CardExample {
  without: string[];
  with: string[];
  note?: string;
}

export interface MethodStep {
  step: string;
  title: string;
  body: string;
  examples?: { label: string; text: string }[];
}

export interface DepthDialRow {
  depth: string;
  useWhen: string;
  phrase: string;
}

export interface InfluencePayoff {
  feeling: string;
  principle: string;
  gains: string[];
  whyMostFail: string[];
}

export interface MistakeRow {
  mistake: string;
  soundsLike: string;
  better: string;
}

export interface TechniqueChain {
  label: string;
  sequence: string;
  example: string[];
}

export interface RelatedTechnique {
  id: string;
  reason: string;
}

export interface FieldTip {
  headline: string;
  body: string;
  example?: string;
  dont?: string;
  do?: string;
}

export interface CardData {
  id: string;
  pdfUrl?: string;
  overview: CardOverview;
  phraseBank: PhraseGroup[];
  decisionTree: DecisionNode[];
  ladder: LadderRow[];
  scenarios: ScenarioEntry[];
  calibration: { working: string[]; adjust: string[] };
  drill: { day: string; title: string; task: string }[];
  checklist: string[];
  whyItWorks: string;
  example: CardExample;
  notFor: string[];
  resources?: CardResource[];
  whatItIsNot?: string[];
  influencePayoff?: InfluencePayoff;
  fieldTip?: FieldTip;
  method?: MethodStep[];
  liveThreadClues?: string[];
  depthDial?: DepthDialRow[];
  commonMistakes?: MistakeRow[];
  recoveryPhrases?: string[];
  bestRecoveryLine?: string;
  chains?: TechniqueChain[];
  relatedTechniques?: RelatedTechnique[];
}

export const CARD_DATA: Record<string, CardData> = {

  /* ──────────────────────────────────────────────
     TC001  Live Thread Follow-Ups
  ────────────────────────────────────────────── */
  TC001: {
    id: "TC001",
    pdfUrl: "cards/TC001/TC001_TwoCard_Combined.pdf",
    overview: {
      coreFormula: ["Notice", "Comment", "Ask", "Reflect", "Contribute"],
      minimumViableMove: "Pick the emotionally loaded word and ask: \"[word] how?\" — or simply: \"What was that like?\"",
      impact: "High",
      difficulty: "Easy-Medium",
      misuse: "High",
      bestFor: [
        "Building rapport quickly and moving beyond small talk",
        "Dating, social chemistry, and new relationships",
        "Networking without sounding transactional",
        "Understanding someone before trying to persuade them",
        "Making someone feel genuinely valued without flattery",
        "Softening conflict by demonstrating you are actually listening",
      ],
    },
    phraseBank: [
      {
        id: "quick",
        label: "Quick",
        tag: "Short natural starters",
        phrases: [
          "\"What was that like?\"",
          "\"How did that happen?\"",
          "\"What happened next?\"",
          "\"What made that stand out?\"",
          "\"How did it go from there?\"",
        ],
      },
      {
        id: "warm",
        label: "Warm",
        tag: "Comments that invite more",
        phrases: [
          "\"That sounds like it mattered.\"",
          "\"That must have been a lot in the moment.\"",
          "\"What was going through your head?\"",
          "\"What was the best part of that?\"",
          "\"What was the hardest part?\"",
        ],
      },
      {
        id: "charismatic",
        label: "Charismatic",
        tag: "More distinctive responses",
        phrases: [
          "\"There's a detail in that I want to ask about.\"",
          "\"That sounds like the interesting part.\"",
          "\"That sentence is doing a lot of work.\"",
          "\"That sounds more complicated than the short version.\"",
          "\"I feel like there's a story behind that.\"",
        ],
      },
      {
        id: "two-option",
        label: "Two-option",
        tag: "Give them something to react to",
        phrases: [
          "\"Was that exciting-intense or stressful-intense?\"",
          "\"Did that feel like a relief or more like pressure?\"",
          "\"Was the hard part the task or the uncertainty?\"",
          "\"Did that change your mind or confirm what you already thought?\"",
          "\"Was it a good surprise or a complicated surprise?\"",
          "\"Did that make things clearer or messier?\"",
        ],
      },
      {
        id: "professional",
        label: "Professional",
        tag: "Work and meetings",
        phrases: [
          "\"What led you to that decision?\"",
          "\"What was the key factor?\"",
          "\"What constraint were you working around?\"",
          "\"What would good look like from your side?\"",
          "\"What part of this matters most to get right?\"",
          "\"What would make the next step easier?\"",
        ],
      },
      {
        id: "social-dating",
        label: "Social / dating",
        tag: "Chemistry and connection",
        phrases: [
          "\"What are you like when you're really into something?\"",
          "\"What makes you lose track of time?\"",
          "\"What are you weirdly passionate about?\"",
          "\"What's the most 'you' thing you've done recently?\"",
          "\"What do people usually get wrong about you?\"",
          "\"What kind of person brings out your best side?\"",
        ],
      },
      {
        id: "conflict",
        label: "Conflict softening",
        tag: "Disagreement and tension",
        phrases: [
          "\"What part of this feels most important to you?\"",
          "\"What are you worried I'm not seeing?\"",
          "\"What would feel fair from your side?\"",
          "\"What did that mean to you when it happened?\"",
          "\"What do you need me to understand before I respond?\"",
        ],
      },
      {
        id: "digital",
        label: "Digital / text",
        tag: "One-line messages",
        phrases: [
          "\"Curious, what made you choose that?\"",
          "\"What's the short version and the honest version?\"",
          "\"Was that good-intense or bad-intense?\"",
          "\"What happened after that?\"",
          "\"What's the part you're still thinking about?\"",
        ],
      },
    ],
    decisionTree: [
      {
        condition: "Person gives a cue — a loaded word, emotional signal, or unfinished thread",
        action: "Use the minimum viable move: follow the energy, not the facts.",
        phrase: "\"[loaded word] how?\" or \"What was that like?\"",
      },
      {
        condition: "The follow-up opens more or warms the tone",
        action: "Stay with the thread once more — one reflection, then contribute something small yourself.",
        phrase: "\"So it wasn't the work itself — it was the uncertainty.\"",
      },
      {
        condition: "Pressure, distress, or urgency is present",
        action: "Slow down, shorten, or add warmth and an explicit opt-out before asking.",
        phrase: "\"No pressure to get into it. I was just curious.\"",
      },
      {
        condition: "You have already asked two or more follow-ups",
        action: "Stop asking. Switch to a reflection or contribute a small related thought.",
        phrase: "\"I get that. New places are tiring because you're learning the job and the hidden rules at once.\"",
      },
    ],
    ladder: [
      {
        weak: "Follows obvious factual details instead of emotional energy.",
        better: "Asks one short question connected to something they said.",
        best: "Follows the word or phrase that carries the most feeling. \"Weird how?\"",
      },
      {
        weak: "Uses it mechanically or too often — asks questions without contributing.",
        better: "Uses the smallest useful version and then listens.",
        best: "Uses it only when the cue is present, keeps wording natural, contributes after two follow-ups.",
      },
      {
        weak: "Talks about being curious instead of asking something.",
        better: "Performs one clear question.",
        best: "Makes the move feel like ordinary skilled conversation — not a technique at all.",
      },
    ],
    scenarios: [
      {
        situation: "Social conversation",
        move: "Use the smallest natural version. Make them feel heard without being analysed.",
        phrase: "\"That sounds like the interesting part. What happened there?\"",
      },
      {
        situation: "Professional discussion",
        move: "Keep it concise and tie the move to the task, decision, or concern.",
        phrase: "\"What was the key factor in that decision?\"",
      },
      {
        situation: "Conflict or objection",
        move: "Add validation and reduce speed. Do not weaponise curiosity.",
        phrase: "\"What part of this feels most important to you?\"",
      },
      {
        situation: "Digital / text message",
        move: "One sentence. No stacked questions.",
        phrase: "\"What's the part you're still thinking about?\"",
      },
      {
        situation: "Shy or guarded person",
        move: "Make the move lighter, more tentative, and explicitly lower-pressure.",
        phrase: "\"Only if you want to get into it — what was that like?\"",
      },
      {
        situation: "High-status or busy person",
        move: "Brief, grounded, and useful. No warmth performance.",
        phrase: "\"What was the key factor there?\"",
      },
    ],
    calibration: {
      working: [
        "They give longer answers.",
        "Their tone warms or they become more animated.",
        "They add extra detail you didn't ask for.",
        "They ask you questions back.",
        "They laugh, soften, or say \"Exactly\" / \"That's it\" / \"That's what I mean.\"",
        "The conversation moves from facts into stories, feelings, or meaning.",
      ],
      adjust: [
        "Short answers or flat tone.",
        "They look away, change topic, or check their phone.",
        "They answer but do not elaborate.",
        "They seem analysed, pressured, or like they're being interviewed.",
        "You have asked three questions without contributing anything.",
      ],
    },
    drill: [
      {
        day: "Step 1",
        title: "Just notice",
        task: "Pick three ordinary comments someone might make today. Identify the emotionally loaded word in each. Don't act — just practice spotting the thread.",
      },
      {
        day: "Step 2",
        title: "Write the move",
        task: "For each comment, write the minimum viable follow-up in five words or less. Examples: \"Weird how?\" / \"Intense how?\" / \"What was that like?\"",
      },
      {
        day: "Step 3",
        title: "Say it aloud",
        task: "Say each line once in a normal conversational voice. Cut any line that sounds clever, therapeutic, corporate, or rehearsed.",
      },
      {
        day: "Step 4",
        title: "Use the smallest version",
        task: "In the next real conversation, use the smallest natural version once. Did they give more? Did the tone warm? Don't judge — just observe.",
      },
      {
        day: "Step 5",
        title: "Calibrate and contribute",
        task: "After two follow-ups, reflect briefly and add something small from yourself. This prevents interview energy and shows you are a participant, not an interrogator.",
      },
    ],
    checklist: [
      "Did I use the technique because the cue was there, or because I wanted to perform curiosity?",
      "Was my wording shorter than my instinct?",
      "Did the person have more space after my move, or less?",
      "Did I contribute something after following the thread — or only ask questions?",
      "Did I adjust when they gave shorter answers or seemed pressured?",
      "What neighbouring technique would have been better if this one missed?",
    ],
    whyItWorks: "Live-thread follow-ups make you more likable because the other person feels: \"They noticed the real part of what I said.\" The underlying principle is that people become more receptive to you when they first feel you have been receptive to them. Most people fail not from coldness but from bad habits — turning conversations back to themselves too quickly, asking bland questions, following factual details instead of emotional energy, or asking so many questions the exchange feels like an interview.",
    example: {
      without: [
        "Person: \"I just started a new job.\"",
        "You: \"Nice. I hated my first job. My boss was awful.\"",
        "[Conversation turns back to you — they have no reason to elaborate, nothing felt noticed.]",
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
      ],
      note: "The two-option question (\"good-overwhelming or what-have-I-done overwhelming?\") shows attunement and gives them something specific to react to without forcing a direction.",
    },
    notFor: [
      "When they are giving short answers, seem rushed, or are clearly distracted.",
      "When the topic is too private for the depth of the relationship.",
      "When you have already asked several questions in a row — contribute something first.",
      "When they need a direct answer, not more exploration.",
      "When you are steering, prying, or pressuring rather than genuinely curious.",
      "When you are not willing to share anything yourself.",
    ],
    whatItIsNot: [
      "Not simply \"asking more questions\" — too many questions can feel like an interview.",
      "Not therapy-speak, interrogation, or a trick to steer the person.",
      "It is socially intelligent responsiveness — following what is alive in what they just said.",
    ],
    influencePayoff: {
      feeling: "They noticed the real part of what I said.",
      principle: "People become more receptive to you when they first feel you have been receptive to them.",
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
        "They ask so many questions it feels like an interview.",
      ],
    },
    fieldTip: {
      headline: "Follow emotional energy, not just information.",
      body: "The best follow-up usually comes from the word they load with feeling — not the factual detail.",
      example: "\"It was technically fine, just weird.\"",
      dont: "\"Where was it?\"",
      do: "\"Weird how?\"",
    },
    method: [
      {
        step: "Notice",
        title: "Catch the live thread",
        body: "Listen for the word or detail carrying the most energy — usually the emotionally loaded word, not the factual one. That is the thread to pull.",
        examples: [
          { label: "They say", text: "\"It was technically fine, just weird.\"" },
          { label: "Live thread", text: "\"weird\"" },
          { label: "Follow-up", text: "\"Weird how?\"" },
        ],
      },
      {
        step: "Comment",
        title: "Comment before you question",
        body: "A small comment makes the question warmer and less interrogative. It shows you noticed the nuance before asking for more.",
        examples: [
          { label: "Weak", text: "\"Why was it intense?\"" },
          { label: "Better", text: "\"Weirdly intense sounds specific. What made it intense?\"" },
          { label: "Charismatic", text: "\"Good-intense or what-have-I-done intense?\"" },
        ],
      },
      {
        step: "Ask",
        title: "Ask one short question",
        body: "Keep it short, easy to answer, tied to their words, and warm rather than analytical. Don't go too deep too early.",
        examples: [
          { label: "Too clinical", text: "\"How did that impact you emotionally?\"" },
          { label: "Natural", text: "\"Did that throw you a bit?\"" },
        ],
      },
      {
        step: "Reflect",
        title: "Reflect briefly",
        body: "After they answer, show you understood. This is where the move becomes likable — you are not just asking, you are tracking them.",
        examples: [
          { label: "Reflect", text: "\"So it was exciting, but a lot to absorb.\"" },
          { label: "Reflect", text: "\"Sounds like the job was fine, but the uncertainty was draining.\"" },
        ],
      },
      {
        step: "Contribute",
        title: "Contribute after curiosity",
        body: "After one or two follow-ups, add something small from yourself. This stops the conversation from becoming an interview.",
        examples: [
          { label: "Contribute", text: "\"I get that. New places are tiring — you're learning the job and the hidden rules at once.\"" },
          { label: "Contribute", text: "\"That makes sense. There's a difference between being busy and feeling unanchored.\"" },
        ],
      },
    ],
    liveThreadClues: [
      "\"honestly…\"",
      "\"weirdly…\"",
      "\"the strange thing was…\"",
      "\"I didn't expect…\"",
      "\"the best part was…\"",
      "\"the annoying part was…\"",
      "\"it sounds silly, but…\"",
      "\"I was surprised that…\"",
    ],
    depthDial: [
      { depth: "Light", useWhen: "Early conversation", phrase: "\"What happened next?\"" },
      { depth: "Warm", useWhen: "Rapport forming", phrase: "\"What was that like?\"" },
      { depth: "Personal", useWhen: "Trust present", phrase: "\"Did that throw you a bit?\"" },
      { depth: "Meaningful", useWhen: "Deeper conversation", phrase: "\"What did that change for you?\"" },
      { depth: "Intimate", useWhen: "Strong trust only", phrase: "\"Did that change how you saw yourself?\"" },
    ],
    commonMistakes: [
      {
        mistake: "Asking naked questions",
        soundsLike: "\"Why?\"",
        better: "\"That sounds like it mattered. Why was it important?\"",
      },
      {
        mistake: "Stacking too many questions",
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
        soundsLike: "\"That happened to me too…\"",
        better: "\"That makes sense. What did you do next?\"",
      },
      {
        mistake: "Sounding too clinical",
        soundsLike: "\"How did that impact you emotionally?\"",
        better: "\"Did that hit harder than expected?\"",
      },
      {
        mistake: "Never contributing",
        soundsLike: "Only ever asking questions",
        better: "\"I get that. I find the social side of new places more tiring than the work itself.\"",
      },
    ],
    recoveryPhrases: [
      "\"I'm asking because it sounded interesting, not because I'm trying to interrogate you.\"",
      "\"No pressure if you'd rather not get into it.\"",
      "\"That came out more intense than I meant.\"",
      "\"Let me ask that in a less clunky way.\"",
      "\"We can change topic if you'd rather.\"",
      "\"I got curious there. My bad.\"",
      "\"I'll stop making you do all the talking.\"",
      "\"That sounded like a job interview question. What I meant was…\"",
    ],
    bestRecoveryLine: "\"I'm asking because it sounded interesting, but no pressure if you'd rather move on.\"",
    chains: [
      {
        label: "Rapport chain",
        sequence: "Warm comment → live-thread follow-up → reflection → light self-disclosure → appreciation",
        example: [
          "\"That sounds like a big shift.\"",
          "\"What made you choose it?\"",
          "\"So it was partly excitement and partly needing a change.\"",
          "\"I get that. I'm slow to make changes, but once I know, I know.\"",
          "\"I like how clearly you thought about it.\"",
        ],
      },
      {
        label: "Influence chain",
        sequence: "Understand goal → ask about values → frame around that value → release pressure",
        example: [
          "\"What are you hoping this solves?\"",
          "\"What matters most: speed, quality, or less stress?\"",
          "\"Since you care most about reducing stress, I'd lean to the simpler option.\"",
          "\"But it's your call.\"",
        ],
      },
      {
        label: "Conflict chain",
        sequence: "Validate → live-thread follow-up → clarify the need → propose next step",
        example: [
          "\"I can see why that felt frustrating.\"",
          "\"What part bothered you most?\"",
          "\"So the issue is less the decision and more that it felt sprung on you.\"",
          "\"Can we step back and talk through the reasoning properly?\"",
        ],
      },
      {
        label: "Charisma chain",
        sequence: "Playful observation → live-thread follow-up → reflection → light humour",
        example: [
          "\"That sounds like the short version of a chaotic story.\"",
          "\"What actually happened?\"",
          "\"So you were improvising the entire time.\"",
          "\"Respectfully, that is both impressive and concerning.\"",
        ],
      },
    ],
    relatedTechniques: [
      {
        id: "TC002",
        reason: "Bring back a thread from an earlier conversation, not just the live one.",
      },
      {
        id: "TC010",
        reason: "Open a topic with genuine curiosity when there is no live thread to follow yet.",
      },
      {
        id: "TC016",
        reason: "Acknowledge the feeling first when the thread surfaces inside tension or conflict.",
      },
    ],
    resources: [
      {
        label: "Visual Card — Combined (PDF)",
        description: "Both sides of the technique card in one file",
        href: "cards/TC001/TC001_TwoCard_Combined.pdf",
        type: "pdf",
        group: "Visual Cards",
      },
      {
        label: "Visual Card — Front (PDF)",
        description: "Front side of the two-sided card",
        href: "cards/TC001/TC001_TwoCard_Front.pdf",
        type: "pdf",
        group: "Visual Cards",
      },
      {
        label: "Visual Card — Back (PDF)",
        description: "Back side of the two-sided card",
        href: "cards/TC001/TC001_TwoCard_Back.pdf",
        type: "pdf",
        group: "Visual Cards",
      },
      {
        label: "Single Card Format (PDF)",
        description: "Condensed one-card version",
        href: "cards/TC001/TC001_OneCard.pdf",
        type: "pdf",
        group: "Visual Cards",
      },
      {
        label: "High-res Card Image (PNG)",
        description: "6000px print-quality combined card",
        href: "cards/TC001/TC001_TwoCard_Combined.png",
        type: "png",
        group: "Visual Cards",
      },
      {
        label: "Detailed Guide — Narrative (Word)",
        description: "Full guide in editable Word format",
        href: "cards/TC001/TC001_Detailed_Guide_Normal.docx",
        type: "docx",
        group: "Written Guides",
      },
      {
        label: "Detailed Guide — Narrative (PDF)",
        description: "Full guide, printable PDF version",
        href: "cards/TC001/TC001_Detailed_Guide_Normal.pdf",
        type: "pdf",
        group: "Written Guides",
      },
      {
        label: "Detailed Guide — Table Format (Word)",
        description: "Condensed table layout — editable",
        href: "cards/TC001/TC001_Detailed_Guide_Table.docx",
        type: "docx",
        group: "Written Guides",
      },
      {
        label: "Anki Flashcards (CSV)",
        description: "Import into Anki for spaced-repetition practice",
        href: "cards/TC001/TC001_Anki_Flashcards.csv",
        type: "csv",
        group: "Practice Tools",
      },
      {
        label: "Phrase Bank (CSV)",
        description: "All phrases in spreadsheet format",
        href: "cards/TC001/TC001_Phrase_Bank.csv",
        type: "csv",
        group: "Practice Tools",
      },
    ],
  },

  /* ──────────────────────────────────────────────
     TC002  Live-Thread Follow-Up
  ────────────────────────────────────────────── */
  TC002: {
    id: "TC002",
    overview: {
      coreFormula: ["Note something specific", "Reference it later", "No agenda — just showing you listened"],
      minimumViableMove: "In your next conversation, pick one specific thing the person says and reference it later — even just five minutes later. Nothing more.",
      impact: "Medium",
      difficulty: "Easy",
      misuse: "Low",
      bestFor: [
        "Building rapport and trust over time",
        "Making people feel genuinely heard in meetings",
        "Networking conversations and relationship maintenance",
        "One-on-one check-ins and informal catch-ups",
      ],
    },
    phraseBank: [
      {
        id: "recall-openers",
        label: "Recall Openers",
        tag: "Referencing what they said",
        phrases: [
          "You mentioned earlier that...",
          "Going back to what you said about...",
          "That thing you said about X — I have been thinking about it.",
          "I remembered you said... — how did that go?",
          "Last time we spoke, you mentioned... Any update on that?",
          "You brought up X in passing — I wanted to ask more about it.",
          "I did not forget what you said about... I wanted to come back to it.",
          "That point you made about X stuck with me.",
        ],
      },
      {
        id: "warmth-signals",
        label: "Warmth Signals",
        tag: "Making the reference feel natural",
        phrases: [
          "I am asking because it sounded important, not just making conversation.",
          "That came up again in my thinking after we spoke.",
          "I thought about that on the way home.",
          "It was a throwaway comment but it actually landed with me.",
          "I wanted to circle back — not to push, just to hear more.",
          "Only if you want to say more about it.",
        ],
      },
    ],
    decisionTree: [
      { condition: "Someone mentions something personal or important in passing", action: "Note it mentally. Reference it later or in the next conversation.", phrase: "You mentioned X earlier — I wanted to come back to that." },
      { condition: "You have forgotten the detail but want to show you remember", action: "Acknowledge the approximate memory honestly.", phrase: "You mentioned something about your project last week — I cannot remember the detail, but I wanted to ask how it went." },
      { condition: "The follow-up topic might be sensitive", action: "Soften the reference with an opt-out.", phrase: "Only if you want to share — I just remembered you mentioned X." },
      { condition: "You are at the start of a meeting or conversation", action: "Open with a reference before any agenda.", phrase: "Before we start — you mentioned last time that... Any update?" },
    ],
    ladder: [
      { weak: "Generic 'How are things?' with no memory of past conversations", better: "How have you been?", best: "'Last time we spoke you mentioned X — how did that turn out?'" },
      { weak: "Bringing up a reference in a way that feels like an agenda", better: "I remembered you were dealing with X.", best: "Casual reference with genuine curiosity and no expectation." },
      { weak: "Forgetting entirely and pretending you remember", better: "I think you mentioned something about...", best: "Honest admission: 'I cannot remember the exact detail but I know it was important.'" },
    ],
    scenarios: [
      { situation: "Meeting follow-up: reconnecting after a week", move: "Open with something specific they said last time.", phrase: "Last week you mentioned the deadline was tight — did that resolve?" },
      { situation: "Networking event: second conversation with someone", move: "Reference one specific thing from the first conversation.", phrase: "You mentioned you were weighing two options — did you land on one?" },
      { situation: "Manager check-in: showing you remember context", move: "Reference something they mentioned in passing previously.", phrase: "You said something last month about the team dynamics shifting — I wanted to check in on that." },
      { situation: "Friend or partner: after a difficult conversation", move: "Reference what they shared and show it stayed with you.", phrase: "You mentioned that thing with your family — I have been thinking about it." },
    ],
    calibration: {
      working: [
        "People seem surprised and touched that you remembered.",
        "Conversations open up more than they would have otherwise.",
        "You build trust faster than you expect.",
        "The reference feels natural, not like a performance.",
      ],
      adjust: [
        "The recall feels like a tactic or a technique.",
        "You are referencing things they clearly want to leave behind.",
        "It sounds like a test rather than genuine interest.",
        "You are doing it mechanically without actual curiosity.",
      ],
    },
    drill: [
      { day: "Day 1", title: "Noticing", task: "In one conversation today, consciously note one specific thing the other person says — even if you do not reference it yet." },
      { day: "Day 2", title: "Same-session reference", task: "In one conversation, reference something the person said earlier in the same conversation." },
      { day: "Day 3", title: "Next-day recall", task: "Follow up with one person about something they mentioned yesterday." },
      { day: "Day 4", title: "The specific detail", task: "Practice making your reference specific. Not 'you mentioned work' but 'you mentioned the Tuesday deadline.'" },
      { day: "Day 5", title: "Natural timing", task: "Find the right moment to reference — not forced in, but when it fits the conversation flow." },
      { day: "Day 6", title: "Longer memory", task: "Reference something from a conversation two or more weeks ago." },
      { day: "Day 7", title: "Calibration", task: "Notice: did your references feel genuine? Did people open up? Were any references too intrusive?" },
    ],
    checklist: [
      "Did I actually listen rather than wait for my turn to speak?",
      "Did I note something specific — not just a general topic?",
      "Did I reference it at a natural point rather than forcing it in?",
      "Did I reference it out of genuine interest, not as a technique?",
      "Did I give the other person space to say more or deflect?",
      "Did the reference feel warm and personal — not transactional?",
      "Did I avoid using the recall as leverage or manipulation?",
    ],
    whyItWorks: "Memory is the currency of care — when you remember specific things someone told you, they feel uniquely seen rather than interchangeable. This builds disproportionate trust relative to the effort.",
    example: {
      without: [
        "You: Hey, how are things?",
        "Colleague: Fine, busy.",
        "You: Yeah, same.",
      ],
      with: [
        "You: Last time we spoke you mentioned the merger review was coming up — how did it land?",
        "Colleague: Oh, you remembered that. It actually went really well.",
        "You: I'm glad — I had been curious.",
      ],
    },
    notFor: [
      "When referencing something the person has clearly moved on from or would rather forget.",
      "When you do not genuinely remember — do not fake specificity, it will be detected.",
      "When the reference could feel like surveillance or scorekeeping rather than genuine care.",
    ],
  },

  /* ──────────────────────────────────────────────
     TC003  BLUF: Bottom Line Up Front
  ────────────────────────────────────────────── */
  TC003: {
    id: "TC003",
    overview: {
      coreFormula: ["State the conclusion", "Give one reason", "Offer context if asked"],
      minimumViableMove: "Before speaking or writing, ask: 'What is the one thing I want them to take away?' Say that first.",
      impact: "High",
      difficulty: "Medium",
      misuse: "Medium",
      bestFor: [
        "Presenting to senior stakeholders or decision-makers",
        "Written communication — emails, messages, reports",
        "Answering questions where context buries the point",
        "Any communication where the other person has limited time",
      ],
    },
    phraseBank: [
      {
        id: "bluf-openers",
        label: "BLUF Openers",
        tag: "Leading with the conclusion",
        phrases: [
          "Bottom line: I recommend...",
          "The short answer is...",
          "My conclusion is... — I can explain why if useful.",
          "The decision is...",
          "In one sentence: ...",
          "The answer is yes, with one condition.",
          "The answer is no, and here is the reason.",
          "My recommendation: ...",
        ],
      },
      {
        id: "context-offers",
        label: "Context Offers",
        tag: "Adding detail without burying the lead",
        phrases: [
          "I can give you the background if you need it.",
          "That is the headline — want the detail?",
          "Short version or longer version?",
          "The reasoning is straightforward — want me to walk through it?",
          "Happy to elaborate on any of that.",
          "Three bullet points behind that if it helps.",
        ],
      },
    ],
    decisionTree: [
      { condition: "You are about to explain a long context before the point", action: "Stop. State the point first. Then offer the context.", phrase: "The short answer is X. The context behind that is..." },
      { condition: "Someone asks you a question", action: "Answer the question directly in the first sentence.", phrase: "Yes. / No. / My view is X." },
      { condition: "You are writing an email with multiple paragraphs before the ask", action: "Move the ask to the first line.", phrase: "I need your sign-off on X by Thursday. Context below." },
      { condition: "The topic is complex and you feel you need to build up", action: "Give a one-sentence executive summary first, then build.", phrase: "Summary: we are on track / off track / need a decision. Detail below." },
      { condition: "You bury the point and the person asks 'so what is the bottom line?'", action: "Take that as a signal. Next time, start there.", phrase: "You are right — the point is: ..." },
    ],
    ladder: [
      { weak: "Long preamble then the actual request at the end", better: "I have a request — [context] — could you...?", best: "'I need X by Thursday. Here is why.' Context in one line after." },
      { weak: "Answering a question with 'well, it depends...' before the answer", better: "There are a few factors, but generally...", best: "'The answer is X. The main caveat is Y.'" },
      { weak: "Email that starts with 'Hope you're well, I wanted to reach out about...'", better: "I'm reaching out because...", best: "'I need your input on X. Background below.'" },
    ],
    scenarios: [
      { situation: "Senior exec asks for your view in a meeting", move: "One sentence answer. Then offer to elaborate.", phrase: "My recommendation is X. The main reason is Y. Want the detail?" },
      { situation: "You are presenting a project update", move: "Status first. Then key risks. Then any decisions needed.", phrase: "We are on track for the deadline. One risk I want to flag." },
      { situation: "Writing a message asking for help", move: "State the ask in the first line.", phrase: "Can you review this by Tuesday? I've attached the doc." },
      { situation: "Job interview: 'Tell me about yourself'", move: "One sentence summary. Then context. Not the reverse.", phrase: "I am a [role] with [years] focused on [thing]. Let me give you the context." },
    ],
    calibration: {
      working: [
        "Decision-makers can answer your question faster.",
        "People stop asking 'so what is the point?'",
        "Your written communication gets faster responses.",
        "You feel more confident — you know your own position before speaking.",
      ],
      adjust: [
        "You deliver the conclusion so bluntly it sounds dismissive.",
        "Important context that changes the conclusion gets lost.",
        "You use it in situations that require nuance first (e.g. delivering bad news).",
        "People feel they cannot ask follow-up questions.",
      ],
    },
    drill: [
      { day: "Day 1", title: "Spot the buried lead", task: "In every email you write today, find the main point and move it to line one." },
      { day: "Day 2", title: "Answer first", task: "Every time someone asks you a question today, answer it in the first sentence." },
      { day: "Day 3", title: "The one-sentence test", task: "Before any communication, ask: 'Can I say this in one sentence?' If yes, do that first." },
      { day: "Day 4", title: "Verbal BLUF", task: "In one meeting, state your conclusion before your reasoning. Notice the reaction." },
      { day: "Day 5", title: "Offer context, don't force it", task: "After your bottom line, offer the context rather than giving it automatically." },
      { day: "Day 6", title: "Written practice", task: "Rewrite one email you sent this week to lead with the ask. Notice the difference." },
      { day: "Day 7", title: "Calibration", task: "Was your communication clearer? Did people respond faster? Was anything lost by leading with the conclusion?" },
    ],
    checklist: [
      "Did I state the conclusion or recommendation first?",
      "Did I answer the question in the first sentence?",
      "Did I offer context rather than force it?",
      "Did I avoid starting with background or preamble?",
      "Was my bottom line clear in one sentence?",
      "Did I check whether the context was actually needed?",
      "Did I avoid using BLUF when the situation required care before directness (e.g. bad news)?",
    ],
    whyItWorks: "People's working memory is limited — burying the point forces them to hold context while searching for meaning. Leading with the conclusion lets them allocate attention correctly and process supporting detail more efficiently.",
    example: {
      without: [
        "You: So we looked at the data, considered three options, ran the projections...",
        "(3 minutes later) ...and I think Option B is probably the best approach.",
        "Manager: So what's the actual ask?",
      ],
      with: [
        "You: My recommendation is Option B. The main reason is lower risk. Want the detail?",
        "Manager: Yes — walk me through it.",
      ],
    },
    notFor: [
      "When delivering bad news that requires emotional preparation before the conclusion.",
      "In high-stakes persuasion where building context first changes how the audience receives your point.",
      "When the audience genuinely needs background to evaluate the bottom line — give the bottom line, then immediately offer the context.",
    ],
  },

  /* ──────────────────────────────────────────────
     TC004  Repair Opening
  ────────────────────────────────────────────── */
  TC004: {
    id: "TC004",
    overview: {
      coreFormula: ["Name the rupture lightly", "Take your part", "Reopen the door"],
      minimumViableMove: "Name the fact that the last conversation was difficult — without over-explaining it — and say you want to move forward.",
      impact: "High",
      difficulty: "Medium",
      misuse: "Low",
      bestFor: [
        "After a difficult or tense conversation",
        "Following a conflict or disagreement that was not fully resolved",
        "Reconnecting with someone who has gone quiet or distant",
        "Recovering a professional relationship after friction",
      ],
    },
    phraseBank: [
      {
        id: "repair-openers",
        label: "Repair Openers",
        tag: "Naming the rupture",
        phrases: [
          "Last time was harder than I wanted it to be.",
          "I have been thinking about our last conversation.",
          "I do not think that went how either of us wanted.",
          "I want to come back to something from last time.",
          "I think I handled that differently than I should have.",
          "I am not sure I said what I meant last time.",
          "There was something unfinished from our last conversation.",
          "I did not want to leave it there.",
        ],
      },
      {
        id: "ownership-phrases",
        label: "Ownership Phrases",
        tag: "Taking your part without over-apologising",
        phrases: [
          "The part I can own is that I came in too hot.",
          "I could have said that more clearly.",
          "I was more defensive than the situation called for.",
          "I did not listen as well as I could have.",
          "I made it harder than it needed to be.",
          "I am not saying all of it was me — I am saying my part contributed.",
          "I am sorry for the way I said it, not necessarily what I said.",
        ],
      },
    ],
    decisionTree: [
      { condition: "The other person is still cold or distant", action: "Name the fact of the distance without blame, then reopen.", phrase: "Things have felt a bit off since Tuesday. I did not want to ignore that." },
      { condition: "You are not sure who was more at fault", action: "Own your part only. Do not ask them to own theirs.", phrase: "I know I could have handled that better on my end." },
      { condition: "You want to apologise but did nothing wrong", action: "Apologise for impact, not intent, only if genuine.", phrase: "I am sorry it landed that way — that was not my intention." },
      { condition: "The other person brings it up first", action: "Validate that they are raising it. Do not get defensive.", phrase: "I am glad you said something. You are right that we should talk about it." },
      { condition: "You are avoiding the conversation entirely", action: "The longer you wait, the harder it gets. Name it sooner rather than later.", phrase: "I know we have been avoiding this. I would rather not." },
    ],
    ladder: [
      { weak: "Pretending the rupture did not happen", better: "Acknowledging something felt off", best: "'Last time was harder than I wanted. Can we come back to it?'" },
      { weak: "Over-apologising to smooth it over without real repair", better: "I am sorry, that was not great.", best: "Name what you did, own it specifically, then ask to move forward." },
      { weak: "Bringing it up and immediately defending yourself", better: "I know that did not go well.", best: "'I know I came in wrong there. I wanted to say that before we moved on.'" },
    ],
    scenarios: [
      { situation: "After a tense meeting where things were said badly", move: "Brief, direct, no drama — just reopen the channel.", phrase: "Yesterday was hard. I did not want to leave it like that." },
      { situation: "Partner or close friend after an argument", move: "Name the rupture, take your specific part, and ask to reconnect.", phrase: "I have been thinking about last night. I came in too sharply." },
      { situation: "Colleague who has gone quiet after friction", move: "Check in gently without over-explaining.", phrase: "Things have felt a bit different between us. I wanted to check in." },
      { situation: "You need to work with someone you argued with", move: "Address it before getting to the task.", phrase: "Before we get into this — I want to clear the air from last week first." },
    ],
    calibration: {
      working: [
        "The other person softens or opens up after you name it.",
        "The air clears faster than you expected.",
        "You feel relieved rather than more exposed.",
        "Work or the relationship gets easier after the repair.",
      ],
      adjust: [
        "Your repair opener triggers another argument.",
        "You are repairing so much that no rupture is ever resolved.",
        "You are owning the other person's part as well as your own.",
        "The conversation turns into a re-run of the original fight.",
      ],
    },
    drill: [
      { day: "Day 1", title: "Spot the unresolved", task: "Identify one relationship or conversation that has unfinished tension. Do not act yet — just identify it." },
      { day: "Day 2", title: "Name the specific part", task: "Practice naming your specific contribution to the rupture in one sentence, without mentioning the other person's part." },
      { day: "Day 3", title: "Low-stakes repair", task: "Repair a small, recent friction — something from this week — using the opening formula." },
      { day: "Day 4", title: "Timing", task: "Notice when you are avoiding a repair conversation. Name what is keeping you from starting it." },
      { day: "Day 5", title: "The medium-stakes repair", task: "Address one relationship that has been off for more than a week." },
      { day: "Day 6", title: "Brevity", task: "Practice keeping the repair opening short: two sentences maximum before inviting their response." },
      { day: "Day 7", title: "Calibration", task: "Did the relationships you repaired improve? Did any repair feel forced or premature?" },
    ],
    checklist: [
      "Did I name the rupture rather than pretend it did not happen?",
      "Did I take my specific part without over-apologising?",
      "Did I keep the opening brief rather than giving a long explanation?",
      "Did I invite the other person in rather than making a speech?",
      "Did I avoid bringing up their fault in my repair opening?",
      "Did I avoid doing this so early it felt premature or forced?",
      "Did the conversation move forward after the repair?",
      "Did I follow through on any commitments I made in the repair?",
    ],
    whyItWorks: "Unacknowledged ruptures become permanent walls — the longer friction goes unnamed, the more interpretation fills the silence. A repair opening prevents the other person from concluding you do not care.",
    example: {
      without: [
        "(Continuing to work normally after a tense meeting, avoiding eye contact)",
        "(Colleague interprets the silence as confirmation that you are dismissive or indifferent)",
      ],
      with: [
        "You: I've been thinking about Tuesday — I don't think that went how either of us wanted. I'd like to come back to it when you have a moment.",
        "Colleague: Yeah — I'm glad you said something.",
      ],
    },
    notFor: [
      "When the other person needs space and is not ready to engage — forcing a repair can inflame.",
      "When you have no genuine ownership to take — empty apologies make ruptures worse.",
      "When the friction was minor and naming it formally elevates it unnecessarily.",
    ],
  },

  /* ──────────────────────────────────────────────
     TC005  Clean Request
  ────────────────────────────────────────────── */
  TC005: {
    id: "TC005",
    overview: {
      coreFormula: ["What you need", "By when", "Why it matters", "One ask — stop"],
      minimumViableMove: "Before making any request, answer: what specifically do I need, and by when? State those two things. Leave out the rest.",
      impact: "High",
      difficulty: "Easy-Medium",
      misuse: "Low",
      bestFor: [
        "Delegating tasks clearly",
        "Asking colleagues for help without ambiguity",
        "Setting expectations in professional relationships",
        "Reducing back-and-forth caused by unclear requests",
      ],
    },
    phraseBank: [
      {
        id: "request-core",
        label: "Clean Request Core",
        tag: "What, when, why",
        phrases: [
          "I need X from you by Thursday at 5 pm.",
          "Could you do X? I need it before the 3 pm call.",
          "One specific thing: I need you to...",
          "I have a simple request — can you...?",
          "The ask is: please send me X by end of day.",
          "I need your input on one thing before tomorrow.",
          "Can you confirm you have received this and flag any blockers?",
          "The deliverable I need from you is X.",
        ],
      },
      {
        id: "request-followup",
        label: "Request Follow-Up",
        tag: "Confirming and clarifying",
        phrases: [
          "Does that feel doable by then?",
          "Any blockers I should know about?",
          "Let me know if the scope is unclear.",
          "Flag me if that timeline does not work.",
          "Does anything in that ask need clarification?",
          "I want to make sure that lands clearly — any questions?",
        ],
      },
    ],
    decisionTree: [
      { condition: "You have a vague request in mind", action: "Answer: what specifically? By when? Then make the request.", phrase: "I need X completed by Y. Let me know if anything is unclear." },
      { condition: "The other person does not know why the task matters", action: "Add one sentence on the stakes.", phrase: "This feeds into the board meeting, so I need it by Wednesday." },
      { condition: "You are making multiple requests at once", action: "Make the most important one. Do not bundle.", phrase: "One thing for now — can you do X? I will follow up with the rest." },
      { condition: "The request was not done to spec", action: "Clarify what was missing rather than blame.", phrase: "I should have been clearer — what I actually needed was..." },
      { condition: "Someone asks a vague favour", action: "Ask: what specifically and when?", phrase: "Happy to help — what do you need and when?" },
    ],
    ladder: [
      { weak: "Vague: 'Could you look at this at some point?'", better: "Can you review this when you get a chance?", best: "'Can you review section 3 and send your notes by Thursday noon?'" },
      { weak: "Over-explaining before making the ask", better: "I have a project that needs input — can you help?", best: "'I need your input on X by [date]. Context: one sentence.' Then stop." },
      { weak: "Multiple bundled requests in one message", better: "I have a few things — can we go through them?", best: "One clean request. Then a second message for the next one." },
    ],
    scenarios: [
      { situation: "Delegating a task to a team member", move: "What, by when, what good looks like.", phrase: "Can you have the first draft of X ready by Friday at noon? Three pages max." },
      { situation: "Asking a busy senior person for something", move: "Crisp ask up front, one line of context.", phrase: "I need five minutes of your time before the 3 pm call to get your sign-off on the approach." },
      { situation: "Following up because a task was not done", move: "Restate the request clearly rather than criticising.", phrase: "I wanted to follow up on X — could you get that to me today?" },
      { situation: "Asking for help from a peer", move: "Specific ask with a respectful timeline.", phrase: "Could you look over this proposal and flag any gaps? I need it back by Wednesday." },
    ],
    calibration: {
      working: [
        "Things get done more often without follow-up chasing.",
        "People come back with fewer clarifying questions.",
        "You get fewer vague or incomplete responses.",
        "You feel clearer about what you need before you ask.",
      ],
      adjust: [
        "Requests feel cold or demanding.",
        "The person needs context you skipped.",
        "You are asking for too many things at once.",
        "Important expectations (quality, format) are assumed rather than stated.",
      ],
    },
    drill: [
      { day: "Day 1", title: "Audit your requests", task: "Review one request you made today. Was it specific? Did it include a deadline? Could it be cleaner?" },
      { day: "Day 2", title: "What and when", task: "For every request you make today, include both what you need and by when." },
      { day: "Day 3", title: "One ask at a time", task: "Send your requests as separate messages rather than bundled. Notice if clarity improves." },
      { day: "Day 4", title: "The why in one line", task: "Add one line of context to an important request. Just one line." },
      { day: "Day 5", title: "Confirm understanding", task: "After making a request, ask: 'Anything unclear?' once. Not repeatedly." },
      { day: "Day 6", title: "Written requests", task: "Rewrite one email request to strip it down: ask first, context second, no filler." },
      { day: "Day 7", title: "Calibration", task: "Did your requests land better this week? Were there fewer follow-up questions or missed deadlines?" },
    ],
    checklist: [
      "Did I state the request specifically — not vaguely?",
      "Did I include a clear deadline or timeline?",
      "Did I make one request, not several bundled together?",
      "Did I add context only where genuinely needed?",
      "Did I confirm understanding without nagging?",
      "Was the request clear enough that the person did not have to guess what I meant?",
      "Did I avoid making the request sound like a demand or an instruction?",
    ],
    whyItWorks: "Ambiguous requests create ambiguous responses — when people do not know exactly what is needed, they either do nothing or do the wrong thing. A clean request removes interpretation and makes it easy to say yes.",
    example: {
      without: [
        "You: It would be great if someone could kind of look at this when they get a chance.",
        "(Three days pass with no response.)",
      ],
      with: [
        "You: Can you review section 2 of this doc and give me your feedback by Thursday? Thirty minutes should be enough.",
        "Colleague: Sure — I'll have it to you Wednesday.",
      ],
    },
    notFor: [
      "When the relationship is such that a formal request would feel clinical or cold.",
      "In brainstorming contexts where you want open-ended input rather than a specific deliverable.",
      "When you genuinely do not know what you need — clarify that first, then make the request.",
    ],
  },

  /* ──────────────────────────────────────────────
     TC006  Genuine Specific Compliment
  ────────────────────────────────────────────── */
  TC006: {
    id: "TC006",
    overview: {
      coreFormula: ["Specific thing", "Why it stood out", "Stop"],
      minimumViableMove: "Give one compliment today that names the specific thing you observed and why it mattered to you. Do not add qualifiers or requests after it.",
      impact: "Medium",
      difficulty: "Easy",
      misuse: "Medium",
      bestFor: [
        "Building trust and goodwill with colleagues",
        "Motivating people authentically",
        "Strengthening relationships without flattery",
        "After someone does good work, especially unnoticed work",
      ],
    },
    phraseBank: [
      {
        id: "specific-praise",
        label: "Specific Praise",
        tag: "Naming the thing",
        phrases: [
          "The way you handled that question in the meeting was sharp.",
          "That document was really well-structured — easy to follow.",
          "I noticed how calm you stayed under pressure today.",
          "The way you explained that to the client was exactly right.",
          "You spotted something in the data that nobody else caught.",
          "That was a good call — and I do not think it was easy to make.",
          "The edit you made to that paragraph made it much clearer.",
          "You handled that pushback with real composure.",
        ],
      },
      {
        id: "impact-phrases",
        label: "Impact Phrases",
        tag: "Why it mattered",
        phrases: [
          "It made the difference in how the meeting landed.",
          "That kind of thing does not go unnoticed.",
          "I wanted to say it because I meant it.",
          "I have been thinking about that since yesterday.",
          "That is not a small thing — it takes skill.",
          "That made my job easier and I wanted to acknowledge it.",
        ],
      },
    ],
    decisionTree: [
      { condition: "You want to compliment someone but it feels generic", action: "Name one specific thing. Drop the generic opener.", phrase: "That specific decision you made — the one about X — was really well-judged." },
      { condition: "You want to compliment and then ask for something", action: "Give the compliment cleanly on its own. Make the ask separately and later.", phrase: "I just wanted to say that. No agenda — I'll follow up about the project separately." },
      { condition: "The person deflects or minimises your compliment", action: "Gently hold the compliment.", phrase: "I know you will say it was nothing — I do not agree." },
      { condition: "You give a lot of compliments and they feel cheap", action: "Give fewer. Choose the ones you actually mean.", phrase: "I do not say this often, but..." },
    ],
    ladder: [
      { weak: "Generic: 'Great job today!'", better: "You did well in that meeting.", best: "'The way you stayed calm when they pushed back — that changed the whole dynamic.'" },
      { weak: "Compliment attached to a request", better: "You did great, and while I have you — could you...?", best: "Compliment on its own, request in a separate message." },
      { weak: "Vague praise: 'You are really talented'", better: "Your presentation skills are strong.", best: "'That opening line in your talk changed the energy in the room.'" },
    ],
    scenarios: [
      { situation: "Colleague who did unnoticed work well", move: "Name the specific work and the impact it had.", phrase: "The report you put together — the structure made it really easy to use. I noticed." },
      { situation: "Direct report who handled a difficult situation", move: "Be specific about what they did and why it worked.", phrase: "The way you responded to that complaint was exactly right. I was impressed." },
      { situation: "Manager who gave good feedback", move: "Thank them specifically for what was useful.", phrase: "The feedback you gave last week on the proposal was genuinely helpful — especially the point about the opening." },
      { situation: "Friend or partner who made an effort you noticed", move: "Name the specific effort, not the result.", phrase: "I noticed you did X when you did not have to. I just wanted to say that." },
    ],
    calibration: {
      working: [
        "People light up or seem genuinely touched.",
        "The compliment does not create awkwardness.",
        "You mean it — you are not performing praise.",
        "The relationship warms without any agenda.",
      ],
      adjust: [
        "Compliments feel transactional or manipulative.",
        "You are giving praise to get something.",
        "The praise is so frequent it loses meaning.",
        "People do not believe you — your compliments are too broad.",
      ],
    },
    drill: [
      { day: "Day 1", title: "Noticing", task: "Observe one thing today that someone does well. Write it down but do not say it yet." },
      { day: "Day 2", title: "The specific test", task: "Give one compliment that includes a specific observed detail." },
      { day: "Day 3", title: "No agenda", task: "Give one compliment with nothing attached — no ask, no follow-up, no transition to another topic." },
      { day: "Day 4", title: "Delayed delivery", task: "Tell someone something you noticed about them last week or last month that you never said." },
      { day: "Day 5", title: "Written praise", task: "Send one short written note complimenting something specific." },
      { day: "Day 6", title: "Public vs private", task: "Decide whether the compliment is better said privately or in front of others. Say it accordingly." },
      { day: "Day 7", title: "Calibration", task: "Did your compliments land well? Were any too vague? Did any feel forced or like performance?" },
    ],
    checklist: [
      "Did I name the specific thing I observed — not just 'good job'?",
      "Did I say why it stood out to me?",
      "Did I stop after the compliment rather than add a request?",
      "Did I mean it — or was it a social lubricant?",
      "Did I avoid the compliment-sandwich (compliment-criticism-compliment)?",
      "Did the timing feel natural, not forced?",
      "Did I resist over-complimenting in a way that loses meaning?",
    ],
    whyItWorks: "Generic praise is so common it no longer registers — specificity signals actual attention. When you name the exact behaviour you noticed, the person knows the compliment is real and it reinforces precisely what you want to see more of.",
    example: {
      without: [
        "You: Great job on that presentation!",
        "Colleague: Thanks. (Uncertain what they did well, compliment fades quickly)",
      ],
      with: [
        "You: The way you handled the pushback on slide 7 — staying calm and going straight to the data — that was exactly the right move.",
        "Colleague: That moment was harder than it looked. Thank you for noticing.",
      ],
    },
    notFor: [
      "When you are fishing for a reciprocal compliment — the motive will be sensed.",
      "In formal performance reviews where specific praise can inadvertently exclude other positive qualities.",
      "When the compliment is about something outside the person's control rather than their choices or skill.",
    ],
  },

  /* ──────────────────────────────────────────────
     TC007  Disagreement Without Contempt
  ────────────────────────────────────────────── */
  TC007: {
    id: "TC007",
    overview: {
      coreFormula: ["Disagree with the idea", "Stay curious", "No dismissal signals"],
      minimumViableMove: "Before disagreeing, check your face and tone. Remove any dismissal — eye-roll, sigh, 'obviously', sarcasm. Then disagree with the position, not the person.",
      impact: "High",
      difficulty: "Medium",
      misuse: "Low",
      bestFor: [
        "High-stakes disagreements where the relationship must stay intact",
        "Peer-to-peer pushback in professional settings",
        "Disagreeing with someone more senior without damaging the relationship",
        "Debates where you are likely to be wrong about something",
      ],
    },
    phraseBank: [
      {
        id: "disagreement-openers",
        label: "Disagreement Openers",
        tag: "Stating the difference without contempt",
        phrases: [
          "I see this differently — my view is...",
          "I do not think that is quite right, and here is why.",
          "I want to push back on one specific part of that.",
          "I disagree, and I want to explain my reasoning.",
          "That is not how I read the situation — here is my read.",
          "I would reach a different conclusion from the same data.",
          "I think there is a better option, and I want to explain why.",
          "I have a different view on this, and I think it matters.",
        ],
      },
      {
        id: "curiosity-phrases",
        label: "Curiosity Phrases",
        tag: "Staying open while disagreeing",
        phrases: [
          "Help me understand how you got there.",
          "I want to make sure I am disagreeing with what you actually said.",
          "Is there something I am missing that would change my view?",
          "Walk me through the part I am not seeing.",
          "I might be wrong — what would change your position?",
          "I want to understand your reasoning before I push back harder.",
        ],
      },
    ],
    decisionTree: [
      { condition: "You disagree strongly and feel contempt rising", action: "Pause. Separate the idea from the person. Then respond.", phrase: "I want to be direct about this without being dismissive." },
      { condition: "The other person is using contempt on you", action: "Name it calmly without matching it.", phrase: "I notice that landed with some edge. I would rather talk about the actual issue." },
      { condition: "You disagree but are not sure you are right", action: "Disagree tentatively. Stay curious.", phrase: "I think this is wrong, but I want to understand your reasoning before I say that more firmly." },
      { condition: "The disagreement is personal as well as professional", action: "Separate the professional point from the personal dimension explicitly.", phrase: "I want to keep this on the work question, not on the personal level." },
      { condition: "You have been right about this before and feel vindicated", action: "Be careful. Contempt creeps in through 'told you so' energy.", phrase: "I think this confirms the concern I raised. I am not saying I was right — I am saying the data suggests..." },
    ],
    ladder: [
      { weak: "Dismissive sigh, eye-roll, or 'obviously not'", better: "I do not think that is the right approach.", best: "'I disagree — and I want to explain my reasoning.'" },
      { weak: "Aggressive disagreement: 'That is completely wrong'", better: "I do not agree with that conclusion.", best: "'I reach a different conclusion. Here is what I am seeing.'" },
      { weak: "Disguised contempt: 'Well, I suppose if you want to look at it that way...'", better: "There are other ways to look at this.", best: "Direct disagreement with no passive-aggressive framing." },
    ],
    scenarios: [
      { situation: "Colleague proposes an approach you think is flawed", move: "Name the disagreement specifically. Stay on the idea.", phrase: "I think there is a problem with the approach, and I want to name it clearly." },
      { situation: "Senior person makes a claim you believe is incorrect", move: "Disagree respectfully on the substance, not the status.", phrase: "I want to respectfully push back on that — the data I have seen suggests otherwise." },
      { situation: "Debate where emotions are running high", move: "Slow down. Remove contempt signals. State disagreement plainly.", phrase: "I disagree with that and I want to explain why — without this getting heated." },
      { situation: "You realise mid-disagreement you might be wrong", move: "Say so. It builds more credibility than pressing on.", phrase: "Actually — hold on. I want to reconsider that." },
    ],
    calibration: {
      working: [
        "The other person hears your disagreement without getting defensive.",
        "Disagreements stay on the substance rather than turning personal.",
        "You feel firm and clear without feeling aggressive.",
        "The relationship stays intact after the disagreement.",
      ],
      adjust: [
        "Your tone sounds like contempt even when your words do not.",
        "You are staying so careful that you are not actually disagreeing.",
        "The other person reads your neutrality as agreement.",
        "You are suppressing contempt rather than genuinely releasing it.",
      ],
    },
    drill: [
      { day: "Day 1", title: "Contempt audit", task: "Notice every time you feel contempt in a conversation today — even mild contempt. Do not act — just notice." },
      { day: "Day 2", title: "Separate idea from person", task: "In one disagreement, consciously target the idea not the person. Notice the difference." },
      { day: "Day 3", title: "Remove dismissal signals", task: "Eliminate sighs, eye-rolls, 'obviously', and sarcasm from one disagreement today." },
      { day: "Day 4", title: "Stay curious", task: "After disagreeing, ask one genuine question about their reasoning." },
      { day: "Day 5", title: "Direct disagreement practice", task: "State one disagreement plainly using 'I disagree because...' with no softening or hedging." },
      { day: "Day 6", title: "High-stakes practice", task: "Use this in one real disagreement that matters — with a colleague, manager, or partner." },
      { day: "Day 7", title: "Calibration", task: "Did your disagreements stay productive? Did the relationships hold? Was anything lost by being more direct?" },
    ],
    checklist: [
      "Did I disagree with the idea, not the person?",
      "Did I remove contempt signals — tone, face, word choice?",
      "Did I state the disagreement plainly rather than hiding it?",
      "Did I stay curious about their reasoning?",
      "Did I avoid sarcasm, eye-rolls, and dismissive language?",
      "Did I stay on the substance of the disagreement?",
      "Did the relationship remain intact after the disagreement?",
      "Did I consider that I might be wrong?",
    ],
    whyItWorks: "Contempt — expressed through eye-rolls, dismissive tone, or sarcastic framing — activates the deepest threat response and permanently damages credibility. Separating your disagreement from any signal of disrespect keeps the conversation about ideas rather than status.",
    example: {
      without: [
        "You: (sighing) That would never work — I can't believe we're still discussing this.",
        "Colleague: (shuts down, stops contributing to the meeting)",
      ],
      with: [
        "You: I see it differently — I think there's a real risk this approach misses. Can I show you what the data suggests?",
        "Colleague: Sure — show me.",
      ],
    },
    notFor: [
      "When the other person's position is genuinely harmful and requires sharp, unambiguous challenge — softness can imply tacit endorsement.",
      "In high-stakes negotiations where tactical firmness is operationally necessary.",
      "When you have already tried respectful disagreement repeatedly and the priority is clarity over tone.",
    ],
  },

  /* ──────────────────────────────────────────────
     TC008  No-Overexplaining Discipline
  ────────────────────────────────────────────── */
  TC008: {
    id: "TC008",
    overview: {
      coreFormula: ["Make the point", "Stop", "Wait", "Add one sentence only if pressed"],
      minimumViableMove: "After making your point, stop before adding another sentence. Sit in the silence. If you feel the pull to add more, resist it for five seconds.",
      impact: "High",
      difficulty: "Hard",
      misuse: "Low",
      bestFor: [
        "Any communication under pressure or scrutiny",
        "Presenting to senior audiences",
        "Answering interview or viva-style questions",
        "Avoiding defensive spirals when challenged",
      ],
    },
    phraseBank: [
      {
        id: "stopping-phrases",
        label: "Stopping Phrases",
        tag: "Signals that you are done",
        phrases: [
          "That is my position.",
          "I will leave it there.",
          "Happy to expand if that would help.",
          "That is the short version.",
          "I could say more — I think that is the main point though.",
          "Let me stop there and see if you have questions.",
          "That is it.",
        ],
      },
      {
        id: "recovery-stops",
        label: "Recovery Stops",
        tag: "Catching yourself mid-overexplain",
        phrases: [
          "Actually — I am over-explaining. The point is simply: ...",
          "Let me stop there. I was adding too much.",
          "I have made the point. Let me leave it.",
          "I tend to add too much. The actual point is: ...",
          "Let me cut that down: ...",
        ],
      },
    ],
    decisionTree: [
      { condition: "You have made your point and feel the urge to add more", action: "Notice the urge. Pause. Say nothing. See if they respond.", phrase: "" },
      { condition: "They look confused after your point", action: "Ask a clarifying question rather than adding more explanation.", phrase: "Does that answer the question, or would a different angle help?" },
      { condition: "You catch yourself mid-overexplain", action: "Stop. Name it. Restate the core point.", phrase: "Let me cut that down — the actual answer is: ..." },
      { condition: "They press for more detail", action: "Now you can add — but one sentence at a time, then stop again.", phrase: "The one detail I would add is..." },
      { condition: "You overexplain because you are nervous", action: "Slow down. The overexplaining is coming from pressure — not from the content needing more.", phrase: "I want to answer that directly. The answer is: ..." },
    ],
    ladder: [
      { weak: "Three paragraphs where one sentence would have worked", better: "Here is the answer — there are three reasons behind it...", best: "One sentence answer. Then silence. Add detail only if asked." },
      { weak: "Restating your point three different ways", better: "I want to make sure I am being clear — ...", best: "State it once, clearly. Trust it landed. Stop." },
      { weak: "Adding qualifiers and caveats that dilute the point", better: "There are a few caveats worth noting.", best: "Make the point. Add one caveat only if essential. Stop." },
    ],
    scenarios: [
      { situation: "Answering an interview question", move: "Answer in two sentences. Pause. Let the interviewer respond.", phrase: "My experience in X has been Y. That is the core of it." },
      { situation: "Presenting a recommendation to a senior person", move: "Give the recommendation. One reason. Stop.", phrase: "I recommend X. The main reason is Y." },
      { situation: "Being challenged on a decision", move: "Defend once, clearly. Do not add defences on top of defences.", phrase: "The reason I made that call was X. I am happy to discuss it." },
      { situation: "Explaining yourself after a misunderstanding", move: "Say what you meant once. Resist the urge to keep justifying.", phrase: "What I meant was X. That is the full version." },
    ],
    calibration: {
      working: [
        "People ask follow-up questions rather than glazing over.",
        "You feel more confident after stopping — not more exposed.",
        "Your points land more clearly.",
        "The conversation becomes two-way rather than a monologue.",
      ],
      adjust: [
        "You are stopping too soon and leaving out important context.",
        "Silence after your point reads as uncertainty.",
        "You are confusing brevity with unhelpful vagueness.",
        "You stop explaining but your body language signals that you are not done.",
      ],
    },
    drill: [
      { day: "Day 1", title: "Notice the urge", task: "In one conversation today, notice every moment when you want to add more after you have made your point. Do not change anything — just notice." },
      { day: "Day 2", title: "Stop after one sentence", task: "In three exchanges today, stop after one sentence answer and wait." },
      { day: "Day 3", title: "The pause test", task: "After making your main point, pause for three full seconds before adding anything else." },
      { day: "Day 4", title: "Catch mid-overexplain", task: "Practise the recovery: 'Let me cut that down — the point is: ...' Use it once today." },
      { day: "Day 5", title: "Two-sentence limit", task: "Set a self-imposed limit of two sentences for answers to direct questions. Notice the effect." },
      { day: "Day 6", title: "High-pressure context", task: "Use this in a meeting or presentation where you would normally over-explain." },
      { day: "Day 7", title: "Calibration", task: "Did your communication land better? Did anyone ask for more detail? Did any brevity feel underpowered?" },
    ],
    checklist: [
      "Did I make my point and stop — without adding another sentence?",
      "Did I resist the urge to restate the same point three different ways?",
      "Did I avoid adding qualifiers that diluted the point?",
      "Did I wait to see if they asked for more before explaining further?",
      "Did I catch myself overexplaining and self-correct?",
      "Did I trust that my point had landed rather than re-explaining it?",
      "Did I keep my energy and tone steady rather than speeding up with more words?",
    ],
    whyItWorks: "Over-explanation signals anxiety or low confidence in your position — it invites challenge by demonstrating uncertainty. Saying what you mean and stopping signals that you believe it, which paradoxically makes others more receptive.",
    example: {
      without: [
        "You: I was thinking we could maybe try this approach — though obviously there are other ways and I'm not sure it's right and you might know better, but potentially...",
        "Manager: (interrupts) So what are you actually recommending?",
      ],
      with: [
        "You: I'd go with Option A. The main reason is cost. Happy to explain more if useful.",
        "Manager: That's clear — let's go with it.",
      ],
    },
    notFor: [
      "When the audience genuinely needs context to evaluate your position — brevity without context can feel dismissive.",
      "In teaching situations where the explanation is the entire value.",
      "When legal, medical, or safety contexts require thorough disclosure regardless of length.",
    ],
  },

  /* ──────────────────────────────────────────────
     TC009  Summary Check
  ────────────────────────────────────────────── */
  TC009: {
    id: "TC009",
    overview: {
      coreFormula: ["Pause after key exchange", "Mirror what you understood", "Check accuracy"],
      minimumViableMove: "After any exchange where misalignment is possible, say: 'What I understood from that is X — is that right?' Then listen.",
      impact: "Medium",
      difficulty: "Easy",
      misuse: "Low",
      bestFor: [
        "Complex or high-stakes conversations where misunderstanding is costly",
        "Meetings where decisions are made verbally",
        "Situations where instructions or expectations are given",
        "Any conversation where both parties might leave with different interpretations",
      ],
    },
    phraseBank: [
      {
        id: "summary-checks",
        label: "Summary Checks",
        tag: "Confirming understanding",
        phrases: [
          "What I am taking away from this is...",
          "Let me check I have understood: you are saying...",
          "So the upshot is X — is that right?",
          "My read of this is... does that match yours?",
          "Just to confirm: we are agreed on X?",
          "I want to make sure we are aligned — my understanding is...",
          "Before we move on — I understood that to mean...",
          "Checking: the decision we just made is...",
        ],
      },
      {
        id: "check-invitations",
        label: "Check Invitations",
        tag: "Inviting correction",
        phrases: [
          "Tell me if I have that wrong.",
          "Correct me if I have missed anything.",
          "Is there something in that I have missed?",
          "Where am I off?",
          "Is my read accurate?",
        ],
      },
    ],
    decisionTree: [
      { condition: "A decision was made verbally and you want to confirm it", action: "Summarise the decision back in one sentence.", phrase: "So we are going with X, and the deadline is Y — is that correct?" },
      { condition: "You are unsure what was meant", action: "Summarise your interpretation and ask if it is right.", phrase: "I want to check I understood — my read was X. Did I get that right?" },
      { condition: "Someone else is unsure what was meant", action: "Offer to summarise for them.", phrase: "Let me say back what I understood and see if that helps." },
      { condition: "You are at the end of a long meeting", action: "Summarise the key decisions and owners before ending.", phrase: "Before we close — the three things we agreed on are: ..." },
    ],
    ladder: [
      { weak: "Walking out of a meeting without confirming what was decided", better: "Just to recap before we go...", best: "Specific summary of each decision with owner and timeline, confirmed by the group." },
      { weak: "Assuming you understood without checking", better: "I think I understood — let me know if not.", best: "'My understanding is X — is that right?' Then actually listen for the correction." },
      { weak: "Summarising in a way that re-argues your point", better: "Let me recap what was said.", best: "Neutral summary that reflects what was actually said, not your preferred version." },
    ],
    scenarios: [
      { situation: "End of a meeting where decisions were made", move: "Name each decision, who owns it, and by when.", phrase: "Before we close — we decided X, Y owns it, and the deadline is Z." },
      { situation: "After receiving complex instructions", move: "Summarise back before starting the work.", phrase: "Let me check I have that right: you need X done by Y in Z format." },
      { situation: "After a tense conversation where alignment is uncertain", move: "Summarise what was agreed without editorialising.", phrase: "My understanding of where we landed is... Is that yours too?" },
      { situation: "After a long discussion where the thread was lost", move: "Name what you think the conclusion was.", phrase: "I want to make sure we did not lose the thread — I think the decision was X." },
    ],
    calibration: {
      working: [
        "Fewer misunderstandings downstream.",
        "People feel heard because you reflected their words back accurately.",
        "Meetings end with clearer next steps.",
        "You catch gaps in alignment before they become problems.",
      ],
      adjust: [
        "Your summary subtly restates your preferred outcome.",
        "You are summarising so often it slows conversations down.",
        "People feel you are not trusting them to be clear.",
        "Your summaries are too long and add new content.",
      ],
    },
    drill: [
      { day: "Day 1", title: "End-of-meeting recap", task: "At the end of one meeting, summarise the decisions made and confirm with the room." },
      { day: "Day 2", title: "After instructions", task: "After receiving any instructions or requests today, summarise them back before you start." },
      { day: "Day 3", title: "Check one assumption", task: "Identify one assumption you have made in a conversation and check it explicitly." },
      { day: "Day 4", title: "Neutral summary", task: "Practice summarising what was said without adding your interpretation or opinion." },
      { day: "Day 5", title: "The short check", task: "Use a one-sentence summary check in three conversations today." },
      { day: "Day 6", title: "Written summary", task: "After a key meeting, send a short email summary of what was decided." },
      { day: "Day 7", title: "Calibration", task: "Did your checks catch any misalignments? Were any summaries corrected? Did any feel like slowing things down?" },
    ],
    checklist: [
      "Did I pause at the right moment to check understanding?",
      "Did I summarise accurately — without adding my preferred interpretation?",
      "Did I explicitly invite correction?",
      "Did I listen to the response rather than just confirming my summary?",
      "Did I use this at the end of key meetings and conversations?",
      "Did I act on any corrections that came from the check?",
      "Did I avoid over-using it to the point of slowing things down?",
    ],
    whyItWorks: "Comprehension illusions are common — people nod along without forming a coherent understanding. Paraphrasing back forces active processing and catches misalignment before it becomes a costly mistake downstream.",
    example: {
      without: [
        "Manager: (30-minute brief) Any questions?",
        "You: No, I think I've got it.",
        "(You implement the wrong version of the plan.)",
      ],
      with: [
        "You: Let me check I have this right — the priority is Q3 launch, not feature completeness, and you want a weekly Friday update. Is that the key shape?",
        "Manager: Exactly — and the Friday update can be just three bullets.",
      ],
    },
    notFor: [
      "In casual conversations where paraphrasing would feel clinical or overly formal.",
      "When you genuinely understood and a summary check would waste the other person's time.",
      "In some cultures and relationships where it signals distrust or condescension.",
    ],
  },

  /* ──────────────────────────────────────────────
     TC010  Curiosity Question
  ────────────────────────────────────────────── */
  TC010: {
    id: "TC010",
    overview: {
      coreFormula: ["Ask from genuine interest", "Open-ended", "Follow up on what they said"],
      minimumViableMove: "Ask one question in your next conversation that you are genuinely curious about — not to make a point, not to steer, just to understand.",
      impact: "Medium",
      difficulty: "Easy",
      misuse: "Low",
      bestFor: [
        "Building genuine relationships",
        "Understanding someone's position before responding",
        "Drawing out quiet people in group settings",
        "Getting better information before making decisions",
      ],
    },
    phraseBank: [
      {
        id: "curiosity-openers",
        label: "Curiosity Openers",
        tag: "Questions from genuine interest",
        phrases: [
          "What made you want to do it that way?",
          "How did you arrive at that?",
          "What is the part that worries you most about this?",
          "What would need to be true for you to change your view on that?",
          "What am I missing from my read of this?",
          "What has your experience of this actually been like?",
          "What is the thing you are not saying?",
          "If you had to name the real issue, what would it be?",
        ],
      },
      {
        id: "followup-questions",
        label: "Follow-Up Questions",
        tag: "Going deeper on what they said",
        phrases: [
          "Say more about that.",
          "What do you mean when you say X?",
          "Can you give me an example?",
          "What happened next?",
          "What was that like for you?",
          "How long has that been the case?",
        ],
      },
    ],
    decisionTree: [
      { condition: "You want to ask a question but have an agenda", action: "Check: are you asking to understand, or to lead them somewhere? Adjust accordingly.", phrase: "I want to understand this before I have a view on it." },
      { condition: "Someone gives a short answer you want to expand", action: "Use a simple open follow-up.", phrase: "Tell me more about that." },
      { condition: "You are in a group and someone is not speaking", action: "Direct a specific curiosity question to them.", phrase: "I was curious to hear your read on this — you have been thinking about it longer than most of us." },
      { condition: "You ask a question and they deflect", action: "Do not chase it. Ask something adjacent that is easier to answer.", phrase: "What is the part you can answer?" },
    ],
    ladder: [
      { weak: "Rhetorical question that is really a statement: 'Don't you think X?'", better: "What do you think about X?", best: "Open, genuinely curious question with no preferred answer baked in." },
      { weak: "Rapid-fire questions that feel like an interrogation", better: "I have a few questions — let me start with the most important one.", best: "One question. Let them answer fully. Follow up on what they actually said." },
      { weak: "Asking a question and then answering it yourself", better: "What is your view? I have mine but I want yours first.", best: "Ask and then stay quiet. Let them actually answer." },
    ],
    scenarios: [
      { situation: "Someone proposes an idea you want to understand before judging", move: "Ask how they arrived at it before you respond.", phrase: "How did you land on that approach?" },
      { situation: "Interview or assessment: listening for what is not being said", move: "Ask for the real version beneath the polished one.", phrase: "If you could be honest about what was hard in that, what would you say?" },
      { situation: "Networking: making a connection feel real", move: "Ask one question you are genuinely interested in the answer to.", phrase: "What is the part of your work that most people misunderstand?" },
      { situation: "Conflict: trying to understand their position before responding", move: "Ask before you explain your view.", phrase: "Help me understand where you are coming from before I respond." },
    ],
    calibration: {
      working: [
        "People say more than they usually would.",
        "You learn something you did not expect.",
        "Conversations feel alive rather than scripted.",
        "You genuinely enjoy the conversation.",
      ],
      adjust: [
        "Your questions feel like interrogation.",
        "You are asking to steer, not to understand.",
        "You keep interrupting before they have finished answering.",
        "You are asking questions you already know the answer to.",
      ],
    },
    drill: [
      { day: "Day 1", title: "One real question", task: "Ask one question today that you are genuinely curious about. Note what you learn." },
      { day: "Day 2", title: "Follow up on the answer", task: "Ask a follow-up question based on what they actually said — not a prepared question." },
      { day: "Day 3", title: "No agenda test", task: "Ask a question with no preferred answer. Let their response surprise you." },
      { day: "Day 4", title: "Quiet voices", task: "In a group setting, direct one curiosity question to someone who has been quiet." },
      { day: "Day 5", title: "Depth question", task: "Ask a question that goes one level deeper than the surface topic." },
      { day: "Day 6", title: "Stay quiet after asking", task: "Ask a question and then stay completely quiet until they are fully done answering." },
      { day: "Day 7", title: "Calibration", task: "Did you learn something surprising this week? Did any conversations open up in a way they would not have otherwise?" },
    ],
    checklist: [
      "Did I ask from genuine curiosity rather than to make a point?",
      "Was my question open-ended — not a rhetorical statement?",
      "Did I follow up on what they actually said?",
      "Did I stay quiet after asking and let them answer fully?",
      "Did I ask one question at a time?",
      "Did I avoid answering my own question?",
      "Did I learn something I did not already know?",
    ],
    whyItWorks: "Questions put people in the role of expert about their own experience — this is intrinsically motivating. A genuine curiosity question shifts the dynamic from you performing to them contributing, which deepens both rapport and your actual understanding.",
    example: {
      without: [
        "(You share your own view at length for several minutes)",
        "(The other person politely waits, contributes little, leaves feeling talked at)",
      ],
      with: [
        "You: What made you decide to take that approach rather than the alternative?",
        "Colleague: Honestly, it was a gut call — but here's the reasoning behind it.",
        "(Conversation opens up; you learn something you would not have otherwise known)",
      ],
    },
    notFor: [
      "When the other person has clearly signalled they do not want to discuss the topic further.",
      "In time-pressured situations where questions derail rather than deepen.",
      "When used to gather information while performing interest — the inauthenticity will eventually surface.",
    ],
  },

  /* ──────────────────────────────────────────────
     TC011  PREP Structure
  ────────────────────────────────────────────── */
  TC011: {
    id: "TC011",
    overview: {
      coreFormula: ["Point", "Reason", "Evidence / Example", "Point (restate)"],
      minimumViableMove: "Before answering any important question, identify: what is my point? One reason. One example. Then restate the point.",
      impact: "High",
      difficulty: "Medium",
      misuse: "Medium",
      bestFor: [
        "Interview and viva-style questions",
        "Presentations and pitches",
        "Any situation where you need to structure a verbal argument",
        "Avoiding rambling when put on the spot",
      ],
    },
    phraseBank: [
      {
        id: "prep-structure",
        label: "PREP Phrases",
        tag: "Signalling the structure",
        phrases: [
          "My view is [Point]. The reason is [Reason]. For example, [Example]. So I would say [Point].",
          "I would answer that in two parts — the principle and the example.",
          "Let me give you the direct answer, then the evidence.",
          "Short version: [Point]. The reason I say that is [Reason].",
          "The way I think about it is: [Point] — and here is why.",
          "I can answer that in one sentence and then give you a concrete example.",
          "The point I want to make is [Point], because [Reason].",
        ],
      },
      {
        id: "example-bridges",
        label: "Example Bridges",
        tag: "Moving to evidence",
        phrases: [
          "A concrete example of that is...",
          "The clearest instance I have seen was...",
          "In practice, this looks like...",
          "I can give you a recent example:",
          "That showed up clearly when...",
        ],
      },
    ],
    decisionTree: [
      { condition: "You are asked an open-ended question with no structure", action: "Use PREP. State your point first.", phrase: "My view is... The reason I say that is..." },
      { condition: "You are rambling and losing your thread", action: "Stop. Restate the point. Then give one reason.", phrase: "Let me come back to the main point — it is simply: ..." },
      { condition: "They are pressing for more than a point", action: "Move to reason, then example.", phrase: "The reason I hold that view is X. A concrete example is Y." },
      { condition: "Your example is weak or vague", action: "Use a specific, real situation — not a theoretical one.", phrase: "A real instance of that was..." },
      { condition: "You are using PREP too rigidly and it sounds mechanical", action: "Keep the logic but vary the phrasing.", phrase: "I think X, and here is the best evidence I have for it." },
    ],
    ladder: [
      { weak: "Rambling answer with no clear point", better: "There are several factors involved here...", best: "'My view is X. The reason is Y. The clearest example is Z. So: X.'" },
      { weak: "Example without a point: 'Well, one time I did this thing...'", better: "Here is a relevant experience...", best: "State the point first. Then the example to back it." },
      { weak: "Strong point, no evidence: 'I believe X.'", better: "I believe X, and I have seen evidence of it.", best: "Point, specific reason, concrete example, restate point." },
    ],
    scenarios: [
      { situation: "Interview: 'Tell me about a challenge you have faced'", move: "Point: the challenge. Reason: why it was hard. Example: what happened. Point: what you learned.", phrase: "The challenge was X. The reason it was difficult was Y. In practice, it looked like Z. What I took from it is..." },
      { situation: "Meeting: 'What do you think we should do?'", move: "State your recommendation. Give the main reason. Give one example. Restate.", phrase: "I think we should do X. The main reason is Y. We have seen that in Z. So my recommendation stands." },
      { situation: "Pitch: making a case for your idea", move: "Use PREP as the spine of each major point.", phrase: "The core argument is X. The evidence behind it is Y. A concrete example is Z. So: X." },
      { situation: "Viva/oral exam: defending your work", move: "Answer the examiner's question with PREP before expanding.", phrase: "My position is X. The theoretical basis is Y. My data showed Z. Which brings me back to X." },
    ],
    calibration: {
      working: [
        "Your answers feel structured and complete.",
        "People respond to your point directly rather than asking what you mean.",
        "Interviewers or audiences nod at the right moments.",
        "You feel more confident because you know where your answer is going.",
      ],
      adjust: [
        "The structure sounds mechanical or too formulaic.",
        "Your examples are vague — 'in some situations' rather than a real case.",
        "You forget to restate the point at the end.",
        "You use PREP for simple questions that do not need it.",
      ],
    },
    drill: [
      { day: "Day 1", title: "Identify the structure", task: "In your next conversation, notice whether your answers have a clear point, reason, and example. Do not change anything yet." },
      { day: "Day 2", title: "Point first", task: "In three answers today, state your position in the first sentence before explaining." },
      { day: "Day 3", title: "One reason", task: "After making your point, give one specific reason. Not three reasons — one." },
      { day: "Day 4", title: "Concrete example", task: "Practice attaching a concrete real-world example to one position you hold." },
      { day: "Day 5", title: "Restate the point", task: "After each PREP answer, add the final sentence that restates your point." },
      { day: "Day 6", title: "Full PREP in practice", task: "Use the full structure to answer one important question today." },
      { day: "Day 7", title: "Calibration", task: "Did your answers feel clearer? Did people respond more directly? Did any structure feel forced?" },
    ],
    checklist: [
      "Did I state my position (Point) in the first sentence?",
      "Did I give one clear reason — not a list of reasons?",
      "Did I use a concrete, specific example — not a hypothetical?",
      "Did I restate the point at the end?",
      "Did the structure feel natural — not mechanical?",
      "Did I avoid rambling past the example?",
      "Did the person I was speaking to seem to follow my argument clearly?",
    ],
    whyItWorks: "Unstructured communication forces the listener to organise your thoughts for you — a cognitive tax that creates frustration. PREP (Point, Reason, Evidence, Point) provides a complete logical arc that is easy to follow and easy to act on.",
    example: {
      without: [
        "You: Well, there's a lot to consider. The market is shifting and there's competing data and I think on balance, maybe, if conditions hold...",
        "Manager: What are you actually recommending?",
      ],
      with: [
        "You: My view is we should delay the launch. The main reason is market timing — Q3 data shows a 20% drop in category engagement. I'd recommend waiting until Q1.",
        "Manager: Good, agreed. Let's set a Q1 target.",
      ],
    },
    notFor: [
      "In deeply emotional conversations where structure feels cold and clinical.",
      "In creative or brainstorming sessions where open-ended flow is more valuable than structured argument.",
      "When the relationship and context call for natural conversation rather than presentation mode.",
    ],
  },

  /* ──────────────────────────────────────────────
     TC012  Boundary Without Blame
  ────────────────────────────────────────────── */
  TC012: {
    id: "TC012",
    overview: {
      coreFormula: ["Name what you need", "Not what they did wrong", "Invite the alternative"],
      minimumViableMove: "State your boundary as a need you have, not as a complaint about what they did. One sentence. Then stop.",
      impact: "High",
      difficulty: "Hard",
      misuse: "Low",
      bestFor: [
        "Setting work limits without creating conflict",
        "Declining requests without damaging relationships",
        "Naming a personal boundary in a close relationship",
        "Saying no to something unreasonable without escalating",
      ],
    },
    phraseBank: [
      {
        id: "boundary-statements",
        label: "Boundary Statements",
        tag: "As a need, not a complaint",
        phrases: [
          "I am not able to take that on right now.",
          "I need to keep that part of my work separate.",
          "I am not comfortable with that — here is what I can do instead.",
          "That is not something I am willing to agree to.",
          "I need to be honest: I cannot do that and do it well.",
          "That does not work for me. What would work is...",
          "I want to say no to that clearly, not passively.",
          "I cannot commit to that deadline — I can commit to X.",
        ],
      },
      {
        id: "alternatives",
        label: "Alternatives",
        tag: "Offering a different path",
        phrases: [
          "What I can offer instead is...",
          "Here is what I am able to do...",
          "An alternative that might work: ...",
          "What I need in order to do this is...",
          "The version I could commit to is...",
        ],
      },
    ],
    decisionTree: [
      { condition: "Someone is making a request that crosses a limit", action: "Name the limit as a need. Offer an alternative if one exists.", phrase: "I am not able to take that on. I can do X instead." },
      { condition: "You feel guilt about saying no", action: "Separate the guilt from the boundary. The boundary can still be right.", phrase: "I know this is not what you need to hear — and I still need to say no." },
      { condition: "They push back on your boundary", action: "Hold it without escalating.", phrase: "I understand that creates difficulty. My answer is still no." },
      { condition: "The boundary is personal and feels vulnerable to state", action: "Name it plainly. The vulnerability is not the same as the boundary being wrong.", phrase: "This is not something I am comfortable with, and I want to be honest about that." },
      { condition: "You are over-explaining your no", action: "Stop. The boundary does not need a detailed justification.", phrase: "The answer is no — I do not need to explain the full reason." },
    ],
    ladder: [
      { weak: "Passive: 'I am quite busy... I will try... I will see...'", better: "I am not sure I can do that.", best: "'I cannot take that on. What I can do is X.'" },
      { weak: "Blaming: 'You always ask me last minute'", better: "Short notice requests are difficult for me.", best: "'I need more lead time for this. I can commit to X if you can give me Y days.'" },
      { weak: "Over-apologising: 'I am so sorry, I really wish I could...'", better: "I am sorry — I cannot do it.", best: "'I cannot do it. Here is what I can offer instead.'" },
    ],
    scenarios: [
      { situation: "Being asked to take on work you cannot handle", move: "Name the limit plainly. Offer a different scope if possible.", phrase: "I am not able to take this on at the current quality level. I could do a smaller version by X." },
      { situation: "Being pushed for a commitment you are not ready to give", move: "Name what you can commit to — not what you cannot.", phrase: "I cannot commit to that timeline. I can commit to having something to you by X." },
      { situation: "A personal boundary being crossed in a close relationship", move: "Name it as a need, not as a complaint about them.", phrase: "I need some time to myself after work before I can be present. It is not about you." },
      { situation: "Being asked to do something that conflicts with your values", move: "Be direct. You do not have to justify the values.", phrase: "That is not something I am willing to do — I need to be clear about that." },
    ],
    calibration: {
      working: [
        "People respect the boundary without excessive argument.",
        "You do not feel guilty after stating it.",
        "The relationship stays intact.",
        "You follow through on what you said you would not do.",
      ],
      adjust: [
        "Boundaries feel like attacks — you are blaming rather than stating.",
        "You over-explain the boundary until it sounds like a negotiation.",
        "You set the boundary and then back down when pushed.",
        "The boundary is stated passive-aggressively rather than plainly.",
      ],
    },
    drill: [
      { day: "Day 1", title: "Spot the limits", task: "Identify one thing you have been saying yes to that you should say no to. Do not act yet." },
      { day: "Day 2", title: "As a need, not a complaint", task: "Practice stating a limit as 'I need X' rather than 'You did Y.'" },
      { day: "Day 3", title: "The clean no", task: "Say no to one small request today without over-explaining or apologising excessively." },
      { day: "Day 4", title: "Offer an alternative", task: "When you say no, offer one specific alternative rather than leaving a void." },
      { day: "Day 5", title: "Hold the boundary when pushed", task: "If your boundary is challenged, hold it calmly without escalating." },
      { day: "Day 6", title: "Medium-stakes boundary", task: "State one genuine limit in a work or personal context where it matters." },
      { day: "Day 7", title: "Calibration", task: "Were your limits respected? Did any boundary feel like blame? Did you hold them when tested?" },
    ],
    checklist: [
      "Did I state the limit as a need — not as a complaint about them?",
      "Did I keep the boundary statement short and clear?",
      "Did I offer an alternative where one genuinely existed?",
      "Did I avoid over-apologising or over-explaining?",
      "Did I hold the boundary when it was tested?",
      "Did I state the limit without passive aggression or sarcasm?",
      "Did the relationship stay intact after I set the boundary?",
      "Did I follow through on what I said I would not do?",
    ],
    whyItWorks: "Boundaries stated as personal needs rather than accusations remove the audience's need to defend themselves. They can hear the boundary as information rather than as an attack on their character.",
    example: {
      without: [
        "You: You always dump extra work on me at the last minute — it's really inconsiderate.",
        "Colleague: (defensive) I didn't mean to, I just assumed you could handle it.",
      ],
      with: [
        "You: When last-minute requests come in on Fridays, I can't give them the quality they need. I need 48 hours to do good work. Can we flag things earlier in the week?",
        "Colleague: That's fair — I'll try to get things to you by Wednesday.",
      ],
    },
    notFor: [
      "When the behaviour is so serious that a firm objection — not a politely framed boundary — is the right response.",
      "In safety-critical situations requiring immediate compliance rather than a collaborative conversation.",
      "In significant power imbalances where a boundary will be ignored or punished — escalation through other channels may be needed.",
    ],
  },

  /* ──────────────────────────────────────────────
     TC013  Name the Effort
  ────────────────────────────────────────────── */
  TC013: {
    id: "TC013",
    overview: {
      coreFormula: ["Notice the specific work", "Name it aloud", "Do not qualify"],
      minimumViableMove: "Name one piece of effort you noticed today that would normally go unacknowledged. Say it without qualifying it or immediately moving on.",
      impact: "Medium",
      difficulty: "Easy",
      misuse: "Low",
      bestFor: [
        "Managing or leading people",
        "Motivating someone who is working hard but not being recognised",
        "Strengthening loyalty and trust",
        "Preventing burnout in yourself and others",
      ],
    },
    phraseBank: [
      {
        id: "effort-acknowledgements",
        label: "Effort Acknowledgements",
        tag: "Naming the work",
        phrases: [
          "I can see how much work went into that.",
          "That took real effort and it shows.",
          "I noticed how much you put into this — I wanted to say it.",
          "That was not easy and you did it anyway.",
          "I know that took longer than it should have — and you still got it done.",
          "The amount of care in that was visible.",
          "That was a lot to carry and you handled it.",
          "I saw what went into this. I did not want to let it pass.",
        ],
      },
      {
        id: "specific-effort",
        label: "Specific Effort",
        tag: "Naming the particular thing",
        phrases: [
          "The preparation you put into that meeting was clear.",
          "You did not have to go that far — and you did.",
          "That was more thorough than it needed to be, and it made the difference.",
          "You stayed through the hard part without cutting corners.",
          "I noticed you did X even though nobody asked you to.",
        ],
      },
    ],
    decisionTree: [
      { condition: "Someone finishes a difficult piece of work", action: "Acknowledge the work before moving to the next item.", phrase: "Before we move on — I want to say that took real effort and it shows." },
      { condition: "Someone is doing invisible work that goes unnoticed", action: "Name it specifically and without prompting.", phrase: "I noticed you have been doing X — that does not go unnoticed." },
      { condition: "You want to acknowledge effort but do not want to sound patronising", action: "Keep it simple and specific. One sentence. No fuss.", phrase: "That took a lot. I wanted to say so." },
      { condition: "The result was good but the effort was exceptional", action: "Acknowledge the effort separately from the result.", phrase: "The result speaks for itself — but I also wanted to name what it took to get there." },
    ],
    ladder: [
      { weak: "Moving straight to the next task without acknowledgement", better: "Good work on that.", best: "'I know how much work went into that. I did not want to move past it without saying so.'" },
      { weak: "Generic praise: 'You worked so hard!'", better: "That was a demanding piece of work.", best: "'The preparation you put into that presentation was clear — especially under that timeline.'" },
      { weak: "Backhanded acknowledgement: 'Finally got there!'", better: "It took a while but we got there.", best: "Clean acknowledgement of the effort, no qualifiers." },
    ],
    scenarios: [
      { situation: "Team member delivers after a difficult sprint", move: "Name the effort before moving to what comes next.", phrase: "Before we get into the next phase — I want to acknowledge what that just took." },
      { situation: "Colleague going through a hard period personally while maintaining output", move: "Name the effort without making it about the personal situation.", phrase: "I see what you are carrying right now. I wanted to say it." },
      { situation: "Peer who quietly fixed a problem nobody else noticed", move: "Name the specific invisible work.", phrase: "I noticed you sorted that out on your own. That is the kind of thing that keeps things working." },
      { situation: "Child or young person who tried hard regardless of outcome", move: "Acknowledge the trying, not just the result.", phrase: "I saw how hard you worked on that. That matters more than the score." },
    ],
    calibration: {
      working: [
        "People seem surprised — in a good way — that you noticed.",
        "Morale and motivation visibly improve.",
        "Trust builds faster than usual.",
        "The work continues at the same level or improves.",
      ],
      adjust: [
        "Acknowledgements feel frequent enough that they lose meaning.",
        "You are acknowledging effort as a management tactic, not genuinely.",
        "The person feels patronised rather than seen.",
        "You are acknowledging effort while ignoring a real performance problem.",
      ],
    },
    drill: [
      { day: "Day 1", title: "Notice before speaking", task: "In one interaction today, pause before moving to the next topic and ask: 'Did I acknowledge what just happened?'" },
      { day: "Day 2", title: "The specific naming", task: "Give one acknowledgement that names the specific work rather than just 'good job.'" },
      { day: "Day 3", title: "Invisible work", task: "Acknowledge one person doing work that nobody else is noticing." },
      { day: "Day 4", title: "Effort vs outcome", task: "Practise separating acknowledgement of effort from assessment of result." },
      { day: "Day 5", title: "No qualifier", task: "Give one acknowledgement with no 'but', no 'although', and no 'next time' after it." },
      { day: "Day 6", title: "Written acknowledgement", task: "Send one short message to someone acknowledging a specific effort." },
      { day: "Day 7", title: "Calibration", task: "Did acknowledgements land well? Were any too vague? Did any feel like performance rather than genuine notice?" },
    ],
    checklist: [
      "Did I notice the effort before commenting on the result?",
      "Did I name the specific work — not just 'good job'?",
      "Did I say it without qualifying or immediately pivoting to the next ask?",
      "Was my acknowledgement genuine, not performative?",
      "Did I give the acknowledgement at the right moment — not too late?",
      "Did I acknowledge invisible or low-profile work that would normally go unnoticed?",
      "Did it land as genuine rather than managerial technique?",
    ],
    whyItWorks: "Effort is often invisible to the people who benefit from it — when you name what you see, you close the recognition gap. This activates intrinsic motivation more reliably than outcome-based praise alone.",
    example: {
      without: [
        "Team member: (submits thorough, time-intensive analysis)",
        "You: Thanks. Can you add one more section?",
        "(Team member quietly deflated; effort went unnoticed)",
      ],
      with: [
        "You: Before I ask for the addition — the depth of this analysis is clear. I can see the hours that went into it.",
        "Team member: Thank you. That means a lot. What's the additional section?",
      ],
    },
    notFor: [
      "When the effort was poor and naming it implies the outcome is acceptable.",
      "When managing underperformance — naming effort can inadvertently reward the wrong behaviour.",
      "When your acknowledgment would be read as performative because no real follow-through is planned.",
    ],
  },

  /* ──────────────────────────────────────────────
     TC014  Validate the Concern
  ────────────────────────────────────────────── */
  TC014: {
    id: "TC014",
    overview: {
      coreFormula: ["Show you understood the concern", "Fully", "Before responding or defending"],
      minimumViableMove: "Before addressing a concern, state it back in your own words to show you heard it. Then respond. Not before.",
      impact: "High",
      difficulty: "Medium",
      misuse: "Low",
      bestFor: [
        "Responding to criticism or complaint",
        "Managing someone who is upset or frustrated",
        "Negotiation and conflict situations",
        "Presenting solutions to resistant audiences",
      ],
    },
    phraseBank: [
      {
        id: "validation-phrases",
        label: "Validation Phrases",
        tag: "Showing you understood",
        phrases: [
          "I understand why that would be a concern.",
          "That is a reasonable worry to have.",
          "I can see why that would land the way it did.",
          "If I were in your position, I would have the same concern.",
          "That is a real problem — I am not dismissing it.",
          "I hear you — and I want to make sure I have understood it fully before I respond.",
          "The concern makes sense given what you know.",
          "I would be worried about that too.",
        ],
      },
      {
        id: "full-understanding",
        label: "Full Understanding",
        tag: "Showing you got the whole concern",
        phrases: [
          "Just to make sure I have the full picture — is the concern about X, or also about Y?",
          "Tell me more about what is driving that worry.",
          "What would make this worse, from your perspective?",
          "What would a good outcome look like for you here?",
          "I want to understand the concern fully before I try to address it.",
        ],
      },
    ],
    decisionTree: [
      { condition: "Someone raises a concern before you have responded", action: "Validate the concern before answering.", phrase: "That concern is valid. Let me make sure I have understood it before I respond." },
      { condition: "You want to immediately defend or correct", action: "Pause. Validate first. The defence will be more effective after.", phrase: "I hear that — and I want to address it properly. Let me first make sure I understand it." },
      { condition: "The concern is partly invalid but contains truth", action: "Validate the part that is valid. Do not dismiss the rest.", phrase: "The underlying worry about X is real. The specific claim about Y is one I want to address." },
      { condition: "They do not feel heard even after you validated", action: "Go deeper. Ask what you missed.", phrase: "I want to make sure I got the full weight of the concern — what did I miss?" },
    ],
    ladder: [
      { weak: "Jumping to defence: 'Well, actually the data shows...'", better: "I understand the concern, but...", best: "'That is a real concern — let me make sure I have understood it fully before I respond.'" },
      { weak: "Minimal validation: 'I hear you'", better: "I understand that is frustrating.", best: "State the concern back in your own words, then add 'Is that right?' before responding." },
      { weak: "Validation followed immediately by dismissal", better: "That is a valid point, but...", best: "Full validation, full pause, then a genuine response that takes the concern seriously." },
    ],
    scenarios: [
      { situation: "Client or stakeholder raises a concern about your work", move: "Understand the concern fully before defending.", phrase: "I want to make sure I have the full picture of the concern before I respond to it." },
      { situation: "Direct report is frustrated about a decision", move: "Validate the frustration before explaining the rationale.", phrase: "I can see why that decision landed badly. I want to hear the full impact before I explain it." },
      { situation: "Partner or friend raises a complaint", move: "Show you understood before explaining your intentions.", phrase: "I hear that it landed that way. That is not how I meant it — and I also want to hear the full concern." },
      { situation: "Presenting a change to a resistant group", move: "Open by naming their likely concern before pitching the solution.", phrase: "I know the first concern you will have is X. I want to address that directly." },
    ],
    calibration: {
      working: [
        "People visibly relax after you validate.",
        "The conversation becomes less adversarial.",
        "Your responses land better because they are targeted.",
        "People feel heard even when the outcome does not change.",
      ],
      adjust: [
        "Validation sounds hollow — like a technique rather than genuine.",
        "You validate but then ignore the concern in your response.",
        "Validation is so long that the actual response gets lost.",
        "You are validating concerns you actually dismiss entirely.",
      ],
    },
    drill: [
      { day: "Day 1", title: "Pause before defending", task: "In one conversation today, notice the moment you feel the urge to defend before validating. Pause." },
      { day: "Day 2", title: "State the concern back", task: "In one conversation, state the other person's concern back in your own words before responding." },
      { day: "Day 3", title: "Full validation", task: "Validate a concern fully — without any 'but' or 'however' until you have completed the validation." },
      { day: "Day 4", title: "Ask what you missed", task: "After validating, ask: 'Is there more to the concern that I am missing?'" },
      { day: "Day 5", title: "Hard case", task: "Validate a concern you genuinely disagree with or find unfair. Notice the effect." },
      { day: "Day 6", title: "Pre-emptive validation", task: "Open a presentation or conversation by naming the concern you expect they have, before they raise it." },
      { day: "Day 7", title: "Calibration", task: "Did validation change the tone of your conversations? Did people feel more heard? Did any feel hollow?" },
    ],
    checklist: [
      "Did I validate the concern before responding to it?",
      "Did I state the concern back accurately in my own words?",
      "Did I validate fully — without a 'but' or dismissal immediately after?",
      "Did my response actually take the concern seriously, not just acknowledge it?",
      "Did I ask if I had the full picture?",
      "Did I avoid validating as a technique to then ignore the concern?",
      "Did the other person seem to feel genuinely heard?",
    ],
    whyItWorks: "People escalate or repeat themselves when they feel unheard — validation lowers this pressure. When someone knows their concern has been received, they become open to problem-solving rather than stuck on needing to be understood.",
    example: {
      without: [
        "Employee: I'm really worried about the deadline.",
        "You: The deadline is fine — it's under control.",
        "(Employee remains anxious and raises it again the next day)",
      ],
      with: [
        "You: That concern makes complete sense — this is a tight timeline and I'm taking it seriously. Here's where we stand and what I'm watching.",
        "Employee: Knowing you're tracking it helps.",
      ],
    },
    notFor: [
      "When the concern is unfounded and validating it would reinforce a false belief.",
      "In situations requiring urgent action where pausing to validate delays a critical response.",
      "When someone is using the concern manipulatively to avoid accountability.",
    ],
  },

  /* ──────────────────────────────────────────────
     TC015  Next-Step Close
  ────────────────────────────────────────────── */
  TC015: {
    id: "TC015",
    overview: {
      coreFormula: ["Name the next action", "Who owns it", "By when", "Confirm aloud"],
      minimumViableMove: "Before ending any meeting or important conversation, name one specific next action with an owner and a date. Confirm it aloud.",
      impact: "Medium",
      difficulty: "Easy",
      misuse: "Low",
      bestFor: [
        "Ending meetings with clear accountability",
        "Following up after important conversations",
        "Avoiding the ambiguity of 'we will follow up'",
        "Moving projects forward after a decision point",
      ],
    },
    phraseBank: [
      {
        id: "close-phrases",
        label: "Next-Step Close Phrases",
        tag: "Ending with clarity",
        phrases: [
          "Before we close — who is doing what and by when?",
          "Let us confirm the next action: [who] will do [what] by [when].",
          "The next step is X, and [name] owns it by [date].",
          "To make this concrete: I will do X by Thursday.",
          "Can we name the one thing that needs to happen before we next meet?",
          "Who is taking the first action from this conversation?",
          "I want to close with a clear next step — is that [X]?",
        ],
      },
      {
        id: "confirmation",
        label: "Confirmation Phrases",
        tag: "Getting explicit agreement",
        phrases: [
          "Does everyone agree that is the next step?",
          "Are you comfortable committing to that timeline?",
          "Any blockers to making that happen?",
          "Should I send a summary of that so it is in writing?",
          "Does that feel like a reasonable next step?",
        ],
      },
    ],
    decisionTree: [
      { condition: "A meeting is ending without clear next steps", action: "Stop the conversation. Name the action before closing.", phrase: "Before we go — I want to be clear on who is doing what next." },
      { condition: "You are responsible for the next action", action: "Name it aloud and commit to a timeline.", phrase: "I will have X done by Y. I will send you a note to confirm." },
      { condition: "The next action is unclear", action: "Ask explicitly: 'What needs to happen next and who owns it?'", phrase: "I am not sure we have a clear next step — can we name one?" },
      { condition: "The next step is too large to be one action", action: "Break it into the first concrete thing that needs to happen.", phrase: "The first step is X — everything else follows from that." },
    ],
    ladder: [
      { weak: "Ending with: 'Great chat — let us stay in touch'", better: "Let us follow up on this.", best: "'The next step is X, [name] owns it, deadline is Y. Sound right?'" },
      { weak: "Vague action: 'Someone needs to look into that'", better: "That needs an owner.", best: "Specific owner, specific deliverable, specific date — confirmed by the owner in the room." },
      { weak: "Meeting notes without confirmed commitments", better: "I will send around the notes afterwards.", best: "Confirm next steps aloud in the meeting before anyone leaves." },
    ],
    scenarios: [
      { situation: "End of a project meeting with multiple attendees", move: "Name each decision, owner, and deadline before closing.", phrase: "Three things before we close: X will do A by Monday, Y will do B by Wednesday, and we meet again on Friday." },
      { situation: "One-on-one catch-up ending without clear follow-through", move: "Name the one thing you each agreed to do.", phrase: "Let us make this concrete — I will do X and you will do Y by end of week." },
      { situation: "Sales or negotiation call with ambiguous outcome", move: "Name the next step and who initiates it.", phrase: "The next step from my side is X. What do you need to move forward from yours?" },
      { situation: "Conversation that reached a decision but not a plan", move: "Convert the decision into a first action.", phrase: "The decision is made — the first action is X. Who takes that?" },
    ],
    calibration: {
      working: [
        "Things actually happen after conversations rather than drifting.",
        "People leave meetings knowing exactly what they are doing next.",
        "Follow-up conversations start with clear context.",
        "You need fewer chasing messages.",
      ],
      adjust: [
        "Next steps are named but never written down or confirmed.",
        "You are creating artificial urgency with unnecessary deadlines.",
        "The next step is too large to actually be completed.",
        "You close every conversation with an action even when none is needed.",
      ],
    },
    drill: [
      { day: "Day 1", title: "Meeting audit", task: "After your next meeting, write down: was there a clear next step? Who owns it? Was it confirmed?" },
      { day: "Day 2", title: "Name one action", task: "End one conversation today by naming one specific next action with an owner and a date." },
      { day: "Day 3", title: "First step only", task: "When the next action is large, break it into the first concrete step." },
      { day: "Day 4", title: "Ask before closing", task: "In one meeting, ask 'who is doing what and by when?' before the meeting ends." },
      { day: "Day 5", title: "Confirm aloud", task: "After naming a next step, confirm it explicitly with the owner in the room." },
      { day: "Day 6", title: "Written confirmation", task: "Send a short follow-up note after a key conversation confirming the next step." },
      { day: "Day 7", title: "Calibration", task: "Did conversations result in clearer follow-through? Did any next steps fail to happen despite being named?" },
    ],
    checklist: [
      "Did I name the next action before the conversation ended?",
      "Is there a clear owner for the next action?",
      "Is there a specific deadline?",
      "Was the next step confirmed aloud by the owner?",
      "Was the next step specific enough to actually be completed?",
      "Did I follow up in writing on important commitments?",
      "Did I avoid ending with vague language like 'let us stay in touch'?",
    ],
    whyItWorks: "Conversations without a defined next step decay into good intentions — the next step is the only thing that survives the meeting. Naming it while momentum exists converts alignment into commitment.",
    example: {
      without: [
        "You: Great discussion — let's pick this up soon.",
        "Colleague: Absolutely.",
        "(Three weeks pass with no follow-up from either side)",
      ],
      with: [
        "You: Let's capture the next step before we close — you'll send the draft by Friday and I'll review by Monday. Does that work?",
        "Colleague: Yes — I'll get it to you Friday.",
      ],
    },
    notFor: [
      "In open exploratory conversations where closing too early cuts off valuable thinking.",
      "When the next step is not yet clear — forcing one prematurely creates false closure.",
      "In relationships where over-formalising the dynamic damages it (some close partnerships, personal relationships).",
    ],
  },

  /* ──────────────────────────────────────────────
     TC016  Validation Without Agreement
  ────────────────────────────────────────────── */
  TC016: {
    id: "TC016",
    overview: {
      coreFormula: ["Acknowledge their experience", "Make clear you are not agreeing with the claim", "Hold both"],
      minimumViableMove: "Say 'I can see why you feel that way' before 'I don't agree with that.' Both sentences. In that order.",
      impact: "High",
      difficulty: "Hard",
      misuse: "Medium",
      bestFor: [
        "Conflict situations where emotions are high",
        "Feedback that is partly emotional and partly factual",
        "Responding to distress without conceding accuracy",
        "Maintaining a position while keeping the relationship intact",
      ],
    },
    phraseBank: [
      {
        id: "validation-without-agreeing",
        label: "Validation Without Agreement",
        tag: "Acknowledging without conceding",
        phrases: [
          "I can see why that would feel that way.",
          "That experience sounds genuinely frustrating — and...",
          "I understand why you are angry, and I still see it differently.",
          "Your feeling is real. My read of the situation is different.",
          "I hear the concern — I do not share the conclusion.",
          "That experience makes sense. The interpretation I would put on it is different.",
          "I am not dismissing how that landed — I just do not agree with the claim.",
          "Both of those things can be true: that it felt bad, and that I acted correctly.",
        ],
      },
      {
        id: "holding-both",
        label: "Holding Both",
        tag: "Keeping validation and your position simultaneously",
        phrases: [
          "I can hold both of those at once.",
          "Your experience is real and I see it differently.",
          "I am not saying you are wrong to feel that. I am saying I see it differently.",
          "Neither of us is wrong — we are describing different things.",
          "The feeling is valid. The conclusion I would draw from it is different.",
        ],
      },
    ],
    decisionTree: [
      { condition: "Someone is upset and making a claim you disagree with", action: "Validate the emotion first. Separate it from the factual claim.", phrase: "I can see this is really frustrating. My read of what happened is different." },
      { condition: "They interpret validation as agreement and press harder", action: "Clarify the distinction.", phrase: "I want to be clear — I am not saying you are right about X. I am saying I understand why you feel that way." },
      { condition: "Their claim contains truth and error", action: "Validate the true part. Correct only the error.", phrase: "The part you have right is X. The part I see differently is Y." },
      { condition: "You validate and they feel dismissed anyway", action: "Ask what they need to feel heard.", phrase: "I want to make sure I am hearing you fully — what am I missing?" },
    ],
    ladder: [
      { weak: "Dismissing the emotion: 'That is not what happened'", better: "I do not think that is quite right.", best: "'I can see why it felt that way — and my read of what happened is different.'" },
      { weak: "Agreeing to end the conflict: 'You are right, I was wrong'", better: "I can see why you are frustrated.", best: "Validate the feeling cleanly. Then state your position clearly. Hold both." },
      { weak: "Validating in a tone that implies sarcasm", better: "I understand.", best: "Genuine acknowledgement of their experience, then a clear, neutral statement of your view." },
    ],
    scenarios: [
      { situation: "Direct report feels unfairly treated by a decision", move: "Validate the feeling without conceding the decision was wrong.", phrase: "I can see why that landed as unfair — and I stand behind the decision. Let me explain why." },
      { situation: "Partner upset about something you did", move: "Acknowledge the impact before defending the intention.", phrase: "I can see it hurt — that was not my intention, and I also want to understand why it hit that way." },
      { situation: "Client is angry about a service outcome", move: "Validate the frustration before correcting the factual misunderstanding.", phrase: "That experience sounds genuinely frustrating. I want to clear up what actually happened." },
      { situation: "Colleague says you were unfair in a meeting", move: "Validate that their experience was real before presenting your view.", phrase: "I hear that it felt that way. I saw it differently — can I share my perspective?" },
    ],
    calibration: {
      working: [
        "The other person feels heard without you having conceded the point.",
        "Emotional conversations de-escalate rather than escalate.",
        "Your position is still standing at the end of the conversation.",
        "You feel genuine rather than strategic in how you validated.",
      ],
      adjust: [
        "Validation sounds sarcastic or hollow.",
        "They interpret validation as agreement every time.",
        "You end up conceding the point anyway despite validating.",
        "The technique feels like emotional manipulation rather than genuine acknowledgement.",
      ],
    },
    drill: [
      { day: "Day 1", title: "Separate emotion from claim", task: "In one conversation today, notice when someone's emotion and factual claim are different things. Do not respond yet — just notice." },
      { day: "Day 2", title: "Validate first", task: "In one disagreement, validate the emotion before saying anything about the facts." },
      { day: "Day 3", title: "The clean distinction", task: "Practise saying: 'I understand why you feel that way — and I see the situation differently.' In that order." },
      { day: "Day 4", title: "Hold both", task: "In one conversation, explicitly say that both the feeling and your different view can be true at once." },
      { day: "Day 5", title: "The hard case", task: "Use this with someone who is very upset and whose factual claim you believe is wrong." },
      { day: "Day 6", title: "Check for sincerity", task: "After each validation, ask yourself: was that genuine? Or was it a technique to smooth the conversation?" },
      { day: "Day 7", title: "Calibration", task: "Did conversations de-escalate? Did you hold your position? Did any validation feel hollow or manipulative?" },
    ],
    checklist: [
      "Did I acknowledge their experience before stating my position?",
      "Did I separate their emotion from their factual claim?",
      "Was my validation genuine — not a tactic to soften them up?",
      "Did I still state my position clearly after validating?",
      "Did I make clear I was validating the feeling, not agreeing with the claim?",
      "Did the conversation de-escalate?",
      "Did I hold my position without becoming cold or defensive?",
    ],
    whyItWorks: "People conflate being understood with being agreed with — but they are separate. Showing someone you have genuinely heard their position reduces defensiveness, even before you express a different view.",
    example: {
      without: [
        "Colleague: I think we need to completely restructure the team.",
        "You: No — that's way too drastic.",
        "Colleague: (digs in harder, feels dismissed)",
      ],
      with: [
        "You: I hear why you're at that point — the current structure has made things harder than they should be. I want to understand more before I react. Can you walk me through what's breaking?",
        "Colleague: Yes — here's what's been happening.",
      ],
    },
    notFor: [
      "When validation is impossible to offer genuinely — offering it dishonestly will be detected.",
      "When urgency means you need to express your view immediately and pausing to validate would delay a critical decision.",
      "When the person's position is based on factual errors that your validation might inadvertently reinforce.",
    ],
  },

  /* ──────────────────────────────────────────────
     TC017  Agreement Before Disagreement
  ────────────────────────────────────────────── */
  TC017: {
    id: "TC017",
    overview: {
      coreFormula: ["State what you share", "Build the common ground", "Then diverge clearly"],
      minimumViableMove: "Before presenting your counter-argument, name one specific thing you agree with in their position. Then state your difference.",
      impact: "Medium",
      difficulty: "Easy-Medium",
      misuse: "Medium",
      bestFor: [
        "Conversations where the relationship matters as much as the outcome",
        "Negotiations and collaborative problem-solving",
        "Presenting alternative views without triggering defensiveness",
        "Building trust while disagreeing",
      ],
    },
    phraseBank: [
      {
        id: "shared-ground",
        label: "Shared Ground",
        tag: "Naming what you have in common",
        phrases: [
          "We are both trying to solve the same problem.",
          "We agree on the goal — we differ on the method.",
          "I share the concern — I just see a different solution.",
          "The outcome we both want is the same.",
          "We both want this to work.",
          "The principle behind what you are saying is one I agree with.",
          "We are on the same side here.",
          "I am not arguing against your goal — I am arguing for a different path.",
        ],
      },
      {
        id: "disagreement-bridge",
        label: "Disagreement Bridge",
        tag: "Pivoting to the difference",
        phrases: [
          "Where I diverge is on the approach.",
          "The part I see differently is how to get there.",
          "My concern is specifically about the method, not the aim.",
          "I agree with the destination — I question the route.",
          "The difference is a narrow but important one.",
        ],
      },
    ],
    decisionTree: [
      { condition: "You disagree but want to keep a collaborative tone", action: "Build the shared ground first. Then name the difference.", phrase: "We both want this to succeed. Where I see it differently is on the approach." },
      { condition: "The other person is treating you as an adversary", action: "Name the shared goal explicitly to reframe the dynamic.", phrase: "We are solving for the same thing — I want to make sure we are not arguing against each other." },
      { condition: "You cannot find genuine shared ground", action: "Do not fabricate it. Be honest that you are starting from different places.", phrase: "I do not think we share the starting assumption here — which might be why we differ." },
      { condition: "The shared ground is used too much and becomes hollow", action: "Use it sparingly — only when it is genuinely true.", phrase: "" },
    ],
    ladder: [
      { weak: "Launching immediately into your counter-position", better: "Before I disagree — we do agree on X.", best: "Name one specific, genuine shared goal or value before stating the difference." },
      { weak: "Manufactured agreement that sounds insincere", better: "I can see we have some common ground.", best: "Specific, true agreement that both parties recognise as real." },
      { weak: "Agreeing on everything and then failing to disagree", better: "I have one concern with the approach.", best: "Clear shared ground, clear transition, clear statement of difference." },
    ],
    scenarios: [
      { situation: "Negotiation where both sides are defensive", move: "Name the shared goal before stating your position.", phrase: "We both want a deal that works. Let me say where I think we can find that." },
      { situation: "Team debate where sides are forming", move: "Name what everyone agrees on to shift the dynamic.", phrase: "Before we get into the disagreement — I think we all agree on X. Everything else is how." },
      { situation: "Presenting a different view to a senior stakeholder", move: "Open with the shared goal. Then present your alternative.", phrase: "I am arguing for the same outcome you are. My concern is that this path does not get us there." },
      { situation: "Conflict with a close colleague or partner", move: "Name the shared relationship goal before the specific disagreement.", phrase: "We both want this to work. That is why I need to say something about it." },
    ],
    calibration: {
      working: [
        "The conversation stays collaborative even while you disagree.",
        "The other person does not feel attacked.",
        "Your disagreement is taken more seriously because it comes after agreement.",
        "You feel genuine rather than tactical.",
      ],
      adjust: [
        "The shared ground sounds manufactured.",
        "You spend so long on agreement that your disagreement is lost.",
        "You use 'we agree' to avoid saying what you actually think.",
        "The other person sees through the formula and calls it out.",
      ],
    },
    drill: [
      { day: "Day 1", title: "Find the shared goal", task: "In one disagreement today, identify the goal you both share before stating your position." },
      { day: "Day 2", title: "Name it aloud", task: "In one conversation, explicitly say: 'We both want X' before stating your counter-position." },
      { day: "Day 3", title: "Genuine vs manufactured", task: "Check that your agreement is real. If it is not, do not use it." },
      { day: "Day 4", title: "Keep the disagreement clear", task: "After naming the shared ground, state your difference clearly — do not let the agreement swallow your position." },
      { day: "Day 5", title: "Use in a negotiation", task: "Use the technique in one situation where you are on opposing sides of something." },
      { day: "Day 6", title: "Notice the tone", task: "In one use of this technique, notice how the tone of the conversation changes after you name shared ground." },
      { day: "Day 7", title: "Calibration", task: "Were your disagreements received better? Did any shared ground feel hollow? Did your position still land?" },
    ],
    checklist: [
      "Did I identify genuine shared ground before stating my difference?",
      "Was the agreement specific — not generic?",
      "Did I state my disagreement clearly after the shared ground?",
      "Did the conversation feel collaborative rather than adversarial?",
      "Did I avoid using the agreement to avoid disagreeing?",
      "Was my agreement genuine rather than performative?",
      "Did the other person recognise the shared ground as real?",
    ],
    whyItWorks: "In group settings, expressing agreement first establishes you as collaborative rather than contrarian — this earns more credibility when your disagreement lands. Group dynamics are more sensitive to tone than a one-on-one exchange.",
    example: {
      without: [
        "You: (in team meeting) I don't think this approach works at all.",
        "(Room goes quiet; energy drops; people become guarded)",
      ],
      with: [
        "You: The goal here is exactly right — we need faster delivery. I want to offer a different route to get there.",
        "Team: OK — what are you thinking?",
      ],
    },
    notFor: [
      "When a harmful or unethical direction requires speed of objection over tone.",
      "When you have already agreed in principle and additional agreement feels performative.",
      "In one-on-one contexts where the group dynamic element is absent — consider TC001 instead.",
    ],
  },

  /* ──────────────────────────────────────────────
     TC018  Crisp Brevity
  ────────────────────────────────────────────── */
  TC018: {
    id: "TC018",
    overview: {
      coreFormula: ["Cut words in half", "Lead with the point", "Earn elaboration"],
      minimumViableMove: "Take whatever you were about to say and cut it in half. Lead with the most important word or sentence. Leave the rest.",
      impact: "High",
      difficulty: "Medium",
      misuse: "Medium",
      bestFor: [
        "Written communication — email, messages, reports",
        "Presentations with time constraints",
        "High-stakes verbal answers where clarity matters most",
        "Any communication where the reader or listener is busy",
      ],
    },
    phraseBank: [
      {
        id: "brevity-openers",
        label: "Brevity Openers",
        tag: "Signalling you are being concise",
        phrases: [
          "Short version: ...",
          "In one sentence: ...",
          "The headline is...",
          "Two things: ...",
          "I will keep this brief: ...",
          "The core of it is...",
          "Bottom line: ...",
        ],
      },
      {
        id: "cut-phrases",
        label: "Cut Phrases",
        tag: "Catching and shortening",
        phrases: [
          "Actually — let me say that more simply.",
          "I am over-explaining. The point is: ...",
          "Shorter version: ...",
          "Let me get to the point faster.",
          "I will spare the context and say: ...",
        ],
      },
    ],
    decisionTree: [
      { condition: "You are about to write a long email", action: "Ask: can I say this in one paragraph? One sentence? Cut accordingly.", phrase: "" },
      { condition: "You are about to give a long verbal answer", action: "State the core in one sentence first. Offer detail after.", phrase: "The short answer is X. Happy to give you more context if useful." },
      { condition: "You are mid-sentence and realising it is too long", action: "Stop. Restate in fewer words.", phrase: "Actually — let me cut that down. The point is simply: ..." },
      { condition: "You are being brief but losing important information", action: "Add back only the essential context. Not everything that is interesting.", phrase: "The one piece of context that changes this is..." },
    ],
    ladder: [
      { weak: "Three paragraphs of context before the ask", better: "Here is the background — I need X.", best: "I need X by Y. Context in one sentence below." },
      { weak: "Five-minute verbal explanation of a simple point", better: "I will try to keep this short...", best: "One sentence answer. Pause. Add one piece of context only if needed." },
      { weak: "Email with no clear structure: all text, no hierarchy", better: "I have organised this into sections.", best: "Key point in bold at the top. Brief support below. Clear ask at the end." },
    ],
    scenarios: [
      { situation: "Replying to a senior person's question in a meeting", move: "One sentence answer. Then pause.", phrase: "Yes — the project is on track for Thursday." },
      { situation: "Writing a message to someone with limited time", move: "Lead with the ask. One line of context. Stop.", phrase: "I need your sign-off on X. Background below if useful." },
      { situation: "Explaining a complex idea to a non-expert", move: "Say the clearest version. Cut the jargon.", phrase: "The simplest way to say it is..." },
      { situation: "Giving a status update in a meeting", move: "Status first. Risk second. Ask third. Everything else is noise.", phrase: "On track. One risk: [name it]. No decisions needed from you right now." },
    ],
    calibration: {
      working: [
        "People respond faster and more clearly to your communication.",
        "You are asked fewer 'so what is the point?' questions.",
        "Written communication takes less time to produce and read.",
        "Verbal answers land with more impact.",
      ],
      adjust: [
        "Brevity is removing necessary context and causing confusion.",
        "You are being brief in situations that need warmth and nuance.",
        "Short answers sound abrupt or dismissive in tone.",
        "You are cutting words but adding them back through repetition.",
      ],
    },
    drill: [
      { day: "Day 1", title: "Word count audit", task: "Take one email you wrote today and cut it by half. Notice what you removed. Was it necessary?" },
      { day: "Day 2", title: "One sentence test", task: "For every question you are asked today, attempt a one-sentence answer before elaborating." },
      { day: "Day 3", title: "Lead with the point", task: "In three communications today, put the most important sentence first." },
      { day: "Day 4", title: "Earn the detail", task: "After a brief answer, wait to be asked for more before adding it." },
      { day: "Day 5", title: "Cut filler", task: "Identify and remove all filler phrases from one communication: 'as I mentioned', 'just to say', 'I wanted to reach out' etc." },
      { day: "Day 6", title: "Verbal brevity", task: "In one meeting, aim to make your contributions 50% shorter than usual." },
      { day: "Day 7", title: "Calibration", task: "Was your communication received better? Did brevity ever cost you something important? Where was it most effective?" },
    ],
    checklist: [
      "Did I cut the communication by at least a third?",
      "Did I lead with the most important point?",
      "Did I offer elaboration rather than force it?",
      "Did I remove all filler phrases?",
      "Was the brevity appropriate for the context — not cold in a warm situation?",
      "Did I write in a way that respects the reader's time?",
      "Did the communication land more clearly as a result?",
    ],
    whyItWorks: "Length is a signal of uncertainty — people who are confident in their position say it and stop. Unnecessary words force the listener to filter for the point, which creates cognitive friction and implies you do not know what your point is.",
    example: {
      without: [
        "You: (3-minute explanation) ...and so essentially the answer would probably be to go with the first option, if that makes sense.",
        "Manager: So just Option A?",
        "You: Yes.",
      ],
      with: [
        "You: Option A. Faster and lower risk. Happy to go deeper if needed.",
        "Manager: That's all I need.",
      ],
    },
    notFor: [
      "In relationship-building contexts where brevity reads as cold or dismissive.",
      "When explaining complex technical topics to non-experts — completeness matters more than brevity.",
      "In emotional conversations where being concise can feel uncaring.",
    ],
  },

  /* ──────────────────────────────────────────────
     TC019  Autonomy Release
  ────────────────────────────────────────────── */
  TC019: {
    id: "TC019",
    overview: {
      coreFormula: ["Offer choice", "Remove pressure to agree", "Genuine — not performative"],
      minimumViableMove: "Before the next time you ask for something, explicitly give the person permission to say no or choose differently. Mean it.",
      impact: "Medium",
      difficulty: "Easy",
      misuse: "Medium",
      bestFor: [
        "Asking favours without creating obligation",
        "Giving feedback or advice without imposing",
        "Managing people without micromanaging",
        "Creating psychological safety in groups",
      ],
    },
    phraseBank: [
      {
        id: "autonomy-phrases",
        label: "Autonomy Phrases",
        tag: "Giving genuine choice",
        phrases: [
          "No pressure — only if it works for you.",
          "Feel free to say no — I mean that.",
          "This is entirely your call.",
          "I am not attached to you doing it my way.",
          "You know your situation better than I do.",
          "Say yes or no — both are genuinely fine.",
          "I have a preference, but the decision is yours.",
          "Take this or leave it — I will not be offended.",
        ],
      },
      {
        id: "remove-pressure",
        label: "Remove Pressure",
        tag: "When someone seems reluctant",
        phrases: [
          "You do not have to decide now.",
          "Take your time — this is not urgent.",
          "There is no right answer here.",
          "I am just offering it as one option.",
          "Only do this if it genuinely makes sense for you.",
        ],
      },
    ],
    decisionTree: [
      { condition: "You want to give someone advice they did not ask for", action: "Ask first. Give them the option to decline.", phrase: "Would it be useful to hear my view on that, or would you rather think it through yourself?" },
      { condition: "You are making a request and they seem reluctant", action: "Name the opt-out explicitly.", phrase: "I want to make sure you know that no is a real option here." },
      { condition: "You offer autonomy and they keep asking for your preference", action: "Give your honest preference once. Then return the decision to them.", phrase: "My preference is X — but this genuinely is your call." },
      { condition: "You use 'no pressure' but clearly want them to say yes", action: "That is not autonomy — it is manipulation. Do not use it.", phrase: "" },
    ],
    ladder: [
      { weak: "Asking for something with implied obligation", better: "I know you are busy — only if you can.", best: "'No pressure at all — say no if this does not work, I mean that.'" },
      { weak: "Giving advice without invitation", better: "Can I share a thought on that?", best: "Ask first. If they say yes, give it once. If no, respect it." },
      { weak: "Fake autonomy: 'It is up to you' when you clearly want a specific answer", better: "I have a preference but I want your input.", best: "Be honest about your preference AND genuinely release the decision." },
    ],
    scenarios: [
      { situation: "Asking a busy colleague for help", move: "Make the opt-out genuine, not just polite.", phrase: "I am going to ask for a favour and I want to make sure you know you can say no: ..." },
      { situation: "Giving feedback on someone's work unsolicited", move: "Ask if they want it before giving it.", phrase: "Would it be helpful to hear what I noticed, or would you rather not?" },
      { situation: "Directing a team member who has a strong view", move: "Give your direction once. Then release it.", phrase: "My preference is X. That said, you know this better than I do — your call." },
      { situation: "Conversation where the other person feels trapped", move: "Name the opt-out explicitly to change the dynamic.", phrase: "I want to be clear: you can stop this conversation at any point and I will not be offended." },
    ],
    calibration: {
      working: [
        "People seem more relaxed and open in the interaction.",
        "When they agree, it feels like a real yes — not a managed one.",
        "When they decline, you genuinely accept it.",
        "Trust increases because you mean what you say.",
      ],
      adjust: [
        "You offer autonomy but follow up with pressure anyway.",
        "People do not believe your opt-outs because you have retracted them before.",
        "You give autonomy in low-stakes situations but not high-stakes ones.",
        "You resent it when they use the autonomy you offered.",
      ],
    },
    drill: [
      { day: "Day 1", title: "Spot the hidden obligation", task: "Notice one request you make today that has an implied obligation. Would you genuinely accept a no?" },
      { day: "Day 2", title: "Genuine opt-out", task: "In one request, explicitly name that no is a real option. Mean it." },
      { day: "Day 3", title: "Ask before advising", task: "Before giving any advice today, ask if they want to hear it." },
      { day: "Day 4", title: "Accept the no", task: "If someone uses the autonomy you gave them and says no, accept it without follow-up pressure." },
      { day: "Day 5", title: "Release the outcome", task: "Give someone a real choice about something that matters and then genuinely let them choose." },
      { day: "Day 6", title: "Preference + release", task: "Say your preference once clearly, then release the decision to them without attachment." },
      { day: "Day 7", title: "Calibration", task: "Did people seem more relaxed? Did any 'no' sting? Did you follow through on the autonomy you offered?" },
    ],
    checklist: [
      "Did I genuinely release the decision rather than perform it?",
      "Did I give a real opt-out — not a polite one?",
      "Did I ask before giving advice?",
      "Did I accept the outcome, including a no, without resentment?",
      "Did I avoid using 'no pressure' when I clearly wanted a yes?",
      "Did the other person seem more at ease after being given the choice?",
      "Did I state my preference clearly while still releasing the decision?",
    ],
    whyItWorks: "People are more committed to decisions they feel they made themselves — autonomy is a core psychological need. Releasing autonomy explicitly removes the resistance that comes from feeling told what to do.",
    example: {
      without: [
        "You: You really need to deal with the situation with Marcus soon.",
        "Colleague: (nods, feels defensive, does nothing)",
      ],
      with: [
        "You: I've shared what I see. What you do with it is entirely your call — you know the situation better than I do.",
        "Colleague: No, you're right — I'll talk to him this week.",
      ],
    },
    notFor: [
      "In situations requiring a directive decision — releasing autonomy when a clear call is needed causes confusion.",
      "When the other person genuinely wants and needs your recommendation rather than options.",
      "In emergency or safety situations where autonomy is not operationally appropriate.",
    ],
  },

  /* ──────────────────────────────────────────────
     TC020  Confident Uncertainty
  ────────────────────────────────────────────── */
  TC020: {
    id: "TC020",
    overview: {
      coreFormula: ["Name what you know", "Name what you do not know", "Own the gap with confidence"],
      minimumViableMove: "When you do not know something, say so directly and then name what you do know. Do not bluff and do not apologise for not knowing.",
      impact: "Medium",
      difficulty: "Medium",
      misuse: "Low",
      bestFor: [
        "High-stakes situations where bluffing would be worse than admitting uncertainty",
        "Expert or interview contexts where credibility is on the line",
        "Any situation where you are pressed for an answer you do not have",
        "Building long-term credibility by being reliably honest",
      ],
    },
    phraseBank: [
      {
        id: "uncertain-phrases",
        label: "Confident Uncertainty Phrases",
        tag: "Owning not knowing",
        phrases: [
          "I do not know the answer to that — and I do not want to guess.",
          "I am not certain about this and I would rather say so than bluff.",
          "That is outside what I can say confidently.",
          "My honest answer is: I do not know.",
          "I can tell you what I do know, which is X. I cannot tell you Y.",
          "I do not have that information in front of me.",
          "I would rather admit that and come back with the right answer.",
          "That is a better question than I can currently answer.",
        ],
      },
      {
        id: "bounded-answer",
        label: "Bounded Answer",
        tag: "Saying what you can say",
        phrases: [
          "What I can say is...",
          "What I know for certain is...",
          "I can confirm X — I cannot confirm Y.",
          "My best estimate is X, but I want to flag that I am not certain.",
          "I will give you my best current read — with the caveat that...",
        ],
      },
    ],
    decisionTree: [
      { condition: "You are asked something you do not know", action: "Say you do not know. Name what you do know. Offer to find the answer.", phrase: "I do not know that. What I can say is X. I can check and confirm by end of day." },
      { condition: "You have a partial answer and are tempted to fill in the gap", action: "Give the partial answer and name the boundary.", phrase: "I know X but I am not confident about Y — I do not want to guess at that part." },
      { condition: "You are an expert and feel pressure to have all the answers", action: "Your credibility is built on accuracy, not omniscience. Name what you do not know.", phrase: "In my field, the honest answer here is that we do not know yet." },
      { condition: "They seem disappointed you do not know", action: "Hold the uncertainty rather than backfilling with speculation.", phrase: "I understand you need a clearer answer — I would rather give you the right one." },
    ],
    ladder: [
      { weak: "Bluffing: 'Yes, I believe that would be around...'", better: "I am not entirely sure — my best guess would be...", best: "'I do not know that. I can find out by X and come back to you.'" },
      { weak: "Apologising excessively for not knowing", better: "I am sorry, I do not have that.", best: "'I do not know — and I do not want to guess. What I can say is...'" },
      { weak: "Saying you do not know but then speculating anyway", better: "I am not sure, but maybe...", best: "Stop at 'I do not know.' Add only what you genuinely know." },
    ],
    scenarios: [
      { situation: "Interview question outside your knowledge", move: "State the boundary of your knowledge confidently. Offer what you can.", phrase: "That is at the edge of my area — I do not want to give you an unreliable answer. What I can say is..." },
      { situation: "Client asks a technical question you cannot answer", move: "Admit the gap, confirm what you know, commit to finding out.", phrase: "I do not have that number with me — I will confirm it today. What I can confirm is X." },
      { situation: "Meeting where you are expected to have information you do not", move: "Do not pretend. Name what you have and what you are missing.", phrase: "I do not have the full picture on this yet — I can give you what I have and flag the gaps." },
      { situation: "Being asked for an estimate you cannot give confidently", move: "Give a range with explicit uncertainty rather than a false precision.", phrase: "My rough estimate is X — but I want to flag that I am not confident in that figure." },
    ],
    calibration: {
      working: [
        "People trust your answers more because they know you say when you do not know.",
        "Your 'I do not know' is accepted rather than treated as evasion.",
        "You feel more credible after admitting uncertainty, not less.",
        "Conversations stay grounded in what is actually known.",
      ],
      adjust: [
        "You use 'I do not know' as a dodge when you actually have a view.",
        "Uncertainty is not being followed by any commitment to find the answer.",
        "Your tone sounds apologetic rather than confident.",
        "You are uncertain about things you should know by now.",
      ],
    },
    drill: [
      { day: "Day 1", title: "Spot the bluff", task: "Notice one moment today when you gave a confident answer you were not actually certain about." },
      { day: "Day 2", title: "Name the boundary", task: "In one conversation, say 'I do not know' rather than bluffing or hedging." },
      { day: "Day 3", title: "What you do know", task: "After admitting uncertainty, name specifically what you do know — no broader than what you can stand behind." },
      { day: "Day 4", title: "Commit to finding out", task: "After every 'I do not know', offer a specific time by which you will come back with the answer." },
      { day: "Day 5", title: "Tone check", task: "Say 'I do not know' confidently — not apologetically. Notice how it lands differently." },
      { day: "Day 6", title: "Expert context", task: "Use confident uncertainty in a context where you are expected to be the expert." },
      { day: "Day 7", title: "Calibration", task: "Did 'I do not know' land well? Did you follow up on things you committed to check? Did credibility improve?" },
    ],
    checklist: [
      "Did I say 'I do not know' directly rather than hedging or bluffing?",
      "Did I name what I do know clearly?",
      "Did I own the gap confidently rather than apologetically?",
      "Did I commit to finding the answer and follow through?",
      "Did I avoid speculating after admitting I did not know?",
      "Did my tone stay grounded rather than nervous?",
      "Did people seem to trust my honesty rather than lose confidence in me?",
    ],
    whyItWorks: "Pretending certainty when genuine unknowns exist destroys credibility when the truth emerges — and it always emerges. Naming your uncertainty explicitly builds trust by signalling intellectual honesty, which makes your certainties more believable.",
    example: {
      without: [
        "Stakeholder: What's the delivery date?",
        "You: (guessing) March.",
        "(In February, you have to revise to May. Trust is damaged.)",
      ],
      with: [
        "You: I don't have a reliable number yet — my rough estimate is Q1 but there are two dependencies I haven't resolved. I can give you a firm date by Thursday.",
        "Stakeholder: Thursday works.",
      ],
    },
    notFor: [
      "When the audience needs a definitive answer to proceed and further uncertainty will paralyse decision-making.",
      "In contexts where expressing uncertainty is read as incompetence — some cultures and hierarchies require stated confidence.",
      "When you actually are certain — false modesty obscures clear information.",
    ],
  },

  /* ──────────────────────────────────────────────
     TC021  Reframe the Stakes
  ────────────────────────────────────────────── */
  TC021: {
    id: "TC021",
    overview: {
      coreFormula: ["Name what the conversation is actually about", "Shift from surface detail to real stakes", "Invite them into the new frame"],
      minimumViableMove: "When a conversation is stuck on the wrong thing, say: 'I want to step back — the real question here is...' and name it.",
      impact: "Medium",
      difficulty: "Hard",
      misuse: "High",
      bestFor: [
        "Negotiations where both sides are arguing past each other",
        "Conflicts that are stuck on symptoms rather than causes",
        "Presentations where the audience is focused on the wrong concern",
        "Situations where the conversation is at risk of missing what actually matters",
      ],
    },
    phraseBank: [
      {
        id: "reframe-phrases",
        label: "Reframe Phrases",
        tag: "Shifting the frame",
        phrases: [
          "I want to step back for a moment — the real question here is...",
          "I think we may be arguing about the wrong thing.",
          "Let me name what I think is actually at stake.",
          "If we solve X, we may still have problem Y. The underlying issue is...",
          "We keep coming back to this because the real concern is...",
          "I want to name what I think is actually going on here.",
          "The surface question is X — the deeper question is Y.",
          "What are we actually trying to solve?",
        ],
      },
      {
        id: "invite-into-frame",
        label: "Invite Into the Frame",
        tag: "Getting them to engage with the reframe",
        phrases: [
          "Does that land as the real issue for you?",
          "Am I naming the right thing, or is it something else?",
          "I want to make sure I am naming it accurately — what would you add?",
          "Is the real concern X or is it something deeper?",
        ],
      },
    ],
    decisionTree: [
      { condition: "The conversation is stuck on a detail that does not resolve the real issue", action: "Name the real issue. Invite them to confirm whether you have it right.", phrase: "I think we keep coming back to this because the real concern is X — is that right?" },
      { condition: "Both sides are entrenched", action: "Name the shared problem before the competing positions.", phrase: "I want to step back — what are we both actually trying to achieve here?" },
      { condition: "You reframe and they resist it", action: "Hold the reframe gently rather than forcing it.", phrase: "I may have named it wrong — what would you say the real question is?" },
      { condition: "You use reframes to avoid engaging with the actual issue", action: "Do not. This is a misuse. Engage with the issue first.", phrase: "" },
    ],
    ladder: [
      { weak: "Getting deeper and deeper into a detail that does not matter", better: "Can we look at the bigger picture here?", best: "'I want to name what I think is actually at stake. Can we check whether we agree on that?'" },
      { weak: "Reframing to avoid a difficult point", better: "I want to make sure we are solving the right problem.", best: "Reframe that points to the actual issue, not away from it." },
      { weak: "Presenting a reframe as if it is the only correct view", better: "I think the real issue is...", best: "'This is my read of the real issue — does that match yours?'" },
    ],
    scenarios: [
      { situation: "Negotiation stuck on pricing", move: "Name what is really driving the resistance.", phrase: "I wonder if the real concern is not the price but the risk. Can we talk about that?" },
      { situation: "Team meeting stuck on a procedural debate", move: "Name the outcome everyone wants and redirect.", phrase: "We keep coming back to process — the question underneath that is whether we trust each other on this." },
      { situation: "Conflict that is circular", move: "Name the pattern itself.", phrase: "We keep having this argument, which tells me there is something unresolved underneath it." },
      { situation: "Pitch to an audience that is asking the wrong questions", move: "Name what you think their real concern is before answering.", phrase: "I think the question behind that question is whether this is worth the risk. Let me address that." },
    ],
    calibration: {
      working: [
        "The conversation shifts to a more productive level.",
        "Both parties seem relieved to be talking about the actual issue.",
        "Progress is made that was not possible before the reframe.",
        "The reframe is confirmed as accurate by the other person.",
      ],
      adjust: [
        "You are using the reframe to avoid the surface question rather than address it.",
        "The reframe is not confirmed — you are projecting what you think the real issue is.",
        "The other person experiences it as manipulative.",
        "You reframe too often so it loses its effect.",
      ],
    },
    drill: [
      { day: "Day 1", title: "Spot the misplaced conversation", task: "Notice one conversation today that seems to be stuck on the wrong thing. Do not intervene yet." },
      { day: "Day 2", title: "Name the real question", task: "In one conversation, name what you think is actually at stake beneath the surface." },
      { day: "Day 3", title: "Invite confirmation", task: "After reframing, ask if your read is accurate rather than assuming it is." },
      { day: "Day 4", title: "Check for misuse", task: "Notice any moment when you used a reframe to dodge an uncomfortable question." },
      { day: "Day 5", title: "Name the pattern", task: "In a circular conversation, name the fact that it is circular and ask what it is really about." },
      { day: "Day 6", title: "Full reframe in practice", task: "Use the technique in one high-stakes conversation where the surface discussion is not the real one." },
      { day: "Day 7", title: "Calibration", task: "Did reframes land well? Were any resisted? Did any feel manipulative?" },
    ],
    checklist: [
      "Did I name the real stakes accurately — not just redirect the conversation?",
      "Did I invite the other person to confirm whether my reframe was right?",
      "Was the reframe genuine — not a tactic to avoid the real issue?",
      "Did I stay engaged with the surface question even as I named the deeper one?",
      "Did the conversation shift to a more productive level after the reframe?",
      "Did I avoid reframing so frequently that it lost meaning?",
      "Did the other person seem relieved or more engaged after the reframe?",
    ],
    whyItWorks: "People resist change when it feels like loss — reframing what is at stake shifts the mental model from threat to opportunity. The same information received through a different lens triggers different decisions.",
    example: {
      without: [
        "You: We need to adopt this new system or we'll fall behind.",
        "Colleague: (resistant) We're managing fine as we are.",
      ],
      with: [
        "You: The question isn't whether to change — it's whether we lead the change or react to it. This system lets us lead.",
        "Colleague: That framing changes how I'm seeing it.",
      ],
    },
    notFor: [
      "When the reframe is dishonest and the actual stakes are as difficult as they appear — manipulation erodes long-term trust.",
      "When the audience has already processed the full picture and reframing feels like spin.",
      "In situations requiring direct accountability — reframing can deflect necessary ownership.",
    ],
  },

  /* ──────────────────────────────────────────────
     TC022  Graceful Exit
  ────────────────────────────────────────────── */
  TC022: {
    id: "TC022",
    overview: {
      coreFormula: ["Signal the close", "Give a warm and honest reason", "End clean"],
      minimumViableMove: "Signal your exit before you actually leave. Give one brief, honest reason. End the conversation cleanly rather than trailing off.",
      impact: "Medium",
      difficulty: "Easy",
      misuse: "Low",
      bestFor: [
        "Ending networking conversations without awkwardness",
        "Leaving a social event or meeting gracefully",
        "Getting off a long phone call cleanly",
        "Any conversation you need to end without damaging the relationship",
      ],
    },
    phraseBank: [
      {
        id: "exit-signals",
        label: "Exit Signals",
        tag: "Signalling you are wrapping up",
        phrases: [
          "I want to wrap up shortly — ",
          "Before I go —",
          "I have to be somewhere in a few minutes, but —",
          "One last thing before I head off —",
          "I am going to let you go, but —",
          "I need to move on shortly — ",
          "I want to close this conversation well —",
        ],
      },
      {
        id: "warm-exits",
        label: "Warm Exit Phrases",
        tag: "Leaving well",
        phrases: [
          "This was a really useful conversation — thank you.",
          "I want to come back to this — can we set a time?",
          "I am glad we had the chance to talk.",
          "I want to think about what you said — I will follow up.",
          "Thanks for making time for this.",
          "I will leave it there — but I am glad we talked.",
        ],
      },
    ],
    decisionTree: [
      { condition: "Conversation is going on too long and you need to leave", action: "Signal the exit before leaving. Give one honest, brief reason.", phrase: "I need to be somewhere in a few minutes — let me finish this thought first." },
      { condition: "The other person does not notice you are trying to leave", action: "Name it more directly.", phrase: "I am going to have to head off now." },
      { condition: "You are leaving a conversation that was difficult", action: "Close with something genuine before leaving.", phrase: "I want to leave this in a decent place — thanks for talking it through." },
      { condition: "You trail off rather than making a clean exit", action: "End with a definite statement, not a trailing sentence.", phrase: "On that note — I am going to go. Good to see you." },
    ],
    ladder: [
      { weak: "Trailing off and slowly backing away", better: "I should probably get going.", best: "'I need to head off in a moment — but I wanted to say it was good to connect.'" },
      { weak: "Abrupt exit: 'Sorry I have to go, bye'", better: "I have to go — thanks for chatting.", best: "Signal → brief warm close → clean end. Thirty seconds total." },
      { weak: "Fake reason to leave", better: "I have something I need to get to.", best: "Honest reason, briefly stated. Or simply: 'I am going to head off.'" },
    ],
    scenarios: [
      { situation: "Networking event: conversation with no natural end point", move: "Signal the close. Reference something they said. Leave warmly.", phrase: "I want to keep moving — but that point you made about X was worth the conversation." },
      { situation: "Long phone call that has already reached its natural end", move: "Name the close before trailing off.", phrase: "I want to let you go — but before I do: ..." },
      { situation: "Dinner or social event: leaving before others", move: "Brief goodbye to each person. Do not sneak out.", phrase: "I am going to head off — thanks for a great evening." },
      { situation: "Meeting that has overrun by thirty minutes", move: "Signal the exit with enough time for a clean close.", phrase: "I have a hard stop in five minutes — can we make sure we close on the next steps?" },
    ],
    calibration: {
      working: [
        "People feel you left properly rather than escaped.",
        "There is no awkward hovering or trailing off.",
        "The person you left feels valued, not dismissed.",
        "You leave feeling clear rather than guilty.",
      ],
      adjust: [
        "Exits feel rushed or perfunctory.",
        "You signal the exit and then stay for another twenty minutes.",
        "The warm close is so long it becomes a new conversation.",
        "You leave without saying goodbye and it creates awkwardness.",
      ],
    },
    drill: [
      { day: "Day 1", title: "Notice your exits", task: "In your next three conversations, notice how you ended them. Did you trail off? Make a clean exit? Leave awkwardly?" },
      { day: "Day 2", title: "Signal before leaving", task: "In one conversation, say out loud that you are about to leave before you actually do." },
      { day: "Day 3", title: "The warm close", task: "End one conversation with a genuine, specific warm statement before leaving." },
      { day: "Day 4", title: "Clean ending sentence", task: "Practise ending on a definite sentence rather than trailing off." },
      { day: "Day 5", title: "The thirty-second exit", task: "In one conversation, complete the full exit in thirty seconds: signal, warm close, done." },
      { day: "Day 6", title: "Difficult exits", task: "End one conversation that has been tense or difficult with a genuine close." },
      { day: "Day 7", title: "Calibration", task: "Did exits feel clean? Did people seem satisfied rather than cut off? Did any exit feel too abrupt or too long?" },
    ],
    checklist: [
      "Did I signal I was leaving before actually leaving?",
      "Did I give a brief, honest reason?",
      "Did I end with something warm and genuine?",
      "Did I avoid trailing off or sneaking out?",
      "Did the exit feel appropriately brief — not a new conversation?",
      "Did the other person seem to feel properly closed off?",
      "Did I keep the close to under a minute?",
    ],
    whyItWorks: "Conversations that overstay their welcome lose the goodwill built earlier — ending well preserves the quality of the interaction at its peak. People remember endings disproportionately, so a graceful exit improves how the whole exchange is recalled.",
    example: {
      without: [
        "(Conversation has naturally concluded but no one ends it)",
        "(It drags for ten more awkward minutes)",
        "(Both parties leave feeling slightly depleted rather than energised)",
      ],
      with: [
        "You: This has been really useful — I want to be respectful of your time. Let me know if there's a next step I should own.",
        "Other: Will do — good conversation.",
      ],
    },
    notFor: [
      "When the other person is in distress and leaving would feel like abandonment.",
      "When there is unfinished critical business that genuinely needs resolution before the conversation closes.",
      "When your exit will be read as avoidance of something difficult.",
    ],
  },

  /* ──────────────────────────────────────────────
     TC023  Bounded Deferment
  ────────────────────────────────────────────── */
  TC023: {
    id: "TC023",
    overview: {
      coreFormula: ["Decline to decide now", "Specific return time", "Honor the commitment"],
      minimumViableMove: "When you cannot answer properly on the spot, say: 'I cannot give you the right answer now — I can have it for you by [specific time].' Then keep that commitment.",
      impact: "High",
      difficulty: "Easy-Medium",
      misuse: "Medium",
      bestFor: [
        "Situations where you need time to think before committing",
        "Pressure to answer before you have adequate information",
        "Buying time without evasion or dishonesty",
        "Delaying a decision that needs more input or reflection",
      ],
    },
    phraseBank: [
      {
        id: "deferment-phrases",
        label: "Deferment Phrases",
        tag: "Buying time with a deadline",
        phrases: [
          "I cannot answer that properly right now. I can get back to you by end of day.",
          "That deserves a better answer than I can give you on the spot — give me until tomorrow morning.",
          "Let me sit with that — I will come back to you by [time].",
          "I am not in a position to commit to that today. I will have an answer by Friday.",
          "I do not want to answer that badly. Can I have until Thursday?",
          "That needs more thought. I will send you my view by noon.",
          "I cannot say yes or no right now — I can say yes or no by Wednesday.",
          "Give me 24 hours — not to avoid it, but to answer it properly.",
        ],
      },
      {
        id: "acknowledge-urgency",
        label: "Acknowledge Urgency",
        tag: "When they need it faster than you can give",
        phrases: [
          "I understand you need this quickly — my fastest honest answer is by X.",
          "If you need it now, my provisional answer is Y — but I want to confirm that by Z.",
          "I can give you my best current read now, with the caveat that it may change.",
          "If the decision cannot wait, I would say X provisionally.",
        ],
      },
    ],
    decisionTree: [
      { condition: "You are pressed for an answer you cannot give well right now", action: "Decline to answer now. Give a specific time you will return.", phrase: "I cannot give you the right answer on the spot. I can have it by [time] — would that work?" },
      { condition: "They need an answer now and cannot wait", action: "Give a provisional answer clearly labelled as provisional.", phrase: "If you need something right now: provisionally, yes. I want to confirm that by end of day." },
      { condition: "You have been deferring the same decision for multiple days", action: "Either answer or be honest that you will not change your mind.", phrase: "I have been sitting on this — I need to either decide or admit I am avoiding it." },
      { condition: "You defer frequently and people stop trusting the deadlines", action: "Only defer when you will genuinely return. Then return.", phrase: "" },
    ],
    ladder: [
      { weak: "Vague deferral: 'I will let you know...'", better: "I need to think about it.", best: "'I cannot give you the right answer now. I will come back to you by [specific time].'" },
      { weak: "Endless deferral with no committed return", better: "I am still thinking it through.", best: "Specific time commitment made and kept." },
      { weak: "Provisional answer presented as final", better: "I think the answer is yes, but I want to check.", best: "'Provisionally yes — I will confirm by X.'" },
    ],
    scenarios: [
      { situation: "Salary or scope negotiation: asked for your number on the spot", move: "Defer with a specific return time rather than guessing.", phrase: "I need to think about that properly. Can I come back to you by end of week?" },
      { situation: "Being asked to commit to something you have not thought through", move: "Name that you need time. Give a specific time.", phrase: "I do not want to commit to that without thinking it through. Can I give you an answer by Thursday?" },
      { situation: "Emotional conversation where you need time to process", move: "Defer without making it feel like avoidance.", phrase: "I want to respond to that properly — not right now. Can we talk tomorrow morning?" },
      { situation: "Technical question outside your current knowledge", move: "Defer with a commitment to check.", phrase: "I want to verify that rather than guess. I will confirm by end of day." },
    ],
    calibration: {
      working: [
        "You return with answers on the timelines you commit to.",
        "People accept the deferral because they trust the deadline.",
        "Your answer, when it comes, is better than the one you would have given on the spot.",
        "Deferrals are occasional — not habitual.",
      ],
      adjust: [
        "You defer so often it looks like avoidance.",
        "You set deadlines and do not keep them.",
        "You defer when you already know the answer — because you are uncomfortable saying it.",
        "The deferral is used to manage the other person rather than to genuinely improve the answer.",
      ],
    },
    drill: [
      { day: "Day 1", title: "Spot the bad on-the-spot answer", task: "Notice one moment today when you gave an answer on the spot that you were not confident in." },
      { day: "Day 2", title: "Specific time commitment", task: "In one deferral today, give a specific time rather than 'I will let you know.'" },
      { day: "Day 3", title: "Keep the deadline", task: "Set a deferral deadline and return on time." },
      { day: "Day 4", title: "Provisional vs deferred", task: "Practise the difference between 'I do not know yet' (defer) and 'my best current view is X but I want to confirm it' (provisional)." },
      { day: "Day 5", title: "Acknowledge urgency", task: "When someone needs an answer faster than you can give it, give a provisional answer clearly labelled as provisional." },
      { day: "Day 6", title: "Own the avoidance", task: "Notice any deferral you are making not to improve the answer but to avoid giving it. Address it." },
      { day: "Day 7", title: "Calibration", task: "Did you keep your deferral commitments? Were your eventual answers better? Did people trust the deadlines?" },
    ],
    checklist: [
      "Did I name a specific return time — not just 'later'?",
      "Did I keep the commitment I made?",
      "Was the deferral genuine — not avoidance?",
      "Did I offer a provisional answer when one was possible?",
      "Did I avoid deferring habitually on things I already know?",
      "Did I return with a better answer than I would have given on the spot?",
      "Did people seem to trust the deferral deadline?",
    ],
    whyItWorks: "'I'll think about it' often reads as a soft no and leaves the other person in limbo — an open loop they have to manage. A bounded deferment with a specific return date converts an open loop into a closed commitment.",
    example: {
      without: [
        "You: Let me think about it and get back to you.",
        "(A week passes. They follow up. You still have not thought about it.)",
        "(Trust erodes around your reliability)",
      ],
      with: [
        "You: I want to give this proper thought — I'll come back to you by Friday with a clear answer.",
        "Other: Perfect — I'll wait to hear from you Friday.",
      ],
    },
    notFor: [
      "When you know the answer already — deferring when you could decide now signals avoidance.",
      "When the other person needs an answer urgently and deferment will cause real harm or delay.",
      "When the pattern of deferring to this person is already eroding their trust in your reliability.",
    ],
  },

  /* ──────────────────────────────────────────────
     TC024  Lead With the Ask
  ────────────────────────────────────────────── */
  TC024: {
    id: "TC024",
    overview: {
      coreFormula: ["State what you need first", "Then context", "One ask at a time"],
      minimumViableMove: "Before your next request, identify exactly what you need and say that in the first sentence. Context can follow.",
      impact: "High",
      difficulty: "Easy-Medium",
      misuse: "Low",
      bestFor: [
        "Making requests of busy people",
        "Emails and messages where the ask is buried",
        "Any situation where the other person needs to know your purpose before the background",
        "Reducing friction in professional communication",
      ],
    },
    phraseBank: [
      {
        id: "lead-ask",
        label: "Lead With the Ask",
        tag: "Ask first, context after",
        phrases: [
          "I need your help with X — here is the context.",
          "Quick ask before the background: can you...?",
          "I am going to lead with what I need: ...",
          "The ask is simple: ...",
          "Before I give you the background — I need X by Y.",
          "I need a decision from you on X. Context below.",
          "What I need from you: ...",
          "One ask: could you...?",
        ],
      },
      {
        id: "context-follows",
        label: "Context Follows",
        tag: "Adding background after the ask",
        phrases: [
          "The reason for the ask is...",
          "Here is why it matters: ...",
          "The context that explains the urgency: ...",
          "Background, if useful: ...",
          "For context only — not required to act: ...",
        ],
      },
    ],
    decisionTree: [
      { condition: "You are about to give a lot of context before making your ask", action: "Flip it. Ask first. Context second.", phrase: "Let me start with what I need: ... Here is the context behind that." },
      { condition: "You are writing an email that starts with context", action: "Move the ask to line one.", phrase: "I need X by Y. Background below." },
      { condition: "Your ask is ambiguous without context", action: "Give a one-sentence ask, then one sentence of context.", phrase: "I need you to approve X — the reason it is urgent is Y." },
      { condition: "You have multiple asks", action: "Make the most important ask first. Others can follow separately.", phrase: "The main ask is X. There are a couple of smaller ones if you have time — I will send separately." },
    ],
    ladder: [
      { weak: "Three paragraphs of background before the ask in the final line", better: "I am getting in touch because [background] — could you help with X?", best: "'I need X by Y. Here is the context in two sentences.' Nothing more." },
      { weak: "Vague ask: 'I was wondering if you might be able to...'", better: "Could you help me with X?", best: "Direct, specific ask in the first sentence. No softening needed." },
      { weak: "Multiple bundled asks in one message", better: "I have a few things — can I run them by you?", best: "Most important ask first, clearly stated. Others in separate follow-ups." },
    ],
    scenarios: [
      { situation: "Email to a senior person asking for their input", move: "Ask first. Background second.", phrase: "I need your view on X before Thursday. Background: [one sentence]." },
      { situation: "Meeting where you need someone to take action", move: "State the action needed before explaining why.", phrase: "The action I need from you is X. Here is why it matters." },
      { situation: "Favour from a colleague who is busy", move: "Respect their time by being direct about what you need.", phrase: "Quick ask — I need X. Takes about ten minutes. Can you do it today?" },
      { situation: "Negotiation where you have a specific ask", move: "State what you want before making your case.", phrase: "What I am asking for is X. Let me give you the rationale." },
    ],
    calibration: {
      working: [
        "Busy people respond faster to your messages.",
        "Fewer follow-ups asking 'what do you need from me?'",
        "Your asks are fulfilled more often and on time.",
        "You feel clearer about what you need before you communicate.",
      ],
      adjust: [
        "Leading with the ask feels cold in relationship-sensitive contexts.",
        "The ask is too vague to act on without the context.",
        "You are making multiple asks at once.",
        "The context was actually needed before the ask and you removed it entirely.",
      ],
    },
    drill: [
      { day: "Day 1", title: "Bury-the-ask audit", task: "Review one message you sent today. Was the ask clear in the first sentence, or buried at the end?" },
      { day: "Day 2", title: "Flip one email", task: "Rewrite one email to lead with the ask in the first line." },
      { day: "Day 3", title: "Verbal asks", task: "In one conversation, state what you need before giving any context." },
      { day: "Day 4", title: "Specific ask", task: "Practice making asks that are specific enough to act on without asking a follow-up question." },
      { day: "Day 5", title: "One ask at a time", task: "Send your requests as separate messages. Notice how much cleaner the interactions become." },
      { day: "Day 6", title: "Context calibration", task: "Identify when context genuinely needs to come before the ask (rare) vs when it can follow." },
      { day: "Day 7", title: "Calibration", task: "Did people respond faster and more accurately? Were any asks still unclear despite leading with them?" },
    ],
    checklist: [
      "Did I state the ask in the first sentence?",
      "Was the ask specific enough to act on without a follow-up question?",
      "Did context follow the ask — not precede it?",
      "Did I make one ask at a time?",
      "Did I avoid burying the ask at the end?",
      "Was the ask clear to someone reading only the first line?",
      "Did I include only the context genuinely needed to act?",
    ],
    whyItWorks: "The ask is the most important information in your message — burying it at the end makes the reader work to find it. Leading with the ask respects their time and dramatically increases the chance of a clear, fast response.",
    example: {
      without: [
        "You: (three paragraphs of context) ...so anyway, if it's not too much trouble and you have time, could you maybe take a look at the proposal?",
        "Colleague: (misses the ask entirely; does not respond)",
      ],
      with: [
        "You: Quick ask: can you review section 3 of the proposal before Thursday? I've highlighted the parts that matter most.",
        "Colleague: Yes — will do.",
      ],
    },
    notFor: [
      "When a request without context will be rejected before the person understands what they are agreeing to.",
      "In sensitive requests where the relationship needs warming before the ask lands.",
      "When the ask is secondary to sharing important information — not every message is primarily a request.",
    ],
  },

  /* ──────────────────────────────────────────────
     TC025  Shared Credit
  ────────────────────────────────────────────── */
  TC025: {
    id: "TC025",
    overview: {
      coreFormula: ["Name who contributed", "Name what they did", "Do not be vague"],
      minimumViableMove: "The next time you present work that involved others, name at least one contributor specifically before you present it.",
      impact: "Medium",
      difficulty: "Easy",
      misuse: "Low",
      bestFor: [
        "Leading or managing teams",
        "Presenting work to senior stakeholders",
        "Building a culture of trust and recognition",
        "Any situation where others contributed to your output",
      ],
    },
    phraseBank: [
      {
        id: "credit-phrases",
        label: "Shared Credit Phrases",
        tag: "Naming contributors",
        phrases: [
          "[Name] built the core of this — I want to make sure that is visible.",
          "This came from [Name]'s analysis.",
          "The credit for that insight goes to [Name].",
          "I could not have produced this without [Name] doing X.",
          "[Name] spotted the problem we were about to miss.",
          "That was [Name]'s recommendation — I ran with it.",
          "Three people made this: [Name] did X, [Name] did Y, and [Name] did Z.",
          "I want to be clear: this was a team effort. [Names] did the work.",
        ],
      },
      {
        id: "credit-framing",
        label: "Credit Framing",
        tag: "Making it feel natural",
        phrases: [
          "Before I present this — let me name who is actually behind it.",
          "I want to start by attributing this properly.",
          "The people who made this possible are...",
          "I am presenting but I did not build this alone.",
        ],
      },
    ],
    decisionTree: [
      { condition: "You are presenting work that involved others", action: "Name contributors before or during the presentation.", phrase: "[Name] built the core of this — I want to make sure that is visible before we get into it." },
      { condition: "Someone else took the credit for your work", action: "Name your contribution clearly and without aggression.", phrase: "I built the analysis behind that — I wanted to mention it for the record." },
      { condition: "You want to share credit but do not know the details", action: "Find out before presenting. 'This was a team effort' without specifics is weak.", phrase: "Before I present — [Name] did the research, [Name] did the design." },
      { condition: "Credit-sharing sounds performative", action: "Be specific. Vague credit sounds like it is for show.", phrase: "[Name] specifically spotted the data anomaly that changed everything." },
    ],
    ladder: [
      { weak: "Vague: 'A great team effort'", better: "I had a lot of help on this.", best: "'[Name] built the analysis. [Name] caught the error. I pulled it together.'" },
      { weak: "Taking full credit for collaborative work", better: "I worked with [Name] on this.", best: "Name each person's specific contribution before presenting the work." },
      { weak: "Over-crediting: spreading it so thin no one seems particularly important", better: "A lot of people were involved.", best: "Name the two or three people whose contribution was most essential. Be specific." },
    ],
    scenarios: [
      { situation: "Presenting to leadership on a team project", move: "Name contributors in the opening.", phrase: "Before I walk you through this — [Name] built the financial model and [Name] led the research." },
      { situation: "Receiving praise for a project that was collaborative", move: "Redirect the credit to the team member who did the work.", phrase: "Thank you — though I want to make sure [Name] gets that credit. They drove this." },
      { situation: "In a meeting where someone's contribution is being overlooked", move: "Name it directly.", phrase: "I want to note that the idea we just discussed came from [Name]." },
      { situation: "Writing a report on collaborative work", move: "Name contributors explicitly in the document, not just in the acknowledgements.", phrase: "The analysis in section 3 was built by [Name]. The recommendations in section 5 draw on [Name]'s research." },
    ],
    calibration: {
      working: [
        "Team members feel seen and valued.",
        "You are trusted more by senior stakeholders, not less.",
        "A culture of recognition spreads.",
        "You feel clean about how you represent your work.",
      ],
      adjust: [
        "Credit is given so broadly it loses meaning.",
        "You are sharing credit performatively but not actually recognising the work.",
        "Credit-sharing is upsetting contributors who wanted to be acknowledged differently.",
        "You are over-sharing credit on work that was genuinely yours.",
      ],
    },
    drill: [
      { day: "Day 1", title: "Attribution audit", task: "Review the last thing you presented or sent. Were contributors named? Should they have been?" },
      { day: "Day 2", title: "Name before presenting", task: "The next time you present work, name the contributors before getting into the content." },
      { day: "Day 3", title: "Specific contribution", task: "Give credit that names what specifically each person did, not just that they were involved." },
      { day: "Day 4", title: "In-the-moment credit", task: "In a meeting, attribute an idea to the person who had it, in the moment." },
      { day: "Day 5", title: "Written credit", task: "In one document or message, name contributors explicitly in the body rather than only in an acknowledgements section." },
      { day: "Day 6", title: "Redirect unearned credit", task: "If you receive credit for something collaborative, redirect it to the person who earned it." },
      { day: "Day 7", title: "Calibration", task: "Did contributors seem to feel more seen? Did your credibility increase or decrease? Did any credit-sharing feel hollow?" },
    ],
    checklist: [
      "Did I name contributors before or during the presentation — not after?",
      "Was the credit specific — naming what each person did?",
      "Did I avoid vague credit like 'team effort'?",
      "Did I avoid over-sharing credit so widely it lost meaning?",
      "Did I redirect unearned praise to the person who earned it?",
      "Was the credit genuine rather than performative?",
      "Did contributors seem to feel recognised?",
    ],
    whyItWorks: "People who share credit gain more of it — generosity and confidence are more admired than credit-hoarding. Attributing contributions accurately also builds the loyalty that produces future performance and collaboration.",
    example: {
      without: [
        "You: (presenting) I worked on this for three months and I'm proud of what I achieved.",
        "(Collaborators notice the erasure. Trust drops. They are less invested next time.)",
      ],
      with: [
        "You: The results came from the whole team — Jamie's analysis and Sam's design work were critical. I steered the project but I did not do this alone.",
        "(Collaborators feel seen. They work harder for you next time.)",
      ],
    },
    notFor: [
      "When your individual contribution needs to be visible for legitimate reasons — e.g. a performance review where your specific work must be legible.",
      "When sharing credit for something that went wrong — ownership of failure is different from shared credit for success.",
      "When attributing credit to someone who did not contribute confuses accountability.",
    ],
  },

  /* ──────────────────────────────────────────────
     TC026  Decision Frame
  ────────────────────────────────────────────── */
  TC026: {
    id: "TC026",
    overview: {
      coreFormula: ["Name the decision", "Options on the table", "Stakes and trade-offs", "Who decides"],
      minimumViableMove: "Before any group decision, spend thirty seconds naming: what decision are we making, what are the options, and who makes the final call?",
      impact: "Medium",
      difficulty: "Easy-Medium",
      misuse: "Low",
      bestFor: [
        "Group decisions that stall without a clear frame",
        "High-stakes decisions where options need to be visible",
        "Meetings that run long without landing on a decision",
        "Situations where 'who decides' is ambiguous",
      ],
    },
    phraseBank: [
      {
        id: "decision-framing",
        label: "Decision Framing",
        tag: "Setting up the decision clearly",
        phrases: [
          "The decision we are making is: ...",
          "Let me name what we are actually deciding.",
          "The options as I see them are X and Y.",
          "The question we need to answer before we leave is: ...",
          "This is a decision about X — not about Y.",
          "The decision owner is [name]. We are here to inform it, not to make it.",
          "To be clear on the stakes: if we choose X, we get A but lose B.",
          "What is the decision, and who makes it?",
        ],
      },
      {
        id: "option-naming",
        label: "Option Naming",
        tag: "Making options explicit",
        phrases: [
          "Option one is X. Option two is Y. Are there others I am missing?",
          "I want to name the options explicitly before we discuss them.",
          "The options as currently framed are: ...",
          "Is the decision binary — X or Y — or are there more options?",
          "What is the option we are not yet naming?",
        ],
      },
    ],
    decisionTree: [
      { condition: "The group is discussing without clarity on what is being decided", action: "Stop. Name the decision.", phrase: "Let me name what I think we are deciding — is that right?" },
      { condition: "Options are implicit but not stated", action: "Make them explicit.", phrase: "The options as I see them are X and Y. Are there others?" },
      { condition: "Trade-offs are being avoided", action: "Name them directly.", phrase: "If we go with X, we get A but lose B. I want to make sure we are choosing that consciously." },
      { condition: "Who decides is unclear", action: "Name it before the discussion, not after.", phrase: "Before we get into this — whose decision is it? I want to make sure we are clear." },
    ],
    ladder: [
      { weak: "Group discusses for an hour with no clear decision framework", better: "Let us agree on what we are deciding.", best: "'The decision is X. Options are A and B. Trade-offs are [stated]. [Name] makes the final call.'" },
      { weak: "Naming the decision after the discussion is over", better: "So it sounds like we have decided...", best: "Name the decision before discussion begins." },
      { weak: "Implicit options that different people understand differently", better: "I think we are deciding between two approaches.", best: "Explicit options named and agreed before analysis begins." },
    ],
    scenarios: [
      { situation: "Team meeting that keeps going in circles", move: "Stop and name what decision you are all trying to make.", phrase: "I want to step back — what is the actual decision we are trying to reach?" },
      { situation: "High-stakes decision with multiple stakeholders", move: "Name the options and trade-offs before anyone advocates for a position.", phrase: "Before anyone argues for a position — let me name what the options are." },
      { situation: "Decision where people disagree about who decides", move: "Surface the who-decides question first.", phrase: "I want to be clear on who makes this call before we discuss it." },
      { situation: "Decision being deferred repeatedly", move: "Name what is causing the deferral — often it is an unnamed trade-off.", phrase: "The reason we keep deferring this is we have not named the real trade-off: X vs Y." },
    ],
    calibration: {
      working: [
        "Meetings end with clearer decisions.",
        "Group discussion is faster and more productive.",
        "Trade-offs are made consciously rather than accidentally.",
        "People leave knowing who owns what and what was decided.",
      ],
      adjust: [
        "The frame is too rigid and shuts down important tangential information.",
        "You name the decision without buying in from others — they have a different view of what is being decided.",
        "Who decides is named but not respected.",
        "The frame is used to pre-determine the outcome.",
      ],
    },
    drill: [
      { day: "Day 1", title: "Decision audit", task: "After your next meeting, note: was the decision clearly named? Were the options explicit? Was the owner clear?" },
      { day: "Day 2", title: "Name the decision", task: "In one meeting, name the decision before discussion begins." },
      { day: "Day 3", title: "Options explicit", task: "Practice naming the options explicitly — not as advocacy but as a shared starting point." },
      { day: "Day 4", title: "Name the trade-off", task: "In one decision, explicitly name what is being gained and what is being given up." },
      { day: "Day 5", title: "Name the owner", task: "Before any group decision, name who makes the final call." },
      { day: "Day 6", title: "Full frame", task: "Use the full frame (decision + options + trade-offs + owner) in one real meeting." },
      { day: "Day 7", title: "Calibration", task: "Did decisions land more cleanly? Did meetings end with clearer outcomes? Did any framing feel forced?" },
    ],
    checklist: [
      "Did I name the decision explicitly before the discussion?",
      "Were the options made explicit and agreed?",
      "Were the trade-offs named clearly?",
      "Was the decision owner identified before the discussion?",
      "Did the group leave with a clear, stated decision?",
      "Did I avoid using the frame to pre-determine the outcome?",
      "Was the decision confirmed by the owner at the end?",
    ],
    whyItWorks: "People make better decisions when criteria are named before options are evaluated — anchoring on a shared frame prevents the discussion from becoming a preference competition. The frame is the agreement beneath the disagreement.",
    example: {
      without: [
        "You: I think we should go with Vendor A.",
        "Colleague: I prefer Vendor B.",
        "(Debate goes in circles with no resolution)",
      ],
      with: [
        "You: Before we pick — can we agree on the two or three criteria that matter most? Then we apply them to both.",
        "Colleague: Sure — speed, cost, and support quality.",
        "You: On that basis, here's how they compare.",
      ],
    },
    notFor: [
      "When the decision is urgent and time spent establishing criteria delays it critically.",
      "When criteria are already agreed and restating them is unnecessary overhead.",
      "When the decision is a simple preference call with no meaningful trade-offs to evaluate.",
    ],
  },

  /* ──────────────────────────────────────────────
     TC027  Permission-Based Advice
  ────────────────────────────────────────────── */
  TC027: {
    id: "TC027",
    overview: {
      coreFormula: ["Ask if they want advice", "Wait for yes", "Give it once", "Stop"],
      minimumViableMove: "Before giving advice, ask: 'Would it be useful to hear my view on that?' Wait for the answer. If yes, give your advice once and stop.",
      impact: "Medium",
      difficulty: "Easy",
      misuse: "Low",
      bestFor: [
        "Coaching or mentoring relationships",
        "Advising friends or family on personal matters",
        "Situations where your advice was not requested",
        "Any conversation where someone is processing a problem",
      ],
    },
    phraseBank: [
      {
        id: "ask-permission",
        label: "Ask Permission",
        tag: "Before advising",
        phrases: [
          "Would it be useful to hear my view on that?",
          "Do you want input, or do you want me to just listen?",
          "Are you looking for a suggestion or just thinking out loud?",
          "I have a thought — want to hear it?",
          "Should I weigh in or would you rather work through it yourself?",
          "Do you want advice, or do you want me to hold the space?",
          "Is this a moment where input would help, or a moment where you need to talk?",
        ],
      },
      {
        id: "give-once",
        label: "Give Once and Stop",
        tag: "After they say yes",
        phrases: [
          "My view is X — that is it.",
          "One thought: ...",
          "I will say it once: ...",
          "My honest read is X. Take it or leave it.",
          "I do not want to repeat it — but my advice is...",
        ],
      },
    ],
    decisionTree: [
      { condition: "Someone tells you about a problem and you have a solution", action: "Ask if they want the advice before giving it.", phrase: "I have a thought on that — would it help to hear it?" },
      { condition: "They say no to advice", action: "Respect it. Do not give the advice anyway.", phrase: "That is fine — I am here if you want to talk it through." },
      { condition: "They say yes and you give advice", action: "Give it once. Do not repeat it if they do not take it.", phrase: "My advice is X. I will leave it at that." },
      { condition: "They keep coming back with the same problem and not taking your advice", action: "Do not repeat the same advice. Ask what they are actually looking for.", phrase: "I notice we keep coming back to this — what would actually help right now?" },
    ],
    ladder: [
      { weak: "Unsolicited advice immediately: 'What you need to do is...'", better: "Can I share a thought?", best: "'Do you want advice on that, or would you rather think it through yourself?'" },
      { weak: "Repeating advice they did not take", better: "I know I said this before, but...", best: "Give advice once. If they do not take it, accept their choice." },
      { weak: "Framing advice as a question to smuggle it in: 'Have you thought about doing X?'", better: "You might want to consider X.", best: "Direct advice clearly labelled as advice, given once, after asking permission." },
    ],
    scenarios: [
      { situation: "Friend venting about a problem you could easily solve", move: "Ask first whether they want input or just to be heard.", phrase: "I have an idea that might help — want to hear it, or would you rather I just listen?" },
      { situation: "Junior colleague struggling with a task", move: "Check whether they want help or to work it out themselves.", phrase: "I can see you are working through this — do you want input, or would you rather get there yourself?" },
      { situation: "Parent advising adult child", move: "Ask before advising, genuinely accept no.", phrase: "I have a view on this — do you want to hear it?" },
      { situation: "You have already given advice they have not followed", move: "Do not repeat it. Ask what they need instead.", phrase: "I gave you my view on this last time — I will not repeat it. What are you looking for right now?" },
    ],
    calibration: {
      working: [
        "People actually hear the advice when they asked for it.",
        "Relationships feel more respectful and less managing.",
        "Your advice is taken more often when it was wanted.",
        "You do not feel frustrated when advice is not followed.",
      ],
      adjust: [
        "People start saying yes just to end the asking.",
        "You ask for permission but give the advice regardless.",
        "You repeat advice they have not taken under the guise of 'just checking in.'",
        "Permission feels performative rather than genuine.",
      ],
    },
    drill: [
      { day: "Day 1", title: "Notice the urge to advise", task: "Notice every time today when you feel the urge to give advice. Do not give it yet — just notice." },
      { day: "Day 2", title: "Ask first", task: "In one conversation, ask if the person wants your advice before giving it." },
      { day: "Day 3", title: "Accept no", task: "If they say no, accept it genuinely. Do not give the advice anyway or hint at it." },
      { day: "Day 4", title: "Give once", task: "When you give advice, say it once and stop. Do not repeat it." },
      { day: "Day 5", title: "The listening alternative", task: "When they say they want to be heard rather than advised, practise just listening." },
      { day: "Day 6", title: "Repeated advice audit", task: "Notice any advice you have given more than once. Stop giving it. Ask what they actually need." },
      { day: "Day 7", title: "Calibration", task: "Was advice received better when asked for? Did accepting 'no' change the relationship? Did you repeat any advice?" },
    ],
    checklist: [
      "Did I ask if they wanted advice before giving it?",
      "Did I genuinely accept if they said no?",
      "Did I give the advice once and not repeat it?",
      "Did I avoid framing advice as questions?",
      "Did I resist the urge to give advice they had not asked for?",
      "Did people seem more receptive to advice when they had asked for it?",
      "Did I offer to just listen rather than advise when that was what was needed?",
    ],
    whyItWorks: "Unsolicited advice activates resistance — even good advice, given uninvited, is often rejected because the receiver's autonomy feels bypassed. Asking permission transforms the relationship from expert-to-recipient into collaborative peers.",
    example: {
      without: [
        "You: Here's what you should do — call him directly and be clear about what happened.",
        "Friend: (defensive) It's more complicated than that.",
      ],
      with: [
        "You: I have a thought on this — do you want advice or just someone to hear you out right now?",
        "Friend: Advice would actually be helpful.",
        "You: Call him directly and be clear about what happened.",
      ],
    },
    notFor: [
      "In emergencies where there is no time for permission — give the critical information immediately.",
      "In professional contexts where giving advice is literally your role (consultant, doctor, manager giving direction).",
      "When the permission question itself would feel clinical or awkward in a close personal relationship.",
    ],
  },

  /* ──────────────────────────────────────────────
     TC028  Warm Vocal Baseline
  ────────────────────────────────────────────── */
  TC028: {
    id: "TC028",
    overview: {
      coreFormula: ["Slower default", "Lower register", "More resonance", "Consistent — not turned on"],
      minimumViableMove: "Before entering your next conversation, take one slow breath and let your voice settle a half-tone lower than where you started. Use that as your opening register.",
      impact: "High",
      difficulty: "Medium",
      misuse: "Medium",
      bestFor: [
        "High-stakes conversations where tone matters as much as content",
        "Situations where you tend to sound sharp, tight, or defensive",
        "Leadership and management interactions",
        "Presentations, negotiations, and any verbal performance context",
      ],
    },
    phraseBank: [
      {
        id: "vocal-openers",
        label: "Warm Vocal Openers",
        tag: "Starting from the right register",
        phrases: [
          "Let me come back to that in a moment.",
          "That is a fair question.",
          "I want to answer that carefully.",
          "Let me think for a second.",
          "I appreciate you raising that.",
          "The honest answer is...",
          "I want to be clear about this.",
          "That is a reasonable concern.",
        ],
      },
      {
        id: "recovery-to-warm",
        label: "Recovery to Warm",
        tag: "When your voice has spiked or gone cold",
        phrases: [
          "Let me slow that down.",
          "I came in a bit sharp there — let me try again.",
          "That sounded colder than I meant.",
          "I want to say this more warmly: ...",
          "I sped up — the slower version is: ...",
        ],
      },
    ],
    decisionTree: [
      { condition: "You notice your voice has risen in pitch under pressure", action: "Pause. Take one breath. Let the voice drop.", phrase: "Let me take a moment before I continue." },
      { condition: "You have just said something that sounded sharp", action: "Name it and reset.", phrase: "That came out sharper than I meant — the actual point is..." },
      { condition: "You are entering a high-stakes conversation", action: "Set your vocal register before speaking.", phrase: "" },
      { condition: "You are performing warmth you do not feel", action: "Do not. Warmth as performance is worse than neutral. Aim for genuine calm.", phrase: "" },
    ],
    ladder: [
      { weak: "High, tight voice when nervous", better: "I am fine. [Steady voice]", best: "One breath before speaking. Lower, slower opening. Let it settle." },
      { weak: "Warm vocal performance that sounds affected", better: "I am going to try to sound warmer.", best: "Genuine calm as the default. Not performed warmth." },
      { weak: "Vocal quality changes erratically between sentences", better: "Trying to maintain tone.", best: "Consistent warm baseline that holds even when the content is difficult." },
    ],
    scenarios: [
      { situation: "Delivering difficult feedback", move: "Open with a lower, slower register before saying anything hard.", phrase: "I want to share something with you. Take a moment to hear the full picture before you respond." },
      { situation: "Negotiation under pressure", move: "Use vocal warmth to defuse tension before addressing the substance.", phrase: "I hear the concern. Let me address it properly." },
      { situation: "Managing an upset person", move: "Match their energy down — not up. Slower and warmer draws them toward your register.", phrase: "I can see this is difficult. Let me respond carefully." },
      { situation: "Presenting to a hostile audience", move: "Do not raise the voice. Go slower and lower — it signals control.", phrase: "I want to take a minute to address the main concerns I know are in the room." },
    ],
    calibration: {
      working: [
        "People around you visibly settle when you speak.",
        "Difficult conversations stay calmer.",
        "You feel more composed, not just sounding it.",
        "Your warmth is consistent across different situations.",
      ],
      adjust: [
        "Warm vocal tone sounds affected or performing.",
        "Lowering the voice goes too flat and sounds cold.",
        "The baseline drops when you are engaged, excited, or pressured.",
        "You are performing warmth without genuine engagement behind it.",
      ],
    },
    drill: [
      { day: "Day 1", title: "Baseline record", task: "Record your natural speaking voice for one minute. Notice pitch, pace, and warmth level." },
      { day: "Day 2", title: "Pre-conversation reset", task: "Before every significant conversation today, take one breath and let your voice settle to its lower register." },
      { day: "Day 3", title: "Slow the opening", task: "Make the first two sentences of every conversation 20% slower than feels natural." },
      { day: "Day 4", title: "Notice the spike", task: "Notice every time your voice rises in pitch or pace today. Do not correct it — just notice." },
      { day: "Day 5", title: "Recovery phrase", task: "When you notice a spike, use a recovery phrase to reset: 'Let me slow that down.'" },
      { day: "Day 6", title: "Difficult context", task: "Maintain the warm vocal baseline in one difficult or high-stakes conversation." },
      { day: "Day 7", title: "Calibration", task: "Compare your baseline now to Day 1. Did conversations feel calmer? Did warmth feel genuine?" },
    ],
    checklist: [
      "Did I set my vocal register before starting important conversations?",
      "Did I use a slower, lower opening rather than starting at full speed?",
      "Did I maintain warmth even when the content was difficult?",
      "Did I recover from any vocal spikes without losing composure?",
      "Was my warmth genuine rather than performed?",
      "Did I avoid going so low and slow that I sounded cold or disengaged?",
      "Did the other person seem to settle when I started speaking?",
    ],
    whyItWorks: "Vocal tone carries emotional information more reliably than words — perceived trustworthiness and competence are substantially shaped by how you sound, not just what you say. A warm baseline makes your content land better.",
    example: {
      without: [
        "You: (flat, fast, slightly tense) The deadline is Thursday and we need everyone aligned by then.",
        "(People hear urgency and anxiety rather than clarity — they tense up)",
      ],
      with: [
        "You: (slower, warmer, with a brief pause) The deadline is Thursday — (pause) — and I want to make sure everyone is set up to hit it.",
        "(People hear confidence and care — they lean in rather than tense up)",
      ],
    },
    notFor: [
      "In situations where artificial warmth would read as patronising or performative.",
      "When speed and information density are paramount and vocal quality is secondary.",
      "When your natural energy is genuinely flat — forced warmth that does not match your affect creates incongruence.",
    ],
  },

  /* ──────────────────────────────────────────────
     TC029  Strategic Silence
  ────────────────────────────────────────────── */
  TC029: {
    id: "TC029",
    overview: {
      coreFormula: ["Pause before answering", "Use silence as a signal — not a void", "Let them fill it sometimes"],
      minimumViableMove: "Before answering your next difficult question, take one full silent beat before speaking. Notice what happens.",
      impact: "High",
      difficulty: "Hard",
      misuse: "Medium",
      bestFor: [
        "Negotiations where you need the other side to speak more",
        "Interview or viva contexts where you need to think before answering",
        "Any situation where you tend to rush to fill silences",
        "High-pressure conversations where pace is being driven against you",
      ],
    },
    phraseBank: [
      {
        id: "silence-bridges",
        label: "Silence Bridges",
        tag: "Holding space before answering",
        phrases: [
          "[One breath pause] My honest answer is...",
          "[Pause] The right way to put this is...",
          "[Pause] Let me answer that properly.",
          "[Full second pause] I want to take that seriously.",
          "[Pause] I am going to give you the direct answer.",
        ],
      },
      {
        id: "invite-silence",
        label: "Invite to Fill",
        tag: "Letting the other person speak into silence",
        phrases: [
          "[Ask question. Pause. Wait fully before adding anything.]",
          "[State your position. Do not add a question. Wait.]",
          "[Make your point. Stop. Do not soften with a follow-up question.]",
          "[Give your view. Hold the silence. See what comes.]",
        ],
      },
    ],
    decisionTree: [
      { condition: "You are asked a difficult question and feel pressure to answer immediately", action: "Take a one-beat pause first. It is not weakness — it signals thought.", phrase: "[Pause] Let me take a moment with that." },
      { condition: "You have made your point and feel the urge to fill the silence", action: "Resist. Let the silence work. They will respond.", phrase: "" },
      { condition: "The other person is filling silence with concessions", action: "Stay silent. Do not rescue them from the silence.", phrase: "" },
      { condition: "Your silence is being read as anger or sulking", action: "Name the silence briefly.", phrase: "I am thinking — I want to give you the right answer." },
    ],
    ladder: [
      { weak: "Rushing to fill every silence with more words", better: "I want to take a moment before answering.", best: "One full silent beat. Then a slower, better answer." },
      { weak: "Using silence as punishment or power play", better: "I need a moment.", best: "Genuine reflective silence that signals thought — not aggression." },
      { weak: "Asking a question and immediately answering it yourself", better: "What do you think? [pause] I think...", best: "Ask. Pause fully. Let them answer." },
    ],
    scenarios: [
      { situation: "Negotiation: other side makes an offer", move: "Do not respond immediately. Silence creates productive discomfort.", phrase: "[Take five seconds. Look thoughtful. Then respond.]" },
      { situation: "Difficult question in an interview or assessment", move: "One beat pause before answering signals thought, not uncertainty.", phrase: "[Pause] I want to answer that properly. The thing I would say is..." },
      { situation: "You have just made a strong point", move: "Stop. Do not soften it. Let it land.", phrase: "[State point. Stop. Hold silence.]" },
      { situation: "Someone is processing something difficult", move: "Hold the silence rather than filling it. Your presence is the response.", phrase: "[No words. Just presence. Wait until they are ready.]" },
    ],
    calibration: {
      working: [
        "Your answers are more considered and land better.",
        "Silence after your statements feels powerful rather than awkward.",
        "Negotiations produce more information from the other side.",
        "You feel more in control of the pace of conversations.",
      ],
      adjust: [
        "Silence is being read as hostility or sulking.",
        "You are using silence as a power tactic rather than to think.",
        "Silence creates confusion rather than impact.",
        "You are staying silent when a warm response would serve better.",
      ],
    },
    drill: [
      { day: "Day 1", title: "Notice the rush", task: "Notice every time today when you rush to fill a silence. Do not change yet — just notice." },
      { day: "Day 2", title: "One-beat pause", task: "Before answering each question today, take one full second of silence first." },
      { day: "Day 3", title: "Post-point silence", task: "After making your main point in one conversation, stop and hold the silence for three seconds." },
      { day: "Day 4", title: "Question and wait", task: "Ask one question and then be completely silent until the other person finishes their full answer." },
      { day: "Day 5", title: "Negotiation silence", task: "In one situation where you receive information, offer, or request — pause before responding." },
      { day: "Day 6", title: "Presence without words", task: "Sit with someone in difficulty or thought without saying anything. Notice how they receive it." },
      { day: "Day 7", title: "Calibration", task: "Did silence create more impact? Did any silence feel too long? Did you learn more from letting others speak?" },
    ],
    checklist: [
      "Did I pause before answering difficult questions?",
      "Did I hold silence after making my main point?",
      "Did I let others fill silence rather than rushing in?",
      "Was my silence genuinely reflective — not aggressive or performative?",
      "Did I avoid asking questions and immediately answering them myself?",
      "Did I name the silence when it risked being misread?",
      "Did the conversation produce more information or better outcomes as a result?",
    ],
    whyItWorks: "Most people are conditioned to fill silence immediately — silence feels like failure. But silence creates space for the other person to think, add, or reveal something they would not have otherwise said. The person comfortable in silence holds power in the conversation.",
    example: {
      without: [
        "Interviewer: What's your greatest weakness?",
        "You: (immediately) I'm a perfectionist — which can sometimes... actually it's probably more of a strength really...",
      ],
      with: [
        "Interviewer: What's your greatest weakness?",
        "You: (3-second pause) I move quickly and sometimes need to slow down to bring others with me. I've been working on that deliberately.",
      ],
    },
    notFor: [
      "When silence will be read as not knowing the answer rather than thinking.",
      "In casual social conversations where silence signals awkwardness rather than composure.",
      "When the other person is in distress and silence feels like abandonment.",
    ],
  },

  /* ──────────────────────────────────────────────
     TC030  Measured Movement
  ────────────────────────────────────────────── */
  TC030: {
    id: "TC030",
    overview: {
      coreFormula: ["Still baseline", "Deliberate movement", "Gestures that reinforce the point"],
      minimumViableMove: "Before your next important conversation or presentation, notice your default physical behaviour. Set a still baseline. Move only when you mean to.",
      impact: "Medium",
      difficulty: "Hard",
      misuse: "Low",
      bestFor: [
        "Presentations and public speaking",
        "High-stakes face-to-face conversations",
        "Situations where physical composure matters",
        "Any context where nervousness tends to show in movement",
      ],
    },
    phraseBank: [
      {
        id: "grounding-phrases",
        label: "Grounding Phrases",
        tag: "Anchoring before you speak",
        phrases: [
          "Let me say this plainly.",
          "I want to be direct about this.",
          "The straightforward answer is...",
          "My view, simply: ...",
          "To be clear: ...",
          "The bottom line is...",
        ],
      },
      {
        id: "recovery-movement",
        label: "Recovery Phrases",
        tag: "When you notice excess movement",
        phrases: [
          "[Plant feet. Pause. Continue.]",
          "[Still hands. Look at the person. Finish the sentence.]",
          "[Slow the pace. Stop moving. Speak from here.]",
        ],
      },
    ],
    decisionTree: [
      { condition: "You notice you are fidgeting or moving excessively", action: "Plant your feet or rest your hands. Still baseline. Then continue.", phrase: "" },
      { condition: "You need to move to make a point", action: "Move once, deliberately, to make the point. Return to the baseline.", phrase: "" },
      { condition: "Your stillness is reading as rigid or cold", action: "Use intentional, warm movement — a lean forward, a gesture. Once. Then return.", phrase: "" },
      { condition: "You are presenting and moving constantly around the room", action: "Move to a spot. Plant. Finish the point. Then move again if needed.", phrase: "" },
    ],
    ladder: [
      { weak: "Constant fidgeting, rocking, or pacing while speaking", better: "Standing still but tight.", best: "Relaxed stillness as the default. Deliberate movement to punctuate key points." },
      { weak: "Large gestures that do not match the verbal content", better: "Smaller gestures.", best: "Gestures that precisely reinforce what is being said. No more." },
      { weak: "Shrinking posture — hunched, small, tight", better: "Upright posture.", best: "Natural upright alignment with relaxed shoulders. No performance, no contraction." },
    ],
    scenarios: [
      { situation: "Presenting to a large audience", move: "Move intentionally to different positions to mark sections. Still between moves.", phrase: "[Move to centre. Pause. Open statement. Move right for first main point.]" },
      { situation: "High-stakes conversation across a table", move: "Still posture. Lean in slightly for emphasis. Return to baseline.", phrase: "[Lean in] This is the key point. [Sit back]" },
      { situation: "Delivering difficult news", move: "Very still. Slow. No nervous movement. Let the words carry the weight.", phrase: "[Plant. Still. Speak slowly and directly.]" },
      { situation: "Nervousness causing excessive movement", move: "Name the ground under your feet. Plant. Breathe. Begin.", phrase: "[Ground. Breathe. Begin.]" },
    ],
    calibration: {
      working: [
        "Your physical presence matches the gravity of what you are saying.",
        "Nervousness is not leaking into visible movement.",
        "People focus on your words rather than your body.",
        "You feel more grounded in your body during difficult conversations.",
      ],
      adjust: [
        "Stillness has gone so far it looks rigid or cold.",
        "Deliberate movement looks performed rather than natural.",
        "You are focusing so much on movement that your content suffers.",
        "Gestures are distracting rather than reinforcing.",
      ],
    },
    drill: [
      { day: "Day 1", title: "Observe your baseline", task: "In one conversation or meeting, notice your physical behaviour. What do you do by default?" },
      { day: "Day 2", title: "Set a still baseline", task: "In one meeting, consciously hold a still posture as your default for the full duration." },
      { day: "Day 3", title: "Deliberate movement", task: "Move once during a presentation or conversation — intentionally, to reinforce a point. Then return to the baseline." },
      { day: "Day 4", title: "Grounding under pressure", task: "The next time you feel nervous in a conversation, plant your feet before speaking." },
      { day: "Day 5", title: "Gesture once", task: "Make one deliberate hand gesture that reinforces your main point. Use it once." },
      { day: "Day 6", title: "Presentation practice", task: "Present a short piece of content while consciously managing your movement." },
      { day: "Day 7", title: "Calibration", task: "Did others notice a change? Did you feel more grounded? Did any stillness read as cold?" },
    ],
    checklist: [
      "Did I set a still baseline before starting?",
      "Did I move deliberately — not reflexively or nervously?",
      "Were my gestures reinforcing the content rather than distracting from it?",
      "Did I avoid fidgeting, pacing, or rocking?",
      "Did I return to the baseline after deliberate movement?",
      "Did my physical presence match the gravity of what I was saying?",
      "Did I feel grounded rather than rigid?",
    ],
    whyItWorks: "Physical movement is unconsciously read as an indicator of internal composure — fast, restless movement signals anxiety, while measured movement signals confidence and control. Your body communicates your state before you speak.",
    example: {
      without: [
        "(You walk into the presentation room quickly, shuffle papers, adjust your position repeatedly, fidget while speaking)",
        "(Audience perceives nervousness, which lowers their confidence in your message)",
      ],
      with: [
        "(You walk in at a steady pace, set materials down deliberately, pause before beginning)",
        "(Audience perceives composure — your message lands with more authority before you say a word)",
      ],
    },
    notFor: [
      "In casual, high-energy social settings where measured movement reads as stiff or unnatural.",
      "When genuine urgency requires rapid physical movement.",
      "When your natural movement style is already composed — over-engineering it creates self-consciousness.",
    ],
  },

  /* ──────────────────────────────────────────────
     TC031  Slow Down Under Pressure
  ────────────────────────────────────────────── */
  TC031: {
    id: "TC031",
    overview: {
      coreFormula: ["Pressure cue", "One breath", "10–20% slower", "Clean ending", "Choose next move"],
      minimumViableMove: "Before answering under pressure, take one quiet breath and say the first sentence 10–20% slower than your instinct, with a clean stop at the end.",
      impact: "High",
      difficulty: "Easy-Medium",
      misuse: "Medium",
      bestFor: [
        "Being challenged in meetings, interviews, or performance reviews",
        "Disagreement, criticism, objections, negotiations",
        "Social pressure: teasing, group attention, awkward questions",
        "Moments when you notice yourself explaining too much",
        "Digital replies where you are tempted to send a long defensive message",
      ],
    },
    phraseBank: [
      {
        id: "reset",
        label: "Reset Openers",
        tag: "Any pressure moment",
        phrases: [
          "Let me think for a second.",
          "Give me one moment to answer that properly.",
          "I want to answer that directly.",
          "Let me slow down and be clear.",
          "The short version is...",
          "My honest answer is...",
          "I may be missing something, but my read is...",
          "I do not want to rush the wrong answer.",
        ],
      },
      {
        id: "professional",
        label: "Professional Challenge",
        tag: "Meetings · Reviews · Interviews",
        phrases: [
          "I see the concern. My view is...",
          "That is a fair challenge. The reason I would still do it this way is...",
          "The part I agree with is... The part I see differently is...",
          "Let me separate the issue from the noise.",
          "Bottom line: I think the best next step is...",
          "I can answer that in two parts.",
          "The decision point is simpler than the background.",
          "I do not have that number in front of me. I can check and come back with the exact figure.",
        ],
      },
      {
        id: "conflict",
        label: "Conflict / Resistance",
        tag: "Disagreement · Tension",
        phrases: [
          "Let us slow this down. I do want to understand the actual concern.",
          "I hear that this landed badly. My intention was...",
          "I can see why that sounded frustrating.",
          "I do not want to talk over you. The point I am trying to make is...",
          "The part I can own is...",
          "I am not trying to win the point. I am trying to get this right.",
          "I need to say this plainly, not sharply.",
          "I think we are moving fast past the real issue.",
        ],
      },
      {
        id: "social",
        label: "Social Pressure",
        tag: "Being put on the spot",
        phrases: [
          "Fair question.",
          "The honest answer is...",
          "I am going to give the non-polished answer.",
          "That is a better question than it sounds.",
          "I will take that seriously for a second.",
          "I have a short answer and a longer answer.",
          "I can see why you would ask that.",
          "Let me not over-answer it.",
        ],
      },
      {
        id: "highstatus",
        label: "High Status / Busy Person",
        tag: "Senior people · Decision-makers",
        phrases: [
          "I will keep it concise.",
          "Bottom line first...",
          "My recommendation is...",
          "The key trade-off is...",
          "I can give you the short answer now and the detail after.",
          "The risk I would not ignore is...",
          "I do not want to speculate. The reliable answer is...",
          "If you need a decision now, I would choose...",
        ],
      },
      {
        id: "shy",
        label: "Shy / Guarded Person",
        tag: "Low-pressure conversations",
        phrases: [
          "No pressure to answer quickly.",
          "Take a second if you need.",
          "A rough answer is fine.",
          "We can keep this simple.",
          "No need to make it polished.",
          "I am not trying to put you on the spot.",
          "We can come back to it if now is awkward.",
          "The low-pressure version is...",
        ],
      },
      {
        id: "digital",
        label: "Digital / Text / Audio",
        tag: "Messages · Voice notes",
        phrases: [
          "Let me answer this without over-explaining.",
          "Short version: yes, with one caveat.",
          "I might be reading the tone wrong, so I will keep this plain.",
          "Rather than reply too fast, I have thought about it and my answer is...",
          "I do not want this to sound defensive over text. My point is...",
          "The clean version is...",
          "Voice note because tone matters here.",
          "I will send the concise answer now and can add detail if useful.",
        ],
      },
      {
        id: "boundaries",
        label: "Boundaries / Defer",
        tag: "Buying time · Saying no",
        phrases: [
          "I cannot answer that properly on the spot.",
          "I can give you a considered answer by tomorrow.",
          "I am not comfortable deciding that without checking the detail.",
          "I can respond to the concern, but not to the personal jab.",
          "I am happy to discuss it, just not while we are rushing.",
          "The answer is no for now. I can explain the reason briefly.",
          "I need a minute before I commit to that.",
          "I am going to pause there rather than over-explain.",
        ],
      },
      {
        id: "recovery",
        label: "Recovery",
        tag: "After speeding up or going cold",
        phrases: [
          "I sped up there. Let me say it more clearly.",
          "That sounded more defensive than I meant.",
          "I paused too long there. The simple answer is...",
          "That came across colder than intended.",
          "Let me reset. I do want to answer the question.",
          "I over-explained that. The actual point is...",
          "I sounded sharper than I meant. Try again.",
          "I was buying time, not trying to avoid the question.",
        ],
      },
    ],
    decisionTree: [
      { condition: "You know the answer", action: "Breathe once. Give the direct answer first. Add one reason only if needed.", phrase: "" },
      { condition: "You partly agree with the challenge", action: "Name the valid part before your difference:", phrase: "The part I agree with is..." },
      { condition: "You are unsure", action: "Do not bluff. Give a bounded deferment:", phrase: "I can check and come back by..." },
      { condition: "They are emotionally activated", action: "Use slower sober warmth, then validate before defending.", phrase: "" },
      { condition: "They are rushing you", action: "Choose between a provisional answer and a clear timeline. Do not say yes to escape.", phrase: "" },
      { condition: "They interpret slowness as evasive", action: "Get more direct:", phrase: "The direct answer is..." },
      { condition: "You start overexplaining", action: "Stop after current sentence:", phrase: "The actual point is..." },
      { condition: "You sound cold or superior", action: "Add warmth:", phrase: "I am not trying to be difficult. I want to be clear." },
      { condition: "The setting is urgent", action: "Use crisp brevity:", phrase: "Yes. Do X now. I will explain after." },
    ],
    ladder: [
      { weak: "Fast defensive paragraph", better: "That is not quite what I meant. Let me clarify.", best: "One breath. \"I see why it sounded that way. My actual point is...\"" },
      { weak: "Instant apology to reduce tension", better: "I can see this is tense. Let me answer properly.", best: "\"I can own my part without rushing into a yes. The part I would change is...\"" },
      { weak: "Overexplaining to a senior person", better: "There are three reasons...", best: "\"Bottom line first: I recommend X. The main reason is Y.\"" },
      { weak: "Social pressure laugh + rushed self-justification", better: "That is a fair question.", best: "Smile lightly. \"Fair question. The honest answer is...\"" },
    ],
    scenarios: [
      { situation: "Meeting challenge", move: "One breath, answer the actual challenge in one sentence.", phrase: "Fair challenge. The short answer is..." },
      { situation: "Interview / viva-style question", move: "Slow the opening, structure, stop after the point.", phrase: "I would answer that in two parts." },
      { situation: "Criticism from partner/friend", move: "Slow, own the valid part, then clarify.", phrase: "I can see why that landed badly. The part I can own is..." },
      { situation: "Senior person presses for a decision", move: "Give a concise recommendation or a bounded deferment.", phrase: "If you need a decision now, I would choose X. If accuracy matters, I need until 3 pm." },
      { situation: "Group teasing or social test", move: "Light smile, slower honest answer, move on.", phrase: "Fair question. The honest answer is..." },
      { situation: "Digital disagreement", move: "Wait, cut to one clean sentence, remove heat.", phrase: "I do not want this to read defensively. Clean version: ..." },
      { situation: "Someone interrupts repeatedly", move: "Slow down, mark the need for one complete sentence.", phrase: "I will answer that, but I need one full sentence first." },
      { situation: "You are genuinely unsure", move: "Name what you know and what you need to check.", phrase: "I do not want to guess. What I know is X. I need to check Y." },
    ],
    calibration: {
      working: [
        "First sentence feels easier to choose.",
        "Other person slows or gets more precise.",
        "You say less and answer more directly.",
        "Tone sounds clearer, less pleading.",
      ],
      adjust: [
        "They look irritated or patronised.",
        "They ask for the direct answer.",
        "Your voice goes flat or cold.",
        "Situation is urgent and your pace is slowing action.",
      ],
    },
    drill: [
      { day: "Day 1", title: "Baseline", task: "Record a 60-second answer to a mildly challenging question. Notice speed, filler, pitch, sentence endings." },
      { day: "Day 2", title: "One-breath reps", task: "Practise ten answers beginning with one quiet breath and a first sentence 10–20% slower." },
      { day: "Day 3", title: "Short-answer reps", task: "Answer five challenge prompts in one sentence only, then stop." },
      { day: "Day 4", title: "Recovery reps", task: "Deliberately answer too fast, then use: \"I sped up there. Let me say it more clearly.\"" },
      { day: "Day 5", title: "Live field test", task: "Use the minimum viable move once in a real low-stakes conversation." },
      { day: "Day 6", title: "Digital test", task: "Wait before replying to one pressure message, then cut the reply by half." },
      { day: "Day 7", title: "Calibration", task: "Note whether you sounded calmer, colder, clearer or slower than necessary." },
    ],
    checklist: [
      "Did I notice the moment pressure changed my pace?",
      "Did I take one beat before the first answer?",
      "Was the first sentence 10–20% slower, not theatrically slow?",
      "Did I answer the actual question or hide behind delay?",
      "Did I say less rather than overexplaining slowly?",
      "Did my voice keep warmth and engagement?",
      "Did I finish the sentence cleanly?",
      "Did my body look steady rather than frozen?",
      "Did I choose the right next move: answer, clarify, validate, boundary or defer?",
      "Did I recover if it landed cold, evasive or defensive?",
    ],
    whyItWorks: "Under pressure, the prefrontal cortex hands control to the amygdala — speech speeds up, thinking narrows, and mistakes happen. Deliberately slowing your pace reactivates prefrontal processing, restoring the breadth of thinking needed to respond well.",
    example: {
      without: [
        "Interviewer: That's not quite what I asked — can you be more specific?",
        "You: (speeding up) Yes absolutely, what I meant was essentially if you think about it differently, what I was trying to say was...",
      ],
      with: [
        "Interviewer: That's not quite what I asked — can you be more specific?",
        "You: (pauses, breathes) You are right. Let me answer directly. (pause) The specific example is...",
      ],
    },
    notFor: [
      "In casual conversation where a deliberate slow-down reads as unnatural or aloof.",
      "When your pace is already appropriate and slowing further would feel laboured.",
      "When the pressure context requires rapid decision-making where slowing creates harmful delay.",
    ],
  },
};
