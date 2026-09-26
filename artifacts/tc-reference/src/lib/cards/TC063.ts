import type { CardData } from "../card-types";

export const TC063: CardData = {
  pdfUrl: "cards/TC063/TC063_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet — the designed visual card.",
      href: "cards/TC063/TC063_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC063/TC063_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC063/TC063_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC063/TC063_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC063/TC063_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC063/TC063_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC063/TC063_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC063",
  whyItWorks:
    "Make them the expert is a status-giving rapport move: you notice that the other person has genuinely useful knowledge, experience, taste, lived context, or proximity to the facts, then you position them as the better source for that slice of the conversation and ask one narrow question that lets them teach from it. It works because it gives them a dignified, active role. Instead of competing for status, you lend it to them by making their perspective useful, and that builds warmth faster than praise because it is active: they are not merely being admired, they are being invited to contribute. People become more open once they feel their competence has actually been used, not just flattered.",
  whatItIsNot: [
    "It is not fake flattery - calling someone brilliant when you do not mean it.",
    "It is not ego bait: making someone feel important so they will comply.",
    "It is not free-consulting extraction, asking for a lot of unpaid labour under the cover of admiration.",
    "It is not weaponised humility, where you fake ignorance so the other person lowers their guard.",
    "It is not responsibility dumping: making the expert decide so you can avoid the accountability.",
  ],
  overview: {
    coreFormula: [
      "You have [real basis]. What [small, concrete question] should I check first?",
      "You know this better than I do - what should I notice first?",
      "You have worked with these customers. What usually matters most?",
      "I have a tentative view, but you are closer to it. What would you challenge in my read?",
      "You are closest to the facts. What should we not miss before we act?",
      'Respectful close: "That helps - I had not separated those two issues."',
    ],
    minimumViableMove:
      'Name one real domain where they have more context than you, then ask one small, answerable question: "You know this better than I do - what should I notice first?"',
    impact: "Medium",
    difficulty: "Medium",
    misuse:
      "The move fails when the expert frame is fake or vague, the question is too large, or the other person ends up feeling used and burdened rather than respected.",
    bestFor: [
      "Meeting someone with a clear domain, craft, role, or lived experience",
      "Asking a colleague for local context before forming a view",
      "Networking without sounding transactional",
      "Learning taste, standards, trade-offs, or practical judgement",
      "Letting a junior person contribute safely by naming their proximity to the work",
      "Cross-cultural or technical contexts where guessing would be disrespectful",
      "Softening disagreement by first learning their read",
    ],
  },
  notFor: [
    "Their expertise is not actually relevant here",
    "They are rushed, overloaded, or already on the hook for too much",
    "The question asks for too much unpaid labour",
    "They have already said they do not want to explain",
    "Their status is low and your question could expose them politically",
    "The topic is private, traumatic, confidential, or identity-loaded",
    "You already know the answer and are asking theatrically",
  ],
  phraseBank: [
    {
      id: "warm-social",
      label: "Social",
      tag: "Social & rapport",
      tone: "Warm",
      phrases: [
        "You know this world better than I do - what should I notice first?",
        "You have more reps with this than me. What is the part outsiders usually miss?",
        "I have not lived that, so I do not want to guess. How would you explain it?",
        "You have good taste in this area. What makes that one work?",
        "You have seen this from the inside. What is the real issue?",
        "You have been around this scene for years. Where would you start?",
        "You clearly care about this. What do most people get wrong about it?",
      ],
    },
    {
      id: "professional",
      label: "Professional",
      tag: "Work & meetings",
      tone: "Professional",
      phrases: [
        "You have been closer to this than I have. What would you look at first?",
        "You know this system better than me. What am I missing?",
        "You have the operator view here. What is the signal versus the noise?",
        "I trust your read on this domain. What should we be careful not to oversimplify?",
        "Before I form a view, I would like your take. What matters most here?",
        "You have the customer view here. What is the mood I may be missing?",
        "You have dealt with this kind of client before. What usually matters most?",
      ],
    },
    {
      id: "direct-narrow",
      label: "Narrow asks",
      tag: "Small, decision-owning asks",
      tone: "Direct",
      phrases: [
        "I will own the decision, but I need your read first. What is the strongest caution?",
        "What would you check before we decide?",
        "What is the one distinction beginners usually miss?",
        "I have a tentative view, but you are closer to it. What would you challenge in it?",
        "What is the risk I might be underweighting?",
        "You are closest to the handoff. What is the practical snag I may miss?",
        "What constraint should shape this decision?",
      ],
    },
    {
      id: "high-stakes",
      label: "High-pressure",
      tag: "Pressure & live calls",
      tone: "High-stakes",
      phrases: [
        "You are closest to the facts. What is the safest first read?",
        "I do not want to make this abstract. From your view, what matters now?",
        "You have the ground-level read. What should we not miss?",
        "I can make the call, but I need your expertise first. What is your recommendation?",
        "Before we move, what would you flag from your side?",
        "You are closest to the data. What should we not miss before we act?",
        "We have to choose soon. From where you sit, what is the biggest risk?",
      ],
    },
    {
      id: "quick",
      label: "Quick forms & digital",
      tag: "One-liners & messages",
      tone: "Quick",
      phrases: [
        "What am I missing?",
        "What would you check first?",
        "What do outsiders miss?",
        "What is the hidden constraint?",
        "What would you not oversimplify?",
        "You know this area better than I do - what is the simplest way to think about it?",
        "Can I sanity-check this with you? What would an informed person see that I might miss?",
      ],
    },
    {
      id: "credit",
      label: "Credit the insight",
      tag: "Closing the loop",
      tone: "Warm",
      phrases: [
        "That helps - I had not separated those two issues.",
        "Useful distinction. I was treating that as one problem.",
        "That changes how I would approach it.",
        "I had been looking at only one side of that.",
        "I will factor that in - thank you for the steer.",
        "That is the part I would have missed. Good catch.",
      ],
    },
    {
      id: "repair",
      label: "Recovery",
      tag: "Repair & easy exits",
      tone: "Repair",
      phrases: [
        "I may have put you on the spot. You do not have to answer that.",
        "Let me narrow that - I am only asking for the first thing you would check.",
        "I did not mean to outsource the work to you. I am trying to understand your read.",
        "That came out like flattery. I meant: you have useful context I do not have.",
        "We can skip that if it is not easy to answer right now.",
        "I will own the decision. I am asking for your read before I choose.",
        "Only if you are comfortable answering - otherwise I should do my own homework first.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "They have a real vantage point on this",
      action: "Name it lightly and ask one narrow question.",
      phrase: "You know this better than I do - what should I notice first?",
    },
    {
      condition: "You cannot name the expertise specifically",
      action:
        'Do not overclaim; hedge to "more context" rather than inventing a frame.',
      phrase:
        "You may have more context on this than I do. What stands out to you?",
    },
    {
      condition: "The question would take more than a minute to answer",
      action: "Narrow it before you ask.",
      phrase:
        "Let me make that smaller - what is one thing I should check first?",
    },
    {
      condition: "They respond with energy",
      action: "Listen, ask one follow-up, then credit the insight.",
      phrase: "That helps - I had not separated those two issues.",
    },
    {
      condition: "They look burdened, unsure, or put on the spot",
      action: "Give an easy exit and stop pushing.",
      phrase:
        "No pressure to answer that - I may be asking too much for this moment.",
    },
    {
      condition: "You are still responsible for the decision or the work",
      action: "Keep ownership; ask for their read, not their verdict.",
      phrase: "I will own the decision; I am asking for your read first.",
    },
  ],
  ladder: [
    {
      weak: '"You are the expert, so tell me what to do."',
      better: '"You know more about this than I do. What do you think?"',
      best: '"You have worked with this customer type for years. What would you check before we decide?"',
    },
    {
      weak: '"Wow, you are a genius at this."',
      better: '"You have good judgement here."',
      best: '"Your read on these trade-offs is usually sharp. What is the risk I might be underweighting?"',
    },
    {
      weak: '"Explain this whole field to me."',
      better: '"Can you explain the basics?"',
      best: '"What is the one distinction beginners usually miss?"',
    },
    {
      weak: '"I do not know, you decide."',
      better: '"You probably know the better path."',
      best: '"I will own the decision, but I need your subject-matter read first. What is the strongest caution?"',
    },
  ],
  scenarios: [
    {
      situation: "A new colleague knows the system",
      move: "Name their system history and ask what to grasp before you propose changes.",
      phrase:
        "You have the system history here. What should I understand before I suggest changes?",
    },
    {
      situation: "A friend has taste in a niche",
      move: "Credit their eye and ask what makes their pick work, rather than handing them the whole choice.",
      phrase:
        "You have a good eye for this. What makes that place better than the others?",
    },
    {
      situation: "A junior teammate is close to execution",
      move: "Name their proximity privately, in a way that does not expose them politically.",
      phrase:
        "You are closest to the handoff. What is the practical snag I may miss?",
    },
    {
      situation: "Cultural or identity context",
      move: "Offer an easy exit first and ask about assumptions - never as a spokesperson for a group.",
      phrase:
        "Only if you are comfortable answering: is there an assumption here I should avoid?",
    },
    {
      situation: "A technical expert in a meeting",
      move: "Ask for the constraint that should shape the decision, not a live solution to a vague problem.",
      phrase:
        "You have the technical read. What constraint should shape the decision?",
    },
    {
      situation: "Conflict with a specialist",
      move: "Concede you may be oversimplifying and invite their correction instead of defending your read.",
      phrase: "I may be oversimplifying. From your side, what am I missing?",
    },
  ],
  calibration: {
    working: [
      "They answer with more detail than the question required.",
      "Their face or tone warms after being asked.",
      "They correct a misconception without getting defensive.",
      "They add nuance, examples, exceptions, or practical cautions.",
      "They ask what you are trying to do - they are engaging with the problem.",
      "They offer a principle, not just a fact.",
    ],
    adjust: [
      "They answer but only briefly - narrow the question.",
      "They seem unsure whether you are flattering them - say plainly you want their read.",
      "They give a useful answer but look time-pressured - take it and let them go.",
      'They ask "What exactly do you need?" - make the ask smaller and concrete.',
      'They deflect with "not my area" or "hard to say" - stop and thank them.',
      "They look burdened, exposed, or put on the spot - give an exit.",
      "The topic touches identity, privacy, or confidential ground - do your own homework instead.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the real basis",
      task: "List five people you will speak with this week and name the one real slice of expertise, taste, or proximity each genuinely has. No inventing - if there is no real basis, leave it blank.",
    },
    {
      day: "Day 2",
      title: "Basis plus narrow question",
      task: 'Write five lines in the form "You have [basis]. What [small question]?" using different bases: experience, proximity, taste, technical knowledge, and local context.',
    },
    {
      day: "Day 3",
      title: "Shrink the ask",
      task: 'Take three broad questions (e.g. "Explain this whole market") and rewrite each as one narrow, answerable version (e.g. "What is the one assumption beginners get wrong?").',
    },
    {
      day: "Day 4",
      title: "Use it once for real",
      task: "In one real conversation, name a real basis and ask a single narrow question. Notice whether they opened up, stayed neutral, or pulled back.",
    },
    {
      day: "Day 5",
      title: "Credit the insight",
      task: 'Every time someone gives you a useful answer today, close the loop out loud: "That helps because...", "The useful distinction is...", or "I will factor that in by...".',
    },
    {
      day: "Day 6",
      title: "Recovery reps",
      task: 'Practise the exits until they sound plain: "I may have put you on the spot", "Let me narrow that", "I will own the decision", "You do not have to answer that."',
    },
    {
      day: "Day 7",
      title: "Full sequence under mild pressure",
      task: "Run Notice -> Name -> Narrow -> Listen -> Credit in one higher-stakes conversation, keeping the decision yours. Log the green, yellow, or red cue you saw.",
    },
  ],
  checklist: [
    "What real expertise, experience, taste, or proximity did I actually notice?",
    "Did I name it specifically, or fall back on vague flattery?",
    "Was my question small enough to answer in under a minute?",
    "Did I give an easy exit if the topic was sensitive or labour-heavy?",
    "Did I listen without grabbing the status back?",
    "Did I credit the useful part and keep the decision mine?",
  ],
  example: {
    without: [
      "Alex: The migration plan is going to affect the support team a lot.",
      "Jordan: You are the support expert, so just tell us what to do.",
      "Alex: That is a big question. I do not know if I can answer it like that.",
      "Why it fails: Jordan dumps responsibility, asks far too broadly, and turns expertise into a burden.",
    ],
    with: [
      "Alex: The migration plan is going to affect the support team a lot.",
      "Jordan: I have a tentative view, but you have the ground-level read. What would you challenge in this plan before I take it to the group?",
      "Alex: The timeline assumes customers read the email. Many will not. Support will become the announcement channel.",
      "Jordan: That is an important distinction - communication sent is not communication received. What would you add to reduce that load?",
      "Alex: A banner in-product and a support macro for the first three days.",
      "Jordan: Good. I will add both, and I will credit you for the support-risk read.",
      "Why it works: the frame is real, the question is narrow, Jordan keeps the decision, invites correction, and credits the contribution.",
    ],
    note: 'The mid-strength version works too: "You are closer to support than I am. What is the first thing we should check before we lock the plan?" - real basis, narrow ask, credit at the end.',
  },
  influencePayoff: {
    feeling: '"My competence was seen and put to use, not just admired."',
    principle:
      "People become more receptive when they feel their perspective has been genuinely used, not merely praised. Instead of competing for status, you lend it - which builds warmth faster than praise because it is active: they are invited to contribute, not just admired.",
    gains: [
      "Rapport and trust, because you are not pretending to know everything",
      "Perceived humility - you can defer without disappearing",
      "Better information, because experts correct your blind spots",
      "Conversational energy, because people enjoy explaining a domain they care about",
      "Cooperation, because the exchange starts with respect rather than demand",
      "A dignified, active role for the other person instead of a status contest",
    ],
    whyMostFail: [
      "The expert frame is fake or vague, so it reads as flattery.",
      "The ask is too broad, so it becomes unpaid labour.",
      "You grab the status back by topping or correcting their answer.",
      "You never credit the insight, so the question looks decorative.",
    ],
  },
  fieldTip: {
    headline: "Make the expert role smaller than the person.",
    body: '"You know this part better than I do" lands better than "you are the expert." Honour real knowledge; do not manufacture status. Ask small, listen fully, credit the useful distinction, and keep responsibility for your own choices.',
    example:
      "You have more context on this than I do - what should I check first?",
    dont: "You are the genius here. Tell me exactly what to do.",
    do: "You have seen this up close. What is the first thing I should check?",
  },
  method: [
    {
      step: "1",
      title: "Notice the expertise cue",
      body: "Listen for signs the other person has a genuinely useful vantage point: experience, proximity, taste, role knowledge, pattern recognition, cultural context, technical fluency, local history, or emotional reality. If there is no real basis, do not use this move.",
    },
    {
      step: "2",
      title: "Name the basis lightly",
      body: "Name the basis without exaggerating or worshipping. Keep it to the specific slice they genuinely know.",
      examples: [
        {
          label: "Proximity",
          text: "You have been closer to this than I have...",
        },
        {
          label: "System knowledge",
          text: "You know this system better than I do...",
        },
        { label: "Reps", text: "You have more reps with this than me..." },
        { label: "Customer view", text: "You have the customer view here..." },
      ],
    },
    {
      step: "3",
      title: "Ask a narrow question",
      body: "Make the question small enough to answer in under a minute. One narrow ask beats a request to teach the whole subject.",
      examples: [
        { label: "Check", text: "What would you check first?" },
        { label: "Blind spot", text: "What is the part outsiders miss?" },
        { label: "Caution", text: "What should I not oversimplify?" },
        { label: "Constraint", text: "What is the real constraint?" },
      ],
    },
    {
      step: "4",
      title: "Listen without grabbing the status back",
      body: "Do not immediately top them, correct them, or translate their answer into your own brilliance. Let the insight land before you respond.",
    },
    {
      step: "5",
      title: "Credit the useful part",
      body: "Close the loop so the question was not decorative. Name what their answer actually changed for you.",
      examples: [
        {
          label: "Separated issues",
          text: "That helps - I had not separated those two issues.",
        },
        {
          label: "One problem",
          text: "Useful distinction. I was treating that as one problem.",
        },
        {
          label: "Changed approach",
          text: "That changes how I would approach it.",
        },
      ],
    },
  ],
  liveThreadClues: [
    '"I have dealt with this before..."',
    '"When I was on that team..."',
    '"In my experience..."',
    '"The way it actually works is..."',
    '"I grew up around this..."',
    '"I have seen this pattern a lot..."',
    '"Technically, what happens is..."',
    '"On the ground it is more like..."',
  ],
  commonMistakes: [
    {
      mistake: "Vague worship",
      soundsLike: '"You are amazing at this."',
      better: '"You know the pricing history here. What did we try before?"',
    },
    {
      mistake: "Over-broad ask",
      soundsLike: '"Teach me everything about this."',
      better: '"What is the one thing I should check first?"',
    },
    {
      mistake: "Extraction disguised as respect",
      soundsLike: '"Could you write up your thinking on the whole strategy?"',
      better: '"One caution from your side would really help - what is it?"',
    },
    {
      mistake: "Status dump",
      soundsLike: '"You decide, you know best."',
      better: '"I will make the call - what should I not miss first?"',
    },
    {
      mistake: "Category trap",
      soundsLike: '"As someone from that background, what do you all think?"',
      better:
        '"Only if you are comfortable: is there an assumption I should avoid?"',
    },
    {
      mistake: "Immediate self-centering",
      soundsLike: '"Good point - anyway, that is what I already assumed."',
      better: '"That reframes it for me - I had it as one problem."',
    },
    {
      mistake: "No credit loop",
      soundsLike: "Taking the answer and moving straight on.",
      better: '"That helps because it changes what I check first."',
    },
  ],
  recoveryPhrases: [
    "That came out bigger than I meant. I just mean you have direct context I do not have.",
    "Let me say that more plainly: you have seen this up close. What should I not miss?",
    "Let me narrow it. What is the first thing you would check?",
    "I do not need the whole answer - one caution would help.",
    "No pressure to answer that. We can skip it.",
    "I may be asking for too much work. I will do the first pass and come back with a sharper question.",
    "I will own the decision. I am asking for your read before I choose.",
    "Only if you are comfortable answering - otherwise I should do my own homework first.",
  ],
  bestRecoveryLine:
    "I may have put you on the spot. You do not have to answer that.",
  chains: [
    {
      label: "Warm entry into expertise",
      sequence:
        "TC036 Contextual opener -> TC063 Make them the expert -> TC011 Summary check",
      example: [
        "Open from the present context.",
        "You have been closest to the rollout. What is one thing we should check first?",
        "So the concern is not launch day, it is week-one support load - did I get that right?",
      ],
    },
    {
      label: "Respectful disagreement",
      sequence:
        "TC005 Validation without agreement -> TC063 Make them the expert -> TC037 Double-sided reflection",
      example: [
        "I can see why that risk matters.",
        "You have seen the vendor side more than I have - what usually causes the delay?",
        "So on one side speed matters, and on the other the hidden dependency is approval time.",
      ],
    },
    {
      label: "Learning without extracting",
      sequence:
        "TC021 Autonomy release -> TC063 Make them the expert -> TC018 Specific appreciation",
      example: [
        "Only if it is easy to answer:",
        "you know this community better than I do. What is one assumption I should avoid?",
        "That distinction is useful - especially the point about not treating the group as uniform.",
      ],
    },
    {
      label: "Decision quality",
      sequence:
        "TC044 BLUF -> TC063 Make them the expert -> TC013 Clean request",
      example: [
        "We need to choose by Friday.",
        "You are closest to the data. What should we not miss?",
        "Could you send me the two metrics you would use?",
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC022",
      reason:
        "Both raise the other person's status; use TC063 when you are inviting their judgement through a specific expert question, and TC022 when you are simply crediting, deferring, or acknowledging contribution more broadly.",
    },
    {
      id: "TC039",
      reason:
        "Common-ground discovery narrows distance through similarity; TC063 narrows it by respecting useful difference. Use this when you need their distinct perspective, not shared overlap.",
    },
    {
      id: "TC054",
      reason:
        'Similarity signalling says "we have something in common"; expert-positioning says "you know something I should learn from." Use TC063 when respectful deference is the more honest move.',
    },
    {
      id: "TC018",
      reason:
        'Specific appreciation names something they did well; TC063 turns that into a concrete invitation to teach. If the next move is "that was strong," appreciate; if it is "how did you think about that," use this.',
    },
    {
      id: "TC067",
      reason:
        "Every expert-positioning move can contain an advice request, but not every advice request makes them the expert. Use TC063 when rapport and dignity matter as much as the answer; use TC067 when the ask is transactional.",
    },
    {
      id: "TC027",
      reason:
        'One asks to learn, the other asks permission to advise. If your next sentence starts with "Can I offer...", use TC027; if it starts with "You know this better...", use this package.',
    },
  ],
};
