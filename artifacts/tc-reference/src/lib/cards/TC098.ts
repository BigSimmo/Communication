import type { CardData } from "../card-types";

export const TC098: CardData = {
  pdfUrl: "cards/TC098/TC098_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC098/TC098_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC098/TC098_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC098/TC098_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC098/TC098_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC098/TC098_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC098/TC098_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC098/TC098_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC098",
  whyItWorks:
    "Emotion before facts means acknowledging the emotional impact of what someone is saying before you explain, correct, analyse, defend, or move into details. It is a response-ordering technique: when people are upset, facts land better once the feeling has been met. You are not abandoning accuracy. You are sequencing the response so accuracy does not sound like dismissal. Often one short, sincere sentence is enough. It matters most when the facts are true but badly timed, because a true fact delivered too early can sound like a refusal to care.",
  whatItIsNot: [
    "It is not agreeing with every claim. You can acknowledge the feeling and still correct the facts.",
    "It is not therapy language, forced intimacy, or a demand that people share more emotion than they want to.",
    "It is not a delay tactic for dodging accountability, or a polite empathy wrapper before pushing your own agenda.",
    "It is not the same as emotional labelling. Labelling names a feeling. This technique sets the response order.",
    "It is not for moments when a safety-critical fact must come first. Then compress the acknowledgement and move quickly to what must be known or done.",
  ],
  overview: {
    coreFormula: [
      "Feeling signal → brief validation → permission or bridge → facts, details or next step.",
      'Feeling signal: name the emotional weight without overclaiming, "That sounds frustrating."',
      'Brief validation: show why it makes sense from their side, "I can see why it landed that way."',
      'Bridge: signal the turn, "The piece I want to check is..." (never "but" first).',
      "Facts: give the accurate information, correction or next step without erasing the emotion.",
      'Compact: "That sounds [feeling]. I want to acknowledge that first. The factual piece is [fact]."',
    ],
    minimumViableMove:
      'Start with one short emotion-first sentence before any explanation: "That sounds really frustrating. The detail I want to check is..."',
    impact: "High",
    difficulty: "Medium",
    misuse:
      "Using it as a performative sympathy wrapper (mouthing kind words, then rushing straight into the correction) or over-staying in vague sympathy and never returning to the facts. Either way it becomes a way to pressure, corner or avoid accountability rather than to make reality easier to hear.",
    bestFor: [
      "Venting, frustration, disappointment or embarrassment",
      "Customer complaints and painful feedback",
      "Conflict repair and overwhelmed team members",
      "Moments where a factual correction would otherwise sound dismissive",
      'Statements where impact is more urgent than sequence: "I felt ignored," "this is impossible," "that was humiliating"',
      "Acknowledging pressure before you discuss deadlines, policy, evidence or trade-offs",
    ],
  },
  notFor: [
    "Immediate safety facts are required",
    "The person explicitly asks for data or a decision first",
    "The emotion is unclear and a label would be presumptuous",
    "The conversation is being used to abuse, threaten or coerce",
    "Emotion-first wording would imply you agree with a harmful or inaccurate claim",
    "You would be using empathy to pressure someone toward agreement",
  ],
  phraseBank: [
    {
      id: "quick-openers",
      label: "Quick openers",
      tag: "One-line minimum",
      tone: "Quick",
      phrases: [
        "That sounds really frustrating.",
        "That sounds heavy.",
        "That sounds rough.",
        "That sounds like a lot.",
        "I can see why that landed badly.",
        "That's a lot to take in.",
        "I hear you.",
        "That sounds rough. The fact piece is...",
      ],
    },
    {
      id: "everyday-support",
      label: "Everyday support",
      tag: "Meet the feeling first",
      tone: "Warm",
      phrases: [
        "That sounds really frustrating. What part of it hit hardest?",
        "That sounds heavy. Before we get into details, I want to acknowledge that.",
        "That makes sense to feel upset about.",
        "That sounds humiliating, and I want to stay with that first.",
        "It makes sense that being called out publicly would hit hard.",
        "The impact was real, even if the intent is unclear.",
        "That sounds unfair from where you were standing. What part hit hardest?",
      ],
    },
    {
      id: "work-and-pressure",
      label: "Work and pressure",
      tag: "Updates, meetings, team load",
      tone: "Professional",
      phrases: [
        "I can hear there's pressure around this. Let's name that first, then sort the timeline.",
        "It makes sense that people are worried. I'll speak to that first, then walk through the plan.",
        "That result was disappointing. Let's name that first, then look at what the data tells us.",
        "I hear the pressure. Let's acknowledge the load first, then sort what has to move.",
        "I get why that would land badly. The factual piece I should add is...",
        "That's a poor experience to have. I'll not minimise it. The next practical step is...",
      ],
    },
    {
      id: "bridge-to-facts",
      label: "Bridge to the facts",
      tag: "Clarify or correct without dismissing",
      tone: "Direct",
      phrases: [
        "The feeling makes sense from what you saw. The fact I need to correct is...",
        "I want to stay with the feeling and also get the facts right.",
        "Can we separate the impact from the sequence for a moment?",
        "One detail that may change the picture is...",
        "The detail I want to check is...",
        "I can see why that felt alarming. The fact I need to correct is...",
        "I can see that landed badly. I want to address that before explaining my intent.",
      ],
    },
    {
      id: "recovery-resequence",
      label: "Recovery and re-sequencing",
      tag: "Back up when you rushed",
      tone: "Repair",
      phrases: [
        "I jumped to the facts too fast. Let me back up.",
        "I may have named that wrong. What's the feeling closer to?",
        "That came out formulaic. What I mean is: I do care about how this affected you.",
        "I don't want to make this worse. Let me slow down.",
        "I'm not saying every detail is settled. The feeling makes sense from how it looked to you.",
        "Before I respond to the specific point, I want to acknowledge that this felt unfair to you.",
        "I think we've named the impact. Would it help to move into the details now?",
      ],
    },
    {
      id: "boundaries-safety",
      label: "Boundaries and safety",
      tag: "Pressure, limits, urgent moments",
      tone: "High-stakes",
      phrases: [
        "I can tell this matters. I'm still not able to agree to that, but I want to respect the feeling behind it.",
        "This is scary. I need two quick facts so we can handle it safely.",
        "I hear the urgency. First: this is stressful. Second: here's what we know so far.",
        "I can see that hurt. My intention doesn't cancel the impact, so I want to address that first.",
        "That cost you time, and that's frustrating. I'll check the process after acknowledging that.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "Is there immediate danger or a time-critical decision?",
      action:
        "Compress the acknowledgement, then give the facts needed for safety.",
      phrase:
        "This is scary. I need two quick facts so we can handle it safely.",
    },
    {
      condition:
        "Is the person emotionally activated or using strong evaluative language?",
      action: "Start with emotion before facts.",
      phrase: "That sounds really frustrating.",
    },
    {
      condition: "Is the emotion clear enough to name?",
      action: "Use a modest label. If not, use a broad impact phrase.",
      phrase: "That sounds like a lot.",
    },
    {
      condition: "Do you need to correct or clarify facts?",
      action:
        'Bridge after the acknowledgement. Never lead the bridge with "but."',
      phrase: "The detail I want to check is...",
    },
    {
      condition: "Did they settle or confirm?",
      action: "Move into facts, details or next steps.",
      phrase: "When you're ready, we can look at what happened next.",
    },
    {
      condition: "Are you using emotion-first to avoid accountability?",
      action: "Stop and take responsibility directly.",
      phrase:
        "You're right to be annoyed. That was my miss, and here's what I'll do.",
    },
  ],
  ladder: [
    {
      weak: '"They completely ignored me" → "No they didn\'t. They were just busy."',
      better: '"That probably felt dismissive. They may also have been busy."',
      best: '"That probably felt dismissive. I want to stay with that first. Then we can check whether it was intentional or just timing."',
    },
    {
      weak: '"This deadline is impossible" → "It\'s not impossible. We just need to prioritise."',
      better: '"I can hear the pressure. Let\'s prioritise."',
      best: '"I can hear the pressure, and it makes sense this feels too much right now. Let\'s name the load first, then separate what must be done from what can move."',
    },
    {
      weak: '"Your team wasted my time" → "Actually, our records show we replied within policy."',
      better: '"I\'m sorry it felt like a waste of time. Our records show..."',
      best: "\"That's a frustrating experience, and I wouldn't want to feel bounced around either. I'll address the impact first, then check the record so we solve it accurately.\"",
    },
    {
      weak: '"You never listen" → "That\'s not true. I listened yesterday."',
      better: '"It sounds like you felt unheard."',
      best: '"It sounds like you felt unheard, and I want to take that seriously before defending myself. Can I reflect what I\'m hearing, then talk about the specific moments?"',
    },
  ],
  scenarios: [
    {
      situation: "Someone vents about unfair treatment",
      move: "Meet the emotional impact before testing accuracy.",
      phrase:
        "That sounds unfair from where you were standing. What part hit hardest?",
    },
    {
      situation: "A team member is overwhelmed by workload",
      move: "Name the pressure before prioritising.",
      phrase:
        "I hear the pressure. Let's acknowledge the load first, then sort what has to move.",
    },
    {
      situation: "You need to correct misinformation",
      move: "Validate the feeling, then separate the fact.",
      phrase:
        "I can see why that felt alarming. The fact I need to correct is...",
    },
    {
      situation: "You are receiving criticism",
      move: "Acknowledge the impact before you explain your intent.",
      phrase:
        "I can see that landed badly. I want to address that before explaining my intent.",
    },
    {
      situation: "A client is angry about the process",
      move: "Acknowledge the cost before the policy.",
      phrase:
        "That cost you time, and that's frustrating. I'll check the process after acknowledging that.",
    },
    {
      situation: "Safety or urgent decision",
      move: "Use a compressed emotion-first bridge, then the facts.",
      phrase:
        "This is scary. I need two quick facts so we can handle it safely.",
    },
  ],
  calibration: {
    working: [
      "Their breathing, pace or message length settles.",
      'They add nuance: "I know they may not have meant it, but..."',
      "They answer the factual question after the acknowledgement.",
      'They say "yes," "exactly," or "that is the part."',
      "They move from raw feeling into detail, ready to work the problem.",
      "They lean in and share more.",
    ],
    adjust: [
      'They correct your label ("I am not angry. I am disappointed"). Take the correction and move on.',
      "They become more factual, signalling they are ready to move to the facts.",
      "They say you are overdoing it or making it dramatic: shorten the emotional focus.",
      "They ask directly for information or a solution: give it.",
      "They seem more activated by the acknowledgement: slow down or change tack.",
      "They say they do not want to discuss it, or safety becomes the priority: stop and re-sequence.",
      "The conversation goes circular with no new information: bridge to facts or next steps.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the load",
      task: "In three real complaints today, silently name the emotion to yourself before you reply. Notice how often the urge to correct arrives first.",
    },
    {
      day: "Day 2",
      title: "The three-second gate",
      task: "Read a complaint sentence, pause for three seconds, and write one emotion-first opener under twelve words. It must contain no correction, advice or explanation.",
    },
    {
      day: "Day 3",
      title: "Add the bridge",
      task: 'Take yesterday\'s openers and add a factual bridge that starts with "and" or "the detail I want to check is": never with "but."',
    },
    {
      day: "Day 4",
      title: "Correct without erasing",
      task: "Pick five inaccurate but understandable claims. For each, validate the felt impact, then correct one fact in neutral wording that keeps feeling and fact separate.",
    },
    {
      day: "Day 5",
      title: "Impact before intent",
      task: 'Write three defensive replies you would normally give. Rewrite each impact-first, adding one sentence of responsibility, with no "but" in the first sentence.',
    },
    {
      day: "Day 6",
      title: "Say it live",
      task: "In one real conversation, use emotion before facts once. Afterwards, ask the person whether it felt helpful, too much, or too slow.",
    },
    {
      day: "Day 7",
      title: "Calibrate and repair",
      task: "Practise shortening the move when someone asks for facts, and use one recovery line when you mis-sequence, so backing up feels natural under pressure.",
    },
  ],
  checklist: [
    "Did I respond to the emotional weight before the facts?",
    "Did my first sentence avoid correction, advice or explanation?",
    "Did I keep facts and feelings separate, without treating either as fake?",
    'Did I avoid using "I understand, but" as a dismissal wrapper?',
    "Did I repair if I mislabelled the emotion or rushed?",
    "Did I return to the facts, decision or next step once the feeling was met?",
  ],
  example: {
    without: [
      "Alex: The manager made that comment in front of everyone. I felt so small.",
      "Jordan: I doubt they meant it that way. What exactly did they say?",
      "Alex: Never mind. You're doing the same thing.",
      "Why it fails: the correction lands before any acknowledgement, so Alex hears dismissal and shuts down.",
    ],
    with: [
      "Alex: The manager made that comment in front of everyone. I felt so small.",
      "Jordan: That sounds humiliating. I want to stay with that first rather than rush into analysing it. It makes sense that being called out publicly would hit hard.",
      "Alex: Exactly. I know maybe they were joking, but it really landed.",
      "Jordan: The impact was real, even if the intent is unclear. When you're ready, we can separate the feeling, the exact words, and what you want to do next.",
      "Why it works: the impact is met and named before any analysis, so Alex stays open and the facts become reachable.",
    ],
    note: 'The mid-point "better" version ("That sounds embarrassing and unfair. What did they say?") acknowledges the feeling but moves to facts a beat too fast. The advanced version lets the acknowledgement land before it bridges.',
  },
  influencePayoff: {
    feeling:
      '"My reaction was taken seriously. I did not have to fight to be heard before the facts arrived."',
    principle:
      "People listen to facts more openly once they feel the person behind the claim has been respected. Meet the impact first and the correction stops sounding like a refusal to care.",
    gains: [
      "Lower defensiveness, because they do not have to fight to have the impact recognised",
      "Better factual listening, because the correction arrives after respect has been shown",
      "Protected trust in tense moments: humane and accurate, not warm-but-vague or correct-but-cold",
      "Cleaner corrections, because you can hold a fact boundary without sounding dismissive",
      "Faster de-escalation, so the conversation can reach the facts at all",
      "Preserved dignity and autonomy for the other person",
    ],
    whyMostFail: [
      "They treat it as a preface, kind words bolted onto a correction, rather than a genuine change of sequence.",
      "They deliver the acknowledgement mechanically, so it sounds scripted.",
      "They over-stay in vague sympathy and never return to the facts.",
      "They use the empathy to soften an agenda or dodge accountability.",
    ],
  },
  fieldTip: {
    headline: "Put one human sentence before the factual one.",
    body: 'If you can do nothing else, do that. A reliable default is: "That sounds [emotion or impact]. The detail I want to check is [fact]." Emotion-first is not fact-last: the goal is not to bury reality but to make it easier to hear. Remember the spine: Perception → Move → Phrase → Calibration → Recovery → Chain.',
    example:
      '"That sounds really stressful. The one detail I want to check is when the email actually went out."',
    dont: "Don't confuse emotion-first with fact-last, or let the acknowledgement become an excuse to avoid the facts.",
    do: "Do let the first sentence land fully before you bridge. A half-second of quiet does more than extra words.",
  },
  method: [
    {
      step: "1",
      title: "Notice the emotional load",
      body: "Listen for the signal that feeling, not just information, is on the table before you decide how to respond.",
      examples: [
        {
          label: "Cues",
          text: '"unfair," "impossible," "humiliating," a suddenly clipped tone, or going quiet.',
        },
      ],
    },
    {
      step: "2",
      title: "Pause before explaining",
      body: "Catch the reflex to correct, defend, solve or ask for more facts. A three-second gap is usually enough to change what comes out of your mouth first.",
      examples: [
        {
          label: "Hold back",
          text: '"Actually, what happened was..." Don\'t lead with this.',
        },
      ],
    },
    {
      step: "3",
      title: "Acknowledge the feeling first",
      body: "One short, sincere sentence in ordinary words, not a diagnostic label. The sentence should show you heard the human cost before the content.",
      examples: [
        {
          label: "Say",
          text: '"That sounds really frustrating." / "That sounds heavy."',
        },
      ],
    },
    {
      step: "4",
      title: "Keep accuracy alive",
      body: "Do not agree to facts you do not know just to be kind. When impact and accuracy diverge, name that you can hold both.",
      examples: [
        {
          label: "Separate them",
          text: '"The feeling makes sense from what you saw. The fact I need to check is..."',
        },
      ],
    },
    {
      step: "5",
      title: "Bridge gently to the facts",
      body: 'Use "and" or "the detail I want to check is," never a dismissive "but." The bridge should feel like a continuation, not a reversal.',
      examples: [
        {
          label: "Weak vs better",
          text: '"but our records show..." → "and I\'ll check the record so we get it right."',
        },
      ],
    },
    {
      step: "6",
      title: "Calibrate, then repair if needed",
      body: "If they settle, move into facts. If they resist or ask for data, shorten and answer clearly. If you rushed or overdid it, name the miss and re-sequence.",
      examples: [
        {
          label: "Repair",
          text: '"I jumped to the facts too fast. Let me back up."',
        },
      ],
    },
  ],
  liveThreadClues: [
    'Strong feeling words: "unfair," "humiliated," "impossible"',
    'Absolutes: "always," "never," "no way"',
    "Pace changes: speeding up or going quiet",
    "Sarcasm or a suddenly clipped tone",
    "Repetition of the same complaint",
    'Shutdown: "never mind," "forget it"',
  ],
  commonMistakes: [
    {
      mistake: "Fact-correcting too early",
      soundsLike: '"Actually, our records show we replied within policy."',
      better:
        "Acknowledge the emotional impact first, then add the correction.",
    },
    {
      mistake: "A fake empathy preface",
      soundsLike: '"I understand, but..."',
      better: "Let the acknowledgement land completely before you bridge.",
    },
    {
      mistake: "Over-labelling the emotion",
      soundsLike: '"You must feel angry, betrayed and disrespected."',
      better: 'Use one modest label: "frustrating," "heavy," or "stressful."',
    },
    {
      mistake: "Agreeing with a false claim to be kind",
      soundsLike: '"You\'re right, they completely ignored you."',
      better: "Validate the feeling while keeping the facts separate.",
    },
    {
      mistake: "Staying only in emotion when facts are needed",
      soundsLike: "Circling the feeling long after they want a solution.",
      better:
        "Bridge to facts once the person shows enough regulation and consent.",
    },
    {
      mistake: "Using the move to delay accountability",
      soundsLike: '"I hear you\'re upset...", and then no ownership.',
      better:
        "Acknowledge impact, then take concrete responsibility or action.",
    },
    {
      mistake: "Applying it during an acute safety need",
      soundsLike: "A gentle acknowledgement while urgent facts wait.",
      better:
        'Use a safety-first bridge: "This is scary. I need one fact quickly to keep you safe."',
    },
  ],
  recoveryPhrases: [
    "I jumped to the facts too fast. Let me back up. That sounds like it really landed hard.",
    "I may have named that wrong. What's the feeling closer to?",
    "That came out formulaic. What I mean is: I do care about how this affected you.",
    "Yes, I'll give you the facts. I just wanted to register the impact first.",
    "I'm not saying every detail is settled. I'm saying the feeling makes sense from how it looked to you.",
    "I don't want to make this worse. Let me slow down and separate the feeling, the facts, and what we do next.",
    "I think we've named the impact. Would it help to move into the details now?",
  ],
  bestRecoveryLine:
    "I jumped to the facts too fast. Let me back up. That sounds like it really landed hard.",
  chains: [
    {
      label: "Upset and partly inaccurate",
      sequence: "TC006 → TC098 → TC005",
      example: [
        "When they're upset and some of the story is wrong.",
        "Name the emotion (Emotional labelling), put emotion before facts, then validate without agreeing to the false detail.",
        '"That sounds humiliating. That makes sense, and I don\'t have to sign off on every detail to take the feeling seriously."',
      ],
    },
    {
      label: "Activated and tangled",
      sequence: "TC029 → TC098 → TC011",
      example: [
        "When someone is activated and the story is a knot.",
        "Pause, acknowledge the emotion before facts, then run a summary check.",
        '"...(let the silence sit). That sounds like a lot. Let me check I have the sequence right."',
      ],
    },
    {
      label: "Feeling plus meaning",
      sequence: "TC004 → TC098 → TC040",
      example: [
        "When a disclosure carries both feeling and significance.",
        "Reflect what you heard, sequence emotion before analysis, then reflect what it seems to mean.",
        '"So it hit hard in the moment, and it sounds like it mattered because you had worked so long for it."',
      ],
    },
    {
      label: "Repair and a next step",
      sequence: "TC098 → TC053 → TC013",
      example: [
        "When a conflict needs repair and a clear ask.",
        "Meet the emotion first, structure the issue with OFNR, then make one clean request.",
        '"That landed badly, I get it. When the update came late, I felt stuck, could we agree to flag slips by Friday?"',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC006",
      reason:
        "Emotional labelling names the feeling accurately. TC098 decides the sequence: emotion first, then facts. Ask: am I naming the feeling, or choosing what comes before the correction?",
    },
    {
      id: "TC005",
      reason:
        "Both separate feeling from accuracy. Use TC005 (Validation without agreement) when the risk is sounding like you endorse a claim. Use TC098 when the risk is that facts arrive too early and sound dismissive.",
    },
    {
      id: "TC004",
      reason:
        "TC098 is the gate that stops you leading with details. TC004 (Reflective listening) is the fuller pattern of mirroring content and feeling once you are through the gate.",
    },
    {
      id: "TC040",
      reason:
        'Use TC040 (Meaning reflection) for "what did this mean to you?". Use TC098 for "what should come before the facts?" TC098 handles impact. TC040 handles significance.',
    },
    {
      id: "TC053",
      reason:
        "TC098 is a fast first response before facts. TC053 (NVC / OFNR) is the full observation-feeling-need-request structure for structured conflict or a considered request.",
    },
    {
      id: "TC090",
      reason:
        "Both delay the practical answer. If what you are holding back is advice or a solution, use TC090 (Do-not-fix-yet discipline). If it is a factual correction or explanation, use TC098.",
    },
  ],
};
