import type { CardData } from "../card-types";

export const TC017: CardData = {
  pdfUrl: "cards/TC017/TC017_TwoCard_Combined.pdf",
  resources: [
    { label: "Two-card (combined)", description: "Front and back study cards on one sheet — the designed visual card.", href: "cards/TC017/TC017_TwoCard_Combined.pdf", type: "pdf", group: "Visual Cards" },
    { label: "One-card summary", description: "The whole technique on a single designed card.", href: "cards/TC017/TC017_OneCard.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Quick card", description: "One-page glance card for fast recall.", href: "cards/TC017/TC017_Quick_Card.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Detailed guide", description: "The full written guide with every section.", href: "cards/TC017/TC017_Detailed_Guide.pdf", type: "pdf", group: "Written Guides" },
    { label: "Reference sheet", description: "Dense one-page reference of the key moves.", href: "cards/TC017/TC017_Reference.pdf", type: "pdf", group: "Written Guides" },
    { label: "Phrase bank (CSV)", description: "Every phrase, ready to import or drill.", href: "cards/TC017/TC017_Phrase_Bank.csv", type: "csv", group: "Practice Tools" },
    { label: "Anki flashcards", description: "Import into Anki for spaced-repetition practice.", href: "cards/TC017/TC017_Anki_Flashcards.csv", type: "csv", group: "Practice Tools" },
  ],
  "id": "TC017",
  "whyItWorks": "Values-based framing means connecting a choice, request or interpretation to a value the person has already shown or stated, so the frame feels self-consistent rather than imposed. It works because people move towards a decision more readily when it fits who they already are than when it is pushed on them from outside. The move keeps the exchange accurate, respectful and easy to follow: the other person does not have to guess whether you understood them or what you are asking. The rule that keeps it honest is simple - use values the person owns, and do not lend them values for your convenience.",
  "whatItIsNot": [
    "It is not projecting values onto someone, moralising, or reaching for buzzwords to sound principled.",
    "It is not \"as someone who cares about X...\" when X has not actually been shown or stated.",
    "It is not a dominance move, a diagnostic label, or a way to manipulate someone's sense of identity.",
    "It is not a shortcut around consent and context, or a script to force closeness that has not been earned."
  ],
  "overview": {
    "coreFormula": [
      "Listen for an endorsed value -> name it tentatively -> connect it to the choice -> leave autonomy intact.",
      "Given how much you care about fairness, the process might matter as much as the outcome.",
      "You have said quality matters more than speed here - does that change the decision?",
      "If protecting trust is the value, the next step probably needs to be visible.",
      "Because autonomy matters to you, I would frame this as a choice rather than an instruction."
    ],
    "minimumViableMove": "Name one value the person has actually stated, link it to the choice in a single plain sentence, and leave the decision with them.",
    "impact": "Medium",
    "difficulty": "Hard",
    "misuse": "It fails when you lend someone a value they never claimed, or deliver the frame so mechanically that it reads as a tactic - moralising or pressure dressed up as clarity, used to push your own agenda rather than to help them see the choice.",
    "bestFor": [
      "Framing a decision so it fits what the person already cares about",
      "Motivating action when facts alone are not enough",
      "Clarifying trade-offs between competing priorities",
      "Making a request feel consistent rather than imposed",
      "Leadership conversations about why a choice matters",
      "Helping someone see their own values in a hard call"
    ]
  },
  "notFor": [
    "You do not actually know their values",
    "The value is sensitive, contested or still raw",
    "Urgency requires direct action, not framing",
    "The frame would shame, corner or expose them",
    "You would be lending them a value for your own convenience",
    "Physical safety or an emergency takes priority"
  ],
  "phraseBank": [
    {
      "id": "quick-starters",
      "label": "Quick starters",
      "tag": "Short openers",
      "tone": "Quick",
      "phrases": [
        "You care about getting this right - does that point one way?",
        "Sounds like fairness matters most here.",
        "If reliability is the priority, one option fits better.",
        "That reads like a trust question to me.",
        "Feels like this comes down to what you value most.",
        "You have said quality matters - does that settle it?",
        "Given what matters to you, which way feels more like you?",
        "Is this really about speed, or about doing it properly?"
      ]
    },
    {
      "id": "warm-naming",
      "label": "Warm / tentative naming",
      "tag": "Naming the value gently",
      "tone": "Warm",
      "phrases": [
        "The thing I keep hearing you value is fairness - am I reading that right?",
        "It sounds like being honest with them matters to you a lot.",
        "You seem to care most about not letting people down.",
        "I might be wrong, but loyalty seems to be doing a lot of the work here.",
        "What I am picking up is that you would rather be straight than smooth.",
        "It feels like protecting the relationship matters more than winning the point.",
        "You have mentioned trust a few times - it clearly means something to you."
      ]
    },
    {
      "id": "professional-decisions",
      "label": "Work / decisions",
      "tag": "Meeting, client, decision",
      "tone": "Professional",
      "phrases": [
        "You have framed reliability as the priority - option B looks more consistent with that.",
        "If quality matters more than speed here, the timeline might need to move.",
        "Given the team values transparency, showing the reasoning may matter as much as the decision.",
        "You said the client relationship comes first - does that change which we choose?",
        "If protecting trust is the goal, the next step probably needs to be visible.",
        "Since fairness is the standard we have set, the process should probably match it.",
        "You have been clear that developing people matters - this call could reflect that."
      ]
    },
    {
      "id": "direct-ask",
      "label": "Framing the ask",
      "tag": "Requests, trade-offs",
      "tone": "Direct",
      "phrases": [
        "Because autonomy matters to you, I would put this as a choice, not an instruction.",
        "You care about doing it once and doing it well - can we build in the extra day?",
        "Given how much fairness matters to you, would you be open to hearing both sides first?",
        "If consistency is what you value, could we apply the same rule here?",
        "You have said clarity matters - can I check I have understood before I ask?",
        "Since you value people's time, shall we keep this to one decision?"
      ]
    },
    {
      "id": "repair-stepping-back",
      "label": "Softening / stepping back",
      "tag": "Releasing the pressure",
      "tone": "Repair",
      "phrases": [
        "I may have read your values wrong there - put me straight.",
        "Let me say that more plainly, without the frame.",
        "I do not want to put words in your mouth about what matters to you.",
        "Forget how I framed it - what actually matters to you here?",
        "No need to make this about principles if it is not helpful.",
        "I jumped ahead by naming a value you had not. My mistake.",
        "That came out more loaded than I meant - let me try again."
      ]
    },
    {
      "id": "high-stakes-pressure",
      "label": "Conflict / pressure",
      "tag": "Contested or guarded",
      "tone": "High-stakes",
      "phrases": [
        "I am not telling you what to value - I am checking whether this fits what you already do.",
        "You care about fairness, and so do I - can we start from there?",
        "If we both value getting this right, the disagreement is about how, not whether.",
        "I know trust matters to you here, which is exactly why I want to be careful with it.",
        "This is your call. I am only pointing out where it lines up with what you have said matters.",
        "If I have misjudged what is important to you, tell me and I will drop it."
      ]
    },
    {
      "id": "digital-written",
      "label": "Digital / text",
      "tag": "One clean line",
      "tone": "Quick",
      "phrases": [
        "To make sure I am framing this right - is trust the thing that matters most here?",
        "Quick check: is this a fairness question or a speed question for you?",
        "Before I reply properly - which value should this decision protect?",
        "Useful if I name what I think matters to you, or would that overstep?",
        "One line: does this fit what you said you cared about, or not quite?"
      ]
    }
  ],
  "decisionTree": [
    {
      "condition": "The person is still speaking",
      "action": "Hold the frame; do not interrupt to name a value.",
      "phrase": ""
    },
    {
      "condition": "You are not sure what they value",
      "action": "Check tentatively before you frame anything.",
      "phrase": "What matters most to you in this one?"
    },
    {
      "condition": "They are resisting",
      "action": "Validate the concern before you offer a frame.",
      "phrase": "That is fair - what feels off about it?"
    },
    {
      "condition": "You have not earned the value yet",
      "action": "Ask, do not assert; let them name it.",
      "phrase": "Would you say fairness is the priority here, or something else?"
    },
    {
      "condition": "The frame increased ease",
      "action": "Continue, and connect it to the next step.",
      "phrase": "If that is the value, the next step might be to make it visible."
    },
    {
      "condition": "The frame reduced ease",
      "action": "Repair or release straight away.",
      "phrase": "I may have read that wrong - let me put it more simply."
    }
  ],
  "ladder": [
    {
      "weak": "If you were a good leader, you would do this.",
      "better": "You have said trust matters here, so a visible follow-up may matter.",
      "best": "Given that trust has been your stated priority, the strongest move may be the one that shows the team how the decision was made, not just what it is."
    },
    {
      "weak": "Just pick the fast option, obviously.",
      "better": "You care about quality, so the quick option might cost you later.",
      "best": "You have said quality matters more than speed here - does the fast option actually serve that, or just feel like progress?"
    },
    {
      "weak": "Be fair and say yes.",
      "better": "You value fairness, so it might be worth hearing them out first.",
      "best": "Since fairness is something you hold to, would it feel right to hear both sides before you decide?"
    }
  ],
  "scenarios": [
    {
      "situation": "Social conversation",
      "move": "Keep it warm and brief; name the value lightly and let them run with it.",
      "phrase": "Sounds like doing right by your mates matters more than being liked here."
    },
    {
      "situation": "Professional discussion",
      "move": "Name the action or concern clearly and tie the value to the decision at hand.",
      "phrase": "You have said reliability comes first - option B is the more consistent one with that."
    },
    {
      "situation": "Digital message",
      "move": "Write one clean sentence; do not overexplain or stack the frame with reasons.",
      "phrase": "Quick check - is this a fairness call or a speed call for you?"
    },
    {
      "situation": "Conflict or objection",
      "move": "Validate or summarise the concern before you offer any values frame.",
      "phrase": "I get why that lands badly. We both want this to be fair - can we start there?"
    },
    {
      "situation": "High-status or guarded person",
      "move": "Make the move optional and low-pressure; offer the value as a question, not a claim.",
      "phrase": "If I have got what matters to you wrong, say so and I will drop it."
    },
    {
      "situation": "Close relationship",
      "move": "Avoid sounding like a technique; use ordinary language and no polished framing.",
      "phrase": "You have always cared about being straight with people - does waiting sit right with you?"
    }
  ],
  "calibration": {
    "working": [
      "They give more detail or start thinking out loud.",
      "They relax and slow down.",
      "They correct your naming easily, without tension.",
      "They say \"yes, that is it\" or \"exactly\".",
      "They offer a next step themselves.",
      "They stay with the frame rather than deflecting it."
    ],
    "adjust": [
      "Answers get shorter.",
      "You see visible tension or a stiffening.",
      "They correct you but do not re-engage.",
      "They change the topic.",
      "Sarcasm creeps in.",
      "It starts to feel like the move is about your performance, not their decision.",
      "When you see these, drop the frame, validate the concern, or switch to plain language."
    ]
  },
  "drill": [
    {
      "day": "Day 1",
      "title": "Spot the value",
      "task": "In three conversations today, notice one value each person actually states or shows. Write each one down. Frame nothing yet - just catch the cue."
    },
    {
      "day": "Day 2",
      "title": "Name it tentatively",
      "task": "Take yesterday's cues and write a one-line tentative naming for each: \"It sounds like X matters to you.\" No decision attached, no verdict."
    },
    {
      "day": "Day 3",
      "title": "Connect to a choice",
      "task": "Take five real conversations from last week. For each, write the cue you missed and the one-sentence values-frame you could have used."
    },
    {
      "day": "Day 4",
      "title": "Add the autonomy tail",
      "task": "Rewrite each of yesterday's lines so it ends by leaving the decision with them - \"...but it is your call\" or \"...does that fit, or not quite?\""
    },
    {
      "day": "Day 5",
      "title": "Say it plainly",
      "task": "Read each line aloud until it stops sounding scripted. Cut anything that sounds like a buzzword or a moral lecture."
    },
    {
      "day": "Day 6",
      "title": "Practise the repair",
      "task": "Deliberately over-frame one line so it lends a value, then practise a recovery line that names the miss and releases the pressure."
    },
    {
      "day": "Day 7",
      "title": "Live field test",
      "task": "Use the move once in a real conversation. Watch the calibration cue and note whether it increased or reduced ease."
    }
  ],
  "checklist": [
    "Did I name a value the person actually owns, not one I lent them?",
    "Did I keep the move short and plain?",
    "Did I leave the decision with them?",
    "Did I check rather than assume what mattered?",
    "Did I watch their response instead of pushing on?",
    "Did I repair quickly when it missed?"
  ],
  "example": {
    "without": [
      "A: I am not sure whether to tell the team now or wait.",
      "B: If you care about honesty, you obviously tell them now.",
      "A: That sounds a bit loaded.",
      "Why it is weak:",
      "lends A a value (\"honesty\") as a lever, not something A named",
      "turns a frame into a moral verdict",
      "leaves no room to disagree, so it invites pushback"
    ],
    "with": [
      "A: I am not sure whether to tell the team now or wait.",
      "B: You have mentioned trust a few times. Does telling them earlier fit that better, or is there a reason to wait?",
      "A: Earlier probably fits better, but I need to be careful.",
      "B: The value I keep hearing is trust, but I do not want to oversimplify it. If trust is the frame, maybe the question is what they need to know now versus what would be premature.",
      "A: Yes - that is the balance.",
      "Why this works:",
      "names a value A actually stated (trust)",
      "offers it tentatively and leaves the decision open",
      "connects the value to the real trade-off instead of forcing a verdict"
    ],
    "note": "The poor version lends a value as a lever; the strong version returns a value the person already owns and keeps the choice theirs."
  },
  "influencePayoff": {
    "feeling": "\"They understood what actually matters to me - and left the choice with me.\"",
    "principle": "People move towards a decision more readily when it fits who they already are than when it is pushed on them from outside.",
    "gains": [
      "Cleaner coordination",
      "Less interpersonal friction",
      "Lower defensiveness",
      "The next step feels earned rather than imposed",
      "Less guessing about what you understood or want",
      "Decisions that hold, because they fit the person",
      "Trust that you are framing, not manipulating"
    ],
    "whyMostFail": [
      "They lend the person a value they never claimed.",
      "They deliver the frame mechanically, so it reads as a tactic.",
      "They use it to push their own agenda instead of clarifying.",
      "They keep talking instead of watching whether it landed.",
      "They reach for polished, principled language where plain words would land better."
    ]
  },
  "fieldTip": {
    "headline": "Use values they own, not values you lend.",
    "body": "The move only works when the value is one the person has actually shown or stated. Borrow a value to win a point and it becomes a lever - people feel it, and they push back. Return a value they already hold and the frame feels like recognition, not pressure.",
    "example": "\"You have said fairness matters to you - does the quick option actually serve that?\"",
    "dont": "As someone who cares about the team, you would stay late.",
    "do": "You have said the team matters to you - would staying help, or just look like it?"
  },
  "method": [
    {
      "step": "1",
      "title": "Notice the cue",
      "body": "Listen for a value the person actually states or shows - not one you would like them to hold.\nValue cues sound like:\n\"what matters to me is...\"\n\"I really care about...\"\n\"it would not be fair to...\"\n\"the important thing is...\"\n\"I have always believed...\"\nThe cue is the value word they load with weight.",
      "examples": [
        { "label": "They said", "text": "\"I just do not want to let anyone down.\"" },
        { "label": "The value", "text": "not letting people down - loyalty, reliability" }
      ]
    },
    {
      "step": "2",
      "title": "Pause before the reflex",
      "body": "The reflexive version reaches for a value to win the point. Pause long enough to check: is this value theirs, or one I am about to lend them?\nReflexive:\n\"If you cared about honesty, you would tell them.\"\nConsidered:\n\"You have said trust matters - does telling them fit that?\"\nThe pause is what keeps the move honest."
    },
    {
      "step": "3",
      "title": "Name it tentatively",
      "body": "Offer the value as a question or a maybe, not a verdict. Tentative naming leaves room to be corrected.\nToo certain:\n\"Fairness is clearly your priority.\"\nTentative:\n\"It sounds like fairness matters most here - am I reading that right?\"\nIf they correct you, that is the move working, not failing."
    },
    {
      "step": "4",
      "title": "Connect it to the choice",
      "body": "Link the value to the decision or request in one plain sentence, without stacking reasons.\nExamples:\n\"If reliability is the priority, option B seems more consistent.\"\n\"If protecting trust is the value, the next step probably needs to be visible.\"\nOne clean connection lands better than three."
    },
    {
      "step": "5",
      "title": "Leave autonomy intact",
      "body": "Hand the decision back. The frame is an observation, not an instruction.\nExamples:\n\"...but it is your call.\"\n\"...does that change the decision, or not really?\"\n\"...I might be reading it wrong.\"\nThis is what separates framing from pressure."
    },
    {
      "step": "6",
      "title": "Watch, continue or repair",
      "body": "Read the response. If ease rose - more detail, a relaxed tone, an easy correction - continue and connect to the next step. If ease fell - shorter answers, tension, a topic change - repair or release.\nRepair:\n\"I may have read that wrong. Let me put it more simply.\"\n--"
    }
  ],
  "liveThreadClues": [
    "\"what matters to me is...\"",
    "\"I really care about...\"",
    "\"it would not be fair to...\"",
    "\"I would never want to...\"",
    "\"the important thing is...\"",
    "\"on principle...\"",
    "\"I have always believed...\"",
    "\"that is not who we are\""
  ],
  "depthDial": [
    {
      "depth": "Light",
      "useWhen": "early or low trust",
      "phrase": "What matters most to you here?"
    },
    {
      "depth": "Tentative",
      "useWhen": "value hinted but not stated",
      "phrase": "It sounds like fairness matters - am I reading that right?"
    },
    {
      "depth": "Named",
      "useWhen": "value clearly stated",
      "phrase": "You have said trust is the priority, so the visible option may fit better."
    },
    {
      "depth": "Connected",
      "useWhen": "value owned and decision live",
      "phrase": "If trust is the frame, the question is what they need to know now versus later."
    },
    {
      "depth": "Full frame",
      "useWhen": "strong trust, high stakes",
      "phrase": "Given trust has been your stated priority, the strongest move may be the one that shows how the decision was made, not just what it is."
    }
  ],
  "commonMistakes": [
    {
      "mistake": "Making the move too long",
      "soundsLike": "a principled monologue about what really matters",
      "better": "\"You value quality - does the fast option serve that?\""
    },
    {
      "mistake": "Lending a value they never claimed",
      "soundsLike": "\"As someone who cares about the team...\"",
      "better": "\"You have said the team matters - does this fit that?\""
    },
    {
      "mistake": "Using it as a lever",
      "soundsLike": "\"If you really valued fairness, you would agree.\"",
      "better": "\"You value fairness - does this option fit that, or not?\""
    },
    {
      "mistake": "Repeating it mechanically",
      "soundsLike": "naming a value every single turn",
      "better": "use it once, then let it breathe"
    },
    {
      "mistake": "Ignoring the correction",
      "soundsLike": "\"But I still think it is about trust.\"",
      "better": "\"Fair enough - what would you call it?\""
    },
    {
      "mistake": "Over-polished language",
      "soundsLike": "\"This aligns with your core principles.\"",
      "better": "\"This fits what you said mattered.\""
    },
    {
      "mistake": "Missing the context",
      "soundsLike": "framing values mid-emergency or when they are exhausted",
      "better": "handle the urgent thing first; frame later"
    }
  ],
  "recoveryPhrases": [
    "I may have read that wrong.",
    "Let me put that more simply.",
    "No need to go there if it is not useful.",
    "I jumped ahead - that is on me.",
    "What would be the more accurate way to say it?",
    "We can leave that and come back if it helps.",
    "I do not want to put a value in your mouth.",
    "Forget the framing - what actually matters to you here?"
  ],
  "bestRecoveryLine": "I may have read that wrong - what would be the more accurate way to say it?",
  "chains": [
    {
      "label": "Understand then frame",
      "sequence": "TC012 Full-attention signal -> TC017 Values-based framing -> TC011 Summary check",
      "example": [
        "Give them your full attention while they lay out the problem.",
        "\"The value I keep hearing is trust - does the earlier option fit that better?\"",
        "\"So the frame is trust, and the question is timing. Have I got that right?\""
      ]
    },
    {
      "label": "Reflect then advise",
      "sequence": "TC004 Reflective listening -> TC017 Values-based framing -> TC027 Permission-based advice",
      "example": [
        "\"So you are torn between telling them now and waiting.\"",
        "\"You have said being straight with people matters to you - does that lean you one way?\"",
        "\"Want a thought on how to say it, or would you rather work it out yourself?\""
      ]
    },
    {
      "label": "Frame without pressure",
      "sequence": "TC017 Values-based framing -> TC021 Autonomy release",
      "example": [
        "\"If fairness is the priority, hearing both sides first probably fits.\"",
        "\"But it is genuinely your call - I am only naming what you said mattered.\""
      ]
    }
  ],
  "relatedTechniques": [
    {
      "id": "TC084",
      "reason": "TC084 Listen for values is the upstream skill - hearing the value in the first place. Use TC017 once you have heard it and want to connect it to a choice."
    },
    {
      "id": "TC040",
      "reason": "TC040 Meaning reflection reflects why something matters. Use TC017 when you need to frame a decision or request through that value, not just mirror it."
    },
    {
      "id": "TC021",
      "reason": "TC021 Autonomy release removes pressure from an option. Pair it with TC017 to keep a values frame from tipping into coercion."
    },
    {
      "id": "TC005",
      "reason": "TC005 Validation without agreement acknowledges without endorsing. Use TC005 first when the person needs to feel heard before any values frame."
    },
    {
      "id": "TC027",
      "reason": "TC027 Permission-based advice asks before advising. Follow a values frame with TC027 so the next step is invited, not pushed."
    }
  ]
};
