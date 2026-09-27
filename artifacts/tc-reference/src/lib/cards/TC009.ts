import type { CardData } from "../card-types";

export const TC009: CardData = {
  pdfUrl: "cards/TC009/TC009_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC009/TC009_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC009/TC009_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC009/TC009_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC009/TC009_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC009/TC009_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC009/TC009_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC009/TC009_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC009",
  whyItWorks:
    "Anti-boomerasking is the discipline of asking a question, actually receiving the answer, and staying with the other person's thread before you add your own story, opinion or example. A good question is a door into their experience. A boomerang question is a runway for your own. It works because the person feels their answer genuinely mattered, which keeps momentum with them and builds trust, and it makes your own later self-disclosure land as connection rather than hijacking.",
  whatItIsNot: [
    "It is not never talking about yourself.",
    "It is not becoming an interviewer who only asks and never gives.",
    "Your self-disclosure still happens. It just comes after support, and it usually returns to their thread.",
    "It is not withholding to seem mysterious or to dodge real give-and-take.",
  ],
  overview: {
    coreFormula: [
      "Ask → listen → follow-up or reflect → optional brief share → return.",
      "Question + support response + small self-disclosure + return question.",
      '"I have a version of that too, but I want to hear yours first."',
      '"That reminds me of something, but before I hijack it. What happened next?"',
    ],
    minimumViableMove:
      "Ask one real follow-up or reflect before sharing your related story.",
    impact: "Low",
    difficulty: "Medium",
    misuse:
      "The move fails when every question is secretly a setup for self-display. You ask, half-listen, then swing the topic back to your own story before the person feels heard.",
    bestFor: [
      "Keeping conversation centred on the other person when they are sharing something.",
      "Responding to stories, good news, stress, uncertainty, achievements or frustrations.",
      "Dating, networking, friendships, workplace rapport and first conversations.",
      "Preventing accidental self-focus when you are excited to relate.",
      "Building trust with quieter, guarded or thoughtful people.",
      "Making your self-disclosure feel like connection rather than competition.",
    ],
  },
  notFor: [
    "The other person explicitly asks about your experience or opinion.",
    "A balanced back-and-forth is already established and your story genuinely adds value.",
    "You over-correct and ask so many questions that it becomes an interview.",
    "The person wants direct information, not emotional support or conversation.",
    "Your related story is genuinely the most useful way to answer, teach, warn or empathise.",
    "You are using restraint to hide, perform mystery, or avoid real reciprocity.",
  ],
  phraseBank: [
    {
      id: "stop-the-boomerang",
      label: "Stop the boomerang",
      tag: "Catch-yourself one-liners",
      tone: "Quick",
      phrases: [
        "Before I make this about me. What happened next?",
        "I have a related story, but yours is the one I want to hear first.",
        "I nearly jumped in there. Go on.",
        "I want to stay with your version for a second.",
        "Let me not hijack that. What was that like?",
        "I asked because I actually want the answer.",
      ],
    },
    {
      id: "support-before-shifting",
      label: "Support before shifting",
      tag: "Reflect before you relate",
      tone: "Warm",
      phrases: [
        "That sounds like the main part of the story.",
        "So the surprising part wasn't the thing everyone asks about.",
        "That sounds more complicated than the short version.",
        "I can see why that stuck with you.",
        "What did you make of it at the time?",
        "What was the part people would miss from the outside?",
      ],
    },
    {
      id: "bridge-without-hijacking",
      label: "Bridge to self without hijacking",
      tag: "Share briefly, then return",
      tone: "Warm",
      phrases: [
        "I've had a smaller version of that, but yours sounds more intense.",
        "That reminds me of something, but I'll keep it short.",
        "I relate to the uncertainty part. Mine was different, but I get the feeling.",
        "I've a version of this too, not to compete, just because I recognise the pattern.",
        "I'll give the two-sentence version, then I want to hear what happened next.",
        "My version was less dramatic, but the feeling was similar.",
      ],
    },
    {
      id: "return-to-them",
      label: "Return to them",
      tag: "Hand the floor back",
      tone: "Direct",
      phrases: [
        "Anyway, back to yours. What happened after that?",
        "That's my version, but what did you do next?",
        "How did it land for you?",
        "Was that the part that bothered you most?",
        "Where did that leave things?",
        "What was the best part of it for you?",
      ],
    },
    {
      id: "good-news",
      label: "Good news",
      tag: "Help them savour the win",
      tone: "Warm",
      phrases: [
        "That's a proper win. What was the best moment?",
        "Nice, when did you realise it had gone well?",
        "What part are you most pleased with?",
        "Who was the first person you told?",
        "What made that feel satisfying?",
        "What did you do to celebrate?",
      ],
    },
    {
      id: "stress-frustration",
      label: "Stress / frustration",
      tag: "Stay with the hard part",
      tone: "High-stakes",
      phrases: [
        "That sounds draining. What was the hardest part?",
        "I can see why that would get under your skin.",
        "Was it the situation itself, or how people handled it?",
        "What did you need in that moment?",
        "What are you most annoyed people didn't understand?",
        "That sounds hard to explain unless you were there.",
      ],
    },
    {
      id: "professional-networking",
      label: "Professional / networking",
      tag: "Work and expertise",
      tone: "Professional",
      phrases: [
        "What led you into that area?",
        "What has been the most interesting part of that work?",
        "What surprised you about that role?",
        "What kind of problems do you enjoy solving?",
        "What do people usually misunderstand about your work?",
        "What are you trying to build toward next?",
      ],
    },
    {
      id: "digital-text",
      label: "Digital / text",
      tag: "One-line messages",
      tone: "Quick",
      phrases: [
        "Wait, I want the actual story. What happened?",
        "Before I turn this into my own rant: what did you do?",
        "That sounds like a lot. What was the hardest bit?",
        "I have a similar story, but yours first.",
        "What's the short version and the honest version?",
        "That deserves more than 'nice'. What was the best part?",
      ],
    },
  ],
  decisionTree: [
    {
      condition:
        "They are sharing a story, a win, or a frustration: a cue this move is built for.",
      action:
        "Use the minimum viable move: one real follow-up or reflection before anything of your own.",
      phrase: "What was the best part for you?",
    },
    {
      condition:
        "There is no real cue. They want information, not conversation.",
      action:
        "Answer plainly, or pick a neighbouring technique. Do not force restraint.",
      phrase: "Here's the short answer. Tell me if you want the detail.",
    },
    {
      condition: "The follow-up opened them up.",
      action: "Stay with their thread once more before you share anything.",
      phrase: "So that was the part that stuck. What happened next?",
    },
    {
      condition: "You feel the urge to bridge to your own story.",
      action: "Give the two-sentence version, then return the floor.",
      phrase: "I have a version of that too, but yours first, what did you do?",
    },
    {
      condition: "You have shifted too far onto yourself.",
      action: "Name it and hand the spotlight back.",
      phrase: "I just made that about me. Sorry, go on.",
    },
    {
      condition: "You have already used the move once.",
      action:
        "Don't repeat it mechanically. Move to summary, action, or ordinary contribution.",
      phrase: "So where did that leave things?",
    },
  ],
  ladder: [
    {
      weak: '"Have you been to Japan? I went last year and..." (asks only to tell their own story)',
      better:
        '"Have you been to Japan?" (listens briefly, then pivots to their own trip)',
      best: '"Have you been to Japan?" Then one follow-up about their answer before sharing anything.',
    },
    {
      weak: '"How was your weekend? Mine was huge..."',
      better: '"How was your weekend?" (then listens)',
      best: '"How was your weekend?" Then "What was the best bit?" before mentioning yours.',
    },
  ],
  scenarios: [
    {
      situation: "Social conversation",
      move: "Use the smallest natural version so they feel heard without feeling analysed.",
      phrase: "What was the best part for you?",
    },
    {
      situation: "Professional discussion",
      move: "Keep it concise and tie the move to the task, decision or concern.",
      phrase: "What led you to that call?",
    },
    {
      situation: "Conflict or objection",
      move: "Add validation and slow down. Do not weaponise the restraint.",
      phrase: "Before I give my side. What mattered most to you here?",
    },
    {
      situation: "Digital message",
      move: "Use one sentence. Avoid long explanations or stacked questions.",
      phrase: "Wait, I want the actual story. What happened?",
    },
    {
      situation: "Shy or guarded person",
      move: "Make the move lighter, more tentative and lower pressure.",
      phrase: "No rush, but I'd like the real version, not the polite one.",
    },
    {
      situation: "High-status or busy person",
      move: "Keep the wording brief, grounded and useful.",
      phrase: "What surprised you most about that?",
    },
  ],
  calibration: {
    working: [
      "They keep expanding their story.",
      "They seem more animated or relaxed.",
      "They volunteer extra detail without being pushed.",
      "They ask you a question back after they feel heard.",
      "Your self-disclosure feels welcomed rather than intrusive.",
      "It feels like shared attention, not competing monologues.",
    ],
    adjust: [
      "You have asked several questions and shared nothing yourself.",
      "They give short answers or seem interviewed.",
      "You catch yourself waiting for your turn to tell your version.",
      "Your story is running longer than theirs.",
      "They stop adding detail once you shift to yourself.",
      "Fix: ask one real follow-up, or reflect the point, before sharing.",
      "Fix: give the two-sentence version of your story, then return the thread.",
      "Fix: if you over-shift, name it and hand the floor back.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the boomerang",
      task: "Through the day, notice three times someone asks a question and then answers it themselves or swings straight to their own story. Just observe the pattern in others.",
    },
    {
      day: "Day 2",
      title: "Catch your own urge",
      task: "In your own conversations, catch the launchpad urge: the moment you ask something mainly to set up your own story. Note when it happens, without changing anything yet.",
    },
    {
      day: "Day 3",
      title: "Write the minimum move",
      task: "Take three ordinary things someone might say ('I got a new job', 'The trip was exhausting') and write one genuine follow-up or reflection for each, before any story of your own.",
    },
    {
      day: "Day 4",
      title: "Say them naturally",
      task: "Read yesterday's lines aloud once. Cut anything that sounds clever, therapeutic, corporate or performative until each sounds like ordinary you.",
    },
    {
      day: "Day 5",
      title: "Support before shifting, live",
      task: "In one real conversation, ask a question and give a full support response, a follow-up or reflection, before adding anything about yourself.",
    },
    {
      day: "Day 6",
      title: "Bridge and return",
      task: "Once today, share a short related story, then deliberately hand the thread back with a return question. Keep your version shorter than theirs.",
    },
    {
      day: "Day 7",
      title: "Recover on purpose",
      task: "When you notice you've boomeranged, you will, practise naming it and returning the floor: 'I just made that about me, go on.' Notice how quickly it repairs the moment.",
    },
  ],
  checklist: [
    "Did I ask because I wanted their answer, or because I wanted to talk?",
    "Did I give a real support response before sharing anything of my own?",
    "Was my own story shorter than their thread?",
    "Did I return the floor, or did the topic quietly become about me?",
    "Did I adjust if they went quiet or started giving short answers?",
    "If this missed, which neighbouring technique would have fitted better?",
  ],
  example: {
    without: [
      "Person: I finally got to Japan last month.",
      "You: Oh nice, do you like Tokyo? I went in 2019, honestly my trip was incredible. I stayed near Shinjuku and found this amazing ramen place...",
      "Person: Yeah, Tokyo was good.",
      "Why it's weak:",
      "the question was just a runway for your own trip",
      "you never actually received their answer",
      "they shrink their story down to a flat 'good'",
    ],
    with: [
      "Person: I finally got to Japan last month.",
      "You: Nice. What was the best part for you?",
      "Person: Probably Kyoto. It was calmer than I expected.",
      "You: So Kyoto was the part that actually stayed with you?",
      "Person: Exactly. It felt different from the rest of the trip.",
      "You: I have a Japan story too, but yours sounds like the interesting part. What made Kyoto feel different?",
      "Advanced version:",
      "You: Nice. I'm resisting the urge to make this about my Japan opinions. What surprised you most?",
      "Person: Honestly, how quiet some places felt.",
      "You: That's not the answer people usually give. Quiet how?",
      "Person: Kyoto early in the morning. It felt almost unreal.",
      "You: That sounds like the part people miss if they only talk about the itinerary.",
    ],
    note: "Both good versions receive the answer before adding anything. The advanced one names the boomerang urge out loud, which is oddly disarming and buys you the floor honestly.",
  },
  influencePayoff: {
    feeling:
      '"They actually wanted my answer, not just a gap to fill with their own story."',
    principle:
      "People warm to you when they feel their answer genuinely mattered. Receiving before relating keeps momentum with them, and it makes your own later disclosure land as connection rather than competition.",
    gains: [
      "You seem more genuinely interested.",
      "You come across as less self-focused.",
      "You are easier to trust.",
      "Conversational momentum stays with them.",
      "Your later self-disclosure lands as connection, not hijacking.",
      "Quieter people open up because they aren't competing for the floor.",
    ],
    whyMostFail: [
      "Every question is secretly a setup for self-display.",
      "They boomerang back to their own story before receiving the answer.",
      "They relate too fast: 'that reminds me' before the person feels heard.",
      "They over-correct into interview mode and never reciprocate at all.",
    ],
  },
  fieldTip: {
    headline:
      "If the question is really a doorway to your story, don't ask it yet.",
    body: "A question you only ask so you can answer it yourself is a boomerang in disguise. Support their answer first, share briefly if it genuinely adds something, then return to them.",
    dont: 'Ask "Have you been to Japan?" as a runway for your own trip.',
    do: "Ask because you want their answer, receive it, then decide whether your story adds anything.",
  },
  method: [
    {
      step: "1",
      title: "Notice the launchpad urge",
      body: "Catch the moment you ask something partly because you already know what you want to say about yourself. The tell is the urge to talk building while they are still answering.",
      examples: [
        {
          label: "Tell-tale",
          text: '"Have you been to Japan?" Asked mainly so you can share your own trip.',
        },
      ],
    },
    {
      step: "2",
      title: "Ask only if you will listen",
      body: "Before the question leaves your mouth, check: am I genuinely interested in their answer, or am I setting up my own story? If it's the second, hold the question.",
    },
    {
      step: "3",
      title: "Support before shifting",
      body: "Let their answer breathe. Ask one follow-up, reflect the point, or respond to the feeling before you add anything of your own.",
      examples: [
        {
          label: "Reflect",
          text: '"So Kyoto was the part that actually stayed with you."',
        },
      ],
    },
    {
      step: "4",
      title: "Use bridge-and-return",
      body: "If you do share a related story, signal up front that you are coming back to them.",
      examples: [
        {
          label: "Bridge",
          text: '"I have a version of that too, but yours sounds more complicated. What happened next?"',
        },
      ],
    },
    {
      step: "5",
      title: "Keep your story smaller",
      body: "Your contribution should add connection, not take over. Keep it shorter than their thread unless they invite you deeper.",
    },
    {
      step: "6",
      title: "Return the spotlight cleanly",
      body: "After sharing, hand it back on purpose so the exchange doesn't quietly become about you.",
      examples: [
        {
          label: "Hand back",
          text: '"Anyway, your version sounds different. What did you do after that?"',
        },
      ],
    },
  ],
  liveThreadClues: [
    '"Oh, that reminds me of when I..."',
    '"That happened to me too..."',
    '"Funny you should say that, because I..."',
    "You already know what you'll say before they answer.",
    "You feel the urge to talk building while they're still speaking.",
    "The question is really a doorway to a story you want to tell.",
  ],
  commonMistakes: [
    {
      mistake: "Asking as a setup",
      soundsLike:
        '"Have you been to Japan?", then straight into your own Japan story.',
      better:
        "Ask, listen, follow up, then share briefly only if it adds connection.",
    },
    {
      mistake: "Me-too interruption",
      soundsLike: '"That happened to me too..." before they\'ve finished.',
      better: "Reflect, or ask what happened next, first.",
    },
    {
      mistake: "Competitive relating",
      soundsLike: "Matching their hard day with a harder version of yours.",
      better: "Use your story to connect, not to outrank.",
    },
    {
      mistake: "Story hijacking",
      soundsLike: "Turning their topic into your monologue.",
      better:
        "Keep your related story shorter than theirs, then return the thread.",
    },
    {
      mistake: "Fake curiosity",
      soundsLike: "Asking questions you don't actually care about.",
      better: "Ask fewer, more sincere questions.",
    },
    {
      mistake: "Over-correcting into interview mode",
      soundsLike: "Only asking, never sharing anything of your own.",
      better: "Offer brief self-disclosure after you've supported them.",
    },
    {
      mistake: "Bridging too early",
      soundsLike: '"That reminds me..." before they feel heard.',
      better: "Delay your story until after a genuine support response.",
    },
  ],
  recoveryPhrases: [
    "I just turned that back to me. Sorry, go on.",
    "I asked and then hijacked it. What were you saying?",
    "Let me not make that about me.",
    "I have a related story, but yours first.",
    "Ignore my tangent. Back to your version.",
    "That came out more self-focused than I meant.",
    "I jumped in too fast. What happened next?",
    "I want to hear the rest before I add mine.",
  ],
  bestRecoveryLine: "I just turned that back to me. Sorry, go on.",
  chains: [
    {
      label: "Conversation chain",
      sequence:
        "Live-thread follow-up → support response → brief self-disclosure → return to them.",
      example: [
        '"What was the best part for you?"',
        '"So that was the bit that stuck with you."',
        '"I had a smaller version of that once, but what happened next for you?"',
      ],
    },
    {
      label: "Good-news chain",
      sequence:
        "Active-constructive response → replay the best moment → appreciation → optional related win.",
      example: [
        '"That\'s a proper win. What was the best moment?"',
        '"Nice, you clearly earned that."',
        '"It reminds me of one of mine, but tell me the rest first."',
      ],
    },
    {
      label: "Rapport chain",
      sequence:
        "Warm comment → question → follow-up → reflection → bridge-and-return.",
      example: [
        '"That sounds like a good story."',
        '"What made it stand out?"',
        '"So the surprising part wasn\'t the obvious one."',
        '"I relate to that, but back to yours, what did you do?"',
      ],
    },
    {
      label: "Networking chain",
      sequence:
        "Ask about their expertise → listen → reflect the challenge → ask their next goal → offer relevant value.",
      example: [
        '"What led you into that area?"',
        '"So the tricky part is the people, not the work."',
        '"What are you trying to build toward next?"',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC002",
      reason:
        "TC002 is the choice to support rather than shift the topic onto yourself once someone shares. TC009 is the wider discipline of asking to understand, not to set up your own story.",
    },
    {
      id: "TC007",
      reason:
        "Close cousin in the discipline family: TC007 stops you topping their story with a bigger one. TC009 stops you using the question itself as a runway for yours.",
    },
    {
      id: "TC003",
      reason:
        "TC003 adds a warm comment before the question so it doesn't feel like interrogation. TC009 governs why you ask at all and what you do with the answer.",
    },
    {
      id: "TC038",
      reason:
        "TC038 tracks and returns to earlier threads across a whole conversation. TC009 is the narrower rule of receiving one answer before you relate.",
    },
    {
      id: "TC001",
      reason:
        "TC001 is the positive move: following the most alive part of what they said. TC009 is the restraint that keeps you doing it instead of boomeranging to yourself.",
    },
    {
      id: "TC016",
      reason:
        "For good news specifically: TC016 actively amplifies their win. TC009 keeps you from answering their win with one of your own.",
    },
  ],
};
