import type { CardData } from "../card-types";

export const TC057: CardData = {
  pdfUrl: "cards/TC057/TC057_TwoCard_Combined.pdf",
  resources: [
    { label: "Two-card (combined)", description: "Front and back study cards on one sheet — the designed visual card.", href: "cards/TC057/TC057_TwoCard_Combined.pdf", type: "pdf", group: "Visual Cards" },
    { label: "One-card summary", description: "The whole technique on a single designed card.", href: "cards/TC057/TC057_OneCard.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Quick card", description: "One-page glance card for fast recall.", href: "cards/TC057/TC057_Quick_Card.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Detailed guide", description: "The full written guide with every section.", href: "cards/TC057/TC057_Detailed_Guide.pdf", type: "pdf", group: "Written Guides" },
    { label: "Reference sheet", description: "Dense one-page reference of the key moves.", href: "cards/TC057/TC057_Reference.pdf", type: "pdf", group: "Written Guides" },
    { label: "Phrase bank (CSV)", description: "Every phrase, ready to import or drill.", href: "cards/TC057/TC057_Phrase_Bank.csv", type: "csv", group: "Practice Tools" },
    { label: "Anki flashcards", description: "Import into Anki for spaced-repetition practice.", href: "cards/TC057/TC057_Anki_Flashcards.csv", type: "csv", group: "Practice Tools" },
  ],
  "id": "TC057",
  "whyItWorks":
    "Shared identity language is the disciplined use of accurate \"we\", \"us\", \"our\", or same-side wording. You notice a legitimate overlap — a shared role, team, craft, value, problem, place, learning curve, constraint, goal, or standard — and name it to reduce distance while keeping the difference intact. It works by shifting the perceived position from \"you versus me\" to \"we are addressing something together\", which is especially useful when people agree on the outcome but are tense about method, timing, status, or language. The move is not to manufacture sameness; it is to name a real overlap that is true, uncornering, and leaves the other person's choice untouched.",
  "whatItIsNot": [
    "\"People like us do this\" used as pressure.",
    "\"We all agree\" when agreement does not actually exist.",
    "\"As your friend\" when the relationship is not close enough to carry it.",
    "Using \"we\" to hide personal responsibility — \"we made a mistake\" when only you did.",
    "Attaching identity labels the other person has not accepted."
  ],
  "overview": {
    "coreFormula": [
      "Shared anchor + difference-respect + next cooperative move.",
      "\"As [accurate shared role/goal], we both care about [outcome]. I know we may differ on [route/timing]. Could we [next small step]?\"",
      "Short form: \"We both care about [X]. We may differ on [Y]. Let's [next step].\"",
      "Minimum viable: \"We're trying to protect the same thing from different angles.\"",
      "High-safety: \"I may be over-reading the common ground, but it seems we both care about [X]. Does that fit?\""
    ],
    "minimumViableMove":
      "Name one small, true \"we\": \"We both care about [shared outcome], even if we see the route differently.\"",
    "impact": "Medium",
    "difficulty": "Medium",
    "misuse":
      "Reaching for \"we\" too early, too broadly, or too strategically — so the other person feels recruited or pressured rather than respected.",
    "bestFor": [
      "Team discussions where people share an outcome but differ on process.",
      "Social conversations where a light shared category can create ease.",
      "Conflict repair when both people still care about respect or the relationship.",
      "Stakeholder conversations where common purpose is being lost in the detail.",
      "Cross-functional work where each side feels the other does not understand its constraints.",
      "Community, family, or friend contexts where a real shared history can be named gently."
    ]
  },
  "notFor": [
    "The shared identity is not true, or you are only assuming it.",
    "The other person is trying to establish a boundary.",
    "The phrase would land as forced intimacy.",
    "There is a significant power imbalance and \"we\" could mask pressure.",
    "You are tempted to use identity as leverage: \"If you were really one of us...\"",
    "The other person has explicitly rejected the label or the group frame.",
    "Physical safety or an immediate emergency takes priority over rapport."
  ],
  "phraseBank": [
    {
      "id": "quick-openers",
      "label": "Quick same-side openers",
      "tag": "Short one-liners",
      "tone": "Quick",
      "phrases": [
        "Same side here.",
        "We both want this to work.",
        "I think we're after the same thing.",
        "Same goal, different route.",
        "We're on the same team on this one.",
        "I don't think we're actually opposed here.",
        "We both care about getting this right."
      ]
    },
    {
      "id": "social-rapport",
      "label": "Social / rapport",
      "tag": "Warm, low-pressure",
      "tone": "Warm",
      "phrases": [
        "We're both trying to make this less awkward, I think.",
        "As two people who care about keeping this friendly, can we reset?",
        "We both know this group can get intense; I'd like to keep it easy.",
        "We've both been through that version of the learning curve.",
        "We both want to leave this feeling good about it.",
        "I reckon we both value this more than being right.",
        "We're both a bit out of our depth here, and that's fine.",
        "We both showed up wanting the same kind of evening, I think."
      ]
    },
    {
      "id": "work-handoffs",
      "label": "Work / handoffs",
      "tag": "Meetings and delivery",
      "tone": "Professional",
      "phrases": [
        "We're on the same side of wanting a clean handoff.",
        "As the people responsible for the customer experience, we both have a stake in this.",
        "We're protecting different risks, but the outcome is shared.",
        "Our shared standard is a decision people can actually execute.",
        "We both own how this lands, even if we came at it differently.",
        "As the two closest to this, we're best placed to get it right.",
        "We both want a version that survives contact with real users.",
        "Same brief on my end: something the team can ship without rework."
      ]
    },
    {
      "id": "conflict-same-side",
      "label": "Conflict / same-side",
      "tag": "De-escalation",
      "tone": "Repair",
      "phrases": [
        "I don't think we're enemies here; I think we're protecting different concerns.",
        "We both seem to want respect in this conversation. Let me slow down.",
        "Same-side note: I want the decision to work, not just my version to win.",
        "We both care enough to be direct. Let's make the directness useful.",
        "I'd rather we solved this together than scored points off each other.",
        "We're both frustrated, and I don't think it's actually with each other.",
        "I don't want to win this and lose the working relationship.",
        "We both want out of this loop. Let's find the exit together."
      ]
    },
    {
      "id": "high-pressure",
      "label": "High-pressure / time",
      "tag": "Deadline and stakes",
      "tone": "High-stakes",
      "phrases": [
        "We share the need to move quickly without creating a bigger cleanup.",
        "We're both under time pressure, so let's separate facts from guesses.",
        "The shared goal is a safe decision with the information we have.",
        "We both need the next step to be executable today.",
        "We're both trying to avoid the same mess here.",
        "Neither of us wants to be back here next week redoing this.",
        "We both want to move fast; let's make sure it's the right fast."
      ]
    },
    {
      "id": "boundary-safe",
      "label": "Boundary-safe / optionality",
      "tag": "Invites correction",
      "tone": "Direct",
      "phrases": [
        "I don't want to overstate the common ground, but I think we both care about this.",
        "Correct me if this doesn't fit: the shared concern seems to be quality.",
        "I'm not asking you to agree with me; I'm naming the part that seems shared.",
        "Tell me if I'm over-reading it, but it sounds like we want the same outcome.",
        "You don't have to accept the framing — does the underlying goal fit, though?",
        "If \"we\" is too strong, say so; I only mean we both want this settled.",
        "Does that shared goal fit, or am I reaching?"
      ]
    },
    {
      "id": "digital-text",
      "label": "Digital / text",
      "tag": "Threads and chat",
      "tone": "Quick",
      "phrases": [
        "We may be typing past each other. I think we both want the same end state.",
        "Same goal on my end: clear next steps and no surprise rework.",
        "I read us as aligned on the problem, split on the fix.",
        "For the group: our shared priority seems to be speed without avoidable mess.",
        "Reading back, I think we agree on the what and differ on the how.",
        "Genuine question, not a gotcha: are we actually after different things here?"
      ]
    }
  ],
  "decisionTree": [
    {
      "condition": "You don't have a real shared anchor yet",
      "action": "Discover common ground first; don't manufacture a \"we\".",
      "phrase": "What matters most to you in how this turns out?"
    },
    {
      "condition": "The anchor is real but might feel assumed or loaded",
      "action": "Use a softer outcome frame and invite correction.",
      "phrase": "Tell me if this doesn't fit — it seems like we both want [X]."
    },
    {
      "condition": "They're resisting or setting a boundary",
      "action": "Don't use shared-identity language; validate and respect the boundary.",
      "phrase": "Fair enough — I'll speak only for myself here."
    },
    {
      "condition": "The moment is tense",
      "action": "Use a short same-side phrase plus a difference-respecting clause.",
      "phrase": "We're not enemies here; we're protecting different concerns."
    },
    {
      "condition": "They only partly accept the frame",
      "action": "Ask for correction before you build on it.",
      "phrase": "Does that shared goal fit, or am I over-reading it?"
    },
    {
      "condition": "They accept the frame",
      "action": "Move to a concrete next step that fits the need — ask, summary, choice, or repair.",
      "phrase": "Good — could we agree the owner and the next step now?"
    }
  ],
  "ladder": [
    {
      "weak": "\"Come on, we're all team players here.\" Uses identity as pressure and implies dissent is disloyalty.",
      "better": "\"I know we all want the launch to go well, even though we're split on timing.\"",
      "best": "\"We're both protecting the launch from different risks — you're protecting customer trust, I'm protecting schedule exposure. Could we compare the smallest release that protects both?\""
    },
    {
      "weak": "\"As friends, you should understand.\"",
      "better": "\"Because we care about the friendship, I want to say this cleanly.\"",
      "best": "\"I value the friendship, and I don't want this to turn into hidden resentment. Can I name what felt off and hear your read too?\""
    },
    {
      "weak": "\"People like us don't complain.\"",
      "better": "\"We both care about handling this constructively.\"",
      "best": "\"We both seem to care about being constructive — and that includes naming what isn't working without making it personal.\""
    }
  ],
  "scenarios": [
    {
      "situation": "Team disagreement",
      "move": "Name the shared outcome and keep both risks legitimate; don't use unity to end the debate.",
      "phrase": "We're protecting different risks, but we share the goal of a decision people can execute."
    },
    {
      "situation": "Friend tension",
      "move": "Anchor on the relationship as the reason to speak, not as leverage.",
      "phrase": "Because we both care about the friendship, I'd rather name this than let it go weird."
    },
    {
      "situation": "Client conversation",
      "move": "Point at their outcome first, then own your specific concern.",
      "phrase": "We both want this to land well with your stakeholders. My concern is the handoff risk."
    },
    {
      "situation": "Online discussion",
      "move": "Separate agreement on the problem from disagreement on the fix.",
      "phrase": "I think we're aligned on the problem and split on the fix."
    },
    {
      "situation": "Family logistics",
      "move": "Name the shared want, then move to one concrete decision.",
      "phrase": "We all want the day to be easier, not more tense. Could we settle the pickup plan first?"
    },
    {
      "situation": "Leadership pressure",
      "move": "Use shared accountability to hold two needs at once, not to demand compliance.",
      "phrase": "As the people accountable for this, we need both speed and a rollback path."
    }
  ],
  "calibration": {
    "working": [
      "They soften or slow down.",
      "They add detail to the shared goal.",
      "They correct the wording but stay engaged.",
      "They say \"yes, exactly\" or \"that's the part I mean.\"",
      "The conversation shifts from blame to problem-solving.",
      "They start using \"we\" back to you."
    ],
    "adjust": [
      "They look sceptical or say the shared frame is too broad — narrow it or drop the label.",
      "They resist the identity label but accept the outcome — keep the outcome, lose the label.",
      "They answer with \"maybe\" or \"I guess\" without energy — check the frame actually fits.",
      "The phrase sounds too polished for the relationship — say it plainer.",
      "Stop if they say the identity doesn't fit.",
      "Stop if they're setting a boundary or accuse you of pressuring them.",
      "Stop if the moment needs accountability rather than unity language.",
      "Ask: \"Does that shared goal fit, or am I over-reading it?\""
    ]
  },
  "drill": [
    {
      "day": "Day 1",
      "title": "Spot the anchor",
      "task": "For five recent disagreements, write one true shared anchor for each — a goal, standard, concern, or constraint. Name nothing you can't actually point to."
    },
    {
      "day": "Day 2",
      "title": "Build the sentence",
      "task": "Take three of those anchors and write the full formula for each: \"We both care about [X]. We may differ on [Y]. Could we [next step]?\""
    },
    {
      "day": "Day 3",
      "title": "Add optionality",
      "task": "Rewrite each sentence with one optionality marker — \"I may be over-reading this, but...\" or \"Correct me if this doesn't fit...\" — so the frame stays an invitation, not a claim."
    },
    {
      "day": "Day 4",
      "title": "Say it plain",
      "task": "Read each line aloud in a normal voice. Cut anything that sounds like corporate unity, forced intimacy, or pressure. Shorten to the smallest true \"we\"."
    },
    {
      "day": "Day 5",
      "title": "Practise recovery",
      "task": "Have someone (or yourself) reply \"Don't say we.\" Answer with a recovery line that drops the frame, keeps respect, and returns to the concrete issue."
    },
    {
      "day": "Day 6",
      "title": "Use it once, low-stakes",
      "task": "In a real but low-stakes conversation, use one same-side sentence and watch whether they soften, correct, or resist. Note which happened."
    },
    {
      "day": "Day 7",
      "title": "Use it under tension",
      "task": "In a genuinely tense conversation, name the smallest true anchor, add a difference-respecting clause, then offer one concrete next step. Afterwards, note where \"we\" eased things and where it risked sounding like pressure."
    }
  ],
  "checklist": [
    "Was the shared identity or goal actually true?",
    "Did I avoid speaking for the other person too strongly?",
    "Did I leave room for disagreement?",
    "Did I follow the shared frame with a concrete next step?",
    "Did I avoid using \"we\" to hide my own responsibility?",
    "Would the phrase still feel respectful if they repeated it back to me?"
  ],
  "example": {
    "without": [
      "A: \"I don't think this plan is ready.\"",
      "B: \"We're all professionals here, so we need to get on board.\"",
      "A: \"That's exactly the problem. You're shutting down the concern.\"",
      "Why it's weak: B uses shared identity as compliance pressure, so \"we\" becomes a demand to fall in line rather than an invitation."
    ],
    "with": [
      "A: \"This feels like another rushed decision.\"",
      "B: \"That's fair to name. I don't want us to become the kind of team that mistakes speed for clarity — and I don't want us stuck waiting for perfect information either. Could we agree what a good-enough decision looks like, then check whether this meets it?\"",
      "A: \"Yes. For me, good enough means owner, deadline, and rollback path.\"",
      "B: \"Good. Same side: executable and reversible. Let's build those in.\"",
      "Why it works: B names a true shared standard, keeps the disagreement legitimate, and converts the shared frame into a concrete decision path."
    ],
    "note":
      "The shift is from \"we\" as pressure to \"we\" as a shared standard both people can actually hold."
  },
  "influencePayoff": {
    "feeling": "\"They're standing with me on this, even where we disagree.\"",
    "principle":
      "When people feel accurately included, they are more likely to listen, clarify, repair, and collaborate.",
    "gains": [
      "Reduces threat by showing same-side intent.",
      "Lowers status distance without overfamiliarity.",
      "Turns disagreement from personal opposition into joint problem-solving.",
      "Makes the next request feel like coordination rather than pressure.",
      "Gives people a dignity-preserving way to rejoin the conversation after tension.",
      "Opens the relational container while both views stay intact."
    ],
    "whyMostFail": [
      "They reach for \"we\" too early, before listening or earning the overlap.",
      "They claim a shared identity the other person hasn't accepted.",
      "They use \"we\" strategically, so it feels like recruitment rather than respect.",
      "They forget the next step, leaving a warm but vague sentence."
    ]
  },
  "fieldTip": {
    "headline": "Use the smallest true \"we.\"",
    "body":
      "Don't say \"we all agree\" when you only share a concern. Don't say \"we're the same\" when you only share a goal. The safest shared-identity language is modest, concrete, and difference-friendly. If they accept it, move to the next cooperative step. If they resist it, release the frame immediately.",
    "example": "\"We both care about [X], even if we see [Y] differently.\" That sentence is usually enough.",
    "dont": "\"We're all on the same page here.\" (when you're not)",
    "do": "\"We both want the handoff to be clean — even if we'd sequence it differently.\""
  },
  "method": [
    {
      "step": "1",
      "title": "Perception",
      "body":
        "Notice a real overlap before you speak. Look for a shared goal, pressure, role, standard, concern, constraint, or relationship. If you can't point to something genuinely shared, don't manufacture it — discover it first.",
      "examples": [
        { "label": "Ask yourself", "text": "What do we both actually want out of this?" }
      ]
    },
    {
      "step": "2",
      "title": "Move",
      "body":
        "Name the overlap modestly. Avoid grand claims and identity labels that may not fit. The smallest true \"we\" is the strongest one, because it's the hardest to argue with.",
      "examples": [
        { "label": "Modest", "text": "We both want a decision people can execute." },
        { "label": "Overreaching", "text": "We're basically the same on all of this." }
      ]
    },
    {
      "step": "3",
      "title": "Phrase",
      "body":
        "Say a same-side sentence that leaves room for difference: name the shared anchor, then add a clause that keeps the disagreement legitimate.",
      "examples": [
        { "label": "Shared + difference", "text": "We both want this to hold up — you're worried about quality, I'm worried about delay." }
      ]
    },
    {
      "step": "4",
      "title": "Calibration",
      "body":
        "Watch whether they soften, clarify, correct, or resist. Correcting the wording while staying engaged is a good sign. Resisting the label itself is a signal to ease off and keep only the outcome.",
      "examples": [
        { "label": "Check", "text": "Does that shared goal fit, or am I over-reading it?" }
      ]
    },
    {
      "step": "5",
      "title": "Recovery",
      "body":
        "If the frame misses, step back and make it optional. Drop the label, keep the respect, and return to the concrete issue — don't defend the \"we\".",
      "examples": [
        { "label": "Release", "text": "I may have overstated the 'we'. Let me speak for myself." }
      ]
    },
    {
      "step": "6",
      "title": "Chain",
      "body":
        "Follow the shared frame with a clean request, a summary check, a two-option question, or validation without agreement. The frame opens the door; the next move walks through it.",
      "examples": [
        { "label": "Full move", "text": "We both seem to care about getting this right for the customer. You're focused on reliability; I'm focused on timing. Can we map the smallest version that protects both?" }
      ]
    }
  ],
  "liveThreadClues": [
    "\"I just want this to work too.\"",
    "\"It's not that I disagree with the goal...\"",
    "\"We keep going in circles on this.\"",
    "\"I don't want a fight either.\"",
    "\"We're both stuck on the same thing.\"",
    "\"I care about the outcome, I just...\""
  ],
  "commonMistakes": [
    {
      "mistake": "Using \"we\" before listening.",
      "soundsLike": "\"We all know the real answer here.\"",
      "better": "\"Help me understand your read first — then let's see what we actually share.\""
    },
    {
      "mistake": "Claiming an identity they haven't accepted.",
      "soundsLike": "\"As one of us, you'll get this.\"",
      "better": "\"We both seem to care about X — tell me if that doesn't fit.\""
    },
    {
      "mistake": "Treating disagreement as betrayal of the group.",
      "soundsLike": "\"If we're really a team, you'd back this.\"",
      "better": "\"We can want the same outcome and still disagree on how.\""
    },
    {
      "mistake": "Fake corporate or family language.",
      "soundsLike": "\"We're one big family here.\"",
      "better": "\"We're the two people accountable for this handoff.\""
    },
    {
      "mistake": "Using \"we\" to dodge responsibility.",
      "soundsLike": "\"We made a mistake.\" (when only you did)",
      "better": "\"I got that wrong. Here's how I'll fix it.\""
    },
    {
      "mistake": "Forgetting the next step.",
      "soundsLike": "A warm, vague \"we're all aligned\" and nothing more.",
      "better": "\"...so could we agree the owner and deadline now?\""
    }
  ],
  "recoveryPhrases": [
    "I may have overstated the \"we\" there. Let me put it more simply.",
    "I'm not trying to recruit you into my view — I just think we share a concern about this.",
    "That label might not fit for you. The concrete point is [X].",
    "Fair correction. I shouldn't assume we see that identity the same way.",
    "Let me take the pressure out of that: you don't have to agree with the frame.",
    "I used \"we\" too broadly. I'll speak for myself: I care about [X].",
    "I don't want shared language to blur responsibility. This part is mine.",
    "Let's drop the label and stay with the decision."
  ],
  "bestRecoveryLine": "I may have overstated the \"we\" there. Let me speak for myself.",
  "chains": [
    {
      "label": "Warm opening into a clean request",
      "sequence": "Warm opening → Shared identity language → Clean request",
      "example": [
        "\"Good to see you. We both want this to be easy to act on. Could you send the final version by Thursday?\""
      ]
    },
    {
      "label": "Reflective listening into a choice",
      "sequence": "Reflective listening → Shared identity language → Two-option question",
      "example": [
        "\"You're worried the timeline hides quality risk. We're both trying to protect the launch. Should we tighten scope or add a checkpoint?\""
      ]
    },
    {
      "label": "Validation without agreement into a summary check",
      "sequence": "Validation without agreement → Shared identity language → Summary check",
      "example": [
        "\"I can see why that feels rushed. I don't think we're opposed on the outcome. Did I get the risk right?\""
      ]
    },
    {
      "label": "Pause into repair",
      "sequence": "Strategic pause → Shared identity language → Recovery phrase",
      "example": [
        "After a short pause: \"I want to keep us on the same side of solving it — I may have said that too strongly.\""
      ]
    }
  ],
  "relatedTechniques": [
    {
      "id": "TC054",
      "reason": "Similarity signalling flags a specific overlap (taste, background, experience). Use TC057 when the overlap is a shared identity or same-side goal; use TC054 when it's a point of similarity."
    },
    {
      "id": "TC039",
      "reason": "Common-ground discovery finds the overlap through questions. Use TC039 when the shared ground isn't known yet; use TC057 once you can accurately name it — discovery versus declaration."
    },
    {
      "id": "TC017",
      "reason": "Values-based framing frames a choice around a value (fairness, craft, safety). Use TC057 when the sentence starts with \"we both\" or \"as fellow\"; use TC017 when it starts with \"the value here is\"."
    },
    {
      "id": "TC022",
      "reason": "Status generosity elevates the other person's judgement or effort. Use TC022 to give credit or respect; use TC057 to name mutual belonging or shared purpose."
    },
    {
      "id": "TC018",
      "reason": "Specific appreciation praises a concrete action. Use TC018 when the sentence says \"I appreciate X\"; use TC057 when it says \"we both care about X\"."
    },
    {
      "id": "TC060",
      "reason": "Positive assumption assumes good intent when motive is unclear. Use TC060 when motive is the issue; use TC057 when relational position — same side or not — is the issue."
    }
  ]
};
