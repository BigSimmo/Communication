import type { CardData } from "../card-types";

export const TC079: CardData = {
  pdfUrl: "cards/TC079/TC079_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC079/TC079_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC079/TC079_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC079/TC079_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC079/TC079_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC079/TC079_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC079/TC079_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC079/TC079_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC079",
  whyItWorks:
    'Permission to disagree is asking for, or clearly signalling, a small conversational opening before you offer a different view. It works because it separates two things people usually fuse: the relationship signal and the content disagreement. The relationship signal says, "I am not attacking you". The content sentence says, "Here is the one part I see differently." Pausing before contradiction makes the disagreement opt-in and bounded, so the other person can stay engaged long enough to consider it instead of defending their identity.',
  whatItIsNot: [
    "Not permission as a ritual before you bulldoze. If they say no, slow down, defer, or ask what would help instead.",
    "Not false agreement: you acknowledge without surrendering your point.",
    'Not a polite disguise for contempt: "with all due respect" followed by a put-down is the opposite of this.',
    "Not required when urgent safety, compliance or harm prevention needs a direct intervention first.",
  ],
  overview: {
    coreFormula: [
      "Permission + bound the disagreement + state the different view + return choice.",
      "Can I offer a different read on [specific part]? I see [point] differently because [reason]. Does that land, or should I say it another way?",
      "Can I push back gently on one part? I think [specific point], not [overbroad claim].",
      "I agree with the goal. May I challenge one assumption? The risk I see is [specific risk].",
      "Can I say this from a different angle? I hear why it feels that way, and I see one piece differently.",
    ],
    minimumViableMove:
      'Ask for a small opening before you disagree ("Can I push back gently on one piece?") then keep your first difference to a single bounded sentence and hand the floor back.',
    impact: "Medium",
    difficulty: "Medium",
    misuse:
      "It fails when permission becomes a ritual before you bulldoze anyway: asking to disagree and then delivering a long monologue, hiding contempt inside polite wording, over-asking until you sound timid, or treating consent as a licence to win rather than to examine.",
    bestFor: [
      "Emotionally loaded topics",
      "Hierarchy or status gaps",
      "Interrupting groupthink",
      "Correcting a risky assumption",
      "Offering a different interpretation",
      "Disagreeing with a client, manager, family member or friend while keeping the connection",
    ],
  },
  notFor: [
    "Immediate action is needed for safety, compliance or harm prevention",
    "They have explicitly asked for a direct, blunt challenge",
    "The disagreement is trivial and not worth naming",
    "The permission line would land as sarcasm",
    "You are using it to soften a contemptuous message",
    "They have said they do not want to debate right now",
  ],
  phraseBank: [
    {
      id: "openers",
      label: "Low-pressure openers",
      tag: "Opening permission",
      tone: "Quick",
      phrases: [
        "Can I offer a different read on one part?",
        "Can I push back gently on one piece?",
        "Can I test another angle before we decide?",
        "Would it be useful to hear where I see it differently?",
        "Mind if I put a different view on the table?",
        "Can I flag one thing before we lock this?",
        "Room for a different take?",
        "Can I offer a different read?",
      ],
    },
    {
      id: "respect",
      label: "Respect before the counterpoint",
      tag: "Respect plus challenge",
      tone: "Warm",
      phrases: [
        "I agree with the goal. May I challenge one assumption?",
        "I respect the concern. The part I question is the inference.",
        "I think we're aligned on the outcome and split on the route.",
        "I'm with you on the aim, and I differ on the route.",
        "I hear why it feels that way, and I see one piece differently.",
        "Can I say this from a different angle, without dismissing how it felt?",
        "You may well be right. Can I still test one part of it?",
      ],
    },
    {
      id: "meetings",
      label: "Meetings and decisions",
      tag: "Work / client",
      tone: "Professional",
      phrases: [
        "I agree with the outcome. Can I challenge one assumption about the deadline?",
        "May I challenge one assumption before we commit?",
        "I think we're aligned on outcome, not yet on method.",
        "Can I name one risk before we sign this off?",
        "I support the direction. The piece I'd press on is the sequencing.",
        "Before we lock this, can I offer one counterpoint?",
      ],
    },
    {
      id: "bounded",
      label: "Name one bounded point",
      tag: "Bounded disagreement",
      tone: "Direct",
      phrases: [
        "The part I see differently is the timeline, not the goal.",
        "I'm disagreeing with the risk estimate, not with the need to act.",
        "I question the assumption underneath it, not the concern itself.",
        'The one thing I\'d push on is the word "doomed".',
        "I agree the schedule is risky. I differ on calling it doomed.",
        "My difference is narrow: it's the cause, not the experience.",
        "I see one part differently. Let me keep it to that.",
      ],
    },
    {
      id: "pressure",
      label: "Under pressure or on safety",
      tag: "High-pressure",
      tone: "High-stakes",
      phrases: [
        "I need to challenge one part so we don't miss a risk.",
        "I'm going to disagree with the timeline, not the intent.",
        "For safety, I need to be direct: I don't think that assumption holds.",
        "Can I flag a concern before we lock this in?",
        "I have to name one risk now, and then I'll step back.",
        "I'm not blocking the decision. I'm naming one thing we can't un-know.",
      ],
    },
    {
      id: "repair",
      label: "Recovery and repair",
      tag: "Tone repair",
      tone: "Repair",
      phrases: [
        "That came out sharper than I meant. Let me restate it.",
        "I'm not questioning your motives. I'm questioning this one inference.",
        "I'm not trying to erase your view, just to separate it from the part I see differently.",
        "I gave too much of my case at once. What part do you want to respond to?",
        "I pushed back too quickly. You had context I didn't have.",
        "No problem. We can leave that for now.",
        "Let me say the disagreement more cleanly.",
        "The relationship matters more to me than winning this point.",
      ],
    },
    {
      id: "digital",
      label: "Digital / async threads",
      tag: "Async",
      tone: "Professional",
      phrases: [
        "Different read, if helpful: I think the risk is scope, not demand.",
        "One possible counterpoint: the evidence may support a narrower claim.",
        "I may be missing context, but I see one risk differently.",
        "Can I flag a concern before we lock this?",
        "Quick counterpoint, take it or leave it: I'd sequence this the other way.",
        "Happy to be wrong here: one thing gives me pause.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "There is an immediate safety or harm risk",
      action: "Be direct first. Repair the tone afterwards if needed.",
      phrase: "For safety, I need to be direct: that assumption doesn't hold.",
    },
    {
      condition: "They are emotionally activated",
      action: "Validate or summarise before you disagree.",
      phrase:
        "I get why that worries you. Can I offer a different read on the cause?",
    },
    {
      condition: "The disagreement is not important",
      action: "Let it pass, or ask a curious question instead of pushing.",
      phrase: "What made you land on that?",
    },
    {
      condition: "You do not have the conversational floor",
      action: "Ask for a small opening before offering the counterpoint.",
      phrase: "Can I offer a different read?",
    },
    {
      condition: "You have the floor and one clear point",
      action: "State a single bounded difference and hand the floor back.",
      phrase: "I see one part differently: the timeline, not the goal.",
    },
    {
      condition: "It did not land",
      action: "Recover, validate, or stop. Do not push harder.",
      phrase: "That came out sharper than I meant. Let me restate it.",
    },
  ],
  ladder: [
    {
      weak: '"No, that\'s wrong."',
      better: '"I see it differently."',
      best: '"Can I offer a different read on the risk? I think the issue is timing, not commitment."',
    },
    {
      weak: '"With all due respect, this makes no sense."',
      better: '"I disagree with the plan."',
      best: '"I respect the goal. May I challenge one assumption before we decide?"',
    },
    {
      weak: '"You\'re overreacting."',
      better: '"I\'m not sure I agree."',
      best: '"Can I say how it looks from my side? I hear the concern, and I think the intent may be less hostile than it sounded."',
    },
    {
      weak: '"That\'s not true."',
      better: '"I think there\'s another interpretation."',
      best: '"Can I separate two pieces? The experience is real. The cause may be different."',
    },
  ],
  scenarios: [
    {
      situation: "Workplace planning",
      move: "Agree with the outcome, then challenge a single assumption and ask what would reduce the risk.",
      phrase:
        "I agree with the outcome. Can I challenge one assumption about the deadline?",
    },
    {
      situation: "Disagreeing with a manager",
      move: "Ask for a read before the decision, then reframe from motive to structure.",
      phrase:
        "Can I offer a different read before we decide? I think the issue isn't motivation. It's unclear ownership.",
    },
    {
      situation: "Client conversation",
      move: "Ask to push on one point and name the real blocker instead of the assumed one.",
      phrase:
        "May I push back on one point? I don't think more features solve adoption. I think onboarding is the blocker.",
    },
    {
      situation: "Friendship",
      move: "Ask for another angle and offer a gentler interpretation of the same facts.",
      phrase:
        "Can I say this from another angle? I hear it felt dismissive, and I don't think they meant it as a rejection.",
    },
    {
      situation: "Family conflict",
      move: "Name that you do not want a fight, make one point, then stop.",
      phrase:
        "I don't want to argue. Can I name the one part I see differently and then stop?",
    },
    {
      situation: "Digital thread",
      move: "Flag a bounded counterpoint without escalating the whole thread.",
      phrase:
        "Different read, if useful: I think the risk is scope creep, not lack of commitment.",
    },
  ],
  calibration: {
    working: [
      'They say yes, or ask "What do you mean?"',
      "They lean into the content rather than into defending themselves.",
      "They slow down and actually weigh it.",
      "They acknowledge the distinction you drew.",
      "They offer a counterargument without attacking you.",
      "Their tone relaxes and the debate stays about ideas.",
    ],
    adjust: [
      "They get quieter or give clipped answers.",
      "They look away or repeat the same point.",
      'They say "I do not want to argue": switch to validation, a summary check, or a low-pressure invitation.',
      "They explicitly decline: leave it for now and respect the no.",
      "The exchange is escalating, or you feel contempt rising in yourself: pause.",
      "Power dynamics make continued challenge unsafe: stop and choose another moment.",
      "On a thread: no reply, a terse delayed reply, or a reaction-only response, slow down before adding another point.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the risk",
      task: 'Notice three recent moments where a blunt "I disagree" would have started a fight. For each, write down what the real risk was: status, defensiveness, shame, or derailment.',
    },
    {
      day: "Day 2",
      title: "Blunt to bounded",
      task: 'Take three blunt lines ("No, that is wrong", "You are overreacting", "This plan makes no sense") and rewrite each as permission + one bounded point + a return of choice.',
    },
    {
      day: "Day 3",
      title: "Bank your openers",
      task: "Choose three permission openers you would genuinely say and say each aloud until it sounds like you, not a script. Cut any that sound sarcastic or timid.",
    },
    {
      day: "Day 4",
      title: "One-sentence challenge",
      task: 'In one low-stakes conversation, use "Can I push back gently on one piece?" and keep the disagreement to a single sentence. Then stop and listen.',
    },
    {
      day: "Day 5",
      title: "Calibration log",
      task: "After using the move, mark the other person's first response as continue, adjust, or stop, and write the one thing you would do next in each case.",
    },
    {
      day: "Day 6",
      title: "Recovery reps",
      task: 'Rehearse "That came out sharper than I meant. Let me restate it as one specific concern" until it sounds natural rather than scripted.',
    },
    {
      day: "Day 7",
      title: "Chain it",
      task: "In a real disagreement, pair the move with one neighbour (validate first, or ask what would make it workable after) and notice whether the channel stayed open.",
    },
  ],
  checklist: [
    "Did I ask or signal permission before disagreeing when the relational risk was real?",
    "Did I keep the disagreement to one specific point?",
    "Did I preserve their dignity, motive and agency?",
    'Did I avoid sarcasm, contempt and "polite" hostility?',
    "Did I read whether they were open, hesitant or closed, and adjust?",
    "Did I recover quickly if my tone landed badly, or switch technique if permission was not the real move?",
  ],
  example: {
    without: [
      'A: "This launch is doomed."',
      "B: \"No it's not. You're being negative.\"",
      'A: "I\'m being realistic."',
      'B: "You always do this."',
      "Why it's weak:",
      "attacks the person, not the claim",
      'meets a global word ("doomed") with another global word ("negative")',
      "turns a content gap into a fight about character",
      "gives A no opening to actually reconsider",
    ],
    with: [
      'A: "This launch is doomed."',
      'B: "Can I push back gently on one piece?"',
      'A: "Okay."',
      'B: "I agree the schedule is risky. The part I see differently is the word doomed. The useful question is what scope we cut to make it viable."',
      'A: "That\'s fair."',
      "Why it works:",
      "asks for a small opening first, so the disagreement is opt-in",
      "keeps the agreement and the disagreement both explicit",
      "bounds the difference to one word and one question",
      "redirects from blame to a workable next step",
    ],
    note: 'Personal version: A: "You did not care about what I said." B: "Can I say how it looked from my side without dismissing how it felt? I did care, and I can see my silence sent a different signal."',
  },
  influencePayoff: {
    feeling: '"They are disagreeing with my idea, not with me."',
    principle:
      "The payoff is not that people automatically accept your view. It is that they can stay engaged long enough to consider it. Lowering threat and preserving face lets someone take in a correction without having to defend their identity.",
    gains: [
      "Disagreement is heard as contribution, not attack",
      "Lower threat and defensiveness",
      "Preserved face and status",
      "The channel stays open for correction",
      "Trust holds where influence depends on it: leadership, coaching, negotiation, family topics",
      "They stay in the conversation long enough to weigh your view",
    ],
    whyMostFail: [
      "They ask permission, then deliver a long monologue instead of one point.",
      "They hide contempt inside polite wording.",
      "They over-ask until they sound timid or performative.",
      "They treat permission as a licence to win rather than to examine.",
    ],
  },
  fieldTip: {
    headline: "Ask permission for the doorway, not for your integrity.",
    body: "You can stay completely honest and still make the disagreement easier to hear. The permission opens a door. It does not surrender your point. Use it when both the relationship and the point matter. If only one of the two matters, choose a lighter move.",
    example: 'Pocket phrase: "Can I offer a different read on one part?"',
    dont: '"With all due respect, this makes no sense." A permission wrapper around contempt.',
    do: '"I respect the goal. May I challenge one assumption before we decide?"',
  },
  method: [
    {
      step: "1",
      title: "Perception: notice the risk",
      body: 'Before you contradict, read whether a flat "I disagree" would trigger status threat, defensiveness, shame, or derailment. The louder the stakes and the more public the room, the more the move earns its place.',
      examples: [
        {
          label: "Cue",
          text: "They just committed to a position in front of others.",
        },
        {
          label: "Cue",
          text: 'The claim is global: "doomed", "always", "makes no sense".',
        },
      ],
    },
    {
      step: "2",
      title: "Move: ask for a small opening",
      body: "Use one sentence to make the disagreement opt-in. Keep it genuine, not a ritual. If they say no, you slow down rather than bulldoze.",
      examples: [
        { label: "Say", text: '"Can I offer a different read on one part?"' },
        { label: "Warm", text: '"Can I push back gently on one piece?"' },
      ],
    },
    {
      step: "3",
      title: "Phrase: bound one point",
      body: "State a single, specific difference. Name what you agree with, then the one thing you see differently: the assumption, the inference, the timeline, the risk estimate, not the person.",
      examples: [
        {
          label: "Bounded",
          text: '"The part I see differently is the timeline, not the goal."',
        },
      ],
    },
    {
      step: "4",
      title: "Calibration: read the response",
      body: "Watch for permission, openness, hesitation, withdrawal, irritation or curiosity. Continue only while there is enough conversational consent. If they close, switch to validation or a low-pressure invitation.",
    },
    {
      step: "5",
      title: "Recovery: own the impact",
      body: "If it lands badly, repair the tone quickly and separate the idea from the person.",
      examples: [
        {
          label: "Repair",
          text: '"That came out sharper than I meant. I\'m trying to separate the idea from you."',
        },
      ],
    },
    {
      step: "6",
      title: "Chain: add structure if needed",
      body: "Pair with validation, autonomy release, a clean request, or SBI when the disagreement needs evidence, choice or a concrete next action.",
    },
  ],
  liveThreadClues: [
    "A higher-status person has just committed to a position",
    "The topic is emotionally loaded or the room is public",
    "They are doubling down or repeating the same point",
    'You feel the urge to say a flat "no" or "that\'s wrong"',
    'The claim is global: "doomed", "always", "never", "makes no sense"',
    'Identity language creeps in: "you don\'t care", "you never listen"',
  ],
  commonMistakes: [
    {
      mistake: "Asking, then monologuing",
      soundsLike:
        '"Can I push back? So, first... and another thing... and also..."',
      better:
        '"Can I push back on one piece? I think it\'s timing, not commitment."',
    },
    {
      mistake: "Contempt in polite wording",
      soundsLike: '"With all due respect, this makes no sense."',
      better: '"I respect the goal. May I challenge one assumption?"',
    },
    {
      mistake: "Over-asking until you sound timid",
      soundsLike:
        '"Sorry, is it maybe okay if I possibly disagree a tiny bit?"',
      better: '"I see one part differently."',
    },
    {
      mistake: "Treating permission as a licence to win",
      soundsLike: "\"You said I could disagree, so here's why you're wrong.\"",
      better: '"Can I test one assumption? I might be missing something."',
    },
    {
      mistake: "Disagreeing with identity, not content",
      soundsLike: '"You always overreact."',
      better: '"I question this one inference, not you."',
    },
    {
      mistake: "Softening when directness is required",
      soundsLike:
        '"Can I offer a different read?" while a real risk is unfolding',
      better:
        '"For safety, I need to be direct: that assumption doesn\'t hold."',
    },
  ],
  recoveryPhrases: [
    "That came out sharper than I meant. Let me restate it as one specific concern.",
    "I'm not trying to erase your view. I want to separate the part I agree with from the part I see differently.",
    "I gave too much of my case at once. What part do you want to respond to?",
    "No problem. We can leave that for now.",
    "I pushed back too quickly. You had context I didn't have.",
    "I want to pause. The relationship matters more than winning this point.",
    "I'm not questioning your motives. I'm questioning this one inference.",
  ],
  bestRecoveryLine:
    "That came out sharper than I meant. Let me restate it as one specific concern.",
  chains: [
    {
      label: "Validate, then differ",
      sequence: "Validation without agreement → Permission to disagree",
      example: [
        '"I get why that worries you."',
        '"Can I offer a different read on the cause?"',
      ],
    },
    {
      label: "Permission, then evidence",
      sequence: "Permission to disagree → SBI",
      example: [
        '"May I challenge one part?"',
        '"In yesterday\'s meeting, when the decision changed after the deadline, the impact was rework for the whole team."',
      ],
    },
    {
      label: "Differ, then release",
      sequence: "Permission to disagree → Autonomy release",
      example: [
        '"I see it differently."',
        '"But you don\'t have to take my view as final."',
      ],
    },
    {
      label: "Differ, then move to workable",
      sequence: "Permission to disagree → Ask what would make it workable",
      example: [
        '"I see the current plan differently."',
        '"What would make a smaller version workable?"',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC077",
      reason:
        "Agreement before disagreement: use that when you should explicitly name the overlap before the contrast. Use this when the key risk is whether disagreement itself is welcome.",
    },
    {
      id: "TC005",
      reason:
        "Validation without agreement: use that to acknowledge their feeling or concern without endorsing the conclusion. Use this when you need to put a different conclusion on the table.",
    },
    {
      id: "TC027",
      reason:
        "Permission-based advice: use that for consent to give suggestions. Use this for consent to challenge or differ.",
    },
    {
      id: "TC021",
      reason:
        "Autonomy release: use that when they need choice and no pressure after a request. Use this when they need dignity before a counterpoint.",
    },
    {
      id: "TC052",
      reason:
        "SBI: use that when feedback needs situation-behaviour-impact evidence. Use this when the first barrier is permission to disagree, not feedback structure.",
    },
    {
      id: "TC083",
      reason:
        "Ask what would make it workable: use that to turn a rejected plan into a smaller workable one, chain it after this once the difference is on the table.",
    },
  ],
};
