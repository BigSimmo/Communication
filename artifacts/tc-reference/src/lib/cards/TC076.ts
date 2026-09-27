import type { CardData } from "../card-types";

export const TC076: CardData = {
  pdfUrl: "cards/TC076/TC076_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC076/TC076_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC076/TC076_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC076/TC076_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC076/TC076_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC076/TC076_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC076/TC076_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC076/TC076_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC076",
  whyItWorks:
    "Interrogation avoidance means asking in a way that feels like an invitation, not a cross-examination. People rarely shut down over one bad question. They shut down when the sequence feels like a test: why, who, when, how much, and why again. Slow the exchange down, show your reason for asking, ask one soft question at a time, and make it legitimate to answer lightly or pass, so they can answer honestly without defending themselves.",
  whatItIsNot: [
    "Avoiding necessary clarity. Some situations genuinely need direct, factual questions.",
    "Letting harmful ambiguity stand. Safety, consent, legal, medical, and compliance contexts may require precise questioning.",
    "Hiding your intent behind softness. The goal is transparency, not manipulation.",
    "Performing friendliness while still quietly extracting private information.",
    "Turning every conversation into therapy. This applies to ordinary social, professional, and difficult conversations alike.",
  ],
  overview: {
    coreFormula: [
      "Formula: observation or context + one soft question + autonomy release.",
      "That sounds like a lot. If one question is okay: what would be useful from me right now?",
      "I'm asking so I don't have to guess. What's the main constraint? Short version is fine.",
      "I don't want this to feel like an interview. What part feels easiest to explain?",
      "No pressure to go into detail. Was the main issue timing, tone, or something else?",
    ],
    minimumViableMove:
      "Make one human comment, ask one soft question, then release the pressure: 'One question, and you can skip it: what changed?'",
    impact: "Low",
    difficulty: "Medium",
    misuse:
      "Mistaking a softer tone for lower pressure, and still asking too many, too personal, or too leading questions, just in a gentler voice.",
    bestFor: [
      "Sensitive personal topics: grief, conflict, health, money, family, identity, or a career or relationship change.",
      "Newer relationships, where curiosity can easily feel like screening.",
      "Management, coaching, feedback, and incident reviews where the other person may fear blame.",
      "Professional discovery, where you need information but want to preserve rapport.",
      "Async messages, where stacked questions pile on cognitive load.",
      "Repair, after a first question came out too sharp.",
    ],
  },
  notFor: [
    "Safety-critical facts that must be established quickly. Ask clearly and directly.",
    "Formal investigations, audits, safeguarding, medical triage, or legal procedures that need a documented sequence. Frame the process openly: 'I need to ask these in order for safety.'",
    "Structured questioning the person has already consented to, such as an interview or intake. Stay warm, but don't obscure the process.",
    "Any moment you would be using softness to prise out information the person doesn't want to share. Stop.",
    "After the person has set a boundary. Respect it rather than rephrasing the same ask.",
  ],
  phraseBank: [
    {
      id: "quick-starters",
      label: "Quick starters",
      tag: "Short, low-effort openers",
      tone: "Quick",
      phrases: [
        "One question, and you can skip it: what changed?",
        "Short version is fine: what's the decision point?",
        "No need for a long reply. What's the headline version?",
        "Only if you want to say: what was that like?",
        "I'm asking so I don't have to guess. What's the main thing?",
        "Just the part you're happy to share: what mattered most?",
        "One small question, then I'll leave it: what would help right now?",
        "Feel free to keep it general: what was the turning point?",
      ],
    },
    {
      id: "warm-sensitive",
      label: "Warm and sensitive",
      tag: "Personal or vulnerable topics",
      tone: "Warm",
      phrases: [
        "I'm curious, but I don't want to pry. What's the public version?",
        "I don't want to make you relive it. What would feel supportive right now?",
        "This might be too personal, so feel free to skip it: what changed for you?",
        "That sounds like a lot to carry. If one question is okay, what would be useful from me?",
        "Thanks for trusting me with that. I'll ask gently: what do you need right now?",
        "I'm curious, but no pressure to go into it. What drew you to that?",
        "That sounds heavy. I won't dig. Would it help to talk about what comes next?",
        "Only if you want to: was that more of a relief or more of a loss?",
        "No pressure to unpack it. What matters most to you at the moment?",
      ],
    },
    {
      id: "professional-diagnosis",
      label: "Diagnosis without blame",
      tag: "Work, incident review, client",
      tone: "Professional",
      phrases: [
        "I'm trying to understand the system, not assign blame. What constraint mattered most?",
        "Rather than ask ten questions, I'll start with the key one: what should I understand first?",
        "A few details would help me avoid guessing. Is it okay if I ask one clarifying question?",
        "To understand the situation without putting you on the spot: what was the main blocker?",
        "I don't want this to sound like a cross-examination. What's the one thing I should know first?",
        "I want clarity without turning this into blame. What most changed the plan?",
        "Rather than pepper you with questions: what trade-off did you end up choosing?",
        "It sounds like we're aligned on the timeline. Can I check one thing on scope?",
        "I'm not asking who failed. I'm asking what made it hard.",
      ],
    },
    {
      id: "direct-async",
      label: "Async and two-option asks",
      tag: "Text, email, low-friction",
      tone: "Direct",
      phrases: [
        "Answer whichever is easiest: timing, budget, or scope?",
        "No need for a long reply. Was the main issue timing, tone, or something else?",
        "I sent too many questions. Just answer the first one if it's useful.",
        "This might be easier live. No pressure to unpack it by text.",
        "You can ignore this if it's too much to type. What was the headline?",
        "Give me the short version and I'll follow up only if I need to.",
        "Whichever is simpler to answer is fine by me.",
        "One question for now: what's the single most important detail?",
      ],
    },
    {
      id: "repair-softening",
      label: "Repair and softening",
      tag: "When it landed like a cross-exam",
      tone: "Repair",
      phrases: [
        "That came out like an interrogation. Let me slow down.",
        "You don't have to answer all that. The only thing I really need to understand is...",
        "I asked that too sharply. Let me reframe it.",
        "We can leave this if it feels like too much.",
        "That sounded accusatory. What I meant was: what were you working with?",
        "I asked that badly. I'm looking for context, not a defence.",
        "The general version is enough. We don't need the private details.",
        "I'll follow your lead on whether this is worth discussing.",
      ],
    },
    {
      id: "high-stakes-direct",
      label: "When you must ask directly",
      tag: "Safety-critical or high-pressure",
      tone: "High-stakes",
      phrases: [
        "I need to ask this directly for safety, not blame. Are you at risk right now?",
        "I don't want to corner you. What's the safest fact to confirm now?",
        "This matters, so I'm going to slow down: one question at a time.",
        "I need to ask these in order, and I'll tell you why as we go.",
        "I have to ask clearly here. What happened first?",
        "This is important, so I'll keep it to the one thing I truly need.",
        "I'm not trying to trap you. I just need the one fact that keeps everyone safe.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "Do I actually need this information?",
      action:
        "If no, don't ask. Offer presence, validation, or silence. If yes, continue.",
      phrase: "You don't have to explain anything. I'm just here.",
    },
    {
      condition:
        "Is the topic sensitive, personal, blame-adjacent, or high-status?",
      action:
        "If no, ask plainly and briefly. If yes, use interrogation avoidance.",
      phrase: "Can I ask one thing about how that went?",
    },
    {
      condition: "Am I about to ask more than one question?",
      action:
        "Choose the single question that matters most and save the rest for later.",
      phrase: "I'll start with the key one: what should I understand first?",
    },
    {
      condition: "Could they wonder why I'm asking?",
      action:
        "Add a neutral reason before the question so they don't have to guess your motive.",
      phrase: "I'm asking so I don't guess. What was the main constraint?",
    },
    {
      condition: "Could the answer need privacy, effort, or vulnerability?",
      action:
        "Add a pass or short-answer option, then let the answer land before asking again.",
      phrase: "Short version is fine, and you can skip it entirely.",
    },
    {
      condition: "Did the question land badly?",
      action: "Name the pressure, apologise briefly, and reduce the ask.",
      phrase:
        "That came out sharper than I meant. Let me ask the useful part only.",
    },
  ],
  ladder: [
    {
      weak: '"Why did it happen? Who ended it? What did they say?"',
      better:
        '"Do you want to talk about what happened, or leave it alone for now?"',
      best: "\"I'm sorry. I don't want to make you relive it. If one question is okay: what would feel most supportive tonight?\"",
    },
    {
      weak: '"Why did this slip? Who missed the deadline? Did anyone escalate?"',
      better: '"What\'s the main blocker I should understand first?"',
      best: '"I want clarity without turning this into blame. What constraint most changed the plan?"',
    },
    {
      weak: '"Are you mad? What did I do? Why are you being weird?"',
      better:
        '"I might be misreading this. Do you want space, or should I check what landed badly?"',
      best: '"I sense I may have put pressure on you. No need to answer now. Would space help, or is there one thing I should repair?"',
    },
    {
      weak: '"Why did you leave? Was it toxic? How much were they paying?"',
      better: '"What was the turning point, if you don\'t mind saying?"',
      best: "\"I'm curious, but I don't want to pry. What's the public version of the turning point?\"",
    },
  ],
  scenarios: [
    {
      situation:
        "Personal disclosure: they share something vulnerable and your curiosity jumps ahead.",
      move: "Reflect the weight, ask permission, then ask one support-oriented question.",
      phrase:
        "That sounds heavy. I won't dig. Would it help to talk about what you need next?",
    },
    {
      situation:
        "Work problem diagnosis: you need facts but they could feel blamed.",
      move: "State the shared purpose, ask for the main constraint, and avoid why-and-who chains.",
      phrase:
        "I'm trying to understand the system, not assign blame. What constraint mattered most?",
    },
    {
      situation:
        "Social chemistry: questions are turning into a screening checklist.",
      move: "Switch from data-gathering to shared experience and optional stories.",
      phrase:
        "This is starting to sound like an interview from me. What part of that story is fun to tell?",
    },
    {
      situation:
        "Conflict repair: you want explanations but they may hear accusation.",
      move: "Own your need to understand and ask one non-leading question.",
      phrase:
        "I want to understand without cross-examining you. What did my part look like from your side?",
    },
    {
      situation: "Async message: several question marks and no clear priority.",
      move: "Replace the bundle with one question and a low-effort reply format.",
      phrase:
        "No need for a long reply. What's the main constraint: timing, budget, or scope?",
    },
  ],
  calibration: {
    working: [
      "They answer with more detail than the question strictly required.",
      "Their tone relaxes after you release the pressure.",
      "They correct or refine your wording without getting defensive.",
      "They ask a question back or volunteer context on their own.",
      "They show humour, reflection, or visible relief.",
      "They move from short facts into a fuller story.",
    ],
    adjust: [
      "Answers get shorter, or you hear a repeated 'I don't know.'",
      "Replies come more slowly, or an async thread goes quiet after several questions.",
      "They deflect with a joke or change the subject.",
      "Defensive wording creeps in: 'It wasn't like that' or 'Why are you asking?'",
      "Posture closes: less eye contact, folded arms, a flatter tone.",
      "A direct boundary appears ('I don't want to talk about it'). Stop and leave it.",
      "You notice your questions keep circling back to the same private point.",
      "It has become about your need to know rather than their willingness to share.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the stack",
      task: "Catch one moment today when you asked, or wanted to ask, several questions at once. Write the stack down exactly as it came out.",
    },
    {
      day: "Day 2",
      title: "Pick the one",
      task: "Take three of your natural question-stacks and, for each, choose the single question that actually matters. Cross out the rest.",
    },
    {
      day: "Day 3",
      title: "Swap the 'why'",
      task: "Convert three accusatory 'why did you...' questions into 'what led to...' or 'what constraint...' versions and say them aloud.",
    },
    {
      day: "Day 4",
      title: "Add the context",
      task: "For three questions, write a short, neutral reason for asking, such as 'I'm asking so I don't guess,' and pair it with the question.",
    },
    {
      day: "Day 5",
      title: "Release the pressure",
      task: "Add a pass or short-answer option to three sensitive questions: 'short version is fine,' 'skip it if you'd rather.'",
    },
    {
      day: "Day 6",
      title: "Live reps",
      task: "In real conversations, ask only one question at a time and pause after each answer before asking more. Notice what opens up.",
    },
    {
      day: "Day 7",
      title: "Practise the repair",
      task: "Rehearse one recovery line until it sounds natural ('That sounded like an interrogation. Let me slow down'), then use it the next time a question lands too sharply.",
    },
  ],
  checklist: [
    "Am I about to ask more than one question, and which single one matters most?",
    "Does the person know why I'm asking?",
    "Is the topic private, emotional, status-related, or blame-adjacent?",
    "Could my wording sound like 'justify yourself'?",
    "Have I made it acceptable to answer lightly or to pass?",
    "Am I asking from care and clarity, or from my own anxiety?",
  ],
  example: {
    without: [
      "Ari: I left that job after six months.",
      "Blake: Why? What happened? Was the boss bad? Did you quit or get pushed out?",
      "Ari: It's a long story.",
      "Blake: But what actually happened?",
      "Ari: I'd rather not get into it.",
      "Why it fails: Blake asks stacked, personal, motive-heavy questions. Ari has to defend their privacy instead of choosing what to share.",
    ],
    with: [
      "Ari: I left that job after six months.",
      "Blake: Sounds like there was a lot behind that. What was the general turning point, if you don't mind saying?",
      "Ari: Mostly the workload and a mismatch with the role.",
      "Blake: That makes sense. Was leaving more relief or disappointment?",
      "Ari: A bit of both, actually.",
      "Why it works: Blake makes one human comment, asks one broad question, and waits before asking more.",
      "Advanced: 'I'm curious, but I don't want to make this feel like an interview. You can give the public version or skip it. What was the main lesson from that move?'",
      "Ari: The public version is that I ignored some signs in the interview process.",
      "Blake: That's useful, and I won't dig into the private details. What sign would you take more seriously next time?",
      "Ari: Whether people can describe the role clearly.",
      "Blake: That's a sharp signal.",
      "Why it works: Blake lowers pressure, offers control, and asks about learning rather than gossip, so no private detail has to be prised out.",
    ],
    note: "Same opening line, three outcomes: the poor version extracts, while the better and advanced versions let Ari choose the depth.",
  },
  influencePayoff: {
    feeling: '"I was asked, not examined, and I got to choose what to share."',
    principle:
      "When people don't feel interrogated, they answer with more precision and less defensiveness. One clean question beats five anxious probes.",
    gains: [
      "More honest answers, because the person isn't bracing against a perceived attack.",
      "More useful detail, because the conversation slows enough for real reflection.",
      "Less defensiveness in conflict, feedback, management, dating, family, and friendship.",
      "Better information quality, since one clean question outperforms five anxious probes.",
      "Higher dignity, because the person keeps control over depth and timing.",
      "Easier repair when a question does land badly.",
    ],
    whyMostFail: [
      "They soften the tone but keep extracting: a gentle voice around too many, too personal, or too leading questions still reads as pressure.",
      "Their curiosity outruns them, so questions stack before the last answer has landed.",
      "They mistake rapport for entitlement and treat warmth as a right to private information.",
      "They run the move mechanically, or hijack the topic, instead of genuinely following the other person's lead.",
    ],
  },
  fieldTip: {
    headline: "One question lands better than five.",
    body: "If your curiosity is racing, don't speed the conversation up. Slow yourself down. Make one human comment, ask the one question that matters, and give the person an easy way to answer less.",
    example:
      "Pocket phrase: 'I don't want this to feel like an interview. One small question, and you can skip it: what matters most here?'",
    dont: "Don't stack 'why, who, when, how much' and assume a soft tone is enough.",
    do: "Do ask one context-rich question, then let the answer land before asking anything else.",
  },
  method: [
    {
      step: "1",
      title: "Scan your question load",
      body: "Before you speak, count the questions you're about to ask. If there's more than one, pick the single most useful one and hold the rest back.",
    },
    {
      step: "2",
      title: "Replace suspicion with context",
      body: "Say why the question matters, in neutral terms, so the other person doesn't have to guess your motive.",
      examples: [
        {
          label: "Context line",
          text: "I'm trying to understand the constraint, not assign blame.",
        },
      ],
    },
    {
      step: "3",
      title: "Lead with a human preface",
      body: "Put a comment, reflection, or bit of appreciation in front of the question. It makes the ask warmer and less interrogative.",
      examples: [
        { label: "Preface", text: "That sounds like a lot to carry." },
      ],
    },
    {
      step: "4",
      title: "Ask one soft question",
      body: "Prefer 'what' or 'how' over an accusatory 'why' when emotions or accountability are in play. The right question is short, easy to answer, and connected to their words.",
      examples: [
        { label: "Instead of", text: "Why did you do that?" },
        { label: "Try", text: "What made that option seem best at the time?" },
      ],
    },
    {
      step: "5",
      title: "Release the pressure",
      body: "Offer a pass, a short-answer option, or a later-answer option, then let the answer land. After a sensitive answer, reflect or pause rather than firing off the next question.",
      examples: [
        { label: "Pass", text: "Only if you want to say." },
        { label: "Short answer", text: "The short version is fine." },
      ],
    },
  ],
  liveThreadClues: [
    "Several questions stacking up in a row",
    "A 'why did you...' forming in your mouth",
    "Rapid-fire follow-ups with no pause between them",
    "Narrow, leading, either/or options",
    "A serious or suspicious tone creeping in",
    "Questions that quietly demand justification",
  ],
  commonMistakes: [
    {
      mistake: "Stacking questions",
      soundsLike: '"What happened, why, who was there, and what did you do?"',
      better:
        'Choose the one that matters: "What was the main thing that changed?"',
    },
    {
      mistake: "Using 'why' as an accusation",
      soundsLike: '"Why did you do that?" often reads as "justify yourself."',
      better: '"What led to that?" or "What constraint mattered most?"',
    },
    {
      mistake: "Softening the tone but keeping the extraction",
      soundsLike: '"No pressure, but tell me exactly what happened."',
      better: "\"Only if it's easy to say: what's the general version?\"",
    },
    {
      mistake: "Narrowing too early",
      soundsLike: '"Was it him or her?" when neither option fits.',
      better: '"What would you say was going on, in your own words?"',
    },
    {
      mistake: "Treating silence as permission to ask more",
      soundsLike: "Filling every pause with another question.",
      better: '"Take your time. There\'s no rush."',
    },
    {
      mistake: "Confusing warmth with entitlement",
      soundsLike: '"We\'re close, so you can tell me."',
      better: '"You never have to share more than you want to."',
    },
    {
      mistake: "Continuing after a boundary",
      soundsLike: "Rephrasing the same ask a slightly different way.",
      better: '"Fair enough. I\'ll leave that one."',
    },
  ],
  recoveryPhrases: [
    "That sounded like an interrogation. Sorry. Let me slow down.",
    "You don't have to answer all of that. I asked too many questions.",
    "I'm realising that may be too personal. We can leave it.",
    "Let me ask the useful part only.",
    "I'm not asking who failed. I'm trying to understand what made it hard.",
    "That sounded accusatory. What I meant was: what were you working with?",
    "The general version is enough. We don't need the private details.",
    "No need to answer now. I'll follow your lead on whether this is worth discussing.",
  ],
  bestRecoveryLine:
    "That came out like a cross-examination. Sorry. Let me ask the useful part only.",
  chains: [
    {
      label: "Stiff-conversation warm-up",
      sequence:
        "Warm presence → Comment-before-question → Interrogation avoidance",
      example: [
        "It's good to actually catch up properly.",
        "That project sounded full-on.",
        "If it's easy to say, what was the hardest part?",
      ],
    },
    {
      label: "Meaningful-phrase follow",
      sequence:
        "Exact-word pickup → Interrogation avoidance → Echo plus question",
      example: [
        "You said 'mismatch'. That word stood out.",
        "I won't dig into all of it.",
        "Mismatch how: the work, or the people?",
      ],
    },
    {
      label: "Conflict clarity",
      sequence:
        "Validation without agreement → Interrogation avoidance → Clarify objection",
      example: [
        "I can see why that landed badly.",
        "I want to understand, not cross-examine you.",
        "What part of the plan doesn't sit right?",
      ],
    },
    {
      label: "Professional next step",
      sequence: "Summary check → Interrogation avoidance → Clean request",
      example: [
        "So the timeline held but the scope grew.",
        "I'm after the cause, not the culprit: what most changed the plan?",
        "Could you send me the revised scope by Thursday?",
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC003",
      reason:
        "Both soften questions. Use TC003 to take the edge off a single abrupt question. Use TC076 when a whole sequence risks feeling like a cross-examination.",
    },
    {
      id: "TC085",
      reason:
        "Question-stacking is one interrogation trigger. Use TC085 for pure quantity control. Use TC076 for the wider job of protecting motive, pace, privacy, and dignity.",
    },
    {
      id: "TC072",
      reason:
        "A low-pressure invitation is often one phrase inside TC076. Use TC072 to invite optional participation. Use TC076 for the whole question sequence.",
    },
    {
      id: "TC034",
      reason:
        "Two options can reduce load or, if leading, still corner someone. Use TC034 when options create ease. Fall back to TC076 when they create pressure.",
    },
    {
      id: "TC009",
      reason:
        "Boomerasking is self-turning. Interrogation is pressure-turning. Use TC009 when your move risks becoming about you. Use TC076 when their answer feels demanded.",
    },
    {
      id: "TC045",
      reason:
        "TC045 is an information-sharing structure. Use it when you're giving information and checking understanding. Use TC076 when you need them to share something personal or sensitive.",
    },
  ],
};
