import type { CardData } from "../card-types";

export const TC056: CardData = {
  pdfUrl: "cards/TC056/TC056_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC056/TC056_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC056/TC056_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC056/TC056_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC056/TC056_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC056/TC056_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC056/TC056_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC056/TC056_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC056",
  whyItWorks:
    "Topic preference detection is noticing where someone's attention becomes more alive (more detail, emotion, pace, specificity, humour, questions, or callbacks) and then lightly checking whether they want to stay there. It is not guessing a hidden motive. It is reading observable signals and testing them with a respectful check. It works because people experience a conversation as better when the other person notices what has life for them and does not force a dead branch. You become easier to talk with not by asking more, but by testing interest and handing back the choice.",
  whatItIsNot: [
    "It is not mind reading, profiling, persuasion hacking, or interrogation.",
    'It is not "I know what you really want to talk about." It is "I noticed more energy here. Is this a better place to stay?"',
    "It is not a reason to ignore a boundary or keep returning to a topic after someone has cooled or declined.",
    "It is not simply asking more questions. More questions can feel like pressure. The distinctive move is a preference check that hands over the steering wheel.",
  ],
  overview: {
    coreFormula: [
      "Signal + tentative label + choice + respectful follow-through.",
      "When you mentioned the new role, you had a lot more detail. Is that the thread to stay with?",
      "You lit up a bit when travel came up. Want to talk about that, or keep this practical?",
      "Your answer got more specific around the customer side. Should we spend more time there?",
      "More energy showed up around [topic]. Stay there, or move on?",
    ],
    minimumViableMove:
      'Notice the one topic that had more energy, name it softly, and hand over the choice: "You seemed more interested when we got to [topic], want to stay there, or keep moving?"',
    impact: "Low",
    difficulty: "Medium",
    misuse:
      'It fails when you treat a signal as proof and declare the person\'s preference ("You obviously want to talk about X") which removes their choice and makes them feel analysed rather than heard. Overreading a small aside, or returning to a topic after they have cooled, does the same damage.',
    bestFor: [
      "Open social conversations with several possible topics",
      "First meetings where the shared interest is still being found",
      "Interviews, discovery calls, coaching, mentoring, and facilitation",
      "Team conversations where one thread suddenly becomes more useful",
      "Digital chats where reply length, specificity, and timing reveal interest",
      "Moments where someone briefly lights up before the conversation moves on too fast",
    ],
  },
  notFor: [
    "They have stated a boundary or asked to stop",
    "There is an urgent agenda, safety issue, or legal, medical, or HR process",
    "You are tempted to use the signal to push a sale, flirtation, or confession",
    "They are tired, distressed, or under pressure and need simplicity, not exploration",
    "The topic is private or high-stakes and you do not have consent to explore it",
    "Physical safety or an immediate emergency takes priority",
  ],
  phraseBank: [
    {
      id: "quick_openers",
      label: "Quick openers",
      tag: "Short one-liners",
      tone: "Quick",
      phrases: [
        "More energy on [topic]?",
        "Is [topic] the more interesting thread here?",
        "Stay with [topic], or keep moving?",
        "That part seems to have more juice. Is it?",
        "You lit up a bit there. Want to stay with it?",
        "More detail showed up around [topic]. Stay there, or move on?",
        "Want me to follow this thread?",
      ],
    },
    {
      id: "social",
      label: "Social / catch-up",
      tag: "Warm social checks",
      tone: "Warm",
      phrases: [
        "You seemed more animated when you mentioned [topic]. Want to stay there for a bit?",
        "You sounded a little brighter on the [topic] part. Want to talk about that, or is work the main thing?",
        "I noticed you smiled when [topic] came up. Is that a better thread?",
        "We can keep going here, or go back to [topic] if that's more interesting.",
        "You had more detail on the climbing trip than on work. Want to stay with that?",
        "That sounds like the part you actually enjoy. Shall we start there?",
      ],
    },
    {
      id: "professional",
      label: "Professional / meetings",
      tag: "Workplace focus selection",
      tone: "Professional",
      phrases: [
        "The [topic] part seems to have more substance. Should we focus there?",
        "You gave more detail on [topic]. Is that where the real issue is?",
        "I'm hearing more energy around [topic] than [topic B]. Which should we prioritise?",
        "Would it be useful to pause on [topic], or keep the agenda moving?",
        "The [topic] thread seems to have more signal than the timeline. Should we spend five minutes there?",
        "Implementation risk seems to be the more important thread. Should we cover that before budget?",
      ],
    },
    {
      id: "choice_framing",
      label: "Choice framing",
      tag: "Explicit two-option checks",
      tone: "Direct",
      phrases: [
        "We can stay with [topic], or I can answer the original question directly. Which is more useful?",
        "Do you want to go into the people side or the process side? I noticed more energy around the people side.",
        "Which thread is most useful to stay with right now?",
        "Should we spend two minutes on [topic], or keep moving?",
        "Is [topic] the part that needs attention, or is it just context?",
        "We can park [topic] and follow [topic B] for five minutes. Your call.",
      ],
    },
    {
      id: "digital",
      label: "Digital / text",
      tag: "Text-based calibration",
      tone: "Quick",
      phrases: [
        "Your last reply had a lot more detail around [topic]. Want to unpack that?",
        "Seems like [topic] may be the more useful thread. I can follow that if you want.",
        "This part seems to have more detail for you. Want me to follow it?",
        "You came back to [topic] twice. Worth a proper thread?",
        "Happy to stay on [topic] or answer the original question. Whichever helps.",
      ],
    },
    {
      id: "high_pressure",
      label: "High-pressure & boundary-preserving",
      tag: "Guarded or consent-sensitive contexts",
      tone: "High-stakes",
      phrases: [
        "I don't want to overread this. Is [topic] the key issue, or should I stay with the original point?",
        "Only if useful: should we spend two minutes on [topic]?",
        "I may be misreading the signal. What would be most useful to focus on?",
        "No need to go into it if it's private. I noticed [topic] might matter, so I wanted to check.",
        "We can leave that alone. I only named it because it seemed relevant.",
        "If that's not a topic for now, we can move on.",
        "Only if useful. We can skip this entirely.",
      ],
    },
    {
      id: "softening_release",
      label: "Softening & release",
      tag: "Clean releases after a misread",
      tone: "Repair",
      phrases: [
        "Got it, let's leave that.",
        "That was my read, not yours. What should we focus on?",
        "I named it too strongly. Let me back up.",
        "We can leave that aside. What would be useful instead?",
        "No pressure either way. Happy to move on.",
        "Fair enough. Which thread actually helps here?",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "A topic clearly lifted in energy, detail, or specificity",
      action: "Name the signal softly and offer a choice",
      phrase:
        "I noticed more detail around [topic]. Worth staying with, or should we move on?",
    },
    {
      condition:
        "The topic is private, unsafe, or outside the conversation's purpose",
      action: "Do not pursue it. Acknowledge lightly or move on",
      phrase: "That might be one for another time. No need to get into it now.",
    },
    {
      condition: "You cannot name the signal without sounding intrusive",
      action: "Offer a broader, neutral choice instead",
      phrase: "Which thread is most useful to stay with?",
    },
    {
      condition: "They expand after the check",
      action:
        "Follow the thread and develop it with live-thread follow-ups or threading",
      phrase: "Good. What changed in your view?",
    },
    {
      condition: "They correct you",
      action: "Thank them and follow the correction, not your read",
      phrase: "Thanks, so the real thread is [topic B]. Let's go there.",
    },
    {
      condition: "They contract, or the topic matters but the timing is wrong",
      action: "Release it, or bookmark it with permission",
      phrase: "Let's park that, shall we come back to it later?",
    },
  ],
  ladder: [
    {
      weak: "You obviously want to talk about your job.",
      better:
        "You had a lot to say when your job came up. Is that worth talking about?",
      best: "When you mentioned the job change, you gave more detail than anywhere else. I may be misreading it, but is that a useful thread to stay with, or would you rather leave it?",
    },
    {
      weak: "So your real issue is the manager.",
      better: "The manager piece sounds important. Should we focus there?",
      best: "Your answer got more specific when the manager came up. Is that the part that needs attention, or is it just context?",
    },
  ],
  scenarios: [
    {
      situation: "Social catch-up",
      move: "Compare their politeness about work with their specificity about a hobby, then hand over the choice.",
      phrase:
        "You had more detail on the climbing trip than on work. Want to stay with that?",
    },
    {
      situation: "Team meeting",
      move: "Name the thread with the most group signal and time-box it.",
      phrase:
        "The customer-feedback thread seems to have more signal than the timeline. Should we spend five minutes there?",
    },
    {
      situation: "Client conversation",
      move: "Follow the thread they expand on, but never use the signal to pressure a buying decision.",
      phrase:
        "Implementation risk seems to be the more important thread. Should we cover that before budget?",
    },
    {
      situation: "Mentoring or coaching",
      move: "Test the animated thread gently. Back off if it starts to feel too personal.",
      phrase:
        "You sounded more alive on the mentoring piece. Is that where you want to look?",
    },
    {
      situation: "Digital chat",
      move: "When a short thread suddenly gets a long, detailed reply, offer to follow it, and do not chase silence.",
      phrase:
        "This part seems to have more detail for you. Want me to follow this thread?",
    },
    {
      situation: "High-power-difference setting",
      move: "Add extra consent so the check can be declined at no cost.",
      phrase:
        "Only if useful. We can skip this. Is [topic] worth a couple of minutes?",
    },
  ],
  calibration: {
    working: [
      "A longer answer right after the preference check",
      "More examples, names, timelines, or concrete detail",
      "Visible relief or an easier tone",
      "They correct your wording but stay with the topic",
      "They ask you a related question back",
      "They return to the topic later without prompting",
    ],
    adjust: [
      "Polite but brief replies",
      "Mixed signals: more detail but less warmth",
      "Humour that deflects rather than opens",
      "A glance away, a slower reply, or a digital delay",
      '"Sort of", "maybe", or "it\'s complicated"',
      '"I don\'t want to get into that": release the thread at once',
      "Repeated short answers, or a topic shift after your check",
      "Silence that feels like shutdown rather than thought",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Signal spotting",
      task: "After one conversation, list three topics that came up. For each, write only the observable signals (detail, pace, tone, callback, question, example) and no guesses about motive.",
    },
    {
      day: "Day 2",
      title: "Read the baseline",
      task: "Pick one person you talk to often. Note their normal pace and detail level, so you can tell a genuine lift from their usual style.",
    },
    {
      day: "Day 3",
      title: "Soft-check reps",
      task: 'Write five versions of "I noticed more [signal] around [topic]. Is that the useful thread?", each one softer and less certain than the last.',
    },
    {
      day: "Day 4",
      title: "Release practice",
      task: 'Rehearse three clean releases for "No, not really": "Got it. Let\'s leave that", "Thanks, I misread it", and "What would be more useful?"',
    },
    {
      day: "Day 5",
      title: "Digital calibration",
      task: "Review three text or email threads. Mark where reply length, specificity, or speed changed, and draft one preference check for each: sending it only if it would be welcome.",
    },
    {
      day: "Day 6",
      title: "One live rep",
      task: "In a low-stakes conversation, use exactly one preference check and then stop. Note whether the person expanded, corrected, or contracted.",
    },
    {
      day: "Day 7",
      title: "Compare and choose",
      task: 'In a conversation with two live threads, name both and hand over the choice ("I\'m seeing [A] and [B]. Which is more useful?") then follow their answer, not your preference.',
    },
  ],
  checklist: [
    "What exact signal did I notice, and was it observable, not assumed?",
    "Did I compare it against this person's normal baseline?",
    "Did I name it tentatively and offer a genuine choice?",
    "Did I follow their answer instead of my preferred path?",
    "Did I release the topic cleanly when they did not want it?",
    "Did I use it sparingly enough that the conversation still felt natural?",
  ],
  example: {
    without: [
      'A: "Work has been busy. I\'m also trying to get back into running."',
      'B: "You clearly care about running more. Tell me about that."',
      'A: "Not really, it was just an aside."',
      "Why it's weak:",
      "overreads a small signal as proof",
      "removes the other person's choice",
      "leaves them correcting you instead of opening up",
    ],
    with: [
      'A: "Work has been busy. I\'m also trying to get back into running."',
      'B: "You sounded a little brighter on the running part. Want to talk about that, or is work the main thing?"',
      'A: "Running is more fun to talk about, honestly."',
      'B: "Then let\'s start there. What got you back into it?"',
      "Why this works: names the signal tentatively, offers a genuine choice, and follows the answer.",
      "Advanced:",
      'A: "The launch is fine. The weird part is that the customer interviews changed how I see the whole roadmap."',
      'B: "The roadmap got a factual answer, but the customer-interview part had more energy. Is that the thread where the real learning is?"',
      "A: \"Yes. That's what I can't stop thinking about.\"",
      'B: "Good. We can park the launch logistics and follow that for five minutes. What changed in your view?"',
      "A: \"We found the problem isn't onboarding. It's confidence after setup.\"",
      "Why the advanced version works: B compared two signals, named the likely preferred thread, gave a time-bounded path, and moved toward useful depth.",
    ],
    note: "The better version tests a single signal. The advanced version compares two competing threads and time-boxes the one the person chooses.",
  },
  influencePayoff: {
    feeling:
      '"They noticed what actually had life for me, and they let me choose."',
    principle:
      "People experience a conversation as better when the other person notices what has energy for them and does not force a dead branch. The influence is indirect: you become easier to talk with because you test interest rather than assuming it.",
    gains: [
      "Ease: fewer strained questions and fewer abrupt topic jumps",
      "Trust: the other person sees their signals being read with care",
      "Depth: interesting threads are less likely to be missed",
      "Efficiency: meetings and interviews reach useful material faster",
      "Autonomy: they are invited to choose rather than steered",
      "Relevance: the conversation lands on what matters to them, not just to you",
    ],
    whyMostFail: [
      "They treat a signal as proof and declare the preference instead of testing it.",
      "They chase their own interest, or the most intense topic, rather than the other person's real preference.",
      "They deliver it mechanically, so it sounds like analysing the person rather than listening with them.",
      "They ignore a decline and keep returning to a topic that has already cooled.",
    ],
  },
  fieldTip: {
    headline: "Give the steering wheel back.",
    body: "Do not claim ownership of someone's preference. One version takes it. The other hands it back. The field rhythm is simple: notice the spark, name it softly, offer a choice, follow the answer.",
    example: 'Smallest usable move: "More energy on [topic]?"',
    dont: "You want to talk about X.",
    do: "X seemed to have more energy. Stay there, or move on?",
  },
  method: [
    {
      step: "1",
      title: "Listen for preference signals",
      body: "Notice where the person gives more detail, emotion, speed, questions, humour, examples, or callbacks. These are the observable marks that a topic has more life for them than the ones around it.",
    },
    {
      step: "2",
      title: "Compare against their baseline",
      body: "Read the lift against how this person normally talks. A quiet person may show preference through one precise sentence. An expressive person may show it through sustained specificity. The signal is the change from their usual, not loudness in the abstract.",
    },
    {
      step: "3",
      title: "Name the signal tentatively",
      body: 'Mark the shift without overclaiming it. Avoid certainty words such as "obviously" or "clearly". Tentative language is what keeps this a check rather than a verdict.',
      examples: [
        { label: "Overclaimed", text: "You obviously care about this most." },
        {
          label: "Tentative",
          text: "I may be misreading it, but [topic] seemed to have more life.",
        },
      ],
    },
    {
      step: "4",
      title: "Offer a genuine choice",
      body: "Let them stay, move on, or correct you. The distinctive move is handing over a visible steering wheel, not asking one more question.",
      examples: [
        {
          label: "Clean version",
          text: "I noticed you had more to say when we got to [topic]. Is that the useful thread to stay with, or should we keep moving?",
        },
        {
          label: "Shorter version",
          text: "Is [topic] the more interesting thread here?",
        },
      ],
    },
    {
      step: "5",
      title: "Follow the answer, not your interpretation",
      body: "If they expand, stay and develop the thread. If they contract, release it without protest. The point is to serve their choice, not to be proven right about the read.",
    },
    {
      step: "6",
      title: "Bookmark only with permission",
      body: "If the topic matters but the timing is wrong, ask whether it should be saved for later rather than pressing on now. A consented bookmark keeps the thread alive without cornering anyone.",
    },
  ],
  liveThreadClues: [
    "more detail than anywhere else",
    "a faster, warmer pace",
    "specific names, dates, or examples",
    "spontaneous callbacks to the topic",
    "they ask you a question back",
    "humour that opens rather than deflects",
    "visible relief or an easier tone",
  ],
  commonMistakes: [
    {
      mistake: "Treating a signal as proof",
      soundsLike: "You obviously want to talk about X.",
      better:
        "There seemed to be more energy around X. Worth staying with, or not?",
    },
    {
      mistake: "Confusing your interest with theirs",
      soundsLike: "Ooh, tell me everything about the topic you happen to love.",
      better:
        "That caught my interest, but is it the thread you'd rather follow?",
    },
    {
      mistake: "Chasing intensity, not preference",
      soundsLike: "That sounded really emotional. Let's dig into it.",
      better:
        "That was intense. Is it where you want to spend time, or just where the feeling was?",
    },
    {
      mistake: "Asking too many diagnostic questions",
      soundsLike: "Why that? And why then? And how did that feel?",
      better: "One check is enough: is [topic] the useful thread here?",
    },
    {
      mistake: "Naming private material too bluntly",
      soundsLike: "You went quiet on the divorce, want to get into that?",
      better:
        "No need to go into anything personal. I just noticed it might matter.",
    },
    {
      mistake: "Ignoring a decline",
      soundsLike: "Are you sure? It really seemed important.",
      better: "Got it, let's leave that and move on.",
    },
    {
      mistake: "Moving too fast from detection to depth",
      soundsLike: "So what does this reveal about you?",
      better: "Happy to stay with it lightly for now. No need to go deep.",
    },
    {
      mistake: "Overusing the technique",
      soundsLike: "Naming an energy shift after almost every sentence.",
      better:
        "Save the preference check for the moments where a real fork appears.",
    },
  ],
  recoveryPhrases: [
    "I may have overread that. Let's leave it.",
    "Thanks for correcting me. I'll stay with the original point.",
    "That was my interpretation, not yours. What should we focus on?",
    "I don't mean to pry. We can skip it.",
    "No need to answer that if it isn't useful.",
    "I named it too strongly. Let me back up.",
    "Got it, that was just context. What's the actual useful thread?",
    "Let's reset. What do you want to spend time on?",
  ],
  bestRecoveryLine:
    "I may have overread that. Let's leave it. What would be more useful?",
  chains: [
    {
      label: "Soften, detect, develop",
      sequence:
        "TC003 Comment-before-question → TC056 Topic preference detection → TC001 Live-thread follow-ups",
      example: [
        '"That sounds like it took some thought."',
        '"You had a lot more detail on the customer side. Is that the thread to stay with?"',
        '"Good. What changed your mind first?"',
      ],
    },
    {
      label: "Track, test, switch",
      sequence:
        "TC041 Topic energy tracking → TC056 Topic preference detection → TC059 Energy-based topic switching",
      example: [
        "Notice the energy shift across the whole conversation.",
        '"There\'s more life around the people side than the process side. Which is more useful?"',
        "Switch fully only once they confirm or expand.",
      ],
    },
    {
      label: "Offer options, then read them",
      sequence: "TC034 Two-option questions → TC056 Topic preference detection",
      example: [
        '"Do you want to talk about the people side or the process side?"',
        '"I noticed more energy around the people side, want to start there?"',
      ],
    },
    {
      label: "Map, choose, bookmark",
      sequence:
        "TC038 Conversation threading → TC056 Topic preference detection → TC065 Conversation bookmarking",
      example: [
        "Lay out the two or three live threads.",
        '"The roadmap thread seems the most useful right now, agreed?"',
        '"Let\'s bookmark the hiring thread for next time."',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC041",
      reason:
        "Topic energy tracking. TC041 monitors how energy moves across a whole conversation. TC056 turns that read into a choice about which thread to follow now. Tracking is not the same as choosing.",
    },
    {
      id: "TC059",
      reason:
        "Energy-based topic switching. Detect the preferred topic first with TC056. Switch to it with TC059 only once calibration confirms a better branch. Don't switch before testing preference.",
    },
    {
      id: "TC038",
      reason:
        "Conversation threading. TC038 maps and weaves the live threads. TC056 infers which one is preferred. Map with TC038, then pick with TC056.",
    },
    {
      id: "TC001",
      reason:
        "Live-thread follow-ups. Use TC056 to select the thread, then TC001 to keep it alive. Don't try to detect preference once the thread is already chosen.",
    },
    {
      id: "TC003",
      reason:
        "Comment-before-question. TC003 softens the entry to a question. TC056 decides which topic to pursue. A warm comment is not itself a preference test.",
    },
    {
      id: "TC054",
      reason:
        'Similarity signalling. Detect their preference first with TC056. Signal a genuine commonality with TC054 only if it is real and useful. "They like this topic" is not "we are similar".',
    },
  ],
};
