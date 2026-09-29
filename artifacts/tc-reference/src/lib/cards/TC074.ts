import type { CardData } from "../card-types";

export const TC074: CardData = {
  pdfUrl: "cards/TC074/TC074_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC074/TC074_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC074/TC074_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC074/TC074_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC074/TC074_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC074/TC074_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC074/TC074_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC074/TC074_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC074",
  whyItWorks:
    "DESC is a four-step way to make an assertive request or set a boundary without it turning into blame, threat or a character judgement. You Describe the observable behaviour, Express its effect, Specify the concrete change you want, and name the Consequence: a clear next step or choice, not a punishment. It works because it separates observation from judgement, feeling from accusation, request from demand, and consequence from punishment, which lowers defensiveness and makes your concern easy to understand and easy to respond to.",
  whatItIsNot: [
    "It is not a script for cornering someone into agreement.",
    "It is not a way to dress up a threat, ultimatum, punishment, sales close, seduction move, or power play.",
    "It is not a substitute for listening when the other person is distressed, unsafe, ashamed, grieving or too escalated to process structure.",
    "It is not the right move when you cannot name the behaviour specifically. Use reflection, inquiry, or a clean request first.",
  ],
  overview: {
    coreFormula: [
      'D, Describe: name the observable behaviour. "In the last two meetings, the decision changed after we\'d already agreed the scope."',
      'E, Express: name the effect, not the motive. "That makes it hard to plan the work and keep the team aligned."',
      'S, Specify: ask for the concrete change. "I need scope changes flagged before the meeting ends."',
      "C, Consequence: name your next step, not a punishment. \"If that isn't possible, I'll pause implementation until we have it in writing.\"",
      "Skeleton: \"When [behaviour] happens, it affects [impact]. I need [specific change]. If that can't happen, I'll [my own next step].\"",
    ],
    minimumViableMove:
      "When [specific behaviour] happens, it affects [impact]. I need [specific change]. If that can't happen, I'll [clear next step].",
    impact: "Medium",
    difficulty: "Hard",
    misuse:
      "It fails when the Consequence becomes a threat or punishment, when you use the frame to corner, shame, punish or dominate, or when you deliver all four steps mechanically instead of watching whether the person can actually respond.",
    bestFor: [
      "Repeated minor boundary crossings",
      "Workplace feedback that needs a behaviour change",
      "Household and shared-living agreements",
      "Collaborative repair and role clarity",
      "Setting expectations and service interactions",
      "Client and scope conversations",
      "Any moment where a concrete behaviour needs to change",
    ],
  },
  notFor: [
    "There is immediate danger, harassment or a crisis. Use formal support, documentation or safety planning",
    "A power imbalance means a private, direct conversation could increase harm",
    "You cannot yet name the behaviour specifically",
    "The other person is too distressed, ashamed or escalated to take in structure",
    "Your real aim is to win, shame, punish or test loyalty",
    "You are too escalated to stay respectful",
    "The ask is small and one-off: a clean request is enough",
  ],
  phraseBank: [
    {
      id: "minimum-viable",
      label: "Minimum viable move",
      tag: "Short skeletons and openers",
      tone: "Quick",
      phrases: [
        "When that keeps happening, it affects the work. I need one clear change. If it can't happen, I'll take the next step myself.",
        "Can I name a pattern I'm seeing and make one request?",
        "Quick one: when the scope changes mid-task, I lose the day.",
        "One ask, send changes in writing, and I'll re-quote before I continue.",
        "I need it by Thursday. After that it moves to the next cycle.",
        "Small thing, but it keeps happening. Can we sort it?",
        "Two-line version: this happens, I need that, or I'll do this.",
      ],
    },
    {
      id: "warm-collaborative",
      label: "Warm and collaborative",
      tag: "Keeps the relationship in frame",
      tone: "Warm",
      phrases: [
        "I'm raising this because I want us to work well together.",
        "I want to keep helping, and I also need the scope to stay stable.",
        "None of this is about blame. I just want us on the same page.",
        "I value your input. I'm asking about timing, not shutting it down.",
        "I'd rather say this now than let it quietly build up.",
        "I want your pushback. It makes the plan better.",
        "This matters to me because the working relationship matters.",
      ],
    },
    {
      id: "work-meetings",
      label: "Work and meetings",
      tag: "Feedback, teams, clients, email",
      tone: "Professional",
      phrases: [
        "When the draft comes in after the review window, I can't give it proper attention. I need it by Tuesday noon. If it's later, it moves to the next review cycle.",
        "When side conversations happen while someone is presenting, it splits attention. Let's hold questions until the end. Put anything urgent in the chat.",
        "When I get several urgent pings without context, I lose time guessing priority. Please include the deadline and the decision needed. If I don't have that, I'll treat it as normal priority.",
        "When requirements change after sign-off, the timeline and cost change too. Please send changes in writing. If the scope changes, I'll send an updated estimate before continuing.",
        "When approval comes after the deadline, I can't protect quality. I need it by Thursday. If it's later, launch moves to the next cycle.",
        "In the last two meetings the decision changed after we'd agreed the scope. That makes it hard to plan. I need scope changes flagged before we close.",
      ],
    },
    {
      id: "clear-ask-boundary",
      label: "Clear ask and boundary",
      tag: "The Specify and Consequence steps",
      tone: "Direct",
      phrases: [
        "Please let me finish the timeline before challenging it.",
        "I need the scope settled before I begin.",
        "Please send changes in writing.",
        "I can do this if the scope stays fixed. If it changes again today, I'll pause and replan.",
        "Please clear your dishes before bed. If they're still there in the morning, I'll leave them on your side rather than doing them.",
        "Let me know as soon as you're unsure about plans. If it's last-minute again, I'll wait for you to suggest the next one.",
        'If the concern is urgent, say "I need to interrupt for a risk," and I\'ll pause.',
      ],
    },
    {
      id: "soften-recover",
      label: "Soften and recover",
      tag: "When the tone lands hard",
      tone: "Repair",
      phrases: [
        "That came out sharper than I intended. I'm not threatening you, I'm being clear about what I can and can't do.",
        "I made that sound more like a threat than a boundary. Let me restate it.",
        "I'm not trying to diagnose your intention. I'm describing the behaviour I experienced.",
        "The part I need to be clear about is my next step, not controlling yours.",
        "Let me separate the facts from my reaction.",
        "I skipped listening. Before I restate the request, what am I missing?",
        "That was too much at once. One-line version: when this happens, I need that, or I'll do this.",
      ],
    },
    {
      id: "pressure-pushback",
      label: "Pressure and pushback",
      tag: "Under resistance or when it lands heavily",
      tone: "High-stakes",
      phrases: [
        "You can absolutely challenge it. I'm asking for sequencing, not silence. Finish first, challenge second.",
        "I can hear the consequence landed heavily. The request still matters, and I want to make it fair.",
        "I'm not asking you to agree, only to hear what I need.",
        "If we can't settle this here, I'll take it to the next step rather than keep going in circles.",
        "Let's slow down. Here's the behaviour I mean, without the label.",
        "You can decide how you want to handle it. I'm being clear about what I'll do next.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "The issue isn't observable yet",
      action: "Don't use DESC. Ask a clarifying question or reflect first.",
      phrase: "Can I check what actually happened before I react?",
    },
    {
      condition: "It's observable but low-stakes and one-off",
      action: "Use a clean request instead of the full frame.",
      phrase: "Could you get that to me by Tuesday?",
    },
    {
      condition: "It's observable and repeated",
      action: "Use DESC: describe, express, specify, then set the boundary.",
      phrase:
        "When this keeps happening, it affects the work. I need one clear change. If not, I'll...",
    },
    {
      condition: "They're distressed or escalated",
      action:
        "Validate or pause first. Use a shorter DESC only if it's still needed.",
      phrase: "Let's take a breath. I do want to sort this out with you.",
    },
    {
      condition: "The consequence would be punitive or unsafe",
      action:
        "Don't use it. Name your own next action, seek support, or move to a formal process.",
      phrase:
        "I'll take this through the proper process rather than handle it here.",
    },
    {
      condition: "They understand and agree",
      action: "Summarise the next step and stop talking.",
      phrase: "Great, so you'll flag scope before we close, and we're set.",
    },
  ],
  ladder: [
    {
      weak: '"You keep ignoring what I ask for, so don\'t be surprised if I stop helping." This attacks motive and turns the consequence into punishment.',
      better:
        "\"When the request changes after I've started, I lose time. I need the scope settled before I begin. If it changes, I'll need to re-estimate.\" Clearer and far less blaming.",
      best: '"I want to keep helping, and I also need the scope stable. When it changes after I start, I lose time and quality drops. Please confirm the scope before I begin. If it changes, I\'ll pause and send a new estimate before continuing." Warmth, specificity, request and boundary held together.',
    },
    {
      weak: "Overloading the other person with a long case file of everything they've ever done.",
      better: "Naming one concrete pattern.",
      best: "Naming one pattern, one impact, one request and one respectful next step, then pausing for their response.",
    },
  ],
  scenarios: [
    {
      situation: "Workplace delay",
      move: "Name the deadline impact and make the fallback a process, not a punishment.",
      phrase:
        "When approval comes after the deadline, I can't protect quality. I need it by Thursday. If it's later, launch moves to the next cycle.",
    },
    {
      situation: "Household boundary",
      move: "State the agreement, the effect, and your own next action.",
      phrase:
        "When dishes are left overnight after we agreed to clear them, I start the day frustrated. Please clear yours before bed. If they're still there, I'll move them to your side rather than doing them.",
    },
    {
      situation: "Friendship",
      move: "Describe the pattern and set a boundary about your own effort, not a threat.",
      phrase:
        "When plans are cancelled once I'm already on the way, I feel disrespected. Please tell me as soon as you're unsure. If it's last-minute again, I'll wait for you to suggest the next plan.",
    },
    {
      situation: "Client scope creep",
      move: "Turn the consequence into a transparent process.",
      phrase:
        "When new requirements are added after sign-off, the estimate changes. Please send changes in writing. If scope changes, I'll pause and quote the revision before continuing.",
    },
    {
      situation: "Digital overload",
      move: "Ask for the context you need and set a default if it's missing.",
      phrase:
        "When I get multiple urgent messages without context, I can't triage. Please include the deadline and decision needed. If not, I'll respond in the normal queue.",
    },
    {
      situation: "Team disagreement",
      move: "Sequence the input and leave a clear channel for genuine risk.",
      phrase:
        "When objections come before the proposal is complete, the group misses the full logic. Please hold objections until the summary slide. If there's a critical risk, name it as a risk and I'll pause.",
    },
  ],
  calibration: {
    working: [
      "They can repeat the request back accurately.",
      "They ask a specific clarifying question.",
      "They propose an alternative that still meets the need.",
      "They acknowledge the impact without collapsing into shame.",
      "They negotiate the how while accepting the what.",
      "The tone stays two-way rather than defensive.",
    ],
    adjust: [
      "They argue about your tone rather than the request: slow down and restate the observable behaviour.",
      'They go quiet or look embarrassed: add warmth: "I\'m raising this because I want us to work well together."',
      "They fixate only on the consequence: separate the facts from your reaction and re-anchor the request.",
      "There's repair needed under the request: lead with the relationship before the boundary.",
      "They have less power than you: check the consequence is proportionate, transparent and not punitive.",
      "It turns unsafe, humiliating, circular or hostile: stop, take a break, document, or escalate to a formal process.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Draft the four lines",
      task: "Pick one mild real situation. Write a single sentence for each DESC step: Describe, Express, Specify, Consequence.",
    },
    {
      day: "Day 2",
      title: "Strip the judgement",
      task: "Underline every judgement or motive word in your draft and swap it for an observable behaviour anyone could have seen.",
    },
    {
      day: "Day 3",
      title: "Impact without blame",
      task: "Rewrite the Express line so it names the effect on you or the work without making them responsible for your feelings.",
    },
    {
      day: "Day 4",
      title: "Make it observable",
      task: "Sharpen the Specify line until a stranger could tell whether or not it actually happened.",
    },
    {
      day: "Day 5",
      title: "Boundary, not punishment",
      task: "Rewrite the Consequence as your own next action, what you'll do, rather than a threat about what they'll suffer.",
    },
    {
      day: "Day 6",
      title: "Cut it by a third",
      task: "Say the full version aloud, then trim roughly a third of the words so it sounds like a conversation, not a statement.",
    },
    {
      day: "Day 7",
      title: "Add the calibration line",
      task: 'End with one line that hands back choice ("How does that land?" or "What am I missing?") and use the whole thing once in a real conversation.',
    },
  ],
  checklist: [
    "Did I describe behaviour rather than motive or character?",
    "Did I express impact without making the other person responsible for my emotional regulation?",
    "Was my request specific, observable and proportionate?",
    "Was the consequence a respectful next step rather than a threat?",
    "Did I leave room for correction, context or negotiation?",
    "Did I avoid using the frame to pressure, corner, sell, punish or dominate, and did I know when to stop, document or escalate instead?",
  ],
  example: {
    without: [
      "You: \"You're being disrespectful in meetings. If you keep doing that, I'm done including you.\"",
      "Why it's weak:",
      "jumps straight from judgement to threat",
      "labels character instead of naming a behaviour",
      "lets them argue about the label instead of hearing the request",
      'Them: "So I can\'t say anything now?"',
    ],
    with: [
      "You (better): \"In today's meeting, you interrupted me twice while I was explaining the timeline. I felt dismissed and it made it harder to finish the update. Please let me complete the timeline before challenging it. If you have concerns, I'll make time for them straight after.\"",
      "You (advanced): \"I want your pushback, it improves the plan, and I need the timing to work. When the timeline got interrupted twice today before I'd finished, I lost the thread and the group didn't get the full picture. Please let me finish first, then challenge the assumptions. If something's urgent, say 'I need to interrupt for a risk,' and I'll pause.\"",
      'Them: "So I can\'t say anything now?"',
      'You (recovery): "You can absolutely challenge it. I\'m asking for sequencing, not silence. Finish first, challenge second."',
      "Why this works:",
      "describes the behaviour, not the character",
      "names the impact without blaming motive",
      "specifies exactly what changes, and gives a route for genuine urgency",
      "keeps the consequence about sequencing, not punishment",
    ],
    note: "The poor version hands the other person a label to argue about. The strong version hands them something concrete to say yes to.",
  },
  influencePayoff: {
    feeling:
      '"I know exactly what they need and why, and I still have a real choice."',
    principle:
      "People respond to a request they can understand and answer. Clarity and fairness move people where pressure only hardens them.",
    gains: [
      "Your concern is easy to understand and easy to respond to",
      "Lower defensiveness, because you start with behaviour rather than motive",
      "Better accountability, because the request is concrete",
      "The consequence is named before resentment or confusion builds",
      "You come across as fair and self-possessed, not pushy",
      "The other person keeps a genuine choice",
    ],
    whyMostFail: [
      "They turn the Consequence into a threat or punishment",
      "They read motives instead of describing behaviour",
      "They deliver all four steps mechanically and skip watching the response",
      "They reach for DESC when validation or inquiry should come first",
    ],
  },
  fieldTip: {
    headline: "Make the C about your boundary, not their punishment.",
    body: "The other person should leave knowing exactly what happened, why it matters, what you're asking for, and what you'll do next if the pattern continues. Use the structure to become clearer, not colder.",
    example:
      'Threat: "Do that again and you\'ll regret it." Boundary: "If it happens again, I\'ll pause the discussion and reschedule with an agenda."',
    do: "Keep the consequence about your own next action. What you will do.",
    dont: "Don't make the consequence leverage over them. What they will suffer.",
  },
  method: [
    {
      step: "1",
      title: "Name the behaviour you can observe",
      body: "Notice a specific behaviour or pattern that affects safety, clarity, respect, time, quality or trust. If you can't name it observably, you're not ready for DESC yet.",
    },
    {
      step: "2",
      title: "Decide whether DESC fits yet",
      body: "Decide whether this needs a direct DESC statement or a softer neighbouring move first: validation, inquiry, or treating resistance as information. DESC too early can shut a conversation down.",
    },
    {
      step: "3",
      title: "Say one line per step",
      body: "Use one short clause for each step. Keep each in your own plain voice rather than a rehearsed script.",
      examples: [
        {
          label: "Describe",
          text: '"In the last two meetings the scope changed after we\'d agreed it."',
        },
        {
          label: "Express",
          text: '"That makes it hard to plan the work and keep the team aligned."',
        },
        {
          label: "Specify",
          text: '"I need scope changes flagged before we close the meeting."',
        },
        {
          label: "Consequence",
          text: "\"If that's not possible, I'll pause until it's confirmed in writing.\"",
        },
      ],
    },
    {
      step: "4",
      title: "Watch how it lands",
      body: "Watch whether the other person can understand the request, ask a clarifying question, negotiate, or choose a next step. If they get defensive, slow down and separate the facts from your interpretation.",
    },
    {
      step: "5",
      title: "Repair a consequence that sounds like a threat",
      body: "If your consequence sounds like a threat, repair it immediately and restate the boundary as your own next action, not control over them.",
    },
    {
      step: "6",
      title: "Keep it two-way",
      body: "Follow DESC with autonomy release, a clean request, a summary check, or permission to disagree so the conversation stays human and two-way.",
    },
  ],
  liveThreadClues: [
    "It's happened more than once, not just today",
    "You keep re-doing work because of it",
    "You feel resentful but haven't actually said anything",
    "An agreement you both made isn't holding",
    "You're starting to avoid the person instead of raising it",
    "The behaviour is affecting time, quality, respect or trust",
  ],
  depthDial: [
    {
      depth: "Light (Describe + Specify)",
      useWhen: "low-stakes, first time, no consequence needed yet",
      phrase:
        "When objections come before the proposal is finished, we miss the full logic. Please hold them until the summary slide.",
    },
    {
      depth: "Minimum (full skeleton)",
      useWhen: "you need the boundary but time is short",
      phrase:
        "When the scope changes after I start, I lose time. Please confirm it before I begin. If it changes, I'll re-estimate.",
    },
    {
      depth: "Full DESC",
      useWhen:
        "a repeated pattern needs a clear behaviour change and a boundary",
      phrase:
        "In the last two meetings the scope changed after we'd agreed it. That makes it hard to plan. I need changes flagged before we close. If not, I'll pause until it's confirmed in writing.",
    },
    {
      depth: "Full + warmth",
      useWhen:
        "the relationship matters and repair is needed alongside the request",
      phrase:
        "I want to keep helping and I need the scope stable. When it changes after I start, quality drops. Please confirm before I begin. If it changes, I'll pause and re-quote.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Describing motive instead of behaviour",
      soundsLike: '"You were trying to undermine me."',
      better: '"You changed the decision after we\'d agreed it."',
    },
    {
      mistake: "Using Express as an accusation",
      soundsLike: '"You made me feel useless."',
      better: '"I felt sidelined and couldn\'t finish the update."',
    },
    {
      mistake: "Leaving the request vague",
      soundsLike: '"Just be more respectful."',
      better: '"Please let me finish the sentence before you respond."',
    },
    {
      mistake: "Turning the consequence into a threat",
      soundsLike: '"Do that again and you\'ll regret it."',
      better:
        '"If it happens again, I\'ll pause the discussion and reschedule with an agenda."',
    },
    {
      mistake: "Skipping calibration",
      soundsLike: "Delivering all four steps, then moving straight on",
      better:
        '"How does that land?", then watch whether they can actually respond.',
    },
    {
      mistake: "Reaching for DESC too early",
      soundsLike: "A boundary before you've understood the problem",
      better:
        "Validate or ask first, and use DESC only if the boundary still stands.",
    },
    {
      mistake: "Over-polishing until it's a performance",
      soundsLike: "A rehearsed, airless script",
      better: "One plain sentence per step, in your own voice.",
    },
  ],
  recoveryPhrases: [
    "I made that sound more like a threat than a boundary. Let me restate it.",
    "I'm not trying to diagnose your intention. I'm describing the behaviour I experienced.",
    "The part I need to be clear about is my next step, not controlling yours.",
    "Let me separate the facts from my reaction.",
    "I can hear that the consequence landed heavily. The request is still important, and I want to make it fair.",
    "I skipped listening. Before I restate the request, what am I missing?",
    "That was too much at once. One-sentence version: when this happens, I need that, or I'll do this.",
  ],
  bestRecoveryLine:
    "I made that sound more like a threat than a boundary. Let me restate it.",
  chains: [
    {
      label: "Validate → DESC",
      sequence:
        "Acknowledge the concern first, then Describe, Specify and set the boundary.",
      example: [
        '"I know the deadline moved and that wasn\'t on you."',
        "\"And when the draft still comes in after the review window, I can't do it justice. I need it by Tuesday noon. If it's later, it moves to the next cycle.\"",
      ],
    },
    {
      label: "Resistance-as-information → DESC",
      sequence:
        "Explore the pushback first; if the boundary still stands, state DESC cleanly.",
      example: [
        '"Say more about what makes the timing hard."',
        '"That helps. I still need the scope confirmed before I start. If it shifts, I\'ll pause and re-quote."',
      ],
    },
    {
      label: "DESC → Autonomy release",
      sequence:
        "State the request and boundary, then hand back the choice so it doesn't read as coercion.",
      example: [
        '"Please send changes in writing. If the scope grows, I\'ll re-estimate before continuing."',
        "\"You can decide how you want to handle it. I'm just being clear about what I'll do next.\"",
      ],
    },
    {
      label: "DESC → Summary check",
      sequence: "After the ask, confirm what they heard when accuracy matters.",
      example: [
        '"...and if it changes, launch moves to the next cycle."',
        '"Can you tell me what you heard me asking for?"',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC013",
      reason:
        "DESC vs Clean request: use DESC when context, impact and a consequence matter. Use a clean request when the ask can stand alone. The common trap is reaching for full DESC on a simple, low-stakes favour.",
    },
    {
      id: "TC052",
      reason:
        "DESC vs SBI: both start with observable behaviour. Use SBI when the task is feedback clarity (situation, behaviour, impact). Use DESC when you must also specify what changes next and name a boundary.",
    },
    {
      id: "TC053",
      reason:
        "DESC vs NVC / OFNR: both include an observation and a request. Choose NVC when needs, feelings and mutual understanding come first. Choose DESC when a firm boundary and a practical consequence come first.",
    },
    {
      id: "TC073",
      reason:
        "DESC vs Resistance-as-information: explore the pushback first when the problem is unclear. Move to DESC only once you understand the resistance and the boundary still stands.",
    },
    {
      id: "TC021",
      reason:
        "DESC → Autonomy release: follow DESC with autonomy release so the consequence doesn't read as coercion, 'you can decide how to handle it. I'm just clear on what I'll do next.'",
    },
    {
      id: "TC081",
      reason:
        "DESC vs COIN: both are feedback mnemonics. Choose COIN when context, observation, impact and next action are enough. Choose DESC when a boundary or consequence is the essential differentiator.",
    },
  ],
};
