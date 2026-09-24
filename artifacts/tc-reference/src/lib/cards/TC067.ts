import type { CardData } from "../card-types";

export const TC067: CardData = {
  pdfUrl: "cards/TC067/TC067_TwoCard_Combined.pdf",
  resources: [
    { label: "Two-card (combined)", description: "Front and back study cards on one sheet — the designed visual card.", href: "cards/TC067/TC067_TwoCard_Combined.pdf", type: "pdf", group: "Visual Cards" },
    { label: "One-card summary", description: "The whole technique on a single designed card.", href: "cards/TC067/TC067_OneCard.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Quick card", description: "One-page glance card for fast recall.", href: "cards/TC067/TC067_Quick_Card.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Detailed guide", description: "The full written guide with every section.", href: "cards/TC067/TC067_Detailed_Guide.pdf", type: "pdf", group: "Written Guides" },
    { label: "Reference sheet", description: "Dense one-page reference of the key moves.", href: "cards/TC067/TC067_Reference.pdf", type: "pdf", group: "Written Guides" },
    { label: "Phrase bank (CSV)", description: "Every phrase, ready to import or drill.", href: "cards/TC067/TC067_Phrase_Bank.csv", type: "csv", group: "Practice Tools" },
    { label: "Anki flashcards", description: "Import into Anki for spaced-repetition practice.", href: "cards/TC067/TC067_Anki_Flashcards.csv", type: "csv", group: "Practice Tools" },
  ],
  "id": "TC067",
  "whyItWorks":
    "Advice request is the deliberate move of asking someone for a bounded piece of guidance because their experience, judgement, taste, role or perspective could genuinely help. It has five parts: name the specific context, give one true reason their view is useful, ask a single answerable question, make it easy to decline or answer briefly, then listen and take the answer in. It works because you treat the other person as capable and worth learning from without making them responsible for your outcome, so contributing feels voluntary rather than extracted. Their judgement feels seen, the ask is small enough to answer, and the request warms the relationship instead of loading it with obligation.",
  "whatItIsNot": [
    "It is not fishing for validation while pretending to want advice.",
    "It is not outsourcing your judgement or making someone else responsible for your choice.",
    "It is not flattery used as bait for free labour, an introduction, emotional caretaking or an endorsement.",
    "It is not a vague dump such as \"What should I do with my life?\", nor advice shopping until someone confirms the answer you already want.",
    "It is not a disguised action request dressed up as a question when you really want them to do the thing."
  ],
  "overview": {
    "coreFormula": [
      "Context + relevance + one bounded advice question + autonomy release + uptake.",
      "I'm choosing how to open this stakeholder update. You're good at making things clear fast, so what would you lead with?",
      "I'm deciding whether to raise this in the meeting or one-to-one. You've handled similar dynamics, so what would you watch for?",
      "I'm rewriting this message. Could I ask your first impression on the tone? One sentence is enough.",
      "You know this client better than I do. What's one mistake I should avoid on the first call?"
    ],
    "minimumViableMove":
      "Name one specific decision, give a light reason their judgement helps, ask a single answerable question, then stop and let them choose whether and how much to answer.",
    "impact": "Medium",
    "difficulty": "Easy-Medium",
    "misuse":
      "The move fails when you ask too broadly, flatter too hard, or make the person feel responsible for solving the whole problem. Then it stops feeling like respect and starts feeling like a burden, an extraction, or pressure they cannot easily refuse.",
    "bestFor": [
      "Asking mentors, colleagues, friends or experienced peers for a bounded view",
      "Building rapport with someone whose judgement you genuinely respect",
      "Inviting a person to contribute without asking them to take over",
      "Stakeholder conversations where you need judgement before action",
      "Networking messages that should feel respectful rather than extractive",
      "Learning a decision criterion, a pitfall or a first step",
      "Giving status to someone without resorting to generic praise",
      "Turning vague admiration into a practical, specific conversation"
    ]
  },
  "notFor": [
    "You do not plan to listen to or consider the answer",
    "The person is overloaded, grieving, in crisis, under pressure or clearly not available",
    "You need a clean request for action, not advice",
    "You need permission to give advice rather than to ask for it (that is TC027)",
    "The topic needs licensed legal, medical, financial or safety-critical guidance beyond the person's role",
    "You are using a power imbalance to make refusal difficult",
    "The advice would require substantial unpaid labour and you have not offered scope, time, payment or a low-effort path",
    "Physical safety or an immediate emergency takes priority"
  ],
  "phraseBank": [
    {
      "id": "openers",
      "label": "Bounded openers",
      "tag": "General advice request",
      "tone": "Quick",
      "phrases": [
        "Could I ask your advice on one part of this?",
        "What would you look at first here?",
        "What's one thing you'd avoid if you were in my position?",
        "What would you want to know before deciding?",
        "What's the simplest next step you'd test?",
        "What's one factor you'd weigh before deciding?"
      ]
    },
    {
      "id": "relevance",
      "label": "Respectful relevance",
      "tag": "Naming why their view helps",
      "tone": "Warm",
      "phrases": [
        "You've handled this kind of situation before.",
        "You have a good read on this audience.",
        "You tend to spot the risk I miss.",
        "You know the practical side better than I do.",
        "Your judgement on tone is usually sharp.",
        "You've seen how that team actually operates."
      ]
    },
    {
      "id": "professional",
      "label": "Work and decisions",
      "tag": "Meeting, email, stakeholder",
      "tone": "Professional",
      "phrases": [
        "Could I get your advice on the framing before I send this?",
        "What would you prioritise in the first version?",
        "What would make this easier for the team to act on?",
        "Where do you think this is too vague?",
        "What would be the cleanest way to raise this?",
        "Does this land, or am I burying the ask?"
      ]
    },
    {
      "id": "social",
      "label": "Social and personal",
      "tag": "Friends, delicate conversations",
      "tone": "Warm",
      "phrases": [
        "Can I ask your advice on how to approach this conversation?",
        "You know them better than I do. What should I be careful with?",
        "What would be a kind way to bring this up?",
        "What would you do first, if you were trying not to make it weird?",
        "What's one way I could raise this without sounding accusatory?",
        "I'm not asking you to carry the whole thing, just how to start it."
      ]
    },
    {
      "id": "digital",
      "label": "Digital and low-friction",
      "tag": "Text, DM, async",
      "tone": "Quick",
      "phrases": [
        "No need for a long reply. What's your quick instinct?",
        "A one-line reaction would help, if you have it.",
        "Could you mark the one part that feels off?",
        "Reply with the main risk you see, if anything jumps out.",
        "If you have one quick pointer on where to start, I'd appreciate it. No pressure.",
        "Even a thumbs up or a 'nope' on this would help."
      ]
    },
    {
      "id": "senior",
      "label": "Busy or senior person",
      "tag": "Low-burden asks",
      "tone": "High-stakes",
      "phrases": [
        "I know you're stretched, so a quick pointer is enough.",
        "This may be too small for your time. If so, no problem.",
        "Could I ask for a 30-second steer rather than a full review?",
        "What's the one question I should answer before taking this further?",
        "Could I ask what you'd check on this proposal before I send it?",
        "Just the headline of what you'd change is plenty."
      ]
    },
    {
      "id": "uptake",
      "label": "After they answer",
      "tag": "Closing the loop, keeping ownership",
      "tone": "Direct",
      "phrases": [
        "That gives me a clearer first step.",
        "The useful bit I'm taking is to check the expectation first.",
        "I hadn't separated those two risks. Thank you.",
        "I'll try that and keep the scope small.",
        "Thanks. I won't make you own the decision, but this helps.",
        "That's useful. I was only looking at the title, so I'll ask that before I decide."
      ]
    }
  ],
  "decisionTree": [
    {
      "condition": "Do I genuinely want their advice, not validation or rescue?",
      "action": "If no, use appreciation, a clean request or direct disclosure instead of an advice request.",
      "phrase": ""
    },
    {
      "condition": "Is the question narrow enough for a short answer?",
      "action": "If no, shrink it to one decision, risk, first step, phrase, criterion or warning.",
      "phrase": "What's one thing you'd check before I decide?"
    },
    {
      "condition": "Is this the right person, and a fair ask?",
      "action": "If no, do your own groundwork first or ask someone more appropriate.",
      "phrase": ""
    },
    {
      "condition": "Could the ask feel like pressure or unpaid labour?",
      "action": "If yes, add scope, a time limit, payment, reciprocity or an easy decline.",
      "phrase": "A quick instinct is enough, and no pressure if now isn't a good time."
    },
    {
      "condition": "Do I actually need advice, or action?",
      "action": "If action, switch to a clean or specific request rather than dressing it up as advice.",
      "phrase": ""
    },
    {
      "condition": "They've answered. Now what?",
      "action": "Reflect the useful point, thank them specifically, keep ownership of the decision, and close the loop later if the relationship warrants it.",
      "phrase": "The part I'm taking is to check the expectation first. Thank you."
    }
  ],
  "ladder": [
    {
      "weak": "\"Can I pick your brain?\" Vague, extractive and open-ended, so the person cannot tell the size of the request.",
      "better": "\"Could I ask your advice on this client email?\" Clearer, but still does not specify the kind of advice or the effort needed.",
      "best": "\"Could I ask your advice on the opening line of this client email? You know this client well, and a quick instinct is enough.\" Specific scope, real relevance, low effort and an easy out."
    },
    {
      "weak": "\"What should I do?\" Dumps ownership of the decision onto them.",
      "better": "\"What would you do in my situation?\" More personal, but still broad.",
      "best": "\"What's one factor you'd weigh before deciding?\" Asks for judgement without outsourcing the decision."
    },
    {
      "weak": "\"You're a genius at this, so please tell me exactly how to handle it.\" Over-flattery plus a heavy burden.",
      "better": "\"You have good judgement here. What do you think?\" Respectful, but still broad.",
      "best": "\"You have a good read on this audience. What tone would you avoid in the first paragraph?\" Specific, respectful and answerable."
    }
  ],
  "scenarios": [
    {
      "situation": "Workplace mentor",
      "move": "Ask for one lens, not a full review, and accept a brief answer as complete.",
      "phrase": "Could I ask for a 30-second steer on this proposal? What would you check before I send it?"
    },
    {
      "situation": "Peer with practical experience",
      "move": "Ask for a warning, not a solution, since they have hit this before.",
      "phrase": "You ran into this last quarter. What's one trap I should avoid?"
    },
    {
      "situation": "Digital networking with a new contact",
      "move": "Make the scope tiny and explicit, and do not ask for a roadmap or referral.",
      "phrase": "I know this is a small ask from a new contact. If you have one quick pointer on where to start, I'd appreciate it. No pressure."
    },
    {
      "situation": "Friend or personal conversation",
      "move": "Ask without turning the friend into a therapist; release the ask if they seem stretched.",
      "phrase": "Can I ask your advice on how to raise this kindly? I'm not asking you to carry the whole thing."
    },
    {
      "situation": "Conflict or delicate feedback",
      "move": "Ask for one phrasing before the hard conversation rather than the whole plan.",
      "phrase": "What's one way I could bring this up without sounding accusatory?"
    },
    {
      "situation": "After advice is given",
      "move": "Name the specific piece you're taking so they can see it landed.",
      "phrase": "The part I'm taking is to check the expectation before I propose a solution. That's useful."
    }
  ],
  "calibration": {
    "working": [
      "They answer with a concrete pointer instead of asking what you mean.",
      "Their body language or message tone stays relaxed.",
      "They ask one clarifying question out of interest, not confusion.",
      "They give a quick instinct without seeming trapped into a full review.",
      "They extend the conversation voluntarily.",
      "They say things like \"good question\" or \"the thing I'd watch is...\""
    ],
    "adjust": [
      "They ask \"About what, exactly?\" because the request is too broad.",
      "Their answer goes generic: \"It depends.\"",
      "You notice yourself adding context for several minutes, so shrink the ask.",
      "They give a polite answer with no detail, or say they're busy.",
      "They shift into a boundary: \"I can't really advise on that.\"",
      "The topic tips into legal, medical, financial or safety-critical territory, so stop and refer them on.",
      "You're asking the same person repeatedly without reciprocity, so pause.",
      "The ask has become action rather than advice, so switch to a clean request."
    ]
  },
  "drill": [
    {
      "day": "Day 1",
      "title": "Spot the cue",
      "task": "Through the day, catch four moments where someone near you genuinely has relevant judgement (a work decision, a social conversation, a digital message, a busy or senior person). Note each one; ask nothing yet."
    },
    {
      "day": "Day 2",
      "title": "Narrow the target",
      "task": "For each of the four, write the single narrow advice target: one decision, risk, first step, criterion, phrasing or blind spot. Cut anything that would need a whole consultation to answer."
    },
    {
      "day": "Day 3",
      "title": "Name the relevance",
      "task": "For each, write one true, specific reason their judgement helps (\"you've seen how that team operates\"). Delete any line that is really flattery rather than a real reason."
    },
    {
      "day": "Day 4",
      "title": "Build the full ask",
      "task": "Assemble each into the formula: context, relevance, one bounded question, an autonomy release, and a close-loop thanks. Say each version aloud once, and cut any that takes more than 20 seconds to explain."
    },
    {
      "day": "Day 5",
      "title": "Score and sharpen",
      "task": "Rate each version 1 to 5 (1 = vague or burdensome, 3 = clear but still broad, 5 = specific, respectful, low-pressure and answerable). Rewrite anything under 4."
    },
    {
      "day": "Day 6",
      "title": "Use one for real",
      "task": "Take your best-scoring ask into a real conversation. Ask it, then stop talking and leave the silence. Afterwards, note whether they gave a pointer easily or seemed pressured."
    },
    {
      "day": "Day 7",
      "title": "Close the loop",
      "task": "Go back to someone whose advice you used. Name the specific part you took and what you did with it. Notice how naming the useful piece changes the relationship."
    }
  ],
  "checklist": [
    "Do I genuinely want advice, not validation or rescue?",
    "Have I narrowed the question to one part they could answer briefly?",
    "Is my reason for asking them true and specific, rather than flattery?",
    "Did I stop after asking, instead of adding pressure or preamble?",
    "Did I name the useful part and keep ownership of the decision?",
    "Am I using this to learn, not to extract labour, get an endorsement or make refusal awkward?"
  ],
  "example": {
    "without": [
      "Poor, vague and burdensome:",
      "A: \"Can I pick your brain about my career?\"",
      "B: \"Uh, sure. What about it?\"",
      "A: \"I don't know. I just feel stuck. What should I do?\"",
      "B: \"That's a lot. Maybe start by thinking about what you want?\"",
      "A: \"Yeah, but I already tried that.\"",
      "Why it fails: the request is too broad, makes B responsible for A's whole direction, and then resists the first answer."
    ],
    "with": [
      "Better, bounded but still a little heavy:",
      "A: \"Could I ask your advice on whether to apply for the internal role?\"",
      "B: \"Sure. What's the issue?\"",
      "A: \"I'm not sure if it's a stretch or a distraction. What would you consider?\"",
      "B: \"I'd compare the learning curve with your current workload.\"",
      "A: \"That helps.\"",
      "Advanced, specific, respectful and autonomous:",
      "A: \"Could I ask your advice on one part of the internal-role decision? You've seen how that team operates, and a quick instinct is enough.\"",
      "B: \"Sure.\"",
      "A: \"What's one thing you'd check before I apply?\"",
      "B: \"Ask how much of the role is real strategy versus firefighting.\"",
      "A: \"That's useful. I was only looking at the title. I'll ask that before deciding. Thanks, I'll own the call.\"",
      "Why it works: A names real relevance, narrows the question, lowers the effort, listens, and keeps ownership of the decision."
    ],
    "note": "The only thing that changes from poor to advanced is scope, relevance and autonomy, not effort or charm."
  },
  "influencePayoff": {
    "feeling": "\"They respect my judgement, and they're not dumping the whole problem on me.\"",
    "principle": "People become warmer and more receptive when you treat their judgement as worth learning from and leave them free to choose how much to give.",
    "gains": [
      "Their judgement feels seen, not merely their usefulness.",
      "The ask is clear enough to answer without mental sorting work.",
      "They keep the choice, so helping feels voluntary rather than owed.",
      "You get more accurate guidance because the question is narrow.",
      "The relationship warms, because people like contributing where they feel competent.",
      "Later action is easier: you can honestly say \"I tried the first step you suggested.\""
    ],
    "whyMostFail": [
      "They ask too broadly, so the person cannot tell the size of the request.",
      "They over-flatter, and praise curdles into pressure.",
      "They make the person feel responsible for solving the whole problem.",
      "They argue with, or ignore, the very advice they asked for."
    ]
  },
  "fieldTip": {
    "headline": "Ask for the first lens, not the whole answer.",
    "body": "The fastest clean version is one bounded question, and then you stop talking. The pause is part of the respect: it gives the other person room to choose whether, how, and how much to help.",
    "example": "Could I ask your advice on one part of this? What would you look at first?",
    "dont": "Don't stack context for two minutes and then ask \"so what should I do?\"",
    "do": "Do name one specific part, then leave the silence for them to fill."
  },
  "method": [
    {
      "step": "1",
      "title": "Notice the advice-worthy cue",
      "body": "Ask only when the person genuinely has relevant experience, taste, role knowledge, context or judgement. The cue is real relevance, not just that they are nearby or senior."
    },
    {
      "step": "2",
      "title": "Choose a narrow focus",
      "body": "Pick one decision, next step, risk, framing, opening line, priority or blind spot. If you cannot make the request answerable in a single sentence, it is not ready.",
      "examples": [
        { "label": "Broad", "text": "What should I do about my career?" },
        { "label": "Narrow", "text": "What's one thing you'd check before I apply for that role?" }
      ]
    },
    {
      "step": "3",
      "title": "Name the relevance lightly",
      "body": "Give one true reason their view helps, without over-flattering. A single grounded line does more than a compliment.",
      "examples": [
        { "label": "Over-flattery", "text": "You're a genius, you'll know exactly what to do." },
        { "label": "Grounded", "text": "You've handled this kind of client before." }
      ]
    },
    {
      "step": "4",
      "title": "Ask one answerable question",
      "body": "Prefer \"What would you look at first?\" over \"What should I do?\" Ask for a criterion, a warning or a first step, not the whole decision.",
      "examples": [
        { "label": "Outsourcing", "text": "What should I do?" },
        { "label": "Judgement", "text": "What's one factor you'd weigh first?" }
      ]
    },
    {
      "step": "5",
      "title": "Release the pressure",
      "body": "Add an easy out so helping stays voluntary: \"A quick instinct is enough\" or \"No pressure if now isn't a good time.\" If the ask is genuinely large, offer scope, time or payment instead."
    },
    {
      "step": "6",
      "title": "Listen cleanly",
      "body": "Do not argue, defend, over-explain, or fish for a different answer. Take the advice in, and show you understood by reflecting the useful part back."
    },
    {
      "step": "7",
      "title": "Close the loop",
      "body": "Thank them for the specific thing that helped, keep ownership of the decision, and where appropriate report back later. The behavioural target is small: make the other person's judgement easy to offer and easy to withhold."
    }
  ],
  "liveThreadClues": [
    "You're stuck choosing between two options.",
    "The other person has done this exact thing before.",
    "You want a criterion, not a decision made for you.",
    "You catch yourself about to say \"can I pick your brain?\"",
    "One specific part of a task is unclear, rather than the whole thing.",
    "You respect their taste or role knowledge on this particular point."
  ],
  "depthDial": [
    {
      "depth": "Light",
      "useWhen": "You want a fast reaction or a new or busy contact",
      "phrase": "A one-line reaction would help. What jumps out?"
    },
    {
      "depth": "Bounded",
      "useWhen": "You want one criterion, warning or first step",
      "phrase": "What's one thing you'd check before I decide?"
    },
    {
      "depth": "Fuller",
      "useWhen": "Trust is there and a short review is fair to ask",
      "phrase": "Could I get a 30-second steer on the opening line?"
    },
    {
      "depth": "Formal",
      "useWhen": "The ask is real expert labour",
      "phrase": "This is more than a quick question. Could we book proper time for it?"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "The \"pick your brain\" dump",
      "soundsLike": "\"Can I pick your brain sometime?\"",
      "better": "\"Could I ask your advice on one part of this, the opening line?\""
    },
    {
      "mistake": "Over-flattery that becomes pressure",
      "soundsLike": "\"You're the only person who can help me.\"",
      "better": "\"You have a good read on this. What would you watch for?\""
    },
    {
      "mistake": "Advice shopping",
      "soundsLike": "Asking person after person until one agrees with what you already want.",
      "better": "Ask once, take the answer seriously, and keep ownership of the call."
    },
    {
      "mistake": "Hidden action request",
      "soundsLike": "\"What do you think I should do?\" when you really want them to do it.",
      "better": "Name the real ask: \"Could you introduce me?\" or \"Could you review this?\""
    },
    {
      "mistake": "Debating the answer",
      "soundsLike": "\"Yeah, but that won't work because...\" after every suggestion.",
      "better": "\"I hadn't thought of that. Let me sit with it.\""
    },
    {
      "mistake": "No uptake",
      "soundsLike": "Receiving useful advice and giving no sign you took it in.",
      "better": "\"The part I'm taking is to check the expectation first. Thank you.\""
    },
    {
      "mistake": "Expert-labour extraction",
      "soundsLike": "Asking for a full professional review with no scope, time or payment.",
      "better": "\"This is more than a quick ask. Could we book proper time, or narrow it to one point?\""
    }
  ],
  "recoveryPhrases": [
    "That was too big a question. Let me narrow it to one part.",
    "A quick first instinct is enough; I don't need a full answer.",
    "No pressure to answer now. I may have made it sound heavier than I meant.",
    "You don't need to solve it for me. I'm only asking for a pointer.",
    "I can see this is more than a quick question. I should narrow it or book proper time.",
    "I'm noticing I'm defending instead of listening. Let me take in what you said.",
    "I asked for your view and I appreciate it. I'll sit with it before reacting.",
    "Completely fine. Thanks for considering it, and I won't keep pressing."
  ],
  "bestRecoveryLine": "That was too big a question. Let me narrow it to one part: what would you look at first?",
  "chains": [
    {
      "label": "Rapport chain",
      "sequence": "Specific appreciation, then advice request, then status generosity and close-loop thanks",
      "example": [
        "Your read on client tone was useful last time.",
        "Could I ask what you'd watch for here?",
        "That helps. I appreciate the practical lens."
      ]
    },
    {
      "label": "Decision-quality chain",
      "sequence": "Summary check, then advice request, then clean request",
      "example": [
        "Here's where the decision stands: two roles, similar pay, different teams.",
        "What's one criterion you'd weigh first?",
        "Given that, could you approve the revised plan by Friday?"
      ]
    },
    {
      "label": "Professional message chain",
      "sequence": "Contextual opener, then advice request, then low-friction ask",
      "example": [
        "You've seen this client before.",
        "Could I ask for a 30-second steer on the opening line?",
        "A quick mark-up is enough."
      ]
    },
    {
      "label": "Repair chain",
      "sequence": "Recovery phrase, then narrowed advice request, then autonomy release",
      "example": [
        "That was too broad. Let me narrow it.",
        "What's one risk you'd check first?",
        "No pressure if now isn't a good time."
      ]
    }
  ],
  "relatedTechniques": [
    {
      "id": "TC027",
      "reason": "Both are about advice, so direction decides. Asking for their advice is TC067; offering yours, with consent first, is TC027 (Permission-based advice)."
    },
    {
      "id": "TC013",
      "reason": "\"What should I do?\" can hide an action request. If you want guidance, use TC067; if you want a specific action or deliverable, use TC013 (Clean request)."
    },
    {
      "id": "TC015",
      "reason": "Asking for advice can slide into giving it. If your impulse is to fix them, use TC015 (Premature advice restraint); if you genuinely want their view, use TC067."
    },
    {
      "id": "TC022",
      "reason": "An advice request can look like status generosity. If there is a real question, use TC067; if it is pure credit or standing with no ask attached, use TC022 (Status generosity)."
    },
    {
      "id": "TC020",
      "reason": "\"A quick instinct is enough\" is low-friction wording. If the central move is asking for advice, use TC067; if it is removing effort from any request, use TC020 (Low-friction ask)."
    },
    {
      "id": "TC018",
      "reason": "\"You're good at this\" may be appreciation or a setup. If it ends in an advice question, use TC067; if it ends in acknowledgement, use TC018 (Specific appreciation)."
    }
  ]
};
