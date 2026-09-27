import type { CardData } from "../card-types";

export const TC051: CardData = {
  pdfUrl: "cards/TC051/TC051_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC051/TC051_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC051/TC051_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC051/TC051_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC051/TC051_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC051/TC051_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC051/TC051_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC051/TC051_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC051",
  whyItWorks:
    "RASA is a four-step response structure: Receive, Appreciate, Summarise, Ask. You take in what someone actually said, acknowledge the contribution or feeling, reflect the core meaning back in a line, then ask one useful follow-up. It works because it makes thinking easier for the other person: they feel accurately heard, the point is sequenced so what matters comes first, and they are left with room to respond. Its pull comes from clarity and respect, not from pressure.",
  whatItIsNot: [
    "It is not a script to recite mechanically, or four letters to perform out loud.",
    "It is not a way to avoid listening, compress emotion into a template, or force the other person into your structure.",
    "It is not a persuasion trick: the influence comes from the person feeling received, not managed.",
    "If the structure makes the conversation less humane, it is the wrong move. Slow down and use something simpler.",
  ],
  overview: {
    coreFormula: [
      "Receive → Appreciate → Summarise → Ask",
      "Receive: give full attention and take in what they actually said.",
      "Appreciate: acknowledge the contribution or feeling with a small, genuine signal.",
      "Summarise: reflect the core meaning back in one line.",
      "Ask: follow with one useful question that moves it forward.",
    ],
    minimumViableMove:
      "Silently run the four steps, then say one line that reflects the core point back and asks a single useful question, without ever naming the framework.",
    impact: "Medium",
    difficulty: "Easy-Medium",
    misuse:
      "It fails when you perform the four letters mechanically (announcing the structure or forcing every sentence into it) so the person feels processed rather than genuinely heard.",
    bestFor: [
      "Active listening and making someone feel accurately heard",
      "Sensitive or emotional conversations handled with care",
      "Coaching, mentoring and reflective supervision",
      "One-to-ones where someone is thinking out loud",
      "Organising a concise contribution under pressure",
      "Meetings and updates where you want a point to land clearly",
    ],
  },
  notFor: [
    "Urgent instruction, where people need to act rather than be summarised",
    "Legalistic correction or fixed procedure",
    "High-risk decisions that need direct, immediate action",
    "Moments when summarising would feel premature",
    "Raw distress, shame or grief, where validation must come first",
    "When physical safety or an emergency response takes priority",
  ],
  phraseBank: [
    {
      id: "quick",
      label: "Quick reflect-and-ask",
      tag: "Short one-liners",
      tone: "Quick",
      phrases: [
        "So the main thing is X, have I got that right?",
        "Let me make sure I've got it: the key point is X.",
        "What matters most here, in one line?",
        "So, if I heard you right...",
        "The heart of it seems to be X. What's the next question?",
        "Say more about the part that matters most.",
        "Where would it help to go from here?",
        "Quick check. Is X the bit that really counts?",
      ],
    },
    {
      id: "warm",
      label: "Receive & appreciate",
      tag: "Warmth and acknowledgement",
      tone: "Warm",
      phrases: [
        "Thanks for laying that out. I can tell you've thought about it.",
        "I appreciate you talking me through it.",
        "That's a lot to hold. I'm glad you said it.",
        "I can see why that matters to you.",
        "There's real care in how you put that.",
        "I'm following you. Keep going.",
        "That makes sense, and I appreciate the honesty.",
        "I want to get this right, so let me reflect it back.",
      ],
    },
    {
      id: "professional",
      label: "Meetings & email",
      tag: "Work and decision contexts",
      tone: "Professional",
      phrases: [
        "Let me summarise where we've landed: we're aligned on the timeline, and you want to revisit the budget.",
        "So the decision on the table is X. Have I framed that fairly?",
        "Here's what I'm hearing as the priority. Tell me if I've missed anything.",
        "To keep this useful: the core issue is X, and the rest is context.",
        "I'll keep this short, then we can adjust it together.",
        "Summarising for the notes: X is agreed, Y is still open.",
        "The main point is X. Everything else is support.",
        "Before we move on. What would be the most useful next step?",
      ],
    },
    {
      id: "direct",
      label: "Summarise & ask",
      tag: "Clean reflect plus one question",
      tone: "Direct",
      phrases: [
        "The key point seems to be X. What would be useful to explore next?",
        "So what I'm taking from that's X. Is that the crux?",
        "If I'm honest, the real question underneath this is X.",
        "Let me name it plainly: X. What do you want to do about it?",
        "That's the summary. What's the one thing you need from me?",
        "So the choice is between X and Y, which one pulls at you more?",
        "Given all that, what's the next concrete step?",
      ],
    },
    {
      id: "repair",
      label: "Reset the structure",
      tag: "Softening a mechanical moment",
      tone: "Repair",
      phrases: [
        "Sorry, I cut in. Go on, I'm listening.",
        "Let me say back what I heard before I respond.",
        "I'm not trying to steer. Tell me more.",
        "Did I summarise that fairly?",
        "Forget the tidy version. What actually matters to you here?",
        "Let me check whether that structure is helping or just sounding neat.",
        "Ignore my summary for a second. Did I miss the real point?",
      ],
    },
    {
      id: "high-stakes",
      label: "Sensitive & emotional",
      tag: "Validate before you structure",
      tone: "High-stakes",
      phrases: [
        "Before I try to tidy this up. How are you actually doing with it?",
        "I don't want to summarise too soon. Take your time.",
        "Let me sit with what you said before I say anything back.",
        "That sounds really hard. I just want to make sure I've heard it.",
        "I could reflect it back, but first. Is there more you need to say?",
        "The point can wait. What do you need right now?",
        "I want to get this right, because it clearly matters.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "They need speed",
      action:
        "Compress to one reflect-and-ask line and skip the appreciate step.",
      phrase: "The key point is X. What's the next step?",
    },
    {
      condition: "They're carrying emotion",
      action: "Validate first and delay the summary until they feel heard.",
      phrase: "That sounds heavy. I'm here, take your time.",
    },
    {
      condition: "They need to tell the story",
      action:
        "Switch to an example-led structure like STAR or CARL and let them narrate.",
      phrase: "Walk me through what happened, start to finish.",
    },
    {
      condition: "They need a decision or action",
      action: "Run the structure quickly, then close on one clean next step.",
      phrase: "So the point is X. Shall we agree the next step?",
    },
    {
      condition: "They look confused by the framing",
      action:
        "Summarise once and invite correction rather than pushing the structure harder.",
      phrase: "Have I got that right, or have I missed the real point?",
    },
  ],
  ladder: [
    {
      weak: "Using RASA as a visible script and sounding rehearsed.",
      better: "Using RASA silently to organise a concise response.",
      best: "Using RASA flexibly, then checking whether the person is clearer, more heard, or better able to respond.",
    },
    {
      weak: "Announcing the framework and forcing every sentence into the four steps.",
      better: "Moving through the steps quietly, without naming any of them.",
      best: "Noticing when a different move is needed and adapting without defending the structure.",
    },
    {
      weak: "Jumping to your summary before they've finished talking.",
      better: "Receiving fully, then reflecting the core point back.",
      best: 'Receiving, appreciating and summarising so accurately that they say "exactly".',
    },
  ],
  scenarios: [
    {
      situation: "Work meeting",
      move: "Run the structure silently, then contribute one concise, memorable summary.",
      phrase:
        "So we're aligned on the timeline. The open question is budget. What do we want to decide today?",
    },
    {
      situation: "Email or written update",
      move: "Put each step into short, scannable paragraphs or bullets.",
      phrase:
        "Here's what I heard, what I value in it, the core point, and one question for you.",
    },
    {
      situation: "Giving feedback",
      move: "Check what kind of feedback would help before you structure anything.",
      phrase:
        "Would it help to hear my read on it, or do you mainly want to think out loud?",
    },
    {
      situation: "Difficult conversation",
      move: "Use one sentence per step, then pause and let them respond.",
      phrase:
        "I hear you. I get why it matters. The core seems to be X. What would help now?",
    },
    {
      situation: "Coaching or mentoring",
      move: "Weight the Ask: reflect briefly, then hand the thinking back.",
      phrase:
        "So the sticking point is X. What options have you already considered?",
    },
    {
      situation: "Someone in distress",
      move: "Stay on Receive and Appreciate. Don't summarise until they feel heard.",
      phrase:
        "That's a lot to carry. I'm not going to rush you. Say as much as you need.",
    },
  ],
  calibration: {
    working: [
      "They become clearer and more specific.",
      "They ask a sharper, more focused question back.",
      "They summarise the point accurately themselves.",
      "They're able to choose a next step.",
      'They say "exactly" or "that\'s it": the summary landed.',
      "They relax and keep talking, rather than correcting you.",
    ],
    adjust: [
      "They look confused or go quiet after your summary.",
      "They challenge or correct your framing.",
      "They seem to need the human context before any structure.",
      "The structure starts to sound defensive, performative or salesy.",
      "It's beginning to feel like a lecture rather than a conversation.",
      "You're summarising before they've finished: slow down and receive more.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Learn the four steps",
      task: "Memorise Receive → Appreciate → Summarise → Ask, then write one sentence for each step drawn from a real conversation you had today.",
    },
    {
      day: "Day 2",
      title: "Draft a full response",
      task: "Take a real message or comment and write a 60-second reply that moves through all four steps in order.",
    },
    {
      day: "Day 3",
      title: "Cut it back",
      task: "Trim yesterday's response by a third without losing the core point. Notice which words were scaffolding.",
    },
    {
      day: "Day 4",
      title: "Say it two ways",
      task: "Read it aloud once as a visible structure and once as plain speech. Keep only the version that sounds human.",
    },
    {
      day: "Day 5",
      title: "Summarise live",
      task: 'In one real conversation, reflect the core point back in a single sentence and watch whether they say "exactly" or correct you.',
    },
    {
      day: "Day 6",
      title: "Lead with appreciate",
      task: "In a sensitive moment, receive and appreciate first: hold the summary until they've fully finished.",
    },
    {
      day: "Day 7",
      title: "Recover on purpose",
      task: "Catch yourself sounding mechanical, and use one recovery line to reset the conversation back to plain speech.",
    },
  ],
  checklist: [
    "Did I use RASA to serve the listener, not to sound polished?",
    "Was the core point clear by the end?",
    "Did I keep it concise?",
    "Did I adapt when they needed something else?",
    "Did I preserve their autonomy and dignity?",
    "Did I actually listen, or just run the steps?",
  ],
  example: {
    without: [
      'Colleague: "I\'m drowning in this project. Every time I fix one thing, two more break."',
      "You: \"Okay, I'm going to use a structure here. First, I receive what you're saying.\"",
      'You: "Second, I appreciate that you\'re frustrated."',
      'You: "Third, to summarise: the project is difficult."',
      'You: "Fourth, my question is. What will you do next?"',
      "Why it's weak:",
      "announces the framework out loud",
      "forces every sentence into a labelled step",
      "the summary is generic and adds nothing",
      "the person feels processed, not heard",
    ],
    with: [
      'Colleague: "I\'m drowning in this project. Every time I fix one thing, two more break."',
      'You: "That sounds exhausting, like you can\'t get ahead of it." (receive + appreciate)',
      "Colleague: \"Exactly. And I can't tell if it's the code or just me.\"",
      "You: \"So the worst part isn't the workload, it's not knowing where the problem actually is.\" (summarise)",
      "Colleague: \"Yeah. That's the bit that's doing my head in.\"",
      'You: "Would it help to map out where the breakages are first, before touching anything?" (ask)',
      'Colleague: "Actually, yes. That\'d stop me flailing."',
      "Why this works:",
      "no framework is named. It just sounds like good listening",
      'the summary names the real issue, so they say "exactly"',
      "the question hands the next step back to them",
    ],
    note: "The four steps run underneath the conversation. The other person never hears the scaffolding. They only feel understood.",
  },
  influencePayoff: {
    feeling: '"They actually heard the real point, not just the words."',
    principle:
      "People become more receptive to you once they feel you have first received them.",
    gains: [
      "The listener feels accurately heard",
      "A clearer path through a complicated point",
      "Lower cognitive load, because what matters comes first",
      "Better sequencing, so the conversation doesn't sprawl",
      "Trust, because reflecting back proves you were listening",
      "Influence that rests on clarity and respect, not pressure",
    ],
    whyMostFail: [
      "They recite the four letters mechanically instead of genuinely listening.",
      "They announce the framework, so it feels like a technique being done to someone.",
      "They summarise too soon, before the person has finished.",
      "They hijack the topic instead of reflecting the other person's point.",
    ],
  },
  fieldTip: {
    headline: "Receive and summarise before you respond.",
    body: "Use RASA to organise your thinking, then take the scaffolding down before you speak. The other person should feel clarity, not choreography. They should never hear the four steps.",
    example:
      '"So the real issue is the uncertainty, not the workload. What would make it feel manageable?"',
    dont: 'Announce it: "Let me receive, appreciate, summarise and ask here."',
    do: "Run the steps silently, then say one warm line that reflects and asks.",
  },
  method: [
    {
      step: "1",
      title: "Choose it, don't announce it",
      body: "First decide whether structure actually serves this moment. If it does, use it silently: speak in plain language and never name the framework out loud.",
    },
    {
      step: "2",
      title: "Receive",
      body: "Give full attention and take in what they actually said, not the reply you were planning. Hold your answer until they've finished.",
    },
    {
      step: "3",
      title: "Appreciate",
      body: "Acknowledge the contribution or feeling with a small, genuine signal. This is the step that stops the whole thing feeling clinical.",
      examples: [
        { label: "Warm", text: "Thanks for talking me through it." },
        { label: "Brief", text: "That makes sense." },
      ],
    },
    {
      step: "4",
      title: "Summarise",
      body: 'Reflect the core meaning back in one line. Aim for the summary that makes them say "exactly", not a generic restatement of the topic.',
      examples: [
        {
          label: "Reflect the core",
          text: "So the key point is X: the rest is support.",
        },
        { label: "Check it", text: "Have I got the crux right?" },
      ],
    },
    {
      step: "5",
      title: "Ask, then watch",
      body: "Follow with one useful question that moves the conversation forward, then read the response. If they're clearer and more engaged, it worked. If they look confused, summarise again and invite correction rather than pushing the structure harder.",
      examples: [
        { label: "Open", text: "What would be useful to explore next?" },
        { label: "Toward action", text: "What's the one next step?" },
      ],
    },
  ],
  liveThreadClues: [
    '"I don\'t even know where to start."',
    '"There\'s a lot going on right now."',
    '"Sorry, I\'m rambling."',
    "They've dumped a tangle of detail and gone quiet.",
    "You feel the urge to jump straight to advice.",
    "A meeting is going in circles with no clear point.",
  ],
  commonMistakes: [
    {
      mistake: "Announcing the framework",
      soundsLike: '"Let me receive, appreciate, summarise and ask here."',
      better:
        '"That sounds exhausting. So the real problem is X. What would help?"',
    },
    {
      mistake: "Over-structuring, so the steps matter more than the person",
      soundsLike:
        "Forcing every sentence into a step even after they're already clear.",
      better: "Dropping the structure the moment it stops helping.",
    },
    {
      mistake: "Over-explaining after the summary",
      soundsLike:
        "Adding three more paragraphs of context once the point has landed.",
      better: "Stopping at the summary and asking one question.",
    },
    {
      mistake: "Structuring over raw emotion",
      soundsLike: '"To summarise, you\'re upset."',
      better: '"That sounds really hard. Take your time. I\'m listening."',
    },
    {
      mistake: "A generic summary that adds nothing",
      soundsLike: '"So, the project is difficult."',
      better:
        '"So the worst part isn\'t knowing where the problem actually is."',
    },
    {
      mistake: "Skipping the check",
      soundsLike: "Assuming your summary was right and moving straight on.",
      better: '"Have I got that right, or did I miss the real point?"',
    },
  ],
  recoveryPhrases: [
    "Sorry, I cut in. Go on, I'm listening.",
    "Let me say back what I heard before I respond.",
    "I'm not trying to steer. Tell me more.",
    "Did I summarise that fairly?",
    "Forget my tidy summary. What actually matters to you here?",
    "Let me try that again, less like a checklist.",
    "I think I summarised too soon. Say more.",
  ],
  bestRecoveryLine: "Sorry, I cut in. Go on, I'm listening.",
  chains: [
    {
      label: "Clarify then confirm",
      sequence: "RASA → Summary check",
      example: [
        "Run the four steps to reflect the core point.",
        '"So the key point is X. Have I understood that the way you meant it?"',
      ],
    },
    {
      label: "Clarify then ask",
      sequence: "RASA → Clean request",
      example: [
        "Use the structure to surface the real issue.",
        '"Now that\'s clear. Could you send me the figures by Thursday?"',
      ],
    },
    {
      label: "Clarify then release",
      sequence: "RASA → Autonomy release",
      example: [
        "Reflect the point, then hand the choice back.",
        "\"That's my read of it. But it's genuinely your call.\"",
      ],
    },
    {
      label: "Validate then structure",
      sequence: "Validate the concern → RASA",
      example: [
        "If emotion is present, validate before you organise anything.",
        "\"It's completely fair to be frustrated. Can I reflect back what I'm hearing?\"",
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC004",
      reason:
        "Reflective listening reflects meaning back without the appreciate-and-ask scaffolding. Reach for RASA when you also want to acknowledge and move the conversation forward with one question.",
    },
    {
      id: "TC011",
      reason:
        "Summary check is the 'Summarise' step run on its own to confirm understanding. RASA wraps that same check inside receiving, appreciating and asking.",
    },
    {
      id: "TC043",
      reason:
        "OARS is the fuller motivational-interviewing toolkit. RASA is the quicker four-beat version for shaping a single response.",
    },
    {
      id: "TC033",
      reason:
        "Minimal encouragers are the small 'mm', 'go on' signals that power the Receive and Appreciate steps. Use them alone when the person just needs room to keep talking.",
    },
    {
      id: "TC012",
      reason:
        "The Full-attention signal is the 'Receive' step made visible. Use it on its own when presence matters more than reflecting anything back.",
    },
    {
      id: "TC047",
      reason:
        "STAR structures a story or example. Switch to it when the person needs to narrate what happened rather than have their point summarised.",
    },
  ],
};
