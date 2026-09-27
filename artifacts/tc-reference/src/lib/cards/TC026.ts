import type { CardData } from "../card-types";

export const TC026: CardData = {
  pdfUrl: "cards/TC026/TC026_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC026/TC026_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC026/TC026_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC026/TC026_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC026/TC026_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC026/TC026_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC026/TC026_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC026/TC026_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC026",
  whyItWorks:
    "Tactical mirroring is a compact listening prompt: you echo a short, meaningful word or phrase the other person just used, usually with a curious tone, then stop talking. It invites them to expand without you steering the conversation too hard. It works because people elaborate when they feel heard, and echoing the exact part that carried the weight shows you caught what actually mattered. So they open up, correct, or reveal the real issue instead of defending a position.",
  whatItIsNot: [
    "Not body-language mimicry.",
    "Not parroting entire sentences.",
    "Not repeating every point they make.",
    "Not mocking, correcting, or teasing their wording.",
    "Not a replacement for validation when emotion is high.",
    "Not a trick to force disclosure. It requires genuine interest and respectful pacing.",
  ],
  overview: {
    coreFormula: [
      "Key phrase + curious tone + pause.",
      "Key phrase → curious tone → pause → let them expand → choose your next move.",
      '"I\'m not sure it\'s workable." → "Workable?" → (pause)',
      '"The price is too high." → "High?" → (pause)',
      '"It got a bit messy." → "Messy?" → (pause)',
    ],
    minimumViableMove: "Mirror one to three words, then pause.",
    impact: "Medium",
    difficulty: "Easy-Medium",
    misuse:
      "Overusing mirrors until the conversation feels mechanical, tactical, or suspicious.",
    bestFor: [
      "Keeping someone talking without asking a full question.",
      "Negotiation, objections and uncertainty.",
      "When someone uses a vague but important phrase.",
      "When you need more detail before responding.",
      "When the conversation is moving too quickly.",
      "When someone hints at the real issue but does not fully explain it.",
      "When you want to sound interested without sounding intense.",
    ],
  },
  notFor: [
    "You have already mirrored several times in the same conversation.",
    "They are distressed and need validation more than a prompt.",
    "Your tone might sound sarcastic, mocking or suspicious.",
    "They are giving very short answers and seem pressured.",
    "The phrase is trivial and not worth following.",
    "A direct answer, apology, boundary or action is needed instead.",
    "You are using it to avoid giving your own view when they need clarity.",
  ],
  phraseBank: [
    {
      id: "quick-mirrors",
      label: "Quick mirrors",
      tag: "Short one-word echoes",
      tone: "Quick",
      phrases: [
        "Too much?",
        "Risky?",
        "Not worth it?",
        "The timing?",
        "A bit off?",
        "The people side?",
        "Not sure?",
      ],
    },
    {
      id: "warm-mirrors",
      label: "Warm mirrors",
      tag: "Softer, feeling-aware echoes",
      tone: "Warm",
      phrases: [
        "That part mattered?",
        "A lot to carry?",
        "A bit disappointing?",
        "Harder than expected?",
        "More complicated?",
        "Still on your mind?",
      ],
    },
    {
      id: "professional",
      label: "Professional",
      tag: "Work, meetings, decisions",
      tone: "Professional",
      phrases: [
        "The main blocker?",
        "A resourcing issue?",
        "The decision criteria?",
        "The implementation risk?",
        "The timeline?",
        "The dependency?",
      ],
    },
    {
      id: "negotiation-objection",
      label: "Negotiation / objection",
      tag: "Objections and pressure",
      tone: "High-stakes",
      phrases: [
        "Too expensive?",
        "Not enough certainty?",
        "The deadline?",
        "The trade-off?",
        "Approval from them?",
        "The number?",
      ],
    },
    {
      id: "conflict-softening",
      label: "Conflict-softening",
      tag: "Grievances, de-escalation",
      tone: "Repair",
      phrases: [
        "Disrespected?",
        "Not consulted?",
        "The way it happened?",
        "Felt sprung on you?",
        "The fairness piece?",
        "Blindsided?",
      ],
    },
    {
      id: "social-dating",
      label: "Social / dating",
      tag: "Light, playful rapport",
      tone: "Warm",
      phrases: [
        "Chaotic?",
        "Good weird?",
        "The short version?",
        "Your kind of thing?",
        "A lot going on?",
        "Good chaotic?",
      ],
    },
    {
      id: "digital-text",
      label: "Digital / text",
      tag: "Short replies, no stacking",
      tone: "Quick",
      phrases: [
        "Too soon?",
        "Worth doing?",
        "That part?",
        "What changed?",
        "Still deciding?",
      ],
    },
    {
      id: "high-status-busy",
      label: "High-status / busy",
      tag: "Brief, decision-focused",
      tone: "Direct",
      phrases: [
        "The key risk?",
        "Timing?",
        "The constraint?",
        "Priority?",
        "Decision rights?",
        "The real blocker?",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "They elaborate",
      action: "Listen fully, then reflect or summarise the new detail.",
      phrase: "So it's less the concept, more the timing and who'd own it.",
    },
    {
      condition: "They correct you",
      action: "Accept the correction and fold it in.",
      phrase: "Got it, so it's more about ownership than the idea itself.",
    },
    {
      condition: "They look confused",
      action: "Translate the mirror into a plain question.",
      phrase: "Sorry, I meant, what part of the timing worries you?",
    },
    {
      condition: "They seem mocked",
      action: "Repair immediately and clarify your intent.",
      phrase:
        "I wasn't challenging you. I just wanted to get the bit that matters.",
    },
    {
      condition: "They give a short answer",
      action: "Stop mirroring. Comment or shift depth.",
      phrase: "Fair enough. Here's where I've landed on it.",
    },
    {
      condition: "They become emotional",
      action: "Move from mirror to validation or labelling.",
      phrase: "That sounds like it really stung.",
    },
    {
      condition: "They ask what you think",
      action: "Check you've understood, then answer directly.",
      phrase: "Happy to say, but first, have I got the concern right?",
    },
  ],
  ladder: [
    {
      weak: "\"So you're saying you're not sure it's workable?\" (parrots the whole sentence)",
      better: '"Workable?" (then jumps straight in with a defence)',
      best: '"Workable?" (curious tone, then a full pause while they explain)',
    },
    {
      weak: "Echoes with a flat or sceptical tone.",
      better: "Echoes with a plain, neutral tone.",
      best: "Echoes with genuine curiosity, so it invites rather than challenges.",
    },
    {
      weak: '"Timing?" "Ownership?" "Risk?" (mirror after mirror)',
      better: "One mirror, then a plain follow-up question.",
      best: 'One mirror, then a reflection of what it revealed: "So the real worry is who owns it."',
    },
  ],
  scenarios: [
    {
      situation: "Social conversation",
      move: "Echo the emotionally loaded word and let them unpack it.",
      phrase: "Weirdly intense?",
    },
    {
      situation: "Workplace influence",
      move: "Mirror the worry, then listen for the operational risk.",
      phrase: "The rollout?",
    },
    {
      situation: "Negotiation",
      move: "Mirror the objection and pause before defending anything.",
      phrase: "High?",
    },
    {
      situation: "Conflict",
      move: "Mirror the grievance, then validate once they expand.",
      phrase: "Left out?",
    },
    {
      situation: "Digital / text",
      move: "Send the mirror as a short reply. No stacked questions.",
      phrase: "The timing?",
    },
    {
      situation: "Shy or guarded person",
      move: "Use a softer mirror and offer an easy exit.",
      phrase: "A bit much? No pressure if you'd rather not get into it.",
    },
  ],
  calibration: {
    working: [
      "They elaborate without needing another question.",
      "They correct or refine what they meant.",
      "They reveal the real concern or constraint.",
      "Their tone softens because they feel heard.",
      "They move from a vague statement to specific detail.",
      'They say "Exactly" or "Yeah, that\'s the issue."',
    ],
    adjust: [
      "They give shorter answers after each mirror.",
      'They look confused or say "What?"',
      "They seem mocked, analysed or interrogated.",
      "You've mirrored more than twice in a row.",
      "The conversation needs action, not more prompting.",
      "The person is distressed and needs validation.",
      "Fix: switch to a full reflection, a clean question, or validation.",
      "Fix: share your own view, use a summary check, or respond directly.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the loaded word",
      task: "In three conversations, silently pick the single word or phrase carrying the most weight. Don't mirror yet, just notice what you'd echo if you did.",
    },
    {
      day: "Day 2",
      title: "Mirror once",
      task: "In three conversations, mirror one meaningful phrase a single time, then stop. Notice whether the person expands, corrects, or warms up.",
    },
    {
      day: "Day 3",
      title: "Master the pause",
      task: "After each mirror today, hold two full beats of silence before you say anything else. Let them fill the space instead of you.",
    },
    {
      day: "Day 4",
      title: "Tune the tone",
      task: 'Practise one mirror ("The timing?") aloud three ways: flat, sceptical, and genuinely curious. Keep only the curious version and use it live.',
    },
    {
      day: "Day 5",
      title: "Mirror an objection",
      task: "In a disagreement or negotiation, mirror the objection instead of defending. Watch what the real concern turns out to be once they explain.",
    },
    {
      day: "Day 6",
      title: "Recover cleanly",
      task: 'When a mirror lands awkwardly, practise one repair line ("I wasn\'t challenging that, I just wanted the bit that matters") and carry on normally.',
    },
    {
      day: "Day 7",
      title: "Know when to stop",
      task: "Cap yourself at one or two mirrors per conversation all day, then deliberately switch to reflection, validation, or a direct answer.",
    },
  ],
  checklist: [
    "Did I use the technique because the cue was present, or because I wanted to perform skill?",
    "Was my wording shorter than my instinct?",
    "Did the person have more room after my move, or less?",
    "Did I adjust if they became closed, pressured or confused?",
    "What neighbouring technique would have been better if this one missed?",
  ],
  example: {
    without: [
      'Person: "I\'m not sure the proposal is workable."',
      'You: "Why not? I think it\'s pretty reasonable."',
      "Person: \"I just don't think it's the right time.\"",
      'You: "But if we wait, we lose momentum."',
      "Why it's weak:",
      "You defend before you understand.",
      'You never find out what "workable" actually means to them.',
      "It becomes a tug-of-war instead of a conversation.",
    ],
    with: [
      'Person: "I\'m not sure the proposal is workable."',
      'You: "Workable?"',
      'Person: "The idea is good, but the rollout could get messy."',
      'You: "Messy because the process is unclear, or because people will push back?"',
      'Person: "Pushback. People will feel it was dropped on them."',
      'You: "That makes sense. The adoption risk is the real issue."',
      'Why this works: one mirrored word ("Workable?") opens the real objection, keeps you in their frame, and surfaces the adoption risk without pressure.',
    ],
    note: 'The lighter version is shorter still. Often a single "Workable?" is enough to get "The idea is fine. The issue is timing and who\'d own it." Reach for a follow-up question only if the first mirror doesn\'t open things up.',
  },
  influencePayoff: {
    feeling: "They noticed the real part of what I said.",
    principle:
      "People elaborate when they feel heard, and they trust the person who caught the exact part that carried the meaning.",
    gains: [
      "Gets people to elaborate without feeling interrogated.",
      "Shows you noticed the exact part that carried meaning.",
      "Keeps the conversation in their frame rather than yours.",
      "Slows down negotiation, conflict, or uncertainty without escalating.",
      "Buys you thinking time while keeping them talking.",
      "Reveals priorities, objections, constraints, emotion and hidden meaning.",
    ],
    whyMostFail: [
      "They overuse it until the conversation feels mechanical, tactical, or suspicious.",
      "They mirror with a flat or sceptical tone, so it lands as a challenge rather than curiosity.",
      "They rescue the silence instead of pausing, removing the space that makes the mirror work.",
      "They echo a trivial word and follow surface content instead of the part that carried meaning.",
    ],
  },
  fieldTip: {
    headline: "Mirror the meaning, not the sentence.",
    body: "Echo the smallest phrase that carries the weight, then stop. If you find yourself explaining right after the mirror, you probably mirrored too soon: trust the pause to do the work.",
    example:
      'They say "It was technically fine, just weird." Don\'t ask "Where was it?" Mirror "Weird?" That\'s the live thread.',
    dont: 'Don\'t fill the silence, or echo a trivial word like "The table?"',
    do: 'Echo the loaded word ("Weird?", "Risky?", "The timing?") then let it breathe.',
  },
  method: [
    {
      step: "1",
      title: "Catch the phrase that carries weight",
      body: "Listen for the word or phrase that sounds important, vague, emotional, uncertain, surprising, defensive or decision-relevant. The charge often sits right after a hinge word.",
      examples: [
        {
          label: "Cue words",
          text: '"but...", "honestly...", "the issue is...", "not really...", "messy", "risky", "too much"',
        },
        {
          label: "They say",
          text: '"It was technically fine, just weird." The live thread is "weird".',
        },
      ],
    },
    {
      step: "2",
      title: "Echo one to three words",
      body: "Short is stronger. Mirror the smallest meaningful phrase, not the whole sentence. A single well-chosen word usually beats repeating a paragraph.",
      examples: [
        { label: "Weak", text: "Repeating their full sentence back to them." },
        { label: "Better", text: '"The timing?"' },
      ],
    },
    {
      step: "3",
      title: "Use a warm, curious tone",
      body: 'Sound like "I\'m interested", not "explain yourself". A slight upward inflection works. Keep your face and voice soft so it doesn\'t feel like cross-examination.',
      examples: [
        { label: "Interrogation", text: '"Risky?" said flat or sceptical.' },
        { label: "Invitation", text: '"Risky?" said with genuine curiosity.' },
      ],
    },
    {
      step: "4",
      title: "Pause, and let it sit",
      body: "The pause is the move. Don't rescue the silence, add your interpretation, or leap in to defend your view. Give them room to fill it.",
    },
    {
      step: "5",
      title: "Let them expand before you respond",
      body: "Wait for the extra information. They may clarify, soften, correct, or reveal what actually matters, often the real issue rather than the surface one.",
    },
    {
      step: "6",
      title: "Choose your next move",
      body: "Once they've opened up, follow with a reflection, a validation, a clean question, a clean request, or a values-based frame: whatever the moment needs.",
    },
    {
      step: "7",
      title: "Use it sparingly",
      body: "One or two mirrors feel skilful. Several in a row feel mechanical or manipulative. When in doubt, mirror less and reflect more.",
    },
  ],
  liveThreadClues: [
    '"but..."',
    '"honestly..."',
    '"the issue is..."',
    '"not really..."',
    '"messy"',
    '"risky"',
    '"too much"',
  ],
  commonMistakes: [
    {
      mistake: "Mirroring too much",
      soundsLike: '"Timing?" "Ownership?" "Risk?" "People?"',
      better: "Use one mirror, then reflect or ask a proper question.",
    },
    {
      mistake: "Repeating the wrong word",
      soundsLike: 'They say "it feels risky" and you mirror "It?"',
      better: 'Mirror the loaded word: "Risky?" or "Feels risky?"',
    },
    {
      mistake: "A mocking tone",
      soundsLike: '"Risky?" said with a sceptical edge.',
      better:
        "Use a genuinely curious tone that invites rather than challenges.",
    },
    {
      mistake: "No pause",
      soundsLike: '"The timing? Because I think we can solve that."',
      better: "Mirror, then stop. The silence is the move.",
    },
    {
      mistake: "Mirroring when validation is needed",
      soundsLike: 'They\'re upset and you say "Disrespected?" with no warmth.',
      better: 'Add warmth first: "That sounds like it felt disrespectful."',
    },
    {
      mistake: "Mirroring trivial words",
      soundsLike: '"The table?" when the real issue is frustration.',
      better: "Mirror the phrase carrying emotion or decision weight.",
    },
    {
      mistake: "Turning the mirror into interrogation",
      soundsLike: '"Risky? How? Why? In what way?"',
      better: "Mirror once, pause, then one clean follow-up if needed.",
    },
  ],
  recoveryPhrases: [
    "Sorry, that sounded more like a technique than I meant. I was trying to understand.",
    "Let me ask that more normally.",
    "I'm not challenging that. I'm trying to get the bit that matters.",
    "That came out too clipped. What I meant was, what part feels risky?",
    "I think I repeated that awkwardly. Say more about the timing issue?",
    "Fair enough, let me respond directly.",
    "A bit much? No pressure if you'd rather not get into it.",
  ],
  bestRecoveryLine:
    "I'm not challenging that. I'm trying to get the bit that matters.",
  chains: [
    {
      label: "Rapport chain",
      sequence:
        "Warm comment → tactical mirror → reflection → light self-disclosure",
      example: [
        '"Loved that you just went for it."',
        '"Just went for it?"',
        '"So the leap was really the whole point."',
        '"I\'m the same. I overthink, then jump."',
      ],
    },
    {
      label: "Negotiation chain",
      sequence:
        "Mirror objection → pause → label concern → ask what would make it workable",
      example: [
        '"The price is too high."',
        '"High?"',
        '"It sounds like the concern is value, not the number."',
        '"What would make this feel worth it?"',
      ],
    },
    {
      label: "Conflict chain",
      sequence:
        "Mirror grievance → validate → clarify need → propose next step",
      example: [
        '"I felt completely left out."',
        '"Left out?"',
        '"That sounds like it really stung."',
        '"What would have felt fairer to you?"',
      ],
    },
    {
      label: "Listening chain",
      sequence: "Mirror → pause → reflective listening → summary check",
      example: [
        '"Honestly, the whole thing is a mess."',
        '"A mess?"',
        '"So it\'s less one problem, more everything landing at once."',
        '"Let me check I\'ve got it: the main worry is the workload, then the deadline."',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC023",
      reason:
        "TC023 Loaded-Word Follow-Up chases a single emotionally charged word to open feeling. TC026 echoes a short phrase and pauses. Use TC023 when the charge sits in one word, not a phrase.",
    },
    {
      id: "TC025",
      reason:
        "TC025 Exact-Word Pickup reuses the person's exact word inside your own sentence to show you caught it. TC026 echoes the phrase back on its own and stops. Use TC025 when you want to keep talking. TC026 when you want them to.",
    },
    {
      id: "TC030",
      reason:
        "TC030 Echo plus question echoes and adds a question in the same breath. TC026 echoes and stops: the pause does the work. Use TC030 when a bare mirror would feel too clipped.",
    },
    {
      id: "TC038",
      reason:
        "TC038 Conversation threading tracks and returns to threads across a longer conversation. TC026 is a single in-the-moment echo. Use TC038 to manage several threads. TC026 to open the one in front of you.",
    },
  ],
};
