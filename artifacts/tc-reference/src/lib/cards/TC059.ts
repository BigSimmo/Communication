import type { CardData } from "../card-types";

export const TC059: CardData = {
  pdfUrl: "cards/TC059/TC059_TwoCard_Combined.pdf",
  resources: [
    { label: "Two-card (combined)", description: "Front and back study cards on one sheet — the designed visual card.", href: "cards/TC059/TC059_TwoCard_Combined.pdf", type: "pdf", group: "Visual Cards" },
    { label: "One-card summary", description: "The whole technique on a single designed card.", href: "cards/TC059/TC059_OneCard.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Quick card", description: "One-page glance card for fast recall.", href: "cards/TC059/TC059_Quick_Card.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Detailed guide", description: "The full written guide with every section.", href: "cards/TC059/TC059_Detailed_Guide.pdf", type: "pdf", group: "Written Guides" },
    { label: "Reference sheet", description: "Dense one-page reference of the key moves.", href: "cards/TC059/TC059_Reference.pdf", type: "pdf", group: "Written Guides" },
    { label: "Phrase bank (CSV)", description: "Every phrase, ready to import or drill.", href: "cards/TC059/TC059_Phrase_Bank.csv", type: "csv", group: "Practice Tools" },
    { label: "Anki flashcards", description: "Import into Anki for spaced-repetition practice.", href: "cards/TC059/TC059_Anki_Flashcards.csv", type: "csv", group: "Practice Tools" },
  ],
  "id": "TC059",
  "whyItWorks": "Energy-based topic switching is a live conversation-management move: you read the visible cues - pace, specificity, warmth, attention, repetition, relief, and curiosity - and use them to decide when a topic has done its job, when a different thread has more life, or when the current line has gone stale or circular, then move on in a way that keeps dignity and flow. It is not just changing the subject; it has a respectful close, a bridge, and a calibration check. It works because you are responding to the conversation's live signal rather than your own agenda, so people feel more respected when a flat thread is closed cleanly instead of dragged.",
  "whatItIsNot": [
    "It is not avoiding accountability, escaping discomfort, or steering someone away from what they need to say.",
    "It is not a manipulation tactic for controlling attention or keeping the conversation entertaining for you.",
    "It is not a replacement for emotional reflection - if someone is disclosing pain, fear, or need, reflect first and switch only with consent.",
    "It is not just \"changing the subject\" - it always carries a respectful close, a bridge, and a check afterwards.",
    "It is not a rigid script; the point is to protect shared usefulness, not to force the pace."
  ],
  "overview": {
    "coreFormula": [
      "Notice energy -> close respectfully -> bridge to a live thread -> offer choice -> calibrate after the switch.",
      "Compact: \"This topic may be complete for now. The more useful thread seems to be X. Want to move there?\"",
      "Soft: \"I might be wrong, but the energy seems to be more around X than Y. Should we follow X for a bit?\"",
      "Meeting: \"We seem to have enough on this point. Unless there is a live concern, I suggest we move to the next decision.\""
    ],
    "minimumViableMove": "That may be enough on this for now. Want to switch gears?",
    "impact": "Low",
    "difficulty": "Medium",
    "misuse": "It can become a way to control attention, avoid accountability, or steer away from another person's concern. Use it only to increase clarity, ease, and respect - never to protect your own comfort at their expense.",
    "bestFor": [
      "Casual conversations that have gone flat",
      "Meetings that start circling the same points",
      "Interviews where one thread clearly becomes more productive",
      "Networking conversations that need a warmer lane",
      "Digital threads that have reached closure",
      "Facilitation where the room's energy points to a better working topic"
    ]
  },
  "notFor": [
    "The person is in active emotion",
    "Safety, consent, legal, medical, or accountability issues are unresolved",
    "The topic is quiet because it is hard but important",
    "The person has explicitly asked to stay on the topic",
    "Switching would protect your comfort at their expense",
    "A power difference could make the switch feel like control",
    "Physical safety or an immediate emergency takes priority"
  ],
  "phraseBank": [
    {
      "id": "quick-pivots",
      "label": "Quick pivots",
      "tag": "Short starter lines",
      "tone": "Quick",
      "phrases": [
        "That may be enough on this for now. Want to switch gears?",
        "I think this one's done its job. Shall we move on?",
        "Want to switch to something lighter for a bit?",
        "Should we park this and pick up the next part?",
        "That feels mostly answered. Move on?",
        "Good spot to leave it - shall we follow the livelier thread?",
        "Enough on this, or is there more you want to say?"
      ]
    },
    {
      "id": "social-gentle",
      "label": "Social / gentle pivot",
      "tag": "Warm, low-pressure",
      "tone": "Warm",
      "phrases": [
        "This bit may have run its course. Want to switch to something lighter for a minute?",
        "That connects to something I was curious about - how did you get into it in the first place?",
        "We've covered the formal version. I'm curious what part of the work you actually enjoy most.",
        "You lit up a second ago - can we follow that instead?",
        "That's a good place to leave it. What have you been enjoying lately?",
        "I could stay on this, but I'd love the fun part - what happened after that?"
      ]
    },
    {
      "id": "professional-meeting",
      "label": "Professional / meetings",
      "tag": "Decisions and status",
      "tone": "Professional",
      "phrases": [
        "We seem to have enough on that point. I suggest we move to the next decision unless there is a live concern.",
        "We may be circling. Shall we move to the decision unless someone has new information?",
        "This point feels settled. Any objection to moving to the next item?",
        "Unless there's a live concern, I'd like to move us to what we decide next.",
        "We've got enough to decide. Shall I move us on?",
        "That's well covered. The next open question is timing - can we go there?"
      ]
    },
    {
      "id": "name-the-energy",
      "label": "Name the energy and steer",
      "tag": "One-to-one, explicit read",
      "tone": "Direct",
      "phrases": [
        "The energy seems less around the prices and more around adoption. Should we move there?",
        "You sounded more interested when you mentioned the design side. Should we follow that for a bit?",
        "I notice we both got more specific when the practical part came up. Want to follow that instead of staying abstract?",
        "I don't want to drag this if it's no longer useful. The live issue seems to be timeline, not background - can we move there?",
        "The room is giving more energy to option C. I'm going to test whether C is the working thread.",
        "The useful thread seems to be what happens next. Shall we go there?"
      ]
    },
    {
      "id": "recovery-fast-switch",
      "label": "Recovery after a fast switch",
      "tag": "Undo without defensiveness",
      "tone": "Repair",
      "phrases": [
        "I may have moved on too quickly. Do you want to stay with the previous point?",
        "Let me rewind - that topic may still matter.",
        "I treated that as complete, but I might have misread it.",
        "We can absolutely stay there. I don't want to force the pace.",
        "I changed lanes for efficiency, but the old lane may still be the real one.",
        "That switch was mine, not the conversation's - where would you rather be?"
      ]
    },
    {
      "id": "emotional-care",
      "label": "Consent before switching",
      "tag": "Emotional care, high stakes",
      "tone": "High-stakes",
      "phrases": [
        "Before I change topics, is this something you want heard more fully?",
        "I don't want to move on just because this is quiet. Is this something you want to stay with?",
        "This feels important even though it's gone quiet. Shall we stay here?",
        "We can switch topics; we don't need to solve this right now.",
        "Before I redirect, is there anything else that needs to be heard on this?",
        "I'd rather not rush past this. Do you want more time on it?"
      ]
    },
    {
      "id": "digital-async",
      "label": "Digital / async",
      "tag": "Chat and email threads",
      "tone": "Quick",
      "phrases": [
        "This thread feels mostly answered. I can park it and switch to the implementation question.",
        "I think this thread's answered - I'll park it unless you want more. Next useful question is timing.",
        "Happy to close this one out. Want me to open a fresh thread on delivery?",
        "Parking this for now - shall we pick up the next question?",
        "This one's wrapped, I think. Moving to timing unless you've got more."
      ]
    }
  ],
  "decisionTree": [
    {
      "condition": "The topic is still producing useful detail, emotion, decision movement, or connection.",
      "action": "Stay with it or deepen - do not switch.",
      "phrase": "Say more about that."
    },
    {
      "condition": "Energy is low, but the topic is difficult, vulnerable, risky, or about accountability.",
      "action": "Check importance before switching; do not move away from it.",
      "phrase": "I don't want to move on just because this is quiet. Do you want to stay with it?"
    },
    {
      "condition": "Energy is low and the topic is simply complete or stale.",
      "action": "Close it respectfully and look for a more alive adjacent thread.",
      "phrase": "That may be enough on this for now. Want to switch gears?"
    },
    {
      "condition": "There is a more alive adjacent thread.",
      "action": "Bridge to it rather than jumping to a random topic.",
      "phrase": "That connects to something I was curious about..."
    },
    {
      "condition": "There is no obvious next thread.",
      "action": "Offer a choice or ask a preference question instead of inventing one.",
      "phrase": "Where would you rather take this?"
    },
    {
      "condition": "You switched, but the energy did not improve.",
      "action": "Repair, ask a preference question, or return to the old topic.",
      "phrase": "I may have moved on too quickly. Want to go back?"
    }
  ],
  "ladder": [
    {
      "weak": "\"Anyway, moving on.\"",
      "better": "\"That may be enough on this topic. Want to switch gears?\"",
      "best": "\"I think this topic has probably done its job for now. The useful thread seems to be what happens next - shall we move there?\""
    },
    {
      "weak": "\"This is boring.\"",
      "better": "\"I'm not sure this thread has much energy left.\"",
      "best": "\"I notice we both got more specific when the practical part came up. Want to follow that instead of staying abstract?\""
    },
    {
      "weak": "\"Let's talk about something else.\"",
      "better": "\"Can I change the subject?\"",
      "best": "\"I don't want to cut this off if it matters. If it feels complete, I'd like to switch to the decision point.\""
    },
    {
      "weak": "\"You're stuck on this.\"",
      "better": "\"Maybe we can come back to this.\"",
      "best": "\"We may be circling. I can either ask one clarifying question, or we can park it and move to the part you seem more interested in.\""
    }
  ],
  "scenarios": [
    {
      "situation": "Casual conversation loses detail - answers shorten, eye contact drops, and both people repeat known facts.",
      "move": "Close the topic lightly and offer a new adjacent track; follow them back if they return.",
      "phrase": "This may have done its job. Want to switch to the fun part - what happened after that?"
    },
    {
      "situation": "A meeting starts circling - people restate positions without adding new evidence.",
      "move": "Name enoughness and move to the decision or next evidence, keeping an objection path open.",
      "phrase": "We may be circling. I suggest we move to the decision unless someone has new information."
    },
    {
      "situation": "A person lights up on a side point - their voice quickens and examples become specific.",
      "move": "Test a switch toward the livelier thread.",
      "phrase": "You sounded more interested when you mentioned the design side. Should we follow that for a bit?"
    },
    {
      "situation": "A digital thread becomes stale - replies are delayed, repetitive, or reduced to acknowledgements.",
      "move": "Mark closure and offer the new useful topic; answer the old thread if they ask for more.",
      "phrase": "I think this thread is answered. I'll park it unless you want more; the next useful question is timing."
    },
    {
      "situation": "A sensitive topic looks low-energy but important - the person is quiet, but the stakes are high.",
      "move": "Do not switch without permission; check importance first.",
      "phrase": "I don't want to move on just because this is quiet. Is this something you want to stay with?"
    },
    {
      "situation": "A networking chat needs a graceful pivot - the shared professional topic has gone generic.",
      "move": "Bridge to a more personal-but-safe topic and follow any values-based answer.",
      "phrase": "We've covered the formal version. I'm curious what part of the work you actually enjoy most."
    }
  ],
  "calibration": {
    "working": [
      "They add detail, brighten, or lean in after the switch.",
      "They ask a question back or pick up the new thread themselves.",
      "They move toward a decision or a concrete next step.",
      "The group relaxes or refocuses once you name enoughness.",
      "The new thread produces more specifics, speed, curiosity, or relief.",
      "They confirm it: \"Exactly, that's the real thing.\""
    ],
    "adjust": [
      "They answer the new topic mechanically or with less energy.",
      "They keep drifting back to the old topic - follow them back.",
      "They look cut off, go quiet, or seem to withdraw.",
      "Emotion is rising - reflect and stay rather than move.",
      "The silence feels thoughtful, not depleted - the topic may still be live.",
      "The urge to switch is your own boredom, not a shared need.",
      "A risk, decision, or accountability point is still open."
    ]
  },
  "drill": [
    {
      "day": "Day 1",
      "title": "Energy cue spotting",
      "task": "Across three conversations today, note one cue that energy was rising, one that it was falling, and one cue you could easily misread."
    },
    {
      "day": "Day 2",
      "title": "Read the ambiguity",
      "task": "Take five \"low-energy\" moments and, for each, write the two most likely reasons (complete, bored, tired, private, or difficult-but-important). Practise not assuming the first one."
    },
    {
      "day": "Day 3",
      "title": "Respectful close",
      "task": "Write five ways to mark a topic as \"enough for now\" without ever implying it was boring, wrong, or a waste of time."
    },
    {
      "day": "Day 4",
      "title": "Bridge construction",
      "task": "Take five flat topics and write one adjacent bridge for each. Avoid abrupt, unrelated jumps."
    },
    {
      "day": "Day 5",
      "title": "Offer the choice",
      "task": "Rewrite five of your closes so the switch is a suggestion the other person can decline, not a command."
    },
    {
      "day": "Day 6",
      "title": "Recovery reps",
      "task": "Say three repair lines aloud until they sound natural: \"I may have moved on too quickly,\" \"We can absolutely stay there,\" and \"I might have misread that.\""
    },
    {
      "day": "Day 7",
      "title": "Meeting version",
      "task": "In one real conversation or meeting, convert a circling discussion into a decision move without blaming the group, then check whether energy improved."
    }
  ],
  "checklist": [
    "Did I switch because the conversation needed it, or because I wanted relief?",
    "Did I check for emotion, stakes, or unresolved accountability first?",
    "Did I close the old topic respectfully, without implying it was boring?",
    "Was the new topic adjacent and useful, or clearly offered as a choice?",
    "Did the other person show more detail, energy, or ease after the switch?",
    "If I misread it, did I repair without defensiveness and preserve their dignity?"
  ],
  "example": {
    "without": [
      "A: \"The vendor had three pricing tiers.\"",
      "B: \"Okay, anyway - what are you doing this weekend?\"",
      "A: \"Uh... I was still explaining the vendor.\"",
      "Why it is weak: the switch is abrupt, with no close, no bridge, and no consent. It leaves the first person mid-thought and signals that their topic did not matter."
    ],
    "with": [
      "A: \"The vendor had three pricing tiers.\"",
      "B: \"Got it - it sounds like we understand the pricing now. Want to switch to what you actually need to decide?\"",
      "A: \"Yes, that's the useful part.\"",
      "Why the better version works: it closes the old topic and bridges to the live purpose.",
      "A: \"The vendor had three pricing tiers, but I keep coming back to whether the team will actually use it.\"",
      "B: \"The energy seems less around the prices and more around adoption. Should we move there?\"",
      "A: \"Exactly. That's the real concern.\"",
      "Why the advanced version works: it names the energy shift out loud, tests it as a choice, and follows the more useful thread."
    ],
    "note": "The move is the same every time; only the close, the bridge, and the consent change. Abrupt jumps skip all three."
  },
  "influencePayoff": {
    "feeling": "\"They closed that cleanly instead of dragging it - and I didn't feel dismissed.\"",
    "principle": "People often feel more respected when a flat thread is closed cleanly instead of dragged. Responding to the conversation's live signal reads as attunement, not agenda.",
    "gains": [
      "Ease",
      "Momentum",
      "Conversational trust",
      "Clarity",
      "Fewer wasted loops in meetings",
      "Less awkward over-staying in social settings",
      "You read as attuned rather than self-serving"
    ],
    "whyMostFail": [
      "They switch too abruptly or too early, especially away from emotion, accountability, or unresolved stakes.",
      "They label the old topic (\"this is boring\") instead of marking it complete.",
      "They read their own boredom as the shared conversation's signal.",
      "They over-explain the transition until the switch becomes heavier than the topic."
    ]
  },
  "fieldTip": {
    "headline": "Do not \"change the subject.\" Close one door, point to the next, and let the other person help decide whether to walk through it.",
    "body": "The cleanest switch is usually one sentence of respect plus one sentence of direction. You are not overriding the conversation; you are naming what it seems ready for and offering the next step as a choice.",
    "example": "\"That may be enough on this for now. The live question seems to be X - want to go there?\"",
    "dont": "\"Anyway, moving on.\" / \"This is going nowhere.\"",
    "do": "\"I think this has done its job. Shall we follow the livelier thread?\""
  },
  "method": [
    {
      "step": "1",
      "title": "Perceive the energy",
      "body": "Notice the visible cues: shorter answers, repetition, loss of specificity, lower warmth, or a different thread that suddenly creates detail and animation. Energy is data - read it before you act on it.",
      "examples": [
        { "label": "Cue", "text": "Answers shrink to \"yeah, basically\" and you both start repeating known facts." }
      ]
    },
    {
      "step": "2",
      "title": "Interpret before you assume",
      "body": "Low energy can mean completion, boredom, fatigue, privacy, discomfort - or importance. Do not decide too quickly. The costly error is treating a hard-but-important topic as a finished one.",
      "examples": [
        { "label": "Check", "text": "Is this quiet because it's done, or quiet because it's difficult?" }
      ]
    },
    {
      "step": "3",
      "title": "Close respectfully",
      "body": "Mark that the topic may be enough for now, not that it was bad. A clean close protects both the person and the topic you are leaving.",
      "examples": [
        { "label": "Say", "text": "That may be enough on this for now." }
      ]
    },
    {
      "step": "4",
      "title": "Bridge to the new thread",
      "body": "Use an adjacent connection when you can - abrupt, unrelated jumps are harder to trust. A good bridge shows the new topic grew out of the old one.",
      "examples": [
        { "label": "Say", "text": "That connects to something I was curious about..." }
      ]
    },
    {
      "step": "5",
      "title": "Offer it as a choice",
      "body": "A clean switch sounds like a suggestion, not a command. Leave a visible way for the other person to decline or stay - this matters most when there is a power difference.",
      "examples": [
        { "label": "Say", "text": "Should we follow that for a bit, or stay here?" }
      ]
    },
    {
      "step": "6",
      "title": "Calibrate and repair",
      "body": "After the switch, watch the energy. If it improves, continue. If the person returns to the old topic or looks cut off, follow them back or repair without defensiveness.",
      "examples": [
        { "label": "Repair", "text": "I may have moved on too quickly. Do you want to stay with the previous point?" }
      ]
    }
  ],
  "liveThreadClues": [
    "\"yeah, basically\" or \"anyway\" - verbal closure signals",
    "Both people repeating facts you have already established",
    "Answers shrinking to \"mm\", \"sure\", or one word",
    "Examples and specifics drying up",
    "Warmth or eye contact dropping",
    "A side point where the voice suddenly quickens and gets specific",
    "In a group: the same positions restated with no new evidence"
  ],
  "commonMistakes": [
    {
      "mistake": "Switching out of your own boredom",
      "soundsLike": "\"Anyway, moving on.\"",
      "better": "\"That may be enough on this for now - unless there's more you want to say?\""
    },
    {
      "mistake": "Switching away from vulnerability or accountability without permission",
      "soundsLike": "Changing the subject the moment someone gets serious.",
      "better": "\"Before I change topics, is this something you want heard more fully?\""
    },
    {
      "mistake": "Labelling the old topic",
      "soundsLike": "\"This is boring,\" \"We're wasting time,\" \"You're rambling.\"",
      "better": "\"I think this has probably done its job for now.\""
    },
    {
      "mistake": "Over-explaining the transition",
      "soundsLike": "A thirty-second speech about why you're changing topics.",
      "better": "\"That's covered, I think. Shall we move to X?\""
    },
    {
      "mistake": "Forcing the new topic",
      "soundsLike": "Pushing ahead while they keep returning to the old one.",
      "better": "\"You keep coming back to that - let's stay with it.\""
    },
    {
      "mistake": "Mistaking quiet seriousness for low energy",
      "soundsLike": "Treating a thoughtful silence as a dead thread.",
      "better": "\"Take your time - I don't want to rush past this.\""
    }
  ],
  "recoveryPhrases": [
    "I may have moved on too quickly. Do you want to stay with the previous point?",
    "Let me rewind - that topic may still matter.",
    "I treated that as complete, but I might have misread it.",
    "We can absolutely stay there. I don't want to force the pace.",
    "I changed lanes for efficiency, but the old lane may still be the real one.",
    "Before I redirect, is there anything else that needs to be heard on this?",
    "That switch was mine, not the conversation's. Where would you rather be?"
  ],
  "bestRecoveryLine": "I may have moved on too quickly. Do you want to stay with the previous point?",
  "chains": [
    {
      "label": "Read then move",
      "sequence": "TC041 Topic Energy Tracking -> TC059 Energy-based topic switching -> TC038 Conversation threading",
      "example": [
        "Notice where energy is rising and falling, switch to the better thread, then keep continuity as it develops.",
        "\"The energy picked up around delivery - shall we follow that? ... Good, so the real question there is timing.\""
      ]
    },
    {
      "label": "Detect then move",
      "sequence": "TC056 Topic preference detection -> TC059 Energy-based topic switching -> TC054 Similarity signalling",
      "example": [
        "Detect what interests them, move toward it, then build rapport through shared ground.",
        "\"You lit up on the design side - let's go there. ... I'm the same; that's the part I actually enjoy.\""
      ]
    },
    {
      "label": "Reflect first, then move",
      "sequence": "TC058 Feeling-plus-need reflection -> TC059 Energy-based topic switching",
      "example": [
        "Reflect the emotion first; switch only after the person signals enoughness or relief.",
        "\"Sounds like that was heavy and you needed it heard. ... Ready to move to what happens next, or stay a bit longer?\""
      ]
    },
    {
      "label": "Slow, switch, state",
      "sequence": "TC031 Slow Down Under Pressure -> TC059 Energy-based topic switching -> TC044 BLUF",
      "example": [
        "Slow the pace, switch from circling context to the useful issue, then state the decision point clearly.",
        "\"Let's take a breath. The live issue is timeline, not background. Bottom line: we need a date by Friday.\""
      ]
    }
  ],
  "relatedTechniques": [
    {
      "id": "TC041",
      "reason": "Topic Energy Tracking notices and names where energy is rising or falling. Track first with TC041; reach for TC059 once you have enough of a read to actually move the conversation."
    },
    {
      "id": "TC038",
      "reason": "Conversation threading follows and preserves an active thread. Use TC038 while a thread still has life; use TC059 once it has gone flat and a more alive track is available."
    },
    {
      "id": "TC056",
      "reason": "Topic preference detection discovers what someone likes to talk about. Detect the preference with TC056; switch with TC059 once that preference has enough live energy to justify moving."
    },
    {
      "id": "TC058",
      "reason": "Feeling-plus-need reflection stays with live emotion or need. When someone is vulnerable, reflect with TC058 first - never use TC059 to escape emotional depth."
    },
    {
      "id": "TC062",
      "reason": "Thread return goes back to an earlier thread that still matters. Use TC062 when the destination is the old thread; use TC059 when the destination is a newly live one."
    },
    {
      "id": "TC060",
      "reason": "Positive assumption frames someone's intent generously. It can soften a switch, but it is not a topic-management move - use TC060 to frame intent, TC059 to change the lane."
    }
  ]
};
