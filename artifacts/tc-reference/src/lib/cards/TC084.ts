import type { CardData } from "../card-types";

export const TC084: CardData = {
  pdfUrl: "cards/TC084/TC084_TwoCard_Combined.pdf",
  resources: [
    { label: "Two-card (combined)", description: "Front and back study cards on one sheet — the designed visual card.", href: "cards/TC084/TC084_TwoCard_Combined.pdf", type: "pdf", group: "Visual Cards" },
    { label: "One-card summary", description: "The whole technique on a single designed card.", href: "cards/TC084/TC084_OneCard.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Quick card", description: "One-page glance card for fast recall.", href: "cards/TC084/TC084_Quick_Card.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Detailed guide", description: "The full written guide with every section.", href: "cards/TC084/TC084_Detailed_Guide.pdf", type: "pdf", group: "Written Guides" },
    { label: "Reference sheet", description: "Dense one-page reference of the key moves.", href: "cards/TC084/TC084_Reference.pdf", type: "pdf", group: "Written Guides" },
    { label: "Phrase bank (CSV)", description: "Every phrase, ready to import or drill.", href: "cards/TC084/TC084_Phrase_Bank.csv", type: "csv", group: "Practice Tools" },
    { label: "Anki flashcards", description: "Import into Anki for spaced-repetition practice.", href: "cards/TC084/TC084_Anki_Flashcards.csv", type: "csv", group: "Practice Tools" },
  ],
  "id": "TC084",
  "whyItWorks":
    "Listening for values means hearing what a person is protecting, pursuing, missing or proud of beneath the surface content - the fairness, reliability, respect, craft, safety or belonging under their facts, complaint or excitement - and reflecting it back tentatively in ordinary language. It works because people usually speak in events and logistics while feeling the issue at the level of what they care about; when they hear that stake named without being forced, they stop having to prove why it matters and the conversation becomes cleaner and less repetitive.",
  "whatItIsNot": [
    "It is not values-based persuasion, or framing a request around a value to move someone.",
    "It is not telling someone what they should value, or handing them a moral label.",
    "It is not a personality read, a therapy move, or a shortcut to intimacy.",
    "It is not saying \"you are a person who values X\" unless the person has said so themselves; safer is \"it sounds like X mattered there.\""
  ],
  "overview": {
    "coreFormula": [
      "Surface content: what actually happened?",
      "Value clue: what mattered in it - fairness, reliability, respect, craft, safety, belonging?",
      "Tentative phrase: \"It sounds like...\" / \"Part of this may be...\" / \"I may be off, but...\"",
      "Calibration: do they soften, add detail, clarify or correct?",
      "Recovery: \"I may be reading that wrong - use your wording, not mine.\""
    ],
    "minimumViableMove":
      "Name one likely value tentatively and leave room for correction: \"It sounds like the fairness piece really mattered there - tell me if that is off.\"",
    "impact": "Medium",
    "difficulty": "Hard",
    "misuse":
      "Overclaiming - acting as if you know the person's values better than they do. It fails when you stack several values into one sentence, moralise, or ignore a correction because your read felt insightful. If they tighten, go flat or change topic, drop the value read at once.",
    "bestFor": [
      "When someone repeats a concern even after the facts are understood.",
      "When a complaint carries a fairness, respect, trust, safety or autonomy signal.",
      "When excitement reveals craft, contribution, challenge, belonging or growth.",
      "When a person seems more affected by what an event represents than by the event itself.",
      "When advice would be premature and the underlying stake needs recognising first."
    ]
  },
  "notFor": [
    "The person wants practical information, not reflection.",
    "You have too little evidence and would be guessing wildly.",
    "The value read would sound grand, invasive, moralising or strategic.",
    "The relationship is not safe enough for depth.",
    "The person is dysregulated and needs grounding, action or direct care before interpretation.",
    "Physical safety or an immediate emergency takes priority."
  ],
  "phraseBank": [
    {
      "id": "starter",
      "label": "Starter reflections",
      "tag": "Quick one-liners",
      "tone": "Quick",
      "phrases": [
        "It sounds like the fairness piece really mattered there.",
        "Sounds like loyalty was the part that hurt.",
        "Part of this seems to be about trust, not just timing.",
        "The respect part seems to matter more than the logistics.",
        "Sounds like this is less about the one incident and more about trust.",
        "The trust piece seems important here."
      ]
    },
    {
      "id": "social",
      "label": "Social and everyday",
      "tag": "Warmth, belonging, honesty",
      "tone": "Warm",
      "phrases": [
        "It sounds like loyalty mattered there.",
        "That seems like it touched the belonging piece.",
        "I can hear how much honesty matters in this.",
        "It sounds like you wanted the effort to be recognised.",
        "It sounds like you cared about doing it properly, not just getting it done.",
        "The thing you keep coming back to seems to be being taken seriously."
      ]
    },
    {
      "id": "professional",
      "label": "Work and standards",
      "tag": "Meetings, delivery, decisions",
      "tone": "Professional",
      "phrases": [
        "It sounds like the standard mattered to you, not only the deadline.",
        "This seems tied to ownership and follow-through.",
        "It sounds like predictability would make this easier to work with.",
        "It sounds like reliability is the issue more than the change itself.",
        "It sounds like being part of the plan mattered, not just the outcome.",
        "Part of this seems to be about what you could rely on."
      ]
    },
    {
      "id": "name-the-value",
      "label": "Naming the value",
      "tag": "One clear value, checked",
      "tone": "Direct",
      "phrases": [
        "It sounds like the fairness piece is what made this land so strongly.",
        "The respect piece seems to matter more than the logistics alone.",
        "It sounds like having room to choose was important there.",
        "It sounds like doing it properly mattered, not just finishing it.",
        "It sounds like you wanted the work to mean something.",
        "The thread I am hearing is reliability. Correct me if that is off.",
        "I may be off, but it sounds like reliability was the real issue."
      ]
    },
    {
      "id": "digital",
      "label": "Digital and text",
      "tag": "Short written reflections",
      "tone": "Quick",
      "phrases": [
        "I may be reading this wrong, but the key value seems to be fairness.",
        "Sounds like the main thread here is trust, not the single incident.",
        "The bit you keep returning to seems to be being kept in the loop.",
        "It reads like fairness is the part that stung. Tell me if that is off.",
        "Happy to stay practical, but it sounds like respect is the real issue."
      ]
    },
    {
      "id": "correction-space",
      "label": "Correction space and release",
      "tag": "Hand it back",
      "tone": "Repair",
      "phrases": [
        "Tell me if that is off.",
        "I may be reading that wrong.",
        "Use your wording, not mine.",
        "That may be too strong a read.",
        "We do not have to frame it that way.",
        "We can keep this practical if that is more useful.",
        "I do not want to put values in your mouth.",
        "What would be the more accurate word?"
      ]
    },
    {
      "id": "high-pressure",
      "label": "High-pressure and conflict",
      "tag": "Safety, dignity, stakes",
      "tone": "High-stakes",
      "phrases": [
        "Let me check the value at stake before we solve it.",
        "I do not want to overread this, but is the safety piece the main concern?",
        "It sounds like respect is the part we need to protect while we decide next steps.",
        "Before we decide, I want to check the value we need to protect: is it safety, choice, or something else?",
        "It sounds like the safety piece is central here. Correct me if I have that wrong."
      ]
    }
  ],
  "method": [
    {
      "step": "1",
      "title": "Listen for repeated energy",
      "body": "The value is usually where the person speeds up, slows down, repeats, intensifies or keeps returning. When they explain the same point again after the facts are already clear, that repetition is the signal - they are protecting something the logistics have not covered yet.\nExample: a colleague keeps circling back to the late change long after you have understood what changed."
    },
    {
      "step": "2",
      "title": "Ask silently what is at stake",
      "body": "Before you speak, ask yourself which value may sit underneath: fairness, freedom, reliability, craft, care, safety, loyalty, respect, belonging, competence, honesty, stability, growth or contribution. Hold it as a possibility, not a verdict. You are noticing a thread, not diagnosing the person."
    },
    {
      "step": "3",
      "title": "Choose the smallest word that fits",
      "body": "Pick one ordinary value word the evidence actually supports - not the grandest one available. One value, not a stack. \"Being kept in the loop\" beats \"you need control.\" If several values are possible, choose the smallest or ask a light question rather than guessing wildly."
    },
    {
      "step": "4",
      "title": "Put it in a tentative sentence",
      "body": "Offer the value, do not declare it. Lead with \"It sounds like...\", \"Part of this may be...\" or \"I may be off, but...\". Tie it to what they said.\nToo strong: \"You obviously care about respect.\"\nBetter: \"It sounds like the respect part landed harder than the logistics.\""
    },
    {
      "step": "5",
      "title": "Add room for correction, then pause",
      "body": "Attach a correction handle and stop talking: \"tell me if that is off\", \"use your wording, not mine.\" The pause is where they own, edit or decline the read. Do not fill the silence by explaining why your interpretation made sense."
    },
    {
      "step": "6",
      "title": "Track the signal and follow it",
      "body": "If it lands - they say \"exactly\", add detail, or offer a cleaner word - stay with their wording from here on. If it misses - they go flat, correct you or withdraw - back out cleanly and return to content. One small reflection is enough; you do not need to be right, you need to be listening.\nExample: \"It sounds like the hard part was not only the delay; it was the reliability piece.\""
    }
  ],
  "liveThreadClues": [
    "\"It wasn't really about...\"",
    "\"What actually got to me was...\"",
    "\"I just wanted them to...\"",
    "\"It's the principle of it.\"",
    "\"After everything I'd put in...\"",
    "\"They didn't even ask.\"",
    "Repeating the same point after the facts are already clear.",
    "Speeding up, slowing down or keeping returning to one detail."
  ],
  "influencePayoff": {
    "feeling": "\"They heard what actually mattered to me, not just what happened.\"",
    "principle":
      "People become less defensive once the real stake is recognised, because they no longer have to keep proving why something matters. Influence here comes from accurate attention, not leverage.",
    "gains": [
      "Reduced defensiveness",
      "Fewer repeated complaints",
      "Responses aimed at the real stake, not the surface detail",
      "More specific praise, repair, conflict and support",
      "Preserved dignity, because the read stays tentative and correctable",
      "A cleaner, less circular conversation",
      "Trust that you are actually listening"
    ],
    "whyMostFail": [
      "They overclaim - acting as if they know the person's values better than the person does.",
      "They stack several values into one sentence instead of naming one.",
      "They deliver it mechanically or therapeutically, so it sounds like a technique.",
      "They ignore a correction because their interpretation felt insightful.",
      "They reach for a value read when the person just needed practical help."
    ]
  },
  "ladder": [
    {
      "weak": "You are obsessed with fairness.",
      "better": "Fairness matters to you.",
      "best": "It sounds like the fairness piece really mattered in how this landed."
    },
    {
      "weak": "You clearly have trust issues.",
      "better": "This involved trust.",
      "best": "Part of this seems to be about what you could rely on."
    },
    {
      "weak": "You just need control.",
      "better": "Autonomy is important here.",
      "best": "It sounds like having some room to choose was a big part of it."
    },
    {
      "weak": "You care too much about being respected.",
      "better": "Respect is part of this.",
      "best": "The respect piece seems to be what made it feel bigger than the task."
    },
    {
      "weak": "You are a perfectionist.",
      "better": "Quality matters to you.",
      "best": "It sounds like doing it properly mattered more than just finishing it."
    }
  ],
  "example": {
    "without": [
      "A: I told them twice the deadline was tight, and they still changed it at the last minute.",
      "B: You obviously have control issues.",
      "A: No, that is not what I am saying.",
      "Why it is weak: it slaps a personality label on a value, so the person spends the next turn defending themselves instead of feeling understood."
    ],
    "with": [
      "A: I told them twice the deadline was tight, and they still changed it at the last minute.",
      "B: It sounds like the hard part was not only the change; it was not being able to rely on the agreement.",
      "A: Exactly. If they had flagged it earlier, I would have been fine.",
      "B: So the value at stake is predictability and being treated as part of the plan.",
      "A: Yes, that is it."
    ],
    "note":
      "The advanced version names the likely value, checks it against the person's response, then keeps their confirmed wording (\"predictability\", \"part of the plan\") rather than the label \"control issues.\""
  },
  "commonMistakes": [
    {
      "mistake": "Turning a value read into a personality label.",
      "soundsLike": "\"You obviously have trust issues.\"",
      "better": "\"Part of this seems to be about what you could rely on.\""
    },
    {
      "mistake": "Stacking several values in one sentence.",
      "soundsLike": "\"So this is about fairness, respect, trust and belonging.\"",
      "better": "\"It sounds like the respect piece mattered most here.\""
    },
    {
      "mistake": "Using value language to sound morally superior.",
      "soundsLike": "\"I just care about fairness more than you do.\"",
      "better": "\"It sounds like fairness is the part we both want to get right.\""
    },
    {
      "mistake": "Sounding therapeutic, grand or rehearsed.",
      "soundsLike": "\"What core value does this activate for you?\"",
      "better": "\"Sounds like doing it properly mattered, not just finishing.\""
    },
    {
      "mistake": "Ignoring a correction because your read felt insightful.",
      "soundsLike": "\"No, I really think it's about control.\"",
      "better": "\"Fair enough - what would be the more accurate word?\""
    },
    {
      "mistake": "Confusing a passing preference with a deep value.",
      "soundsLike": "\"So punctuality is a core value for you.\"",
      "better": "\"Sounds like being kept in the loop was the bit that stung.\""
    },
    {
      "mistake": "Reaching for a value read during acute distress.",
      "soundsLike": "\"It sounds like safety is your deepest value right now.\"",
      "better": "\"Let's sort the immediate thing first - are you okay?\""
    }
  ],
  "calibration": {
    "working": [
      "They say \"yes,\" \"exactly,\" or offer a cleaner word.",
      "They add detail about what mattered.",
      "Their tone softens or becomes more precise.",
      "They correct the value without defensiveness.",
      "The conversation becomes less repetitive.",
      "They pick up your phrase and make it their own."
    ],
    "adjust": [
      "They answer politely but briefly.",
      "They shift back to facts only.",
      "They laugh awkwardly or say \"I guess.\"",
      "They seem to accept the phrase just to avoid disagreeing.",
      "They say \"no, that is not it\" - accept it and use their word.",
      "They become defensive, embarrassed or withdrawn - release the read.",
      "The label starts to sound moralising or loaded.",
      "If the signal is not clearly green, make the next move smaller."
    ]
  },
  "recoveryPhrases": [
    "I may be reading that wrong.",
    "Use your wording, not mine.",
    "That may be too strong a frame.",
    "Let me pull that back.",
    "I do not want to put values in your mouth.",
    "Maybe the simpler version is just that the timing was hard.",
    "We can stay with the practical side if that is more useful.",
    "What would be the more accurate word?"
  ],
  "bestRecoveryLine": "I may be reading that wrong - use your wording, not mine.",
  "chains": [
    {
      "label": "Understand before you name",
      "sequence": "TC004 Reflective listening -> TC084 Listen for values -> TC029 Strategic silence",
      "example": [
        "So it changed at the last minute and you'd already re-planned around it.",
        "It sounds like the reliability piece mattered more than the change itself.",
        "(Then stay quiet and let them fill the space.)"
      ]
    },
    {
      "label": "Feeling to value",
      "sequence": "TC006 Emotional labelling -> TC084 Listen for values -> TC011 Summary check",
      "example": [
        "You sound genuinely let down.",
        "Part of this seems to be about being kept in the loop.",
        "So the fix is earlier warning, not a different decision - have I got that right?"
      ]
    },
    {
      "label": "Meaning to autonomy",
      "sequence": "TC040 Meaning reflection -> TC084 Listen for values -> TC021 Autonomy release",
      "example": [
        "This one clearly meant a lot.",
        "It sounds like doing it properly is the part that mattered.",
        "How you take it from here is completely your call."
      ]
    },
    {
      "label": "Structure to request",
      "sequence": "TC043 OARS -> TC084 Listen for values -> TC013 Clean request",
      "example": [
        "(Open question, affirm, reflect, summarise.)",
        "It sounds like predictability is what would make this workable.",
        "Could we agree changes get flagged a day ahead?"
      ]
    }
  ],
  "scenarios": [
    {
      "situation": "Casual conversation - a friend keeps returning to someone \"not showing up.\"",
      "move": "Reflect the value gently and stay with their wording if they nod.",
      "phrase": "Sounds like loyalty is the part that hurt."
    },
    {
      "situation": "Workplace - a colleague keeps stressing last-minute changes.",
      "move": "Name the value under the complaint, then summarise and move to action if they clarify the operational need.",
      "phrase": "It sounds like reliability is the issue more than the change itself."
    },
    {
      "situation": "Conflict or repair - they say \"it wasn't about the money.\"",
      "move": "Offer the likely value and accept a correction immediately.",
      "phrase": "It sounds like respect was the bigger piece. Tell me if that is off."
    },
    {
      "situation": "Digital message - a long note that repeats one principle.",
      "move": "Reflect the single thread; do not pile on follow-up questions.",
      "phrase": "I may be reading this wrong, but the thread I hear is fairness."
    },
    {
      "situation": "High-stakes - safety, dignity, choice or trust is visibly at stake.",
      "move": "Check the value to protect out loud; if pressure rises, switch to direct safety and action language.",
      "phrase": "Before we decide, I want to check the value we need to protect: is it safety, choice, or something else?"
    }
  ],
  "decisionTree": [
    {
      "condition": "They are still telling the story.",
      "action": "Keep listening; do not name a value yet.",
      "phrase": ""
    },
    {
      "condition": "A value word is explicit.",
      "action": "Reflect their exact word rather than inventing one.",
      "phrase": "So the word you keep using is fairness."
    },
    {
      "condition": "A value is implied but unspoken.",
      "action": "Offer it tentatively and leave correction space.",
      "phrase": "I may be off, but it sounds like reliability mattered there."
    },
    {
      "condition": "Several values are possible.",
      "action": "Choose the smallest that fits, or ask.",
      "phrase": "Was the hard part the trust, or the timing?"
    },
    {
      "condition": "They correct you.",
      "action": "Accept it at once and switch to their word.",
      "phrase": "Fair enough - respect is the better word."
    },
    {
      "condition": "They go flat, or the moment needs action.",
      "action": "Release the read; return to content or act directly.",
      "phrase": "Let's stay practical - what needs to happen next?"
    }
  ],
  "drill": [
    {
      "day": "Day 1",
      "title": "Collect real lines",
      "task": "Write five sentences someone might say after a frustrating or meaningful event - drawn from your own week where you can."
    },
    {
      "day": "Day 2",
      "title": "Separate fact from value",
      "task": "For each line, underline the surface fact, then circle the possible value cue underneath it."
    },
    {
      "day": "Day 3",
      "title": "Draft the reflection",
      "task": "Write one tentative value reflection under twelve words for each line, starting with \"It sounds like...\" or \"Part of this may be...\""
    },
    {
      "day": "Day 4",
      "title": "Add correction space",
      "task": "Attach a correction handle to each reflection - \"tell me if that is off\", \"use your wording, not mine\" - so the person can decline it."
    },
    {
      "day": "Day 5",
      "title": "Cut the overclaim",
      "task": "Strike any moralising, diagnostic or grand wording, and any personality labels. Reduce every stacked reflection to a single value."
    },
    {
      "day": "Day 6",
      "title": "Say it aloud",
      "task": "Read each line in an ordinary voice. Rewrite anything that sounds like a clever interpretation rather than plain attention."
    },
    {
      "day": "Day 7",
      "title": "Use it live",
      "task": "In one low-stakes real conversation, offer a single value reflection, watch the signal, and note whether you should have gone smaller."
    }
  ],
  "checklist": [
    "Did I reflect a value they signalled, not one I wanted them to have?",
    "Did I keep it tentative and leave room to correct me?",
    "Did I name one value, not a stack, and avoid a personality label?",
    "Did I follow their wording once they confirmed it?",
    "Did I back out cleanly the moment it missed?",
    "Did the move make the conversation clearer, or heavier?"
  ],
  "fieldTip": {
    "headline": "Name the value lightly, then hand it back.",
    "body":
      "Values are heard best when they are offered, not declared. Say one possible value, tie it to what the person actually said, then let them own it, edit it or drop it. One small reflection is enough - the other person decides whether it fits.",
    "example": "It sounds like [value] was the piece that mattered there - tell me if that is off.",
    "dont": "You're someone who values fairness above everything.",
    "do": "It sounds like the fairness piece mattered here - is that right?"
  },
  "relatedTechniques": [
    {
      "id": "TC004",
      "reason": "Reflective listening captures content and feeling accurately. Use TC004 when the person mainly needs to be heard; move to TC084 only after a clear value cue. Start with TC004 if unsure."
    },
    {
      "id": "TC006",
      "reason": "Emotional labelling names the feeling (anger, fear, relief); TC084 names the principle or stake underneath. Ask: am I naming a feeling, or a value? Do not call one the other."
    },
    {
      "id": "TC017",
      "reason": "Values-based framing uses a value to frame a proposal or request; TC084 only listens for the person's own value. If you are trying to move them, use TC017 with autonomy release; if you are trying to understand them, use TC084."
    },
    {
      "id": "TC037",
      "reason": "Double-sided reflection holds two competing sides or values. If you hear \"part of me... but...\", use TC037 first; use TC084 when one clear value is emerging beneath the story."
    },
    {
      "id": "TC040",
      "reason": "Meaning reflection asks \"why did it matter?\"; values listening asks \"what did it show they care about?\" Use TC040 for broader significance, TC084 when the value itself is the key stake."
    },
    {
      "id": "TC043",
      "reason": "OARS is a full listening framework (open question, affirm, reflect, summarise). Use TC043 to structure a whole conversation; use TC084 for the single, specific values reflection inside it."
    }
  ]
};
