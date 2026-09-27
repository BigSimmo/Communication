import type { CardData } from "../card-types";

export const TC071: CardData = {
  pdfUrl: "cards/TC071/TC071_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC071/TC071_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC071/TC071_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC071/TC071_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC071/TC071_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC071/TC071_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC071/TC071_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC071/TC071_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC071",
  whyItWorks:
    "Conversation re-entry after interruption is a practical repair move: when a phone, a walk-in, a tangent, or a dropped call snaps the shared thread, you name the break lightly, hand back the last meaningful point, and offer a low-pressure bridge in. It works because interruptions create cognitive friction: people usually keep the feeling but lose the exact doorway back. A clean re-entry gives them the handle so they do not have to rebuild the moment from scratch. It is strongest when someone was mid-story, mid-concern, or about to say something vulnerable.",
  whatItIsNot: [
    "Not a way to demand closure after someone has disengaged.",
    "Not a memory test you set the other person.",
    "Not a trick for steering the agenda back to your preferred topic.",
    'Not the same as asking "Where were we?" and making them do all the work.',
    "Not an apology spiral about the interruption, or a performance of attentiveness that ignores their cues.",
  ],
  overview: {
    coreFormula: [
      "We got interrupted. You were saying [the specific thread]. Want to pick that back up?",
      'Minimum: "You were saying [X]. Want to continue?"',
      'High-care: "We got interrupted right as you got to [X]. I don\'t want to lose that if it still feels useful. Want to come back to it?"',
      'Group: "Before we moved on, [Name] was making a point about [X]. [Name], do you want to finish that?"',
      'Release: "Or we can leave it there if the moment has passed."',
    ],
    minimumViableMove:
      "You were saying [X] before we got interrupted: want to pick that back up?",
    impact: "Low",
    difficulty: "Easy-Medium",
    misuse:
      "Using re-entry to corner someone into finishing a topic they are trying to exit: making continuity matter more than their consent.",
    bestFor: [
      "One-to-one conversations interrupted by a person, device, or practical task.",
      "Meetings where a speaker was cut off or overshadowed.",
      "Emotionally meaningful stories that paused unexpectedly.",
      "Calls or video meetings that dropped or froze.",
      "Group discussions where a quieter person lost the floor.",
      "Customer or support conversations where continuity matters.",
      "Social moments where someone was mid-thought and does not want to fight for airtime.",
    ],
  },
  notFor: [
    "Physical safety or an immediate emergency takes priority.",
    "The other person clearly changed the subject to protect themselves.",
    "The interruption revealed a higher priority or a genuine emergency.",
    "The topic was unsafe, intrusive, or too personal to reopen.",
    "They have already declined to continue.",
    "The break was long enough that the context has genuinely changed.",
    "Re-entry would embarrass someone in a group.",
    "You only want to return because the topic benefits you.",
  ],
  phraseBank: [
    {
      id: "quick-bridges",
      label: "Quick bridges",
      tag: "Short one-line re-entries",
      tone: "Quick",
      phrases: [
        "You were mid-thought. Want to pick that back up?",
        "We got pulled away. Carry on from where you were?",
        "You were mid-thought. Go on.",
        "You had the floor before that, finish it?",
        "Back to you. You were partway through.",
        "Sorry, the thread broke there. You were saying?",
        "You were about to get to the good bit. Keep going?",
      ],
    },
    {
      id: "social-everyday",
      label: "Social / everyday",
      tag: "Warm re-entry with a friend",
      tone: "Warm",
      phrases: [
        "You were telling me about your weekend before we got interrupted. Want to keep going?",
        "I want to come back to what you were saying about your sister. What happened next?",
        "We got pulled off track. You were saying the trip felt different this time.",
        "I remember you were about to say why that mattered. Want to pick it back up?",
        "You were at the part where the train got delayed. What happened next?",
        "Sorry, we got cut off. You were telling me how it went with your mum.",
      ],
    },
    {
      id: "meetings-work",
      label: "Meetings / work",
      tag: "Returning to a work thread",
      tone: "Professional",
      phrases: [
        "Before we were interrupted, you were outlining the risk around timing. Please carry on.",
        "Coming back to your earlier point about the handover. What was the main concern?",
        "The thread before the interruption was budget ownership. Should we resume there?",
        "The open question before the tangent was whether the handover owner is clear.",
        "Let's restore the thread. You were making the case that the rollout risk is mostly timing.",
        "Thanks for waiting. You were explaining the invoice error started after the plan change. Is that right?",
      ],
    },
    {
      id: "calls-messages",
      label: "Calls, video & messages",
      tag: "Remote and digital re-entry",
      tone: "Professional",
      phrases: [
        "The call froze right as you were explaining the customer issue. Could you continue from there?",
        "We lost audio after 'the main blocker is...'. What was the blocker?",
        "Picking up from your last message: you said the tone felt off. What part felt off?",
        "Threading this back, before the side chat, you asked about the timeline.",
        "The line dropped right after you said the deadline depends on legal review. Can you pick up there?",
      ],
    },
    {
      id: "firm-under-pressure",
      label: "Firm under pressure",
      tag: "Restoring the thread when time is tight",
      tone: "Direct",
      phrases: [
        "We need to keep moving, but I don't want to lose that point. Give us the short version.",
        "Let's pause the tangent. You were making the decision risk clear. Finish that in one minute.",
        "I'm going to restore the thread: the interruption came during the escalation point. Continue from there.",
        "One quick thing before we move on. You hadn't finished the point about ownership.",
        "Hold the tangent a second. You were partway through the actual risk. Go on.",
      ],
    },
    {
      id: "protect-the-floor",
      label: "Protecting a quieter voice",
      tag: "Handing the floor back in a group",
      tone: "High-stakes",
      phrases: [
        "I want to make sure we don't lose Priya's point. Priya, you were on the dependency issue.",
        "Before we moved on, Maya was making a point about the rollout. Maya, do you want to finish that?",
        "Jordan had the floor before the tangent. Jordan, you were saying the risk was mostly timing?",
        "We got interrupted during something personal. No pressure to keep going, but I'm still here if you want to.",
        "That got cut off, and I don't want it lost. You were saying the week has felt heavy.",
        "Let's give Sam the floor back. You were explaining the data-quality risk.",
      ],
    },
    {
      id: "soften-release",
      label: "Softening & release",
      tag: "Low-pressure exits",
      tone: "Repair",
      phrases: [
        "No need to continue if the moment has passed.",
        "We can park it if it no longer feels relevant.",
        "Only if you still want to go there.",
        "If it feels better to leave it, that's fine too.",
        "No pressure, I just didn't want to lose it.",
        "We can leave it if that was enough.",
        "All good, we can leave it there.",
      ],
    },
  ],
  decisionTree: [
    {
      condition:
        "The thread broke, but is the topic still safe and appropriate to reopen?",
      action:
        "If it was personal or exposing, do not reopen it in the room: offer it later or let it go.",
      phrase: "That might be better one-on-one. Can we pick it up after?",
    },
    {
      condition: "Can you name the last meaningful thread?",
      action:
        "If yes, lead with a specific anchor. If not, offer a humble bridge and let them choose the re-entry point.",
      phrase:
        "We got interrupted and I have half-lost the thread. What would you like to come back to?",
    },
    {
      condition: "Does the person still have energy for the topic?",
      action:
        "Clear energy (invite re-entry. Unclear) add a release clause. Gone: let it go.",
      phrase:
        "You were saying the timeline felt tight, want to finish that, or leave it?",
    },
    {
      condition: "Are you in a group?",
      action:
        "Protect the person who lost the floor by naming them and their point. Solo, use a direct personal bridge.",
      phrase: "Priya, you were on the dependency issue. Do you want to finish?",
    },
    {
      condition: "Did the re-entry land?",
      action:
        "If they re-engage, listen and do not overtalk. If not, recover and release without pressure.",
      phrase: "No need to continue. I just didn't want to lose it.",
    },
    {
      condition: "Is the topic now serving you more than them?",
      action:
        "If continuing is really your agenda, stop: restoring a thread is not agenda control.",
      phrase: "All good, we can leave it there.",
    },
  ],
  ladder: [
    {
      weak: '"Anyway, what were you saying?"',
      better: '"You were talking about the dinner thing."',
      best: '"We got interrupted right as you said the dinner got awkward. Want to tell me what happened?"',
    },
    {
      weak: '"Let\'s get back on track."',
      better: '"Sam had a point before we shifted."',
      best: '"Before the fire drill, Sam was explaining the data-quality risk. Sam, do you want to finish that thought?"',
    },
    {
      weak: '"Sorry, continue."',
      better: '"The call dropped when you were talking about the deadline."',
      best: '"The call dropped right after you said the deadline depends on legal review. Can you pick up there?"',
    },
    {
      weak: '"So, back to your problem."',
      better: '"You were saying this has been difficult."',
      best: '"We got interrupted during something personal. No pressure to continue, but I remember you were saying the week has felt heavy."',
    },
  ],
  scenarios: [
    {
      situation: "Friend interrupted mid-story",
      move: "Restore the last vivid point and let them run with it.",
      phrase:
        "You were at the part where the train got delayed. What happened next?",
    },
    {
      situation: "A speaker was cut off in a meeting",
      move: "Return the floor publicly, naming them and their point, without blaming the interrupter.",
      phrase:
        "I don't want to lose Jordan's risk point. Jordan, do you want to finish?",
    },
    {
      situation: "The call or video dropped",
      move: "Quote the last phrase you heard so they do not restart from scratch.",
      phrase:
        "I lost you after 'the main constraint is procurement.' Can you pick up there?",
    },
    {
      situation: "A sensitive disclosure got interrupted",
      move: "Protect safety before content: offer, then release fast if they hesitate.",
      phrase:
        "We got interrupted during something personal. No pressure, but I'm still here if you want to.",
    },
    {
      situation: "Customer interrupted by a hold or transfer",
      move: "Signal continuity and take the reconstruction off their plate.",
      phrase:
        "Thanks for waiting. You were explaining the invoice error started after the plan change. Is that right?",
    },
  ],
  calibration: {
    working: [
      "They say 'yes', 'right', or 'exactly' and re-engage.",
      "They add detail immediately.",
      "Their posture turns back toward you or the group.",
      "They show relief that the thread was remembered.",
      "The group quiets and gives them space.",
      "They correct your anchor and keep going. That is engagement, not rejection.",
    ],
    adjust: [
      "They pause but do not reject the bridge: soften and add a release clause.",
      "They look uncertain or embarrassed: lower the pressure.",
      "The topic is personal or the interruption changed the room. Go gentler.",
      "They say 'it is fine', 'never mind', or 'not now': stop.",
      "Their body turns away or they give a minimal answer. Let it go.",
      "The topic is now unsafe or inappropriate to reopen. Drop it.",
      "Continuing would serve your agenda more than theirs: leave it there.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the break",
      task: "Through one day, notice every time a conversation you are in gets interrupted: phone, walk-in, tangent, dropped call. Just count them. Do not act yet. The skill starts with perceiving the break.",
    },
    {
      day: "Day 2",
      title: "Catch the anchor",
      task: "Listen to a 60-second story, then interrupt yourself with a neutral task for ten seconds. Re-enter by naming the last meaningful noun or concern. Score: did your phrase include it?",
    },
    {
      day: "Day 3",
      title: "Name it neutrally",
      task: "Practise the break line ten times using 'We got interrupted', never 'You got interrupted'. Notice how the neutral, blame-free framing lands softer.",
    },
    {
      day: "Day 4",
      title: "Add the invitation",
      task: 'Take five real threads and write each as "You were saying ___: want to pick that back up?" Say them aloud until they sound natural rather than scripted.',
    },
    {
      day: "Day 5",
      title: "Add a release clause",
      task: "Rewrite yesterday's five with a low-pressure exit: '...only if it still feels useful' or '...or we can leave it there.' Use one in a real conversation.",
    },
    {
      day: "Day 6",
      title: "Protect a floor",
      task: 'In a group or meeting, when someone loses the floor, re-enter by naming the speaker and their point, not by scolding the interrupter. "Maya, you were saying..."',
    },
    {
      day: "Day 7",
      title: "Recover a miss",
      task: 'Deliberately pick the wrong anchor once, then practise the recovery: "I may have picked up the wrong thread. Where should we restart?" Score each re-entry 0-2 (0 = no anchor or too much pressure. 2 = clear anchor plus low-pressure invitation).',
    },
  ],
  checklist: [
    "Did I name the interruption neutrally, 'we', not 'you'?",
    "Did I return to their thread, not just my agenda?",
    "Did I use a specific anchor rather than 'where were we?'",
    "Did I invite rather than demand continuation?",
    "Did I add a release clause when the topic was personal or uncertain?",
    "Did I stop the moment they declined?",
  ],
  example: {
    without: [
      'Lina: "The handover got messy because the original owner left before-"',
      "A colleague interrupts to ask about a calendar clash. The side issue gets resolved.",
      'You: "Okay, where were we?"',
      "Lina: \"I'm not sure. Anyway, it's fine.\"",
      "Why it fails: the burden lands on Lina to rebuild the thread, and the moment loses its urgency.",
    ],
    with: [
      'Lina: "The handover got messy because the original owner left before-"',
      "A colleague interrupts about a calendar clash. The side issue gets resolved.",
      "You: \"I want to make sure we don't lose Lina's point. Lina, you were saying the handover got messy because the original owner left before something was updated. Do you want to finish that?\"",
      'Lina: "Yes, before the checklist was updated. That\'s the actual risk."',
      "You: \"Got it. The risk isn't just staffing. It's checklist ownership after the handover.\"",
      "Why it works: the break is repaired, Lina's floor is protected, and the re-entry lands on a useful summary instead of a blank.",
    ],
    note: "The weak version asks Lina to do the remembering. The strong version does it for her and hands back a specific anchor.",
  },
  influencePayoff: {
    feeling:
      '"The interruption didn\'t erase what I was saying. They held onto it."',
    principle:
      "People trust speakers who protect the thread after a disruption. Re-entry proves you were listening before the break and that their contribution still matters.",
    gains: [
      "Attention proof: you show you remembered what was happening.",
      "Emotional safety: they do not have to reopen the topic from scratch.",
      "Momentum recovery: the conversation loses less energy across the break.",
      "Respectful control: you help a group resume without dominating it.",
      "Relationship signal: interruptions do not erase the person's importance.",
      "Preserved disclosures: small interruptions often kill important things half-said. A clean bridge saves them.",
    ],
    whyMostFail: [
      "They make continuity more important than consent, and push a topic the person is trying to leave.",
      "They ask 'where were we?' and hand the reconstruction back to the other person.",
      "They return to the part they cared about, not the part the other person was actually on.",
      "They deliver the bridge mechanically, or use it as a springboard to advise before the person has recovered the thought.",
    ],
  },
  fieldTip: {
    headline: "Do not ask people to rebuild a thread you can restore for them.",
    body: "Interruptions rarely erase the feeling. They erase the doorway back in. Hand the doorway back with one clean bridge: break, thread, choice.",
    example:
      '"We got interrupted. You were saying the handover got messy after Friday. Want to pick that back up?"',
    dont: '"Where were we?" It makes them do the remembering.',
    do: 'Name the break, name the exact thread, then offer the choice. If they decline: "All good, we can leave it there."',
  },
  method: [
    {
      step: "1",
      title: "Notice the break",
      body: "Register that the thread snapped (a phone, a walk-in, a tangent, a dropped call) and name it neutrally. 'We got interrupted there', not 'You got interrupted'. Blame framing turns a repair into a telling-off.",
      examples: [
        { label: "Neutral", text: "We got pulled away there." },
        { label: "Avoid", text: "You wandered off. Where were you?" },
      ],
    },
    {
      step: "2",
      title: "Anchor the last meaningful point",
      body: "Hand back a concrete noun or phrase from what they were actually saying, not the part you cared about. The specific anchor is what saves them from rebuilding the moment.",
      examples: [
        { label: "Weak", text: "Where were we?" },
        {
          label: "Best",
          text: "You were saying the handover got messy after Friday.",
        },
      ],
    },
    {
      step: "3",
      title: "Invite, do not demand",
      body: "Offer the door. Do not push them through it. Ask whether they want to return rather than assuming they must.",
      examples: [
        { label: "Solo", text: "Want to pick that back up?" },
        { label: "Group", text: "Maya, do you want to finish that thought?" },
      ],
    },
    {
      step: "4",
      title: "Release if the moment has passed",
      body: "Add a low-pressure exit, especially when the topic is personal or their energy has shifted. If they decline, restoring their dignity beats restoring the thread.",
      examples: [
        {
          label: "Release",
          text: "Or we can leave it there if the moment has passed.",
        },
        { label: "Stop", text: "All good, we can leave it there." },
      ],
    },
  ],
  liveThreadClues: [
    "a phone rings or buzzes mid-sentence",
    "someone walks in or cuts across",
    "the call drops, freezes, or loses audio",
    "a waiter, child, or colleague needs attention",
    "a tangent takes over and the speaker goes quiet",
    "'sorry, where was I?'",
    "a quieter person opens their mouth, then gives up the floor",
  ],
  commonMistakes: [
    {
      mistake: "Generic re-entry",
      soundsLike: '"Where were we?"',
      better: '"You were saying the handover got messy, want to pick that up?"',
    },
    {
      mistake: "Over-recap that becomes a monologue",
      soundsLike: '"So, to recap the last ten minutes..."',
      better: "Name only the last thread, in one line.",
    },
    {
      mistake: "Forcing continuation",
      soundsLike: '"No, finish what you were saying."',
      better: '"Want to come back to it, or leave it there?"',
    },
    {
      mistake: "Wrong anchor: your part, not theirs",
      soundsLike:
        '"You were talking about the budget." (when they were on the handover)',
      better: '"You were saying the handover felt messy. That part?"',
    },
    {
      mistake: "Blame framing",
      soundsLike: '"You got interrupted."',
      better: '"We got interrupted."',
    },
    {
      mistake: "No release clause",
      soundsLike: '"So, back to it."',
      better: '"...only if it still feels useful."',
    },
    {
      mistake: "Reopening a vulnerable thread in public",
      soundsLike: '"You were telling us about the health thing."',
      better: '"Can we pick that up after, just the two of us?"',
    },
  ],
  recoveryPhrases: [
    "I may have picked up the wrong thread. Where would you rather restart?",
    "That might not have been the part you meant. What should we come back to?",
    "No pressure to continue. I only wanted to make sure it wasn't lost.",
    "I realise I pulled that back too quickly. We can leave it.",
    "We don't need to do this here. We can come back to it later.",
    "That may be better one-on-one.",
    "I interrupted you there. You were saying. Please carry on if you want to.",
    "I cut across the thread. Sorry, you had the floor.",
  ],
  bestRecoveryLine:
    "No pressure to continue. I only wanted to make sure it wasn't lost.",
  chains: [
    {
      label: "Re-enter, then follow the thread",
      sequence: "TC071 → TC001 → TC040",
      example: [
        '"You were saying the handover felt chaotic. Want to pick that back up?"',
        '"What made it feel chaotic?"',
        '"So the real issue is trust in ownership."',
      ],
    },
    {
      label: "Re-enter, then check the energy",
      sequence: "TC071 → TC041 → TC059",
      example: [
        '"We were on the promotion conversation."',
        '"Still useful to continue, or did the customer issue become the priority?"',
        "If the energy has moved, switch cleanly to the topic that's alive now.",
      ],
    },
    {
      label: "Bookmark, then re-enter",
      sequence: "TC065 → TC071",
      example: [
        '"Let\'s park the budget-risk point and come back after this call."',
        '"We\'re back, the bookmark was budget risk. Want to finish it?"',
      ],
    },
    {
      label: "Re-enter, then release autonomy",
      sequence: "TC071 → TC021",
      example: [
        '"You were saying the deadline matters and the plan still feels unrealistic."',
        '"Want to finish that thought, or should we leave it for now?"',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC001",
      reason:
        "Both use earlier content. TC001 follows a thread that is still live. TC071 rebuilds one that a break snapped. No interruption? Use TC001.",
    },
    {
      id: "TC038",
      reason:
        "TC038 manages several open threads across a long conversation. TC071 restores the one an interruption cut off. Choosing among threads is TC038. Repairing a break is TC071.",
    },
    {
      id: "TC041",
      reason:
        "TC041 reads which topic has the most energy right now. TC071 restores a disrupted one. If the old topic still has energy, re-enter. If energy has moved, track it with TC041.",
    },
    {
      id: "TC062",
      reason:
        "TC062 returns to an earlier thread by choice, later in the arc. TC071 returns because a break just happened. A recent interruption is TC071.",
    },
    {
      id: "TC065",
      reason:
        "TC065 marks a point for later before you move on. TC071 resumes it now. Pausing for later is bookmarking. Picking it up is re-entry. They pair well.",
    },
    {
      id: "TC078",
      reason:
        "TC078 revives an earlier shared reference for warmth. TC071 restores continuity after disruption. Connection is TC078. Repair is TC071.",
    },
  ],
};
