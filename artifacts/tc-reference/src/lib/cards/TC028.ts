import type { CardData } from "../card-types";

export const TC028: CardData = {
  pdfUrl: "cards/TC028/TC028_TwoCard_Combined.pdf",
  resources: [
    { label: "Two-card (combined)", description: "Front and back study cards on one sheet — the designed visual card.", href: "cards/TC028/TC028_TwoCard_Combined.pdf", type: "pdf", group: "Visual Cards" },
    { label: "One-card summary", description: "The whole technique on a single designed card.", href: "cards/TC028/TC028_OneCard.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Quick card", description: "One-page glance card for fast recall.", href: "cards/TC028/TC028_Quick_Card.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Detailed guide", description: "The full written guide with every section.", href: "cards/TC028/TC028_Detailed_Guide.pdf", type: "pdf", group: "Written Guides" },
    { label: "Reference sheet", description: "Dense one-page reference of the key moves.", href: "cards/TC028/TC028_Reference.pdf", type: "pdf", group: "Written Guides" },
    { label: "Phrase bank (CSV)", description: "Every phrase, ready to import or drill.", href: "cards/TC028/TC028_Phrase_Bank.csv", type: "csv", group: "Practice Tools" },
    { label: "Anki flashcards", description: "Import into Anki for spaced-repetition practice.", href: "cards/TC028/TC028_Anki_Flashcards.csv", type: "csv", group: "Practice Tools" },
  ],
  "id": "TC028",
  "whyItWorks":
    "Warm vocal baseline is your default speaking tone when you want to be approachable — relaxed, clear, interested, unhurried and emotionally congruent. The warmth is not mainly in the words; it is in how the first few seconds of your voice make the other person feel: safe, respected and not pressured. That felt-safety registers before they have analysed a single word, which is why a warm baseline makes almost everything else you say easier to receive.",
  "whatItIsNot": [
    "It is not a customer-service voice or forced cheerfulness.",
    "It is not a flirting tone, a therapy voice or a stage whisper.",
    "It is not over-softening, or trying to sound endlessly, unnaturally calm.",
    "It is not extra words — warmth lives in tone, not in padding."
  ],
  "overview": {
    "coreFormula": [
      "Formula: breath reset + slightly slower first line + warm interest + clean ending.",
      "Greeting: \"Hey, good to see you.\" (slower, relaxed, genuine)",
      "Question: \"How has your week actually been?\" (curious, not interrogating)",
      "Request: \"Quick ask — could you look at this by Thursday?\" (warm but clear)",
      "Disagreement: \"I see the concern. The part I see differently is…\" (calm, not sharp)"
    ],
    "minimumViableMove":
      "Lower the tension, slow slightly, and add warmth to your first sentence before you respond.",
    "impact": "High",
    "difficulty": "Easy-Medium",
    "misuse":
      "Performing a fake soothing voice that sounds patronising, clinical or seductive — warmth as a role rather than a lowering of pressure.",
    "bestFor": [
      "First impressions, greetings, introductions and re-openings after silence.",
      "Small talk, rapport, dating or social chemistry, and networking.",
      "Requests, advice, feedback and disagreement that could otherwise sound blunt.",
      "Phone calls, voice notes, meetings, interviews and leadership conversations.",
      "Speaking with shy, guarded, busy, senior or emotionally activated people.",
      "Recovering when you have sounded rushed, cold, defensive or overly intense."
    ]
  },
  "notFor": [
    "You are using warmth to hide pressure, disappointment or a hidden agenda.",
    "The situation requires urgency, crisp instruction or safety-critical direction.",
    "The other person is distressed and your tone tips into cheerful or minimising.",
    "You are over-softening so much that you lose clarity, authority or self-respect.",
    "You are performing warmth rather than actually attending to the person.",
    "Noise or distance calls for more volume and clarity, not more softness."
  ],
  "phraseBank": [
    {
      "id": "greetings_openings",
      "label": "Greetings / openings",
      "tag": "Greetings / openings",
      "tone": "Quick",
      "phrases": [
        "Hey, good to see you.",
        "Nice to see you.",
        "I'm glad we got time to talk.",
        "Good timing — I wanted to ask you about something.",
        "Before we get into it, how are you going?",
        "Good to catch you.",
        "Hey — how've you been?"
      ]
    },
    {
      "id": "warm_curiosity",
      "label": "Warm curiosity",
      "tag": "Warm curiosity",
      "tone": "Warm",
      "phrases": [
        "I'm curious how you're seeing it.",
        "What's that been like from your side?",
        "That sounds interesting — how did that come about?",
        "What stood out most?",
        "What's the part people might miss?",
        "Tell me the bit you keep thinking about."
      ]
    },
    {
      "id": "shy_guarded_person",
      "label": "Shy / guarded person",
      "tag": "Shy / guarded person",
      "tone": "Warm",
      "phrases": [
        "No pressure to answer in detail.",
        "We can keep this light.",
        "Take a second if you need.",
        "A rough answer is completely fine.",
        "You don't need to have a polished view.",
        "Only if you feel like getting into it."
      ]
    },
    {
      "id": "requests_action",
      "label": "Requests / action",
      "tag": "Requests / action",
      "tone": "Direct",
      "phrases": [
        "Quick ask — could you send that by Friday?",
        "Would you be open to one small thing?",
        "Could I get your view on this? Two minutes is enough.",
        "No issue if not, but would you be willing to…",
        "The useful version would be a yes or no by tomorrow.",
        "Small favour, and genuinely fine to say no."
      ]
    },
    {
      "id": "high_status_busy_person",
      "label": "High-status / busy person",
      "tag": "High-status / busy person",
      "tone": "Professional",
      "phrases": [
        "I'll keep this brief.",
        "Bottom line first…",
        "I've got one concise question.",
        "Would thirty seconds be enough for your read?",
        "I can send the short version after this.",
        "One decision, then I'll let you go."
      ]
    },
    {
      "id": "disagreement_feedback",
      "label": "Disagreement / feedback",
      "tag": "Disagreement / feedback",
      "tone": "High-stakes",
      "phrases": [
        "I see why that's the concern.",
        "The part I see differently is…",
        "Small correction, because it matters.",
        "I don't want this to sound adversarial.",
        "Can I offer a different read?",
        "I'm with you on most of this — one part I'd push on."
      ]
    },
    {
      "id": "digital_voice_note",
      "label": "Digital / voice note",
      "tag": "Digital / voice note",
      "tone": "Quick",
      "phrases": [
        "Keeping this short…",
        "Quick voice note, because tone matters here.",
        "No urgency on this.",
        "My short version is…",
        "Happy to clarify if this lands oddly in audio.",
        "Reading this in a warm voice, not a flat one."
      ]
    },
    {
      "id": "recovery_reset",
      "label": "Recovery / reset",
      "tag": "Recovery / reset",
      "tone": "Repair",
      "phrases": [
        "That sounded colder than I meant.",
        "Let me say that more plainly.",
        "I came in a bit rushed — let me reset.",
        "That was sharper than intended.",
        "I mean this warmly, not as pressure.",
        "I'm trying not to overdo the tone — the simple version is…"
      ]
    }
  ],
  "method": [
    {
      "step": "1",
      "title": "Reset before the first word",
      "body": "Exhale, drop your shoulders, unclench your jaw and let your face soften. Your first second sets the social frame — tension there leaks into every word that follows."
    },
    {
      "step": "2",
      "title": "Start slightly slower",
      "body": "Begin about ten percent slower than your rushed baseline. Slow enough to sound present, not so slow it turns theatrical.",
      "examples": [
        { "label": "Rushed", "text": "\"Hey-what's-up-what-do-you-need.\"" },
        { "label": "Present", "text": "\"Hey. Good to see you. What's up?\"" }
      ]
    },
    {
      "step": "3",
      "title": "Use interested warmth, not performance",
      "body": "Let the tone carry genuine interest in the person. Avoid the customer-service voice, the therapist voice and the exaggerated upbeat voice — they read as a role, not as you.",
      "examples": [
        { "label": "Performed", "text": "\"And how are we today?\" (bright, polished)" },
        { "label": "Real", "text": "\"How've you actually been?\" (quiet, curious)" }
      ]
    },
    {
      "step": "4",
      "title": "Keep the words clear",
      "body": "Warmth should not blur the message. Use clean sentence endings; avoid trailing off, mumbling or padding the point out of existence."
    },
    {
      "step": "5",
      "title": "Match the moment",
      "body": "Light moments take a little vocal lift; serious moments take sober warmth; conflict takes low-intensity clarity. Warmth that ignores the mood reads as a mismatch."
    },
    {
      "step": "6",
      "title": "Add small pauses",
      "body": "Pause briefly after greetings, questions and important points. A short pause makes warmth feel grounded rather than nervous or rushed."
    },
    {
      "step": "7",
      "title": "Calibrate and adjust",
      "body": "If they relax, continue. If they seem patronised, confused or impatient, reduce the softness and increase plain clarity — warmth is a dial, not a switch."
    }
  ],
  "liveThreadClues": [
    "You are about to open a conversation, greet someone or re-open after silence.",
    "You notice you are rushed, tense or braced before you speak.",
    "The point you are about to make could easily land as blunt or sharp.",
    "The other person seems shy, guarded, senior or emotionally activated.",
    "You are on the phone or leaving a voice note, where tone carries everything.",
    "You have just sounded cold or defensive and need to reset the frame."
  ],
  "depthDial": [
    {
      "depth": "Light lift",
      "useWhen": "Casual, social, upbeat moments.",
      "phrase": "\"Hey — good to see you.\" (a little warmth in the lift)"
    },
    {
      "depth": "Everyday warm",
      "useWhen": "Ordinary rapport, questions and requests.",
      "phrase": "\"How's your week actually been?\""
    },
    {
      "depth": "Sober warm",
      "useWhen": "Serious, heavy or emotional topics.",
      "phrase": "\"Okay. I'm with you. Talk me through it.\""
    },
    {
      "depth": "Low-intensity clear",
      "useWhen": "Conflict, tension or a hard message.",
      "phrase": "\"I see the concern. Let's slow this down.\""
    }
  ],
  "decisionTree": [
    {
      "condition": "They warm up",
      "action": "Continue with light curiosity or a brief reflective comment.",
      "phrase": "\"What's that been like from your side?\""
    },
    {
      "condition": "They stay guarded",
      "action": "Reduce intensity, ask less, and make the interaction lower pressure.",
      "phrase": "\"No pressure — we can keep this light.\""
    },
    {
      "condition": "They seem patronised",
      "action": "Drop the warmth down a notch and speak plainly.",
      "phrase": "\"The simple version is…\""
    },
    {
      "condition": "They seem rushed",
      "action": "Lead with the point, warmly, then stop.",
      "phrase": "\"Bottom line first — then I'll let you go.\""
    },
    {
      "condition": "They are upset",
      "action": "Use slower, sober warmth; avoid cheerfulness or forced positivity.",
      "phrase": "\"Okay. I'm with you. Take your time.\""
    },
    {
      "condition": "They ask you to repeat",
      "action": "Increase clarity and volume — don't just get softer.",
      "phrase": "\"Let me say that more clearly.\""
    },
    {
      "condition": "You sound fake to yourself",
      "action": "Reset to plain speech and drop the performance.",
      "phrase": "\"Let me say that more plainly.\""
    }
  ],
  "ladder": [
    {
      "weak": "\"Hey.\" (flat, distracted)",
      "better": "\"Hey, good to see you.\"",
      "best": "\"Hey, good to see you.\" — with a small pause and a genuinely relaxed tone."
    },
    {
      "weak": "\"What?\"",
      "better": "\"Yeah, what's up?\"",
      "best": "\"Yeah, of course. What's up?\" — with attention and no rush."
    },
    {
      "weak": "\"Can you do this?\"",
      "better": "\"Quick ask — could you do this by Friday?\"",
      "best": "\"Quick ask — could you do this by Friday? No issue if not.\""
    },
    {
      "weak": "\"No, I disagree.\"",
      "better": "\"I see the concern. I read it differently.\"",
      "best": "\"I see why that's the concern. The part I see differently is…\""
    },
    {
      "weak": "Overly sweet: \"No worries at all!!!\"",
      "better": "\"All good.\"",
      "best": "\"All good. Thanks for letting me know.\""
    }
  ],
  "example": {
    "without": [
      "Person: \"Can I ask you something?\"",
      "You: \"Yeah, what?\"",
      "Person: \"Never mind, it's fine.\"",
      "You: \"No, go on — I said what?\"",
      "Why it's weak:",
      "the flat, clipped tone reads as irritation",
      "the person feels like a nuisance and retreats",
      "chasing them (\"go on\") adds pressure without any warmth"
    ],
    "with": [
      "Person: \"Can I ask you something?\"",
      "You: \"Yeah, of course. What's up?\"",
      "Person: \"I wanted your view on something from work.\"",
      "You: \"Sure. Talk me through it.\"",
      "— advanced —",
      "Person: \"Can I ask you something?\"",
      "You: \"Yeah. Take your time — what's going on?\"",
      "Person: \"It's a bit awkward.\"",
      "You: \"That's fine. Give me the rough version first.\"",
      "Person: \"I think I handled a meeting badly.\"",
      "You: \"Okay. I'm with you. What happened?\"",
      "Why this works:",
      "the warm, unhurried tone tells them they're welcome, not a bother",
      "\"take your time\" removes pressure so the awkward thing can surface",
      "\"I'm with you\" signals safety before any advice"
    ],
    "note":
      "The words barely change between the poor and advanced versions. The whole difference is tone: unhurried, warm and present rather than clipped."
  },
  "influencePayoff": {
    "feeling": "\"That was easy to hear — I didn't feel judged or pushed.\"",
    "principle":
      "People become more receptive to your message when your voice signals safety before your words have to make their case.",
    "gains": [
      "Makes your message easier to receive before the person has analysed the content.",
      "Signals social safety, interest and non-threat without needing extra words.",
      "Reduces the risk that clear requests, disagreement or feedback sound sharp.",
      "Increases perceived likability because people feel less evaluated and more welcomed.",
      "Buys goodwill early, so a blunt point later is read as honest rather than hostile.",
      "Supports almost every other technique: openings, listening, questions, requests, boundaries and repair."
    ],
    "whyMostFail": [
      "They perform a fake soothing voice that sounds patronising, clinical or seductive.",
      "They add warmth as brightness — the customer-service voice — instead of lowering tension.",
      "They keep the warm tone when the content is serious, so it reads as a cheerful mismatch.",
      "They over-soften until the point blurs and they lose clarity or authority."
    ]
  },
  "commonMistakes": [
    {
      "mistake": "Customer-service warmth",
      "soundsLike": "Too bright, too polished — \"how can I help you today?\"",
      "better": "Use quiet, real interest rather than performative cheer."
    },
    {
      "mistake": "Over-softening",
      "soundsLike": "Every sentence sounds apologetic or tentative.",
      "better": "Keep the warmth, but still make the point clearly."
    },
    {
      "mistake": "Cheerful mismatch",
      "soundsLike": "Upbeat tone when the content is serious.",
      "better": "Use sober warmth: slower, lower intensity, respectful."
    },
    {
      "mistake": "Rushed warmth",
      "soundsLike": "Friendly words delivered too fast to feel present.",
      "better": "Slow the first sentence and pause after it."
    },
    {
      "mistake": "Trailing off",
      "soundsLike": "Sentence endings disappear or rise into uncertainty.",
      "better": "Finish the sentence cleanly."
    },
    {
      "mistake": "Warmth as pressure",
      "soundsLike": "A warm tone hiding expectation or disappointment.",
      "better": "Pair the warmth with genuine autonomy and clarity."
    },
    {
      "mistake": "Trying to sound charismatic",
      "soundsLike": "Over-controlled voice, theatrical pauses, forced depth.",
      "better": "Aim for easy-to-receive, not impressive."
    }
  ],
  "calibration": {
    "working": [
      "They answer more easily and with more detail.",
      "Their tone warms or relaxes.",
      "They ask you questions back.",
      "Requests feel less tense or abrupt.",
      "They seem less guarded and more willing to continue."
    ],
    "adjust": [
      "They seem patronised, rushed or impatient.",
      "They ask you to repeat because you went too soft.",
      "Your tone feels fake even to you.",
      "The topic is serious and your warmth sounds too cheerful.",
      "They pull away from too much friendliness.",
      "Fix: make the tone plainer, slow less, and increase clarity.",
      "Fix: lower the cheerfulness, use sober warmth, and use fewer words.",
      "Fix: name and repair — \"That sounded more performative than I meant.\""
    ]
  },
  "recoveryPhrases": [
    "That sounded colder than I meant.",
    "Let me say that more simply.",
    "I came in a bit rushed. Let me reset.",
    "That was sharper than intended.",
    "I mean this warmly, not as pressure.",
    "I'm trying not to overdo the tone — the simple version is…"
  ],
  "bestRecoveryLine": "That sounded colder than I meant.",
  "scenarios": [
    {
      "situation": "First meeting",
      "move": "Start slightly slower, put a smile in the voice, use a simple greeting.",
      "phrase": "\"Hey, good to meet you.\""
    },
    {
      "situation": "Busy senior person",
      "move": "Warm but concise, no rambling.",
      "phrase": "\"I'll keep this brief — one quick question.\""
    },
    {
      "situation": "Conflict",
      "move": "Lower the intensity and shorten your sentences.",
      "phrase": "\"I see the concern. Let's slow this down.\""
    },
    {
      "situation": "Dating or social",
      "move": "Relaxed interest, playful but not performative.",
      "phrase": "\"That sounds like there's a story there.\""
    },
    {
      "situation": "Voice note",
      "move": "Keep it short and tonally clear.",
      "phrase": "\"Quick voice note, because this is easier with tone.\""
    },
    {
      "situation": "Apology or repair",
      "move": "Use plain, sober warmth.",
      "phrase": "\"That came out colder than I meant. Let me try again.\""
    }
  ],
  "chains": [
    {
      "label": "Rapport chain",
      "sequence": "Warm vocal baseline → warm opening → live-thread follow-up → reflection → specific appreciation",
      "example": [
        "\"Hey, good to see you — how's your week actually been?\"",
        "\"That sounds like it mattered. What made it stand out?\"",
        "\"I really rate how clearly you think about this.\""
      ]
    },
    {
      "label": "Request chain",
      "sequence": "Warm vocal baseline → clean request → autonomy release → next-action clarity",
      "example": [
        "\"Quick ask — could you look at this by Thursday?\"",
        "\"Totally your call, though — no issue if the timing's tight.\"",
        "\"If yes, I'll send the one-pager straight after.\""
      ]
    },
    {
      "label": "Conflict chain",
      "sequence": "Warm vocal baseline → validate the concern → agreement before disagreement → soft challenge",
      "example": [
        "\"I see why that's the concern.\"",
        "\"You're right that the timeline's tight — I'd agree there.\"",
        "\"The part I'd push on is the scope, not the deadline.\""
      ]
    },
    {
      "label": "Leadership chain",
      "sequence": "Warm vocal baseline → BLUF → concise recommendation → check understanding",
      "example": [
        "\"Bottom line: I'd hold the launch a week.\"",
        "\"My recommendation is to fix the two blockers first.\"",
        "\"Does that match how you're reading it?\""
      ]
    },
    {
      "label": "Repair chain",
      "sequence": "Warm vocal baseline → name the awkwardness → clarify intent → reset",
      "example": [
        "\"That came out sharper than I meant.\"",
        "\"What I was actually trying to say is…\"",
        "\"Let me start that again, properly.\""
      ]
    }
  ],
  "relatedTechniques": [
    {
      "id": "TC010",
      "reason": "Both create felt safety. TC028 is specifically your default vocal tone — how the first seconds sound. TC010 Warm presence is the fuller package (body, attention, manner), of which voice is one part. Reach for TC028 when the fix is purely how you sound."
    },
    {
      "id": "TC024",
      "reason": "TC024 Warm opening is a one-off warm way to start a specific conversation. TC028 is the steady tone you carry through all of it. Use TC024 for the first line; keep TC028 running underneath the whole exchange."
    },
    {
      "id": "TC012",
      "reason": "TC012 Full-attention signal shows you are fully attending — eyes, stillness, no phone. TC028 shapes how your voice lands. Use TC012 when the gap is that they don't feel listened to; use TC028 when the gap is that you sound rushed or cold."
    },
    {
      "id": "TC031",
      "reason": "TC031 Slow down under pressure is the emergency brake when you're activated — it drops your pace mid-heat. TC028 is the calm default you keep when nothing has gone wrong. Use TC031 to recover; use TC028 to set the baseline."
    },
    {
      "id": "TC035",
      "reason": "TC035 Strategic pause is a deliberate silence placed for effect or to let something land. TC028 uses small pauses only to keep warmth grounded. Use TC035 when the pause itself is the move; use TC028 when tone is."
    }
  ],
  "drill": [
    {
      "day": "Day 1",
      "title": "Notice your own tone",
      "task": "For one day, do nothing but notice the tone of your first sentence in each interaction. Silently rate each opener: rushed, flat or warm. No changing it yet — just build awareness."
    },
    {
      "day": "Day 2",
      "title": "Reset before speaking",
      "task": "Before your first line in five interactions, exhale and drop the tension in your shoulders and jaw. Notice whether the reset changes how the opener lands."
    },
    {
      "day": "Day 3",
      "title": "Slow the opener",
      "task": "Slow your first sentence by about ten percent in every greeting today. Check that it sounds present, not theatrical, and pause once after it."
    },
    {
      "day": "Day 4",
      "title": "Warm a request",
      "task": "Take three asks you'd normally fire off and deliver each with a warm opener and a clean ending — e.g. \"Quick ask — could you…? No issue if not.\""
    },
    {
      "day": "Day 5",
      "title": "Match the moment",
      "task": "Use light warmth on one casual conversation and sober warmth on one serious one. Notice the difference in pace and lift, and whether each fit the mood."
    },
    {
      "day": "Day 6",
      "title": "Soften a hard message",
      "task": "Deliver one piece of disagreement or feedback with low-intensity clarity: \"I see why that's the concern. The part I see differently is…\" Keep the point clear, the tone unhurried."
    },
    {
      "day": "Day 7",
      "title": "Calibrate and repair",
      "task": "Through the day, watch for signs your warmth is landing or missing. When it misses, use one recovery line — \"That sounded colder than I meant\" — and reset the tone."
    }
  ],
  "checklist": [
    "Did I use the technique because the moment called for it, or because I wanted to perform warmth?",
    "Was my first sentence slower and less tense than my instinct?",
    "Did the person have more room after I spoke, or less?",
    "Did I adjust — plainer, clearer, less soft — when they seemed patronised or confused?",
    "What neighbouring technique would have been better if this one missed?"
  ],
  "fieldTip": {
    "headline": "Warmth is subtraction, not addition.",
    "body": "Warmth isn't extra words or a brighter voice. It's the absence of rush, tension and pressure in your first few seconds. Take those out and what's left already sounds warm.",
    "example": "Same words, two tones: \"Sure, what's up?\" — clipped, it says 'be quick'; unhurried, it says 'you're welcome here'.",
    "dont": "Don't add cheerfulness or padding to try to sound warm.",
    "do": "Do exhale, slow the first line, and let the tension drop out of it."
  }
};
