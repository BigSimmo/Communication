import type { CardData } from "../card-types";

export const TC049: CardData = {
  pdfUrl: "cards/TC049/TC049_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC049/TC049_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC049/TC049_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC049/TC049_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC049/TC049_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC049/TC049_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC049/TC049_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC049/TC049_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC049",
  whyItWorks:
    "CARL is a structured way to tell the story of an experience: Context (what the situation was), Action (what you did), Result (what happened), Learning (what you took from it). Sequencing a reflection in those four beats makes it far easier for the listener to follow, while you still sound human, responsive and respectful. The influence comes from clarity, not pressure: a point someone can follow reads as clear thinking.",
  whatItIsNot: [
    "It is not a script to recite mechanically, and the letters are never meant to be said out loud.",
    "It is not a way to avoid listening, or to compress someone's emotion into a template.",
    "It is not a device for forcing the other person into your structure.",
    "If the structure makes the conversation less humane, it is the wrong tool: slow down and use a simpler move.",
  ],
  overview: {
    coreFormula: [
      "Context → Action → Result → Learning",
      "Context: what the situation was. Action: what you did. Result: what happened. Learning: what you took from it.",
      'Worked: "The launch was slipping. I cut scope to the core feature. We shipped on time. I now agree the must-haves up front."',
      "Minimum viable move: Context: X. Action: Y. Result: Z. Learning: L.",
    ],
    minimumViableMove:
      "Silently order your point as Context, Action, Result, Learning, then say it in four plain sentences without ever naming the framework.",
    impact: "Medium",
    difficulty: "Easy-Medium",
    misuse:
      "It fails when the structure becomes visible, announced out loud and recited mechanically, or when it ends on a vague lesson that changes no future behaviour. Then it sounds rehearsed rather than reflective, and the scaffolding replaces the substance.",
    bestFor: [
      "Reflection and debriefs after an event",
      "Supervision and development conversations",
      "Interviews and competency-style answers",
      "Learning stories where the lesson is the whole point",
      "Making a spoken contribution concise and memorable",
      "Written updates the reader needs to scan quickly",
    ],
  },
  notFor: [
    "You need a direct recommendation, not a reflection",
    "Reflection would sound self-protective or like an excuse",
    "Emotion is high and listening or validation should come first",
    "There is shame, grief, anger or a real power imbalance",
    "The decision is high-stakes and needs a straight answer",
    "Physical safety or an emergency takes priority",
  ],
  phraseBank: [
    {
      id: "quick-framing",
      label: "Quick framing",
      tag: "One-line openers",
      tone: "Quick",
      phrases: [
        "Quick version: here's what happened, what I did, and what I took from it.",
        "Short one, context, action, result, learning.",
        "Let me keep this to four beats.",
        "Give me thirty seconds and I'll walk it through.",
        "Here's the situation, then what I did about it.",
        "In brief: the setup, the move, the outcome, the lesson.",
        "One example, quickly.",
      ],
    },
    {
      id: "warm-reflection",
      label: "Warm reflection",
      tag: "Sharing a learning story",
      tone: "Warm",
      phrases: [
        "Honestly, here's what I took from it.",
        "The thing I learned has stuck with me.",
        "It didn't go to plan, and that's the useful part.",
        "Looking back, I'd do one thing differently.",
        "I'm still glad I tried it, even though it wobbled.",
        "What changed for me was small but real.",
        "That one taught me more than the wins did.",
      ],
    },
    {
      id: "meetings-updates",
      label: "Meetings and written updates",
      tag: "Work and email",
      tone: "Professional",
      phrases: [
        "Context: where we were. Action: what we changed. Result: what shifted. Learning: what we'll carry forward.",
        "Here's the situation, what we did, the outcome, and the takeaway.",
        "I'll set the scene, then the decision, then the result.",
        "The headline is the result. The rest is background.",
        "For the update: what happened, our response, where it landed.",
        "Let me label these so you can scan them.",
        "The learning we're taking into the next cycle is this.",
        "One short paragraph each: context, action, result, learning.",
      ],
    },
    {
      id: "to-the-point",
      label: "Getting to the point",
      tag: "Cutting to the core",
      tone: "Direct",
      phrases: [
        "The main point is X. The rest is only support.",
        "Bottom line first, then the story behind it.",
        "Here's what I'd do differently next time.",
        "The result was Y, and here's why.",
        "I'll give you the lesson, then the evidence for it.",
        "Skip to the learning. This is what changes now.",
        "One clean next step out of all of this.",
      ],
    },
    {
      id: "when-it-lands-badly",
      label: "When it lands badly",
      tag: "Softening and recovery",
      tone: "Repair",
      phrases: [
        "Let me cut to what I learned.",
        "Too much context there. Here's what I actually did.",
        "Short version: I did X, it worked, and next time I'd do Y.",
        "Is the learning the useful part for you, or the result?",
        "Let me drop the scaffolding and just tell you what happened.",
        "I got a bit formulaic there: one plain sentence instead.",
      ],
    },
    {
      id: "sensitive-moments",
      label: "Sensitive or high-pressure moments",
      tag: "Check before structuring",
      tone: "High-stakes",
      phrases: [
        "Before I frame this. Is a structured version helpful, or would you rather just talk it through?",
        "I can lay this out clearly, but I want to hear you first.",
        "Let me check whether that structure is useful or if we should approach it another way.",
        "I'll keep this to one sentence per step, then pause.",
        "This one's heavy. Tell me if the structure is getting in the way.",
        "One line each, and stop me whenever.",
      ],
    },
  ],
  liveThreadClues: [
    "Tell me about a time when...",
    "Walk me through what happened.",
    "What did you learn from that?",
    "How did that project go?",
    "Can you give me an example?",
    "What would you do differently?",
  ],
  method: [
    {
      step: "1",
      title: "Decide if CARL fits",
      body: "Choose the framework only if it serves the moment, and never name it out loud. If emotion is present, or the person just needs a straight answer, use a simpler move instead.",
      examples: [
        {
          label: "Silent check",
          text: "Is this a reflection or a request? CARL is for the reflection.",
        },
      ],
    },
    {
      step: "2",
      title: "Context: set the scene",
      body: "One line on the situation, no more. Enough for the listener to picture where you were.",
      examples: [
        {
          label: "Context",
          text: '"The launch was slipping by about two weeks."',
        },
      ],
    },
    {
      step: "3",
      title: "Action: what you did",
      body: "State the actual move you made, in plain language. This is the part that shows judgement.",
      examples: [
        {
          label: "Action",
          text: '"I cut scope to the one feature customers really needed and re-set the date with the team."',
        },
      ],
    },
    {
      step: "4",
      title: "Result: what happened",
      body: "The consequence of your action, good or mixed. Keep it honest and specific.",
      examples: [
        {
          label: "Result",
          text: '"We shipped that core feature on time. The extras followed a month later."',
        },
      ],
    },
    {
      step: "5",
      title: "Learning: what changes now",
      body: 'The point of CARL. Name a real learning that is specific enough to change future behaviour, not a vague "I learned a lot."',
      examples: [
        {
          label: "Learning",
          text: '"I now agree the must-haves before we start, not halfway through."',
        },
      ],
    },
    {
      step: "6",
      title: "Watch and adapt",
      body: "Notice whether the listener becomes clearer, more engaged or more able to act. If they look confused or resistant, summarise and invite correction rather than pushing the structure harder.",
      examples: [
        {
          label: "Check",
          text: '"Does that make sense laid out that way, or have I muddied it?"',
        },
      ],
    },
  ],
  ladder: [
    {
      weak: "Announces the framework and recites every step.",
      better: "Uses CARL silently to organise a concise answer.",
      best: "Moves through it so lightly it just sounds like clear thinking.",
    },
    {
      weak: "Ends on a vague lesson that changes nothing.",
      better: "Names a real, specific learning.",
      best: "Names the learning and what it changes next time.",
    },
    {
      weak: "Pushes the structure harder when the listener looks lost.",
      better: "Notices and simplifies.",
      best: "Drops the frame and checks what the listener actually needs.",
    },
  ],
  example: {
    without: [
      'Interviewer: "How did you handle the missed deadline?"',
      'You: "I\'ll use CARL for this. Context: the project was behind. Action: I took action. Result: there was a result. Learning: I learned something."',
      'You: "Context is important, so let me give you a bit more context..."',
      "Why it's weak:",
      "announces the framework out loud",
      "forces empty labels with no real content",
      "keeps adding context after the point is made",
      "sounds rehearsed rather than reflective",
    ],
    with: [
      'Interviewer: "How did you handle the missed deadline?"',
      'You: "The launch was slipping about two weeks. I cut scope to the one feature customers really needed and re-set the date with the team."',
      'You: "We shipped that core feature on time, and the extras followed a month later."',
      'You: "What I took from it was to agree the must-haves before we start, not halfway through."',
      'Interviewer: "What would you\'ve done differently?"',
      "You: \"Flagged the slip a week earlier. That's the bit I've changed since.\"",
      "Why this works:",
      "moves through context, action, result and learning without naming them",
      "keeps each step to one plain sentence",
      "ends on a specific learning that changes future behaviour",
      "adapts to the follow-up instead of defending the structure",
    ],
    note: "Same four beats, never announced. The listener feels clarity, not choreography.",
  },
  influencePayoff: {
    feeling: '"That was clear, and I know exactly what they took from it."',
    principle:
      "People trust a point they can follow. Clear sequencing reads as clear thinking, and its pull comes from clarity and respect rather than pressure.",
    gains: [
      "A clearer path through the point you are making",
      "Lower cognitive load for the listener",
      "Better sequencing, so what matters comes first",
      "A visible learning, so the reflection actually lands",
      "Credibility that comes from clarity, not pressure",
      "A shorter, more memorable contribution",
      "Room for the listener to respond, because the point is finished",
    ],
    whyMostFail: [
      "They announce the framework out loud and sound rehearsed.",
      "They force every sentence into the structure after the listener is already clear.",
      "They use it when listening or validation should have come first.",
      "They end on a vague lesson that changes no future behaviour.",
    ],
  },
  fieldTip: {
    headline: "The learning is the part people remember.",
    body: "Use CARL to organise your thinking, then take the scaffolding down before you speak. The whole thing turns on a learning specific enough to change what you do next time. That is what separates reflection from a nice-sounding recap.",
    example:
      '"We shipped the core feature on time. What I took from it was to agree the must-haves before we start."',
    dont: 'Don\'t announce the framework or end on a vague "I learned a lot."',
    do: "Do keep each step to one plain sentence and make the learning concrete.",
  },
  commonMistakes: [
    {
      mistake: "Announcing the framework",
      soundsLike: '"I\'m going to use CARL here..."',
      better: "Just tell the story in four plain beats.",
    },
    {
      mistake:
        "Over-structuring: making CARL matter more than the person or the point",
      soundsLike:
        "Forcing every sentence into Context / Action / Result / Learning.",
      better: "Let the point lead. Use the structure only to organise it.",
    },
    {
      mistake: "Over-explaining after the point has landed",
      soundsLike: "Adding more context once the structure has done its job.",
      better: "Stop once it's clear and give them room to respond.",
    },
    {
      mistake: "Structuring when emotion is present",
      soundsLike: '"Let me lay this out..." while they\'re still upset.',
      better: "Validate first, then structure the information.",
    },
    {
      mistake: "A vague learning",
      soundsLike: '"So yeah, I learned a lot from it."',
      better: '"I now agree the must-haves before we start."',
    },
    {
      mistake: "Not checking it landed",
      soundsLike: "Moving on without seeing if they followed.",
      better: '"Does that make sense laid out that way?"',
    },
  ],
  calibration: {
    working: [
      "The listener becomes clearer.",
      "They ask a more specific question.",
      "They summarise your point back accurately.",
      "They can choose a next step.",
      "They stay with the sequence rather than tuning out.",
      "The learning lands and they build on it.",
    ],
    adjust: [
      "They look confused or go quiet: simplify or slow down.",
      "They challenge the framing: check what they actually need.",
      "They need the human context before the structure: give that first.",
      "It starts to sound defensive or self-protective. Drop the frame.",
      "It sounds performative, salesy or like a lecture: stop.",
      "Emotion rises: validate before you structure.",
    ],
  },
  recoveryPhrases: [
    "Let me cut to what I learned.",
    "Too much context there. Here's what I actually did.",
    "Short version: I did X, it worked, and next time I'd do Y.",
    "Is the learning the useful part for you, or the result?",
    "Let me drop the labels and just tell you what happened.",
    "I got a bit formulaic there. Here's the plain version.",
    "Forget the framework for a second: the real point is this.",
  ],
  bestRecoveryLine: "Let me cut to what I learned.",
  chains: [
    {
      label: "Clarity chain",
      sequence: "CARL → Summary check",
      example: [
        '"...and the learning was to agree scope up front."',
        '"Does that match what you were expecting to hear?"',
      ],
    },
    {
      label: "Action chain",
      sequence: "CARL → Clean request",
      example: [
        '"...so the fix is a scope check at kickoff."',
        '"Could you add that to next week\'s agenda?"',
      ],
    },
    {
      label: "Autonomy chain",
      sequence: "CARL → Autonomy release",
      example: [
        "\"That's what I'd take from it.\"",
        "\"But it's your call how you'd handle it.\"",
      ],
    },
    {
      label: "Emotion-first chain",
      sequence: "Validate the concern → CARL",
      example: [
        '"That deadline sounded genuinely stressful."',
        "\"Here's what happened and what I'd change...\"",
      ],
    },
  ],
  scenarios: [
    {
      situation: "Work meeting",
      move: "Make one contribution concise and memorable: four beats, no labels.",
      phrase:
        "Here's the situation, what we did, where it landed, and what we'll carry forward.",
    },
    {
      situation: "Written update or email",
      move: "Put each step in a short labelled paragraph so the reader can scan it.",
      phrase: "Context: ... Action: ... Result: ... Learning: ...",
    },
    {
      situation: "Feedback conversation",
      move: "Check what kind of feedback is wanted before you structure anything.",
      phrase:
        "Would it help if I walked through what happened and what I'd change?",
    },
    {
      situation: "Job interview or competency answer",
      move: "Answer in four beats, end on the learning, then invite the follow-up.",
      phrase:
        "The result was we shipped on time. The learning was to agree the must-haves early.",
    },
    {
      situation: "Difficult conversation",
      move: "One sentence per step, then pause and let them respond.",
      phrase:
        "Here's what happened. Here's what I did. Here's where it left us.",
    },
    {
      situation: "Debrief after something went wrong",
      move: "Keep blame out of it and make the learning the point.",
      phrase: "Less about who: more about what we now know for next time.",
    },
  ],
  decisionTree: [
    {
      condition: "The listener needs speed",
      action: "Use the shortest version: result first, one line each.",
      phrase: "Bottom line: we shipped on time. Quick why, if it's useful.",
    },
    {
      condition: "The listener needs support",
      action: "Validate first. Delay the framework until the emotion settles.",
      phrase:
        "That sounds like it was a lot. Want me to lay it out, or just talk it through?",
    },
    {
      condition: "The listener needs a story or example",
      action: "Walk the four beats as a narrative, not as labels.",
      phrase: "Let me tell you how that one actually went.",
    },
    {
      condition: "The listener needs to act",
      action: "End with one clean next step.",
      phrase: "So the next step is a scope check at kickoff.",
    },
    {
      condition: "The listener looks confused",
      action:
        "Summarise and invite correction rather than pushing the structure harder.",
      phrase: "Let me boil that down. Did I make the point or muddy it?",
    },
  ],
  drill: [
    {
      day: "Day 1",
      title: "Write it out",
      task: "Take a real experience and write a 60-second response using Context → Action → Result → Learning.",
    },
    {
      day: "Day 2",
      title: "Cut it down",
      task: "Cut yesterday's response by a third, down to about 30 seconds, without losing the core point.",
    },
    {
      day: "Day 3",
      title: "Sharpen the learning",
      task: 'Rewrite the Learning line so it names something specific that would change what you do next time. Delete any "I learned a lot."',
    },
    {
      day: "Day 4",
      title: "Two voices",
      task: "Say it aloud twice. Once as a visible structure with labels, once as plain speech. Notice how much better the plain version lands.",
    },
    {
      day: "Day 5",
      title: "Serve the listener",
      task: "For your response, ask: would this help the other person understand, decide or act? Trim anything that only makes you sound polished.",
    },
    {
      day: "Day 6",
      title: "Practise a recovery",
      task: 'Rehearse one recovery line so you can drop the structure smoothly if it lands badly, such as "Let me cut to what I learned."',
    },
    {
      day: "Day 7",
      title: "Use it live",
      task: "In one real conversation, use CARL silently (four plain sentences, never named) and watch whether the listener becomes clearer.",
    },
  ],
  checklist: [
    "Did I use CARL to serve the listener, not to sound polished?",
    "Was the core point clear?",
    "Did I keep it concise?",
    "Was the learning specific enough to change next time?",
    "Did I adapt when the listener needed something else?",
    "Did I preserve the other person's autonomy and dignity?",
  ],
  relatedTechniques: [
    {
      id: "TC047",
      reason:
        "STAR (Situation, Task, Action, Result) is the interview cousin: reach for it when the emphasis is on what you did and delivered. Use CARL when the point of the story is the learning, not just the result.",
    },
    {
      id: "TC050",
      reason:
        "What? So what? Now what? is a lighter three-beat reflection. Use it for a quick debrief. Use CARL when you also need the concrete action and result in between.",
    },
    {
      id: "TC042",
      reason:
        "PREP (Point, Reason, Example, Point) leads with the conclusion to persuade. Use CARL when you are reflecting on an experience rather than arguing a position.",
    },
    {
      id: "TC040",
      reason:
        "Meaning reflection mirrors the meaning behind what someone else said. Use CARL to structure your own account. Use Meaning reflection when the move is to reflect their point back.",
    },
    {
      id: "TC048",
      reason:
        "SCQA (Situation, Complication, Question, Answer) frames a problem for the reader. Use CARL when you are narrating what happened and what you learned, not setting up a question.",
    },
  ],
};
