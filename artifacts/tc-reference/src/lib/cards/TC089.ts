import type { CardData } from "../card-types";

export const TC089: CardData = {
  pdfUrl: "cards/TC089/TC089_TwoCard_Combined.pdf",
  resources: [
    { label: "Two-card (combined)", description: "Front and back study cards on one sheet — the designed visual card.", href: "cards/TC089/TC089_TwoCard_Combined.pdf", type: "pdf", group: "Visual Cards" },
    { label: "One-card summary", description: "The whole technique on a single designed card.", href: "cards/TC089/TC089_OneCard.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Quick card", description: "One-page glance card for fast recall.", href: "cards/TC089/TC089_Quick_Card.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Detailed guide", description: "The full written guide with every section.", href: "cards/TC089/TC089_Detailed_Guide.pdf", type: "pdf", group: "Written Guides" },
    { label: "Reference sheet", description: "Dense one-page reference of the key moves.", href: "cards/TC089/TC089_Reference.pdf", type: "pdf", group: "Written Guides" },
    { label: "Phrase bank (CSV)", description: "Every phrase, ready to import or drill.", href: "cards/TC089/TC089_Phrase_Bank.csv", type: "csv", group: "Practice Tools" },
    { label: "Anki flashcards", description: "Import into Anki for spaced-repetition practice.", href: "cards/TC089/TC089_Anki_Flashcards.csv", type: "csv", group: "Practice Tools" },
  ],
  id: "TC089",
  whyItWorks:
    "Risk reduction is the move of making the next step feel safer before you ask someone to engage, decide, disagree, give feedback, try something, or tell you the truth. You lower the perceived downside — naming what is low-stakes, optional, reversible, private, time-bounded, or easy to decline — and then invite one small next move. It does not remove real risk; it makes the real risk clearer, smaller where possible, and easier to choose around. People often resist not the idea itself but the hidden risk of commitment, embarrassment, wasted time, or being locked into a path, so capping that downside honestly lets them engage accurately instead of defensively.",
  whatItIsNot: [
    "It is not false reassurance — saying \"no risk\" when there is real risk.",
    "It is not pressure in soft language — saying \"no pressure\" while implying a social cost for saying no.",
    "It is not avoiding accountability — reducing discomfort while hiding consequences, trade-offs, or ownership.",
    "It is not minimising a legitimate concern — telling someone \"it is not a big deal\" when it is a big deal to them.",
    "It is not conflict avoidance — reducing the risk around a hard topic is not the same as dodging the topic.",
  ],
  overview: {
    coreFormula: [
      "Step + risk cap + control/exit + small next ask.",
      "I am asking for a first reaction, not a decision. A quick no is fine. Could you skim the outline and tell me what feels risky?",
      "This does not have to become a standing meeting. Could we try it once and review whether it helped?",
      "You do not have to agree with my read. I want to understand what feels off before we choose a path.",
      "Short version: small step, easy exit, real choice.",
    ],
    minimumViableMove:
      "Say one honest sentence that caps the next step, then offer a real exit: \"This is just a first read, not a commitment. A quick no is completely fine.\"",
    impact: "Medium",
    difficulty: "Hard",
    misuse:
      "It curdles into pressure wearing soft clothing — saying \"no pressure\" or \"no risk\" while still implying a cost for declining, or framing an irreversible ask as a reversible trial. The test is simple: if the person no longer feels free to decline, question, or name a risk after your phrase, it has become pressure, not risk reduction.",
    bestFor: [
      "Asking someone to try a small experiment.",
      "Inviting honest feedback or disagreement.",
      "Raising a sensitive topic without cornering the person.",
      "Making a low-stakes proposal, introduction, meeting, or follow-up.",
      "Responding to a concern, objection, or hesitation.",
      "Repairing after tension when the other person may fear another argument.",
      "Digital outreach where the recipient may fear a long exchange.",
      "Work requests where time, ownership, visibility, or decision-rights are unclear.",
    ],
  },
  notFor: [
    "The real risk is high and needs formal handling, consent, legal advice, safety planning, or escalation.",
    "You are tempted to downplay consequences to get agreement.",
    "The person has already said no clearly.",
    "A boundary, apology, or accountability step is needed before a new ask.",
    "The other person needs full information, not a smaller frame.",
    "The issue is a safety, harassment, medical, legal, or financial matter, or a power-sensitive situation.",
    "Physical safety or an immediate emergency response takes priority.",
  ],
  phraseBank: [
    {
      id: "quick",
      label: "Quick one-liners",
      tag: "Fast caps and exits",
      tone: "Quick",
      phrases: [
        "A quick no is fine.",
        "A quick no is fine; I will not chase it.",
        "If it does not help, we stop.",
        "First page only; no full review needed.",
        "One conversation; no need to decide today.",
        "This is a first read, not a decision.",
        "Small step, easy exit, real choice.",
      ],
    },
    {
      id: "professional",
      label: "Proposals & meetings",
      tag: "Work proposal / meeting",
      tone: "Professional",
      phrases: [
        "I am not asking for a full commitment yet. Could we treat this as a one-week test and review it after?",
        "This can be a 15-minute triage, not a new workstream. If there is no value, we stop there.",
        "This does not have to become a standing meeting. Could we try it once and review whether it helped?",
        "Could we treat this as a two-week test with a stop point, not a permanent process change?",
        "One-week test; rollback if it adds friction.",
        "This is reversible. If it adds friction after two cycles, we roll it back.",
      ],
    },
    {
      id: "direct",
      label: "Bounded asks",
      tag: "Name the ask and the non-ask",
      tone: "Direct",
      phrases: [
        "I am asking for a first reaction, not a decision. A quick no is fine. Could you skim the outline and tell me what feels risky?",
        "Could you spend five minutes on the first page only and tell me what feels unclear or risky? A quick no is fine.",
        "You do not have to solve this; I am asking for your read.",
        "Let us separate trying it from committing to it.",
        "The lowest-risk version would be...",
        "What downside should we protect against?",
        "What would make this feel safer or more workable?",
      ],
    },
    {
      id: "warm",
      label: "Low-pressure invitations",
      tag: "Social / invitation",
      tone: "Warm",
      phrases: [
        "No pressure at all; I am asking because I would enjoy it, not because I expect a yes.",
        "I would enjoy it, but a no is completely fine. No explanation needed.",
        "I want to make the choice easier, not push you into it.",
        "You can revise, pause, or decline this.",
        "You do not have to decide now — it would help to know what would make it feel workable, or not.",
      ],
    },
    {
      id: "repair",
      label: "Feedback & conflict repair",
      tag: "Repair / feedback safety",
      tone: "Repair",
      phrases: [
        "This is a first read, not a final verdict. I want to check whether the pattern I am seeing matches your experience.",
        "I do not want this to become a blame conversation. Could we look at the risk we are each trying to avoid?",
        "I am not asking you to move past it. I would like one chance to understand the impact, and then you can decide what you want next.",
        "I am not asking you to agree with me or move past it. Could I hear what impact it had, and then we can decide whether to continue?",
        "I want to discuss one behaviour and its impact, not make a broad judgment about you.",
        "You do not have to agree with my read. I want to understand what feels off before we choose a path.",
      ],
    },
    {
      id: "high-stakes",
      label: "Sensitive & high-pressure",
      tag: "Sensitive topic / urgency",
      tone: "High-stakes",
      phrases: [
        "You can stop me if this feels like too much. I want to raise it carefully, not force the conversation.",
        "You can stop the conversation at any point. I want to raise it carefully, not force disclosure.",
        "Let us separate the urgent part from the permanent decision. What is the smallest safe move for today?",
        "I am not asking you to fix it tonight. I would value five minutes to check whether I am seeing the issue clearly.",
        "I am not asking you to agree. I want to understand the impact, and we can pause if it gets circular.",
      ],
    },
    {
      id: "objections",
      label: "Objections & experiments",
      tag: "Customer / team experiment",
      tone: "Professional",
      phrases: [
        "We do not need to commit to the full option. We can test the low-risk version and review the downside first.",
        "We can start with the low-risk version and review before any wider commitment.",
        "Let us run it for one cycle, define the rollback condition, and review.",
        "Start with the low-risk version; we widen it only if it proves worthwhile.",
      ],
    },
    {
      id: "digital",
      label: "Digital / text",
      tag: "Short async replies",
      tone: "Quick",
      phrases: [
        "A one-line answer is enough. If now is not a fit, no need to explain.",
        "A yes or no is enough — if it is not useful, no explanation needed.",
        "If it is easier to reply another time, that is completely fine.",
      ],
    },
  ],
  method: [
    {
      step: "1",
      title: "Spot the risk signal",
      body:
        "Before you push the ask, notice the hesitation. Risk shows up as delay, a vague concern, silence, over-explaining, a defensive tone, or a stalling line like \"I need to think about it.\" That signal is your cue that the perceived downside — not the idea itself — is the obstacle.",
      examples: [
        { label: "Clue", text: "\"I'm not sure I have capacity for that.\"" },
        { label: "Clue", text: "A long pause, then \"What exactly would this involve?\"" },
      ],
    },
    {
      step: "2",
      title: "Name the likely risk without mind-reading",
      body:
        "Guess the concern tentatively and let them correct you. Offer it as a possibility, not a diagnosis — \"I can imagine the concern might be time,\" not \"You are afraid of commitment.\" Naming it aloud makes it discussable; asserting it makes them defensive.",
      examples: [
        { label: "Do", text: "\"I can imagine the risk is that this turns into a new workstream.\"" },
        { label: "Don't", text: "\"You always avoid extra work.\"" },
      ],
    },
    {
      step: "3",
      title: "Cap the next step honestly",
      body:
        "Shrink the real downside along whichever axis is in play — time, reversibility, exposure, scope, or decision authority. The cap has to be true: a trial that secretly locks them in is not a cap. Match the cap to the risk — time or effort, limit the duration or workload; commitment, make it a test, draft, or reversible trial; blame or status, protect face and privacy; ambiguity, state the exact ask and the non-ask.",
      examples: [
        { label: "Time", text: "\"A 15-minute triage, not a new workstream.\"" },
        { label: "Commitment", text: "\"A one-cycle test with a stop point on Friday.\"" },
      ],
    },
    {
      step: "4",
      title: "Give a real exit or choice",
      body:
        "Make declining, pausing, revising, or choosing a smaller version explicitly acceptable — and mean it. The test is simple: would they still feel free to say no after your phrase? If not, you have added pressure, not reduced risk.",
      examples: [
        { label: "Exit", text: "\"A quick no is fine; I will not chase it.\"" },
        { label: "Choice", text: "\"You can revise it, pause it, or pick a smaller version.\"" },
      ],
    },
    {
      step: "5",
      title: "Ask for the smallest useful move",
      body:
        "Request one small, concrete thing: a first reaction, a quick no, a preferred option, or a single condition that would make it safer. A narrow ask is easier to say yes to and easier to decline cleanly.",
      examples: [
        { label: "Ask", text: "\"Could you skim the first page and mark the one part that feels least clear?\"" },
      ],
    },
    {
      step: "6",
      title: "Calibrate, then continue or stop",
      body:
        "Read the response. If they relax or ask a practical question about the smaller version, continue. If they stay guarded, ask what risk is still present rather than repeating the cap. If they decline clearly, stop cleanly. The whole move should sound calm, concrete, and easy to verify.",
      examples: [
        { label: "Calibration question", text: "\"What risk is still present for you?\"" },
        { label: "Clean stop", text: "\"Understood. Thanks for considering it; I will leave it there.\"" },
      ],
    },
  ],
  liveThreadClues: [
    "\"I need to think about it.\"",
    "\"I'm not sure.\"",
    "\"What's the catch?\"",
    "A pause or a delayed reply",
    "Vague or repeated concerns",
    "Over-explaining or justifying",
    "A defensive or guarded tone",
    "Silence after your ask",
  ],
  influencePayoff: {
    feeling: "\"I can look at this without getting trapped — I could still say no.\"",
    principle:
      "People resist the perceived downside more than the idea itself. A person may not object to what you are proposing; they object to the hidden risk of commitment, embarrassment, loss of control, wasted time, or being locked into a path.",
    gains: [
      "Separates a small next step from a large commitment.",
      "Makes disagreement safer, and therefore more honest.",
      "Converts vague reluctance into a specific, workable concern.",
      "Reduces defensive posture in feedback and repair conversations.",
      "Gives the other person control instead of cornering them.",
      "Helps a request feel easier without hiding the real ask.",
    ],
    whyMostFail: [
      "They hijack the topic or deliver the frame mechanically, so it sounds like a script.",
      "They reduce their own risk while leaving the real cost sitting on the other person.",
      "They say \"no risk\" or \"no pressure\" without proof, so the reassurance rings hollow.",
      "They cap the downside falsely — calling an irreversible ask a reversible trial.",
    ],
  },
  ladder: [
    {
      weak: "Can you tell me what you think?",
      better: "Could you give me a first reaction? No need for a full review.",
      best: "Could you spend five minutes on the first page only and tell me what feels unclear or risky? A quick no is fine.",
    },
    {
      weak: "Let us do this.",
      better: "Maybe we could try it once.",
      best: "Could we treat this as a one-cycle test, with no commitment beyond Friday and a stop option if it adds friction?",
    },
    {
      weak: "Can we talk about what happened?",
      better: "I do not want to fight. Can we talk?",
      best: "I am not asking you to agree or move past it. Could I hear what impact it had, and then we decide whether to continue?",
    },
    {
      weak: "I need you to stop doing that.",
      better: "Could you maybe not do that?",
      best: "I want to make one clear request without turning it into a confrontation: could we not discuss that topic at dinner? If you disagree, we can find another boundary.",
    },
  ],
  example: {
    without: [
      "A: We need to talk about the rollout problem.",
      "B: I am not sure I have capacity for another big process discussion.",
      "A: It will be fine. It is not a big deal. Just hear me out.",
      "B: That sounds like it is becoming a big thing.",
      "Why it fails: A minimises the concern and asks for attention without reducing the actual risk.",
    ],
    with: [
      "A: I want to raise the rollout issue, and I can imagine the risk is that it turns into blame or a new workstream.",
      "B: Exactly.",
      "A: I do not want either. Could we do a 10-minute risk map — what might break, who is affected, and the smallest containment step? If it starts becoming blame, we pause it.",
      "B: That is workable.",
      "A: Good. And if the safest move is \"no new action today,\" that is still a valid outcome.",
      "Why it works: A names the likely risk, caps time and scope, protects autonomy, and makes stopping a legitimate outcome.",
    ],
    note:
      "The plain-better version simply caps time (\"a 10-minute triage, no decision today\"). The advanced version also names the feared risk aloud and makes \"no action\" a valid result — that is what turns reluctance into a workable yes.",
  },
  calibration: {
    working: [
      "They ask a practical question about the smaller version.",
      "Their tone or wording becomes more specific.",
      "They name the remaining risk directly.",
      "They choose among the options you offered.",
      "They give a conditional yes.",
      "They relax, lean in, or share more detail.",
    ],
    adjust: [
      "They repeat the same concern after your first risk cap.",
      "They ask, \"What is the catch?\"",
      "They sound reassured but still do not engage.",
      "They say yes quickly with obvious tension.",
      "They focus on a different downside than the one you addressed.",
      "They say no clearly — accept it and stop.",
      "The issue turns out to involve safety, consent, or real authority — stop capping and handle it properly.",
      "The exchange becomes about persuading them rather than clarifying their choice — reset to \"What risk is still present for you?\"",
    ],
  },
  decisionTree: [
    {
      condition: "You do not actually need a next step from them",
      action: "Do not reduce risk — just listen, validate, or hold off on fixing.",
      phrase: "I do not need anything from you here — I just wanted to understand it.",
    },
    {
      condition: "The real risk is high, formal, unsafe, or consent-sensitive",
      action: "Do not reduce it rhetorically. Escalate, disclose, seek consent, or use the proper process.",
      phrase: "This is bigger than I can cap honestly — let us handle it properly.",
    },
    {
      condition: "The main risk is time or effort",
      action: "Cap the duration or the workload.",
      phrase: "Could we make this a 10-minute triage, not a new workstream?",
    },
    {
      condition: "The main risk is commitment or being locked in",
      action: "Make it a test, draft, first read, or reversible trial.",
      phrase: "Let us treat it as a one-cycle test with a stop point, not a permanent change.",
    },
    {
      condition: "The main risk is blame or loss of face",
      action: "Frame it around impact, protect privacy, and offer a stop point.",
      phrase: "I want to look at one behaviour and its impact, not judge you — and we can pause if it gets circular.",
    },
    {
      condition: "After your phrase they stay guarded or decline",
      action: "Name the leftover risk once, then accept a clear no.",
      phrase: "What risk is still present for you? If the answer is no, that is a fine answer.",
    },
  ],
  scenarios: [
    {
      situation: "Work proposal",
      move: "They fear a new workstream — bound it to a reversible trial with a stop point.",
      phrase: "Could we treat this as a two-week test with a stop point, not a permanent process change?",
    },
    {
      situation: "Feedback",
      move: "They fear a character judgment — narrow it to one behaviour and its impact.",
      phrase: "I want to discuss one behaviour and its impact, not make a broad judgment about you.",
    },
    {
      situation: "Conflict repair",
      move: "They fear another argument — drop the demand to agree and offer a pause.",
      phrase: "I am not asking you to agree. I want to understand the impact, and we can pause if it gets circular.",
    },
    {
      situation: "Social invitation",
      move: "They fear obligation — make declining costless and explanation-free.",
      phrase: "I would enjoy it, but a no is completely fine. No explanation needed.",
    },
    {
      situation: "Digital follow-up",
      move: "They fear a long reply — shrink the required answer to one line.",
      phrase: "A one-line answer is enough. If it is not a fit, no need to explain.",
    },
    {
      situation: "Sensitive topic",
      move: "They fear exposure — hand them the stop button before you start.",
      phrase: "You can stop the conversation at any point. I want to raise it carefully, not force disclosure.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Claiming \"no risk\" when the risk is real",
      soundsLike: "\"There's no downside here.\"",
      better: "\"The risk I can reduce is scope; the decision itself still matters.\"",
    },
    {
      mistake: "Vague comfort language",
      soundsLike: "\"No pressure.\"",
      better: "\"A quick no is fine, and I will not follow up again unless you ask.\"",
    },
    {
      mistake: "Making the person reassure you",
      soundsLike: "\"Sorry, is this okay? Are you sure it's okay?\"",
      better: "Keep the focus on their choice, not your nervousness: \"You can decline this with no explanation.\"",
    },
    {
      mistake: "Reducing only your own risk",
      soundsLike: "\"It's quick for me to send over.\"",
      better: "Cap the cost that lands on them: \"First page only — no full review needed.\"",
    },
    {
      mistake: "Hiding the larger commitment",
      soundsLike: "Calling it a \"quick trial\" that actually locks them in.",
      better: "\"This is a one-cycle test with a real stop point on Friday.\"",
    },
    {
      mistake: "Over-explaining the safety frame",
      soundsLike: "A three-minute preamble about how low-risk it is.",
      better: "One or two concrete caps: \"Ten minutes, no decision today.\"",
    },
    {
      mistake: "Trying again after a clear no",
      soundsLike: "\"Just one more thing on that...\"",
      better: "Let the exit be real: \"Understood. I will leave it there.\"",
    },
    {
      mistake: "Skipping repair when harm has occurred",
      soundsLike: "Reducing risk around the next ask while the earlier hurt is unaddressed.",
      better: "Apologise or repair first, then reduce the risk around the next conversation.",
    },
  ],
  recoveryPhrases: [
    "I may have made that sound lower-risk than it is. Let me restate the real trade-off.",
    "I do not want \"no pressure\" to become pressure. A no is completely acceptable.",
    "I think I guessed the wrong risk. What concern should I be paying attention to?",
    "Let me slow down — I am asking for a small read, not a decision.",
    "You are right; there is more consequence here than I named.",
    "I do not want to sell this. Let us work out what would make it safe enough, or decide it is not worth doing.",
    "That was too much framing from me. What would be the lowest-friction next step from your side?",
    "We can leave this here. Thanks for being direct.",
  ],
  bestRecoveryLine:
    "I do not want \"no pressure\" to become pressure. A no is completely acceptable — and if the cleanest answer is no, I will respect it.",
  chains: [
    {
      label: "Validate then bound",
      sequence: "Validate the concern -> Risk reduction -> Small ask",
      example: [
        "\"That time concern makes complete sense.\"",
        "\"Could we make this a 10-minute trial rather than a standing meeting?\"",
        "\"If it does not earn its place, we drop it.\"",
      ],
    },
    {
      label: "Clean request, capped",
      sequence: "NVC / OFNR -> Risk reduction -> Autonomy release",
      example: [
        "\"When the handoff slips, I feel stretched, because I need a predictable Friday.\"",
        "\"My request is a one-week test, not a permanent rule.\"",
        "\"And no is an acceptable answer.\"",
      ],
    },
    {
      label: "Safe feedback",
      sequence: "SBI -> Risk reduction -> Recovery phrase",
      example: [
        "\"In Monday's meeting, the direction changed after the interruption.\"",
        "\"I want to raise it as one example, not a character judgment.\"",
        "\"If I have read it wrong, tell me — I would rather know.\"",
      ],
    },
    {
      label: "Workable pilot",
      sequence: "Ask what would make it workable -> Risk reduction -> Clean request",
      example: [
        "\"What would make this workable for you?\"",
        "\"Good — let us protect those conditions.\"",
        "\"The clean request is a two-day pilot with a stop point.\"",
      ],
    },
  ],
  checklist: [
    "What risk did I actually notice — and did I name it tentatively, or just assume it?",
    "Did I reduce a real downside, or only use softer language?",
    "Was the next step small enough to be believable?",
    "Was the exit real — could they decline with no cost?",
    "Did the person become more specific, relaxed, or honest — and did I stop when they declined?",
    "Did I make the choice clearer and safer, or make pressure sound polite?",
  ],
  fieldTip: {
    headline: "Do not say \"no pressure\" unless you can prove it.",
    body:
      "Vague comfort words — \"no pressure,\" \"no risk,\" \"it's nothing\" — ask the other person to trust you. A real risk-reduction phrase shows its working: it names exactly how the ask is smaller, safer, or easier to decline, so they can see the cap for themselves rather than take it on faith.",
    example:
      "\"A quick no is fine; I will not chase it.\" / \"First page only; no full review needed.\" / \"One-week test; rollback if it adds friction.\"",
    dont: "\"No pressure, just let me know your thoughts.\"",
    do: "\"A yes or no is enough — first page only, and I will not follow up unless you ask.\"",
  },
  relatedTechniques: [
    {
      id: "TC021",
      reason:
        "Both can sound like \"no pressure.\" Autonomy release protects the person's freedom to choose; risk reduction shrinks the actual downside of a specific next step. Reach for autonomy release when freedom is the issue, risk reduction when hidden commitment or cost is.",
    },
    {
      id: "TC014",
      reason:
        "Validating the concern acknowledges the feeling; risk reduction changes the risk around acting on it. Validate first when emotion is high, then reduce risk once they are ready to consider a step.",
    },
    {
      id: "TC090",
      reason:
        "Both lower pressure. Do-not-fix-yet removes the pressure to solve when someone just needs to be heard; risk reduction lowers the risk of a bounded next step you do need. Use do-not-fix-yet when listening is enough.",
    },
    {
      id: "TC083",
      reason:
        "Both tackle friction. Ask-what-would-make-it-workable hands the design of the condition to them; risk reduction offers a safe first frame when the likely downside is already visible.",
    },
    {
      id: "TC092",
      reason:
        "Face-saving disagreement protects dignity when the main risk is status loss; risk reduction is for when the main risk is time, commitment, exposure, or reversibility.",
    },
    {
      id: "TC088",
      reason:
        "A one-screen message compresses scattered information and cognitive load; risk reduction addresses the interpersonal risk of commitment, pressure, or consequence. Compress with one, make the ask safe to answer with the other.",
    },
  ],
  drill: [
    {
      day: "Day 1",
      title: "List your asks",
      task: "Write down five asks you make often: a feedback request, a meeting, a proposal, a repair, an invitation.",
    },
    {
      day: "Day 2",
      title: "Find the hidden risk",
      task: "For each ask, name the risk the other person is likely weighing: time, commitment, exposure, conflict, status, ambiguity, or control.",
    },
    {
      day: "Day 3",
      title: "Write a risk cap",
      task: "For each ask, write one honest cap in twelve words or fewer that shrinks the time, scope, or consequence.",
    },
    {
      day: "Day 4",
      title: "Add a real exit",
      task: "Add one explicit, believable exit to each — a way to decline, pause, or revise with no cost.",
    },
    {
      day: "Day 5",
      title: "Add the small next ask",
      task: "Add one small next move to each: a first reaction, a quick no, a preferred option, or a single condition that would make it safer.",
    },
    {
      day: "Day 6",
      title: "Say it out loud",
      task: "Say each full line aloud once and cut anything that sounds like a script or a sales pitch.",
    },
    {
      day: "Day 7",
      title: "Strip soft pressure",
      task: "Delete any phrase that is pressure wearing soft clothing, and rehearse a clean stop for when the answer is no.",
    },
  ],
};
