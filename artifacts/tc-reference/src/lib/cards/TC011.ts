import type { CardData } from "../card-types";

export const TC011: CardData = {
  pdfUrl: "cards/TC011/TC011_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC011/TC011_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC011/TC011_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC011/TC011_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC011/TC011_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC011/TC011_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC011/TC011_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC011/TC011_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC011",
  whyItWorks:
    "Summary check is the deliberate move of briefly saying back what you heard and checking whether you have got it right. It works because people become more receptive once they feel understood: a short, accurate recap proves you were actually listening, surfaces misunderstandings before they poison the next step, and hands the other person the pen to correct you. That willingness to be corrected builds trust and lets any advice, request or disagreement land on what they genuinely care about rather than on what you assumed.",
  whatItIsNot: [
    "It is not a courtroom recap, a lecture, or a way to prove you were right all along.",
    'It is not "So basically..." followed by your own agenda.',
    "It is not a verdict. If they say you've got it wrong, take their version.",
    "It is not a substitute for actually listening to the response.",
  ],
  overview: {
    coreFormula: [
      "Content: So the practical issue is that X happened, then Y changed, and now Z is uncertain.",
      "Emotion: So it wasn't just inconvenient. It felt genuinely frustrating and unfair.",
      "Meaning: The part that seems to matter most is that it made you feel you weren't being taken seriously.",
      "Values: What I'm hearing is that control and fairness matter more here than speed.",
      "Decision: So the choice is between a faster option with more uncertainty and a slower one with more confidence.",
      "Loop-breaking: I think we're circling two things: the decision itself, and how it was communicated.",
    ],
    minimumViableMove:
      'Reflect back the one thing that matters most, then check it: "So the main thing is X, not just Y. Have I got that right?"',
    impact: "High",
    difficulty: "Easy-Medium",
    misuse:
      'It curdles into "So basically..." followed by your own agenda: a premature close that steers rather than checks, is longer than their original point, or gets delivered so mechanically the person feels managed instead of understood.',
    bestFor: [
      "Before giving advice, making a request, disagreeing or persuading",
      "After someone tells a long story or a complex, tangled situation",
      "When emotion, conflict or misunderstanding is in the room",
      "When several issues are knotted together",
      "When you want someone to feel genuinely understood, not just heard",
      "When a conversation is starting to loop or repeat",
      "Before closing a conversation or agreeing next steps",
      "In digital messages, where tone and intent are easily misread",
    ],
  },
  notFor: [
    "They need a direct answer urgently, not a recap",
    "The person needs safety, privacy, silence or practical help instead",
    "Physical safety or an emergency response takes priority",
    "A simple answer would do, and summarising would only slow things down",
    "You would be summarising to steer them toward your own agenda",
    "You have already summarised, and repeating it just makes them say it again",
  ],
  phraseBank: [
    {
      id: "quick_defaults",
      label: "Quick defaults",
      tag: "Short openers",
      tone: "Quick",
      phrases: [
        "Let me check I have this right.",
        "So the main thing is...",
        "The key issue sounds like...",
        "Have I got that right?",
        "What have I missed?",
        "Let me say it back to make sure.",
        "What would you change in that summary?",
      ],
    },
    {
      id: "warm_and_human",
      label: "Warm and human",
      tag: "Warmth before responding",
      tone: "Warm",
      phrases: [
        "I want to make sure I'm not missing the part that matters.",
        "Let me see if I'm hearing the real issue.",
        "So it's not just X. It's also Y.",
        "That sounds like the part that has stayed with you.",
        "The thing underneath this seems to be...",
        "Before I respond, I want to be sure I have understood.",
        "I want to get this right before I say anything else.",
      ],
    },
    {
      id: "conflict_safe",
      label: "Conflict-safe",
      tag: "Objections and tension",
      tone: "High-stakes",
      phrases: [
        "Let me summarise your side before I give mine.",
        "The part I'm hearing is...",
        "You're not just objecting to X. You're worried about Y.",
        "I think you're trying to protect...",
        "What I don't want to miss is...",
        "Tell me where I'm off.",
      ],
    },
    {
      id: "professional_leadership",
      label: "Professional / leadership",
      tag: "Meetings and decisions",
      tone: "Professional",
      phrases: [
        "Let me summarise the decision point.",
        "There seem to be three issues here: X, Y and Z.",
        "The trade-off appears to be...",
        "The risk you're flagging is...",
        "So the next step is...",
        "So the decision is between the faster, riskier option and the slower, safer one.",
        "Can we check we're aligned before moving on?",
      ],
    },
    {
      id: "persuasion_advice_setup",
      label: "Persuasion / advice setup",
      tag: "Before you recommend",
      tone: "Direct",
      phrases: [
        "If I have understood your priority, it is...",
        "Given that the main concern is X, my suggestion would be...",
        "Before I offer a view, the goal seems to be...",
        "So any option needs to protect...",
        "If that's right, the simplest next step may be...",
        "Does that match what you care about most?",
      ],
    },
    {
      id: "digital_text",
      label: "Digital / text",
      tag: "One clean message",
      tone: "Quick",
      phrases: [
        "Quick recap so I know I have understood:",
        "My read: X is the issue, Y is the concern, Z is the next step. Correct me if I missed anything.",
        "I think the main point is...",
        "Before I reply properly, am I right that the core issue is...?",
        "Tell me if I'm oversimplifying.",
        "My short version of what you said is...",
      ],
    },
    {
      id: "repair_reset",
      label: "Repair / reset",
      tag: "When the summary misses",
      tone: "Repair",
      phrases: [
        "I think I summarised that too quickly. Let me try again.",
        "I missed the emotional part there.",
        "That summary was more my agenda than yours. Sorry.",
        "Let me back up. What I should have checked is...",
        "I'm not trying to close this down. I just want to get it right.",
        "Can you correct my version?",
      ],
    },
  ],
  decisionTree: [
    {
      condition:
        "They have told a long or tangled story, or emotion is in the room.",
      action: "Use the minimum viable move: reflect the core, then check it.",
      phrase: "So the main thing is X, not just Y. Have I got that right?",
    },
    {
      condition: "Distress is present, not just information.",
      action: "Validate the feeling before you summarise the content.",
      phrase:
        "That sounds really frustrating. Let me make sure I've got the heart of it.",
    },
    {
      condition:
        "Your summary landed and they confirmed or corrected usefully.",
      action: "Build on it: move toward advice, a request or next steps.",
      phrase:
        "That makes sense. Before I suggest anything, what would need to feel different?",
    },
    {
      condition: "They correct you twice or more and you are not updating.",
      action:
        "Stop summarising. Drop to one clarifying question in their words.",
      phrase: "Tell me where I'm off. What's the part I keep missing?",
    },
    {
      condition: "A simple, urgent answer is what they actually need.",
      action: "Skip the recap and give the direct answer or practical help.",
      phrase: "Short version: yes, let's do it. I'll sort the details.",
    },
    {
      condition: "You have already summarised once.",
      action:
        "Do not repeat mechanically. Switch to action or ordinary contribution.",
      phrase: "Okay, I think we're clear. Shall we agree the next step?",
    },
  ],
  ladder: [
    {
      weak: '"So basically you\'re unhappy with the process." (labels it and moves on)',
      better: '"So the process is slow. Is that right?" (facts only)',
      best: "\"So it's not just that it's slow. You've raised it again and again and nothing changes. Is that right?\"",
    },
    {
      weak: "A paragraph-long replay of everything they said.",
      better: '"So the main thing is the timeline."',
      best: '"So the main thing is the timeline, not the budget. Have I got that right?"',
    },
    {
      weak: "Summarises the facts and stops there.",
      better: "Adds the feeling or meaning underneath the facts.",
      best: "Names what it represented to them, in their own words, and invites correction.",
    },
  ],
  scenarios: [
    {
      situation: "Social conversation",
      move: "Use the smallest natural version so they feel heard, not analysed.",
      phrase: "So it was a brilliant trip, but the ending soured it a bit?",
    },
    {
      situation: "Professional discussion",
      move: "Keep it concise and tie the recap to the task, decision or concern.",
      phrase:
        "So the blocker is the timeline, not the budget. Is that the one to solve?",
    },
    {
      situation: "Conflict or objection",
      move: "Add validation and lower your speed. Do not weaponise the recap.",
      phrase:
        "You're not just annoyed about the change. You feel it was decided without you.",
    },
    {
      situation: "Digital message",
      move: "Write one clean sentence. Avoid long explanations or stacked questions.",
      phrase:
        "Quick recap so I'm sure I read this right: X is the issue, Y is the ask. Correct me if not.",
    },
    {
      situation: "Shy or guarded person",
      move: "Make it lighter, more tentative and lower pressure.",
      phrase: "I might be off, but it sounds like the main thing is X?",
    },
    {
      situation: "High-status or busy person",
      move: "Keep the wording brief, grounded and useful.",
      phrase:
        "So the decision is X versus Y. Which do you want me to run with?",
    },
  ],
  calibration: {
    working: [
      'They say "Exactly", "Yes", "That\'s it", or "That\'s what I mean".',
      "They correct you with useful detail rather than repeating the whole story.",
      "They relax or become less defensive.",
      "The conversation becomes more focused.",
      "They stop repeating the same point.",
      "They become more willing to hear your view or move to next steps.",
      'They add nuance: "It\'s more X than Y."',
    ],
    adjust: [
      'They say "not really" or repeat the same concern. You have missed the real one.',
      "They go flatter, irritated or less engaged. Ease off.",
      "Your summary sounds polished or clinical. Make it shorter and warmer.",
      "Move from facts to meaning. Name what it represented, not just what happened.",
      "Ask what you missed instead of asserting you have got it.",
      "Let them correct you without defending your version.",
      "Use their exact words, not your paraphrase.",
      "If a simple answer is what is needed, drop the summary and give it.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the cue",
      task: "Through the day, notice three moments where a summary would help: a long story, tangled issues, or rising emotion. Just log them. Do not act yet.",
    },
    {
      day: "Day 2",
      title: "One-line content recaps",
      task: 'In three low-stakes conversations, reflect the core fact back in a single sentence and close with "Have I got that right?" Notice who corrects you.',
    },
    {
      day: "Day 3",
      title: "Catch the feeling",
      task: 'Practise emotion and meaning summaries: "So it wasn\'t just inconvenient. It felt unfair." Aim underneath the facts at least twice today.',
    },
    {
      day: "Day 4",
      title: "Swap the close",
      task: 'Replace "Does that make sense?" with "What have I missed?" every time you check understanding. Feel the difference in how people respond.',
    },
    {
      day: "Day 5",
      title: "Use it before you advise",
      task: "In one work conversation, summarise their priority before offering any suggestion, decision or request. Build your recommendation on their words.",
    },
    {
      day: "Day 6",
      title: "Practise the recovery",
      task: 'When a summary lands wrong, use a recovery line ("That was more my agenda than yours, sorry. Let me back up.") and update to what they actually said.',
    },
    {
      day: "Day 7",
      title: "Three-rep integration",
      task: "Run all three in a day: one low-stakes recap, one professional recap before a decision, and one recovery after a missed read. Note what shifted.",
    },
  ],
  checklist: [
    "Did I summarise their point, not my agenda?",
    "Did I catch the meaning or emotion, not just the facts?",
    "Was it shorter than their original point?",
    "Did I invite correction, and accept it without defending?",
    "Did I use the smallest version that would work?",
    "Did the summary actually move the conversation forward?",
  ],
  example: {
    without: [
      'Person: "I keep raising this and nobody actually changes anything."',
      "You: \"So basically you're unhappy with the process. Anyway, here's what we can do.\"",
      'Person: "No, that\'s not what I mean."',
      "Why it's weak:",
      "labels their point instead of checking it",
      "rushes to your agenda before they feel heard",
      "misses the emotional core, so they dig in rather than open up",
    ],
    with: [
      'Person: "I keep raising this and nobody actually changes anything."',
      "You: \"Let me check I have the important part: it's not just that the process is slow. You've raised it several times and it feels like nothing you say changes the outcome. Is that right?\"",
      'Person: "Exactly."',
      "You: \"I'm hearing three layers: the practical issue hasn't moved, the repeated effort has been draining, and the real worry is whether your input is taken seriously. Which is the main one?\"",
      'Person: "The last one. I don\'t feel taken seriously."',
      "You: \"That's the part I didn't want to miss. So the problem isn't only the task. It's trust in whether the feedback loop is real.\"",
      "Why it works:",
      "checks before advising, so they feel heard first",
      "names the meaning underneath the facts",
      "invites correction, then updates to their real answer",
    ],
    note: "The strong version is shorter than a full replay, reaches under the facts to what it meant, and hands them the pen to correct it.",
  },
  influencePayoff: {
    feeling:
      '"They caught the part that actually mattered, not just the words."',
    principle:
      "People become more receptive to you once they feel genuinely understood.",
    gains: [
      "Makes people feel heard at the level of meaning, not just words",
      "Catches hidden misunderstandings before they poison the next step",
      "Builds trust, because you show you are willing to be corrected",
      "Makes persuasion easier: your suggestion builds on what they actually care about",
      "Reduces defensiveness in conflict, because you prove you understood before responding",
      "Turns a messy, looping conversation into shared clarity",
    ],
    whyMostFail: [
      'They hijack the recap: "So basically..." followed by their own agenda.',
      "They deliver it mechanically, so it sounds like a technique, not listening.",
      "They make it too long, or too polished and clinical.",
      "They keep summarising past the cues to stop, and the person feels managed.",
    ],
  },
  fieldTip: {
    headline:
      'A good summary check makes them think: "Yes. That\'s exactly what I was trying to say."',
    body: "Keep the recap shorter than their original point, aim it at the meaning rather than the facts, and hand them the pen to correct you. If they have to repeat themselves after your summary, it missed.",
    example:
      '"Let me check I have the important part...", then stop and let them fix it.',
    do: 'Aim at the feeling or meaning underneath the facts, then check: "Have I got that right?"',
    dont: "Don't use the recap as a runway for your own agenda.",
  },
  method: [
    {
      step: "1",
      title: "Notice the cue",
      body: "A summary check earns its place after a long story, when several issues are tangled, when emotion is in the room, when a conversation is looping, or right before you advise, request or decide. Reach for it when the next thing you say actually matters.",
    },
    {
      step: "2",
      title: "Choose the summary type",
      body: "Match the recap to what they need caught: content, emotion, meaning, values, decision, or loop-breaking. Facts alone rarely land the point. The feeling or the meaning usually does.",
      examples: [
        {
          label: "Content",
          text: "So the issue is that X happened, then Y changed, and now Z is uncertain.",
        },
        {
          label: "Meaning",
          text: "The part that matters most is it made you feel you weren't taken seriously.",
        },
        {
          label: "Decision",
          text: "So the choice is between a faster, riskier option and a slower, safer one.",
        },
      ],
    },
    {
      step: "3",
      title: "Keep it shorter than their point",
      body: "Reflect the core in a sentence or two, in their words, not a courtroom recap. If your summary is longer than what they said, you have overperformed it.",
    },
    {
      step: "4",
      title: "Check, do not assert",
      body: 'End with a genuine invitation to correct you rather than a rhetorical "Does that make sense?" The invitation is what turns a summary into a check.',
      examples: [
        { label: "Open", text: "Have I got that right?" },
        { label: "Open", text: "What have I missed?" },
        { label: "Avoid", text: "Does that make sense?" },
      ],
    },
    {
      step: "5",
      title: "Stop and calibrate",
      body: "Pause. Let them confirm or correct. Update to their answer without defending your version, then move: to advice, a request, or the next step. If they correct you repeatedly, drop the summary and ask one clarifying question.",
    },
  ],
  liveThreadClues: [
    '"I keep saying this and nothing changes..."',
    '"It\'s complicated..."',
    '"There\'s a lot going on..."',
    "\"I don't know, it's just...\"",
    '"Anyway, that\'s the situation."',
    '"We keep going round in circles."',
  ],
  commonMistakes: [
    {
      mistake: "Hijacking the recap",
      soundsLike:
        "\"So basically you're unhappy. Anyway, here's what we'll do.\"",
      better:
        '"Let me check I\'ve got the important part first. Is this right?"',
    },
    {
      mistake: "Making it too long",
      soundsLike: "A paragraph-length replay of everything they just said.",
      better: '"So the core of it is X. Have I got that right?"',
    },
    {
      mistake: "Sounding clinical or superior",
      soundsLike: '"What I\'m hearing you articulate is a systemic concern."',
      better: '"So it\'s less about the task, more about feeling ignored?"',
    },
    {
      mistake: "Only catching the facts",
      soundsLike: '"So X happened, then Y, then Z."',
      better: '"So it wasn\'t just inconvenient. It felt unfair."',
    },
    {
      mistake: "Ignoring the cues to stop",
      soundsLike: "Summarising again after they've already confirmed it.",
      better: "\"Okay, we're clear. What's the next step?\"",
    },
    {
      mistake: "Using it to steer to your agenda",
      soundsLike:
        '"So what you really want is exactly what I was about to suggest."',
      better: "\"If I've got your priority right, it's X. Does that match?\"",
    },
  ],
  recoveryPhrases: [
    "I think I summarised that too quickly. Let me try again.",
    "I missed the part that mattered most there.",
    "That sounded like my agenda, not yours. Sorry.",
    "Good correction. Let me update what I heard.",
    "I'm not trying to close this down. I just want to get it right.",
    "Tell me where I'm off.",
    "Let me make that less clinical.",
    "Can I rewind and check the real issue?",
  ],
  bestRecoveryLine:
    "That sounded like my agenda, not yours. Sorry. Tell me where I'm off.",
  chains: [
    {
      label: "Listening chain",
      sequence:
        "Open question → reflective listening → summary check → deeper follow-up",
      example: [
        '"What\'s been going on with it?"',
        '"That sounds exhausting."',
        '"So the main thing is X, not just Y. Right?"',
        '"What would make it feel different?"',
      ],
    },
    {
      label: "Influence chain",
      sequence:
        "Ask goals → summary check → values frame → clean recommendation → autonomy release",
      example: [
        '"What matters most to you here?"',
        '"So control and fairness beat speed for you."',
        '"Given that, the option that protects both is..."',
        '"But it\'s your call."',
      ],
    },
    {
      label: "Conflict chain",
      sequence:
        "Validate → summary check → agreement before disagreement → calibrated question",
      example: [
        '"I get why that stung."',
        '"You\'re not just annoyed at the delay. You feel sidelined."',
        '"You\'re right that it was handled badly."',
        '"What would make this workable?"',
      ],
    },
    {
      label: "Repair chain",
      sequence:
        "Name the rupture → own your part → summary check → ask what was missed",
      example: [
        '"I think I got ahead of you."',
        '"That was my agenda, not yours."',
        '"Let me check the real issue is X."',
        '"What did I miss?"',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC004",
      reason:
        "Reflective listening mirrors the feeling in the moment. Summary check pulls the whole thing together and asks you to confirm it. Reach for TC004 for ongoing warmth, TC011 just before you respond, decide or advise.",
    },
    {
      id: "TC003",
      reason:
        "Comment-before-question softens a single question with a brief comment. Summary check recaps the whole message and checks it. Use TC003 for one exchange, TC011 after a long or tangled share.",
    },
    {
      id: "TC038",
      reason:
        "Conversation threading tracks and returns to open threads across a chat. Summary check compresses what's been said into one checkable statement. Thread when there's more to explore, summarise when it's time to converge.",
    },
    {
      id: "TC030",
      reason:
        "Echo plus question echoes a word or phrase then asks. Summary check restates the meaning of the whole and invites correction. Echo to keep them talking, summarise to make sure you've actually got it.",
    },
    {
      id: "TC037",
      reason:
        "Double-sided reflection names both sides of a tension they're feeling. Summary check confirms your overall read is right. Use TC037 for ambivalence, TC011 to check before acting.",
    },
  ],
};
