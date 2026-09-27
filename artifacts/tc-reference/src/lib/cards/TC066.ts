import type { CardData } from "../card-types";

export const TC066: CardData = {
  pdfUrl: "cards/TC066/TC066_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC066/TC066_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC066/TC066_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC066/TC066_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC066/TC066_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC066/TC066_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC066/TC066_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC066/TC066_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC066",
  whyItWorks:
    "BIFF stands for Brief, Informative, Friendly, Firm. It is a response structure for messages where the emotional heat is higher than the useful information: hostile emails, baiting texts, sprawling complaints, inaccurate claims. Instead of matching the tone or correcting every point, you answer only what actually needs a reply: a short, fact-focused, civil message that closes with a clear next step. It works because it changes what your reply invites next. A BIFF response is harder to attack, easier to understand, and easier for any third party to trust, and it removes the handles the other person could grab to keep the conflict going.",
  whatItIsNot: [
    "It is not a way to dodge accountability when you actually caused harm.",
    "It is not a substitute for empathy when someone needs real care rather than containment.",
    "It is not a licence to be cold, clipped, or patronising: friendly still has to mean friendly.",
    "It is not winning an argument through strategic blandness, and it is not stonewalling someone you owe a real answer.",
    "It is not a legal, HR, medical, or safety protocol, and it does not mean ignoring threats, harassment, or abuse.",
  ],
  overview: {
    coreFormula: [
      "Civil opener + relevant fact + clear next step or limit.",
      "Brief: one short paragraph. Informative: facts, not counter-claims. Friendly: civil language, no contempt. Firm: a clear end, boundary, or action.",
      "Thanks for the update. The report was sent at 4:15 pm yesterday. I'll resend it now, and use email for any further changes.",
      "I understand this is frustrating. The meeting is Thursday at 10 am. I'll discuss the agenda in the meeting, not by text.",
      "I hear that you disagree. My decision remains the same. I'm available to discuss implementation steps, not personal accusations.",
    ],
    minimumViableMove:
      "Write three sentences: one civil opening, one factual answer, one firm next step.",
    impact: "Medium",
    difficulty: "Medium",
    misuse:
      "The main failure mode is over-explaining or counterattacking while believing you are simply 'correcting the record', or using BIFF's brevity to stonewall an answer, apology, or repair you actually owe.",
    bestFor: [
      "Hostile emails, texts, and chat messages",
      "Inaccurate claims that need one factual correction",
      "Logistics inside a tense or high-conflict relationship",
      "Workplace misunderstandings where a calm written record matters",
      "Customer or stakeholder complaints that mix facts with accusations",
      "Co-parenting, committee, neighbourhood, or admin threads",
      "Public or semi-public comments where your tone will be judged",
      "Repeated bait, where longer explanation has already failed",
    ],
  },
  notFor: [
    "Immediate safety action is needed",
    "The person is asking for comfort, not attacking you",
    "You owe a fuller apology, repair, or explanation",
    "The problem needs a live conversation, not written compression",
    "The other party needs informed consent or detailed context",
    "The issue is complex enough that a short reply would mislead",
    "You are reaching for brevity in order to stonewall",
    "The matter should be escalated to a manager, mediator, lawyer, HR, or safety contact",
  ],
  phraseBank: [
    {
      id: "civil-openers",
      label: "Civil openers",
      tag: "Short opening acknowledgements",
      tone: "Quick",
      phrases: [
        "Thanks for sending this.",
        "Thanks for the update.",
        "I've read your message.",
        "I understand this is important to you.",
        "I can see this has been frustrating.",
        "I hear that you disagree.",
      ],
    },
    {
      id: "informative-facts",
      label: "Informative facts",
      tag: "State the record cleanly",
      tone: "Professional",
      phrases: [
        "The meeting is scheduled for 3 pm on Thursday.",
        "The document was sent to the shared folder yesterday at 4:15 pm.",
        "The decision was based on the criteria in the policy.",
        "The current deadline is Friday at 5 pm.",
        "The next step is to send the revised version by Tuesday.",
        "I'm available for the logistics, not for a debate about motives.",
      ],
    },
    {
      id: "friendly-bridges",
      label: "Friendly bridges",
      tag: "Civil without over-pleasing",
      tone: "Warm",
      phrases: [
        "I appreciate you checking.",
        "I hope this clarifies the practical next step.",
        "Thanks for keeping the logistics moving.",
        "I want this to stay workable for both of us.",
        "I'm glad to keep communication clear.",
      ],
    },
    {
      id: "firm-closes",
      label: "Firm closes",
      tag: "A clear end or boundary",
      tone: "Direct",
      phrases: [
        "I'll not discuss personal accusations by email.",
        "I'll respond to new information, not repeated allegations.",
        "Please send any practical changes by Friday.",
        "This is my final reply on this point unless something new comes up.",
        "I'll continue through the agreed channel.",
        "If the tone stays personal, I'll pause and return to logistics only.",
      ],
    },
    {
      id: "workplace-replies",
      label: "Workplace & customer replies",
      tag: "Work, meeting, client, ticket",
      tone: "Professional",
      phrases: [
        "Thanks for raising this. The agreed scope is the March report and the client deck. I'll send both by 2 pm. Further scope changes go through the project lead.",
        "I understand you're unhappy with the decision. The approval process was completed on Monday. I'm available to discuss implementation steps.",
        "Thanks for flagging the review issue. The current draft was submitted yesterday and is still open for corrections. Please add specific edits in the document by 4 pm.",
        "I understand the delay is frustrating. Your replacement order is scheduled for dispatch tomorrow, and the tracking link will arrive by 6 pm. I'll update this ticket when dispatch is confirmed.",
        "I can confirm the invoice covers May only. Please send any questions about June as a separate item by Friday.",
      ],
    },
    {
      id: "social-family-replies",
      label: "Social & family replies",
      tag: "De-escalating a personal thread",
      tone: "Repair",
      phrases: [
        "I hear that you're upset. I can help with the appointment on Friday at 10 am. I'm not available for blame by text.",
        "Thanks for letting me know. I'll bring the forms at pickup. I'm not going to discuss blame by text.",
        "I understand this is stressful. I can take Dad to the Friday appointment at 10 am, and discuss anything broader when we're both calmer.",
        "I hear that you're upset. The plan is 5 pm at Mum's. I'm not going to revisit insults from the text thread.",
      ],
    },
    {
      id: "digital-public-replies",
      label: "Digital & public replies",
      tag: "Comments and semi-public threads",
      tone: "Warm",
      phrases: [
        "Thanks for commenting. The event starts at 6 pm and registration is free. For individual issues, please contact the organiser by email.",
        "I understand the concern. The post has been updated with the correct date. I'll leave further moderation to the page admins.",
        "Thanks for checking. The event starts at 6 pm on Friday at the main hall, matching the registration page.",
        "Thanks for flagging it. The details have been corrected. Anything further can go to the organiser directly.",
      ],
    },
    {
      id: "high-pressure-bait",
      label: "High-pressure & repeated bait",
      tag: "Guarded, under fire, or looping",
      tone: "High-stakes",
      phrases: [
        "I've read your message. I'll respond to the factual issue after reviewing the file. I'll not respond to personal claims.",
        "The urgent point is noted. The current decision stands until we receive new evidence. Please send that evidence in one email by noon.",
        "I've answered the practical issue. The booking remains for Tuesday at 2 pm. I'll respond again if there's new scheduling information.",
        "The file was sent to the shared folder yesterday at 4:15 pm. I have resent the link below. Future document updates will stay in the shared folder.",
        "I'll keep this thread focused on delivery details and won't respond to personal character comments.",
      ],
    },
  ],
  method: [
    {
      step: "1",
      title: "Pause before replying",
      body: "Notice the hook: insult, exaggeration, accusation, sarcasm, false urgency, a bait question, or a demand for a long defence. High-conflict messages are built to create urgency, so the pause is where BIFF actually starts.",
    },
    {
      step: "2",
      title: "Find the one reply-worthy issue",
      body: "Ask: what practical question, decision, correction, or next step actually needs an answer? In most heated messages the majority of sentences are bait, interpretation, or emotional discharge. Everything except the practical point can stay unanswered.",
    },
    {
      step: "3",
      title: "Delete the courtroom speech",
      body: "Cut motive defence, counterattack, history, sarcasm, diagnosis, and point-by-point rebuttal. If your reply proves your character or diagnoses theirs, it is no longer BIFF.",
    },
    {
      step: "4",
      title: "Write the fact",
      body: "State it with specifics: dates, times, decisions, commitments, observable behaviour, or the actual next step. Facts are what make the reply hard to attack.",
      examples: [
        { label: "Instead of", text: '"I always do my job properly."' },
        {
          label: "Write",
          text: '"The file was sent to the shared folder yesterday at 4:15 pm."',
        },
      ],
    },
    {
      step: "5",
      title: "Add one civil line",
      body: 'Use a single human line: "Thanks for sending this," "I understand this is frustrating," "I appreciate the update." One is enough. Do not over-warm a hostile exchange.',
    },
    {
      step: "6",
      title: "Close firmly",
      body: "Name the boundary, next action, decision, or response limit so the message ends the loop instead of inviting another round. Firm means clear, not harsh.",
      examples: [
        {
          label: "Next step",
          text: '"The next step is to send the form by Friday."',
        },
        {
          label: "Boundary",
          text: '"I\'m not available to discuss this by text."',
        },
      ],
    },
  ],
  liveThreadClues: [
    "An insult or name-calling aimed at you",
    'Sweeping words like "always" and "never"',
    'Sarcasm or rhetorical questions ("do you even read anything?")',
    'False urgency: "fix this today or I\'ll escalate"',
    "A demand that you defend your character or motives",
    "An accusation you feel an instant pull to rebut point by point",
  ],
  depthDial: [
    {
      depth: "Soft touch",
      useWhen:
        "the relationship is basically fine and just needs a light nudge back to logistics",
      phrase: "I'd rather keep this to the scheduling details for now.",
    },
    {
      depth: "Standard firm",
      useWhen: "most hostile or baiting threads",
      phrase:
        "I'll keep this thread focused on logistics and won't respond to personal accusations.",
    },
    {
      depth: "Hard close",
      useWhen: "the same bait keeps coming after you have already answered",
      phrase:
        "I've answered the practical point. I'll respond again only when there's new information.",
    },
    {
      depth: "Pause and hold",
      useWhen: "the tone is too heated to reply well right now",
      phrase: "I'll review this and reply tomorrow.",
    },
    {
      depth: "Stop and escalate",
      useWhen: "threats, harassment, or safety, legal, or HR issues appear",
      phrase: "I'll follow this up through the appropriate channel.",
    },
  ],
  decisionTree: [
    {
      condition: "The message did not actually require a reply.",
      action:
        "Do not reply, or archive and monitor. Silence is a legitimate BIFF move.",
      phrase: "",
    },
    {
      condition: "There is immediate safety, legal, HR, or abuse risk.",
      action:
        "Preserve the record and use the proper escalation pathway. Use BIFF only for the minimum necessary contact.",
      phrase: "I'll follow this up through the appropriate channel.",
    },
    {
      condition: "The person wants care, not a fight.",
      action:
        "Switch to validation, reflective listening, or NVC / OFNR instead of containment.",
      phrase: "That sounds really hard. Tell me what would actually help.",
    },
    {
      condition:
        "The message carries bait, accusation, hostility, or false claims.",
      action:
        "BIFF fits. Pick the one reply-worthy issue (a fact, decision, deadline, boundary, or next step) and answer only that.",
      phrase: "The revised deadline is Friday at 5 pm.",
    },
    {
      condition: "It is a neutral request, not an attack.",
      action:
        "Use the technique that fits the task instead: BLUF, a clean request, SBI, or Ask-tell-ask.",
      phrase: "",
    },
    {
      condition:
        "Your draft runs long, defends your motives, or ends with no next step.",
      action: "Cut it back to civil opener + fact + firm close before sending.",
      phrase: "Thanks for the update. [Fact.] [Next step.]",
    },
  ],
  ladder: [
    {
      weak: "That's unfair. I did read your notes, and you keep changing them. The project isn't a mess. You're exaggerating.",
      better:
        "I read your notes. The current version includes the budget changes and timeline update. I'll review the risk section next.",
      best: "Thanks for flagging the notes. The current version includes the budget and timeline changes. I'll review the risk section by 3 pm and keep comments in the document thread so changes stay traceable.",
    },
    {
      weak: "That's ridiculous and you know it. I helped all last month. You only remember what supports your story.",
      better:
        "I understand you're upset. I can help with the appointment on Friday. I'm not available for insults by text.",
      best: "I understand this is stressful. I can take Dad to the Friday appointment at 10 am. I'll stay on logistics by text and discuss anything broader when we're both calmer.",
    },
    {
      weak: "Matches the heat and opens three new argument threads.",
      better: "States the relevant facts and drops the insult.",
      best: "Brief, informative, friendly, and firm: one civil line, one fact, one clear next step.",
    },
  ],
  example: {
    without: [
      'Incoming: "This is completely unprofessional. You people never keep your promises. Fix this today or I\'ll escalate."',
      "You: \"That's not fair. We've been working hard, and the delay is because your team sent the assets late.\"",
      'You: "If you\'re going to escalate, make sure you include the whole history."',
      "Why it's weak:",
      "matches the heat and gets defensive",
      "opens a blame debate about whose fault the delay is",
      "hands the other person new things to argue with",
      "leaves no clear next step",
    ],
    with: [
      'Incoming: "This is completely unprofessional. You people never keep your promises. Fix this today or I\'ll escalate."',
      'You: "I understand the delay is frustrating."',
      'You: "The revised delivery date is Thursday at 4 pm, pending the final product image from your team."',
      "You: \"Please send that image by noon tomorrow. If it doesn't arrive, I'll export with the current draft image and mark it for later replacement.\"",
      "Why this works:",
      "acknowledges the feeling in one civil line, without conceding fault",
      "states the single fact that matters: the new date",
      "gives a concrete next step and consequence without threat language",
      "stays brief, informative, friendly, and firm",
    ],
    note: "For a firmer boundary, swap the last line for: \"I'll keep this thread focused on delivery details and won't respond to personal character comments.\"",
  },
  calibration: {
    working: [
      "The thread gets shorter and stops branching into new accusations.",
      "The other person moves to the practical point instead of the personal one.",
      "Their next reply gives you no fresh argument handle to grab.",
      "A neutral reader would see your message as steady and fair.",
      "You feel less pulled to prove your character.",
      "The exchange stays on the logistics you named.",
    ],
    adjust: [
      "Your reply reads cold, smug, or robotic: add one civil line.",
      "The other person is genuinely confused, not hostile: explain more fully.",
      "The issue needs a fuller answer than three sentences allow.",
      "You are omitting an apology or repair you actually owe.",
      "Your boundary is vague. Make the next step explicit.",
      "The message could be read as dismissive: soften the opener.",
      "Threats, harassment, or legal, HR, or safety issues appear: stop and escalate instead of replying.",
    ],
  },
  commonMistakes: [
    {
      mistake: "Correcting every accusation",
      soundsLike: "a point-by-point rebuttal of all six claims",
      better:
        "answer only the factual point that matters now, and let the rest stand unaddressed",
    },
    {
      mistake: "Sounding icy instead of civil",
      soundsLike: '"Noted."',
      better:
        '"Thanks for flagging this: the current version is in the shared folder."',
    },
    {
      mistake: "Smuggling in a counterattack",
      soundsLike: '"As you should know, as I already explained..."',
      better:
        '"The current version includes the budget changes. I\'ll review the risk section next."',
    },
    {
      mistake: "Over-apologising to calm them down",
      soundsLike:
        "\"I'm so sorry, this is all my fault\" for something that wasn't",
      better:
        "accurate accountability only. Apologise for what you actually did, and nothing more",
    },
    {
      mistake: "Ending without a firm next step",
      soundsLike: "a brief, friendly note that simply stops",
      better:
        '"Please send the revised figures by Friday so I can update the deck."',
    },
    {
      mistake: "Making firmness sound punitive",
      soundsLike: '"I\'ll not be responding to you again."',
      better: "\"I'll respond again when there's new information.\"",
    },
    {
      mistake: "Replying too quickly",
      soundsLike: "a heated answer sent within a minute of the bait",
      better: "draft the hot version privately, wait, then send the clean one",
    },
  ],
  scenarios: [
    {
      situation: "Hostile workplace email",
      move: "Acknowledge the flag, state the current status, and route edits to a traceable channel.",
      phrase:
        "Thanks for flagging the review issue. The current draft was submitted yesterday and is still open for corrections. Please add specific edits in the document by 4 pm.",
    },
    {
      situation: "Co-parenting logistics",
      move: "Confirm the practical arrangement and name the channel boundary.",
      phrase:
        "I understand scheduling is important. Pickup is confirmed for 5 pm at the school entrance. I'll keep this thread focused on logistics.",
    },
    {
      situation: "Customer escalation",
      move: "Acknowledge the frustration, give the concrete next action and time, and promise an update.",
      phrase:
        "I understand the delay is frustrating. Your replacement order is scheduled for dispatch tomorrow, and the tracking link will arrive by 6 pm. I'll update this ticket when dispatch is confirmed.",
    },
    {
      situation: "Public criticism",
      move: "Correct the fact once, in the open, without defending your character.",
      phrase:
        "Thanks for checking. The event starts at 6 pm on Friday at the main hall. The post has been updated to match the registration page.",
    },
    {
      situation: "Family accusation",
      move: "Acknowledge the feeling briefly, offer the concrete help, and decline the blame.",
      phrase:
        "I hear that you're upset. I can help with the appointment on Friday at 10 am. I'm not available for blame by text.",
    },
    {
      situation: "Repeated bait or a demand to apologise",
      move: "State that the practical issue is answered and set a condition for replying again.",
      phrase:
        "I've answered the practical issue. The booking remains for Tuesday at 2 pm. I'll respond again if there's new scheduling information.",
    },
  ],
  recoveryPhrases: [
    "I added more detail than was needed. The practical point is ___, and I'll keep this thread focused there.",
    "Let me restate that more calmly: ___.",
    "My aim is clarity, not criticism. The agreed action is ___.",
    "I'm going to step back from the personal claims and return to the practical issue: ___.",
    "I'll not debate motives by message. The next logistical step is ___.",
    "I've answered the practical point. I'll respond again when there's new information.",
    "I'll review this and reply tomorrow.",
    "I'm not going to respond while the tone is heated. I'll come back to the logistics later.",
  ],
  bestRecoveryLine:
    "I'm going to step back from the personal claims and return to the practical issue: the next step is ___.",
  chains: [
    {
      label: "BIFF + Strategic pause",
      sequence: "Draft the heated version privately, then rewrite it as BIFF.",
      example: [
        "Write everything you want to say. Unsent.",
        "Cut it down to civil opener + fact + firm close.",
        "Send only the second version.",
      ],
    },
    {
      label: "BIFF + BLUF",
      sequence: "Lead with the bottom line inside the BIFF reply.",
      example: [
        '"Decision: the deadline remains Friday."',
        '"The file is in the shared folder."',
        '"I\'ll respond to implementation questions only."',
      ],
    },
    {
      label: "BIFF + Clean request",
      sequence: "End the reply with one clear, single request.",
      example: [
        '"The revised timeline is below."',
        '"Please send the updated figures by noon."',
        '"I\'ll circulate the final version once they arrive."',
      ],
    },
    {
      label: "BIFF + Validate the concern",
      sequence: "Acknowledge a legitimate feeling, then contain the thread.",
      example: [
        '"I understand the delay is frustrating."',
        '"The revised delivery date is Thursday at 4 pm."',
        '"I\'ll keep this thread to delivery details."',
      ],
    },
  ],
  drill: [
    {
      day: "Day 1",
      title: "Spot the hook",
      task: "Take three hostile or baiting messages you have received. For each, underline the single sentence that actually needs a reply and cross out the accusations, sarcasm, and history.",
    },
    {
      day: "Day 2",
      title: "Heat-strip rewrite",
      task: "Pick one of those messages. Sort every sentence into fact-to-answer, accusation-to-ignore, feeling-to-acknowledge, or practical request. Draft a reply using only the fact, a brief acknowledgement, and a next step.",
    },
    {
      day: "Day 3",
      title: "Three-sentence limit",
      task: "Write BIFF replies to five different messages, each in exactly three sentences: civil opener, relevant fact, firm next step. Keep every reply under 90 words.",
    },
    {
      day: "Day 4",
      title: "Remove the hooks",
      task: "Write your honest first reply to a heated message, then delete character defence, blame history, sarcasm, repeated explanation, and any guess about their motives. Compare what remains to the original.",
    },
    {
      day: "Day 5",
      title: "Firmness calibration",
      task: "Take one boundary and write it three ways: too soft, too harsh, and clear-and-civil. Note the exact words that create weakness or aggression, and keep the clear version.",
    },
    {
      day: "Day 6",
      title: "Observer test",
      task: "Reread this week's replies as if a manager, mediator, judge, client, or family member will see them. Revise each until it reads steady, factual, and fair.",
    },
    {
      day: "Day 7",
      title: "Live use",
      task: "In a real tense thread, pause before replying, send one genuine BIFF response, and afterwards note whether it reduced sprawl and prevented a new argument.",
    },
  ],
  checklist: [
    "Did I wait long enough that heat is not leaking into the message?",
    "Have I named the single reply-worthy issue and answered only that?",
    "Are these facts, not emotional counter-claims?",
    "Is the tone civil without over-pleasing or apologising for things I did not do?",
    "Is the boundary or next step clear, and does the last line close the loop?",
    "Would a neutral third party read this as reasonable, or should it be escalated instead?",
  ],
  influencePayoff: {
    feeling:
      '"This person stayed steady and fair, even under fire, and there was nothing there for me to attack."',
    principle:
      "People escalate when they feel pulled to defend their identity, competence, or motives. BIFF shifts your attention from 'How do I prove I am right?' to 'What accurate, useful reply is actually needed here?'. So there is far less for the other person to escalate against.",
    gains: [
      "Reduced escalation, because you do not match the tone",
      "A conversation that stops sprawling into every accusation",
      "A clean written record you would be happy to have forwarded",
      "Saved time and emotional energy",
      "Visible steadiness under pressure",
      "A door left open for real logistics while closed to bait",
      "The self-command that comes from answering the issue, not the insult",
    ],
    whyMostFail: [
      "They try to correct every accusation, turning a short reply into a legal brief.",
      'They smuggle in a counterattack ("as I already explained") and break the friendly part.',
      "They reply too fast, letting the message's manufactured urgency pull heat into their words.",
      "They confuse firm with harsh, so the close lands as punishment rather than clarity.",
    ],
  },
  fieldTip: {
    headline:
      "Do not answer the whole storm. Answer the useful weather report.",
    body: "When a message is loaded, look for the one practical point hiding inside it, then reply with one civil opening, one useful fact, and one firm next step. The best BIFF reply often feels almost too short before you send it. That is usually the sign you have it right. Memorable cue: Short. Factual. Civil. Closed.",
    example:
      'Storm: "You never keep your promises, fix this today." Weather report: the delivery date. Reply: "I understand the delay is frustrating. The revised date is Thursday at 4 pm."',
    dont: "Prove your character, diagnose theirs, or replay the history: the moment you do, it's no longer BIFF.",
    do: "Return to the one practical issue and close the loop.",
  },
  relatedTechniques: [
    {
      id: "TC044",
      reason:
        "Both are concise. Use BLUF when the problem is order and clarity in a neutral briefing. Use BIFF when the problem is heat and bait.",
    },
    {
      id: "TC053",
      reason:
        "Both reduce blame. Use NVC / OFNR when the relationship is safe enough for a full feelings-needs-request. Use BIFF when that sequence would inflame or overexpose.",
    },
    {
      id: "TC014",
      reason:
        "Friendly can be mistaken for validation. Validate the concern when the person needs to feel understood. Use BIFF when the thread needs containment, not deeper acknowledgement.",
    },
    {
      id: "TC052",
      reason:
        "Both involve facts. Use SBI when you are initiating feedback about a specific behaviour and its impact. Use BIFF when you are responding to accusations or conflict.",
    },
    {
      id: "TC045",
      reason:
        "Both can provide information. Use Ask-tell-ask when you have consent and want learning. Use BIFF when the person is hostile, misinformed, or baiting.",
    },
    {
      id: "TC069",
      reason:
        "Both appear in disagreement. Clarify the Objection when it is genuine and worth exploring. Use BIFF when it is baiting or repetitive.",
    },
  ],
};
