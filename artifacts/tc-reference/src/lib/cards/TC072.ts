import type { CardData } from "../card-types";

export const TC072: CardData = {
  pdfUrl: "cards/TC072/TC072_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC072/TC072_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC072/TC072_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC072/TC072_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC072/TC072_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC072/TC072_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC072/TC072_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC072/TC072_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC072",
  whyItWorks:
    "A low-pressure invitation opens a door and keeps the choice genuinely free. You name what you are inviting someone into (a plan, a conversation, a reply, a disclosure) and you make declining, delaying, or joining at a lighter level completely safe. It works because people engage more honestly when refusing would not be awkward: the warmth plus a real exit ramp lowers defensiveness and proves that connecting with you is not a trap.",
  whatItIsNot: [
    "It is not a hidden request, a guilt trip, or a soft ultimatum dressed up as a choice.",
    'It is not adding "no pressure" to a message that is otherwise loaded with pressure.',
    "It is not vague passivity. You still say clearly what the invitation is.",
    "It is not making the other person responsible for protecting your feelings if they decline.",
  ],
  overview: {
    coreFormula: [
      "Context + optional invitation + easy exit + warm acceptance.",
      "A few of us are getting coffee after the session. You're welcome to join if you want. No problem either way.",
      "I'm collecting thoughts on the draft. If you have a quick reaction, I'd value it, but no need if your plate is full.",
      "If you want to say more about that, I'm interested. If not, we can leave it there.",
      "Integrity test: could they decline without losing warmth, status, access, or a future opportunity? If not, it isn't low-pressure.",
    ],
    minimumViableMove:
      "You're welcome to join if you want, and no problem at all if not.",
    impact: "Medium",
    difficulty: "Easy-Medium",
    misuse:
      "Using warm, optional wording to disguise pressure: the invitation claims to be optional, but the wording, follow-up, or reaction to a no makes refusing socially costly.",
    bestFor: [
      "Social invitations where you want warmth without neediness",
      "Group discussions where a quieter person may want an entry point",
      "Professional collaboration where participation is genuinely optional",
      "Digital follow-ups where the other person may be busy",
      "Inviting disclosure, feedback, or help without forcing intimacy",
      "Re-opening a thread after silence, delay, or interruption",
    ],
  },
  notFor: [
    "The action is genuinely required and needs to be named as required",
    "There is a safety, legal, clinical, or compliance issue that needs direct language",
    'A power difference makes "no pressure" hard to believe',
    "You will resent, punish, repeatedly chase, or quietly shame a no",
    "The invitation hides cost, commitment, visibility, or obligation",
    "Physical safety or an immediate emergency takes priority",
  ],
  phraseBank: [
    {
      id: "quick",
      label: "Quick",
      tag: "Short openers",
      tone: "Quick",
      phrases: [
        "You're welcome to join if you want. No problem if not.",
        "This is an open door, not an obligation.",
        "You can pass on this one.",
        "Join only if it suits you.",
        "No rush to reply. I just wanted to leave the door open.",
        "Genuinely optional, your call either way.",
        "Only if it's useful to you.",
        "No need to explain if it's a no.",
      ],
    },
    {
      id: "social",
      label: "Social invitations",
      tag: "Warmth without neediness",
      tone: "Warm",
      phrases: [
        "A few of us are grabbing lunch after this. You're welcome to come along if you feel like it. No pressure.",
        "I'm walking that way too. Happy to walk together, or no worries if you'd rather have some quiet.",
        "A few of us are heading over after this. You'd be very welcome, and it's completely fine if you'd rather a quiet night.",
        "We're heading over at six. You're very welcome if it sounds good, and no worries if you'd rather a quiet one.",
        "If you want to join the conversation, there's room. If you'd rather just listen, that's fine too.",
        "You'd be very welcome if it sounds good, and it's completely fine if tonight's a recovery night.",
        "We'd love to have you, and it's no trouble at all if the timing's wrong.",
      ],
    },
    {
      id: "professional",
      label: "Work and collaboration",
      tag: "Meetings, reviews, feedback",
      tone: "Professional",
      phrases: [
        "If you have a view, I'd be glad to hear it. Also fine to pass if this isn't your lane.",
        "I can send you the draft for comment, but only if it's useful. No need to add another task to your week.",
        "Would you like to be in on the next review, or would you rather I just send the summary?",
        "Optional: I can include you in the review. It's about a thirty-minute read, so please decline if your week is full.",
        "I'm gathering quick reactions to the onboarding draft. One confusing bit would be useful, and if not, no problem.",
        "If you have capacity, one quick reaction by tomorrow would help. If your week's full, no need. I can move with what I have.",
        "We're testing the new format on Friday. Sit in if it's helpful, skip it if it's not.",
      ],
    },
    {
      id: "naming-the-option",
      label: "Naming the option",
      tag: "Explicit opt-in / opt-out",
      tone: "Direct",
      phrases: [
        "You can answer now, later, or not at all.",
        "We can go into it, or leave it at that. Your call.",
        "You can jump in if you want, and it's also fine to just listen.",
        "Would you like in on this, or would you rather sit it out? Both are easy.",
        "There's a full version and a lighter version. Take whichever fits, or neither.",
        "Say the word and I'll add you. Say nothing and I'll take that as a no.",
      ],
    },
    {
      id: "guarded",
      label: "When the opt-out must be credible",
      tag: "Power gaps and guarded moments",
      tone: "High-stakes",
      phrases: [
        "I don't want to put you on the spot. You can answer now, later, or not at all.",
        "Only if you're comfortable. What would be useful for me to know here?",
        "You can pass on this one, and it won't count against you.",
        "I've got a bit more authority here, so I want to be clear: this is optional, and there's no downside to declining.",
        "There's no expectation attached to this. A no is a completely fine answer.",
      ],
    },
    {
      id: "repair",
      label: "Softening a loaded invite",
      tag: "Taking the pressure back out",
      tone: "Repair",
      phrases: [
        "I realise that may have sounded more loaded than I meant. It's genuinely optional.",
        "Let me take the pressure out of that, only if it suits.",
        "That came out pushier than I intended. No pressure at all.",
        "I should have been clearer about what's involved. Feel free to pass.",
        "Ignore the urgency in how I said that. There's no rush.",
      ],
    },
    {
      id: "disclosure",
      label: "Disclosure and presence",
      tag: "Leaving room to open up",
      tone: "Warm",
      phrases: [
        "If you want to say more, I'm here. If you'd rather not, that's completely okay.",
        "We can go into it or leave it there. Whatever feels right.",
        "No need to get into it now: the offer stands whenever.",
        "I'm happy to listen if it helps, and just as happy to talk about something else.",
        "You don't owe me the details. I just wanted you to know the door's open.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "Is participation genuinely optional?",
      action:
        "If no, don't use this move. Make a clear request or state the requirement plainly instead.",
      phrase: "This part's actually required, so I'll be straight about it.",
    },
    {
      condition: "Power gap, social risk, or chance of guilt?",
      action:
        "If yes, make the exit ramp explicit and behaviourally credible. If no, a lighter line is enough.",
      phrase:
        "There's genuinely no downside to declining. I want to be clear about that.",
    },
    {
      condition: "Can you accept a no without resentment or chasing?",
      action:
        "If no, pause and release the pressure on yourself before you invite anyone.",
      phrase: "Whatever they choose is fine. I'll keep it to one ask.",
    },
    {
      condition: "Inviting them to join something",
      action:
        "Name the event, roughly how long it takes, and the option to skip.",
      phrase:
        "We're on at six for about an hour. Very welcome if it suits, easy to skip if not.",
    },
    {
      condition: "Inviting a view, a reply, or a disclosure",
      action:
        "Invite the input and make passing, delaying, or going lighter equally acceptable.",
      phrase: "If you have a quick thought, I'd value it. If not, leave it.",
    },
    {
      condition: "They hesitate or push back",
      action:
        "Reduce the scope and re-release the choice. If resistance holds, switch to Resistance-as-information (TC073).",
      phrase: "No need to decide now: the offer just stays open.",
    },
  ],
  ladder: [
    {
      weak: "You should come. Everyone will be there.",
      better: "We're going. You can come if you want.",
      best: "A few of us are going after the session. You're very welcome to join if you want, and no problem at all if you'd rather head off.",
    },
    {
      weak: "Can you give me feedback by tomorrow? No pressure.",
      better:
        "If you have time, could you send one quick reaction by tomorrow?",
      best: "If you have capacity, one quick reaction by tomorrow would help. If your week's full, no need. I can move with what I have.",
    },
    {
      weak: "Come on, tell me what actually happened.",
      better: "You can tell me what happened if you want.",
      best: "If you want to talk it through, I'm here, and it's completely fine to leave it for now.",
    },
  ],
  scenarios: [
    {
      situation: "Social event invitation",
      move: "Name the event and make both joining and not joining safe.",
      phrase:
        "We're heading over at six. You're very welcome if it sounds good, and no worries if you'd rather a quiet night.",
    },
    {
      situation: "A quiet person in a group",
      move: "Offer an entry point without spotlighting them.",
      phrase:
        "Sam, if you have a view I'd like to hear it, and it's completely fine to pass.",
    },
    {
      situation: "Digital follow-up to someone busy",
      move: "Make the invitation useful and genuinely optional.",
      phrase:
        "If you have one quick thought, I'd appreciate it. If not, no need to reply.",
    },
    {
      situation: "Someone hints at something personal",
      move: "Leave the door open without pulling on it.",
      phrase:
        "If you want to say more, I'm here. If not, we can leave it there.",
    },
    {
      situation: "Including someone in optional work",
      move: "Clarify the option, the cost, and that a no is fine.",
      phrase:
        "Optional: I can include you in the review. It's about a thirty-minute read, so please decline if your week is full.",
    },
    {
      situation: "After they decline",
      move: "Accept it cleanly and keep the warmth intact.",
      phrase:
        "Of course. Thanks for letting me know. Hope the rest of the week's lighter.",
    },
  ],
  calibration: {
    working: [
      "They relax, smile, or answer freely.",
      "They pick a level of participation that suits them.",
      "They ask practical questions without looking trapped.",
      "They say no cleanly and the warmth stays intact.",
      "They choose a smaller version: I can't join, but send me the summary.",
      "They come back to it later on their own terms.",
    ],
    adjust: [
      "They hesitate, over-justify, or look like they're managing your feelings.",
      'They ask "Do you need me to?" or "Would it be bad if I couldn\'t?"',
      "Your own tone is turning needy, urgent, or over-sold.",
      "A power gap is making the opt-out hard to believe. So make it more explicit.",
      "They decline or say they're overloaded: accept it and stop.",
      "They give short, closed answers after your invitation.",
      "Continuing would tip the invitation into pursuit. Let it rest.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Pressure scan",
      task: "List three invitations you make often: one social, one work, one digital. For each, underline the hidden pressure: urgency, guilt, public exposure, obligation, hidden cost, or a demand to explain.",
    },
    {
      day: "Day 2",
      title: "Four-part rewrite",
      task: "Rewrite each one using the formula: context + optional invitation + easy exit + warm acceptance. Read them aloud. If any sounds needy or defensive, simplify it.",
    },
    {
      day: "Day 3",
      title: "Write the refusal response",
      task: "For each invitation, write how you'd reply if they decline. Each refusal response must be shorter than the invitation and must not ask them to justify the no.",
    },
    {
      day: "Day 4",
      title: "Convert the pushy classics",
      task: 'Turn "You should come" into a low-pressure invitation, and "Can you review this?" into an optional contribution.',
    },
    {
      day: "Day 5",
      title: "Disclosure and time-boxing",
      task: 'Turn "Tell me what happened" into a disclosure invitation, and "Join the call" into a time-bounded optional invite that names how long it takes.',
    },
    {
      day: "Day 6",
      title: "Public to private, and the open door",
      task: 'Take one invitation that would be awkward to decline in public and rewrite it as a private message. Then convert "Why didn\'t you reply?" into a clean open door.',
    },
    {
      day: "Day 7",
      title: "Live use and the one-invitation rule",
      task: "Use one low-pressure invitation in a real conversation. Say it once, don't re-sell it, and notice whether the person could decline without protecting your feelings.",
    },
  ],
  checklist: [
    "Is the invitation genuinely optional?",
    "Have I named the actual activity, time, effort, or exposure?",
    "Can they decline without having to explain?",
    "Am I offering warmth without creating a debt?",
    "Will I stop after one invitation and accept their answer cleanly?",
    "Would I be comfortable if someone used this exact invitation on me?",
  ],
  example: {
    without: [
      'A: "You never come to these things. You should come tonight."',
      'B: "I might be busy."',
      'A: "Come on, just make time."',
      "Why it fails: the invitation is really a loyalty test. Declining costs B something.",
    ],
    with: [
      "A: \"Some of us are meeting tonight for about an hour. You'd be very welcome if it sounds good, and it's completely fine if tonight's a recovery night.\"",
      'B: "Honestly, recovery night. But thank you."',
      'A: "Makes sense. Rest well, I\'ll let you know if we do another one."',
      "Why it works: the invitation is specific, warm, and optional, and the no is accepted without punishment.",
      "Professional version:",
      "A: \"I'm gathering quick reactions to the onboarding draft. If you have five minutes, one thing that feels confusing would be useful. If not, no problem. I know you're deep in launch work.\"",
      'B: "I can send one note tonight."',
      'A: "Great, and truly, keep it to one note if that\'s easiest."',
    ],
    note: "The advanced version stops selling the moment the invitation is out. The clean acceptance does the rest of the work.",
  },
  influencePayoff: {
    feeling:
      '"I could have said no, and that\'s what made it easy to say yes."',
    principle:
      "People engage more freely when refusing carries no cost. Remove the penalty for a no and you get a more honest yes, a cleaner no, or a better answer later.",
    gains: [
      "An honest yes instead of a reluctant one",
      "A clean no you can actually trust",
      "A better response later, once there's room",
      "Lower defensiveness, because they don't have to fight for space",
      "Trust that connecting with you isn't a trap",
      "A reputation for opening doors rather than cornering people",
    ],
    whyMostFail: [
      'They say "no pressure" after a message already loaded with pressure.',
      "The follow-up (chasing, disappointment, repeated asks) contradicts the claim that it was optional.",
      "They keep selling reasons to say yes, which quietly makes the no costly.",
      "They hide the real cost, time, or exposure, so the choice was never fully informed.",
    ],
  },
  fieldTip: {
    headline: "Open the door. Don't stand in the doorway.",
    body: "A low-pressure invitation only works if your next behaviour proves the choice was real. Say it once, make the exit easy, and let their answer be enough. The version that lands often feels almost too simple.",
    example: "You're welcome to join if you want. No problem if not.",
    dont: "Don't add three more reasons after \"no pressure\". That's you standing in the doorway.",
    do: "Do let a no sit without a follow-up sell. The silence is what makes your next invitation believable.",
  },
  method: [
    {
      step: "1",
      title: "Notice the participation cue",
      body: "Someone is interested, uncertain, quiet, busy, hesitant, left out, or coming back after a gap. That's the moment an invitation helps, and the moment pressure would hurt most.",
    },
    {
      step: "2",
      title: "Name the invitation clearly",
      body: "Make the thing concrete: what it is, roughly how long it takes, and what joining involves. Vague invitations hide the cost and make the choice unfair.",
      examples: [
        { label: "Vague", text: '"Join if you want."' },
        {
          label: "Clear",
          text: "\"We're on for about an hour after this. You're welcome to come.\"",
        },
      ],
    },
    {
      step: "3",
      title: "Add a real exit ramp",
      body: "Make no, later, or a smaller version socially safe, and state it plainly so declining doesn't take courage.",
      examples: [
        {
          label: "Exit ramp",
          text: "\"...and it's completely fine if the timing's wrong.\"",
        },
      ],
    },
    {
      step: "4",
      title: "Lower the social cost",
      body: "Don't make them explain themselves. A no shouldn't need a reason, and a private invitation often beats a public one when declining in front of others would be awkward.",
    },
    {
      step: "5",
      title: "Stop selling once it's out",
      body: "This is where most invitations fail. Adding reasons, urgency, or a hint of disappointment quietly turns the no costly. Say it once and let it stand.",
    },
    {
      step: "6",
      title: "Respect the answer in your behaviour",
      body: "If they decline, accept it cleanly and keep the warmth. Your reaction to this no is what makes your next invitation believable.",
      examples: [
        {
          label: "Clean accept",
          text: '"Of course, thanks for letting me know."',
        },
      ],
    },
  ],
  liveThreadClues: [
    "Someone hovering at the edge of a group",
    '"Maybe, I\'m not sure..."',
    "A quiet person who hasn't spoken yet",
    '"I\'ve been meaning to..." after a gap',
    "Someone busy who might still want in",
    "A hint of something personal, only half-said",
    '"Do I have to?" energy in the room',
  ],
  depthDial: [
    {
      depth: "Join",
      useWhen: "Inviting them to an event or plan",
      phrase: "We're on at six for about an hour. Welcome if it suits.",
    },
    {
      depth: "Share",
      useWhen: "Inviting a view in a group or meeting",
      phrase:
        "If you have a view, I'd value it. It's also completely fine to pass.",
    },
    {
      depth: "Reply",
      useWhen: "Inviting a response to a message",
      phrase: "No rush. If it's useful I'd like your take, if not, leave it.",
    },
    {
      depth: "Disclose",
      useWhen: "Inviting someone to open up",
      phrase: "If you want to say more, I'm here. If not, we can leave it.",
    },
  ],
  commonMistakes: [
    {
      mistake: 'Saying "no pressure" on a loaded message',
      soundsLike: "I really need this. No pressure though.",
      better:
        "If you have capacity it'd help. If not, no need. I can work with what I have.",
    },
    {
      mistake: "Leaving the invitation vague",
      soundsLike: "Join if you want.",
      better: "We're on for about an hour after this. You're welcome to come.",
    },
    {
      mistake: "Hiding the real cost or time",
      soundsLike: "Can you take a quick look? (when it's a two-hour read)",
      better: "It's about a two-hour read, so please pass if your week's full.",
    },
    {
      mistake: "Treating a no as the start of round two",
      soundsLike: "Are you sure? It'd really be good to have you...",
      better: "Of course, thanks for letting me know.",
    },
    {
      mistake: "Over-explaining why they should say yes",
      soundsLike:
        "It's your call, but everyone's going, and it'd mean a lot, and...",
      better: "You're very welcome, and it's completely fine either way.",
    },
    {
      mistake: "Inviting in public when private would be kinder",
      soundsLike: "So, are you coming or not? (in front of the group)",
      better:
        "A quiet message: no worries if it's not your thing, just wanted to ask directly.",
    },
    {
      mistake: "Offering an exit you don't actually mean",
      soundsLike: '"No pressure", then visible disappointment at the no',
      better: "Mean it: let the no sit without a reaction that punishes it.",
    },
  ],
  recoveryPhrases: [
    "I realise that may have sounded more loaded than I meant. It's genuinely optional.",
    "Let me take the pressure out of that, only if it suits.",
    "I don't want you to feel put on the spot. Passing is completely fine.",
    "Of course. Thanks for letting me know.",
    "No problem at all. I hope you get the quieter evening.",
    "All good, I'll move ahead without expecting anything from you.",
    "I've got a bit more authority here, so to be clear: this is optional, and there's no downside to saying no.",
    "I should have been clearer about the time. It's about forty minutes, so please feel free to pass.",
  ],
  bestRecoveryLine: "Let me take the pressure out of that, only if it suits.",
  chains: [
    {
      label: "Warm open",
      sequence:
        "TC036 Contextual opener → TC072 Low-pressure invitation → TC021 Autonomy release",
      example: [
        "Name the shared context.",
        "Invite lightly.",
        "Prove the option is real by releasing any pressure.",
      ],
    },
    {
      label: "Include and ease",
      sequence:
        "TC022 Status generosity → TC072 Low-pressure invitation → TC020 Low-friction ask",
      example: [
        "Recognise a real contribution.",
        "Invite optional input.",
        "Make the reply itself easy to give.",
      ],
    },
    {
      label: "Connect without assuming",
      sequence:
        "TC039 Common-ground discovery → TC054 Similarity signalling → TC072 Low-pressure invitation",
      example: [
        "Notice a genuine overlap.",
        "Name it modestly.",
        "Invite connection without assuming they want it.",
      ],
    },
    {
      label: "Re-enter and offer",
      sequence:
        "TC071 Conversation re-entry after interruption → TC072 Low-pressure invitation → TC041 Topic energy tracking",
      example: [
        "Return to the interrupted thread.",
        "Make continuing optional.",
        "Watch whether the energy actually rises.",
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC021",
      reason:
        "Autonomy release. Invitation opens the door before they engage. Autonomy release removes pressure after you've already made an ask or recommendation. Invite first, release after.",
    },
    {
      id: "TC020",
      reason:
        "Low-friction ask. Invitation is about optional entry. The low-friction ask is about shrinking the effort to answer a concrete request. If the next move is yes/no to an ask, use TC020.",
    },
    {
      id: "TC019",
      reason:
        "Small ask. Use invitation when willingness itself is uncertain. Use the small ask when they're already willing and the step just needs to be small. A small ask can still pressure.",
    },
    {
      id: "TC022",
      reason:
        "Status generosity. Invitation opens a door without making value a test. Status generosity names real competence or contribution. Warm invitations can look like praise. Keep them distinct.",
    },
    {
      id: "TC036",
      reason:
        "Contextual opener. The opener gives you the first line from a shared situation. The invitation adds the opt-in/opt-out once the conversation is going. Open with context, then invite.",
    },
    {
      id: "TC073",
      reason:
        "Resistance-as-information. Invite lightly before any pushback appears. Once resistance shows up, switch to treating it as useful information rather than re-inviting.",
    },
  ],
};
