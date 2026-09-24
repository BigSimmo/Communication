import type { CardData } from "../card-types";

export const TC090: CardData = {
  pdfUrl: "cards/TC090/TC090_TwoCard_Combined.pdf",
  resources: [
    { label: "Two-card (combined)", description: "Front and back study cards on one sheet — the designed visual card.", href: "cards/TC090/TC090_TwoCard_Combined.pdf", type: "pdf", group: "Visual Cards" },
    { label: "One-card summary", description: "The whole technique on a single designed card.", href: "cards/TC090/TC090_OneCard.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Quick card", description: "One-page glance card for fast recall.", href: "cards/TC090/TC090_Quick_Card.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Detailed guide", description: "The full written guide with every section.", href: "cards/TC090/TC090_Detailed_Guide.pdf", type: "pdf", group: "Written Guides" },
    { label: "Reference sheet", description: "Dense one-page reference of the key moves.", href: "cards/TC090/TC090_Reference.pdf", type: "pdf", group: "Written Guides" },
    { label: "Phrase bank (CSV)", description: "Every phrase, ready to import or drill.", href: "cards/TC090/TC090_Phrase_Bank.csv", type: "csv", group: "Practice Tools" },
    { label: "Anki flashcards", description: "Import into Anki for spaced-repetition practice.", href: "cards/TC090/TC090_Anki_Flashcards.csv", type: "csv", group: "Practice Tools" },
  ],
  "id": "TC090",
  "whyItWorks": "Do-not-fix-yet discipline is the deliberate act of holding back solution mode while someone is still expressing, processing, or trying to feel understood. You notice the fixing impulse — advice, reassurance, a bright-side reframe, a plan, a comparison, a correction — and you visibly hold it, staying present and reflecting before you move to practical help. It works because people who bring a problem often fear being judged, corrected, rushed, or turned into an improvement project; when you can tolerate their reality without immediately making it about your answer, support feels safe rather than managerial, defensiveness drops, and any advice you offer later lands far better because the real need has become clear.",
  "whatItIsNot": [
    "Not withholding help when direct, practical help is genuinely needed.",
    "Not pretending to listen while privately waiting to deliver your advice.",
    "Not letting someone spiral without support, or going passive and silent.",
    "Not therapeutic performance, forced softness, or fake depth.",
    "Not passivity in a crisis — safety, medical, legal, abuse, or self-harm situations need action, not a pause."
  ],
  "overview": {
    "coreFormula": [
      "Notice -> Pause -> Name the non-fix -> Reflect -> Mode check -> Continue or shift.",
      "Ultra-short: \"Not fixing yet. Listening first.\"",
      "Field line: I hear the problem, I won't fix it yet, I'll stay with the person, and I'll ask what kind of help is wanted before advising.",
      "\"I can see why this is heavy. I won't jump into fixing it yet — do you want me to just listen for a minute, or help you sort options?\"",
      "\"I'm not going to silver-line it. What part is sitting heaviest?\""
    ],
    "minimumViableMove": "Say one non-fixing line — \"I won't try to fix this yet. I can just stay with you in it for a minute.\" — then listen and reflect before offering any solution.",
    "impact": "Medium",
    "difficulty": "Hard",
    "misuse": "Confusing non-fixing with doing nothing — saying \"I won't fix this\" and then offering no warmth, reflection, or support, so restraint collapses into passive abandonment. It also fails when you hide inside listening mode to dodge action the person clearly needs.",
    "bestFor": [
      "Venting, overwhelm, grief, shame, disappointment, rejection, burnout, frustration, anxiety, or confusion",
      "A friend, partner, colleague, client, or family member who says something painful and pauses",
      "Moments when your first instinct is \"you should,\" \"just,\" \"at least,\" \"why don't you,\" or \"here's what I'd do\"",
      "Leadership conversations where the person needs to feel understood before any action planning",
      "Support conversations where the practical answer isn't clear yet",
      "Texts where instant advice would feel cold or transactional"
    ]
  },
  "notFor": [
    "There is immediate danger, abuse, a medical emergency, legal risk, or time-critical action",
    "The person explicitly asks for a concrete answer and the stakes require one",
    "You are using the pause to dodge a responsibility you actually have",
    "The person has already said they do not want to discuss feelings",
    "Your non-fixing stance is turning patronising, slow, or performative",
    "The person needs a boundary, a decision, a consent check, or direct logistical help"
  ],
  "phraseBank": [
    {
      "id": "quick",
      "label": "Quick",
      "tag": "One-liners",
      "tone": "Quick",
      "phrases": [
        "Not fixing yet. Listening first.",
        "That sounds like a lot. I'm here.",
        "That sucks. I can just listen.",
        "I won't try to fix this yet. I can just stay with you in it for a minute.",
        "I can feel myself wanting to solve it. Let me not rush you.",
        "No fixing unless you want it.",
        "I'm here. Take your time."
      ]
    },
    {
      "id": "friend-partner",
      "label": "Friend & partner",
      "tag": "Close relationships",
      "tone": "Warm",
      "phrases": [
        "I'm not going to hit you with advice unless you ask. Tell me the part that's weighing on you.",
        "Want me to stay in friend mode, or help you make a plan?",
        "I'm hearing you. I don't want to turn this into me managing you.",
        "Let me not fix. What do you need from me right now?",
        "I can hold this with you before we decide anything.",
        "I know I jump into solutions. I'm going to slow down.",
        "That sounds awful. I won't fix it yet — what part is most frustrating?",
        "I know I usually try to solve this. What do you need from me right now?"
      ]
    },
    {
      "id": "professional",
      "label": "Work & leadership",
      "tag": "Professional",
      "tone": "Professional",
      "phrases": [
        "Before we solve, I want to understand the impact on you and the team.",
        "I won't jump straight to actions. What should I understand first?",
        "Do you want me in listening mode, coaching mode, or decision mode?",
        "Let's separate being heard from deciding the next step. Start with what happened.",
        "Before I assign fixes, I want to understand where the pressure's actually coming from.",
        "I'm not going to rush into a generic fix. First, what has this disrupted for you?",
        "Now that I understand it, let's choose the smallest step that helps."
      ]
    },
    {
      "id": "mode-menu",
      "label": "Mode menu",
      "tag": "Ask what they want",
      "tone": "Direct",
      "phrases": [
        "Do you want listening first, or help thinking through options?",
        "Do you want comfort, outrage, distraction, or problem-solving?",
        "Do you want listening, comfort, or ideas?",
        "Do you want me in friend mode, coach mode, or practical mode?",
        "Do you want to vent first or solve now?",
        "Before we talk answers, what's the hardest part of this right now?",
        "What would actually help from me right now?"
      ]
    },
    {
      "id": "repair",
      "label": "Own the slip",
      "tag": "Soften & de-escalate",
      "tone": "Repair",
      "phrases": [
        "That came out more advice-y than I meant. I can just listen.",
        "I think I tried to make it tidy too quickly. It might just be messy right now.",
        "I may have sounded like I was minimising it. That wasn't fair.",
        "Let me separate two things: I care, and I don't need to control the next step.",
        "I'm not going to silver-line it. What part is sitting heaviest?",
        "I do have thoughts, but I don't want to rush past what this is like for you."
      ]
    },
    {
      "id": "high-pressure",
      "label": "Pressure & safety",
      "tag": "High-stakes",
      "tone": "High-stakes",
      "phrases": [
        "We may need action, but first I want to understand what you're dealing with.",
        "I'll keep this practical if needed. Before that: what's the immediate pressure?",
        "Is this a safety issue, a decision issue, or a support issue?",
        "If action is needed, we'll act. If not, I'm not going to rush you into a fix.",
        "If there's immediate safety risk, we act now. If not, I can slow down and understand first. Which is it?"
      ]
    },
    {
      "id": "digital",
      "label": "Digital / text",
      "tag": "By message",
      "tone": "Quick",
      "phrases": [
        "I'm sorry. I won't advice-dump. Want to vent, or do you want help sorting it?",
        "That's a lot. I can read and stay with you first.",
        "No fixing unless you want it. What part is hitting hardest?",
        "Want a listening reply or a practical reply?",
        "I'm here. Want me to listen, distract you, or help think through next steps?"
      ]
    }
  ],
  "decisionTree": [
    {
      "condition": "There's immediate danger or time-critical action.",
      "action": "Act, escalate, seek appropriate help, or give direct practical support — don't hide behind non-fixing.",
      "phrase": "If there's a safety risk, let's deal with that first."
    },
    {
      "condition": "They explicitly asked for advice, a decision, wording, or a plan.",
      "action": "Switch to permission-based advice: clarify the kind and amount of input they want.",
      "phrase": "Happy to. Do you want options, or my honest recommendation?"
    },
    {
      "condition": "They sound emotionally loaded — vulnerable, ashamed, angry, disappointed, or overwhelmed.",
      "action": "Hold the fix and offer listening first.",
      "phrase": "I won't jump into fixing it. What's the hardest part right now?"
    },
    {
      "condition": "You feel the urge to solve, correct, reassure, diagnose, compare, or silver-line.",
      "action": "Say a non-fixing line before anything else.",
      "phrase": "I can feel myself wanting to solve it. Let me not rush you."
    },
    {
      "condition": "After a reflection, they open up or relax.",
      "action": "Stay in listening mode; don't reach for a plan.",
      "phrase": "Keep going — I'm with you."
    },
    {
      "condition": "They now ask for help.",
      "action": "Offer one concise next step or option set, not a lecture.",
      "phrase": "Okay. Want to start with the reply, or the bigger picture?"
    }
  ],
  "ladder": [
    {
      "weak": "\"You should just talk to them.\"",
      "better": "\"That sounds stressful. Do you want advice?\"",
      "best": "\"That sounds stressful. I won't jump into fixing it yet. Do you want me to just listen for a minute, or help you sort options after you get it out?\""
    },
    {
      "weak": "\"At least you know now.\"",
      "better": "\"That must feel disappointing.\"",
      "best": "\"That's disappointing, especially after how much you put into it. I'm not going to silver-line it. What part is sitting heaviest?\""
    },
    {
      "weak": "\"Here's what I would do.\"",
      "better": "\"I have thoughts if you want them.\"",
      "best": "\"I do have thoughts, but I don't want to rush past what this is like for you. Want listening first, or ideas now?\""
    }
  ],
  "scenarios": [
    {
      "situation": "Friend venting about work",
      "move": "Name the non-fix, then follow the frustration before mentioning any solution.",
      "phrase": "That sounds awful. I won't fix it yet — what part is most frustrating?"
    },
    {
      "situation": "Partner sharing family stress",
      "move": "Flag your usual habit of solving, slow down, and ask what they need.",
      "phrase": "I know I usually try to solve this. I'm going to slow down. What do you need from me right now?"
    },
    {
      "situation": "Employee overwhelmed by workload",
      "move": "Understand where the pressure comes from before assigning fixes.",
      "phrase": "Before I assign fixes, I want to understand where the pressure's actually coming from."
    },
    {
      "situation": "Client or customer upset",
      "move": "Resist the generic fix; understand the disruption first, then offer options.",
      "phrase": "I'm not going to rush into a generic fix. First, what has this disrupted for you?"
    },
    {
      "situation": "Text from someone in distress",
      "move": "Keep it short, offer modes, avoid a paragraph of instructions.",
      "phrase": "I'm here. I won't advice-dump. Want me to listen, distract you, or help think it through?"
    },
    {
      "situation": "High-stakes situation",
      "move": "Separate genuine urgency from processing; act if there's real risk, otherwise slow down.",
      "phrase": "If there's immediate safety risk, we act now. If not, I can slow down and understand first. Which is it?"
    }
  ],
  "calibration": {
    "working": [
      "They exhale, slow down, or give richer detail.",
      "They say \"exactly,\" \"yes,\" or \"that's the thing.\"",
      "They thank you for not trying to fix it.",
      "They shift from facts into meaning, fear, resentment, or grief.",
      "They correct you but stay engaged.",
      "They haven't yet asked for advice or next steps."
    ],
    "adjust": [
      "They ask directly, \"What should I do?\" — move to permission-based advice.",
      "They start circling and clearly want structure.",
      "They name a deadline, decision, or risk that needs action now.",
      "They go shorter, flatter, or irritated, or say they don't want to talk about it.",
      "They seem patronised by your support language — drop it and be plain.",
      "They're venting endlessly to avoid a boundary or decision they need to make.",
      "You realise you're withholding help they clearly want — offer it."
    ]
  },
  "drill": [
    {
      "day": "Day 1",
      "title": "Spot the reflex",
      "task": "Through the day, each time someone mentions a problem, silently notice the exact moment advice starts forming in you. Don't act on it — just count how often it happens."
    },
    {
      "day": "Day 2",
      "title": "Rewrite your reflex",
      "task": "Take five complaints you commonly hear and write your automatic advice for each. Then rewrite each as a non-fixing support line, e.g. \"That sounds exhausting. I won't jump into fixing it — what's wearing you down most?\""
    },
    {
      "day": "Day 3",
      "title": "The three-second delay",
      "task": "In real conversations today, wait three seconds before responding to any problem. In the pause, ask yourself: are they asking for a fix, or asking not to be alone with it?"
    },
    {
      "day": "Day 4",
      "title": "Name the non-fix out loud",
      "task": "Once today, say a non-fixing line aloud before anything else — \"I won't try to solve it yet, I can just listen for a minute\" — and watch what the person does next."
    },
    {
      "day": "Day 5",
      "title": "Offer the mode menu",
      "task": "Practise offering support modes without sounding stiff: \"Do you want listening, comfort, or ideas?\" Use one version in a real conversation and follow whichever they choose."
    },
    {
      "day": "Day 6",
      "title": "Reflect before you shift",
      "task": "In one conversation, reflect the person's experience at least once (\"So the hardest part is not knowing where you stand\") before you ask about solutions or offer any."
    },
    {
      "day": "Day 7",
      "title": "Practise the repair",
      "task": "Deliberately catch yourself slipping into advice, then recover in one clean sentence: \"I jumped into fixing. Let me back up — what's this like for you?\" Aim to leave the person feeling accompanied, not managed."
    }
  ],
  "checklist": [
    "Did I notice my fixing reflex before speaking?",
    "Did I open with presence rather than advice, analysis, or reassurance?",
    "Did I reflect the person's experience before asking about solutions?",
    "Did I ask what support mode they wanted?",
    "Did I move to practical help once they asked for it?",
    "If I slipped into fixing, did I repair without making them comfort me?"
  ],
  "example": {
    "without": [
      "Person: \"I'm so done. I worked all weekend on that proposal and they dismissed it in five minutes.\"",
      "You: \"You need to document everything and send a stronger follow-up. And next time, don't do weekend work unless they ask.\"",
      "Person: \"Yeah. I guess.\"",
      "Why it fails: the ideas may be sound, but they arrive before the person feels seen. It turns their experience into your management plan."
    ],
    "with": [
      "Person: \"I'm so done. I worked all weekend on that proposal and they dismissed it in five minutes.\"",
      "You: \"That's brutal. I'm not going to jump straight into fixing it. You put in real effort, and it sounds like they barely treated it as real work.\"",
      "Person: \"Exactly. It made me feel stupid for caring.\"",
      "You: \"That's the painful part — not just the proposal, but feeling like caring cost you dignity. Want me to just stay with you in that for a minute, or help you think through what to do next?\"",
      "Person: \"Just stay for a second. Then I might want help drafting a reply.\"",
      "Why it works: you hold the fix, reflect the meaning, ask for the mode, and make the later practical help genuinely welcome."
    ],
    "note": "The mid-tier version — \"That sounds frustrating. Do you want advice or to vent?\" — beats fixing, but the mode question still arrives before much contact. Make contact and reflect first, then offer the choice."
  },
  "influencePayoff": {
    "feeling": "\"They didn't try to fix me. They actually stayed with it.\"",
    "principle": "People become receptive to your help once they feel you can tolerate their reality without immediately making it about your answer.",
    "gains": [
      "Support feels safe rather than managerial.",
      "Defensiveness drops because advice isn't arriving as superiority.",
      "The person keeps ownership of their own life and dignity.",
      "The real need surfaces, so later problem-solving is sharper.",
      "You avoid the common likability failure of solving before understanding.",
      "Trust deepens in close relationships, leadership, care work, and conflict repair."
    ],
    "whyMostFail": [
      "They confuse non-fixing with doing nothing, and go passive instead of actively present.",
      "They ask \"Do you want advice?\" with the advice already loaded and waiting.",
      "They reflect for a moment, then hijack the topic back to their own solution.",
      "They deliver the non-fixing line so therapeutically that it sounds like a performance."
    ]
  },
  "fieldTip": {
    "headline": "Don't treat pain as a broken object. Treat it first as a human signal.",
    "body": "The discipline isn't never fixing — it's not fixing yet. Hold the solution long enough for the person to feel met, and the fix, when it comes, will actually be wanted.",
    "example": "\"I will not fix first. I will understand first.\"",
    "dont": "Open with \"Here's what you should do…\" while they're still in the feeling.",
    "do": "Open with \"I won't try to fix this yet — I can just stay with you in it for a minute.\""
  },
  "method": [
    {
      "step": "1",
      "title": "Catch the fixing reflex",
      "body": "Notice advice, reassurance, a bright-side reframe, or a plan forming before the person has finished being understood. The impulse itself is the cue to slow down."
    },
    {
      "step": "2",
      "title": "Slow your first sentence",
      "body": "Don't open with analysis, explanation, reassurance, comparison, or instruction. The first line decides whether this becomes support or a repair job."
    },
    {
      "step": "3",
      "title": "Name the non-fixing container",
      "body": "Say one clean, low-drama line: \"I won't try to solve it yet,\" or \"I can just listen for a minute.\" Make the restraint visible enough to be felt — but keep it plain, not therapeutic."
    },
    {
      "step": "4",
      "title": "Reflect the current experience",
      "body": "Offer a short reflection that shows you're tracking them: \"That sounds exhausting,\" \"No wonder that hit hard,\" or \"So the hardest part is not knowing where you stand.\""
    },
    {
      "step": "5",
      "title": "Ask for the support mode — after contact",
      "body": "Only once they feel met, offer the choice: \"Do you want comfort, help thinking it through, or actual advice?\" Asking too early still feels like pressure."
    },
    {
      "step": "6",
      "title": "Shift cleanly, or recover fast",
      "body": "If they choose listening, keep advice out. If they ask for help, give one concise next step, not a lecture. If you slipped into fixing, back up: \"I jumped ahead — what's this like for you right now?\" The move is small; the restraint is the skill."
    }
  ],
  "liveThreadClues": [
    "\"You should…\"",
    "\"Just…\"",
    "\"At least…\"",
    "\"Why don't you…\"",
    "\"Here's what I'd do…\"",
    "\"Have you tried…\"",
    "The urge to reassure, diagnose, compare, or silver-line"
  ],
  "depthDial": [
    {
      "depth": "Presence",
      "useWhen": "They just need not to be alone with it.",
      "phrase": "\"I'm here. I won't try to fix it.\""
    },
    {
      "depth": "Comfort",
      "useWhen": "The feeling is still raw.",
      "phrase": "\"That's a lot. I'm really sorry.\""
    },
    {
      "depth": "Reflection",
      "useWhen": "They want to feel understood.",
      "phrase": "\"So the hardest part is feeling like caring cost you.\""
    },
    {
      "depth": "Options",
      "useWhen": "They're ready to think, not be told.",
      "phrase": "\"Want to sort through a couple of ways to handle it?\""
    },
    {
      "depth": "Advice",
      "useWhen": "They explicitly ask for your view.",
      "phrase": "\"Here's what I'd try — but it's your call.\""
    },
    {
      "depth": "Action",
      "useWhen": "There's a deadline, a risk, or a clear request.",
      "phrase": "\"Let's do the next concrete step now.\""
    }
  ],
  "commonMistakes": [
    {
      "mistake": "Advice in a listening costume",
      "soundsLike": "\"Do you want my advice?\" — with the advice already loaded.",
      "better": "\"I won't jump in yet. What's the hardest part right now?\""
    },
    {
      "mistake": "Silver-lining too early",
      "soundsLike": "\"At least you know now.\"",
      "better": "\"I'm not going to silver-line it. What's sitting heaviest?\""
    },
    {
      "mistake": "Diagnosis instead of presence",
      "soundsLike": "\"This is really about your boundaries / your childhood.\"",
      "better": "\"That sounds heavy. Tell me what it's been like.\""
    },
    {
      "mistake": "Interrogation",
      "soundsLike": "Rapid-fire questions to crack the case rather than understand the person.",
      "better": "\"No rush. Say it however it comes out.\""
    },
    {
      "mistake": "Passive abandonment",
      "soundsLike": "\"I won't fix this\" — then silence, no warmth, no reflection.",
      "better": "\"I won't fix it yet, but I'm right here with you.\""
    },
    {
      "mistake": "Over-softening",
      "soundsLike": "A non-fixing line so therapeutic it sounds artificial.",
      "better": "\"That sucks. I can just listen.\""
    },
    {
      "mistake": "Boundary avoidance",
      "soundsLike": "Hiding in listening mode to dodge help they clearly need.",
      "better": "\"You've been heard — now let's do the concrete thing you're asking for.\""
    }
  ],
  "recoveryPhrases": [
    "I jumped into fixing. Let me back up — what's this like for you right now?",
    "That came out more advice-y than I meant. I can just listen.",
    "I moved to solutions before understanding the impact. Say more about that part.",
    "I think I tried to make it tidy too quickly. It might just be messy right now.",
    "I do have thoughts, but I don't want to rush you. Do you want those now or later?",
    "I hear that advice isn't what you need. I'll stop.",
    "I may have sounded like I was minimising it. That wasn't fair.",
    "I missed the support mode. What would actually help from me right now?"
  ],
  "bestRecoveryLine": "I jumped into fixing. Let me back up — what's this like for you right now?",
  "chains": [
    {
      "label": "Support chain",
      "sequence": "TC012 Full-attention signal -> TC090 Do-Not-Fix-Yet -> TC004 Reflective listening -> TC040 Meaning reflection -> TC027 Permission-based advice",
      "example": [
        "Use when someone brings a vulnerable problem and later wants help.",
        "\"You've got my full attention. I won't try to fix it yet — tell me what happened. …So it's less the task, more feeling unseen. …Want a couple of options now?\""
      ]
    },
    {
      "label": "Conflict chain",
      "sequence": "TC031 Slow down under pressure -> TC090 Do-Not-Fix-Yet -> TC005 Validation without agreement -> TC037 Double-sided reflection -> TC013 Clean request",
      "example": [
        "Use when your impulse is to solve, defend, or correct mid-argument.",
        "\"Let me slow down. I'm not going to fix this on the spot. I get why you saw it that way — and I saw it differently. Can we take one thing at a time?\""
      ]
    },
    {
      "label": "Leadership chain",
      "sequence": "TC011 Summary check -> TC090 Do-Not-Fix-Yet -> TC043 OARS -> TC027 Permission-based advice -> TC019 Small ask",
      "example": [
        "Use when a team member is overloaded and you need to move from support to action without rushing them.",
        "\"So the load's been relentless for weeks — have I got that right? I won't leap to fixes. …Ready to pick one small thing to take off your plate?\""
      ]
    },
    {
      "label": "Digital chain",
      "sequence": "TC024 Warm opening -> TC090 Do-Not-Fix-Yet -> TC030 Echo plus question -> TC041 Topic energy tracking -> TC027 Permission-based advice",
      "example": [
        "Use when replying by text and you want to avoid the coldness of instant problem-solving.",
        "\"Really glad you told me. I won't advice-dump. 'Dismissed in five minutes' — what stung most about that? …Want ideas now or later?\""
      ]
    }
  ],
  "relatedTechniques": [
    {
      "id": "TC015",
      "reason": "Both hold advice back. Use TC015 when you only need to stop early advice leaking out; use TC090 when the person needs active, accompanying presence, not just a pause."
    },
    {
      "id": "TC027",
      "reason": "The next step once support is established. Use TC090 while emotion is still live; switch to TC027 the moment they ask for input, to agree what kind and how much."
    },
    {
      "id": "TC004",
      "reason": "Reflective listening shows you understood the point beneath their words; TC090 is the discipline that stops that reflection from becoming a bridge into advice too soon."
    },
    {
      "id": "TC005",
      "reason": "Validation without agreement endorses the experience without endorsing the conclusion — reach for it when disagreement is the issue, and TC090 when it's advice timing."
    },
    {
      "id": "TC040",
      "reason": "Meaning reflection names why a detail matters; use it only once TC090 has held the fix, or naming significance can tip into an implied solution."
    },
    {
      "id": "TC043",
      "reason": "OARS gives a coaching structure; if you're reaching for a framework because discomfort is high, steady the moment with TC090 first so the structure doesn't feel performative."
    }
  ]
};
