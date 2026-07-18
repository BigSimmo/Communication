import type { CardData } from "../card-types";

export const TC004: CardData = {
  pdfUrl: "cards/TC004/TC004_TwoCard_Combined.pdf",
  resources: [
    { label: "Two-card (combined)", description: "Front and back study cards on one sheet — the designed visual card.", href: "cards/TC004/TC004_TwoCard_Combined.pdf", type: "pdf", group: "Visual Cards" },
    { label: "One-card summary", description: "The whole technique on a single designed card.", href: "cards/TC004/TC004_OneCard.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Quick card", description: "One-page glance card for fast recall.", href: "cards/TC004/TC004_Quick_Card.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Detailed guide", description: "The full written guide with every section.", href: "cards/TC004/TC004_Detailed_Guide.pdf", type: "pdf", group: "Written Guides" },
    { label: "Reference sheet", description: "Dense one-page reference of the key moves.", href: "cards/TC004/TC004_Reference.pdf", type: "pdf", group: "Written Guides" },
    { label: "Phrase bank (CSV)", description: "Every phrase, ready to import or drill.", href: "cards/TC004/TC004_Phrase_Bank.csv", type: "csv", group: "Practice Tools" },
    { label: "Anki flashcards", description: "Import into Anki for spaced-repetition practice.", href: "cards/TC004/TC004_Anki_Flashcards.csv", type: "csv", group: "Practice Tools" },
  ],
  id: "TC004",
  whyItWorks:
    "Reflective listening is the habit of saying back the core meaning, feeling or concern in someone's words before you add your own content. You listen for the point underneath the words, reflect it briefly in your own plain language, and let them confirm, correct or deepen it. It is a timing and attention move: you notice the live moment and choose a response that keeps the other person oriented and unpressured. It works because people become more receptive once they feel understood — reflecting first lowers defensive pressure and improves accuracy, so no one has to defend, decode or rescue the conversation. Done well it sounds like ordinary adult speech, not a script or a performance.",
  whatItIsNot: [
    "It is not parroting, clinical mirroring, or saying \"I hear you\" on autopilot.",
    "It is not agreeing with everything or pretending to understand.",
    "It is not manipulation, performance, emotional extraction or a way to force intimacy.",
    "It is not something to keep pushing once they resist, shorten their answers or redirect — then you release it and follow the person.",
  ],
  overview: {
    coreFormula: [
      "Hear the words -> identify the core meaning or feeling -> reflect it briefly -> pause for correction -> proceed.",
      "Short form: notice -> name or respond -> invite -> calibrate -> release.",
      "So the main thing is that the plan changed after you'd already committed.",
      "It sounds like the frustrating part was the lack of warning.",
      "You wanted support, not someone solving it instantly.",
    ],
    minimumViableMove:
      "Use one sentence: \"So the main thing is...\" or \"It sounds like the frustrating part was...\"",
    impact: "High",
    difficulty: "Medium",
    misuse:
      "The main failure mode is sounding like a therapist, repeating words back mechanically, or reflecting so much that the conversation stops moving.",
    bestFor: [
      "Emotionally loaded conversations",
      "Clarifying a disagreement before responding",
      "Supporting someone before offering advice",
      "Professional conversations where accuracy matters",
      "Calming a tense moment when someone feels unheard",
      "Checking you have understood before you decide or redirect",
    ],
  },
  notFor: [
    "The person needs urgent action, not reflection",
    "You are guessing too far beyond the evidence",
    "Reflection would sound patronising",
    "They have asked for a direct answer",
    "Physical safety or an immediate emergency takes priority",
  ],
  phraseBank: [
    {
      id: "quick-openers",
      label: "Quick openers",
      tag: "Concise starters",
      tone: "Quick",
      phrases: [
        "So the main thing is...",
        "Sounds like the hard part was...",
        "So you wanted X, and got Y.",
        "So the real issue is...",
        "It sounds like what mattered most was...",
        "So, underneath it, this is about...",
        "The bit that stung was...",
      ],
    },
    {
      id: "warm-support",
      label: "Warm / supporting",
      tag: "Support before advice",
      tone: "Warm",
      phrases: [
        "So the hard part wasn't just what happened, but how alone it felt.",
        "It sounds like you were carrying a lot of uncertainty.",
        "So you wanted support, not someone solving it instantly.",
        "It sounds like that really knocked you about.",
        "So more than anything, you just wanted to be heard.",
        "It sounds like you've been holding this on your own for a while.",
        "So the part that's staying with you is the way it ended.",
      ],
    },
    {
      id: "professional",
      label: "Professional",
      tag: "Work and meetings",
      tone: "Professional",
      phrases: [
        "So the main concern is the decision process, not just the outcome.",
        "It sounds like the bottleneck is clarity of ownership.",
        "The issue is less the deadline and more the repeated change in scope.",
        "So what you need before you commit is a clear owner.",
        "It sounds like we're aligned on the timeline, but you want to revisit the budget.",
        "So the risk you're flagging is that the scope keeps moving.",
        "It sounds like the sticking point is who signs it off.",
      ],
    },
    {
      id: "direct-checks",
      label: "Checking understanding",
      tag: "Clarify and confirm",
      tone: "Direct",
      phrases: [
        "Let me check I've got this: the problem is the change, not the work itself.",
        "So, in one line, this is about being reorganised without warning?",
        "Have I got the main thing right?",
        "So the ask is more notice, not less change — is that fair?",
        "Tell me if I'm off: the frustrating part is the unpredictability.",
        "So the decision you actually want made is who owns it.",
        "Is the core of it that you can't plan around them?",
      ],
    },
    {
      id: "tentative-repair",
      label: "Tentative / course-correcting",
      tag: "Leave room to be corrected",
      tone: "Repair",
      phrases: [
        "I might have this wrong, but it sounds like the timing is the real issue.",
        "Correct me if I'm off — it seems the hard part was being left out.",
        "Maybe the better way to say it is that you felt overlooked.",
        "I don't want to put words in your mouth, but this sounds bigger than one meeting.",
        "So, if I'm reading you right, it's less about the task and more about the trust.",
        "Let me try that again — it sounds more like disappointment than anger.",
      ],
    },
    {
      id: "high-stakes",
      label: "Disagreement / pressure",
      tag: "Reflect before you respond",
      tone: "High-stakes",
      phrases: [
        "Before I respond, let me make sure I've understood your concern.",
        "So the part you feel I'm missing is how much this has already cost you.",
        "It sounds like this isn't really about the roster — it's about being able to plan your life.",
        "So what you need me to get, before we go on, is that this keeps happening.",
        "It sounds like you feel this has happened too many times to let slide.",
        "So the thing that has to change for this to feel fair is the notice.",
      ],
    },
    {
      id: "digital-text",
      label: "Digital / text",
      tag: "One-line reflections",
      tone: "Quick",
      phrases: [
        "Sounds like the frustrating part was the lack of warning.",
        "So it felt like a sudden shift.",
        "That reads like uncertainty more than disagreement.",
        "So the main thing is the timing caught you off guard?",
        "Reading back — the hard bit was being left out of the call.",
        "So, short version: you needed a heads-up you didn't get.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "They said something emotionally or practically important",
      action: "Reflect the core in one line before moving on.",
      phrase: "So the main thing is that the plan changed after you'd committed.",
    },
    {
      condition: "You are guessing beyond what they actually said",
      action: "Make the reflection tentative so they can correct it.",
      phrase: "I might be reading this wrong, but it sounds like...",
    },
    {
      condition: "They correct your reflection",
      action: "Accept the correction and update — the correction is a win.",
      phrase: "Got it — so it's more about the uncertainty than the change itself.",
    },
    {
      condition: "They need action now, not reflection",
      action: "Keep the reflection to one line, then move to the decision.",
      phrase: "So the priority is cover for tonight — let's sort that first.",
    },
    {
      condition: "They shorten answers, tense up or redirect",
      action: "Release the technique and follow the person.",
      phrase: "No worries — what would help most right now?",
    },
  ],
  ladder: [
    {
      weak: "I hear you. (Too generic to prove you actually understood.)",
      better:
        "You're annoyed because they changed the plan. (More specific, but stated too certainly.)",
      best: "It sounds like the frustrating part was the plan changing after you'd already committed. (Specific, tentative and grounded.)",
    },
    {
      weak: "Makes sense. (Vague; it could mean almost anything.)",
      better:
        "So you're worried about the deadline. (Names one thing, but maybe the wrong one.)",
      best: "So the real worry isn't the deadline itself — it's the scope changing under you. (Names the point beneath the words.)",
    },
    {
      weak: "That's rough. (Sympathy, but shows no understanding.)",
      better: "You're upset they let you down. (Assumes the feeling.)",
      best: "It sounds like the hard part wasn't just the let-down, but feeling you couldn't rely on them. (Tentative and specific.)",
    },
  ],
  scenarios: [
    {
      situation: "A friend is upset",
      move: "Reflect the hard part before offering any reassurance.",
      phrase: "So the worst bit was feeling you had no one to call.",
    },
    {
      situation: "A work conflict",
      move: "Reflect the process concern before proposing a fix.",
      phrase: "So the sticking point is that scope keeps moving after we start.",
    },
    {
      situation: "A disagreement",
      move: "Reflect their concern before you present your own view.",
      phrase: "So what matters most to you is that this stays fair to the team.",
    },
    {
      situation: "A clinical or helping context",
      move: "Reflect accurately and resist over-interpreting.",
      phrase: "It sounds like the tiredness is the thing that's hardest to manage.",
    },
    {
      situation: "Someone venting who doesn't want solutions",
      move: "Reflect and stop — don't slide into advice.",
      phrase: "So you don't need this fixed, you just need it heard.",
    },
    {
      situation: "A text or message thread",
      move: "Keep the reflection to one line so it doesn't read as heavy.",
      phrase: "Sounds like the frustrating part was the lack of warning.",
    },
  ],
  calibration: {
    working: [
      "They say \"exactly\", \"that's it\", or \"that's exactly it.\"",
      "They elaborate and add detail you didn't ask for.",
      "Their tone softens.",
      "They move from defending to explaining.",
      "They correct a small detail — which improves shared accuracy.",
      "They slow down and seem less braced.",
    ],
    adjust: [
      "They give shorter answers than before.",
      "They look tense or braced.",
      "They correct the whole frame, not just a detail.",
      "They go quiet or change the subject.",
      "You've reflected several times in a row without them moving.",
      "It's starting to sound like a therapist — drop the format, speak plainly, or release the technique.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the moment",
      task: "List three real conversations from the past week where reflecting the core would have helped. For each, note the one sentence that carried the real point.",
    },
    {
      day: "Day 2",
      title: "Write the ladder",
      task: "For each situation, write a weak line, a better line, and the best line — specific, tentative and grounded.",
    },
    {
      day: "Day 3",
      title: "Shorten it",
      task: "Say each best line aloud twice, then cut it by about a third. Keep only the words that name the point.",
    },
    {
      day: "Day 4",
      title: "Kill the therapy-speak",
      task: "Rewrite any line that sounds clinical or scripted into plain, ordinary speech you'd actually use out loud.",
    },
    {
      day: "Day 5",
      title: "Field-test the minimum move",
      task: "In one low-stakes conversation, use a single one-line reflection and note how the other person responds.",
    },
    {
      day: "Day 6",
      title: "Calibrate and release",
      task: "In a real conversation, reflect once, then watch the cues. If they shorten or tense up, drop the technique and follow them instead.",
    },
    {
      day: "Day 7",
      title: "Recover on purpose",
      task: "Deliberately guess slightly wrong, use a recovery line, and let them correct you. Notice how the correction sharpens the conversation.",
    },
  ],
  checklist: [
    "Did I identify the right conversational moment?",
    "Did I use plain, ordinary language rather than clinical phrasing?",
    "Did I keep the other person's autonomy intact — leaving room to correct me?",
    "Did I stop after one move instead of overusing the technique?",
    "Did I use a recovery line if the reflection missed?",
    "Did the technique make the conversation easier rather than more self-conscious?",
  ],
  example: {
    without: [
      "Them: They changed the roster again.",
      "You: I hear you.",
      "Them: Yeah.",
      "Why it's weak: \"I hear you\" is generic — it proves nothing was understood, so the conversation stalls.",
    ],
    with: [
      "Them: They changed the roster again.",
      "You: So it feels like you can't plan anything around them.",
      "Them: Exactly.",
      "You: So it's not really one roster change — it's your life getting reorganised by decisions you can't predict.",
      "Them: That's exactly it.",
      "Why it works: the reflection names the point under the words, stays tentative enough to be corrected, and lets them confirm and then deepen it.",
    ],
    note: "The best reflections are specific and slightly tentative — specific enough to prove you listened, open enough that they can correct you.",
  },
  influencePayoff: {
    feeling: "\"They noticed the real part of what I was saying.\"",
    principle: "People become more receptive to you once they feel understood.",
    gains: [
      "Reduced defensiveness",
      "Greater accuracy — you find out what they actually meant",
      "Trust",
      "Conversational ease",
      "Relevance — your next point lands on the real issue",
      "Less friction: they don't have to defend, decode or rescue the conversation",
    ],
    whyMostFail: [
      "They sound like a therapist instead of a normal adult.",
      "They repeat the words back mechanically without adding understanding.",
      "They reflect so much that the conversation stops moving.",
      "They overstate feelings the person never named.",
    ],
  },
  fieldTip: {
    headline: "Reflect the point under the words, not every word.",
    body: "The best reflection names the meaning underneath what was said, not the surface detail. Reach for the word or idea carrying the feeling, and say that back in your own plain language.",
    example: "\"It was technically fine, just draining.\" — reflect \"draining\", not \"fine\".",
    dont: "Don't repeat their sentence back to them word for word.",
    do: "Do name the point in one plain sentence, then pause so they can confirm or correct it.",
  },
  method: [
    {
      step: "1",
      title: "Notice the cue",
      body: "Listen for the point underneath the words — the meaning, feeling or concern carrying the most weight. It's usually one loaded word or the thing they keep circling back to.",
      examples: [
        { label: "They say", text: "\"It was technically fine, just draining.\"" },
        { label: "The cue", text: "\"draining\" — not \"fine\"" },
      ],
    },
    {
      step: "2",
      title: "Choose the smallest useful move",
      body: "Reach for the smallest reflection that proves you understood, not the cleverest or deepest one. One plain sentence beats a paragraph.",
      examples: [
        { label: "Too much", text: "\"So this has stirred up everything about feeling undervalued at work.\"" },
        { label: "Enough", text: "\"So the draining part was doing it all with no thanks.\"" },
      ],
    },
    {
      step: "3",
      title: "Say it in plain language",
      body: "Use ordinary adult speech, kept slightly tentative so they can correct you. \"So...\" and \"It sounds like...\" are enough — you don't need clinical framing.",
      examples: [
        { label: "Clinical", text: "\"I'm hearing that you feel invalidated.\"" },
        { label: "Plain", text: "\"So it felt like no one noticed the effort.\"" },
      ],
    },
    {
      step: "4",
      title: "Pause for correction",
      body: "Say your reflection, then stop. The pause invites them to confirm, correct or deepen it — and a correction is a win, because now you both share the accurate version.",
    },
    {
      step: "5",
      title: "Calibrate and release",
      body: "Watch the response. If they open up, stay with it briefly; if they shorten, tense or redirect, drop the technique and follow the person. Stop once they've answered, corrected or moved on.",
    },
  ],
  liveThreadClues: [
    "\"honestly...\"",
    "\"the hard part was...\"",
    "\"what got me was...\"",
    "\"it's not even about...\"",
    "\"I just wanted...\"",
    "\"again\" or \"every time\"",
    "a loaded word said with weight (\"draining\", \"pointless\", \"alone\")",
    "they repeat or keep circling back to the same thing",
  ],
  depthDial: [
    {
      depth: "Content",
      useWhen: "Facts matter and emotion is low",
      phrase: "So the plan changed after you'd committed.",
    },
    {
      depth: "Feeling",
      useWhen: "There's clear emotion in what they said",
      phrase: "So the frustrating part was being caught off guard.",
    },
    {
      depth: "Concern",
      useWhen: "A worry sits under the words",
      phrase: "So the worry is that this keeps happening.",
    },
    {
      depth: "Meaning",
      useWhen: "Strong trust, and it clearly matters (shades into TC040)",
      phrase: "So it's really about whether you can rely on them at all.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Parroting the exact words",
      soundsLike: "\"They changed the roster again?\"",
      better: "\"So you can't plan anything around them.\"",
    },
    {
      mistake: "Overstating feelings they didn't name",
      soundsLike: "\"You must be furious.\"",
      better: "\"It sounds like that was pretty frustrating.\"",
    },
    {
      mistake: "Reflecting every single sentence",
      soundsLike: "\"So you woke up... so you got the email... so you replied...\"",
      better: "Reflect once, at the moment that carries the real point.",
    },
    {
      mistake: "Sounding clinical",
      soundsLike: "\"I'm hearing that you feel invalidated.\"",
      better: "\"So it felt like no one noticed the effort.\"",
    },
    {
      mistake: "Turning reflection into agreement you don't mean",
      soundsLike: "\"You're right, they're impossible.\"",
      better: "\"So, from where you sit, they've been impossible to plan around.\"",
    },
    {
      mistake: "Being too certain to be corrected",
      soundsLike: "\"You're annoyed because they changed the plan.\"",
      better: "\"It sounds like the annoying part was the change — is that it?\"",
    },
  ],
  recoveryPhrases: [
    "I may be reading that wrong.",
    "Let me try that again.",
    "Maybe the better way to say it is...",
    "I don't want to put words in your mouth.",
    "Tell me where I've got that wrong.",
    "That came out more certain than I meant — what's the actual version?",
    "Scrap that — say it your way and I'll listen.",
  ],
  bestRecoveryLine:
    "I don't want to put words in your mouth — tell me where I've got it wrong.",
  chains: [
    {
      label: "Reflect, then validate",
      sequence: "TC004 -> TC005",
      example: [
        "\"So the frustrating part was being left out of the call.\"",
        "\"That makes sense — I'd be annoyed too, even though I still think the call was right.\"",
      ],
    },
    {
      label: "Reflect, then ask permission before advice",
      sequence: "TC004 -> TC027",
      example: [
        "\"So you mainly wanted it heard, not fixed.\"",
        "\"Would it help if I threw out an idea, or do you just want to vent for a bit?\"",
      ],
    },
    {
      label: "Reflect, then summarise before moving on",
      sequence: "TC004 -> TC011",
      example: [
        "\"So it's the scope moving, not the deadline.\"",
        "\"Let me play it back: two changes since Monday, and you want one owner before we restart.\"",
      ],
    },
    {
      label: "Reflect, then deepen to meaning",
      sequence: "TC004 -> TC040",
      example: [
        "\"So the hard part was the change landing without warning.\"",
        "\"And I think what it really touches is whether your time gets respected at all.\"",
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC006",
      reason:
        "TC006 names the emotion out loud; TC004 can reflect content, feeling or concern — reach for TC006 when the feeling itself is the thing to acknowledge.",
    },
    {
      id: "TC040",
      reason:
        "TC040 reflects the deeper significance of something; TC004 reflects the immediate meaning or feeling of the live moment.",
    },
    {
      id: "TC037",
      reason:
        "TC037 holds two sides of an ambivalence at once; TC004 is usually one-sided and simpler.",
    },
    {
      id: "TC011",
      reason:
        "TC011 summarises several points across a stretch of talk; TC004 reflects the live core of a single moment.",
    },
    {
      id: "TC005",
      reason:
        "TC005 validates a feeling as understandable without agreeing with it; TC004 reflects the content or feeling first, before you take any position.",
    },
  ],
};
