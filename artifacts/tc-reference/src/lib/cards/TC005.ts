import type { CardData } from "../card-types";

export const TC005: CardData = {
  pdfUrl: "cards/TC005/TC005_TwoCard_Combined.pdf",
  resources: [
    { label: "Two-card (combined)", description: "Front and back study cards on one sheet — the designed visual card.", href: "cards/TC005/TC005_TwoCard_Combined.pdf", type: "pdf", group: "Visual Cards" },
    { label: "One-card summary", description: "The whole technique on a single designed card.", href: "cards/TC005/TC005_OneCard.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Quick card", description: "One-page glance card for fast recall.", href: "cards/TC005/TC005_Quick_Card.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Detailed guide", description: "The full written guide with every section.", href: "cards/TC005/TC005_Detailed_Guide.pdf", type: "pdf", group: "Written Guides" },
    { label: "Reference sheet", description: "Dense one-page reference of the key moves.", href: "cards/TC005/TC005_Reference.pdf", type: "pdf", group: "Written Guides" },
    { label: "Phrase bank (CSV)", description: "Every phrase, ready to import or drill.", href: "cards/TC005/TC005_Phrase_Bank.csv", type: "csv", group: "Practice Tools" },
    { label: "Anki flashcards", description: "Import into Anki for spaced-repetition practice.", href: "cards/TC005/TC005_Anki_Flashcards.csv", type: "csv", group: "Practice Tools" },
  ],
  id: "TC005",
  whyItWorks:
    "Validation without agreement is the habit of acknowledging the understandable feeling, context or concern behind someone's view — without agreeing with the conclusion they have drawn from it. You separate the person's experience, which usually does make sense, from the claim, interpretation or request you may not accept. It works because it lowers defensiveness while keeping the truth, the boundary and the decision intact: people can feel understood without you having to surrender accuracy or cave in to keep the peace.",
  whatItIsNot: [
    "It is not saying they are right, or endorsing inaccurate facts.",
    "It is not soothing someone into compliance, or dodging a boundary that needs to hold.",
    "It is not manipulation, performance, or a softener bolted on before a dismissal.",
    "It is not emotional extraction or a way to force closeness.",
  ],
  overview: {
    coreFormula: [
      "Name what makes sense -> avoid endorsing the claim -> state your boundary or view separately -> invite the next step.",
      "Short form: notice -> name or respond -> invite -> calibrate -> release.",
      "\"I can see why that landed that way\" — even though I read the decision differently.",
      "\"That is a reasonable concern to raise. The frustration makes sense; I don't see it the same way.\"",
      "\"I can see why it felt dismissive. I don't think that was the intent, but the impact is worth talking through.\"",
    ],
    minimumViableMove:
      "Say \"I can see why that landed that way,\" or \"That makes sense as a concern, even if I see the decision differently.\"",
    impact: "High",
    difficulty: "Hard",
    misuse:
      "The main failure mode is validating the inaccurate claim instead of the understandable experience, or using validation as a fake prelude to dismissal.",
    bestFor: [
      "Disagreement",
      "Complaints",
      "Defensiveness",
      "Boundary conversations",
      "Moments where someone has a real concern but a shaky conclusion",
    ],
  },
  notFor: [
    "Validation would imply agreement with unsafe behaviour",
    "You cannot yet identify what is genuinely understandable",
    "The person needs a clear limit first, not acknowledgement",
    "You are using validation as a manipulative softener",
    "Physical safety or an emergency response takes priority",
  ],
  phraseBank: [
    {
      id: "quick-acknowledgements",
      label: "Quick acknowledgements",
      tag: "Concise / one-line",
      tone: "Quick",
      phrases: [
        "I can see why.",
        "That makes sense as a concern.",
        "I get the frustration, even if I disagree.",
        "That's fair to raise.",
        "I can see why that landed that way.",
        "Yeah, that would land badly.",
        "I hear the frustration.",
      ],
    },
    {
      id: "warm-validation",
      label: "Warm validation",
      tag: "Social / supportive",
      tone: "Warm",
      phrases: [
        "I can see why that felt unfair.",
        "That would be frustrating from your side.",
        "I understand why you read it that way, even though I see the situation differently.",
        "It makes sense that it hit you like that.",
        "I can see this really matters to you.",
        "Anyone would feel let down by that.",
        "That sounds like it stung, and I get why.",
      ],
    },
    {
      id: "professional-work",
      label: "Work & meetings",
      tag: "Professional / decisions",
      tone: "Professional",
      phrases: [
        "That is a reasonable concern to raise.",
        "I can see why the process felt unclear.",
        "The frustration makes sense; I don't read the decision the same way.",
        "That's a fair point about the timeline; the call still stands, for these reasons.",
        "I understand the impact on your team. Let me walk you through where it went.",
        "You're right that it moved fast. I don't agree that it skipped your input.",
        "The concern is legitimate. My read of the trade-off is different.",
      ],
    },
    {
      id: "name-then-separate",
      label: "Name it, then state your view",
      tag: "Separating validation from agreement",
      tone: "Direct",
      phrases: [
        "I can see why that felt dismissive. I don't think that was the intent.",
        "The concern makes sense. My decision is still the same, and here's why.",
        "I understand why it looked that way. I read what happened differently.",
        "That's a fair thing to be annoyed about. I still need to hold the line here.",
        "I get why you'd want that. My answer is no, and it's not about you.",
        "Two things are true: your frustration makes sense, and I don't agree with the conclusion.",
        "I hear you, and I'm not going to change the decision — let me explain it, though.",
      ],
    },
    {
      id: "repair-deescalation",
      label: "De-escalation & repair",
      tag: "Softening / recovery",
      tone: "Repair",
      phrases: [
        "I don't mean I agree with every part; I mean I understand why it felt that way.",
        "Let me separate two things: the concern makes sense, and my decision is still the same.",
        "I phrased that badly. I want to acknowledge the impact without pretending the facts are different.",
        "I can see this matters, and I still need to hold the boundary.",
        "That came out more dismissive than I meant. The frustration is fair.",
        "Can we slow down? I don't want to argue the point before you feel heard.",
        "I jumped to defending myself. Let me start with the part that makes sense.",
      ],
    },
    {
      id: "high-stakes-pressure",
      label: "Under pressure",
      tag: "Heated / guarded moments",
      tone: "High-stakes",
      phrases: [
        "I'm not going to pretend I agree, but I do understand why you're angry.",
        "Your frustration is real. I still can't sign off on this, and I'll tell you why.",
        "I can see how much this matters. That doesn't move the limit, but it does change how we talk about it.",
        "I'm hearing that you feel ignored. I don't accept that I ignored you — let's look at it together.",
        "This clearly landed hard. I want to understand it before I defend anything.",
        "I get that you're upset with me. I'd still make the same call, and I won't dress that up.",
      ],
    },
    {
      id: "digital-text",
      label: "Digital / text",
      tag: "Messages & email",
      tone: "Quick",
      phrases: [
        "I can see why that landed badly.",
        "That concern makes sense. I do see the facts a bit differently.",
        "Fair to ask about that. Here's where I'm coming from.",
        "Totally get the frustration — my read on the decision is a bit different, though.",
        "Makes sense you'd flag it. Short version: I don't think it was ignored, and here's why.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "Can you identify the understandable part?",
      action: "Name that part only — the feeling, context or concern, not the conclusion.",
      phrase: "I can see why that felt unfair.",
    },
    {
      condition: "Would your words imply agreement with a false claim?",
      action: "Change the sentence so you validate the experience, not the inaccuracy.",
      phrase: "I understand why it looked that way — I read what happened differently.",
    },
    {
      condition: "Do you need to hold a boundary or a different view?",
      action: "State it separately, after the validation, without a cancelling \"but\".",
      phrase: "The concern makes sense. My decision is still the same, and here's why.",
    },
    {
      condition: "Are they escalating?",
      action: "Slow down and reflect before you explain anything.",
      phrase: "This clearly landed hard. Let me make sure I've got it before I respond.",
    },
    {
      condition: "Have they corrected, answered or moved on?",
      action: "Release the technique and follow the person — don't keep validating.",
      phrase: "Okay — where do you want to take it from here?",
    },
  ],
  ladder: [
    {
      weak: "\"You're right.\" — may falsely agree and store up conflict for later.",
      better: "\"I understand why you're upset, but…\" — validates, then the \"but\" quietly erases it.",
      best: "\"I can see why that felt dismissive. I don't think that was the intent, but the impact is worth talking through.\" — validates the impact while keeping the distinction.",
    },
    {
      weak: "\"Fine, we'll do it your way.\" — caves to keep the peace.",
      better: "\"I hear you, but the answer's no.\" — holds the line but skips the understanding.",
      best: "\"I can see why you'd want this, and it's reasonable to ask. My answer is still no — here's the reason.\" — understanding and boundary, kept apart.",
    },
    {
      weak: "\"That's just how it is.\" — dismisses the concern outright.",
      better: "\"I get it, these things happen.\" — vague, and sounds like a brush-off.",
      best: "\"That's a reasonable thing to raise, and I can see the impact on you. Let me walk you through the decision.\" — names the concern, then explains without denying it.",
    },
  ],
  scenarios: [
    {
      situation: "A complaint",
      move: "Validate the impact before you explain the decision.",
      phrase: "I can see why that felt unfair. Let me show you how the call was made.",
    },
    {
      situation: "Setting a boundary",
      move: "Acknowledge the disappointment while holding the limit.",
      phrase: "I get why you'd want this. The answer's still no, and it's not personal.",
    },
    {
      situation: "Team conflict",
      move: "Validate the process concern without accepting inaccurate blame.",
      phrase: "The concern about how it was handled is fair. I don't agree that it was ignored.",
    },
    {
      situation: "Personal disagreement",
      move: "Name what makes sense before you give your view.",
      phrase: "I can see why you read it that way. Here's how it looked from where I stood.",
    },
    {
      situation: "Someone getting defensive",
      move: "Reflect the feeling first, so they don't have to defend it.",
      phrase: "You're allowed to be annoyed about this. I'm not here to talk you out of it.",
    },
    {
      situation: "A written or text complaint",
      move: "Lead with the acknowledgement, then your view in one clean line.",
      phrase: "Totally fair to flag it. My read on the decision is a bit different — here's why.",
    },
  ],
  calibration: {
    working: [
      "They stop escalating and start clarifying.",
      "They can hear your separate view without arguing it.",
      "They correct the specific issue rather than attacking your character.",
      "They accept a boundary, even if they're disappointed.",
      "Their tone softens and the volume drops.",
      "They say something like \"okay\", \"fair enough\", or \"that's what I meant.\"",
    ],
    adjust: [
      "They give shorter answers or go quiet.",
      "They look tense, or fold their arms.",
      "They correct the frame you offered — you validated the wrong thing.",
      "They repeat the complaint louder, as if unheard.",
      "They bristle at being handled: \"don't manage me.\"",
      "You've validated three times and your own point has vanished.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the moment",
      task: "List three moments from the past week where you disagreed but the other person still had a real point. Note what was understandable in each.",
    },
    {
      day: "Day 2",
      title: "Separate the two parts",
      task: "For each moment, write the understandable experience on one line and the claim you didn't agree with on another. Keep them apart on the page.",
    },
    {
      day: "Day 3",
      title: "Build the ladder",
      task: "Take one real line you've used before. Write it as weak, better and best — validating the impact without erasing it with a \"but\".",
    },
    {
      day: "Day 4",
      title: "Shorten it",
      task: "Say your best line aloud twice, then cut it by about a third until it sounds like ordinary speech, not a script.",
    },
    {
      day: "Day 5",
      title: "Kill the \"but\"",
      task: "Rewrite three of your validations so the boundary or view stands in its own sentence, with no cancelling \"but\" or \"however\".",
    },
    {
      day: "Day 6",
      title: "Field test",
      task: "Use the minimum viable move once in a low-stakes disagreement. Afterwards, note whether they expanded, corrected, softened, shortened or redirected.",
    },
    {
      day: "Day 7",
      title: "Practise recovery",
      task: "In a slightly harder conversation, use one validation and, if it lands wrong, one recovery line. Review which recovery line felt most natural.",
    },
  ],
  checklist: [
    "Did I name what was genuinely understandable, rather than just soothe them?",
    "Did I keep my view or boundary in its own sentence, without a cancelling \"but\"?",
    "Did I use plain language, not a script or therapy-speak?",
    "Did I keep the other person's autonomy intact?",
    "Did I stop after one move instead of over-validating?",
    "Did the exchange get easier, or more self-conscious?",
  ],
  example: {
    without: [
      "Them: \"You ignored my input.\"",
      "You: \"No I didn't.\"",
      "Them: \"You always do this.\"",
      "Why it's weak:",
      "denies the experience outright",
      "turns it into a factual argument",
      "gives them nothing understandable to hold, so they escalate",
    ],
    with: [
      "Them: \"You ignored my input.\"",
      "You: \"I can see why it landed that way — the decision moved before you saw how your point was handled.\"",
      "Them: \"Because you moved ahead without me.\"",
      "You: \"I don't agree that I ignored it, but I do think I should show you where it went.\"",
      "Them: \"That's what I wanted.\"",
      "Why this works:",
      "validates the impact without conceding the false claim",
      "keeps your view in its own clean sentence, no cancelling \"but\"",
      "offers a next step instead of a defence",
    ],
    note: "The simpler 'better' response — \"I can see why it felt that way\" — is enough on its own in low stakes. The advanced version adds the separate view and a next step when the relationship or decision needs it.",
  },
  influencePayoff: {
    feeling:
      "\"They actually got the real part of what I was saying — without me having to win the whole argument.\"",
    principle:
      "People become far more receptive to your view once they feel you've been receptive to theirs.",
    gains: [
      "Lower defensiveness",
      "Preserved truth and accuracy",
      "Boundaries that still hold",
      "Better decision quality under disagreement",
      "Reduced friction — they don't have to defend, decode or rescue the conversation",
      "More trust and conversational ease, without exaggeration",
    ],
    whyMostFail: [
      "They validate the inaccurate claim instead of the understandable experience.",
      "They tack on a \"but\" that quietly cancels the validation.",
      "They over-validate until their own boundary disappears.",
      "They use validation as a fake prelude to dismissal, and the other person feels managed.",
    ],
  },
  fieldTip: {
    headline: "Validate the experience; keep the boundary.",
    body: "The strongest version puts the acknowledgement and your view in two separate sentences. The moment you join them with \"but\", the listener mostly hears what came after it. Say the understandable part, let it land, then state your view or limit as its own clean sentence.",
    example:
      "\"I can see why that felt dismissive. I don't think that was the intent — and I'd like to show you where your point actually went.\"",
    dont: "\"I hear you, but you're wrong about what happened.\"",
    do: "\"I hear you. Here's what happened from my side.\"",
  },
  method: [
    {
      step: "1",
      title: "Notice the cue",
      body: "Catch the moment where someone has a real feeling or concern wrapped around a claim you may not accept. The cue is usually emotional: frustration, feeling unheard, disappointment, blame. That feeling is the part you can validate honestly.",
      examples: [
        { label: "Cue", text: "\"You ignored my input.\" — the live feeling is 'unheard', not the accusation itself." },
      ],
    },
    {
      step: "2",
      title: "Find the understandable part",
      body: "Separate the experience from the claim. Ask yourself what genuinely makes sense here — the impact, the context, the worry — even if the conclusion is off. You will validate that, and only that.",
      examples: [
        { label: "Separate", text: "Understandable: 'the decision moved fast.' Not endorsed: 'you ignored me.'" },
      ],
    },
    {
      step: "3",
      title: "Say the smallest useful move",
      body: "Choose the smallest honest acknowledgement rather than the cleverest line, in plain adult language. Often one sentence is enough.",
      examples: [
        { label: "Minimum", text: "\"I can see why that landed that way.\"" },
      ],
    },
    {
      step: "4",
      title: "Keep your view separate",
      body: "If you hold a different read or a boundary, give it its own sentence. Avoid the cancelling \"but\" — use a full stop, or \"and\", so the validation isn't erased.",
      examples: [
        { label: "Weak", text: "\"I understand, but…\"" },
        { label: "Better", text: "\"I understand why it felt that way. I read what happened differently.\"" },
      ],
    },
    {
      step: "5",
      title: "Watch, then release",
      body: "Watch how they respond and adjust. Once they've corrected, answered or moved on, stop using the technique and follow the person — repeating it turns honesty into a manoeuvre.",
      examples: [
        { label: "Release", text: "\"Okay — where do you want to take it from here?\"" },
      ],
    },
  ],
  liveThreadClues: [
    "\"You always…\" / \"You never…\"",
    "\"You ignored / dismissed / didn't listen to me.\"",
    "\"This isn't fair.\"",
    "\"You don't get it.\"",
    "\"I can't believe you decided that without me.\"",
    "\"Whatever, do what you want.\"",
  ],
  depthDial: [
    {
      depth: "Bare acknowledgement",
      useWhen: "Low stakes; they mainly want to feel heard",
      phrase: "\"I can see why.\"",
    },
    {
      depth: "Acknowledge + name",
      useWhen: "They need to know you understood the specific impact",
      phrase: "\"I can see why that felt dismissive.\"",
    },
    {
      depth: "Acknowledge + view",
      useWhen: "You hold a different read of the facts",
      phrase: "\"…and I don't think that was the intent.\"",
    },
    {
      depth: "Acknowledge + boundary",
      useWhen: "A limit needs to hold",
      phrase: "\"…and the answer is still no.\"",
    },
    {
      depth: "Acknowledge + explain",
      useWhen: "The relationship or decision needs the reasoning",
      phrase: "\"…let me show you where your point actually went.\"",
    },
  ],
  commonMistakes: [
    {
      mistake: "Validating the false claim, not the feeling",
      soundsLike: "\"You're right, I did ignore you.\"",
      better: "\"I can see why it felt that way — I don't agree that I ignored it.\"",
    },
    {
      mistake: "The cancelling \"but\"",
      soundsLike: "\"I understand you're upset, but…\"",
      better: "\"I understand you're upset. Here's how I saw it.\"",
    },
    {
      mistake: "Over-validating until the boundary vanishes",
      soundsLike: "\"You're totally right, forget I said no.\"",
      better: "\"Your frustration makes sense. The answer's still no.\"",
    },
    {
      mistake: "Canned, scripted phrases",
      soundsLike: "\"I hear you and I validate that.\"",
      better: "\"Yeah — I can see why that stung.\"",
    },
    {
      mistake: "Calling a concern valid before you understand it",
      soundsLike: "\"That's totally fair\" (to something you haven't grasped).",
      better: "\"Say more about what felt off — I want to get it right.\"",
    },
  ],
  recoveryPhrases: [
    "I don't mean I agree with every part; I mean I understand why it felt that way.",
    "Let me separate two things: the concern makes sense, and my decision is still the same.",
    "I phrased that badly. I want to acknowledge the impact without pretending the facts are different.",
    "I can see this matters, and I still need to hold the boundary.",
    "That came out more dismissive than I meant it to.",
    "I went straight to defending myself. Let me start with the part that makes sense.",
    "I'm not trying to manage you — I actually do get why you're annoyed.",
  ],
  bestRecoveryLine:
    "I don't mean I agree with every part; I mean I understand why it felt that way.",
  chains: [
    {
      label: "Reflect, then validate",
      sequence: "TC004 Reflective listening -> TC005",
      example: [
        "Them: \"You moved ahead without me.\"",
        "You (reflect): \"So it felt like the decision happened over your head.\"",
        "You (validate without agreement): \"I can see why that landed badly — I don't think it was meant to cut you out.\"",
      ],
    },
    {
      label: "Validate, then a clean request",
      sequence: "TC005 -> TC013 Clean request",
      example: [
        "\"I can see why the timeline frustrated you.\"",
        "\"Going forward, could you flag blockers in the standup rather than after?\"",
      ],
    },
    {
      label: "Validate, then release the pressure",
      sequence: "TC005 -> TC021 Autonomy release",
      example: [
        "\"It makes sense that you'd want to decide this now.\"",
        "\"It's genuinely your call — take the time you need.\"",
      ],
    },
    {
      label: "Validate, then ask before advising",
      sequence: "TC005 -> TC027 Permission-based advice",
      example: [
        "\"That's a fair thing to be worried about.\"",
        "\"Do you want my take, or just a sounding board right now?\"",
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC014",
      reason:
        "Validate the concern validates the legitimacy of the concern itself; TC005 acknowledges the experience without agreeing with the whole interpretation.",
    },
    {
      id: "TC021",
      reason:
        "Autonomy release lifts the pressure to choose; TC005 separates understanding from agreement.",
    },
    {
      id: "TC027",
      reason:
        "Permission-based advice asks before advising; TC005 prepares a disagreement or boundary without invalidating the person.",
    },
    {
      id: "TC037",
      reason:
        "Double-sided reflection reflects two sides of one person's ambivalence; TC005 handles a disagreement between you and them.",
    },
    {
      id: "TC004",
      reason:
        "Reflective listening plays back what they said; TC005 goes one step further and holds your own differing view alongside the acknowledgement.",
    },
    {
      id: "TC077",
      reason:
        "Agreement before disagreement leads with a point of genuine agreement; TC005 validates the experience even when you don't agree with the point at all.",
    },
  ],
};
