import type { CardData } from "../card-types";

export const TC077: CardData = {
  pdfUrl: "cards/TC077/TC077_TwoCard_Combined.pdf",
  resources: [
    { label: "Two-card (combined)", description: "Front and back study cards on one sheet — the designed visual card.", href: "cards/TC077/TC077_TwoCard_Combined.pdf", type: "pdf", group: "Visual Cards" },
    { label: "One-card summary", description: "The whole technique on a single designed card.", href: "cards/TC077/TC077_OneCard.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Quick card", description: "One-page glance card for fast recall.", href: "cards/TC077/TC077_Quick_Card.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Detailed guide", description: "The full written guide with every section.", href: "cards/TC077/TC077_Detailed_Guide.pdf", type: "pdf", group: "Written Guides" },
    { label: "Reference sheet", description: "Dense one-page reference of the key moves.", href: "cards/TC077/TC077_Reference.pdf", type: "pdf", group: "Written Guides" },
    { label: "Phrase bank (CSV)", description: "Every phrase, ready to import or drill.", href: "cards/TC077/TC077_Phrase_Bank.csv", type: "csv", group: "Practice Tools" },
    { label: "Anki flashcards", description: "Import into Anki for spaced-repetition practice.", href: "cards/TC077/TC077_Anki_Flashcards.csv", type: "csv", group: "Practice Tools" },
  ],
  "id": "TC077",
  "whyItWorks":
    "Agreement before disagreement is stating the part you can genuinely accept before you challenge, refine or reject another part of what was said. It is a sequencing move: mark the common ground or the valid piece first, then separate that from the exact point you do not accept. It works because disagreement usually fails in the first two seconds. If the other person hears only rejection, they defend the whole position; naming the true yes first narrows the conflict to the specific contested part. It is not about being softer for its own sake — it is about being more accurate: this part is right, and this other part is where I diverge.",
  "whatItIsNot": [
    "It is not fake agreement — inventing a yes to make someone easier to persuade.",
    "It is not surrender: you can accept one premise while rejecting a conclusion, method, request, accusation or next step.",
    "It is not the \"yes, but\" habit, where the yes is a decorative preface and the \"but\" cancels it immediately.",
    "It is not conflict avoidance — a safety issue, boundary breach or compliance problem still needs a direct interruption first.",
    "It is not a manipulation pattern to corner, pressure or sell; it exists to increase clarity, dignity and mutual accuracy.",
  ],
  "overview": {
    "coreFormula": [
      "Base: \"I agree with [true part]. Where I see it differently is [specific disagreement]. My reason is [brief reason]. I'd suggest [next step].\"",
      "Short: \"I agree with the goal. I disagree with the method.\"",
      "Boundary: \"I understand why that feels urgent. I'm not comfortable doing it that way.\"",
      "Feedback: \"You're right that speed matters. The part I'd challenge is the idea that speed means skipping review.\"",
      "Digital: \"Agreed on the problem. I see a different cause. Could we test that before deciding?\"",
    ],
    "minimumViableMove":
      "Before you say \"I disagree,\" name one real point of agreement in a single sentence.",
    "impact": "High",
    "difficulty": "Medium",
    "misuse":
      "The move fails when the agreement is tokenistic — a decorative yes used to soften a total no — or when you deliver it mechanically, hijack the topic onto your own point, or stack objections until the shared part disappears.",
    "bestFor": [
      "Workplace dissent and productive disagreement",
      "Feedback and performance conversations",
      "Negotiation and objection handling",
      "Family disagreement where the relationship matters",
      "Group decisions that need real dissent, not face-saving compliance",
      "Mixed-truth moments: one reasonable concern, a conclusion you don't share",
      "Online replies and conflict de-escalation",
    ],
  },
  "notFor": [
    "The agreement would be false — you don't actually accept any part.",
    "A boundary has already been crossed, or someone is unsafe.",
    "The other person is using bad-faith pressure.",
    "A fast, direct correction is what the moment requires.",
    "You would be using it as a pacifier to avoid naming the real issue.",
    "Physical safety or an immediate emergency takes priority.",
  ],
  "phraseBank": [
    {
      "id": "quick",
      "label": "Quick openers",
      "tag": "One-line splits",
      "tone": "Quick",
      "phrases": [
        "I agree with the aim. I differ on the route.",
        "Agreed on the goal. Not on the method.",
        "Yes to the what — let me flag the how.",
        "You're right about that part. The next part I'd separate.",
        "I'm with you on the problem. Less sure on the fix.",
        "Agree on the symptom. Not yet on the cause.",
        "Same page on the why. Different read on the timing.",
        "I'm with you up to a point — here's where I split off.",
      ],
    },
    {
      "id": "social",
      "label": "Social and everyday",
      "tag": "Family, friends, rapport",
      "tone": "Warm",
      "phrases": [
        "I agree that it felt frustrating. I see the choice itself a little differently.",
        "You're right that the timing was bad. Where I differ is whether they meant it as an insult.",
        "I agree the situation felt unfair. I read the intention behind it differently.",
        "I can see why that landed badly. I'm just not sure it was aimed at you.",
        "You've got a real point there. The bit I'd gently push back on is one detail.",
        "I'm with you that it mattered. I just land somewhere else on what to do next.",
        "I get why you're annoyed, and I'd have been too. Where I see it differently is whose call it was.",
      ],
    },
    {
      "id": "professional",
      "label": "Work and meetings",
      "tag": "Decisions, feedback, status",
      "tone": "Professional",
      "phrases": [
        "I agree with the objective. I don't agree that this plan is the safest route to it.",
        "The risk you named is real. My concern is that the proposed fix creates a second risk.",
        "I agree the draft has energy. The part I'd work on is the structure.",
        "I agree the presentation had strong examples. The opening is what I'd challenge.",
        "It sounds like we're aligned on the timeline. The budget is where I'd pause.",
        "I agree we need a decision today. I'm not convinced we have enough to make it irreversible.",
        "You're right that speed matters here. What I'd challenge is that speed means skipping review.",
      ],
    },
    {
      "id": "direct",
      "label": "Clear dissent with a next step",
      "tag": "Name the split, offer the move",
      "tone": "Direct",
      "phrases": [
        "I agree the goal is right. Where I differ is shipping without review — I'd suggest a 30-minute blocker-only pass.",
        "The part I agree with is that the handoff was unclear. The part I won't accept is that the whole delay sits with one person.",
        "I agree cost matters. I can't agree to that price without changing the scope.",
        "I agree the scope grew. I can't hold the same timeline unless we drop lower-priority work.",
        "I want to separate those: I agree with X, not with Y.",
        "I agree with the concern. I question the conclusion, and I'd propose a different next step.",
        "Could we test both assumptions before we decide?",
      ],
    },
    {
      "id": "high-stakes",
      "label": "Pressure and boundaries",
      "tag": "Urgency, safety, firm limits",
      "tone": "High-stakes",
      "phrases": [
        "I understand the urgency. I'm not willing to skip the check that protects everyone.",
        "I understand why you want a quick answer. I'm not comfortable committing before I check the details.",
        "I agree delay has costs. I also think an irreversible call without review costs more.",
        "You're right that people are waiting. I still won't skip the step that keeps us safe.",
        "I hear that this feels urgent, and the line for me is doing it without a review.",
        "I agree we're under pressure. That's the reason I want the check, not the reason to drop it.",
      ],
    },
    {
      "id": "repair",
      "label": "Repair and reset",
      "tag": "After a token yes",
      "tone": "Repair",
      "phrases": [
        "That sounded like a token yes before a no. Let me say the agreement more clearly.",
        "I made my disagreement sound larger than it is. We agree on the aim; I only differ on the next step.",
        "I don't want my disagreement to erase the part you got right.",
        "Let me restart: I agree that X matters. I just don't think Y follows from it.",
        "That came out as a setup. I did mean the first part.",
        "I accepted one part too quickly — let me separate what I can agree with from what I can't.",
      ],
    },
  ],
  "decisionTree": [
    {
      "condition": "There's no part you honestly agree with.",
      "action": "Don't fake it. Disagree respectfully and go straight to your reason.",
      "phrase": "I see this differently, and here's why.",
    },
    {
      "condition": "The other person is emotionally activated.",
      "action": "Validate the concern first, then make the agreement/disagreement split.",
      "phrase": "I can see this really matters to you. Can I show you where I land?",
    },
    {
      "condition": "The disagreement is about facts.",
      "action": "Agree with the shared observation, then present the evidence or the uncertainty.",
      "phrase": "We're seeing the same result. I read the cause differently — could we check?",
    },
    {
      "condition": "The disagreement is about values.",
      "action": "Agree with the value you share, then name the competing value or tradeoff.",
      "phrase": "I care about that too. I'm weighing it against the risk on the other side.",
    },
    {
      "condition": "The disagreement is about a request.",
      "action": "Agree with the real need, then state the boundary or an alternative.",
      "phrase": "The need makes sense. I can't do it that way, but I can offer this.",
    },
    {
      "condition": "They treat your agreement as full consent.",
      "action": "Clarify the split and re-name the contested piece.",
      "phrase": "I want to separate those: I agree with X, not with Y.",
    },
  ],
  "ladder": [
    {
      "weak": "\"I disagree.\" Clear but broad — it makes the other person defend their whole position.",
      "better": "\"I agree with the goal, but I disagree with the plan.\" This separates aim from method, though \"but\" can still feel like cancellation.",
      "best": "\"I agree with the goal: we need this resolved today. Where I differ is shipping without review — a 30-minute review protects the deadline better than a rollback tomorrow.\"",
    },
    {
      "weak": "\"That's not true.\"",
      "better": "\"Part of that is true.\"",
      "best": "\"The part I agree with is that the handoff was unclear. The part I would not accept is that the whole delay sits with one person.\"",
    },
    {
      "weak": "\"Your draft needs work.\"",
      "better": "\"The draft is good, but the structure is off.\"",
      "best": "\"I agree the draft has real energy. The one thing I'd rework is the structure, so the point lands sooner.\"",
    },
  ],
  "scenarios": [
    {
      "situation": "A workplace plan under deadline",
      "move": "Accept the pressure and the shared goal, narrow the disagreement to the method, offer a lighter path.",
      "phrase": "I agree the deadline matters. I disagree that skipping QA is the fastest path — I'd suggest a blocker-only review.",
    },
    {
      "situation": "Feedback on someone's work",
      "move": "Name a genuine strength, then challenge one specific part.",
      "phrase": "I agree the examples were strong. The part I'd challenge is the opening — it took too long to reach the point.",
    },
    {
      "situation": "Negotiation on scope and price",
      "move": "Agree the constraint is real, then tie your limit to a clear tradeoff.",
      "phrase": "I agree the scope increased. I can't hold the same timeline unless we remove lower-priority work.",
    },
    {
      "situation": "Family conflict",
      "move": "Accept the feeling, differ on the interpretation.",
      "phrase": "I agree the situation felt unfair. I see the intention behind it differently.",
    },
    {
      "situation": "An online or public reply",
      "move": "Concede the shared observation, keep the contested point to one, invite a test.",
      "phrase": "Agreed on the problem. I'm less convinced by the cause — the data could also fit another explanation.",
    },
    {
      "situation": "Someone pushing for a quick yes",
      "move": "Acknowledge the pull for speed, then hold a clean boundary.",
      "phrase": "I understand why you want a quick answer. I'm not comfortable committing before I check the details.",
    },
  ],
  "calibration": {
    "working": [
      "They nod, slow down, or soften.",
      "They ask about your reason instead of defending everything.",
      "They refine or narrow their own claim.",
      "They acknowledge the distinction you drew.",
      "The conversation moves to the one contested point rather than the whole position.",
      "They offer a next step or a test of their own.",
    ],
    "adjust": [
      "They say \"so you disagree with everything\" — re-name the specific agreement and separate the contested piece.",
      "They say \"you're not listening\" or \"that's not what I meant\" — slow down and restate what you actually accept.",
      "They use your agreement as proof you accepted the whole conclusion — clarify: \"I agree with X, not with Y.\"",
      "Their concern is emotional or identity-linked — add validation before the split.",
      "The disagreement turns on facts, cost or safety — lead with evidence, not just wording.",
      "They pressure you to accept a demand because you granted one valid part — move to boundary language.",
    ],
  },
  "drill": [
    {
      "day": "Day 1",
      "title": "Spot the true yes",
      "task": "Through the day, catch three disagreements (yours or other people's). For each, write down the one part you could genuinely accept.",
    },
    {
      "day": "Day 2",
      "title": "Split the statement",
      "task": "Take a disagreement you expect this week. Make two columns — \"part I genuinely agree with\" and \"part I contest\" — and speak one sentence from each.",
    },
    {
      "day": "Day 3",
      "title": "Replace \"but\"",
      "task": "Rewrite five \"I agree, but…\" lines using \"and,\" \"where I differ,\" or a full stop, so the yes survives the sentence.",
    },
    {
      "day": "Day 4",
      "title": "One-point dissent",
      "task": "Respond to a complex claim with only one contested point. Notice the urge to stack objections, and drop the extras.",
    },
    {
      "day": "Day 5",
      "title": "Add the reason and the next step",
      "task": "Take yesterday's dissent and finish the formula: one brief reason, then one concrete next step or test.",
    },
    {
      "day": "Day 6",
      "title": "Recovery rehearsal",
      "task": "Practise aloud: \"That sounded like a token yes. Let me separate it more cleanly,\" until it sounds natural rather than scripted.",
    },
    {
      "day": "Day 7",
      "title": "Live review",
      "task": "Use the move in one real disagreement, then score yourself 0/1 on: real agreement, specific dissent, brief reason, respectful next step.",
    },
  ],
  "checklist": [
    "Did I name a real point of agreement, not a fake softener?",
    "Was the agreement specific enough that they could recognise it?",
    "Did I keep the agreement from implying full consent?",
    "Was my disagreement narrow — one behavioural, factual or decision-specific point?",
    "Did I bridge with \"and\" or \"where I differ\" rather than a cancelling \"but\"?",
    "Did I give one reason and a next step without lecturing?",
  ],
  "example": {
    "without": [
      "Them: \"We should skip the review — everyone is waiting.\"",
      "You: \"No, that's a bad idea. We can't do that.\"",
      "Why it's weak:",
      "the disagreement is global, not specific",
      "it rejects the whole position, including the true part — people really are waiting",
      "it invites a status contest rather than a decision",
    ],
    "with": [
      "Them: \"We should skip the review — everyone is waiting.\"",
      "You (better): \"I agree that people are waiting, but I disagree with skipping review.\" Clearer — though the \"but\" can make the agreement feel perfunctory.",
      "You (advanced): \"I agree the wait is becoming costly, and I want us to move today. Where I differ is the idea that skipping review saves time. If this comes back broken, we lose more than the review costs. I'd suggest a 30-minute review with only release blockers.\"",
      "Why the advanced version works:",
      "it accepts the pressure and the shared goal",
      "it narrows the disagreement to the method, not the person",
      "it gives a concrete reason and a practical next move",
    ],
    "note":
      "The \"better\" line isn't wrong — it's just where most people stop. The advanced version keeps the yes intact and hands over a next step.",
  },
  "influencePayoff": {
    "feeling":
      "\"They heard the strongest part of what I said before they pushed back.\"",
    "principle":
      "People trust disagreement more when it is specific, proportionate and visibly grounded in what they actually said.",
    "gains": [
      "Lower defensiveness",
      "Higher receptivity to your actual point",
      "Perceived fairness — you heard the reasonable part first",
      "A smaller, workable question: which part is shared, which is contested, what happens next",
      "More credibility for your dissent",
      "A protected relationship alongside a clear disagreement",
    ],
    "whyMostFail": [
      "The agreement is tokenistic — a decorative yes that a quick \"but\" immediately cancels.",
      "It's delivered mechanically, so it reads as a technique rather than a genuine signal.",
      "The speaker hijacks the topic onto their own point instead of staying on the person's actual claim.",
      "Objections sprawl until the shared part disappears under a pile of disagreements.",
    ],
  },
  "fieldTip": {
    "headline":
      "Say the agreement as if it matters, then the disagreement as if it's bounded.",
    "body":
      "When in doubt, separate the three things people fuse together: the concern, the conclusion and the next step. You can agree with the concern, question the conclusion, and still propose a different next step.",
    "example": "\"I agree with the aim. I differ on the route.\"",
    "do": "Name what's true first, specifically enough that they'd recognise it.",
    "dont":
      "Use the yes as a runway for a total no — that's the \"token yes\" everyone can feel.",
  },
  "method": [
    {
      "step": "1",
      "title": "Perception — find the true yes",
      "body":
        "Listen for the part that is accurate, reasonable, understandable, values-aligned or emotionally valid. In a mixed-truth moment there is almost always one real point to accept.",
    },
    {
      "step": "2",
      "title": "Move — name it specifically",
      "body":
        "State that part explicitly. Skip vague filler when you can name the real agreement — specificity is what makes the yes land as genuine rather than as a setup.",
      "examples": [
        { "label": "Vague", "text": "\"I hear you.\"" },
        { "label": "Specific", "text": "\"I agree the deadline is real and slipping it has a cost.\"" },
      ],
    },
    {
      "step": "3",
      "title": "Phrase — bridge without cancelling",
      "body":
        "Join the two halves with \"and,\" \"where I see it differently,\" \"the part I'd separate,\" or \"my concern is.\" Add one brief reason and, if useful, a next step. Keep the disagreement to a single point.",
      "examples": [
        { "label": "Cancelling", "text": "\"I agree, but that won't work.\"" },
        { "label": "Bridged", "text": "\"I agree the goal is right, and where I differ is the method.\"" },
      ],
    },
    {
      "step": "4",
      "title": "Calibration — watch the response",
      "body":
        "Notice whether they relax, clarify, ask a better question or become more specific. If they tighten, slow down and validate the concern on its own before returning to the split.",
    },
    {
      "step": "5",
      "title": "Recovery — repair a token yes",
      "body":
        "If the agreement sounded tokenistic, name it and reset: \"That came out as a setup. I did mean the first part — let me separate it more cleanly.\"",
    },
    {
      "step": "6",
      "title": "Chain — add structure when needed",
      "body":
        "When the moment needs more, combine with reflective listening, validation without agreement, double-sided reflection, SBI or NVC/OFNR.",
    },
  ],
  "liveThreadClues": [
    "\"You always…\" / \"You never…\" — one true instance wrapped in an overstatement",
    "\"We should just skip…\" — real pressure attached to a risky shortcut",
    "\"This is the only way…\" — a valid goal riding on a false constraint",
    "\"It's obvious that…\" — a shared observation with a contested conclusion",
    "\"Everyone thinks…\" — a real feeling stated as proven fact",
    "A claim that's half accurate and half overstated",
  ],
  "depthDial": [
    {
      "depth": "Light",
      "useWhen": "low-stakes, quick exchange",
      "phrase": "\"Agreed on the aim — I'd differ on the route.\"",
    },
    {
      "depth": "Validating",
      "useWhen": "the concern is emotional or identity-linked",
      "phrase": "\"I can see why this matters to you. Here's where I land differently.\"",
    },
    {
      "depth": "Evidence",
      "useWhen": "the split turns on facts, cost, timelines or safety",
      "phrase": "\"We're seeing the same result. I read the cause differently — could we check?\"",
    },
    {
      "depth": "Boundary",
      "useWhen": "they push you to accept a demand because you granted one part",
      "phrase": "\"I agree with X. I'm still not able to say yes to Y.\"",
    },
  ],
  "commonMistakes": [
    {
      "mistake": "Token agreement",
      "soundsLike": "\"I totally agree, but…\" then a full rejection.",
      "better": "\"I agree the goal is right. The one thing I'd change is the method.\"",
    },
    {
      "mistake": "Over-agreeing to keep the peace",
      "soundsLike": "Conceding points you don't actually believe.",
      "better": "\"I can agree with the deadline. I can't agree that we drop the review.\"",
    },
    {
      "mistake": "Vague agreement",
      "soundsLike": "\"I hear you.\"",
      "better": "\"I agree that the handoff was genuinely unclear.\"",
    },
    {
      "mistake": "Agreeing with the wrong thing",
      "soundsLike": "Agreeing with a feeling when they asked for a factual answer.",
      "better": "\"I get that it's frustrating — and on the numbers, I read it differently.\"",
    },
    {
      "mistake": "Reaching for \"but\" too fast",
      "soundsLike": "\"Yes, but…\" — the yes vanishes.",
      "better": "\"Yes — and where I differ is…\"",
    },
    {
      "mistake": "Disagreement sprawl",
      "soundsLike": "Stacking four objections after the agreement.",
      "better": "\"There's more, but let's stay on the one that matters most.\"",
    },
    {
      "mistake": "Performative diplomacy",
      "soundsLike": "Sounding polished while dodging the real issue.",
      "better": "\"To be clear about where I actually differ: here it is.\"",
    },
  ],
  "recoveryPhrases": [
    "I made that sound like a total disagreement. It isn't — I agree with the goal; I differ on the method.",
    "That sounded like a token yes before a no. Let me say the agreement more clearly.",
    "I don't want my disagreement to erase the part you got right.",
    "I accepted one part too quickly. Let me separate what I can agree with from what I can't.",
    "You're right to call out that concern — my disagreement is with the conclusion, not the concern.",
    "I'm not asking you to drop your point. I'm asking us to separate the shared part from the contested part.",
    "Let me restart: I agree that X matters. I just don't think Y follows from it.",
  ],
  "bestRecoveryLine":
    "That sounded like a token yes before a no. Let me say the agreement more clearly.",
  "chains": [
    {
      "label": "Reflect first, then split",
      "sequence": "Reflective listening (TC004) → Agreement before disagreement",
      "example": [
        "\"So the worry is that we'll miss the launch window.\"",
        "\"You're right that the window is tight. Where I differ is that skipping the test protects it.\"",
      ],
    },
    {
      "label": "Validate, then agree only with what's true",
      "sequence": "Validation without agreement (TC005) → Agreement before disagreement",
      "example": [
        "\"It makes sense you're frustrated after that call.\"",
        "\"I agree the process was clumsy. I don't agree it was deliberate.\"",
      ],
    },
    {
      "label": "Split, then structure the feedback",
      "sequence": "Agreement before disagreement → SBI (TC052)",
      "example": [
        "\"I agree the report was thorough.\"",
        "\"In the meeting, the summary ran ten minutes, and we lost the decision time.\"",
      ],
    },
    {
      "label": "Disagree, then hand back the choice",
      "sequence": "Agreement before disagreement → Autonomy release (TC021)",
      "example": [
        "\"I agree the aim is right; I differ on the route.\"",
        "\"You don't have to take my view — that's just the distinction I see.\"",
      ],
    },
  ],
  "relatedTechniques": [
    {
      "id": "TC005",
      "reason":
        "Validation without agreement: use TC077 when you genuinely accept one part and then disagree with another; use TC005 when the feeling or concern makes sense but you don't accept the claim, conclusion or request. Choose TC077 only when the agreement is real.",
    },
    {
      "id": "TC014",
      "reason":
        "Validate the concern: use TC077 to make disagreement easier to hear; use TC014 when the worry itself first needs to be taken seriously. Ask whether they need acknowledgement or a decision distinction.",
    },
    {
      "id": "TC037",
      "reason":
        "Double-sided reflection: use TC077 when you're stating your own disagreement; use TC037 when you're reflecting the other person's ambivalence. Choose TC077 when your view must be explicit.",
    },
    {
      "id": "TC052",
      "reason":
        "SBI: use TC077 as the opening move to lower defensiveness, then SBI when the feedback needs a clean situation-behaviour-impact account.",
    },
    {
      "id": "TC053",
      "reason":
        "NVC / OFNR: use TC077 for one concise, bounded split; use NVC/OFNR when the moment needs full observation, feeling, need and request structure.",
    },
    {
      "id": "TC076",
      "reason":
        "Interrogation avoidance: use TC077 when clarity is owed and your dissent must be clear; use TC076 when the risk is making the other person feel cross-examined.",
    },
  ],
};
