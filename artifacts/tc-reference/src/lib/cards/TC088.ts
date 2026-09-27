import type { CardData } from "../card-types";

export const TC088: CardData = {
  pdfUrl: "cards/TC088/TC088_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC088/TC088_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC088/TC088_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC088/TC088_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC088/TC088_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC088/TC088_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC088/TC088_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC088/TC088_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC088",
  whyItWorks:
    "A one-screen message is a design discipline for email, chat, comments and light handovers. Instead of merely shortening, you build the message so the reader can see in a single view what this is, why it matters, what you need and how to answer: purpose, context, ask, reply path, then deadline or next step. It works by reducing cognitive load, because the reader no longer has to assemble your intention from a long preface or a buried ask. That matters most when they are busy, on mobile or deciding whether to open anything longer.",
  whatItIsNot: [
    "It is not blunt minimalism: a one-screen message can still be warm, respectful and context-aware.",
    "It is not a licence to omit material the reader genuinely needs to make a safe or informed decision.",
    "It is not BLUF by itself: BLUF puts the bottom line first. One-screen message designs the whole digital unit so the full action is visible and easy to process.",
    "It is not a pressure tactic. Do not use concision to rush a decision, hide trade-offs, or make refusal harder.",
    "It is not a substitute for a detailed document. When the decision needs depth, put it in a link, appendix, attachment or follow-up note.",
  ],
  overview: {
    coreFormula: [
      "Purpose → context → ask → reply path → deadline or next step.",
      'Minimum viable move: "Quick ask: can you approve the revised copy? Only the headline changed. Reply approve or edit by Thursday noon. I\'ll handle the update."',
      'Full field version: "Decision needed. We have two workable options. Choose A or B. A/B is enough. By 3 pm so I can brief the team."',
      "Field rule: if the reader can grasp the job of the message, why it matters, and how to respond without scrolling, you're close.",
    ],
    minimumViableMove:
      "State the purpose, give one context line, make one clear ask, and add an easy reply path.",
    impact: "High",
    difficulty: "Easy-Medium",
    misuse:
      "Using concision to rush a decision, hide trade-offs, or make refusal harder. Or compressing sensitive content so tightly that it reads as cold.",
    bestFor: [
      "Email requests, Slack or Teams updates, and calendar follow-ups",
      "Networking messages, introductions and reminders",
      "Lightweight decisions and manager updates",
      "Customer-service replies and team handoffs",
      "Messages the recipient will read on a phone, between meetings, or inside a crowded thread",
      "Making a response easier, not hiding complexity",
    ],
  },
  notFor: [
    "The issue needs substantial evidence, legal or clinical detail, or careful documentation",
    "The moment calls for emotional repair or a consent-sensitive decision",
    "The other person has asked for depth, or brevity would feel dismissive given the power dynamic",
    "A short message would leave them feeling handled rather than heard",
    "Safety, grief, serious conflict or a major money decision is in play: slow down instead",
    "Physical safety or an immediate emergency takes priority",
  ],
  phraseBank: [
    {
      id: "quick-openers",
      label: "Quick asks & openers",
      tag: "Short orienting one-liners",
      tone: "Quick",
      phrases: [
        "Quick ask: can you approve the revised headline by 2 pm?",
        "Quick question on timing: hold for your review, or move ahead with version B?",
        "Quick check: is the $8k-$10k range still right?",
        "Simple version: I can do Saturday at 10 or Sunday at 3.",
        "Bottom line up top: we're on track. One approval needed.",
        "One screen: what changed, what I need, and by when.",
        "Short version first, detail below if it's useful.",
      ],
    },
    {
      id: "work-requests",
      label: "Work requests & updates",
      tag: "Professional / meeting / client",
      tone: "Professional",
      phrases: [
        "Quick ask: can you confirm whether option A is acceptable? It keeps the launch date unchanged. A yes/no by 2 pm is enough.",
        "Update in one screen: the vendor confirmed Friday delivery. No action needed from you unless the timing creates a problem.",
        "Status: on track. Action needed: approve the supplier change by Friday 2 pm.",
        "Can you confirm whether the draft can ship today? Reply yes, hold, or edit.",
        "Bottom line: we're on track, but the budget change needs your call. Approve the extra $900, or reduce scope.",
        "Following up on the proposal: is the budget range still right? I'll adjust from your reply.",
        "Two workable options, one decision: choose A or B and I'll run with it.",
        "Handover in one screen: here's the state, the open item, and who owns it next.",
      ],
    },
    {
      id: "decisions-reply-paths",
      label: "Decisions & reply paths",
      tag: "The exact ask and how to answer",
      tone: "Direct",
      phrases: [
        "Decision needed by 3 pm: A keep Friday launch with reduced scope, or B move to Tuesday with full scope. Reply A or B.",
        "A one-word reply is enough: approve, edit, or hold.",
        "Reply A to keep Friday launch, or B to move to Tuesday.",
        "A yes/no reply is enough. I'll handle the next step.",
        "My recommendation is version B because it protects Friday launch. Reply B or hold by 4 pm.",
        "Here's the exact ask: sign off the headline change, nothing else.",
        "Pick whichever is easier. If neither works, we can skip this round.",
      ],
    },
    {
      id: "context-warmth",
      label: "Context & warmth lines",
      tag: "Just enough context, kept human",
      tone: "Warm",
      phrases: [
        "The only context you need is that the deadline moved from Tuesday to Friday.",
        "I know this is a sensitive one, so I want to keep the ask clear rather than bury it.",
        "Good to meet you yesterday. Sending the article I mentioned. No reply needed.",
        "No reply needed. It just matched your point about onboarding.",
        "I put the detail below the line so the decision stays visible first.",
        "No rush on this. I just wanted the ask to be easy to find.",
        "Thanks for turning this around under pressure. Here's the one thing left to decide.",
      ],
    },
    {
      id: "autonomy-recovery",
      label: "Autonomy & recovery",
      tag: "Protect choice. Fix a message that missed",
      tone: "Repair",
      phrases: [
        "No pressure if this isn't the right week. A quick no is helpful too.",
        "No is a fine answer.",
        "I made that too dense: the actual ask is this...",
        "I compressed that too much. The missing context is...",
        "Let me separate the decision from the detail.",
        "I buried the ask. What I need is your approval on the revised copy.",
        "That came across abrupt. I was aiming for clarity, not pressure.",
        "I should have made the reply path clearer: A, B, or hold are all fine.",
      ],
    },
    {
      id: "escalation-pressure",
      label: "Escalation & pressure",
      tag: "High-stakes decisions kept clear",
      tone: "High-stakes",
      phrases: [
        "Decision needed: pause the launch, or proceed with known risk. My recommendation is pause. Detail below.",
        "I'll keep this short: we need a decision on the client response by 4 pm.",
        "Separating decision from detail: the decision is approve, edit, or hold.",
        "No pressure to decide from this message alone. This is just the orientation. I can send the full rationale or talk it through.",
        "One call to make now, three things you can read later if you want them.",
        "This needs a real decision, not a quick yes. Here's the choice and the trade-off.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "The message has no clear job yet",
      action:
        "Decide the job (inform, ask, decide, invite, hand over) before you write a word.",
      phrase: "",
    },
    {
      condition: "The job is inform-only",
      action: "Say so early so no one hunts for a hidden ask.",
      phrase: "No action needed unless the timing creates a problem.",
    },
    {
      condition: "The job is a decision",
      action: "State the decision, the options and the deadline together.",
      phrase: "Decision by 3 pm: A or B. Reply A or B.",
    },
    {
      condition: "The job is a request",
      action: "State the exact action and hand them an easy reply path.",
      phrase: "Can you approve the headline? A yes/no is enough.",
    },
    {
      condition: "Necessary detail won't fit one screen",
      action:
        "Write a one-screen summary and put the rest below, linked or attached.",
      phrase: "Detail below if useful.",
    },
    {
      condition: "The content is sensitive or the reader might feel pressured",
      action:
        "Add a care line and protect their autonomy instead of over-compressing.",
      phrase: "No is a fine answer. No pressure if the timing doesn't work.",
    },
  ],
  ladder: [
    {
      weak: '"Hi, I had a few thoughts after our call and wanted to run them by you. There are a number of moving parts..." The ask is buried and the reader has to infer the action.',
      better:
        '"I have one decision for you: keep the launch date, or reduce scope? Context below." The job is visible, but the reply path could be easier.',
      best: '"Decision by 3 pm: A keep Friday launch with reduced scope, or B move to Tuesday with full scope. Reply A or B. I\'ll update the plan." The reader can act from one screen.',
    },
    {
      weak: '"Following up on the attached." The reader has no idea what response is wanted.',
      better:
        '"Following up on the attached proposal. Can you confirm the budget range is still right?" The ask is present but the effort is open-ended.',
      best: '"Quick check: is the $8k-$10k range still right? A yes/no is enough. I\'ll adjust the proposal." One screen, one easy reply.',
    },
  ],
  scenarios: [
    {
      situation: "Manager update",
      move: "Lead with status and whether action is needed, then the deadline.",
      phrase:
        "Status: on track. Action needed: approve the supplier change by Friday 2 pm.",
    },
    {
      situation: "Client email",
      move: "Lead with the useful answer, keep context minimal, park fuller rationale below a divider.",
      phrase: "Short answer: yes, we can hit Friday. Detail below if useful.",
    },
    {
      situation: "Networking follow-up",
      move: "Make the purpose and the no-pressure tone visible up front.",
      phrase:
        "Good to meet you. Sending the article I mentioned. No reply needed.",
    },
    {
      situation: "Slack or Teams request",
      move: "Use a compact ask plus a ready-made reply option.",
      phrase: "Can the draft ship today? Reply yes, hold, or edit.",
    },
    {
      situation: "Scheduling",
      move: "Offer two clear choices and an exit ramp.",
      phrase:
        "Tuesday 10 or Thursday 2? If neither works, I can send notes instead.",
    },
    {
      situation: "Escalation or delicate issue",
      move: "Separate the decision from the detail. Add warmth before you compress.",
      phrase:
        "I know this is sensitive, so I'll keep the ask clear: pause, or proceed with known risk. My recommendation is pause.",
    },
  ],
  calibration: {
    working: [
      "The reader answers the intended question without asking for clarification.",
      "Replies come back faster, and people use the options you offered.",
      "They forward or action the message without asking you for a summary first.",
      "Handoffs land: the next person acts without opening three links or re-reading the thread.",
      "A busy recipient can say yes, no, pick an option, delegate, or ask an informed follow-up straight from the first screen.",
      "The tone still feels considered, not clipped.",
    ],
    adjust: [
      'They ask "What do you need from me?" The ask isn\'t visible enough.',
      "They respond to a background detail instead of the action: move the ask up.",
      "They sound wary, surprised or under-informed: add a line of context.",
      "The message touches effort, disappointment, identity, conflict or care: add warmth before you compress.",
      "The topic is safety, consent, legal detail, a major money decision, grief or serious conflict: stop compressing and slow down.",
      "You've made it neat but not clear: fix the ask itself, not just the formatting.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Buried-ask rewrite",
      task: "Take a 200-word email you sent recently and rewrite it as five lines: purpose, context, ask, reply path, deadline. Notice how much was throat-clearing.",
    },
    {
      day: "Day 2",
      title: "Phone-width test",
      task: "View a real draft at phone width. If the ask isn't visible without scrolling, move it up or shorten the context until it is.",
    },
    {
      day: "Day 3",
      title: "Reply-path test",
      task: "On three drafts, add one line that tells the recipient exactly how to respond: yes/no, A/B, approve/edit/hold, or one sentence of feedback.",
    },
    {
      day: "Day 4",
      title: "Warmth check",
      task: "Find a message that involves effort, inconvenience, disappointment, uncertainty or a power imbalance, and add one relational line before the ask.",
    },
    {
      day: "Day 5",
      title: "Detail parking",
      task: 'Take a long message and move all background below a divider labelled "Detail if useful", keeping the decision and reply path above it.',
    },
    {
      day: "Day 6",
      title: "Five-minute repetition",
      task: "Rewrite three old messages as one-screen messages. For each, mark what changed: purpose, context, ask, reply path, or deadline.",
    },
    {
      day: "Day 7",
      title: "Live send",
      task: "Send one genuine one-screen message today. Note how fast the reply came and whether they answered the intended question without a follow-up.",
    },
  ],
  checklist: [
    "Can the reader identify the message job in the first line?",
    "Is the ask visible without scrolling?",
    "Is there enough context for a safe, informed response?",
    "Is the reply path easy, yes/no, A/B, approve/edit/hold, or one sentence?",
    "Is any deadline real, fair and relevant, not manufactured?",
    "If it's sensitive, have I added care instead of just shortening, and would I be happy to receive this on a busy day?",
  ],
  example: {
    without: [
      'Poor message: "Hey, I know things have been busy and I wanted to circle back on the design thing. I was thinking about what we talked about last week and there are some implications for timing. The team had a few views, and I\'m not sure if you saw the second doc..."',
      "Why it fails: the recipient can't see the message job, the ask, or the reply path from the first screen.",
      "They have to read to the end and still guess what you need.",
      "On a phone, between meetings, it gets marked unread and forgotten.",
    ],
    with: [
      'Better message: "Quick question on design timing: do you want us to hold for your review, or move ahead with version B? Context below."',
      "Why it's better: the point appears early and the reader knows what kind of response is needed.",
      "Advanced message: \"Decision needed today: move ahead with version B, or hold for your review? My recommendation is B because it protects Friday launch. Reply 'B' or 'hold' by 4 pm. I'll update the team. Detail below if useful: the only open item is the hero image crop.\"",
      "Why it works best: purpose, context, recommendation, reply path and timing all fit one screen, without removing the reader's choice.",
    ],
    note: "The advanced version still hands the reader a real choice ('B' or 'hold'). Compression should make the decision easier to see, never harder to refuse.",
  },
  influencePayoff: {
    feeling: '"I know exactly what they need, and I can answer in seconds."',
    principle:
      "People respond sooner and trust you more when the next action is easy to see and easy to take.",
    gains: [
      "Faster, cleaner replies",
      "Fewer back-and-forth clarification loops",
      "Reader goodwill and trust",
      "Smoother handoffs between people",
      "Clearer thinking for the sender",
      "Respect for the reader's attention",
      "Fewer abandoned drafts and messages that feel like homework",
    ],
    whyMostFail: [
      "They shorten without clarifying, so the ask ends up implied rather than stated.",
      "They front-load throat-clearing (apology, backstory, caveat) before the point.",
      "They compress the warmth out of a sensitive message and come across cold.",
      "They mistake neat bullets for a clean ask.",
    ],
  },
  fieldTip: {
    headline: "Write for the one screen they'll actually read.",
    body: "Assume the recipient reads only the first screen. Because often they will. Put the job, the ask and the reply path where their eyes already land. Put everything else below the line.",
    example:
      '"Decision by 4 pm: B or hold? I recommend B. Detail below if useful."',
    dont: 'Open with "Hope you\'re well, so sorry to bother you, quick one..." and reach the ask in paragraph three.',
    do: 'Lead with the genre and the ask ("Quick ask:", "Decision needed:", "No action needed:") then let the detail follow.',
  },
  method: [
    {
      step: "1",
      title: "Decide the message job first",
      body: "Before writing, name the job: inform, ask, decide, invite, hand over, or close the loop. If you can't name it, the message isn't ready and the reader won't find it either.",
    },
    {
      step: "2",
      title: "Open with an orienting line",
      body: "Start with a line that tells the reader what kind of message this is. They should know the genre before they read the detail.",
      examples: [
        {
          label: "Ask",
          text: "Quick ask: can you approve the headline by 2 pm?",
        },
        {
          label: "Inform",
          text: "Update, no action needed: the vendor confirmed Friday delivery.",
        },
        {
          label: "Decide",
          text: "Decision needed today: version B, or hold for review?",
        },
      ],
    },
    {
      step: "3",
      title: "Give only the context the action needs",
      body: "One or two sentences usually beats a chronological backstory. Include what they need to respond safely, and cut anything that only serves your own throat-clearing.",
    },
    {
      step: "4",
      title: "Make the ask visible and the reply easy",
      body: "Put the ask on its own line if the message might be skimmed, then hand them the path back: yes/no, an A/B choice, one sentence of feedback, or a named next step.",
      examples: [
        {
          label: "Weak",
          text: "Let me know your thoughts when you get a chance.",
        },
        {
          label: "Better",
          text: "Reply A or B. I'll update the plan from there.",
        },
      ],
    },
    {
      step: "5",
      title: "State real timing, not fake urgency",
      body: "If timing matters, give a genuine deadline or decision point and the reason for it. Manufactured urgency erodes trust and makes your future asks easier to ignore.",
    },
    {
      step: "6",
      title: "Park the detail and read it as the recipient",
      body: 'Move supporting detail below a divider, into bullets, or into a link: "Detail below if useful." Then read the first screen once from their side and remove anything that doesn\'t help them understand or act.',
    },
  ],
  commonMistakes: [
    {
      mistake: "Short but still unclear: the ask is implied, not stated.",
      soundsLike: '"Following up on the attached."',
      better:
        '"Quick check: is the $8k-$10k range still right? A yes/no is enough."',
    },
    {
      mistake:
        "Throat-clearing before the point: apology, backstory, caveat, then ask.",
      soundsLike:
        '"Sorry to bother you, I know it\'s busy, so no rush, but..."',
      better:
        '"Quick ask up front: can you approve the headline by 2 pm? Background below."',
    },
    {
      mistake: "Compressing sensitive content so tightly it reads as cold.",
      soundsLike: '"Need your decision on the redundancy list by 5."',
      better:
        '"I know this one\'s heavy. When you have a moment I need your call on the list. Happy to talk it through first."',
    },
    {
      mistake: "Manufacturing urgency to force a fast answer.",
      soundsLike: '"URGENT, need this now!!" when it isn\'t.',
      better:
        '"No rush today. I need this before Thursday\'s brief so we can prep."',
    },
    {
      mistake: "Burying the action in the final paragraph.",
      soundsLike: "Three paragraphs of context, then the ask at the very end.",
      better: "Ask in line one. Context underneath for anyone who wants it.",
    },
    {
      mistake:
        "Dumping links or screenshots without saying what to do with them.",
      soundsLike: '"See attached" (times four).',
      better: '"Two files, you only need the first. The ask is on page one."',
    },
    {
      mistake: "Mistaking neat formatting for genuine clarity.",
      soundsLike:
        "Tidy bullets wrapped around a decision that still isn't clean.",
      better: "Clarify the actual ask first, then let the bullets carry it.",
    },
  ],
  recoveryPhrases: [
    "I made that too dense. The short version is...",
    "I buried the ask. What I need is your approval on the revised copy.",
    "I compressed that too much. The missing context is...",
    "Let me separate the decision from the detail.",
    "No pressure to decide from this message alone. The one-screen version is just the orientation.",
    "This may need more detail. I can send the full rationale or talk it through.",
    "I should have made the reply path clearer: A, B, or hold are all workable.",
    "That came across abrupt. I was aiming for clarity, not pressure.",
  ],
  bestRecoveryLine: "Let me separate the decision from the detail.",
  chains: [
    {
      label: "Bottom line first",
      sequence: "TC044 BLUF → TC088 One-screen message",
      example: [
        "Lead with the bottom line, then keep the rest of the message inside one screen.",
        '"Bottom line: we can hit Friday. One approval needed: the extra $900, or reduce scope. Reply A or B by 3 pm."',
      ],
    },
    {
      label: "Clean the ask, then compress",
      sequence: "TC013 Clean request → TC088 One-screen message",
      example: [
        "Sharpen the exact action first, then fit the whole message on one screen.",
        '"Can you sign off the headline change, nothing else, by 2 pm? Yes/no is enough."',
      ],
    },
    {
      label: "Easy to answer",
      sequence: "TC088 One-screen message → TC034 Two-option questions",
      example: [
        "Compress the message, then hand the reader an A/B choice so they don't have to invent the next step.",
        '"Tuesday 10 or Thursday 2? If neither works, I\'ll send notes."',
      ],
    },
    {
      label: "Care before compression",
      sequence: "TC012 Full-attention signal → TC088 One-screen message",
      example: [
        "When the material is sensitive, signal care first, then make the ask clear rather than buried.",
        "\"I know this is a hard one, and I've read it properly. When you're ready I need your call on the list. Happy to talk it through first.\"",
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC044",
      reason:
        "BLUF puts the bottom line first in any format. One-screen message designs the whole digital unit so the full action is visible. Use BLUF for the opening sentence, one-screen message for the entire message.",
    },
    {
      id: "TC013",
      reason:
        "Clean request fixes a vague ask. One-screen message fixes reading burden. Clean the ask first, then fit it into one screen: a tidy message around an unclear ask still fails.",
    },
    {
      id: "TC020",
      reason:
        "Low-friction ask reduces the effort of the task itself. One-screen message reduces the effort of reading. Use low-friction ask to shrink the action, one-screen message to shrink the reading load.",
    },
    {
      id: "TC034",
      reason:
        "Two-option questions give the reader an A/B path. One-screen message compresses the whole message. If the options are the point, use TC034. If the whole message needs compression, use TC088.",
    },
    {
      id: "TC045",
      reason:
        "Ask-tell-ask sequences advice with permission and a comprehension check. One-screen message is for compact usability. Use Ask-tell-ask when you're giving information that needs consent, not just a short reply.",
    },
    {
      id: "TC048",
      reason:
        "SCQA structures a reasoned argument (situation-complication-question-answer). One-screen message structures recipient usability. Use SCQA for the reasoning, one-screen message for scannability.",
    },
  ],
};
