import type { CardData } from "../card-types";

export const TC061: CardData = {
  pdfUrl: "cards/TC061/TC061_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC061/TC061_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC061/TC061_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC061/TC061_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC061/TC061_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC061/TC061_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC061/TC061_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC061/TC061_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC061",
  whyItWorks:
    "Tone reflection names the emotional colour or stance carried inside someone's message (guarded hope, quiet disappointment, relief, irritation, pride, caution, strain) and then checks it gently, as a possible read rather than a verdict. It works because it mirrors how something is being held emotionally, not just the facts, so the other person feels you have heard the human signal inside the content. Because the read is tentative and correctable, they stay free to say \"No, it's more like...\", which surfaces misunderstandings early and softens hard conversations before the content is debated.",
  whatItIsNot: [
    "It is not mind-reading, therapy, diagnosis, or a licence to label someone.",
    'It is not a verdict: "You\'re angry" is too certain and simply invites denial.',
    'It is not analysis: "Clearly you have trust issues" is a diagnosis, not a reflection.',
    'It is not an accusation dressed as listening, like "You\'re just being defensive."',
    "It is not a way to intensify drama or push someone into disclosure.",
  ],
  overview: {
    coreFormula: [
      "Notice the tone signal, name it softly, attach it to the topic, check the read, follow the correction.",
      '"I might be hearing [tone] around [topic]. Is that close?"',
      "\"I could be wrong, but there's a [tone] quality in how you're talking about [topic]. Am I reading that fairly?\"",
      '"There\'s a tired quality in how you talk about the launch, like you got it done, but it took more out of you than people realised. Is that close?"',
      'Reflect the signal, not the identity: "I\'m hearing some caution around this," not "You\'re a cautious person."',
    ],
    minimumViableMove:
      "I might be hearing a bit of [tone] in that. Is that right?",
    impact: "Medium",
    difficulty: "Medium",
    misuse:
      'It fails when you say the tone as a fixed verdict, reach for a loaded word like "bitter" or "passive-aggressive", or use the read as leverage to pressure, corner, or extract rather than to understand.',
    bestFor: [
      "The words are neutral but the tone carries strain, disappointment, worry, pride, relief, or guardedness.",
      'Someone says "It\'s fine," but it does not sound fine.',
      "The conversation is turning factual while the emotional signal is being missed.",
      "Someone seems to want recognition before problem-solving.",
      "You need to check whether your interpretation is landing.",
      "Coaching, leadership, friendship, customer support, feedback, conflict repair, and debriefs.",
    ],
  },
  notFor: [
    "The person has clearly asked not to discuss feelings or tone.",
    "You are too irritated to be generous.",
    "Safety, legal, medical, or compliance facts must be handled first.",
    "A public setting would embarrass the person.",
    "You would use the tone read as leverage.",
    "You are tempted to say it as a fixed judgement.",
  ],
  phraseBank: [
    {
      id: "soft-openers",
      label: "Soft openers & checks",
      tag: "Tentative frames",
      tone: "Quick",
      phrases: [
        "I might be hearing something underneath the words there.",
        "There seems to be a bit more in that.",
        "It sounds like this has a particular quality to it.",
        "I could be wrong, but the tone feels different from the words.",
        "I'm hearing this as more one thing than another. Can I check?",
        "Is that close, or would you put it differently?",
        "Am I reading that right?",
        "What word fits better for you?",
      ],
    },
    {
      id: "social",
      label: "Social / personal",
      tag: "Friends and family",
      tone: "Warm",
      phrases: [
        "That sounds quietly disappointing, not dramatic exactly.",
        "There's a bit of relief in that, but maybe not full ease yet.",
        "I'm hearing some guarded hope there.",
        "That sounds like it stung more than you expected.",
        "There's a quiet pride in that, maybe mixed with relief. Am I hearing that right?",
        "That sounds more tired than upset. Is that closer?",
        "It sounds like you're pleased, but bracing for the catch.",
        "That sounds like it mattered more than you're letting on.",
      ],
    },
    {
      id: "professional",
      label: "Work & meetings",
      tag: "Professional",
      tone: "Professional",
      phrases: [
        "I'm hearing some caution around the timeline.",
        "That sounds like a measured yes, not an enthusiastic one.",
        "There's a practical concern in your tone, not just resistance.",
        "I'm hearing some fatigue behind the update.",
        "This sounds like cautious agreement rather than full buy-in, am I reading it right?",
        "I'm hearing a reluctant yes. I don't want to treat that as full agreement if there's a concern underneath.",
        "That sounds like risk concern around implementation, not opposition.",
        "The tone I'm getting is interested, but not yet convinced. Correct?",
      ],
    },
    {
      id: "digital",
      label: "Digital / written",
      tag: "Text and email",
      tone: "Direct",
      phrases: [
        "Reading this back, I may be picking up frustration. Is that accurate?",
        "The tone I'm hearing in your message is tense. Am I reading it right?",
        "This reads as cautious agreement rather than full buy-in. Fair?",
        "I want to check I'm not misreading the tone here.",
        "Is this a firm no, or a not-yet?",
        "Tell me if I've read the tone of this wrong.",
        "I'd rather ask than assume the tone. Which is closer?",
        "Short version: are we frustrated, or just clarifying?",
      ],
    },
    {
      id: "high-pressure",
      label: "High-pressure & conflict",
      tag: "Tense moments",
      tone: "High-stakes",
      phrases: [
        "Before we decide, I want to check the tone: are you worried, frustrated, or mainly needing clarity?",
        "I'm hearing urgency, but not panic. Is that the right read?",
        "This sounds tense and important. I don't want to rush past that.",
        "I might be hearing that this landed as dismissive. If that's right, I want to understand it before I respond.",
        "The tone I hear isn't just upset. It's wanting reassurance this will be taken seriously.",
        "I'm hearing frustration around how it was handled, not just the decision itself.",
        "This sounds hard to feel optimistic about right now.",
        "I don't want to treat a reluctant yes as a clean yes. What's the hesitation?",
      ],
    },
    {
      id: "recovery",
      label: "When your read misses",
      tag: "Recovery & exit",
      tone: "Repair",
      phrases: [
        "Thanks for correcting me. What word fits better?",
        "Got it, I over-read that. Let's stay with what you actually meant.",
        "That was my interpretation, not your statement. Let me reset.",
        "I don't want to put a feeling on you. How would you describe it?",
        "That word was too strong. Something like caution or frustration might be closer. Which is it?",
        "We can keep this practical if naming the tone isn't useful.",
        "I didn't mean to spotlight you. Let me step back.",
        "We can stay practical if that's better. I just didn't want to miss the tone.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "There is a tonal signal beyond the literal words",
      action:
        "If there is none, use plain reflective listening or a practical response. If there is, continue.",
      phrase: "",
    },
    {
      condition: "The setting is private and safe enough to name tone",
      action: "If not, stay with content or raise it privately later.",
      phrase: "",
    },
    {
      condition: "You can name the tone softly, without judgement",
      action: "If not, use a broader frame instead of a specific word.",
      phrase: "I sense there's more in this than the facts.",
    },
    {
      condition: "You are unsure they will welcome it",
      action: "Ask permission before reflecting.",
      phrase:
        "Can I check the tone I'm hearing, or would you rather stay practical?",
    },
    {
      condition: "The reflection only partly landed",
      action: "Invite their wording rather than defending yours.",
      phrase: "What word is closer?",
    },
    {
      condition: "The read missed",
      action: "Recover, drop the read, and return to their words.",
      phrase: "I over-read that. What word fits better?",
    },
  ],
  ladder: [
    {
      weak: "You sound annoyed.",
      better: "I might be hearing some frustration in that.",
      best: "I might be hearing some frustration around how the decision was handled, not just the decision itself. Is that close?",
    },
    {
      weak: "You're being negative.",
      better: "This sounds hard to feel optimistic about.",
      best: "It sounds like there's a cautious tone here, like you want it to work, but you don't fully trust the plan yet. Am I reading that fairly?",
    },
    {
      weak: "So you're angry with me.",
      better: "I'm wondering whether this landed badly.",
      best: "I'm hearing that this may have landed as dismissive. If that's right, I want to understand it before I respond.",
    },
  ],
  scenarios: [
    {
      situation:
        "A friend minimises disappointment: \"It's fine. I knew it probably wouldn't happen.\"",
      move: "Name the quiet letdown tentatively and check.",
      phrase:
        "That sounds more disappointed than fine, but maybe in a quiet way. Is that right?",
    },
    {
      situation:
        "A team member gives reluctant agreement: \"Okay, if that's what we're doing.\"",
      move: "Flag the reluctant yes so you do not bank false agreement.",
      phrase:
        "I'm hearing a reluctant yes. I don't want to treat that as full agreement if there's a concern underneath.",
    },
    {
      situation:
        'A customer sends a tense email: "As mentioned twice, we still haven\'t received the update."',
      move: "Name the tone, apologise briefly, then give the concrete fact.",
      phrase:
        "I read the tone as frustrated and needing clarity. Sorry for the delay. Here's the update.",
    },
    {
      situation:
        'A partner sounds proud but understated: "It wasn\'t a big deal, I just handled it."',
      move: "Reflect the quiet pride and the relief behind it.",
      phrase:
        "There's a quiet pride in that, maybe mixed with relief. Am I hearing that right?",
    },
    {
      situation:
        'A direct report is cautious about a change: "I guess we can try the new process."',
      move: "Name cautious openness and ask what would make it safer.",
      phrase:
        "This sounds like cautious openness, not full confidence yet. What would make the trial feel safer?",
    },
    {
      situation: 'Conflict repair: "I just don\'t want it to happen again."',
      move: "Reflect the need sitting under the upset.",
      phrase:
        "The tone I hear isn't just upset. It's wanting reassurance this will be taken seriously.",
    },
  ],
  calibration: {
    working: [
      "They relax, nod, soften, or elaborate.",
      "They correct you with more precise wording.",
      'They say "yes," "exactly," "sort of," or "that\'s part of it."',
      "Their next sentence becomes more specific.",
      "The conversation moves from facts toward what actually matters.",
    ],
    adjust: [
      "They look confused, embarrassed, or exposed.",
      'They say "I don\'t know" and withdraw.',
      "They answer only with facts after your reflection.",
      "The tone word seems too intense for the situation.",
      "Soften the word, drop the read, or offer an exit: \"We can stay practical if that's better. I just didn't want to miss the tone.\"",
      "If they say they do not want to talk about it, or the setting is too public, stop and protect their dignity.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the signal",
      task: "Through the day, privately notice three moments where someone's tone carried more than their words. For each, write down the tone word and the evidence: pace, word choice, hesitation, or flatness.",
    },
    {
      day: "Day 2",
      title: "Three tones, same words",
      task: 'Say "Sure, we can do that" aloud three ways: relieved, reluctant, and disappointed. Write one short tone reflection for each version.',
    },
    {
      day: "Day 3",
      title: "Soften the word",
      task: "Take five harsh labels (angry, defensive, bitter, passive-aggressive, negative) and translate each into two safer tone words you would actually say aloud.",
    },
    {
      day: "Day 4",
      title: "Attach and check",
      task: 'Rewrite five flat reflections so each one ties the tone to a specific topic and ends with a check, such as "Is that close?" or "Am I reading that right?"',
    },
    {
      day: "Day 5",
      title: "Recovery rep",
      task: 'Deliberately give a wrong read, then practise recovering cleanly: "I over-read that. What word fits better?" Repeat until it sounds curious, not defensive.',
    },
    {
      day: "Day 6",
      title: "One real reflection",
      task: "In a real conversation, use the minimum viable move once, tentatively. If they correct you, adopt their exact word rather than defending your read.",
    },
    {
      day: "Day 7",
      title: "Read the response",
      task: "After using it live, note whether they relaxed, corrected, elaborated, or withdrew, and whether your next move matched what their response asked for.",
    },
  ],
  checklist: [
    "What am I actually hearing, a tone, a feeling, a judgement, or a diagnosis?",
    "Can I say it tentatively, and could they easily correct me?",
    "Is the setting private enough, and am I attaching the tone to the topic, not their identity?",
    "Is there a safer word than the one I first reached for?",
    "Am I using this to understand, not to pressure, and what will I do if I am wrong?",
    "Afterwards: did they relax, correct, elaborate, or withdraw, and did I accept correction cleanly?",
  ],
  example: {
    without: [
      'A: "Sure, we can do it that way."',
      'B: "You sound passive-aggressive."',
      'A: "I\'m not. Forget it."',
      "Why it fails: the label is a verdict. Accusatory, certain, and impossible to correct without a fight.",
    ],
    with: [
      'A: "Sure, we can do it that way."',
      "B: \"I might be hearing a reluctant yes rather than a clean one. I don't want to treat that as agreement if there's a real concern underneath. What's the hesitation?\"",
      'A: "The plan is okay, but the deadline creates risk for support."',
      "B: \"So it's not opposition. It's risk concern around implementation. That helps.\"",
      'A: "Exactly. I can live with the plan if we protect the support side."',
      'Why it works: the read is tentative and checkable, so the correction turns a flat "sure" into a usable concern.',
    ],
    note: "The tone read is not the point: the correction is. Naming tone tentatively is what makes room for the real answer.",
  },
  influencePayoff: {
    feeling: '"They heard what I actually meant, not just what I said."',
    principle:
      "People elaborate and soften when their tone is acknowledged before the content is debated.",
    gains: [
      "Warmth and the sense of being genuinely understood",
      "Misunderstandings surface earlier, because your read is checkable",
      "Hard conversations soften before content is argued",
      "A clearer next move: validate, ask, pause, advise, or repair",
      "You come across as attuned rather than mechanical",
      "Less emotional translation work is left to the other person",
    ],
    whyMostFail: [
      'They state the tone as a verdict ("You\'re angry") instead of a tentative read.',
      "They reach for loaded words (bitter, defensive, passive-aggressive) that invite denial.",
      "They defend their read when corrected instead of adopting the other person's word.",
      "They overuse it until it feels performative, or use it as leverage rather than to understand.",
    ],
  },
  fieldTip: {
    headline: "Use a tone word like a sticky note, not a label maker.",
    body: 'A sticky note says, "This might be what I\'m hearing. Move it if it\'s wrong." A label maker says, "This is what you are." Tone reflection works when it is light enough to correct and specific enough to be useful.',
    example:
      "I might be hearing [tone] around [topic]. Is that close, or would you put it differently?",
    dont: "You sound bitter.",
    do: "I might be hearing some disappointment around this. Is that close?",
  },
  method: [
    {
      step: "1",
      title: "Listen past the words",
      body: "Notice pace, word choice, hesitation, repetition, restraint, sarcasm, understatement, intensity, or flatness. That is where the tone lives, not in the literal content.",
    },
    {
      step: "2",
      title: "Choose a soft word",
      body: "Reach for low-threat words first. They keep the reflection correctable instead of accusatory.",
      examples: [
        {
          label: "Reach for",
          text: "cautious, frustrated, relieved, disappointed, tired, proud, guarded, hopeful",
        },
        {
          label: "Avoid",
          text: "bitter, needy, hysterical, defensive, passive-aggressive",
        },
      ],
    },
    {
      step: "3",
      title: "Make it tentative",
      body: 'Frame it as a possible read, not a claim: "I might be hearing...", "It sounds like...", "There seems to be...", "I could be wrong, but..."',
    },
    {
      step: "4",
      title: "Attach it to the topic, not the person",
      body: 'Say "around this change" or "in how this landed", not "you\'re always...". Reflect the communication signal, not their identity.',
      examples: [
        { label: "Signal", text: "I'm hearing some caution around this." },
        { label: "Identity", text: "You're a cautious person." },
      ],
    },
    {
      step: "5",
      title: "Check the read",
      body: 'End with a short invitation ("Is that close?" or "Am I reading that right?") so the other person can easily correct you.',
    },
    {
      step: "6",
      title: "Follow the correction, then choose the next move",
      body: "If they give you a better word, use it. Do not defend your read. If they open up, keep listening. If they tighten, step back. If they ask for help, move to permission-based advice.",
    },
  ],
  liveThreadClues: [
    '"It\'s fine" said flatly',
    "A pause or hesitation before agreeing",
    'Understatement: "it wasn\'t a big deal"',
    'A clipped or repeated phrase: "as mentioned twice"',
    "A yes that sounds reluctant rather than clean",
    "Sarcasm, restraint, or a sudden flatness",
    "Extra weight landing on one particular word",
  ],
  depthDial: [
    {
      depth: "Broadest",
      useWhen: "You cannot name the tone cleanly yet",
      phrase: "I sense there's more in this than the facts.",
    },
    {
      depth: "Soft",
      useWhen: "Early or low-trust conversation",
      phrase: "I might be hearing a bit of caution here.",
    },
    {
      depth: "Tied to topic",
      useWhen: "Standard use",
      phrase: "I'm hearing some frustration around how this was handled.",
    },
    {
      depth: "With paraphrase",
      useWhen: "Rapport is present",
      phrase:
        "There's a tired quality here, like you got it done, but it cost more than people saw.",
    },
    {
      depth: "Toward meaning",
      useWhen: "They confirm the deeper read",
      phrase:
        "It sounds like the real question is whether the team will follow through this time.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Saying the tone as a verdict",
      soundsLike: "You're angry.",
      better: "I might be hearing some frustration. Is that close?",
    },
    {
      mistake: "Using a loaded word",
      soundsLike: "You sound bitter / defensive / passive-aggressive.",
      better: "I might be hearing some disappointment around this.",
    },
    {
      mistake: "Turning reflection into analysis",
      soundsLike: "This is because your manager ignored your autonomy.",
      better: "There's a guarded tone here, am I reading that right?",
    },
    {
      mistake: "Overdoing it until it feels performative",
      soundsLike: "Naming tone every few sentences",
      better: "Save it for when the tone actually matters.",
    },
    {
      mistake: "Exposing someone in public",
      soundsLike: "Naming a vulnerable tone in front of others",
      better: "Raise it privately, or wait for a safer moment.",
    },
    {
      mistake: "Arguing with the correction",
      soundsLike: "No, I really think you're frustrated.",
      better: "Got it. What word fits better?",
    },
    {
      mistake: "Using it to slow-walk an urgent decision",
      soundsLike: "Reflecting tone while action is needed now",
      better:
        "Handle the immediate step first, then return to the tone if useful.",
    },
  ],
  recoveryPhrases: [
    "Thanks for correcting me. What word fits better?",
    "Got it, I over-read that. Let's stay with what you actually meant.",
    "That was my interpretation, not your statement. Let me reset.",
    "I don't want to put a feeling on you. How would you describe it?",
    "That word was too strong, caution or frustration might be closer. Which is it?",
    "I didn't mean to spotlight you. Let me step back.",
    "We can solve the practical issue first and come back to the tone if needed.",
    "That wasn't for pressure. I just wanted to check I had understood the tone.",
  ],
  bestRecoveryLine: "I over-read that. What word fits better?",
  chains: [
    {
      label: "Hear it, then act",
      sequence:
        "Reflective listening → Tone reflection → Small ask (TC004 → TC061 → TC019)",
      example: [
        '"So the timeline changed twice. I\'m also hearing some frustration around the lack of warning. What would help most right now?"',
      ],
    },
    {
      label: "Name, then deepen",
      sequence: "Tone reflection → Meaning reflection (TC061 → TC040)",
      example: [
        '"There\'s a guarded tone around this. It sounds like the real issue is whether the team will follow through this time."',
      ],
    },
    {
      label: "Check, then offer",
      sequence: "Tone reflection → Permission-based advice (TC061 → TC027)",
      example: [
        '"I\'m hearing uncertainty rather than resistance. Would it be useful if I suggested two ways to reduce the risk?"',
      ],
    },
    {
      label: "Reflect, then release",
      sequence: "Tone reflection → Autonomy release (TC061 → TC021)",
      example: [
        "\"This sounds sensitive, and you don't have to go further than you want. I just want to make sure I'm not missing the tone.\"",
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC006",
      reason:
        'Emotional labelling names one clear feeling ("you seem worried"). Reflect tone instead when the signal is mixed or atmospheric rather than one obvious emotion.',
    },
    {
      id: "TC004",
      reason:
        "Reflective listening shows you caught the content. Add tone reflection when the words alone feel incomplete and the emotional colour is being missed.",
    },
    {
      id: "TC037",
      reason:
        "Double-sided reflection is for someone torn between two valid pulls. Reflect tone when one emotional colour dominates a single topic.",
    },
    {
      id: "TC040",
      reason:
        "Meaning reflection names what the topic means to their identity or values. Tone reflection stays lighter. How they are holding it right now. Do tone first, meaning after they confirm.",
    },
    {
      id: "TC041",
      reason:
        'Topic energy tracking asks whether they want to continue. Tone reflection asks how it is landing. Track energy for "do they want to go on?". Reflect tone for "how does this feel?"',
    },
    {
      id: "TC060",
      reason:
        "Positive assumption starts from a charitable frame before any read. Use it when trust is low. Use tone reflection when listening accuracy is what matters.",
    },
  ],
};
