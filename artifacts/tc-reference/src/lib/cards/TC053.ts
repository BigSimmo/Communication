import type { CardData } from "../card-types";

export const TC053: CardData = {
  pdfUrl: "cards/TC053/TC053_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC053/TC053_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC053/TC053_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC053/TC053_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC053/TC053_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC053/TC053_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC053/TC053_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC053/TC053_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC053",
  whyItWorks:
    "NVC / OFNR (Nonviolent Communication) is a four-part way of saying something hard: state a plain observation, name the feeling it stirred, connect that to the need underneath, then make one clear, doable request. Separating the fact from the feeling, the need and the ask keeps difficult expression from tipping into blame, so the other person can hear the point and act on it instead of defending themselves.",
  whatItIsNot: [
    'It is not a script to recite mechanically: naming the steps out loud ("my feeling is...") kills it.',
    "It is not a way to avoid listening, compress emotion into a template, or force the other person into your structure.",
    "It is not polished blame: the failure mode is turning the framework into pressure, guilt or quiet moral superiority.",
    "It is not therapy, and it is not consent to process deep emotion the other person has not agreed to.",
    "If the structure makes the conversation less humane, it is the wrong move: slow down and use something simpler.",
  ],
  overview: {
    coreFormula: [
      "Observation → Feeling → Need → Request",
      "When X happened, I felt Y, because I need Z. Would you be willing to do A?",
      '"When the report went out without my name on it, I felt overlooked, because credit matters to me. Would you add it before the next send?"',
      "Use the structure to organise your thinking, then speak like a person.",
    ],
    minimumViableMove:
      "Say one plain observation, one feeling, the need under it, and one doable request: four short sentences, no jargon, no naming the steps.",
    impact: "High",
    difficulty: "Hard",
    misuse:
      'It fails when the four steps become polished blame: "observations" loaded with judgement, "needs" used as leverage, or the steps announced out loud so the other person feels processed rather than spoken to.',
    bestFor: [
      "Conflict repair and clearing the air",
      "Setting a boundary without attacking",
      "Emotionally charged requests",
      "Repairing a relationship after friction",
      "Raising a recurring irritation before it festers",
      "Asking someone to change a specific behaviour",
    ],
  },
  notFor: [
    "Physical safety or an immediate emergency: act first, talk later",
    "When you would be weaponising vulnerability to get your way",
    "Manipulative or pressuring requests dressed up as needs",
    "The other person has not agreed to process deep emotion",
    'A steep power imbalance where "sharing feelings" is not safe for them',
    "You only want to vent, with no request behind it",
  ],
  phraseBank: [
    {
      id: "quick",
      label: "Plain openers",
      tag: "Quick starters",
      tone: "Quick",
      phrases: [
        "Can I put something plainly?",
        "There's something I'd like to name, then ask you about.",
        "I'd rather say this than sit on it.",
        "Mind if I tell you what I noticed and what I'd like?",
        "Here's the short version. Stop me if I've got it wrong.",
        "One thing's been on my mind. Can I say it?",
        "Small thing, but worth clearing up.",
      ],
    },
    {
      id: "observation",
      label: "Say what you saw, not what it meant",
      tag: "Clean observations",
      tone: "Professional",
      phrases: [
        "When the meeting ran twenty minutes over...",
        "The last three replies came back after midnight...",
        "I noticed the report went out without my name on it...",
        "Twice this week the plan changed after we'd agreed it...",
        "When you said \"we'll see\" and then it didn't happen...",
        'Not "you never listen": "the last two times I raised this, we moved on quickly."',
        "I'm working from what I saw, not what I assumed. Tell me if I've misread it.",
      ],
    },
    {
      id: "feeling-need",
      label: "Name the feeling and the need",
      tag: "Feeling plus need",
      tone: "Warm",
      phrases: [
        "I felt overlooked, and I think it's because being counted matters to me.",
        "I got anxious, mostly because I need a bit more certainty about timing.",
        "Honestly, I felt hurt. I care about us being straight with each other.",
        "I ended up frustrated, because I really value being kept in the loop.",
        "I'm feeling stretched, and what I need is a little more warning.",
        "I felt shut out, and connection matters more to me than being right.",
        "That left me uneasy. I work better when I know where I stand.",
      ],
    },
    {
      id: "request",
      label: "Make one clear, doable request",
      tag: "The ask",
      tone: "Direct",
      phrases: [
        "Would you be willing to give me a heads-up next time?",
        "Could we agree to lock the plan by Thursday?",
        "Would you add my name before the next send?",
        "Can we keep phones down at dinner?",
        "Would you be open to a quick check-in each Friday?",
        "Could you tell me directly if something's off, rather than going quiet?",
        "Is now a good time, or should we find a better one?",
      ],
    },
    {
      id: "repair",
      label: "Soften, check, and back out gracefully",
      tag: "Repair and check-back",
      tone: "Repair",
      phrases: [
        "Have I got that right, or am I missing something?",
        "That came out sharper than I meant. Let me try again.",
        "I'm not blaming you. I'm trying to sort this out with you.",
        "If this isn't the moment, tell me and we'll pick it up later.",
        "You don't have to agree. I just wanted to be honest about it.",
        "Tell me how that lands from your side.",
        "I might be wrong about the why. What was actually going on?",
      ],
    },
    {
      id: "high-stakes",
      label: "When it's heated",
      tag: "Conflict and pressure",
      tone: "High-stakes",
      phrases: [
        "Can we both slow this down for a second?",
        "I want to get this right more than I want to win it.",
        "Here's the one thing I most need you to hear.",
        "I'm going to say the hard part plainly, then listen.",
        "I'm not trying to score a point. I want us okay.",
        "Let's stick to what happened before we get to what it meant.",
        "If I've hurt you, I want to know that first.",
      ],
    },
    {
      id: "digital",
      label: "Email and text",
      tag: "Digital / async",
      tone: "Quick",
      phrases: [
        "Quick note: two things landed late this week and it threw my planning.",
        "Not urgent, but I'd like ten minutes to talk through how the handover went.",
        "One ask: could we confirm the date by Friday?",
        "I'd rather say this in person than over text. Are you free later?",
        "Short version: I felt out of the loop on the change. Can we reset how we flag these?",
        "No drama. I just want to name it and agree a fix.",
        "Sending this so it's not a surprise when we talk.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "They need it fast",
      action:
        "Compress to the minimum move: one observation, one need, one request.",
      phrase: "When X happened I felt Y. Would you be willing to do A?",
    },
    {
      condition: "They're upset first",
      action: "Validate before you structure anything.",
      phrase:
        "That sounded genuinely rough. Before I get to the ask, how are you doing?",
    },
    {
      condition: "They want the picture, not a formula",
      action: "Switch to a story-shaped neighbour like STAR or CARL.",
      phrase: "Let me just tell you how it actually went.",
    },
    {
      condition: "They need a decision or next step",
      action: "End on one clean, doable request.",
      phrase: "So the one thing I'm asking is...",
    },
    {
      condition: "They challenge the framing",
      action: "Drop the structure, summarise, and invite correction.",
      phrase: "Tell me where I've got this wrong.",
    },
    {
      condition: "Emotion is very high or safety is in question",
      action: "Stop structuring. Keep it human or step away.",
      phrase: "Let's pause this. You matter more than the point.",
    },
  ],
  ladder: [
    {
      weak: "Announces the framework and forces every sentence into Observation, Feeling, Need, Request.",
      better:
        "Uses the four steps silently to organise a shorter, clearer response.",
      best: "Moves through the steps invisibly, then checks whether the other person feels clearer and more heard.",
    },
    {
      weak: 'Dresses a judgement up as an observation: "you always do this."',
      better: "States a plain fact you would both recognise.",
      best: "Names the fact so cleanly the other person nods before you've even reached the feeling.",
    },
    {
      weak: "Ends with a vague complaint or a flat demand.",
      better: "Ends with a specific, doable request.",
      best: "Makes a request the other person can genuinely say no to, and means it.",
    },
  ],
  scenarios: [
    {
      situation: "Work meeting",
      move: "Compress to one observation and one request so it lands and moves on.",
      phrase: "We agreed Tuesday, then it shifted twice. Can we lock it now?",
    },
    {
      situation: "Email",
      move: "Break the four steps into short, scannable lines the reader can take in at a glance.",
      phrase:
        "What happened / how it left me / what I need / the ask: one line each.",
    },
    {
      situation: "Giving feedback",
      move: "Check what kind of feedback they want before you structure anything.",
      phrase: "Do you want the quick version or the whole picture?",
    },
    {
      situation: "Difficult conversation at home",
      move: "One sentence per step, then stop and listen.",
      phrase:
        "When plans change last-minute I get anxious, because I need a bit of warning. Could we agree a cut-off?",
    },
    {
      situation: "Setting a boundary",
      move: "Keep the observation neutral so the boundary doesn't read as an attack.",
      phrase:
        "When calls come after nine I can't wind down. I need my evenings. Can we keep work to daytime?",
    },
    {
      situation: "Repairing after a row",
      move: "Validate the hurt first, then use the structure lightly.",
      phrase:
        "That landed badly and I get why. Here's what I actually meant...",
    },
  ],
  calibration: {
    working: [
      "They become clearer and more specific in reply.",
      "They summarise your point back accurately.",
      "They offer a next step, or take one.",
      "Their posture softens: less braced, more open.",
      'They say something like "okay, that\'s fair" or "I hadn\'t seen it that way."',
      "The temperature drops rather than rises.",
      "They start telling you their side without defending.",
    ],
    adjust: [
      "They look confused or ask what you mean.",
      "They go quieter or more clipped.",
      "They challenge the framing itself.",
      "They seem to need the human context before any structure.",
      "It starts sounding rehearsed, salesy, or like a lecture.",
      "You're on your third \"need\" and they've stopped nodding.",
      "You notice you're building a case rather than opening a conversation.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Learn the four steps",
      task: "Write out Observation, Feeling, Need and Request from memory, each in one plain sentence, for any small situation from today.",
    },
    {
      day: "Day 2",
      title: "Spot the disguised judgement",
      task: 'Take three "you always / you never" complaints and rewrite each opening as a neutral observation both people would agree on.',
    },
    {
      day: "Day 3",
      title: "Name feeling and need",
      task: "Pick one recurring irritation. In a single sentence, name the feeling it stirs and the need sitting underneath it. No blame words allowed.",
    },
    {
      day: "Day 4",
      title: "Write it, then cut it",
      task: "Draft a full 60-second OFNR for a real situation, then cut it by a third without losing the observation, need or request.",
    },
    {
      day: "Day 5",
      title: "Mechanical vs human",
      task: "Say the same OFNR aloud twice (once naming the steps, once as ordinary speech) and note how much warmer the second sounds.",
    },
    {
      day: "Day 6",
      title: "Use the minimum move live",
      task: "In one low-stakes real moment, use the four-sentence minimum move and watch whether the other person gets clearer or more defensive.",
    },
    {
      day: "Day 7",
      title: "Run it on something that matters",
      task: "Take one genuinely charged issue, work the full move, and have one recovery line ready in case it lands badly.",
    },
  ],
  checklist: [
    "Did the structure serve the other person, or just make me sound polished?",
    "Was my observation a fact, or a judgement in disguise?",
    "Did I name a real feeling and the need under it, not a demand?",
    "Was there one clear request they could actually say no to?",
    "Did I stay human, or did I sound like I was reciting?",
    "If it landed badly, did I back up and simplify?",
  ],
  example: {
    without: [
      'You: "You always do this. You never think about my time."',
      'Them: "Here we go. It\'s not a big deal."',
      'You: "It\'s a big deal. This is so typical of you."',
      'Them: "Fine. Whatever you say."',
      "Why it's weak:",
      "opens with a judgement, not an observation",
      "labels the person instead of naming a feeling",
      "has no actual request, so nothing can change",
      "leaves them defensive and the plan still unfixed",
    ],
    with: [
      'You: "Twice this week the plan changed after we\'d agreed it." (observation)',
      'Them: "Yeah... work\'s been mad."',
      'You: "I get that. Honestly it left me anxious. I lean on knowing what the evening looks like." (feeling + need)',
      'Them: "I didn\'t realise it threw you that much."',
      'You: "It does. Would you be willing to text me by six if it\'s going to shift?" (request)',
      'Them: "Yeah, that\'s fair. I can do that."',
      "Why it works:",
      "starts with a fact you'd both agree on",
      "names the feeling and the need without blame",
      "ends on one clear, doable request they can accept",
    ],
    note: 'The four steps stay invisible. No one says "observation" out loud. The structure lives in the speaker\'s head. The other person just feels heard and clear.',
  },
  influencePayoff: {
    feeling:
      '"They said the hard thing straight, and I didn\'t feel attacked."',
    principle:
      "People can act on a clear need far more easily than they can act on blame. Take the accusation out and the request becomes something they can actually say yes to.",
    gains: [
      "Less defensiveness, because the observation isn't an accusation",
      "A clearer path through what you actually want",
      "Lower emotional heat in a charged moment",
      "Requests people can genuinely agree to",
      "Trust, because you owned your feeling instead of projecting it",
      "Repair that holds, rather than a truce that resets next week",
      "Being heard without having to raise your voice",
    ],
    whyMostFail: [
      'They smuggle a judgement into the "observation" and it reads as blame.',
      'They use "needs" as leverage: a polished way to pressure.',
      "They recite the steps out loud and the person feels processed.",
      "They forget the request, so venting quietly replaces resolving.",
    ],
  },
  fieldTip: {
    headline: "Say it like a person, not a formula.",
    body: 'Keep the four steps in your head, not in your mouth. Nobody should be able to hear the framework. They should just notice the conversation got clearer and less sharp. The moment you announce "my need is...", it turns into a performance and they stop listening to you and start watching the technique.',
    example:
      '"When the deck went out without a review, I felt exposed. I need us to catch errors before clients do. Can we add a check step?"',
    dont: "Don't narrate the steps (\"now I'm sharing my feeling\").",
    do: "Do let the fact, the feeling, the need and the ask arrive as ordinary sentences.",
  },
  method: [
    {
      step: "1",
      title: "Observe without evaluating",
      body: "Separate what happened from what you made it mean. State a fact both of you would recognise, with no verdict attached. This is the hardest step and the one that decides whether the rest lands.",
      examples: [
        { label: "Judgement", text: '"You\'re so inconsiderate."' },
        {
          label: "Observation",
          text: '"The last two times, the plan changed after we\'d agreed it."',
        },
      ],
    },
    {
      step: "2",
      title: "Name the feeling",
      body: 'Say the emotion, and own it as yours: "I felt...", not "you made me...". A named feeling invites care. A blamed one invites defence.',
      examples: [
        { label: "Blame", text: '"You made me furious."' },
        { label: "Feeling", text: '"I felt let down."' },
      ],
    },
    {
      step: "3",
      title: "Connect it to the need",
      body: "The feeling points to a need: certainty, respect, rest, inclusion, reliability. Name it plainly so the request that follows makes sense.",
      examples: [
        { label: "Vague", text: '"I just need you to be better."' },
        {
          label: "Need",
          text: '"I need a bit of warning when things change."',
        },
      ],
    },
    {
      step: "4",
      title: "Make one clear, doable request",
      body: "Specific, positive, and something they can decline. If they can't picture doing it, or can't say no to it, it isn't a request.",
      examples: [
        { label: "Demand", text: '"Stop messing me around."' },
        {
          label: "Request",
          text: '"Would you text me by six if the plan shifts?"',
        },
      ],
    },
    {
      step: "5",
      title: "Check, don't push",
      body: "If they look confused or resistant, summarise and invite correction rather than repeating the structure louder. The goal is a shared understanding, not a completed template.",
      examples: [
        { label: "Push", text: '"As I said. Observation, feeling, need..."' },
        {
          label: "Check",
          text: '"Have I got this right, or am I missing your side?"',
        },
      ],
    },
  ],
  liveThreadClues: [
    '"always"',
    '"never"',
    '"you made me..."',
    '"typical"',
    '"you never listen"',
    '"obviously"',
    '"you\'re being..."',
  ],
  depthDial: [
    {
      depth: "Minimal",
      useWhen: "Low stakes or short on time",
      phrase: '"When X happened I needed Y. Could you do A?"',
    },
    {
      depth: "Standard",
      useWhen: "A real but manageable issue",
      phrase: '"When X happened, I felt Y, because I need Z. Would you do A?"',
    },
    {
      depth: "Full",
      useWhen: "Strong trust and a genuinely tender issue",
      phrase:
        '"When X happened, I felt Y. Underneath that I think I need Z, and it matters to me. Would you be willing to A?"',
    },
  ],
  commonMistakes: [
    {
      mistake: "Judgement disguised as observation",
      soundsLike: '"You never think about anyone else."',
      better: '"The last two times, the plan changed after we\'d agreed it."',
    },
    {
      mistake: "Blaming instead of owning the feeling",
      soundsLike: '"You made me feel worthless."',
      better: '"I felt small when that happened."',
    },
    {
      mistake: 'Using "needs" to pressure',
      soundsLike: '"I need you to finally grow up."',
      better: '"I need a bit more reliability around timing."',
    },
    {
      mistake: "No actual request",
      soundsLike: '"I just wish things were different."',
      better: '"Would you text me by six if it changes?"',
    },
    {
      mistake: "A demand dressed as a request",
      soundsLike: '"You\'ll stop doing that."',
      better: '"Would you be willing to stop doing that?"',
    },
    {
      mistake: "Reciting the steps out loud",
      soundsLike: '"My observation is... my feeling is..."',
      better:
        "Keep the structure in your head. Let it come out as normal sentences.",
    },
    {
      mistake: "Structuring when they need comfort first",
      soundsLike: "Launching into the formula while they're still upset",
      better: '"That sounds genuinely hard." Validate, then structure.',
    },
  ],
  recoveryPhrases: [
    "That sounded scripted. Plainly: I was upset, and I'd like X.",
    "That came out as blame, and I didn't mean it that way.",
    "Let me back up. What actually happened was...",
    "I don't want the framing to bulldoze your side of it.",
    "Have I misread this? Tell me where I'm wrong.",
    "Forget how I said it. Here's the one thing I'm asking.",
    "If this isn't the moment, we can pick it up later.",
    "That sounded like a lecture. Let me try again.",
  ],
  bestRecoveryLine:
    "That sounded scripted. Plainly: I was upset, and I'd like X.",
  chains: [
    {
      label: "Validate first, then structure",
      sequence: "Validate the concern → NVC / OFNR",
      example: [
        '"That sounds genuinely rough."',
        '"So, when the deadline moved, I felt caught out, and I need earlier warning. Could we flag changes sooner?"',
      ],
    },
    {
      label: "Structure, then check",
      sequence: "NVC / OFNR → Summary check",
      example: [
        '"When X happened I felt Y. I need Z. Would you do A?"',
        '"Have I got that right from your side?"',
      ],
    },
    {
      label: "Structure, then release",
      sequence: "NVC / OFNR → Autonomy release",
      example: [
        '"...would you be willing to do A?"',
        '"It\'s genuinely your call. I just wanted to ask straight."',
      ],
    },
    {
      label: "Structure, then a clean ask",
      sequence: "NVC / OFNR → Clean request",
      example: [
        '"...because I need a bit more notice."',
        '"So the ask is: a text by six if it shifts."',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC005",
      reason:
        "Validation without agreement: validate first when emotion is high. Reach for OFNR once they're ready to problem-solve rather than just be heard.",
    },
    {
      id: "TC014",
      reason:
        "Validate the concern: when they're upset before you've said anything, acknowledge the concern before you structure the observation and request.",
    },
    {
      id: "TC013",
      reason:
        "Clean request: OFNR builds the whole case. Clean request is just the doable ask. Use it alone when no feeling or need needs airing.",
    },
    {
      id: "TC021",
      reason:
        "Autonomy release: follow the request with an autonomy release so it stays an ask, not a demand.",
    },
    {
      id: "TC040",
      reason:
        "Meaning reflection: use Meaning reflection to draw out their need. Use OFNR to state your own clearly.",
    },
    {
      id: "TC074",
      reason:
        "DESC: the assertive workplace cousin. OFNR leads with feelings and needs. DESC leads with described behaviour and consequences.",
    },
  ],
};
