import type { CardData } from "../card-types";

export const TC058: CardData = {
  pdfUrl: "cards/TC058/TC058_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet — the designed visual card.",
      href: "cards/TC058/TC058_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC058/TC058_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC058/TC058_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC058/TC058_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC058/TC058_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC058/TC058_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC058/TC058_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC058",
  whyItWorks:
    'Feeling-plus-need reflection pairs what someone seems to be feeling with the unmet need, value, or preference that may sit underneath it - said tentatively, so they can accept, adjust, or decline it. It works because people become clearer and less guarded when they feel that both their emotion and the practical need beneath it have been heard. It shifts a stuck exchange from "what happened" to "what mattered and what was needed" without forcing depth, and it keeps their autonomy intact because they remain the authority on their own experience.',
  whatItIsNot: [
    'It is not mind reading, diagnosing, therapising, or telling someone what they "really" feel.',
    "It is not a way to corner someone into disclosing more than they want to.",
    "It is not the full NVC / OFNR sequence - it is a single listening move that reflects feeling plus need and then hands the floor back.",
    "It is not a tool for making someone accept your interpretation or steering them toward your preferred outcome.",
  ],
  overview: {
    coreFormula: [
      "Cue -> feeling -> likely need -> tentative phrase -> pause -> follow or release.",
      'Basic: "It sounds like you are [feeling] because you needed [need]."',
      'Softer: "I might be reading this wrong, but part of the [feeling] is needing [need]."',
      'Professional: "The concern isn\'t the change itself, but needing clearer notice before decisions move."',
      'Digital: "Sounds frustrating - especially if what you needed was clearer timing upfront."',
      'Minimum: "It sounds frustrating because you needed clearer next steps."',
    ],
    minimumViableMove:
      'Name one feeling plus one likely need in a single tentative sentence, then pause and let them accept, adjust, or decline - e.g. "It sounds frustrating because you needed clearer next steps."',
    impact: "Medium",
    difficulty: "Medium",
    misuse:
      "The move fails when you overreach - stacking several needs, choosing a loaded or abstract need, or delivering it so confidently that the person feels analysed rather than heard.",
    bestFor: [
      "Someone sounds upset, disappointed, tense, relieved, or excited and the need beneath it is reasonably visible",
      "Facts alone are not explaining the emotional weight of the moment",
      "A complaint keeps repeating and the underlying need wants recognising before problem-solving",
      "Slowing a conflict without agreeing to inaccurate facts",
      "A professional conversation needs warmth without becoming sentimental",
      "Terse digital messages where a concise reflection reduces misread intent",
    ],
  },
  notFor: [
    "The person only wants direct information or a fast decision",
    "You have too little evidence to infer a need",
    "The wording would sound clinical, patronising, or too intimate for the relationship",
    "The person has asked you not to analyse them",
    "The moment needs action, safety, boundaries, or accountability first",
    "You are tempted to use the reflection to steer them toward your preferred outcome",
  ],
  phraseBank: [
    {
      id: "quick",
      label: "Quick",
      tag: "Short one-liners",
      tone: "Quick",
      phrases: [
        "It sounds frustrating because you needed clearer next steps.",
        "Sounds frustrating - especially if what you needed was clearer timing upfront.",
        "That sounds frustrating, especially if you needed more notice.",
        "Makes sense that this would feel tense if reliability was the need.",
        "Sounds like acknowledgement would help before solutions.",
        "That sounds disappointing - you wanted it to matter to them.",
        "I hear a need for a cleaner handoff. Is that close?",
        "Sounds like the need is more notice, not less work.",
      ],
    },
    {
      id: "social_personal",
      label: "Social / personal",
      tag: "Warmth and rapport",
      tone: "Warm",
      phrases: [
        "It sounds like you're disappointed because you wanted to feel included earlier.",
        "Maybe part of the frustration is needing your effort to be noticed.",
        "That sounds upsetting because you needed more honesty in the moment.",
        "It sounds like the hard part is needing reliability and not getting it.",
        "I may be off, but it sounds like you needed someone to check in rather than assume you were fine.",
        "That sounds disappointing because you wanted them to remember it mattered.",
        "Sounds like you needed to feel like a priority, not an afterthought.",
      ],
    },
    {
      id: "workplace",
      label: "Workplace / decision",
      tag: "Work and meetings",
      tone: "Professional",
      phrases: [
        "It sounds like the frustration is about needing clearer ownership before the deadline.",
        "The concern seems to be needing more notice, not resisting the change itself.",
        "It sounds like you needed a cleaner decision path before work started.",
        "Part of this seems to be needing confidence that your input will actually be used.",
        "It sounds like the pressure came from needing priorities to be explicit.",
        "It sounds like the need is earlier priority clarity, not less responsibility.",
        "The concern isn't the change itself, but needing clearer notice before decisions move.",
      ],
    },
    {
      id: "name_the_need",
      label: "Naming the need",
      tag: "Clear, direct reflections",
      tone: "Direct",
      phrases: [
        "It sounds like what mattered was needing respect for that boundary.",
        "It sounds like you needed the decision made before, not explained after.",
        "It sounds like the real need is being told early, not last.",
        "Sounds like the ask is simple - knowing what matters first.",
        "It sounds like you needed a say in how it happened, not just the outcome.",
        "I hear a need for a clear owner and a firm timeline.",
        "It sounds like you needed one clear next step before more options.",
      ],
    },
    {
      id: "conflict_repair",
      label: "Conflict / repair",
      tag: "De-escalation and repair",
      tone: "Repair",
      phrases: [
        "It sounds like you felt hurt because you needed your side to be taken seriously.",
        "Maybe the anger is partly about needing a fairer process.",
        "It sounds like the issue was needing a real apology, not just an explanation.",
        "I hear that you needed me to check before deciding.",
        "You're right - it sounds like you needed acknowledgement before explanation.",
        "I can see why that landed badly; it sounds like you needed to be heard first.",
        "Sounds like what stung was being added after the fact, not the change itself.",
      ],
    },
    {
      id: "high_pressure",
      label: "High-pressure",
      tag: "Pressure and urgency",
      tone: "High-stakes",
      phrases: [
        "It sounds like the immediate need is safety and clarity.",
        "It sounds like this needs action first, then we can unpack the rest.",
        "It sounds like you need one clear next step before anything else.",
        "I hear it - the priority right now is a decision, not a discussion.",
        "Sounds like what you need first is to know it's handled.",
        "I'll keep this practical: you need a clear owner and a timeline.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "No visible feeling cue",
      action:
        "Use plain reflective listening or a summary check instead of guessing a feeling.",
      phrase:
        "So the main point is the timeline slipped - have I got that right?",
    },
    {
      condition: "Feeling is clear but the need isn't",
      action:
        "Name only the feeling (emotional labelling); don't reach for a need you can't see.",
      phrase: "That sounds really frustrating.",
    },
    {
      condition: "Feeling and need both visible, context is safe",
      action: "Offer one tentative feeling-plus-need sentence, then pause.",
      phrase: "It sounds frustrating because you needed more notice.",
    },
    {
      condition: "Context is tense or too formal for the depth",
      action:
        "Keep it practical or validate the concern rather than naming the need.",
      phrase: "That's a fair thing to be annoyed about.",
    },
    {
      condition: "They accept, add, or correct",
      action:
        "Follow an accept or add; take a correction gracefully and adjust your reading.",
      phrase:
        "Fair - so it was less about the notice and more about being asked.",
    },
    {
      condition: "They withdraw, or the moment now needs action",
      action:
        "Release the move or switch to a clear next step or clean request.",
      phrase: "Let's make the owner and timing clear first.",
    },
  ],
  ladder: [
    {
      weak: "You're angry because you need attention.",
      better: "You sound angry because this mattered.",
      best: "It sounds frustrating because you needed your concern to be taken seriously.",
    },
    {
      weak: "You're clearly insecure about the change.",
      better: "The change feels unsettling.",
      best: "It sounds unsettling because you needed more clarity before things moved.",
    },
    {
      weak: "You just want control.",
      better: "You wanted more say in it.",
      best: "It sounds like you felt tense because you needed some choice in how it happened.",
    },
    {
      weak: "You're upset because nobody validated you.",
      better: "You wanted acknowledgement.",
      best: "It sounds hurtful because you needed the effort recognised before the next ask.",
    },
  ],
  scenarios: [
    {
      situation: "Casual conversation",
      move: "One short sentence in a normal tone; don't sound like a counsellor.",
      phrase:
        "That sounds disappointing because you wanted them to remember it mattered.",
    },
    {
      situation: "Workplace conversation",
      move: "Keep the need concrete - clarity, ownership, timing, priority - and skip psychological labels.",
      phrase:
        "It sounds frustrating because you needed clearer ownership before the deadline.",
    },
    {
      situation: "Conflict or repair",
      move: "Validate first if they feel dismissed, then name the need; don't use it in place of an apology.",
      phrase:
        "I can see why that landed badly. It sounds like you needed acknowledgement before explanation.",
    },
    {
      situation: "Digital message",
      move: "One sentence, no stacked prompts; add a release line so it can't misread as a verdict.",
      phrase:
        "Sounds frustrating, especially if what you needed was more notice before the decision. I may be reading that wrong.",
    },
    {
      situation: "High-pressure moment",
      move: "Prioritise safety, action, and clarity; don't force emotional processing.",
      phrase:
        "It sounds like you need one clear next step before anything else.",
    },
    {
      situation: "Coaching or mentoring",
      move: "Use it to clarify motivation, not to diagnose; ask before moving into advice.",
      phrase:
        "It sounds like the hesitation is partly needing more confidence before committing.",
    },
  ],
  calibration: {
    working: [
      'They say "yes", "exactly", or "that\'s it", or add detail.',
      "Their tone softens or becomes more specific.",
      "They correct the reflection but stay in the conversation.",
      "They move from a repeated complaint to a clearer need.",
      "They ask for help, next steps, or a cleaner summary.",
    ],
    adjust: [
      "They give a polite but flat answer, or it gets shorter.",
      "They change the subject or laugh awkwardly.",
      'They say "I guess" without energy.',
      "They tell you you're overthinking it.",
      "They become defensive, embarrassed, or irritated.",
      "They correct you sharply and don't continue.",
      "The moment now needs action, not reflection.",
      "Rule: if the cue isn't clearly green, don't intensify - make the wording simpler or release the move.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the cue",
      task: "Collect ten everyday complaint lines from your week, your texts, or things you overhear. For each, underline the single word or phrase carrying the feeling.",
    },
    {
      day: "Day 2",
      title: "Name the need",
      task: "For each of the ten lines, write one concrete need underneath - notice, clarity, respect, inclusion, reliability. Only pick needs the actual words support.",
    },
    {
      day: "Day 3",
      title: "Write the sentence",
      task: 'Turn five of them into one tentative sentence each: "It sounds like [feeling] because you needed [need]." Then cut each sentence by about a third.',
    },
    {
      day: "Day 4",
      title: "Evidence check",
      task: "For those five, mark your evidence for the feeling and for the need. Where the need is really a guess, downgrade to naming the feeling only (TC006 emotional labelling).",
    },
    {
      day: "Day 5",
      title: "Practise recovery",
      task: 'Say one reflection deliberately too strongly, then repair it out loud with "I may be reading that wrong," and offer a smaller version. Repeat until the recovery sounds relaxed.',
    },
    {
      day: "Day 6",
      title: "Compress for text",
      task: "Rewrite five reflections as one-sentence messages you'd actually send. Strip any therapy-sounding words and add a release line where a text might misread.",
    },
    {
      day: "Day 7",
      title: "Use one, then stop",
      task: "In a real conversation, offer exactly one feeling-plus-need reflection, pause, and stop. Note what signal came back and whether a simpler move would have been better.",
    },
  ],
  checklist: [
    "Did I have real evidence for both the feeling and the need?",
    "Did I phrase it tentatively and keep them the authority on their experience?",
    "Did I offer one need, not three, and avoid diagnosing?",
    "Did I stop after one move and pause long enough to calibrate?",
    "Did I take correction without defending my interpretation?",
    "Did I switch to action the moment action was what was needed?",
  ],
  example: {
    without: [
      "A: They changed the timeline again and told me after everyone else.",
      "B: You're angry because you need control. You should just tell them that.",
      "A: That's not what I said.",
      "Why it's weak:",
      'picks a loaded, over-confident need ("control")',
      "jumps straight to advice",
      "leaves the person feeling analysed, not heard",
    ],
    with: [
      "A: They changed the timeline again and told me after everyone else.",
      "B: It sounds frustrating because you needed enough notice to plan - and maybe to feel included, rather than added after the fact.",
      "A: Yes. The planning matters, but being added after the fact is the part that stung.",
      "B: So the practical need was notice, and the human need was inclusion.",
      "A: Exactly.",
      "Why it works:",
      "starts tentative and offers one feeling plus a plausible need",
      "allows correction and follows the thread they choose",
      "separates the practical need from the human one only after they open it",
      "no advice, no diagnosis, no steering",
    ],
    note: 'The simplest version often lands just as well: "That sounds frustrating. You needed more notice." Use the smallest reflection that\'s accurate.',
  },
  influencePayoff: {
    feeling:
      '"They heard what I was actually upset about, not just the surface complaint."',
    principle:
      "When people feel that both their emotion and the practical need beneath it have been heard, they usually become clearer and less guarded.",
    gains: [
      "Accuracy in what the other person is actually reacting to",
      "Trust, and lower defensiveness",
      "Less pressure to argue over the facts",
      "The person names the real need themselves",
      "Support that's more relevant, with fewer premature fixes",
      "A cleaner bridge to a request, repair, or next step",
    ],
    whyMostFail: [
      "They overreach, so the person feels analysed rather than heard.",
      "They stack several possible needs instead of offering one.",
      "They deliver it mechanically, reusing the same formula until it sounds like a script.",
      "They pick a need that flatters their own agenda.",
      "They ignore corrections or signs of discomfort and keep pressing.",
    ],
  },
  fieldTip: {
    headline: "Name one feeling plus one need, then stop.",
    body: "The best field version is: \"It sounds [feeling] because you needed [need]. I may be reading that wrong.\" Don't chase a perfect insight - the goal isn't to be impressive, it's to make the next response easier, safer, and more accurate. If the phrase wouldn't sound normal in your own voice, make it smaller.",
    example:
      "It sounds frustrating because you needed more warning - I may be reading that wrong.",
    dont: "Stack three needs, or deliver it so confidently it sounds like a diagnosis.",
    do: "Offer one feeling and one concrete need, tentatively, then pause.",
  },
  method: [
    {
      step: "1",
      title: "Perception",
      body: 'Notice the feeling cue before you name anything - tone, an intensity spike, hesitation, a repeated word, or a charged phrase like "again" or "after everyone else." You\'re looking for where the emotion actually sits, not just the facts being reported.',
      examples: [
        {
          label: "Cue",
          text: '"I was told at the last minute again." - the loaded words are "last minute" and "again."',
        },
      ],
    },
    {
      step: "2",
      title: "Need read",
      body: "Ask what need might sit under the feeling: clarity, respect, autonomy, safety, fairness, inclusion, rest, acknowledgement, choice, reliability, competence, privacy, support, or time. Pick the most concrete one the words support - a concrete need is safer than an abstract one.",
      examples: [
        {
          label: "Read",
          text: 'Under "told at the last minute" sits reliability, warning, and respect for time.',
        },
      ],
    },
    {
      step: "3",
      title: "Small phrase",
      body: "Pair the feeling and the one need in a single short sentence. Keep it ordinary. Don't stack three possible needs - one feeling plus one likely need is enough.",
    },
    {
      step: "4",
      title: "Tentative frame",
      body: 'Wrap it so they can decline: "sounds like," "maybe," "part of it might be," or "I may be reading this wrong." The frame is what keeps it a reflection rather than a verdict.',
    },
    {
      step: "5",
      title: "Pause",
      body: "Stop talking. The pause is the offer - it gives them room to accept, correct, or wave it away. Don't rescue the silence by adding a second need.",
    },
    {
      step: "6",
      title: "Follow or release",
      body: "Continue only if they open the thread; if they don't, release the move. If they correct you, take the correction and adjust - don't defend your reading.",
      examples: [
        {
          label: "Full move",
          text: '"It sounds frustrating because you needed more warning and a bit more respect for your time." (then pause)',
        },
      ],
    },
  ],
  liveThreadClues: [
    "again",
    "at the last minute",
    "after everyone else",
    "nobody told me",
    "I just wish...",
    "it would have been nice if...",
    "I don't even mind that, but...",
    "honestly...",
    "a repeated complaint said twice",
  ],
  depthDial: [
    {
      depth: "Minimal",
      useWhen: "Evidence is thin, or the relationship is new",
      phrase: "That sounds frustrating.",
    },
    {
      depth: "Tentative",
      useWhen: "The need is plausible but unconfirmed",
      phrase:
        "I might be reading this wrong, but part of it might be needing more notice.",
    },
    {
      depth: "Direct",
      useWhen: "The evidence is clear and there's enough trust",
      phrase: "It sounds frustrating because you needed more notice.",
    },
    {
      depth: "Two-layer",
      useWhen:
        "A practical and a human need are both present, and they've opened up",
      phrase:
        "So the practical need was notice, and the human need was being included.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Emotional language too intense for the evidence",
      soundsLike: "You're devastated because they betrayed you.",
      better: "That sounds like it really stung.",
    },
    {
      mistake: "Choosing an abstract need when a concrete one is safer",
      soundsLike: "You need to feel valued as a person.",
      better: "Sounds like you needed a heads-up before it changed.",
    },
    {
      mistake: 'Saying "you need" in a way that sounds accusatory',
      soundsLike: "You just need to be in control.",
      better: "It sounds like you needed some say in how it happened.",
    },
    {
      mistake: "Turning one reflection into a psychological theory",
      soundsLike:
        "This is really about your fear of being overlooked, isn't it?",
      better: "Sounds like being overlooked is the part that hurt.",
    },
    {
      mistake: "Reusing the same formula until it sounds mechanical",
      soundsLike:
        "It sounds like you feel X because you need Y. It sounds like you feel...",
      better:
        'Vary it - sometimes just name the need: "You needed more notice."',
    },
    {
      mistake: "Reflecting a need that flatters your agenda",
      soundsLike: "Sounds like you need me to make this call for you.",
      better:
        "It sounds like you need a clearer process - the rest is your call.",
    },
    {
      mistake: "Reflecting when the moment needs action or accountability",
      soundsLike: "It sounds like you're overwhelmed and need support.",
      better:
        "You're right - let me fix the practical part first, then we can talk.",
    },
  ],
  recoveryPhrases: [
    "I may have named the feeling wrong.",
    "Let me not put words in your mouth.",
    "Maybe frustrated isn't the right word - what fits better?",
    "I may have guessed the need wrong; ignore that if it doesn't fit.",
    "That sounded more formal than I meant. Let me say it plainly.",
    "I'm trying to understand, not analyse you.",
    "We can keep this practical - what would help most right now?",
    "You're right - the useful next step is action, not more reflection.",
  ],
  bestRecoveryLine: "I may be reading that wrong.",
  chains: [
    {
      label: "Listen then land",
      sequence:
        "TC004 Reflective listening -> TC058 Feeling-plus-need reflection -> TC029 Strategic silence",
      example: [
        '"The timeline changed after you\'d already planned around it."',
        '"That sounds frustrating because you needed more notice."',
        "(pause - let them correct or continue)",
      ],
    },
    {
      label: "Name then check",
      sequence:
        "TC006 Emotional labelling -> TC058 Feeling-plus-need reflection -> TC011 Summary check",
      example: [
        '"You seem really annoyed by this."',
        '"Sounds like the annoyance is about needing clearer ownership."',
        '"So the key issue is earlier notice and a clear owner - is that right?"',
      ],
    },
    {
      label: "Validate then release",
      sequence:
        "TC014 Validate the concern -> TC058 Feeling-plus-need reflection -> TC021 Autonomy release",
      example: [
        '"That\'s a fair thing to be frustrated about."',
        '"It sounds like you needed to be included before the decision."',
        '"How you handle it from here is your call."',
      ],
    },
    {
      label: "Listen then request",
      sequence:
        "TC053 NVC / OFNR -> TC058 Feeling-plus-need reflection -> TC013 Clean request",
      example: [
        '"When the plan changed without warning..."',
        '"...it sounds like what you needed was notice and respect for your time."',
        '"Could we agree to flag changes a day ahead?"',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC006",
      reason:
        "Names only the feeling. Use TC006 when evidence is thin and the need isn't clear; move to TC058 once a plausible need is visible.",
    },
    {
      id: "TC040",
      reason:
        "Reflects broader significance - identity, trust, what the event meant. Use TC040 for meaning; use TC058 for the practical or emotional need beneath the feeling.",
    },
    {
      id: "TC053",
      reason:
        "The full observation-feeling-need-request structure. Use TC053 to build a request or repair; TC058 is the listening half with no ask attached.",
    },
    {
      id: "TC037",
      reason:
        "For genuine ambivalence or two conflicting pulls. Use TC037 first when there are two sides; a single feeling-plus-need line can flatten mixed feelings.",
    },
    {
      id: "TC004",
      reason:
        "Plain content-and-feeling reflection. Use TC004 when basic reflection is enough; TC058 adds a need and can feel too intimate if TC004 would do.",
    },
    {
      id: "TC061",
      reason:
        "Reflects vocal tone, rhythm, or delivery. If content is thin but tone is loud, use TC061; use TC058 when the feeling and need are inferable from what's said.",
    },
  ],
};
