import type { CardData } from "../card-types";

export const TC096: CardData = {
  pdfUrl: "cards/TC096/TC096_TwoCard_Combined.pdf",
  resources: [
    { label: "Two-card (combined)", description: "Front and back study cards on one sheet — the designed visual card.", href: "cards/TC096/TC096_TwoCard_Combined.pdf", type: "pdf", group: "Visual Cards" },
    { label: "One-card summary", description: "The whole technique on a single designed card.", href: "cards/TC096/TC096_OneCard.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Quick card", description: "One-page glance card for fast recall.", href: "cards/TC096/TC096_Quick_Card.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Detailed guide", description: "The full written guide with every section.", href: "cards/TC096/TC096_Detailed_Guide.pdf", type: "pdf", group: "Written Guides" },
    { label: "Reference sheet", description: "Dense one-page reference of the key moves.", href: "cards/TC096/TC096_Reference.pdf", type: "pdf", group: "Written Guides" },
    { label: "Phrase bank (CSV)", description: "Every phrase, ready to import or drill.", href: "cards/TC096/TC096_Phrase_Bank.csv", type: "csv", group: "Practice Tools" },
    { label: "Anki flashcards", description: "Import into Anki for spaced-repetition practice.", href: "cards/TC096/TC096_Anki_Flashcards.csv", type: "csv", group: "Practice Tools" },
  ],
  id: "TC096",
  whyItWorks:
    "Capitalisation extension is a response pattern for positive news. When someone shares a win, a relief, a proud moment or good feedback, you don't stop at \"nice\": you mark the good thing, add one specific reason it matters, and invite them to say a little more about the best part. It works because people become more open with you when they trust that their good news will be handled well rather than ignored, hijacked or turned into your status opportunity. Recognise it, name a concrete piece of it, extend it with one short prompt, and let them choose the size of the celebration.",
  whatItIsNot: [
    "Not generic praise or forced enthusiasm, and not a demand that they be more excited than they actually are.",
    "Not a competition: \"That reminds me of my bigger win.\"",
    "Not a diagnostic interview: \"What exactly did you do, why, and what was the ROI?\"",
    "Not a covert status grab: \"I knew that because I helped you.\"",
    "Not a productivity pivot: \"Great, now how will you leverage it?\"",
  ],
  overview: {
    coreFormula: [
      "That's a real win. Especially after how long that process took. What was the best moment when you found out?",
      "That sounds like a relief. You carried that for a while. What changed once it landed?",
      "Nice - and not just nice, that reflects a lot of preparation. What part are you most proud of?",
      "That's worth enjoying. Want to tell me the headline version, or should we just mark it and keep moving?",
      "Good news. Glad that came through.",
    ],
    minimumViableMove: "That's worth enjoying. What was the best part?",
    impact: "Medium",
    difficulty: "Easy-Medium",
    misuse:
      "The move fails when your response becomes more about your desired emotional display than their actual positive experience - you overshoot, interrogate, or steal the spotlight instead of letting them enjoy the win.",
    bestFor: [
      "Someone shares good news, progress, relief, a win, a milestone, or positive feedback",
      "They sound proud but are trying not to boast",
      "A colleague mentions an achievement quickly and may move on too fast",
      "A friend or partner shares something that clearly took effort",
      "A digital update deserves more than a reaction emoji",
      "A team has a small win that should be noticed without overproducing a celebration",
    ],
  },
  notFor: [
    "They signal privacy: \"I don't want to make a thing of it.\"",
    "The news is mixed or fragile - attached to grief, guilt, survivor feelings, or uncertainty",
    "They are time-constrained or in task mode",
    "Public attention could embarrass them or create group envy",
    "Your enthusiasm would be louder than theirs",
    "The extension prompt would make them justify why the event matters",
  ],
  phraseBank: [
    {
      id: "quick_markers",
      label: "Quick markers",
      tag: "Short, low-intensity",
      tone: "Quick",
      phrases: [
        "Good news. Glad for you.",
        "That must be a relief.",
        "Worth marking, even briefly.",
        "Good. I'm glad that happened.",
        "Nice one - that counts.",
        "Glad that came through.",
      ],
    },
    {
      id: "warm_social",
      label: "Warm / social",
      tag: "Friends and rapport",
      tone: "Warm",
      phrases: [
        "That's worth enjoying. What was the best part?",
        "I love that for you. What made it feel real?",
        "You sound quietly pleased. Want to tell me the good bit?",
        "That's not small. What are you most glad about?",
        "I want to give that a proper moment. What landed best?",
        "That must feel good after the wait.",
        "That's a lovely thing to hear. What are you taking from it?",
      ],
    },
    {
      id: "professional",
      label: "Professional",
      tag: "Work and meetings",
      tone: "Professional",
      phrases: [
        "That's a strong result. What made the difference?",
        "That sounds like a real milestone. Which part took the most work?",
        "Worth noting: that landed because of a lot of hidden effort.",
        "Good outcome. What should the team understand about what made it possible?",
        "That's useful signal. What worked?",
        "Solid result. Worth remembering what got it over the line.",
      ],
    },
    {
      id: "extension_prompts",
      label: "Extension prompts",
      tag: "The one open question",
      tone: "Direct",
      phrases: [
        "What was the best part?",
        "What made it feel real?",
        "What made the difference?",
        "What are you most proud of?",
        "What should not get lost about this win?",
        "What was the moment you knew it had worked?",
        "What did you do differently this time?",
      ],
    },
    {
      id: "digital",
      label: "Digital / online",
      tag: "Texts and updates",
      tone: "Quick",
      phrases: [
        "This deserves more than a like - what was the best part?",
        "Huge. What was the moment you knew it had worked?",
        "Proper congrats. What are you most proud of?",
        "That's a good update. What made it possible?",
        "Genuinely glad to see this. What are you taking from it?",
      ],
    },
    {
      id: "fragile_pressured",
      label: "Fragile or high-pressure",
      tag: "Mixed news, busy moments",
      tone: "High-stakes",
      phrases: [
        "Let's mark the win for ten seconds before the next fire. What worked?",
        "Before we move on, what part of this should not get lost?",
        "Sounds good, and maybe a little complicated. Want to keep it at the headline level?",
        "There's relief there, and maybe some other stuff too. What part do you want to mark?",
        "Quick marker: what finally shifted?",
        "I won't make it huge if you'd rather - but it is worth marking.",
      ],
    },
    {
      id: "recovery_autonomy",
      label: "Recovery & autonomy release",
      tag: "Ease off, hand it back",
      tone: "Repair",
      phrases: [
        "No need to unpack it if you're already moving on.",
        "We can just mark it and keep going.",
        "Only if you want to say more: what was the best part?",
        "I may have made that bigger than you wanted. I just meant: good news.",
        "No need to perform excitement. I'm simply glad it happened.",
        "I jumped to my version. Back to yours - what mattered most?",
        "I'm over-questioning it. Let's just mark the win and move on.",
        "No need for a big celebration. I just wanted to register that it counts.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "They shared a win, relief, or progress",
      action: "Extend it: mark the good news, add one specific value, offer one short prompt.",
      phrase: "That's a real win. What was the best part?",
    },
    {
      condition: "No positive event was actually shared",
      action: "Don't force it. Listen, validate, or ask a normal question instead.",
      phrase: "",
    },
    {
      condition: "The win is private, mixed, or not public-safe",
      action: "Use a low-intensity marker and stop.",
      phrase: "Good to hear. Glad for you.",
    },
    {
      condition: "They seem energised and have room",
      action: "Use a fuller extension prompt.",
      phrase: "What was the best part?",
    },
    {
      condition: "They're quietly pleased or in task mode",
      action: "Use a smaller marker, then move on.",
      phrase: "Worth marking, even briefly.",
    },
    {
      condition: "They don't elaborate, or you realise you overshot",
      action: "Release the pressure or hand the moment back to them.",
      phrase: "No need to unpack it. I'm glad it happened.",
    },
  ],
  ladder: [
    {
      weak: "Cool.",
      better: "That's great - what happened?",
      best: "That's a real win, especially after the uncertainty around it. What was the moment it actually felt real?",
    },
    {
      weak: "Must be nice.",
      better: "Congratulations, that sounds like a relief.",
      best: "I want to mark that properly: the result is good, and the effort behind it wasn't obvious to everyone. What part are you most proud of?",
    },
    {
      weak: "Anyway, about my thing...",
      better: "I'm glad that landed. You worked for it.",
      best: "Before we rush on, that deserves ten seconds. What should not get lost about this win?",
    },
  ],
  scenarios: [
    {
      situation: "A friend gets good news",
      move: "Mark it, then invite the best part.",
      phrase: "That's worth enjoying. What was the best part of hearing it?",
    },
    {
      situation: "A colleague solves a hard problem",
      move: "Name the specific difficulty, then ask what moved it.",
      phrase: "Strong result, especially given the messy handoffs. What made it finally move?",
    },
    {
      situation: "A partner shares relief",
      move: "Acknowledge the load lifting, then ask what's lighter now.",
      phrase: "I'm glad that landed. What feels lighter now?",
    },
    {
      situation: "A team milestone in a busy meeting",
      move: "Protect ten seconds for it before the next agenda item.",
      phrase: "Before we move on, what should not get lost about this win?",
    },
    {
      situation: "A modest person plays it down",
      move: "Offer to keep it small while still marking it.",
      phrase: "I won't make it huge if you'd rather, but it's worth marking.",
    },
    {
      situation: "Good news with complexity",
      move: "Name both sides, then let them choose the size.",
      phrase: "Sounds good, and maybe a little complicated. Want to share the good part or keep it light?",
    },
  ],
  calibration: {
    working: [
      "They smile, lean in, add detail, or start telling the story.",
      "Their voice gains energy or warmth.",
      "They answer your prompt and add another positive detail.",
      "They use words like \"honestly\", \"the best part\", \"I was proud\", or \"it finally felt real\".",
      "They volunteer context you didn't ask for.",
      "They move from reporting the news to replaying the moment.",
    ],
    adjust: [
      "They acknowledge but stay brief - hold steady, don't push.",
      "They're pleased but task-focused - mark it and move on.",
      "They shift between pride and modesty - keep it light.",
      "They deflect repeatedly: \"It's not a big deal.\" - downshift.",
      "Their body language closes - stop.",
      "The win is clearly mixed with discomfort - drop to a headline marker.",
      "They answer in one-word responses - release the pressure.",
      "Public attention seems to embarrass them - take it private or drop it.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Good-news markers",
      task: "Take ten plain good-news statements and write one non-generic marker for each. Ban \"nice\" and \"awesome\" unless they're immediately followed by a specific detail.",
    },
    {
      day: "Day 2",
      title: "Add the specific value",
      task: "Return to each marker and add one reason the event matters: effort, timing, relief, courage, skill, persistence, trust, or meaning.",
    },
    {
      day: "Day 3",
      title: "One-prompt discipline",
      task: "Write exactly one extension prompt for each, then stop. The point is to feel where the interrogation reflex kicks in and hold it back.",
    },
    {
      day: "Day 4",
      title: "Downshift practice",
      task: "For five over-excited responses, write a calmer, lower-intensity alternative that still registers the win.",
    },
    {
      day: "Day 5",
      title: "Recovery reps",
      task: "Rehearse saying \"No need to make it huge - I just wanted to mark it\" out loud in a calm, unbothered tone until it sounds natural.",
    },
    {
      day: "Day 6",
      title: "First live rep",
      task: "In one real conversation, answer a good-news update with marker + specific detail + one optional prompt. Note whether they opened up, stayed neutral, or downshifted.",
    },
    {
      day: "Day 7",
      title: "A week of small wins",
      task: "Catch one small positive update a day and extend it at the speaker's chosen size. Review which cue told you to continue, hold, or stop.",
    },
  ],
  checklist: [
    "Did I notice the positive cue early enough?",
    "Did I name the good news specifically rather than generically?",
    "Did my prompt invite savour or meaning without demanding a performance?",
    "Did I keep the spotlight on them and match their celebration size?",
    "Did I stop after one extension prompt unless they clearly wanted more?",
    "Did I recover if I made it too big, or turned it into advice or comparison?",
  ],
  example: {
    without: [
      "A: The client finally approved the proposal.",
      "B: Nice. So can you send me the updated deck?",
      "Why it's weak:",
      "treats the good news as a logistical footnote",
      "skips the relief and effort behind it",
      "gives them no room to enjoy the win",
    ],
    with: [
      "A: The client finally approved the proposal.",
      "B: That's great. Sounds like a relief after all the revisions.",
      "A: Yeah, definitely.",
      "Better - it acknowledges the win and the effort, but stops short of extending it.",
      "A: The client finally approved the proposal.",
      "B: That's a real win, especially after the back-and-forth. What do you think made it finally click for them?",
      "A: I think the simpler timeline helped. Also, the case study you suggested gave them confidence.",
      "B: Good signal. So the clarity and the proof did the work. Worth remembering for the next one.",
      "Why this works:",
      "marks the win and names the specific effort behind it",
      "asks one open prompt, then reflects the meaning back",
      "lets them replay the outcome and feel seen without being interrogated",
    ],
    note: "The whole difference is often one sentence: mark it, name why, invite one detail, then let them choose whether to say more.",
  },
  influencePayoff: {
    feeling: "\"They noticed my good news actually mattered - and they let me enjoy it.\"",
    principle:
      "People become more open with you when they trust that their good moments will be handled well, not ignored or hijacked. The payoff isn't flattery - it's better signal quality: people tell you more when your response shows their news is safe with you.",
    gains: [
      "People feel you notice their good moments, not only their problems.",
      "The conversation becomes warmer without becoming performative.",
      "The speaker gets to relive effort, relief, meaning, or pride.",
      "You learn what matters to them through positive evidence, not interrogation.",
      "Trust rises because you support their agency instead of steering the spotlight to yourself.",
      "You get better signal: good news handled well invites more of it.",
    ],
    whyMostFail: [
      "They stop at \"nice\" or \"great\" and the moment dies with no detail.",
      "They hijack the good news with their own, bigger story.",
      "They over-question a light win until it feels like an interrogation.",
      "They pivot straight to next steps, treating the win as a logistical footnote.",
    ],
  },
  fieldTip: {
    headline: "Make the good news easier to enjoy at their chosen size.",
    body: "A clean move is often only one sentence longer than a generic \"congrats\", but it changes the emotional result. The person hears: I noticed this matters, I understand why, and I won't steal it or overplay it. The rule is simple - match their celebration size, then offer one step more room, not five.",
    example: "That's worth enjoying. What was the best part - or should we just mark it and keep moving?",
    dont: "Nice. Anyway, can you send the deck?",
    do: "That's a real win after all that back-and-forth. What made it finally click?",
  },
  method: [
    {
      step: "1",
      title: "Perception - notice the positive cue",
      body: "Listen for the signal that something good just landed. It may be explicit or a quiet cue such as a small smile after a hard stretch. Catch it before the conversation moves on.",
      examples: [
        { label: "Explicit", text: "\"They said yes.\" / \"It finally worked.\" / \"I passed.\"" },
        { label: "Quiet", text: "A relieved exhale, or \"honestly, that's a weight off.\"" },
      ],
    },
    {
      step: "2",
      title: "Move - mark the positive event",
      body: "Give it a clear but not oversized acknowledgement. You're registering that it matters, not launching a party.",
      examples: [
        { label: "Markers", text: "\"That's a real win.\" / \"That sounds like a relief.\" / \"That is worth taking in.\"" },
      ],
    },
    {
      step: "3",
      title: "Phrase - add one specific reason it matters",
      body: "Use the evidence they gave you. Naming the effort, timing or difficulty shows you were actually listening, not just being polite.",
      examples: [
        { label: "Specific value", text: "\"especially after the last few weeks\" / \"given how much coordination that took\" / \"because you kept at it when it was messy\"" },
      ],
    },
    {
      step: "4",
      title: "Calibration - invite extension with one prompt",
      body: "Ask a single question that lets them choose the depth. Match their celebration size, then offer one step more room - not five.",
      examples: [
        { label: "Prompts", text: "\"What was the best part?\" / \"What made it land?\" / \"What are you enjoying most about it?\"" },
      ],
    },
    {
      step: "5",
      title: "Recovery - reduce intensity if you overshoot",
      body: "If they shrink, joke nervously, deflect, or change subject, ease off at once. The recovery is often warmer than the original move.",
      examples: [
        { label: "Ease off", text: "\"No need to make it huge - I just wanted to register that it matters.\"" },
      ],
    },
    {
      step: "6",
      title: "Chain - only if it genuinely helps",
      body: "Combine with a neighbouring move when useful, not by reflex. Good news is not an opening to dominate the room.",
      examples: [
        { label: "Chains", text: "TC016 to respond actively first, TC018 to name the effort, TC041 if their energy rises around a subtopic, TC021 if they need space." },
      ],
    },
  ],
  liveThreadClues: [
    "finally",
    "I got",
    "it worked",
    "they said yes",
    "we shipped",
    "I passed",
    "I feel relieved",
    "it finally felt real",
    "the best part was",
  ],
  depthDial: [
    {
      depth: "Marker only",
      useWhen: "quietly pleased, task mode, or you're unsure it's welcome",
      phrase: "Good news. Glad that came through.",
    },
    {
      depth: "Marker + value",
      useWhen: "a clear win, or a modest speaker who won't push it themselves",
      phrase: "That's a real win, especially after how long it took.",
    },
    {
      depth: "Marker + value + prompt",
      useWhen: "they seem energised and have room to talk",
      phrase: "That's worth enjoying. What was the best part?",
    },
    {
      depth: "Full extension",
      useWhen: "strong energy, private setting, plenty of time",
      phrase: "I want to mark that properly. What are you most proud of about it?",
    },
  ],
  commonMistakes: [
    {
      mistake: "Generic applause",
      soundsLike: "\"Amazing! Great! Awesome!\" and nothing else.",
      better: "\"That's a strong result - what made the difference?\"",
    },
    {
      mistake: "Spotlight theft",
      soundsLike: "\"That reminds me of when I...\"",
      better: "\"That's your moment. What was the best part for you?\"",
    },
    {
      mistake: "Overcelebration",
      soundsLike: "Turning a quiet win into a big public production.",
      better: "\"I won't make it huge - but it's worth marking.\"",
    },
    {
      mistake: "Forced positivity",
      soundsLike: "\"Come on, you should be more excited than that!\"",
      better: "\"You seem quietly pleased. That's allowed too.\"",
    },
    {
      mistake: "Premature optimisation",
      soundsLike: "\"Great - so what's the next step?\"",
      better: "\"Before we move on, what should not get lost about this?\"",
    },
    {
      mistake: "Suspicion reflex",
      soundsLike: "\"Are you sure that really counts?\"",
      better: "\"That counts. What are you most glad about?\"",
    },
    {
      mistake: "Endless extension",
      soundsLike: "\"And then? And who? And why? And what next?\"",
      better: "One good question, then let them enjoy it.",
    },
  ],
  recoveryPhrases: [
    "I may have made that bigger than you wanted. I just meant: good news.",
    "No need to perform excitement. I'm simply glad it happened.",
    "I'll let it be small, if that's how you want to hold it.",
    "I jumped to my version. Back to yours - what part mattered most to you?",
    "That was me taking the spotlight. Your news deserves the attention here.",
    "I'm over-questioning it. Let's just mark the win and move on.",
    "Sounds like there's good in it and some complexity too. Want to keep it at the headline level?",
    "No need for a big celebration. I just wanted to register that it counts.",
  ],
  bestRecoveryLine: "I may have made that bigger than you wanted. I just meant: good news.",
  chains: [
    {
      label: "Warm open, then extend",
      sequence: "TC024 Warm opening -> TC096 Capitalisation extension",
      example: [
        "Open warmly, then extend the good news they slip in.",
        "\"Good to see you - and hang on, didn't your results come through? What was the best part?\"",
      ],
    },
    {
      label: "Respond, then savour",
      sequence: "TC016 Active-constructive responding -> TC096 Capitalisation extension",
      example: [
        "Respond actively first, then ask the best-part prompt.",
        "\"That's genuinely brilliant. What was the moment you knew it had worked?\"",
      ],
    },
    {
      label: "Name effort, then invite enjoyment",
      sequence: "TC018 Specific appreciation -> TC096 Capitalisation extension",
      example: [
        "Name the specific effort, then let them enjoy the result.",
        "\"You kept at that when it was messy. What part are you most proud of now it's landed?\"",
      ],
    },
    {
      label: "Extend, then give space",
      sequence: "TC096 Capitalisation extension -> TC021 Autonomy release",
      example: [
        "Extend once, then hand control of the celebration back to them.",
        "\"What was the best part? ... No need to unpack it if you're already moving on.\"",
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC016",
      reason:
        "TC016 is the stance - active, constructive, emotionally engaged. TC096 is the second move on top of it: the specific follow-up that invites savour and story. Use TC016 to respond well; use TC096 to extend the moment.",
    },
    {
      id: "TC018",
      reason:
        "TC018 appreciates the person - their trait, effort, or contribution. TC096 extends the event. If the target is what they did, use TC018; if the target is what happened, use TC096.",
    },
    {
      id: "TC022",
      reason:
        "TC022 gives credit, standing, or status, sometimes publicly. TC096 is a private, calibrated extension. Use TC096 to let a win breathe one-to-one; use TC022 for deliberate elevation.",
    },
    {
      id: "TC041",
      reason:
        "TC041 decides which topic strand to follow based on where energy rises. TC096 opens the positive detail in the first place. Use TC096 to extend the good news; use TC041 to choose which thread inside it to follow next.",
    },
    {
      id: "TC054",
      reason:
        "TC054 bonds through a real, shared similarity. TC096 keeps the focus on their win. If \"same here\" serves their moment, chain briefly; if it shifts focus to you, stay with TC096.",
    },
  ],
};
