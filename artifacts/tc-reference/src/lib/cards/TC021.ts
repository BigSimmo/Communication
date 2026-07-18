import type { CardData } from "../card-types";

export const TC021: CardData = {
  pdfUrl: "cards/TC021/TC021_TwoCard_Combined.pdf",
  resources: [
    { label: "Two-card (combined)", description: "Front and back study cards on one sheet — the designed visual card.", href: "cards/TC021/TC021_TwoCard_Combined.pdf", type: "pdf", group: "Visual Cards" },
    { label: "One-card summary", description: "The whole technique on a single designed card.", href: "cards/TC021/TC021_OneCard.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Quick card", description: "One-page glance card for fast recall.", href: "cards/TC021/TC021_Quick_Card.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Detailed guide", description: "The full written guide with every section.", href: "cards/TC021/TC021_Detailed_Guide.pdf", type: "pdf", group: "Written Guides" },
    { label: "Reference sheet", description: "Dense one-page reference of the key moves.", href: "cards/TC021/TC021_Reference.pdf", type: "pdf", group: "Written Guides" },
    { label: "Phrase bank (CSV)", description: "Every phrase, ready to import or drill.", href: "cards/TC021/TC021_Phrase_Bank.csv", type: "csv", group: "Practice Tools" },
    { label: "Anki flashcards", description: "Import into Anki for spaced-repetition practice.", href: "cards/TC021/TC021_Anki_Flashcards.csv", type: "csv", group: "Practice Tools" },
  ],
  "id": "TC021",
  "whyItWorks": "Autonomy release is the deliberate move of preserving the other person's sense of choice after you make a suggestion, request, recommendation, invitation, or argument. You still make the ask clearly - you simply make it genuinely easy to say no, decide differently, or take time, so influence does not feel like pressure. It works because people become far more willing to cooperate when they never feel punished for a no, and because warmth that comes with a real exit is not experienced as a trap.",
  "whatItIsNot": [
    "It is not passive vagueness, fake indifference, or a way to avoid being clear.",
    "It is not a manipulative \"no pressure\" line bolted onto heavy pressure.",
    "It is not surrendering your view - you can hold a clear preference and still release the choice.",
    "You still make the ask or recommendation clearly; you simply do not trap the person inside it."
  ],
  "overview": {
    "coreFormula": [
      "Clear ask or recommendation + brief reason + real freedom cue + easy next option.",
      "I'd suggest option B because it keeps this simple. But it's your call.",
      "Could you read the one-page version by Thursday? No pressure if the week is already full.",
      "My view is that we should keep it smaller. You might see it differently, though.",
      "Would you be open to a quick call? Easy no if now is not a good time."
    ],
    "minimumViableMove": "Make the ask clearly, then add one genuine freedom line: \"No pressure - it's completely okay if not.\"",
    "impact": "Medium",
    "difficulty": "Medium",
    "misuse": "It fails when \"no pressure\" is a cosmetic label bolted onto real pressure - freedom words on the surface while your tone, persistence or hidden consequences still push for the yes.",
    "bestFor": [
      "Requests, invitations and favours where you want cooperation without guilt.",
      "Advice or recommendations that might trigger defensiveness.",
      "Persuasion, sales, dating, networking, leadership and conflict conversations.",
      "Busy, senior, shy, guarded or resistant people.",
      "Digital follow-ups where tone can easily sound pushy.",
      "Moments where preserving the relationship matters more than forcing immediate agreement."
    ]
  },
  "notFor": [
    "You cannot genuinely accept a no.",
    "There is a true non-negotiable boundary, safety issue or instruction.",
    "You have already pressured them heavily and are using \"no pressure\" as a cosmetic add-on.",
    "The line would create ambiguity about expectations that actually need to be clear.",
    "You are using autonomy language to seem nicer while still steering the outcome."
  ],
  "phraseBank": [
    {
      "id": "default",
      "label": "Everyday freedom lines",
      "tag": "Default one-liners",
      "tone": "Quick",
      "phrases": [
        "No pressure if not.",
        "It's completely your call.",
        "Feel free to say no.",
        "You might see it differently.",
        "Take it or leave it - genuinely.",
        "No issue either way."
      ]
    },
    {
      "id": "professional",
      "label": "Professional",
      "tag": "Work & decisions",
      "tone": "Professional",
      "phrases": [
        "My recommendation would be X, but I'm open to being challenged.",
        "If that does not fit your priorities, we can adjust.",
        "A yes/no is fine - no need for a long reply.",
        "If now is not the right time, we can park it.",
        "I think X is the cleaner option, but you own the final call.",
        "I'm offering this as a suggestion, not a mandate."
      ]
    },
    {
      "id": "social-dating",
      "label": "Social & dating",
      "tag": "Invitations, chemistry",
      "tone": "Warm",
      "phrases": [
        "Come if you feel like it - no pressure.",
        "Only if it suits you.",
        "If you're not feeling it, all good.",
        "You can absolutely say no.",
        "I'd enjoy it, but I don't want it to feel like an obligation.",
        "I'd like to see you again, but no pressure if you're not feeling it.",
        "If you're keen, great. If not, no awkwardness.",
        "I'm interested, but I'm not trying to corner you.",
        "You can be direct with me - I'd rather know."
      ]
    },
    {
      "id": "digital",
      "label": "Digital / text",
      "tag": "Messages & follow-ups",
      "tone": "Direct",
      "phrases": [
        "Quick ask: could you review this by Friday? No pressure if your week is packed.",
        "Would you be open to X? Totally fine if not.",
        "A yes/no reply is enough.",
        "No need to respond today if you're busy.",
        "If this is not your area, feel free to ignore or redirect me."
      ]
    },
    {
      "id": "conflict",
      "label": "Conflict & resistance",
      "tag": "Disagreement, pushback",
      "tone": "High-stakes",
      "phrases": [
        "I'm not trying to force you into my view.",
        "You don't have to agree with me for me to hear you.",
        "My suggestion is X, but I can see why you might not be there yet.",
        "Let's slow it down. You're free to push back.",
        "I want to explain my view, not box you in."
      ]
    },
    {
      "id": "high-status",
      "label": "High-status / busy",
      "tag": "Senior, time-poor people",
      "tone": "Professional",
      "phrases": [
        "I know your time is tight, so a one-line answer is completely fine.",
        "If this is not worth your attention, no issue.",
        "I'd value your quick read, but only if it is easy.",
        "Happy to send a shorter version if that helps."
      ]
    },
    {
      "id": "shy-guarded",
      "label": "Shy / guarded",
      "tag": "Lower the demand",
      "tone": "Warm",
      "phrases": [
        "You don't have to answer if that's too much.",
        "Only share what you're comfortable sharing.",
        "We can leave that there.",
        "No need to decide now."
      ]
    },
    {
      "id": "repair",
      "label": "Repair & reset",
      "tag": "When it lands as pressure",
      "tone": "Repair",
      "phrases": [
        "That sounded more pushy than I meant.",
        "Let me reset - I'm not trying to pressure you.",
        "I realise I said 'no pressure' but kept pushing. That's on me.",
        "You're genuinely free to say no.",
        "I can see that landed like pressure. I'll step back."
      ]
    }
  ],
  "decisionTree": [
    {
      "condition": "They say yes quickly",
      "action": "Accept cleanly, thank them, and stop explaining.",
      "phrase": "Great - thank you. I'll send the short version."
    },
    {
      "condition": "They hesitate",
      "action": "Reduce pressure and offer time.",
      "phrase": "No need to decide now."
    },
    {
      "condition": "They say no",
      "action": "Accept without disappointment.",
      "phrase": "All good. Thanks for considering it."
    },
    {
      "condition": "They offer a different option",
      "action": "Treat it as collaboration, not resistance.",
      "phrase": "That works too. Let's do that."
    },
    {
      "condition": "They seem guilty",
      "action": "Make the no socially safe again.",
      "phrase": "Genuinely no problem if you can't."
    },
    {
      "condition": "They become defensive",
      "action": "Stop persuading and validate the concern.",
      "phrase": "I can see why it might feel like pressure. I'll step back."
    },
    {
      "condition": "They ask what you prefer",
      "action": "State your preference while preserving their choice.",
      "phrase": "My preference is X, but I'm okay either way."
    }
  ],
  "ladder": [
    {
      "weak": "You should do this. No pressure.",
      "better": "I'd suggest this, but it's your call.",
      "best": "My suggestion is X because Y. If that doesn't fit, no issue - we can choose another path."
    },
    {
      "weak": "Can you just quickly help me?",
      "better": "Could you look at this for five minutes? No pressure if today is full.",
      "best": "Could you give me a five-minute read on the first page by Thursday? A one-line answer is enough, and no issue if you're too full."
    },
    {
      "weak": "Do you want to catch up? It's fine if you don't.",
      "better": "I'd like to catch up, but no pressure if you're not free.",
      "best": "I'd enjoy seeing you this week. If you're busy or not feeling it, all good."
    },
    {
      "weak": "I'm not forcing you, but...",
      "better": "You might see this differently.",
      "best": "I want to explain why I see it this way, but you don't need to agree for me to hear your side."
    }
  ],
  "scenarios": [
    {
      "situation": "Asking a busy colleague",
      "move": "Make the request specific and finite, then release the pressure.",
      "phrase": "Could you give the first page a five-minute read by Thursday? A one-line reaction is enough, and no pressure if your week is packed."
    },
    {
      "situation": "Giving advice to a friend",
      "move": "Offer the idea as optional, not as a verdict.",
      "phrase": "My instinct is you might want to pause before replying. But you know the situation better than I do."
    },
    {
      "situation": "Dating or social invitation",
      "move": "Show interest without creating obligation.",
      "phrase": "I'd like to see you again. If you're not feeling it, no awkwardness."
    },
    {
      "situation": "Conflict or resistance",
      "move": "Release the need for agreement while keeping your view clear.",
      "phrase": "You don't have to agree with me. I just want to explain why I'm seeing it this way."
    },
    {
      "situation": "High-status person",
      "move": "Respect their time and make non-response socially acceptable.",
      "phrase": "If this isn't worth your attention, no issue. A quick yes/no would still help if easy."
    },
    {
      "situation": "Shy or guarded person",
      "move": "Lower the demand to disclose or decide.",
      "phrase": "You don't have to answer that if it's too much. We can leave it there."
    },
    {
      "situation": "Digital follow-up",
      "move": "Make the reply easy and non-guilt-based.",
      "phrase": "Just circling back once. No pressure if now isn't a good time."
    }
  ],
  "calibration": {
    "working": [
      "They seem less defensive or cornered.",
      "They answer more honestly rather than appeasing.",
      "They say yes without visible tension.",
      "They feel free to ask questions or propose alternatives.",
      "They decline without the relationship becoming awkward.",
      "The conversation stays warm after the ask."
    ],
    "adjust": [
      "They go quieter, guarded or apologetic.",
      "They say \"I guess\" or \"if you want me to\" rather than a real yes.",
      "They over-explain to justify saying no.",
      "You feel tempted to keep persuading after releasing the choice.",
      "Your tone sounds disappointed when they hesitate.",
      "They seem to be managing your reaction rather than answering freely."
    ]
  },
  "drill": [
    {
      "day": "Day 1",
      "title": "Say the move aloud",
      "task": "Say the minimum viable move aloud three times until it sounds natural: \"No pressure - it's completely okay if not.\""
    },
    {
      "day": "Day 2",
      "title": "Add one real freedom line",
      "task": "After each low-stakes request or suggestion today, add one genuine autonomy-release line - and mean it."
    },
    {
      "day": "Day 3",
      "title": "Match tone to words",
      "task": "Track whether your tone, face and follow-up actually match the freedom line, or quietly contradict it."
    },
    {
      "day": "Day 4",
      "title": "Accept a no cleanly",
      "task": "Practise accepting one \"no\" without explaining, sulking or re-selling - just \"All good, thanks for considering it.\""
    },
    {
      "day": "Day 5",
      "title": "Rewrite pushy messages",
      "task": "Rewrite three recent pushy messages into autonomy-supportive versions using the core formula."
    },
    {
      "day": "Day 6",
      "title": "Recover from a miss",
      "task": "After a deliberate over-push, practise one recovery line: \"I realise I kept selling it. I'll step back.\""
    },
    {
      "day": "Day 7",
      "title": "Audit the week",
      "task": "Review the week and ask of each use: did I make the choice genuinely easier, or just add \"no pressure\" to pressure?"
    }
  ],
  "checklist": [
    "Was my ask or recommendation clear before I released autonomy?",
    "Did I give a brief reason without over-selling?",
    "Did I make refusal, delay or disagreement socially safe?",
    "Did my tone and follow-up match the freedom line?",
    "Did I accept a no without punishment or coldness?",
    "Did I add real freedom rather than \"no pressure\" bolted onto pressure, and did they seem freer, not more managed?"
  ],
  "example": {
    "without": [
      "You: \"You really need to come. Everyone else is coming. No pressure though.\"",
      "Other: \"Uh... I'll see.\"",
      "You: \"It would be weird if you didn't.\"",
      "Why it's weak: the \"no pressure\" is cosmetic - the guilt and the group comparison do the real pushing."
    ],
    "with": [
      "You: \"I'd like you to come if you're free. No pressure if it's not your thing.\"",
      "Other: \"I'm not sure yet.\"",
      "You: \"All good. Decide closer to the day.\"",
      "You: \"I'd genuinely like you there, but I don't want it to feel like an obligation.\"",
      "Other: \"That helps. I'm a bit overloaded this week.\"",
      "You: \"Makes sense. Leave it for now - if you end up having energy, great.\"",
      "Why it works: the ask stays clear, hesitation isn't punished, and the intention is named - interest without obligation, so a no needs no defence."
    ],
    "note": "The advanced version names the relational intention: interest without obligation. The person can say no without having to defend themselves."
  },
  "influencePayoff": {
    "feeling": "I can decide freely here - even a no is safe with this person.",
    "principle": "People cooperate more freely when the choice is genuinely theirs. Pressure buys short-term compliance; real freedom buys trust and repeat willingness.",
    "gains": [
      "Reduces the feeling of being controlled, cornered or managed.",
      "Makes your request, advice or recommendation easier to receive.",
      "Protects dignity and choice, especially with resistant, busy, high-status or guarded people.",
      "Increases trust because your warmth is not experienced as a trap.",
      "Makes people more willing to say yes because they are not punished for saying no.",
      "Improves long-term influence because people feel safe around your asks."
    ],
    "whyMostFail": [
      "They say \"no pressure\" but keep selling, so the words and the behaviour contradict each other.",
      "They release a choice they were never willing to honour - a real no would still cost the person.",
      "They go vague instead of clear, so there is no solid ask to release the choice around.",
      "They punish hesitation or refusal with a cooler tone, teaching the person the freedom was fake."
    ]
  },
  "fieldTip": {
    "headline": "Autonomy release only works when the freedom is real.",
    "body": "Say it once, mean it, and let your behaviour prove it. Use the technique to clarify, respect and connect - not to pressure, corner or extract.",
    "example": "I'd genuinely like your help, but an easy no is completely fine.",
    "dont": "Bolt \"no pressure\" onto heavy pressure, or cool off the moment they hesitate.",
    "do": "Make the ask clearly, add one genuine freedom line, then accept whatever answer comes."
  },
  "method": [
    {
      "step": "1",
      "title": "Name your ask or recommendation clearly",
      "body": "Do not hide the request in vagueness. Autonomy release works best after clarity, not instead of it.",
      "examples": [
        { "label": "Phrase", "text": "I'd suggest we do X." }
      ]
    },
    {
      "step": "2",
      "title": "Give the reason briefly",
      "body": "A short reason makes the ask coherent without turning into a pressure speech.",
      "examples": [
        { "label": "Phrase", "text": "Mainly because it saves time and keeps the decision simple." }
      ]
    },
    {
      "step": "3",
      "title": "Release pressure explicitly",
      "body": "Make the choice visible. Use one natural line, not an apologetic paragraph.",
      "examples": [
        { "label": "Phrase", "text": "But it's completely your call." }
      ]
    },
    {
      "step": "4",
      "title": "Offer an easy no or alternative",
      "body": "If you want the person to feel genuinely free, make refusal, delay or redirection socially safe.",
      "examples": [
        { "label": "Phrase", "text": "If not, no issue - we can leave it." }
      ]
    },
    {
      "step": "5",
      "title": "Hold congruence after the release",
      "body": "Your tone, face, timing and follow-up must match the words. Do not punish a no with coldness.",
      "examples": [
        { "label": "Phrase", "text": "All good - thanks for considering it." }
      ]
    },
    {
      "step": "6",
      "title": "Move on cleanly",
      "body": "Do not keep re-selling after releasing autonomy. If they decline, accept it and preserve the relationship.",
      "examples": [
        { "label": "Phrase", "text": "No worries. Different option, then." }
      ]
    }
  ],
  "liveThreadClues": [
    "You're about to make a request, recommendation or invitation.",
    "The person is busy, senior, shy, guarded or resistant.",
    "You notice you want the yes a little too much.",
    "The ask could easily read as pushy in a text or email.",
    "They've gone quiet, hesitant or over-apologetic.",
    "You're offering advice that could trigger defensiveness."
  ],
  "depthDial": [
    {
      "depth": "Light",
      "useWhen": "low-stakes, casual ask",
      "phrase": "No pressure if not."
    },
    {
      "depth": "Warm",
      "useWhen": "you want cooperation without guilt",
      "phrase": "Only if it suits you - genuinely."
    },
    {
      "depth": "Explicit",
      "useWhen": "the ask could sound pushy",
      "phrase": "It's completely your call, and an easy no is fine."
    },
    {
      "depth": "Strong",
      "useWhen": "busy, senior or guarded person",
      "phrase": "If this isn't worth your time, no issue at all."
    },
    {
      "depth": "Repair",
      "useWhen": "you've drifted into pressure",
      "phrase": "I don't want this to feel like pressure - you're free to say no."
    }
  ],
  "commonMistakes": [
    {
      "mistake": "Pressure with a \"no pressure\" label",
      "soundsLike": "You really should, but no pressure.",
      "better": "Make the ask, then genuinely allow the no."
    },
    {
      "mistake": "Vague autonomy instead of a clear ask",
      "soundsLike": "Only if you want, maybe, no worries...",
      "better": "Be clear first - \"Could you do X by Friday?\" - then release the choice."
    },
    {
      "mistake": "Punishing the no",
      "soundsLike": "Cold tone, withdrawal or guilt after they decline.",
      "better": "All good - thanks for considering it."
    },
    {
      "mistake": "Repeated autonomy releases",
      "soundsLike": "No pressure... really no pressure... are you sure?",
      "better": "Say it once, then stop re-selling."
    },
    {
      "mistake": "Autonomy release as manipulation",
      "soundsLike": "Freedom language wrapped around hidden consequences.",
      "better": "Only release autonomy when the choice is genuinely real."
    },
    {
      "mistake": "Over-softening a real boundary",
      "soundsLike": "\"Only if you want\" when it's actually required.",
      "better": "Use a clear instruction when the matter is non-negotiable."
    }
  ],
  "recoveryPhrases": [
    "That sounded more pushy than I meant.",
    "I said no pressure, but I realise I kept selling it. I'll step back.",
    "You're genuinely free to say no.",
    "Let me reset - my view is X, but I'm not trying to corner you.",
    "All good if the answer is no.",
    "I don't want you managing my reaction. Be honest.",
    "No need to decide now."
  ],
  "bestRecoveryLine": "I can see that landed like pressure. I'll step back - you're genuinely free to say no.",
  "chains": [
    {
      "label": "Request chain",
      "sequence": "Clean request -> small ask -> low-friction ask -> autonomy release -> clean follow-up",
      "example": [
        "Could you look at the first page?",
        "A five-minute read is plenty.",
        "No pressure if your week is packed.",
        "Whatever you decide, thanks for considering it."
      ]
    },
    {
      "label": "Advice chain",
      "sequence": "Reflect -> ask permission -> offer one suggestion -> autonomy release -> ask how it lands",
      "example": [
        "Sounds like a tricky one.",
        "Want my take, or just a sounding board?",
        "My instinct is to pause before replying.",
        "But you know the situation better than I do."
      ]
    },
    {
      "label": "Conflict chain",
      "sequence": "Validate concern -> state your view -> autonomy release -> ask what would make it workable",
      "example": [
        "I get why this feels off.",
        "My view is we keep it smaller.",
        "You don't have to agree for me to hear you.",
        "What would make this workable for you?"
      ]
    },
    {
      "label": "Digital chain",
      "sequence": "Purpose-first message -> specific ask -> easy reply option -> no-pressure line",
      "example": [
        "Quick one about Thursday's draft.",
        "Could you give it a five-minute read?",
        "A yes/no reply is plenty.",
        "No pressure if now isn't a good time."
      ]
    },
    {
      "label": "Dating / social chain",
      "sequence": "Warm invitation -> autonomy release -> accept the answer without punishing a no",
      "example": [
        "I'd like to see you again this week.",
        "If you're not feeling it, no awkwardness.",
        "Either way, I've enjoyed this."
      ]
    }
  ],
  "relatedTechniques": [
    {
      "id": "TC020",
      "reason": "Low-Friction Ask shrinks the size of the request so it is easy to grant; TC021 keeps the request as-is but makes the no genuinely safe. Use TC020 when the ask is too big; use TC021 when the pressure is the problem."
    },
    {
      "id": "TC027",
      "reason": "Permission-Based Advice asks before offering input at all; TC021 releases the choice after you have given a clear suggestion. Use TC027 to open the door; use TC021 to keep it open once you've spoken."
    },
    {
      "id": "TC005",
      "reason": "Validation Without Agreement lets you acknowledge a view without endorsing it; TC021 lets you hold your own view while freeing them to disagree. Use TC005 when they need to feel heard; use TC021 when they need to feel unpressured."
    },
    {
      "id": "TC014",
      "reason": "Validate the Concern addresses the worry behind resistance; TC021 hands back the decision. Validate first, then release the choice - or use TC014 alone when the block is fear rather than pressure."
    }
  ]
};
