import type { CardData } from "../card-types";

export const TC100: CardData = {
  pdfUrl: "cards/TC100/TC100_TwoCard_Combined.pdf",
  resources: [
    { label: "Two-card (combined)", description: "Front and back study cards on one sheet — the designed visual card.", href: "cards/TC100/TC100_TwoCard_Combined.pdf", type: "pdf", group: "Visual Cards" },
    { label: "One-card summary", description: "The whole technique on a single designed card.", href: "cards/TC100/TC100_OneCard.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Quick card", description: "One-page glance card for fast recall.", href: "cards/TC100/TC100_Quick_Card.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Detailed guide", description: "The full written guide with every section.", href: "cards/TC100/TC100_Detailed_Guide.pdf", type: "pdf", group: "Written Guides" },
    { label: "Reference sheet", description: "Dense one-page reference of the key moves.", href: "cards/TC100/TC100_Reference.pdf", type: "pdf", group: "Written Guides" },
    { label: "Phrase bank (CSV)", description: "Every phrase, ready to import or drill.", href: "cards/TC100/TC100_Phrase_Bank.csv", type: "csv", group: "Practice Tools" },
    { label: "Anki flashcards", description: "Import into Anki for spaced-repetition practice.", href: "cards/TC100/TC100_Anki_Flashcards.csv", type: "csv", group: "Practice Tools" },
  ],
  "id": "TC100",
  "whyItWorks": "The what-did-you-make-of-it question invites the other person's interpretation, conclusion, or takeaway from something they have already described. It sits between a fact question (\"What happened?\") and a feeling question (\"How did you feel?\"): it asks \"What did you make of it?\" and gives them room to say what the event meant, what they inferred, what surprised them, or what they are still unsure about. It works because it moves the exchange from event-reporting to meaning-sharing while leaving them in charge of the meaning - people feel cognitively respected when you ask for their judgement before supplying your own.",
  "whatItIsNot": [
    "It is not a disguised opinion prompt where you already know the answer you want.",
    "It is not \"what do you think?\" used lazily when you have not actually listened.",
    "It is not cross-examination, therapy-speak, fishing for gossip, or a way to make someone justify their reaction.",
    "It is not a demand for a polished conclusion - they may still be confused, conflicted, or undecided, and that counts as an answer.",
    "It is not a replacement for safety, facts, logistics, or consent; if the moment is urgent or distressing, support first and release the question the instant they decline."
  ],
  "overview": {
    "coreFormula": [
      "Event cue -> light acknowledgement -> interpretation question -> silence -> follow their read.",
      "That was [brief neutral acknowledgement]. What did you make of it?",
      "When [event] happened, what was your read on it?",
      "No need to have a neat answer - what is your read so far?",
      "What is your interpretation of what happened there?"
    ],
    "minimumViableMove": "After they have described an event but before they have interpreted it, ask one clean meaning-making question: \"What did you make of it?\"",
    "impact": "Medium",
    "difficulty": "Easy-Medium",
    "misuse": "The question stops being an invitation and becomes pressure: asked too early, in a sceptical tone, or loaded with your own answer, it sounds like a demand to justify their reaction. Misused, it is a way to extract private meaning or steer someone toward your conclusion.",
    "bestFor": [
      "Someone has described a meeting, date, result, message, review, argument, or social moment",
      "The facts are mostly clear, but their interpretation is not yet clear",
      "You want to avoid giving advice too early",
      "You want to understand their judgement, takeaway, suspicion, or uncertainty",
      "The conversation is at risk of becoming a flat sequence of fact questions",
      "A professional review, coaching chat, learning debrief, or relationship check-in where their read matters",
      "You need to choose your next response based on what they believe the event meant"
    ]
  },
  "notFor": [
    "They are in acute distress and need support, safety, or action first",
    "The event is traumatic and the question would feel like a demand to process before they are ready",
    "You still need basic facts before any interpretation makes sense",
    "They have already told you exactly what they made of it",
    "The question would sound sceptical, accusatory, or like they must defend themselves",
    "You are mining for leverage, gossip, blame, or agreement",
    "Physical safety or an immediate emergency takes priority"
  ],
  "phraseBank": [
    {
      "id": "quick",
      "label": "Quick / default",
      "tag": "Everyday one-liners",
      "tone": "Quick",
      "phrases": [
        "What did you make of it?",
        "What was your read on it?",
        "How did you interpret that?",
        "What did you take from it?",
        "What do you think was going on there?",
        "What stood out as the meaning of it?",
        "What did that signal to you?",
        "What is your sense of it now?",
        "What is your read on what it might mean?"
      ]
    },
    {
      "id": "soft",
      "label": "Soft / low-pressure",
      "tag": "Protects uncertainty",
      "tone": "Warm",
      "phrases": [
        "No need for a polished answer - what is your read so far?",
        "If you had to guess, what did you make of it?",
        "What did you take from it, if anything?",
        "Maybe it is too soon to know, but what sense are you making of it?",
        "What are you leaning toward as the explanation?",
        "What sense are you making of it so far?"
      ]
    },
    {
      "id": "social",
      "label": "Social / casual",
      "tag": "After ambiguous stories",
      "tone": "Warm",
      "phrases": [
        "That is a strange one. What did you make of it?",
        "What was your vibe on that?",
        "Did it feel like a good sign, a weird sign, or too early to tell?",
        "What did you think it meant?",
        "What did you make of the night overall?"
      ]
    },
    {
      "id": "professional",
      "label": "Professional / work",
      "tag": "Reviews and debriefs",
      "tone": "Professional",
      "phrases": [
        "What is your read on the meeting?",
        "What did you take away from that feedback?",
        "How are you interpreting the client's response?",
        "What do you think that result is telling us?",
        "What is the signal beneath the noise here?",
        "What is your interpretation of what happened there?"
      ]
    },
    {
      "id": "digital",
      "label": "Digital / text",
      "tag": "Before you reply to a message",
      "tone": "Direct",
      "phrases": [
        "What did you make of that message?",
        "How are you reading their reply?",
        "What do you think they meant by that?",
        "What is your read before we decide how to respond?",
        "Interesting. What did you make of that?"
      ]
    },
    {
      "id": "conflict",
      "label": "Conflict / repair",
      "tag": "Invites impact without defending",
      "tone": "High-stakes",
      "phrases": [
        "When I said that, what did you make of it?",
        "What was your read on my tone there?",
        "How did that land for you? What did it seem to mean?",
        "I may have misread the moment. What did you make of it?",
        "How did that come across to you?"
      ]
    },
    {
      "id": "release",
      "label": "Release add-ons",
      "tag": "Take the pressure off",
      "tone": "Repair",
      "phrases": [
        "No pressure to analyse it.",
        "Could be nothing; I was just curious how you read it.",
        "We can stay with the facts if that is easier.",
        "If you are not sure yet, that is a complete answer.",
        "Too early to tell is a complete answer."
      ]
    }
  ],
  "decisionTree": [
    {
      "condition": "They described an event, you do not yet know their read, and the moment is calm",
      "action": "Ask one clean meaning-making question, then leave the silence.",
      "phrase": "What did you make of it?"
    },
    {
      "condition": "They have not described an event yet, or you still lack basic facts",
      "action": "Hold the question; listen or ask what happened first.",
      "phrase": "What happened next?"
    },
    {
      "condition": "You already know their interpretation",
      "action": "Skip to a summary check, meaning reflection, or next-step question instead.",
      "phrase": "So your read is... have I got that right?"
    },
    {
      "condition": "The moment is unsafe, distressed, or high-pressure",
      "action": "Support, validate, or ask what they need before any analysis.",
      "phrase": "What would help most right now?"
    },
    {
      "condition": "They are unsure or say \"I don't know\"",
      "action": "Normalise it and let uncertainty stand as the answer.",
      "phrase": "Too early to tell is completely fine."
    },
    {
      "condition": "They resist, tense up, or change topic",
      "action": "Recover and release the question straight away.",
      "phrase": "No pressure - we can leave it."
    }
  ],
  "ladder": [
    {
      "weak": "They were obviously being passive-aggressive. What do you think?",
      "better": "What did you make of it?",
      "best": "That sounds like a mixed signal. What did you make of it - or is it too early to tell?"
    },
    {
      "weak": "So what does that actually mean?",
      "better": "What do you think it means?",
      "best": "What is your read on what it might mean?"
    },
    {
      "weak": "Were they trying to undermine you?",
      "better": "How did you interpret it?",
      "best": "When they said that in the meeting, what was your read?"
    },
    {
      "weak": "Why would they even do that?",
      "better": "What did you make of that?",
      "best": "What did you make of that - careless, intentional, or hard to tell?"
    }
  ],
  "scenarios": [
    {
      "situation": "A friend describes an odd interaction",
      "move": "They gave facts but no interpretation; reflect their read, not your theory.",
      "phrase": "That is a strange one. What did you make of it?"
    },
    {
      "situation": "A colleague describes a mixed meeting",
      "move": "The signal is ambiguous; summary-check before you offer advice.",
      "phrase": "What was your read on the meeting?"
    },
    {
      "situation": "A partner says a comment bothered them",
      "move": "They may need interpretation and care; listen, validate impact, repair.",
      "phrase": "When I said that, what did you make of it?"
    },
    {
      "situation": "A client sends a vague response",
      "move": "The team is guessing meaning; separate evidence from inference.",
      "phrase": "Before we reply, what do you make of their response?"
    },
    {
      "situation": "A digital message feels unclear",
      "move": "People over-read tone; add uncertainty afterwards so nobody spirals.",
      "phrase": "How are you reading that message?"
    },
    {
      "situation": "A learning debrief",
      "move": "They described what happened; turn their insight into one experiment.",
      "phrase": "What do you think that result is telling you?"
    }
  ],
  "calibration": {
    "working": [
      "They pause, then give a thoughtful read.",
      "They add context, uncertainty, or nuance.",
      "They say \"I think...\" or \"My read is...\" and keep going.",
      "Their tone becomes more reflective or clearer.",
      "They correct the frame without irritation.",
      "They lean in and share more than the bare facts."
    ],
    "adjust": [
      "They look burdened by the question.",
      "They say \"I do not know\" in a closed tone.",
      "They ask \"What do you mean?\"",
      "They return to facts instead of interpretation.",
      "They seem to need support before analysis.",
      "They shorten, deflect, tense up, or change topic - stop here.",
      "The topic touches safety, trauma, legal, medical, or acute conflict - stop and support.",
      "You notice you are asking to satisfy your own curiosity - drop it."
    ]
  },
  "drill": [
    {
      "day": "Day 1",
      "title": "Spot the gap",
      "task": "Notice three moments where someone describes an event but not what they made of it. Just notice the gap; say nothing yet."
    },
    {
      "day": "Day 2",
      "title": "Write the compact move",
      "task": "Take those three events and write the minimum viable question for each: \"What did you make of it?\" Keep it to one line."
    },
    {
      "day": "Day 3",
      "title": "Three registers",
      "task": "For one event, write a direct, a soft, and a contextual version - e.g. \"What did you make of it?\", \"What is your read so far, if any?\", \"When they said that, what did you take from it?\""
    },
    {
      "day": "Day 4",
      "title": "Strip the loaded answer",
      "task": "Rewrite three leading questions (\"They were pushing you out, right?\") into clean, non-leading reads that carry none of your verdict."
    },
    {
      "day": "Day 5",
      "title": "Add the recovery",
      "task": "After each question, write one release phrase - \"No pressure to analyse it\" or \"Too early to tell is fine\" - so the ask is always easy to decline."
    },
    {
      "day": "Day 6",
      "title": "Ask and leave the silence",
      "task": "In one real conversation, ask a single meaning-making question and do not fill the pause or add your interpretation until they have answered."
    },
    {
      "day": "Day 7",
      "title": "Anchor, ask, reflect",
      "task": "Run the full chain once: a brief comment, the question, then reflect their read back in your own words before any advice."
    }
  ],
  "checklist": [
    "Did I ask after enough context, or too early?",
    "Did my tone sound curious rather than sceptical?",
    "Did I keep my own interpretation until after theirs?",
    "Did I let \"I don't know yet\" stand as a valid answer?",
    "Did I follow their read instead of steering them to mine?",
    "Did I notice whether the question created space or pressure - and recover if it landed heavy?"
  ],
  "example": {
    "without": [
      "Colleague: \"The director praised it, but said we need to tighten ownership before the next review.\"",
      "You: \"That means they think your team is disorganised. You need to get ahead of it.\"",
      "Colleague: \"Maybe. I'm not sure.\"",
      "You: \"No, that's definitely what they meant.\"",
      "Why it's poor: you over-interpret, remove their agency, and force an ambiguous signal into a fixed conclusion."
    ],
    "with": [
      "You: \"That sounds like a mixed signal - positive on the output, cautious about the process. What did you make of it, or is it too early to tell?\"",
      "Colleague: \"I think they liked the work but are worried no one owns the handoff.\"",
      "You: \"So the concern is less about quality, more about accountability.\"",
      "Colleague: \"That's my read too - a warning before it becomes a problem.\"",
      "You: \"So it's not a rejection, more a prompt to clarify ownership before next time. Want help turning that into a next step?\"",
      "Why it works: you name the ambiguity, protect their uncertainty, summarise their read, then ask permission before shifting to action."
    ],
    "note": "Context: a colleague says the director praised the project, then said the team needs to tighten ownership before the next review. The facts are clear; the meaning is not."
  },
  "influencePayoff": {
    "feeling": "\"They wanted to know how I saw it, not just what happened.\"",
    "principle": "People become more open to your view once they have had the first right to define what the event meant to them.",
    "gains": [
      "Shifts them from recounting facts to interpreting them.",
      "Surfaces what they care about without forcing an emotional label.",
      "Reduces premature advice, because you hear their read before adding yours.",
      "Builds a natural bridge from story to insight, decision, lesson, or next step.",
      "Lets a conversation deepen without becoming heavy.",
      "Makes disagreement easier, because you learn their interpretation before challenging it."
    ],
    "whyMostFail": [
      "They ask too early, before there is enough context to interpret.",
      "They load the question with their own answer, so it pressures agreement.",
      "They use a sceptical tone, so it sounds like \"justify your reaction.\"",
      "They fill the silence or deliver it mechanically, so it feels like a debrief."
    ]
  },
  "fieldTip": {
    "headline": "Ask for their read before offering yours.",
    "body": "Use the question as a doorway, not a trap. The win is not getting a deep answer - it is giving the other person the first right to define what the event means to them.",
    "example": "That sounds like a mixed signal. What did you make of it - or is it too early to tell?",
    "dont": "Don't smuggle in your own verdict: \"What did you make of it - they were rude, right?\"",
    "do": "Do keep it small and releasable: ask \"What did you make of it?\" then leave the silence."
  },
  "method": [
    {
      "step": "1",
      "title": "Perception",
      "body": "Notice that the person has described an event, result, exchange, signal, or reaction but has not yet said what they think it means. That gap - facts present, meaning absent - is the cue to switch from gathering to inviting."
    },
    {
      "step": "2",
      "title": "Move",
      "body": "Pause the fact-gathering impulse. Instead of another \"what happened next?\", invite their interpretation. Jumping to advice or your own read here would be premature."
    },
    {
      "step": "3",
      "title": "Phrase",
      "body": "Ask one clean meaning-making question - short, non-leading, and easy to decline. Match the register to the relationship and the setting.",
      "examples": [
        { "label": "Direct", "text": "What did you make of it?" },
        { "label": "Soft", "text": "What is your read so far, if any?" },
        { "label": "Contextual", "text": "When they said that, what did you take from it?" }
      ]
    },
    {
      "step": "4",
      "title": "Calibration",
      "body": "Watch whether they expand, pause thoughtfully, correct the framing, or look pressured. A good question creates room; a bad version creates a demand. Adjust to whichever you see."
    },
    {
      "step": "5",
      "title": "Recovery",
      "body": "If it lands too heavy, too analytical, or too soon, soften and release straight away. \"I didn't mean [pressure]; I meant [curiosity]. We can [return to the facts / change topic].\"",
      "examples": [
        { "label": "Release", "text": "No need for a neat answer - I was just curious what your read was." }
      ]
    },
    {
      "step": "6",
      "title": "Chain",
      "body": "Follow their answer with a summary check, reflection, support, or a permission-based next step. Practical sequence: Anchor (\"That sounds like an interesting moment\") -> Ask (\"What did you make of it?\") -> Listen (do not fill the silence) -> Reflect (\"So your read is it was less about the deadline, more about trust\") -> Follow (\"Do you want help thinking through what to do next, or mostly to unpack it?\")."
    }
  ],
  "liveThreadClues": [
    "\"It was... I don't know.\"",
    "\"They just said that and left.\"",
    "\"It was fine, I guess.\"",
    "\"That was a bit weird.\"",
    "\"Anyway, that's what happened.\"",
    "\"Make of that what you will.\""
  ],
  "commonMistakes": [
    {
      "mistake": "Asking too early, before there is enough context",
      "soundsLike": "\"What did you make of it?\" after only two sentences",
      "better": "Get the facts first, then invite the read"
    },
    {
      "mistake": "Smuggling in your own answer",
      "soundsLike": "\"What did you make of it - they were rude, right?\"",
      "better": "\"What did you make of it?\" - then stop talking"
    },
    {
      "mistake": "Using a sceptical tone",
      "soundsLike": "\"And what exactly did you make of THAT?\"",
      "better": "Same words, genuine curiosity: \"What was your read?\""
    },
    {
      "mistake": "Making it too formal or clinical",
      "soundsLike": "\"What interpretive schema did you apply?\"",
      "better": "\"What did you take from it?\""
    },
    {
      "mistake": "Filling the silence before they can think",
      "soundsLike": "\"What did you make of it? Because I thought...\"",
      "better": "Ask, then leave the pause open"
    },
    {
      "mistake": "Treating \"I don't know\" as a failure",
      "soundsLike": "\"Come on, you must have some idea.\"",
      "better": "\"Too early to tell is a complete answer.\""
    },
    {
      "mistake": "Ignoring a clear boundary",
      "soundsLike": "Pressing on after \"I don't want to get into it\"",
      "better": "\"No problem - we can leave it there.\""
    },
    {
      "mistake": "Overusing it until every story is a debrief",
      "soundsLike": "A meaning question after every sentence",
      "better": "One clean read per conversation is plenty"
    }
  ],
  "recoveryPhrases": [
    "No pressure to have an answer.",
    "That may be too soon to interpret - we can just stay with what happened.",
    "I didn't mean that as a challenge; I was curious about your read.",
    "Let me soften that: what's your sense of it so far?",
    "If \"I don't know yet\" is the answer, that's completely fine.",
    "I may be getting ahead of the story - what happened next?",
    "I'm not trying to put you on the spot.",
    "I realise I gave my interpretation too fast. What's your read?"
  ],
  "bestRecoveryLine": "No need for a neat answer - I was just curious what your read was.",
  "chains": [
    {
      "label": "Comment -> meaning question -> summary check",
      "sequence": "TC003 -> TC100 -> TC011",
      "example": [
        "TC003 Comment-before-question: \"That sounds like a mixed signal.\"",
        "TC100: \"What did you make of it?\"",
        "TC011 Summary check: \"So your read is they back the idea but don't trust the handoff yet - right?\""
      ]
    },
    {
      "label": "Energy tracking -> meaning question -> permission-based advice",
      "sequence": "TC041 -> TC100 -> TC027",
      "example": [
        "TC041 Topic energy tracking: notice they light up about one part of the story.",
        "TC100: \"That part seems to stand out. What did you make of it?\"",
        "TC027 Permission-based advice: \"Would it help to think through a response?\""
      ]
    },
    {
      "label": "Echo plus question -> meaning question -> clean request",
      "sequence": "TC030 -> TC100 -> TC013",
      "example": [
        "TC030 Echo plus question: \"'Weirdly formal' - what felt formal?\"",
        "TC100: \"What did you make of that shift?\"",
        "TC013 Clean request: \"Could you send me the message so I can see the wording?\""
      ]
    },
    {
      "label": "Meaning reflection -> meaning question -> autonomy release",
      "sequence": "TC040 -> TC100 -> TC021",
      "example": [
        "TC040 Meaning reflection: \"It sounds like the bigger issue is trust.\"",
        "TC100: \"Is that your read too, or do you make something else of it?\"",
        "TC021 Autonomy release: \"Either way, you don't have to decide right now.\""
      ]
    }
  ],
  "relatedTechniques": [
    {
      "id": "TC003",
      "reason": "TC003 warms any question with a brief comment first; TC100 is the specific meaning-making question. Use TC003 to shape the doorway, TC100 to choose what's behind it."
    },
    {
      "id": "TC011",
      "reason": "TC011 checks whether you understood what they already said; TC100 invites the interpretation they haven't voiced yet. Check with TC011, ask with TC100."
    },
    {
      "id": "TC030",
      "reason": "TC030 deepens one exact phrase (\"that phrase - say more\"); TC100 asks what a whole event or signal meant (\"that moment - what do you make of it?\")."
    },
    {
      "id": "TC034",
      "reason": "TC034 offers two paths plus an escape hatch when the field is too broad; TC100 keeps the field open. Narrow with TC034, stay open with TC100."
    },
    {
      "id": "TC040",
      "reason": "TC040 reflects meaning they have already implied; TC100 asks them to generate it. TC100 asks, TC040 reflects."
    },
    {
      "id": "TC041",
      "reason": "TC041 selects which live topic to follow; TC100 asks what the selected event meant. TC041 is the selector, TC100 the sense-making question."
    }
  ]
};
