import type { CardData } from "../card-types";

export const TC052: CardData = {
  pdfUrl: "cards/TC052/TC052_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC052/TC052_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC052/TC052_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC052/TC052_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC052/TC052_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC052/TC052_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC052/TC052_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC052/TC052_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC052",
  whyItWorks:
    "SBI gives feedback by naming three things in order: the specific Situation, the observable Behaviour, and its concrete Impact, without attacking character or intention. Naming the moment tells the person exactly what you mean. Describing what they did rather than what you assume they meant keeps them from getting defensive. Stating the impact shows why it matters. Sequenced this way, feedback is easier to take in and harder to argue with, because you are describing what happened rather than judging who they are.",
  whatItIsNot: [
    "It is not a script to recite mechanically, or a model to announce out loud.",
    "It is not a way to avoid listening or to compress someone's feelings into a template.",
    "It is not a licence to deliver a verdict: the person still gets to respond.",
    "If the structure makes the conversation less humane, it is the wrong tool. Slow down and use a simpler move.",
  ],
  overview: {
    coreFormula: [
      "Situation → Behaviour → Impact.",
      "In situation X, I noticed behaviour Y. The impact was Z.",
      "In this morning's client call, you answered before Priya finished. The client looked unsure who to follow.",
      "In the review, you flagged the risk early. It saved us a fortnight.",
    ],
    minimumViableMove:
      "Name one specific situation, the observable behaviour you actually saw, and the concrete impact it had, then stop and listen.",
    impact: "Medium",
    difficulty: "Easy-Medium",
    misuse:
      'The move fails when you slip from describing behaviour into judging character or assuming motive ("you were careless", "you didn\'t care") instead of naming what was observable, or when you announce the framework and force every sentence into it after the point has already landed.',
    bestFor: [
      "Specific feedback that needs to be concrete, not a vague impression",
      "Workplace coaching, supervision and one-to-ones",
      "Debriefs after a project, incident or client call",
      "Accountability conversations that must stay fair",
      "Praise that names exactly what worked and why",
      "Raising an issue without attacking the person",
      "Written feedback that has to be scannable",
    ],
  },
  notFor: [
    "Fresh conflict where emotion is still running high",
    "Shame-heavy conversations that need warmth before structure",
    "Vague impressions you cannot tie to an observable behaviour",
    "Moments where you cannot name a specific situation",
    "Power imbalance, distress, grief or anger: slow down first",
    "High-stakes decisions that need discussion, not a verdict",
    "When physical safety or an emergency takes priority",
  ],
  phraseBank: [
    {
      id: "framing-starters",
      label: "Framing starters",
      tag: "Quick openers",
      tone: "Quick",
      phrases: [
        "Can I give you a quick bit of feedback?",
        "One thing I noticed today, then your take.",
        "Mind if I flag something from the meeting?",
        "In situation X, I noticed behaviour Y. The impact was Z.",
        "Short version: the timing was the issue, not the idea.",
        "Two minutes of feedback, then I'll listen.",
        "Quick observation, no drama attached.",
      ],
    },
    {
      id: "concrete-praise",
      label: "Concrete praise",
      tag: "Positive SBI",
      tone: "Warm",
      phrases: [
        "In the review, you flagged the risk early. It saved us a fortnight.",
        "When the call went sideways, you stayed calm. It settled the whole room.",
        "You rewrote the summary before I asked. It made my morning far easier.",
        "In standup you credited Priya's fix. She's been walking taller since.",
        "The way you handled that question landed better than anything scripted would have.",
        "You stayed late to unblock Sam. It meant we shipped on time.",
      ],
    },
    {
      id: "work-feedback",
      label: "Work feedback",
      tag: "Coaching and supervision",
      tone: "Professional",
      phrases: [
        "In yesterday's client call, you answered before the brief was finished. The client looked unsure afterwards.",
        "During the demo, the screen-share dropped twice. We lost about ten minutes of their attention.",
        "In the last two standups the update ran long, and people started drifting before your part.",
        "When the deadline moved, I heard it from the client, not from you. It caught me flat-footed.",
        "In the report, the numbers and the summary didn't match, so I wasn't sure which to trust.",
        "The structure I'm using is just situation, behaviour, impact. Tell me if it's off.",
      ],
    },
    {
      id: "naming-the-behaviour",
      label: "Naming the behaviour",
      tag: "Observable, not character",
      tone: "Direct",
      phrases: [
        "The behaviour I'm describing is the interrupting, not you as a person.",
        "I'm talking about what happened, not what you meant by it.",
        "Here's the specific moment I mean, so we're picturing the same thing.",
        "The impact on my side was real, and I wanted you to know.",
        "That's the situation and the effect. What's your read?",
        "I'd like that part to change. Can we agree on how?",
        "One clean next step from me, then it's over to you.",
      ],
    },
    {
      id: "softening-and-recovering",
      label: "Softening and recovering",
      tag: "When it lands wrong",
      tone: "Repair",
      phrases: [
        "That came out like a performance review. Let me just say what I noticed.",
        "I'm talking about one moment, not about you as a person.",
        "I might be missing context. What was going on from your side?",
        "Is that how it looked to you?",
        "Let me check whether that's helpful, or if we should come at it another way.",
        "I can keep this short, and then we can adjust it together.",
      ],
    },
    {
      id: "sensitive-and-charged",
      label: "Sensitive and charged",
      tag: "Care and high stakes",
      tone: "High-stakes",
      phrases: [
        "This one's a bit awkward to raise, so bear with me.",
        "I want to name something specific, not make it about who you are.",
        "Before any feedback. How are you doing with all this?",
        "I might have this wrong. Here's what I saw. Tell me what I'm missing.",
        "One thing, then I'll stop and hear you out.",
        "I'd rather say this plainly than let it sit between us.",
      ],
    },
    {
      id: "digital-written",
      label: "Digital and written",
      tag: "Email and message length",
      tone: "Quick",
      phrases: [
        "Situation: the launch email. Behaviour: the link 404'd. Impact: thirty replies asking where to go.",
        "Flagging one thing from today so it doesn't get lost.",
        "Short note, not a big deal, just want it on your radar.",
        "In the doc, the deadline in section 3 contradicts the timeline up top.",
        "No need to reply tonight. Quick feedback for tomorrow.",
        "Two lines: what I saw, and why it matters. Then your call.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "They need it fast",
      action: "Use the shortest SBI: one line per step, no preamble.",
      phrase:
        "Quick one: in the call, you cut in early, and the client hesitated.",
    },
    {
      condition: "Emotion is running high",
      action: "Validate first and delay the framework until they feel heard.",
      phrase: "Before anything structured. That sounded like a rough week.",
    },
    {
      condition: "They need a story or context, not a verdict",
      action: "Switch to an example-led neighbour like STAR or CARL.",
      phrase:
        "Let me walk you through what actually happened, start to finish.",
    },
    {
      condition: "They need to act",
      action: "End with one clean next step, not more analysis.",
      phrase: "So the one change from here: loop me in before the client does.",
    },
    {
      condition: "They look confused by the structure",
      action: "Summarise in plain words and invite correction.",
      phrase:
        "Simplest version: the timing was the issue. Have I got that right?",
    },
  ],
  ladder: [
    {
      weak: "Using SBI as a visible script, announcing each step and sounding rehearsed.",
      better: "Using SBI silently to organise a concise, specific response.",
      best: "Using SBI flexibly, then checking whether the listener is clearer, more heard, and better able to respond.",
    },
    {
      weak: 'Naming character or motive: "you were careless".',
      better: 'Naming the behaviour: "the figures weren\'t checked".',
      best: 'Naming behaviour and impact together: "the figures weren\'t checked, so we sent the wrong total".',
    },
    {
      weak: 'Leaving the impact vague: "it wasn\'t great".',
      better: 'Naming a concrete impact: "we lost ten minutes".',
      best: "Naming the impact, then pausing to let them respond before you fill the silence.",
    },
  ],
  scenarios: [
    {
      situation: "Work meeting",
      move: "Make the contribution concise and memorable with one clean SBI line.",
      phrase:
        "In the planning session, the estimate doubled with no note. It's made the timeline hard to trust.",
    },
    {
      situation: "Written feedback or email",
      move: "Put each step in a short labelled line so the reader can scan it.",
      phrase:
        "Situation: the launch email. Behaviour: the link 404'd. Impact: about thirty replies asking where to go.",
    },
    {
      situation: "Giving praise",
      move: "Name the exact behaviour and its effect so it doesn't read as flattery.",
      phrase:
        "In the retro, you owned the miss straight away. It made it safe for everyone else to be honest.",
    },
    {
      situation: "A difficult one-to-one",
      move: "One sentence per step, then pause and let them respond.",
      phrase:
        "In Thursday's review, the feedback came across as personal. A couple of people went quiet after.",
    },
    {
      situation: "Coaching a repeat issue",
      move: "Tie the behaviour to the pattern, not a single slip, then agree a next step.",
      phrase:
        "This is the third sprint the demo has overrun. It's eating into the client's questions each time.",
    },
    {
      situation: "High emotion or power imbalance",
      move: "Validate first, keep the structure light, and hand control back at the end.",
      phrase:
        "This might be hard to hear. I'll say what I saw, then it's over to you.",
    },
  ],
  calibration: {
    working: [
      "They become clearer and ask a more specific question.",
      "They summarise your point back accurately.",
      "They move straight to a next step.",
      "Their manner opens: they nod, lean in, or start taking notes.",
      "They add their own side of the situation without getting defensive.",
      "The conversation gets shorter, not longer.",
    ],
    adjust: [
      "They look confused or ask you to repeat it.",
      "They go quiet or withdraw.",
      "They challenge the framing or the facts.",
      "They seem to need the human context before the structure.",
      "The structure starts sounding defensive, performative, or like a lecture.",
      "You're on your third framework sentence and they've stopped tracking.",
      "You catch yourself describing motive or character, not behaviour.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the three parts",
      task: "Take a piece of feedback you'd normally give and split it on paper into Situation, Behaviour and Impact.",
    },
    {
      day: "Day 2",
      title: "Strip out character",
      task: 'Rewrite each Behaviour line so it names only what was observable. No motive, no "lazy", "careless" or "didn\'t care".',
    },
    {
      day: "Day 3",
      title: "Make the impact concrete",
      task: 'Replace every vague impact ("it wasn\'t great") with something specific: time lost, confusion caused, trust affected.',
    },
    {
      day: "Day 4",
      title: "Write it in 60 seconds",
      task: "Draft a full SBI response you could say aloud in about a minute, then cut it by a third without losing the point.",
    },
    {
      day: "Day 5",
      title: "Say it two ways",
      task: "Say it once as visible structure and once as plain human speech. Keep the version that sounds like you.",
    },
    {
      day: "Day 6",
      title: "Use it for praise",
      task: "Give one real piece of positive feedback with SBI. Name the exact behaviour and the effect it had.",
    },
    {
      day: "Day 7",
      title: "Use it live, then calibrate",
      task: "In a real conversation, deliver one SBI, pause, and check whether the person is clearer. Adapt if they're not.",
    },
  ],
  checklist: [
    "Did I use SBI to serve the listener, not to sound polished?",
    "Was the situation specific enough that they knew the exact moment?",
    "Did I describe observable behaviour, not character or motive?",
    "Was the impact concrete rather than vague?",
    "Did I pause and adapt when the listener needed something else?",
    "Did I preserve their autonomy and dignity?",
  ],
  example: {
    without: [
      'You: "You were really unprofessional in that meeting."',
      'Colleague: "Unprofessional how? That\'s a bit harsh."',
      "You: \"I don't know, you just weren't on it. It wasn't great.\"",
      'Colleague: "Right..." (goes quiet, defensive)',
      "Why it's weak:",
      'judges character ("unprofessional", "not on it") instead of naming behaviour',
      "gives no specific situation, so they can't picture the moment",
      "leaves the impact vague, so there's nothing to act on",
      "puts them on the defensive with no way back",
    ],
    with: [
      'You: "Can I flag one thing from the client call this morning?"',
      'Colleague: "Sure."',
      'You: "When they asked about the delay, you answered before Priya finished her point. The client looked unsure which of you to follow."',
      'Colleague: "Ah, I didn\'t realise I cut across her."',
      'You: "Yeah. No drama, I just wanted you to see the effect."',
      "Colleague: \"That's fair. I get keen and jump in. I'll watch it.\"",
      'You: "Honestly the answer itself was good. It was only the timing."',
      'Colleague: "Got it. I\'ll let people land their point first."',
      "Why this works:",
      "names the exact situation, so the moment is clear",
      "describes observable behaviour, not character",
      "states a concrete impact and then stops",
      "adds warmth and a note of praise, so it lands as help, not attack",
    ],
    note: "The poor version judges the person. The strong version describes a moment. Same concern, opposite reception.",
  },
  influencePayoff: {
    feeling:
      '"They told me exactly what happened and why it mattered, not what\'s wrong with me."',
    principle:
      "People stay open to feedback when it describes their behaviour rather than their character. You can change what you did far more easily than who you are.",
    gains: [
      "Clarity: the person knows the exact moment you mean",
      "Lower defensiveness, because you name behaviour, not motive",
      "A concrete impact they can actually act on",
      "Feedback that is fair and hard to argue with",
      "Praise that feels earned rather than like flattery",
      "Faster conversations, with less hedging and backpedalling",
      "Trust, because you are specific instead of sweeping",
    ],
    whyMostFail: [
      'They slide from behaviour into character judgement: "you were careless" instead of "the figures weren\'t checked".',
      "They leave the impact vague, so there's nothing to change.",
      "They recite the framework aloud and sound rehearsed instead of human.",
      "They keep talking past the point instead of pausing to listen.",
    ],
  },
  fieldTip: {
    headline: "Describe the moment, not the person.",
    body: "Use SBI to organise your thinking before you speak, then talk like a person. The other person should feel clarity, not choreography. The moment you announce the steps out loud, it stops being feedback and starts being a performance.",
    example:
      '"In yesterday\'s review, the update ran to fifteen minutes. People started drifting before the decision."',
    dont: 'Don\'t say: "Using the SBI model, the situation was... the behaviour was... the impact was..."',
    do: "Do keep the structure invisible. Name the moment, the behaviour and the effect, then stop and listen.",
  },
  method: [
    {
      step: "1",
      title: "Decide if it's the right move",
      body: "Choose the framework only if it serves the moment. If emotion is high or the person needs to be heard first, validate before you structure anything. SBI is for feedback, not for defusing distress.",
    },
    {
      step: "2",
      title: "Name the Situation",
      body: 'Pin the exact moment so the person can picture it. "Lately" or "in meetings" is too loose. A single, specific occasion is what makes the rest land.',
      examples: [
        { label: "Too vague", text: '"Lately, in meetings..."' },
        { label: "Specific", text: '"In this morning\'s client call..."' },
      ],
    },
    {
      step: "3",
      title: "Describe the Behaviour",
      body: 'Say what was observable, what a camera would have caught, not the motive or character behind it. Watch for trap words like "always", "never", "lazy", "careless" or "bad attitude": they signal you\'ve drifted from behaviour into judgement.',
      examples: [
        { label: "Character", text: '"You were dismissive."' },
        { label: "Behaviour", text: '"You answered before she\'d finished."' },
      ],
    },
    {
      step: "4",
      title: "State the Impact",
      body: "Name the concrete effect (on the work, the client, the team or you) and then stop. The silence after the impact is where the person starts to respond.",
      examples: [
        { label: "Vague", text: '"It wasn\'t great."' },
        {
          label: "Concrete",
          text: '"The client looked unsure who to follow."',
        },
      ],
    },
    {
      step: "5",
      title: "Check and adapt",
      body: "Watch whether the listener becomes clearer, more engaged and more able to act. If they seem confused or resistant, summarise and invite correction rather than pushing the structure harder.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Judging character, not behaviour",
      soundsLike: '"You were careless in that report."',
      better: '"The report went out with last month\'s figures."',
    },
    {
      mistake: "Assuming motive",
      soundsLike: '"You clearly didn\'t care about the deadline."',
      better: '"The draft came in two days after the deadline."',
    },
    {
      mistake: "Leaving the impact vague",
      soundsLike: '"It just wasn\'t great."',
      better: '"It meant we had to re-send the whole thing to the client."',
    },
    {
      mistake: "Announcing the framework out loud",
      soundsLike: '"Using the SBI model: situation, behaviour, impact..."',
      better:
        '"In this morning\'s call, you cut in early, and the client hesitated."',
    },
    {
      mistake: "Over-explaining after the point has landed",
      soundsLike: "adding three more examples to prove you're right",
      better: '"That\'s it, really. I wanted you to see the effect."',
    },
    {
      mistake: "Structuring when emotion needs listening first",
      soundsLike: "delivering tidy feedback to someone who's clearly upset",
      better:
        '"That sounded like a hard week. Do you want to talk about it before I add anything?"',
    },
  ],
  recoveryPhrases: [
    "That came out like a performance review. Let me just say what I noticed.",
    "I'm talking about one moment, not about you as a person.",
    "I might be missing context. What was going on from your side?",
    "Is that how it looked to you?",
    "Let me try that again without the lecture.",
    "I think I described what I assumed, not what I actually saw. Let me stick to what happened.",
    "That came out more critical than I meant. The point is small.",
  ],
  bestRecoveryLine:
    "That came out like a performance review. Let me just say what I noticed.",
  chains: [
    {
      label: "Feedback then check",
      sequence: "SBI → Summary check",
      example: [
        '"In the call, you answered before Priya finished. The client looked unsure."',
        '"What\'s your read on that?"',
        '"So we\'re agreed the answer was fine, it was the timing, have I got that right?"',
      ],
    },
    {
      label: "Feedback then ask",
      sequence: "SBI → Clean request",
      example: [
        '"The demo overran again and ate into the client\'s questions."',
        '"Could you cap it at ten minutes next sprint and leave the rest for Q&A?"',
      ],
    },
    {
      label: "Feedback then hand back control",
      sequence: "SBI → Autonomy release",
      example: [
        '"When the deadline moved, I heard it from the client, not you. It caught me flat-footed."',
        '"How you keep me looped in is your call. I just need to not be the last to know."',
      ],
    },
    {
      label: "Settle emotion first",
      sequence: "Validation → SBI",
      example: [
        '"That sounded like a genuinely rough week."',
        "\"When you're ready: one thing from the review I'd like to name.\"",
        '"In the feedback round, the tone came across as personal, and a couple of people went quiet."',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC018",
      reason:
        "Specific appreciation: both name a specific behaviour and its effect. Reach for Specific appreciation when the feedback is purely positive and needs no full situation-behaviour-impact scaffolding.",
    },
    {
      id: "TC005",
      reason:
        "Validation without agreement: when emotion is high, validate first and delay the structure. Use SBI only once the person feels heard.",
    },
    {
      id: "TC013",
      reason:
        "Clean request: SBI names what happened and why it mattered. Clean request states what you'd like next. Pair them: feedback, then a specific ask.",
    },
    {
      id: "TC011",
      reason:
        "Summary check: after SBI, confirm the person heard the same point you meant before you move on.",
    },
    {
      id: "TC021",
      reason:
        "Autonomy release: after the feedback lands, hand control back so SBI doesn't tip into a verdict.",
    },
    {
      id: "TC037",
      reason:
        "Double-sided reflection: use it when the situation holds two competing truths at once, rather than one behaviour to name.",
    },
  ],
};
