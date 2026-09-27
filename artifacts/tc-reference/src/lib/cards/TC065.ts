import type { CardData } from "../card-types";

export const TC065: CardData = {
  pdfUrl: "cards/TC065/TC065_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC065/TC065_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC065/TC065_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC065/TC065_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC065/TC065_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC065/TC065_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC065/TC065_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC065/TC065_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC065",
  whyItWorks:
    "Conversation bookmarking is the habit of explicitly marking an important point so you can return to it later without forcing the conversation to stay on it right now. When a useful thread appears, you name it, say why it matters, and tell the other person when or how you will come back to it. It works because it keeps a promising topic visible while stopping the conversation from becoming scattered: the speaker feels heard because their point is named, and the exchange stays coherent because you are not chasing every side-thread the moment it appears.",
  whatItIsNot: [
    "It is not ignoring the point. A real bookmark contains a credible return path.",
    "It is not postponement as avoidance. If the point is urgent, safety-related, or needed for a decision, stay with it instead of saving it.",
    "It is not a control tactic for steering people away from inconvenient concerns.",
    "It is not the same as summarising. A summary condenses what has been said. A bookmark protects a thread for later use.",
  ],
  overview: {
    coreFormula: [
      "Marker + Value + Return path + Continue.",
      'Marker: "I want to bookmark that."',
      'Value: "...because it may change the decision / because I don\'t want to lose it."',
      'Return path: "...after this point / before we close / in the next message."',
      'Continue: "For now, keep going with what happened next."',
      'Full example: "I want to bookmark the budget concern because it may change the decision. After the customer example, let\'s come back to it. For now, keep going."',
    ],
    minimumViableMove:
      'Name the point and say when you will come back: "Bookmarking the timeline issue. I want to return to it after this example."',
    impact: "Low",
    difficulty: "Easy-Medium",
    misuse:
      "A bookmark becomes manipulative when it is used to bury a concern while pretending it has been honoured: parking a point with no real intention of returning.",
    bestFor: [
      "Lively conversations with several promising threads at once",
      "Meetings where useful side issues arise mid-agenda",
      "Emotionally nuanced talks where you must follow one thread without losing another",
      "Interviews, coaching, negotiation and conflict repair",
      "Chat or email threads where a point could get buried in the scroll",
      "Collaborative planning that needs light agenda discipline",
    ],
  },
  notFor: [
    "The point is urgent, vulnerable, or safety-related",
    "The point is clearly the main issue, not a side-thread",
    "The other person is asking for your direct attention now",
    "You have a history of not coming back to saved points",
    "The bookmark would land as a polite brush-off",
    "An emotion has just been named and needs acknowledgement first",
    "Physical safety or an immediate emergency takes priority",
  ],
  phraseBank: [
    {
      id: "quick-markers",
      label: "Quick markers",
      tag: "Short one-line saves",
      tone: "Quick",
      phrases: [
        "Can I put a pin in that?",
        "Let me bookmark that.",
        "Bookmarking that so we don't lose it.",
        "Hold that thought. I want to come back to it.",
        "Noting that. Back to it shortly.",
        "One to save for later, not to drop.",
      ],
    },
    {
      id: "warm-social",
      label: "Warm / social",
      tag: "Gentle, personal saves",
      tone: "Warm",
      phrases: [
        "Can I put a little pin in that? I want to come back when we have space.",
        "I want to bookmark that story about your sister. It sounds like there's a lot there. Finish this part first.",
        "That matters to me. Let me hold it so it doesn't get lost, and come back once you've finished.",
        "I don't want to rush past that. Can we finish this bit, then I want to hear the rest?",
        "Keep going, I'm parking that gently, and I promise to circle back.",
        "There's more in that than we have time for now. I really do want to return to it.",
      ],
    },
    {
      id: "professional-meetings",
      label: "Professional / meetings",
      tag: "Work and facilitation",
      tone: "Professional",
      phrases: [
        "Let's bookmark the resourcing issue and return to it before we close the agenda.",
        "I'm capturing that as a bookmark: customer training. We'll return after the current decision.",
        "Bookmarking the testing risk. It may affect launch confidence. Let's finish scope, then return before we decide.",
        "Good point. I'm noting it under a separate heading so it gets a proper slot, not a rushed one.",
        "Two threads here. Timeline and staffing. Let's finish timeline, then return to staffing as the decision check.",
        "I've captured that under customer training so it's visible to everyone, not just held in my head.",
      ],
    },
    {
      id: "naming-the-return",
      label: "Naming the return",
      tag: "Clear, four-part saves",
      tone: "Direct",
      phrases: [
        "I want to bookmark the staffing concern because it may affect the whole plan. After the timeline, let's return to it before we decide.",
        "I want to bookmark that because it matters. Let's come back after this part.",
        "Bookmarking the budget concern because it may change the decision. For now, keep going with what happened next.",
        "I'm parking this deliberately: we finish scope first, then come back to it before any decision.",
        "Let's name it now and answer it properly later, rather than half-answer it now.",
        "I'm hearing two threads. Can we finish this one, then take that one as the next item?",
      ],
    },
    {
      id: "digital-threads",
      label: "Digital / text",
      tag: "Findable written saves",
      tone: "Quick",
      phrases: [
        "Bookmarking this thread: the handoff risk is separate from the design question. I'll respond to it below.",
        "Bookmark: vendor approval is a separate blocker. I'll answer the design question first, then address it under a new heading.",
        "Bookmarking your overload point here so it doesn't get buried. Timeline first, then overload in a separate paragraph.",
        "Parking this for the next pass: the onboarding risk is separate from the launch-date decision.",
        "Noted and flagged: a separate reply is coming on this one so it doesn't vanish in the scroll.",
        "Pinning this above so we can find it later: the pricing question needs its own thread.",
      ],
    },
    {
      id: "high-stakes",
      label: "High-pressure / conflict",
      tag: "Protecting a loaded point",
      tone: "High-stakes",
      phrases: [
        "I don't want to lose the safety concern. I'm bookmarking it now, and I want us to address it before any decision.",
        "I want to bookmark the older pattern. It matters. Can we finish what happened today first, then come back to it?",
        "I'm not moving away from it. I want it to get a proper answer rather than a rushed one. Let's come back to it before we close.",
        "This is important enough that I don't want to squeeze it in now. Let's give it a real slot before we decide.",
        "I hear the resentment. I'm saving it deliberately so we handle it fully, not in passing.",
        "That's too important to answer half-way. Can we hold it and give it the time it needs?",
      ],
    },
    {
      id: "repair-return",
      label: "Repair / return",
      tag: "Coming back and mending",
      tone: "Repair",
      phrases: [
        "I realise I bookmarked that and didn't come back. Let me return to it now.",
        "I bookmarked your point earlier and missed the return. Let me pick it up now.",
        "That may have sounded like I was pushing it aside. I do think it matters.",
        "I tried to save that for later, but I can see it's actually the central issue. Let's address it now.",
        "We have three saved threads. Let's choose which one matters most before we add any more.",
        "Earlier I bookmarked the staffing risk. Can we return to it now?",
      ],
    },
  ],
  decisionTree: [
    {
      condition:
        "A valuable side point appears while another thread is still live",
      action:
        "If it is not urgent and following it now would scatter the conversation, prepare to save it.",
      phrase: "That's worth its own moment. Let me hold it.",
    },
    {
      condition: "The point is urgent, safety-related, or emotionally central",
      action: "Do not bookmark. Address it now.",
      phrase: "This can't wait. Let's stay with it.",
    },
    {
      condition:
        "Following it now would not cost the conversation its coherence",
      action: "Skip the bookmark and use a live-thread follow-up instead.",
      phrase: "Say more about that. What happened?",
    },
    {
      condition: "You cannot offer a real return path",
      action:
        "Do not fake a bookmark. Either handle it now or say honestly you cannot cover it.",
      phrase: "I can't do that justice today. Can we take it next time?",
    },
    {
      condition: "You can name it and give a genuine return condition",
      action: "Bookmark with Marker + Value + Return path + Continue.",
      phrase:
        "I want to bookmark that because it matters. Back to it after this part.",
    },
    {
      condition: "The moment to return arrives, or you notice you missed it",
      action: "Reopen the bookmark explicitly, or repair if you let it slip.",
      phrase:
        "Earlier I bookmarked the staffing risk. Can we return to it now?",
    },
  ],
  ladder: [
    {
      weak: '"Anyway, we\'ll get back to that." Vague, dismissive, and easy to forget.',
      better:
        "\"Let's come back to that after this.\" Promises a return, but doesn't show why the point matters.",
      best: '"I want to bookmark the staffing concern because it may affect the whole plan. After the timeline, let\'s return to it before we decide."',
    },
    {
      weak: '"Will circle back." No anchor, disappears in the scroll.',
      better:
        '"Noting your overload point for later." Saved, but not findable or timed.',
      best: '"Bookmarking your overload point here so it doesn\'t get buried. Timeline first, then overload in its own paragraph."',
    },
    {
      weak: "Bookmark, then never mention it again.",
      better: "Return only if the other person raises it first.",
      best: 'Return within the window you promised, unprompted: "Earlier I bookmarked staffing. Let\'s take it now."',
    },
  ],
  scenarios: [
    {
      situation: "Social catch-up",
      move: "A friend mentions a serious family issue mid-way through a travel story. Save the heavier thread, let them finish the lighter one, then return.",
      phrase:
        "I want to bookmark the family part because it sounds important. Finish the travel story, then I want to ask about it.",
    },
    {
      situation: "Team meeting",
      move: "A developer raises a testing risk during a roadmap discussion. Name the risk, tie it to the decision, and set a return point after the current item.",
      phrase:
        "Bookmarking testing risk. It may affect launch confidence. Let's finish scope, then return before we decide.",
    },
    {
      situation: "Conflict repair",
      move: "Someone brings up an old resentment while you are discussing today's incident. Protect the older pattern without letting it swallow the current issue.",
      phrase:
        "I want to bookmark the older pattern. It matters. Can we finish what happened today first, then come back to it?",
    },
    {
      situation: "Coaching",
      move: "A client mentions a career value while explaining a tactical problem. Save the deeper theme and stay with the concrete example for now.",
      phrase:
        "I want to bookmark the autonomy piece. It may be the deeper theme. Keep going with the current example first.",
    },
    {
      situation: "Digital work thread",
      move: "A message mixes a design question with a separate blocker. Split the threads and answer them in order under clear headings.",
      phrase:
        "Bookmark: vendor approval is a separate blocker. I'll answer the design question first, then address it under a new heading.",
    },
    {
      situation: "Group facilitation",
      move: "Several useful side issues pile up while the group needs one decision. Capture each bookmark visibly so contributors feel saved, not shut down.",
      phrase:
        "I'm capturing that as a bookmark under customer training. We'll return after this decision.",
    },
  ],
  calibration: {
    working: [
      "They nod, relax, and keep speaking on the current thread.",
      "They add helpful detail instead of circling back to the saved point.",
      "Their tone eases: they trust the point is held, not lost.",
      "The group keeps moving without the side issue derailing it.",
      "When you reopen the bookmark later, they recognise it and pick it straight up.",
      "No one has to re-raise the saved point to keep it alive.",
    ],
    adjust: [
      "They repeat the bookmarked point or look doubtful. It may need attention now.",
      'They say "but that\'s the main issue": stop and address it.',
      "The point is urgent, safety-related, or emotionally loaded. Do not save it, handle it.",
      'In groups no one can see the bookmark. Make it visible: "I\'ve captured that under customer training."',
      "In digital threads it is vanishing in the scroll: pin it with a label, quote, or bullet.",
      "You are collecting more bookmarks than you can honour: choose which matters most before adding more.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the side-threads",
      task: "Read or recall one conversation and mark every moment a valuable side-thread appeared. Just notice them. Do not act yet.",
    },
    {
      day: "Day 2",
      title: "Sort them",
      task: "Take three side-threads and sort each one: follow now, bookmark, or let go. Notice which genuinely deserve saving and which do not.",
    },
    {
      day: "Day 3",
      title: "Learn the formula",
      task: "Say the four-part bookmark (Marker + Value + Return path + Continue) aloud five times, each with a different return path: after this example, before we decide, in the next message, at the end, tomorrow morning.",
    },
    {
      day: "Day 4",
      title: "Add the value line",
      task: 'Rewrite five vague "we\'ll get back to it" lines into bookmarks that name the thread and say why it matters.',
    },
    {
      day: "Day 5",
      title: "Use one live",
      task: "In a real conversation, place one genuine bookmark, then set a visible note or agenda marker so you cannot forget it.",
    },
    {
      day: "Day 6",
      title: "Return reliably",
      task: "Return to yesterday's bookmark within the window you promised, unprompted, and reopen it explicitly.",
    },
    {
      day: "Day 7",
      title: "Practise the repair",
      task: 'Practise the recovery line "I bookmarked that and didn\'t come back. Let me return now" without over-apologising, then use it for real if a bookmark slipped.',
    },
  ],
  checklist: [
    "Did I name the saved thread clearly?",
    "Did I show why it mattered?",
    "Did I give a believable return path?",
    "Did the other person seem reassured rather than dismissed?",
    "Did I actually return to the bookmark?",
    "Was there a moment I should have addressed the point straight away instead of saving it?",
  ],
  example: {
    without: [
      'Alex: "The timeline worries me, but the bigger issue might be that the team is already overloaded."',
      'Sam: "Sure, but back to the timeline."',
      "Why it's weak:",
      "the overload concern sounds dismissed",
      "Alex has no signal it will ever be revisited",
      "the fastest way to make someone repeat themselves is to look past their real point",
    ],
    with: [
      'Alex: "The timeline worries me, but the bigger issue might be that the team is already overloaded."',
      'Sam: "I want to bookmark overload because it may change what timeline is realistic. Can we finish the timeline facts first, then return to overload before we choose a date?"',
      'Alex: "Yes, as long as we actually come back to it."',
      'Sam: "We will. It\'s the decision check, not a footnote."',
      "Why this works:",
      "names the thread so it's not lost",
      "gives a reason it matters. It may change the decision",
      'sets a concrete return condition, not a vague "later"',
      "protects flow while keeping Alex's point alive",
    ],
    note: "Digital version: \"Bookmarking your overload point here so it doesn't get buried. I'll answer timeline first, then address overload in a separate paragraph.\"",
  },
  influencePayoff: {
    feeling:
      '"My point wasn\'t lost. They held it on purpose and came back to it."',
    principle:
      "People feel heard when their point is named and protected, and a conversation stays coherent when you refuse to chase every side-thread the moment it appears. Signal memory, protect flow, return reliably.",
    gains: [
      "Conversational trust",
      "Cleaner navigation with less sprawl",
      "Lower interruption cost: the speaker keeps going without fearing their detail vanished",
      "Visible agenda discipline that does not shut contributors down",
      "Lower defensiveness in hard conversations, because the issue is saved rather than dismissed",
      "A reputation for following through on what you say you will revisit",
    ],
    whyMostFail: [
      "They bookmark to bury a concern rather than protect it.",
      "They never return, so future bookmarks start to sound false.",
      "They save too many threads and the agenda turns to clutter.",
      "They deliver it mechanically, so it lands as a brush-off instead of care.",
    ],
  },
  fieldTip: {
    headline: "A bookmark is only as trustworthy as your return.",
    body: 'Use fewer bookmarks and honour them quickly. The field cue: the moment you say "I want to bookmark that," add two more words, "because..." and "when...". The "because" shows value. The "when" proves it is not a brush-off.',
    example:
      '"I want to bookmark that because it matters. Let\'s come back after this part."',
    dont: '"Good point, we\'ll park it." No reason, no return, so it lands as a brush-off in disguise.',
    do: '"Bookmarking the timeline issue. I want to return to it right after this example."',
  },
  method: [
    {
      step: "1",
      title: "Perception",
      body: "Notice the moment a valuable thread appears but does not need handling right now. The cue is a useful detail dropped mid-story, mid-agenda, or under time pressure: worth exploring, but wrong timing.",
      examples: [
        {
          label: "Cue",
          text: '"...but the bigger issue might be that the team is already overloaded."',
        },
      ],
    },
    {
      step: "2",
      title: "Move",
      body: "Pause briefly and mark the point without making it the new centre of the conversation. You are placing a flag, not switching topics.",
    },
    {
      step: "3",
      title: "Phrase",
      body: "Say a short bookmark (Marker, then Value, then Return path) and hand the floor back so the current thread continues.",
      examples: [
        { label: "Marker", text: '"I want to bookmark that..."' },
        { label: "Value", text: '"...because it may change the decision..."' },
        {
          label: "Return path",
          text: '"...let\'s come back to it before we close."',
        },
      ],
    },
    {
      step: "4",
      title: "Calibration",
      body: "Watch whether they relax and continue, or look worried the point was dismissed. Relief means the bookmark landed. Doubt means the point may need attention now.",
    },
    {
      step: "5",
      title: "Recovery",
      body: "If they look concerned, strengthen the return path rather than defend yourself.",
      examples: [
        {
          label: "Strengthen",
          text: '"I\'m not dropping it. I want to come back to it after this part."',
        },
      ],
    },
    {
      step: "6",
      title: "Chain",
      body: "Later, reopen the bookmark explicitly with a thread return or callback bridge, so saving the point actually leads to answering it.",
    },
  ],
  liveThreadClues: [
    '"...but the bigger issue might be..."',
    '"honestly, the real problem is..."',
    '"that reminds me of something..."',
    '"we should talk about that at some point"',
    '"this is a bit off-topic, but..."',
    '"there\'s also the question of..."',
  ],
  commonMistakes: [
    {
      mistake: "Bookmarking as polite deflection",
      soundsLike: '"Good point, we\'ll park it." (no return path)',
      better:
        '"I want to bookmark that because it may change the decision. Let\'s return to it before we close."',
    },
    {
      mistake: "Bookmarking too many things",
      soundsLike: "five saved threads and a cluttered agenda",
      better:
        '"We have three saved threads. Let\'s choose which matters most before we add more."',
    },
    {
      mistake: "Forgetting to return",
      soundsLike: "the bookmark is never mentioned again",
      better:
        'Return within the promised window, unprompted: "Earlier I bookmarked staffing. Let\'s take it now."',
    },
    {
      mistake: "Overformal language in intimate moments",
      soundsLike:
        '"I\'ll add that to the agenda" when someone is sharing feelings',
      better:
        '"Can I put a pin in that? I want to come back when we have space."',
    },
    {
      mistake: "Interrupting to bookmark too early",
      soundsLike:
        "inserting a marker while they're about to finish the thread anyway",
      better:
        "Let them finish, then save what's left: \"There's more there. I want to come back to it.\"",
    },
    {
      mistake: "Bookmarking an emotion that needs acknowledging",
      soundsLike:
        '"Let\'s park the betrayal point" right after "I felt betrayed"',
      better:
        'Validate first, then save the factual subtopic: "That sounds painful. Can we come back to the timeline of it after this?"',
    },
  ],
  recoveryPhrases: [
    "I realise that may have sounded like I was pushing it aside. I do think it matters.",
    "I bookmarked your point earlier and missed the return. Let me pick it up now.",
    "I tried to save that for later, but I can see it's actually the central issue. Let's address it now.",
    "We have three saved threads now. Let's choose which one matters most before we add more.",
    "I'm not trying to move away from it. I want it to get a proper answer rather than a rushed one.",
    "I bookmarked that and didn't come back. Let me return to it now.",
    "That came out more procedural than I meant. Your point isn't a footnote to me.",
  ],
  bestRecoveryLine:
    "I bookmarked your point earlier and missed the return. Let me pick it up now.",
  chains: [
    {
      label: "Bookmark → Thread return",
      sequence: "Save the thread, then reopen it explicitly later.",
      example: [
        '"I want to bookmark the staffing risk because it may affect the plan."',
        "...later...",
        '"Earlier I bookmarked the staffing risk. Can we return to it now?"',
      ],
    },
    {
      label: "Bookmark → Summary check",
      sequence:
        "After several points, list the saved bookmarks and ask which comes next.",
      example: [
        '"We\'ve bookmarked staffing, budget, and testing."',
        '"Which of those should we take first before we decide?"',
      ],
    },
    {
      label: "Bookmark → Topic energy tracking",
      sequence:
        "Save a useful thread, then follow the topic with more energy right now.",
      example: [
        '"Let me bookmark the pricing question."',
        '"You lit up on the onboarding idea. Let\'s stay there for a moment."',
      ],
    },
    {
      label: "Bookmark → Validation without agreement",
      sequence:
        "When the saved point is a concern, validate it before you evaluate it.",
      example: [
        '"Earlier you flagged the overload risk. That\'s a fair worry."',
        '"Let\'s look at whether the timeline actually causes it."',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC001",
      reason:
        "Bookmarking saves a valuable side point for later. A live-thread follow-up stays with the current thread now. If returning later is the goal, bookmark. If the point deserves immediate attention, follow up.",
    },
    {
      id: "TC038",
      reason:
        "Bookmarking puts a visible marker on one saved point. Conversation threading manages several active threads at once. Saving one thread, bookmark. Weaving several, thread.",
    },
    {
      id: "TC041",
      reason:
        "Bookmarking preserves an unhandled point even as energy moves elsewhere. Topic energy tracking chooses which topic to follow based on the person's aliveness. Noticing energy, track. Preserving a point, bookmark.",
    },
    {
      id: "TC062",
      reason:
        "Bookmarking is the act of saving a thread before you leave it. Thread return is the act of coming back to it. Bookmark before leaving. Return when reopening.",
    },
    {
      id: "TC064",
      reason:
        "Bookmarking saves a point you are not ready to interpret yet. Checking verifies what the person actually meant. If meaning is unclear, check. If only the timing is wrong, bookmark.",
    },
  ],
};
