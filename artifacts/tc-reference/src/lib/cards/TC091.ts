import type { CardData } from "../card-types";

export const TC091: CardData = {
  pdfUrl: "cards/TC091/TC091_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet — the designed visual card.",
      href: "cards/TC091/TC091_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC091/TC091_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC091/TC091_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC091/TC091_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC091/TC091_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC091/TC091_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC091/TC091_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC091",
  whyItWorks:
    "Forced-humour restraint is noticing the urge to make a joke and deliberately choosing care, clarity, or quiet instead when the moment is not ready for humour. It works because forced humour usually tries to buy quick comfort but spends relational trust: withholding it keeps a tender or tense moment available for real connection, protects the other person's dignity, and makes you seem more attuned and less hungry for a laugh.",
  whatItIsNot: [
    "It is not banning jokes, personality, warmth, teasing, or playfulness — a gentle, shared joke can bond people when they have clearly signalled they are open to it.",
    "It is not moralising humour or making a conversation sterile and humourless.",
    "It is not dead seriousness in every difficult moment.",
    "It is not passive silence — if a joke is wrong, you replace it with acknowledgement, curiosity, validation, a slower question, or a brief practical next step.",
    'It is not using "I was just joking" as a shield; if a joke lands badly, the task is repair, not defence.',
  ],
  overview: {
    coreFormula: [
      "Care before clever: notice the joke impulse, check kindness, timing, and consent, choose the lowest-risk warm move, then repair fast if it misses.",
      "One-line rule: if the joke protects you more than it supports them, do not say it.",
      'Replacement line: "That sounds [hard / big / a lot]. I\'m with you. What would help right now?"',
      "Humour-permission (only where trust already exists): \"I've a lighter thought, but I don't want to undercut this — want it, or should we stay here?\"",
      "Default when unsure: acknowledge first, joke later.",
    ],
    minimumViableMove:
      "When you feel the joke forming, pause for one beat and ask yourself: is this kind, timely, and wanted? If it is not a clear yes, offer a warm acknowledgement instead.",
    impact: "Low",
    difficulty: "Hard",
    misuse:
      'It curdles into policing other people\'s humour, or over-correcting into stiffness that makes ordinary warmth feel forbidden. It also fails when a joke misses and you defend the intent ("I was just joking") rather than repairing the impact.',
    bestFor: [
      "Vulnerable disclosures and tender moments",
      "Apologies and serious feedback",
      "Conflict, group tension, and exhausted rooms",
      "First meetings and status-unequal settings",
      "Grief, fear, or shame in the room",
      "Professional moments where a laugh would dodge accountability",
      "Awkward silences that are tender rather than merely empty",
    ],
  },
  notFor: [
    "The relationship already has established playful trust",
    "The other person initiates the humour",
    "The joke is clearly self-light, gentle, and non-defensive",
    "Shared levity would genuinely help the group without targeting anyone",
    "You would be using restraint to police someone's personality or shame their playfulness",
    "Physical safety or an immediate emergency needs the response first",
  ],
  phraseBank: [
    {
      id: "naming_the_pause",
      label: "Naming the pause",
      tag: "Quick restraint lines",
      tone: "Quick",
      phrases: [
        "I nearly made a joke there — I won't.",
        "Let me not joke past this.",
        "This isn't a punchline moment.",
        "I'll keep this straight.",
        "Care first, jokes later.",
        "I'd rather stay with it than lighten it.",
        "That deserves a real answer.",
      ],
    },
    {
      id: "warmth_instead",
      label: "Warmth instead of a joke",
      tag: "Vulnerable disclosure",
      tone: "Warm",
      phrases: [
        "I was about to make a joke, but this sounds like it actually matters.",
        "I don't want to make light of that. Tell me what happened.",
        "That sounds like a lot. I'm with you.",
        "I don't want to fill this with a joke. I'm here.",
        "I'd rather hear more than lighten it. What's been the hardest part?",
        "That sounds heavier than the short version. What's sitting with you most?",
        "No jokes from me on this one — it clearly means something.",
      ],
    },
    {
      id: "work_moments",
      label: "Keeping work moments clean",
      tag: "Issue review / feedback",
      tone: "Professional",
      phrases: [
        "Let me not joke past the point. What's the main concern?",
        "I want to stay with the issue rather than deflect it.",
        "This is worth taking seriously, so I'll skip the quip.",
        "Let me not joke this away. What happened, and what do we stabilise first?",
        "I'd rather be clear than clever here.",
        "I don't want a laugh to make this feel smaller than it is.",
      ],
    },
    {
      id: "under_pressure",
      label: "Under pressure",
      tag: "Decision moments",
      tone: "Direct",
      phrases: [
        "This is not a punchline moment. What do we need to decide?",
        "I'm going to keep this clean and direct.",
        "I'm tempted to break the tension, but we probably need the real conversation first.",
        "Let's stay with the decision before anyone lightens it.",
        "I'll save the banter — what has to be true for this to work?",
        "Straight question, no joke attached: where are we?",
      ],
    },
    {
      id: "when_it_misses",
      label: "When a joke misses",
      tag: "Repair",
      tone: "Repair",
      phrases: [
        "That came out more joking than I intended. Let me try again properly.",
        "That was a miss. I'm sorry — I made light of something that mattered.",
        "I can see that felt dismissive. I'll drop the joke and take the point seriously.",
        "You're right; that wasn't the moment for humour.",
        "I don't want you to have to explain why that was off. I get it, and I'm sorry.",
        "Let me drop the joke and answer you properly.",
        "Starting again — what I should have said is…",
      ],
    },
    {
      id: "highest_stakes",
      label: "Grief, apology, and conflict",
      tag: "Highest-stakes moments",
      tone: "High-stakes",
      phrases: [
        "No jokes from me here. I'm sorry for the impact.",
        "This one deserves care, not a laugh.",
        "I'll save the teasing for later. Right now I just want to get this right.",
        "I'm not going to lighten this. What do you need from me?",
        "I don't want a joke to rush you out of what you're feeling.",
        "Take the time you need. I'm not going to make light of it.",
      ],
    },
    {
      id: "in_writing",
      label: "In writing",
      tag: "Digital / text",
      tone: "Quick",
      phrases: [
        "Deleting my attempted joke — this deserves a straight answer.",
        "I started to type something lighter, but it might read wrong. I'm taking this seriously.",
        "I don't want that to come across as dismissive — I mean this genuinely.",
        "No emoji fix for this one; here's the honest version.",
        "Straight reply, no joke: here's where I actually stand.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "A joke is forming and you feel awkward",
      action: "Pause for one beat instead of releasing it.",
      phrase: "Let me not joke past this.",
    },
    {
      condition: "The other person isn't clearly playful or opting in",
      action: "Don't joke — the cues for shared humour aren't there.",
      phrase: "This sounds like it matters. Tell me more.",
    },
    {
      condition:
        "The joke would target a person, identity, mistake, pain, fear, status gap, or private vulnerability",
      action: "Drop it and choose acknowledgement or a question instead.",
      phrase: "I don't want to make light of that.",
    },
    {
      condition:
        "The joke mainly makes you feel clever rather than helping them feel safer",
      action: "Withhold it and offer the warm move.",
      phrase: "That sounds like a lot. I'm with you.",
    },
    {
      condition: "Humour is genuinely welcome and low-risk",
      action:
        "Keep it light, inclusive, and easy to drop — never the other person as the punchline.",
      phrase: "",
    },
    {
      condition: "You already joked and it missed",
      action: "Repair once, then return attention to the topic.",
      phrase:
        "That was a miss. I'm sorry — I made light of something that mattered.",
    },
  ],
  ladder: [
    {
      weak: "\"Haha, well at least it can't get worse.\" Forced levity shrinks the other person's experience and offers no care.",
      better:
        '"I almost made a joke, but I don\'t want to minimise it. That sounds rough." Names the restraint and replaces the joke with acknowledgement.',
      best: '"I was about to deflect with humour. Let me not. That sounds like it put you in a hard position. Do you want me to listen, help think it through, or just sit with you for a minute?" Protects dignity, names the moment, and offers autonomy.',
    },
    {
      weak: '"Relax, I\'m kidding." Defends your intent instead of tracking the impact.',
      better:
        '"That didn\'t land. Sorry — I was trying to lighten it, and I missed." Owns the miss.',
      best: "\"I can see that felt dismissive. I'm sorry. I'll drop the joke and take the point seriously.\" Repairs without asking the other person to comfort you.",
    },
  ],
  scenarios: [
    {
      situation: "Vulnerable disclosure",
      move: "Replace the joke with a gentle invitation to share.",
      phrase:
        "I don't want to make light of that. What has that been like for you?",
    },
    {
      situation: "Work mistake",
      move: "Say you won't joke it away, then get practical.",
      phrase:
        "Let me not joke this away. What happened, and what do we need to stabilise first?",
    },
    {
      situation: "Group tension",
      move: "Acknowledge the urge to break tension, but steer to the real conversation.",
      phrase:
        "I'm tempted to break the tension, but we probably need the real conversation first.",
    },
    {
      situation: "Apology",
      move: "Strip out humour entirely and keep the apology clean.",
      phrase: "No jokes from me here. I'm sorry for the impact.",
    },
    {
      situation: "Digital message",
      move: "Write the serious sentence first; don't rely on tone or emoji to carry it.",
      phrase:
        "I started to type something lighter, but it might read wrong. I'm taking this seriously.",
    },
    {
      situation: "Teasing culture, tender moment",
      move: "Flag that the usual teasing is paused for this one.",
      phrase: "I'll save the teasing for later. This one deserves care.",
    },
  ],
  calibration: {
    working: [
      "They keep talking, soften, or give more detail after you hold the joke.",
      "The room returns to the real point without extra defensiveness.",
      "A tender silence feels accepting rather than performative.",
      "Their shoulders drop and their voice loosens.",
      "They start the humour themselves, aimed at the shared situation rather than a person.",
      "An apology or piece of feedback lands cleaner because nothing undercut it.",
    ],
    adjust: [
      "Flat faces, tight voices, or answers getting shorter.",
      "They return to the serious point without engaging your joke.",
      "Someone goes quiet, looks away, or forces a laugh.",
      'They correct you, repeat the seriousness, or say "not funny" or "seriously though".',
      "You notice the joke is mostly easing your discomfort, not theirs.",
      "In text, your line could read as dismissive — write the serious sentence first.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the impulse",
      task: "Through the day, silently note every moment you feel the urge to make a joke. Don't change anything yet — just count them and notice where they happen.",
    },
    {
      day: "Day 2",
      title: "Replacement reps",
      task: "Write ten serious prompts. For each, draft the joke you'd be tempted to make, then a warm acknowledgement and one curious question to replace it.",
    },
    {
      day: "Day 3",
      title: "Motive labels",
      task: "After each conversation today, pick one humour moment and label its motive: connection, relief, approval, defence, status, or avoidance.",
    },
    {
      day: "Day 4",
      title: "Say the serious sentence first",
      task: "In one real conversation, deliberately withhold a joke that's about your own discomfort and offer a one-sentence acknowledgement instead.",
    },
    {
      day: "Day 5",
      title: "Repair rehearsal",
      task: 'Practise three recovery lines out loud until they sound plain rather than theatrical, e.g. "That was a miss. I\'m sorry — I made light of something that mattered."',
    },
    {
      day: "Day 6",
      title: "Ask permission",
      task: 'With someone you trust, practise asking whether a lighter angle would help, then accept "no" without defending the joke.',
    },
    {
      day: "Day 7",
      title: "Hold it clean",
      task: "In a genuinely tense moment, withhold a joke and stay warm and present. Success: you can hold it back without becoming tense, resentful, or self-conscious.",
    },
  ],
  checklist: [
    "What cue told me humour might be risky here?",
    "Was my urge to joke for connection — or for relief, approval, defence, status, or avoidance?",
    "Who would have carried the cost if the joke had missed?",
    "Did I replace the joke with care, clarity, curiosity, or silence?",
    "Did the other person become more open, more guarded, or unchanged?",
    "If I joked and missed, did I repair the impact without defending my intent?",
  ],
  example: {
    without: [
      'Alex: "I think I really messed up the presentation."',
      'Jordan: "Well, you always wanted to be memorable."',
      'Alex: "…yeah."',
      'Jordan: "Come on, I\'m joking."',
      "Why it fails: the joke lands before any care, and now Alex has to manage Jordan's intent on top of his own embarrassment.",
    ],
    with: [
      'Alex: "I think I really messed up the presentation."',
      'Jordan: "I almost made a joke, but this sounds like it stung. What part is sitting with you most?"',
      'Alex: "The Q&A. I froze."',
      'Jordan: "That sounds painful, especially if you\'d prepared hard. Do you want a quick debrief, some reassurance, or just a minute to vent?"',
      'Alex: "A debrief, but gentle."',
      'Jordan: "Got it. Let\'s start with what was recoverable."',
      "Why it works: naming the withheld joke, then leading with warmth and a choice, gives Alex room to say what actually hurt — no performance required.",
    ],
    note: "The advanced move isn't grim seriousness; it's warmth with direction. Humour can return later, once Alex feels met.",
  },
  influencePayoff: {
    feeling: '"They didn\'t laugh it off — they actually stayed with me."',
    principle:
      "Forced humour buys quick comfort but spends relational trust; restraint keeps a tender or tense moment available for real connection.",
    gains: [
      "Trust in tender moments",
      "Subtle authority — you seem attuned, not hungry for a laugh",
      "Cleaner apologies and feedback",
      "Dignity protected for the vulnerable person",
      "Calmer, more grounded rooms under tension",
      "Room for the real conversation to happen",
    ],
    whyMostFail: [
      "The joke relieves your own discomfort faster than empathy does, so the reflex wins.",
      "You read forced laughter as consent when it's really pressure or politeness.",
      'You defend a joke that missed ("I was just joking") instead of repairing its impact.',
      "You over-correct into stiffness, so ordinary warmth starts to feel forbidden.",
    ],
  },
  fieldTip: {
    headline: "A joke is optional; dignity is not.",
    body: 'If you\'re reaching for humour to escape the moment, lead with warmth first — humour can come back later once the person feels met. Pocket cue: "Care before clever." One-breath move: feel the joke, pause, look for consent, then say the serious sentence first.',
    example:
      'They say, "It was technically fine, just… a hard week." Instead of "Well, at least it\'s Friday," try: "That sounds like more than a hard week. What\'s going on?"',
    dont: "Reach for a joke to fill an awkward silence or soften your own discomfort.",
    do: "Pause one beat, check kindness-timing-consent, and offer a warm acknowledgement instead.",
  },
  method: [
    {
      step: "1",
      title: "Notice the cue",
      body: "Catch the moment a joke is forming: you feel pressure to be funny, the room has gone tense, or a quip is arriving before any empathy has.",
    },
    {
      step: "2",
      title: "Check your motive",
      body: "Ask whether the joke is for connection or for your own escape. Relief, approval, defence, status, and avoidance are the risk motives; only genuine connection is a green light.",
    },
    {
      step: "3",
      title: "Read the room",
      body: "Look for soft faces, reciprocal play, relaxed posture, and a prior playful tone. If those cues are absent, slow down — and never read forced laughter as consent.",
    },
    {
      step: "4",
      title: "Replace the joke",
      body: "Choose the lowest-risk warm move: acknowledgement, validation, a curious question, an apology, quiet presence, or one concise practical line.",
      examples: [
        {
          label: "Acknowledge",
          text: "That sounds like it actually mattered.",
        },
        { label: "Ask", text: "What's been the hardest part?" },
        {
          label: "Offer a choice",
          text: "Do you want to vent, think it through, or just sit with it?",
        },
      ],
    },
    {
      step: "5",
      title: "If humour is welcome, keep it safe",
      body: "When play is clearly wanted, keep it light, inclusive, and easy to drop, and never make the other person the punchline.",
    },
    {
      step: "6",
      title: "If it misses, repair fast",
      body: "Own the impact immediately without debating your intent, then return attention to the other person and the real issue.",
    },
  ],
  liveThreadClues: [
    "You feel the urge to be funny right now",
    "A quip is arriving before any empathy",
    "The room just went tense or quiet",
    "Someone has just disclosed something tender",
    "An apology, grief, or serious feedback is on the table",
    "There's a status gap and the joke would punch down",
    "You're the more senior or powerful person present",
  ],
  depthDial: [
    {
      depth: "Full restraint",
      useWhen: "Grief, apology, conflict, or raw disclosure",
      phrase: "No jokes here — what do you need?",
    },
    {
      depth: "Warm, no humour",
      useWhen: "Tense but not hostile; the person seems fragile",
      phrase: "That sounds like a lot. I'm with you.",
    },
    {
      depth: "Ask permission",
      useWhen: "Some trust exists and you're unsure if levity would help",
      phrase: "I've a lighter thought — want it, or should we stay here?",
    },
    {
      depth: "Light, shared humour",
      useWhen: "Established playful trust and they've opted in",
      phrase: "Keep it about the situation, not the person.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Using humour to escape your own discomfort",
      soundsLike: '"Anyway — at least it\'s a funny story now!"',
      better:
        "\"I don't want to make light of this. What's been the hardest part?\"",
    },
    {
      mistake: "Making the vulnerable or junior person the punchline",
      soundsLike: '"Classic you, honestly."',
      better: '"That could happen to anyone. What do you need right now?"',
    },
    {
      mistake: "Joking right after an apology",
      soundsLike: '"Sorry about that — anyway, you know me!"',
      better: '"I\'m sorry for the impact. No jokes — I mean it."',
    },
    {
      mistake: "Defending intent instead of repairing impact",
      soundsLike: '"Relax, I was just joking."',
      better: "\"That landed badly. I'm sorry — I'll take it seriously.\"",
    },
    {
      mistake: "Over-correcting into stiffness",
      soundsLike: "Going cold and formal so all warmth vanishes",
      better: "Staying warm and human, just without the deflecting joke",
    },
    {
      mistake: "Self-deprecating jokes that fish for reassurance",
      soundsLike: '"Ha, I\'m probably the worst person for this…"',
      better: "\"I'm finding this hard, but let's stay on you.\"",
    },
    {
      mistake: "Reading forced laughter as consent",
      soundsLike: '"See, everyone\'s laughing!"',
      better: "Noticing the tight, polite laugh and dropping the bit",
    },
  ],
  recoveryPhrases: [
    "That was a miss. I'm sorry — I made light of something that mattered.",
    "I was trying to ease the tension, but I can see it landed as dismissive. I'll take it seriously.",
    "Let me drop the joke and answer you properly.",
    "You're right; that wasn't the moment for humour.",
    "I don't want you to have to explain why that was off. I get it, and I'm sorry.",
    "Starting again — what I should have said is…",
    "I can see that felt dismissive. I'll take the point seriously.",
  ],
  bestRecoveryLine:
    "That was a miss. I'm sorry — I made light of something that mattered.",
  chains: [
    {
      label: "Warm-presence chain",
      sequence:
        "Withhold the joke -> steady presence (TC010) -> reflect the feeling (TC004)",
      example: [
        '"I\'ll not lighten this."',
        "Hold calm eye contact and an even tone.",
        '"It sounds like that really knocked you."',
      ],
    },
    {
      label: "Validation chain",
      sequence: "Drop the joke -> validate without agreeing (TC005) -> ask",
      example: [
        '"I don\'t want to joke past this."',
        '"It makes sense you\'d feel thrown by that."',
        '"What would help most right now?"',
      ],
    },
    {
      label: "Restraint-stack chain",
      sequence: "No joke (TC091) -> no premature fix (TC015) -> listen",
      example: [
        '"Let me not joke this away."',
        '"And I\'ll hold off on solutions for a second."',
        '"Tell me what actually happened."',
      ],
    },
    {
      label: "Disagreement chain",
      sequence: "No sarcasm -> face-saving disagreement (TC092) -> your view",
      example: [
        '"I\'ll keep the sarcasm out of this."',
        '"You\'ve clearly thought about it, and I see it a little differently."',
        '"Here\'s where I land, and why."',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC090",
      reason:
        "Both protect you from sitting with discomfort. Use TC091 when the urge is to lighten or deflect with a joke; use TC090 when the urge is to fix or solve before the person is ready.",
    },
    {
      id: "TC015",
      reason:
        "Use TC091 when a joke would dodge empathy; use TC015 when the risk is jumping to advice, coaching, or solutions too early.",
    },
    {
      id: "TC007",
      reason:
        "Use TC091 when you'd be funny by topping their story; use TC007 when you'd answer their experience with a bigger or more impressive one of your own.",
    },
    {
      id: "TC009",
      reason:
        "Use TC091 when you'd joke to pivot attention back to yourself; use TC009 when you ask a question mainly to earn your own turn to answer.",
    },
    {
      id: "TC092",
      reason:
        "Use TC091 when a joke or sarcasm would embarrass someone; use TC092 when the task is disagreeing without making the other person lose face.",
    },
    {
      id: "TC099",
      reason:
        "Use TC091 when a joke smuggles in status or self-promotion; use TC099 when the risk is self-praise dressed up as modesty or complaint.",
    },
  ],
};
