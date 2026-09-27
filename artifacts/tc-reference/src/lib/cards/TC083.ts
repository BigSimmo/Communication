import type { CardData } from "../card-types";

export const TC083: CardData = {
  pdfUrl: "cards/TC083/TC083_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC083/TC083_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC083/TC083_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC083/TC083_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC083/TC083_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC083/TC083_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC083/TC083_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC083/TC083_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC083",
  whyItWorks:
    'Asking what would make it workable is a collaborative feasibility question for moments when a request, plan, feedback point, or boundary meets friction. Instead of arguing for your version, you invite the other person to name the conditions, limits, changes, or supports that would make the next step viable. It works because it treats resistance as information about real constraints (timing, risk, workload, fairness, trust, authority, emotional load, or missing support) rather than as obstruction. Vague pushback becomes concrete conditions you can actually work with, and the person keeps the agency to say "nothing" or "not now."',
  whatItIsNot: [
    'Not a disguised way to ask, "How can I make you say yes?"',
    "Not a replacement for accepting a clear boundary or a final no.",
    "Not a bargaining script to reduce someone's safety, dignity, pay, time, rest, privacy, or consent.",
    "Not a way to make the other person solve your poor planning for you.",
    "Not a pass to keep asking after repeated refusal.",
  ],
  overview: {
    coreFormula: [
      'Acknowledge the friction: "I hear that the current version doesn\'t work."',
      'Ask for workable conditions: "What would make it workable?"',
      "Protect autonomy: \"And if it's not workable at all, that's useful to know too.\"",
      'Agree the next small step: "Let\'s use that as the constraint and adjust from there."',
    ],
    minimumViableMove:
      'Validate the friction, then ask one question: "Got it. What would make this workable, if anything?", and stay quiet while they think.',
    impact: "Medium",
    difficulty: "Medium",
    misuse:
      "The move becomes pressure when the speaker is not genuinely willing to accept the answer: asking what would make it workable and then arguing teaches the other person the question was not real.",
    bestFor: [
      "Someone is hesitant, vague, overloaded, or objecting but still engaged.",
      "A plan is blocked by logistics, risk, timing, scope, fairness, confidence, or missing context.",
      "You need to know what would make a request feasible without guessing.",
      "A negotiation needs mutual conditions, not positional argument.",
      "You are genuinely willing to change your plan if the conditions are reasonable.",
    ],
  },
  notFor: [
    "The person has given a clear final no or asked to stop discussing it.",
    "Safety, legal, consent, privacy, or ethical boundaries are at stake.",
    "You hold power over the person and the question could land as pressure.",
    "They are emotionally flooded and need validation, time, or repair first.",
    "You are not actually willing to adapt and only want them to concede.",
  ],
  phraseBank: [
    {
      id: "quick-openers",
      label: "Quick openers",
      tag: "Starter one-liners",
      tone: "Quick",
      phrases: [
        "What would make this workable, if anything?",
        "Got it. What would make this work for you?",
        "What would need to change for this to work?",
        "What's the one thing that would make this easier?",
        "Is there a version of this that works?",
        "What would help here?",
        "What would make this doable?",
        "So what would this need to look like to work?",
      ],
    },
    {
      id: "warm-validation",
      label: "Warm & validating",
      tag: "Acknowledge before you ask",
      tone: "Warm",
      phrases: [
        "I hear that this version doesn't work. What would?",
        "That makes sense. What would make it feel realistic?",
        "I get why that's hard. What would need to change?",
        "Fair concern. What would make a next step feel okay?",
        "I don't want to make this harder than it needs to be. What would help?",
        "You know your side of this better than I do. What would make it workable?",
        "That's a fair worry. What would need to be true for this to work?",
      ],
    },
    {
      id: "professional",
      label: "Work & planning",
      tag: "Workload, deadlines, projects",
      tone: "Professional",
      phrases: [
        "What would need to change for this to be realistic on your side?",
        "What would need to change for this to work with your current workload?",
        "What constraints would we need to solve before this becomes workable?",
        "What condition would make this option worth testing?",
        "What would need to be true for this to work on your end?",
        "Is there a scope that would make this workable, or is the plan itself the problem?",
        "What would make this realistic with the time we've actually got?",
      ],
    },
    {
      id: "clarify-narrow",
      label: "Clarify & narrow",
      tag: "When the resistance is vague",
      tone: "Direct",
      phrases: [
        "Which part is least workable: timing, scope, risk, or something else?",
        "Is it the timing, or is it something bigger?",
        "What's the main obstacle here?",
        "If one thing changed, what would it be?",
        "Is there one constraint that matters most?",
        'Is this a "not like this," or a "not at all"?',
      ],
    },
    {
      id: "boundary-autonomy",
      label: "Boundary & autonomy",
      tag: 'Make "no" a real option',
      tone: "Repair",
      phrases: [
        "If the answer is no, I'll respect that. Is there any version that would work?",
        "No pressure to solve it now. What would need to be true for this to work?",
        "I'll take a no. Is there a version that would feel okay, or should we drop it?",
        "You don't have to make this work. I just want to understand what would.",
        "If there's no workable version, that's useful to know too.",
        "Given what happened, what would make a reset workable from here?",
      ],
    },
    {
      id: "high-pressure",
      label: "Under pressure",
      tag: "High stakes, slow the tempo",
      tone: "High-stakes",
      phrases: [
        "Before we force a decision, what would make this practical enough to consider?",
        "I hear the concern. What would make a next step feel fair and workable?",
        "Let's not lock this in yet. What would need to change first?",
        "What would make this safe enough to try?",
        "I'd rather get this right than rushed. What would make it workable?",
      ],
    },
    {
      id: "after-the-answer",
      label: "After they answer",
      tag: "Responding to a condition or a no",
      tone: "Direct",
      phrases: [
        "That's useful. Let me see if I can work within that.",
        "Those are concrete. I can commit to some of them and I'll be honest about the rest.",
        "Thanks for being clear. I won't push this version.",
        "That helps. Let me check whether that works on my side.",
        "If I can't meet that, I won't pretend the plan still works.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "They're emotionally activated",
      action: "Validate first. Don't ask for conditions yet.",
      phrase: "I may be moving too fast. Let me understand the concern first.",
    },
    {
      condition: "Their resistance is vague",
      action: "Ask which part is least workable to narrow it down.",
      phrase:
        "Which part is least workable: timing, scope, risk, or something else?",
    },
    {
      condition: "They name a specific condition",
      action: "Reflect it back, decide whether it can be met, and confirm.",
      phrase: "So if that changed, this could work. Let me check I can do it.",
    },
    {
      condition: "They give several conditions",
      action:
        "Ask which one matters most rather than solving everything at once.",
      phrase: "Which of those matters most to get right?",
    },
    {
      condition: "The condition is impossible",
      action: "Say so cleanly and ask whether another version exists.",
      phrase: "I can't do that one. Is there another version that would work?",
    },
    {
      condition: "They say no version works",
      action: "Accept the no and stop negotiating.",
      phrase: "Thanks for being clear. I won't push this.",
    },
    {
      condition: "You feel pressure creeping into your own tone",
      action: "Use a recovery phrase and release autonomy.",
      phrase: "I may be pushing too hard. I'll step back.",
    },
  ],
  ladder: [
    {
      weak: '"Why not?"',
      better: '"What\'s the main obstacle?"',
      best: '"I hear this version isn\'t easy. What would make it workable, if anything?"',
    },
    {
      weak: '"What do you want from me then?"',
      better: '"What would help?"',
      best: '"What would need to change for this to feel realistic and fair on your side?"',
    },
    {
      weak: '"Can you just make it work?"',
      better: '"Could a smaller version work?"',
      best: '"Is there a smaller or different version that would work, or is this a no?"',
    },
    {
      weak: '"So what\'s your counteroffer?"',
      better: '"What would work for you?"',
      best: '"No pressure to solve it instantly. What would make the next step workable from your side?"',
    },
  ],
  scenarios: [
    {
      situation: "Workload conflict",
      move: "Acknowledge their capacity and ask for realistic conditions.",
      phrase:
        '"What would need to change for this to be realistic with your current workload?"',
    },
    {
      situation: "Scheduling friction",
      move: "Separate the commitment from the timing.",
      phrase:
        '"Is there a time frame that would make this workable, or is the plan not workable?"',
    },
    {
      situation: "Boundary conversation",
      move: "Respect the boundary first, then ask lightly.",
      phrase:
        '"I\'ll respect a no. Is there any version that would feel okay, or should we drop it?"',
    },
    {
      situation: "Team disagreement",
      move: "Move from defended positions to shared constraints.",
      phrase:
        '"What condition would make this option acceptable enough to test?"',
    },
    {
      situation: "Family logistics",
      move: "Make the invisible burden visible before deciding.",
      phrase:
        '"What would make the weekend plan manageable instead of stressful?"',
    },
    {
      situation: "Repair after a miss",
      move: "Ask for the conditions that would rebuild trust.",
      phrase:
        '"Given what happened, what would make a reset workable from here?"',
    },
  ],
  calibration: {
    working: [
      "They give specific conditions instead of a flat no.",
      "They pause and genuinely think about feasibility.",
      "They soften and become more concrete.",
      "They start problem-solving alongside you.",
      "They sound relieved that declining is allowed.",
      "The plan starts to take a realistic shape.",
    ],
    adjust: [
      'They repeat "no" or close down: the boundary may be final, so release the ask.',
      "They sound irritated: the question may feel like pressure, so name it and step back.",
      "They give impossible conditions. They may be saying no indirectly. Check whether any version exists.",
      "They ask for time: offer a low-pressure follow-up point rather than pushing now.",
      "You're filling the silence with your own suggestions: stop and let them answer.",
      "You notice you only want a yes. You're no longer asking, you're pushing.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the resistance",
      task: "Pick a recent moment someone pushed back on you. Write the hesitation in their own words: the actual sentence they said, or the delay you noticed.",
    },
    {
      day: "Day 2",
      title: "Write the validation",
      task: 'Draft one sentence that names the friction without arguing with it, e.g. "That makes sense, last time it ran over."',
    },
    {
      day: "Day 3",
      title: "Draft the question",
      task: 'Write one short workability question with an autonomy release built in, using "if anything" or "or is this a no?"',
    },
    {
      day: "Day 4",
      title: "Rehearse the silence",
      task: "Say your question aloud, then stay quiet for a slow three seconds. Notice the urge to rescue the pause with a suggestion, and don't.",
    },
    {
      day: "Day 5",
      title: "Sort the answers",
      task: "Write five possible replies and label each: workable condition, hard boundary, missing information, emotional concern, or final no.",
    },
    {
      day: "Day 6",
      title: "Respond without defending",
      task: "Practise replying to one workable condition and one flat no. Adapt the plan for the first. Accept the second cleanly, no argument.",
    },
    {
      day: "Day 7",
      title: "Run it live",
      task: "Use the move once in a real professional, social, or family situation. Afterwards score it: Did I validate? Ask one clear question? Allow no? Avoid defending?",
    },
  ],
  checklist: [
    "Did I treat resistance as information, not disobedience?",
    "Did I validate before asking for workability when emotion was high?",
    "Was my question short enough to answer?",
    'Did I add "if anything" or another autonomy release when it mattered?',
    "Did I accept a clear no without arguing?",
    "Did I act on the condition they named, or did I quietly ignore it?",
  ],
  example: {
    without: [
      "A: Can you stay late and finish this tonight?",
      "B: I really can't tonight.",
      "A: Why not? Everyone else is busy too.",
      "B: Because I said I can't.",
      "A: I just need you to be flexible.",
      "B: This is exactly why I avoid these conversations.",
    ],
    with: [
      "A: I wanted to ask whether you could take the lead on the client summary.",
      "B: I'm hesitant. Last time it expanded way beyond the original scope.",
      "A: That makes sense. I don't want to repeat that. What would make it workable this time, if anything?",
      "B: A hard two-hour cap, the data already cleaned, and someone else handling edits after draft one.",
      "A: Those are concrete. I can commit to the two-hour cap and cleaned data. I'll find someone for the edits, and if I can't, I won't ask you to own it.",
      "B: That version I could consider.",
    ],
    note: 'The poor version defends the plan and treats "no" as something to argue with, so it ends in withdrawal. The advanced version validates the friction, asks one workable-conditions question, then builds the next step out of the conditions the other person names.',
  },
  influencePayoff: {
    feeling: '"They actually want this to work for me, not just to get a yes."',
    principle:
      "The payoff is clarity, not pressure. When someone resists, most people defend their plan, cut the ask blindly, or abandon the conversation. This move opens a third route: discover what the other person would need for the plan to become viable.",
    gains: [
      "Reduces defensiveness by treating resistance as useful data.",
      "Surfaces constraints that may be solvable: timing, information, risk, authority, fairness, or workload.",
      "Protects trust by making decline a legitimate outcome.",
      "Builds better agreements from stated conditions rather than hidden assumptions.",
      "Prevents false yeses by making workability explicit before commitment.",
      "Turns an impasse into a jointly designed next step.",
    ],
    whyMostFail: [
      "The move becomes pressure when you aren't genuinely willing to accept the answer.",
      "People defend their plan the moment they hear a condition they don't like.",
      "They ask, then answer their own question before the other person can think.",
      "They skip the follow-through after being told exactly what would work.",
    ],
  },
  fieldTip: {
    headline: "Ask once, then actually listen.",
    body: "If you ask what would make it workable and then immediately argue with the answer, you've taught the other person the question wasn't real. The skill is mostly in the pause afterwards, and in believing them when they say nothing would work.",
    example:
      '"What would make this workable, if anything?", then three seconds of silence.',
    dont: "Ask, then talk them out of the very condition they just named.",
    do: "Ask, stay quiet, and build the next step out of what they tell you.",
  },
  method: [
    {
      step: "1",
      title: "Notice the resistance",
      body: 'Listen for hesitation rather than treating pushback as obstruction. Cues include "I\'m not sure," "that\'s hard," "I don\'t think we can," "it depends," or repeated delay. That friction is the signal to switch from persuading to discovering.',
    },
    {
      step: "2",
      title: "Validate the friction lightly",
      body: "Name or acknowledge the constraint without arguing with it. A single sentence is enough. It lowers defensiveness so they can think with you instead of bracing against you.",
      examples: [
        {
          label: "Say",
          text: '"That makes sense. Last time it ran way over."',
        },
        { label: "Avoid", text: '"That shouldn\'t really be a problem."' },
      ],
    },
    {
      step: "3",
      title: "Ask one workability question",
      body: 'Keep it short and open, and ask only one. "What would make this workable?" lands far better than "What do I have to do to get you on board?"',
      examples: [
        {
          label: "Minimum viable",
          text: '"Got it. What would make this workable, if anything?"',
        },
      ],
    },
    {
      step: "4",
      title: "Add autonomy language when stakes or power are high",
      body: "When you hold more power, or the stakes are high, attach explicit permission to decline so the question can't tip into pressure.",
      examples: [
        {
          label: "Release",
          text: '"If the answer is no, I\'ll respect that."',
        },
      ],
    },
    {
      step: "5",
      title: "Stop talking",
      body: "Let them think. Don't fill the silence with your own suggestions or a softer version of the ask. Most of the technique is in tolerating a slow three-second pause without rescuing it.",
    },
    {
      step: "6",
      title: "Sort the answer into four buckets",
      body: "What comes back is usually a workable condition, a hard boundary, a piece of missing information, or an emotional concern. Naming which one you've got tells you what to do next.",
    },
    {
      step: "7",
      title: "Respond to the bucket, then confirm the next step",
      body: "Adapt the plan for a workable condition, clarify for missing information, validate further for an emotional concern, and release the ask for a hard boundary. Only lock in the next step once the conditions are genuinely understood.",
    },
  ],
  liveThreadClues: [
    '"I\'m not sure..."',
    '"That\'s hard..."',
    '"I don\'t think we can..."',
    '"It depends..."',
    '"It\'s complicated..."',
    '"Maybe later..."',
    '"We\'ll see..."',
    'Repeated delay or "I\'ll get to it"',
  ],
  commonMistakes: [
    {
      mistake: "Asking before the concern has been heard",
      soundsLike:
        '"What would make this work?" Cut in before they\'ve finished explaining the problem.',
      better:
        '"That sounds frustrating. Tell me the part that\'s hardest, then we can look at what would help."',
    },
    {
      mistake: "Answering your own question",
      soundsLike:
        '"What would make this workable? Probably just pushing the deadline, right?"',
      better: "Ask, then stop talking for three seconds and let them answer.",
    },
    {
      mistake: "Arguing with the condition they give",
      soundsLike: '"That shouldn\'t really be a problem."',
      better:
        '"Okay, that\'s the constraint. Let me see what I can do with it."',
    },
    {
      mistake: "Treating a boundary as negotiable",
      soundsLike: '"But what would make it workable?", after a clear no.',
      better: '"Understood. I\'ll leave it there."',
    },
    {
      mistake: "Skipping the follow-through",
      soundsLike:
        "They tell you exactly what would work, and then nothing changes.",
      better:
        "Name the condition back and actually build the next step around it.",
    },
    {
      mistake: "Making the question too broad",
      soundsLike: '"What would make everything work?"',
      better: '"Is it mainly the timing, or something else?"',
    },
    {
      mistake: "Using it to offload your own planning",
      soundsLike:
        "Asking someone with less power to solve a problem you created.",
      better:
        "Sort out what's yours to sort first, then ask about the genuinely shared constraint.",
    },
  ],
  recoveryPhrases: [
    "I may be pushing too hard. I'll step back.",
    "That sounded like I was trying to talk you into it. That wasn't my intention.",
    "If the answer is no, I can accept that.",
    "Let me slow down and understand the concern first.",
    "I don't want to make this your problem to solve.",
    "Thanks for naming the condition. If I can't meet it, I won't pretend the plan works.",
    "I asked too broadly. Let me narrow it: is timing the main issue, or something else?",
    "I hear that there isn't a workable version right now. I'll work from that.",
  ],
  bestRecoveryLine:
    "I hear that there isn't a workable version right now. I'll work from that.",
  chains: [
    {
      label: "Validation → Workability → Autonomy release",
      sequence:
        "Validate the concern, ask what would make it workable, then affirm they can still decline.",
      example: [
        '"That\'s a fair worry."',
        '"What would make a next step workable, if anything?"',
        '"And if nothing does, that\'s a real answer too."',
      ],
    },
    {
      label: "Clean request → Workability → Low-friction ask",
      sequence:
        "State the request clearly, discover the conditions behind the resistance, then offer the smallest viable version.",
      example: [
        '"Could you own the client summary?"',
        '"What would make that workable?"',
        '"Then how about just the first draft, capped at an hour?"',
      ],
    },
    {
      label: "NVC/OFNR → Workability → Two-option question",
      sequence:
        "Name observation, feeling, need and request without blame, ask for workable conditions, then offer two respectful options.",
      example: [
        '"When the scope grew, I felt stuck, because I need a predictable load."',
        '"What would make this workable for you?"',
        '"Would a capped version or a later start suit better?"',
      ],
    },
    {
      label: "SBI → Workability → Repair agreement",
      sequence:
        "Describe the situation, behaviour and impact, ask what would make the new process workable, then agree the repair.",
      example: [
        '"On Tuesday the draft went out unreviewed and the client noticed."',
        '"What would make the review step workable next time?"',
        '"Let\'s lock that in as the new process."',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC014",
      reason:
        "Validate the concern comes first when emotion is high: recognise the worry before asking for conditions. Use TC083 once they can think with you and you need constraints, not just acknowledgement.",
    },
    {
      id: "TC013",
      reason:
        "Clean request makes the clear ask. Use TC083 after that ask hits friction and you need the other person to name what would make it viable.",
    },
    {
      id: "TC020",
      reason:
        "Low-friction ask offers the smallest version when you already know what lowers the barrier. Use TC083 when you don't yet know the barrier and need them to name it.",
    },
    {
      id: "TC021",
      reason:
        "Autonomy release gives explicit freedom to decline. Attach it to TC083, especially under power or high stakes, so the question doesn't tip into pressure.",
    },
    {
      id: "TC089",
      reason:
        "Risk Reduction mitigates a risk you already understand. Use TC083 first, when the blocking risk is still unclear and you need the other person to surface it.",
    },
    {
      id: "TC034",
      reason:
        "Two-option questions work once two respectful options are clear. Discover the real constraint with TC083 first, then convert to TC034 if options emerge.",
    },
  ],
};
