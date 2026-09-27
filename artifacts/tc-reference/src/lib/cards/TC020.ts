import type { CardData } from "../card-types";

export const TC020: CardData = {
  pdfUrl: "cards/TC020/TC020_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC020/TC020_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC020/TC020_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC020/TC020_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC020/TC020_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC020/TC020_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC020/TC020_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC020/TC020_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC020",
  whyItWorks:
    "A low-friction ask is a request shaped so it is genuinely easy to answer. You reduce the effort, the uncertainty, the timing pressure or the social cost of replying, while keeping a real option to decline. It works because people respond far more readily when saying yes is cheap and saying no is free: they do not have to guess what you need, weigh a hidden cost, or manage your feelings before they answer. The move is behavioural, not theoretical: one short, plain line that lowers the friction without lowering the clarity of what you are actually asking.",
  whatItIsNot: [
    'It is not making a manipulative ask sound easy, or saying "no pressure" after you have already applied pressure.',
    "It is not hiding the real cost of saying yes, or engineering a false agreement.",
    "It is not a dominance move, a way to force a favour, or a shortcut around consent and context.",
    "It is not lowering your standards for the request: the ask stays clear. Only the friction drops.",
  ],
  overview: {
    coreFormula: [
      'Reduce the effort: "If it\'s easy, could you send the link?"',
      'Reduce the ambiguity: "A yes or no is all I need."',
      'Give an easy path to reply: "A one-line answer is plenty."',
      'Make no genuinely acceptable: "No worries at all if not."',
    ],
    minimumViableMove:
      'Add one small easing clause to your request ("if it\'s easy" or "no worries if not") that makes a genuine no just as available as a yes.',
    impact: "Medium",
    difficulty: "Easy-Medium",
    misuse:
      'The move fails when "no pressure" becomes decoration: you soften how the ask sounds but leave the cost of refusing intact, so it only looks easy while a real no is still expensive.',
    bestFor: [
      "Busy people who are short on time",
      "Optional help or small favours",
      "Weak ties and first-time asks",
      "Quick replies where a full discussion is overkill",
      "Reducing the decision effort for the other person",
      "Digital and async requests",
      "Chasing something without adding pressure",
    ],
  },
  notFor: [
    "The ask has real stakes that need a full, honest discussion.",
    "Saying no would be socially risky for them.",
    'The other person has less power, so "optional" may not feel optional.',
    "Direct, open negotiation would be more respectful.",
    'Making it "easy" would hide a genuine cost of saying yes.',
    "Physical safety or an emergency needs a plain, direct request instead.",
  ],
  phraseBank: [
    {
      id: "quick-openers",
      label: "Quick openers",
      tag: "Starter one-liners",
      tone: "Quick",
      phrases: [
        "If it's easy, could you send the link? No worries if not.",
        "A yes or no is completely fine.",
        "No need for detail: a quick answer is plenty.",
        "If now's not a good time, just leave it.",
        "Whenever suits, no rush at all.",
        "Two-second question, if you have it to hand.",
        "Only if it's quick.",
        "Genuinely happy to be told no.",
      ],
    },
    {
      id: "warm-optional",
      label: "Warm & optional",
      tag: "Low-pressure warmth",
      tone: "Warm",
      phrases: [
        "No worries at all if you'd rather not.",
        "Genuinely fine either way.",
        "Please don't go out of your way for this.",
        "If it's a faff, forget it. It's not urgent.",
        "I'd love your help, but only if it's easy for you.",
        "No pressure, I just thought I'd ask.",
        "You'd be doing me a favour, but a no is completely fine.",
      ],
    },
    {
      id: "professional",
      label: "Work & professional",
      tag: "Meetings, email, clients",
      tone: "Professional",
      phrases: [
        "If you have 30 seconds, could you point me to the right person?",
        "A one-line reply is all I need.",
        "Whenever it's convenient this week is fine.",
        "Feel free to forward this on if someone else is better placed.",
        "If it's already to hand, could you share it? If not, I'll dig it out.",
        "No need to write it up: a quick steer is enough.",
        "If this isn't your area, just say and I'll ask elsewhere.",
      ],
    },
    {
      id: "direct-ask",
      label: "The clean ask",
      tag: "Ask plus an easy path",
      tone: "Direct",
      phrases: [
        "Could you send me the link when you get a moment?",
        "Can you point me to the file? A link is fine.",
        "Would a yes/no work for now, with the detail later?",
        "Could you confirm the date? One word is plenty.",
        "If it's easy, could you approve this today? If not, tomorrow's fine.",
        "Just the headline is enough. Could you give me that?",
      ],
    },
    {
      id: "digital-text",
      label: "Digital / text",
      tag: "Async, one clean line",
      tone: "Quick",
      phrases: [
        "To make sure I'm chasing the right thing. Is it the March version you need?",
        "Quick one: do you still have the deck? A link's perfect.",
        "No reply needed if it's already sorted.",
        "A thumbs-up is a fine answer.",
        "Reply whenever, I've set it aside, not waiting on it.",
        "If it's easier to send a screenshot than explain, that works too.",
      ],
    },
    {
      id: "repair",
      label: "When it lands heavy",
      tag: "Softening & recovery",
      tone: "Repair",
      phrases: [
        "Sorry, that came out more urgent than I meant. Genuinely no rush.",
        "Ignore the deadline I put on that. Whenever is fine.",
        "Let me put that more simply.",
        "No need to answer that if it's not useful.",
        "I jumped ahead there. Please leave it if it's awkward.",
        "Forget I asked. I'll find another route.",
      ],
    },
    {
      id: "high-stakes",
      label: "Guarded or senior",
      tag: "Power imbalance",
      tone: "High-stakes",
      phrases: [
        "Useful if I check the premise before I respond, or would you rather I just read it?",
        "Only if you're comfortable. No obligation either way.",
        "You're well within your rights to say no to this.",
        "I'd rather you said no than felt cornered into a yes.",
        "Take your time. There's no clock on this from my end.",
        "If it's not appropriate to ask, just tell me and I'll drop it.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "They're still speaking",
      action: "Wait: don't drop the ask into the middle of their point.",
      phrase: "",
    },
    {
      condition: "The ask is unclear",
      action: "Use a check version before you ask for anything.",
      phrase:
        "Just so I ask for the right thing. Is it the March file you mean?",
    },
    {
      condition: "They seem to resist or hesitate",
      action: "Validate the concern first, then lighten the ask.",
      phrase: "Totally fair if it's a hassle. No obligation.",
    },
    {
      condition: "They'd clearly rather decide for themselves",
      action: "Ask permission before offering help or advice.",
      phrase: "Want a suggestion, or would you rather run with it?",
    },
    {
      condition: "The move increased ease",
      action: "Continue: the exchange is flowing.",
      phrase: "",
    },
    {
      condition: "The move reduced ease",
      action: "Repair or release the ask.",
      phrase: "Forget it for now. I'll find another route.",
    },
  ],
  ladder: [
    {
      weak: "Can you do this for me? It'll only take a second.",
      better: "If it's easy, could you send me the link? No worries if not.",
      best: "If it's easy and you've got it nearby, could you send the link? If it'd take digging, please leave it.",
    },
    {
      weak: "Just following up again. I really need this today.",
      better: "No rush, but if it's to hand, could you send it over?",
      best: "Whenever suits, a link is plenty, and if someone else is better placed, feel free to pass it on.",
    },
    {
      weak: "Have you had a chance to look at my email yet?",
      better: "When you get a moment, a yes/no on this would really help.",
      best: "No urgency, a one-line steer is all I need, and a no is completely fine.",
    },
  ],
  scenarios: [
    {
      situation: "Social",
      move: "Keep it warm and brief. Make the invitation easy to decline.",
      phrase:
        "If you're free, fancy grabbing a coffee? No worries if the week's mad.",
    },
    {
      situation: "Professional",
      move: "Name the action or concern clearly, then cap the effort.",
      phrase:
        "If you've got the figures to hand, could you send them? If not, I'll pull them myself.",
    },
    {
      situation: "Digital / text",
      move: "Write one clean sentence and avoid overexplaining.",
      phrase: "Quick one. Do you still have the deck? A link's perfect.",
    },
    {
      situation: "Conflict or objection",
      move: "Validate or summarise before you make any ask.",
      phrase:
        "I think I've got your main worry. Can I check I've got it right before I respond?",
    },
    {
      situation: "High-status or guarded person",
      move: "Make the move optional and low-pressure.",
      phrase:
        "Only if it's useful. Would a quick premise-check help, or shall I just read it?",
    },
    {
      situation: "Close relationship",
      move: "Use ordinary language. Don't sound like a technique.",
      phrase: "If you're passing the shop, grab milk? Totally fine if not.",
    },
  ],
  calibration: {
    working: [
      "They reply quickly and easily.",
      "They give a little more detail than you asked for.",
      "They relax: tone softens, pace picks up.",
      "They correct you without any friction.",
      'They say "yes", "that\'s it", or offer a next step.',
      "They stay engaged rather than going quiet.",
    ],
    adjust: [
      "Their answers get shorter.",
      "You notice visible tension or a pause before they reply.",
      "They correct you but don't engage any further.",
      "They change the subject.",
      "A note of sarcasm creeps in.",
      "It starts to feel like the move is about your performance.",
      "If any of these show up, shorten the ask, drop the pressure, or release it entirely.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the friction",
      task: "Notice three requests you make today and mark which ones felt heavy or awkward to answer.",
    },
    {
      day: "Day 2",
      title: "Name the cue",
      task: "For five recent conversations, write the cue you missed where a lighter ask would have helped.",
    },
    {
      day: "Day 3",
      title: "Draft the line",
      task: 'Rewrite one of those asks as a single plain sentence with a genuine exit, e.g. "...no worries if not".',
    },
    {
      day: "Day 4",
      title: "Say it aloud",
      task: "Rehearse your line until it stops sounding scripted, and cut any word that quietly adds pressure.",
    },
    {
      day: "Day 5",
      title: "Add the fallback",
      task: 'Practise the "best" version: cap the effort ("if it\'s to hand") and offer a real alternative route.',
    },
    {
      day: "Day 6",
      title: "Field test",
      task: "Use one low-friction ask in a real conversation and note the calibration cue you saw in reply.",
    },
    {
      day: "Day 7",
      title: "Repair rep",
      task: "Deliberately over-ask, then practise a recovery line until releasing the ask feels natural.",
    },
  ],
  checklist: [
    "Did I notice the cue and pause before the reflex ask?",
    "Was the move short and in plain language?",
    "Did I leave a genuine, cost-free way to say no?",
    "Did I check rather than assume what they needed?",
    "Did I watch their response and calibrate?",
    "Did I repair quickly if it landed heavy?",
  ],
  example: {
    without: [
      'You: "Can you send me the document today? No pressure, but I really need it."',
      'Them: "That sounds like pressure."',
      'You: "Well... kind of."',
      "Why it's weak:",
      'the "no pressure" contradicts "I really need it"',
      "the deadline is fixed, so no isn't really available",
      "it makes the other person police the tone",
      "the ask sounds easy, but refusing still costs them",
    ],
    with: [
      "You: \"If you've got the document handy, could you send it? If it'd take digging, leave it and I'll find another route.\"",
      'Them: "I\'ve got it. Sending now."',
      'You: "Thanks, only if it was easy."',
      "Why this works:",
      'the effort is capped ("if it\'s handy")',
      "there's a real fallback, so a no costs them nothing",
      "the reply path is obvious and short",
      "the closing line confirms the no was genuine",
    ],
    note: "Low friction means easier to answer, not harder to refuse.",
  },
  influencePayoff: {
    feeling: '"That was easy to answer, and a no would have been fine too."',
    principle:
      "People respond more readily when replying costs them little and refusing costs them nothing.",
    gains: [
      "Cleaner coordination",
      "Less interpersonal friction",
      "Lower defensiveness",
      "Faster, easier replies",
      "Fewer false yeses",
      "Goodwill preserved for the next ask",
      "A next step that feels earned, not pushed",
    ],
    whyMostFail: [
      "They make the move too long, so it stops feeling light.",
      "They use it as a tactic, then push their own agenda straight after.",
      "They soften the wording but leave the pressure, so no isn't really available.",
      "They deliver it mechanically instead of in plain language.",
    ],
  },
  fieldTip: {
    headline: "Easier to answer, not harder to refuse.",
    body: "The whole test of a low-friction ask is whether a no still costs them nothing. If you've made the yes easy but left the no expensive, you haven't lowered friction. You've hidden pressure. Say the ask, then ask yourself: could they comfortably decline right now?",
    example: "Soften the cost of no, not just the sound of the ask.",
    dont: '"No pressure, but I really need this today."',
    do: '"If it\'s to hand, send it. If not, genuinely leave it."',
  },
  method: [
    {
      step: "1",
      title: "Notice the cue",
      body: "Catch the moment where an ask is about to land heavy: the person is busy, the favour is optional, a reply has stalled, or you feel yourself about to add pressure.",
      examples: [
        {
          label: "Cue",
          text: 'You catch yourself drafting "I really need this by..."',
        },
      ],
    },
    {
      step: "2",
      title: "Pause before the reflex",
      body: "Resist the automatic version: the apology-stuffed, deadline-heavy ask that guarantees a yes by making no awkward. A short pause is enough to choose the lighter line.",
    },
    {
      step: "3",
      title: "Say one short, plain line",
      body: "Make the request in ordinary language, and cap the effort so the reply is cheap.",
      examples: [
        { label: "Line", text: "If it's easy, could you send the link?" },
        { label: "Cap", text: "A one-line answer is plenty." },
      ],
    },
    {
      step: "4",
      title: "Leave a real exit",
      body: "Make no genuinely acceptable: offer a fallback route so declining costs them nothing.",
      examples: [
        {
          label: "Exit",
          text: "If it'd take digging, please leave it and I'll find another way.",
        },
      ],
    },
    {
      step: "5",
      title: "Watch the response",
      body: "Read whether ease went up or down. If they relax, correct you easily, or reply quickly, it landed. If they tense, go short, or go quiet, it didn't.",
    },
    {
      step: "6",
      title: "Repair quickly if it misses",
      body: "If the ask felt heavier than you intended, take the pressure back out loud and release it, rather than pressing on.",
      examples: [
        {
          label: "Repair",
          text: "Sorry, that came out more urgent than I meant. Genuinely no rush.",
        },
      ],
    },
  ],
  liveThreadClues: [
    'You catch yourself about to say "I really need this".',
    "The person is visibly busy, rushed, or buried.",
    "It's a small favour or an optional bit of help.",
    "You're messaging a weak tie or someone senior.",
    "A reply has stalled and you're tempted to chase.",
    "You notice yourself adding pressure to lock in a yes.",
  ],
  depthDial: [
    {
      depth: "Light nudge",
      useWhen: "Low stakes, warm tie",
      phrase: "If it's easy, could you send the link?",
    },
    {
      depth: "Warm & optional",
      useWhen: "They may feel obliged",
      phrase: "No worries at all if now's not a good time.",
    },
    {
      depth: "Capped with a fallback",
      useWhen: "Busy or senior person",
      phrase:
        "If it's to hand, send it. If it'd take digging, please leave it and I'll find another route.",
    },
    {
      depth: "Full release",
      useWhen: "Guilt or power imbalance in play",
      phrase: "I'd genuinely rather you said no than felt cornered into a yes.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Fake ease",
      soundsLike: '"No pressure, but I really need it today."',
      better: "\"If it's easy, today's great. If not, tomorrow's fine.\"",
    },
    {
      mistake: "Making the move too long",
      soundsLike:
        '"So sorry to bother you, I know you\'re slammed, but if you possibly could..."',
      better: '"Quick one. Could you send the link?"',
    },
    {
      mistake: "Using it as a tactic",
      soundsLike:
        "The easing line, then straight into pushing your own agenda.",
      better: 'Say "only if it\'s easy" and mean it, with nothing attached.',
    },
    {
      mistake: "Repeating it mechanically",
      soundsLike: '"No worries if not" stapled onto every single line.',
      better: "Say it once, then let the exit stand.",
    },
    {
      mistake: "Over-polished wording",
      soundsLike: '"Would you be amenable to furnishing me with the file?"',
      better: '"Have you got the file handy?"',
    },
    {
      mistake: "Ignoring the correction",
      soundsLike: "Pressing on after they've clearly eased off.",
      better: '"Fair enough, I\'ll leave it and find another route."',
    },
    {
      mistake: "Missing the context",
      soundsLike:
        "The same breezy ask to someone junior, senior, or exhausted.",
      better: "Match the ask to their power, culture, urgency and workload.",
    },
  ],
  recoveryPhrases: [
    "Sorry, that came out more urgent than I meant.",
    "Ignore the deadline. Whenever suits is genuinely fine.",
    "Let me put that more simply.",
    "No need to answer that if it's not useful.",
    "I jumped ahead there. Please leave it.",
    "Forget I asked. I'll find another route.",
    "A no here is completely fine, honestly.",
  ],
  bestRecoveryLine:
    "Sorry, that came out heavier than I meant. Please treat it as completely optional.",
  chains: [
    {
      label: "Understand, then ask",
      sequence: "Full-attention signal → Low-friction ask → Summary check",
      example: [
        "Give them your full attention and let them finish.",
        "\"If it's easy, could you send the figures? If not, I'll pull them.\"",
        '"So the version you\'d send is the March one, have I got that right?"',
      ],
    },
    {
      label: "Listen, then offer",
      sequence:
        "Reflective listening → Low-friction ask → Permission-based advice",
      example: [
        '"Sounds like the timing is the tricky part."',
        '"Want me to take a first pass? Only if that\'s genuinely helpful."',
        '"Happy to suggest an approach if it\'d be useful. Your call."',
      ],
    },
    {
      label: "Release the pressure",
      sequence: "Low-friction ask → Autonomy release",
      example: [
        '"If you\'ve got a spare ten minutes this week, could you look it over?"',
        '"Honestly, no obligation: a no won\'t cause me any problem."',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC019",
      reason:
        "Small ask reduces the scope of the request. Use Low-friction ask when the ask is already small but still needs to be easy to answer.",
    },
    {
      id: "TC013",
      reason:
        "Clean request clarifies the action. Use Low-friction ask when clarity is already there and friction is the real barrier.",
    },
    {
      id: "TC021",
      reason:
        "Autonomy release explicitly releases pressure. Pair it with Low-friction ask when power, guilt or obligation may be present.",
    },
    {
      id: "TC094",
      reason:
        "Bounded request puts firm limits on time or scope. Use Low-friction ask when the point is easing effort, not fencing the boundaries.",
    },
    {
      id: "TC072",
      reason:
        "Low-pressure invitation opens a door without expecting a yes. Use Low-friction ask when you do want a specific action, just made cheap to give.",
    },
    {
      id: "TC088",
      reason:
        "One-screen message keeps a written request short enough to answer at a glance. Use Low-friction ask when the friction is the cost of replying, not the length.",
    },
  ],
};
