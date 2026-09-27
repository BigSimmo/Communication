import type { CardData } from "../card-types";

export const TC087: CardData = {
  pdfUrl: "cards/TC087/TC087_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC087/TC087_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC087/TC087_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC087/TC087_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC087/TC087_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC087/TC087_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC087/TC087_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC087/TC087_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC087",
  whyItWorks:
    'A story invitation asks someone to share the human sequence behind a statement, decision, change or reaction (the lead-up, turning point, obstacle or lesson) rather than interrogating the facts. When a person hints there is more behind what they said ("I left that role", "That year changed a lot"), notice the cue, offer one low-pressure invitation, then let them choose how much to tell. People rarely give their full context on the first pass, and they trust a listener who can hold the whole sequence instead of reacting only to the conclusion. Curiosity that protects autonomy earns far more openness than pressure.',
  whatItIsNot: [
    "It is not prying, extracting, or interviewing someone for content, and it is not a shortcut to intimacy.",
    "It is not a therapy technique, a trauma probe, or a sales discovery tactic.",
    "It is not a way to make someone perform an entertaining anecdote on demand.",
    'It is not a string of fact questions: "When did that happen? Who was there? What year was it?" narrows attention before the person has chosen the story they want to tell.',
  ],
  overview: {
    coreFormula: [
      "Cue + soft marker + optional invitation + room.",
      "You said you left pretty suddenly. If you're comfortable sharing, what led up to that?",
      "You lit up when you mentioned that project. How did that start?",
      "That sounds like a real turning point. What changed for you there?",
      "Only if it's not too much to get into, what's the story behind that?",
    ],
    minimumViableMove:
      'Notice a genuine story cue, offer one warm, low-pressure invitation ("What\'s the story behind that?") then stay quiet and let them choose how much to tell.',
    impact: "Medium",
    difficulty: "Easy-Medium",
    misuse:
      'The move fails when you ask from suspicion, stack fact questions, or fill the silence yourself, turning an invitation into an interrogation. "What\'s the story there?" can feel intrusive if the cue is private, painful, or was never offered up for discussion.',
    bestFor: [
      "Someone mentions a change, decision, unusual preference, strong reaction, or turning point.",
      "A conversation is stuck at surface level but has a clear cue for depth.",
      "A professional conversation needs context before advice, negotiation, or planning.",
      "A social conversation would benefit from warmth and personal texture.",
      "Someone seems willing to say more but has not yet found the invitation.",
    ],
  },
  notFor: [
    "They have signalled they do not want to talk about it.",
    "The topic is visibly painful and you do not have enough trust or time.",
    "The setting is public and the answer could expose them.",
    "You need a direct operational fact, not a narrative.",
    "You are asking mainly to satisfy curiosity, gossip, or control the conversation.",
    "Physical safety or an immediate emergency response takes priority.",
  ],
  phraseBank: [
    {
      id: "quick-openers",
      label: "Quick openers",
      tag: "Default one-line invitations",
      tone: "Quick",
      phrases: [
        "What's the story behind that?",
        "What led up to that?",
        "How did that unfold?",
        "How did you end up there?",
        "What's the backstory there?",
        "What changed for you there?",
        "How did that start?",
        "What was the first thing that shifted?",
      ],
    },
    {
      id: "social-rapport",
      label: "Social & rapport",
      tag: "Hobbies, passions, life texture",
      tone: "Warm",
      phrases: [
        "How did that become a thing for you?",
        "What got you into that?",
        "What was the moment you realised that?",
        "Sounds like there's a lot behind that. How did it come about?",
        "What pulled you towards that in the first place?",
        "There's probably a story there. What was it like?",
        "What are you like when you're really into something?",
      ],
    },
    {
      id: "work-decisions",
      label: "Work & decisions",
      tag: "Context before advice or planning",
      tone: "Professional",
      phrases: [
        "What led to that decision?",
        "What was the path that got the team there?",
        "What changed between the old approach and this one?",
        "Can you walk me through how that developed?",
        "What context would help me understand that better?",
        "What context should I understand before I respond?",
        "Before we plan, what's the short version of how we got here?",
      ],
    },
    {
      id: "direct-invitations",
      label: "Direct invitations",
      tag: "Plain, un-softened asks",
      tone: "Direct",
      phrases: [
        "What happened there?",
        "How did you land on that?",
        "What changed your mind on that?",
        "What's the main sequence, from the top?",
        "Walk me through it. Where did it start?",
        "What was going on around then?",
      ],
    },
    {
      id: "permission-first",
      label: "Permission-first (sensitive)",
      tag: "Sensitive cues, permission + release",
      tone: "High-stakes",
      phrases: [
        "Only if you want to go into it, what led up to that?",
        "Only if it's not too much to get into, what's the story behind that?",
        "We can stay practical, but is there a short version of how we got here?",
        "You don't have to go into personal detail. What's the main sequence?",
        "Only if it feels okay to say, what changed for you then?",
        "If you're comfortable sharing, what led up to that?",
        "Would it be okay to ask how that came about?",
      ],
    },
    {
      id: "recovery-release",
      label: "Recovery & release",
      tag: "Softening if it doesn't land",
      tone: "Repair",
      phrases: [
        "No need to go into it. I was just curious about the context.",
        "We can leave it there. Thanks for the headline.",
        "Is there a story there, or is it not one for now?",
        "We can keep it high level if that's easier.",
        "No pressure either way.",
        "Let me ask a more practical version. What should I know before responding?",
      ],
    },
    {
      id: "digital-async",
      label: "Digital & async",
      tag: "Text and message-friendly",
      tone: "Quick",
      phrases: [
        "Curious, what led up to that? No pressure if it's a long story.",
        "Would be interested in the backstory if you feel like sharing.",
        "What's the short version of how that came about?",
        "Happy to hear the longer version whenever suits.",
        "I'm curious about the path, but only if it's comfortable.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "They gave no story cue.",
      action:
        "Don't force it. Stay with warm presence, a contextual opener, or a simple question.",
      phrase: "What's on your mind with this one?",
    },
    {
      condition: "There's a cue, but the setting isn't private enough.",
      action: "Use a high-level version that asks for context, not disclosure.",
      phrase: "What context should I understand before I respond?",
    },
    {
      condition: "The cue is sensitive or possibly painful.",
      action: "Add permission and a clean release before inviting.",
      phrase: "Only if you want to go there. What led up to that?",
    },
    {
      condition: "The cue is open and low-stakes.",
      action: "Offer a direct story invitation, then stop talking.",
      phrase: "Sounds like there's a bit behind that. What led up to it?",
    },
    {
      condition: "They open up.",
      action:
        "Listen, track the sequence, use minimal encouragers, then reflect the meaning back.",
      phrase:
        "So it wasn't just the team. It was the pattern of shifting scope.",
    },
    {
      condition: "They stay brief or withdraw.",
      action: "Release the pressure and shift to something lighter.",
      phrase: "No need to go into it. I appreciate the headline.",
    },
  ],
  ladder: [
    {
      weak: '"Why did you do that?" Sounds like a challenge and invites defence.',
      better: '"What happened?" Open, but can sound abrupt or investigative.',
      best: '"That sounds like it had a bit of a path behind it. What led up to it?" Marks the cue, lowers pressure, invites a sequence.',
    },
    {
      weak: '"Tell me the whole story." Makes the person perform and assumes access.',
      better:
        '"What\'s the backstory?" Conversational, but can still feel nosy.',
      best: '"Only if you want to go into it, what\'s the backstory there?" Preserves choice and offers a clean exit.',
    },
    {
      weak: '"When exactly did that happen?" Jumps to facts before narrative.',
      better: '"How did it start?" Invites the sequence.',
      best: '"What was the first thing that shifted?" Narrows gently to the beginning without interrogating.',
    },
  ],
  scenarios: [
    {
      situation: "A friend mentions a life change",
      move: "Mark the cue, add permission, and reflect the turning point rather than every detail.",
      phrase:
        "Sounds like there was a lot behind that. Only if you want to, what led up to the move?",
    },
    {
      situation: "A colleague mentions a decision",
      move: "Ask for the sequence, then listen for constraints and decision criteria.",
      phrase: "What led to that decision?",
    },
    {
      situation: "A new contact mentions a passion",
      move: "Notice the enthusiasm and ask one light continuation.",
      phrase: "How did that become a thing for you?",
    },
    {
      situation: "A customer mentions a recurring frustration",
      move: "Stay practical and ask for the pattern without assigning blame.",
      phrase: "To understand the pattern, what led up to this from your side?",
    },
    {
      situation: "A family member hints at a sensitive topic",
      move: "Offer maximum permission and accept any level of answer.",
      phrase: "Only if it feels okay to say, what changed for you then?",
    },
  ],
  calibration: {
    working: [
      "They pause thoughtfully rather than shutting down.",
      "Their answer becomes more specific or animated.",
      'They add chronology: "At first... then... eventually...".',
      "They volunteer feelings, values, or what was at stake.",
      "They lean in and speak a little faster.",
      "They ask for your view after telling the story.",
    ],
    adjust: [
      "They answer with one or two closed words.",
      "They look away, stiffen, laugh awkwardly, or change the topic.",
      'They correct your premise: "It\'s not really a story."',
      "They give a purely practical answer.",
      "They say they don't want to get into it: stop and release.",
      "The setting makes privacy impossible. Keep it high level.",
      "Your curiosity is running ahead of their comfort: back off.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the cues",
      task: 'Write ten surface statements that imply a story ("I changed careers", "I don\'t go there anymore", "That project taught me a lot") and underline the story cue in each.',
    },
    {
      day: "Day 2",
      title: "Three versions",
      task: "For each cue, write one blunt fact question, one acceptable question, and one story invitation. Notice how the invitation lands differently from the interrogation.",
    },
    {
      day: "Day 3",
      title: "Add permission",
      task: 'Take your five most sensitive cues and add a permission softener to each ("only if you want to go into it", "if you\'re comfortable sharing").',
    },
    {
      day: "Day 4",
      title: "Invite, then wait",
      task: "Say each invitation out loud once, then stay silent for a full three seconds. Get comfortable letting the silence do the work instead of adding a second question.",
    },
    {
      day: "Day 5",
      title: "Live, low-stakes",
      task: "In a real conversation, wait for one genuine cue, offer a single story invitation, then stop and just listen to whatever comes back.",
    },
    {
      day: "Day 6",
      title: "Calibrate live",
      task: "Across today's conversations, practise reading the response (open, brief, or resistant) and choose continue, reflect, or release accordingly.",
    },
    {
      day: "Day 7",
      title: "Recover cleanly",
      task: "Rehearse the recovery lines until they sound plain, then use one for real when an invitation doesn't land, releasing the pressure without over-apologising.",
    },
  ],
  checklist: [
    "Did I wait for a real cue before inviting the story?",
    "Did my tone sound curious rather than suspicious?",
    "Did I ask one clean invitation instead of stacking questions?",
    "Did I give the person room to choose the depth?",
    "Did I release the pressure if the invitation didn't land?",
    "Did I listen to the story rather than hunting for my next question?",
  ],
  example: {
    without: [
      'A: "I don\'t really work with that team anymore."',
      'B: "Why? What happened? Did someone mess up?"',
      'A: "It\'s complicated."',
      "Why it fails: B asks from suspicion, stacks three questions, and makes the story feel unsafe to tell.",
    ],
    with: [
      'A: "I don\'t really work with that team anymore."',
      "B: \"Sounds like there's a bit behind that. Only if it's useful to get into, what led up to the change?\"",
      'A: "Yeah, the short version is the work kept shifting after we\'d agreed on scope."',
      'B: "So it wasn\'t just the team. It was the pattern of moving scope."',
      'A: "Exactly. That\'s what wore me down."',
      "Why it works: B marks the cue, gives permission, invites one story, then reflects the sequence back. No prying, no blame.",
    ],
    note: 'The cooler middle version ("What led to the change?") also works. It just lands a little flat. Marking the cue first is what adds the warmth.',
  },
  influencePayoff: {
    feeling: '"They understood the whole context, not just my conclusion."',
    principle:
      "People are more likely to trust a listener who can hold the sequence behind a view rather than reacting only to the outcome.",
    gains: [
      "Reveals motivation without making the person defend themselves.",
      "Uncovers values, constraints, turning points, and unstated concerns.",
      "Creates emotional pacing: the person chooses detail, depth, and tone.",
      "Prevents premature advice, because you hear the story before you solve.",
      "Builds rapport through genuine curiosity rather than performance.",
      "Leaves any later response better calibrated to what actually matters.",
    ],
    whyMostFail: [
      "They ask before a real cue, so the depth feels performative.",
      "They deliver it mechanically or from suspicion, so it lands as an interrogation.",
      "They stack more questions into the silence instead of letting the person choose.",
      "They hijack the story with their own the moment it starts.",
    ],
  },
  fieldTip: {
    headline:
      "A story invitation works best when it sounds like respect for context, not hunger for detail.",
    body: "Use it the moment you sense a doorway, then stop. The silence after the invitation is what lets the other person decide whether the door opens. Fill that silence with a second question and you've quietly taken the choice back off them.",
    example: '"There may be a story there, only if you want to tell it."',
    dont: 'Fill the pause with "When was that? Who was involved?" It turns an open door into an interrogation.',
    do: "Ask once, warmly, then let the silence sit and follow whatever level they choose.",
  },
  method: [
    {
      step: "1",
      title: "Notice the story cue",
      body: "Listen for a headline that implies a sequence rather than a single fact: a change, decision, turning point, or reaction the person has compressed into one line.",
      examples: [
        { label: "Cue", text: '"I stopped doing that."' },
        { label: "Cue", text: '"I learned that the hard way."' },
        { label: "Cue", text: '"That was a strange year."' },
        { label: "Cue", text: '"I changed my mind."' },
      ],
    },
    {
      step: "2",
      title: "Mark the cue lightly",
      body: "Reflect the cue with a small marker before you invite, so the question arrives as recognition rather than a probe.",
      examples: [
        { label: "Marker", text: '"That sounds like it had a bit behind it."' },
        { label: "Marker", text: '"There\'s probably a story there."' },
      ],
    },
    {
      step: "3",
      title: "Ask one story invitation",
      body: "Choose a single open prompt that fits the intimacy and the setting, then let it stand on its own.",
      examples: [
        { label: "Open", text: '"What led up to that?"' },
        { label: "Open", text: '"How did that unfold?"' },
        { label: "Warm", text: '"What changed for you there?"' },
        {
          label: "Softened",
          text: '"Only if you want to go into it, what\'s the story behind that?"',
        },
      ],
    },
    {
      step: "4",
      title: "Stop talking",
      body: "Give the person real space to decide whether and how to answer. The silence is part of the move. Don't stack a second question into it.",
    },
    {
      step: "5",
      title: "Follow their chosen level",
      body: "If they open up, listen and track the sequence rather than planning your reply. If they stay brief, respect it and shift to something lighter.",
      examples: [
        {
          label: "They open",
          text: "Track the arc and reflect it back before adding anything of your own.",
        },
        {
          label: "They stay brief",
          text: '"Got it, that helps. We can leave it there."',
        },
      ],
    },
  ],
  liveThreadClues: [
    '"I stopped doing that..."',
    '"I learned the hard way..."',
    '"That was a strange year..."',
    '"I changed my mind..."',
    '"I avoid that now..."',
    '"I left that role..."',
    '"That place changed me..."',
    '"I don\'t really talk to them now..."',
  ],
  depthDial: [
    {
      depth: "Direct",
      useWhen: "Non-sensitive cue, enough trust in the room",
      phrase: "What's the story behind that?",
    },
    {
      depth: "Permission-based",
      useWhen: "The topic could be sensitive or personal",
      phrase: "Only if you want to go into it, what led up to that?",
    },
    {
      depth: "High-level",
      useWhen: "The setting is public, or you only need context to respond",
      phrase: "What context should I understand before responding?",
    },
    {
      depth: "Ultra-soft",
      useWhen: "You're unsure it's even open for discussion",
      phrase: "Is there a story there, or is it not one for now?",
    },
  ],
  commonMistakes: [
    {
      mistake: "Asking before there's a cue",
      soundsLike: '"So... what\'s your whole story?" out of nowhere.',
      better:
        'Wait for a real cue, then: "That sounds like it had a bit behind it. What led up to it?"',
    },
    {
      mistake: "Asking from suspicion",
      soundsLike: '"What\'s the story there?" with a raised eyebrow.',
      better: '"I\'d genuinely like to understand how that came about."',
    },
    {
      mistake: "Stacking questions",
      soundsLike: '"When? Who was there? Why\'d you leave?"',
      better: "Ask one invitation, then let the silence sit.",
    },
    {
      mistake: "Chasing pain",
      soundsLike: '"But what actually happened to you?"',
      better:
        '"Only if it feels okay to say. No need to go into the hard parts."',
    },
    {
      mistake: "Making it entertainment",
      soundsLike: '"Ooh, tell everyone that story!"',
      better: '"Only if you feel like getting into it."',
    },
    {
      mistake: "Hijacking the sequence",
      soundsLike: '"Oh, the same thing happened to me..."',
      better: '"Go on. What happened next?"',
    },
    {
      mistake: "Treating one layer as consent for all",
      soundsLike: '"And what about the personal side of it?"',
      better: "Take what they offer and let them keep the rest private.",
    },
  ],
  recoveryPhrases: [
    "No need to go into it. I realise that may be more personal than I meant.",
    "We can keep it high level. I was trying to understand the context, not pry.",
    "Let me ask a more practical version: what should I know before responding?",
    "Makes sense. We can leave it there.",
    "Thanks, I didn't want to over-ask.",
    "I just stacked a few questions there. The main one is: what context matters most?",
    "I appreciate you trusting me with that. We don't have to keep unpacking it.",
    "Completely fine. I appreciate the headline.",
  ],
  bestRecoveryLine:
    "No need to go into it. I was trying to understand the context, not pry.",
  chains: [
    {
      label: "Opening a new thread",
      sequence:
        "Contextual opener → story invitation → minimal encouragers → meaning reflection",
      example: [
        '"Funny running into you here. How do you know the host?"',
        '"Oh, you two go way back. What\'s the story there?"',
        '"Mm... go on."',
        '"So the friendship really started over that one trip."',
      ],
    },
    {
      label: "Following the energy",
      sequence: "Topic energy tracking → story invitation → exact-word pickup",
      example: [
        '"You\'ve mentioned the move a few times now."',
        '"How did the move come about?"',
        "\"You said 'escape', escape from what, exactly?\"",
      ],
    },
    {
      label: "Safety before questions",
      sequence: "Warm presence → story invitation → strategic silence",
      example: [
        '"No rush, we\'ve got time."',
        '"Only if you want to, what led up to it?"',
        "Then wait, and let the silence do the inviting.",
      ],
    },
    {
      label: "Understand before solving",
      sequence:
        "Premature-advice restraint → story invitation → permission-based advice",
      example: [
        '"Before I jump in with ideas -"',
        '"what led up to this from your side?"',
        '"Given all that, do you want a suggestion or just a sounding board?"',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC038",
      reason:
        "Both extend a topic. Invite a story when there's a hidden backstory behind a cue. Thread instead when you're returning to an existing thread across turns.",
    },
    {
      id: "TC041",
      reason:
        "Both follow energy. Track topic energy first when you're unsure which thread to open. Invite the story once the energised cue is clear.",
    },
    {
      id: "TC025",
      reason:
        "Both use the person's own wording. Pick up the exact word when one word carries the charge. Invite the story when a whole event or arc is implied.",
    },
    {
      id: "TC023",
      reason:
        "Both go beneath the surface. Use loaded-word follow-up for the meaning of a charged word. Use story invitation for the path behind it.",
    },
    {
      id: "TC030",
      reason:
        "Both are easy continuers. Echo plus question is a light, local next question. Story invitation opens a longer lane for the full arc.",
    },
    {
      id: "TC004",
      reason:
        "Boundary: don't use a story invitation as a substitute for reflective listening. If the person is already emotional, reflect first, then invite only if it feels welcome.",
    },
  ],
};
