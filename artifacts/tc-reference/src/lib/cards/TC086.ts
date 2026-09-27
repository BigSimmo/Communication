import type { CardData } from "../card-types";

export const TC086: CardData = {
  pdfUrl: "cards/TC086/TC086_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC086/TC086_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC086/TC086_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC086/TC086_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC086/TC086_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC086/TC086_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC086/TC086_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC086/TC086_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC086",
  whyItWorks:
    "LEAP (Listen, Empathise, Agree, Partner) is a relationship-first sequence for moments when direct persuasion, correction, or advice would only harden resistance. Instead of the usual correct, explain, pressure, argue, you go the other way: enter their world, show that their experience makes sense from their side, name the one part you can honestly agree with, then invite a small next step that keeps their choice intact. It works by lowering threat: people who feel accurately heard and not shamed have far more room to think.",
  whatItIsNot: [
    "It is not agreement with every claim. You can empathise with a fear without endorsing a false belief, or agree that someone wants freedom without agreeing that every choice is safe.",
    'It is not a debate trick. If the hidden agenda is "pretend to listen so I can get my way," it turns manipulative and usually fails.',
    "It is not therapy, diagnosis, or crisis intervention. Acute danger, abuse, or clinical need calls for professional or emergency support, not a conversation framework.",
    'It is not unlimited accommodation. Partnership can still hold a boundary: "I want to respect your choice, and I also cannot ignore a safety risk."',
    "It is not a way to make someone accept your reality. It builds enough trust that both of you can weigh a next step without humiliation or force.",
  ],
  overview: {
    coreFormula: [
      'Listen: "I want to understand this from your side. What\'s the part people keep missing?"',
      'Empathise: "Given that, I can see why this feels risky / insulting / exhausting."',
      'Agree: "I agree you should have a real say in what happens next."',
      'Partner: "Can we find one step that protects that and still handles the concern?"',
      'Compact: "From your side, [their view]. I can see why [feeling] is there. I agree [true point]. Would you be open to [small next step]?"',
    ],
    minimumViableMove:
      'Say "I want to understand your side before I respond. What matters most to you here?", reflect it back, name one honest thing you agree with, then ask "Would you be open to working out one next step together?"',
    impact: "Medium",
    difficulty: "Hard",
    misuse:
      "LEAP fails when it becomes strategic empathy: the sequence used to hide pressure, sales intent, or coercion. If the empathy is not real, or you rush to Partner before any honest agreement has landed, the person feels managed rather than heard and defends their position harder.",
    bestFor: [
      "Someone rejects advice, help, feedback, or a proposed plan",
      "A disagreement has become personal or identity-protective",
      'They say "you don\'t understand," "you\'re not listening," or "stop trying to fix me"',
      "The factual argument has already been made and is not landing",
      "You need to preserve dignity while still moving towards action",
      "The other person has a strong need for control, safety, respect, or status",
      "Family, care, management, customer, or coaching talks where trust is weak",
    ],
  },
  notFor: [
    "Immediate safety risk that requires emergency action",
    "You are using the method to hide pressure, sales intent, or coercion",
    "You cannot find any honest point of agreement",
    "You are too activated to listen without contempt",
    "The situation needs formal investigation, legal process, or medical judgement",
    "The other person has clearly withdrawn consent to keep talking",
  ],
  phraseBank: [
    {
      id: "listen-openers",
      label: "Listen openers",
      tag: "Open the door",
      tone: "Quick",
      phrases: [
        "I want to get your version before I respond.",
        "What's the part I'm not understanding yet?",
        "Tell me what this looks like from your side.",
        "What matters most to you here?",
        "I'm going to slow down and listen first.",
        "Can I say your side back before I respond?",
        "What do you think people keep getting wrong?",
      ],
    },
    {
      id: "empathise",
      label: "Empathise",
      tag: "Name the human logic",
      tone: "Warm",
      phrases: [
        "That sounds exhausting to keep defending.",
        "I can see why that would feel like people aren't respecting you.",
        "If I believed that was happening, I'd be guarded too.",
        "It makes sense that you'd want more control here.",
        "I hear how much this matters to you.",
        "If it feels like people are deciding for you, I get why you'd push back.",
      ],
    },
    {
      id: "agree",
      label: "Agree",
      tag: "Honest common ground",
      tone: "Warm",
      phrases: [
        "I agree that you should have a say in what happens next.",
        "I agree that being talked over isn't okay.",
        "I agree that we need a plan that doesn't make this worse.",
        "I agree that trust has to come before any bigger step.",
        "I agree that the next step needs to feel workable, not forced.",
        "I agree you shouldn't feel managed by me.",
      ],
    },
    {
      id: "partner",
      label: "Partner",
      tag: "Invite a shared step",
      tone: "Direct",
      phrases: [
        "Would you be willing to work out one step together?",
        "What would make this feel less like pressure and more like a choice?",
        "Can we find an option that protects your concern and handles mine?",
        "What's the smallest next step you wouldn't hate?",
        "Would you prefer option A, option B, or a different idea altogether?",
        "What would actually feel helpful rather than controlling?",
      ],
    },
    {
      id: "professional",
      label: "Work and meetings",
      tag: "Professional context",
      tone: "Professional",
      phrases: [
        "Before I propose anything, I want to understand the constraint you're protecting.",
        "I agree any plan has to respect that constraint. Can we design around it?",
        "I can see why that would feel risky for the team.",
        "It sounds like we're aligned on the timeline. Can we work through the budget?",
        "Can we design around that constraint together?",
        "I'd rather understand your objection properly than argue past it.",
      ],
    },
    {
      id: "pressure-safety",
      label: "High pressure and safety",
      tag: "Hold the line, keep it safe",
      tone: "High-stakes",
      phrases: [
        "I'm not here to corner you. I do need us to keep this safe.",
        "I can pause the argument. I can't ignore the risk.",
        "We don't have to settle the whole issue now, only the next safe step.",
        "I want to respect your choice, and I also can't ignore immediate safety.",
        "What's the least intrusive safe step we can both live with?",
        "I want to do this with you, not to you.",
      ],
    },
    {
      id: "reset",
      label: "Reset mid-conversation",
      tag: "Soften and re-open",
      tone: "Repair",
      phrases: [
        "I may be missing your side. What's the main concern from where you sit?",
        "This is landing badly. I want to slow down.",
        "I'm not trying to win. I want to understand why this feels so big.",
        "Let me be more precise about what I actually agree with.",
        "I pushed too fast. Can we reset and start with what you want protected?",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "Immediate danger or urgent safety risk",
      action:
        "Prioritise safety, professional support, or escalation. Stay respectful, but don't rely on LEAP as the sole intervention.",
      phrase:
        "I need us to keep everyone safe first. We can talk this through properly after.",
    },
    {
      condition: "They mainly want to be heard, not moved",
      action:
        "Stay in Listen and Empathise. Hold off on any Partner step until they settle.",
      phrase:
        "I'm not going to push anything. I just want to understand this properly.",
    },
    {
      condition: "There's active resistance, distrust, or refusal",
      action: "Run the full LEAP sequence, one step at a time.",
      phrase: "I want your side before I respond. What keeps getting missed?",
    },
    {
      condition: "You can't find an honest point of agreement",
      action:
        "Don't fake it. Name the shared aim instead of pretending to agree.",
      phrase:
        "I may not agree yet, but I do want to understand what you want protected.",
    },
    {
      condition: "They're not ready for a next step",
      action:
        "Ask what would make a future conversation feel safer or more workable.",
      phrase: "What would make talking about this feel less like pressure?",
    },
    {
      condition: "The Partner step doesn't protect autonomy and safety",
      action: "Shrink the step, add options, or set a clear boundary.",
      phrase:
        "What's the smallest version of this you'd actually be willing to try?",
    },
  ],
  ladder: [
    {
      weak: "\"You're wrong, but I'm listening.\"",
      better: '"I hear that you don\'t see it that way. What am I missing?"',
      best: '"From your side, this feels like people are deciding for you. I can see why that would make you resist. I agree you should have a say. Can we find one step that keeps your choice intact and still handles the concern?"',
    },
    {
      weak: '"I agree, so will you do what I asked?"',
      better: '"I agree the current plan feels too heavy. Could we shrink it?"',
      best: "\"I agree the current plan asks too much at once. What's the smallest version you'd be willing to try for one week?\"",
    },
    {
      weak: '"Calm down. I\'m trying to help."',
      better: '"This is landing badly. I want to slow down."',
      best: '"I pushed too fast. I can see why that felt like pressure. I agree we shouldn\'t make a rushed decision. Could we reset and start with what you want protected?"',
    },
  ],
  scenarios: [
    {
      situation: "Family refuses support",
      move: "Listen for what feels humiliating or controlling. Protect dignity and choice before any next step.",
      phrase:
        "I agree you should have a say. Could we choose one low-pressure next step together?",
    },
    {
      situation: "Workplace impasse",
      move: "Reflect the constraint they're protecting (competence, fairness, risk) before proposing anything.",
      phrase:
        "I agree the plan has to respect the client risk you're seeing. Can we design around it?",
    },
    {
      situation: "Customer complaint",
      move: "Empathise with the impact, agree on the service standard, then partner on the options.",
      phrase:
        "I agree this should have been clearer. Here are two ways we can make the next step easier.",
    },
    {
      situation: "Friend in a charged personal decision",
      move: "Ask what they want protected, reflect it, then offer to compare the options together.",
      phrase:
        "I agree keeping your independence matters. Want to look at choices that don't take that away?",
    },
    {
      situation: "Digital conflict",
      move: "Slow the thread and reflect before solving, since text reads colder than intended.",
      phrase:
        "I think I missed your main concern. What I'm hearing is... Is that right?",
    },
    {
      situation: "Safety-adjacent conversation",
      move: "Preserve dignity while naming the safety boundary. Don't let LEAP replace proper procedure.",
      phrase:
        "I want your choice involved as much as possible, and I can't ignore immediate safety. Let's pick the least intrusive safe step.",
    },
  ],
  calibration: {
    working: [
      "Their tone slows or softens.",
      "They correct your reflection instead of rejecting the whole conversation.",
      'They say "exactly," "yes," or "that\'s what I mean," and add more detail.',
      "They shift from defending to explaining.",
      "They ask what you think, now that they feel heard.",
      "They start naming conditions instead of refusing everything.",
    ],
    adjust: [
      "They get more rigid after you speak: slow down and re-listen.",
      'They say "you\'re twisting my words": check your reflection against their exact words.',
      "Your agreement sounds too broad or dishonest. Make it smaller and true.",
      "They treat the partnership offer as a trap: return to Empathise and drop the ask.",
      "You notice yourself steering rather than understanding: stop and reset.",
      "They ask to stop, or it escalates towards danger: pause. Safety over persuasion.",
      "You can't stay respectful. Say so and come back to it later.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the signal",
      task: 'Catch one real moment of resistance today (a correction loop, a flat refusal, a "you don\'t get it") and just name it silently. No fixing, only noticing the cue.',
    },
    {
      day: "Day 2",
      title: "One clean Listen question",
      task: "In a low-stakes disagreement, ask a single open question and let the answer breathe. Don't load your rebuttal while they talk.",
    },
    {
      day: "Day 3",
      title: 'Empathise with no "but"',
      task: 'Take a blunt line like "you need to stop this" and write the Empathise sentence, the feeling underneath it, with no "but" attached.',
    },
    {
      day: "Day 4",
      title: "Honest agreement reps",
      task: 'For "everyone\'s against me," "this is pointless," and "you just want control," find one true agreement each that doesn\'t endorse the whole claim.',
    },
    {
      day: "Day 5",
      title: "Shrink the Partner step",
      task: "Take a large demand and rewrite it as the smallest choice-based next step the person could voluntarily accept for a single week.",
    },
    {
      day: "Day 6",
      title: "Four-line LEAP conversion",
      task: "Convert one blunt statement into all four lines (Listen, Empathise, Agree, Partner) then say them aloud until they sound like you, not a script.",
    },
    {
      day: "Day 7",
      title: "Boundary with respect",
      task: "Run a full LEAP in a real conversation, adding a clear limit: \"I want to respect your choice, and I also can't ignore [risk]. What's the least intrusive safe step?\"",
    },
  ],
  checklist: [
    "Did I actually understand their view, or did I only wait to respond?",
    "Did I empathise with the experience without endorsing false or unsafe claims?",
    "Was my agreement specific, honest, and small enough to be true?",
    "Did the Partner step preserve real choice?",
    "Did I name safety boundaries clearly where they were needed?",
    "Did I use LEAP to build respect, not to hide pressure?",
  ],
  example: {
    without: [
      "You: You need to talk to someone about this.",
      "Them: I don't need help. Everyone's overreacting.",
      "You: You're clearly not seeing it. We're worried for a reason.",
      "Them: Stop treating me like I'm broken.",
      "You: I'm only telling you the truth.",
    ],
    with: [
      "You: Can I try to say your side back before I respond?",
      "Them: Fine.",
      "You: You feel like everyone's already decided there's a problem, and now every conversation sounds like a trap. You want people to stop using concern to control you. Is that close?",
      "Them: Yes. That's exactly it.",
      "You: I can see why that makes you suspicious. I agree the next step has to be your choice, not a power struggle. My concern is safety, not winning. Would you pick between two low-pressure options, we call someone you trust together, or we set one check-in for tomorrow?",
      "Them: The check-in is fine.",
    ],
    note: "The poor version argues from facts and worry, so the other person has to defend their autonomy. The advanced version asks permission, reflects their side exactly, separates agreement from endorsement, names the boundary, and offers a choice-based step.",
  },
  influencePayoff: {
    feeling:
      '"You may not agree with me, but you understood what mattered to me."',
    principle:
      "When people feel judged, cornered, or corrected, they defend the position more fiercely. When they feel accurately heard and not shamed, they have more room to think, and cooperation starts to feel safer than the stalemate.",
    gains: [
      "Lower reactance: they don't have to fight you for their autonomy",
      "Better information: listening surfaces the real fear, value, loss, or objection",
      "More face-saving: agreeing on one small true point reduces the need to win",
      "Higher trust: empathy before advice reads as respect, not tactics",
      "More durable action: a step someone chooses is a step they'll actually own",
    ],
    whyMostFail: [
      "They hijack the topic or run the sequence mechanically, so it reads as a script.",
      "They fake agreement instead of finding a smaller point that's genuinely true.",
      "They empathise with the claim rather than the experience underneath it.",
      "They rush to Partner before any real common ground has landed.",
    ],
  },
  fieldTip: {
    headline: "Don't try to make them leap. You LEAP first.",
    body: 'The move isn\'t "I listened, now comply." It\'s "I understand more accurately, I respect what matters, I can name honest common ground, and I\'m inviting a step we can both stand behind." When in doubt, shrink the Partner step: a small voluntary next step beats a large pressured plan.',
    dont: '"I\'ve heard you out, so now can we do it my way?"',
    do: '"You may not agree with me, but did I understand what mattered to you?"',
  },
  method: [
    {
      step: "1",
      title: "Notice the resistance, and stop arguing",
      body: 'Correction loops, repeated objections, rigid certainty, sarcasm, silence, or "you just don\'t get it" are your cue. The instinct is to correct, explain, or push harder. Do the opposite. Drop the rebuttal and shift from proving to understanding.',
    },
    {
      step: "2",
      title: "Listen for their world",
      body: "Ask one clean question and let the answer breathe. Reflect their words back before you add any of your own: accuracy first, agreement later.",
      examples: [
        {
          label: "Open",
          text: "What do you think people keep getting wrong here?",
        },
        { label: "Check", text: "Can I say your side back before I respond?" },
      ],
    },
    {
      step: "3",
      title: "Empathise with the human logic",
      body: "Name the feeling or pressure that makes their position make sense: fear, frustration, exhaustion, pride, or a need for respect or control. Empathise with the experience, not necessarily the claim.",
      examples: [
        { label: "Feeling", text: "That sounds exhausting to keep defending." },
        {
          label: "Not the claim",
          text: '"I can see why that would feel frightening", not "yes, everyone\'s against you."',
        },
      ],
    },
    {
      step: "4",
      title: "Agree on something true",
      body: "Find one honest point of common ground: a value, goal, risk, boundary, or preference. It must be specific and real. A fake agreement gets felt. If you can't find one, name the shared aim instead of pretending.",
    },
    {
      step: "5",
      title: "Partner on the next step",
      body: 'Invite a small step with choice built in. "Would you be open to..." or "What would feel workable?" Never "You need to...". When in doubt, shrink the step.',
      examples: [
        {
          label: "Two options",
          text: "Would you rather we call someone together, or set one check-in for tomorrow?",
        },
      ],
    },
    {
      step: "6",
      title: "Keep boundaries visible",
      body: "If there's real risk, hold partnership and limit together: \"I want to do this with you, not to you, and I also can't ignore a safety risk.\" Respecting autonomy doesn't mean dropping the boundary.",
    },
  ],
  liveThreadClues: [
    '"You don\'t understand."',
    '"You\'re not listening."',
    '"Stop trying to fix me."',
    "Repeated objections or correction loops",
    "Rigid certainty or a flat refusal",
    "Sarcasm, then silence or withdrawal",
  ],
  depthDial: [
    {
      depth: "Full sequence",
      useWhen: "High resistance and you have room to talk it through",
      phrase:
        "I want your side first. I can see why this feels risky. I agree you should have a say. Can we find one step together?",
    },
    {
      depth: "Compact",
      useWhen: "You get one turn and need all four moves in a breath",
      phrase:
        "From your side, [their view]. I get why [feeling] is there. I agree [true point]. Would you be open to [small step]?",
    },
    {
      depth: "Boundary",
      useWhen: "Autonomy matters but a real safety or impact risk is present",
      phrase:
        "I want to respect your choice, and I can't ignore [risk]. Can we find the least intrusive next step that handles both?",
    },
    {
      depth: "Digital",
      useWhen: "Text or chat, where tone is easily misread",
      phrase:
        "I may be missing your side. What I'm hearing is [summary]. I agree [shared point]. Would [small step] be acceptable?",
    },
  ],
  commonMistakes: [
    {
      mistake: "Fake agreement",
      soundsLike: '"I totally agree", when you don\'t.',
      better:
        'Find a smaller point you can honestly stand behind: "I agree this shouldn\'t be rushed."',
    },
    {
      mistake: "Listening to reload",
      soundsLike: "Nodding along while you wait to correct them.",
      better:
        "Drop the rebuttal. Capture their words accurately before you add yours.",
    },
    {
      mistake: "Empathising with the claim, not the experience",
      soundsLike: '"Yes, everyone really is plotting against you."',
      better:
        '"I can see why that would feel frightening": the feeling, not the fact.',
    },
    {
      mistake: 'Adding "but" too soon',
      soundsLike: '"I understand, but here\'s the thing..."',
      better:
        'Two clean sentences: "I understand this matters to you. My concern is X. Can we handle both?"',
    },
    {
      mistake: "Rushing to Partner before Agree",
      soundsLike: "Proposing a plan before any common ground has landed.",
      better: "Earn one honest agreement first, then invite the step.",
    },
    {
      mistake: "Making the Partner step too big",
      soundsLike: '"So you\'ll do the whole programme, then?"',
      better:
        "Ask for the smallest safe next step: a single check-in beats a grand plan.",
    },
    {
      mistake: "Treating clinical risk as a persuasion challenge",
      soundsLike: "Using LEAP to talk someone out of urgent danger.",
      better:
        "If there's danger, abuse, or impaired capacity, escalate to proper support.",
    },
  ],
  recoveryPhrases: [
    "I jumped ahead. Let me go back and understand first.",
    "I made that sound like a decision instead of a conversation.",
    "I pushed too fast. I can see why that felt like pressure.",
    "That sounded scripted. I do mean it. I want to understand your side.",
    "Let me be more precise about what I actually agree with.",
    "I'm not saying I see every fact the same way. I do understand why it feels serious to you.",
    "Fair concern, I do have a hope for a next step, and I don't want to hide that. I also want your choice to be real.",
    "This isn't working right now. I'd rather pause than make it worse. Can we come back when we both have more room?",
  ],
  bestRecoveryLine:
    "I pushed too fast. I can see why that felt like pressure. I agree we shouldn't make a rushed decision. Could we reset and start with what you want protected?",
  chains: [
    {
      label: "Enter a tense conversation",
      sequence: "Warm opening → LEAP → Autonomy release → Small ask",
      example: [
        "Use when the other person walks in expecting pressure.",
        "Open warm, run the full LEAP sequence, hand choice back, then make one small ask.",
      ],
    },
    {
      label: "Rebuild after over-questioning",
      sequence: "Question-stacking restraint → LEAP → Story invitation",
      example: [
        "Use when you've fired too many questions and trust has dipped.",
        "Stop stacking questions, run LEAP to lower the threat, then invite the fuller story.",
      ],
    },
    {
      label: "High emotion, information later",
      sequence: "Emotional labelling → LEAP → Elicit-provide-elicit",
      example: [
        "Use when feeling is high but facts may help once it settles.",
        "Name the emotion, run LEAP, then offer information only once they invite it.",
      ],
    },
    {
      label: "Autonomy plus real risk",
      sequence: "LEAP → Boundary statement → Risk reduction",
      example: [
        "Use when choice matters but harm or safety still has to be handled.",
        "Run LEAP, state the limit plainly, then agree the least intrusive safe step.",
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC005",
      reason:
        "Validation without agreement just acknowledges the feeling. Reach for LEAP when the moment also needs common ground and a shared next step. If validation alone is enough, stop there.",
    },
    {
      id: "TC006",
      reason:
        "Emotional labelling names the feeling to take the heat out, and lives inside LEAP's Empathise step. Use full LEAP when naming the emotion isn't enough and you need cooperation.",
    },
    {
      id: "TC021",
      reason:
        "Autonomy release simply hands choice back to reduce pressure. Use LEAP when you need both restored trust and a joint next step, not just relief from control.",
    },
    {
      id: "TC043",
      reason:
        "OARS is the underlying skill set: open questions, affirmations, reflections, summaries. LEAP is the sequence that deploys those skills when resistance is high.",
    },
    {
      id: "TC046",
      reason:
        "Elicit-provide-elicit shares information once someone is open to it. If they're still defensive, run LEAP first. If they're already asking for information, use EPE.",
    },
    {
      id: "TC085",
      reason:
        "Question-stacking restraint is the fix when you're firing too many questions. It clears the way for LEAP's single clean Listen question.",
    },
  ],
};
