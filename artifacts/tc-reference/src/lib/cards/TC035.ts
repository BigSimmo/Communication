import type { CardData } from "../card-types";

export const TC035: CardData = {
  pdfUrl: "cards/TC035/TC035_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC035/TC035_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC035/TC035_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC035/TC035_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC035/TC035_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC035/TC035_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC035/TC035_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC035/TC035_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC035",
  whyItWorks:
    "A strategic pause is a brief, intentional gap in speech, usually one to three seconds, placed just before or after a key line so that line can land. It works as conversational punctuation: a comma, a full stop, or a paragraph break that stops reactive filler from weakening your message. Because the important words are not buried under extra wording, they carry more weight. Because you are not rushing, you look composed rather than reactive. And because there is space after a question, the other person actually gets room to think. Paired with a relaxed face and normal breathing, it reads as taking care with the moment rather than performing control. It is distinct from long silence: a strategic pause is short punctuation around your own speaking, whereas strategic silence leaves the floor open for the other person to continue.",
  whatItIsNot: [
    "Not the silent treatment, intimidation, or awkward withholding to make someone chase your approval.",
    "Not performance drama or a fake-wisdom pose: the strongest versions sound ordinary, not staged.",
    "Not the same as strategic silence: a pause is short punctuation around your own line, not handing the floor over.",
    "Not a rescue for weak content: a pause cannot save a vague point, a bad apology, or an evasive answer.",
    "Not a way to pressure someone. It makes space, it does not corner.",
  ],
  overview: {
    coreFormula: [
      "Notice the key point or pressure, breathe, say or receive the line, pause one beat, then continue only with the next necessary move.",
      'Before answering: "Let me take a second with that." [pause] "The cleanest answer is..."',
      'After a point: "The real constraint is capacity." [pause] "So the decision is what we stop doing."',
      'After a question: "What would need to change for this to feel workable?" [pause]',
      "After an apology: \"I'm sorry. I shouldn't have interrupted you.\" [pause]",
    ],
    minimumViableMove:
      "After an important sentence, close your mouth and count one slow beat before adding anything else.",
    impact: "Medium",
    difficulty: "Medium",
    misuse:
      "It fails when the pause turns theatrical: too long, filled with staring, or used to create pressure rather than space.",
    bestFor: [
      "You are under pressure and tempted to answer too fast",
      "You have just said the most important sentence",
      "You ask a question that deserves real thought",
      "The conversation is emotionally loaded",
      "You need to apologise without immediately defending yourself",
      "You are setting a boundary and do not want to overexplain it",
      "You are presenting a key point, result, or recommendation",
      "You are giving feedback and want it to feel considered, not reactive",
      "You are negotiating and need to avoid filling silence with concessions",
      "You are in a helping conversation where the other person needs room to think or feel",
    ],
  },
  notFor: [
    "There is an urgent safety or operational need to speak or act immediately",
    "You cannot keep your face neutral or warm: a cold pause reads as judgement",
    "The content is weak or evasive. A pause will only highlight it, not rescue it",
    "You would only be pausing to perform composure or make someone wait",
    "The other person is already talking freely and simply needs room. Use silence, not a pause",
  ],
  phraseBank: [
    {
      id: "under_pressure",
      label: "Before responding under pressure",
      tag: "Buying a beat under pressure",
      tone: "High-stakes",
      phrases: [
        "Let me take a second with that.",
        "I want to answer that carefully.",
        "Give me one moment to think.",
        "That's worth answering properly.",
        "Let me slow down before I respond.",
        "I don't want to rush the answer.",
      ],
    },
    {
      id: "after_key_point",
      label: "After a key point",
      tag: "Let the point stand",
      tone: "Direct",
      phrases: [
        "The main issue is trust, not speed.",
        "That's the part I don't want us to miss.",
        "My recommendation is to stop the rollout for a week.",
        "This is a boundary for me.",
        "What matters most here's clarity.",
        "That's the decision I'm making.",
      ],
    },
    {
      id: "after_question",
      label: "After a question",
      tag: "Leave the answer space open",
      tone: "Direct",
      phrases: [
        "What would make this feel workable from your side?",
        "What's the part you most want me to understand?",
        "Is the blocker more capacity or unclear priorities?",
        "What's your honest read?",
        "What would a good outcome look like here?",
        "What do you need from me now?",
      ],
    },
    {
      id: "conflict_apology",
      label: "Conflict / apology",
      tag: "Own it, then wait",
      tone: "Repair",
      phrases: [
        "You're right. I interrupted you.",
        "I can see why that landed badly.",
        "I'm sorry. I shouldn't have said it that way.",
        "I don't want to defend that before I understand the impact.",
        "Let me take in what you just said.",
        "Say the rest. I'll wait.",
      ],
    },
    {
      id: "professional_leadership",
      label: "Professional / leadership",
      tag: "Naming trade-offs and risk",
      tone: "Professional",
      phrases: [
        "The trade-off is speed versus reliability.",
        "My concern isn't effort. It's prioritisation.",
        "Let's separate urgency from importance.",
        "I want to name the risk plainly.",
        "That's the constraint.",
        "I'm not comfortable approving it as it stands.",
      ],
    },
    {
      id: "helping_conversation",
      label: "Clinical-style / helping conversation",
      tag: "Give room to feel",
      tone: "Warm",
      phrases: [
        "Take your time.",
        "I'm going to sit with that for a moment.",
        "That sounds like an important part.",
        "You don't have to rush this.",
        "What was that like for you?",
        "Let's slow this part down.",
      ],
    },
    {
      id: "presentation_interview",
      label: "Presentation / interview",
      tag: "Let a headline or result land",
      tone: "Professional",
      phrases: [
        "The headline is this.",
        "The result was a 20 percent reduction in rework.",
        "The lesson I took from it was simple.",
        "My answer is yes, with one condition.",
        "What changed my mind was the data.",
        "That's the distinction I'd make.",
      ],
    },
    {
      id: "digital_text",
      label: "Digital / text",
      tag: "The written pause",
      tone: "Quick",
      phrases: [
        "I'm going to think before replying properly.",
        "Let me sit with this and come back with a cleaner answer.",
        "I don't want to rush a messy reply.",
        "I need a bit of time before I answer that fully.",
        "I hear you. I'm not ignoring it, I'm thinking.",
        "Let me pause before we make this bigger over text.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "You are about to answer defensively",
      action:
        "Breathe once, name that you are thinking, then answer the cleanest part first.",
      phrase: "Let me take a second with that.",
    },
    {
      condition: "You have just said the key point",
      action:
        "Stop. Let the sentence stand for a beat before you explain more.",
      phrase: "That's the part I don't want us to miss.",
    },
    {
      condition: "You asked a real question",
      action: "Do not rephrase it. Wait long enough for them to think.",
      phrase: "What's your honest read?",
    },
    {
      condition: "They look pressured or exposed",
      action:
        "Soften the pause with warmth, validation, or an autonomy release.",
      phrase: "No rush, take the time you need.",
    },
    {
      condition: "The pause becomes awkward",
      action: "Recover plainly: name that you are thinking, not withholding.",
      phrase: "I'm just thinking, not trying to make that weird.",
    },
    {
      condition: "The other person starts talking",
      action: "Let them. The pause has done its job.",
      phrase: "",
    },
  ],
  ladder: [
    {
      weak: "Answering immediately to prove competence",
      better: "Let me think.",
      best: "Let me take a second so I answer properly. [pause]",
    },
    {
      weak: "I'm sorry but...",
      better: "I'm sorry. I should have handled that better.",
      best: "I'm sorry. I should have handled that better. [pause] I interrupted before I understood.",
    },
    {
      weak: "Rushing through the hard sentence",
      better: "The concern is capacity.",
      best: "The concern is capacity. [pause] We can't keep adding work without removing work.",
    },
    {
      weak: "A dramatic stare after the point",
      better: "A quiet beat after the point",
      best: "Say the point, soften your gaze, breathe once, then continue only if needed.",
    },
  ],
  scenarios: [
    {
      situation: "Challenged in a meeting",
      move: "Pause before defending your view.",
      phrase:
        "Let me take a second with that. [pause] My concern is the risk in week two.",
    },
    {
      situation: "Apology or repair",
      move: "Pause after the apology, before you explain.",
      phrase: "I'm sorry. I shouldn't have spoken over you. [pause]",
    },
    {
      situation: "An important question",
      move: "Ask it, then leave the answer space open.",
      phrase: "What would need to change for this to feel workable? [pause]",
    },
    {
      situation: "Setting a boundary",
      move: "Stop after the main point. Do not dilute it.",
      phrase: "I can't take this on tonight. [pause]",
    },
    {
      situation: "Helping conversation",
      move: "Let the person hear themselves after a loaded line.",
      phrase: "That sounds like the lonely part. [pause]",
    },
    {
      situation: "Negotiation",
      move: "Pause after naming the constraint. Do not fill it with concessions.",
      phrase: "I can move on timeline, but not on scope. [pause]",
    },
  ],
  calibration: {
    working: [
      "The other person keeps thinking rather than defending.",
      "They answer your question more fully.",
      "Your key point is remembered or repeated back.",
      "You feel less need to explain yourself twice.",
      "The room slows down without going cold.",
      "People stop interrupting because the pacing has become clearer.",
      "Your apology or boundary comes out cleaner.",
    ],
    adjust: [
      "They look uncomfortable, cornered, or confused: soften the pause with warmth.",
      "They laugh awkwardly, or rush to fill the silence to please you.",
      'Someone asks "What?" or "Why are you looking at me like that?" The pause is drawing more attention than the message.',
      "You feel pleased with the effect of the pause rather than focused on the conversation. Drop the performance.",
      "You add caveats straight after the key point, or answer your own question: the pause was too short.",
      "They are already speaking freely: switch to Minimal encouragers or Strategic silence.",
      "The moment has gone cold: return to Warm presence or a Full-attention signal.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot your over-talk lines",
      task: "List five lines you routinely weaken by overexplaining: the ones where you rush on instead of stopping.",
    },
    {
      day: "Day 2",
      title: "Cut to one clean sentence",
      task: "Rewrite each of the five as a single clean sentence, with nothing hedged on the end.",
    },
    {
      day: "Day 3",
      title: "Add the beat",
      task: "Say each sentence aloud, then close your mouth and hold one slow beat. Notice the urge to add a caveat and let it pass.",
    },
    {
      day: "Day 4",
      title: "Place the pause three ways",
      task: 'Take one sentence and practise it before ("Let me take a second." [pause] "The issue is capacity."), after ("The issue is capacity." [pause]), and as a bridge ("The issue is capacity." [pause] "So we remove work before adding more.").',
    },
    {
      day: "Day 5",
      title: "Pause after a question",
      task: "In one real conversation, ask a genuine question and hold the silence. Do not rephrase it or answer it yourself. Watch what they do with the space.",
    },
    {
      day: "Day 6",
      title: "Pause under pressure",
      task: 'When you feel the pull to answer fast, say "Let me take a second with that," breathe once, then answer the cleanest part first.',
    },
    {
      day: "Day 7",
      title: "Three a day, then review",
      task: "Use three strategic pauses across the day: one after a question, one after a key point, one before responding under pressure. Afterwards ask: did each pause create space, or pressure?",
    },
  ],
  checklist: [
    "Did I know the job this particular pause was doing?",
    "Was the pause short enough for the context, and did my face and body stay relaxed?",
    "Did I stop after the key point instead of explaining it to death?",
    "Did I give the person enough time after a question?",
    "Did I keep the silence as space, never as punishment?",
    "Would the pause have felt respectful if I were on the receiving end?",
  ],
  example: {
    without: [
      'A: "I don\'t think your plan is realistic."',
      "B: \"Well, it's realistic if people actually do what they said they would, and I've already checked most of it.\"",
      'A: "That\'s not really my point."',
      "Why it's weak: B rushes to defend, buries the real question, and never finds out what the objection actually is.",
      "A: \"I'm just tired of pretending I'm fine.\"",
      'B: "Yeah, that makes sense. Have you tried taking time off or talking to someone?"',
      'A: "I don\'t know."',
      "Why it's weak: the advice arrives before the feeling has any room, so the person closes back up.",
    ],
    with: [
      'A: "I don\'t think your plan is realistic."',
      'B: "Let me take a second with that." [pause] "The part I agree with is the dependency risk. The part I\'d still defend is the timeline if we drop one deliverable."',
      'A: "That\'s more workable. Which deliverable?"',
      "Why this works: the pause buys composure, so B answers the real objection instead of the reflex to defend.",
      "A: \"I'm just tired of pretending I'm fine.\"",
      'B: "That sounds exhausting." [pause] "What\'s the part you most wish people understood?" [pause]',
      "A: \"That I'm not being difficult. I'm running out of energy.\"",
      "B: \"So the strain isn't just the work. It's having to mask the strain.\"",
    ],
    note: "The pause is not the whole move. It is the gap that lets the right next sentence arrive instead of the reflex one.",
  },
  influencePayoff: {
    feeling: '"They took my point seriously. They did not just talk over it."',
    principle:
      "Calm pacing carries more authority than speed. A point given room lands harder than a point rushed.",
    gains: [
      "Adds weight: key words land because they are not buried under extra wording.",
      "Signals composure: you look less reactive when challenged.",
      "Improves clarity: the listener processes one point before the next arrives.",
      "Reduces overexplaining: you stop after the point instead of weakening it.",
      "Creates answer space, after a question, the pause gives permission to think.",
      "Makes apologies cleaner: ownership is not immediately swallowed by justification.",
      "Supports autonomy: you are not pushing the other person to respond instantly.",
    ],
    whyMostFail: [
      "They make the pause theatrical (too long, or capped with intense eye contact) so it reads as performance.",
      "They use the gap as pressure or punishment rather than space, and the room goes cold.",
      "They pause around weak content, expecting silence to rescue a vague point or an evasive answer.",
      "They let the point land, then bury it under a rush of justification anyway.",
    ],
  },
  fieldTip: {
    headline: "Pause after the sentence you most want to explain.",
    body: "A strategic pause is not empty space. It is a decision not to trample the moment with extra words. It works best when it is brief, warm, and attached to a real job. The most useful pause usually comes right after the line you feel most tempted to justify. Say the clean sentence, breathe once, and let the other person meet it before you add anything.",
    example:
      '"The concern is capacity." [pause] Let it sit, then, only if needed, "So we remove work before adding more."',
    dont: 'Fill the gap with "um, yeah, so..." or a rushed caveat.',
    do: "Soften your gaze, breathe once, and let the line land before you continue.",
  },
  method: [
    {
      step: "1",
      title: "Notice the moment that needs weight",
      body: "Catch the point where timing will help, before an important answer, after a key sentence, after a real question, after an apology, before a boundary, between a headline and its detail, or just after the other person says something loaded.",
      examples: [
        {
          label: "Cue",
          text: "You feel the pull to answer fast, or you've just said the sentence that matters most.",
        },
      ],
    },
    {
      step: "2",
      title: "Breathe before you speak or answer",
      body: "Take one slow breath. The breath is what creates the gap between the trigger and your response, so the next words are chosen rather than reflexive.",
      examples: [{ label: "Say", text: '"Let me take a second with that."' }],
    },
    {
      step: "3",
      title: "Say or receive the line, then close your mouth",
      body: "Deliver the clean sentence, or take in theirs, and stop. One to three seconds. Resist the urge to add a caveat, a justification, or a second version of the same point.",
      examples: [
        { label: "Shape", text: '"The real constraint is capacity." [pause]' },
      ],
    },
    {
      step: "4",
      title: "Hold the pause warm, not heavy",
      body: "Keep your face relaxed, your breathing normal, and your eye contact soft. A warm pause reads as care. A staring pause reads as pressure. That difference is what keeps the technique from becoming cringey.",
      examples: [
        {
          label: "Watch",
          text: "If they look cornered, soften with warmth or an autonomy release.",
        },
      ],
    },
    {
      step: "5",
      title: "Watch, then make one clean next move",
      body: "Let them enter if they start to. If not, continue with the single next necessary sentence (a bridge, the detail, or the cleanest part of the answer) rather than more silence or more explanation.",
      examples: [
        { label: "Bridge", text: '"So the decision is what we stop doing."' },
      ],
    },
  ],
  liveThreadClues: [
    "before an important answer",
    "after a key sentence",
    "after a real question",
    "after an apology",
    "before a boundary",
    "between a headline and its detail",
    "just after the other person says something loaded",
  ],
  depthDial: [
    {
      depth: "Comma beat (~1s)",
      useWhen: "Light emphasis mid-thought while keeping momentum",
      phrase:
        '"The main point is this. [pause] We\'re solving the wrong problem."',
    },
    {
      depth: "Full-stop beat (~2s)",
      useWhen: "After a key point or a real question, so it can land",
      phrase: "\"That's the decision I'm making.\" [pause]",
    },
    {
      depth: "Paragraph beat (~3s)",
      useWhen: "After an apology or a loaded line, giving room to feel",
      phrase: '"I shouldn\'t have spoken over you." [pause]',
    },
  ],
  commonMistakes: [
    {
      mistake: "Theatrical pause",
      soundsLike:
        "A staged beat and a grand line, as if delivering a movie moment.",
      better: "Say the line plainly and let it sit. No performance voice.",
    },
    {
      mistake: "Punitive silence",
      soundsLike:
        "Using the gap to make someone feel wrong, small, or anxious.",
      better:
        "Hold the pause as space, with a relaxed face. Never as a weapon.",
    },
    {
      mistake: "Staring",
      soundsLike: "Eye contact locks on and the pause turns into pressure.",
      better: "Soften your gaze and breathe. Keep the pause warm.",
    },
    {
      mistake: "Too long",
      soundsLike: "A useful beat stretches into an awkward vacuum.",
      better: "One to three seconds, then a clean next move.",
    },
    {
      mistake: "Filler leakage",
      soundsLike: '"Um, yeah, so..." fills the gap you meant to leave.',
      better: "Close your mouth fully: an actual pause, not a hesitation.",
    },
    {
      mistake: "Pausing around weak content",
      soundsLike: "A dramatic beat before a vague point or a bad apology.",
      better: "Fix the sentence first. A pause can't rescue empty content.",
    },
    {
      mistake: "No exit",
      soundsLike: "You pause, then don't know what comes next.",
      better:
        "Know your next sentence before you stop: a bridge, the detail, or the answer.",
    },
  ],
  recoveryPhrases: [
    "I paused because I was thinking, not because I wanted to put you on the spot.",
    "That pause came out heavier than I meant it. Let me say it more simply.",
    "I'm not trying to withhold an answer. I'm trying not to rush one.",
    "That probably sounded more final than I intended.",
    "I'm just thinking, not trying to make that weird.",
    "I shouldn't make you guess what I mean. What I mean is...",
    "I don't want silence to do the work for me. Here's the actual answer.",
    "Let's bring this back to the next step.",
  ],
  bestRecoveryLine:
    "I paused because I was thinking, not because I wanted to put you on the spot.",
  chains: [
    {
      label: "Pressure answer",
      sequence:
        'Notice pressure → "Let me take a second" → pause one breath → answer the cleanest part → stop before overexplaining',
      example: [
        '"Let me take a second with that." [pause]',
        "\"My concern isn't the goal. It's the amount we're trying to run at once.\"",
      ],
    },
    {
      label: "Question with room",
      sequence:
        "Ask a real question → close your mouth → hold the pause → minimal encourager only if they start → reflect the answer",
      example: [
        '"What would need to change for this to feel workable?" [pause]',
        "They think, then answer, and you reflect it back rather than filling the gap.",
      ],
    },
    {
      label: "Clean apology",
      sequence:
        "Own the specific behaviour → pause → do not defend → invite the rest → repair specifically",
      example: [
        '"I interrupted you. I\'m sorry." [pause]',
        '"Finish the point and I\'ll stay quiet."',
      ],
    },
    {
      label: "Boundary without dilution",
      sequence:
        "State the boundary plainly → pause → add only the minimum next step",
      example: [
        '"I can\'t take that on this week." [pause]',
        '"I can review one page by Friday."',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC029",
      reason:
        "The closest neighbour. A pause is short punctuation around your own line. Strategic silence hands the floor over. Use TC029 when the space is for them to deepen, not for your point to land.",
    },
    {
      id: "TC031",
      reason:
        "Slows your whole pace when speed or intensity is making the exchange worse. Use TC031 when the problem is overall tempo, not the timing around one key line.",
    },
    {
      id: "TC008",
      reason:
        "The pause guards against over-talk. No-overexplaining discipline is the broader habit of stopping once the point is made. Use TC008 when the issue is too many words, not too little space.",
    },
    {
      id: "TC033",
      reason:
        'Small nudges ("mm", "go on") that keep someone talking. Use TC033 instead of holding silent once they have started answering and just need light encouragement.',
    },
    {
      id: "TC011",
      reason:
        "Reflects back what you heard to confirm understanding. Use TC011 when the next job is checking you got it right, not leaving room.",
    },
    {
      id: "TC010",
      reason:
        "The relaxed, warm baseline that stops a pause reading as cold. Use TC010 when the interaction needs thawing, not timing.",
    },
  ],
};
