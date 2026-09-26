import type { CardData } from "../card-types";

export const TC099: CardData = {
  pdfUrl: "cards/TC099/TC099_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet — the designed visual card.",
      href: "cards/TC099/TC099_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC099/TC099_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC099/TC099_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC099/TC099_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC099/TC099_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC099/TC099_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC099/TC099_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC099",
  whyItWorks:
    'Humblebrag avoidance is the discipline of sharing good news cleanly instead of hiding it inside complaint, false modesty, embarrassment, or coded status signalling. It works because it removes the hidden ask: the listener no longer has to detect that your "problem" is actually praise, demand, or a quiet bid for admiration. A win named directly, with one honest feeling and proportionate context, lowers status threat, so people can celebrate you without feeling managed or tricked into admiring you.',
  whatItIsNot: [
    "It is not hiding every achievement or pretending success does not matter.",
    "It is not making yourself smaller so others feel comfortable, or apologising for good news.",
    'It is not forcing a "balanced" self-insult after every positive update.',
    "It is not turning every win into team credit when your own work genuinely mattered.",
    "It is not a ban on advocating for yourself in interviews, reviews, or a professional bio — the goal is to be clean, not invisible.",
  ],
  overview: {
    coreFormula: [
      "Permission or context + clean win + honest feeling + proportionate context + release.",
      "Can I share a win? I got the fellowship. I am really pleased because it was a long process.",
      "Good news: the launch landed well. I am proud of the team and relieved the preparation paid off.",
      "I got invited to speak at the conference. I am excited and a little nervous.",
      "The client renewed. I am glad the work created enough trust to continue.",
    ],
    minimumViableMove:
      "I have a win to share: [specific win]. I am pleased about it.",
    impact: "Low",
    difficulty: "Easy-Medium",
    misuse:
      "Indirect status extraction — making the listener supply admiration, reassurance, or envy because you would not name the achievement plainly. It also fails if you hijack someone else's moment, or deliver even the clean version so mechanically that the share becomes its own performance.",
    bestFor: [
      "Sharing good news with friends, colleagues, family, or an online audience",
      "Updating others on a promotion, award, acceptance, media mention, result, or growing demand",
      "Performance reviews, interviews, portfolios, bios, and introductions",
      "Moments where you feel tempted to soften a win with complaint or false modesty",
      "High-status achievements that could crowd the room if handled carelessly",
    ],
  },
  notFor: [
    "Someone else is currently sharing vulnerable news or their own win",
    "The win is irrelevant to the relationship or the situation",
    "The listener is distressed, hurried, or not really available",
    "You are using the share to punish, compare, recruit envy, or fish for reassurance",
    "The disclosure would breach confidentiality or someone else's privacy",
    "You cannot yet share the news without turning it into a status contest",
  ],
  phraseBank: [
    {
      id: "quick-openers",
      label: "Quick openers",
      tag: "Short win-share starters",
      tone: "Quick",
      phrases: [
        "I have a win to share: I got the offer.",
        "Good news: it went well.",
        "Can I share something good?",
        "I am proud of this one.",
        "Small win — I wanted to tell you directly.",
        "This meant a lot to me.",
        "I will keep it short: it landed well.",
        "Quick bit of good news, if you have a second.",
      ],
    },
    {
      id: "close-people",
      label: "With people close to you",
      tag: "Warm, simple disclosure",
      tone: "Warm",
      phrases: [
        "I wanted to tell you directly: I got accepted. I am really happy about it.",
        "There is good news in my week, and I wanted to share it with you.",
        "I am grateful, and still taking it in.",
        "It means a lot, and I wanted you to be one of the first to know.",
        "I am really pleased about this, and I wanted to share it with you specifically.",
        "This one mattered to me, so I wanted to say it out loud.",
      ],
    },
    {
      id: "work-updates",
      label: "Work and updates",
      tag: "Factual, credit-aware",
      tone: "Professional",
      phrases: [
        "The project landed well with the client. I am glad the work was useful.",
        "The presentation landed well, and people have asked for the deck.",
        "I am pleased with the recognition, and it reflects the group effort behind it.",
        "Good update: the article is out today. I am grateful to everyone who shaped it.",
        "I want to credit the team for the prep — it made the difference.",
        "The client renewed. I am glad the work created enough trust to continue.",
      ],
    },
    {
      id: "answering-advocating",
      label: "Answering and advocating",
      tag: "Direct answers, reviews, interviews",
      tone: "Direct",
      phrases: [
        "Yes, it went well. I am proud of the result, and I am still taking in what it means.",
        "The rollout reduced rework, and I learned that earlier stakeholder checks matter.",
        "I am proud of the work, and I can own it without inflating it.",
        "Here is the evidence, the impact, and what I would do differently.",
        "I am not fishing for reassurance; I just wanted to share the update plainly.",
        "I got the role. I am pleased, and I want to be clear about what I contributed.",
      ],
    },
    {
      id: "self-correction",
      label: "Cleaning it up mid-share",
      tag: "Softening and self-correction",
      tone: "Repair",
      phrases: [
        "That sounded more like a humblebrag than I intended. Cleaner version: I am happy about it.",
        "Let me say that without the cover: I got the opportunity, and I am grateful.",
        "I do not want to make you manage my modesty — I am just pleased about it.",
        "I framed that as a complaint, but it is genuinely good news.",
        "I will pause there; I do not need you to reassure me.",
      ],
    },
    {
      id: "returning-floor",
      label: "Returning the floor",
      tag: "Release and hand back",
      tone: "Warm",
      phrases: [
        "Thanks for letting me share that. What has been going well on your side?",
        "That is the short version — how has your week been?",
        "The credit is shared. I would love to hear how your project is going.",
        "No need to make a big thing of it; I just wanted to share the news.",
        "That is my update — enough about me. What is new with you?",
      ],
    },
    {
      id: "crowded-moment",
      label: "When the moment is crowded",
      tag: "Sharing near someone else's news",
      tone: "High-stakes",
      phrases: [
        "That is excellent — you worked hard for it. I have a related update too, but I want to hear your story first.",
        "I have some good news as well, though now is your moment, not mine.",
        "I will hold my news for later; today is about yours.",
        "If it is welcome, I have a small win too — but only if you have space for it.",
        "I do not want my update to crowd the room, so I will keep it brief.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "Is this actually good news or status-relevant information?",
      action:
        "If not, drop the frame and say the real issue plainly. If yes, continue.",
      phrase: "",
    },
    {
      condition: "Does this moment belong to someone else's news?",
      action:
        "If yes, celebrate theirs and wait — this is a no-one-upping moment. If no, continue.",
      phrase: "That is excellent. I want to hear your story first.",
    },
    {
      condition:
        "Am I tempted to frame the win as a complaint, embarrassment, or burden?",
      action: "Strip the cover and state the win directly.",
      phrase: "Cleaner version: I got the role, and I am pleased.",
    },
    {
      condition: "Is the listener available and in the right mode for this?",
      action:
        "If not, save it or shorten it to one line. If yes, share cleanly.",
      phrase: "I have a win to share: [win]. I am [feeling] because [context].",
    },
    {
      condition: "How is the listener responding?",
      action:
        "Engaged: add one concrete line. Thin response: thank them and move on. Discomfort: recover and return focus.",
      phrase: "Thanks — that is the short version. How about you?",
    },
    {
      condition: "Am I still waiting for admiration?",
      action:
        "If yes, stop expanding; if you need support, ask for it honestly and separately. If no, carry on normally.",
      phrase: "I am not fishing for reassurance; I just wanted to share it.",
    },
  ],
  ladder: [
    {
      weak: "Ugh, now I have to deal with all these congrats messages.",
      better:
        "I got promoted, which is good news, though the attention feels a bit odd.",
      best: "I got promoted. I am pleased and still adjusting to the attention. Thanks for letting me share it.",
    },
    {
      weak: "Apparently my presentation was amazing and now everyone wants the deck.",
      better:
        "The presentation landed well and people have asked for the deck.",
      best: "The presentation landed well. I am glad it helped, and I am sending the deck round for anyone who wants it.",
    },
    {
      weak: "I hate being too booked because people keep asking me to lead things.",
      better:
        "I have had more requests lately, which is flattering and hard to manage.",
      best: "I am getting more requests lately. I am grateful for the trust, and I need to be selective with my time.",
    },
    {
      weak: "So embarrassing, they put my award photo everywhere.",
      better:
        "They shared the award photo publicly, which feels exposed but also meaningful.",
      best: "The award photo is public now. I feel a bit exposed, but I am proud of the work behind it.",
    },
  ],
  scenarios: [
    {
      situation: "Friend catch-up",
      move: "Ask for room, state the win, add one line of meaning, then return the floor to them.",
      phrase:
        "Can I share a win? I got the grant. I am proud because it was a long process. What has been good on your side?",
    },
    {
      situation: "Team meeting",
      move: "Give the result, name the specific contribution, and credit accurately without erasing yourself.",
      phrase:
        "The client response was strong. I am pleased with the outcome, and the prep from Priya and Leo made the difference.",
    },
    {
      situation: "Networking post",
      move: 'Use direct good-news language with gratitude and context; skip the complaint cover and the word "humbled".',
      phrase:
        "Good news: the paper is live. I am grateful to the reviewers and collaborators who strengthened it.",
    },
    {
      situation: "After someone else's success",
      move: "Celebrate theirs first; add your related news only if it is clearly invited or relevant.",
      phrase:
        "That is excellent — you worked hard for it. I have a related update too, but I want to hear your story first.",
    },
    {
      situation: "Performance review",
      move: "State evidence, impact, and learning without apology or false modesty.",
      phrase:
        "The rollout reduced rework by 18 percent. I am proud of the result, and I learned that earlier stakeholder checks matter.",
    },
    {
      situation: "Family or old friends",
      move: "Use warm, simple disclosure and make no demand for admiration.",
      phrase:
        "I wanted to tell you directly: I got accepted. I am really happy about it.",
    },
  ],
  calibration: {
    working: [
      "They ask concrete follow-up questions about how it happened.",
      "They smile or offer natural congratulations.",
      "They link the news to your effort or the backstory.",
      "They volunteer related curiosity without looking cornered.",
      "The share feels like information, not a request for admiration.",
      "The sentence would still be fine if they had said nothing back.",
    ],
    adjust: [
      'They give a polite but thin response, or say "nice" without following up.',
      "They look away, check the time, or shift posture.",
      "They are hurried or in a different emotional mode — shorten to one line.",
      "The moment actually belongs to someone else's news — hand it back.",
      "Your share starts turning into comparison or superiority — stop and reset.",
      "You notice yourself waiting for praise — stop expanding, and ask for support honestly if you need it.",
      "The achievement intersects with something painful for them — pivot to them.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the cover",
      task: 'Write down five humblebrag-style sentences you have said or heard, e.g. "It is so annoying that everyone keeps asking for my advice." Underline the hidden win in each.',
    },
    {
      day: "Day 2",
      title: "Convert to clean",
      task: 'Rewrite each of yesterday\'s sentences as: "I have a win to share: [win]. I am [feeling] because [context]." Cut any comparison, superiority, or reassurance bait.',
    },
    {
      day: "Day 3",
      title: "One-breath share",
      task: "Take one real recent win and say it aloud in a single breath — event, feeling, one context line, stop. Notice the urge to keep justifying, and resist it.",
    },
    {
      day: "Day 4",
      title: "Add the release",
      task: 'Practise ending each clean share with a genuine return line, e.g. "That is the short version — how has your week been?" Keep it only if it feels real, not like a social tax.',
    },
    {
      day: "Day 5",
      title: "Recovery reps",
      task: 'Rehearse three repairs out loud, e.g. "That came out like a humblebrag — cleaner version: I am happy about it." Practise naming the miss once and then stopping.',
    },
    {
      day: "Day 6",
      title: "Read the room",
      task: 'For five situations (a concrete follow-up, a flat "nice", someone sharing their own news, a genuine question, you waiting for praise), decide in advance: continue, shorten, or stop.',
    },
    {
      day: "Day 7",
      title: "Share it for real",
      task: "In a real conversation, share one genuine win using win + feeling + one context line, then hand the floor back. Score it 0–5: concrete win, honest feeling, no complaint cover, no comparison, ending releases pressure.",
    },
  ],
  checklist: [
    "Did I state the achievement plainly, without hiding it in complaint, fake modesty, or embarrassment?",
    "Was the share proportionate to the relationship and the moment?",
    "Did I add only true credit and useful context — no comparison or superiority?",
    "Did I avoid making the listener reassure me or supply admiration?",
    "Did I stop after the clean share unless they invited more, and return focus genuinely?",
    "Would the sentence still feel respectful if the listener had not praised me back?",
  ],
  example: {
    without: [
      "Ari: How has your week been?",
      "Sam: Exhausting. The senior team keeps inviting me into strategy meetings now. I guess that is what happens when your project is the only one getting traction.",
      "Ari: Right.",
      "Sam: It is honestly annoying being trusted this much.",
      "Why it fails: Sam turns status into complaint, adds a comparison that lowers others, and leaves Ari to manage an implied request for admiration.",
    ],
    with: [
      "Ari: How has your week been?",
      "Sam: Can I share a win without making it weird?",
      "Ari: Yes.",
      "Sam: The project got senior-team attention, and I have been asked into the next strategy cycle. I am proud because the team worked hard on the evidence. I am also trying not to overfill my week.",
      "Ari: That sounds deserved.",
      "Sam: Thanks. The credit is definitely shared. I would like to hear about your launch too — how did the first week land?",
      "Why it works: Sam asks for room, shares cleanly, gives real credit, names one honest tension, and returns interest.",
    ],
    note: "The simpler 'better' version works too: \"My project got noticed by the senior team, so I have been invited into a few strategy meetings. I am pleased, and I am figuring out the time load.\" State the win, add one honest pressure point, release the floor.",
  },
  influencePayoff: {
    feeling:
      '"They told me something good and let me simply be glad for them — no decoding, no performance."',
    principle:
      "People find you easier to like, celebrate, and believe when your good news arrives as clean information rather than a hidden request for admiration.",
    gains: [
      "Reduced status threat — the listener never feels tricked into admiring you",
      "Clarity — your actual message is visible instead of coded",
      "Warmth — the share feels human rather than performative",
      "Credibility — you can own good work without inflation",
      "Protected relationships — people are not used as an audience for disguised self-praise",
      "Cleaner self-advocacy — you can name evidence, outcomes, and contribution without apology",
    ],
    whyMostFail: [
      "They disguise the win as a complaint or burden and wait for the listener to infer the status.",
      'They minimise the achievement as "nothing" while quietly expecting people to push back.',
      "They over-credit others to look humble while still centring their own standing.",
      "They deliver even the clean version mechanically, so the share becomes its own performance.",
    ],
  },
  fieldTip: {
    headline: "Do not smuggle a win in as a problem.",
    body: 'Say the win cleanly, then give the room back. If you feel the urge to add "it is no big deal", ask whether that phrase is real humility or a quiet request for reassurance. If it is reassurance, either ask for it honestly or leave it out.',
    example:
      "I have good news: [win]. I am [feeling]. Thanks for letting me share it.",
    dont: "So embarrassing, they put my success story everywhere.",
    do: "The story is public now. I feel a bit exposed, but I am proud of the work behind it.",
  },
  method: [
    {
      step: "1",
      title: "Catch the cover",
      body: 'Notice the sentence that opens with "ugh", "so embarrassing", "I hate that", "I guess", or "not a big deal" when the real content is a win. That opener is the tell that you are about to disguise good news.',
      examples: [
        {
          label: "Cover",
          text: "It is so annoying that everyone keeps asking me to speak.",
        },
        {
          label: "Underneath",
          text: "People want to hear from me — that is the actual news.",
        },
      ],
    },
    {
      step: "2",
      title: "Name the actual event",
      body: 'Say what happened in concrete terms — "I got the role", "the paper was accepted", "the client renewed". Concrete beats coded every time, and it spares the listener from guessing.',
    },
    {
      step: "3",
      title: "Add one honest feeling or meaning line",
      body: 'One sentence is enough: "I am pleased", "it means a lot", "I am proud of the work". More than one and you start justifying the win rather than sharing it.',
      examples: [
        {
          label: "Enough",
          text: "I am really pleased because it was a long process.",
        },
        {
          label: "Too much",
          text: "I mean, it was partly luck, and the timing, and honestly anyone could have…",
        },
      ],
    },
    {
      step: "4",
      title: "Add credit or context only if true",
      body: "Give real credit where it belongs, but do not launder your status through fake humility. If the win was mostly yours, it is fine to own it plainly.",
    },
    {
      step: "5",
      title: "Calibrate and release",
      body: "Watch the listener. If they engage, add one concrete line. If they flatten, or the moment is not yours to hold, thank them and hand the floor back. The discipline is proportion — one clean sentence usually lands better than a disguised five-sentence performance.",
      examples: [
        {
          label: "Pattern",
          text: "Can I share a win? [Event]. I am [honest feeling] because [one context line]. Thanks for letting me share that.",
        },
      ],
    },
  ],
  liveThreadClues: [
    "ugh…",
    "so embarrassing…",
    "I hate that…",
    "I guess it is nice, but…",
    "not a big deal, but…",
    "I do not even know why they picked me…",
    "it is so annoying that everyone keeps…",
    "apparently I…",
  ],
  commonMistakes: [
    {
      mistake: "Complaint camouflage",
      soundsLike: "It is so annoying that everyone keeps asking me to speak.",
      better:
        "I have been asked to speak a fair bit lately. I am pleased people want to hear it.",
    },
    {
      mistake: "Fake minimising",
      soundsLike: "The award is probably nothing, honestly.",
      better: "The award means a lot to me, and I wanted to share it.",
    },
    {
      mistake: "Comparison leak",
      soundsLike: "Apparently I was the only one who actually understood it.",
      better: "The work landed well, and I am proud of how it turned out.",
    },
    {
      mistake: "Credit laundering",
      soundsLike: "Oh, it was all the team, I did basically nothing.",
      better:
        "The team did real work on the prep, and I am proud of my part in it.",
    },
    {
      mistake: "Apology padding",
      soundsLike:
        "Sorry, I hate even bringing this up, it is so self-indulgent…",
      better: "I have some good news I wanted to share directly.",
    },
    {
      mistake: "Endless context",
      soundsLike:
        "…and to be fair it was partly luck, and the timing, and the team, and…",
      better: "I got the role. I am pleased. That is the short version.",
    },
    {
      mistake: "Audience mismatch",
      soundsLike:
        "Sharing a big promotion with someone who was just made redundant.",
      better:
        "Read the moment, hold the news, and choose a better time or listener.",
    },
  ],
  recoveryPhrases: [
    "That came out more self-congratulatory than I meant. Cleaner version: I am happy about it.",
    "I think I framed that as a complaint when it is really good news — the honest version is that I am pleased.",
    "I do not want to make you manage my modesty. I am proud of the result.",
    "Let me restate that without the weird cover: I got the opportunity, and I am grateful.",
    "I realise that sounded like I was fishing for reassurance. I do not need you to fix it — I just wanted to share.",
    "I may have taken too much space with that. I will pause there.",
    "That was not the right moment for my update. I want to come back to what you were saying.",
  ],
  bestRecoveryLine:
    "That came out more self-congratulatory than I meant. Cleaner version: I am happy about it.",
  chains: [
    {
      label: "Warm open, then share, then return",
      sequence: "Warm opening → Humblebrag avoidance → Return focus",
      example: [
        "Can I share a small win? I got accepted, and I am really happy about it.",
        "What has been happening on your side?",
      ],
    },
    {
      label: "Share, then credit specifically",
      sequence:
        "Humblebrag avoidance → Specific appreciation (TC018) → Status generosity (TC022)",
      example: [
        "The client response was strong, and I am pleased with it.",
        "Priya's prep on the evidence is what made it land.",
        "Honestly, she should present the next one.",
      ],
    },
    {
      label: "Their moment first, yours later",
      sequence: "No one-upping (TC007) → Humblebrag avoidance",
      example: [
        "That is a huge result — tell me how it happened.",
        "I have a related bit of good news too, if there is room for it later.",
      ],
    },
    {
      label: "Trim, then state it plainly",
      sequence: "No-overexplaining (TC008) → Humblebrag avoidance",
      example: [
        "Short version, no disclaimers:",
        "I got the role, and I am proud of the work that got me there.",
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC007",
      reason:
        "No one-upping discipline. Use TC099 to share your own win cleanly; use TC007 when someone else has the floor and you are tempted to top their story. Ask who holds the conversational spotlight right now.",
    },
    {
      id: "TC008",
      reason:
        "No-overexplaining discipline. Use TC099 when a win is buried under disclaimers and false modesty; use TC008 when the problem is simply volume rather than disguised status. Trim for volume, disclose cleanly for cover.",
    },
    {
      id: "TC009",
      reason:
        "Anti-boomerasking discipline. Use TC099 when you would state a win plainly; use TC009 when you catch yourself asking a question that only exists as a doorway to your own achievement.",
    },
    {
      id: "TC018",
      reason:
        "Specific appreciation. Use TC099 for clean self-disclosure; use TC018 when the main move is to name someone else's concrete contribution. Vague credit is where humility turns performative.",
    },
    {
      id: "TC022",
      reason:
        "Status generosity. Use TC099 when your own news could crowd the room; use TC022 when you want to actively lift another person's standing. After one clean share, shift to genuine credit or curiosity.",
    },
    {
      id: "TC091",
      reason:
        "Forced-humour restraint. Use TC099 when a win is hidden behind self-deprecation or an awkward joke; use TC091 when the pressure is comedy rather than status. If the joke exists to make them praise you, it is a humblebrag.",
    },
  ],
};
