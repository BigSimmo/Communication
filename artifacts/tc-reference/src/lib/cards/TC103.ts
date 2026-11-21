import type { CardData } from "../card-types";

export const TC103: CardData = {
  id: "TC103",
  resources: [
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC103/TC103_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC103/TC103_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC103/TC103_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC103/TC103_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC103/TC103_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  sources: [
    {
      label:
        "Stone & Heen, Find the Coaching in Criticism (Harvard Business Review, 2014)",
      url: "https://mindful-leaders.com/wp-content/uploads/2019/10/Finding-the-Coaching-in-Criticism.pdf",
    },
    {
      label:
        "Harvard Medical School, Receiving Feedback: What Do We Really Hear? (summary of Stone & Heen)",
      url: "https://learn.hms.harvard.edu/insights/all-insights/receiving-feedback-what-do-we-really-hear",
    },
  ],
  whyItWorks:
    "Douglas Stone and Sheila Heen describe three triggers that stop us hearing feedback: truth triggers (it feels wrong), relationship triggers (it's about who said it) and identity triggers (it shakes how we see ourselves). Getting curious first, with something like \"Tell me more\", lets you understand what they actually mean before you decide what to do with it. Separating the message from the messenger, and sorting it into appreciation, coaching or evaluation, keeps you from rejecting useful advice. Receiving it well doesn't mean you have to agree. It means you understand it, and then you choose.",
  whatItIsNot: [
    "Not agreeing with everything you're told.",
    "Not defending yourself point by point.",
    "Not silent nodding while you plan your comeback.",
    "Not accepting abuse. You can set a boundary on how feedback is given.",
    "Not a promise to change everything at once.",
  ],
  overview: {
    coreFormula: [
      "Breathe and notice the trigger: is it truth, relationship or identity?",
      'Get curious: "Tell me more. What did you notice?"',
      'Check what they mean: "So you\'d like me to...?"',
      'Thank them and take time: "Thanks. Let me think about that."',
      "Decide what to try, and tell them.",
    ],
    minimumViableMove:
      "Thank them, ask for one example, and listen before you explain or defend.",
    impact: "High",
    difficulty: "Medium",
    misuse:
      'It becomes performative if you say "thanks for the feedback" and then ignore it or quietly punish the person.',
    bestFor: [
      "A colleague or manager points out a problem.",
      "A partner or friend says something you did hurt.",
      "You get a review or comment that stings.",
      "Someone gives vague criticism you don't understand.",
      "You want to ask for feedback and grow.",
      "A patient, client or family member tells you something didn't go well.",
      "A senior colleague gives you feedback in front of others.",
    ],
  },
  notFor: [
    'The "feedback" is personal abuse or contempt. Set a boundary instead.',
    "You're too upset to listen. Ask to pick it up later.",
    "Public pile-ons online. You don't owe every comment a reply.",
    "A formal complaint or performance process is starting. Listen, take notes, and ask what the next steps and supports are.",
    "A factual error needs correcting urgently. Correct it plainly first, then come back to the rest.",
    "You'd be performing openness while planning to change nothing.",
  ],
  phraseBank: [
    {
      id: "quick",
      label: "Quick first response",
      tag: "Buy understanding, not argument",
      tone: "Quick",
      phrases: [
        "Tell me more.",
        "Can you give me an example?",
        "Thanks for telling me.",
        "What did you notice?",
        "That's useful to know.",
      ],
    },
    {
      id: "clarify",
      label: "Understand what they mean",
      tag: "Get specific",
      tone: "Direct",
      phrases: [
        "What would it look like if I got this right?",
        "Is this about this one time, or something you've noticed before?",
        "What's the one thing you'd most like me to change?",
        'When you say "rude", what did I actually say or do?',
        "Is this advice, or a judgement on how I'm going?",
      ],
    },
    {
      id: "time",
      label: "Take time",
      tag: "When it stings",
      tone: "Repair",
      phrases: [
        "I want to think about that properly. Can we talk again tomorrow?",
        "That's hard to hear, but I'm glad you said it.",
        "Let me sit with that and come back to you.",
        "I'm feeling a bit defensive, so give me a minute.",
        "I'd like to hear this properly. Can we find a quieter spot in ten minutes?",
        "I'm going to write that down so I don't lose it.",
      ],
    },
    {
      id: "ask",
      label: "Ask for it",
      tag: "Make feedback easy to give",
      tone: "Warm",
      phrases: [
        "What's one thing I could do better next time?",
        "What's one thing you see me doing that holds me back?",
        "If you were me, what would you change?",
        "How did that come across from your side?",
        "What's one thing I should keep doing?",
        "Was there a moment today where I could have handled it better?",
      ],
    },
    {
      id: "disagree",
      label: "When you disagree",
      tag: "Respectful pushback after understanding",
      tone: "Professional",
      phrases: [
        "I see it differently, and I'd like to understand how you got there.",
        "I can see why it looked that way. Here's what was going on for me.",
        "Part of that fits and part doesn't. Can I tell you which?",
        "Thanks. I'm going to try your suggestion for two weeks and see.",
        "I think we're looking at different parts of it. Can I share what I saw?",
        "I hear you. I'm not sure I agree yet, so let me think it over and come back to you.",
      ],
    },
    {
      id: "close",
      label: "Close the loop",
      tag: "Show it mattered",
      tone: "Warm",
      phrases: [
        "I tried what you suggested. Thanks, it helped.",
        "You were right about the emails. I've changed how I do them.",
        "Thanks for being honest with me. It made a difference.",
        "I've made the change you suggested. Let me know if it's working from your side.",
        "Thanks again for raising it. It's made the handover better.",
        "I tried it your way this week. Can I tell you what I noticed?",
      ],
    },
    {
      id: "care-settings",
      label: "From patients, clients and families",
      tag: "When someone tells you it didn't go well",
      tone: "Warm",
      phrases: [
        "Thank you for telling me. I'd rather know than not.",
        "I'm sorry it felt that way. Can you tell me what happened from your side?",
        "What would have made that easier for you?",
        "I want to make sure I understand. Was it the waiting, or how it was explained?",
        "I'll pass this on, and I'll let you know what we change.",
      ],
    },
    {
      id: "in-front-of-others",
      label: "In front of others",
      tag: "Public or senior feedback",
      tone: "High-stakes",
      phrases: [
        "That's a fair point. Can we go through it after the meeting?",
        "Thanks. I'll take that on board and follow up with you directly.",
        "I want to understand that properly. Could we find ten minutes later today?",
        "Thanks for flagging it. I'll come back to you with what I'll change.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "You feel the urge to defend",
      action: "Ask a question instead.",
      phrase: "Can you give me an example?",
    },
    {
      condition: "The feedback is vague",
      action: "Ask what they actually saw.",
      phrase: "What did I say or do that gave you that impression?",
    },
    {
      condition: "It's about who's giving it",
      action: "Separate the message from the messenger.",
      phrase:
        "Setting aside how it was said, is there something in this I can use?",
    },
    {
      condition: "It hits your sense of self",
      action: "Take time before you respond.",
      phrase: "I want to think about that properly. Can we talk tomorrow?",
    },
    {
      condition: "You disagree after understanding",
      action: "Say so respectfully and offer to try something.",
      phrase: "I see it differently. Can I try one change and see?",
    },
    {
      condition: "It's said in front of others",
      action:
        "Acknowledge it briefly and move the detail to a private conversation.",
      phrase:
        "Thanks for raising it. Can we talk it through properly afterwards?",
    },
  ],
  ladder: [
    {
      weak: '"That\'s not true."',
      better: '"Okay, fine."',
      best: '"Tell me more. What did you notice?"',
    },
    {
      weak: '"Well, you do it too."',
      better: '"I didn\'t mean it like that."',
      best: '"I didn\'t mean it that way, but I can see how it landed. What would help?"',
    },
    {
      weak: '"Whatever."',
      better: '"Thanks for the feedback."',
      best: "\"Thanks. Let me think about it and I'll tell you what I'll change.\"",
    },
    {
      weak: '"I was flat out, what did you expect?"',
      better: '"Sorry, it was a busy shift."',
      best: '"Thanks for telling me. Which part of the handover was missing, so I can fix it next time?"',
    },
  ],
  scenarios: [
    {
      situation: "Manager says your emails are too long",
      move: "Get curious, ask for an example.",
      phrase: '"Thanks. Could you show me one that worked well?"',
    },
    {
      situation: "Partner says you never listen",
      move: "Separate the what from the who, ask for specifics.",
      phrase: '"That\'s hard to hear. When did it feel like that most?"',
    },
    {
      situation: "Friend says you were rude at dinner",
      move: "Thank them, take responsibility for the impact.",
      phrase: '"I\'m glad you told me. What did I say that came across badly?"',
    },
    {
      situation: "Feedback you think is wrong",
      move: "Understand first, then disagree.",
      phrase:
        '"I see it differently, but I want to understand. What made it look that way?"',
    },
    {
      situation: "A patient's family says nobody explained anything",
      move: "Thank them, get specific, and say what you'll do.",
      phrase:
        '"Thank you for telling me. What would have helped you most to know earlier?"',
    },
    {
      situation: "A senior colleague criticises you in a meeting",
      move: "Acknowledge it, then move it to a private chat.",
      phrase:
        '"That\'s worth looking at. Could we go through it together after this?"',
    },
  ],
  calibration: {
    working: [
      "They relax and give more detail.",
      "You understand what they want you to change.",
      "They offer feedback more often.",
      "You feel curious rather than attacked.",
      "You can say back what they want you to change, and they agree.",
      "The relationship feels steadier after the conversation.",
    ],
    adjust: [
      "You're arguing: switch to a question.",
      "They clam up: thank them and make it safe.",
      "You feel overwhelmed: ask for time.",
      "It's turning personal: set a boundary on how it's said.",
      "You're nodding but planning your reply: ask one more question instead.",
      "They're giving lots of points at once: ask which one matters most.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Know your triggers",
      task: "Recall a piece of feedback that stung. Was it truth, relationship or identity?",
    },
    {
      day: "Day 2",
      title: "Write the question",
      task: 'Write your go-to curious reply, e.g. "Can you give me an example?"',
    },
    {
      day: "Day 3",
      title: "Sort it",
      task: "Take one recent comment and label it appreciation, coaching or evaluation.",
    },
    {
      day: "Day 4",
      title: "Ask for one thing",
      task: 'Ask someone: "What\'s one thing I could do better?" Just listen.',
    },
    {
      day: "Day 5",
      title: "Hold back the defence",
      task: "Next time you get a comment, ask one question before you explain anything.",
    },
    {
      day: "Day 6",
      title: "Try a small experiment",
      task: "Pick one suggestion and try it for a day, even if you doubt it.",
    },
    {
      day: "Day 7",
      title: "Close the loop",
      task: "Tell someone what you changed because of their feedback.",
    },
  ],
  checklist: [
    "Did I ask a question before defending?",
    "Did I understand what they actually saw?",
    "Did I separate the message from the messenger?",
    "Did I thank them?",
    "Did I decide what to try and tell them?",
    "Did I stay curious even when it stung?",
  ],
  example: {
    without: [
      "A: Your presentation ran way over.",
      "B: That's because people kept interrupting me.",
      "A: It was still forty minutes.",
      "B: Well, nobody told me the limit.",
    ],
    with: [
      "A: Your presentation ran way over.",
      "B: Thanks for telling me. Where did it drag most?",
      "A: The data section. Too many slides.",
      "B: That's helpful. I'll cut that to three next time.",
    ],
    note: "In the second version B asks where it dragged instead of defending, so the feedback becomes one specific thing to fix.",
  },
  influencePayoff: {
    feeling: '"They actually listened. I\'d tell them again."',
    principle:
      "How you receive feedback decides whether you keep getting it. Curiosity keeps honest information flowing.",
    gains: [
      "You learn faster.",
      "People trust you with honest views.",
      "Less conflict over criticism.",
      "Your reputation for maturity grows.",
    ],
    whyMostFail: [
      "They defend before they understand.",
      "They reject good advice because of who gave it.",
      "They take it as a verdict on who they are.",
      "They say thanks and change nothing.",
    ],
  },
  fieldTip: {
    headline: "Ask one question before you defend.",
    body: 'The first reaction to criticism is usually "that\'s wrong". Stone and Heen suggest swapping that for "tell me more". You can still disagree later, once you know what they actually meant.',
    example: '"Can you give me an example?"',
    dont: '"That\'s not what happened."',
    do: '"Tell me more. What did you notice?"',
  },
  method: [
    {
      step: "1",
      title: "Notice your reaction",
      body: "Name the trigger to yourself: is it the content, the person, or your sense of self?",
    },
    {
      step: "2",
      title: "Get curious",
      body: "Ask what they saw or heard. Examples make vague feedback usable.",
      examples: [
        {
          label: "Say",
          text: '"Can you give me an example?"',
        },
        {
          label: "Avoid",
          text: '"That\'s not true."',
        },
      ],
    },
    {
      step: "3",
      title: "Check what they mean",
      body: 'Summarise it back: "So you\'d like shorter updates?"',
    },
    {
      step: "4",
      title: "Separate the what from the who",
      body: "Consider the advice on its merits, apart from how you feel about the giver.",
    },
    {
      step: "5",
      title: "Take time if needed",
      body: "It's fine to say you'll think about it.",
    },
    {
      step: "6",
      title: "Choose and tell them",
      body: "Decide what to try, and let them know. Small experiments are fine.",
    },
  ],
  liveThreadClues: [
    '"Can I give you some feedback?"',
    '"Don\'t take this the wrong way..."',
    '"You always..."',
    "A sharp comment at the end of a meeting",
    "Your face getting hot",
    '"I\'m only saying this because..."',
  ],
  depthDial: [
    {
      depth: "Light touch",
      useWhen: "a passing comment or small suggestion",
      phrase: "Thanks, that's useful. I'll try it.",
    },
    {
      depth: "Get curious",
      useWhen: "most feedback, especially when it's vague",
      phrase: "Can you give me an example of when that happened?",
    },
    {
      depth: "Slow it down",
      useWhen: "it stings or hits your sense of who you are",
      phrase:
        "That's hard to hear. I want to think about it properly and come back to you tomorrow.",
    },
    {
      depth: "Respectful disagreement",
      useWhen: "you've understood it and still see it differently",
      phrase:
        "I see it differently, and I'd like to understand how you got there.",
    },
    {
      depth: "Set a boundary",
      useWhen: "the feedback has turned into a personal attack or contempt",
      phrase:
        "I want to hear the concern, and I need it said without the personal comments.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Instant defence",
      soundsLike: '"That\'s because..."',
      better: '"Tell me more first."',
    },
    {
      mistake: "Dismissing the messenger",
      soundsLike: '"Who are they to say that?"',
      better: '"Is there something useful in this, whoever said it?"',
    },
    {
      mistake: "All-or-nothing",
      soundsLike: '"So I\'m terrible at this."',
      better: '"So this one thing needs work."',
    },
    {
      mistake: "Empty thanks",
      soundsLike: '"Thanks for the feedback." (nothing changes)',
      better: '"Thanks. I\'ll try shorter updates this week."',
    },
    {
      mistake: "Over-apologising",
      soundsLike: "\"I'm so sorry, I'm hopeless, I always get this wrong.\"",
      better: '"Thanks for telling me. I\'ll fix the handover notes."',
    },
    {
      mistake: "Explaining before understanding",
      soundsLike: '"The reason that happened was..." before they\'ve finished',
      better: "Let them finish, then ask one question.",
    },
    {
      mistake: "Promising too much",
      soundsLike: '"I\'ll change everything."',
      better: "Pick one change and say when you'll try it.",
    },
  ],
  recoveryPhrases: [
    "Sorry, I got defensive. Can you say that again?",
    "I jumped in too fast. What did you mean?",
    "I've thought about what you said, and you had a point.",
    "I talked over you there. Please finish what you were saying.",
    "I was quick to explain. Can I check I understood the main point first?",
    "I brushed that off earlier. I've thought about it, and I'd like to hear more.",
    "I said I'd change it and didn't. I'm sorry. I'm starting today.",
  ],
  bestRecoveryLine: "Sorry, I got defensive. Can you say that again?",
  chains: [
    {
      label: "Receive feedback, then summary check",
      sequence: "Ask, then reflect back what you heard.",
      example: [
        '"Can you give me an example?"',
        '"So it\'s mainly the length. Is that right?"',
      ],
    },
    {
      label: "Receive feedback, then apology",
      sequence: "When the feedback is fair, own it.",
      example: [
        '"Tell me more."',
        "\"You're right. I'm sorry I cut you off.\"",
      ],
    },
    {
      label: "Receive feedback, then looping",
      sequence: "Check you've understood what matters most before you respond.",
      example: [
        '"Tell me more."',
        '"So the main thing is the family didn\'t know the plan. Did I get that right?"',
      ],
    },
    {
      label: "Receive feedback, then take a break",
      sequence: "When it stings, buy time and come back.",
      example: [
        '"That\'s hard to hear."',
        '"I want to think about it properly. Can we talk again tomorrow morning?"',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC011",
      reason:
        "Summarise what you heard to confirm you've understood the feedback.",
    },
    {
      id: "TC101",
      reason:
        "If the feedback is about something you got wrong, follow with an apology.",
    },
    {
      id: "TC052",
      reason:
        "Ask for SBI-style detail: the situation, the behaviour and its impact.",
    },
    {
      id: "TC109",
      reason:
        "Loop the feedback back until they say yes, then decide what to change.",
    },
    {
      id: "TC005",
      reason:
        "You can say their view makes sense without agreeing with all of it.",
    },
    {
      id: "TC031",
      reason: "When feedback triggers you, slow your pace before you answer.",
    },
  ],
};
