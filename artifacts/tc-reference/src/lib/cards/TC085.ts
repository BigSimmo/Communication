import type { CardData } from "../card-types";

export const TC085: CardData = {
  pdfUrl: "cards/TC085/TC085_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC085/TC085_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC085/TC085_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC085/TC085_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC085/TC085_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC085/TC085_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC085/TC085_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC085/TC085_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC085",
  whyItWorks:
    "Question-stacking restraint means asking one real question at a time. When you notice yourself piling up questions in a single turn, stop, choose the one anchor question that best opens the next useful answer, and let the person answer before you add a follow-up. A single question tells them exactly where to put their attention, so they answer more fully and feel less examined. A stack makes people triage: they answer the last or easiest question, get defensive or shut down.",
  whatItIsNot: [
    "It is not avoiding questions or becoming passive, withholding useful curiosity, or making the other person do all the work.",
    "It is not controlling the conversation by asking only the question that serves you: the aim is clarity and ease, not extraction.",
    "It is not the same as silence. Silence can help after the one question, but the core move is choosing one clean question first.",
    "It is not a ban on follow-ups: follow-ups are useful when they are sequenced. The restraint is against asking the follow-up before the first answer exists.",
    "It is not legal, clinical, investigative or crisis-interviewing advice. In those settings follow the relevant professional protocol.",
  ],
  overview: {
    coreFormula: [
      "Stack: notice you're about to ask several questions.",
      'Reset: "Let me make that one question."',
      "One anchor: ask the single question that best opens the next useful answer.",
      "Wait: leave room for the answer without adding a second prompt.",
      "Follow: choose any later follow-up from what they actually said.",
      'In one sentence: "I have a few questions, but one first: what happened first?"',
    ],
    minimumViableMove:
      "I asked too many things at once. One question: what is the main part?",
    impact: "Low",
    difficulty: "Easy-Medium",
    misuse:
      "You believe you are being engaged, but the other person experiences the stack as pressure, or you use carefully sequenced questions to extract more than they want to give.",
    bestFor: [
      "Emotionally loaded conversations where the other person needs space.",
      "Manager check-ins, coaching, mentoring and feedback conversations.",
      "Conflict repair, disagreement, complaints and debriefs.",
      "Interviews, discovery calls and stakeholder conversations.",
      "Digital messages where several asks would overload the recipient.",
      "Any moment where you notice three question marks forming in one turn.",
    ],
  },
  notFor: [
    "A formal checklist, safety protocol, emergency triage or compliance script requires a specific sequence.",
    "The other person has clearly asked for a list of questions in advance.",
    'You are using "one question" as a way to corner someone with a loaded prompt.',
    "The issue is not question count but poor listening, premature advice, or agenda pressure.",
    "Physical safety or an immediate emergency response takes priority.",
  ],
  phraseBank: [
    {
      id: "anchor-questions",
      label: "Anchor questions",
      tag: "One clean question",
      tone: "Quick",
      phrases: [
        "What happened first?",
        "What was the main part for you?",
        "What do you most want me to understand?",
        "Of those pieces, what should we start with?",
        "What felt most important about that?",
        "What's the one piece I should understand first?",
      ],
    },
    {
      id: "reset-the-pile",
      label: "Reset the pile",
      tag: "Naming the reset",
      tone: "Direct",
      phrases: [
        "I just asked too many things at once. Let me make it one.",
        "Ignore the pile of questions. What's the main part?",
        "Let me slow that down. One question first.",
        "I'm curious about several pieces, but I'll start with one.",
        "I just asked three things at once. Let me make it one: what matters most here?",
        "Would it be easier to answer what happened first, or what you need now?",
      ],
    },
    {
      id: "social-everyday",
      label: "Social / everyday",
      tag: "Friends and rapport",
      tone: "Warm",
      phrases: [
        "Actually, ignore my pile of questions. What was the main part for you?",
        "I asked a lot there. What was the hardest part for you?",
        "I have a few questions, but one first: what stayed with you?",
        "Take it wherever makes sense. What comes to mind first?",
        "No rush on the rest. What mattered most about it?",
      ],
    },
    {
      id: "work-decisions",
      label: "Work, manager & decisions",
      tag: "Meetings and check-ins",
      tone: "Professional",
      phrases: [
        "What's the main blocker right now?",
        "What decision do we need first?",
        "What's the one piece I should understand before we move on?",
        "Let me simplify the question: what's the main blocker right now?",
        "One thing at a time: what support would help most this week?",
        "Of those areas, which one should we start with?",
        "Let me ask that cleanly: what changed between the first and second attempt?",
      ],
    },
    {
      id: "digital-text",
      label: "Digital / text",
      tag: "Messages and email",
      tone: "Professional",
      phrases: [
        "I sent too many questions. Answer the easiest one first.",
        "Priority question only: can you confirm the deadline?",
        "The rest can wait. First, what's the decision?",
        "I overloaded the message. The only thing I need now is the deadline.",
        "One priority question, then I'll follow up if it's needed.",
      ],
    },
    {
      id: "conflict-disagreement",
      label: "Conflict & disagreement",
      tag: "When it is tense",
      tone: "High-stakes",
      phrases: [
        "I don't want to cross-examine you. What felt unfair?",
        "One question: what did I miss?",
        "What part of this is most important to repair?",
        "I don't want to make you defend every point. What's the main thing?",
        "I'm going to slow the questioning down. What's the first thing we need to establish?",
        "One question at a time. What do you most want me to understand?",
      ],
    },
    {
      id: "recovery",
      label: "Recovery & de-escalation",
      tag: "Backing up",
      tone: "Repair",
      phrases: [
        "That came out like an interrogation. I'm going to back up and listen.",
        "You don't have to answer all of that. What feels easiest to start with?",
        "I'm going to drop the extra questions and listen to this part.",
        "Let me back up. What do you want me to understand first?",
        "I'm noticing I'm trying to solve this by questioning you. I'll pause.",
        "No need to cover every detail. Start wherever makes sense.",
        "I have a follow-up, but I'll hold it until you finish.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "You are about to ask more than one question",
      action:
        "Pick the single anchor question that opens the next useful answer, then wait.",
      phrase: "I have a few questions, but one first: what happened first?",
    },
    {
      condition: "The questions are really one two-option choice",
      action:
        "Offer the two options as a single decision point instead of separate questions.",
      phrase:
        "Would it be easier to start with what happened, or what you need now?",
    },
    {
      condition: "The person is emotional or defensive",
      action: "Choose a softer anchor that lets them set the frame.",
      phrase: "What do you want me to understand first?",
    },
    {
      condition: "The person is calm and it is operational",
      action: "Choose a clearer, task-focused anchor.",
      phrase: "What's the main blocker right now?",
    },
    {
      condition: "They answered fully",
      action: "Reflect or summarise before asking anything else.",
      phrase:
        "So the first issue was timing, not intent. What happened after that?",
    },
    {
      condition: "You have already stacked questions",
      action: "Name it, drop the extras, and ask one clean anchor.",
      phrase:
        "I asked too many things at once. One question: what's the main part?",
    },
  ],
  ladder: [
    {
      weak: '"Why did that happen? Who said what? Did you push back? What are you going to do?"',
      better: '"What happened first?"',
      best: '"I\'m curious about a few things, but one question first: what happened first?"',
    },
    {
      weak: "Ask the next prepared question the moment they pause.",
      better: "Wait for the full answer before adding anything.",
      best: '"So the first issue was timing, not intent. What happened after that?"',
    },
    {
      weak: "Send one message with five asks and expect a clean reply.",
      better: "Send only the priority question.",
      best: '"Priority question: can you confirm the deadline? The rest can wait."',
    },
  ],
  scenarios: [
    {
      situation: "Someone is upset",
      move: "Skip the stack. Ask what they most want to say first and stay with the answer.",
      phrase: "What part feels most important to say first?",
    },
    {
      situation: "Workplace blocker",
      move: "Ask the one blocker question, then choose a single operational follow-up.",
      phrase: "What's the main blocker right now?",
    },
    {
      situation: "Disagreement",
      move: "Ask one non-loaded question so they do not have to defend every point.",
      phrase: "What do you most want me to understand?",
    },
    {
      situation: "Digital request",
      move: "Mark one priority question and park the rest.",
      phrase:
        "Priority question: can you confirm the deadline? The rest can wait.",
    },
    {
      situation: "Discovery conversation",
      move: "Let them choose the starting area instead of running a checklist.",
      phrase: "Of those areas, which one should we start with?",
    },
    {
      situation: "Friend describing a stressful event",
      move: "Name that you asked a lot, then narrow to one question.",
      phrase: "I asked a lot there. What was the hardest part for you?",
    },
  ],
  calibration: {
    working: [
      "The person answers with more detail and less guardedness.",
      "They choose their own sequence and volunteer context.",
      "Their pace slows, their voice steadies, or their body language opens.",
      "They answer the question you actually asked rather than skipping around.",
      "They lean in and share more than you asked for.",
      "Their tone relaxes and they speak more freely.",
    ],
    adjust: [
      "They answer only the last question in a stack.",
      'They say "I don\'t know where to start."',
      "They become defensive, short, or overly explanatory.",
      "They look like they are trying to remember every prompt.",
      'They ask "which question do you want me to answer?" You have already stacked too much.',
      "They say they feel interrogated, pressured or judged: stop and repair.",
      "The moment needs support, validation or silence more than another question.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the stack",
      task: "Through one whole day, count your own question marks. Note every turn where you asked two or more questions before the other person had answered.",
    },
    {
      day: "Day 2",
      title: "One-question conversion",
      task: 'Take three real stacks (e.g. "Why did it fail? Who approved it? What changed? Can you fix it?") and rewrite each as a single anchor question.',
    },
    {
      day: "Day 3",
      title: "Reset aloud",
      task: 'Say the reset line naturally ten times until it sounds unforced: "I just asked too many things at once. One question..."',
    },
    {
      day: "Day 4",
      title: "Choose the anchor",
      task: "For five upcoming conversations, decide in advance whether a story, meaning, need, blocker or choice anchor fits best, and write the one question you would open with.",
    },
    {
      day: "Day 5",
      title: "Follow the answer",
      task: "In a real conversation, ask one question, then summarise their answer in a single sentence before you allow yourself any follow-up.",
    },
    {
      day: "Day 6",
      title: "Digital cleanup",
      task: "Rewrite a five-question message into one priority question plus a short note that the rest can wait, and send it that way.",
    },
    {
      day: "Day 7",
      title: "Under pressure",
      task: "In one loaded or tense conversation, catch yourself mid-stack, reset aloud, ask a single soft anchor, and stay quiet until they finish.",
    },
  ],
  checklist: [
    "Did I ask more than one question in a single turn?",
    "Did the other person answer the question I intended, or only the last or easiest one?",
    "Did my curiosity sound like care, or like pressure or evaluation?",
    "Did I leave enough room after the first question?",
    "Did I follow up from their answer, or from my pre-written list?",
    "What would the clean one-question version have been?",
  ],
  example: {
    without: [
      'A: "The meeting went badly."',
      'B: "Why? What did they say? Did you defend the plan? Was Sam there? What are you going to do now?"',
      'A: "I don\'t know. It was just a mess."',
      "Why it's weak:",
      "five questions land in one breath and sound like a cross-examination",
      "the person can't tell which one to answer",
      'so they retreat into "it was just a mess" and give you nothing usable',
    ],
    with: [
      'A: "The meeting went badly."',
      'B: "I have a few questions, but I\'ll keep it to one: what moment made it turn?"',
      'A: "When the budget slide appeared. It looked like we were asking for approval before explaining why."',
      'B: "So the sequence created the reaction. What would have helped them understand the why first?"',
      "Why this works:",
      "one clean anchor gives them a clear place to start",
      "naming the restraint keeps the curiosity without the pressure",
      "the follow-up is earned by their answer, not read off a list",
      "reflecting first shows you tracked them rather than processed them",
    ],
    note: 'The simple middle version works too, just "What happened first?" Any single clean question beats the pile.',
  },
  influencePayoff: {
    feeling:
      '"They actually listened. I could answer without being put on trial."',
    principle:
      "When you ask one question, the other person knows exactly where to put their attention, so they answer more fully and feel less examined. Cleaner answers and less defensive friction follow.",
    gains: [
      "More usable information",
      "Better emotional safety",
      "More trust",
      "Greater credibility: you sound calm, respectful and deliberate",
      "Less defensiveness",
      "The other person feels respected rather than processed",
    ],
    whyMostFail: [
      "A question stack pushes people into one of four low-quality responses: they answer only the last question, answer the easiest one, get defensive, or shut down.",
      "The asker mistakes rapid questions for engagement, while the other person experiences them as pressure.",
      "Rapid-fire questions broadcast the asker's own anxiety instead of holding steady curiosity.",
    ],
  },
  fieldTip: {
    headline: "One question mark per turn is the default.",
    body: "The best follow-up is usually not the next question you prepared. It is the question earned by the answer you just heard. When in doubt, admit you have a few questions but ask only one.",
    example: '"I have a few questions, but one first: what happened first?"',
    dont: "Ask the next prepared question the moment they pause.",
    do: "Let their answer choose your next question.",
  },
  method: [
    {
      step: "1",
      title: "Notice the stack forming",
      body: 'Notice the signs of stacking: multiple question marks forming, "and also...", rising speed, or the urge to cover every angle before the person has answered anything. Catching the reflex early is most of the skill.',
    },
    {
      step: "2",
      title: "Pick one anchor question",
      body: "Choose one anchor question, usually the one that opens the story, clarifies the need, or names the next action. Everything else gets dropped or parked for later.",
      examples: [
        { label: "Story anchor", text: "What happened first?" },
        {
          label: "Meaning anchor",
          text: "What felt most important about that?",
        },
        { label: "Need anchor", text: "What would help right now?" },
        { label: "Blocker anchor", text: "What's the main thing in the way?" },
        {
          label: "Choice anchor",
          text: "Would it be easier to start with what happened or what you need now?",
        },
      ],
    },
    {
      step: "3",
      title: "Reset out loud if you've stacked",
      body: 'If you have already stacked, name the reset out loud so the reset itself lowers pressure: "I just asked too many things at once. One question..." Naming it is often more disarming than the question that follows.',
    },
    {
      step: "4",
      title: "Watch how it lands",
      body: "After you ask, watch whether the person relaxes, answers with detail, corrects the frame, or still looks overloaded, and let that shape your next turn rather than your prepared list.",
    },
    {
      step: "5",
      title: "Back up lightly",
      body: 'If the pressure lands, apologise lightly and back up. The recovery should reduce demand, not add to it: do not apologise and then ask a fresh stack. "That came out like an interrogation. I\'m going to slow down."',
    },
    {
      step: "6",
      title: "Follow the answer",
      body: "Combine with comment-before-question, reflective listening, a summary check, or a two-option question depending on the answer. Default to one question mark per turn: a two-option question can offer two choices but should still be one decision point.",
    },
  ],
  liveThreadClues: [
    "Two or more question marks forming in one turn",
    '"...and also..." or "and another thing..."',
    "Your speech starting to speed up",
    "The urge to cover every angle before they answer",
    "Reaching for the next question before the first is answered",
    "A mental checklist you are trying to get through",
  ],
  commonMistakes: [
    {
      mistake:
        "Curiosity flood: asking every question as soon as it occurs to you.",
      soundsLike: '"Why? What did they say? And then what? What will you do?"',
      better: '"What happened first?"',
    },
    {
      mistake:
        'Disguised accusation: stacking "why" questions that sound like a cross-examination.',
      soundsLike: '"Why did you do that? Why didn\'t you check? Why now?"',
      better: '"I don\'t want to cross-examine you. What felt unfair?"',
    },
    {
      mistake:
        "Last-question bias: assuming the answer to the last question covers all of them.",
      soundsLike:
        'Four questions, and only "...what are you going to do?" gets answered.',
      better: "Ask one question so there's nothing to triage.",
    },
    {
      mistake:
        "Digital overload: one message with five asks, expecting a clean reply.",
      soundsLike:
        '"Send the deck, confirm the budget, explain the change, and say who approved it."',
      better:
        '"Priority question: can you confirm the budget? The rest can wait."',
    },
    {
      mistake: "Over-correction: asking no questions and calling it restraint.",
      soundsLike: "Silence where a single clear question was needed.",
      better: "Ask the one anchor question, then wait.",
    },
    {
      mistake:
        "Fake simplicity: one question that secretly contains three demands.",
      soundsLike: '"Can you fix it, and by when, and who\'s helping?"',
      better: '"What\'s the main thing in the way?"',
    },
    {
      mistake:
        "Interruption follow-up: asking a second question before the first answer is complete.",
      soundsLike: "Jumping in the moment they pause for breath.",
      better: "Let the full answer land, then follow from it.",
    },
  ],
  recoveryPhrases: [
    "I just asked too many things at once. Let me slow down.",
    "That sounded like an interrogation. I'm sorry. One question only.",
    "You don't have to answer all of that. What feels easiest to start with?",
    "I'm going to drop the extra questions and listen to this part.",
    "I overloaded the message. The only thing I need now is the deadline.",
    "Let me back up. What do you want me to understand first?",
    "I'm noticing I'm trying to solve this by questioning you. I'll pause.",
    "No need to cover every detail. Start wherever makes sense.",
  ],
  bestRecoveryLine:
    "That came out like an interrogation. I'm going to slow down and just listen.",
  chains: [
    {
      label: "Warm inquiry",
      sequence:
        "Comment-before-question (TC003) → Question-stacking restraint (TC085) → Reflective listening (TC004)",
      example: [
        '"That sounds like it carried a lot."',
        '"One question: what part stayed with you?"',
        "Reflect the answer back before asking anything more.",
      ],
    },
    {
      label: "Manager clarity",
      sequence:
        "Summary check (TC011) → Question-stacking restraint (TC085) → Small ask (TC019)",
      example: [
        '"So the timeline slipped because review is blocked."',
        '"One question: what decision would unblock it?"',
        "Agree one low-friction next step.",
      ],
    },
    {
      label: "Conflict repair",
      sequence:
        "Validation without agreement (TC005) → Question-stacking restraint (TC085) → Double-sided reflection (TC037)",
      example: [
        "Validate the concern first.",
        "Ask one non-loaded question.",
        "Hold both sides without flattening either.",
      ],
    },
    {
      label: "Digital cleanup",
      sequence:
        "One-screen message (TC088) → Question-stacking restraint (TC085) → Clean request (TC013)",
      example: [
        "Compress the message to one screen.",
        "Mark one priority question.",
        "State the ask and the deadline clearly.",
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC003",
      reason:
        "Use TC085 when the problem is too many questions in one turn. Use TC003 when the count is fine but a single question lands abruptly and needs warmth or context first.",
    },
    {
      id: "TC009",
      reason:
        "Use TC085 when the other person is being asked too much. Use TC009 when you are really asking to create a runway for your own story or opinion.",
    },
    {
      id: "TC015",
      reason:
        "Use TC085 when your pressure comes through extra questions. Use TC015 when it comes through solving, advising or fixing too soon.",
    },
    {
      id: "TC034",
      reason:
        "Use TC085 when the person needs one open anchor or a reset from a pile. Use TC034 when an easy choice between two clear options would reduce the burden.",
    },
    {
      id: "TC043",
      reason:
        "Use TC085 as a narrow restraint rule inside a conversation. Use OARS (TC043) for the full open-question, affirm, reflect, summarise structure, and apply TC085 when the open questions start multiplying.",
    },
    {
      id: "TC076",
      reason:
        "Use TC085 when the specific issue is several questions in one turn. Use TC076 when the whole style still feels investigative or power-heavy even with one question at a time.",
    },
  ],
};
