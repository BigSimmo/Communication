import type { CardData } from "../card-types";

export const TC036: CardData = {
  pdfUrl: "cards/TC036/TC036_TwoCard_Combined.pdf",
  resources: [
    { label: "Two-card (combined)", description: "Front and back study cards on one sheet — the designed visual card.", href: "cards/TC036/TC036_TwoCard_Combined.pdf", type: "pdf", group: "Visual Cards" },
    { label: "One-card summary", description: "The whole technique on a single designed card.", href: "cards/TC036/TC036_OneCard.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Quick card", description: "One-page glance card for fast recall.", href: "cards/TC036/TC036_Quick_Card.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Detailed guide", description: "The full written guide with every section.", href: "cards/TC036/TC036_Detailed_Guide.pdf", type: "pdf", group: "Written Guides" },
    { label: "Reference sheet", description: "Dense one-page reference of the key moves.", href: "cards/TC036/TC036_Reference.pdf", type: "pdf", group: "Written Guides" },
    { label: "Phrase bank (CSV)", description: "Every phrase, ready to import or drill.", href: "cards/TC036/TC036_Phrase_Bank.csv", type: "csv", group: "Practice Tools" },
    { label: "Anki flashcards", description: "Import into Anki for spaced-repetition practice.", href: "cards/TC036/TC036_Anki_Flashcards.csv", type: "csv", group: "Practice Tools" },
  ],
  "id": "TC036",
  "whyItWorks":
    "A contextual opener starts a conversation by naming one real shared context — the room, the queue, the task, the timing, a previous thread — and then making it easy for the other person to step in. It works because it begins with something already true for both of you, so nobody has to invent a starting point from nothing. Instead of an abrupt personal question or a memorised line, you orient to what is actually in front of you. That signals attention to the moment rather than a script, and it gives the other person a low-pressure way to respond, correct you, or move straight to the point.",
  "whatItIsNot": [
    "Not a canned icebreaker, a pickup line, or a forced joke.",
    "Not an intrusive personal question or a comment on appearance, identity or private behaviour.",
    "Not a status play, false familiarity, or a compliment used as bait.",
    "Not a generic networking script you could use unchanged anywhere.",
    "Not small talk for its own sake — it is a bridge into a real conversation, then it gets out of the way."
  ],
  "overview": {
    "coreFormula": [
      "Formula: notice shared context -> name it simply -> add an easy entry point -> pause -> follow the thread they choose.",
      "Social: \"Looks like we both ended up in the quieter corner. I am Sam.\"",
      "Meeting: \"The shared question today is whether we narrow the scope or move the date.\"",
      "Clinical: \"I have read the referral, but I would rather start with what feels most important from your side.\"",
      "Re-entry: \"Last time Friday was the pressure point. Is that still the right place to start?\"",
      "Digital: \"Context first: I am writing because the decision point has moved closer.\""
    ],
    "minimumViableMove":
      "Name the shared context in one ordinary line, then give the other person an easy way to enter: \"Looks like we are both waiting for the same session. I am Sam.\"",
    "impact": "Medium",
    "difficulty": "Easy-Medium",
    "misuse":
      "The move fails when the opener feels manufactured, too clever, too personal, or unrelated to the actual moment — or when you keep opening after the conversation is already open.",
    "bestFor": [
      "Meeting someone for the first time.",
      "A direct personal question would feel abrupt.",
      "You share a room, queue, event, task, deadline or mutual problem.",
      "The other person looks socially cautious or busy.",
      "Starting a meeting with focus rather than vague pleasantries.",
      "Opening a clinical-style, client or supervision conversation.",
      "Returning to a conversation after time has passed.",
      "Sending a cold message that needs to explain why it exists."
    ]
  },
  "notFor": [
    "The context is not actually shared.",
    "The situation calls for direct action rather than social entry.",
    "The person is clearly unavailable, distressed, time-pressured or needing privacy.",
    "The shared context is sensitive and you cannot name it respectfully.",
    "You already have an established conversation and another opener would feel redundant.",
    "You cannot follow up with genuine attention.",
    "Physical safety or an immediate emergency takes priority."
  ],
  "phraseBank": [
    {
      "id": "shared_setting",
      "label": "Shared setting / immediate context",
      "tag": "Short observational one-liners",
      "tone": "Quick",
      "phrases": [
        "Looks like we both picked the busy time.",
        "Seems like we are both waiting on the same thing.",
        "This is a quieter corner than the main room.",
        "That session pulled a lot of people in.",
        "We have landed in the same queue.",
        "The room has that pre-meeting energy."
      ]
    },
    {
      "id": "waiting_event_social",
      "label": "Waiting / event / social opener",
      "tag": "Social rapport at events and queues",
      "tone": "Warm",
      "phrases": [
        "Have you been to one of these before, or is this your first time too?",
        "What brought you to this session?",
        "Did you come for a particular talk, or just to see what was useful?",
        "That last speaker gave us a lot to think about.",
        "Looks like we have a few minutes before it starts.",
        "The schedule is packed. Which part are you here for?"
      ]
    },
    {
      "id": "task_meeting",
      "label": "Task / meeting opener",
      "tag": "Naming the shared work",
      "tone": "Professional",
      "phrases": [
        "Before we get into the detail, the main thing today is to align on the next step.",
        "I know we have limited time, so I will start with the context.",
        "This seems like the right moment to separate what is urgent from what is important.",
        "Before we solve it, can I quickly name what I think the situation is?",
        "It sounds like the handover is the shared pressure point.",
        "The context I am bringing in is that the deadline has moved closer."
      ]
    },
    {
      "id": "professional_clinical",
      "label": "Professional / client / clinical-style",
      "tag": "Orienting before questions",
      "tone": "Professional",
      "phrases": [
        "Before we start, I know there can be a lot of admin around this. I will keep the opening brief.",
        "I have read the referral, but I would rather hear what feels most important from your side.",
        "Before I ask questions, I want to orient to what today is meant to help with.",
        "Let us start with what made today feel worth booking.",
        "The paperwork gives one version. I want to understand the lived version.",
        "We can go at a practical pace. Where would it be easiest to start?"
      ]
    },
    {
      "id": "group_opener",
      "label": "Group opener",
      "tag": "Naming common ground before divergence",
      "tone": "Direct",
      "phrases": [
        "Before we go around the room, I want to name what we are here to decide.",
        "The shared context is that everyone is carrying part of the load.",
        "There are a few perspectives here, so I will first name the common ground.",
        "We are not trying to solve the whole system today. We are choosing the next useful move.",
        "Before we debate options, let us agree what situation we are responding to.",
        "I want to start with the shared aim rather than the loudest problem."
      ]
    },
    {
      "id": "time_transition",
      "label": "Time / transition opener",
      "tag": "Marking a shift or restart",
      "tone": "Direct",
      "phrases": [
        "Coming back after a break can be a bit clunky. Where did we leave it?",
        "Since we last spoke, one thing has changed.",
        "This is probably a good point to reset the frame.",
        "We have shifted from options to decisions.",
        "The timing matters here because the next step affects the rest of the week.",
        "This feels like a transition from exploring to choosing."
      ]
    },
    {
      "id": "re_entry",
      "label": "Re-entry / follow-up",
      "tag": "Reconnecting to the last thread",
      "tone": "Repair",
      "phrases": [
        "Last time we were mainly talking about capacity. Is that still the right starting point?",
        "I remember you were waiting on a decision. Did that land yet?",
        "Since our last conversation, what has moved and what has stayed stuck?",
        "I want to reconnect with the main thing rather than restart from scratch.",
        "The last thread was about whether this felt workable. Where is it now?",
        "The detail I remember is that Friday was the pressure point. Is that still true?"
      ]
    },
    {
      "id": "digital_text",
      "label": "Digital / text",
      "tag": "Context first in writing",
      "tone": "Quick",
      "phrases": [
        "Picking this up from your message about Friday.",
        "Context first: I am writing with the deadline in mind.",
        "Before the details, the shared issue seems to be timing.",
        "This might be easier if I separate the context from the ask.",
        "The reason I am messaging now is that the decision point has moved closer.",
        "Coming back to the part about scope..."
      ]
    }
  ],
  "decisionTree": [
    {
      "condition": "You are entering a new interaction",
      "action": "Name the shared situation before asking a personal or broad question.",
      "phrase": "Looks like we are both here for the same session. I am Sam."
    },
    {
      "condition": "The other person looks busy",
      "action": "Acknowledge the constraint and keep the ask small.",
      "phrase": "I can see you are between things — this is a two-minute question."
    },
    {
      "condition": "The meeting needs focus",
      "action": "Use a purpose opener rather than a social warm-up.",
      "phrase": "The shared question today is whether we narrow the scope or move the date."
    },
    {
      "condition": "You have prior context",
      "action": "Reference one remembered detail or the last thread before asking what has changed.",
      "phrase": "Last time Friday was the pressure point. Is that still true?"
    },
    {
      "condition": "The opening feels awkward",
      "action": "Recover by simplifying — name the real reason plainly.",
      "phrase": "Let me say that more plainly."
    },
    {
      "condition": "The conversation is already open",
      "action": "Stop opening. Move to listening, summary, or the next practical step.",
      "phrase": ""
    }
  ],
  "ladder": [
    {
      "weak": "So, what is your story?",
      "better": "What brought you here?",
      "best": "This session seems to have pulled in a mixed group. What brought you to this one?"
    },
    {
      "weak": "Tell me why you are here.",
      "better": "What brings you in today?",
      "best": "I have read the referral, but I would rather start with what feels most important from your side."
    },
    {
      "weak": "We need to talk.",
      "better": "Can we talk about what happened yesterday?",
      "best": "I want to pick up yesterday while it is still fresh, especially the point where the handover broke down."
    },
    {
      "weak": "Hi.",
      "better": "Hi, I am Alex.",
      "best": "Looks like we are both waiting for the same workshop. I am Alex."
    }
  ],
  "scenarios": [
    {
      "situation": "First meeting",
      "move": "Name the shared setting and make entry easy.",
      "phrase": "Looks like we are both waiting for the same session. I am Sam."
    },
    {
      "situation": "Clinic or client opening",
      "move": "Orient to the process before asking personal questions.",
      "phrase": "I have read the referral, but I would rather hear what feels most important from your side."
    },
    {
      "situation": "Hallway interruption",
      "move": "Name the immediate constraint.",
      "phrase": "I can see you are between things. This is a two-minute question about Friday."
    },
    {
      "situation": "Networking event",
      "move": "Use the event as the bridge.",
      "phrase": "That talk had a lot in it. What part did you come for?"
    },
    {
      "situation": "Re-entry after a gap",
      "move": "Reconnect to the last live thread.",
      "phrase": "Last time the pressure point was scope. Is that still the right starting place?"
    },
    {
      "situation": "Conflict repair",
      "move": "Name the shared event without prosecuting it.",
      "phrase": "I want to pick up yesterday, especially the point where the tone changed."
    }
  ],
  "calibration": {
    "working": [
      "The person answers without visible effort.",
      "They add more context voluntarily.",
      "They correct or extend your frame rather than resisting it.",
      "The conversation moves from awkwardness to a shared thread.",
      "The opener disappears and the topic becomes the focus.",
      "In meetings, people orient to the shared purpose faster.",
      "In clinical-style conversations, they start from what matters to them, not the paperwork."
    ],
    "adjust": [
      "They give a polite but flat answer — drop the frame and just ask plainly.",
      "They look for the hidden ask — name your real reason for opening.",
      "The line gets more attention than the conversation — simplify next time.",
      "They respond as if you are selling something — reduce the polish, add directness.",
      "They step back, close down or laugh awkwardly — you went too personal; step back.",
      "They correct your assumption sharply — the context was not shared or safe; acknowledge it.",
      "You realise the context you named was not actually shared — reset with the real one."
    ]
  },
  "drill": [
    {
      "day": "Day 1",
      "title": "Spot the context",
      "task": "For one day, silently notice a possible opener in each new interaction. Label each as setting, task, timing, constraint, event or prior thread — without using any of them yet."
    },
    {
      "day": "Day 2",
      "title": "List your abrupt starts",
      "task": "Write down five situations where you tend to start too abruptly, such as \"Can I ask you something?\", \"We need to talk\", or \"Tell me about yourself.\""
    },
    {
      "day": "Day 3",
      "title": "Name the shared context",
      "task": "For each of those five, write one true shared context — the setting, task, timing, constraint or previous thread you could name instead."
    },
    {
      "day": "Day 4",
      "title": "Turn context into openers",
      "task": "Turn each shared context into a single-sentence opener, then add one easy entry point so the other person can step in."
    },
    {
      "day": "Day 5",
      "title": "Cut the clever",
      "task": "Read each opener aloud and remove anything clever, too personal or overexplained until it sounds like plain orientation to the moment."
    },
    {
      "day": "Day 6",
      "title": "Use one for real",
      "task": "In a low-stakes interaction, use one contextual opener, then stop and follow whatever thread they give you rather than your planned line."
    },
    {
      "day": "Day 7",
      "title": "Three in a day",
      "task": "Use three contextual openers — one social, one professional, one written — and afterwards ask of each: did I make entry easier, or did I make them manage my opener?"
    }
  ],
  "checklist": [
    "Did I name a context that was actually shared?",
    "Was the observation safe to name?",
    "Did the opener sound ordinary rather than scripted?",
    "Did I give the other person an easy entry point?",
    "Did I stop after the door opened, and follow their thread instead of mine?",
    "Did I move to purpose when the situation needed directness rather than warm-up?"
  ],
  "example": {
    "without": [
      "A: \"So, what is your background?\"",
      "B: \"In what sense?\"",
      "A: \"Just generally.\"",
      "B: \"Oh. A few things, I guess.\"",
      "Why it is weak: the question demands a biography from nothing and ignores the shared moment.",
      "A (clinic): \"Tell me why you are here.\"",
      "B: \"I thought you would have the referral.\"",
      "Why it is weak: the referral becomes an interrogation prop rather than a starting point."
    ],
    "with": [
      "A: \"Looks like we are both early for the handover meeting. I am Priya, from the inpatient side.\"",
      "B: \"I am Sam, from community.\"",
      "A: \"Are you here for the capacity discussion as well? We are probably seeing the same pressure from different ends.\"",
      "Why this works: it names the shared setting and offers a name and role as an easy entry point.",
      "A (clinic): \"I have read the referral, but I do not want the paperwork to decide the opening. What feels most important for us to understand today?\"",
      "B: \"That I am not just stressed. I feel like I am running out of options.\"",
      "A: \"So the starting point is not only workload. It is feeling trapped.\"",
      "Why this works: it shows preparation without replacing their account, and lets them set the real starting point."
    ],
    "note":
      "The weak versions demand disclosure; the strong versions start from what is already true and give the other person an easy way in."
  },
  "influencePayoff": {
    "feeling": "\"They are paying attention to what is actually happening, not running a script on me.\"",
    "principle":
      "People engage more easily when the first move starts from shared reality rather than a demand for disclosure.",
    "gains": [
      "Reduces friction — they do not have to invent a starting point from nothing.",
      "Feels natural — the opener comes from the shared moment, not a memorised line.",
      "Signals situational awareness — you are oriented to what is actually happening.",
      "Protects autonomy — they can respond lightly, correct the frame, or move to the task.",
      "Improves first impressions — you sound grounded rather than needy or rehearsed.",
      "Builds common ground quickly — shared context is the smallest real common ground available.",
      "Makes cold messages clearer — naming the context reduces ambiguity around the ask."
    ],
    "whyMostFail": [
      "They manufacture a fake connection instead of naming something genuinely shared.",
      "The line gets too clever and draws attention to itself rather than opening the conversation.",
      "They go too personal too early, before there is permission.",
      "They keep opening after the conversation is already underway."
    ]
  },
  "fieldTip": {
    "headline": "The safest opener is often a boringly accurate one.",
    "body":
      "A contextual opener works because it begins with shared reality. When the room, task, timing or previous thread already gives you a bridge, you do not need a clever first line — you just name what is already true and let the other person decide how much conversation they want.",
    "example": "\"Looks like we are both waiting for the same session. I am Sam.\"",
    "dont": "Reach for a clever or personal line to seem socially smooth.",
    "do": "Name what is already true, make entry easy, then follow their lead."
  },
  "method": [
    {
      "step": "1",
      "title": "Notice the shared context",
      "body": "Find the smallest thing that is genuinely true for both of you right now — the setting, the task, the timing, a constraint, a shared event, or the last live thread. That is your bridge.",
      "examples": [
        { "label": "Setting", "text": "This room is quieter than the main hall." },
        { "label": "Task", "text": "The shared question is what happens next." },
        { "label": "Timing", "text": "Since we last spoke, one thing has changed." },
        { "label": "Constraint", "text": "I know you are between things, so this is a two-minute ask." },
        { "label": "Event", "text": "That talk gave us a lot to work with." },
        { "label": "Prior thread", "text": "Last time the pressure point was Friday." }
      ]
    },
    {
      "step": "2",
      "title": "Name it simply",
      "body": "Say it in one ordinary sentence. The best versions sound like plain orientation to the moment, not a line you rehearsed.",
      "examples": [
        { "label": "Over-clever", "text": "Fancy meeting a fellow refugee from the coffee queue." },
        { "label": "Plain and true", "text": "Looks like we both picked the busy time." }
      ]
    },
    {
      "step": "3",
      "title": "Add an easy entry point",
      "body": "Give them a low-effort way in: your name, a light question, or an explicit invitation to correct you. The point is to lower the cost of replying.",
      "examples": [
        { "label": "Introduce", "text": "...I am Sam." },
        { "label": "Light question", "text": "...Which part are you here for?" },
        { "label": "Invite correction", "text": "...Is that the right frame?" }
      ]
    },
    {
      "step": "4",
      "title": "Pause and let them choose",
      "body": "Stop once the door is open. Do not stack a second opener or rush straight into your agenda — the pause is what makes it feel low-pressure rather than a pitch."
    },
    {
      "step": "5",
      "title": "Follow the thread they give",
      "body": "Drop your planned line and follow whatever they respond with. If they offer a live detail, thread it; if they show emotion, label it; if they are ready for the task, go there.",
      "examples": [
        { "label": "Live detail", "text": "You mentioned community — how is capacity looking your end?" },
        { "label": "Straight to task", "text": "Good, let us start with the decision then." }
      ]
    }
  ],
  "liveThreadClues": [
    "A shared setting — the room, queue, venue or seating.",
    "A shared task or decision you are both here for.",
    "Timing — a transition, a gap, or something that has just changed.",
    "A constraint — limited time, competing demands, an interruption.",
    "A shared event — a talk, session or thing that just happened.",
    "A prior thread — the last live point from a previous conversation.",
    "A shared purpose — the outcome the group is orienting around."
  ],
  "commonMistakes": [
    {
      "mistake": "Fake context",
      "soundsLike": "\"We are basically in the same boat here...\" — when you are not.",
      "better": "Name only something genuinely shared: \"We are both waiting on the same session.\""
    },
    {
      "mistake": "Over-clever opener",
      "soundsLike": "A rehearsed line that draws attention to itself.",
      "better": "\"Looks like we both picked the busy time.\" — plain and true."
    },
    {
      "mistake": "Too personal too early",
      "soundsLike": "\"You look stressed — rough morning?\"",
      "better": "\"The room has that pre-meeting energy. I am Sam.\""
    },
    {
      "mistake": "Using context as bait",
      "soundsLike": "A friendly opener that is really a lead-in to a pitch.",
      "better": "Open for connection, then make any ask honestly and separately."
    },
    {
      "mistake": "No follow-through",
      "soundsLike": "You open well, then stop listening to the answer.",
      "better": "Pause and follow whatever thread they give you."
    },
    {
      "mistake": "Long preamble",
      "soundsLike": "Two minutes of orienting before the actual point.",
      "better": "One sentence of context, then the point."
    },
    {
      "mistake": "Re-opening repeatedly",
      "soundsLike": "\"Anyway, how are you finding it...\" mid-conversation.",
      "better": "Once it is open, switch to listening or the next step."
    }
  ],
  "recoveryPhrases": [
    "That came out more scripted than I meant. Let me say it plainly.",
    "I might have started in the wrong place. What is the useful starting point from your side?",
    "That was too broad. I am asking because of the deadline on Friday.",
    "That sounded more personal than I intended. Let me step back.",
    "Let me restart with the actual context.",
    "I should not assume that is the shared issue. What am I missing?",
    "I am not trying to put you on the spot. We can keep it practical.",
    "Let us reset. The context is that we have ten minutes and need one clear next step."
  ],
  "bestRecoveryLine": "That came out more scripted than I meant. Let me say it plainly.",
  "chains": [
    {
      "label": "First-contact social opener",
      "sequence": "Notice the shared setting -> name it lightly -> introduce yourself or ask a low-effort question -> pause -> follow their first thread.",
      "example": ["\"Looks like we are both waiting for the same workshop. I am Sam.\""]
    },
    {
      "label": "Focused meeting opener",
      "sequence": "Name the shared task -> state the decision or question -> invite correction -> move into the agenda.",
      "example": ["\"The shared question today is whether we narrow the scope or move the date. Is that the right frame?\""]
    },
    {
      "label": "Clinical-style opener",
      "sequence": "Acknowledge the referral -> do not let paperwork make the first move -> ask what matters most from their side -> listen for the live thread -> reflect.",
      "example": ["\"I have read the referral, but I would rather hear what feels most important from your side.\""]
    },
    {
      "label": "Re-entry after a gap",
      "sequence": "Recall the last live thread -> check whether it is still current -> ask what has changed -> follow the new information -> update the shared frame.",
      "example": ["\"Last time Friday was the pressure point. Is that still the right place to start?\""]
    }
  ],
  "relatedTechniques": [
    {
      "id": "TC039",
      "reason": "Both build common ground, but TC036 starts from the shared situation in front of you, while TC039 Common-Ground Discovery searches for shared identity, background or interests."
    },
    {
      "id": "TC024",
      "reason": "TC024 Warm Opening leads with warmth and ease; TC036 leads with the shared context of the moment. Use TC024 when the relationship, not the situation, is the natural bridge."
    },
    {
      "id": "TC003",
      "reason": "TC003 Comment-Before-Question softens a single question with a preceding comment; TC036 opens a whole interaction by naming the shared situation first."
    },
    {
      "id": "TC038",
      "reason": "TC036 gets the conversation started; once they respond with a live detail, switch to TC038 Conversation Threading to follow the thread they choose."
    },
    {
      "id": "TC032",
      "reason": "For re-entry, TC032 Name and Detail Memory supplies the remembered name or detail that makes a contextual opener land, such as \"Last time Friday was the pressure point.\""
    },
    {
      "id": "TC034",
      "reason": "When an opener gets a short answer, TC034 Two-Option Questions offers an easy two-option follow-up to lower the effort of replying."
    }
  ]
};
