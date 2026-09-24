import type { CardData } from "../card-types";

export const TC010: CardData = {
  pdfUrl: "cards/TC010/TC010_TwoCard_Combined.pdf",
  resources: [
    { label: "Two-card (combined)", description: "Front and back study cards on one sheet — the designed visual card.", href: "cards/TC010/TC010_TwoCard_Combined.pdf", type: "pdf", group: "Visual Cards" },
    { label: "One-card summary", description: "The whole technique on a single designed card.", href: "cards/TC010/TC010_OneCard.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Quick card", description: "One-page glance card for fast recall.", href: "cards/TC010/TC010_Quick_Card.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Detailed guide", description: "The full written guide with every section.", href: "cards/TC010/TC010_Detailed_Guide.pdf", type: "pdf", group: "Written Guides" },
    { label: "Reference sheet", description: "Dense one-page reference of the key moves.", href: "cards/TC010/TC010_Reference.pdf", type: "pdf", group: "Written Guides" },
    { label: "Phrase bank (CSV)", description: "Every phrase, ready to import or drill.", href: "cards/TC010/TC010_Phrase_Bank.csv", type: "csv", group: "Practice Tools" },
    { label: "Anki flashcards", description: "Import into Anki for spaced-repetition practice.", href: "cards/TC010/TC010_Anki_Flashcards.csv", type: "csv", group: "Practice Tools" },
  ],
  "id": "TC010",
  "whyItWorks":
    "Warm presence is the skill of making your attention, tone, pace, face, and body feel safe, receptive, and easy to approach. It works because warmth is not more talking - it lowers social threat while showing genuine interest and calm attention, so the other person can relax, open up, and take in whatever you say next.",
  "whatItIsNot": [
    "It is not forced friendliness or people-pleasing.",
    "It is not excessive smiling or agreeing with everything.",
    "It is not trying to be liked at the cost of clarity.",
    "It is not more talking - warmth is lowering social threat, not filling the air.",
    "It is not a charm act you switch on; it is genuine, calm attention."
  ],
  "overview": {
    "coreFormula": [
      "Good to see you. No rush - how has the day landed so far?",
      "I'm glad we get a minute properly. What's been taking most of your attention?",
      "Before I jump into my bit, how are you seeing it?",
      "No pressure to go deep, but I'm curious what your take is.",
      "Settle -> orient -> warm opener -> low-pressure invitation -> responsive follow-up."
    ],
    "minimumViableMove":
      "Slow down, orient to them, and make one low-pressure warm comment before your question or point.",
    "impact": "High",
    "difficulty": "Easy-Medium",
    "misuse":
      "The move fails when warmth becomes performance, intensity, over-smiling or intrusive familiarity.",
    "bestFor": [
      "First impressions, introductions, dates, networking, ward/clinic or workplace conversations, and social settings.",
      "Opening a conversation before asking, persuading, challenging, or giving feedback.",
      "Shy, guarded, stressed, high-status, or socially cautious people who need lower pressure.",
      "Repairing a slightly tense, awkward, or cold interaction.",
      "Making competence feel approachable rather than intimidating."
    ]
  },
  "notFor": [
    "The situation needs immediate directness, safety action, or a firm boundary before rapport.",
    "Warmth is becoming approval-seeking, flattery, over-smiling, or excessive accommodation.",
    "You are using warmth to hide an agenda or soften pressure rather than preserve real choice.",
    "The other person is suspicious of charm; use calm clarity and consistency instead.",
    "You need to say no, correct, or disagree; keep warmth, but do not dilute the message."
  ],
  "phraseBank": [
    {
      "id": "openers",
      "label": "Openers",
      "tag": "Warm greetings",
      "tone": "Quick",
      "phrases": [
        "Good to see you.",
        "I'm glad we actually get a minute properly.",
        "Nice to finally meet you properly.",
        "I've heard good things - no pressure to live up to them.",
        "Before we get into the details, how has your day been landing?"
      ]
    },
    {
      "id": "low_pressure_warmth",
      "label": "Low-pressure warmth",
      "tag": "Reduce pressure / shy or guarded",
      "tone": "Warm",
      "phrases": [
        "No rush - take your time.",
        "No pressure if you don't want to get into it.",
        "We can keep this light.",
        "Only if you feel like saying.",
        "A short version is completely fine.",
        "You can give me the rough version.",
        "We can start simple.",
        "Whatever comes to mind first is fine."
      ]
    },
    {
      "id": "warm_attention",
      "label": "Warm attention",
      "tag": "Acknowledge and track",
      "tone": "Warm",
      "phrases": [
        "That makes sense.",
        "I can see why that would land that way.",
        "That sounds like the part that mattered.",
        "I'm with you.",
        "That's a useful way to put it."
      ]
    },
    {
      "id": "professional_leadership",
      "label": "Professional / leadership",
      "tag": "Work and decisions",
      "tone": "Professional",
      "phrases": [
        "Before I give my view, how are you seeing it?",
        "What would make this useful from your side?",
        "Let's keep this practical.",
        "I want to understand the constraint before suggesting anything.",
        "What does good look like here?",
        "Would be curious for your take when you have space."
      ]
    },
    {
      "id": "respect_their_time",
      "label": "High-status or busy person",
      "tag": "Brief, respectful asks",
      "tone": "Direct",
      "phrases": [
        "I'll keep this tight.",
        "The short version is...",
        "I want to be respectful of your time.",
        "I'd value your read on one thing.",
        "If now's not the right time, no issue."
      ]
    },
    {
      "id": "dating_social",
      "label": "Dating / social",
      "tag": "Playful rapport",
      "tone": "Warm",
      "phrases": [
        "No pressure, but I'm curious about that.",
        "That sounds like there's a story there.",
        "You seem like you have a good read on people.",
        "I like how you said that.",
        "Okay, give me the non-boring version."
      ]
    },
    {
      "id": "conflict_softening",
      "label": "Conflict softening",
      "tag": "Lower the temperature",
      "tone": "High-stakes",
      "phrases": [
        "I want to understand before I respond.",
        "I don't want this to become adversarial.",
        "I can see there's a real concern underneath this.",
        "Let's slow it down for a second.",
        "I'm not trying to dismiss the concern."
      ]
    },
    {
      "id": "recovery_reset",
      "label": "Recovery / reset",
      "tag": "Repair a cold moment",
      "tone": "Repair",
      "phrases": [
        "That came out colder than I meant.",
        "Let me say that with less rush.",
        "I think I moved too quickly into the task.",
        "I don't want this to feel pressured.",
        "Let me reset and ask properly."
      ]
    }
  ],
  "decisionTree": [
    {
      "condition":
        "They are giving a warmth cue - a first meeting, an awkward or cold moment, or someone who seems guarded, stressed or cautious.",
      "action":
        "Use the minimum viable move: slow down, orient, and make one low-pressure warm comment before your ask.",
      "phrase": "Good to see you. No rush - how has the day landed so far?"
    },
    {
      "condition":
        "There is no warmth cue - they want a direct answer, or the moment needs a boundary or safety action first.",
      "action":
        "Skip the warm-up. Listen plainly or lead with clarity, then add warmth once the essential point is made.",
      "phrase": "Let me be straight with you first, then we can talk it through."
    },
    {
      "condition": "The warm opener landed and they relaxed or opened up.",
      "action":
        "Stay with their first real thread once; reflect it back before adding your own point.",
      "phrase": "So the people side is the main weight right now?"
    },
    {
      "condition": "There is pressure, distress or urgency.",
      "action":
        "Under pressure, slow down and shorten. Under distress, add validation. Under real urgency, prioritise the action and keep the tone kind.",
      "phrase": "No rush. We can slow this down and work out the useful part first."
    },
    {
      "condition":
        "You have already used warmth and it is starting to feel like performance or stalling.",
      "action":
        "Do not repeat it mechanically. Switch to a clear summary, a direct request, or an ordinary contribution.",
      "phrase": "Alright - here's what I'd actually suggest we do."
    }
  ],
  "ladder": [
    {
      "weak": "\"So what's the issue?\"",
      "better": "\"Where should we start?\"",
      "best":
        "\"No rush - give me the rough version first. What's been taking most of your attention?\""
    },
    {
      "weak": "\"I need your answer quickly.\"",
      "better": "\"I'll keep this brief.\"",
      "best": "\"I want to be respectful of your time. The short version is...\""
    },
    {
      "weak": "\"Tell me how you feel.\"",
      "better": "\"How has that been landing?\"",
      "best": "\"No pressure to make it neat - what's the honest version?\""
    },
    {
      "weak": "\"Relax, it's fine.\"",
      "better": "\"Take a second.\"",
      "best":
        "\"No rush. We can slow this down and work out the useful part first.\""
    }
  ],
  "scenarios": [
    {
      "situation": "Social conversation",
      "move":
        "Use the smallest natural version so the other person feels heard without being analysed.",
      "phrase": "Good to see you. No rush - how's the day been?"
    },
    {
      "situation": "Professional discussion",
      "move": "Keep it concise and tie the warmth to the task, decision or concern.",
      "phrase": "Before I give my view, how are you seeing it?"
    },
    {
      "situation": "Conflict or objection",
      "move": "Add validation and reduce speed; do not weaponise the warmth.",
      "phrase": "Let's slow it down for a second. I want to understand before I respond."
    },
    {
      "situation": "Digital message",
      "move": "Use one sentence. Avoid long explanations or stacked questions.",
      "phrase": "Quick thought - no pressure if it's not useful."
    },
    {
      "situation": "Shy or guarded person",
      "move": "Make the move lighter, more tentative and lower pressure.",
      "phrase": "Whatever comes to mind first is fine."
    },
    {
      "situation": "High-status or busy person",
      "move": "Keep the wording brief, grounded and useful.",
      "phrase": "I'll keep this tight. I'd value your read on one thing."
    }
  ],
  "calibration": {
    "working": [
      "Their shoulders, face, voice, or pace relax.",
      "They answer with more detail than required.",
      "They ask you questions back.",
      "They seem less guarded or less performative.",
      "They laugh naturally or soften.",
      "They move from polite answers into actual thoughts.",
      "They say things like \"Exactly\", \"That helps\", or \"Yeah, that's it\"."
    ],
    "adjust": [
      "They give short answers or seem overwhelmed by your energy - lower the energy and slow your pace.",
      "They look away or seem trapped - use fewer words and leave more space.",
      "Your warmth is starting to feel like performance or people-pleasing - switch from warmth to calm clarity.",
      "You are avoiding the real point to keep things pleasant - state the point directly, in a warm tone.",
      "They seem suspicious of charm - drop the charm and rely on steady consistency instead.",
      "You are smiling while the content is serious - let your face match the emotional tone.",
      "Ask a simpler, less personal question.",
      "Give an exit: \"No pressure if not.\""
    ]
  },
  "drill": [
    {
      "day": "Day 1",
      "title": "Settle before you speak",
      "task":
        "Before your first three conversations today, take one slow breath and relax your jaw and shoulders. Notice whether your opening line comes out calmer."
    },
    {
      "day": "Day 2",
      "title": "Slow the first sentence",
      "task":
        "In five conversations, deliberately slow your opening sentence by about ten percent and start with a low-pressure line rather than a task or a question."
    },
    {
      "day": "Day 3",
      "title": "Phone-away attention",
      "task":
        "Put your phone fully away before the first meaningful question in each conversation. Notice what changes in how the other person responds."
    },
    {
      "day": "Day 4",
      "title": "The 'No rush' probe",
      "task":
        "Use the phrase \"No rush\" once with someone who seems pressured, then watch whether they relax, slow down, or elaborate."
    },
    {
      "day": "Day 5",
      "title": "Match before leading",
      "task":
        "Pick one quiet or guarded person and match their pace and volume before adding any energy of your own. Only lead once they have settled."
    },
    {
      "day": "Day 6",
      "title": "Warm and clear together",
      "task":
        "Have one conversation where you must give a boundary, correction, or firm ask. Keep your tone warm while stating the point cleanly - do not soften it into vagueness."
    },
    {
      "day": "Day 7",
      "title": "Review and calibrate",
      "task":
        "Afterwards, note for each conversation whether your warmth was genuine, performative, too intense, or well-calibrated, and pick the one cue you most want to read faster next week."
    }
  ],
  "checklist": [
    "Did I make the person feel at ease before I asked for something?",
    "Did my face, tone, body, and words match?",
    "Did I lower pressure or accidentally increase it?",
    "Did I confuse warmth with agreeability?",
    "Did I stay clear when a boundary or point was needed?",
    "What cue told me to soften, slow down, or become more direct?"
  ],
  "example": {
    "without": [
      "Person: I'm not sure where to start.",
      "You: Okay, we need to get through this quickly. What exactly is the problem?",
      "Why it is weak:",
      "It rushes the person before they have settled.",
      "It signals pressure and impatience, so they brace instead of opening up.",
      "It asks for the problem without making it safe to give a messy first answer."
    ],
    "with": [
      "Person: I'm not sure where to start.",
      "You: No rush. We can start with the rough version. What's been taking up the most headspace?",
      "Person: Mostly the team stuff.",
      "You: So the people side is the main weight right now?",
      "Person: Exactly.",
      "Advanced:",
      "Person: I'm not sure where to start.",
      "You: That's fine. No need to make it neat. Give me the messy version first.",
      "Person: Honestly, it's not one thing. It's the whole dynamic.",
      "You: So the issue is less a single event and more the atmosphere around it.",
      "Person: Yes - that's exactly it.",
      "Why it works:",
      "It reduces pressure before asking for detail.",
      "It gives permission for an imperfect answer.",
      "It follows the person's first real thread.",
      "It sounds warm without becoming vague or overly soothing.",
      "It creates safety and momentum at the same time."
    ],
    "note":
      "Warmth here is not softness for its own sake - it lowers the threat just enough that the real answer can surface."
  },
  "influencePayoff": {
    "feeling": "\"I can relax around this person - I don't have to perform.\"",
    "principle":
      "People open up, trust you, and take in what you say when they first feel safe and unhurried in your presence.",
    "gains": [
      "People feel comfortable enough to open up, relax, and keep engaging.",
      "You become more likeable simply by being easier to be around.",
      "Trust rises because your words, body, tone, and timing feel congruent.",
      "Pressure, performance anxiety, defensiveness, and guardedness drop.",
      "Later influence, disagreement, requests, feedback, and advice become easier to receive.",
      "Competence reads as approachable rather than intimidating.",
      "Awkward, tense, or cold moments thaw without anyone having to name it."
    ],
    "whyMostFail": [
      "They turn warmth into performance - over-smiling, gushing, or charm that does not fit the moment.",
      "They rush the first moment, opening with tasks or questions before the person has settled.",
      "They let warmth slide into approval-seeking, so the real ask, boundary, or point goes soft.",
      "They keep the same polished friendliness with everyone instead of matching the person and pace."
    ]
  },
  "fieldTip": {
    "headline": "Warmth is safety, not friendliness.",
    "body":
      "Warm presence is not \"being extra friendly\". It is making your attention feel safe, calm, and easy to receive. The work is mostly in your body and pace, not your words - settle yourself first and the right tone tends to follow.",
    "example":
      "Before a hard conversation, take one slow breath and unclench your jaw before you say anything.",
    "dont": "Arrive fast and bright, leading with the task before the person has landed.",
    "do": "Slow the first sentence, orient to them, and make one low-pressure comment before your point."
  },
  "method": [
    {
      "step": "1",
      "title": "Settle yourself first",
      "body":
        "Before you speak, slow your breath, relax your jaw and shoulders, and let your face soften. Warm presence starts as nervous-system regulation, not word choice - if you are tense, no phrase will read as warm."
    },
    {
      "step": "2",
      "title": "Orient without crowding",
      "body":
        "Face them enough to show attention, put your phone away, use relaxed eye contact, and respect their space. Do not stare or lean in too early."
    },
    {
      "step": "3",
      "title": "Open with low-pressure warmth",
      "body":
        "Use a simple greeting, a comment about the shared context, or a light acknowledgement. Make the first moment easy rather than impressive.",
      "examples": [
        { "label": "Greeting", "text": "Good to see you. No rush - how's the day been?" },
        { "label": "Context", "text": "Before we get into the details, how has your day been landing?" }
      ]
    },
    {
      "step": "4",
      "title": "Make it safe to respond simply",
      "body":
        "Do not force depth, performance, or instant enthusiasm. Offer easy questions and clear exit ramps so a short or rough answer is completely fine.",
      "examples": [
        { "label": "Exit ramp", "text": "A short version is completely fine - only if you feel like saying." }
      ]
    },
    {
      "step": "5",
      "title": "Match energy before leading",
      "body":
        "Start near their pace and tone. If they are quiet, do not arrive with high-energy cheerfulness. If they are upbeat, meet some of that energy before you steer."
    },
    {
      "step": "6",
      "title": "Use micro-warmth while listening",
      "body":
        "Small nods, brief acknowledgements, a responsive face, and short reflections show that you are tracking them.",
      "examples": [
        { "label": "Micro-warmth", "text": "That makes sense. That sounds like the part that mattered." }
      ]
    },
    {
      "step": "7",
      "title": "Stay warm when you get clear",
      "body":
        "Warmth should survive boundaries, disagreement, and requests. Be kind without becoming vague, apologetic, or soft on the actual point.",
      "examples": [
        { "label": "Warm + clear", "text": "I see why that matters. My concern is..." }
      ]
    }
  ],
  "liveThreadClues": [
    "A first meeting, introduction, or the opening seconds of a conversation",
    "The other person seems guarded, nervous, or cautious",
    "The moment feels slightly tense, awkward, or cold",
    "Someone is stressed, rushed, or overwhelmed",
    "A high-status or busy person you do not want to crowd",
    "You are about to ask, challenge, or give feedback and want it to land"
  ],
  "commonMistakes": [
    {
      "mistake": "Performative friendliness",
      "soundsLike": "\"Hiiii! So amazing to see you!\" when the tone does not fit.",
      "better": "Use calm, proportionate warmth: \"Good to see you. How's your day been?\""
    },
    {
      "mistake": "Over-smiling through serious content",
      "soundsLike": "Smiling while they describe something stressful.",
      "better": "Let your face match the emotional tone. Warm does not mean cheerful."
    },
    {
      "mistake": "Rushing the first moment",
      "soundsLike": "Opening with tasks, questions, or advice before the person has settled.",
      "better": "Use one grounding line first: \"Before we jump in, how are you seeing it?\""
    },
    {
      "mistake": "Warmth as approval-seeking",
      "soundsLike": "Over-agreeing, laughing too much, or softening every opinion.",
      "better": "Keep warmth and backbone together: \"I see why that matters. My concern is...\""
    },
    {
      "mistake": "Too much intensity too soon",
      "soundsLike": "Strong eye contact, deep questions, and emotional language before trust is built.",
      "better": "Start light, use easy questions, and let depth be earned."
    },
    {
      "mistake": "Warmth without clarity",
      "soundsLike": "Being so pleasant that your ask, boundary, or feedback becomes unclear.",
      "better": "State the point cleanly, in a warm tone."
    },
    {
      "mistake": "Generic charm",
      "soundsLike": "Using the same polished friendliness with everyone.",
      "better": "Personalise warmth to the person, setting, and energy."
    },
    {
      "mistake": "Ignoring their pace",
      "soundsLike": "High-energy enthusiasm with someone subdued or guarded.",
      "better": "Match their pace first, then gently lead."
    }
  ],
  "recoveryPhrases": [
    "That came out colder than I meant.",
    "Let me say that with less rush.",
    "I think I moved too quickly into the task.",
    "I don't want this to feel pressured.",
    "Let me reset and ask properly.",
    "No pressure - we can slow this right down.",
    "Sorry, that was more clipped than I intended. Can we start that part again?"
  ],
  "bestRecoveryLine": "That came out colder than I meant. Let me reset and ask properly.",
  "chains": [
    {
      "label": "Rapport chain",
      "sequence":
        "Warm presence -> contextual opener -> live-thread follow-up -> reflective listening -> specific appreciation.",
      "example": [
        "\"Good to see you - no rush, how's the day been?\"",
        "\"You mentioned the move went sideways. What was the sideways part?\"",
        "\"So the timing was the real headache.\"",
        "\"I like how clearly you thought that through.\""
      ]
    },
    {
      "label": "Influence chain",
      "sequence":
        "Warm presence -> ask-before-tell -> values-based framing -> clean request -> autonomy release.",
      "example": [
        "\"Before I give my view, how are you seeing it?\"",
        "\"Given you care about getting this right, here's what I'd suggest.\"",
        "\"Could you have the draft to me by Thursday?\"",
        "\"But it's your call.\""
      ]
    },
    {
      "label": "Conflict chain",
      "sequence":
        "Warm presence -> validate the concern -> slow down -> clarify objection -> shared-goal framing.",
      "example": [
        "\"Let's slow it down for a second - I want to understand before I respond.\"",
        "\"I can see there's a real concern underneath this.\"",
        "\"What part of it worries you most?\"",
        "\"We both want the same outcome here.\""
      ]
    },
    {
      "label": "Dating / social chain",
      "sequence":
        "Warm presence -> playful observation -> low-pressure follow-up -> reciprocal self-disclosure -> callback humour.",
      "example": [
        "\"Okay, give me the non-boring version.\"",
        "\"That sounds like there's a story there - no pressure though.\"",
        "\"I'm the same about that, honestly.\"",
        "\"See, this is the non-boring version I was promised.\""
      ]
    }
  ],
  "relatedTechniques": [
    {
      "id": "TC012",
      "reason":
        "Reach for this when the person mainly needs to know they have your focus. Full-attention signal makes attention explicit; Warm presence sets the overall safe, low-pressure tone."
    },
    {
      "id": "TC024",
      "reason":
        "Use Warm opening when the job is simply to begin the exchange with ease. Warm presence is the sustained tone you hold throughout, not only the first line."
    },
    {
      "id": "TC028",
      "reason":
        "Use this when the fix is specifically in your voice - pace, pitch, and steadiness. Warm presence is broader: face, body, timing, and words together."
    },
    {
      "id": "TC036",
      "reason":
        "Use Contextual opener when you want to start from the shared situation rather than a generic greeting. Warm presence is the underlying warmth any opener rides on."
    },
    {
      "id": "TC004",
      "reason":
        "Once they are talking, Reflective listening keeps the warmth alive by showing you have tracked what they said. Warm presence gets them talking; reflection keeps them going."
    },
    {
      "id": "TC072",
      "reason":
        "When someone is guarded, a Low-pressure invitation is the specific move that lowers the stakes of answering. Warm presence is the overall climate that makes the invitation land."
    }
  ]
};
