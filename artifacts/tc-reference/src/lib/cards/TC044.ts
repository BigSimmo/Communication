import type { CardData } from "../card-types";

export const TC044: CardData = {
  pdfUrl: "cards/TC044/TC044_TwoCard_Combined.pdf",
  resources: [
    { label: "Two-card (combined)", description: "Front and back study cards on one sheet — the designed visual card.", href: "cards/TC044/TC044_TwoCard_Combined.pdf", type: "pdf", group: "Visual Cards" },
    { label: "One-card summary", description: "The whole technique on a single designed card.", href: "cards/TC044/TC044_OneCard.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Quick card", description: "One-page glance card for fast recall.", href: "cards/TC044/TC044_Quick_Card.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Detailed guide", description: "The full written guide with every section.", href: "cards/TC044/TC044_Detailed_Guide.pdf", type: "pdf", group: "Written Guides" },
    { label: "Reference sheet", description: "Dense one-page reference of the key moves.", href: "cards/TC044/TC044_Reference.pdf", type: "pdf", group: "Written Guides" },
    { label: "Phrase bank (CSV)", description: "Every phrase, ready to import or drill.", href: "cards/TC044/TC044_Phrase_Bank.csv", type: "csv", group: "Practice Tools" },
    { label: "Anki flashcards", description: "Import into Anki for spaced-repetition practice.", href: "cards/TC044/TC044_Anki_Flashcards.csv", type: "csv", group: "Practice Tools" },
  ],
  "id": "TC044",
  "whyItWorks": "BLUF — Bottom Line Up Front — means leading with the answer, recommendation or ask, then giving only the support that is actually needed. Its shape is Bottom line -> key reason -> implication -> optional detail. Putting the conclusion first reduces the listener's cognitive load, sequences the information so the most important part lands first, and lets a busy person understand, decide or act without wading through your reasoning to find the point. Its influence comes from clarity and respect, not from pressure.",
  "whatItIsNot": [
    "It is not a script to recite mechanically, one sentence per step.",
    "It is not a way to avoid listening, or to compress someone's emotion into a template.",
    "It is not a tool for forcing the other person into your structure.",
    "It is not bluntness for its own sake — skipping the context or empathy a moment needs is a misuse, not the technique.",
    "If the structure makes the conversation less humane, that is the signal to slow down and use a simpler move."
  ],
  "overview": {
    "coreFormula": [
      "Bottom line -> key reason -> implication -> optional detail",
      "Bottom line: I recommend X. The reason is Y. The next step is Z.",
      "The main point is X; the rest is only support.",
      "Use the structure to organise your thinking, then speak like a person."
    ],
    "minimumViableMove": "Say the answer, recommendation or ask in your first sentence, add one reason, then the next step: \"I recommend X. The reason is Y. The next step is Z.\"",
    "impact": "High",
    "difficulty": "Easy-Medium",
    "misuse": "It fails when you become abrupt — skipping the context or empathy the moment needed — or when you announce the framework and force every sentence into it until it sounds like a lecture rather than a person.",
    "bestFor": [
      "Briefings and status updates",
      "Emails people will only skim",
      "Handovers",
      "Making a recommendation",
      "Urgent decisions",
      "Time-poor or senior audiences",
      "Getting to the point in a long meeting"
    ]
  },
  "notFor": [
    "Grief, loss or bad news that needs care first",
    "An apology or conflict repair",
    "Moments where listening must come before your point",
    "Emotionally sensitive material, shame or distress",
    "A power imbalance where structure could feel like pressure",
    "High-stakes decisions that need the human context first"
  ],
  "phraseBank": [
    {
      "id": "quick_openers",
      "label": "Quick openers",
      "tag": "Bottom-line one-liners",
      "tone": "Quick",
      "phrases": [
        "Bottom line: we should go with X.",
        "Short version: yes, with one condition.",
        "Headline first — I recommend we ship on Friday.",
        "The answer is no, and here's the one reason.",
        "Quick one: I need a decision by three.",
        "In a sentence: option B is the safer bet.",
        "Short answer now, detail whenever you want it."
      ]
    },
    {
      "id": "professional",
      "label": "Meetings and briefings",
      "tag": "Work / recommendation",
      "tone": "Professional",
      "phrases": [
        "My recommendation is X. The main reason is Y. The next step would be Z.",
        "Bottom line up front: the launch is on track, with one risk to flag.",
        "Where we've landed: we go with the second supplier.",
        "Status in one line — green on scope, amber on timeline.",
        "The decision I'm asking for is whether to approve the budget.",
        "If you take one thing from this: we need to move the deadline.",
        "Here's the recommendation, then the reasoning behind it."
      ]
    },
    {
      "id": "the_ask",
      "label": "The ask",
      "tag": "Clear request / next step",
      "tone": "Direct",
      "phrases": [
        "What I need from you is a yes or no by Thursday.",
        "The ask is simple: sign off on the revised plan.",
        "Next step is yours — approve, or tell me what's missing.",
        "I recommend we stop the project. Here's why.",
        "One decision today: in or out.",
        "The main point is X; everything else is just support.",
        "Let me lead with the ask, then explain."
      ]
    },
    {
      "id": "written",
      "label": "Written and email",
      "tag": "Scannable messages",
      "tone": "Professional",
      "phrases": [
        "Approval needed by Friday to hold the launch date — detail below.",
        "Bottom line first, background at the bottom if you want it.",
        "Three lines: what I need, why, and by when.",
        "I've put the ask in the first sentence so you can scan the rest.",
        "Answer: yes. Reasoning follows for the record.",
        "One decision, one deadline, one paragraph of context."
      ]
    },
    {
      "id": "human",
      "label": "Brief but human",
      "tag": "Respecting their time",
      "tone": "Warm",
      "phrases": [
        "I'll keep this short out of respect for your time.",
        "Let me give you the headline first, then as much detail as you want.",
        "I know you're busy, so bottom line first.",
        "Here's the gist — stop me and I'll expand wherever's useful.",
        "I'll lead with what matters, and you can pull on any thread.",
        "Short version now, and I'm happy to go deeper whenever suits."
      ]
    },
    {
      "id": "check_and_soften",
      "label": "Checking the frame",
      "tag": "Softening the structure",
      "tone": "Repair",
      "phrases": [
        "Let me check that's a useful way to frame it — or should we come at it differently?",
        "I can keep this short, then we adjust together.",
        "Tell me if you'd rather I slow down and give the background first.",
        "If the headline-first approach isn't landing, say so and I'll switch.",
        "Happy to unpack any part that felt too compressed.",
        "That may not be the right frame — let me back up."
      ]
    },
    {
      "id": "high_stakes",
      "label": "Hard news, plainly",
      "tag": "Difficult conversations",
      "tone": "High-stakes",
      "phrases": [
        "One sentence, then I'll pause: the project isn't going ahead.",
        "I'll say the main thing plainly, then we can sit with it.",
        "Here's the decision, and I want to hear your reaction before I add anything.",
        "The hard part first — the answer is no. The reason matters, so let me explain.",
        "I'll be direct, because you deserve a straight answer.",
        "The role's being cut. I want to talk it through properly — take your time."
      ]
    }
  ],
  "decisionTree": [
    {
      "condition": "The listener needs speed",
      "action": "Use the shortest version — bottom line only.",
      "phrase": "In one line: yes, do it."
    },
    {
      "condition": "The listener needs support or is upset",
      "action": "Validate first and delay the framework.",
      "phrase": "Before anything else — how are you doing with this?"
    },
    {
      "condition": "The listener needs a story or example",
      "action": "Switch to an example-led neighbour such as STAR or CARL.",
      "phrase": "Let me give you a concrete example of when this went wrong."
    },
    {
      "condition": "The listener needs to act",
      "action": "End with one clean next step.",
      "phrase": "So the next step is yours: approve or flag it by Thursday."
    },
    {
      "condition": "The listener looks confused",
      "action": "Summarise and invite correction rather than pushing the structure harder.",
      "phrase": "Let me put that a simpler way — tell me where it's not landing."
    }
  ],
  "ladder": [
    {
      "weak": "Announces the framework — \"I'll BLUF this\" — and forces every sentence into it.",
      "better": "Uses BLUF silently to organise a concise response.",
      "best": "Uses BLUF flexibly, then checks whether the listener is clearer and better able to respond."
    },
    {
      "weak": "Buries the bottom line under two minutes of background.",
      "better": "Leads with the recommendation, then gives the reason.",
      "best": "Leads with the recommendation and reads whether more or less detail is wanted."
    },
    {
      "weak": "Cuts context so hard it sounds abrupt or cold.",
      "better": "Keeps it brief but adds one line of context.",
      "best": "Stays brief and human — clear without sounding clipped."
    }
  ],
  "scenarios": [
    {
      "situation": "Work meeting",
      "move": "Lead with your contribution, then support it, so it stays concise and memorable.",
      "phrase": "My take in one line: we should delay the launch. Here's the reason."
    },
    {
      "situation": "Email",
      "move": "Put the ask in the first sentence and the detail below, so it can be scanned.",
      "phrase": "Approval needed by Friday to hold the launch date — detail below."
    },
    {
      "situation": "Giving feedback",
      "move": "Check what kind of feedback is wanted before you structure it.",
      "phrase": "Want the headline, or the full walkthrough?"
    },
    {
      "situation": "Difficult conversation",
      "move": "One sentence per step, then pause and listen.",
      "phrase": "The role's being cut. I want to talk it through properly — take your time."
    },
    {
      "situation": "Urgent decision",
      "move": "Give the recommendation and the one deciding factor, nothing else.",
      "phrase": "Go with the backup supplier — ours can't hit the date."
    },
    {
      "situation": "Handover",
      "move": "State the current status, the open risk, and the single next action.",
      "phrase": "Status: on track. Risk: the API key expires Tuesday. Next: renew it."
    }
  ],
  "calibration": {
    "working": [
      "The listener becomes clearer and more focused.",
      "They ask a more specific, better-targeted question.",
      "They summarise your point back accurately.",
      "They can choose a next step straight away.",
      "The conversation gets shorter, not longer.",
      "They say \"got it\", \"makes sense\", or \"what do you need from me?\"",
      "They relax because they can see where you're going."
    ],
    "adjust": [
      "They look confused or go quiet.",
      "They challenge the framing rather than the content.",
      "They seem to need the human context before the structure.",
      "The structure starts to sound defensive, salesy or performative.",
      "It is beginning to feel like a lecture rather than a conversation.",
      "You are compressing something that deserved more room.",
      "Then: slow down, summarise, and invite correction instead of pushing harder.",
      "Or drop the structure and just listen."
    ]
  },
  "drill": [
    {
      "day": "Day 1",
      "title": "Spot the bottom line",
      "task": "Take three things you need to say this week and write the single bottom-line sentence for each — the answer, not the wind-up."
    },
    {
      "day": "Day 2",
      "title": "Build the full structure",
      "task": "For one of them, write out all four steps: bottom line, key reason, implication, optional detail."
    },
    {
      "day": "Day 3",
      "title": "Cut by a third",
      "task": "Take a 60-second version and cut it by a third without losing the core point. Notice what was only support."
    },
    {
      "day": "Day 4",
      "title": "Say it two ways",
      "task": "Say it aloud once as a bare structure, once as plain human speech. Keep the plainer one."
    },
    {
      "day": "Day 5",
      "title": "Lead with the answer",
      "task": "In one real email today, put the ask or answer in the very first sentence and move the background below it."
    },
    {
      "day": "Day 6",
      "title": "Use it live, then check",
      "task": "In one real conversation, lead with the bottom line and watch whether the person becomes clearer or more able to act."
    },
    {
      "day": "Day 7",
      "title": "Practise the recovery",
      "task": "Deliberately over-structure something, then practise a recovery line that brings it back to plain, human speech."
    }
  ],
  "checklist": [
    "Did I use BLUF to serve the listener, or to sound polished?",
    "Was the bottom line clear in the first sentence?",
    "Did I keep it concise without becoming abrupt?",
    "Did I adapt when the listener needed something else?",
    "Did I preserve the person's autonomy and dignity?",
    "Did the listener end up clearer, or just talked at?"
  ],
  "example": {
    "without": [
      "Manager: \"Where are we on the migration?\"",
      "You: \"So, back in March we scoped three options, then the vendor changed their pricing, the team had a couple of holidays, there was the security review...\"",
      "Manager: \"...and?\"",
      "You: \"Right — bottom line, key reason, implication, optional detail — the bottom line is it's delayed, the key reason is capacity, the implication is the date moves, the optional detail is...\"",
      "Why it is weak:",
      "makes the manager dig for the answer they actually asked for",
      "then names the framework out loud and sounds rehearsed",
      "forces every clause into the template",
      "loses the human tone entirely"
    ],
    "with": [
      "Manager: \"Where are we on the migration?\"",
      "You: \"Short version: it's slipping two weeks. The reason is we lost a developer to the security review. If that's a problem for the launch, we should talk options now.\"",
      "Manager: \"How firm is the two weeks?\"",
      "You: \"Firm if nothing else changes. I can walk you through the risks, or just flag them if something moves.\"",
      "Manager: \"Give me the short list.\"",
      "You: \"Three things could push it further...\"",
      "Why this works:",
      "leads with the bottom line the manager actually asked for",
      "one clear reason, not the whole history",
      "states the implication and offers a next step",
      "keeps the detail optional, so the manager controls the depth",
      "stays warm and plain — no framework announced"
    ],
    "note": "The advanced version organises the same facts with BLUF, but the manager never hears the scaffolding — only the clarity."
  },
  "influencePayoff": {
    "feeling": "\"I know exactly what they're asking of me and why — I can act on this.\"",
    "principle": "People engage more readily with a point when they can see, from the first sentence, where it is going.",
    "gains": [
      "Lower cognitive load for the listener",
      "Clearer sequencing of your point",
      "Faster, better-informed decisions",
      "Perceived clarity and competence",
      "Respect for the listener's time",
      "Less back-and-forth to find the point",
      "Trust that you won't waste their attention"
    ],
    "whyMostFail": [
      "They bury the bottom line under context, so the listener has to hunt for the ask.",
      "Or they over-correct into bluntness, dropping the context and empathy the moment needed.",
      "They announce the framework and force every sentence into it until it sounds rehearsed.",
      "They use it in emotional moments where listening or repair should come first."
    ]
  },
  "fieldTip": {
    "headline": "Scaffolding, not choreography.",
    "body": "Use BLUF to organise your thinking before you speak, then let the scaffolding disappear. The other person should feel clarity, not watch you climb through a framework.",
    "example": "Instead of \"Bottom line, key reason, implication...\", just say: \"Short version — we should delay, mainly because of capacity. Happy to explain.\"",
    "dont": "Announce the framework or force every sentence into it.",
    "do": "Lead with the answer, give one reason, and leave the detail optional."
  },
  "method": [
    {
      "step": "1",
      "title": "Decide if BLUF fits",
      "body": "Choose the framework only if it serves the moment. If emotion, listening or repair should come first, put those first and delay the structure. BLUF is for clarity, not for every conversation."
    },
    {
      "step": "2",
      "title": "Lead with the bottom line",
      "body": "Say the answer, recommendation or ask in your first sentence. Do not warm up to it.\nWeak: \"So there's a bit of context before I get to it...\"\nBetter: \"The answer is no. Here's the one reason.\""
    },
    {
      "step": "3",
      "title": "Give the key reason",
      "body": "Add the single most important reason — not the whole background.\nExample: \"...because we lost a developer to the security review.\"\nOne reason is usually enough for the listener to accept or question the point."
    },
    {
      "step": "4",
      "title": "State the implication or next step",
      "body": "Say what it means or what happens next, so the point is actionable.\nExamples:\n\"That means the date moves two weeks.\"\n\"So the next step is yours: approve or flag it by Thursday.\""
    },
    {
      "step": "5",
      "title": "Keep detail optional",
      "body": "Offer the rest as support, not as a lecture. Let the listener pull on it.\nExample: \"I can walk you through the risks, or just flag them if something moves.\"\nThis hands control of the depth to them."
    },
    {
      "step": "6",
      "title": "Watch and adjust",
      "body": "Check whether the listener is clearer, more engaged, or more able to act. If they seem confused or resistant, summarise and invite correction rather than pushing the structure harder.\n\"Does that give you what you need, or should I fill in a gap?\""
    }
  ],
  "liveThreadClues": [
    "\"So what do you recommend?\"",
    "\"Just give me the headline.\"",
    "\"We've only got a few minutes.\"",
    "\"What do you need from me?\"",
    "\"Can you get to the point?\"",
    "\"Bottom line?\""
  ],
  "depthDial": [
    {
      "depth": "Bottom line only",
      "useWhen": "very time-poor, or a text / DM",
      "phrase": "Recommend X."
    },
    {
      "depth": "Bottom line + reason",
      "useWhen": "a quick verbal update",
      "phrase": "I recommend X, because Y."
    },
    {
      "depth": "+ implication",
      "useWhen": "a decision is needed",
      "phrase": "I recommend X, because Y. That means Z."
    },
    {
      "depth": "+ optional detail",
      "useWhen": "they want the background",
      "phrase": "...and I'm happy to walk through the detail if it's useful."
    }
  ],
  "commonMistakes": [
    {
      "mistake": "Over-structuring — making the framework more important than the point.",
      "soundsLike": "\"Bottom line, key reason, implication, optional detail — so, bottom line...\"",
      "better": "\"Short version: we should delay. Main reason is capacity.\""
    },
    {
      "mistake": "Over-explaining once the structure has done its job.",
      "soundsLike": "\"...and just to give you the full background, going back to last quarter...\"",
      "better": "\"That's the recommendation. Happy to go deeper if it's useful.\""
    },
    {
      "mistake": "Warming up instead of leading with the answer.",
      "soundsLike": "\"So there's a bit of context before I get to it...\"",
      "better": "\"The answer is no. Here's the one reason.\""
    },
    {
      "mistake": "Cutting context so hard it feels abrupt or cold.",
      "soundsLike": "\"Rejected. Next.\"",
      "better": "\"It's a no this time, and I want to explain why so it's fair.\""
    },
    {
      "mistake": "Structuring when listening or repair should come first.",
      "soundsLike": "\"Bottom line: the redundancy is confirmed.\"",
      "better": "\"I've got some hard news, and I want to give you space with it first.\""
    },
    {
      "mistake": "Announcing the framework so it sounds rehearsed.",
      "soundsLike": "\"Let me BLUF this for you.\"",
      "better": "\"Let me keep this simple.\""
    },
    {
      "mistake": "Forgetting to check whether the listener is actually clearer.",
      "soundsLike": "moving on the moment you've finished talking",
      "better": "\"Does that give you what you need, or should I fill in a gap?\""
    }
  ],
  "recoveryPhrases": [
    "I made that too structured — let me say it more simply.",
    "That may not be the useful frame. Let me back up.",
    "I don't want the structure to override the actual issue.",
    "What part of that was useful, and what should we drop?",
    "Sorry, that came out more clipped than I meant.",
    "Let me give you the context I skipped.",
    "I jumped to the bottom line — do you want the reasoning behind it?"
  ],
  "bestRecoveryLine": "I made that too structured — let me say it more simply.",
  "chains": [
    {
      "label": "Clarity chain",
      "sequence": "BLUF -> Summary Check",
      "example": [
        "\"Bottom line: I recommend we pause the rollout, mainly because of the security gap.\"",
        "\"Before I go on — is that the read you were expecting, or does it surprise you?\""
      ]
    },
    {
      "label": "Action chain",
      "sequence": "BLUF -> Clean Request",
      "example": [
        "\"The headline is we're two weeks behind.\"",
        "\"So the ask is: can you free up one developer until the 20th?\""
      ]
    },
    {
      "label": "Respect chain",
      "sequence": "BLUF -> Autonomy Release",
      "example": [
        "\"My recommendation is option B, because it's lower risk.\"",
        "\"But it's your call — you're closer to the client than I am.\""
      ]
    },
    {
      "label": "Emotion-first chain",
      "sequence": "Validation -> BLUF",
      "example": [
        "\"I can see this deadline is stressing everyone, and that's fair.\"",
        "\"So here's where I've landed: we drop the third feature and ship the rest on time.\""
      ]
    }
  ],
  "relatedTechniques": [
    {
      "id": "TC042",
      "reason": "PREP (Point, Reason, Example, Point) also leads with the conclusion, but loops back to restate it and leans on an example. Reach for BLUF when speed and the bare answer matter most; reach for PREP when a memorable example and a closing restatement will land better."
    },
    {
      "id": "TC048",
      "reason": "SCQA (Situation, Complication, Question, Answer) builds shared context before the answer. Use BLUF when the listener already has the context and just wants the point; use SCQA when you first need to frame why the point matters."
    },
    {
      "id": "TC013",
      "reason": "A Clean Request is a single, specific ask. Use BLUF to structure a whole recommendation or briefing; drop to a Clean Request when all you need is one clear action."
    },
    {
      "id": "TC011",
      "reason": "A Summary Check confirms you and the listener heard the same thing. Use BLUF to deliver the point, then follow with a Summary Check to make sure it actually landed."
    },
    {
      "id": "TC047",
      "reason": "STAR (Situation, Task, Action, Result) tells a structured story. Use BLUF when the listener needs the answer fast; switch to STAR when they need the narrative of how something happened."
    },
    {
      "id": "TC049",
      "reason": "CARL (Context, Action, Result, Learning) is a reflective story structure. Use BLUF for a live decision or ask; use CARL when the value is in walking through what happened and what was learned."
    }
  ]
};
