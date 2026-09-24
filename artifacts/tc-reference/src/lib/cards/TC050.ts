import type { CardData } from "../card-types";

export const TC050: CardData = {
  pdfUrl: "cards/TC050/TC050_TwoCard_Combined.pdf",
  resources: [
    { label: "Two-card (combined)", description: "Front and back study cards on one sheet — the designed visual card.", href: "cards/TC050/TC050_TwoCard_Combined.pdf", type: "pdf", group: "Visual Cards" },
    { label: "One-card summary", description: "The whole technique on a single designed card.", href: "cards/TC050/TC050_OneCard.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Quick card", description: "One-page glance card for fast recall.", href: "cards/TC050/TC050_Quick_Card.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Detailed guide", description: "The full written guide with every section.", href: "cards/TC050/TC050_Detailed_Guide.pdf", type: "pdf", group: "Written Guides" },
    { label: "Reference sheet", description: "Dense one-page reference of the key moves.", href: "cards/TC050/TC050_Reference.pdf", type: "pdf", group: "Written Guides" },
    { label: "Phrase bank (CSV)", description: "Every phrase, ready to import or drill.", href: "cards/TC050/TC050_Phrase_Bank.csv", type: "csv", group: "Practice Tools" },
    { label: "Anki flashcards", description: "Import into Anki for spaced-repetition practice.", href: "cards/TC050/TC050_Anki_Flashcards.csv", type: "csv", group: "Practice Tools" },
  ],
  "id": "TC050",
  "whyItWorks": "What? So what? Now what? is a reflective framework that sorts an experience or a point into three moves: what actually happened, what it means, and what you will do next. Keeping observation, meaning and action apart stops them blurring into a vague sense that \"something happened\", so reflection becomes usable. It works because it arrives in the order the mind needs — facts first, then significance, then the next step — which lowers the listener's cognitive load and makes the point easy to follow and easy to act on.",
  "whatItIsNot": [
    "It is not a script to recite mechanically, word for word.",
    "It is not a way to avoid listening, compress emotion into a template, or force the other person into your structure.",
    "It is not only for formal debriefs — the same three moves work in a two-line message.",
    "It is not the right move when someone needs to be heard before they can think; if the structure makes the conversation less humane, drop it and use a simpler one."
  ],
  "overview": {
    "coreFormula": [
      "What? -> So What? -> Now What?",
      "What? = what actually happened, plainly and without interpretation.",
      "So What? = why it matters, what it means, what changed.",
      "Now What? = the next small, concrete step.",
      "Minimum viable move: What happened? Why does it matter? What is the next small step?",
      "Field rule: use the structure to organise your thinking, then speak like a person."
    ],
    "minimumViableMove": "Silently sort what you want to say into what happened, why it matters, and the next step — then say those three things in plain language, without naming the framework.",
    "impact": "Medium",
    "difficulty": "Easy-Medium",
    "misuse": "It fails when you jump to \"Now What?\" before the meaning is understood, or when you announce the framework and force every sentence into it — so the structure starts to matter more than the person or the point.",
    "bestFor": [
      "Debriefs and after-action reviews",
      "Supervision and coaching conversations",
      "Learning reviews and reflective practice",
      "Journalling and thinking on paper",
      "Project retrospectives",
      "Turning a messy experience into a clear next step",
      "Making a meeting contribution concise and memorable"
    ]
  },
  "notFor": [
    "Someone is overwhelmed and needs to be heard first",
    "The moment calls for validation before analysis",
    "The person cannot safely act yet",
    "There is distress, shame, grief or anger in the room",
    "A power imbalance makes structure feel like control",
    "Physical safety or an immediate emergency takes priority"
  ],
  "phraseBank": [
    {
      "id": "framing-openers",
      "label": "Framing openers",
      "tag": "Quick openers",
      "tone": "Quick",
      "phrases": [
        "Here's what happened, here's why it matters, here's the next step.",
        "Quick version: what, so what, now what.",
        "Let me keep this to three things.",
        "So — what happened, then what it means, then what we do.",
        "I'll be brief: fact, meaning, next step.",
        "Give me thirty seconds to lay this out.",
        "Short version first, then we adjust."
      ]
    },
    {
      "id": "reflecting-together",
      "label": "Reflecting with someone",
      "tag": "Warm, unhurried",
      "tone": "Warm",
      "phrases": [
        "Want to talk it through? What happened, what it meant, what's next.",
        "Let's start with just what happened — no need to solve it yet.",
        "That sounds like a lot. Shall we work out what it means before the next step?",
        "Take your time on the \"so what\" — that's the part that matters.",
        "No rush on the \"now what\". We can sit with the meaning first.",
        "What stood out to you about it?",
        "What do you make of it, and what feels like the next move?"
      ]
    },
    {
      "id": "meetings-updates",
      "label": "Meetings and updates",
      "tag": "Work, concise",
      "tone": "Professional",
      "phrases": [
        "Here's the situation, here's why it's significant, here's what I'd propose.",
        "In short: what we saw, what it tells us, what we do next.",
        "The finding is X; the implication is Y; the recommendation is Z.",
        "Let me give you the headline, the meaning, then the ask.",
        "Three parts: what happened, the impact, the next step.",
        "I'll keep the background short and spend the time on what it means.",
        "Bottom line, then the reasoning, then the decision we need."
      ]
    },
    {
      "id": "next-step",
      "label": "Naming the next step",
      "tag": "The \"Now What?\" move",
      "tone": "Direct",
      "phrases": [
        "So the next small step is…",
        "Given all that, here's what I'd do first.",
        "What's the one thing that changes because of this?",
        "The meaning is clear — now what do we actually do?",
        "Let's turn that into a single next step.",
        "What would you like to happen next?",
        "One concrete action from this: …"
      ]
    },
    {
      "id": "checking-simplifying",
      "label": "Checking and simplifying",
      "tag": "Course-correct",
      "tone": "Repair",
      "phrases": [
        "Let me check whether that structure is useful, or if we should approach it another way.",
        "I can keep this short and then we can adjust it.",
        "The main point is X; the rest is only support.",
        "Tell me if I've jumped ahead — I want the meaning right before the next step.",
        "Which part landed, and which should we drop?",
        "Let me back up to what actually happened.",
        "Is this the right frame, or would something simpler help more?"
      ]
    },
    {
      "id": "feedback-hard",
      "label": "Feedback and hard conversations",
      "tag": "One step at a time",
      "tone": "High-stakes",
      "phrases": [
        "Here's what I noticed. Here's why it concerns me. Here's what I'd like to change.",
        "Can I lay out what happened, then what it means to me, then a way forward?",
        "One thing at a time — first the facts, then how it landed.",
        "I want to be clear, not to corner you: what happened, what it meant, what next.",
        "Before we fix anything, can we agree on what actually happened?",
        "Let's name the impact before we jump to solutions."
      ]
    },
    {
      "id": "written-text",
      "label": "Written and text",
      "tag": "Scannable, digital",
      "tone": "Quick",
      "phrases": [
        "What happened: … Why it matters: … Next step: …",
        "Three quick lines: fact, meaning, action.",
        "TL;DR up top, then the detail if you want it.",
        "Labelling this so it's easy to scan: What / So what / Now what.",
        "Short one: here's the what, the so-what, and the next step."
      ]
    }
  ],
  "decisionTree": [
    {
      "condition": "The listener needs speed",
      "action": "Use the shortest version — one line per step, or just the headline and the next step.",
      "phrase": "Quick version: what happened, why it matters, what's next."
    },
    {
      "condition": "The listener is emotional or needs support",
      "action": "Validate first and delay the framework until they feel heard.",
      "phrase": "Before we structure it — that sounds hard. Do you want to talk it through first?"
    },
    {
      "condition": "The listener needs a story or example",
      "action": "Switch to an example-led neighbour such as STAR or CARL.",
      "phrase": "Let me give you a concrete example of how it played out."
    },
    {
      "condition": "The listener needs to act",
      "action": "Move quickly to a single clean \"Now What?\" and stop there.",
      "phrase": "So the one next step is…"
    },
    {
      "condition": "The listener looks confused or resistant",
      "action": "Summarise and invite correction rather than pushing the structure harder.",
      "phrase": "Let me check I've got this right — tell me what I'm missing."
    }
  ],
  "ladder": [
    {
      "weak": "Uses What? So what? Now what? as a visible script and sounds rehearsed.",
      "better": "Uses the framework silently to organise a concise response.",
      "best": "Uses it flexibly, then checks whether the listener is clearer, more heard, or better able to respond."
    },
    {
      "weak": "Jumps straight to \"Now What?\" before the meaning is understood.",
      "better": "Slows down on \"So What?\" so the next step actually follows from the meaning.",
      "best": "Lets the meaning lead, so the next step feels obvious rather than imposed."
    },
    {
      "weak": "Announces the framework by name and narrates each step.",
      "better": "Keeps the labels in your head and speaks in plain sentences.",
      "best": "Sounds like a clear-thinking person, not someone running a template."
    }
  ],
  "scenarios": [
    {
      "situation": "Work meeting",
      "move": "Make your contribution concise and memorable — one line per step.",
      "phrase": "Here's what we found, here's why it matters, here's what I'd suggest we do."
    },
    {
      "situation": "Written update or email",
      "move": "Put each step in a short labelled paragraph or bullet so the reader can scan it.",
      "phrase": "What happened: … Why it matters: … Next step: …"
    },
    {
      "situation": "Giving feedback",
      "move": "Check what kind of feedback would help first, then use the structure lightly.",
      "phrase": "Can I share what I noticed, what I made of it, and one idea for next time?"
    },
    {
      "situation": "Difficult conversation",
      "move": "Use one sentence per step, then pause and let them respond.",
      "phrase": "Here's what happened. Here's why it lands for me. Can we talk about what's next?"
    },
    {
      "situation": "Debrief or retrospective",
      "move": "Walk the group through the three moves so reflection turns into an action.",
      "phrase": "Let's do what happened, then what it means, then what we change."
    },
    {
      "situation": "Personal journalling",
      "move": "Write the three headings and answer each honestly — it turns venting into a decision.",
      "phrase": "What happened / So what / Now what."
    }
  ],
  "calibration": {
    "working": [
      "The listener becomes clearer or more focused.",
      "They ask a more specific question.",
      "They summarise your point back accurately.",
      "They can name a next step themselves.",
      "The conversation speeds up rather than stalls.",
      "They look relieved to have it sorted into parts."
    ],
    "adjust": [
      "They look confused or their eyes glaze.",
      "They go quiet or withdraw.",
      "They challenge the framing.",
      "They seem to need the human context before the structure.",
      "You are still on \"What?\" while they are ready to act — or on \"Now What?\" before they follow.",
      "The structure starts to sound defensive, performative, salesy, or like a lecture — stop and simplify."
    ]
  },
  "drill": [
    {
      "day": "Day 1",
      "title": "Sort one experience",
      "task": "Take one thing that happened today and write it under three headings: What happened, So what, Now what. Keep each to a sentence."
    },
    {
      "day": "Day 2",
      "title": "Write a 60-second version",
      "task": "Turn a recent situation into a 60-second spoken response using What? So what? Now what?, said out loud."
    },
    {
      "day": "Day 3",
      "title": "Cut it by a third",
      "task": "Take yesterday's response and cut it by a third without losing the core point."
    },
    {
      "day": "Day 4",
      "title": "Drop the labels",
      "task": "Say the same response again in plain speech, without naming any of the three steps."
    },
    {
      "day": "Day 5",
      "title": "Slow the So What",
      "task": "Practise a case where you deliberately linger on \"So What?\" before offering any \"Now What?\"."
    },
    {
      "day": "Day 6",
      "title": "Use it live once",
      "task": "In a real meeting or conversation, run the structure silently and end with one clean next step."
    },
    {
      "day": "Day 7",
      "title": "Practise a recovery",
      "task": "Rehearse one recovery line for when the structure lands badly, then reflect: did clarity actually improve when you used it this week?"
    }
  ],
  "checklist": [
    "Did I use the framework to serve the listener, not to sound polished?",
    "Was the core point clear?",
    "Did I keep it concise?",
    "Did I let the meaning settle before jumping to the next step?",
    "Did I adapt when the listener needed something else?",
    "Did I preserve their autonomy and dignity?"
  ],
  "example": {
    "without": [
      "Colleague: \"The launch didn't go how we hoped.\"",
      "You: \"Right, so this is a What-So What-Now What situation. What happened? So what? Now what? Let's go step by step.\"",
      "Colleague: \"...okay?\"",
      "You: \"So — What: the launch underperformed. So What: our forecast was off. Now What: we replan.\"",
      "Why it is weak:",
      "announces the framework by name and makes it the subject",
      "forces every sentence into the template",
      "jumps to \"Now What?\" before the meaning is understood",
      "leaves the colleague feeling processed, not heard"
    ],
    "with": [
      "Colleague: \"The launch didn't go how we hoped.\"",
      "You: \"Yeah. What actually happened on the day?\"",
      "Colleague: \"Sign-ups were fine, but almost no one finished setup.\"",
      "You: \"So the interest was there — the drop-off was in setup. That's a different problem to the one we feared.\"",
      "Colleague: \"Exactly. It's not demand, it's onboarding.\"",
      "You: \"Then the next step is probably to fix the first-run experience before we spend anything else on ads?\"",
      "Colleague: \"Agreed. That's the one thing to change this week.\"",
      "Why this works:",
      "keeps the three moves in your head, not out loud",
      "spends the time on what it means before the next step",
      "lets the next step follow naturally from the meaning",
      "the colleague stays a partner in the thinking"
    ],
    "note": "Same framework in both. The difference is whether the listener feels clarity or choreography."
  },
  "influencePayoff": {
    "feeling": "\"That was clear — I know what happened, why it matters, and what to do.\"",
    "principle": "People follow a point more easily when it arrives in the order the mind needs it: facts, then meaning, then action.",
    "gains": [
      "Clarity — the listener sees the shape of the point.",
      "Lower cognitive load — they aren't holding facts and implications at once.",
      "Better sequencing — meaning arrives before the ask.",
      "Faster decisions — the next step is explicit.",
      "Credibility — you sound organised without sounding rehearsed.",
      "Respect — the influence comes from clarity, not pressure."
    ],
    "whyMostFail": [
      "They announce the framework and deliver it mechanically.",
      "They hijack the topic instead of following the other person's.",
      "They rush to \"Now What?\" before the meaning has landed.",
      "They keep structuring when the moment needed listening or repair."
    ]
  },
  "fieldTip": {
    "headline": "Scaffolding, not the conversation.",
    "body": "Use What? So what? Now what? to organise your own thinking, then take the scaffolding down before you speak. The other person should feel clarity, not choreography. The moment you name the framework out loud, it stops working.",
    "example": "Instead of \"Let me do a What-So What-Now What here,\" just say: \"Sign-ups were fine but setup wasn't — so the problem's onboarding, not demand. I'd fix the first run before spending more on ads.\"",
    "dont": "Don't jump to \"Now What?\" before the meaning is understood.",
    "do": "Do linger on \"So What?\" — it's the step that makes the next one obvious."
  },
  "method": [
    {
      "step": "1",
      "title": "Decide if it fits",
      "body": "Choose the framework only if it serves the moment. If the person needs to be heard, validated or kept safe first, don't reach for structure yet. The structure is for making thinking easier, not for skipping the human part."
    },
    {
      "step": "2",
      "title": "What? — get the facts clean",
      "body": "State what actually happened, plainly and without interpretation. No blame and no conclusions yet — just the observable. This keeps everyone on the same page before meaning is layered on.",
      "examples": [
        { "label": "Say", "text": "\"Sign-ups were fine, but almost no one finished setup.\"" }
      ]
    },
    {
      "step": "3",
      "title": "So What? — find the meaning",
      "body": "Say why it matters, what it means, what changed. This is the step people skip and the one that carries the value, so linger here before moving on.",
      "examples": [
        { "label": "Say", "text": "\"So it's not a demand problem, it's an onboarding one.\"" }
      ]
    },
    {
      "step": "4",
      "title": "Now What? — one small step",
      "body": "Name a single, concrete next step that follows from the meaning. Small and specific beats a grand plan, and it should feel like an obvious consequence rather than an imposed instruction.",
      "examples": [
        { "label": "Say", "text": "\"Next step: fix the first-run experience before we spend more on ads.\"" }
      ]
    },
    {
      "step": "5",
      "title": "Speak like a person, then check",
      "body": "Move through the three lightly and in plain language — never narrate the labels. Then watch: is the listener clearer, more engaged, more able to act? If they seem confused or resistant, summarise and invite correction rather than pushing the structure harder."
    }
  ],
  "liveThreadClues": [
    "\"I don't even know where to start.\"",
    "\"A lot happened and I can't make sense of it.\"",
    "\"So what does this actually mean for us?\"",
    "\"Okay, but what do we do now?\"",
    "\"Can you give me the short version?\"",
    "\"We keep going round in circles.\""
  ],
  "depthDial": [
    {
      "depth": "One step",
      "useWhen": "They only need direction",
      "phrase": "The next step is X."
    },
    {
      "depth": "Two steps",
      "useWhen": "The meaning isn't obvious yet",
      "phrase": "This means X, so the next step is Y."
    },
    {
      "depth": "Full three",
      "useWhen": "A messy experience needs sorting",
      "phrase": "Here's what happened, here's what it means, here's what's next."
    },
    {
      "depth": "Facilitated",
      "useWhen": "A group debrief or retrospective",
      "phrase": "Let's take each in turn: what, so what, now what."
    }
  ],
  "commonMistakes": [
    {
      "mistake": "Announcing the framework",
      "soundsLike": "\"Let me do a What-So What-Now What on this.\"",
      "better": "\"Here's what happened, and here's what I think it means.\""
    },
    {
      "mistake": "Jumping to \"Now What?\" too early",
      "soundsLike": "\"So the fix is obviously X.\"",
      "better": "\"Before the fix — what does this actually tell us?\""
    },
    {
      "mistake": "Over-structuring",
      "soundsLike": "forcing every sentence into a step even after they're clear",
      "better": "dropping the structure the moment the point has landed"
    },
    {
      "mistake": "Over-explaining",
      "soundsLike": "adding more background after the structure has done its job",
      "better": "stopping once the next step is clear"
    },
    {
      "mistake": "Using it when emotion needs space",
      "soundsLike": "\"Okay, so what happened, and what's the next step?\" said to someone upset",
      "better": "\"That sounds rough. Do you want to talk it through first?\""
    },
    {
      "mistake": "Never checking it worked",
      "soundsLike": "moving on without looking up",
      "better": "\"Does that land the way I meant it to?\""
    }
  ],
  "recoveryPhrases": [
    "I made that too structured — let me say it more simply.",
    "That may not be the useful frame here. Let me back up.",
    "I don't want the structure to override the actual issue.",
    "What part of that was useful, and what should we drop?",
    "Let me start again with just what happened.",
    "I jumped to the next step too fast — what does this mean to you first?",
    "Forget the framing — what do you actually need from this?"
  ],
  "bestRecoveryLine": "Let me say that more simply — what happened, and what do you make of it?",
  "chains": [
    {
      "label": "Confirm it landed",
      "sequence": "What? So what? Now what? -> Summary check (TC011)",
      "example": [
        "\"So: setup is the drop-off, not demand, and the fix is onboarding.\"",
        "\"Before we move — is that how you'd put it too?\""
      ]
    },
    {
      "label": "Turn it into an ask",
      "sequence": "What? So what? Now what? -> Clean request (TC013)",
      "example": [
        "\"...so onboarding is the problem to solve.\"",
        "\"Could you own the first-run redesign and share a draft by Friday?\""
      ]
    },
    {
      "label": "Give them room",
      "sequence": "What? So what? Now what? -> Autonomy release (TC021)",
      "example": [
        "\"That's how I read it, and what I'd suggest.\"",
        "\"But it's your call — you're closer to it than I am.\""
      ]
    },
    {
      "label": "Feelings first, then structure",
      "sequence": "Validate the concern (TC014) -> What? So what? Now what?",
      "example": [
        "\"I can see why that landed badly — that's fair.\"",
        "\"When you're ready, let's sort out what happened, what it means, and what we do next.\""
      ]
    }
  ],
  "relatedTechniques": [
    {
      "id": "TC049",
      "reason": "Both organise reflection. Use What? So what? Now what? for a quick three-move sort; use CARL (Context, Action, Result, Learning) when you need a fuller, example-led account of a whole episode."
    },
    {
      "id": "TC040",
      "reason": "Meaning reflection draws out what something meant to the other person. Use it when the \"So What?\" belongs to them; use this framework when you are organising and delivering a point of your own."
    },
    {
      "id": "TC048",
      "reason": "SCQA (Situation, Complication, Question, Answer) frames a pitch or written argument. Use What? So what? Now what? for reflective debriefs; use SCQA to set up a persuasive case."
    },
    {
      "id": "TC011",
      "reason": "Summary check confirms you both heard the same thing. Use this framework to structure the point; use Summary check to verify it landed."
    },
    {
      "id": "TC047",
      "reason": "STAR (Situation, Task, Action, Result) tells a concrete story of what you did. Reach for STAR when the listener needs an example; use this framework when they need the meaning and the next step."
    },
    {
      "id": "TC044",
      "reason": "BLUF (Bottom Line Up Front) leads with the conclusion. Use BLUF when they only need the answer fast; use What? So what? Now what? when the meaning and the next step both matter."
    }
  ]
};
