import type { CardData } from "../card-types";

export const TC068: CardData = {
  pdfUrl: "cards/TC068/TC068_TwoCard_Combined.pdf",
  resources: [
    { label: "Two-card (combined)", description: "Front and back study cards on one sheet — the designed visual card.", href: "cards/TC068/TC068_TwoCard_Combined.pdf", type: "pdf", group: "Visual Cards" },
    { label: "One-card summary", description: "The whole technique on a single designed card.", href: "cards/TC068/TC068_OneCard.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Quick card", description: "One-page glance card for fast recall.", href: "cards/TC068/TC068_Quick_Card.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Detailed guide", description: "The full written guide with every section.", href: "cards/TC068/TC068_Detailed_Guide.pdf", type: "pdf", group: "Written Guides" },
    { label: "Reference sheet", description: "Dense one-page reference of the key moves.", href: "cards/TC068/TC068_Reference.pdf", type: "pdf", group: "Written Guides" },
    { label: "Phrase bank (CSV)", description: "Every phrase, ready to import or drill.", href: "cards/TC068/TC068_Phrase_Bank.csv", type: "csv", group: "Practice Tools" },
    { label: "Anki flashcards", description: "Import into Anki for spaced-repetition practice.", href: "cards/TC068/TC068_Anki_Flashcards.csv", type: "csv", group: "Practice Tools" },
  ],
  "id": "TC068",
  "whyItWorks": "Specific ask is the discipline of making a request answerable. Instead of reaching for a foggy word like 'help', 'thoughts', 'feedback' or 'a quick look', you name the exact action you want, the object or topic it applies to, the output you need back, and the timing or boundary that keeps it fair. It works because many requests fail before they are even considered: the other person cannot tell what the vague word actually means, so they stall, guess at the largest possible version, or give a hollow yes that later turns into delay or resentment. Naming the smallest clear action turns a foggy request into a manageable decision, while still leaving them free to say yes, no, not now, or 'here is a smaller version'.",
  "whatItIsNot": [
    "It is not a compliance tactic or a way to make refusal harder. Precision is not pressure.",
    "It is not over-specifying every detail until the other person has no room to think or contribute.",
    "It is not a shortcut around context, consent, relationship repair or fair compensation.",
    "It is not the same as a small ask; a request can be perfectly specific and still too large.",
    "It is not 'just be more direct' delivered in a blunt or status-heavy way."
  ],
  "overview": {
    "coreFormula": [
      "Context in one line -> specific action -> specific object -> specific output -> boundary or opt-out.",
      "Full: \"Because [context], could you [action] [object] and send me [output] by [time]? No problem if that is not feasible.\"",
      "Minimum: \"Could you [action] [object] and tell me [output]?\"",
      "Pressure-safe: \"Would it be reasonable to ask you to [action] [object] by [time]? If not, I can adjust the ask.\""
    ],
    "minimumViableMove": "Ask for one specific action on one specific object, with one clear output.",
    "impact": "High",
    "difficulty": "Easy-Medium",
    "misuse": "A precise ask can sound like an order when it drops context, choice or an easy refusal path, or when it stays specific about the outcome you want while leaving the effort, timing and ownership vague.",
    "bestFor": [
      "Asking for feedback, a review, a decision or an approval",
      "Requesting help, an introduction or the right owner for something",
      "Booking meeting time with a clear purpose",
      "Digital replies where a yes/no or one detail is all you need",
      "Stakeholder or client input on a specific point",
      "Small behaviour changes stated plainly",
      "Any moment where 'can you help?' would create too much interpretation work"
    ]
  },
  "notFor": [
    "The other person is upset and needs to feel heard before anything is asked of them",
    "The relationship needs empathy or repair before action",
    "The real ask is large and must be named honestly rather than shrunk to sound easy",
    "You are not yet sure what you actually need",
    "The request would be unfair even if it were phrased perfectly clearly",
    "Naming one option now would prematurely close off better ones",
    "Physical safety or an immediate emergency takes priority over careful phrasing"
  ],
  "phraseBank": [
    {
      "id": "quick",
      "label": "Quick / one-liners",
      "tag": "Short openers and starter asks",
      "tone": "Quick",
      "phrases": [
        "Could you answer just this part?",
        "Could you reply with a yes or no?",
        "Which of these two dates works better?",
        "Could you point me to the right owner?",
        "One quick thing: which option do you prefer?",
        "Could you send me the one number I'm missing?",
        "Just the headline is fine for now.",
        "Could you confirm the time? Nothing else needed."
      ]
    },
    {
      "id": "digital",
      "label": "Digital / text",
      "tag": "Message-length asks with a clear reply path",
      "tone": "Quick",
      "phrases": [
        "Could you reply with yes/no on option B by 3 pm? Detail can wait.",
        "Could you reply with the best contact name? No intro needed yet.",
        "Reply with the one blocker and I'll handle the rest.",
        "A thumbs up or down is enough here.",
        "Could you drop me the file name, not the whole folder?",
        "Which line do I change? Just point to it."
      ]
    },
    {
      "id": "warm",
      "label": "Close & personal",
      "tag": "Emotionally aware specificity",
      "tone": "Warm",
      "phrases": [
        "Could you tell me what you need from me tonight: listening, problem-solving or space?",
        "Could you tell me whether you want advice, help with logistics or just listening?",
        "Would it help if I took one thing off your plate? Tell me which.",
        "I don't need the whole story, just the part that's worrying you most.",
        "Could you let me know one way I can actually help this week?",
        "No rush, but could you tell me which day suits you?",
        "Tell me the single thing that would make tomorrow easier."
      ]
    },
    {
      "id": "professional",
      "label": "Work & meetings",
      "tag": "Review, decision and status asks",
      "tone": "Professional",
      "phrases": [
        "Could you review the two highlighted risks and tell me whether either blocks approval?",
        "Could we spend ten minutes deciding the next owner and the due date?",
        "Could you sanity-check the numbers in rows 12 to 20 only?",
        "Could you confirm whether the blocker is budget, timing or scope?",
        "Could you send me the three blockers by noon, with an owner for each?",
        "Could you mark the one slide where the story breaks, rather than reworking the deck?",
        "Could you tell me the biggest risk you see in option A, in one or two lines?"
      ]
    },
    {
      "id": "direct",
      "label": "Naming the exact ask",
      "tag": "Action plus output, said plainly",
      "tone": "Direct",
      "phrases": [
        "Could you decide whether the launch date moves or stays?",
        "Could you review the pricing section and send me the one objection a client is most likely to raise?",
        "Could you choose option A or B, whichever you can live with?",
        "What I need is a decision, not a full review.",
        "Could you mark the one paragraph that feels least clear?",
        "Could you introduce me to the person who owns this?",
        "Could you tell me the single thing that would change your mind?"
      ]
    },
    {
      "id": "softening",
      "label": "Softening & opt-out",
      "tag": "Boundary-safe, autonomy-preserving asks",
      "tone": "Repair",
      "phrases": [
        "No problem if the answer is no; I mainly wanted to make the ask clear.",
        "Would it be reasonable to ask for a five-minute read of the first page only?",
        "If that timing doesn't work, just tell me what does.",
        "If this isn't realistic, I can ask someone else.",
        "Only if you have the capacity; otherwise ignore this.",
        "I'd rather you were honest than say yes and resent it.",
        "Say the word and I'll take this off your list."
      ]
    },
    {
      "id": "high-stakes",
      "label": "Pressure & conflict",
      "tag": "Decisions under strain",
      "tone": "High-stakes",
      "phrases": [
        "The specific decision I need is whether we pause, continue or escalate by noon.",
        "Could you tell me the one part of the proposal you object to most?",
        "Bottom line: I need a yes or no on this by three.",
        "Could you tell me the one risk that would make you stop the launch?",
        "I want to respond to the right thing, so tell me your main objection.",
        "If we can only fix one thing before Friday, which should it be?"
      ]
    }
  ],
  "decisionTree": [
    {
      "condition": "You are about to make a request",
      "action": "If it isn't really a request, don't force this. Just talk.",
      "phrase": ""
    },
    {
      "condition": "They are emotionally activated",
      "action": "Listen, validate or repair before asking for anything.",
      "phrase": "Before I ask anything, how are you doing with all this?"
    },
    {
      "condition": "You can't name the exact action",
      "action": "Clarify your own need first; don't outsource the thinking to them.",
      "phrase": "Give me a second to work out what I'm actually asking."
    },
    {
      "condition": "You can name the action, object and output",
      "action": "State them in one clean sentence.",
      "phrase": "Could you review the pricing section and send me the one likely objection?"
    },
    {
      "condition": "The ask is large or costly",
      "action": "Shrink it or name the full size honestly, and add an opt-out.",
      "phrase": "This is a bigger ask than it sounds. No problem if it's a no."
    },
    {
      "condition": "The ask landed as pressure",
      "action": "Recover by narrowing, contextualising or releasing pressure.",
      "phrase": "I made that too broad. The specific ask is just this one thing."
    }
  ],
  "ladder": [
    {
      "weak": "Can you help me with this?",
      "better": "Can you review this draft?",
      "best": "Could you review the two highlighted paragraphs and tell me whether the tone is too direct by Thursday afternoon? No line edits needed."
    },
    {
      "weak": "What do you think?",
      "better": "What do you think of option A?",
      "best": "Could you tell me the biggest risk you see in option A, in one or two bullets?"
    },
    {
      "weak": "Can we talk?",
      "better": "Can we talk about the project?",
      "best": "Could we take ten minutes today to decide whether the launch date moves or stays?"
    }
  ],
  "scenarios": [
    {
      "situation": "Work feedback",
      "move": "Ask for one marked spot, not a rewrite.",
      "phrase": "Could you mark the one slide where the story breaks, rather than rewriting the deck?"
    },
    {
      "situation": "Manager to direct report",
      "move": "Name the output, the count and the time box, then offer a fallback time.",
      "phrase": "Could you send me the three blockers by noon, with an owner for each? If noon is unrealistic, tell me the earliest time."
    },
    {
      "situation": "Peer request",
      "move": "Narrow the scope to the exact rows or section.",
      "phrase": "Could you sanity-check the numbers in rows 12 to 20 only?"
    },
    {
      "situation": "Client or stakeholder",
      "move": "Turn a vague blocker into a single either/or question.",
      "phrase": "Could you confirm whether the approval blocker is budget, timing or scope?"
    },
    {
      "situation": "Family or close relationship",
      "move": "Ask which kind of support they want before giving it.",
      "phrase": "Could you tell me whether you want advice, help with logistics or just listening?"
    },
    {
      "situation": "High-status or guarded person",
      "move": "Offer the specific version and the full-context version, and let them choose.",
      "phrase": "Would it help if I sent one specific decision for your review, or would you prefer the full context first?"
    }
  ],
  "calibration": {
    "working": [
      "They answer the exact question you asked.",
      "They give a clean yes or no.",
      "They ask one narrow clarifying question.",
      "They name a constraint or suggest a better owner.",
      "They look visibly relieved by the bounded scope.",
      "They come back faster than usual."
    ],
    "adjust": [
      "They ask 'what do you mean?'",
      "They answer a different question from the one you asked.",
      "They look wary or mention their workload.",
      "They give a vague yes or quietly delay.",
      "They start solving far more than you asked for.",
      "They show discomfort. Release the pressure or shrink the ask.",
      "The ask has become about your urgency rather than their capacity. Stop and repair."
    ]
  },
  "drill": [
    {
      "day": "Day 1",
      "title": "Spot the vague asks",
      "task": "List five requests you made recently that started with 'help', 'thoughts', 'feedback', 'support' or 'can we talk?'. Just collect them; don't fix them yet."
    },
    {
      "day": "Day 2",
      "title": "Break one down",
      "task": "Take one vague ask and write its four parts separately: the action verb, the exact object, the output you need, and the boundary or deadline."
    },
    {
      "day": "Day 3",
      "title": "Rewrite in one sentence",
      "task": "Turn yesterday's four parts into a single answerable sentence, e.g. 'Could you spend ten minutes on the pricing section and send me the one objection a client is most likely to raise by Friday?'"
    },
    {
      "day": "Day 4",
      "title": "Add the opt-out",
      "task": "Take three of your rewritten asks and add a clean refusal or renegotiation line to each, such as 'No problem if that's not realistic.'"
    },
    {
      "day": "Day 5",
      "title": "Find the verb before you send",
      "task": "Before sending any request today, underline the action verb. If there isn't one, rewrite the ask until there is."
    },
    {
      "day": "Day 6",
      "title": "Use one live",
      "task": "In a real conversation or message, make one specific ask and watch whether they answer the exact question or ask you what you mean."
    },
    {
      "day": "Day 7",
      "title": "Partner pressure-test",
      "task": "Ask a colleague or friend to give you a deliberately vague request. Reply only with 'What action, object, output and boundary?' until their ask is answerable but still respectful, then swap roles."
    }
  ],
  "checklist": [
    "Did I actually know what I was asking for?",
    "Did I name one clear action rather than a vague category of help?",
    "Did I name the object and the output I needed?",
    "Did I include timing or a fair boundary where it mattered?",
    "Did I leave room for no, delay or renegotiation?",
    "Did the final ask reduce ambiguity without adding pressure?"
  ],
  "example": {
    "without": [
      "A: Can you help with the proposal?",
      "B: What kind of help?",
      "A: Just any thoughts.",
      "B: I don't have time to rewrite it.",
      "Why it's weak: 'help' and 'thoughts' name no action, object or output, so B has to guess, and guesses at the biggest possible version, a full rewrite."
    ],
    "with": [
      "A: Could you review the pricing section and tell me if anything is confusing?",
      "B: I can do that.",
      "A: Thank you. Confusing points only, no need for a full edit.",
      "Advanced. A: I'm trying to send the proposal by Friday. Could you spend ten minutes on the pricing section only and send me the one objection a client is most likely to raise? If that's not realistic, I can ask Lee instead.",
      "B: Ten minutes is fine. I'll send the likely objection after lunch.",
      "A: Perfect. One objection is enough; I'm not asking for a full review.",
      "Why it works: it names the action (review), object (pricing section), output (one likely objection) and boundary (ten minutes, by Friday), and offers a clean fallback."
    ],
    "note": "The advanced version adds context, a tight boundary and an easy exit, so the precision reads as consideration rather than command."
  },
  "influencePayoff": {
    "feeling": "\"I know exactly what's being asked, and I can actually answer that.\"",
    "principle": "People respond more easily to a request they can evaluate. A clear ask lowers the hidden labour of interpreting what you mean, and heads off the vague yes that later curdles into delay or resentment.",
    "gains": [
      "Cleaner answers: yes, no, not now, or a smaller version",
      "Less time lost to back-and-forth clarifying",
      "Fewer hollow yeses that quietly fall through",
      "Faster coordination on both sides",
      "Trust that you won't waste their effort",
      "A reputation for being easy to help"
    ],
    "whyMostFail": [
      "They specify the outcome they want but leave effort, timing and ownership vague.",
      "They call a large request 'quick', so the yes is given on false terms.",
      "They ask for 'feedback' when they actually need a decision or approval.",
      "They add so much detail that the ask becomes harder, not easier, to read.",
      "They drop the opt-out, so precision starts to sound like a command."
    ]
  },
  "fieldTip": {
    "headline": "Find the verb before you ask.",
    "body": "If you can't point to the action verb in your own request, the other person almost certainly can't tell what 'help' means. Naming the verb forces you to work out what you actually need before you hand the problem over.",
    "example": "Weak: \"Can you look at this?\" Strong: \"Could you review the pricing section and send me the one likely objection by Friday?\"",
    "dont": "Don't lead with the vague category ('help', 'thoughts', 'support') and hope they infer the rest.",
    "do": "Name the smallest clear action that would genuinely help, then leave room for no."
  },
  "method": [
    {
      "step": "1",
      "title": "Catch the vague-ask cue",
      "body": "Notice when you're about to reach for a foggy word: 'help', 'thoughts', 'feedback', 'a quick look', 'catch up', 'can we talk?', 'what do you think?'. Each one quietly hands the other person a guessing job.",
      "examples": [
        { "label": "Cue", "text": "\"Can you help with the proposal?\"" }
      ]
    },
    {
      "step": "2",
      "title": "Name the real action",
      "body": "Replace the fog with a verb: review, decide, introduce, confirm, send, choose, test, approve, rewrite, attend, reply, or point me to the owner.",
      "examples": [
        { "label": "Verbs", "text": "review, decide, confirm, introduce, choose" }
      ]
    },
    {
      "step": "3",
      "title": "Name the object and the output",
      "body": "Say exactly what it applies to (the paragraph, proposal, decision, date, risk or behaviour) and exactly what you want back: a yes/no, one concern, a recommendation, a name, a time, a next step.",
      "examples": [
        { "label": "Object + output", "text": "\"the pricing section ... the one objection a client would raise\"" }
      ]
    },
    {
      "step": "4",
      "title": "Set a fair boundary",
      "body": "Add the deadline, time box or scope limit that keeps the request fair, plus an easy opt-out: 'first page only', 'ten minutes', or 'no need if it's not feasible.'",
      "examples": [
        { "label": "Boundary", "text": "\"ten minutes, by Friday, no line edits needed\"" }
      ]
    },
    {
      "step": "5",
      "title": "Say it plainly, once",
      "body": "Put context, action, object, output and boundary into one clean sentence. Don't stack a second hidden request on top or bury the ask in detail.",
      "examples": [
        { "label": "Whole ask", "text": "\"Because I'm sending this Friday, could you spend ten minutes on the pricing section and send me the one likely objection?\"" }
      ]
    },
    {
      "step": "6",
      "title": "Watch, then accept, adjust or release",
      "body": "Read the response. If they answer the exact question, good. If they look wary, delay or give a vague yes, narrow the ask, add context, or release the pressure.",
      "examples": [
        { "label": "Release", "text": "\"No problem if the answer is no. I just wanted the ask to be clear.\"" }
      ]
    }
  ],
  "liveThreadClues": [
    "\"help\"",
    "\"thoughts\"",
    "\"feedback\"",
    "\"support\"",
    "\"a quick look\"",
    "\"catch up\"",
    "\"can we talk?\"",
    "\"what do you think?\""
  ],
  "depthDial": [
    {
      "depth": "Minimum",
      "useWhen": "Low stakes and existing trust",
      "phrase": "Could you review the pricing section and tell me the one confusing bit?"
    },
    {
      "depth": "Full",
      "useWhen": "The ask needs context to feel fair",
      "phrase": "Because I'm sending this Friday, could you review the pricing section and send me the one likely objection by tomorrow?"
    },
    {
      "depth": "Pressure-safe",
      "useWhen": "Hierarchy, strain, or a costly ask",
      "phrase": "Would it be reasonable to ask for a ten-minute read of the pricing section? If not, I can adjust the ask."
    }
  ],
  "commonMistakes": [
    {
      "mistake": "Specific about the task, vague about the deadline",
      "soundsLike": "\"Could you review this? Whenever you get a chance.\"",
      "better": "\"Could you review this and send me the one risk by Thursday?\""
    },
    {
      "mistake": "Calling a large request 'quick'",
      "soundsLike": "\"Just a quick look at the whole deck?\"",
      "better": "\"This is a proper read, maybe an hour. No problem if that's a no.\""
    },
    {
      "mistake": "Asking for 'feedback' when you need a decision",
      "soundsLike": "\"Any thoughts on this?\"",
      "better": "\"Could you approve this, or tell me the one thing blocking approval?\""
    },
    {
      "mistake": "Hiding a second request inside the first",
      "soundsLike": "\"Could you review this? Oh, and redo the intro too.\"",
      "better": "\"Could you review this? I'll ask about the intro separately.\""
    },
    {
      "mistake": "Over-loading the ask with detail",
      "soundsLike": "a paragraph of context before anyone can find the question",
      "better": "one clean sentence: action, object, output, boundary."
    },
    {
      "mistake": "Sounding like a manager when the relationship doesn't support it",
      "soundsLike": "\"I need this on my desk by nine.\"",
      "better": "\"Would it be reasonable to ask for this by nine? Tell me if that's tight.\""
    },
    {
      "mistake": "Treating silence as agreement",
      "soundsLike": "assuming a non-reply means yes",
      "better": "\"I haven't heard back. Is this a yes, a no, or a not-now?\""
    }
  ],
  "recoveryPhrases": [
    "I made that too broad. The specific ask is just this one thing.",
    "I made that sound more urgent than it is.",
    "No need to solve the whole thing. I only need one part.",
    "That ask may be too much. What would be reasonable?",
    "I should have given you the context first.",
    "Let me separate the decision from the background.",
    "I hear the timing doesn't work. I can adjust.",
    "I asked for feedback, but what I actually need is a yes or no on one point."
  ],
  "bestRecoveryLine": "I made that too broad. The specific ask is just this one thing.",
  "chains": [
    {
      "label": "Decision under pressure",
      "sequence": "BLUF -> Specific ask -> Autonomy release",
      "example": [
        "\"Bottom line: I need a decision on the launch date.\"",
        "\"Could you choose to move it or hold it by 3 pm?\"",
        "\"If that timing doesn't work, tell me what does.\""
      ]
    },
    {
      "label": "Listen first, then ask",
      "sequence": "Reflective listening -> Specific ask",
      "example": [
        "\"It sounds like speed matters more than polish right now.\"",
        "\"Could you tell me the one risk that would make you stop the launch?\""
      ]
    },
    {
      "label": "Shrink, then specify",
      "sequence": "Small ask -> Specific ask",
      "example": [
        "\"This is smaller than it looks, just one section.\"",
        "\"Could you read the pricing page and send me the single likeliest objection?\""
      ]
    },
    {
      "label": "Confirm, then ask",
      "sequence": "Summary check -> Specific ask",
      "example": [
        "\"So we agree the timeline holds and only the budget is open.\"",
        "\"Could you tell me the one budget line you'd cut first?\""
      ]
    }
  ],
  "relatedTechniques": [
    {
      "id": "TC013",
      "reason": "Clean request. If they can already understand the ask but may resist it, use Clean request. Use Specific ask when they can't tell what to do."
    },
    {
      "id": "TC019",
      "reason": "Small ask. Ask whether the real problem is size or clarity: size means Small ask, clarity means Specific ask."
    },
    {
      "id": "TC020",
      "reason": "Low-friction ask. If they know exactly what to do but it feels costly, use Low-friction ask to smooth the yes/no path."
    },
    {
      "id": "TC034",
      "reason": "Two-option questions. If you can accept either path, offer two options; if one exact output is needed, make one specific ask."
    },
    {
      "id": "TC044",
      "reason": "BLUF. Put the bottom line first in a long message, then follow it with the specific ask."
    },
    {
      "id": "TC067",
      "reason": "Advice request. TC067 asks for advice specifically; Specific ask can request advice, a decision, a review, a reply or a next step."
    }
  ]
};
