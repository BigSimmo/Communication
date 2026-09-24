import type { CardData } from "../card-types";

export const TC018: CardData = {
  pdfUrl: "cards/TC018/TC018_TwoCard_Combined.pdf",
  resources: [
    { label: "Two-card (combined)", description: "Front and back study cards on one sheet — the designed visual card.", href: "cards/TC018/TC018_TwoCard_Combined.pdf", type: "pdf", group: "Visual Cards" },
    { label: "One-card summary", description: "The whole technique on a single designed card.", href: "cards/TC018/TC018_OneCard.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Quick card", description: "One-page glance card for fast recall.", href: "cards/TC018/TC018_Quick_Card.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Detailed guide", description: "The full written guide with every section.", href: "cards/TC018/TC018_Detailed_Guide.pdf", type: "pdf", group: "Written Guides" },
    { label: "Reference sheet", description: "Dense one-page reference of the key moves.", href: "cards/TC018/TC018_Reference.pdf", type: "pdf", group: "Written Guides" },
    { label: "Phrase bank (CSV)", description: "Every phrase, ready to import or drill.", href: "cards/TC018/TC018_Phrase_Bank.csv", type: "csv", group: "Practice Tools" },
    { label: "Anki flashcards", description: "Import into Anki for spaced-repetition practice.", href: "cards/TC018/TC018_Anki_Flashcards.csv", type: "csv", group: "Practice Tools" },
  ],
  "id": "TC018",
  "whyItWorks": "Specific appreciation is one small move: name a particular behaviour, effort, judgement or quality the person showed, and the effect it had, so they know exactly what landed and why it mattered. It works because people trust praise they can verify. A vague \"you're amazing\" gives them nothing to hold on to and can read as flattery; naming the evidence makes the appreciation believable, lowers defensiveness, and quietly reinforces the behaviour you'd like to see again.",
  "whatItIsNot": [
    "It is not flattery, generic praise, or vague \"you're amazing\" language with no evidence behind it.",
    "It is not love-bombing or status manipulation dressed up as warmth.",
    "It is not a script to force intimacy, or a shortcut around consent and context.",
    "It is not a diagnostic label, a dominance move, or a lead-in to a hidden ask."
  ],
  "overview": {
    "coreFormula": [
      "Name the specific action -> name the positive effect -> keep it proportionate -> stop before it becomes flattery.",
      "\"I appreciated how you grouped the actions; it saved everyone re-reading the thread.\"",
      "\"Thanks for chasing the supplier twice; it's the reason we didn't slip the deadline.\"",
      "\"The way you let the customer finish before answering is why they calmed down.\""
    ],
    "minimumViableMove": "Name one specific thing the person did and the effect it had, in a single plain sentence: \"I appreciated X because it helped Y.\"",
    "impact": "High",
    "difficulty": "Easy-Medium",
    "misuse": "It fails when it becomes a tactic to soften a hidden ask, gets delivered mechanically like a technique, or tips into flattery the person can't verify, so they stop believing it.",
    "bestFor": [
      "Thanking colleagues for work that could easily go unseen",
      "Strengthening a relationship without resorting to flattery",
      "Reinforcing a helpful behaviour you'd like repeated",
      "Acknowledging good judgement or a quiet save",
      "Recognising support someone gave you",
      "Making appreciation land accurately rather than vaguely"
    ]
  },
  "notFor": [
    "Praise would embarrass the person in public",
    "The appreciation is really there to soften a hidden ask",
    "You don't actually mean it",
    "Being specific would expose confidential detail",
    "Physical safety or an immediate emergency takes priority"
  ],
  "phraseBank": [
    {
      "id": "quick",
      "label": "Quick",
      "tag": "Everyday one-liners",
      "tone": "Quick",
      "phrases": [
        "That bit where you flagged the risk early was really helpful.",
        "Thanks for catching that; it saved us a step.",
        "The way you laid that out made it easy to follow.",
        "Good call on the order of those points.",
        "That was a clean summary; cheers.",
        "Nicely handled, you kept it moving.",
        "That one detail you added made the difference."
      ]
    },
    {
      "id": "warm",
      "label": "Warm",
      "tag": "Personal and relational",
      "tone": "Warm",
      "phrases": [
        "I noticed how patiently you talked them through it, and it mattered.",
        "The way you checked in on me last week stuck with me.",
        "You didn't have to stay back and help, and it made a real difference.",
        "I appreciate how steady you were while everyone else was rattled.",
        "That was generous; you gave them your full attention.",
        "You made a hard conversation feel easy, so thank you.",
        "The care you put into that really showed."
      ]
    },
    {
      "id": "professional",
      "label": "Professional",
      "tag": "Work, meetings and colleagues",
      "tone": "Professional",
      "phrases": [
        "I appreciated how you grouped the actions; it saved everyone re-reading the thread.",
        "The way you clarified the plan at the end meant we all left knowing the next step.",
        "You handled that client question well; naming the trade-off kept it honest.",
        "Good structure on the deck, decisions first and detail second.",
        "You spotted the gap in the timeline before it cost us; that was sharp.",
        "Thanks for running that meeting to time; it respected everyone's day.",
        "The way you documented that decision will save the next person a lot of guessing."
      ]
    },
    {
      "id": "specific-effect",
      "label": "Naming the effect",
      "tag": "Point at what specifically helped",
      "tone": "Direct",
      "phrases": [
        "Here's the concrete thing that helped: you made the next step clear.",
        "One specific bit, your timing on that email stopped it escalating.",
        "The useful part was the example you gave; it made it land.",
        "What worked was that you named the real problem, not the symptom.",
        "To be exact: grouping the questions at the end saved us a second call.",
        "The thing that mattered was you followed up without being asked."
      ]
    },
    {
      "id": "digital",
      "label": "Digital / text",
      "tag": "One clean line",
      "tone": "Quick",
      "phrases": [
        "Just want to name it: the way you framed that message was spot on.",
        "That reply was clear and kind; good balance.",
        "Thanks for the tidy handover notes; I picked it up in minutes.",
        "Your one-line summary at the top saved me scrolling; appreciated.",
        "Quick note, the checklist you added is going to help everyone."
      ]
    },
    {
      "id": "guarded",
      "label": "Guarded / high-status",
      "tag": "Optional and low-pressure",
      "tone": "High-stakes",
      "phrases": [
        "I'll keep this brief because I know you'd rather not make a thing of it: that was well judged.",
        "No need to respond, I just wanted you to know the fix you pushed held up.",
        "Quietly, the way you defused that meeting took real skill.",
        "I won't labour it, but calling that risk early was the right move.",
        "If it's useful to hear, you read that room better than anyone."
      ]
    },
    {
      "id": "repair",
      "label": "Repair",
      "tag": "When it misses",
      "tone": "Repair",
      "phrases": [
        "I may have read that wrong; what actually helped from your side?",
        "Let me put that more simply.",
        "That came out more polished than I meant; I just wanted to say thanks.",
        "No need to make anything of it if it isn't useful.",
        "I jumped ahead there; what I meant was the specific bit that helped.",
        "Tell me the more accurate way to say it."
      ]
    }
  ],
  "decisionTree": [
    {
      "condition": "They're still speaking",
      "action": "Wait; don't interrupt to praise. Hold the appreciation until they finish.",
      "phrase": ""
    },
    {
      "condition": "You're not sure what actually helped",
      "action": "Use a checking version instead of asserting.",
      "phrase": "What was the part you were most trying to get right?"
    },
    {
      "condition": "They seem to be resisting or bracing",
      "action": "Validate the concern before appreciating anything.",
      "phrase": "I know that was a slog, and the way you kept it moving mattered."
    },
    {
      "condition": "They might read praise as the set-up for an ask",
      "action": "Name it as standalone and make no request.",
      "phrase": "No ask attached; I just wanted to name it."
    },
    {
      "condition": "The move landed and increased ease",
      "action": "Continue naturally; don't over-egg it.",
      "phrase": "That's all, carry on."
    },
    {
      "condition": "The move reduced ease or missed",
      "action": "Repair or release it.",
      "phrase": "I may have read that wrong; what actually helped from your side?"
    }
  ],
  "ladder": [
    {
      "weak": "You're amazing.",
      "better": "I appreciated the way you clarified the plan at the end.",
      "best": "I appreciated the way you clarified the plan at the end; it meant everyone left knowing their next action without another meeting."
    },
    {
      "weak": "Great job today.",
      "better": "Thanks for chasing the supplier.",
      "best": "Thanks for chasing the supplier twice; it's the reason we didn't slip the deadline."
    },
    {
      "weak": "You're so good with people.",
      "better": "You handled that upset customer well.",
      "best": "The way you let that customer finish before answering is why they calmed down."
    }
  ],
  "scenarios": [
    {
      "situation": "Social conversation",
      "move": "Keep it warm and brief; name one specific thing, then move on.",
      "phrase": "That story you told earlier really landed; you read the room perfectly."
    },
    {
      "situation": "Professional discussion",
      "move": "Name the action and its effect clearly, tied to the work.",
      "phrase": "Grouping the actions at the top of the notes saved everyone re-reading the thread."
    },
    {
      "situation": "Digital message",
      "move": "Write one clean sentence and avoid overexplaining.",
      "phrase": "Your one-line summary at the top saved me scrolling; thank you."
    },
    {
      "situation": "Conflict or objection",
      "move": "Validate or summarise before you appreciate anything.",
      "phrase": "I know that wasn't easy to raise, and you raised it cleanly."
    },
    {
      "situation": "High-status or guarded person",
      "move": "Make the move optional and low-pressure.",
      "phrase": "No need to respond; the call you made on timing was the right one."
    },
    {
      "situation": "Close relationship",
      "move": "Drop the technique feel and use ordinary language.",
      "phrase": "You didn't have to do that, and it made my week easier."
    }
  ],
  "calibration": {
    "working": [
      "They give you more detail or context.",
      "They relax; tone softens and pace eases.",
      "They correct you easily, without defensiveness.",
      "They say \"yes\", \"that's it\", or \"exactly\".",
      "They offer a next step or build on it.",
      "They stay engaged rather than closing the topic."
    ],
    "adjust": [
      "Answers get shorter or more clipped.",
      "You see visible tension or a forced smile.",
      "They correct you but don't engage with it.",
      "They change the subject or go quiet.",
      "Sarcasm creeps in.",
      "It starts to feel about your performance rather than their effort; shorten it, drop it, or repair."
    ]
  },
  "drill": [
    {
      "day": "Day 1",
      "title": "Spot the cues",
      "task": "Across today, note five moments where someone did something specific worth appreciating: effort, good judgement, or a quiet save. Just notice; don't act on them yet."
    },
    {
      "day": "Day 2",
      "title": "Name action and effect",
      "task": "Take those five moments and write each as \"I appreciated X because it helped Y.\" Cut anything vague, and make sure each names a real behaviour and a real effect."
    },
    {
      "day": "Day 3",
      "title": "Say it like you",
      "task": "Read each line aloud until it sounds like you rather than a script. Bin any that sound polished, corporate or performative."
    },
    {
      "day": "Day 4",
      "title": "Use one live",
      "task": "In a real conversation, deliver one specific appreciation. Keep it to a single sentence, then stop and let it sit."
    },
    {
      "day": "Day 5",
      "title": "Calibrate",
      "task": "Use it twice more today and watch the response. Note which cues told you it landed and which told you to shorten it or let it go."
    },
    {
      "day": "Day 6",
      "title": "Practise repair",
      "task": "Deliberately deliver one slightly-off appreciation, then use a recovery line such as \"I may have read that wrong; what actually helped?\" Get comfortable repairing without flinching."
    },
    {
      "day": "Day 7",
      "title": "Match tone to context",
      "task": "Use the move in three different settings today (work, a text, a close relationship) and adjust the wording to fit each. Reflect on what you changed and why."
    }
  ],
  "checklist": [
    "Did I name a specific behaviour, not just a vague quality?",
    "Did I keep it to roughly one sentence?",
    "Did I mean it, with no hidden ask attached?",
    "Did I read the room: hierarchy, culture, and whether they'd want this said publicly?",
    "Did I watch their response and adjust?",
    "Did I repair quickly if it missed?"
  ],
  "example": {
    "without": [
      "A: I sent the notes around.",
      "B: You're the best person ever.",
      "A: Uh... thanks?",
      "Why it's weak:",
      "vague, so it names no actual behaviour",
      "sounds like flattery, which makes it hard to believe",
      "gives A nothing concrete to repeat next time"
    ],
    "with": [
      "A: I sent the notes around.",
      "B: Thanks; the way you grouped the actions made it much easier to follow.",
      "A: Good, I was hoping that helped.",
      "Why this is better:",
      "names the specific behaviour (grouping the actions)",
      "ties it to a clear effect (easier to follow)",
      "Advanced:",
      "A: I sent the notes around.",
      "B: I appreciated the structure: decisions first, actions second, questions last. It saved everyone re-reading the thread.",
      "A: That's useful to know.",
      "Why this works:",
      "names the exact structure, so A knows precisely what to repeat",
      "the effect is concrete and shared (no re-reading)",
      "short enough that it never tips into flattery"
    ],
    "note": "Poor praise names the person (\"you're amazing\"). Good appreciation names the behaviour and its effect (\"that structure saved everyone re-reading\"), which is what makes it believable."
  },
  "influencePayoff": {
    "feeling": "\"They noticed exactly what I did, not just that I'm generally nice.\"",
    "principle": "People trust praise they can verify. Naming the evidence makes appreciation believable, so it lowers defensiveness instead of raising suspicion.",
    "gains": [
      "Warmth that feels earned rather than performed",
      "Trust and credibility",
      "Cleaner coordination and less interpersonal friction",
      "Lower defensiveness in the other person",
      "Reinforcement of the behaviour you'd like repeated",
      "A next conversational step that feels earned, not pushed"
    ],
    "whyMostFail": [
      "They keep it vague, so it reads as flattery",
      "They deliver it mechanically, like a technique",
      "They hijack the moment to push their own agenda",
      "They use it to soften a hidden ask, so the person feels handled"
    ]
  },
  "fieldTip": {
    "headline": "Name the evidence.",
    "body": "Specific appreciation is believable because it points at something real. The moment you can name the behaviour and the effect it had, the person stops wondering whether you actually noticed, and the praise becomes impossible to dismiss as flattery.",
    "example": "\"The way you flagged the risk early is why we had time to fix it.\"",
    "dont": "\"You're a legend.\"",
    "do": "\"Flagging that risk early is why we had time to fix it.\""
  },
  "method": [
    {
      "step": "1",
      "title": "Notice the cue",
      "body": "Watch for a specific behaviour, effort or judgement worth naming, especially the kind that could easily go unseen.\nCues:\nsomeone did something helpful without being asked\neffort that could go unnoticed\na judgement call that quietly prevented a problem\na behaviour you'd like to see again"
    },
    {
      "step": "2",
      "title": "Pause before the reflexive version",
      "body": "Catch the automatic \"great job\" and hold it for a beat.\nReflexive:\n\"Amazing, thanks!\"\nReplace with something specific:\n\"The way you sequenced that made it easy to follow.\"\nThe pause is what stops the move from becoming a habit rather than a signal."
    },
    {
      "step": "3",
      "title": "Name the action, then the effect",
      "body": "Say what they did, then what it changed.\nFormula:\naction -> effect\nExamples:\n\"You chased the supplier twice, and that's why we didn't slip.\"\n\"You let them finish before answering, and it calmed the whole room.\"\nThe action makes it true; the effect makes it matter."
    },
    {
      "step": "4",
      "title": "Keep it proportionate",
      "body": "Match the size of the appreciation to the size of the thing, and stop there.\nToo much:\n\"Honestly, that changed my entire week and probably the project.\"\nRight-sized:\n\"That saved me a re-read, which I needed today.\"\nOversized praise for a small act reads as flattery and undoes the trust you were building."
    },
    {
      "step": "5",
      "title": "Watch the response",
      "body": "Continue only if the person accepts or engages.\nGood signs:\nthey relax, add detail, correct you easily, or offer a next step.\nWarning signs:\nshorter answers, tension, sarcasm, or a topic change.\nCalibrate before you add anything more."
    },
    {
      "step": "6",
      "title": "Repair quickly if it misses",
      "body": "If it lands wrong, don't double down.\nExamples:\n\"I may have read that wrong; what actually helped from your side?\"\n\"Let me put that more simply.\"\nA fast, light repair costs nothing and keeps the exchange easy."
    }
  ],
  "liveThreadClues": [
    "Someone did something helpful without being asked",
    "Effort that could easily go unnoticed",
    "A judgement call that quietly prevented a problem",
    "A behaviour you'd like to see again",
    "Someone stayed steady when things were tense",
    "A quiet save that no one else clocked"
  ],
  "depthDial": [
    {
      "depth": "Light",
      "useWhen": "in passing, low stakes",
      "phrase": "Nice one, that actually helped."
    },
    {
      "depth": "Warm",
      "useWhen": "you want them to feel seen",
      "phrase": "The way you handled that was really thoughtful."
    },
    {
      "depth": "Specific",
      "useWhen": "reinforcing a behaviour",
      "phrase": "Grouping the actions like that saved everyone re-reading; that's the bit that helped."
    },
    {
      "depth": "Meaningful",
      "useWhen": "trust is present and the effort was large",
      "phrase": "You held that project together when it could have fallen apart, and I noticed."
    }
  ],
  "commonMistakes": [
    {
      "mistake": "Making it too long",
      "soundsLike": "A three-minute speech about one small thing.",
      "better": "One specific sentence, then stop."
    },
    {
      "mistake": "Staying vague",
      "soundsLike": "\"You're amazing.\"",
      "better": "\"The way you sequenced the agenda kept us on time.\""
    },
    {
      "mistake": "Using it as a lead-in to an ask",
      "soundsLike": "\"You're brilliant at this, so could you also...\"",
      "better": "Appreciate now; ask later, as a separate thing."
    },
    {
      "mistake": "Delivering it mechanically",
      "soundsLike": "\"Great contribution, noted.\"",
      "better": "Plain, warm language in your own voice."
    },
    {
      "mistake": "Ignoring correction",
      "soundsLike": "\"No, it really was amazing.\"",
      "better": "\"Fair, tell me the part that actually mattered.\""
    },
    {
      "mistake": "Over-polishing the words",
      "soundsLike": "\"Your strategic articulation optimised our alignment.\"",
      "better": "\"Naming the trade-off out loud is what unstuck us.\""
    },
    {
      "mistake": "Missing the room",
      "soundsLike": "Praising someone publicly when they'd hate it.",
      "better": "Read hierarchy, culture and fatigue; sometimes a quiet word is better."
    }
  ],
  "recoveryPhrases": [
    "I may have read that wrong.",
    "Let me put that more simply.",
    "No need to go there if it isn't useful.",
    "I jumped ahead.",
    "What would be the more accurate way to say it?",
    "We can leave that and come back if needed.",
    "That came out more polished than I meant; I just wanted to say thanks."
  ],
  "bestRecoveryLine": "I may have read that wrong; what actually helped from your side?",
  "chains": [
    {
      "label": "Trust-building chain",
      "sequence": "TC012 Full-attention signal -> TC018 Specific appreciation -> TC011 Summary check",
      "example": [
        "Give them your full attention while they explain.",
        "\"I appreciated how you sequenced that; it made the plan easy to follow.\"",
        "\"So the agreed next step is you draft and I review by Friday?\""
      ]
    },
    {
      "label": "Support-then-advice chain",
      "sequence": "TC004 Reflective listening -> TC018 Specific appreciation -> TC027 Permission-based advice",
      "example": [
        "\"So the tricky part was getting sign-off from two teams at once.\"",
        "\"The way you kept both of them in the loop stopped it stalling.\"",
        "\"Want a thought on making the next sign-off quicker?\""
      ]
    },
    {
      "label": "Low-pressure chain",
      "sequence": "TC018 Specific appreciation -> TC021 Autonomy release",
      "example": [
        "\"Chasing the supplier twice is why we didn't slip; that mattered.\"",
        "\"No need to do anything with that, I just wanted you to know.\""
      ]
    }
  ],
  "relatedTechniques": [
    {
      "id": "TC022",
      "reason": "Status generosity gives credit, dignity or standing broadly. Use TC018 when you're naming one specific behaviour or effect rather than raising someone's overall standing."
    },
    {
      "id": "TC016",
      "reason": "Active-constructive responding meets good news with genuine energy. Use TC018 when you want to name exactly what you valued, not just react warmly."
    },
    {
      "id": "TC024",
      "reason": "Warm opening sets a friendly tone at the start. Use TC018 when the warmth needs evidence rather than tone alone."
    },
    {
      "id": "TC075",
      "reason": "Acknowledge Effort recognises that someone tried. Use TC018 when you can point to the specific action and the effect it had, not just the effort."
    },
    {
      "id": "TC052",
      "reason": "SBI (Situation-Behaviour-Impact) is the structured feedback frame. TC018 is the lighter, everyday version: one warm sentence naming behaviour and effect."
    }
  ]
};
