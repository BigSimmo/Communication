import type { CardData } from "../card-types";

export const TC030: CardData = {
  pdfUrl: "cards/TC030/TC030_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC030/TC030_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC030/TC030_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC030/TC030_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC030/TC030_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC030/TC030_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC030/TC030_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC030/TC030_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC030",
  whyItWorks:
    'Echo plus question is a conversation-flow move: you repeat a distinctive word or short phrase the other person just used, then attach one small, natural question that helps them expand it. A pure mirror only repeats and pauses. Echo plus question repeats the useful phrase and gives the conversation a gentle direction. It quietly says, "I heard that bit. Help me understand it." It works because your curiosity is tied to their actual words rather than a generic script, which makes people feel precisely heard, lowers the effort of deciding what to say next, and keeps the thread coherent: attention shown without stealing the spotlight.',
  whatItIsNot: [
    "It is not parroting every sentence back. That turns into an echo chamber.",
    "It is not mocking or exaggerating their wording for effect.",
    "It is not therapy-style repetition or a clinical debrief.",
    "It is not cross-examination: a light follow-up, not a deposition.",
    "It is not banking their exact words to use against them later.",
  ],
  overview: {
    coreFormula: [
      "Echo their key phrase + one small question + pause.",
      "Weirdly political. How so?",
      "Hidden rules layer. What do you mean by that?",
      "Not sustainable. What part feels unsustainable?",
      "A good kind of intense. What made it good?",
      "Dismissed. What made it land that way?",
    ],
    minimumViableMove:
      'Repeat the key word or phrase, then ask one short question: "how?", "what part?", or "what do you mean by that?"',
    impact: "Medium",
    difficulty: "Easy-Medium",
    misuse:
      "It fails when the echo feels mechanical, forensic or mocking, or when you stack echo after echo until the conversation turns into an interview instead of following their meaning.",
    bestFor: [
      "Keeping a conversation moving without asking a generic question",
      "Helping someone expand a specific phrase, value, concern or story detail",
      'Clarifying vague but meaningful words such as "weird", "messy", "political", "draining" or "interesting"',
      "Networking, dating, social conversation, coaching and workplace chats",
      "Conflict or objection handling, when one word reveals the real concern",
      "Understanding before persuading, advising, requesting or disagreeing",
      "Making follow-up questions sound natural rather than interview-like",
    ],
  },
  notFor: [
    "They are emotionally overwhelmed and need validation before any more questioning",
    "Their wording is private, embarrassing or vulnerable and echoing it could feel exposing",
    "You have already echoed several phrases in a row",
    "You are tempted to use their words to trap, corner or cross-examine them",
    "They need a clear answer, decision or practical help, not more exploration",
    "The setting is public and the echo would put them on the spot",
    "They are giving short answers and the move starts to feel like effort extraction",
  ],
  phraseBank: [
    {
      id: "quick_defaults",
      label: "Quick defaults",
      tag: "Short follow-ups to append after the echoed word",
      tone: "Quick",
      phrases: [
        "How so?",
        "In what way?",
        "What part, exactly?",
        "What do you mean by that?",
        "What happened there?",
        "Say more about that word?",
      ],
    },
    {
      id: "warm_and_natural",
      label: "Warm and natural",
      tag: "Warm, low-pressure echoes",
      tone: "Warm",
      phrases: [
        "That word sounds important. What made it feel that way?",
        "You said 'draining'. What part was draining?",
        "That sounds like the real bit. What happened there?",
        "You used the word 'stuck'. Stuck how?",
        "That sounds more complicated than the short version.",
        "'A lot' sounds loaded. A lot how?",
      ],
    },
    {
      id: "charismatic_social",
      label: "Charismatic / social",
      tag: "Playful two-option echoes",
      tone: "Warm",
      phrases: [
        "Chaotic in a fun way or a why-am-I-here way?",
        "Unexpectedly good? That needs the story.",
        "Weirdly satisfying, weirdly how?",
        "That phrase is doing a lot of work. Explain.",
        "Good-intense or bad-intense?",
      ],
    },
    {
      id: "professional_workplace",
      label: "Professional / workplace",
      tag: "Clarifying vague business words",
      tone: "Professional",
      phrases: [
        "When you say 'risk', what risk specifically?",
        "By 'not sustainable', what are you seeing?",
        "What does 'done properly' mean here?",
        "You mentioned 'alignment'. Alignment around what?",
        "When you say 'priority', what should we optimise for?",
        "'Blocked', blocked by what?",
      ],
    },
    {
      id: "high_status_senior",
      label: "High-status / senior person",
      tag: "Precise, time-respecting asks",
      tone: "Direct",
      phrases: [
        "When you say 'priority', what specifically should we optimise for?",
        "By 'concise', do you mean one page or just the decision points?",
        "When you say 'too slow', where is the bottleneck?",
        "What does 'good enough' look like here?",
        "What's the key constraint?",
      ],
    },
    {
      id: "conflict_resistance",
      label: "Conflict / resistance",
      tag: "Echo the charged word after validating",
      tone: "High-stakes",
      phrases: [
        "You said 'unfair'. What would have felt fair?",
        "Dismissed. What made it land that way?",
        "Stuck. Is that about the decision or how it was handled?",
        "Rushed. What part felt rushed?",
        "Not heard. What do you need me to understand first?",
      ],
    },
    {
      id: "digital_text",
      label: "Digital / text",
      tag: "Shortest possible echoes for messaging",
      tone: "Quick",
      phrases: [
        "Messy how?",
        "Complicated in what way?",
        "What's the 'political' bit?",
        "What part is the real issue?",
      ],
    },
    {
      id: "shy_guarded",
      label: "Shy or guarded person",
      tag: "Permission and softness before the echo",
      tone: "Repair",
      phrases: [
        "No need to go into it, but when you say 'odd', what kind of odd?",
        "If you're comfortable saying, what made it feel off?",
        "You mentioned it was a bit much. Was that the people side or the task side?",
        "We can leave it there, but 'weird' sounds like the key word.",
        "Was it more awkward or more stressful?",
      ],
    },
  ],
  method: [
    {
      step: "1",
      title: "Listen for the phrase with energy",
      body: "Choose one word or short phrase that carries emotion, ambiguity, meaning, humour, tension, a value or a decision. It is usually the word they lean on or say slightly differently from the rest.\nMost sentences have one live phrase and a lot of packaging. You are hunting for the live phrase.",
      examples: [
        { label: "They say", text: '"It was fine, just... draining."' },
        { label: "Live phrase", text: '"draining", not "fine"' },
      ],
    },
    {
      step: "2",
      title: "Echo it lightly",
      body: "Repeat only the useful part, not the whole sentence, and keep your tone warm and curious rather than dramatic or forensic. A light echo signals you were listening. A heavy one signals you are analysing.\nEcho the meaning, not the accent. If their slang is not yours, echo the sense rather than copying the exact style.",
      examples: [
        {
          label: "Heavy",
          text: '"So the whole thing was weirdly political and full of hidden stakeholders..."',
        },
        { label: "Light", text: '"Weirdly political..."' },
      ],
    },
    {
      step: "3",
      title: "Attach one small question",
      body: 'Add a single short continuation question and nothing more: "how?", "what part?", "what do you mean by that?", "in what way?", or "what made it feel that way?"\nKeep it open and easy to answer. If a bare "how?" might stall, offer two options instead of one demand.',
      examples: [
        { label: "Open", text: '"Draining. What part was draining?"' },
        { label: "Two-option", text: '"Good-intense or bad-intense?"' },
      ],
    },
    {
      step: "4",
      title: "Pause and let them expand",
      body: "Do not answer your own question or rush to fill the silence. The power of the move is giving them a clear doorway and then leaving room to walk through it.\nA second or two of quiet does more work than another question.",
    },
    {
      step: "5",
      title: "Reflect or clarify",
      body: "When they expand, reflect the meaning back in a sentence or clarify the thread so they feel understood, not just questioned. This is the step that makes the technique likable rather than clinical.",
      examples: [
        {
          label: "Reflect",
          text: '"So the work isn\'t the hard part: the map of who decides is."',
        },
      ],
    },
    {
      step: "6",
      title: "Contribute or chain",
      body: "After one or two follow-ups, add a small comment, share something briefly, ask a values question, or move toward the next step. This keeps it a conversation, not an interrogation.\nEcho, question, reflect, then give something back.",
      examples: [
        {
          label: "Contribute",
          text: '"That tracks. I find the invisible-stakeholder part harder than the actual work too."',
        },
      ],
    },
  ],
  liveThreadClues: [
    "weird / odd / off",
    "messy / complicated / chaotic",
    "political",
    "draining / a lot / too much",
    "stuck",
    "intense",
    "unfair / dismissed / rushed",
    "interesting",
  ],
  influencePayoff: {
    feeling: '"You actually caught the word that mattered to me."',
    principle:
      "People stay open and keep talking when your curiosity is anchored to their own words instead of a generic prompt. Echoing the exact phrase they loaded with meaning proves you were tracking them, not just waiting for your turn to speak.",
    gains: [
      "Warmth, from being precisely heard rather than generically questioned",
      "Trust",
      "Conversational momentum without stealing the spotlight",
      "Clarity: vague words get unpacked into what they actually mean",
      "Likability, because attention is shown, not performed",
      "A reputation for being easy and interesting to talk to",
    ],
    whyMostFail: [
      "They echo mechanically until it sounds like a verbal tic.",
      "They go forensic: interrogating a word instead of following the meaning.",
      "They stack echo after echo until it becomes an interview.",
      "They never contribute anything of their own, so it feels like effort extraction.",
    ],
  },
  ladder: [
    {
      weak: '"Tell me more."',
      better: '"What was that like?"',
      best: '"You said it was weirdly intense, weirdly intense how?"',
    },
    {
      weak: '"Why?"',
      better: '"Why did that matter?"',
      best: '"That word sounds important. What made it matter?"',
    },
    {
      weak: "Repeating the whole sentence back",
      better: "Repeating just the key word",
      best: "Echoing the useful phrase and adding one small question",
    },
    {
      weak: '"What exactly do you mean by that?" in a sharp tone',
      better: '"What do you mean by that?"',
      best: '"Hidden rules layer. What do you mean by that?"',
    },
    {
      weak: "Using their words to challenge them",
      better: "Using their word to clarify",
      best: '"When you say unfair, what would have felt fair from your side?"',
    },
  ],
  example: {
    without: [
      'Person: "The new project is good, but weirdly political."',
      'You: "Political? What do you mean political? Who\'s against you?"',
      'Person: "No, not like that."',
      'You: "But you said political."',
      "Why it's weak:",
      "jumps straight to interrogation and an accusatory frame",
      'puts words in their mouth with "who\'s against you?"',
      "makes them defend and walk it back rather than expand",
      "follows your suspicion, not their meaning",
    ],
    with: [
      'Person: "The new project is good, but weirdly political."',
      'You: "Weirdly political. How so?"',
      'Person: "Not hostile. Just lots of hidden stakeholders."',
      'You: "Hidden stakeholders. So the work isn\'t the hard part, the map is?"',
      'Person: "Exactly."',
      "Why this works:",
      "echoes the exact phrase that carried the energy",
      "adds one short, open question and then stops",
      "reflects the meaning back so they feel understood",
      'A more advanced version, when a bare "how?" might stall:',
      'Person: "The new project is good, but weirdly political."',
      'You: "When you say political, do you mean actual conflict or invisible decision-makers?"',
      'Person: "Invisible decision-makers."',
      'You: "That\'s useful. So the task is partly the work, partly knowing who to keep in the loop."',
      'Person: "Yes, that\'s the issue."',
    ],
    note: 'The advanced version swaps a bare "how?" for a two-option echo. It narrows the doorway when an open question might stall, without leading them to an answer.',
  },
  commonMistakes: [
    {
      mistake: "Parroting too much",
      soundsLike: "Repeating every interesting word back at them.",
      better: "Use the move once, then reflect or contribute.",
    },
    {
      mistake: "Mocking their wording",
      soundsLike: "Echoing their phrase with sarcasm or a smirk.",
      better: "Keep the tone warm and genuinely curious.",
    },
    {
      mistake: "Going forensic",
      soundsLike: '"What exactly did you mean by that word?"',
      better: "A light follow-up, not a deposition.",
    },
    {
      mistake: "Using it to trap them",
      soundsLike: "Quoting their words back later as evidence against them.",
      better: "Use their words to understand, not to corner.",
    },
    {
      mistake: "Over-analysing slang",
      soundsLike: "Copying wording that's not natural for you.",
      better:
        "Echo the meaning more than the style if their language isn't yours.",
    },
    {
      mistake: "Adding a leading question",
      soundsLike: '"Political, so they\'re undermining you?"',
      better: "Ask before you interpret.",
    },
    {
      mistake: "Never contributing",
      soundsLike: "Echo-question, echo-question, echo-question.",
      better: "After one or two, reflect or share a small thought of your own.",
    },
  ],
  calibration: {
    working: [
      "They expand with more detail.",
      "They correct or refine the meaning in a useful way.",
      'They say "exactly", "yeah", or "that\'s the word".',
      "Their tone warms because you picked the right phrase.",
      "The conversation becomes more precise.",
      "They volunteer the story behind the word.",
    ],
    adjust: [
      "They give a flat or one-word answer.",
      "They seem quoted, analysed or exposed.",
      "They look embarrassed by the phrase you echoed.",
      "It is starting to feel like an interview.",
      "Switch to a comment instead of another question.",
      "Validate the feeling before you ask anything more.",
      'Use a softer version: "No need to go into it..."',
      "Contribute a small related thought to restore the balance.",
    ],
  },
  recoveryPhrases: [
    "Sorry, I picked up that word because it sounded important, not because I was trying to analyse you.",
    "That came out more forensic than I meant.",
    "Let me ask that more normally.",
    "No pressure if that's not the bit you want to talk about.",
    "I might be putting too much weight on one word. What's the better way to say it?",
    "I got curious there. We can move on.",
    "I didn't mean to put you on the spot. Ignore the question.",
  ],
  bestRecoveryLine:
    "Sorry, I picked up that word because it sounded important, not because I was trying to analyse you.",
  chains: [
    {
      label: "Conversation chain",
      sequence:
        "Warm comment → echo plus question → reflection → light self-disclosure",
      example: [
        '"That sounds like a good problem to have. Oddly satisfying, oddly how?"',
        '"So it\'s satisfying because it finally clicked."',
        '"I get that. I chase that feeling more than the actual result."',
      ],
    },
    {
      label: "Conflict chain",
      sequence:
        "Validate concern → echo plus question → summary check → ask what would make it workable",
      example: [
        '"I can see why that stung. Dismissed. What made it land that way?"',
        '"So it was less the decision, more that no one asked you first."',
        '"What would have made it feel fair?"',
      ],
    },
    {
      label: "Influence chain",
      sequence:
        "Echo value word → clarify priority → values frame → clean request → release",
      example: [
        "\"You said 'sustainable'. Sustainable in what sense?\"",
        '"So the real priority is a pace we can keep, not just this quarter."',
        '"If that\'s the priority, can we push the deadline a week? Your call."',
      ],
    },
    {
      label: "Networking chain",
      sequence:
        "Warm opening → echo plus question → make them the expert → useful follow-up",
      example: [
        "\"That sounds like a fascinating project. 'Messy middle', messy how?\"",
        '"You clearly know this space. What do most people get wrong about it?"',
        '"Who should I be reading or talking to on that?"',
      ],
    },
  ],
  scenarios: [
    {
      situation: "Casual conversation",
      move: "Break generic small talk by echoing the odd or loaded word.",
      phrase: "Oddly satisfying, oddly how?",
    },
    {
      situation: "Professional discussion",
      move: "Clarify a vague business word before you act on it.",
      phrase: "When you say risk, what risk specifically?",
    },
    {
      situation: "Conflict or objection",
      move: "Echo the charged word, but only after you have validated the feeling.",
      phrase: "Dismissed. What made it land that way?",
    },
    {
      situation: "Digital message",
      move: "Use the shortest possible echo so it reads as interest, not effort.",
      phrase: "Messy how?",
    },
    {
      situation: "High-status or busy person",
      move: "Keep the wording precise and time-respecting.",
      phrase: "By priority, what should we optimise for?",
    },
    {
      situation: "Shy or guarded person",
      move: "Offer permission and softness before the echo.",
      phrase: "No need to go into it, but when you say odd, what kind of odd?",
    },
  ],
  decisionTree: [
    {
      condition: "They expand on the thread",
      action:
        "Reflect the key meaning, then ask one deeper or more practical follow-up.",
      phrase: "So the hard part is the map, not the work?",
    },
    {
      condition: "They correct your interpretation",
      action: "Accept it cleanly and carry on with their version.",
      phrase: "Got it, that's a better way to put it.",
    },
    {
      condition: "They seem embarrassed by the word",
      action: "Soften and lower the stakes.",
      phrase: "No pressure, I just noticed the word.",
    },
    {
      condition: "They give a brief, flat answer",
      action: "Comment more and ask less. Do not keep drilling.",
      phrase: "Fair enough, it just sounded like the interesting bit.",
    },
    {
      condition: "They become defensive",
      action: "Move to validation and take the weight off the word.",
      phrase: "I might have read too much into that.",
    },
    {
      condition: "They turn the question back on you",
      action: "Answer briefly, then return if their thread still has energy.",
      phrase: "For me it was similar, but I want to hear the rest of yours.",
    },
  ],
  drill: [
    {
      day: "Day 1",
      title: "Spot the word",
      task: "In three conversations, just notice the one distinctive or loaded word in what each person says. Do not act on it yet, only train your ear to find the live phrase.",
    },
    {
      day: "Day 2",
      title: "Echo only",
      task: "Repeat the key word or short phrase back lightly and warmly, with no question attached. Watch what happens when you simply hand their own word back.",
    },
    {
      day: "Day 3",
      title: "Echo plus one question",
      task: 'Now add one short question after the echo ("how?", "what part?"), then stop talking and let them expand. Resist the urge to answer your own question.',
    },
    {
      day: "Day 4",
      title: "Reflect after",
      task: "Once they answer, reflect the meaning back in a single sentence so they feel understood, not just interviewed.",
    },
    {
      day: "Day 5",
      title: "Contribute after",
      task: "After one or two follow-ups, add a small thought or brief story of your own so the exchange stays a conversation, not an interrogation.",
    },
    {
      day: "Day 6",
      title: "Hard mode",
      task: "Use the move once in a mildly tense or resistant moment, but only after validating the feeling first. Echo the charged word, ask gently, then listen.",
    },
    {
      day: "Day 7",
      title: "Review and prune",
      task: "Note which echoes felt natural versus forensic. Cut any wording that sounded like analysing rather than listening, and keep the versions that felt easy.",
    },
  ],
  checklist: [
    "Did I echo a word that actually mattered to them, not just any word?",
    "Did I echo lightly and warmly, rather than theatrically or forensically?",
    "Was my question short and easy to answer?",
    "Did I avoid using their words to trap or challenge them?",
    "Did I stop before it tipped into parroting or an interview?",
    "Did I contribute something of my own after one or two follow-ups?",
  ],
  fieldTip: {
    headline: "Echo the door, not every word.",
    body: "The skill is selection, not repetition. Most sentences have one word doing the real work: the one loaded with feeling, ambiguity or stakes. Echo that one, ask one small question, then leave the rest alone.",
    example: '"It was fine, just... draining." → echo "draining", not "fine".',
    dont: "Echo every interesting word until you sound like an echo chamber.",
    do: "Pick the single phrase that opens the door, repeat it, ask one small question, then stop.",
  },
  relatedTechniques: [
    {
      id: "TC001",
      reason:
        "TC001 Live-Thread Follow-Ups follows the most alive part of the whole utterance. TC030 grabs one specific word or phrase, repeats it, then asks. Use TC001 when the energy is in the overall thread rather than a single word.",
    },
    {
      id: "TC023",
      reason:
        "TC023 Loaded-Word Follow-Up zeroes in on a single emotionally charged word. TC030 can echo a longer phrase or idea and always attaches a forward question. Use TC023 when one loaded word is the whole story.",
    },
    {
      id: "TC025",
      reason:
        "TC025 Exact-Word Pickup reuses their exact word to signal you were listening. TC030 echoes and then explicitly asks them to expand. Use TC025 for a lighter touch with no question attached.",
    },
    {
      id: "TC026",
      reason:
        "TC026 Tactical mirroring repeats the last few words and pauses: a pure mirror. TC030 adds a small question so they know which thread to open. Use TC026 when silence alone will draw them out.",
    },
    {
      id: "TC038",
      reason:
        "TC038 Conversation threading tracks and returns to several threads across a whole conversation. TC030 works one phrase in the moment. Use TC038 when you need to weave multiple topics together over time.",
    },
  ],
};
