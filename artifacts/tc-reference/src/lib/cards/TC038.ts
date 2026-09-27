import type { CardData } from "../card-types";

export const TC038: CardData = {
  pdfUrl: "cards/TC038/TC038_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC038/TC038_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC038/TC038_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC038/TC038_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC038/TC038_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC038/TC038_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC038/TC038_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC038/TC038_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC038",
  whyItWorks:
    "Conversation threading is the practice of noticing a thread someone opened earlier (a topic, a feeling, or an unfinished point) and reopening it cleanly, without derailing the conversation you are currently in. It works because it changes the interaction at the level of timing, attention and response choice rather than adding a complicated script: the other person feels genuinely heard, the exchange stays on the thread that actually matters, and nothing important gets quietly dropped.",
  whatItIsNot: [
    "It is not a trick, a performance, a dominance move, or a shortcut around consent.",
    "It is not a way to drag someone back to a topic they've moved on from.",
    "It is not a replacement for listening, context, judgement, or direct action when action is what is needed.",
    "It is not reopening every loose end. That turns attention into an interrogation.",
  ],
  overview: {
    coreFormula: [
      "Notice an earlier thread → ask permission to return → name the thread → ask one clean follow-up → release if energy is low.",
      "Can I come back to something you said earlier about that part?",
      "Earlier you mentioned the timing. Is that still the key bit?",
      "There were two threads there: the workload and the uncertainty. Which one matters more?",
    ],
    minimumViableMove:
      "Can I come back to something you said earlier about that part?",
    impact: "Low",
    difficulty: "Medium",
    misuse:
      "Jumping around too much, reopening stale topics, or using threading to control the conversation instead of following what matters.",
    bestFor: [
      "Someone has mentioned several topics and one clearly deserves follow-up.",
      "The conversation moved past something important too quickly.",
      "You want continuity without interrogating.",
      "An important detail got lost in a busy or emotional exchange.",
      "A meeting has covered a lot and one point needs revisiting.",
      "You want the other person to feel heard without pressing them.",
    ],
  },
  notFor: [
    "The person has clearly closed the topic.",
    "Returning to the thread would feel like a trap or a gotcha.",
    "The current topic is urgent and should not be interrupted.",
    "You would only be reopening it to steer toward your own point.",
    "They are already short, flat, or tense.",
    "Direct action is what the moment actually needs.",
  ],
  phraseBank: [
    {
      id: "quick",
      label: "Quick loop-backs",
      tag: "Short openers & text",
      tone: "Quick",
      phrases: [
        "Can we go back to something for a second?",
        "One thing from earlier...",
        "Before we move on, can I pick up something?",
        "Quick loop-back to what you said.",
        "Can I come back to that bit?",
        "Earlier you mentioned the timing, still the key thing?",
        "Mind if we return to the first thing you said?",
        "There's a thread I don't want to drop.",
      ],
    },
    {
      id: "warm",
      label: "Warm returns",
      tag: "Making them feel heard",
      tone: "Warm",
      phrases: [
        "You said something earlier that has stayed with me.",
        "I don't want to lose the thread about the move.",
        "That bit about your team. I'd like to come back to it.",
        "Earlier you touched on something I'd love to hear more about.",
        "Before we move on, I want to pick up what you said about trust.",
        "You mentioned it in passing, but it sounded like it mattered.",
        "Can we come back to the part that lit you up earlier?",
        "I keep thinking about what you said before. Can we return to it?",
      ],
    },
    {
      id: "professional",
      label: "Meetings & decisions",
      tag: "Work threading",
      tone: "Professional",
      phrases: [
        "Can I come back to the part about your team for a second?",
        "Earlier you mentioned the budget. Can we return to that?",
        "Before we close, I want to pick up the point on timing.",
        "Is the main thread the decision itself, or the way it was handled?",
        "There were two threads there: scope and resourcing. Which matters most?",
        "We covered a lot. Can we go back to the risk you raised?",
        "One item got skipped: the handover. Can we return to it?",
        "Parking that for now. I'd like to reopen the earlier question.",
      ],
    },
    {
      id: "naming-threads",
      label: "Naming the threads",
      tag: "Choose the live thread",
      tone: "Direct",
      phrases: [
        "There were two threads there: the workload and the uncertainty. Which one matters more?",
        "Earlier you mentioned the timing. Is that what made the whole thing harder?",
        "Is the main thread here the decision, or how it was handled?",
        "A few things came up, which is the one to stay with?",
        "You raised the deadline, the role, and the money. Where do we start?",
        "The real thread might be the trust part, not the schedule.",
        "Which of those is the one you actually want to talk about?",
        "Let's pick one thread and stay with it.",
      ],
    },
    {
      id: "release",
      label: "Offer an exit",
      tag: "Release & soften",
      tone: "Repair",
      phrases: [
        "We can stay with that or move on. Your call.",
        "Ignore this if it's not the right moment.",
        "No pressure, I just didn't want to skip past it.",
        "We don't have to go back there if you'd rather not.",
        "Say the word and we'll leave it.",
        "If that's the wrong thread, tell me.",
        "Only if it's useful. Happy to drop it.",
        "I might be reading it wrong, so redirect me.",
      ],
    },
    {
      id: "emotional",
      label: "Emotional or tense threads",
      tag: "Careful re-entry",
      tone: "High-stakes",
      phrases: [
        "I may be reading this wrong, but that seems like the key thread.",
        "Earlier you said it felt sudden. Was the hard part the amount, or being left with it?",
        "Before we solve anything, can we go back to what you actually felt?",
        "The thread I don't want to lose is the part that clearly stung.",
        "You mentioned being left alone with it. Can we stay there a moment?",
        "The useful part might be the bit about feeling unsupported, not the timeline.",
        "Can we come back to what mattered most in that, before we move on?",
        "It sounded like there was more under that. Do you want to say it?",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "They add detail after your return",
      action: "Stay on the same thread and let them keep going.",
      phrase: "Go on. What happened with that?",
    },
    {
      condition: "They pause thoughtfully",
      action: "Wait. Give the thread room to land.",
      phrase: "No rush.",
    },
    {
      condition: "They look uncomfortable or go flat",
      action: "Release the move and lower the pressure.",
      phrase: "We can leave that. No need to get into it.",
    },
    {
      condition: "They ask for advice",
      action: "Switch to Permission-based advice (TC027).",
      phrase: "Want my take, or just a sounding board?",
    },
    {
      condition: "They give a clear, direct answer",
      action: "Take the answer. Do not reopen or overuse threading.",
      phrase: "Got it, thanks for spelling it out.",
    },
    {
      condition: "The situation needs action, not conversation",
      action: "Act directly rather than decorating the exchange.",
      phrase: "Let's just sort the timing now and talk later.",
    },
  ],
  ladder: [
    {
      weak: "Wait, go back. What about that other thing?",
      better: "Can I come back to something earlier?",
      best: "Can I come back to what you said about trust? It sounded like there was more there.",
    },
    {
      weak: "You're changing subjects.",
      better: "There are a few threads here.",
      best: "There are a few threads here: the deadline, the role, and the uncertainty. Which one is most important?",
    },
    {
      weak: "That reminds me of...",
      better: "Earlier you mentioned the timing.",
      best: "Earlier you mentioned the timing. Is that what made the whole thing harder?",
    },
  ],
  scenarios: [
    {
      situation: "Casual conversation",
      move: "Use the minimum viable move and keep the tone light: one small return, no analysis.",
      phrase: "Can I come back to that thing about your trip?",
    },
    {
      situation: "Workplace or meeting",
      move: "Use concise, non-performative wording. Name the thread and avoid emotional overreach.",
      phrase: "Before we close, can we return to the resourcing point?",
    },
    {
      situation: "Conflict or repair",
      move: "Pair the return with validation or an autonomy release so it never feels like a trap.",
      phrase:
        "You can wave me off, but earlier you said it felt unfair. Can we stay there?",
    },
    {
      situation: "Digital message",
      move: "Use one sentence only. Do not stack prompts or reopen several threads at once.",
      phrase: "Quick one. Can we go back to what you said about the deadline?",
    },
    {
      situation: "High-stakes context",
      move: "Lead with direct clarity first. Add threading only if it lowers pressure and improves understanding.",
      phrase:
        "Let's settle the decision, then come back to how it landed for you.",
    },
    {
      situation: "They mentioned several things at once",
      move: "Name the threads out loud and let them choose which one to stay with.",
      phrase:
        "You raised a few things, which is the one that matters most right now?",
    },
  ],
  calibration: {
    working: [
      "They add detail on the thread you reopened.",
      "Their tone softens or becomes more specific.",
      "They correct you without defensiveness.",
      "They stay on the same thread and keep going.",
      "They ask you something back.",
      "The return feels like continuity, not interruption.",
    ],
    adjust: [
      "Answers get shorter.",
      "Tone is polite but flat.",
      "They keep shifting the topic.",
      "Forced laughter or visible tension.",
      "Defensiveness or confusion.",
      "They withdraw or refuse outright.",
      "The move makes the conversation feel less safe.",
      "When in doubt, make the move smaller or release it.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the threads",
      task: "In one real conversation, silently note each time the other person opens a thread and leaves it: a topic dropped, a feeling mentioned in passing. Do not act yet. Just notice.",
    },
    {
      day: "Day 2",
      title: "Collect real lines",
      task: "Write five realistic lines someone might say where a thread gets opened and left unfinished.",
    },
    {
      day: "Day 3",
      title: "Weak, better, best",
      task: "For each line, draft a weak, a better, and a best thread-return.",
    },
    {
      day: "Day 4",
      title: "Cut it down",
      task: "Reduce each best version by about 30 percent so it stays short, tentative, and low-pressure.",
    },
    {
      day: "Day 5",
      title: "Add an exit",
      task: "Add one recovery or release phrase to each, so the other person can always decline.",
    },
    {
      day: "Day 6",
      title: "Say it plainly",
      task: "Practise the minimum viable move aloud until it sounds like ordinary attention, not a technique.",
    },
    {
      day: "Day 7",
      title: "Use it once",
      task: "In a real, low-stakes conversation, reopen one earlier thread, then stop and watch how it lands.",
    },
  ],
  checklist: [
    "Did I keep the other person's autonomy intact?",
    "Did I use one move, or stack several?",
    "Did my tone fit the relationship and context?",
    "Did I stop when the signal weakened?",
    "Did I follow their thread rather than my own agenda?",
    "Would a simpler response have been better?",
  ],
  example: {
    without: [
      "A: It just felt like too much at once.",
      "B: Why did you let it get like that? You should have said something earlier.",
      "Why it's weak: it judges, ignores the live thread, and gives them nothing to open up about.",
    ],
    with: [
      "A: It just felt like too much at once.",
      "B: That sounds like it carried more weight than the facts alone.",
      "A: Yes, it felt like I was suddenly carrying all of it.",
      "B: Earlier you said it felt sudden. Was the hard part the amount, or being left with it?",
      "A: Exactly. I could have handled the work if someone had acknowledged it.",
      "B: So the thread is being left alone with it, not only being busy.",
      "A: That's it.",
    ],
    note: 'The advanced version reopens the earlier thread ("too much at once") and names the real meaning without taking control of it.',
  },
  influencePayoff: {
    feeling: '"They actually kept track of what mattered to me."',
    principle:
      "People open up more when they trust you will hold the thread rather than drop it. Continuity signals real attention, and it protects dignity because they can still accept, redirect, or decline without being cornered.",
    gains: [
      "Better conversational accuracy",
      "Trust and a felt sense of being heard",
      "Less friction and less overtalking",
      "The conversation stays on the thread that matters",
      "The other person keeps their autonomy and dignity",
      "Continuity without interrogation",
    ],
    whyMostFail: [
      "They jump around and reopen stale topics instead of the live one.",
      "They use threading to steer toward their own point, so it feels like a trap.",
      "They overuse it until it sounds like a technique rather than a person.",
      "They mistake politeness, nervousness, or fatigue for engagement and press on.",
    ],
  },
  fieldTip: {
    headline: "Continuity, not interruption.",
    body: "A good thread return feels like you never lost the plot, not like you are yanking the conversation backwards. Name the earlier thread so the person can feel exactly where you are going, and keep the return short and optional.",
    example:
      "You said something earlier that sounded important. Can we come back to it?",
    dont: 'Do not cut across with "Wait, go back to that other thing". It reads as an interruption.',
    do: 'Name it: "Earlier you mentioned the timing. Is that still the key bit?"',
  },
  method: [
    {
      step: "1",
      title: "Track the open threads",
      body: "As someone talks, quietly note the threads they open: a topic raised then dropped, a feeling mentioned in passing, a point they said they would return to. You are listening for the one thread that still has life, relevance, or unfinished meaning.",
    },
    {
      step: "2",
      title: "Choose the smallest useful move",
      body: "Pick one thread: the one that matters, not every loose end. Reopening everything turns attention into an interrogation. One thread, chosen well, is enough.",
    },
    {
      step: "3",
      title: "Name the thread as you return",
      body: "Signal that you are coming back to something specific, so it lands as continuity rather than a jump. Naming it tells them exactly where you are going and why.",
      examples: [
        { label: "Vague", text: "So, anyway..." },
        { label: "Named", text: "Earlier you mentioned the timing..." },
      ],
    },
    {
      step: "4",
      title: "Ask one clean follow-up",
      body: "Add a single, low-pressure question in ordinary language. No script. Keep it short and tentative so they can accept, redirect, or decline.",
      examples: [
        {
          label: "Too much",
          text: "Why did that happen, and how did it make you feel, and what did you do?",
        },
        { label: "Clean", text: "Is that still the key bit?" },
      ],
    },
    {
      step: "5",
      title: "Pause and read the response",
      body: "Give the return room to land, then follow their next signal. If they add detail or soften, stay with the thread. If they pause thoughtfully, wait.",
    },
    {
      step: "6",
      title: "Release if the signal is weak",
      body: "If they go shorter, flatter, or tense, drop the move without a fuss. Threading is only worth doing when it increases ease and relevance, never when it adds pressure.",
    },
  ],
  liveThreadClues: [
    '"...anyway, that\'s another story."',
    '"...but that\'s a whole other thing."',
    '"I\'ll come back to that."',
    '"There were a couple of things, but mainly..."',
    "A topic raised once, then dropped as they moved on.",
    "A feeling mentioned in passing but never unpacked.",
    "The first point they made and never returned to.",
  ],
  commonMistakes: [
    {
      mistake: "Using the move too many times in a row.",
      soundsLike: '"And going back again. Earlier you also said..."',
      better: "Thread once, then let the conversation breathe.",
    },
    {
      mistake: "Sounding like a technique, not a person.",
      soundsLike: '"I\'d like to circle back and thread that."',
      better: '"Earlier you mentioned the timing. Is that the key bit?"',
    },
    {
      mistake: "Ignoring their decline or change of topic.",
      soundsLike: '"No, but earlier you said..." (after they\'ve moved on)',
      better: 'Let it go: "No worries, we can leave that."',
    },
    {
      mistake: "Over-explaining after you have made the move.",
      soundsLike: '"I only ask because I like to keep track of threads and..."',
      better: "Ask the one question, then stop talking.",
    },
    {
      mistake: "Threading to push your own point.",
      soundsLike: '"Going back to what you said, which is exactly my point..."',
      better:
        "Reopen the thread that matters to them, not the one that helps you.",
    },
    {
      mistake: "Reopening a stale, closed topic.",
      soundsLike: '"Hey, that thing from twenty minutes ago..."',
      better:
        "Only return to threads that still have life or unfinished meaning.",
    },
    {
      mistake: "Mistaking politeness or fatigue for engagement.",
      soundsLike: "Pressing on after flat, tired, one-word answers.",
      better: "Read the energy first. If it's low, don't reopen.",
    },
  ],
  recoveryPhrases: [
    "I may be reading that wrong.",
    "We don't have to stay with that.",
    "Let me say that more simply.",
    "That came out too strong.",
    "Ignore that if it doesn't fit.",
    "We can go another direction.",
    "What would be more useful right now?",
    "No pressure, happy to drop it.",
  ],
  bestRecoveryLine:
    "We don't have to stay with that. What would be more useful right now?",
  chains: [
    {
      label: "Notice, thread, confirm",
      sequence:
        "Live thread follow-ups (TC001) → Conversation threading (TC038) → Summary check (TC011)",
      example: [
        "They mention several things. You follow the live one in the moment (TC001).",
        "Later you reopen the thread that still matters (TC038).",
        'You close by checking you have it right: "So the main issue is the handover?" (TC011).',
      ],
    },
    {
      label: "Energy, thread, deepen",
      sequence:
        "Topic energy tracking (TC041) → Conversation threading (TC038) → Echo plus question (TC030)",
      example: [
        "You notice which topic has the most energy (TC041).",
        "You return to it deliberately once the moment is right (TC038).",
        "You echo their phrase and ask one more question (TC030).",
      ],
    },
    {
      label: "Their word, thread, meaning",
      sequence:
        "Exact word pickup (TC025) → Conversation threading (TC038) → Meaning reflection (TC040)",
      example: [
        "You pick up the exact word they loaded with feeling (TC025).",
        "You reopen that thread when it won't add pressure (TC038).",
        "You reflect what it actually meant to them (TC040).",
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC001",
      reason:
        "Live thread follow-ups follow the immediate, current thread. Conversation threading reopens or organises threads across time.",
    },
    {
      id: "TC041",
      reason:
        "Topic energy tracking notices which thread has energy. Conversation threading chooses and reopens a thread deliberately.",
    },
    {
      id: "TC030",
      reason:
        "Echo plus question deepens the current phrase. Conversation threading returns to a prior topic.",
    },
    {
      id: "TC011",
      reason:
        "Summary check confirms understanding. Conversation threading manages which topic line to continue.",
    },
    {
      id: "TC025",
      reason:
        "Exact word pickup reuses their precise word in the moment. Conversation threading returns to the topic that word belonged to.",
    },
    {
      id: "TC040",
      reason:
        "Meaning reflection names what something meant. Conversation threading is how you get back to the thread worth reflecting on.",
    },
  ],
};
