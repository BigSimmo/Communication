import type { CardData } from "../card-types";

export const TC094: CardData = {
  pdfUrl: "cards/TC094/TC094_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet — the designed visual card.",
      href: "cards/TC094/TC094_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC094/TC094_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC094/TC094_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC094/TC094_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC094/TC094_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC094/TC094_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC094/TC094_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC094",
  whyItWorks:
    "A bounded request asks for one specific thing inside a visible limit — around scope, time, effort, decision range, or an exit condition — so the other person can size up the ask quickly and answer freely. The real move is not politeness; it is making the cost of the request legible before they have to reply. Most people do not resist helping. They resist undefined obligation. When the limit is clear, they can estimate the effort, protect their time, and say yes, no, or 'a smaller version' honestly.",
  whatItIsNot: [
    'A vague soft ask such as "Could you help with this sometime?"',
    "A pressure tactic disguised as a small ask.",
    "An apology for having needs.",
    "A negotiation script for getting someone to comply.",
    "A way to hide the full cost of a request behind a friendly-sounding limit.",
  ],
  overview: {
    coreFormula: [
      "Could you [specific action] within [scope / time / effort] by [when]? If not, [release or smaller alternative].",
      "Could you review just the final paragraph by noon? No full edit needed.",
      "Could you reply with a yes or no by tomorrow? No explanation needed.",
      "Could you decide A or B today? We do not need to reopen the whole plan.",
      "Could I have ten minutes tonight where you just listen, not solve?",
    ],
    minimumViableMove:
      "Ask for one specific action, add one honest boundary, and leave an honest no-or-adjust route.",
    impact: "Medium",
    difficulty: "Easy-Medium",
    misuse:
      "It fails when the boundary is fake — labelling a big job 'quick', shrinking a major request into a false small one, or saying 'no worries if not' while quietly punishing refusal — so the stated limit can no longer be trusted.",
    bestFor: [
      "Asking busy people for help, review, feedback, introductions, logistics, or small action",
      "Digital messages where open-ended asks create delay",
      "Workplace requests where scope creep is a real risk",
      "Relationship or family requests where obligation can feel loaded",
      "Requests where the person may want to help but needs the size clarified",
      "Asking someone with less power or availability, where pressure must be reduced",
    ],
  },
  notFor: [
    "The situation is urgent and a tidy boundary would hide the real seriousness",
    "The request affects safety, consent, medical or legal decisions, or employment rights",
    "The actual ask is large and should be discussed openly rather than shrunk",
    "The person has already said no",
    "The request needs collaboration to define the scope",
    "A yes/no is not enough because values, trade-offs, or decision rights must be worked out first",
  ],
  phraseBank: [
    {
      id: "quick-asks",
      label: "Quick asks",
      tag: "Short, message-length asks",
      tone: "Quick",
      phrases: [
        "One small ask: can you reply yes or no by tomorrow?",
        "Could you give this ten minutes, not a full review?",
        "Could you scan this for obvious errors only? Two minutes is enough.",
        "No need for a long reply — just the date that works?",
        "Could you look at just the first page? A quick yes or no is fine.",
        "Could you pick one of the two options below? If neither works, say 'neither'.",
        "Thirty-second gut check: does this read as clear or confusing?",
        "Just the headline answer is fine — the detail can wait.",
      ],
    },
    {
      id: "workplace-review",
      label: "Workplace & review",
      tag: "Work review, decisions, logistics",
      tone: "Professional",
      phrases: [
        "Could you review just the final paragraph by noon? No full edit needed.",
        "Could you sanity-check the budget line only? A rough reaction is enough.",
        "Could you review the recommendation section and flag anything factually wrong by 3pm? No line edits needed.",
        "Could you make the call on A versus B today? We do not need to reopen the whole plan.",
        "Could you send me the one file by Friday? If that timing is tight, tell me what is realistic.",
        "Could you approve the budget line only? The rest can go through the usual process.",
        "Could you give slides three to five a ten-minute factual check? Wording and design are handled.",
        "Could you flag blockers only? I do not need a full status update.",
        "Could I get a first reaction to the summary, not a line-by-line edit?",
      ],
    },
    {
      id: "delegation-ownership",
      label: "Delegation & ownership",
      tag: "Separating what you are and aren't asking for",
      tone: "Direct",
      phrases: [
        "Could you update the numbers on slides four to six? I will handle wording and design.",
        "Could you draft the intro only? I will write the rest.",
        "I am asking you to decide, not to build it — which direction do we take?",
        "Could you own the sign-in table from nine to nine-thirty? Nothing beyond that slot.",
        "Could you handle just the booking? I will sort the agenda.",
        "The ask is the one email, not the whole thread — could you send it today?",
        "Could you introduce me to one person who handles onboarding? Nothing more than the intro.",
      ],
    },
    {
      id: "relationship-home",
      label: "Relationship & home",
      tag: "Partner, family, friends, care asks",
      tone: "Warm",
      phrases: [
        "Could you help with just the dishes tonight? I am not asking you to handle the whole kitchen.",
        "Could I have ten minutes to talk this through? If you are not in that headspace, we can pause.",
        "Could you listen without fixing for a few minutes?",
        "Could you tell me one thing you need from me this week?",
        "Could we spend five minutes on the plan tonight? If you are done for the day, tomorrow is fine.",
        "Could I ask for one kind of help: just sit with me for a bit, no advice needed?",
        "Could you take the school run on Thursday only? The other days are covered.",
        "Ten minutes where you just listen, not solve — would that be okay tonight?",
        "Could you text me when you land? Nothing else, I just want to know you are safe.",
      ],
    },
    {
      id: "power-sensitive",
      label: "Power-sensitive & high-pressure",
      tag: "Optional, loaded, or low-power contexts",
      tone: "High-stakes",
      phrases: [
        "This may well be a no. Could you consider one small part — reviewing the timeline only?",
        "This is optional. Could you review one paragraph, or should I route it elsewhere?",
        "I am not asking for a decision now. Could you tell me what information you would need?",
        "Could we spend five minutes deciding the next step, not solving the whole issue?",
        "If the answer is no, I will respect it. The ask is one introduction, not the whole team.",
        "No pressure at all — could you look at the one page, or is this a bad week?",
        "You are well within your rights to pass. The bounded ask is just the sign-off, nothing more.",
      ],
    },
    {
      id: "release-exit",
      label: "Release & exit lines",
      tag: "Making refusal safe, withdrawing cleanly",
      tone: "Repair",
      phrases: [
        "A quick no is completely fine.",
        "No full explanation needed.",
        "Only if it is genuinely easy.",
        "If that is too much, what smaller version would work?",
        "If now is not the time, I can ask later or find another route.",
        "If tomorrow is too tight, a no is fine.",
        "If you are spent, we can leave it here.",
        "Say the word and I will take it off your plate.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "Do I actually need action from them?",
      action:
        "If no, use listening, reflection or information-sharing instead. If yes, continue.",
      phrase: "",
    },
    {
      condition: "Is the request already exact?",
      action: "If not, make a clean, unambiguous ask first, then bound it.",
      phrase: "Could you send the file — specifically the final version?",
    },
    {
      condition: "Could the ask feel open-ended?",
      action:
        "Add a boundary around scope, time, effort, decision range or exit.",
      phrase: "Just the first page, by Thursday — a quick yes or no is enough.",
    },
    {
      condition: "Is it still too large after bounding it?",
      action: "Switch to a genuinely small ask, or negotiate the scope openly.",
      phrase:
        "This is a big one, so a no is completely fine: could you take Saturday?",
    },
    {
      condition: "Is there pressure, power imbalance or emotional load?",
      action: "Add an autonomy release and check capacity before they answer.",
      phrase:
        "This is optional — could you look at one paragraph, or should I route it elsewhere?",
    },
    {
      condition: "How did they respond?",
      action:
        "Clear yes: confirm the boundary. Hesitation: narrow or offer a smaller version. No: thank them and do not re-argue.",
      phrase: "Thanks — I will keep the ask to just those three slides.",
    },
  ],
  ladder: [
    {
      weak: '"Can you help me with this?" — the action, effort and time cost are all undefined.',
      better:
        '"Can you look over this report by Friday?" — task and deadline are clearer, but the depth is still vague.',
      best: '"Could you review only the two-page summary by Friday and flag factual errors? No wording edit needed." — action, scope, deadline and effort are all explicit.',
    },
    {
      weak: '"Can we talk later?" — open-ended and potentially heavy.',
      better:
        '"Can we talk for a bit tonight?" — adds timing, but size and purpose are unclear.',
      best: '"Could I have ten minutes tonight to talk through one decision? I am not asking you to solve it." — bounded by time, topic and role.',
    },
    {
      weak: '"Can you do this for me?" — the cost is hidden, so it can trigger resistance.',
      better:
        '"Can you handle the slides?" — names the task but not the scope.',
      best: '"Could you update slides four to six with the new numbers only? I can handle design and wording." — separates requested from non-requested effort.',
    },
  ],
  scenarios: [
    {
      situation: "Feedback on a document",
      move: "Bound by section and type of feedback.",
      phrase:
        "Could you check only the intro for factual accuracy by Friday? No style edit needed.",
    },
    {
      situation: "Asking for emotional support",
      move: "Bound by time and role.",
      phrase: "Could I have ten minutes where you just listen, not solve?",
    },
    {
      situation: "Delegating work",
      move: "Bound by deliverable and ownership split.",
      phrase:
        "Could you update the numbers on slides four to six? I will handle wording and design.",
    },
    {
      situation: "Asking for a reply",
      move: "Bound by response format.",
      phrase:
        "Could you reply with a yes or no by tomorrow? No explanation needed.",
    },
    {
      situation: "Asking for an introduction",
      move: "Bound by number and discretion.",
      phrase:
        "Could you introduce me to one person who handles onboarding? If not, no issue.",
    },
    {
      situation: "Asking a tired partner",
      move: "Bound by time and give explicit permission to defer.",
      phrase:
        "Could we spend five minutes on the plan tonight? If you are done for the day, tomorrow is fine.",
    },
  ],
  calibration: {
    working: [
      "They answer quickly with a specific yes, no or maybe.",
      "They repeat the boundary back accurately.",
      "Their tone lightens after you narrow the request.",
      "They offer a smaller version themselves, without defensiveness.",
      "They stop asking clarifying questions.",
      "They commit to the exact slice you named, not more.",
    ],
    adjust: [
      'They ask "What exactly do you need?" — narrow one more dimension.',
      "They say they are busy but do not fully decline — offer a smaller version.",
      "They hesitate after hearing the request — tighten scope, time or effort.",
      "They agree but sound uncertain — check capacity and reconfirm the limit.",
      "They look cornered or obligated — release the ask, do not narrow again.",
      "They say yes with visible resentment — hand the choice back to them.",
      "They have already said no — thank them and stop; do not re-argue.",
      "The ask touches safety, consent or a power imbalance — drop the technique and talk openly.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "List your asks",
      task: "Write down five requests you actually made this week at work, home, or online — in the exact words you used.",
    },
    {
      day: "Day 2",
      title: "Find the hidden cost",
      task: "For each, name the cost the other person had to guess at: time, scope, effort, decision, or obligation.",
    },
    {
      day: "Day 3",
      title: "Add one boundary",
      task: "Rewrite each request with a single explicit limit — scope, time, effort, decision range, or deadline — and nothing more.",
    },
    {
      day: "Day 4",
      title: "Add an honest exit",
      task: 'Give each rewritten ask one release line you could genuinely honour, such as "a quick no is fine".',
    },
    {
      day: "Day 5",
      title: "Read aloud and trim",
      task: "Say each version out loud and cut every extra justification until only the action, the boundary, and the exit remain.",
    },
    {
      day: "Day 6",
      title: "Use one live",
      task: "Make one real bounded request today, then note whether they answered faster, asked fewer questions, or seemed more relaxed.",
    },
    {
      day: "Day 7",
      title: "Bound the big one",
      task: "Take a request you have been avoiding because it feels too big, and either bound it to one honest slice or decide to name it openly instead.",
    },
  ],
  checklist: [
    "Did I name the exact action, not just the topic?",
    "Is there a clear boundary around scope, time, effort, decision range, or exit?",
    "Is the boundary honest, rather than artificially small?",
    "Can they say no without being punished?",
    "Did I separate what I am asking for from what I am not?",
    "If they hesitate, do I know how I will narrow or withdraw the ask?",
  ],
  example: {
    without: [
      'A: "Can you look at this deck?"',
      'B: "Maybe. What do you need?"',
      'A: "Just whatever you think."',
      'B: "I am slammed."',
      "Why it fails: the ask is vague, so B has to defend against a potentially huge hidden task — and declining feels safer than agreeing to the unknown.",
    ],
    with: [
      'A: "Could you give slides three to five a ten-minute factual check by tomorrow noon? I do not need wording or design feedback. If tomorrow is too tight, a no is fine."',
      'B: "Yes, I can do a factual check. Send it over."',
      'A: "Thanks. I will keep the ask to those three slides."',
      "Why it works: the request names action, scope, effort, deadline and a real way out — then confirms the boundary after B accepts, so nothing quietly expands.",
    ],
    note: 'In a care context the same shape sounds like: "Could I have ten minutes tonight where you just listen and do not try to solve it? If you are too drained, tell me and I will journal first." Action, time, role, and an honest exit — nothing to guess at.',
  },
  influencePayoff: {
    feeling: '"I can see exactly what is being asked, and saying no is safe."',
    principle:
      "Many people do not resist helping; they resist undefined obligation. A clear limit lets them estimate effort, protect their time, and choose honestly.",
    gains: [
      "Fewer delayed replies",
      "Less defensive hesitation",
      "Cleaner yes / no / maybe answers",
      "Less resentment after agreement",
      "Easier renegotiation when the original ask is too large",
      "Stronger trust, because the ask respects autonomy and capacity",
    ],
    whyMostFail: [
      "They leave the ask open-ended, so the other person has to guess the size and braces for the worst.",
      "They fake the boundary — calling a big task 'quick' — and lose trust the moment it is discovered.",
      "They stack so many limits that the request becomes confusing.",
      "They keep justifying after the ask, which quietly reintroduces the pressure they just removed.",
    ],
  },
  fieldTip: {
    headline: "Make the cost visible before you ask for the yes.",
    body: "The most useful boundary is usually the one the other person would otherwise have to guess at. In practice that means adding a single sentence naming what you are not asking for, which turns an undefined obligation into a request someone can answer honestly.",
    example:
      '"I only need a factual check on the intro — not a wording or design pass."',
    dont: "Could you take a look at this when you get a chance?",
    do: "Could you fact-check just the intro by Friday? Nothing beyond that.",
  },
  method: [
    {
      step: "1",
      title: "Name the exact action",
      body: "Decide what you actually need the person to do — review, decide, listen, introduce, approve — not just the general topic. A topic makes them guess the job; an action tells them exactly what a yes commits to.",
      examples: [
        { label: "Topic (vague)", text: '"Can you have a look at this?"' },
        {
          label: "Action (bounded)",
          text: '"Can you flag any factual errors in the intro?"',
        },
      ],
    },
    {
      step: "2",
      title: "Choose the most useful boundary",
      body: "Limit the ask by whichever dimension the person would otherwise have to guess. Pick the one that removes the most uncertainty, not the most words.",
      examples: [
        {
          label: "Scope",
          text: '"just the intro", "only the numbers", "one example"',
        },
        {
          label: "Time",
          text: '"ten minutes", "by Friday", "not tonight if you are tired"',
        },
        {
          label: "Effort",
          text: '"gut check only", "no detailed edit", "first reaction is enough"',
        },
        { label: "Decision", text: '"A or B, not a full redesign"' },
        {
          label: "Exit",
          text: '"no worries if you cannot", "a no is completely fine"',
        },
      ],
    },
    {
      step: "3",
      title: "State the boundary before they infer it",
      body: 'Put the limit inside the ask, so they never have to reply "What exactly do you need?" Naming what you are not asking for is often clearer than naming what you are.',
    },
    {
      step: "4",
      title: "Add a release or alternative",
      body: 'Make it safe to say no, offer less, or redirect. The release only works if it is real — "no worries if not" must be true, or the whole ask reads as pressure with a smile.',
      examples: [
        { label: "Release", text: '"A quick no is completely fine."' },
        {
          label: "Alternative",
          text: '"If that slot is hard, I can ask someone else."',
        },
      ],
    },
    {
      step: "5",
      title: "Stop after the request",
      body: "Do not over-justify or pile on reasons. Extra explanation after a clean bounded ask erases the sense of freedom you just handed over.",
    },
    {
      step: "6",
      title: "Calibrate the response",
      body: "Watch whether they relax, clarify, or hesitate. If they hesitate, narrow one more dimension or withdraw the ask cleanly — never push a bounded request into a command.",
    },
  ],
  liveThreadClues: [
    'You wrote "help with" but never named the size',
    'The word "sometime" or "whenever" has crept in',
    '"Can we talk?" with no length or topic attached',
    'You feel the urge to add "sorry to bother you"',
    'Their likely first reply is "What exactly do you need?"',
    'You left the effort open with "whatever you think"',
  ],
  depthDial: [
    {
      depth: "Compact",
      useWhen: "a quick, low-stakes ask",
      phrase:
        "Could you look at just the first page by Thursday? A quick yes or no is enough.",
    },
    {
      depth: "Professional",
      useWhen: "work review or a decision",
      phrase:
        "Could you review the recommendation section only and flag anything factually wrong by 3pm? No line edits needed.",
    },
    {
      depth: "Social",
      useWhen: "a friend or partner",
      phrase:
        "Could you give me ten minutes on this tonight? If you are spent, we can leave it.",
    },
    {
      depth: "High-care",
      useWhen: "someone under real strain",
      phrase:
        "Could I ask for one specific kind of help: just sit with me for a few minutes, no advice needed?",
    },
  ],
  commonMistakes: [
    {
      mistake: "Adding a boundary that is not real",
      soundsLike: '"This will only take a minute" — when it plainly will not.',
      better: '"This is about a twenty-minute job. Is that doable this week?"',
    },
    {
      mistake: "Stacking too many limits",
      soundsLike:
        '"Just the intro, only facts, by three, but no rush, unless you would rather do the summary..."',
      better:
        '"Could you fact-check the intro by three? That is the whole ask."',
    },
    {
      mistake: "Release language while punishing refusal",
      soundsLike: '"No worries if not" — then sulking when they decline.',
      better: '"A no is genuinely fine" — and then meaning it.',
    },
    {
      mistake: "Shrinking a major request into a fake small ask",
      soundsLike: '"Tiny favour..." for something that will eat their weekend.',
      better:
        '"This is a big ask, so please say no if it does not work: could you cover the stall on Saturday?"',
    },
    {
      mistake: "Making the other person design the boundary",
      soundsLike: '"Just do whatever is easiest."',
      better:
        '"The easiest useful thing for me is your yes or no on option B."',
    },
    {
      mistake: "Overexplaining after the ask",
      soundsLike:
        '"...and I only ask because things have been mad and I hate bothering you and..."',
      better: "State the bounded ask, then stop talking.",
    },
    {
      mistake: "Forgetting the requested role",
      soundsLike: '"Have a look at this" — when you actually want a decision.',
      better: '"Could you decide yes or no on this? I am not after edits."',
    },
  ],
  recoveryPhrases: [
    "I made that sound bigger than I meant — the smaller ask is just the first paragraph.",
    "Actually, that may still be too much. Let me take it back and find another route.",
    "No pressure. I can see this is not a good time.",
    "I should have named the limit earlier: I am asking for a ten-minute gut check, not a full review.",
    "If you already know it is a no, that is completely okay.",
    "I hear the timing does not work. Would a smaller version help, or should I leave it?",
    "I do not want this to feel like an obligation. Let me reset the ask.",
    "Thanks for naming the limit. I will adjust the request rather than push.",
  ],
  bestRecoveryLine:
    "I hear the timing does not work. Would a smaller version help, or should I leave it?",
  chains: [
    {
      label: "Clean request -> Bounded request",
      sequence: "State the ask clearly, then add the cost boundary.",
      example: [
        '"Could you look over the proposal?"',
        '"...specifically just the pricing section, by Thursday — no wording notes needed."',
      ],
    },
    {
      label: "Bounded request -> Autonomy release",
      sequence: "Make the ask finite, then make refusal safe.",
      example: [
        '"Could you cover the front desk from nine to ten?"',
        '"If that slot is hard, genuinely just say so and I will find someone else."',
      ],
    },
    {
      label: "Small ask -> Bounded request",
      sequence: "Shrink the action, then define its scope.",
      example: [
        '"Could you glance at one thing for me?"',
        '"Just the opening paragraph — does the first line land or not?"',
      ],
    },
    {
      label: "Contextual opener -> Bounded request",
      sequence: "Briefly say why you are asking, then keep the ask bounded.",
      example: [
        '"You know this client better than anyone."',
        '"Could you give me two minutes on whether the tone is right? Nothing more than a gut read."',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC013",
      reason:
        "Clean request makes the action unambiguous; bounded request adds a visible limit around scope, time, effort or exit. If the ask is already clear but still feels large, bound it.",
    },
    {
      id: "TC019",
      reason:
        "Small ask genuinely shrinks the step; bounded request keeps the size but makes the limits legible. If the ask itself is too big, shrink it first, then bound it.",
    },
    {
      id: "TC020",
      reason:
        "Low-friction ask makes the response path easier (fewer clicks, simpler reply); bounded request makes the amount being asked clear. Use low-friction when they may not know what to do, bounded when they may not know how much.",
    },
    {
      id: "TC021",
      reason:
        "Autonomy release makes refusal safe and preserves choice; bounded request makes the ask finite. The two chain naturally — bound the ask, then release it.",
    },
    {
      id: "TC034",
      reason:
        "Two-option questions cut decision load to two concrete choices; bounded request limits the ask itself. Use two-option when the friction is choosing, bounded when the friction is hidden cost.",
    },
    {
      id: "TC095",
      reason:
        "DEAR MAN is a full assertive framework for higher-stakes requests with rights or repeated boundary issues; bounded request is the compact everyday version. Escalate to DEAR MAN when there is conflict.",
    },
  ],
};
