import type { CardData } from "../card-types";

export const TC075: CardData = {
  pdfUrl: "cards/TC075/TC075_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC075/TC075_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC075/TC075_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC075/TC075_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC075/TC075_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC075/TC075_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC075/TC075_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC075/TC075_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC075",
  whyItWorks:
    'Acknowledge effort is a short, grounded recognition move: you notice the work behind someone\'s action (preparation, persistence, care, restraint, recovery, or emotional labour) and say so specifically before you evaluate the outcome, give advice, correct the work, or move on. It works because it changes the emotional economics of the exchange. Once people know the labour behind an outcome has been seen, they can take correction, next steps, or disappointment without hearing it as erasure. The key is not "good job". The key is: I see what this took.',
  whatItIsNot: [
    'Outcome praise: saying "this is excellent" when the real point is that they worked hard.',
    "A participation trophy: praising any attempt regardless of impact, standards, or responsibility.",
    "Flattery: exaggerating the effort so someone will like you, or emotional payment used instead of time, credit, money, or practical help.",
    'A substitute for accountability: "I know you tried" does not erase harm, poor quality, missed deadlines, or broken commitments.',
    'Mind reading or patronising reassurance: claiming to know what it cost them, or "at least you tried", which usually lands as dismissal.',
  ],
  overview: {
    coreFormula: [
      "You [specific action] despite [friction/constraint], and that [impact/choice] matters.",
      "You kept this moving even with unclear inputs, and that made the decision easier.",
      "You came back to the conversation instead of avoiding it, and I appreciate that.",
      "You held back from escalating when it was tense, and that took discipline.",
      "I noticed the effort. That mattered because it made the next step clearer.",
      "That took effort. I see it.",
    ],
    minimumViableMove:
      'Name the one effort you can actually see, in a single sentence, before you move to feedback or the next task: "That took effort. I see it."',
    impact: "Medium",
    difficulty: "Medium",
    misuse:
      "It fails when the words are too generic, too intense, or too convenient, so the other person hears management, flattery, or dismissal instead of accurate recognition.",
    bestFor: [
      "Someone brings work, a draft, an attempt, an apology, or a difficult update, and the result is imperfect but the process involved genuine effort.",
      "A person has done invisible setup work, care work, emotional labour, or coordination that could go unseen.",
      "You need to give feedback without erasing the work behind the current version.",
      "A team member has stayed disciplined under pressure, or a conflict de-escalates because someone showed restraint.",
      "A friend or partner has been trying, even if the situation is still unresolved.",
      "A person returns after a setback, mistake, embarrassment, or interruption.",
      "High standards need to coexist with recognition, so the person does not have to fight to be seen first.",
    ],
  },
  notFor: [
    "The effort claim is being used to avoid accountability for harm or poor conduct.",
    "You do not actually know whether effort was present. You would be guessing.",
    "The person wants a practical decision, not recognition.",
    "Recognition would sound patronising because of a power, status, or age gap.",
    "The same person is repeatedly overburdened and needs resources, not words.",
    "You are tempted to use acknowledgement to make someone accept unfair work.",
    "The conversation needs immediate safety, boundary-setting, or concrete action.",
  ],
  phraseBank: [
    {
      id: "minimum",
      label: "Minimum viable",
      tag: "Short, grounded openers",
      tone: "Quick",
      phrases: [
        "That took effort. I see it.",
        "I can see the work behind this.",
        "You didn't just wing this. You put time into it.",
        "Before we move on, I want to acknowledge the effort here.",
        "That wasn't nothing. I noticed.",
      ],
    },
    {
      id: "professional",
      label: "Professional",
      tag: "Work and meeting contexts",
      tone: "Professional",
      phrases: [
        "You clearly did the hard part of gathering the details before bringing this here.",
        "I can see the preparation in how you framed the options.",
        "You made the messy part easier for the rest of us to evaluate.",
        "The draft still needs tightening, but the groundwork is strong.",
        "You carried a lot of the setup work on this, and it made the rest easier.",
        "You did the thinking before you brought it to the room.",
      ],
    },
    {
      id: "digital",
      label: "Digital / written",
      tag: "Messages and documents",
      tone: "Professional",
      phrases: [
        "Thanks for laying this out clearly. I can see the work you put into making it easy to respond to.",
        "The structure helped. You did the thinking before asking for input.",
        "I appreciate the care in the way you wrote this.",
        "You made the decision easier by summarising the moving parts.",
        "You framed the trade-offs so we could actually decide. That took work.",
      ],
    },
    {
      id: "feedback",
      label: "Feedback without erasure",
      tag: "Keeping the standard intact",
      tone: "Direct",
      phrases: [
        "I want to recognise the work first, then talk about the revision.",
        "There's visible effort here. The next step is making the argument cleaner.",
        "You stayed with the hard part. Now let's make the outcome match the effort.",
        "This isn't finished yet, but the effort is clear.",
        "The effort is real, and the next version still needs work. Let's keep both true.",
        "I can see the labour here. Let's put it into a sharper recommendation.",
      ],
    },
    {
      id: "social",
      label: "Social and relational",
      tag: "Friends, partners, sustained effort",
      tone: "Warm",
      phrases: [
        "You've been trying to handle this carefully. That matters.",
        "I know this has taken a lot more energy than it looks from the outside.",
        "You kept showing up for it, even when it wasn't giving much back.",
        "That was a lot to carry, and I don't want to skip over that.",
        "You've been trying to hold this together for a while. That's not nothing.",
      ],
    },
    {
      id: "repair",
      label: "Conflict and repair",
      tag: "Restraint and re-entry",
      tone: "Repair",
      phrases: [
        "I noticed you slowed down instead of escalating. I appreciate that effort.",
        "You came back to this conversation after it got awkward. That matters.",
        "It took something to say that directly. I hear the effort behind it.",
        "You made an effort to repair this rather than just move on. I see that.",
        "You chose your words when it was tense. That helped keep this workable.",
      ],
    },
    {
      id: "pressure",
      label: "Under pressure",
      tag: "Constraint and discipline",
      tone: "High-stakes",
      phrases: [
        "Under that pressure, staying with the process took discipline.",
        "You kept the work moving in a difficult window. I want to recognise that.",
        "You had limited time and still made this usable. That effort matters.",
        "You absorbed a lot of ambiguity and still brought something concrete.",
        "You stayed steady when it would have been easier to drop it.",
      ],
    },
    {
      id: "softened",
      label: "When you might be over-reading",
      tag: "Tentative, checkable recognition",
      tone: "Repair",
      phrases: [
        "It looks like there was a lot of work behind this, am I reading that right?",
        "I may be over-reading it, but I did want to recognise the effort I saw.",
        "I don't want to make a big production of it. I just noticed the work.",
        "Tell me if I'm misreading it, but it seems like you put a lot into this.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "The effort is unclear or you would be guessing",
      action: "Do not assert it. Check first, or use another package.",
      phrase:
        "It looks like there may be a lot behind this. Am I reading that right?",
    },
    {
      condition: "Effort is real but the outcome is imperfect",
      action: "Separate effort from outcome and keep both true.",
      phrase: "The effort is real, and the next version still needs work.",
    },
    {
      condition: "Effort is real and the outcome is fine",
      action: "Acknowledge briefly and continue.",
      phrase: "I can see the preparation here.",
    },
    {
      condition: "The person is emotionally activated",
      action:
        "Pair it with emotional labelling or validation before any feedback.",
      phrase:
        "This sounds draining, and you've still been trying to handle it carefully.",
    },
    {
      condition: "A power or status gap could make it sound patronising",
      action: "Keep it concrete, brief, and non-performative.",
      phrase: "I appreciate the preparation here.",
    },
    {
      condition: "The effort is unsustainable or unfair",
      action: "Do not stop at words. Name it and change the conditions.",
      phrase:
        "I appreciate the work, and this shouldn't require that much lift every time.",
    },
  ],
  ladder: [
    {
      weak: "Good job.",
      better: "I can see you worked on this.",
      best: "I can see you organised a messy set of inputs before drafting. The structure needs tightening, but the groundwork is real.",
    },
    {
      weak: "At least you're trying.",
      better: "You've been trying hard.",
      best: "You've kept showing up for this even when it has been draining. I don't want to skip over that.",
    },
    {
      weak: "I appreciate the effort, but...",
      better: "I see the effort, and we still need to improve the result.",
      best: "I want to keep two truths separate: you put real work into the outreach, and the conversion result still needs a different approach.",
    },
    {
      weak: "Thanks for not blowing up.",
      better: "I noticed you stayed calm.",
      best: "I noticed you paused and chose your words when it was tense. That helped keep the conversation workable.",
    },
  ],
  scenarios: [
    {
      situation: "Rough draft after a difficult week",
      move: "Separate the setup labour from the final polish.",
      phrase:
        "I can see the groundwork. The next version still needs tightening.",
    },
    {
      situation: "Friend trying to cope",
      move: "Name the sustained effort without forcing optimism.",
      phrase:
        "You've kept showing up for this even though it has been draining.",
    },
    {
      situation: "Direct report missed the target",
      move: "Hold two truths: the work was real, the result fell short.",
      phrase:
        "The effort is real, and the result still needs a different approach.",
    },
    {
      situation: "Partner returns after conflict",
      move: "Name the re-entry, not the resolution.",
      phrase: "I appreciate you coming back to this instead of letting it sit.",
    },
    {
      situation: "Team member's invisible coordination",
      move: "Make the hidden logistics visible and credit them specifically.",
      phrase:
        "You absorbed a lot of the setup work that made this easier for everyone.",
    },
    {
      situation: "Burnout risk from heroic effort",
      move: "Acknowledge the effort, then change the setup.",
      phrase:
        "This shouldn't take heroic effort every time. Let's change the process.",
    },
  ],
  calibration: {
    working: [
      "They exhale, soften, nod, or say thanks without awkwardness.",
      'They add useful context: "Yes, the gathering part took the longest."',
      "They become more open to feedback or the next step.",
      'They correct you lightly: "It wasn\'t that bad, but the timeline was hard."',
      "The conversation feels less defensive and more concrete.",
      "Their tone relaxes and they share more detail.",
    ],
    adjust: [
      'They deflect ("It was nothing"). Use a lighter line and move on.',
      'They look embarrassed. Reduce intensity: "I don\'t want to make a big thing of it. I just noticed."',
      'They use effort to dodge standards ("But I tried"). Separate effort from outcome.',
      "They seem confused because the effort is not obvious. Ask rather than assert.",
      "The setting is public and recognition may expose them. Move private or keep it brief.",
      "They ask you not to praise them. Stop and stay with the practical next step.",
      "You realise the effort claim is unsupported. Drop it rather than inflate it.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the signal",
      task: "For five minutes, read or imagine short conversation snippets and label the effort signal: preparation, persistence, care, restraint, recovery, cognitive labour, or emotional labour. Do not phrase anything yet. Train perception first.",
    },
    {
      day: "Day 2",
      title: "One-sentence formula",
      task: 'Take three of yesterday\'s signals and write one sentence each using: "You [specific action] despite [constraint], and that [effect] matters." Keep every version to a single sentence.',
    },
    {
      day: "Day 3",
      title: "Effort plus standard",
      task: 'Practise holding two truths. Write three lines that name the effort and keep the standard, e.g. "You prepared carefully, and the client question still needs a clearer answer."',
    },
    {
      day: "Day 4",
      title: "Tone reduction",
      task: 'Take three overdone lines ("I\'m blown away by how hard you worked") and cut each to something grounded ("I can see the preparation in this"). Remove anything that sounds like flattery or a speech.',
    },
    {
      day: "Day 5",
      title: "Say it aloud",
      task: "Read your best five lines out loud in a normal voice. Cut any that sound patronising, managerial, or performative. Keep only what you could actually say.",
    },
    {
      day: "Day 6",
      title: "Live rep, low stakes",
      task: "In one real conversation today, find one genuine effort signal and acknowledge it in a single sentence. Then pause and let it land. Note how it went.",
    },
    {
      day: "Day 7",
      title: "Rep before feedback",
      task: "In a conversation where you need to give feedback or correction, acknowledge the specific effort first, pause, then move to the next step. Afterwards note: what you perceived, what you said, how it landed, and what you would adjust.",
    },
  ],
  checklist: [
    "What specific effort signal did I notice, preparation, persistence, care, restraint, recovery, or labour?",
    "Was I confident enough to state it plainly, or should I have asked instead?",
    "Did I acknowledge the effort before advice, correction, evaluation, or moving on?",
    'Was the phrase specific and one sentence, not a preface to a harsh "but"?',
    "Did I adjust intensity when they relaxed, deflected, or looked embarrassed?",
    "When words were not enough, did I separate effort from outcome or change the setup?",
  ],
  example: {
    without: [
      "Person: \"Here's the summary. It's rough, but I tried to pull everything together.\"",
      'You: "Great, thanks. It still needs a lot of work. The recommendation is unclear."',
      "Why it fails: the feedback may be accurate, but it erases the visible effort.",
      "The person now has to defend the work before they can hear the revision.",
    ],
    with: [
      "Person: \"Here's the summary. It's rough, but I tried to pull everything together.\"",
      'You: "I can see the effort in the way you gathered the scattered inputs and put them into one timeline. That\'s useful groundwork."',
      'You: "The next move is to make the recommendation sharper, so the effort translates into a cleaner decision."',
      'Person: "That makes sense. I knew the ending was weak."',
      'You: "Good read. Keep the timeline. Tighten the recommendation to one sentence and two trade-offs."',
      "Why it works: the effort is specific, the standard stays intact, and the next step is concrete.",
    ],
    note: 'The generic middle version ("Thanks, I can see you worked hard on it") acknowledges effort but stays vague. The advanced version names the actual labour and keeps the standard. Same order every time: name the work, pause, then the next step.',
  },
  influencePayoff: {
    feeling: '"They saw what this actually took, not just how it turned out."',
    principle:
      "Many people can tolerate correction, next steps, or disappointment when they first know the work behind the outcome has been seen.",
    gains: [
      "Reduces defensiveness: people are less likely to hear feedback as erasure of their effort.",
      'Protects motivation: it separates "the result needs work" from "your work was invisible".',
      "Builds trust: it shows you are looking beyond the final visible output.",
      "Makes hidden labour discussable: preparation, restraint, care, and coordination become visible parts of the conversation.",
      "Supports better standards: standards stay high because the person does not have to fight for recognition first.",
      "Improves repair: in tense moments, acknowledging restraint or re-entry preserves dignity.",
    ],
    whyMostFail: [
      'The words are too generic ("nice work"), so no real effort is made visible.',
      "The praise is too intense or ceremonial, so it reads as flattery or management.",
      'It is glued to a "but", so the acknowledgement becomes a preface to criticism.',
      'The speaker mind-reads the cost ("I know how hard that was") when they do not actually know.',
      'It is used as pressure ("you worked so hard, so keep going") which turns recognition into extraction.',
    ],
  },
  fieldTip: {
    headline: "Name the work before you judge the work.",
    body: "The best acknowledgement is small, specific, and unforced. Say it, then pause. If the person accepts it, continue. If they deflect, reduce intensity and move on. If the outcome still needs work, keep both truths visible: the effort can be real and the next step can still be necessary.",
    example: '"I can see the work behind this." Then pause and let it land.',
    dont: 'Don\'t glue it to a "but": "I appreciate the effort, but..." erases what you just said.',
    do: 'Use "and", or let the acknowledgement stand on its own for a beat before the next step.',
  },
  method: [
    {
      step: "1",
      title: "Perception: notice the effort signal",
      body: "Look past the outcome for the labour behind it: preparation, persistence, care, restraint, recovery, or cognitive labour. The signal is what they did, not how well it turned out.",
      examples: [
        {
          label: "Preparation",
          text: "They gathered and organised messy inputs before showing anything.",
        },
        {
          label: "Restraint",
          text: "They held back from reacting when it was tense.",
        },
      ],
    },
    {
      step: "2",
      title: "Move: name the effort before the next agenda",
      body: "Put the recognition before feedback, advice, or revision. If it comes after the correction, it reads as a consolation prize.",
    },
    {
      step: "3",
      title: "Phrase: make it specific and bounded",
      body: "One sentence. Name what they did and, if useful, the friction it happened under. Specific beats warm.",
      examples: [
        { label: "Vague", text: "You worked really hard on this." },
        {
          label: "Specific",
          text: "You pulled the scattered inputs into one timeline before drafting.",
        },
      ],
    },
    {
      step: "4",
      title: "Calibration: watch the response",
      body: "If they relax, add detail, or correct you, follow their lead. If they shrink, deflect, or look embarrassed, reduce intensity or make it lighter.",
    },
    {
      step: "5",
      title: "Recovery: repair overstatement",
      body: "If it lands as patronising or too much, say you may have over-read it and return to the practical next step. A light touch fixes it.",
      examples: [
        {
          label: "Repair",
          text: "I may be over-reading it. I just wanted to say I noticed the work.",
        },
      ],
    },
    {
      step: "6",
      title: "Chain: continue cleanly",
      body: 'After the acknowledgement, pause, then move into specific appreciation, validation, feedback, a small ask, or a decision. The pause gives the recognition a chance to land instead of turning it into a preface you rush past.\nGood sequence: "I can see you put real work into clarifying the options. Before we edit the recommendation, I want to acknowledge that." Pause. "Now let\'s tighten the trade-off section."',
    },
  ],
  liveThreadClues: [
    "Preparation: they gathered, organised, rehearsed, or clarified before showing it.",
    "Persistence: they stayed with something slow, repetitive, frustrating, or uncertain.",
    "Care: they protected quality, fairness, clarity, or someone else's experience.",
    "Restraint: they held back from reacting, escalating, interrupting, or over-explaining.",
    "Recovery: they came back after a miss, interruption, failure, or awkward moment.",
    "Cognitive labour: they made something easier to understand, decide, use, or respond to.",
    "Emotional labour: they carried discomfort, ambiguity, or pressure and still showed up.",
  ],
  depthDial: [
    {
      depth: "Light / tentative",
      useWhen: "You are not certain, or the setting is public.",
      phrase:
        "It looks like there was a lot of work behind this, am I reading that right?",
    },
    {
      depth: "Minimum",
      useWhen: "The effort is clear but a light touch fits.",
      phrase: "That took effort. I see it.",
    },
    {
      depth: "Specific",
      useWhen: "You can name the actual labour.",
      phrase: "I can see the preparation in how you framed the options.",
    },
    {
      depth: "Two truths",
      useWhen: "The outcome still needs work.",
      phrase:
        "The effort is real, and the next version still needs work. Let's keep both true.",
    },
    {
      depth: "Structural",
      useWhen: "The effort is unsustainable or unfair.",
      phrase:
        "I appreciate the work, and this shouldn't require that much lift every time.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Generic praise",
      soundsLike: "Nice work.",
      better: "I can see you organised a messy set of inputs before drafting.",
    },
    {
      mistake: "The but-erasure",
      soundsLike: "I appreciate the effort, but...",
      better:
        "The effort is real, and the next version still needs work. Both are true.",
    },
    {
      mistake: "Overdoing it",
      soundsLike: "I'm blown away by how incredibly hard you worked on this.",
      better: "I can see the preparation in this.",
    },
    {
      mistake: "Mind-reading the cost",
      soundsLike: "I know exactly how hard that was for you.",
      better:
        "That looked like a lot. I don't want to assume, but I noticed the work.",
    },
    {
      mistake: "Using it as pressure",
      soundsLike: "You worked so hard, so you should keep going.",
      better:
        "You put real work in. Whether to continue is genuinely your call.",
    },
    {
      mistake: "Rewarding avoidable mess",
      soundsLike: "Amazing effort pulling that all-nighter.",
      better:
        "You rescued this, and it shouldn't have needed rescuing. Let's fix the setup.",
    },
    {
      mistake: "Making it about yourself",
      soundsLike: "This makes my life so much easier.",
      better: "You did the hard part of making this clear. That took work.",
    },
  ],
  recoveryPhrases: [
    "I may be over-reading it. I just wanted to say I noticed the work.",
    "Fair correction. I don't want to make assumptions about what it took.",
    "Let me say it more simply: I appreciate the preparation here.",
    "That came out more patronising than I meant. I was recognising the work, not grading it.",
    "I don't mean that as a gold star. I mean I see the labour behind it.",
    "The effort is real, and the outcome still needs work. I want to keep both true.",
    "Recognition isn't enough here. We also need to adjust time, resources, or ownership.",
    "Got it. I won't make a big thing of it. I just wanted to register it once.",
  ],
  bestRecoveryLine:
    "The effort is real, and the outcome still needs work. I want to keep both true.",
  chains: [
    {
      label: "Feedback without erasure",
      sequence:
        "Acknowledge effort → Summary check → Permission-based advice → Small ask",
      example: [
        "I can see the groundwork you did here.",
        "The core point is X and the open issue is Y, right?",
        "Would it be useful to hear one way to tighten it?",
        "Can you revise the recommendation to one sentence?",
      ],
    },
    {
      label: "Emotional moment with effort underneath",
      sequence:
        "Emotional labelling → Acknowledge effort → Meaning reflection → Autonomy release",
      example: [
        "This sounds draining.",
        "You've still been trying to handle it carefully.",
        "It matters because you don't want to make it worse.",
        "You don't have to decide right now.",
      ],
    },
    {
      label: "Conflict repair",
      sequence:
        "Slow down → Acknowledge effort → Double-sided reflection → Clean request",
      example: [
        "(Drop the pace and lower your volume.)",
        "I noticed you paused instead of escalating.",
        "You want to be heard, and you also don't want this to turn into a fight.",
        "Can we take the next two minutes on one issue?",
      ],
    },
    {
      label: "Digital decision support",
      sequence:
        "Acknowledge effort → BLUF → Two-option question → Low-friction ask",
      example: [
        "You did the work of making this easy to follow.",
        "Put the decision needed at the top.",
        "Do you want A or B?",
        "A one-line reply is fine.",
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC018",
      reason:
        'Both are positive. Use TC075 when the key line is "you worked at this". Use TC018 / Specific appreciation when it is "this helped": a specific contribution or positive impact.',
    },
    {
      id: "TC005",
      reason:
        '"I see your effort" can be misheard as "I agree". Use TC005 / Validation without agreement when a feeling or perspective needs legitimacy. Use TC075 when the labour itself needs recognising.',
    },
    {
      id: "TC006",
      reason:
        '"Frustrating" names a feeling. "you stayed with it" names effort. Use TC006 / Emotional labelling for feeling clarity, TC075 for seen effort.',
    },
    {
      id: "TC040",
      reason:
        "Effort and meaning often travel together. Use TC040 / Meaning reflection to reflect why something matters. Use TC075 to recognise the invested work itself.",
    },
    {
      id: "TC022",
      reason:
        "Effort acknowledgement can drift into status conferral. Name the labour for TC075. Elevate someone's standing, expertise, or credit for TC022 / Status generosity.",
    },
    {
      id: "TC070",
      reason:
        "Normalising too soon can erase effort. Acknowledge the specific effort first with TC075, then use TC070 / Careful normalising if the person feels alone, odd, or ashamed.",
    },
  ],
};
