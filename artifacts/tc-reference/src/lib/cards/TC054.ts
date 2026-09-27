import type { CardData } from "../card-types";

export const TC054: CardData = {
  pdfUrl: "cards/TC054/TC054_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC054/TC054_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC054/TC054_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC054/TC054_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC054/TC054_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC054/TC054_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC054/TC054_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC054/TC054_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC054",
  whyItWorks:
    "Similarity signalling means naming one real, modest overlap (a shared experience, preference, concern, value, constraint, context, or feeling) so the other person feels less socially distant, then handing the focus straight back to them or to the shared task. It is not a claim that you are the same. It is a clean affiliation cue that says there is at least one real point of contact here. It works because people relax when they sense genuine common ground, which lowers defensiveness, softens disagreement, and makes a new or transactional exchange feel more human, as long as the overlap is true and small enough not to sound like forced bonding.",
  whatItIsNot: [
    "Not forced rapport, and not pretending to share an experience you do not actually share.",
    "Not making the other person's story about you. It is a brief bridge, not a spotlight on your version.",
    "Not flattery, mirroring, identity capture, sales pressure, or a shortcut around consent.",
    'Not a contest of suffering or expertise. "I know exactly how you feel" usually overclaims where "I recognise that part" is cleaner.',
    "Not a tool for pressuring someone to trust, buy, disclose, agree, or join: the test is that they feel accompanied, not captured.",
  ],
  overview: {
    coreFormula: [
      "Shared point + modest signal + evidence + return of focus.",
      '"I recognise that part too, at least the timeline piece. How has that been showing up for you?"',
      "Professional: \"We're dealing with the same constraint, unclear priorities. The clean next step would be one owner per task. Does that match what you're seeing?\"",
      'High-pressure: "We may not agree on every detail, but I think we share the concern about rework. Can we anchor there for the next five minutes?"',
      'Minimum: "I recognise that part. What has it been like on your side?"',
    ],
    minimumViableMove:
      "I recognise that part. What has it been like on your side?",
    impact: "Low",
    difficulty: "Easy-Medium",
    misuse:
      "Using the signal as a self-shift: overclaiming sameness or turning the moment into your own story instead of the other person's point.",
    bestFor: [
      "Early rapport when there is one visible shared point",
      "Tense conversations where a small shared concern can lower defensiveness",
      "Professional collaboration where shared constraints matter",
      "Social settings where the other person is unsure whether you understand the context",
      "Digital messages where tone could otherwise read as cold",
      "Bridging role, age, seniority, or background differences without pretending sameness",
    ],
  },
  notFor: [
    "You would have to invent or exaggerate the similarity.",
    "They are sharing something painful and need listening more than affiliation.",
    "The similarity would minimise or flatten their experience.",
    "The context calls for boundaries or formality, not closeness.",
    "You would be using the signal to gain compliance or agreement.",
    "They have already shown disinterest, discomfort, or a preference for distance.",
  ],
  phraseBank: [
    {
      id: "quick-openers",
      label: "Quick openers",
      tag: "Short, one-line signals",
      tone: "Quick",
      phrases: [
        "I recognise that part. What has it been like on your side?",
        "Same here. What was yours like?",
        "Different situation, but that one piece is familiar.",
        "I have a small version of that too.",
        "Same on that. What changed this time?",
        "That tracks, I have run into the same thing.",
      ],
    },
    {
      id: "low-key-social",
      label: "Low-key social",
      tag: "Warm, everyday overlap",
      tone: "Warm",
      phrases: [
        "I recognise that part. My version wasn't identical, but the uncertainty piece is familiar.",
        "I have a small version of that too. What was yours like?",
        "Same here on the preference for clear plans.",
        "That makes sense to me. I have run into the same thing.",
        "I've had a version of that new-city recalibration. What has been the easiest part so far?",
        "Different situation, but I recognise the uncertainty piece. What has been weighing on you most?",
      ],
    },
    {
      id: "professional",
      label: "Professional",
      tag: "Shared constraints and goals",
      tone: "Professional",
      phrases: [
        "We're probably facing the same constraint: unclear priorities.",
        "I think we're aligned on the underlying goal: reduce rework.",
        "Same concern on my side. I want the output clear without slowing the team down.",
        "I recognise the trade-off you're naming. I'm balancing that too.",
        "We may have different roles, but the pressure point looks similar.",
        "Same constraint here: too many priority labels. What would make the next step clearer for you?",
        "We share the goal of keeping the process predictable. I'll keep the next steps explicit.",
      ],
    },
    {
      id: "digital-async",
      label: "Digital / async",
      tag: "Warming up a written thread",
      tone: "Quick",
      phrases: [
        "Same concern here: unclear ownership.",
        "I'm aligned on keeping this simple and visible.",
        "I recognise that pattern. Here's my read, though I may be missing context.",
        "Similar preference on my end: keep it simple and visible.",
        "Same preference here: clear, simple, no hidden steps. I suggest we list the owner and the deadline.",
        "I'm aligned on the goal. The open question for me is the timing.",
      ],
    },
    {
      id: "disagreement",
      label: "Disagreement / pressure",
      tag: "One shared anchor amid conflict",
      tone: "High-stakes",
      phrases: [
        "We disagree on the route, but I think we share the concern about avoiding rework.",
        "I don't want to overstate agreement. The similarity I do see is the deadline pressure.",
        "There's at least one shared constraint here: the deadline. Can we start there?",
        "I hear the same risk from a different angle.",
        "We may not agree on every detail, but I think we share this concern. Can we anchor there?",
        "We don't agree on the method, but we do share the concern about quality.",
      ],
    },
    {
      id: "difference-protecting",
      label: "Difference-protecting",
      tag: "Naming the overlap without erasing the difference",
      tone: "Direct",
      phrases: [
        "Different situations, clearly. I only meant the small uncertainty piece.",
        "We seem to share a preference for clear expectations.",
        "Let me not overclaim it: the part I recognise is the moving brief.",
        "Different situations, but I recognise that one constraint.",
        "We share the deadline pressure. Let's anchor on the one decision that reduces it.",
        "I recognise one part of that, not the whole thing.",
      ],
    },
    {
      id: "repair",
      label: "Repair",
      tag: "When the signal lands as self-focus",
      tone: "Repair",
      phrases: [
        "I may have made that too much about my version. Back to yours.",
        "Different situations, clearly. Let me come back to what you were saying.",
        "Let me not overclaim the similarity. What I meant was only the timeline part.",
        "That may not be the right comparison. I'll drop it.",
        "Thanks for correcting that. I had the wrong read.",
        "I don't want to force a connection that's not there.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "No real overlap is present",
      action:
        "Do not force it. Listen, reflect, or look for common ground before signalling anything.",
      phrase: "What has that been like for you?",
    },
    {
      condition: "The overlap is real but not specific or safe to name",
      action: "Keep listening or ask a clean question first.",
      phrase: "What part has been the hardest?",
    },
    {
      condition:
        "Naming it could minimise, compete with, or hijack their experience",
      action: "Shrink the signal or skip it, and protect their difference.",
      phrase: "Different situation, but I recognise that one piece.",
    },
    {
      condition: "The overlap is real, specific, and safe",
      action:
        "Signal it once, ground it in a single detail, then return the focus.",
      phrase:
        "I recognise that part, at least the timeline piece. What has it been like on your side?",
    },
    {
      condition: "They open up after the signal",
      action: "Continue gently with a question or a shared next step.",
      phrase: "What would make the next step clearer for you?",
    },
    {
      condition: "They go flat, correct you, or seem uncomfortable",
      action:
        "Return to their point, narrow the claim, or drop it. Do not stack a second signal.",
      phrase: "Back to you. What has been weighing most?",
    },
  ],
  ladder: [
    {
      weak: "Me too. I know exactly what you mean.",
      better:
        "I've had something similar with vague timelines. It can make the whole thing harder to plan.",
      best: "I recognise the vague-timeline part. My situation was different, but that uncertainty piece is familiar. What has made it hardest on your side?",
    },
    {
      weak: "Same.",
      better: "Same on the unclear-timeline part.",
      best: "Same on the unclear-timeline part. What has been the main friction for you?",
    },
    {
      weak: "We're basically the same.",
      better: "Different situations, but I recognise that one constraint.",
      best: "We share the deadline pressure. Let's anchor on the one decision that reduces it.",
    },
  ],
  scenarios: [
    {
      situation:
        "Professional collaboration: a teammate is frustrated by unclear priorities",
      move: "Signal the shared constraint, then return to action.",
      phrase:
        "Same constraint here: too many priority labels. What would make the next step clearer for you?",
    },
    {
      situation: "New social setting: someone mentions being new to the city",
      move: "Signal a small, non-possessive overlap and hand it back.",
      phrase:
        "I've had a version of that new-city recalibration. What has been the easiest part so far?",
    },
    {
      situation: "Disagreement: you differ on the route but share a concern",
      move: "Preserve the disagreement while naming the one overlap.",
      phrase:
        "We don't agree on the method, but I think we share the concern about avoiding rework. Can we anchor there?",
    },
    {
      situation:
        "Supportive listening: someone describes a stressful transition",
      move: "Use only a tiny signal, then listen.",
      phrase:
        "Different situation, but I recognise the uncertainty piece. What has been weighing on you most?",
    },
    {
      situation: "Digital message: a written exchange is turning stiff",
      move: "Add a concise similarity signal to reduce distance, then propose one step.",
      phrase:
        "Same preference here: clear, simple, no hidden steps. I suggest we list the owner and the deadline.",
    },
    {
      situation: "Boundary-sensitive context: a formal client or colleague",
      move: "Use task-relevant similarity only.",
      phrase:
        "We share the goal of keeping the process predictable. I'll keep the next steps explicit.",
    },
  ],
  calibration: {
    working: [
      "They add detail after the signal.",
      "Their tone softens or becomes more animated.",
      'They say "exactly", "yes", "that is it", or "right".',
      "They ask about your brief version without losing their own thread.",
      "They move toward a shared next step.",
      "The conversation feels more relaxed but still focused.",
    ],
    adjust: [
      "A polite but flat response: shrink or drop the signal.",
      "Visible discomfort: switch to listening or clear structure.",
      "They correct your similarity claim: accept it and narrow the claim.",
      "They pull the conversation back to facts: follow them there.",
      "The signal seems to increase distance rather than ease.",
      "They say your situation is different, or seem minimised: protect the difference.",
      "The topic is sensitive and needs listening, not affiliation.",
      "Ask yourself: did my signal make it easier for them, or ask them to manage me?",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the overlap",
      task: "Take five ordinary statements you hear today and, for each, identify exactly one real overlap. Write it down and say nothing yet: the aim is to train the eye for a genuine shared point, not to perform it.",
    },
    {
      day: "Day 2",
      title: "One-sentence signals",
      task: 'For each overlap from Day 1, write a single sentence that names it without taking over. Example: "Same on the last-minute-change part. What changed this time?"',
    },
    {
      day: "Day 3",
      title: "Protect the difference",
      task: 'Rewrite three heavy claims ("I know exactly what you mean", "We are basically the same") into difference-protecting versions such as "Different situation, but I recognise the uncertainty piece."',
    },
    {
      day: "Day 4",
      title: "Return the focus",
      task: 'Take each signal from Day 2 and add a return question or shared next step, so attention lands back on them: "...What has been the main friction for you?"',
    },
    {
      day: "Day 5",
      title: "No self-story rep",
      task: "In one real conversation, use exactly one similarity signal, hold yourself to a single sentence of your own evidence, then hand it back and stop.",
    },
    {
      day: "Day 6",
      title: "Score yourself",
      task: "After each attempt today, score 0-3 (0 = invented or exaggerated, 1 = true but self-focused, 2 = true, brief, specific, 3 = also returned focus cleanly). Aim for consistent 3s.",
    },
    {
      day: "Day 7",
      title: "Read the landing",
      task: "Use one signal in a harder setting: a mild disagreement or a formal contact. Watch whether they soften, correct, or pull away, and narrow or drop the claim accordingly.",
    },
  ],
  checklist: [
    "Was the similarity real and specific?",
    "Did I keep it modest and preserve their difference?",
    "Did I return focus to them, the task, or the shared next step?",
    "Did the signal create ease, or ask them to manage me?",
    "Did I avoid using it to pressure, sell, or override their autonomy?",
    "What would the smaller version be next time?",
  ],
  example: {
    without: [
      'Colleague: "I\'m finding this project hard because the brief keeps shifting."',
      'You: "Oh, I know exactly what you mean. That happened to me last year and it was a nightmare. I had to redo everything twice."',
      'Colleague: "Yeah... anyway."',
      "Why it fails:",
      "grabs the floor and turns their concern into your story",
      "overclaims total understanding",
      "leaves them nothing to respond to",
    ],
    with: [
      'Colleague: "I\'m finding this project hard because the brief keeps shifting."',
      'You: "I\'ve had a version of that with moving briefs. The uncertainty makes planning harder. What keeps changing most?"',
      'Colleague: "The timeline and the audience."',
      "Why the better version works: it signals the similarity briefly, then returns to their specifics.",
      'Colleague: "I\'m finding this project hard because the brief keeps shifting."',
      "You: \"I don't want to overclaim the similarity, because you're closer to this than I am. But I recognise the moving-brief problem: it makes every decision feel provisional. What would stabilise it most, audience, timeline, or approval path?\"",
      'Colleague: "Approval path. If that were clear, the rest would be manageable."',
      'You: "That tracks. We share the same concern there: fewer invisible approvals. Let\'s make that the next ask."',
      "Why the advanced version works: it preserves the difference, signals one real overlap, narrows the problem, and chains into a clean next step.",
    ],
    note: "The advanced version names the difference first, then one overlap, then hands the conversation back: a small bridge, not a spotlight.",
  },
  influencePayoff: {
    feeling:
      '"They noticed something we genuinely share, and did not take over."',
    principle:
      "People relax when they sense a real point of contact. A true, modest overlap reduces unnecessary distance without erasing difference, and it stays clean only while the other person is free to accept, ignore, correct, or move past it.",
    gains: [
      "More ease at the start or middle of a conversation",
      'Less "us versus them" framing',
      "More willingness to keep talking",
      "Smoother transitions into shared problem-solving",
      "Lower defensiveness in a disagreement",
      "Stronger trust when the similarity is true and not overplayed",
    ],
    whyMostFail: [
      "Using the signal as a self-shift, so the moment becomes your story instead of their point.",
      'Overclaiming sameness ("I know exactly how you feel") and minimising their experience.',
      'Grabbing identity too fast ("we are the same kind of person") instead of naming one situational overlap.',
      "Stacking signal after signal until the warmth starts to feel strategic.",
    ],
  },
  fieldTip: {
    headline: "Make the bridge small enough to be true.",
    body: 'The safest similarity signal is not "we are the same." It is "I recognise that one part." Name the overlap, protect the difference, and give the conversation back. If you feel eager to prove the similarity, you are probably about to make the moment about you: shrink the signal or skip it.',
    example:
      '"I recognise that part, different situation, but that piece is familiar. What\'s it like on your side?"',
    dont: '"I know exactly how you feel."',
    do: '"I recognise that one part. What has it been like for you?"',
  },
  method: [
    {
      step: "S",
      title: "Spot a real overlap",
      body: "Listen for a genuine point of contact: shared context, a preference, the same friction, a value, a goal, or matching emotional texture. If there is no real overlap, do not manufacture one.",
      examples: [
        {
          label: "Listen for",
          text: '"the uncertainty", "the first month", "the vague brief", "the deadline"',
        },
      ],
    },
    {
      step: "I",
      title: "Isolate one small point",
      body: "Do not claim the whole experience. Pick the single overlap that is safest and most specific to name, and leave the rest of their story theirs.",
      examples: [
        { label: "Not", text: '"I know exactly what you mean."' },
        { label: "Better", text: '"I recognise the vague-timeline part."' },
      ],
    },
    {
      step: "G",
      title: "Ground it in evidence",
      body: "Use one concrete word from the conversation so the signal feels real rather than generic. One sentence of your own evidence is the limit.",
      examples: [
        {
          label: "Anchor words",
          text: "deadline, first month, moving brief, small team, direct feedback, quiet mornings",
        },
      ],
    },
    {
      step: "N",
      title: "Name it lightly",
      body: "Use wording that leaves room for difference. The goal is a small bridge, not a claim of sameness.",
      examples: [
        {
          label: "Phrasing",
          text: '"I recognise that part" ("I have a version of that") "same constraint here": "we may be aligned on the goal"',
        },
      ],
    },
    {
      step: "A",
      title: "Add a return",
      body: "Move attention straight back to them, the task, or the shared next step. This return is what keeps the signal from sliding into self-disclosure.",
      examples: [
        {
          label: "Return",
          text: '"What has it been like on your side?" or "What would make the next step clearer?"',
        },
      ],
    },
    {
      step: "L",
      title: "Look for the landing",
      body: "Watch the response. If they open up, continue gently. If they go flat, correct, or pull away, narrow the claim or drop it. Do not stack a second signal: one clean signal does more than three eager ones.",
      examples: [
        {
          label: "If they correct you",
          text: '"Different situations, clearly. Back to what you were saying."',
        },
      ],
    },
  ],
  liveThreadClues: [
    'A shared context ("the first week", "a small team")',
    'A preference you both hold ("clear plans", "keep it simple")',
    'The same friction or constraint ("the deadline", "the moving brief")',
    'A value or goal you both want ("fewer surprises", "less rework")',
    'Matching emotional texture ("the uncertainty", "the overwhelm")',
    "A concrete anchor word they used you can echo honestly",
  ],
  commonMistakes: [
    {
      mistake: "Overclaiming sameness",
      soundsLike: '"I know exactly how you feel."',
      better: '"I recognise one part of that."',
    },
    {
      mistake: "Turning the conversation into your story",
      soundsLike: '"That happened to me too, and it was a nightmare..."',
      better:
        'One sentence of evidence, then return: "...what keeps changing most for you?"',
    },
    {
      mistake: "Grabbing identity too quickly",
      soundsLike: '"We\'re the same kind of person."',
      better:
        'Keep it situational: "We seem to share a preference for clear timelines."',
    },
    {
      mistake: "Using similarity to force agreement",
      soundsLike: '"We both want this, so let\'s just do it my way."',
      better:
        '"We\'re not aligned on the method, but we do share the concern about quality."',
    },
    {
      mistake: "Mirroring superficial details too eagerly",
      soundsLike: '"You like coffee? Same. And that show, and that jacket..."',
      better: "Choose one meaningful overlap, not every coincidence.",
    },
    {
      mistake: "Ignoring the difference",
      soundsLike: '"Same thing happened to me."',
      better: '"Different situations, but I recognise that one part."',
    },
    {
      mistake: "Repeating signals until they feel strategic",
      soundsLike: '"Same here... oh, same... me too..."',
      better: "One signal, then listen.",
    },
  ],
  recoveryPhrases: [
    "I shouldn't have said it was the same. I only meant the timeline part was familiar.",
    "I may have overreached there. What's the part I should understand better?",
    "I'm making this too much about my version. Back to yours.",
    "That was a tangent from me. The useful question is what's happening on your side.",
    "Let me reset. What has been the main pressure point for you?",
    "I want to keep this useful. The shared point I see is the deadline constraint.",
    "No need to go further into it. I only wanted to name the one overlap that affects the decision.",
  ],
  bestRecoveryLine: "I'm making this too much about my version. Back to yours.",
  chains: [
    {
      label: "Bridge to a request",
      sequence:
        "Common-ground discovery → Similarity signalling → Clean request",
      example: [
        "Discover a real shared goal or constraint.",
        "Signal the similarity briefly.",
        "Make a clean next-step request.",
        '"We both want fewer surprises in the timeline. Can we agree on one update point each Friday?"',
      ],
    },
    {
      label: "Warm up, then follow the energy",
      sequence: "Warm presence → Similarity signalling → Topic energy tracking",
      example: [
        "Create low-pressure attention.",
        "Name one true overlap.",
        "Follow the topic where their energy rises.",
        '"I recognise the first-week uncertainty. What part has had the most life for you so far?"',
      ],
    },
    {
      label: "Overlap, then give status",
      sequence: "Similarity signalling → Status generosity",
      example: [
        "Name a shared constraint.",
        "Give status to how they handled it.",
        '"Same deadline pressure on my side. I appreciate how clearly you separated urgent from important there."',
      ],
    },
    {
      label: "Overlap, then hold both sides",
      sequence: "Similarity signalling → Double-sided reflection",
      example: [
        "Name the shared point.",
        "Reflect both sides of the tension.",
        '"We both care about speed. At the same time, you don\'t want speed to create rework."',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC039",
      reason:
        "Common-ground discovery is the searching move. Similarity signalling is the naming move. If you are still hunting for a shared concern, value, or constraint, use TC039. Once you already hear one real overlap and just need to name it lightly, use TC054.",
    },
    {
      id: "TC041",
      reason:
        "Topic energy tracking follows the thread where their energy rises or drops. If the cue is energy, use TC041. If the cue is a genuine overlap, name it with TC054. Do not mistake enthusiasm for similarity.",
    },
    {
      id: "TC010",
      reason:
        "Warm presence offers steady attention without adding content. When words would crowd them, use TC010. Reach for TC054 only when a brief verbal overlap would actually reduce distance.",
    },
    {
      id: "TC024",
      reason:
        "Warm opening begins an interaction with brief, genuine warmth. In the first five to fifteen seconds, open with TC024. Use TC054 when a similarity surfaces after the conversation is under way, so it is not an opening gimmick.",
    },
    {
      id: "TC022",
      reason:
        "Status generosity bridges through respect ('you have judgement, effort, or standing here.' Similarity signalling bridges through affiliation) 'we share this point.' If the point is their contribution, use TC022. If it is an overlap, use TC054.",
    },
    {
      id: "TC018",
      reason:
        "Specific appreciation names a behaviour, effort, or quality worth valuing. If the line starts 'I appreciated...', that is TC018. If it starts 'I recognise...' or 'I share...', that is TC054.",
    },
  ],
};
