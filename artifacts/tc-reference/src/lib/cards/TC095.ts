import type { CardData } from "../card-types";

export const TC095: CardData = {
  pdfUrl: "cards/TC095/TC095_TwoCard_Combined.pdf",
  resources: [
    { label: "Two-card (combined)", description: "Front and back study cards on one sheet — the designed visual card.", href: "cards/TC095/TC095_TwoCard_Combined.pdf", type: "pdf", group: "Visual Cards" },
    { label: "One-card summary", description: "The whole technique on a single designed card.", href: "cards/TC095/TC095_OneCard.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Quick card", description: "One-page glance card for fast recall.", href: "cards/TC095/TC095_Quick_Card.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Detailed guide", description: "The full written guide with every section.", href: "cards/TC095/TC095_Detailed_Guide.pdf", type: "pdf", group: "Written Guides" },
    { label: "Reference sheet", description: "Dense one-page reference of the key moves.", href: "cards/TC095/TC095_Reference.pdf", type: "pdf", group: "Written Guides" },
    { label: "Phrase bank (CSV)", description: "Every phrase, ready to import or drill.", href: "cards/TC095/TC095_Phrase_Bank.csv", type: "csv", group: "Practice Tools" },
    { label: "Anki flashcards", description: "Import into Anki for spaced-repetition practice.", href: "cards/TC095/TC095_Anki_Flashcards.csv", type: "csv", group: "Practice Tools" },
  ],
  id: "TC095",
  whyItWorks:
    "DEAR MAN is an assertive-communication framework for getting a clear request, refusal or boundary into a hard conversation — without making the other person guess, sliding into blame, or collapsing into apology. Say what happened (Describe), how it affects you (Express), what you want or won't do (Assert) and the constructive reason (Reinforce); then stay Mindful, Appear confident and Negotiate the workable details. It works because it compresses an emotionally loaded moment into a short sequence you can actually remember under pressure: facts and owned impact land better than labels and blame, and separating the non-negotiable core from the flexible details lets the other person cooperate without feeling cornered.",
  whatItIsNot: [
    "Not an ultimatum dressed up as respectful communication.",
    "Not a way to win an argument by sounding structured, or to force someone to accept your preferred outcome.",
    "Not a substitute for listening, apology or repair when you caused the harm.",
    "Not a reason to keep engaging with someone who is threatening, abusive or unsafe.",
    "Not a way to turn every preference into a demand — a clear ask does not entitle you to compliance.",
  ],
  overview: {
    coreFormula: [
      "Full sequence: Describe → Express → Assert → Reinforce, then stay Mindful, Appear confident, Negotiate.",
      "Minimum viable move: facts → impact → ask or no → why it helps.",
      "Four-sentence form: “When X happened, Y was the effect. I need Z. That would help because A. I can flex on B, but the main ask is Z.”",
      "Boundary form: “When X happens, it creates Y. I can't do Z. What I can do is A. If that doesn't work, we need another plan.”",
      "Field rule: be precise about the request and flexible about the route.",
    ],
    minimumViableMove:
      "Here's what happened, here's how it affects me, here's what I need, and here's why it helps. I can flex on the details, not on the core ask.",
    impact: "Medium",
    difficulty: "Hard",
    misuse:
      "It fails when clarity curdles into pressure — turning Assert into a demand, Mindful into stubborn repetition, or reaching for the structure when the moment actually needs listening, apology or repair.",
    bestFor: [
      "Asking for a specific change in behaviour.",
      "Saying no to a request without over-explaining.",
      "Renegotiating workload, timing, boundaries or recurring friction.",
      "Raising a concern when you're tempted to hint, resent, withdraw or over-escalate.",
      "Preparing for a conversation where you tend to lose the point under pressure.",
      "Turning a vague grievance into an actionable request.",
    ],
  },
  notFor: [
    "The situation is unsafe and disengaging is wiser.",
    "The real need is emotional validation before any problem solving.",
    "You don't yet know what you're actually asking for.",
    "You'd be using the structure to punish, pressure or corner.",
    "The person has already said no and you're tempted to repeat harder.",
    "A formal process, mediator, manager, clinician or legal adviser is required.",
  ],
  phraseBank: [
    {
      id: "quick",
      label: "One-breath starters",
      tag: "Quick openers",
      tone: "Quick",
      phrases: [
        "Here's what happened, and here's what I need.",
        "The main ask is this — I can flex on the rest.",
        "Can we settle this one thing before we leave the meeting?",
        "Short version: I need it by noon tomorrow.",
        "I can't do the whole thing, but I can do part of it.",
        "I'd like to sort one thing before we move on.",
      ],
    },
    {
      id: "describe",
      label: "Describe — facts without blame",
      tag: "Naming the facts",
      tone: "Professional",
      phrases: [
        "The last two meetings started about fifteen minutes late.",
        "The agreement was that I'd handle the slides and you'd send the figures.",
        "I got the change request after the final version had already gone out.",
        "You asked me to cover Saturday with one day's notice.",
        "The figures came in Thursday afternoon; the deadline was Friday morning.",
      ],
    },
    {
      id: "express",
      label: "Express — own the impact",
      tag: "Owning the effect",
      tone: "Warm",
      phrases: [
        "That leaves me rushed and more likely to miss something.",
        "I felt put on the spot.",
        "I'm concerned the current setup isn't sustainable.",
        "I want to help, but I'm already at capacity.",
        "That gave me very little time to review it properly.",
      ],
    },
    {
      id: "assert",
      label: "Assert — the ask or the no",
      tag: "Direct request / refusal",
      tone: "Direct",
      phrases: [
        "Please send the figures by 2 pm today.",
        "I'm not available for Saturday.",
        "I need us to agree the handoff before we leave this meeting.",
        "Please raise changes before final approval, not after.",
        "I can discuss options, but I can't take on the whole task.",
        "This is the boundary I can keep.",
        "I need the draft by noon the day before submission.",
      ],
    },
    {
      id: "reinforce",
      label: "Reinforce — why it helps",
      tag: "The constructive reason",
      tone: "Professional",
      phrases: [
        "That gives me enough time to do the work properly.",
        "That keeps the workload predictable for both of us.",
        "That helps us avoid a rushed correction later.",
        "That makes it easier for me to say yes when I actually can help.",
        "That gives us both time to catch problems before the client sees it.",
      ],
    },
    {
      id: "mindful",
      label: "Mindful — stay with the point",
      tag: "Returning under deflection",
      tone: "High-stakes",
      phrases: [
        "I hear there are other issues. I'm happy to discuss those after this — right now I need to settle the deadline.",
        "I'm not debating intent. I'm asking for the handoff to happen by 2 pm.",
        "We can come back to the wider history. The decision in front of us is the timing.",
        "We can discuss that separately. Right now I'm talking about this one thing.",
        "I'm staying with the request: the draft by noon.",
        "I understand you're disappointed. I'm still not available.",
        "That's a fair point, and I still need an answer on the deadline.",
      ],
    },
    {
      id: "negotiate",
      label: "Negotiate — flexible detail, stable core",
      tag: "Workable alternatives",
      tone: "Repair",
      phrases: [
        "I can't do Saturday, but I can help find someone else today.",
        "I need the draft by noon; if it's not all ready, send the sections that are done.",
        "I can't say yes to that scope, but I can do a smaller version by Friday.",
        "What option would meet your need without putting this back on me?",
        "Core figures by noon works; the appendix by 4 pm is fine if you flag what's unfinished.",
        "I can review one section by 4 pm, or help find who else has capacity.",
        "Let me put this in writing: here's what happened, here's the effect, and here's what I need by when — if that timing doesn't work, propose an alternative first.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "The situation is unsafe or threatening",
      action: "Disengage and use a formal or safety process. Don't use DEAR MAN to stay in danger.",
      phrase: "I'm going to stop this conversation here.",
    },
    {
      condition: "You don't yet know your objective",
      action: "Pause and write one sentence before you speak.",
      phrase: "I want X. / I'm not willing to do Y.",
    },
    {
      condition: "The main need is validation or repair, not a request",
      action: "Validate, apologise or listen first; hold the ask for now.",
      phrase: "I can see this is frustrating. Can we start there?",
    },
    {
      condition: "One clean request would do the job",
      action: "Use a single direct ask and skip the full sequence.",
      phrase: "Please send the figures by 2 pm.",
    },
    {
      condition: "Emotion, pushback or negotiation is likely",
      action: "Use the full DEAR MAN sequence, negotiating only the flexible detail.",
      phrase: "Here's what happened, here's the effect, here's what I need, here's why it helps.",
    },
    {
      condition: "They keep deflecting after two restatements",
      action: "Stop repeating and move to your prepared exit line.",
      phrase: "I'm going to pause here and revisit this later.",
    },
  ],
  ladder: [
    {
      weak: "I guess I'll just do it again. (a hint wrapped in resentment — the ask never lands)",
      better: "Please send it earlier next time. (clearer, but vague on timing and reason)",
      best: "The last two sets came in under a day before deadline, which leaves me rushing. I need them by noon the day before — that cuts the error risk. If the appendix is late, send the core figures first.",
    },
    {
      weak: "You clearly don't care about my time. (blame-first — the facts get buried)",
      better: "I can't cover Saturday because I have a prior commitment. (direct boundary, brief reason)",
      best: "You asked me to cover Saturday with a day's notice. I'm already committed and it puts me in a bind. I can't take this Saturday. If requests come earlier I can usually help — and I can help you message the group today.",
    },
    {
      weak: "It's fine, don't worry about it. (withdraws while resentment builds)",
      better: "Can we talk about how the handoffs are going? (opens it, but there's no actual ask)",
      best: "When changes come in after final approval, the published version can end up inconsistent. Please route changes through the review thread from now on — that keeps us all working from the same version.",
    },
  ],
  scenarios: [
    {
      situation: "Workplace deadline — repeated late inputs",
      move: "Run the full sequence, then negotiate one flexible detail while the deadline itself holds.",
      phrase:
        "The last two inputs arrived under a day before deadline, which leaves me rushing. I need them by noon the day before — if the appendix is late, send the core figures first.",
    },
    {
      situation: "A friend asks for repeated favours",
      move: "Acknowledge you want to help, name the pattern, then give a clear no with an earlier-notice offer.",
      phrase:
        "You've asked me to cover transport three times this month. I care about helping, but it's affecting my own schedule. I can't drive this weekend — if you ask earlier next time, I can tell you what's realistic.",
    },
    {
      situation: "A family boundary at dinner",
      move: "Describe the recurring moment, own the feeling, state the limit, offer a private alternative.",
      phrase:
        "When the conversation turns to my finances at dinner, I feel exposed. I'm not going to discuss my budget at family meals — I'm happy to talk privately if there's a practical concern.",
    },
    {
      situation: "A written or digital message",
      move: "Put the facts, impact and ask in one clear message and route future changes cleanly.",
      phrase:
        "To keep this clear: the file was changed after approval, so the published version may be inconsistent. Please route any further changes through the review thread — that keeps everyone on the same version.",
    },
    {
      situation: "Saying no to extra work when you're at capacity",
      move: "Acknowledge the urgency, state the limit, offer a smaller concrete alternative.",
      phrase:
        "I know this is urgent. I'm already committed to two things today, so I can't take the whole task — I can review one section by 4 pm or help find who else has capacity.",
    },
    {
      situation: "High-emotion conflict",
      move: "Validate the feeling first, then step into a single held request; don't weaponise the structure.",
      phrase:
        "I can see this is frustrating. I still need to stay with the decision about Saturday — I can't attend, and I can talk about alternatives for next week.",
    },
  ],
  calibration: {
    working: [
      "They can repeat your ask back accurately.",
      "Their response shifts from defending to weighing options.",
      "They ask clarifying questions about timing, scope or alternatives.",
      "You feel steady enough to keep your voice clear.",
      "The conversation stays on the issue rather than sliding into global blame.",
      "Afterwards, they know exactly what you're asking, why it matters, what's flexible and what isn't.",
    ],
    adjust: [
      "They seem genuinely surprised by the facts — slow down and check shared understanding.",
      "Your request is landing as too large or too vague — tighten it to one sentence.",
      "They raise a legitimate constraint — fold it into the negotiation rather than talking over it.",
      "Your tone is starting to sound prosecutorial — soften the delivery, keep the ask.",
      "The moment needs validation, apology or context before the ask — give that first.",
      "Repetition is turning into pressure — stop restating and pause.",
      "The conversation is looping with no new information — move to your exit line.",
      "The person becomes threatening, or the issue needs a formal process — disengage; DEAR MAN isn't the tool.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Pick the objective",
      task: "Choose one real request or boundary from your own life. Write the single sentence you most want the other person to understand.",
    },
    {
      day: "Day 2",
      title: "Draft the four DEAR sentences",
      task: "Write one line each for Describe, Express, Assert and Reinforce. Keep Describe to observable facts only — no motives or character claims.",
    },
    {
      day: "Day 3",
      title: "Sharpen the Assert",
      task: "Cut the Assert sentence until you can say it in one breath. Strip any blame, and swap “you have to” for “I need” or “I can't.”",
    },
    {
      day: "Day 4",
      title: "Mark negotiable vs fixed",
      task: "Underline what can flex (timing, format, sequence, scope) and what can't (the core need). Write one negotiate line that offers a flexible detail while holding the core.",
    },
    {
      day: "Day 5",
      title: "Rehearse the tone",
      task: "Say the whole script aloud once in a warm voice and once in a firm voice. Write two Mindful return lines for when the conversation drifts.",
    },
    {
      day: "Day 6",
      title: "Pressure-test it",
      task: "Have a partner (or yourself) deflect with “Why are you making this a big deal?” or “You do this too.” Practise one calm return line, then your exit line.",
    },
    {
      day: "Day 7",
      title: "Run it for real",
      task: "Use the minimum viable move in one live conversation. Afterwards, note the one sentence you'd shorten or drop next time.",
    },
  ],
  checklist: [
    "Did I describe observable facts rather than motives or character?",
    "Was my ask or no specific enough that they could act on it?",
    "Did I reinforce a constructive reason rather than threaten or bribe?",
    "Did I stay mindful without ignoring legitimate information?",
    "Did I negotiate the details without surrendering the core boundary?",
    "Did I stop or pause when repetition stopped being useful?",
  ],
  example: {
    without: [
      "You: You always do this — you dump things on me at the last second and expect me to rescue it.",
      "Colleague: That's not fair. I've been busy too.",
      "You: Whatever. I'll just fix it like usual.",
      "Why it fails: the real ask is buried under blame; the speaker escalates, then collapses. There is no clean request left for anyone to act on.",
    ],
    with: [
      "You: The last two figure sets came in less than a day before the deadline. That leaves me rushing the final review, and I'm concerned it raises the error risk. For the next report, I need the figures by noon the day before — that gives us both time to catch problems.",
      "Colleague: You don't understand how long the figures take.",
      "You: I hear that they take time, and I'm not questioning the effort. I'm staying with the handoff point: I need them by noon the day before, or I need to know earlier that the deadline has to move.",
      "Colleague: Could I send the core figures by noon and the appendix later?",
      "You: Yes — core figures by noon works. Appendix by 4 pm is fine if you flag anything unfinished.",
      "Why it works: facts, owned impact and a direct ask; no argument about intent; one calm restatement; then a negotiated detail that leaves the core deadline intact.",
    ],
    note: "The advanced version never argues about intent. It repeats the core ask once, stays factual, and negotiates only the flexible detail — the deadline itself holds.",
  },
  influencePayoff: {
    feeling:
      "They come away knowing exactly what you're asking, why it matters, and what can flex — instead of having to decode a hint or brace against blame.",
    principle:
      "Facts and owned impact land better than labels and blame; separating the non-negotiable core from the flexible details lets people cooperate without feeling cornered.",
    gains: [
      "Clarity — they can tell what issue you're raising and what you want.",
      "Lower defensiveness — owned impact invites a response instead of a counter-attack.",
      "Self-respect — you don't have to hint, over-apologise or explode to be heard.",
      "Relationship protection — the ask is direct, but the constructive reason is on the table.",
      "Negotiability — the framework separates the hard limit from the details that can move.",
      "Repeatability — a short script you can actually hold together under pressure.",
    ],
    whyMostFail: [
      "They turn Assert into pressure and Mindful into stubborn repetition.",
      "They deliver it mechanically, as a script, instead of also listening.",
      "They run it too late — once they're already furious, the structure comes out as punishment.",
      "They reach for it when the real need was validation, apology or repair.",
    ],
  },
  fieldTip: {
    headline: "Keep the Assert short enough to repeat calmly.",
    body: "If you can't say your ask in one breath, it's probably too long. Cut the speech down to four beats: here's what happened, here's the effect, here's what I need, here's what can flex. The person should leave knowing the ask, not admiring the structure.",
    example: "Here's what happened. Here's the effect. Here's what I need. Here's what can flex.",
    dont: "Deliver a polished paragraph they'll admire but can't act on.",
    do: "State the ask in one plain sentence, then stop and let them respond.",
  },
  method: [
    {
      step: "1",
      title: "Choose one objective",
      body: "Before you speak, write the single sentence you want understood. If you have three objectives, pick the one that matters most — trying to land all of them at once is how the point gets lost.",
      examples: [
        { label: "Request", text: "I need the figures by noon the day before." },
        { label: "Refusal", text: "I can't take that shift." },
      ],
    },
    {
      step: "2",
      title: "Describe — the facts only",
      body: "Name what actually happened in observable terms, with no mind-reading or character claims. Facts are hard to argue with; labels invite a defence.",
      examples: [
        { label: "Facts", text: "The report was due Monday and I received it Thursday." },
        { label: "Not this", text: "You never respect deadlines." },
      ],
    },
    {
      step: "3",
      title: "Express — the owned effect",
      body: "State the impact in a short, owned sentence: “That put me under time pressure,” or “I felt blindsided.” Own it as your experience rather than a verdict on them — impact lands, accusation rebounds.",
    },
    {
      step: "4",
      title: "Assert — the ask or the no",
      body: "Say it directly and keep it short enough to repeat in one breath. Prefer “I need” and “I can't” over “you have to” — the second escalates faster.",
      examples: [
        { label: "Ask", text: "Please send the figures by 2 pm today." },
        { label: "No", text: "I'm not available for Saturday." },
      ],
    },
    {
      step: "5",
      title: "Reinforce — the constructive reason",
      body: "Name the benefit briefly so cooperation makes sense: “That gives us time to catch problems,” or “That keeps the schedule fair.” One line — a five-minute justification starts to sound like a sales pitch.",
    },
    {
      step: "6",
      title: "Hold it: Mindful, steady, negotiable",
      body: "If the conversation drifts, return to the point once or twice without adding a new accusation. Keep your voice firm but not sharp — steadiness isn't coldness. Stay flexible on timing, format or sequence while protecting the core ask; if it turns circular or unsafe, use your exit line.",
      examples: [
        { label: "Return", text: "I'm not debating intent — I'm asking for the handoff by 2 pm." },
        { label: "Exit", text: "I'll pause here and come back to this later." },
      ],
    },
  ],
  liveThreadClues: [
    "I keep hinting and nothing changes.",
    "I'm about to just do it again, resentfully.",
    "I said yes but I meant no.",
    "I'm rehearsing an angry speech in my head.",
    "I've been avoiding bringing this up for weeks.",
  ],
  depthDial: [
    {
      depth: "One clean line",
      useWhen: "No real friction — a simple ask will do.",
      phrase: "Please send the figures by 2 pm.",
    },
    {
      depth: "Minimum viable (four beats)",
      useWhen: "Mildly loaded, but the other person is cooperative.",
      phrase: "Here's what happened, here's the effect, here's what I need, here's why it helps.",
    },
    {
      depth: "Full DEAR MAN",
      useWhen: "Emotion, pushback or negotiation is likely.",
      phrase: "When X happened, Y was the effect. I need Z, because A. I can flex on B, but the main ask is Z.",
    },
    {
      depth: "Boundary form",
      useWhen: "You're refusing, not requesting.",
      phrase: "I can't do Z. What I can do is A. If that doesn't work, we need another plan.",
    },
    {
      depth: "Hold + exit",
      useWhen: "They keep deflecting after two restatements.",
      phrase: "I'm staying with the request: X by Y. If we can't stay on it, I'll pause and come back later.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Starting with Express instead of Describe",
      soundsLike: "I feel completely disrespected and taken for granted.",
      better: "The figures came in Thursday; the deadline was Friday. That left me rushing the review.",
    },
    {
      mistake: "Turning Assert into a demand",
      soundsLike: "You have to send these earlier from now on.",
      better: "I need the figures by noon the day before.",
    },
    {
      mistake: "Over-reinforcing until it sounds like a sales pitch",
      soundsLike: "A five-minute explanation of every reason it would help.",
      better: "That gives us time to catch problems — that's the main reason.",
    },
    {
      mistake: "Using Mindful as stonewalling",
      soundsLike: "Repeating the ask while ignoring a genuine constraint they've raised.",
      better: "I hear the figures take time — let's build that in. I still need them by noon.",
    },
    {
      mistake: "Appearing confident by sounding cold",
      soundsLike: "A flat, clipped, slightly superior delivery.",
      better: "Steady and warm: I'd like us to sort this out together.",
    },
    {
      mistake: "Negotiating away the whole boundary",
      soundsLike: "Fine, forget it, I'll just do it all again.",
      better: "I can flex on the format, but I can't take on the whole task.",
    },
    {
      mistake: "Running it too late, or when an apology is due",
      soundsLike: "Launching the script while furious, or asserting when you caused the problem.",
      better: "I got that wrong — let me own it first, then we can sort the handoff.",
    },
  ],
  recoveryPhrases: [
    "I started too sharply — let me restate that with the facts first.",
    "I'm not trying to accuse you. I'm trying to make the handoff workable.",
    "I made that sound like a demand. The core request is the noon handoff, and I'm open on the rest.",
    "I hear there's more context — let me understand that before I repeat the ask.",
    "I don't want to pressure you. You can say no; I still need to be clear about what I can and can't do.",
    "We're getting off track. The issue I'm trying to resolve is the deadline.",
    "This is becoming circular. I'll pause and come back when we can stay with the decision.",
    "I can see that landed badly. What I meant was: here's the impact, and here's the request.",
  ],
  bestRecoveryLine:
    "I made that sound like a demand. The core request is the noon handoff, and I'm open on the rest.",
  chains: [
    {
      label: "Feedback, then ask",
      sequence: "SBI → DEAR MAN",
      example: [
        "SBI: In the last two reports, the figures arrived under a day before deadline, which left the review rushed.",
        "DEAR MAN: So for the next one I need them by noon the day before — that cuts the error risk.",
      ],
    },
    {
      label: "Validate, then hold the line",
      sequence: "Validation without agreement → DEAR MAN",
      example: [
        "I can see this weekend is stressful for you.",
        "I still can't cover Saturday. I can help you message the group today to find someone.",
      ],
    },
    {
      label: "Start light, add structure",
      sequence: "Clean request → DEAR MAN",
      example: [
        "Please send the figures earlier next time.",
        "If it's brushed off: The last two came in under a day before deadline, which leaves me rushing. I need them by noon the day before — if the appendix is late, send the core figures first.",
      ],
    },
    {
      label: "Ask, then release",
      sequence: "DEAR MAN → Autonomy release",
      example: [
        "I need the draft by noon, because that gives us time to catch issues.",
        "You may not be able to agree to that — I still need to be clear about what I can and can't take on.",
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC013",
      reason:
        "Clean request: a single direct ask. Use it when one sentence will do; step up to DEAR MAN when facts, impact, reason and negotiation are all needed.",
    },
    {
      id: "TC094",
      reason:
        "Bounded request: both create clear asks. Use Bounded request when the problem is too much scope, time or decision load; use DEAR MAN when the whole interpersonal exchange is the hard part.",
    },
    {
      id: "TC052",
      reason:
        "SBI (Situation-Behaviour-Impact) can feed the Describe and Express steps. Use SBI when the move is feedback only; continue into DEAR MAN when you also need a clear ask or no.",
    },
    {
      id: "TC053",
      reason:
        "NVC / OFNR: both use facts, feelings and requests. Use OFNR when the conversation needs needs-language and empathy; use DEAR MAN when it needs a firmer ask or refusal with negotiation.",
    },
    {
      id: "TC045",
      reason:
        "Ask-Tell-Ask: use it when the objective is to explain and check understanding; use DEAR MAN when the objective is a request, refusal or boundary.",
    },
    {
      id: "TC027",
      reason:
        "Permission-based advice: use it when you're offering a suggestion (“Would it be useful if...”); use DEAR MAN when you're stating your own need (“I need” / “I can't”).",
    },
  ],
};
