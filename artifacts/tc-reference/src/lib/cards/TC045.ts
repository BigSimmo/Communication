import type { CardData } from "../card-types";

export const TC045: CardData = {
  pdfUrl: "cards/TC045/TC045_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC045/TC045_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC045/TC045_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC045/TC045_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC045/TC045_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC045/TC045_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC045/TC045_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC045/TC045_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC045",
  whyItWorks:
    "Ask-tell-ask is a three-part information-sharing move: ask for the person's starting point, tell them the key information concisely, then ask what they make of it. It works because you learn what they already know before you speak, so your telling lands on the real gap rather than over their head or beneath them, and the closing ask turns a monologue into shared understanding instead of a broadcast.",
  whatItIsNot: [
    "It is not a script to recite mechanically: naming the framework out loud usually breaks it.",
    "It is not a way to avoid listening or to compress emotion into a template.",
    "It is not a device for forcing the other person into your structure.",
    "It is not permission to lecture between two token questions.",
  ],
  overview: {
    coreFormula: [
      "Ask → Tell → Ask",
      'Ask: "What\'s your sense of this so far?"',
      "Tell: the one point that matters, concisely.",
      'Ask: "How does that land?"',
      "Field rule: use the structure to organise your thinking, then speak like a person.",
    ],
    minimumViableMove:
      "Ask one real question about where they are, tell one clear point, then ask what they make of it.",
    impact: "Medium",
    difficulty: "Easy-Medium",
    misuse:
      'It fails when the Tell swells into a lecture and the final Ask becomes cosmetic. You say "How does that land?" but have already stopped listening.',
    bestFor: [
      "Teaching or explaining something new",
      "Giving feedback",
      "Clinical or medical explanations",
      "Coaching conversations",
      "Sharing complex information without overwhelming",
      "Making a concise, memorable contribution in a meeting",
    ],
  },
  notFor: [
    "Token collaboration where the questions are for show, not genuine input",
    "Urgent commands, where a single direct instruction is what's needed",
    "When the person has already declined your advice",
    "When physical safety or an emergency response takes priority",
    "Raw emotional moments where listening, validation or repair should come first",
    "When the person clearly already understands: telling would only pad the moment",
  ],
  phraseBank: [
    {
      id: "quick-asks",
      label: "Opening asks",
      tag: "Find their starting point",
      tone: "Quick",
      phrases: [
        "What's your sense of this so far?",
        "Where are you with this already?",
        "What do you already know about it?",
        "What's your read on it?",
        "Before I jump in. What's your starting point?",
        "How much of the background have you got?",
        "What's your gut feeling on it?",
        "What have you tried so far?",
      ],
    },
    {
      id: "warm-framing",
      label: "Warm framing",
      tag: "Before you tell",
      tone: "Warm",
      phrases: [
        "I want to make sure this is actually useful to you.",
        "Tell me where you're up to and I'll fill the gaps.",
        "I'd rather meet you where you're than talk over your head.",
        "There's no wrong answer here. I just want your starting point.",
        "Whatever you already know, we can build from there.",
        "I'll keep this short, and you tell me if it helps.",
        "Let me check I'm being useful and not just talking.",
      ],
    },
    {
      id: "professional",
      label: "Meetings, email and status",
      tag: "Work contexts",
      tone: "Professional",
      phrases: [
        "Quick context check: what's already landed with everyone?",
        "Here's the one thing that matters, then I'll take questions.",
        "The headline is X. The detail is only there if you want it.",
        "I'll give you the short version. Say if you need more.",
        "Where's the group on this before I share the update?",
        "I've put the main point first so you can scan it.",
        "That's the key point. What would make it clearer for the decision?",
      ],
    },
    {
      id: "direct-point",
      label: "The point and the closing ask",
      tag: "Tell then check",
      tone: "Direct",
      phrases: [
        "Here's the key point, in one line.",
        "The main thing is X. The rest is only support.",
        "That's the core of it. How does that land?",
        "What do you make of that?",
        "Does that match what you were expecting?",
        "What's your reaction to that?",
        "What questions does that raise for you?",
        "What would you do with that?",
      ],
    },
    {
      id: "repair",
      label: "When the structure misses",
      tag: "Reset and simplify",
      tone: "Repair",
      phrases: [
        "I made that too structured. Let me say it more simply.",
        "That may not be the useful frame. Let me back up.",
        "I don't want the structure to override the actual issue.",
        "What part of that was useful, and what should we drop?",
        "Let me try that again in plain words.",
        "I think I lectured a bit there. What's the real question?",
        "Forget the framework. What do you actually need from me?",
      ],
    },
    {
      id: "high-stakes",
      label: "Feedback and sensitive moments",
      tag: "Handle with care",
      tone: "High-stakes",
      phrases: [
        "Can I share what I'm seeing, and then hear your take?",
        "Before I give feedback. What's your own read on how it went?",
        "Here's the one thing I'd change. How does that sit with you?",
        "What have you been told so far?",
        "I'll tell you the main point plainly, then we can sit with it.",
        "What matters most to you to understand right now?",
        "Is this a good moment for the detail, or do you need a minute?",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "The listener needs speed",
      action:
        "Use the shortest version: one-line ask, one-line tell, one-line ask.",
      phrase: "Quick sense-check: does this land?",
    },
    {
      condition: "The listener needs support",
      action:
        "Validate first and delay the framework until the emotion settles.",
      phrase: "That sounds hard. We can get to the detail when you're ready.",
    },
    {
      condition: "The listener needs a story or example",
      action: "Switch to an example-oriented neighbour such as STAR or CARL.",
      phrase: "Let me give you a concrete example instead.",
    },
    {
      condition: "The listener needs action",
      action: "End with one clean next step rather than an open reflection.",
      phrase: "So the next step is X. Does that work?",
    },
    {
      condition: "The listener already understands",
      action: "Drop the Tell entirely. Confirm and move on.",
      phrase: "Sounds like you've got it, anything I can add?",
    },
  ],
  ladder: [
    {
      weak: "Using Ask-tell-ask as a visible script, naming each step and sounding rehearsed.",
      better: "Using Ask-tell-ask silently to organise a concise response.",
      best: "Using it flexibly, then checking whether the listener is clearer, more heard, or better able to respond.",
    },
    {
      weak: "Telling everything you know in case some of it turns out to be useful.",
      better: "Telling the one key point and stopping.",
      best: "Telling the one point, then genuinely asking what they make of it.",
    },
    {
      weak: 'Asking "Make sense?" as a full stop.',
      better: "Asking an open question at the end.",
      best: "Asking, then letting their answer change your next sentence.",
    },
  ],
  scenarios: [
    {
      situation: "Work meeting",
      move: "Check what's already landed, give one point, invite reaction: keeps your contribution concise and memorable.",
      phrase:
        "Where's everyone on this? The key point is the deadline moved. What does that change for you?",
    },
    {
      situation: "Email or written update",
      move: "Put the main point first, keep the tell to short paragraphs or bullets, end with an open question.",
      phrase:
        "Quick check on where you're up to. Here's the one change. What would you want to know next?",
    },
    {
      situation: "Giving feedback",
      move: "Ask what kind of feedback would help before you structure anything.",
      phrase:
        "What's your own read on how it went? Here's the one thing I'd change. How does that sit?",
    },
    {
      situation: "Difficult conversation",
      move: "Use one sentence per step and pause between them. Don't stack.",
      phrase:
        "What's your sense of where we are? Here's what I'm worried about. What do you make of it?",
    },
    {
      situation: "Explaining something technical",
      move: "Find their starting point so you don't over- or under-explain.",
      phrase:
        "How much of this have you used before? The bit that trips people up is X. Want to try it?",
    },
    {
      situation: "Clinical or high-stakes information",
      move: "Ask what they already understand, tell the main point plainly, ask what it raises, with extra care.",
      phrase:
        "What have you been told so far? The main thing is X. What questions does that bring up?",
    },
  ],
  calibration: {
    working: [
      "They become clearer or more specific in what they ask.",
      "They summarise your point back accurately.",
      "They can choose a next step.",
      "They relax and engage rather than brace.",
      "They build on the point instead of just receiving it.",
      'They say "that helps" or "right, so..." and keep going.',
    ],
    adjust: [
      "They look confused or go quiet: slow down and simplify.",
      "They challenge the framing: treat that as information, not resistance.",
      "They seem to need the human context before the structure: validate first.",
      "The Tell is getting long: cut back to the one point.",
      "The final ask feels like a formality. Ask something they'd actually answer.",
      "It sounds defensive, performative, salesy or like a lecture: stop and speak plainly.",
      "You realise you never asked what they already knew: back up and ask.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the urge",
      task: "Notice three moments today when you're about to explain something. Just catch the urge to tell before you ask. No need to change anything yet.",
    },
    {
      day: "Day 2",
      title: "Write one",
      task: "Take a real situation and write a 60-second response using Ask → Tell → Ask. Mark the three parts so you can see them.",
    },
    {
      day: "Day 3",
      title: "Cut it",
      task: "Cut that response by a third without losing the core point. The Tell should end up as one clear line.",
    },
    {
      day: "Day 4",
      title: "Two voices",
      task: "Say it aloud twice. Once as a visible structure, once as plain speech. Keep the plain version and drop any step labels.",
    },
    {
      day: "Day 5",
      title: "Open the ask",
      task: 'Rewrite your closing question so it can\'t be answered with just "yes". Use it once in a real conversation and watch what it opens.',
    },
    {
      day: "Day 6",
      title: "Recover on purpose",
      task: "In a live conversation, notice if the structure misses and practise one recovery line to reset without defending the framework.",
    },
    {
      day: "Day 7",
      title: "Full run",
      task: "Use the whole move once with someone real: ask their starting point, tell one point, ask what they make of it, and let their answer change what you say next.",
    },
  ],
  checklist: [
    "Did I use Ask-tell-ask to serve the listener, or to sound polished?",
    "Did I find out what they already knew before I told them?",
    "Was the core point clear and short?",
    "Did the final ask actually invite a response?",
    "Did I adapt when they needed something else?",
    "Did I preserve their autonomy and dignity?",
  ],
  example: {
    without: [
      'You: "Okay, so the way the new system works is. There are three modules, each has its own login, the reporting sits under the second one, you\'ll want to set your filters first, then the export is a CSV, and permissions are role-based, so..."',
      'Them: "...right."',
      'You: "...and you can schedule the export, and there\'s an archive view, and..."',
      'Them: "Sorry, which bit do I actually need?"',
      "Why it's weak:",
      "tells before finding out what they already know",
      "buries the one point they needed under everything you know",
      "the final check never comes, so you don't notice they're lost",
      "the listener has to interrupt to find the signal",
    ],
    with: [
      'You: "Before I explain. How much of the new system have you already used?"',
      'Them: "I\'ve logged in, but I got lost after that."',
      'You: "Got it. Then the one thing that matters: reporting lives under the second module, not the first. That\'s where most people get stuck."',
      'Them: "Ah, that\'s exactly where I stopped."',
      'You: "Makes sense. How does that sit, do you want to try it now, or shall I walk you through the filters?"',
      "Them: \"Let me try it, and I'll shout if I'm stuck.\"",
      "Why this works:",
      "asks first, so the telling lands on the real gap",
      "tells one point, not ten",
      "closes with an open ask that hands back control",
      "the listener ends clearer and in charge of the next step",
    ],
    note: "The weak version and the strong version share the same facts. The only difference is asking before and after the telling.",
  },
  influencePayoff: {
    feeling:
      '"They met me where I actually was, instead of talking over my head."',
    principle:
      "People take in information more readily when it lands on the gap they actually have, and when they are invited to respond rather than only receive.",
    gains: [
      "A clearer path through your point",
      "Lower cognitive load for the listener",
      "Better sequencing: what matters first, first",
      "Fewer misunderstandings to unpick later",
      "The listener feels respected, not talked down to",
      "Buy-in, because they helped shape the understanding",
      "Influence that comes from clarity, not pressure",
    ],
    whyMostFail: [
      "They skip the first Ask and tell straight away, so the information misses the gap.",
      "They let the Tell swell into a lecture.",
      'They make the final Ask cosmetic: "Make sense?" while already moving on.',
      "They deploy the structure in an emotional moment where listening or repair should come first.",
    ],
  },
  fieldTip: {
    headline: "Scaffolding, not the conversation.",
    body: "Use Ask-tell-ask to organise your thinking, then take the scaffolding down before you speak. The other person should feel clarity, not choreography. If they can tell you're running a framework, you've made the structure louder than the point.",
    example:
      "\"What's your sense of this so far? Here's the key point. How does that land?\"",
    dont: '"I\'m going to ask you something, then tell you, then ask again."',
    do: "Ask, say the one thing that matters, and genuinely ask what they make of it.",
  },
  method: [
    {
      step: "1",
      title: "Decide it fits, silently",
      body: "Choose Ask-tell-ask only when it serves the moment: someone needs information, feedback or an explanation. Then use it silently. Naming the framework out loud is the fastest way to make it sound rehearsed.",
      examples: [
        { label: "Don't", text: '"I\'m going to ask, then tell, then ask."' },
        { label: "Do", text: "Just start with a genuine question." },
      ],
    },
    {
      step: "2",
      title: "Ask first: find their starting point",
      body: "Open with a real question about what they already know or think. This tells you where the gap is, so your telling lands on it instead of over their head or beneath them. Let their answer actually change what you say.",
      examples: [
        { label: "Ask", text: '"What\'s your sense of this so far?"' },
        { label: "Ask", text: '"How much of the background have you got?"' },
      ],
    },
    {
      step: "3",
      title: "Tell: one point, concisely",
      body: "Say the single thing that matters most, in plain language. The main point is X. The rest is only support. Resist the urge to tell everything you know: length buries the signal.",
      examples: [
        { label: "Weak", text: "a two-minute monologue covering every detail" },
        { label: "Better", text: '"The one thing that trips people up is X."' },
      ],
    },
    {
      step: "4",
      title: "Ask again: what do they make of it?",
      body: "Close with an open question that invites a real response, then actually wait. This turns your telling into shared understanding and shows you whether it landed.",
      examples: [
        { label: "Cosmetic", text: '"Make sense?" while already moving on' },
        { label: "Real", text: '"What do you make of that?"' },
      ],
    },
    {
      step: "5",
      title: "Adapt if it misses",
      body: "If they look confused or resistant, don't push the structure harder. Summarise, invite correction, or drop the framework and speak plainly. The point serves the person, not the other way round.",
      examples: [
        {
          label: "Reset",
          text: '"I made that too structured. Let me say it more simply."',
        },
      ],
    },
  ],
  liveThreadClues: [
    "Let me explain...",
    "So basically...",
    "The thing you need to know is...",
    "Can I give you some feedback?",
    "Here's what I'd do...",
    "What the report actually says is...",
  ],
  depthDial: [
    {
      depth: "One-line",
      useWhen: "quick check, low stakes",
      phrase: '"Quick sense-check. Does this land?"',
    },
    {
      depth: "Standard",
      useWhen: "most explanations and feedback",
      phrase:
        "\"What's your read so far? ... Here's the key point. ... How does that sit?\"",
    },
    {
      depth: "Full",
      useWhen: "complex or sensitive material",
      phrase:
        '"Before I dive in, where are you with this? ... Here\'s what matters most. ... What questions does that raise?"',
    },
  ],
  commonMistakes: [
    {
      mistake: "Skipping the first Ask",
      soundsLike: '"So let me explain how this works..." Straight into telling',
      better: '"What\'s your sense of this so far?" then tell.',
    },
    {
      mistake: "Over-structuring: naming the framework out loud",
      soundsLike: '"I\'m going to Ask, then Tell, then Ask."',
      better: "Just do it: ask, say the point, ask again.",
    },
    {
      mistake: "Letting the Tell become a lecture",
      soundsLike: "a two-minute monologue with no pause",
      better: '"The main point is X: the rest is only support."',
    },
    {
      mistake: "Making the final Ask cosmetic",
      soundsLike: '"Make sense?" while already gathering your papers',
      better: '"What do you make of that?", then actually wait.',
    },
    {
      mistake: "Using it when emotion needs listening first",
      soundsLike: "structuring information while they're still upset",
      better: "Validate first, then ask if they want the information.",
    },
    {
      mistake: "Ignoring the answer to your first Ask",
      soundsLike:
        "asking their starting point, then giving your standard spiel anyway",
      better: "Let what they already know change what you tell.",
    },
  ],
  recoveryPhrases: [
    "I made that too structured. Let me say it more simply.",
    "That may not be the useful frame. Let me back up.",
    "I don't want the structure to override the actual issue.",
    "What part of that was useful, and what should we drop?",
    "I think I lectured a bit there. What's the real question for you?",
    "Let me try that again, shorter.",
    "Forget my explanation for a second. Where did I lose you?",
  ],
  bestRecoveryLine: "I made that too structured. Let me say it more simply.",
  chains: [
    {
      label: "Clarity chain",
      sequence: "Ask-tell-ask → Summary check",
      example: [
        '"So before I explain. What\'s your read?"',
        '"Here\'s the key point."',
        '"How does that land?"',
        "\"Just so we're aligned. What's your takeaway?\"",
      ],
    },
    {
      label: "Request chain",
      sequence: "Ask-tell-ask → Clean request",
      example: [
        '"What\'s your sense of the blocker?"',
        '"The main issue is the sign-off is running late."',
        '"What do you make of that?"',
        '"So could you approve it by Thursday?"',
      ],
    },
    {
      label: "Autonomy chain",
      sequence: "Ask-tell-ask → Autonomy release",
      example: [
        '"Where are you leaning already?"',
        "\"Here's what I'd weigh up.\"",
        '"How does that sit?"',
        '"But it\'s genuinely your call."',
      ],
    },
    {
      label: "Emotion-first chain",
      sequence: "Validate → Ask-tell-ask",
      example: [
        '"That sounds like a hard week."',
        "\"When you're ready, what's your sense of where things stand?\"",
        "\"Here's the one thing I'd focus on.\"",
        '"What do you make of that?"',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC046",
      reason:
        "Elicit-provide-elicit is the motivational-interviewing sibling. Use Ask-tell-ask for teaching and explaining. Use Elicit-provide-elicit when the goal is drawing out the person's own motivation to change.",
    },
    {
      id: "TC027",
      reason:
        "Permission-based advice: use Ask-tell-ask when the structure of the information is the main need. Use Permission-based advice when you should ask leave before giving advice at all.",
    },
    {
      id: "TC013",
      reason:
        "Clean request: use Ask-tell-ask to build shared understanding. Use Clean request when what's needed is a single clear ask, not an explanation.",
    },
    {
      id: "TC043",
      reason:
        "OARS is the broader listening toolkit. Use Ask-tell-ask for a specific piece of information. Use OARS to keep a whole conversation open.",
    },
    {
      id: "TC044",
      reason:
        "BLUF: use it when the listener needs the bottom line first with no back-and-forth. Use Ask-tell-ask when you want to check their starting point and their reaction.",
    },
    {
      id: "TC011",
      reason:
        "Summary check is a natural partner for the closing Ask: after they respond, confirm you both heard the same thing.",
    },
  ],
};
