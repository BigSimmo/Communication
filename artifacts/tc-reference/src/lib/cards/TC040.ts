import type { CardData } from "../card-types";

export const TC040: CardData = {
  pdfUrl: "cards/TC040/TC040_TwoCard_Combined.pdf",
  resources: [
    { label: "Two-card (combined)", description: "Front and back study cards on one sheet — the designed visual card.", href: "cards/TC040/TC040_TwoCard_Combined.pdf", type: "pdf", group: "Visual Cards" },
    { label: "One-card summary", description: "The whole technique on a single designed card.", href: "cards/TC040/TC040_OneCard.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Quick card", description: "One-page glance card for fast recall.", href: "cards/TC040/TC040_Quick_Card.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Detailed guide", description: "The full written guide with every section.", href: "cards/TC040/TC040_Detailed_Guide.pdf", type: "pdf", group: "Written Guides" },
    { label: "Reference sheet", description: "Dense one-page reference of the key moves.", href: "cards/TC040/TC040_Reference.pdf", type: "pdf", group: "Written Guides" },
    { label: "Phrase bank (CSV)", description: "Every phrase, ready to import or drill.", href: "cards/TC040/TC040_Phrase_Bank.csv", type: "csv", group: "Practice Tools" },
    { label: "Anki flashcards", description: "Import into Anki for spaced-repetition practice.", href: "cards/TC040/TC040_Anki_Flashcards.csv", type: "csv", group: "Practice Tools" },
  ],
  "id": "TC040",
  "whyItWorks":
    "Meaning reflection names the personal significance beneath what someone said — tentatively and respectfully — so the conversation touches what a detail meant to them, not only what happened. It works because people feel genuinely understood when you land on meaning rather than facts, and because tentative phrasing lets them accept, correct, or decline your read without being cornered.",
  "whatItIsNot": [
    "It is not a trick, a performance, or a dominance move — it names meaning, it does not manufacture it.",
    "It is not a way to extract more than the other person wants to give.",
    "It is not a replacement for plain listening, context, judgement, or direct action when action is what is needed.",
    "It is not a verdict about who someone is — it is a hypothesis they are free to reject.",
  ],
  "overview": {
    "coreFormula": [
      "Hear the detail → infer the possible significance → phrase it tentatively → invite correction → pause.",
      "It sounds like that mattered because it changed what you could count on.",
      "It seems bigger than the event itself — maybe what it said about being trusted.",
      "The significance seems to be that you were left carrying it alone.",
      "I may be reading this wrong, but that seems like the real thread.",
    ],
    "minimumViableMove":
      "It sounds like that mattered because it changed what you could count on.",
    "impact": "Medium",
    "difficulty": "Hard",
    "misuse":
      "Overinterpreting — becoming grandiose or naming a meaning the person has not endorsed, so your read lands as a verdict rather than a guess.",
    "bestFor": [
      "When someone shares facts that plainly carry emotional or personal weight.",
      "When a story is about more than events — identity, trust, belonging, loss, effort, or values.",
      "When the person needs the meaning recognised before they will move to solutions.",
      "When someone is overtalking and you want to land on the thread that actually matters.",
      "Repairing after conflict, once the facts are clear but the hurt is not.",
    ],
  },
  "notFor": [
    "When the person only wants practical information.",
    "When naming meaning would feel invasive or theatrical.",
    "When you are guessing from too little evidence.",
    "When the situation needs action, not reflection.",
    "When they have already given a direct answer and do not want it deepened.",
    "When you would be steering them toward a meaning that suits you.",
  ],
  "phraseBank": [
    {
      "id": "quick-starters",
      "label": "Quick starters",
      "tag": "Short openers",
      "tone": "Quick",
      "phrases": [
        "It sounds like that mattered.",
        "That seems to have meant more than the facts.",
        "There's something bigger in that.",
        "Sounds like that one carried some weight.",
        "That hit deeper than the event, maybe.",
        "It sounds like there's a thread under that.",
        "That seems significant — more than it looks.",
      ],
    },
    {
      "id": "warm-significance",
      "label": "Validating the significance",
      "tag": "Warmth and significance",
      "tone": "Warm",
      "phrases": [
        "It sounds like that wasn't just inconvenient — it changed what felt reliable.",
        "That seems to have touched something bigger than the actual event.",
        "It sounds like the hard part was what it meant about being trusted.",
        "It sounds like part of the weight was being left to carry it alone.",
        "That mattered because of what it said, not only what happened.",
        "It sounds like this changed how safe the whole thing felt.",
        "That sounds like it meant far more than it looked from outside.",
      ],
    },
    {
      "id": "work-meetings",
      "label": "At work & in meetings",
      "tag": "Work / decisions",
      "tone": "Professional",
      "phrases": [
        "It sounds like the concern isn't the timeline — it's whether the team felt consulted.",
        "That reads less like a process issue and more like a respect one.",
        "It sounds like what stung was being left out, not the decision itself.",
        "So the real issue may be trust in the handover, not the deadline.",
        "It sounds like this landed as 'my work wasn't seen', not just 'the plan changed'.",
        "That seems to matter for what it signals about how we make calls here.",
      ],
    },
    {
      "id": "name-and-check",
      "label": "Name it, invite correction",
      "tag": "Tentative naming",
      "tone": "Direct",
      "phrases": [
        "It sounds like the significance was being trusted — tell me if I've got that wrong.",
        "I may be reading this wrong, but that seems like the real thread.",
        "Correct me if this misses, but it sounds like it mattered because it felt unfair.",
        "Is it fair to say the meaning was being overlooked, or am I off?",
        "The useful part may be this — does that land?",
        "Stop me if this doesn't fit, but that sounds like it was about respect.",
      ],
    },
    {
      "id": "repair-softening",
      "label": "Repair & softening",
      "tag": "Conflict repair",
      "tone": "Repair",
      "phrases": [
        "It was not only the outcome; it was what the outcome seemed to say.",
        "That seems like it landed as a respect issue, not just a scheduling one.",
        "It sounds like being left with it was the part that actually hurt.",
        "Maybe the meaning was being alone with it, not just being busy.",
        "It sounds like you wanted it acknowledged, not fixed.",
        "It sounds like the significance was feeling unseen, not the mistake itself.",
      ],
    },
    {
      "id": "high-stakes",
      "label": "Under pressure & high emotion",
      "tag": "Pressure / intensity",
      "tone": "High-stakes",
      "phrases": [
        "I might have this wrong, but it sounds like the real worry is whether it happens again.",
        "It sounds like what's under this is whether you can count on it next time.",
        "That seems to matter because it changed what feels safe here.",
        "It sounds like the hard part isn't what happened — it's what it might mean going forward.",
        "Take your time — this one seems to run deeper than the facts.",
        "If I've read that wrong, tell me, but it seems bigger than the event.",
      ],
    },
    {
      "id": "digital-text",
      "label": "Digital / text",
      "tag": "Written messages",
      "tone": "Quick",
      "phrases": [
        "I may be reading this wrong, but that seems like the key thread.",
        "We can stay with that or move on — your call.",
        "The useful part may be this: the bit about being trusted.",
        "Sounds like it mattered more than the message let on — happy to be corrected.",
        "Reading between the lines, this seems to be about respect. Right?",
      ],
    },
  ],
  "decisionTree": [
    {
      "condition": "They add detail after your reflection",
      "action": "You're on the thread — stay with it.",
      "phrase": "So it was less about the amount and more about being left with it.",
    },
    {
      "condition": "They pause thoughtfully",
      "action": "Wait. Let the silence do the work.",
      "phrase": "",
    },
    {
      "condition": "They look uncomfortable, tense, or confused",
      "action": "Release the move and soften.",
      "phrase": "I may be reading that wrong — ignore it if it doesn't fit.",
    },
    {
      "condition": "They ask for advice",
      "action": "Switch to permission-based advice.",
      "phrase": "Want my read on it, or just a sounding board?",
    },
    {
      "condition": "They give a flat, direct answer",
      "action": "Don't overuse it — return to ordinary conversation.",
      "phrase": "",
    },
    {
      "condition": "The situation actually needs action",
      "action": "Act directly rather than decorating the moment.",
      "phrase": "Let's sort the practical bit first.",
    },
  ],
  "ladder": [
    {
      "weak": "You are traumatised by that.",
      "better": "That mattered to you.",
      "best": "It sounds like it mattered because it changed what you could count on.",
    },
    {
      "weak": "So this is about your childhood.",
      "better": "There is something bigger there.",
      "best": "It seems bigger than the event itself — maybe what it said about trust.",
    },
    {
      "weak": "You clearly felt abandoned.",
      "better": "You felt alone with it.",
      "best": "It sounds like part of the meaning was being left to carry it alone.",
    },
  ],
  "scenarios": [
    {
      "situation": "Casual conversation",
      "move": "Use the minimum viable move and keep the tone light.",
      "phrase": "Sounds like that meant more than it looked.",
    },
    {
      "situation": "Workplace conversation",
      "move": "Keep the wording concise and non-performative; avoid emotional overreach.",
      "phrase": "It sounds like the issue is being consulted, not the timeline itself.",
    },
    {
      "situation": "Conflict or repair",
      "move": "Pair the move with validation or an autonomy release.",
      "phrase": "It sounds like the hard part was being left to carry it — and it's fine if I've got that wrong.",
    },
    {
      "situation": "Digital message",
      "move": "Use one sentence only. Don't stack prompts.",
      "phrase": "Reading between the lines, that seems like the real thread — happy to be corrected.",
    },
    {
      "situation": "High-stakes context",
      "move": "Lead with direct clarity; add meaning reflection only if it lowers pressure.",
      "phrase": "First, here's where we are. And it sounds like what's really under this is trust.",
    },
    {
      "situation": "Someone overtalking or spiralling",
      "move": "Name the thread that matters to bring focus without cutting them off.",
      "phrase": "Of all of that, it sounds like the part that really matters is being trusted next time.",
    },
  ],
  "calibration": {
    "working": [
      "They add detail and stay on the same thread.",
      "Their tone softens or becomes more specific.",
      "They correct your read without defensiveness.",
      "They say \"exactly\", \"yes\", or \"that's it\".",
      "They slow down and think before answering.",
      "They ask you something back.",
    ],
    "adjust": [
      "Answers get shorter.",
      "The tone goes polite but flat.",
      "They keep shifting the topic.",
      "Forced or nervous laughter.",
      "Visible tension in face or posture.",
      "Defensiveness or confusion.",
      "They withdraw or decline outright.",
      "The conversation feels less safe than before — make the move smaller or drop it.",
    ],
  },
  "drill": [
    {
      "day": "Day 1",
      "title": "Spot the meaning",
      "task": "Write five real lines someone might say to you, and underline the word or detail carrying the most personal weight in each.",
    },
    {
      "day": "Day 2",
      "title": "Draft the reflection",
      "task": "For each line, write the smallest tentative sentence that names what it might mean — not what happened.",
    },
    {
      "day": "Day 3",
      "title": "Cut it back",
      "task": "Trim each reflection by about a third so it sounds like attention, not a speech.",
    },
    {
      "day": "Day 4",
      "title": "Add the escape hatch",
      "task": "Append an invite-to-correct or recovery phrase to each, e.g. \"tell me if I've got that wrong\".",
    },
    {
      "day": "Day 5",
      "title": "Say it plainly",
      "task": "Read each aloud in an ordinary voice; rewrite any that sound clinical, grand, or therapeutic.",
    },
    {
      "day": "Day 6",
      "title": "Use it once",
      "task": "In one low-stakes conversation, offer a single meaning reflection, then stop and watch the response.",
    },
    {
      "day": "Day 7",
      "title": "Calibrate and release",
      "task": "In a real conversation, use it once, read their signal, and practise releasing the move the moment energy drops.",
    },
  ],
  "checklist": [
    "Did I keep the other person's autonomy intact?",
    "Did I use one move, or stack several?",
    "Did my tone fit the relationship and context?",
    "Did I stop when the signal weakened?",
    "Did I follow their thread rather than my agenda?",
    "Would a simpler response have been better?",
  ],
  "example": {
    "without": [
      "A: It just felt like too much at once.",
      "B: Why did you let it get like that? You should have said something earlier.",
      "Why it's weak:",
      "jumps to blame instead of meaning",
      "treats it as a problem to fix, not a thing to understand",
      "gives them nothing to agree with or correct",
    ],
    "with": [
      "A: It just felt like too much at once.",
      "B: That sounds like it carried more weight than the facts alone.",
      "A: Yes — it felt like I was suddenly carrying all of it.",
      "B: It sounds like the hard part wasn't the amount, but what it meant about being left with it.",
      "A: Exactly. I could have handled the work if someone had just acknowledged it.",
      "B: So the meaning was being left alone with it, not only being busy.",
      "Why this works:",
      "names the significance, not just the facts",
      "phrases it tentatively so they can correct it",
      "lets them lead — B tracks the thread, doesn't take it over",
    ],
    "note":
      "The advanced version keeps the other person's thread alive without taking control of it.",
  },
  "influencePayoff": {
    "feeling": "\"They didn't just hear what happened — they understood what it meant to me.\"",
    "principle":
      "People open up and trust you when they feel understood at the level of meaning, not just facts — and tentative phrasing lets them stay in control of their own story.",
    "gains": [
      "Trust",
      "Being genuinely understood, not just heard",
      "Less overtalking and repetition",
      "The conversation stays on the thread that matters",
      "Dignity — they can accept, redirect, or decline",
      "Better accuracy about what is really going on",
    ],
    "whyMostFail": [
      "They overinterpret and turn a guess into a verdict.",
      "They get grandiose, naming trauma or childhood the person never raised.",
      "They use it to steer toward their own preferred conclusion.",
      "They keep going after the person has clearly declined or gone quiet.",
    ],
  },
  "fieldTip": {
    "headline": "Offer meaning as a hypothesis, not a verdict.",
    "body":
      "The strongest reflections sound like a careful guess the other person is free to correct. A verdict closes the conversation; a hypothesis keeps it theirs. Keep it short, tentative, and easy to reject.",
    "example":
      "\"It sounds like it mattered because it changed what you could count on — though tell me if that's off.\"",
    "dont": "\"You clearly felt abandoned.\"",
    "do": "\"It sounds like part of it was being left to carry it alone.\"",
  },
  "method": [
    {
      "step": "1",
      "title": "Notice the cue",
      "body":
        "Listen for the moment where the feeling is bigger than the fact — where a small detail is clearly standing in for something larger. That gap is your signal.\nCues: \"it wasn't even about the money\", \"what got me was…\", \"I could have handled it if…\".",
    },
    {
      "step": "2",
      "title": "Infer the possible significance",
      "body":
        "Ask yourself quietly: what did this change or threaten for them — trust, respect, belonging, effort, safety, being seen? Pick the most likely one. You are forming a guess, not a diagnosis.",
    },
    {
      "step": "3",
      "title": "Phrase it tentatively",
      "body":
        "Say it as a hypothesis with room to be wrong: \"It sounds like…\", \"It seems…\", \"Maybe the part that mattered was…\". The tentativeness is what keeps it safe.\nVerdict: \"You felt abandoned.\"\nHypothesis: \"It sounds like part of it was being left to carry it alone.\"",
    },
    {
      "step": "4",
      "title": "Invite correction, then pause",
      "body":
        "End with room to disagree, then stop talking. \"Tell me if that's off.\" The silence lets them accept, refine, or redirect your read rather than swallow it.",
    },
    {
      "step": "5",
      "title": "Follow their next signal",
      "body":
        "If they add detail or soften, stay on the thread. If they correct you, take the correction gladly — that is the technique working, not failing.",
    },
    {
      "step": "6",
      "title": "Release if it doesn't land",
      "body":
        "If they go flat, tense, or confused, drop the move and return to plain listening or direct help. One reflection is usually enough.",
    },
  ],
  "liveThreadClues": [
    "it wasn't even about the [thing]…",
    "what really got to me was…",
    "honestly, it just…",
    "and that was the part that…",
    "I could have handled it if…",
    "it felt like…",
  ],
  "commonMistakes": [
    {
      "mistake": "Naming meaning as a certainty",
      "soundsLike": "\"You clearly felt abandoned.\"",
      "better": "\"It sounds like part of it was being left alone with it — tell me if that's off.\"",
    },
    {
      "mistake": "Going grandiose",
      "soundsLike": "\"So this is really about your childhood.\"",
      "better": "\"It seems bigger than the event itself — maybe about being trusted.\"",
    },
    {
      "mistake": "Using the move too many times in a row",
      "soundsLike": "reflecting meaning after every sentence",
      "better": "one reflection, then listen normally",
    },
    {
      "mistake": "Over-explaining after using it",
      "soundsLike": "\"What I mean by that, psychologically, is…\"",
      "better": "say it once, then pause and let it sit",
    },
    {
      "mistake": "Steering toward your own conclusion",
      "soundsLike": "\"So really you agree it was their fault.\"",
      "better": "\"It sounds like the part that stung was not being consulted.\"",
    },
    {
      "mistake": "Ignoring a decline",
      "soundsLike": "pressing on after they change the subject",
      "better": "\"Fair enough — we can leave that.\"",
    },
    {
      "mistake": "Mistaking politeness for engagement",
      "soundsLike": "reading a flat \"yeah\" as a green light",
      "better": "watch tone and detail, not just the word",
    },
  ],
  "recoveryPhrases": [
    "I may be reading that wrong.",
    "We don't have to stay with that.",
    "Let me say that more simply.",
    "That came out stronger than I meant.",
    "Ignore that if it doesn't fit.",
    "We can go another direction.",
    "What would be more useful right now?",
    "Forget the analysis — what actually happened next?",
  ],
  "bestRecoveryLine": "I may be reading that wrong — ignore it if it doesn't fit.",
  "chains": [
    {
      "label": "Reflect → deepen → hold",
      "sequence": "TC004 Reflective listening → TC040 Meaning reflection → TC029 Strategic silence",
      "example": [
        "\"So it all landed at once.\" (reflect)",
        "\"It sounds like the hard part was being left with it.\" (meaning)",
        "Then stay quiet and let them take it further. (silence)",
      ],
    },
    {
      "label": "Word → meaning → check",
      "sequence": "TC023 Loaded-Word Follow-Up → TC040 Meaning reflection → TC011 Summary check",
      "example": [
        "\"You said 'dumped on'. Dumped on how?\" (loaded word)",
        "\"It sounds like it meant you weren't trusted to be kept in the loop.\" (meaning)",
        "\"So the real issue is the handover, not the deadline — have I got that right?\" (summary check)",
      ],
    },
    {
      "label": "Both sides → meaning → release",
      "sequence": "TC037 Double-sided reflection → TC040 Meaning reflection → TC021 Autonomy release",
      "example": [
        "\"Part of you gets why it happened, part of you is still stung.\" (both sides)",
        "\"It sounds like the sting is about respect, not the decision itself.\" (meaning)",
        "\"Totally your call how you handle it from here.\" (autonomy release)",
      ],
    },
  ],
  "relatedTechniques": [
    {
      "id": "TC004",
      "reason": "Reflective listening captures content and feeling; meaning reflection names why the content matters.",
    },
    {
      "id": "TC023",
      "reason": "Loaded-word follow-up explores one charged word; meaning reflection summarises the significance beneath the whole story.",
    },
    {
      "id": "TC037",
      "reason": "Double-sided reflection maps mixed feelings; meaning reflection names the single significance underneath them.",
    },
    {
      "id": "TC011",
      "reason": "Summary check verifies you got the facts; meaning reflection checks you got what they meant.",
    },
    {
      "id": "TC027",
      "reason": "When the person wants help rather than understanding, switch to permission-based advice instead of reflecting meaning.",
    },
    {
      "id": "TC021",
      "reason": "Pair with autonomy release after a reflection so the person feels free to accept, redirect, or drop it.",
    },
  ],
};
