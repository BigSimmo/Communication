import type { CardData } from "../card-types";

export const TC062: CardData = {
  pdfUrl: "cards/TC062/TC062_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC062/TC062_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC062/TC062_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC062/TC062_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC062/TC062_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC062/TC062_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC062/TC062_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC062/TC062_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC062",
  whyItWorks:
    "Thread return is the move of cleanly coming back to an earlier open thread after the conversation has drifted, without making the drift wrong or making the other person feel dragged back. When a useful point gets displaced by a tangent, interruption, joke, or necessary side issue, you bridge back to it lightly, name it specifically, and give the person an easy choice to continue or move on. It works because returning to the thread that mattered but got lost signals that you were tracking meaning across the whole conversation, not just reacting to the last sentence, and that continuity earns trust while surfacing the real issue before you act on a shallow version of it.",
  whatItIsNot: [
    'It is not saying "anyway" in a dismissive tone, or yanking the conversation away from what the other person is saying right now.',
    "It is not cross-examination, agenda control, or topic policing.",
    "It is not reopening something the other person has clearly closed.",
    "It is not the same as repeating the last phrase or broad thread management: the target is one specific earlier thread that got lost.",
    "It is not a licence to reopen sensitive material out of curiosity. The more sensitive or unequal the situation, the lighter and more optional the return must be.",
  ],
  overview: {
    coreFormula: [
      "Can I come back to the part about timing for a second? What makes that the hard bit?",
      "Before we leave it, you mentioned trust. Is that the main issue here?",
      "I don't want to lose the thread about your team. What changed there?",
      "Can we return to what you said about feeling boxed in, or would you rather leave that?",
      "One thread I want to pick back up is the budget constraint. Is that still the blocker?",
    ],
    minimumViableMove:
      'Notice the earlier open thread, then bridge back with one line: "Can I come back to the part about X for a second?"',
    impact: "Low",
    difficulty: "Medium",
    misuse:
      "Abruptly yanking the conversation back, or using the return to pressure, expose, or win rather than to add clarity.",
    bestFor: [
      "A conversation moved on before an important point was explored.",
      "Someone mentioned a concern, preference, deadline, value, or story detail and then got interrupted.",
      "A meeting tangent displaced a decision or unresolved question.",
      "A social conversation drifted away from something the other person seemed interested in.",
      "A digital thread contains an unanswered point buried under newer messages.",
      "You need continuity without sounding rigid or managerial.",
      "You want to reduce scattered conversation and return to the thread that matters.",
    ],
  },
  notFor: [
    "The other person explicitly closed the topic or declined to discuss it.",
    "Returning would expose them in front of others.",
    "The current topic is urgent, time-sensitive, or emotionally more important.",
    "You are using the return to win an argument, trap inconsistency, or force a confession.",
    "You have already returned to the same thread several times.",
    "The person appears tired, short, tense, or overloaded.",
    "The thread is sensitive and you cannot offer an easy opt-out.",
  ],
  phraseBank: [
    {
      id: "quick_returns",
      label: "Quick returns",
      tag: "Short bridges back",
      tone: "Quick",
      phrases: [
        "Can I come back to something you said earlier?",
        "Before we leave that, can I pick up one thread?",
        "I don't want to lose the thread about that.",
        "Can we return to that part for a second?",
        "One earlier point seems important.",
        "There was a thread I want to understand before we move on.",
        "Can I rewind one second?",
        "Can we go back to that for a moment?",
      ],
    },
    {
      id: "name_and_ask",
      label: "Name the thread and ask",
      tag: "Bridge plus one clean question",
      tone: "Direct",
      phrases: [
        "Can I come back to the part about timing? What makes that the hard bit?",
        "Before we leave it, you mentioned trust. Is that the main issue here?",
        "I don't want to lose the thread about your team. What changed there?",
        "One thread I want to pick back up is the budget constraint. Is that still the blocker?",
        "You sounded mixed about the new job. What's the main thing there?",
        "Is the main issue the decision itself, or how it was handled?",
        "Can we return to what you said about feeling boxed in, or would you rather leave that?",
      ],
    },
    {
      id: "social_returns",
      label: "Social versions",
      tag: "Warm, everyday returns",
      tone: "Warm",
      phrases: [
        "Wait, I want to come back to the part about the trip. What happened there?",
        "You mentioned that thing with your brother earlier. Is that still on your mind?",
        "I don't want to steamroll past your new role. How is that actually feeling?",
        "Can I rewind one second? The bit about the move sounded big.",
        "Can I come back to the project you mentioned? What made that one stand out?",
        "I didn't want to skip the part that sounded like it mattered.",
      ],
    },
    {
      id: "professional_returns",
      label: "Professional versions",
      tag: "Work, meetings, decisions",
      tone: "Professional",
      phrases: [
        "Before we close this, can we return to the customer-impact point?",
        "I want to pick up the thread about ownership. Who has the next step?",
        "The earlier timing constraint may be the key issue. Should we solve that first?",
        "Can we come back to the risk you named at the start?",
        "Before we go deeper on the side issue, can we return to the launch-risk thread and decide the owner?",
      ],
    },
    {
      id: "digital_returns",
      label: "Digital / written versions",
      tag: "Chat, email, threads",
      tone: "Professional",
      phrases: [
        "Pulling one thread back up: you mentioned timing. Is that the main blocker?",
        "I want to respond to the earlier point before it gets buried.",
        "Looping back to your note on that: what would make it easier?",
        "One thing from above still seems unresolved.",
        "Pulling one thread back up: the approval timing still seems unresolved. Who needs to sign off?",
      ],
    },
    {
      id: "under_pressure",
      label: "Under pressure or in a group",
      tag: "Fast-moving or public settings",
      tone: "High-stakes",
      phrases: [
        "I know we're moving quickly. One thread we shouldn't lose is this.",
        "Before we decide, can we return to the unresolved concern?",
        "I may be wrong, but that earlier point seems decision-relevant.",
        "Can we pause the tangent and finish that thread first?",
        "Can we finish the earlier point before we lose it?",
      ],
    },
    {
      id: "opt_out",
      label: "Opt-out and high-safety",
      tag: "Easy to decline",
      tone: "Repair",
      phrases: [
        "We can leave this if it's not useful, but earlier you mentioned it.",
        "Only if you want to go there. What happened with that?",
        "I don't want to pry, but I noticed that thread. Is it worth returning to?",
        "Happy to move on, but I didn't want to ignore that part.",
        "We can leave it, but earlier you said things had been weird. Want to say more, or better not now?",
        "There was something earlier. We can leave it if it's not useful, but is it still part of this?",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "An earlier thread opened, then got lost",
      action:
        "Check it is useful, unfinished, or relationship-relevant. If it is only your curiosity, let it go.",
      phrase: "",
    },
    {
      condition: "The other person clearly closed it",
      action:
        "Do not reopen it without a safety, clarity, or consent reason, and then ask permission explicitly.",
      phrase: "Only if useful, can we come back to that?",
    },
    {
      condition: "The current topic is more urgent or important",
      action:
        "Stay present. Bookmark the earlier thread for later if it still matters.",
      phrase:
        "One thread we shouldn't lose, when there's room, is that part about X.",
    },
    {
      condition: "It is safe to return (low sensitivity)",
      action:
        "Bridge back lightly, name the thread, and ask one clean question.",
      phrase: "Can I come back to X for a second? What made that the hard bit?",
    },
    {
      condition: "The thread is sensitive or you hold more power",
      action: "Return softer and fully optional, with an easy way out.",
      phrase:
        "We can leave it if it's not useful, but earlier you mentioned X.",
    },
    {
      condition: "They expand after the return",
      action:
        "Follow with one reflection or summary. If they hesitate, add an opt-out. If they decline, release.",
      phrase: "So the real issue was X, not Y.",
    },
  ],
  ladder: [
    {
      weak: '"Anyway, back to what you were saying."',
      better: '"Can I come back to the job thing?"',
      best: '"Can I come back to the part about the new job for a second? You sounded mixed about it. What\'s the main thing there?"',
    },
    {
      weak: '"We\'re off topic."',
      better: '"Let\'s return to the deadline."',
      best: '"The tangent may be useful later. Before we lose it, can we finish the deadline thread and decide the next step?"',
    },
    {
      weak: '"You never answered my question."',
      better: '"Can we go back to what you said about trust?"',
      best: '"Only if useful, can we return to the trust part? I don\'t want to push it, but it sounded central."',
    },
    {
      weak: '"No, don\'t change the subject."',
      better: '"Can we finish the earlier point?"',
      best: '"I want to stay with one thread so I don\'t misread you. Is the main issue the decision itself, or how it was handled?"',
    },
  ],
  scenarios: [
    {
      situation: "Networking conversation",
      move: "They mention a project they cared about, then the talk shifts to logistics. Bridge back to the project.",
      phrase:
        "Can I come back to the project you mentioned? What made that one stand out?",
    },
    {
      situation: "Team meeting tangent",
      move: "The team drifts from a risk into a side debate. Return to the risk and pin the owner.",
      phrase:
        "Before we go deeper on the side issue, can we return to the launch-risk thread and decide the owner?",
    },
    {
      situation: "Conflict conversation",
      move: "They mention feeling dismissed, then start debating facts. Return to the feeling gently.",
      phrase:
        "Can I return to the dismissed part? I don't want to miss that. What made it land that way?",
    },
    {
      situation: "Sales or discovery",
      move: "A stakeholder raises budget uncertainty, then asks about features. Return to the budget before features.",
      phrase:
        "Happy to cover features. Before that, can I return to the budget uncertainty? Is that likely to affect timing?",
    },
    {
      situation: "Digital thread",
      move: "The chat has moved on but one key question is unanswered. Surface it plainly.",
      phrase:
        "Pulling one thread back up: the approval timing still seems unresolved. Who needs to sign off?",
    },
    {
      situation: "Friend discloses then pivots",
      move: "They say something personal, then change the subject. Offer a return with a clear opt-out.",
      phrase:
        "We can leave it, but earlier you said home has been weird. Want to say more, or better not now?",
    },
  ],
  calibration: {
    working: [
      "They give more detail, examples, or context.",
      "They look relieved that the earlier point was remembered.",
      "Their tone warms, slows, or becomes more specific.",
      'They say "yes, exactly," "that is the thing," or "I was hoping to get back to that."',
      "The thread clarifies a decision, feeling, constraint, or next step.",
      "They pick the thread up and run with it themselves.",
    ],
    adjust: [
      "They answer briefly but not negatively: soften and add an opt-out.",
      "They seem unsure why you returned. Say why the thread matters, or let it go.",
      'Your wording was too formal: loosen it: "only if this is still useful."',
      "The current topic still has live energy: park the thread and stay present.",
      "They become tense, guarded, or embarrassed: release the thread immediately.",
      "They say they do not want to discuss it. Drop it and do not explain at length.",
      "You have returned twice and it is not opening: stop returning.",
      "The setting makes the topic exposing: move it private or leave it.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot lost threads",
      task: "Read or listen to a two-minute conversation. Write down every thread that opens, and mark which are current, closed, unresolved, or worth returning to.",
    },
    {
      day: "Day 2",
      title: "Write the bridges",
      task: "For six lost threads (timing concern, trust issue, new role, budget constraint, family tension, unclear ownership) write one return bridge each that names the thread without blaming the drift.",
    },
    {
      day: "Day 3",
      title: "One-question discipline",
      task: "Take each bridge from Day 2 and add exactly one clean follow-up question. Delete any second or third question.",
    },
    {
      day: "Day 4",
      title: "Add the opt-out",
      task: 'Rewrite five direct returns as optional ones. Example: "Can we return to the trust part?" becomes "Only if useful, can we return to the trust part, or should we leave it?"',
    },
    {
      day: "Day 5",
      title: "Live return",
      task: "In one real conversation, notice one earlier thread and return to it only if it would add ease or clarity. Afterwards note the cue, the phrase, how it landed, and whether you followed or released.",
    },
    {
      day: "Day 6",
      title: "Recover a miss",
      task: 'Role-play or replay a return that misses: the other person says "I do not want to get into that." Recover in one sentence and do not explain further.',
    },
    {
      day: "Day 7",
      title: "Chain it",
      task: "In a real conversation, return to a thread and then chain one move onto it (a summary check, a clean request, or a bookmark for later) then review what the return changed.",
    },
  ],
  checklist: [
    "Was the thread truly unfinished or useful, or just interesting to me?",
    "Did I bridge back without blaming the drift?",
    "Did I name the thread specifically rather than vaguely?",
    "Did I give the other person a real choice to decline?",
    "Did I ask one clean follow-up instead of stacking questions?",
    "Did I follow, adjust, or release at the right moment?",
  ],
  example: {
    without: [
      'A: "I liked the project, but the timeline got weird after the client changed direction. Anyway, the launch went fine."',
      'B: "Wait, go back. What do you mean weird? You skipped that."',
      'A: "It\'s not a big deal."',
      "Why it misses: B sounds like an auditor: the return is abrupt and implies A did something wrong by moving on.",
    ],
    with: [
      'A: "I liked the project, but the timeline got weird after the client changed direction. Anyway, the launch went fine."',
      'B: "The launch piece sounds like it landed. Before we move past it, can I return to the timeline thread for a second?"',
      'B: "You said it got weird after the client changed direction. Was the hard part the changing priorities or the lack of clarity?"',
      'A: "The lack of clarity, definitely. Nobody wanted to own the trade-offs."',
      'B: "So the issue wasn\'t the change itself, it was the unowned trade-offs. That seems important for next time."',
    ],
    note: "B respects the current thread, bridges back without blame, offers a focused choice, then summarises the clarified meaning.",
  },
  influencePayoff: {
    feeling: '"They remembered the thread that actually mattered to me."',
    principle:
      "People notice when you come back to the point that got lost. A clean return signals you were tracking meaning across the conversation, not just reacting to the most recent sentence.",
    gains: [
      "Trust through continuity",
      "Accuracy: you clarify the real issue before acting on a shallow version",
      "Fewer buried decisions and unresolved concerns in meetings",
      "The other person feels heard as a coherent person, not a stream of prompts",
      "Calmer conversations, because nothing important quietly disappears",
      "Respect, because the return comes with an easy way out",
    ],
    whyMostFail: [
      'They yank the conversation back with "anyway" and make the drift wrong.',
      "They return to prove a point or expose an inconsistency, so it lands as pressure.",
      'They name the thread vaguely ("that thing earlier") so it is hard to answer.',
      "They stack three questions onto the return and it becomes an interrogation.",
    ],
  },
  fieldTip: {
    headline: "Return softly, not abruptly.",
    body: "A good return sounds like care for continuity, not correction. Use the field rule: bridge, name, ask, then watch. If the other person does not come back with you, release the thread cleanly.",
    example:
      "I don't want to lose the thread about the handover. What changed there?",
    dont: "Anyway, back to what I was saying.",
    do: "Before we leave that, can I come back to the handover for a second?",
  },
  method: [
    {
      step: "1",
      title: "Notice the open thread",
      body: 'Listen for a point that was started but not completed: a concern, value, example, detail, decision, feeling, contradiction, or a phrase that keeps surfacing. It is often the thing someone waved off with "anyway" or "it\'s not a big deal."',
    },
    {
      step: "2",
      title: "Check it is worth returning to",
      body: "Ask yourself whether coming back would add clarity, care, or relevance. If it only serves your curiosity, let it go. Return only to a thread that is still useful, unfinished, emotionally live, decision-relevant, or relationship-relevant.",
    },
    {
      step: "3",
      title: "Bridge without blaming the drift",
      body: "Use a neutral bridge that does not make moving on wrong. The goal is continuity, not correction.",
      examples: [
        { label: "Neutral", text: "Before we leave that..." },
        {
          label: "Neutral",
          text: "Can I come back to something you said earlier?",
        },
      ],
    },
    {
      step: "4",
      title: "Name the thread and offer choice",
      body: 'Say the exact topic in plain words: "the part about timing," "your concern about trust," "the budget constraint." For sensitive or optional threads, make it easy to decline.',
      examples: [
        {
          label: "Specific",
          text: "Can we come back to the risk you named at the start?",
        },
        { label: "Optional", text: "Only if useful. We can leave it if not." },
      ],
    },
    {
      step: "5",
      title: "Ask one clean follow-up",
      body: "Add one small continuation question, not three, then pause. A return plus a stack of questions feels like interrogation.",
      examples: [
        { label: "One question", text: "What made that the hard bit?" },
      ],
    },
    {
      step: "6",
      title: "Watch, then follow or release",
      body: "If they answer with detail, warmth, or relief, continue and summarise what got clarified. If they flatten, deflect, or look pressured, release the thread cleanly and return to where they were going. The core behaviour is returning in a way that preserves the other person's sense of choice.",
    },
  ],
  liveThreadClues: [
    '"Anyway..." They wave off something they just raised',
    '"It\'s not a big deal" said about something that clearly landed',
    '"...but that\'s a whole other thing"',
    '"We can talk about that later"',
    "A concern, feeling, or value named once, then the topic jumps",
    "A word or phrase that keeps resurfacing",
    "Someone gets interrupted mid-point and does not circle back",
    'A trailing "...it got a bit weird, but..." left unfinished',
  ],
  commonMistakes: [
    {
      mistake: 'Using "anyway" as a shove',
      soundsLike: '"Anyway, back to what I was saying."',
      better: '"Before we leave that, can I come back to one thing?"',
    },
    {
      mistake: "Returning to prove a point",
      soundsLike: '"So earlier you said the opposite, didn\'t you?"',
      better:
        '"Can we go back to that part? I want to understand it, not catch you out."',
    },
    {
      mistake: "Naming the thread vaguely",
      soundsLike: '"Can we go back to that thing earlier?"',
      better: '"Can we go back to the timing issue you mentioned?"',
    },
    {
      mistake: "Stacking questions onto the return",
      soundsLike:
        '"Back to the budget. Who owns it, when is it due, and what\'s the number?"',
      better:
        '"Back to the budget for a second. Is it still the main blocker?"',
    },
    {
      mistake: "Reopening something they clearly closed",
      soundsLike: '"You never actually answered about your family."',
      better: '"I\'ll leave the family part unless you want to raise it."',
    },
    {
      mistake: "Ignoring what is urgent now",
      soundsLike: '"Hold on, back to my earlier point first."',
      better:
        "\"Let's finish what you're raising now. I'll come back to my point after.\"",
    },
    {
      mistake: "Returning to sensitive content in front of others",
      soundsLike:
        '"So about the thing you were upset about earlier..." Said in the meeting',
      better: '"Can we pick up the earlier thing one-to-one afterwards?"',
    },
  ],
  recoveryPhrases: [
    "I may have pulled us back too abruptly. We can stay with where you were going.",
    "That might not be the important thread. What feels more relevant?",
    "I don't want to press that. We can leave it.",
    "I was trying to make sure I didn't miss something, not to put you on the spot.",
    "I interrupted the flow. Please keep going with the newer point.",
    "I may have made the return sound heavier than I meant.",
    "Thanks for flagging that. I'll drop that thread.",
    "I heard the boundary. We don't need to return to it.",
  ],
  bestRecoveryLine:
    "I may have pulled us back too abruptly. We can stay with where you were going.",
  chains: [
    {
      label: "Return then confirm",
      sequence: "Topic energy tracking → Thread return → Summary check",
      example: [
        '"You seemed more specific when you mentioned the handover. Can I come back to that?"',
        '"So the handover gap is the real constraint."',
      ],
    },
    {
      label: "Return then deepen",
      sequence: "Thread return → Echo plus question → Meaning reflection",
      example: [
        "\"Can I return to the trust part? You said 'not transparent', in what way?\"",
        '"So it\'s less about the decision and more about being left out of it."',
      ],
    },
    {
      label: "Return then decide",
      sequence: "Thread return → Two-option questions → Clean request",
      example: [
        '"Can we return to ownership? Is this more a design decision or a resourcing decision?"',
        '"Could you take the resourcing call by Friday?"',
      ],
    },
    {
      label: "Return then repair",
      sequence:
        "Thread return → Validation without agreement → Boundary or repair",
      example: [
        '"Can we return to the concern about fairness? I can see why that felt uneven."',
        '"I still see the decision differently, but I want to repair the process."',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC038",
      reason:
        "Conversation threading is broad thread management: tracking and choosing among several live threads. Use TC062 for the specific move of coming back to one thread that got lost.",
    },
    {
      id: "TC001",
      reason:
        "Live-thread follow-ups stay with the current thread and need no bridge. Use TC062 when the thread is no longer the last thing said and you have to bridge back to it.",
    },
    {
      id: "TC041",
      reason:
        "Topic energy tracking follows where energy rises or drops. Use TC062 when a thread is unfinished or decision-relevant even though the energy has moved on.",
    },
    {
      id: "TC030",
      reason:
        "Echo plus question repeats a key phrase and adds a short question in the current flow. Use TC062 when the point is returning to an earlier topic, not just expanding a phrase.",
    },
    {
      id: "TC065",
      reason:
        "Conversation bookmarking marks a thread now so you can return later. Use TC062 to pick up a thread that was never formally parked.",
    },
    {
      id: "TC071",
      reason:
        "Conversation re-entry handles recovery after a hard interruption breaks the exchange. Use TC062 when the conversation kept flowing but drifted off a thread.",
    },
  ],
};
