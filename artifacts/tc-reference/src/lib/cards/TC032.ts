import type { CardData } from "../card-types";

export const TC032: CardData = {
  pdfUrl: "cards/TC032/TC032_TwoCard_Combined.pdf",
  resources: [
    { label: "Two-card (combined)", description: "Front and back study cards on one sheet — the designed visual card.", href: "cards/TC032/TC032_TwoCard_Combined.pdf", type: "pdf", group: "Visual Cards" },
    { label: "One-card summary", description: "The whole technique on a single designed card.", href: "cards/TC032/TC032_OneCard.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Quick card", description: "One-page glance card for fast recall.", href: "cards/TC032/TC032_Quick_Card.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Detailed guide", description: "The full written guide with every section.", href: "cards/TC032/TC032_Detailed_Guide.pdf", type: "pdf", group: "Written Guides" },
    { label: "Reference sheet", description: "Dense one-page reference of the key moves.", href: "cards/TC032/TC032_Reference.pdf", type: "pdf", group: "Written Guides" },
    { label: "Phrase bank (CSV)", description: "Every phrase, ready to import or drill.", href: "cards/TC032/TC032_Phrase_Bank.csv", type: "csv", group: "Practice Tools" },
    { label: "Anki flashcards", description: "Import into Anki for spaced-repetition practice.", href: "cards/TC032/TC032_Anki_Flashcards.csv", type: "csv", group: "Practice Tools" },
  ],
  "id": "TC032",
  "whyItWorks": "Name and Detail Memory is recalling one accurate thing about someone — their name, or a specific detail they shared earlier — and reusing it at the right moment so they feel recognised rather than processed. It is a specific, observable conversation move, not a general good memory. It works because being remembered is a quiet signal that someone mattered enough to be held in mind: it tells the other person you were actually listening, and that the relationship has continuity beyond this single exchange.",
  "whatItIsNot": [
    "It is not a trick, a dominance move, a script, or a way to push someone past their boundary.",
    "It is not flattery or a way to soften someone up before an ask.",
    "It is not surveillance — reciting a file of facts back at them is the opposite of the move.",
    "It is not about remembering everything; it is one accurate detail used at the right moment."
  ],
  "overview": {
    "coreFormula": [
      "Cue → small move → pause → observe → follow or release.",
      "Good to see you, Maya.",
      "You mentioned the presentation — how did it land?",
      "One name or one detail, used once, then hand the floor back."
    ],
    "minimumViableMove": "Use their name once, or refer to one relevant detail they already shared — then stop and watch the response.",
    "impact": "Medium",
    "difficulty": "Easy-Medium",
    "misuse": "Overusing remembered details until the person feels tracked, managed or performatively remembered.",
    "bestFor": [
      "When a remembered detail shows genuine care",
      "When reconnecting after a previous conversation",
      "When one accurate detail will make the interaction warmer",
      "Greeting someone by name to set a warm tone",
      "Picking a relationship back up where it left off",
      "Building trust across ongoing professional relationships"
    ]
  },
  "notFor": [
    "When the detail is sensitive or private",
    "When it would look strategic or intrusive",
    "When you are unsure the detail is accurate",
    "When the person is rushed and needs directness, not warmth",
    "When physical safety or an emergency takes priority",
    "When you would be reciting details to prove attentiveness rather than to connect"
  ],
  "phraseBank": [
    {
      "id": "quick_greetings",
      "label": "Greeting by name",
      "tag": "Quick openers",
      "tone": "Quick",
      "phrases": [
        "Good to see you, Maya.",
        "Morning, Sam — good to catch you.",
        "Priya, good to see you again.",
        "Welcome back, James.",
        "Nice to run into you, Tom.",
        "Alex — perfect timing."
      ]
    },
    {
      "id": "warm_reconnect",
      "label": "Reconnecting warmly",
      "tag": "A remembered detail that shows care",
      "tone": "Warm",
      "phrases": [
        "You mentioned the presentation last week — how did it land?",
        "I remember you said mornings are easier for you.",
        "You had a big week with the move, right? How's the new place?",
        "Last time we spoke you were about to run that first session — how did it go?",
        "How's your dad doing? You'd said he'd been unwell.",
        "Did you get to that gig you were looking forward to?",
        "You were deep in exam season last time — is that all done now?"
      ]
    },
    {
      "id": "professional",
      "label": "Work / meeting continuity",
      "tag": "Concise, non-performative",
      "tone": "Professional",
      "phrases": [
        "You flagged the budget as the sticking point last time — where's that landed?",
        "Last meeting you wanted to hold the timeline. Still the priority?",
        "You said the Sydney team owns that call — did you hear back?",
        "I know onboarding was your focus this quarter — how's it tracking?",
        "You mentioned Q3 was tight. Has that eased at all?",
        "Before we start — how did the board session go? You had that Thursday.",
        "You'd wanted to loop Priya in on this — shall I hold off until she's across it?"
      ]
    },
    {
      "id": "tentative_check",
      "label": "Checking a detail",
      "tag": "Two-option / tentative",
      "tone": "Direct",
      "phrases": [
        "I may be misremembering, but was today the Sydney meeting?",
        "Correct me if I've got this wrong — you're leading the rollout?",
        "Was it Thursday you were flying out, or have I muddled that?",
        "Remind me — is it Kate or Katie you prefer?",
        "You said fortnightly, not weekly — did I get that right?"
      ]
    },
    {
      "id": "repair",
      "label": "When the detail is off",
      "tag": "Softening / release",
      "tone": "Repair",
      "phrases": [
        "I may be reading this wrong — ignore it if it doesn't fit.",
        "Sorry, I've mixed that up. What was it actually?",
        "That was someone else's news, wasn't it? My mistake.",
        "We can stay with this or move on — your call.",
        "I didn't mean to put you on the spot.",
        "Forget I mentioned it if it's not the right time."
      ]
    },
    {
      "id": "digital_text",
      "label": "Digital / text",
      "tag": "One sentence only",
      "tone": "Quick",
      "phrases": [
        "I may be reading this wrong, but this seems like the relevant thread.",
        "Hope the presentation went well on Thursday.",
        "Following up on the move — did it all go smoothly?",
        "You mentioned this week was hectic, so no rush replying.",
        "Congrats on the launch — I know you'd been building up to it.",
        "Thinking of you before the interview tomorrow — you'll do well."
      ]
    },
    {
      "id": "high_stakes",
      "label": "Guarded or high-pressure",
      "tag": "Use a detail to ease pressure",
      "tone": "High-stakes",
      "phrases": [
        "I know this matters a lot to you — you've said as much before.",
        "Last time this came up it was a hard one. I haven't forgotten that.",
        "You told me you'd rather be told straight, so I will.",
        "You've said before you don't like being managed, so I'll just lay it out.",
        "I remember this is the part you were most worried about."
      ]
    }
  ],
  "decisionTree": [
    {
      "condition": "They add detail",
      "action": "Follow the thread they open.",
      "phrase": "Oh — how did that part go?"
    },
    {
      "condition": "They pause thoughtfully",
      "action": "Wait; don't rush to fill the silence.",
      "phrase": "No rush."
    },
    {
      "condition": "They look uncomfortable",
      "action": "Release the move and ease off.",
      "phrase": "Ignore that if it doesn't fit."
    },
    {
      "condition": "They ask for advice",
      "action": "Switch to permission-based advice.",
      "phrase": "Want my take, or just a sounding board?"
    },
    {
      "condition": "Action is needed",
      "action": "Drop the rapport move and act directly.",
      "phrase": "Let's sort the urgent bit first."
    }
  ],
  "ladder": [
    {
      "weak": "So, what's new with you?",
      "better": "Good to see you, Maya.",
      "best": "Good to see you, Maya — how did the presentation end up going?"
    },
    {
      "weak": "Tell me everything that's happened.",
      "better": "You mentioned the move — how's it going?",
      "best": "You mentioned the move was this week — how's the new place feeling? No need for the full rundown."
    },
    {
      "weak": "You said Thursday. It was definitely Thursday.",
      "better": "Wasn't it Thursday you had the meeting?",
      "best": "I may be misremembering, but was Thursday the Sydney meeting? How did it land?"
    }
  ],
  "scenarios": [
    {
      "situation": "Casual run-in",
      "move": "Use the minimum move — the name, or one light detail.",
      "phrase": "Good to see you, Maya — how was the trip?"
    },
    {
      "situation": "Professional discussion",
      "move": "Keep it concise and non-performative; tie the detail to the work.",
      "phrase": "You flagged the budget last time — where did that land?"
    },
    {
      "situation": "Conflict or objection",
      "move": "Pair the remembered detail with validation or an autonomy release.",
      "phrase": "I know this matters to you — you've said so before. It's still your call."
    },
    {
      "situation": "Digital message",
      "move": "One sentence only; no stacked questions.",
      "phrase": "Hope Thursday's presentation went well."
    },
    {
      "situation": "High-stakes moment",
      "move": "Lead with direct clarity, then use the detail only if it eases pressure.",
      "phrase": "Here's where things stand. And I haven't forgotten this one's been weighing on you."
    },
    {
      "situation": "Reconnecting after a gap",
      "move": "Lead with one accurate detail, not a barrage of catch-up questions.",
      "phrase": "Last time we spoke you'd just started the new role — how's it settling?"
    }
  ],
  "calibration": {
    "working": [
      "They add more detail than you asked for.",
      "Their tone softens.",
      "They pick up the thread and run with it.",
      "They seem pleased to be remembered.",
      "They reciprocate, asking after something of yours.",
      "They correct a small detail warmly rather than defensively."
    ],
    "adjust": [
      "Short answers, polite but low on energy.",
      "They change the subject.",
      "They look surprised or uneasy that you remembered.",
      "Withdrawal, confusion or a guarded tone.",
      "They stiffen or go quiet.",
      "When in doubt, make the move smaller — or drop it entirely.",
      "Fall back to name only, no detail, if remembering feels like too much."
    ]
  },
  "drill": [
    {
      "day": "Day 1",
      "title": "Notice what's worth remembering",
      "task": "In three conversations today, catch one detail each worth holding — a name, a date, a preference, or something they clearly care about. Write them down."
    },
    {
      "day": "Day 2",
      "title": "Draft the move",
      "task": "For five of those details, write a single line that reuses the detail warmly. Keep each to one sentence."
    },
    {
      "day": "Day 3",
      "title": "Weak, better, best",
      "task": "Take one line and write a weak, a better and a best version — escalating from generic, to name-plus-detail, to name-plus-detail-plus-space."
    },
    {
      "day": "Day 4",
      "title": "Trim by a third",
      "task": "Cut your best line down by about 30 percent so it feels light and offhand, not rehearsed."
    },
    {
      "day": "Day 5",
      "title": "Add the release",
      "task": "Write a recovery phrase for each line, in case the detail turns out wrong or lands oddly."
    },
    {
      "day": "Day 6",
      "title": "Use it once, low-stakes",
      "task": "In a real, low-stakes conversation, use one remembered detail once, then stop and watch the response."
    },
    {
      "day": "Day 7",
      "title": "Reconnect deliberately",
      "task": "With someone you haven't seen in a while, open by referencing one accurate detail from last time. Notice whether they warm up, and where you'd calibrate next time."
    }
  ],
  "checklist": [
    "Did I preserve their autonomy?",
    "Did I use one detail rather than several?",
    "Did I watch the response?",
    "Did I stop when the energy dropped?",
    "Did the detail feel like care, or like a file note?",
    "Would a simpler, lighter version have been better?"
  ],
  "example": {
    "without": [
      "You (running into a colleague): \"Oh hey — how's things?\"",
      "Them: \"Yeah, good thanks. You?\"",
      "You: \"Not bad. Busy.\"",
      "Why it is weak:",
      "treats them like a stranger you've never spoken to",
      "gives no sign you remember anything about them",
      "the exchange stays flat and forgettable"
    ],
    "with": [
      "You: \"Maya — good to see you. Did the presentation end up landing okay?\"",
      "Maya: \"It did, actually. Bit nerve-racking, but it went well.\"",
      "You: \"That's a relief. You'd said it was the big one this quarter.\"",
      "Maya: \"Yeah — glad it's behind me.\"",
      "You: \"I bet. What's next, or are you taking a breather first?\"",
      "Why this works:",
      "one accurate detail signals you were actually listening last time",
      "you use it once, then hand the floor back",
      "Maya feels recognised, not catalogued"
    ],
    "note": "The skill is restraint: one detail, used once, then space. A second and third remembered fact tips warmth into surveillance."
  },
  "influencePayoff": {
    "feeling": "\"They actually remembered — I mattered enough to be kept in mind.\"",
    "principle": "People feel valued when they see that something they said was held in mind and mattered to you.",
    "gains": [
      "Warmth",
      "Trust",
      "A sense of continuity between conversations",
      "The other person feels recognised, not processed",
      "Less friction and fewer cold restarts",
      "Rapport that compounds over time"
    ],
    "whyMostFail": [
      "They overuse remembered details until the person feels tracked or managed.",
      "They recite facts mechanically instead of showing genuine care.",
      "They use the detail to steer toward their own agenda.",
      "They get the detail wrong and press on anyway."
    ]
  },
  "fieldTip": {
    "headline": "Remember lightly.",
    "body": "The detail should feel like care, not a file note. One accurate thing, used once at the right moment, does more than a catalogue of facts recited back to prove you were paying attention.",
    "example": "\"You had the big presentation Thursday — how did it land?\"",
    "dont": "Don't recite everything you remember to prove you were listening.",
    "do": "Do pick the one detail that shows you cared, and let them take it from there."
  },
  "method": [
    {
      "step": "1",
      "title": "Catch the cue",
      "body": "Listen for the detail worth holding: a name, a date, a preference, or something they clearly care about. You don't need to remember everything — just one accurate thing you can bring back later.",
      "examples": [
        { "label": "Worth catching", "text": "\"My presentation's on Thursday.\" → the date and the stakes." },
        { "label": "Worth catching", "text": "\"Mornings are easier for me.\" → a preference to honour later." }
      ]
    },
    {
      "step": "2",
      "title": "Choose the smallest useful version",
      "body": "Decide how much to reuse. Often the name alone, or a single detail, is plenty. More than one at a time tips from warmth into surveillance.",
      "examples": [
        { "label": "Light", "text": "\"Good to see you, Maya.\"" },
        { "label": "Warmer", "text": "\"Maya — how did Thursday go?\"" }
      ]
    },
    {
      "step": "3",
      "title": "Use plain language",
      "body": "Say it the way you'd mention anything else. No preamble about how good your memory is, no announcing the technique.",
      "examples": [
        { "label": "Avoid", "text": "\"I always make a point of remembering these things.\"" },
        { "label": "Better", "text": "\"How's the new place settling?\"" }
      ]
    },
    {
      "step": "4",
      "title": "Pause and observe",
      "body": "Use the detail once, then stop. Give them room to pick it up, correct it, or let it pass. The silence after is part of the move."
    },
    {
      "step": "5",
      "title": "Follow or release",
      "body": "If they open up, follow the thread they offer. If they stiffen, go quiet or look uneasy, ease off and make the next move smaller.",
      "examples": [
        { "label": "Follow", "text": "\"Oh — how did that part go?\"" },
        { "label": "Release", "text": "\"Ignore that if it doesn't fit.\"" }
      ]
    }
  ],
  "liveThreadClues": [
    "Their name, and the version of it they prefer",
    "A date or event they mentioned (\"the presentation on Thursday\")",
    "A stated preference (\"mornings are easier\")",
    "A life change (\"the move\", \"the new role\")",
    "Something they were worried or excited about",
    "A person they mentioned (\"how's your dad?\")"
  ],
  "depthDial": [
    {
      "depth": "Name only",
      "useWhen": "brief or passing contact",
      "phrase": "Good to see you, Maya."
    },
    {
      "depth": "Name + light detail",
      "useWhen": "warming a familiar exchange",
      "phrase": "Maya — how was the trip?"
    },
    {
      "depth": "Detail + follow-up",
      "useWhen": "there's time and rapport",
      "phrase": "You mentioned the presentation — how did it land?"
    },
    {
      "depth": "Detail + feeling",
      "useWhen": "real trust is present",
      "phrase": "You'd said the first month was full-on — has it eased?"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "Overusing the move",
      "soundsLike": "\"And how's your sister? And the dog? And that course you started?\"",
      "better": "Pick one detail and use it once: \"How's the course going?\""
    },
    {
      "mistake": "Making it sound like a technique",
      "soundsLike": "\"I always make a point of remembering names.\"",
      "better": "Just use the name naturally, with no announcement."
    },
    {
      "mistake": "Ignoring their response",
      "soundsLike": "Pressing on after they've gone quiet or short.",
      "better": "\"We can leave that — how are things otherwise?\""
    },
    {
      "mistake": "Using it to steer your agenda",
      "soundsLike": "\"You said you care about growth, so you'll love this pitch.\"",
      "better": "Mention the detail without hooking an ask to it."
    },
    {
      "mistake": "Reciting details like a file",
      "soundsLike": "\"Birthday's the 12th, oat flat white, two cats, right?\"",
      "better": "\"How were the cats after the move?\""
    },
    {
      "mistake": "Getting the detail wrong and doubling down",
      "soundsLike": "\"No, you definitely said Friday.\"",
      "better": "\"I may have muddled that — what was it?\""
    },
    {
      "mistake": "Remembering the fact but not the feeling",
      "soundsLike": "\"How's the new job?\" (when they'd called it stressful)",
      "better": "\"How's the new job settling? You'd said the first month was full-on.\""
    }
  ],
  "recoveryPhrases": [
    "I may be reading that wrong.",
    "We don't have to stay with that.",
    "Let me say that more simply.",
    "Ignore that if it doesn't fit.",
    "What would be more useful right now?",
    "Sorry — I've mixed that up with someone else.",
    "No pressure to get into it.",
    "Forget I mentioned it if it's not the right time."
  ],
  "bestRecoveryLine": "I may be reading that wrong — ignore it if it doesn't fit.",
  "chains": [
    {
      "label": "Reconnect and open up",
      "sequence": "Name and Detail Memory → Summary Check → Live-Thread Follow-Up",
      "example": [
        "\"Good to see you, Sam — you were mid-house-hunt last time.\"",
        "\"So it sounds like the search is still on, but you've narrowed the area?\"",
        "\"What's making that one the front-runner?\""
      ]
    },
    {
      "label": "Recognise without agreeing",
      "sequence": "Validation Without Agreement → Name and Detail Memory → Autonomy Release",
      "example": [
        "\"I get why you'd want to push the deadline.\"",
        "\"You said last week the team was already stretched.\"",
        "\"It's your call in the end — you know the workload better than I do.\""
      ]
    },
    {
      "label": "Steady a tense moment",
      "sequence": "Slow Down Under Pressure → Name and Detail Memory → Meaning Reflection",
      "example": [
        "\"Let's not rush this one.\"",
        "\"You've told me before this project means a lot to you.\"",
        "\"Sounds like what matters most is doing it properly, not just fast.\""
      ]
    }
  ],
  "relatedTechniques": [
    {
      "id": "TC024",
      "reason": "Warm Opening starts the interaction; Name and Detail Memory adds continuity by carrying a detail forward from last time."
    },
    {
      "id": "TC018",
      "reason": "Specific Appreciation names present value; Name and Detail Memory recalls prior context they shared earlier."
    },
    {
      "id": "TC010",
      "reason": "Warm Presence is the ongoing feel; Name and Detail Memory is one concrete signal of it."
    },
    {
      "id": "TC036",
      "reason": "Contextual Opener uses the current situation; Name and Detail Memory uses a detail from a previous conversation."
    },
    {
      "id": "TC011",
      "reason": "Summary Check plays back the gist of what was just said; Name and Detail Memory brings back a single detail from further back."
    }
  ]
};
