import type { CardData } from "../card-types";

export const TC027: CardData = {
  pdfUrl: "cards/TC027/TC027_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC027/TC027_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC027/TC027_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC027/TC027_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC027/TC027_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC027/TC027_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC027/TC027_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC027/TC027_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC027",
  whyItWorks:
    "Permission-based advice is a transition move between listening and offering input: before you start solving, you check whether the person wants advice, what kind would help, and how much. It turns advice from an unsolicited correction into an invited contribution. People resist input that arrives as a verdict on them, but they take the same input readily when they were asked first and keep the final say. Asking preserves their sense of choice, so your idea lands as help rather than pressure.",
  whatItIsNot: [
    "Not silently withholding a useful view forever.",
    "Not asking 'Can I give you some advice?' while already sounding determined to give it.",
    "Not a licence to monologue once they say yes.",
    "Not advice disguised as a question, like 'Have you thought about just...?'",
    "Not a replacement for urgent action, a clear boundary, or a safety decision.",
  ],
  overview: {
    coreFormula: [
      "Understand → ask their mode → ask permission → give one concise idea → hand back the choice → check how it landed.",
      "That sounds exhausting. Do you want me to just listen, or would it help if I offered one possible way to approach it?",
      "I have one thought, but I don't want to jump into fixing mode. Would it be useful?",
      "Would you like my honest take, or are you mainly wanting to vent right now?",
      "One option, if useful, would be X. But you know the situation better than I do.",
      "Take this or leave it. I wonder whether the easiest first step is X.",
    ],
    minimumViableMove:
      "Ask before you advise: 'Would it help if I offered one thought?'",
    impact: "High",
    difficulty: "Easy-Medium",
    misuse:
      "Giving advice after a token permission check, then pushing when they hesitate or decline. Permission opens a small door. It does not license taking over the room.",
    bestFor: [
      "When someone is venting and you are not sure whether they want advice.",
      "When you have a useful view but the relationship matters more than being right.",
      "When a person seems ambivalent, overwhelmed or defensive.",
      "When you want to help without becoming patronising.",
      "Coaching, friendship, leadership, mentoring, dating and social support, and conflict repair.",
      "Digital or text situations, where unsolicited advice can sound harsher than intended.",
      "After validation, reflection or a summary check, when the person seems ready for input.",
    ],
  },
  notFor: [
    "There is an urgent safety or operational issue that needs direct action now.",
    "They explicitly asked for advice and are clearly ready for it.",
    "You have not understood the situation well enough to advise.",
    "The issue is really your boundary or request, not their problem to solve.",
    "A power imbalance means their 'no' would not be truly safe to say.",
    "You are asking permission only to satisfy yourself before lecturing.",
    "They are emotionally flooded and need containment or validation first.",
  ],
  phraseBank: [
    {
      id: "quick_permission",
      label: "Quick permission",
      tag: "Quick & text asks",
      tone: "Quick",
      phrases: [
        "Do you want my take, or should I just listen?",
        "Would it help if I shared one thought?",
        "Are you wanting ideas, or mainly space to vent?",
        "Can I offer one option, or not helpful right now?",
        "Do you want my take or just a sympathetic ear?",
        "I have one thought if useful. No need if you're just venting.",
        "Would practical ideas help right now?",
        "Happy to just listen, but I can also suggest a next step.",
      ],
    },
    {
      id: "warm_supportive",
      label: "Warm and supportive",
      tag: "When they're stressed or upset",
      tone: "Warm",
      phrases: [
        "That sounds like a lot. Would it be useful if I helped you think through options?",
        "I can see why this has been weighing on you. Do you want my perspective, or just company with it for a minute?",
        "I have a thought, but I don't want to steamroll what you need right now.",
        "Do you want comfort, thinking-it-through, or practical next steps?",
        "I can stay in listening mode, or we can problem-solve together. What would help?",
      ],
    },
    {
      id: "professional_leadership",
      label: "Professional / leadership",
      tag: "Work, projects, one-to-ones",
      tone: "Professional",
      phrases: [
        "Would it be useful if I shared a possible next step?",
        "I can give you a quick view, if that would help.",
        "Would you like feedback, or are you still mapping the issue?",
        "One suggestion, if you're open to it, is to sort out sign-off first.",
        "Can I offer a framing that may make the decision easier?",
      ],
    },
    {
      id: "conflict_resistance",
      label: "Conflict / resistance",
      tag: "When they're frustrated with you",
      tone: "High-stakes",
      phrases: [
        "Before I offer a view, I want to make sure I've understood the concern.",
        "Would it be useful if I suggested a way to make this less frustrating?",
        "I don't want to talk over the concern. Are you open to one idea?",
        "If you're not looking for suggestions yet, that's fine. I can stay with understanding it.",
        "I have a possible path, but I want to check whether you want that now.",
      ],
    },
    {
      id: "high_status_busy",
      label: "High-status / busy person",
      tag: "Senior and time-poor",
      tone: "Direct",
      phrases: [
        "Would a quick outside read help?",
        "I can offer a concise view if useful.",
        "One possible lens, if welcome, is the cost of doing nothing.",
        "Would you like a recommendation, or just the key trade-off?",
        "I can keep this to one suggestion.",
      ],
    },
    {
      id: "shy_guarded",
      label: "Shy / guarded person",
      tag: "Low pressure, easy to decline",
      tone: "Warm",
      phrases: [
        "No pressure, but would it help to hear one possible option?",
        "I won't push advice. I can just listen if that's better.",
        "Would ideas be useful, or would that feel like too much right now?",
        "Take this only if it fits, and ignore it if it doesn't.",
        "We can leave the advice part for later if you want.",
      ],
    },
    {
      id: "dating_social",
      label: "Dating / social",
      tag: "Friends, light and playful",
      tone: "Quick",
      phrases: [
        "Do you want my sensible answer or my supportive-friend answer?",
        "Do you want me to be helpful, or just outraged on your behalf for a second?",
        "I have a thought, but I don't want to ruin a good vent.",
        "Would a suggestion help, or are we in emotional-support mode?",
        "One gentle take, if you're open to it...",
      ],
    },
    {
      id: "after_jumping_in",
      label: "After you already jumped in",
      tag: "Repair after over-advising",
      tone: "Repair",
      phrases: [
        "Sorry, I went straight into fixing. Do you actually want advice right now?",
        "I think I skipped the listening part. Let me back up.",
        "That was more advice than you asked for. What would be useful from me here?",
        "I may have jumped ahead. Do you want me to just understand it first?",
        "Let me stop solving for a second. What's the part that matters most?",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "They say yes",
      action:
        "Give one concise suggestion, tie it to their situation, then check fit.",
      phrase: "One option, if useful, is X. What do you make of that?",
    },
    {
      condition: "They say no",
      action: "Accept it cleanly and stay in listening mode.",
      phrase: "All good. I'll just listen.",
    },
    {
      condition: "They say 'maybe'",
      action: "Offer a very small, easy-to-refuse option.",
      phrase:
        "I can give one quick thought, and you can ignore it if it doesn't fit.",
    },
    {
      condition: "They become defensive",
      action: "Stop advising and validate the concern first.",
      phrase: "Fair enough. Let me make sure I've actually understood it.",
    },
    {
      condition: "They say they already tried that",
      action: "Ask what happened rather than pushing a new solution.",
      phrase: "Ah. What happened when you tried?",
    },
    {
      condition: "They ask you directly what to do",
      action: "Answer clearly, but keep the decision and the context theirs.",
      phrase: "If it were me, I'd do X, but you know the full picture.",
    },
  ],
  ladder: [
    {
      weak: "You should just tell them.",
      better: "Would you like a suggestion?",
      best: "That sounds frustrating. Do you want me to just listen, or would one possible next step help?",
    },
    {
      weak: "Have you tried setting boundaries?",
      better: "Can I offer one idea?",
      best: "One option, if useful, is to define the single boundary you most want before the conversation.",
    },
    {
      weak: "You're overthinking it.",
      better: "Maybe think about the timing.",
      best: "The part that seems most actionable is the timing. But you know the dynamics better than I do.",
    },
    {
      weak: "Let me tell you what to do.",
      better: "Want my honest take?",
      best: "I can give a concise read if you want it, but I don't want to push advice if you're still processing.",
    },
  ],
  scenarios: [
    {
      situation: "Casual / social: a friend vents about work",
      move: "Offer ideas or company, and let them choose which.",
      phrase:
        "That sounds exhausting. Do you want ideas, or are we just letting this be annoying for a minute?",
    },
    {
      situation: "Professional: a colleague describes a stuck project",
      move: "Check whether they want input or are still mapping it out.",
      phrase:
        "Would it be useful if I suggested a possible next step, or are you still mapping it out?",
    },
    {
      situation: "Leadership: a team member brings a problem",
      move: "Name the modes on offer and let them pick.",
      phrase:
        "Do you want coaching, a recommendation, or just a sounding board first?",
    },
    {
      situation: "Conflict: they are frustrated with you",
      move: "Understand the concern before proposing anything.",
      phrase:
        "Before I suggest anything, I want to make sure I've understood. Are you open to one possible way forward?",
    },
    {
      situation: "Digital / text: a long frustration message",
      move: "Offer the choice in one short, warm reply.",
      phrase:
        "That sounds like a lot. Do you want my take, or should I just be on your side for a bit?",
    },
    {
      situation: "Shy / guarded: they seem uncertain",
      move: "Keep it low-pressure and genuinely optional.",
      phrase: "No pressure, but would one possible option help?",
    },
  ],
  calibration: {
    working: [
      "They say yes and lean in.",
      "They ask for your view or a next step.",
      "Their tone or posture relaxes, because they feel less pushed.",
      "They start weighing options rather than defending themselves.",
      "They say 'that's useful', 'that makes sense', or 'I hadn't thought of it that way.'",
      "They can disagree with your idea without shutting down, because the choice stays theirs.",
    ],
    adjust: [
      "They go quiet, clipped or defensive: stop advising and return to reflection.",
      "They answer 'yeah, but...' to each idea. Ask what part, if any, was useful.",
      "They look overwhelmed: shrink it back to one next step.",
      "You notice you're on your third suggestion. Name that you slipped into fixing mode.",
      "They seem to be deferring to you. Release ownership: 'You know this better than I do.'",
      "It clearly isn't the moment: offer practical help later instead of now.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Notice the urge",
      task: "Through the day, catch three moments where you wanted to give advice. Write down what you nearly said, but don't say it.",
    },
    {
      day: "Day 2",
      title: "Write the permission check",
      task: "For each of yesterday's three moments, write the one-line permission question you'd ask instead, e.g. 'Want my take, or should I just listen?'",
    },
    {
      day: "Day 3",
      title: "Learn the three modes",
      task: "Practise offering the choice between listening, thinking-it-through, and suggestions. Draft one line that names all three and say it aloud until it sounds natural.",
    },
    {
      day: "Day 4",
      title: "Shrink the advice",
      task: "Take an issue you genuinely have advice about and cut that advice to a single concise sentence. If it needs a second paragraph, it needs another permission check.",
    },
    {
      day: "Day 5",
      title: "Use it live, once",
      task: "In one real conversation, ask permission before advising and give only one idea. Afterwards, ask yourself whether a 'no' truly felt available to them.",
    },
    {
      day: "Day 6",
      title: "Hold a clean 'no'",
      task: "When someone declines or says 'maybe', respond with real acceptance ('All good, I'll just listen') and hold it. No sliding the advice back in.",
    },
    {
      day: "Day 7",
      title: "Recover on purpose",
      task: "Replay a moment where you jumped into fixing, and practise the repair line out loud: 'Let me back up. What would actually be useful from me here?'",
    },
  ],
  checklist: [
    "Did I ask before advising, or did I just start solving?",
    "Was my wording shorter than my instinct?",
    "Could they have said 'no' and had it genuinely land?",
    "Did I give one idea, or slide into a lecture?",
    "Did I hand the decision back to them at the end?",
  ],
  example: {
    without: [
      "Person: 'I'm so tired of this situation at work.'",
      "You: 'You just need to talk to your manager and set boundaries.'",
      "Person: 'It's not that simple.'",
      "You: 'It actually is. You're overthinking it.'",
      "Why it's weak:",
      "solves before understanding the problem or the feeling",
      "never checks whether they wanted advice at all",
      "dismisses their pushback instead of getting curious",
      "leaves them more defended, not more helped",
    ],
    with: [
      "Person: 'I'm so tired of this situation at work.'",
      "You: 'That sounds draining. Do you want me to just listen, or would it help if I offered one possible next step?'",
      "Person: 'Maybe one idea would help.'",
      "You: 'One option could be to write down the two specific things you want changed before you speak to them, so the conversation isn't everything at once. But you know the dynamics better than I do.'",
      "Why this works:",
      "reflects the feeling before offering anything",
      "checks their mode and lets 'no' be a real answer",
      "gives one concise idea tied to their goal",
      "hands the decision back at the end",
      "Advanced version:",
      "Person: 'I'm so tired of this situation at work.'",
      "You: 'It sounds like you're exhausted and a bit trapped by it.'",
      "Person: 'Exactly.'",
      "You: 'Do you want support, or are you at the point where you want to think through options?'",
      "Person: 'Options, I think.'",
      "You: 'Then I'd separate the emotional part from the tactical part. Emotionally, it makes sense you're fed up. Tactically, the first move might be one small conversation about a single concrete change, not the whole situation.'",
    ],
    note: "The advanced version reflects first, checks the mode, offers one idea, and keeps the decision with them. The permission is real: a 'no' would have been fine.",
  },
  influencePayoff: {
    feeling:
      "They offered to help without taking over, and I still got to decide.",
    principle:
      "People take input more readily when they were asked first and keep the final say.",
    gains: [
      "Reduces resistance, because the other person feels choice rather than pressure.",
      "Makes your advice feel respectful rather than corrective.",
      "Avoids the common likability failure of solving before understanding.",
      "Makes advice more relevant, because you first learn whether they want listening, thinking or suggestions.",
      "Preserves autonomy, dignity and trust even when you hold a strong view.",
      "Creates a clean transition from empathy into practical help.",
    ],
    whyMostFail: [
      "They ask permission, get a yes, then deliver a long, generic lecture.",
      "The permission is fake: asked in a tone where 'no' never felt safe.",
      "They advise before the person feels understood, so it lands as correction.",
      "They disguise advice as a question ('Have you thought about just...?') instead of owning it.",
    ],
  },
  fieldTip: {
    headline: "One piece, then hand it back.",
    body: "Ask permission, give one useful thing, then return the choice. If your advice needs a second paragraph, it probably needs another permission check.",
    dont: "'Can I give you some advice?' followed by ten minutes of it.",
    do: "'One option, if useful, is X. But you know the situation better than I do.'",
  },
  method: [
    {
      step: "1",
      title: "Understand before offering",
      body: "Reflect or summarise what they've said first. Advice lands far better once the person feels you've grasped the problem, the emotion and the constraint.",
      examples: [
        {
          label: "Reflect",
          text: "It sounds like you're exhausted and a bit trapped by it.",
        },
      ],
    },
    {
      step: "2",
      title: "Check their mode",
      body: "Ask whether they want listening, help thinking it through, or practical suggestions. People need different things at different moments, and guessing wrong is how good advice gets rejected.",
      examples: [
        {
          label: "Ask mode",
          text: "Do you want comfort, thinking-it-through, or a next step?",
        },
      ],
    },
    {
      step: "3",
      title: "Ask permission specifically",
      body: "Don't ask vaguely. Ask to share one thought, one option, or one possible next step, and mean the question, so a 'no' is genuinely fine.",
      examples: [
        { label: "Ask", text: "Would it help if I offered one thought?" },
      ],
    },
    {
      step: "4",
      title: "Keep it compact and tied to their goal",
      body: "Give the smallest useful piece, and make clear why it fits what they said matters, not what you would personally prefer. One idea beats five. If it needs a second paragraph, ask permission again.",
      examples: [
        {
          label: "Tie to goal",
          text: "If your goal is less stress, the simplest first step might be X.",
        },
      ],
    },
    {
      step: "5",
      title: "Return ownership",
      body: "Hand the decision back with autonomy language: 'It's your call', 'you know the situation best', 'take what fits and leave the rest'. This is what stops advice tipping into pressure.",
      examples: [
        {
          label: "Hand back",
          text: "Take what's useful and leave the rest. It's your call.",
        },
      ],
    },
    {
      step: "6",
      title: "Check how it lands",
      body: "Ask what they make of it. If they resist, get curious rather than pushing harder: resistance usually means the wrong mode, the wrong timing, or too much at once.",
      examples: [
        {
          label: "Check fit",
          text: "What do you make of that? Useful, or off?",
        },
      ],
    },
  ],
  liveThreadClues: [
    "'I'm so tired of this...'",
    "'I don't know what to do.'",
    "'It's so frustrating.'",
    "'What would you do?'",
    "'I just needed to get that out.'",
    "'Anyway, sorry for the rant.'",
  ],
  depthDial: [
    {
      depth: "Listen",
      useWhen: "They're venting or flooded and need to be heard.",
      phrase: "I'm here. No fixing, just listening.",
    },
    {
      depth: "Think together",
      useWhen: "They're sorting it out and want a thinking partner.",
      phrase: "Want to think it through together?",
    },
    {
      depth: "One option",
      useWhen: "They're open to input but still deciding.",
      phrase: "One option, if useful, is X.",
    },
    {
      depth: "Recommendation",
      useWhen: "They've directly asked what you would do.",
      phrase: "If you want my recommendation, it'd be X.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Asking permission, then lecturing",
      soundsLike: "'Can I offer advice?' followed by ten minutes of it.",
      better: "Offer one concise idea, then check how it lands.",
    },
    {
      mistake: "Fake permission",
      soundsLike: "Asking in a tone that makes 'no' feel unsafe.",
      better: "Make 'no' genuinely acceptable. Mean the question.",
    },
    {
      mistake: "Advice disguised as curiosity",
      soundsLike: "'Have you thought about just apologising?'",
      better: "Name it as advice, or ask a genuinely open question.",
    },
    {
      mistake: "Skipping understanding",
      soundsLike:
        "Advising before you've reflected the problem or the emotion.",
      better: "Reflect first, advise second.",
    },
    {
      mistake: "Giving generic advice",
      soundsLike: "'Just be confident' or 'Don't worry about it.'",
      better: "Tie the advice to their actual constraint.",
    },
    {
      mistake: "Solving the wrong mode",
      soundsLike: "Offering strategy when they wanted empathy.",
      better: "Check whether they want listening, thinking, or suggestions.",
    },
    {
      mistake: "Using advice to control",
      soundsLike: "Steering them toward whatever would make you comfortable.",
      better: "Preserve their ownership and their choice.",
    },
    {
      mistake: "Over-hedging",
      soundsLike: "So much permission language that you sound anxious.",
      better: "Ask clearly once, then contribute simply.",
    },
  ],
  recoveryPhrases: [
    "Sorry, I went into fixing mode too quickly.",
    "That was more advice than you asked for.",
    "Let me back up. What would actually be useful from me here?",
    "I might be solving when you mainly wanted me to understand.",
    "Ignore that if it doesn't fit. You know the situation better than I do.",
    "I got a bit attached to my idea there. Your call.",
    "Let me stop advising for a second. What's the part that feels hardest?",
  ],
  bestRecoveryLine:
    "Let me back up. What would actually be useful from me here?",
  chains: [
    {
      label: "Support chain",
      sequence:
        "Reflect → ask permission → one concise suggestion → release ownership",
      example: [
        "That sounds exhausting.",
        "Do you want ideas, or just to be heard for a minute?",
        "One option, if useful, is to change one thing rather than everything.",
        "But it's your call.",
      ],
    },
    {
      label: "Conflict chain",
      sequence:
        "Validate the concern → ask permission → suggest one workable path → check the response",
      example: [
        "I can see why that landed badly.",
        "Are you open to one possible way forward?",
        "We could agree the one change that matters most, and leave the rest.",
        "Does that feel workable, or off?",
      ],
    },
    {
      label: "Leadership chain",
      sequence:
        "Summary check → ask if feedback would help → offer one recommendation → agree the next step",
      example: [
        "So the blocker is sign-off, not the build.",
        "Want my recommendation, or are you still mapping it?",
        "I'd get the one approval you need before Friday.",
        "Shall we make that the next step?",
      ],
    },
    {
      label: "Friendship chain",
      sequence:
        "Listen → validate → ask comfort-or-advice → respond in the chosen mode",
      example: [
        "That's a lot to carry.",
        "Do you want comfort, or do you want to problem-solve?",
        "Then I'll just be on your side for a bit.",
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC015",
      reason:
        "Premature advice restraint is the holding-back move. Reach for TC027 when you do have something useful and want to offer it well. Reach for TC015 when the right move is not to advise yet at all.",
    },
    {
      id: "TC021",
      reason:
        "Autonomy release is the 'it's your call' hand-back. It's the closing beat of TC027. Use TC021 on its own whenever a decision simply needs to be visibly left with the other person.",
    },
    {
      id: "TC034",
      reason:
        "Two-option questions offer a choice between two clear options. TC027 often uses one to check mode ('listen, or suggest?'). Use TC034 wherever a clean binary makes any question easier to answer.",
    },
    {
      id: "TC020",
      reason:
        "Low-friction ask shapes a request so it's easy to say yes to. TC027 asks permission to give advice. TC020 lowers the cost of an ask you are making of them.",
    },
  ],
};
