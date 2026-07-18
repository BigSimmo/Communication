import type { CardData } from "../card-types";

export const TC041: CardData = {
  pdfUrl: "cards/TC041/TC041_TwoCard_Combined.pdf",
  resources: [
    { label: "Two-card (combined)", description: "Front and back study cards on one sheet — the designed visual card.", href: "cards/TC041/TC041_TwoCard_Combined.pdf", type: "pdf", group: "Visual Cards" },
    { label: "One-card summary", description: "The whole technique on a single designed card.", href: "cards/TC041/TC041_OneCard.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Quick card", description: "One-page glance card for fast recall.", href: "cards/TC041/TC041_Quick_Card.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Detailed guide", description: "The full written guide with every section.", href: "cards/TC041/TC041_Detailed_Guide.pdf", type: "pdf", group: "Written Guides" },
    { label: "Reference sheet", description: "Dense one-page reference of the key moves.", href: "cards/TC041/TC041_Reference.pdf", type: "pdf", group: "Written Guides" },
    { label: "Phrase bank (CSV)", description: "Every phrase, ready to import or drill.", href: "cards/TC041/TC041_Phrase_Bank.csv", type: "csv", group: "Practice Tools" },
    { label: "Anki flashcards", description: "Import into Anki for spaced-repetition practice.", href: "cards/TC041/TC041_Anki_Flashcards.csv", type: "csv", group: "Practice Tools" },
  ],
  "id": "TC041",
  "whyItWorks":
    "Topic Energy Tracking means noticing where another person's conversational energy rises, drops, or shifts, then following the more alive thread with one light, low-pressure move. You listen not only to what they say but to how they respond as different topics appear — extra detail, a faster answer, specific examples, questions back, a warmer tone, humour, or returning to the same topic without being pushed. It works because you are not trying to make a topic interesting; you are following what is already more alive for them, so the conversation feels relevant, less forced, and easier to continue.",
  "whatItIsNot": [
    "It is not mind-reading, vibe-policing, or interrogation.",
    "It is not repeatedly saying \"you lit up\" or telling someone what they feel.",
    "It is not steering the conversation toward what benefits you while pretending to follow them.",
    "It is not ignoring a direct answer because you think another topic has more energy — direct answers and boundaries beat your read every time."
  ],
  "overview": {
    "coreFormula": [
      "Notice the shift → ask one low-pressure follow-up → watch for confirmation → follow or release.",
      "You seemed a bit more interested when you mentioned that — want to go there for a second?",
      "That part seems most relevant. Should we focus there?",
      "You had more to say about that part — want to stay with it, or go another direction?",
      "We don't have to stay on that. What part is actually worth focusing on?"
    ],
    "minimumViableMove":
      "Notice which topic draws more detail, warmth, or speed, then offer one light follow-up with an easy way out: \"You had more to say about that part — want to stay with it, or go another direction?\"",
    "impact": "Low",
    "difficulty": "Hard",
    "misuse":
      "It fails when you use it to steer someone toward the topic you want, narrate their energy out loud until they feel watched, or chase a topic that only has energy because it is risky. Treat energy as a clue, not proof — and if your read is not welcomed, drop it.",
    "bestFor": [
      "First conversations and warm openings",
      "Networking without interrogating",
      "Dating and friendship conversations",
      "Mentoring and one-to-ones",
      "Team meetings with several competing threads",
      "Interviews and discovery conversations",
      "Family catch-ups and any chat with multiple possible threads"
    ]
  },
  "notFor": [
    "There is a real power imbalance and the person may feel evaluated",
    "Someone is in distress or under time pressure",
    "You need specific information and they are giving short necessary answers",
    "The setting is clinically or professionally sensitive",
    "A topic has energy only because it is risky, not because it should be explored",
    "You are tempted to use it to sell, seduce, extract, or manoeuvre",
    "They have given a direct answer or boundary — that beats your read"
  ],
  "phraseBank": [
    {
      "id": "ultra-light",
      "label": "Ultra-light",
      "tag": "One-line tests",
      "tone": "Quick",
      "phrases": [
        "More in that?",
        "Stay there or move on?",
        "What's the interesting bit?",
        "Want to go there for a second?",
        "Say more about that part?",
        "That one seems to have more in it.",
        "Worth staying with?"
      ]
    },
    {
      "id": "social",
      "label": "Social & rapport",
      "tag": "Warm follow-ups",
      "tone": "Warm",
      "phrases": [
        "You gave more detail there — what makes that part interesting?",
        "That bit seemed to have more life in it. Want to stay there?",
        "That sounds like the part you actually enjoy — what's good about it?",
        "You had more to say about that. I'd genuinely like to hear it.",
        "There was more energy around that one. What draws you to it?",
        "That seems like the thread worth following. Tell me more?",
        "You seemed a bit more interested when you mentioned that — want to go there for a second?"
      ]
    },
    {
      "id": "professional",
      "label": "Work & meetings",
      "tag": "Focus and relevance",
      "tone": "Professional",
      "phrases": [
        "That part seems most relevant. Should we focus there?",
        "You had more specifics around that. Is that the main thread?",
        "That's where the detail is. Want to build on it?",
        "Sounds like the live issue is that one. Shall we start there?",
        "You went into more depth on that. Is that the priority?",
        "That seems like the thread with the most in it. Should we dig in?",
        "Happy to go wherever's useful — that looks like the stronger thread."
      ]
    },
    {
      "id": "choice",
      "label": "Choice & direction",
      "tag": "Two-option questions",
      "tone": "Direct",
      "phrases": [
        "Is that the useful thread, or is there somewhere better to go?",
        "Want to focus on this or that — or something else?",
        "Stay with this, or would another angle be more useful?",
        "Is that the main thread, or a side one?",
        "Should we go deeper on that, or move on?",
        "What's actually worth focusing on here?",
        "Where would you rather take this?"
      ]
    },
    {
      "id": "conflict-safe",
      "label": "Sensitive & conflict-safe",
      "tag": "Tentative and correctable",
      "tone": "High-stakes",
      "phrases": [
        "I may be reading this wrong, but that seems to matter more than the rest.",
        "We do not have to stay on that. What part is actually worth focusing on?",
        "We do not have to solve everything. What's worth focusing on first?",
        "Tell me if I've got the wrong end of this.",
        "No pressure either way — just checking where the real thread is.",
        "That might not be the point at all. What is, for you?",
        "I don't want to push it if that's not where you want to go."
      ]
    },
    {
      "id": "recovery",
      "label": "Recovery & release",
      "tag": "Repair a missed read",
      "tone": "Repair",
      "phrases": [
        "I may be reading that wrong.",
        "No need to go there if that's not the thread.",
        "We can leave that.",
        "I don't want to over-focus on it.",
        "What direction would you rather take this?",
        "What part of this is actually useful to talk about?",
        "Fair enough — let's move on."
      ]
    },
    {
      "id": "digital",
      "label": "Digital / text",
      "tag": "Message-length",
      "tone": "Quick",
      "phrases": [
        "That point sounds like the live one. Want to unpack it?",
        "That seems to be the stronger thread — happy to go there.",
        "Sounds like there's more in that part. Say more?",
        "Want to focus on the first thing or the second?",
        "That one reads like the interesting bit. Up to you though.",
        "I'll follow whichever's more useful — that one, maybe?",
        "No rush — which part's worth getting into?"
      ]
    }
  ],
  "decisionTree": [
    {
      "condition": "Energy rises on a topic",
      "action": "Ask one small follow-up and watch whether they add more.",
      "phrase": "You had more to say about that — want to stay with it?"
    },
    {
      "condition": "Energy drops",
      "action": "Reduce pressure; offer a pivot or ask what's more useful to focus on.",
      "phrase": "We don't have to stay on that. What's actually worth focusing on?"
    },
    {
      "condition": "Energy shifts to a new topic",
      "action": "Follow the new thread; don't drag your old question back.",
      "phrase": "That seems like the livelier bit now — shall we go there?"
    },
    {
      "condition": "You're unsure which thread has energy",
      "action": "Ask a choice-based question instead of guessing.",
      "phrase": "Is that the useful thread, or is there somewhere better to go?"
    },
    {
      "condition": "The topic is sensitive",
      "action": "Don't name the energy; use choice and permission instead.",
      "phrase": "No pressure — where would you rather take this?"
    },
    {
      "condition": "Your read missed",
      "action": "Release and hand control back.",
      "phrase": "I may be reading that wrong. What part's actually useful to talk about?"
    }
  ],
  "ladder": [
    {
      "weak": "\"You lit up when you said that.\" Naming a hidden feeling can sound intrusive or performative, especially if repeated.",
      "better": "\"You had more to say about that part.\" This anchors the read in observable detail, not their inner state.",
      "best": "\"You had more to say about that part — want to stay with it, or go another direction?\" Observation, invitation, and an easy exit."
    },
    {
      "weak": "\"What team? Why? What happened?\" A stack of questions aimed at whichever detail you noticed first.",
      "better": "One follow-up about the topic that actually gained detail.",
      "best": "One follow-up about the livelier topic, with room to decline: \"…or we can leave it there.\""
    },
    {
      "weak": "Keep pulling them back to the topic you find interesting.",
      "better": "Notice they answered briefly and stop pushing.",
      "best": "Offer the choice openly: \"Stay with this, or is there somewhere more useful to go?\""
    }
  ],
  "scenarios": [
    {
      "situation": "Networking",
      "move": "They mention several projects — follow the one they describe with more specificity and examples.",
      "phrase": "You went into more detail on the second one — is that the project you're most into?"
    },
    {
      "situation": "Team meeting",
      "move": "Discussion is broad — listen for the issue that creates detail and forward motion, then propose focus.",
      "phrase": "The rollout point seems to have the most in it. Should we start there?"
    },
    {
      "situation": "Mentoring",
      "move": "A mentee lists problems — follow the one with ownership and examples, not the loudest complaint.",
      "phrase": "You had the most to say about the client work. Want to dig into that one?"
    },
    {
      "situation": "Social conversation",
      "move": "They briefly brighten around a hobby or place — test it lightly and leave room to decline.",
      "phrase": "That trip sounds like the good bit — want to tell me about it, or move on?"
    },
    {
      "situation": "Digital message",
      "move": "The message has several topics — reflect the likely live thread and offer a small choice.",
      "phrase": "Sounds like the new role is the big thing — want to focus on that, or the move first?"
    },
    {
      "situation": "Sensitive topic",
      "move": "A topic has energy but might be risky — use choice and permission, don't name the energy.",
      "phrase": "We don't have to get into that. Where would you rather take it?"
    }
  ],
  "calibration": {
    "working": [
      "They add more detail than the question asked for.",
      "They answer with less effort, more freely.",
      "They smile or relax naturally.",
      "They offer specific examples.",
      "They ask you a question back.",
      "They return to the topic without being pushed."
    ],
    "adjust": [
      "They pause longer or give minimal answers.",
      "They look away or soften into politeness.",
      "They answer the question but add nothing new.",
      "They change the topic themselves.",
      "They give two short answers in a row after your follow-up.",
      "They seem watched or evaluated — release and hand control back."
    ]
  },
  "drill": [
    {
      "day": "Day 1",
      "title": "Spot the energy",
      "task": "Watch a short interview or podcast. Every 60 seconds, note which topic drew more detail, warmth, speed, or examples."
    },
    {
      "day": "Day 2",
      "title": "Name the cue",
      "task": "Recall three conversations from today and write down the exact observable cue that told you energy rose or dropped — not what you assumed they felt."
    },
    {
      "day": "Day 3",
      "title": "Rewrite the question",
      "task": "Take five interrogative questions and rewrite each as one observation plus one low-pressure invitation with an escape hatch."
    },
    {
      "day": "Day 4",
      "title": "One silent use",
      "task": "In a real conversation, track energy silently: choose your next question based on the livelier topic without naming your read."
    },
    {
      "day": "Day 5",
      "title": "One light test",
      "task": "Use one named observation-plus-invitation, once. The goal isn't to impress — notice whether that single light follow-up increases ease."
    },
    {
      "day": "Day 6",
      "title": "Practise the release",
      "task": "Deliberately let a low-energy thread go. The moment a topic flattens, say a pivot line aloud and move on without pushing."
    },
    {
      "day": "Day 7",
      "title": "Recovery reps",
      "task": "Rehearse aloud: \"I may be reading that wrong,\" \"We can leave that,\" \"What direction would you rather take this?\" Then use one in a live conversation."
    }
  ],
  "checklist": [
    "Did I read energy from observable cues, not assumption?",
    "Did I use one light follow-up rather than a chain of questions?",
    "Did I leave an easy way to decline or redirect?",
    "Did I avoid probing anything sensitive the person didn't lead into?",
    "Did the person add more after my move — or did I keep pushing anyway?",
    "Did I release when the energy didn't increase?"
  ],
  "example": {
    "without": [
      "A: \"I changed teams recently.\"",
      "B: \"What team? Why? What happened? Did you hate the old one?\"",
      "Why it's weak:",
      "fires a stack of questions at the first detail",
      "reads like an interrogation, not interest",
      "ignores which part actually had energy",
      "gives them no room to choose the thread"
    ],
    "with": [
      "A: \"I changed teams recently.\"",
      "B: \"That sounds like a sizeable shift. You gave more detail about the new team — is that the interesting part?\"",
      "A: \"The new group is more experimental, which is weird but good.\"",
      "B: \"More experimental seems to be the lively bit. What's good about it so far?\"",
      "A: \"I get to test ideas faster.\"",
      "B: \"That's the thread, then — faster testing changes the whole feel of the work.\"",
      "Why this works:",
      "follows the topic that gained energy, not the first detail",
      "names the observation lightly, then invites",
      "leaves an easy way to redirect",
      "reflects the live thread instead of over-labelling it"
    ],
    "note":
      "The advanced version follows energy without narrating it — one observation, one invitation, then it simply tracks them."
  },
  "influencePayoff": {
    "feeling":
      "\"They followed the part I actually cared about, instead of grilling me about something I only mentioned in passing.\"",
    "principle":
      "People experience you as responsive rather than scripted, and trust grows through relevance, not effort. You are noticing what is already more alive for them.",
    "gains": [
      "Trust through responsiveness",
      "Conversations that feel relevant, not forced",
      "Fewer dead-end follow-ups",
      "Less risk of interrogating a passing mention",
      "Warmth without flattery",
      "A natural sense of where to take the conversation next"
    ],
    "whyMostFail": [
      "They hijack the topic toward their own agenda while pretending to follow.",
      "They narrate the person's energy out loud until it feels like being watched.",
      "They treat one small cue as proof and over-commit to it.",
      "They keep steering a topic the person has already answered briefly and left."
    ]
  },
  "fieldTip": {
    "headline": "Follow energy, not your agenda.",
    "body":
      "If the person gives more life to a topic, offer one step. If they don't take it, release. That single discipline keeps the technique respectful and stops it turning into a steering tactic. The best use often sounds completely ordinary — and one light test is enough.",
    "example": "\"That part seems more useful — want to focus there?\"",
    "dont": "Narrate their energy (\"you lit up\") or pull them back to the topic you prefer.",
    "do": "Make one light observation, one invitation, then watch and follow their lead."
  },
  "method": [
    {
      "step": "1",
      "title": "Listen for the topic",
      "body": "Notice the moment a new topic appears in what they say. You are not judging it yet — you are just marking that a possible thread has opened."
    },
    {
      "step": "2",
      "title": "Watch the response",
      "body": "Watch how they answer, not just what they answer. The contrast between topics is the signal, not any single word.",
      "examples": [
        { "label": "Rises", "text": "More detail, a quicker answer, specific examples, humour, a warmer tone, or a question back." },
        { "label": "Drops", "text": "A longer pause, a minimal answer, a polite but flat reply, or a sudden flattening." }
      ]
    },
    {
      "step": "3",
      "title": "Choose one light move",
      "body": "Pick the smallest next step. If energy rises, stay with the topic for one step. If it drops, release the pressure or offer a pivot. If it shifts elsewhere, follow the new thread instead of dragging the old one back."
    },
    {
      "step": "4",
      "title": "Name it lightly, or stay silent",
      "body": "You can name the shift gently, or simply ask a better follow-up without announcing your read. Many of the strongest uses are silent.",
      "examples": [
        { "label": "Named", "text": "\"You had more to say about that part — want to stay with it?\"" },
        { "label": "Silent", "text": "Just ask the better follow-up about the livelier topic, no commentary." }
      ]
    },
    {
      "step": "5",
      "title": "Watch for confirmation, then follow or release",
      "body": "After your move, check whether ease increases — do they add more, or answer briefly and stop? Confirmation matters more than your read. Follow if they take it; release if they don't."
    }
  ],
  "liveThreadClues": [
    "They give more detail than the question asked for",
    "They answer faster, with less effort",
    "They offer specific examples",
    "They ask you a question back",
    "Their tone warms or they laugh",
    "They return to the topic without being pushed",
    "Or the opposite: a sudden flattening, a shorter answer, a longer pause"
  ],
  "depthDial": [
    {
      "depth": "Silent",
      "useWhen": "Sensitive contexts, or early rapport",
      "phrase": "Just ask a better follow-up about the livelier topic."
    },
    {
      "depth": "Light touch",
      "useWhen": "Casual conversation",
      "phrase": "\"That bit seemed to have more life in it. Want to stay there?\""
    },
    {
      "depth": "Named observation",
      "useWhen": "Enough rapport to be direct",
      "phrase": "\"You had more to say about that part.\""
    },
    {
      "depth": "Explicit choice",
      "useWhen": "Several threads, or you are unsure",
      "phrase": "\"Is that the useful thread, or is there somewhere better to go?\""
    }
  ],
  "commonMistakes": [
    {
      "mistake": "Over-reading the cue",
      "soundsLike": "Treating one small sign as proof — but nerves, politeness, or fatigue can look the same.",
      "better": "Hold it as a clue, not a verdict: \"That might be the thread — or not. What do you reckon?\""
    },
    {
      "mistake": "Over-naming the energy",
      "soundsLike": "\"You lit up again there.\" Repeated narration feels like being watched.",
      "better": "Name it once, lightly, or not at all — just ask the better follow-up."
    },
    {
      "mistake": "Over-steering",
      "soundsLike": "Pulling them back to the topic you want after they've moved on.",
      "better": "If they redirect or answer briefly, release it and follow them."
    },
    {
      "mistake": "Ignoring context",
      "soundsLike": "Chasing a topic that has energy because it's risky, not because it's welcome.",
      "better": "Check whether the energy is interest or discomfort before you go further."
    },
    {
      "mistake": "Turning it into an interrogation",
      "soundsLike": "\"Where? Who? Why? How?\"",
      "better": "One observation, one low-pressure question, then watch."
    },
    {
      "mistake": "Missing the direct answer",
      "soundsLike": "Skipping what they actually said because another topic seems livelier.",
      "better": "Answer the direct point first; the energy read comes second."
    }
  ],
  "recoveryPhrases": [
    "I may be reading that wrong.",
    "No need to go there if that's not the thread.",
    "We can leave that.",
    "I don't want to over-focus on it.",
    "What direction would you rather take this?",
    "What part of this is actually useful to talk about?",
    "That came out more pointed than I meant — no pressure."
  ],
  "bestRecoveryLine":
    "I may be reading that wrong — what part of this is actually useful to talk about?",
  "chains": [
    {
      "label": "Comment, then track",
      "sequence": "TC003 → TC041",
      "example": [
        "TC003 Comment-Before-Question softens the ask.",
        "TC041 then picks the question based on the topic with more energy.",
        "\"That sounds like a big shift — and you had more to say about the new team. What's good about it?\""
      ]
    },
    {
      "label": "Track, then follow the thread",
      "sequence": "TC041 → TC001",
      "example": [
        "TC041 notices which thread is live.",
        "TC001 Live Thread Follow-Ups follows it with a natural next move.",
        "\"Faster testing seems to be the live bit — what does that let you do now?\""
      ]
    },
    {
      "label": "Track, then echo and ask",
      "sequence": "TC041 → TC030",
      "example": [
        "TC041 identifies the higher-energy topic.",
        "TC030 Echo Plus Question echoes a short phrase, then asks one question.",
        "\"'Weird but good' — what's the good part?\""
      ]
    },
    {
      "label": "Track, then offer options",
      "sequence": "TC041 → TC034",
      "example": [
        "TC041 spots several possible threads.",
        "TC034 Two-Option Questions offers a choice plus an escape hatch.",
        "\"Sounds like it's either the people or the pace — or something else entirely?\""
      ]
    }
  ],
  "relatedTechniques": [
    {
      "id": "TC001",
      "reason": "Live Thread Follow-Ups follows what the person just offered. TC041 decides which offered thread to follow by watching live energy."
    },
    {
      "id": "TC023",
      "reason": "Loaded Word Follow-Up follows one charged word. TC041 follows broader topic-energy shifts, including plain interest, relevance, or momentum."
    },
    {
      "id": "TC025",
      "reason": "Exact Word Pickup reuses their exact wording. TC041 may quote a word, but the target is energy, not lexical precision."
    },
    {
      "id": "TC030",
      "reason": "Echo Plus Question echoes then asks one forward question. TC041 selects which topic to use that form on."
    },
    {
      "id": "TC038",
      "reason": "Conversation Threading reopens or links earlier threads. TC041 detects which thread currently has energy."
    },
    {
      "id": "TC040",
      "reason": "Meaning Reflection reflects significance. TC041 decides whether a meaning thread has enough live energy to deepen."
    }
  ]
};
