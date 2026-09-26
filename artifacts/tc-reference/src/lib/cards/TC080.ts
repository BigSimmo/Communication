import type { CardData } from "../card-types";

export const TC080: CardData = {
  pdfUrl: "cards/TC080/TC080_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet — the designed visual card.",
      href: "cards/TC080/TC080_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC080/TC080_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC080/TC080_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC080/TC080_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC080/TC080_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC080/TC080_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC080/TC080_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC080",
  whyItWorks:
    "NURSE is an empathy-response framework for the moment someone is signalling emotion and moving straight to facts, advice or defence would only make things worse. The letters are five possible responses — Name the emotion, show partial Understanding, Respect the effort or care underneath, offer realistic Support, and Explore what matters next — but the field move is never to recite all five. You notice the cue, choose the one or two statements that actually fit, say them plainly, and leave room. It works because a person who feels accurately seen can think, decide and collaborate again; naming the feeling lowers defensive load and protects dignity, so the practical conversation can finally continue.",
  whatItIsNot: [
    "It is not a checklist to be recited in order. You usually need one or two letters, not all five.",
    'It is not pretending to understand everything. Skip "I know exactly how you feel" unless you genuinely share the context and have been invited to compare.',
    "It is not agreement, diagnosis, forced positivity, flattery, crisis counselling, or a substitute for a safety action.",
    "It is not a delay tactic. If a hard truth, boundary or decision is needed, NURSE makes the delivery more humane — it does not hide it.",
    "It is not a way to soften someone up for pressure, sales or compliance. Respect must be specific and real, and you must never offer support you cannot provide.",
  ],
  overview: {
    coreFormula: [
      "Cue -> Pause -> Choose one NURSE move -> Short empathy statement -> Space -> Calibrate -> Next useful move.",
      "N - Name the emotion lightly, with room for correction.",
      "U - Show partial understanding without claiming to understand it all.",
      "R - Respect a specific effort, value or care the person has shown.",
      "S - Offer realistic support, not vague rescue.",
      "E - Explore the meaning, need or story behind the emotion.",
    ],
    minimumViableMove:
      "It sounds really frustrating. Tell me more about what has been hardest about it.",
    impact: "Medium",
    difficulty: "Medium",
    misuse:
      "It fails when you stack all five letters mechanically, over-label the feeling, claim total understanding, or promise support you cannot deliver. The worst version uses warmth to soften someone up for pressure — false reassurance does more harm than an honest limit.",
    bestFor: [
      "Visible frustration, fear, disappointment, grief, anger or shame",
      "Complaint handling and customer escalation",
      "Team tension and difficult feedback",
      "Family stress and healthcare-style conversations",
      "Moments where facts alone would sound cold",
      "Written replies that need a short acknowledgement before the answer",
    ],
  },
  notFor: [
    "Immediate physical safety or an emergency comes first",
    "The person has asked for a direct factual answer",
    "The emotion label would be speculative or intrusive",
    "You are too activated to speak respectfully",
    "A clear boundary is needed before any empathy",
    "You would be using warmth to pressure, extract or sell",
  ],
  phraseBank: [
    {
      id: "quick-openers",
      label: "Quick openers",
      tag: "Short, drop-in acknowledgements",
      tone: "Quick",
      phrases: [
        "That sounds really rough.",
        "That sounds really heavy.",
        "This seems exhausting.",
        "That sounds stressful.",
        "I hear you.",
        "That is a lot to carry.",
        "I can see this matters to you.",
      ],
    },
    {
      id: "naming",
      label: "Naming the feeling",
      tag: "Name it lightly (N)",
      tone: "Warm",
      phrases: [
        "It sounds like this has been really frustrating.",
        "I am hearing a lot of worry in this.",
        "I may be wrong, but it sounds disappointing.",
        "It sounds scary not to have a clear answer yet.",
        "You sound worn down by this.",
        "There is real weight in what you are saying.",
      ],
    },
    {
      id: "understanding-respecting",
      label: "Understanding & respect",
      tag: "Show it makes sense; respect the effort (U · R)",
      tone: "Warm",
      phrases: [
        "I can see why that would feel like a lot.",
        "That helps me understand why this matters.",
        "Given what happened, it makes sense that you would want clarity.",
        "No wonder this has been sitting with you.",
        "You have clearly been trying to handle this carefully.",
        "I respect how much thought you have put into this.",
        "It is clear you care about getting this right.",
      ],
    },
    {
      id: "supporting-exploring",
      label: "Support & explore",
      tag: "Offer real support, then open it up (S · E)",
      tone: "Direct",
      phrases: [
        "I can help you work through the next step.",
        "I will be direct about what I can and cannot do.",
        "I am not going to leave you guessing.",
        "I can stay with this and help work out what happens next.",
        "Tell me more about what feels most important right now.",
        "What part of this is weighing on you most?",
        "What would help me understand the concern better?",
        "Tell me what part matters most, and we will start there.",
      ],
    },
    {
      id: "professional",
      label: "At work",
      tag: "Meetings, complaints, decisions",
      tone: "Professional",
      phrases: [
        "I can see this has created pressure for you. Let me understand the main concern before we decide the next step.",
        "I can see why this delay is frustrating. Here is what I can do today.",
        "That sounds stressful, especially after the work you have already put in. Tell me what needs attention first.",
        "I can walk through what I know and what I do not know, but first, what is the biggest question on your mind?",
        "I respect that you are trying to protect the outcome. Let me understand the concern before I respond.",
        "Before we get into the fix, I want to make sure I have the main issue right.",
      ],
    },
    {
      id: "repair",
      label: "Softening & correcting",
      tag: "When the empathy misfires",
      tone: "Repair",
      phrases: [
        "I may have named that wrong. What is the better word for it?",
        "That came out too formulaic. Plainly: I can see this matters.",
        "I should not have said I understand exactly. I want to listen better.",
        "Let me be more concrete about what I can and cannot do.",
        "I do not want to push past what you are saying. Let me slow down.",
        "Would it help more if I just answered directly now?",
      ],
    },
    {
      id: "high-stakes",
      label: "Urgency & high pressure",
      tag: "When speed or safety comes first",
      tone: "High-stakes",
      phrases: [
        "I hear the urgency. I am going to focus on the next safe step now.",
        "I can see this is serious. Let me acknowledge it, then move us to what is safest.",
        "This clearly matters a great deal. I want to get the immediate thing right first.",
        "I am not going to talk over how big this feels. Here is the one thing we do next.",
        "I can see how much pressure you are under. Let me be quick and clear.",
        "Let me acknowledge this properly, and then act on it.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "Immediate risk or emergency",
      action:
        "Move to safety first; use only a brief acknowledgement, not full exploration.",
      phrase:
        "I can see this is serious. Let us deal with the safe next step right now.",
    },
    {
      condition: "Visibly emotional, and you can name it safely",
      action:
        "Lead with one low-intensity Naming statement before you explain anything.",
      phrase: "It sounds like this has been really frustrating.",
    },
    {
      condition: "Naming might be wrong or intrusive",
      action: "Use Understanding instead of a label.",
      phrase: "I can see why this matters.",
    },
    {
      condition: "They have clearly been trying hard",
      action: "Respect a specific effort or value, not generic praise.",
      phrase: "You have clearly been trying to handle this carefully.",
    },
    {
      condition: "They need reassurance about your role",
      action: "Offer realistic Support with a concrete commitment.",
      phrase: "I will be direct about what I can and cannot do.",
    },
    {
      condition: "They correct your label or ask for facts",
      action:
        "Take the correction, or answer directly — stop empathising at them.",
      phrase:
        "Fair enough — what is the better word for it? And here is the straight answer.",
    },
  ],
  ladder: [
    {
      weak: '"Calm down, I understand." Dismisses the feeling, overclaims understanding and asks them to regulate for your comfort.',
      better:
        '"It sounds like this has been frustrating." Names the emotion without arguing or fixing.',
      best: '"It sounds like this has been frustrating, especially after you tried to handle it carefully. Tell me what part matters most now." Names, respects the effort and explores the current need.',
    },
    {
      weak: '"You\'re amazing, honestly." Generic praise that could be aimed at anyone.',
      better:
        '"I can tell you\'ve put work into this." Closer, but still vague.',
      best: '"You kept chasing this for a week and kept notes on every call. That took real effort." Respect anchored to something specific and real.',
    },
    {
      weak: '"Here\'s what you should do." Jumps to a fix before the person feels heard.',
      better:
        '"That sounds hard. Have you tried X?" Acknowledges, then still rushes the solution.',
      best: '"That sounds hard. Before I suggest anything, what part is weighing on you most?" Acknowledges, then explores the real concern first.',
    },
  ],
  scenarios: [
    {
      situation: "Customer complaint",
      move: "Acknowledge the frustration and the effort already spent, then be clear about what you can do now.",
      phrase:
        "I can see why this delay is frustrating. You've already spent time chasing it — I can check the status now and be clear about what I can do today.",
    },
    {
      situation: "Manager hearing bad news from a team member",
      move: "Name the stress, respect the work done, then ask what needs attention first.",
      phrase:
        "That sounds stressful, especially after the work you've already put in. Tell me what part needs attention first.",
    },
    {
      situation: "Friend in distress",
      move: "Stay present and warm; explore what is hardest rather than reaching for a fix.",
      phrase:
        "That sounds really heavy. I'm here with you — what feels hardest right now?",
    },
    {
      situation: "Healthcare-style family conversation",
      move: "Name the fear of uncertainty, then offer to share what is known and unknown.",
      phrase:
        "It sounds scary not to have a clear answer yet. I can explain what we know and what we're still checking.",
    },
    {
      situation: "Disagreement",
      move: "Respect the value they're protecting, then understand the concern before responding.",
      phrase:
        "I can see this matters to you. I respect that you're trying to protect the outcome — let me understand the concern before I respond.",
    },
    {
      situation: "Heated digital message",
      move: "Acknowledge in one line, signal that a real answer is coming, then check the main concern.",
      phrase:
        "I can see why this is frustrating. I want to answer directly, but first I want to make sure I understand the main concern.",
    },
  ],
  calibration: {
    working: [
      "They exhale, slow down, or their shoulders drop.",
      "They give more detail or ask a clearer question.",
      "They calmly correct the label rather than escalate.",
      "They shift from accusation to explanation.",
      "Longer sentences, more eye contact, more specifics.",
      "They become willing to consider next steps.",
    ],
    adjust: [
      'They say "that\'s not what I mean" or go more rigid.',
      "Clipped answers, nervous laughter, or a tense silence.",
      "They mock the empathy statement or look like they're being managed.",
      'Repeated "yes, but" — the concern isn\'t landing.',
      "Escalation, shutdown, sarcasm, or a clear request to stop.",
      "They ask for a direct answer — stop empathising and give it.",
      "Your statements start to repeat — switch to a summary, a question or action.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Cue spotting",
      task: "List five emotional cues you tend to miss — clipped answers, repetition, silence, sarcasm, fast speech, tearfulness, a strained voice — and note where you saw each one today.",
    },
    {
      day: "Day 2",
      title: "One letter at a time",
      task: "For three of those cues, write one Naming statement, one Understanding statement and one Exploring question.",
    },
    {
      day: "Day 3",
      title: "Compress",
      task: "Rewrite each response until it is a single sentence under fifteen words, plain enough to say out loud.",
    },
    {
      day: "Day 4",
      title: "Name lightly",
      task: 'Practise lowering the intensity of every label — turn "you\'re furious" into "this sounds frustrating" — and leave room for correction.',
    },
    {
      day: "Day 5",
      title: "Recover from a miss",
      task: 'Deliberately choose the wrong emotion label, then repair it without defensiveness: "I may have named that badly — what\'s the better word?"',
    },
    {
      day: "Day 6",
      title: "Make support real",
      task: "Take three vague reassurances and rewrite each as a concrete offer of what you can and cannot actually do.",
    },
    {
      day: "Day 7",
      title: "Chain it live",
      task: "In one real conversation, follow a single NURSE statement with a summary check or an ask-tell-ask move, then stop and let them respond.",
    },
  ],
  checklist: [
    "Did I notice the emotion before I started explaining?",
    "Did I choose one or two NURSE moves instead of reciting the whole acronym?",
    "Did I name the emotion lightly enough to allow correction?",
    "Was my respect specific and real, and my support something I can actually deliver?",
    "Did my exploring question open the concern, or feel like interrogation?",
    "Did I know when to stop empathising and move to the next practical step?",
  ],
  example: {
    without: [
      'Person: "No one has told me what\'s going on."',
      'You: "You need to calm down. We\'re doing our best. Let me explain the policy."',
      "Why it's weak: it defends, instructs and explains before acknowledging any emotion.",
      "It argues with the feeling instead of letting the person be heard, so the frustration only grows.",
    ],
    with: [
      'Person: "No one has told me what\'s going on."',
      'You (better): "It sounds really frustrating to feel left out of the loop. Let me first understand what you\'ve been told so far."',
      "You (advanced): \"It sounds really frustrating to feel left out of the loop, especially when you've been trying to keep track of everything. I can walk through what I know and what I don't, but first, what's the biggest question on your mind?\"",
      "Why the advanced version works: it doesn't debate whether the frustration is justified.",
      "It avoids false certainty and gives support in a form that can actually be delivered.",
      "It ends with a focused exploring question rather than a lecture.",
    ],
    note: "The advanced reply names the feeling, respects the effort, offers realistic support and explores the immediate need — in two sentences, not five separate NURSE letters.",
  },
  influencePayoff: {
    feeling:
      '"They got the real part of what I was saying. I don\'t have to fight to be taken seriously."',
    principle:
      "People become more receptive to you once they feel you've been receptive to them; naming the emotion lowers defensive load.",
    gains: [
      "Emotional containment — a person who feels seen can think, decide and collaborate again.",
      "Lower defensive load, because the emotion is treated as part of the conversation rather than an obstacle.",
      "Protected dignity — they don't have to escalate or prove the feeling is serious.",
      "A faster route back to the practical issue.",
      "Trust that your warmth is honest, not a tactic.",
      "Clearer information, because emotion is no longer blocking uptake.",
    ],
    whyMostFail: [
      "They stack all five letters mechanically instead of choosing the one the moment needs.",
      'They over-label — "you\'re furious" — when a lighter word would land.',
      "They claim total understanding, or promise support they can't deliver.",
      "They use empathy to hijack the topic or soften someone up for pressure.",
    ],
  },
  fieldTip: {
    headline:
      "Use the one letter the moment is asking for. Don't pour the whole acronym into the room.",
    body: "When you're unsure, start with the safest low-intensity pair: name the feeling, then explore it. One accurate empathy statement beats five generic ones.",
    example:
      '"It sounds like this has been really frustrating. Tell me what part matters most right now."',
    dont: "Recite N-U-R-S-E in order like a script.",
    do: "Notice the cue, pick one or two moves, say them plainly, and leave room.",
  },
  method: [
    {
      step: "1",
      title: "Notice the cue",
      body: "Listen for emotion in the words, tone, pace, silence, repetition, hesitation or sudden sharpness. The cue is your signal to respond to the person before the problem.",
    },
    {
      step: "2",
      title: "Pause before fixing",
      body: "A half-second pause keeps your first sentence from becoming defence, explanation or advice. That pause is most of the skill.",
    },
    {
      step: "3",
      title: "Choose the smallest fitting move",
      body: "You usually need one or two NURSE letters, not all five. Pick the one the moment is actually asking for.",
      examples: [
        {
          label: "Name (N)",
          text: "It sounds like this has been really frustrating.",
        },
        {
          label: "Understand (U)",
          text: "I can see why that would matter to you.",
        },
        {
          label: "Respect (R)",
          text: "You've put real effort into handling this carefully.",
        },
        {
          label: "Support (S)",
          text: "I can stay with this and help work out the next step.",
        },
        {
          label: "Explore (E)",
          text: "Tell me more about what feels most important right now.",
        },
      ],
    },
    {
      step: "4",
      title: "Say it plainly",
      body: "Use ordinary language and keep it short enough that the other person can correct you or carry on. Scripted-sounding empathy backfires.",
    },
    {
      step: "5",
      title: "Leave room",
      body: "After a NURSE statement, don't rush to fill the space with your solution. The silence lets them take the next turn.",
    },
    {
      step: "6",
      title: "Calibrate",
      body: "If they soften or say more, stay with them. If they correct you, take the correction. If urgency is high, acknowledge briefly and move to safety or next steps.",
    },
  ],
  liveThreadClues: [
    "clipped, one-word answers",
    "the same point repeated",
    "a sudden silence or shutdown",
    "sarcasm or a sharp edge",
    "faster or louder speech",
    "a strained or wavering voice",
    '"honestly, I\'m just..."',
    '"no one has told me..."',
    '"I\'ve tried everything and..."',
  ],
  depthDial: [
    {
      depth: "Light",
      useWhen: "Early, or the label might be wrong",
      phrase: "I can see this matters.",
    },
    {
      depth: "Named",
      useWhen: "The feeling is fairly clear",
      phrase: "It sounds like this has been frustrating.",
    },
    {
      depth: "Named + respected",
      useWhen: "They've clearly been trying hard",
      phrase:
        "That sounds frustrating, especially after the effort you've put in.",
    },
    {
      depth: "Named + explored",
      useWhen: "They're ready to talk",
      phrase: "That sounds frustrating. What part matters most right now?",
    },
    {
      depth: "Full support",
      useWhen: "Trust is present and you can deliver",
      phrase: "I'll stay with this and be clear about what I can and can't do.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Over-stacking the acronym",
      soundsLike:
        '"I see you\'re frustrated, and I understand, and I respect that, and I want to support you, and tell me more..."',
      better:
        'Pick one or two letters: "That sounds frustrating. What matters most right now?"',
    },
    {
      mistake: "Labelling too intensely",
      soundsLike: '"You\'re furious about this."',
      better:
        '"This sounds really frustrating." Lighter, easier to accept or correct.',
    },
    {
      mistake: "Claiming full understanding",
      soundsLike: '"I understand exactly how you feel."',
      better:
        '"I can see some of why this is hard. Help me understand the rest."',
    },
    {
      mistake: "Respect without specifics",
      soundsLike: '"You\'re amazing."',
      better:
        '"You chased this for a week and kept notes. That took real effort."',
    },
    {
      mistake: "Support inflation",
      soundsLike: "\"Don't worry, I'll sort all of it out.\"",
      better: "\"I'll be direct about what I can and can't do here.\"",
    },
    {
      mistake: "Exploring too soon",
      soundsLike: '"So tell me everything that happened."',
      better:
        "Acknowledge first, then ask one focused question when they seem ready.",
    },
    {
      mistake: "Using empathy instead of a real apology",
      soundsLike: '"I\'m sorry you feel that way."',
      better:
        "If you caused harm, own it: \"I got that wrong, and I can see the impact. Here's what I'll do.\"",
    },
  ],
  recoveryPhrases: [
    "I may have named that badly — what's the better word for what you're feeling?",
    "That came out too formulaic. Plainly: I can see this matters.",
    "I shouldn't have said I understand exactly. I can see some of why this is hard, and I want to listen better.",
    "Let me be more concrete about what I can and can't do.",
    "I hear you — I'll answer directly now, and we can come back to the concern after that.",
    "I don't want to push past what you're saying. Let me slow down.",
    "I think I jumped to fixing too fast. Tell me what you needed me to hear first.",
  ],
  bestRecoveryLine:
    "I may have named that badly — what's the better word for what you're feeling?",
  chains: [
    {
      label: "Emotional labelling -> NURSE",
      sequence:
        "Name the emotion lightly, then add respect, support or exploration if a label alone isn't enough.",
      example: [
        '"You sound really disappointed."',
        '"...and after the effort you put in, that makes sense. What would help most now?"',
      ],
    },
    {
      label: "NURSE -> Summary check",
      sequence:
        "Acknowledge the emotion, then check you've understood the practical issue correctly.",
      example: [
        '"That sounds stressful."',
        '"So the real problem is that the deadline moved and no one told you. Have I got that right?"',
      ],
    },
    {
      label: "NURSE -> Ask-tell-ask",
      sequence:
        "Respond to emotion, ask what they already know, give the information, then check what landed.",
      example: [
        '"I can see this is worrying."',
        '"What have you been told so far?"',
        '"Here\'s what I know. Does that answer the main thing?"',
      ],
    },
    {
      label: "NURSE -> Clean request or boundary",
      sequence:
        "Acknowledge the feeling, then state the next step or the limit cleanly.",
      example: [
        '"I can see this matters a lot."',
        "\"What I can do is check the order today; what I can't do is change the policy. Let's start with the order.\"",
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC006",
      reason:
        "Use NURSE when one emotion label needs to become a fuller empathy response; use Emotional labelling (TC006) when the core move is simply naming the felt state accurately and lightly.",
    },
    {
      id: "TC005",
      reason:
        "Use NURSE when emotion is visibly active and you need a menu of empathy moves; use Validation without agreement (TC005) when the person needs legitimacy without you endorsing their conclusion.",
    },
    {
      id: "TC043",
      reason:
        "Use NURSE when the emotional cue is the main signal; use OARS (TC043) when the job is guiding a listening or behaviour-change conversation with questions, affirmations, reflections and summaries.",
    },
    {
      id: "TC051",
      reason:
        "Use NURSE when you must respond to emotion in the moment; use RASA (TC051) for a broader active-listening cycle of receive, appreciate, summarise and ask.",
    },
    {
      id: "TC053",
      reason:
        "Use NURSE as an immediate empathic response; use NVC / OFNR (TC053) when the conversation needs a fuller observation, feeling, need and request structure.",
    },
    {
      id: "TC045",
      reason:
        "Use NURSE first when emotion is high; use Ask-tell-ask (TC045) when the central task is checking understanding before and after giving information.",
    },
  ],
};
