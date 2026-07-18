import type { CardData } from "../card-types";

export const TC012: CardData = {
  pdfUrl: "cards/TC012/TC012_TwoCard_Combined.pdf",
  resources: [
    { label: "Two-card (combined)", description: "Front and back study cards on one sheet — the designed visual card.", href: "cards/TC012/TC012_TwoCard_Combined.pdf", type: "pdf", group: "Visual Cards" },
    { label: "One-card summary", description: "The whole technique on a single designed card.", href: "cards/TC012/TC012_OneCard.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Quick card", description: "One-page glance card for fast recall.", href: "cards/TC012/TC012_Quick_Card.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Detailed guide", description: "The full written guide with every section.", href: "cards/TC012/TC012_Detailed_Guide.pdf", type: "pdf", group: "Written Guides" },
    { label: "Reference sheet", description: "Dense one-page reference of the key moves.", href: "cards/TC012/TC012_Reference.pdf", type: "pdf", group: "Written Guides" },
    { label: "Phrase bank (CSV)", description: "Every phrase, ready to import or drill.", href: "cards/TC012/TC012_Phrase_Bank.csv", type: "csv", group: "Practice Tools" },
    { label: "Anki flashcards", description: "Import into Anki for spaced-repetition practice.", href: "cards/TC012/TC012_Anki_Flashcards.csv", type: "csv", group: "Practice Tools" },
  ],
  "id": "TC012",
  "whyItWorks": "Full-Attention Signal is the deliberate move of showing someone they have your attention by removing the things competing for it - the phone, the laptop, the room, your next sentence - and orienting visibly toward them. It works because most people are used to being half-listened to, so the moment you put something down and turn toward them they feel safe enough to say the real thing. It is a small, respectful move in the moment, not a performance of listening.",
  "whatItIsNot": [
    "It is not staring, performing deep listening, freezing your body, or saying \"I'm listening\" while still checking your phone, laptop, the room, or your next thought.",
    "It is not a script for pressure, extraction or control.",
    "It is not a substitute for actually listening to the response - the move only buys the attentive state, it does not replace hearing the answer."
  ],
  "overview": {
    "coreFormula": [
      "Pause the competing task + orient warmly + clear the distraction + one readiness line + listen through.",
      "Hang on, let me put this down. I want to actually hear this.",
      "Go on, I'm with you.",
      "Let me close this so I'm not half-listening.",
      "You have my attention - what happened?",
      "I was distracted. Say that again properly, because I do want to hear it."
    ],
    "minimumViableMove": "Phone away, body toward them, and: \"Go on, I'm with you.\"",
    "impact": "High",
    "difficulty": "Easy",
    "misuse": "It fails when you perform attention as a display - holding eye contact too long, announcing \"you have my full attention\" too dramatically, or using the focus to pressure someone into disclosing rather than to make listening easier.",
    "bestFor": [
      "First impressions, greetings, dates, networking, workplace conversations, and one-to-one rapport.",
      "When someone starts telling you something meaningful, vulnerable, exciting, or frustrating.",
      "Before asking a deeper question, giving advice, disagreeing, or making a request.",
      "When someone seems hesitant, guarded, rushed, dismissed, or unsure if you care.",
      "When you need to rebuild trust after being distracted or interrupting.",
      "Digital-to-live transitions: before moving from laptop or phone work into an actual conversation."
    ]
  },
  "notFor": [
    "They are shy, anxious, culturally uncomfortable with direct eye contact, or clearly need more space.",
    "The situation calls for lightness, movement or parallel activity rather than intense face-to-face focus.",
    "You would only be performing focus to look attentive, not to actually listen better.",
    "You cannot really give attention right now - better to name the limit and arrange a proper moment.",
    "The person needs safety, privacy, silence or direct practical help instead.",
    "Physical safety or an immediate emergency response takes priority."
  ],
  "phraseBank": [
    {
      "id": "quick-defaults",
      "label": "Quick defaults",
      "tag": "Quick defaults",
      "tone": "Quick",
      "phrases": [
        "Go on, I'm with you.",
        "I'm listening.",
        "Tell me.",
        "What happened?",
        "I'm here.",
        "Give me the proper version."
      ]
    },
    {
      "id": "warm-human",
      "label": "Warm and human",
      "tag": "Warm and human",
      "tone": "Warm",
      "phrases": [
        "Hang on, let me put this away. I want to actually hear this.",
        "That sounds important. I'm with you.",
        "I don't want to half-listen to this.",
        "Say that again - I want to catch it properly.",
        "You've got my attention.",
        "I'm not rushing you."
      ]
    },
    {
      "id": "social-dating",
      "label": "Social / dating",
      "tag": "Social / dating",
      "tone": "Warm",
      "phrases": [
        "Okay, that sounds like the real story.",
        "I want the full version.",
        "That deserves actual attention.",
        "You have my curiosity now.",
        "I'm listening - no shortcut version.",
        "That sounds like it mattered."
      ]
    },
    {
      "id": "professional-leadership",
      "label": "Professional / leadership",
      "tag": "Professional / leadership",
      "tone": "Professional",
      "phrases": [
        "Let me close this laptop so I can focus.",
        "Give me the headline, then I'll ask a few questions.",
        "I want to understand before I respond.",
        "Let's pause the task for a moment and hear this properly.",
        "This sounds worth slowing down for.",
        "I'll stop typing for this."
      ]
    },
    {
      "id": "high-status-busy",
      "label": "High-status / busy person",
      "tag": "High-status / busy person",
      "tone": "Direct",
      "phrases": [
        "I'll be concise. What's the key thing you need me to understand?",
        "I've got you for a few minutes - I'll focus.",
        "Let me get the main point cleanly.",
        "I'll stop you if I need clarification, but I'm with you.",
        "What's the decision point?",
        "I'll give this my attention and keep it tight."
      ]
    },
    {
      "id": "digital-text",
      "label": "Digital / text",
      "tag": "Digital / text",
      "tone": "Professional",
      "phrases": [
        "I want to reply properly, not quickly. I'll come back to this tonight.",
        "I'm reading this properly now.",
        "This deserves a better reply than a rushed one.",
        "I saw this and want to give it proper attention.",
        "Can I reply properly after work?",
        "I don't want to half-answer this."
      ]
    },
    {
      "id": "conflict-repair",
      "label": "Conflict / repair",
      "tag": "Conflict / repair",
      "tone": "Repair",
      "phrases": [
        "I think I was half-listening. Let me reset.",
        "You're right - I was distracted. Say it again and I'll listen properly.",
        "Before I defend myself, I want to understand what landed badly.",
        "Let me slow down. What do I need to hear?",
        "I don't want to miss the point because I'm reacting.",
        "I'm going to stop multitasking and hear this."
      ]
    },
    {
      "id": "shy-guarded",
      "label": "Shy or guarded person",
      "tag": "Shy or guarded person",
      "tone": "High-stakes",
      "phrases": [
        "No rush.",
        "Take your time.",
        "You don't have to make it neat.",
        "Start wherever it makes sense.",
        "We can keep this simple.",
        "You can say as much or as little as you want."
      ]
    }
  ],
  "decisionTree": [
    {
      "condition": "They shift into something that matters - a cue this move is built for.",
      "action": "Use the minimum viable move: clear the distraction and give them the floor.",
      "phrase": "Go on, I'm with you."
    },
    {
      "condition": "No real cue - it is ordinary chat.",
      "action": "Just listen normally, or reach for a warmer opener instead.",
      "phrase": "How's your day actually been?"
    },
    {
      "condition": "The move opened them up.",
      "action": "Stay with the thread once; don't stack questions on top of it.",
      "phrase": "So the hard part was the uncertainty, not the work."
    },
    {
      "condition": "They tighten or seem put on the spot.",
      "action": "Reduce intensity - soften your face, ease back, or return to the task.",
      "phrase": "No pressure if you don't want to go into it."
    },
    {
      "condition": "There is distress or urgency.",
      "action": "For distress, add warmth; for urgency, drop the move and act.",
      "phrase": "Tell me what you need right now."
    },
    {
      "condition": "You have already signalled attention once.",
      "action": "Don't repeat it mechanically - switch to a summary, a clean request, or an ordinary contribution.",
      "phrase": "So where does that leave things?"
    }
  ],
  "ladder": [
    {
      "weak": "Uses the move mechanically or too often, the same way every time.",
      "better": "Uses the smallest useful version and then listens.",
      "best": "Uses it only when the cue is present, keeps the wording natural, and adjusts to the response."
    },
    {
      "weak": "Talks about listening - \"I'm really listening\" - while still half-distracted.",
      "better": "Performs one clear behavioural move: phone down, body turned.",
      "best": "Makes the move feel like ordinary skilled conversation rather than a signal."
    },
    {
      "weak": "Holds fixed eye contact and waits for the person to perform.",
      "better": "Gives them the floor, then genuinely listens to the answer.",
      "best": "Reads how it lands and eases off the moment it starts to feel like pressure."
    }
  ],
  "scenarios": [
    {
      "situation": "Social conversation",
      "move": "Use the smallest natural version so the person feels heard, not analysed.",
      "phrase": "Go on, I'm with you."
    },
    {
      "situation": "Professional discussion",
      "move": "Keep it concise and tie the move to the task, decision or concern.",
      "phrase": "Let me close this laptop - give me the headline."
    },
    {
      "situation": "Conflict or objection",
      "move": "Add validation and reduce speed; don't weaponise the focus.",
      "phrase": "I'm going to stop multitasking and actually hear this."
    },
    {
      "situation": "Digital message",
      "move": "Write one clean sentence; skip the stacked questions.",
      "phrase": "This deserves a proper reply - can I come back to you tonight?"
    },
    {
      "situation": "Shy or guarded person",
      "move": "Make the move lighter, more tentative and lower pressure.",
      "phrase": "No rush - start wherever it makes sense."
    },
    {
      "situation": "High-status or busy person",
      "move": "Keep the wording brief, grounded and useful.",
      "phrase": "I've got you for a few minutes - what's the key thing?"
    }
  ],
  "calibration": {
    "working": [
      "They give fuller answers or continue without prompting.",
      "Their tone warms or softens.",
      "They stop repeating themselves to get your attention.",
      "They share more detail or emotion.",
      "They seem less guarded or rushed.",
      "They ask you something back or invite your view.",
      "They appear relieved that you slowed down."
    ],
    "adjust": [
      "They seem watched, analysed, or put on the spot.",
      "They give shorter answers after you intensify the attention.",
      "They look away, shrink back, laugh nervously, or change topic.",
      "Your eye contact or posture starts to feel too fixed.",
      "The moment turns more formal than the relationship can support.",
      "Soften your face, ease the eye contact, and angle your body more casually.",
      "Make a short comment instead of asking another question.",
      "Give them an exit: \"No pressure if you don't want to go into it.\""
    ]
  },
  "drill": [
    {
      "day": "Day 1",
      "title": "Spot the cue",
      "task": "Through the day, notice three moments where someone shifts from small talk into something that matters - the voice drops, they hesitate, they check your face. Just notice them; change nothing yet."
    },
    {
      "day": "Day 2",
      "title": "Clear the competition",
      "task": "In one low-stakes conversation, physically put the competing thing down - phone face-down, laptop closed - before you reply. Notice what changes in how the person talks."
    },
    {
      "day": "Day 3",
      "title": "One readiness line",
      "task": "Write your own minimum viable version of Full-Attention Signal for three ordinary comments, then say each out loud once in a normal voice. Cut any line that sounds clever, therapeutic or corporate."
    },
    {
      "day": "Day 4",
      "title": "Use it live, once",
      "task": "In a real conversation, use the smallest version once - phone away, body turned, \"Go on, I'm with you\" - then stop and listen to the whole answer without composing your reply."
    },
    {
      "day": "Day 5",
      "title": "Calibrate",
      "task": "Use the move again, but watch how it lands. If they open up, stay with the thread once. If they tighten, soften your face and ease off. Note which happened and why."
    },
    {
      "day": "Day 6",
      "title": "Three settings",
      "task": "Run one low-stakes version, one professional version tied to the task, and one recovery line after a missed read. Notice how the wording has to change with the context."
    },
    {
      "day": "Day 7",
      "title": "Make it invisible",
      "task": "Use the move once where you would normally half-listen, aiming for it to feel like ordinary conversation rather than a technique. Afterwards, ask whether the person seemed clearer or managed."
    }
  ],
  "checklist": [
    "Did I use the move because the cue was there, or because I wanted to look like a good listener?",
    "Did my behaviour actually remove the competition - phone down, screen closed, body turned?",
    "Was my wording shorter than my instinct?",
    "Did I stop and listen to the whole answer, or start composing my reply?",
    "Did the person have more room after my move, or less?",
    "Did I ease off the moment it started to feel like pressure?"
  ],
  "example": {
    "without": [
      "Person: I had a weird conversation with my manager today.",
      "You: Yeah? *(still typing)*",
      "Person: It just felt off.",
      "You: Hang on, I'm just replying to this message. Keep going.",
      "Why it is weak:",
      "keeps a screen between you and the person",
      "signals the message matters more than they do",
      "makes them compete with your task for the words",
      "so they shrink the story down to \"it just felt off\" and stop"
    ],
    "with": [
      "Person: I had a weird conversation with my manager today.",
      "You: Hang on, let me put this down. I want to actually hear this. What felt weird?",
      "Person: It felt like she was warning me without saying it directly.",
      "You: So the uncomfortable part was the implied message, not just the words.",
      "Person: Exactly. That's what bothered me.",
      "Why this works:",
      "puts the competing task down before asking anything",
      "turns toward them so the attention is visible, not merely claimed",
      "follows the emotionally relevant word once they open up",
      "lets them feel clearer, not managed",
      "Advanced variation:",
      "Person: I had a weird conversation with my manager today.",
      "You: That sounds like the kind of thing where tone matters. Give me the proper version.",
      "Person: She kept saying I was doing well, but then asking if I was coping.",
      "You: So the words were positive, but the subtext felt like doubt.",
      "Person: Exactly."
    ],
    "note": "The advanced version should make the other person feel clearer, not managed."
  },
  "influencePayoff": {
    "feeling": "They noticed the real part of what I was saying - I wasn't competing with their phone for it.",
    "principle": "People become more receptive to you once they feel you have been receptive to them.",
    "gains": [
      "Creates immediate social safety: the person is not competing with your phone, task, status anxiety or next sentence.",
      "Increases perceived warmth, respect and trust before you use any verbal technique.",
      "Makes follow-ups, reflection, advice, disagreement and requests land better because they come from a visibly attentive state.",
      "Reduces the need for the other person to repeat, over-explain, escalate or perform for your attention.",
      "Signals calm confidence - you are present enough not to rush or multitask.",
      "Improves likability, because most people are used to being half-listened to."
    ],
    "whyMostFail": [
      "They perform attention instead of giving it - holding eye contact too long or announcing it too dramatically.",
      "They deliver the move mechanically, the same way every time, so it reads as a technique rather than genuine interest.",
      "They use the focus to steer toward their own agenda or to pressure the person to disclose.",
      "They signal full attention, then keep half an eye on the task and never actually hear the answer."
    ]
  },
  "fieldTip": {
    "headline": "Attention is only credible once your behaviour removes what is competing for it.",
    "body": "Put something down before you try to get someone to open up. The physical act - phone away, screen closed, body turned - is what makes the words true. The goal is not to display skill; it is to make the next human moment easier.",
    "example": "Hang on, let me put this down. I want to actually hear this.",
    "dont": "Say \"I'm listening\" while still scanning your phone.",
    "do": "Clear the distraction first, then give one short line and actually listen."
  },
  "method": [
    {
      "step": "1",
      "title": "Notice the cue",
      "body": "Full-Attention Signal earns its place when someone shifts from small talk into something that matters - they lower their voice, hesitate, check your face, or start on something meaningful, vulnerable, exciting or frustrating. That shift is the cue. Don't run the move on autopilot; run it when the moment asks for it."
    },
    {
      "step": "2",
      "title": "Clear the competition",
      "body": "Attention is only credible once your behaviour removes what is competing for it. Put the phone face-down or away, close the laptop, turn from the screen, lower whatever is in your hands. The physical act does most of the work - it is the visible proof that the words that follow are true."
    },
    {
      "step": "3",
      "title": "Orient and give one readiness line",
      "body": "Turn your body toward them and offer a single short line that hands them the floor. Keep it to the smallest version that fits - one clean line beats a speech about how much you are listening.",
      "examples": [
        { "label": "Minimum viable", "text": "Phone away, body toward them: \"Go on, I'm with you.\"" },
        { "label": "Warm", "text": "\"Hang on, let me put this down. I want to actually hear this.\"" }
      ]
    },
    {
      "step": "4",
      "title": "Stop and listen through",
      "body": "Then stop. The move is a doorway, not the conversation - the point is to hear the answer, not to keep signalling. Resist filling the silence, and don't start composing your reply while they are still talking."
    },
    {
      "step": "5",
      "title": "Calibrate to how it lands",
      "body": "Read the response and adjust warmth, directness or brevity. If they open up, stay with the thread once. If they seem watched or put on the spot, soften your face, ease the eye contact, angle your body more casually, or make a small comment instead of another question."
    }
  ],
  "liveThreadClues": [
    "Can I tell you something?",
    "Have you got a minute?",
    "This might sound silly, but...",
    "Honestly...",
    "It's been a strange day.",
    "I don't know if I should say this, but...",
    "Their voice drops or slows.",
    "They pause and glance at your face before going on.",
    "They start repeating themselves to get your attention."
  ],
  "depthDial": [
    {
      "depth": "Lightest",
      "useWhen": "A busy or public setting; keep it low-key.",
      "phrase": "Go on, I'm listening."
    },
    {
      "depth": "Light",
      "useWhen": "Ordinary conversation turning real.",
      "phrase": "Hang on - tell me properly."
    },
    {
      "depth": "Warm",
      "useWhen": "They seem hesitant, or it clearly matters.",
      "phrase": "Let me put this down. I want to actually hear this."
    },
    {
      "depth": "Explicit",
      "useWhen": "Rebuilding trust after being distracted.",
      "phrase": "You've got my attention - say that again."
    },
    {
      "depth": "Too much",
      "useWhen": "Avoid: over-performed focus reads as pressure.",
      "phrase": "You have my complete and undivided attention."
    }
  ],
  "commonMistakes": [
    {
      "mistake": "Running the move on autopilot",
      "soundsLike": "\"You have my full attention.\" - said the same way every time",
      "better": "\"Go on, I'm with you.\" - dropped naturally, only when it matters"
    },
    {
      "mistake": "Making it too long",
      "soundsLike": "\"Let me just put this away, and close this, and I really want you to know I'm fully here and listening properly to you.\"",
      "better": "\"Hang on - let me put this down. Go on.\""
    },
    {
      "mistake": "Sounding clinical or superior",
      "soundsLike": "\"I'm giving you my active, undivided attention now.\"",
      "better": "\"I want to actually hear this.\""
    },
    {
      "mistake": "Ignoring the cues to stop",
      "soundsLike": "holding fixed eye contact while they shrink back",
      "better": "soften your face, angle away slightly, and make a small comment instead of another question"
    },
    {
      "mistake": "Steering toward your own agenda",
      "soundsLike": "\"I'm all ears - so, about that thing I need from you...\"",
      "better": "give the attention with nothing attached, and listen to where they take it"
    },
    {
      "mistake": "Claiming attention you're not giving",
      "soundsLike": "\"I'm listening,\" while still scanning your phone",
      "better": "put the phone down first - the behaviour is what makes the words true"
    }
  ],
  "recoveryPhrases": [
    "Sorry, I was distracted. Can you say that again properly?",
    "I missed the important bit - start from there again?",
    "That deserved better attention than I gave it.",
    "I looked like I was listening, but I was still thinking about something else. Let me reset.",
    "I don't want to pretend I caught that when I didn't.",
    "I think my attention got split. I'm back with you now.",
    "We can leave that if it's not the useful thread."
  ],
  "bestRecoveryLine": "I looked like I was listening, but I was still thinking about something else. Let me reset.",
  "chains": [
    {
      "label": "Rapport chain",
      "sequence": "Warm presence -> full-attention signal -> live-thread follow-up -> reflective listening -> specific appreciation",
      "example": [
        "\"Good to see you - come in.\"",
        "Phone away, turned toward them: \"Go on, I'm with you.\"",
        "\"You said it was a strange week - strange how?\"",
        "\"So it was less the workload and more the uncertainty.\"",
        "\"I appreciate you telling me the honest version.\""
      ]
    },
    {
      "label": "Conflict chain",
      "sequence": "Stop multitasking -> full-attention signal -> validate the concern -> summary check -> respond or repair",
      "example": [
        "\"Let me stop and actually hear this.\"",
        "\"You're right to raise it - I can see why that landed badly.\"",
        "\"So the issue is less the decision and more that you found out late.\"",
        "\"That's fair. Here's what I'll change.\""
      ]
    },
    {
      "label": "Influence chain",
      "sequence": "Full-attention signal -> ask before you tell -> listen for values -> values-based framing -> autonomy release",
      "example": [
        "Body toward them: \"Talk me through it - what matters most here?\"",
        "\"So reliability is the thing you can't compromise on.\"",
        "\"If we frame it around keeping it reliable, does that fit?\"",
        "\"But it's your call.\""
      ]
    },
    {
      "label": "Leadership chain",
      "sequence": "Full-attention signal -> concise summary -> clarify the decision point -> clean request -> follow-up loop",
      "example": [
        "\"Give me the headline - I'll close this and focus.\"",
        "\"So the blocker is sign-off from finance.\"",
        "\"The decision we need is go or hold, by Friday.\"",
        "\"Can you send me the one-page version by Thursday?\""
      ]
    }
  ],
  "relatedTechniques": [
    {
      "id": "TC010",
      "reason": "TC010 Warm Presence keeps a warm overall presence across a whole interaction; TC012 is the single, explicit move that shows someone they have your focus right now."
    },
    {
      "id": "TC024",
      "reason": "TC024 Warm Opening begins the exchange with warmth and ease; TC012 is what you do once it is underway and someone starts telling you something that matters."
    },
    {
      "id": "TC036",
      "reason": "TC036 Contextual Opener opens from shared context rather than a generic line; reach for it instead of TC012 when you are starting the conversation, not deepening it."
    },
    {
      "id": "TC033",
      "reason": "TC033 Minimal Encouragers keep someone talking with small \"mm, go on\" signals; TC012 is the bigger, one-off move of visibly clearing your attention. Use the encouragers to sustain, the signal to begin."
    },
    {
      "id": "TC004",
      "reason": "TC004 Reflective Listening is the next move once they are talking - reflecting the meaning back; TC012 buys the attentive state that makes the reflection land."
    }
  ]
};
