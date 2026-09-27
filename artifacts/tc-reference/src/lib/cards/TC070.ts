import type { CardData } from "../card-types";

export const TC070: CardData = {
  pdfUrl: "cards/TC070/TC070_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC070/TC070_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC070/TC070_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC070/TC070_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC070/TC070_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC070/TC070_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC070/TC070_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC070/TC070_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC070",
  whyItWorks:
    'Careful normalising makes a person\'s reaction feel understandable without making the problem smaller. You link their response to a specific context, pressure, history or need, then separate "understandable" from "acceptable". It works because people think and listen more clearly once they no longer have to defend the legitimacy of their own reaction: showing why a feeling makes sense removes unnecessary shame and isolation while leaving their autonomy, the accuracy of the situation, and the next step fully intact.',
  whatItIsNot: [
    'It is not minimising: "everyone deals with that" or "don\'t worry about it" are not careful normalising.',
    "It is not excusing harmful behaviour, bad process, disrespect, abuse, discrimination or avoidable pressure.",
    "It is not telling someone what they should feel or how quickly they should recover.",
    "It is not diagnosis, therapy language, performance empathy or a way to end the conversation quickly.",
    "It is not a substitute for safety action, accountability, repair, advice when it is asked for, or a concrete next step.",
  ],
  overview: {
    coreFormula: [
      "Long form: Given [specific context], it makes sense that [reaction] would show up. That doesn't mean [the problem] is okay. It means your response has a reason. What would help now?",
      "Short form: context → reaction → dignity → distinction → next step.",
      'Pocket formula: "Given X, Y makes sense. That doesn\'t make X okay."',
      "Safety line: use it to increase clarity, ease and respect, never to pressure, corner or talk someone out of a reasonable standard.",
    ],
    minimumViableMove:
      "Given [specific context], it makes sense that [reaction] would show up.",
    impact: "Medium",
    difficulty: "Medium",
    misuse:
      'It fails, and can even sting, when it slides into dismissal: normalising the problem instead of the reaction, so it lands as "don\'t make a fuss". Misuse is using normality to quiet someone, lower their standards, make poor treatment seem fine, or skip the practical support or accountability the moment actually needs.',
    bestFor: [
      'Someone says or implies "Maybe I\'m overreacting", "I should be over this", or "Is it weird that I feel this?"',
      "Shame, embarrassment, anxiety, self-blame or isolation after a difficult interaction.",
      "Work conversations where pressure, uncertainty or repeated changes have made a strong reaction understandable.",
      "Repair conversations where a person's reaction needs to be acknowledged as reasonable before you discuss next steps.",
      "Helping, coaching, friendship and leadership contexts where dignity matters as much as accuracy.",
    ],
  },
  notFor: [
    "There is an immediate safety risk and action is needed before reassurance.",
    "The person is asking for accountability, and normalising would sound like excusing the harm.",
    "You do not yet understand enough context to normalise responsibly.",
    "The person needs a direct answer, boundary or decision rather than emotional support.",
    "Normalising would pressure them to accept poor treatment, stay silent, or lower a reasonable standard.",
  ],
  phraseBank: [
    {
      id: "quick",
      label: "Quick one-liners",
      tag: "Short, in-the-moment",
      tone: "Quick",
      phrases: [
        "That makes sense in context.",
        "You're not wrong for feeling that.",
        "That reaction has a reason.",
        "Given the situation, that's understandable.",
        "Makes sense, given everything around it.",
        "You're not overreacting.",
        "That one has a reason behind it.",
      ],
    },
    {
      id: "social",
      label: "Social and personal",
      tag: "Friends, family, partner",
      tone: "Warm",
      phrases: [
        "Given how sudden that was, it makes sense you feel thrown.",
        "You're not strange for reacting strongly to something that touched that many nerves.",
        "That reaction has a reason. It doesn't mean the situation was okay.",
        "A lot of people would feel unsettled after that, especially with the history around it.",
        "Given how much had built up, it makes sense your body reacted. That doesn't make you weak.",
        "Given the history around that topic, it makes sense it lands with extra weight.",
      ],
    },
    {
      id: "professional",
      label: "Work and process",
      tag: "Team, meeting, leadership",
      tone: "Professional",
      phrases: [
        "Given the unclear handoff, it makes sense the team felt exposed.",
        "That concern is understandable in a process where expectations kept changing.",
        "A strong reaction here is not automatically overreaction. The conditions created real pressure.",
        "It makes sense that trust would be dented after repeated scope changes.",
        "Given the repeated changes, it makes sense people are frustrated.",
        "A strong reaction is understandable under that much ambiguity.",
      ],
    },
    {
      id: "digital",
      label: "Digital and text",
      tag: "Messages, email, chat",
      tone: "Professional",
      phrases: [
        "Given the timing, I can see why that message landed badly.",
        "That read as abrupt, so it makes sense it raised a flag.",
        'I don\'t mean "normal" as in fine. I mean your reaction makes sense in context.',
        "It makes sense this felt bigger than one message.",
        "I can see why that message felt abrupt. I don't mean to make that sound small.",
      ],
    },
    {
      id: "distinction",
      label: "Reaction, not the problem",
      tag: "Separate understandable from acceptable",
      tone: "Direct",
      phrases: [
        "That doesn't mean the situation was okay.",
        "Before we solve it, I want to say the reaction makes sense.",
        "The reaction is data that the process needs clarity.",
        "Let's separate the frustration from the next fix.",
        "We still need to decide what to change, and your reaction still makes sense.",
        "Your response has a reason, and the situation still needs attention.",
      ],
    },
    {
      id: "high-pressure",
      label: "High-pressure moments",
      tag: "Stakes, urgency, alarm",
      tone: "High-stakes",
      phrases: [
        "Given the stakes, it makes sense your body went straight to alert mode.",
        "That's a human response to pressure, not a character flaw.",
        "Given the timing and the impact, I can see why this feels serious.",
        "Under that much pressure, a strong reaction is understandable.",
      ],
    },
    {
      id: "recovery",
      label: "Recovery and repair",
      tag: "When it lands wrong",
      tone: "Repair",
      phrases: [
        "I don't mean to minimise it.",
        "Normal doesn't mean acceptable.",
        "Let me say that more carefully.",
        "I'm not saying you should just be fine with it.",
        'I don\'t mean "normal" as in acceptable. I mean your reaction makes sense.',
        "I'm not trying to shrink what happened.",
      ],
    },
  ],
  decisionTree: [
    {
      condition:
        'There is a shame or isolation cue, e.g. "maybe I\'m overreacting".',
      action: "Consider careful normalising rather than advice or a question.",
      phrase: "Given the context, that reaction makes sense.",
    },
    {
      condition: "You do not have enough specific context yet.",
      action:
        "Check before interpreting (TC064) first. Do not guess your way into a normaliser.",
      phrase: "Can I check I've got the picture right before I say anything?",
    },
    {
      condition: "Normalising could excuse harm or poor process.",
      action: "Explicitly separate the reaction from the problem.",
      phrase:
        "Your reaction makes sense. That doesn't make the behaviour okay.",
    },
    {
      condition: "They soften or elaborate.",
      action: "Continue with reflection, support or a next-step question.",
      phrase: "What would help right now?",
    },
    {
      condition: 'They push back, e.g. "don\'t minimise it".',
      action: "Recover, drop the frame, and ask what needs attention.",
      phrase: "I don't mean to shrink it. What part most needs attention?",
    },
    {
      condition: "They need action now.",
      action:
        "Stop reassuring and move to concrete support, boundary, repair or decision.",
      phrase: "Okay, let's decide what actually changes.",
    },
  ],
  ladder: [
    {
      weak: '"That\'s normal." Too generic. It can sound like dismissal or a cue to stop feeling it.',
      better:
        '"A lot of people would feel that way." Warmer, but still broad and not anchored to their situation.',
      best: '"Given how sudden the change was, it makes sense you feel thrown. That doesn\'t make the change okay. It just means your reaction has a reason." Specific, respectful, and careful not to normalise the problem.',
    },
    {
      weak: '"It\'s just how projects go." Normalises the churn itself, so it excuses the process.',
      better:
        '"A lot of teams get frustrated by changes." Kinder, but generic and unanchored.',
      best: '"Given the repeated scope changes, it makes sense trust took a hit. That doesn\'t make the churn acceptable. It means the reaction has a reason." Anchored, and it keeps the problem in view.',
    },
  ],
  scenarios: [
    {
      situation: "Friend embarrassed after crying.",
      move: "Normalise the build-up, not their strength. Then ask what support they want.",
      phrase:
        "Given how much had built up, it makes sense your body reacted. That doesn't make you weak.",
    },
    {
      situation: "Colleague angry after process churn.",
      move: "Treat the reaction as signal, then move toward ownership and next steps.",
      phrase:
        "Given the repeated changes, it makes sense people are frustrated. The reaction is data that the process needs clarity.",
    },
    {
      situation: "Customer reacting strongly to a service failure.",
      move: "Acknowledge why it feels serious, then separate the frustration from the fix.",
      phrase:
        "Given the timing and the impact, I can see why this feels serious. Let's separate that from the next fix.",
    },
    {
      situation: "Partner worried they are too sensitive.",
      move: "Anchor the reaction in shared history, then ask what would help.",
      phrase:
        "Given the history around that topic, it makes sense it lands with extra weight.",
    },
    {
      situation: "Leader debriefing team stress.",
      move: "Normalise the reaction under ambiguity while keeping the decision live.",
      phrase:
        "A strong reaction is understandable under that much ambiguity. We still need to decide what to change.",
    },
    {
      situation: "Digital repair after an abrupt message.",
      move: "Validate the misread, then clarify intent and repair the tone.",
      phrase:
        "I can see why that message felt abrupt. I don't mean to make that sound small.",
    },
  ],
  calibration: {
    working: [
      "They exhale, or their face relaxes.",
      'They elaborate or add context: "Exactly, it was the timing" or "It\'s the pattern, not this one thing."',
      "They stop defending whether their reaction is allowed.",
      'They say "yes", "that\'s it", or "that\'s what I mean."',
      "They move from justifying the feeling to talking about what to do next.",
    ],
    adjust: [
      '"I know, but..." They may need action, not more reassurance.',
      '"Don\'t minimise it" or "that\'s not the point". You\'ve normalised the problem, not the reaction. Recover.',
      '"It\'s not normal". Drop the frame and ask what they need.',
      '"I need something to change": shift to concrete support, boundary or decision.',
      "They go quiet or defend harder. You may have moved too fast. Check your read before saying more.",
      "The cue is anger about harm: normalise the reaction briefly, then move toward accountability.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the cue",
      task: 'Write five real statements that carry a shame or overreaction cue, such as "I shouldn\'t care this much" or "maybe I\'m being dramatic". Notice the exact words that signal self-doubt.',
    },
    {
      day: "Day 2",
      title: "Break down the context",
      task: "For each statement, name four things: the specific context, the reaction to normalise, the problem that must NOT be normalised, and a next-step question.",
    },
    {
      day: "Day 3",
      title: "Build the three-line ladder",
      task: 'For each situation write a weak, a better and a careful (best) normaliser using: "Given [context], [reaction] makes sense. That doesn\'t mean [problem] is okay."',
    },
    {
      day: "Day 4",
      title: "Cut the generic",
      task: "Read each careful line aloud and delete any phrase that could apply to anyone. Keep only what is anchored to the specific situation.",
    },
    {
      day: "Day 5",
      title: "Rehearse recovery",
      task: 'Practise the recovery lines aloud until they sound ordinary: "I don\'t mean \'normal\' as in acceptable", "let me say that more carefully", "I\'m not trying to shrink what happened."',
    },
    {
      day: "Day 6",
      title: "Field test the minimum move",
      task: "Use the minimum viable move once in a low-stakes conversation. Watch whether the person relaxes, corrects you, or elaborates.",
    },
    {
      day: "Day 7",
      title: "Review and calibrate",
      task: "Write down the cue you noticed, the phrase you used, the calibration cue you saw, and any recovery you needed. Name one thing to adjust next time.",
    },
  ],
  checklist: [
    "Did I normalise the reaction rather than the problem?",
    'Did I anchor the line in specific context, not a generic "that\'s normal"?',
    "Did I leave the person room to disagree with my read?",
    "Did I avoid excusing harm, bad behaviour or poor process?",
    "Did I leave space for practical next steps rather than stopping at reassurance?",
    "Did I stop after one or two lines instead of pushing the frame?",
  ],
  example: {
    without: [
      "Them: \"I don't know why I'm so upset about a roster change.\"",
      'You: "That\'s pretty normal."',
      'Them: "Yeah, I guess."',
      "Why it's weak:",
      "generic, the line could apply to anyone",
      "sounds like a cue to stop feeling it",
      "leaves them more alone, not less",
    ],
    with: [
      "Them: \"I don't know why I'm so upset about a roster change.\"",
      'You: "Given how last-minute it was, it makes sense you feel unsettled."',
      'Them: "Exactly, I couldn\'t plan around it."',
      "Advanced:",
      "Them: \"I don't know why I'm so upset about a roster change.\"",
      "You: \"Given that this is the third last-minute change, it makes sense this feels bigger than one roster. I'm not saying the change is fine. I'm saying your reaction has a reason.\"",
      'Them: "Yes. It\'s the pattern."',
      "Why this works:",
      "anchors the reaction in specific context",
      "separates understandable from acceptable",
      "names the pattern, so the feeling isn't reduced to one event",
      "leaves an opening to move to next steps",
    ],
    note: 'The word to normalise is the reaction ("upset"), never the roster process itself. Keep the problem in view even as you take the shame out of the feeling.',
  },
  influencePayoff: {
    feeling:
      "\"My reaction makes sense. I'm not broken, and I'm not overreacting.\"",
    principle:
      "People become more receptive and think more clearly once they no longer have to defend the legitimacy of their own reaction.",
    gains: [
      "Clearer thinking, because they aren't burning energy defending whether their reaction is allowed.",
      "Less shame and isolation.",
      "Reduced defensive pressure in the conversation.",
      "More trust, because you're not trying to shrink, pathologise or rush their experience.",
      "Easier advice, feedback and boundary-setting later, because they don't feel corrected before being understood.",
      "Dignity kept intact while accuracy and next steps stay firmly on the table.",
    ],
    whyMostFail: [
      "They normalise the problem instead of the reaction, so it sounds dismissive.",
      'They reach for a generic "that\'s normal" with no specific context.',
      "They deliver it mechanically, or use it to close the conversation down.",
      "They normalise before they understand the context, and misread the situation.",
    ],
  },
  fieldTip: {
    headline: "Normalise the reaction, not the problem.",
    body: 'The safest sentence separates the two: the feeling makes sense, and that does not make the situation okay. When in doubt, anchor to a specific detail from what they just told you rather than a generic "that\'s normal": the detail is what turns reassurance into being understood.',
    example:
      "Given the context, that reaction makes sense, and it doesn't make the situation okay.",
    dont: '"That\'s pretty normal." (generic, and it sounds like a cue to stop feeling it)',
    do: '"Given how last-minute it was, it makes sense you feel unsettled."',
  },
  method: [
    {
      step: "1",
      title: "Catch the shame cue",
      body: 'Listen for the words that signal self-doubt about the reaction itself: "silly", "dramatic", "too much", "I should be over this", "maybe it\'s just me". That cue, not the topic, is what tells you to normalise.',
      examples: [
        { label: "Cue", text: '"Maybe I\'m being dramatic."' },
        { label: "Cue", text: '"I should be over this by now."' },
      ],
    },
    {
      step: "2",
      title: "Name the specific context",
      body: "Use the actual pressure, timing, uncertainty, history, loss, expectation or constraint. The more specific the context, the less it sounds like a stock line.",
    },
    {
      step: "3",
      title: "Normalise the reaction, not the problem",
      body: "Say the response makes sense. Do not say the situation is fine. Keep the problem in view even as you take the shame out of the feeling.",
      examples: [
        {
          label: "Reaction (normalise)",
          text: '"It makes sense you feel thrown."',
        },
        {
          label: "Problem (don't)",
          text: 'not "the last-minute change is fine."',
        },
      ],
    },
    {
      step: "4",
      title: "Keep it tentative",
      body: 'Use "it makes sense" or "I can see why" rather than declaring what they must feel. You\'re offering a reading, not issuing a verdict.',
    },
    {
      step: "5",
      title: "Preserve autonomy",
      body: 'Leave room for correction: "tell me if I\'m reading that wrong." If they adjust your read, take it. The point is that they feel seen, not that you were right.',
    },
    {
      step: "6",
      title: "Reconnect to the next step",
      body: "Once the shame drops, move on. Ask what would help, whether they want support, or what they want to do with the information.",
      examples: [{ label: "Next step", text: '"What would help right now?"' }],
    },
  ],
  liveThreadClues: [
    '"Maybe I\'m overreacting."',
    '"I should be over this by now."',
    '"Is it weird that I feel this?"',
    '"It\'s silly, but..."',
    '"I shouldn\'t care this much."',
    '"Maybe it\'s just me."',
    '"I\'m probably being dramatic."',
    '"I\'m being too sensitive / too much."',
  ],
  commonMistakes: [
    {
      mistake: 'Using "normal" with no context.',
      soundsLike: '"That\'s pretty normal."',
      better:
        '"Given how last-minute it was, it makes sense you feel unsettled."',
    },
    {
      mistake: "Normalising the problem instead of the reaction.",
      soundsLike: '"Every workplace has churn like this."',
      better:
        '"The churn isn\'t fine, but it makes sense your trust took a hit."',
    },
    {
      mistake: "Rushing in before you've checked the facts.",
      soundsLike:
        "\"I'm sure it's understandable\", before you know what happened.",
      better: '"Can I check I\'ve got this right first?" then normalise.',
    },
    {
      mistake:
        'Reaching for "anyone would feel that" when they need their own situation seen.',
      soundsLike: '"Anyone would feel the same."',
      better: '"Given your history with this, it makes sense it lands harder."',
    },
    {
      mistake:
        "Using normalising to dodge accountability or a hard conversation.",
      soundsLike: "\"It's normal, let's not make a thing of it.\"",
      better: '"Your reaction makes sense, and I still owe you an apology."',
    },
    {
      mistake: "Over-interpreting the feeling.",
      soundsLike: '"Of course you\'re traumatised."',
      better:
        '"That sounds like it hit hard. Tell me if I\'m reading it wrong."',
    },
    {
      mistake: "Repeating the move after it's already landed.",
      soundsLike: '"Like I said, it\'s completely understandable..." (again)',
      better: '"So. What would help now?"',
    },
  ],
  recoveryPhrases: [
    'I don\'t mean "normal" as in acceptable. I mean your reaction makes sense.',
    "Let me say that more carefully. I'm not trying to shrink what happened.",
    "You're right, the situation itself isn't okay. I only meant your response has a reason.",
    "I may have moved too quickly into reassurance. What part most needs attention?",
    "I don't want to tell you how to feel. Does that framing fit, or am I off?",
    "Thanks for correcting me. This would land differently for anyone, and your version matters.",
    "I didn't mean to make that sound small.",
  ],
  bestRecoveryLine:
    'I don\'t mean "normal" as in acceptable. I mean your reaction makes sense in context.',
  chains: [
    {
      label: "Reflect, then normalise",
      sequence: "TC004 Reflective listening → TC070 Careful normalising",
      example: [
        '"So the part that stung was being told last, not the change itself."',
        '"Given that, it makes sense you feel sidelined, and that doesn\'t make the process okay."',
      ],
    },
    {
      label: "Name the feeling, then normalise",
      sequence: "TC006 Emotional labelling → TC070 Careful normalising",
      example: [
        '"You seem more hurt than annoyed."',
        '"Given the history there, that makes sense."',
      ],
    },
    {
      label: "Normalise, then ask before advising",
      sequence: "TC070 Careful normalising → TC027 Permission-based advice",
      example: [
        '"Given the pressure, it makes sense you\'re rattled."',
        '"Do you want a hand thinking it through, or just to get it off your chest?"',
      ],
    },
    {
      label: "Normalise, then move to repair",
      sequence: "TC070 Careful normalising → TC053 NVC / OFNR",
      example: [
        '"Your reaction has a reason."',
        '"When the plan changed with no heads-up, I felt blindsided, can we agree on some notice next time?"',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC005",
      reason:
        "Both feel supportive. TC070 says the reaction makes sense. TC005 says the concern is legitimate without agreeing with every claim. Use TC070 for self-doubt or shame, TC005 when they need their point recognised.",
    },
    {
      id: "TC006",
      reason:
        'Labelling names the feeling. Normalising explains why that feeling makes sense. If the missing piece is the name of the emotion, use TC006. If it\'s "that makes sense", use TC070.',
    },
    {
      id: "TC014",
      reason:
        'TC014 validates a concern, risk or objection. TC070 normalises the reaction to a situation. Concern first: TC014. Shame or "am I overreacting?" first: TC070.',
    },
    {
      id: "TC040",
      reason:
        'Meaning reflection deepens why an event matters. Careful normalising lowers shame about the reaction. "Why does this matter so much?" calls for TC040. "Am I wrong to feel this?" calls for TC070.',
    },
    {
      id: "TC064",
      reason:
        "Check before you normalise. When context is thin, use TC064 first and normalise only what's grounded, or you risk a confident misread.",
    },
    {
      id: "TC075",
      reason:
        "Both reduce shame. TC075 sees the effort or restraint they showed. TC070 sees the understandable reaction. If they're exhausted by what they did, use TC075. If they're worried about what they feel, use TC070.",
    },
  ],
};
