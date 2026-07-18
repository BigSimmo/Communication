import type { CardData } from "../card-types";

export const TC019: CardData = {
  pdfUrl: "cards/TC019/TC019_TwoCard_Combined.pdf",
  resources: [
    { label: "Two-card (combined)", description: "Front and back study cards on one sheet — the designed visual card.", href: "cards/TC019/TC019_TwoCard_Combined.pdf", type: "pdf", group: "Visual Cards" },
    { label: "One-card summary", description: "The whole technique on a single designed card.", href: "cards/TC019/TC019_OneCard.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Quick card", description: "One-page glance card for fast recall.", href: "cards/TC019/TC019_Quick_Card.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Detailed guide", description: "The full written guide with every section.", href: "cards/TC019/TC019_Detailed_Guide.pdf", type: "pdf", group: "Written Guides" },
    { label: "Reference sheet", description: "Dense one-page reference of the key moves.", href: "cards/TC019/TC019_Reference.pdf", type: "pdf", group: "Written Guides" },
    { label: "Phrase bank (CSV)", description: "Every phrase, ready to import or drill.", href: "cards/TC019/TC019_Phrase_Bank.csv", type: "csv", group: "Practice Tools" },
    { label: "Anki flashcards", description: "Import into Anki for spaced-repetition practice.", href: "cards/TC019/TC019_Anki_Flashcards.csv", type: "csv", group: "Practice Tools" },
  ],
  "id": "TC019",
  "whyItWorks": "Small Ask is one deliberate move: reduce a request to a small, concrete next action that is easy to understand and reasonable to answer. Instead of handing someone a whole problem, you name the single smallest useful step and make the boundary of the ask honest. It works because a small, clear, bounded action is a cheap yes — the other person does not have to guess what you want, weigh a large commitment, or negotiate scope before anything can happen. A clean small yes also builds the trust that makes the next ask easier.",
  "whatItIsNot": [
    "It is not hiding a large commitment inside a tiny request, or bait-and-switching so a small yes quietly becomes a large one.",
    "It is not pretending something is small when it is not.",
    "It is not a foot-in-the-door tactic to soften someone up before pushing your real agenda.",
    "It is not vagueness — a small ask is still concrete and specific, just smaller in scope.",
    "It is not a shortcut around consent, context, or an honest full request when one is owed."
  ],
  "overview": {
    "coreFormula": [
      "Shrink the scope: ask for one part, not the whole.",
      "Name the exact action: say precisely what you want done.",
      "Make the boundary honest: state what you are not asking for.",
      "Accept yes or no cleanly: leave the choice genuinely open.",
      "Example: \"Could you look at just the first paragraph and tell me if the tone lands? No need to edit the rest.\""
    ],
    "minimumViableMove": "Name one small, concrete part of what you need and ask for only that: \"Could you do just X?\"",
    "impact": "Medium",
    "difficulty": "Easy-Medium",
    "misuse": "It fails when the \"small\" ask is a disguise for a big one — bait-and-switch — or when it is delivered mechanically as a softening tactic before you push your real agenda. Shrink the scope honestly, not just its appearance.",
    "bestFor": [
      "Busy people who cannot take on a large request",
      "First steps in a new or uncertain relationship",
      "Restarting a stalled project or conversation",
      "Reducing someone's sense of overwhelm",
      "Moving from good intentions to a concrete action",
      "Getting a fast, low-cost yes to build momentum"
    ]
  },
  "notFor": [
    "The real ask is large and deserves to be named honestly",
    "The person needs full context to give genuine consent",
    "A clean request or low-friction ask would be more transparent",
    "Shrinking the ask would create false agreement or hidden pressure",
    "The move would add exposure, embarrassment, or a sense of being managed",
    "Physical safety or an emergency needs a direct, complete request now"
  ],
  "phraseBank": [
    {
      "id": "quick",
      "label": "Quick asks",
      "tag": "One-line starters",
      "tone": "Quick",
      "phrases": [
        "Could you do just this one part?",
        "Can I ask for one small thing?",
        "Just the first step for now?",
        "Could you give me one example?",
        "Would five minutes work?",
        "Can we sort only the next bit today?",
        "A quick yes or no is completely fine."
      ]
    },
    {
      "id": "warm_social",
      "label": "Warm and social",
      "tag": "Friends and family",
      "tone": "Warm",
      "phrases": [
        "No rush, but could you do just the one thing when you get a sec?",
        "Would you mind casting an eye over only the first bit?",
        "It's only a tiny favour, if you're up for it.",
        "Could you help me with just the start? I'll take it from there.",
        "Even five minutes would mean a lot.",
        "Only if it's easy — could you send me the one name?"
      ]
    },
    {
      "id": "professional",
      "label": "Work and meetings",
      "tag": "Colleagues and clients",
      "tone": "Professional",
      "phrases": [
        "Could we decide only the next step in this meeting?",
        "Would you review just the summary, not the full document?",
        "Can I get your call on one thing before we go wider?",
        "Could you approve the first milestone, and we'll scope the rest later?",
        "I need a decision on this single point today, nothing else.",
        "Could you spend five minutes on the opening and tell me if it lands?",
        "Just the headline figure for now would unblock me."
      ]
    },
    {
      "id": "exact_action",
      "label": "Naming the exact action",
      "tag": "Concrete and specific",
      "tone": "Direct",
      "phrases": [
        "Could you look at just the first paragraph?",
        "Could you give me one example, not the whole answer?",
        "Could you send me the name, not the full introduction yet?",
        "I'm asking for one edit, not a rewrite.",
        "Could you reply to just this one question?",
        "The whole ask is: read one page and tell me if the tone's off.",
        "All I need is a yes or no on the date."
      ]
    },
    {
      "id": "repair",
      "label": "Softening and stepping back",
      "tag": "Release the pressure",
      "tone": "Repair",
      "phrases": [
        "No pressure at all — only if you have the time.",
        "Feel free to say no; it won't be a problem.",
        "If that's too much, even a pointer would help.",
        "Let me make that smaller: could you just do the first part?",
        "Ignore the rest — one thing is all I need.",
        "We can leave it and come back another time."
      ]
    },
    {
      "id": "high_stakes",
      "label": "Guarded or high-status",
      "tag": "Optional and low-cost",
      "tone": "High-stakes",
      "phrases": [
        "Would it be useful if I checked the premise before I respond?",
        "I'll take the smallest slice of your time — just one question?",
        "If it helps, I can narrow this to a single decision.",
        "I'll keep this to one ask so it's easy to weigh up.",
        "Only the part that needs your call — nothing more.",
        "Would a two-minute version be easier than the full thing?"
      ]
    },
    {
      "id": "digital_text",
      "label": "Digital and text",
      "tag": "One clean sentence",
      "tone": "Quick",
      "phrases": [
        "To make sure I answer the right thing: is it the date you need?",
        "Quick one — could you confirm just the date?",
        "One small ask: can you send the file, not the summary?",
        "Short version — yes or no on the first option?",
        "Just checking the one point before I reply properly: is X right?"
      ]
    }
  ],
  "decisionTree": [
    {
      "condition": "They are still mid-thought",
      "action": "Wait — don't drop the ask into the middle of what they're saying.",
      "phrase": ""
    },
    {
      "condition": "The ask still feels big or vague",
      "action": "Shrink it to one concrete action before you say it.",
      "phrase": "Could you do just the first part?"
    },
    {
      "condition": "They seem hesitant or resistant",
      "action": "Name the concern and make the ask optional before repeating it.",
      "phrase": "No pressure — only if it's easy."
    },
    {
      "condition": "They accept and the exchange feels easier",
      "action": "Continue and build on the small yes rather than piling on.",
      "phrase": "Thank you — that's exactly enough."
    },
    {
      "condition": "They tense up or the ease drops",
      "action": "Repair or release the ask rather than pushing.",
      "phrase": "Let me make that smaller, or we can leave it for now."
    },
    {
      "condition": "You're tempted to expand the ask after a yes",
      "action": "Stop — keep the boundary you named honest.",
      "phrase": "That's all I needed for today."
    }
  ],
  "ladder": [
    {
      "weak": "Can you help me with this whole thing?",
      "better": "Could you look at just the first paragraph?",
      "best": "Could you look at just the first paragraph and tell me whether the tone feels too formal? No need to edit the rest."
    },
    {
      "weak": "Can we go through the whole plan at some point?",
      "better": "Could we decide the next step today?",
      "best": "Could we decide only the next step today, and park the rest for our next catch-up?"
    },
    {
      "weak": "Could you introduce me to your network?",
      "better": "Could you send me one name to start with?",
      "best": "Could you send me just the one name you think is most relevant? I'll handle the intro myself."
    }
  ],
  "scenarios": [
    {
      "situation": "Social conversation",
      "move": "Keep it warm and brief; ask for one small thing.",
      "phrase": "Could you help me with just the start? I'll take it from there."
    },
    {
      "situation": "Professional discussion",
      "move": "Name the single action or decision clearly.",
      "phrase": "Could we decide only the next step in this meeting?"
    },
    {
      "situation": "Digital message",
      "move": "Write one clean sentence; don't overexplain.",
      "phrase": "Quick one — could you confirm just the date?"
    },
    {
      "situation": "Conflict or objection",
      "move": "Validate or summarise before you make the ask.",
      "phrase": "I hear the concern. Could we agree just the one next step?"
    },
    {
      "situation": "High-status or guarded person",
      "move": "Make the ask optional and low-cost.",
      "phrase": "Would a two-minute version be easier than the full thing?"
    },
    {
      "situation": "Close relationship",
      "move": "Drop the technique feel and use ordinary language.",
      "phrase": "Could you just grab the one thing while you're up?"
    }
  ],
  "calibration": {
    "working": [
      "They say yes quickly and without hedging.",
      "They actually do the small thing you asked for.",
      "They relax and the exchange feels lighter.",
      "They correct or refine the ask easily (\"actually, the summary is faster\").",
      "They offer the next step themselves.",
      "They stay engaged rather than going quiet."
    ],
    "adjust": [
      "Answers get shorter — shrink the ask further or pause.",
      "You see visible tension — name it and make the ask optional.",
      "They correct you without engaging — you've mis-scoped; re-ask smaller.",
      "They change the subject — drop the ask for now.",
      "Sarcasm creeps in — the move is landing as pressure; release it.",
      "It starts to feel about your performance — return to plain language.",
      "They agree but don't act — the ask may still be too big; make it smaller."
    ]
  },
  "drill": [
    {
      "day": "Day 1",
      "title": "Spot the oversized ask",
      "task": "Notice three times today when a request (yours or someone else's) was bigger or vaguer than it needed to be. Write down the smaller, concrete version each time."
    },
    {
      "day": "Day 2",
      "title": "Say the minimum move aloud",
      "task": "Take one real request and shrink it to a single line — \"Could you do just X?\" Say it aloud three times until it stops sounding scripted."
    },
    {
      "day": "Day 3",
      "title": "Add the honest boundary",
      "task": "Rewrite three asks using the full formula: shrink the scope, name the exact action, and state clearly what you are not asking for."
    },
    {
      "day": "Day 4",
      "title": "Practise the recovery",
      "task": "In a low-stakes chat, deliberately over-ask, then use one recovery line to make it smaller: \"Let me put that more simply — just the one thing.\""
    },
    {
      "day": "Day 5",
      "title": "Field test, low stakes",
      "task": "Use one small ask in a real conversation and note the calibration cue — did they relax and act, or tense up? Adjust once on the spot."
    },
    {
      "day": "Day 6",
      "title": "Field test, higher stakes",
      "task": "Use a small ask with a busy or higher-status person. Keep it to one optional, concrete action and let the yes or no stand cleanly."
    },
    {
      "day": "Day 7",
      "title": "Review and set a rule",
      "task": "Look back at the week. Which asks shrank cleanly? Where were you tempted to bait-and-switch? Write one honesty rule for yourself."
    }
  ],
  "checklist": [
    "Did I notice the cue and shrink the ask before speaking?",
    "Was the ask one concrete action, not a vague or large one?",
    "Was the boundary honest — did I say what I was not asking for?",
    "Did I leave a genuine yes or no, without pressure?",
    "Did I watch their response and adjust?",
    "Did I repair quickly if it missed, rather than pushing?"
  ],
  "example": {
    "without": [
      "A: \"Can you help with my application?\"",
      "B: \"How much help?\"",
      "A: \"Just everything, really.\"",
      "Why it is weak:",
      "the ask has no edges, so B cannot easily say yes",
      "it hands B the whole problem instead of one step",
      "it forces a negotiation about scope before anything can happen"
    ],
    "with": [
      "A: \"Could you look at just the first paragraph and tell me if the opening lands? No need to read the rest.\"",
      "B: \"Sure, that's easy.\"",
      "A: \"Thank you — just the first paragraph is exactly enough.\"",
      "Why this works:",
      "the scope is small and concrete, so yes is cheap",
      "the boundary is honest — A really doesn't want the whole thing reviewed",
      "A accepts the yes cleanly instead of expanding the ask"
    ],
    "note": "The better version (\"Could you look at the first paragraph only and tell me if it makes sense?\") is already good; the advanced version adds an explicit, honest boundary so B knows exactly where the ask stops."
  },
  "influencePayoff": {
    "feeling": "\"That's an easy yes — I know exactly what they want, and I could say no if I needed to.\"",
    "principle": "People say yes more readily to a small, clear, bounded action than to a large or vague request — and a clean small yes builds the trust that makes the next ask easier.",
    "gains": [
      "Cleaner coordination",
      "Less interpersonal friction",
      "Lower defensiveness",
      "Faster movement from intention to action",
      "A next step that feels earned, not pushed",
      "Trust that you won't overreach"
    ],
    "whyMostFail": [
      "They disguise a large ask as a small one, so the yes curdles into resentment.",
      "They deliver it mechanically, as a softening tactic before pushing their real agenda.",
      "They make it vague instead of concrete, so \"small\" just means unclear.",
      "They expand the ask the moment they get a yes, breaking the boundary they named."
    ]
  },
  "fieldTip": {
    "headline": "Shrink the ask, not the honesty.",
    "body": "A small ask only works when the boundary is real. If you say \"just the first paragraph\" but you're quietly hoping they'll do the whole thing, people feel it — and the next ask costs more. Make the small ask genuinely the whole ask.",
    "example": "\"Could you look at just the first paragraph? No need to edit the rest.\" — and mean it.",
    "dont": "Don't use a small ask as a foot in the door for a bigger one you haven't named.",
    "do": "Do let a small, honest yes stand on its own; ask again separately if you need more."
  },
  "method": [
    {
      "step": "1",
      "title": "Notice the cue",
      "body": "Spot when a request is too big or vague, or when the person is busy, overwhelmed, or a project has stalled with no clear next step. These are the moments a smaller ask will move things that a larger one won't.",
      "examples": [
        { "label": "Cue", "text": "\"I don't even know where to start.\"" },
        { "label": "Cue", "text": "\"I'm swamped this week.\"" }
      ]
    },
    {
      "step": "2",
      "title": "Pause before the reflex",
      "body": "Give yourself a beat before firing off the oversized version. The default ask is usually the whole problem at once. Use the pause to find the single smallest useful step."
    },
    {
      "step": "3",
      "title": "Shrink to one concrete action",
      "body": "Name the one thing you actually need first. Concrete beats broad: \"the first paragraph\" not \"the document\", \"one example\" not \"the whole answer\".",
      "examples": [
        { "label": "Broad", "text": "\"Can you help with my application?\"" },
        { "label": "Shrunk", "text": "\"Could you look at just the first paragraph?\"" }
      ]
    },
    {
      "step": "4",
      "title": "State the honest boundary",
      "body": "Say what you are not asking for, so the edges are clear and the person can trust the size of the ask. This is what stops a small ask feeling like a trap.",
      "examples": [
        { "label": "With boundary", "text": "\"Just the opening — no need to edit the rest.\"" }
      ]
    },
    {
      "step": "5",
      "title": "Offer it and accept yes or no cleanly",
      "body": "Leave the choice genuinely open. Don't stack reasons or apply pressure. If they say yes, take the yes; if they say no, take that too, without renegotiating."
    },
    {
      "step": "6",
      "title": "Watch and repair",
      "body": "Read the response. If it lands, build on the small yes rather than piling on. If it misses — tension, a shorter answer, a topic change — make the ask smaller or release it."
    }
  ],
  "liveThreadClues": [
    "\"I don't even know where to start.\"",
    "\"That's a lot to take on right now.\"",
    "\"Can you just... help?\" (a vague, oversized ask)",
    "\"I'm swamped this week.\"",
    "\"We keep meaning to get to this.\"",
    "\"Send me everything you've got.\"",
    "A project that has stalled with no obvious next step."
  ],
  "depthDial": [
    {
      "depth": "Tiny",
      "useWhen": "very busy or guarded person",
      "phrase": "Could you confirm just the one thing?"
    },
    {
      "depth": "Small",
      "useWhen": "an ordinary request",
      "phrase": "Could you look at just the first paragraph?"
    },
    {
      "depth": "Small + boundary",
      "useWhen": "you want the edges explicit",
      "phrase": "Just the first paragraph — no need to edit the rest."
    },
    {
      "depth": "Small + reason",
      "useWhen": "the ask needs a why",
      "phrase": "Five minutes on the opening would tell me if the tone's right."
    },
    {
      "depth": "Full ask",
      "useWhen": "the real ask is large and must be named honestly",
      "phrase": "This is bigger than one step — can we set proper time aside?"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "Making the ask too long",
      "soundsLike": "\"So, if you have a moment, and only if it's convenient, I was wondering whether possibly...\"",
      "better": "\"Could you look at just the first paragraph?\""
    },
    {
      "mistake": "Disguising a big ask as a small one",
      "soundsLike": "\"Just a quick look\" — when it's really a full rewrite",
      "better": "\"Could you review the whole draft? It'll take about an hour.\""
    },
    {
      "mistake": "Using it as a foot in the door",
      "soundsLike": "\"Just one small thing...\" then piling on three more",
      "better": "\"That's all I needed — thank you.\""
    },
    {
      "mistake": "Repeating it mechanically",
      "soundsLike": "\"Could you do just X?\" for the fifth time in one chat",
      "better": "Vary it, or switch to an ordinary sentence."
    },
    {
      "mistake": "Ignoring their correction",
      "soundsLike": "pressing on after \"actually, the summary is the useful bit\"",
      "better": "\"Good point — just the summary, then.\""
    },
    {
      "mistake": "Over-polishing the language",
      "soundsLike": "\"Might I trouble you to peruse the opening?\"",
      "better": "\"Can you glance at the first bit?\""
    },
    {
      "mistake": "Missing urgency or fatigue",
      "soundsLike": "a five-minute ask when they're clearly slammed",
      "better": "\"No rush at all — whenever you next get a gap.\""
    }
  ],
  "recoveryPhrases": [
    "I may have read that wrong.",
    "Let me put that more simply.",
    "Let me make that smaller — just the one thing.",
    "No need to go there if it's not useful.",
    "I jumped ahead there.",
    "What would be the more accurate way to ask that?",
    "We can leave that and come back if needed.",
    "Ignore the rest — one part is genuinely all I need."
  ],
  "bestRecoveryLine": "Let me make that smaller — just the one thing, and only if it's easy.",
  "chains": [
    {
      "label": "Attention → ask → check",
      "sequence": "TC012 Full-Attention Signal → TC019 Small Ask → TC011 Summary Check",
      "example": [
        "\"I'm with you on this.\"",
        "\"Could you decide just the next step today?\"",
        "\"So we're agreed on the date, and we'll scope the rest next week?\""
      ]
    },
    {
      "label": "Listen → ask → advise",
      "sequence": "TC004 Reflective Listening → TC019 Small Ask → TC027 Permission-Based Advice",
      "example": [
        "\"So the whole thing feels overwhelming right now.\"",
        "\"Could we just pick the one part to start with?\"",
        "\"Want a suggestion on which part, or would you rather choose?\""
      ]
    },
    {
      "label": "Ask → release pressure",
      "sequence": "TC019 Small Ask → TC021 Autonomy Release",
      "example": [
        "\"Could you look at just the first paragraph?\"",
        "\"But genuinely, no pressure — it's entirely your call.\""
      ]
    },
    {
      "label": "Clarify → shrink",
      "sequence": "TC013 Clean Request → TC019 Small Ask",
      "example": [
        "\"Here's exactly what I need.\"",
        "\"And if that's a lot, even just the first step would help.\""
      ]
    }
  ],
  "relatedTechniques": [
    {
      "id": "TC013",
      "reason": "Clean Request makes the ask clear. Reach for TC019 when the main problem is the size of the ask, not its clarity."
    },
    {
      "id": "TC020",
      "reason": "Low-Friction Ask makes the ask easier to accept. Use TC019 to reduce scope; use TC020 to reduce effort or social cost."
    },
    {
      "id": "TC034",
      "reason": "Two-Option Questions offer two paths. Use TC019 when the next step should be one small action, not a choice."
    },
    {
      "id": "TC094",
      "reason": "Bounded request fences a defined ask with limits on time or scope. TC019 shrinks the ask itself to its smallest useful form."
    },
    {
      "id": "TC068",
      "reason": "Specific ask names precisely what you want. TC019 also shrinks it to the smallest concrete step."
    },
    {
      "id": "TC021",
      "reason": "Autonomy Release hands the choice back. Pair it with TC019 when even a small ask risks feeling like pressure."
    }
  ]
};
