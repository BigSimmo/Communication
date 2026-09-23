import type { CardData } from "../card-types";

export const TC081: CardData = {
  pdfUrl: "cards/TC081/TC081_TwoCard_Combined.pdf",
  resources: [
    { label: "Two-card (combined)", description: "Front and back study cards on one sheet — the designed visual card.", href: "cards/TC081/TC081_TwoCard_Combined.pdf", type: "pdf", group: "Visual Cards" },
    { label: "One-card summary", description: "The whole technique on a single designed card.", href: "cards/TC081/TC081_OneCard.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Quick card", description: "One-page glance card for fast recall.", href: "cards/TC081/TC081_Quick_Card.pdf", type: "pdf", group: "Visual Cards" },
    { label: "Detailed guide", description: "The full written guide with every section.", href: "cards/TC081/TC081_Detailed_Guide.pdf", type: "pdf", group: "Written Guides" },
    { label: "Reference sheet", description: "Dense one-page reference of the key moves.", href: "cards/TC081/TC081_Reference.pdf", type: "pdf", group: "Written Guides" },
    { label: "Phrase bank (CSV)", description: "Every phrase, ready to import or drill.", href: "cards/TC081/TC081_Phrase_Bank.csv", type: "csv", group: "Practice Tools" },
    { label: "Anki flashcards", description: "Import into Anki for spaced-repetition practice.", href: "cards/TC081/TC081_Anki_Flashcards.csv", type: "csv", group: "Practice Tools" },
  ],
  id: "TC081",
  whyItWorks:
    "COIN is a four-part structure for giving clear behavioural feedback — Context, Observation, Impact, Next step — without tipping into blame, personality judgement or a lecture. You name the specific moment, describe what was actually seen or heard, explain the practical effect, and agree what should change. It works because it keeps feedback anchored to observable behaviour rather than identity or motive, which lowers defensiveness, and because it ends with a concrete action instead of a vague complaint, which makes the feedback easy to hear and easy to act on.",
  whatItIsNot: [
    "It is not a way to prosecute someone with a tidy acronym.",
    "It is not a substitute for listening, inquiry, HR or legal process, safety escalation, or trauma-aware support when those are what the moment needs.",
    "It is not permission to package assumptions as facts. If you cannot state the behaviour as a clean observation, slow down and ask first.",
    "It is not a demand script. The next step should be specific, proportionate and open to correction unless the situation genuinely requires a firm boundary or formal instruction.",
    "It should not be used to shame, corner, pressure or override someone's autonomy.",
  ],
  overview: {
    coreFormula: [
      "COIN = Context -> Observation -> Impact -> Next step.",
      "Context: \"In yesterday's client handoff...\"",
      "Observation: \"...the risk note was missing from the summary...\"",
      "Impact: \"...so the next person had to reconstruct the issue under time pressure...\"",
      "Next step: \"...next time, please add the risk note before sending the handoff.\"",
      "Compact: \"In [moment], I noticed [observable behaviour]. The impact was [specific effect]. Next time, could we [workable next step]?\"",
    ],
    minimumViableMove:
      "In [context], I noticed [behaviour]. The impact was [effect]. Next time, can we [specific next step]?",
    impact: "Medium",
    difficulty: "Hard",
    misuse:
      "It fails when you stack old grievances into one note, dress an interpretation up as an observation, or use the tidy acronym to ambush, shame or corner someone. The structure cannot make an ambush feel fair, and once it turns to pressure the clarity is lost.",
    bestFor: [
      "Manager feedback anchored to one recent example",
      "Peer-to-peer friction without formal authority",
      "Collaboration breakdowns and missed handoffs",
      "Quality issues with a clear, specific instance",
      "Meetings where one behaviour is creating avoidable cost",
      "Relationship repair after a specific incident",
      "When the next step can be made concrete",
    ],
  },
  notFor: [
    "They are flooded, ashamed, panicking or grieving",
    "They are unsafe, intoxicated or unable to process feedback",
    "The issue needs formal investigation, HR, legal or disciplinary process",
    "Safeguarding or immediate safety action is required",
    "Your real aim is punishment, superiority or venting",
    "You are stacking old grievances rather than naming one moment",
    "You cannot yet state the behaviour as a clean observation",
  ],
  phraseBank: [
    {
      id: "soft-entries",
      label: "Soft entries",
      tag: "Openers & permission",
      tone: "Quick",
      phrases: [
        "Can I share one specific behaviour-impact note?",
        "Can I give you one quick piece of feedback from today?",
        "Have you got a minute for one small observation?",
        "Mind if I flag one thing from the handoff?",
        "One quick note from the meeting, if that's okay?",
        "Can I name one thing I noticed earlier?",
      ],
    },
    {
      id: "scaffolds",
      label: "Fill-in scaffolds",
      tag: "Core formula templates",
      tone: "Direct",
      phrases: [
        "In [context], I noticed [behaviour]. The impact was [effect]. Next time, can we [next step]?",
        "In [moment], I noticed [observable behaviour]. The impact was [specific effect]. Could we [workable next step]?",
        "The behaviour I noticed was [X], and the effect was [Y].",
        "Next time, could we [specific next step]?",
        "Can we agree [next step] for next time?",
        "That's how I saw the impact. What am I missing?",
        "Does that next step work for you?",
      ],
    },
    {
      id: "work-meetings",
      label: "Work & meetings",
      tag: "Manager and peer feedback",
      tone: "Professional",
      phrases: [
        "In this morning's review, I noticed we moved past the risk question before Alex had finished. The impact was that we lost the thread and had to reopen it later. Next time, can we let the owner finish before moving on?",
        "In today's planning meeting, the task owner changed before the risk was discussed. The impact was that two people left with different assumptions. Next time, can we confirm the risk before assigning the owner?",
        "In the planning chat, I noticed my estimate was changed before I'd explained the constraint. The impact was that the plan looked cleaner than it was. Next time, can we check the constraint before changing the number?",
        "In the last client update, the risk caveat was missing. The impact was that support had to answer the same question repeatedly. Next time, please include the caveat before the update goes out.",
        "In the planning thread, the owner changed before the dependency was confirmed. The impact was rework. Next time, can we confirm dependencies before assigning the owner?",
        "In the retro, we skipped the action review. The impact was that the same issue came back this sprint. Next time, can we hold five minutes for actions?",
        "Can I give one specific note from today's meeting?",
        "In the review, the numbers changed after sign-off. The impact was that I briefed the wrong figure. Next time, can we lock the version before it goes out?",
      ],
    },
    {
      id: "upward-firm",
      label: "Upward & firm",
      tag: "Feedback under stakes",
      tone: "High-stakes",
      phrases: [
        "In yesterday's stand-up, the deadline changed while the blockers were still open. The impact is that I'm not sure which priority to protect. Could we confirm the priority before I re-plan?",
        "In yesterday's prioritisation meeting, the deadline changed before blockers were reviewed. The impact is that I'm not sure what to drop. Could we confirm the trade-off before I re-plan?",
        "One COIN note: in the handoff the blocker was absent; it delayed triage; next time, flag blockers in the first line.",
        "This one isn't optional: the caveat needs to be in before the release goes live.",
        "In the last two handoffs, the status field was blank. That meant the next person had to chase context. From tomorrow, please fill the status line before you close the task.",
        "I need to be straight about the effect here, then I'd like to hear your side.",
      ],
    },
    {
      id: "warm-relationship",
      label: "Warm & relationship repair",
      tag: "Calm, personal delivery",
      tone: "Warm",
      phrases: [
        "I value how we work together, so I want to flag one small thing.",
        "This is a small thing, and I'm only raising it because it's easy to fix.",
        "When we talked last night, I interrupted twice while you were explaining. The impact was that you had to restart your point. Next time, I'll pause and ask before responding.",
        "I might be missing context here, so tell me if I've read it wrong.",
        "None of this is about you as a person — it's one moment I wanted to name.",
        "I'd rather say this directly than let it sit, because I think you'd want to know.",
      ],
    },
    {
      id: "digital",
      label: "Digital & written",
      tag: "Text and message-length",
      tone: "Quick",
      phrases: [
        "Context: the last release note. Observation: the migration caveat was missing. Impact: support fielded the same question repeatedly. Next step: add caveats before release notes go live.",
        "Quick note on the handoff: status field was blank, so the next person had to chase context. Could we fill it before closing next time?",
        "One thing from the doc: the owner wasn't set, so two of us started the same task. Can we assign it before sharing?",
        "Small flag: the deadline moved but the blockers didn't get updated. Can we sync those so the plan matches?",
        "Noticed the caveat dropped off this version — support got the same question three times. Add it back before the next send?",
        "Behaviour: numbers changed after sign-off. Impact: the wrong figure went out. Next step: lock the version first?",
      ],
    },
    {
      id: "softening-invite",
      label: "Softening & inviting correction",
      tag: "Lower the temperature",
      tone: "Repair",
      phrases: [
        "I made that sound broader than I meant. I'm talking about one moment, not your character.",
        "I don't want to push this if now is the wrong moment — we can pause and come back to it.",
        "You may have context I don't. I'd like to hear that before we settle the next step.",
        "Let me narrow that to the behaviour rather than a judgement about you.",
        "If the next step doesn't work, tell me and we'll find one that does.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "The issue isn't one specific behaviour",
      action: "Don't use COIN yet — clarify what actually happened first.",
      phrase: "Can you walk me through what happened there?",
    },
    {
      condition: "They're visibly distressed",
      action: "Lead with emotion first (validation or NURSE) before any feedback.",
      phrase: "This looks like a hard moment. Do you want to talk about that first?",
    },
    {
      condition: "They dispute your observation",
      action: "Pause the note and ask for their version before continuing.",
      phrase: "What did you see from where you were sitting?",
    },
    {
      condition: "The next step is negotiable",
      action: "Invite a workable alternative rather than dictating.",
      phrase: "Would that work, or is there a better way to handle it?",
    },
    {
      condition: "The next step is non-negotiable",
      action: "State it calmly and don't pretend it's a shared choice.",
      phrase: "This part isn't up for discussion, but I'll explain why.",
    },
    {
      condition: "They understand and agree the next behaviour",
      action: "Summarise, thank them, and stop — don't keep restating it.",
      phrase: "Great — so we're agreed on that for next time. Thanks.",
    },
  ],
  ladder: [
    {
      weak: "\"You are unreliable and your updates are always messy.\" Labels character, exaggerates and offers no repair path.",
      better: "\"The last update was missing the status and owner, so I had to ask three follow-up questions.\" Observable and impact-based, but still needs a next step.",
      best: "\"In yesterday's handoff, the status and owner fields were blank. The impact was that triage took an extra ten minutes and the next owner was unclear. Next time, can you fill both fields before closing the handoff?\"",
    },
    {
      weak: "\"You were dismissive in there.\" An interpretation dressed as a fact — easy to deny.",
      better: "\"You spoke over the last two sentences before I finished the risk point.\" A clean observation, but no consequence or ask.",
      best: "\"In the risk discussion, I got spoken over before I finished, so the risk didn't get logged. Next time, can we let each point land before responding?\"",
    },
    {
      weak: "\"You made everyone miserable on Friday.\" Turns impact into guilt and mind-reads the room.",
      better: "\"The decision had to be reopened after the meeting.\" States a real effect, but leaves it hanging.",
      best: "\"In Friday's call, the decision was reopened after we'd closed it. The impact was an extra hour for six people. Next time, can we confirm everyone's a yes before we move on?\"",
    },
  ],
  scenarios: [
    {
      situation: "Manager feedback on a specific incident",
      move: "Anchor to one recent example and end with a concrete operational next step.",
      phrase: "In the last client update, the risk caveat was missing. The impact was that support answered the same question repeatedly. Next time, please include the caveat before it goes out.",
    },
    {
      situation: "Peer collaboration without authority",
      move: "Keep it a joint request, not an order — you're asking, not instructing.",
      phrase: "In the planning thread, the owner changed before the dependency was confirmed. The impact was rework. Next time, can we confirm dependencies before assigning the owner?",
    },
    {
      situation: "Upward feedback to someone senior",
      move: "Focus on the practical cost to the work, not the person's judgement.",
      phrase: "In yesterday's meeting, the deadline changed before blockers were reviewed. The impact is that I'm not sure what to drop. Could we confirm the trade-off before I re-plan?",
    },
    {
      situation: "Relationship repair",
      move: "Name your own behaviour first, then propose the shared fix.",
      phrase: "When we talked last night, I interrupted twice while you were explaining. The impact was that you had to restart. Next time, I'll pause and ask before responding.",
    },
    {
      situation: "Digital or written feedback",
      move: "Use short labelled lines only when clarity matters more than warmth.",
      phrase: "Context: last release note. Observation: caveat missing. Impact: repeated support questions. Next step: add caveats before release.",
    },
    {
      situation: "Group retrospective",
      move: "Run COIN on the process, not a person, unless a direct person-to-person channel is appropriate.",
      phrase: "In the retro, we skipped the action review, and the same issue returned. Next time, can we hold five minutes for actions?",
    },
  ],
  calibration: {
    working: [
      "They ask about the next step instead of defending themselves.",
      "They acknowledge the specific behaviour without argument.",
      "They add relevant context you were missing.",
      "They can repeat back what should change.",
      "Both of you can name the next behaviour without debating their character.",
      "The temperature stays level — no spike in defensiveness.",
    ],
    adjust: [
      "They argue about intent — say: \"I'm not trying to decide intent, just naming the behaviour and its effect.\"",
      "They look ashamed or shut down — reduce intensity and separate the behaviour from their identity.",
      "They dispute the observation — ask for their version before continuing.",
      "The exchange turns unsafe, humiliating, circular or coercive — stop and use the right process or support route.",
      "They go quiet and compliant rather than clear — check they actually agree instead of just moving on.",
      "You catch yourself stacking more examples to win — drop back to the one clean moment.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot clean observations",
      task: "Take five vague judgements you've thought this week (\"he's dismissive\", \"she's careless\") and rewrite each as one observable behaviour a camera could have caught.",
    },
    {
      day: "Day 2",
      title: "Write the four parts",
      task: "Pick one real but low-stakes behaviour from the past week. Write a single sentence each for Context, Observation, Impact and Next step.",
    },
    {
      day: "Day 3",
      title: "Cut and de-motive",
      task: "Take yesterday's draft. Circle every word that implies motive or character, swap it for observable behaviour, then cut the whole message by 30 percent.",
    },
    {
      day: "Day 4",
      title: "Add the invitation",
      task: "Append one calibration line — \"What am I missing?\" or \"Does that next step work?\" — and read the note aloud twice: once too formal, once as plain speech.",
    },
    {
      day: "Day 5",
      title: "Rehearse recovery",
      task: "Practise three repair lines aloud so they're ready if the feedback lands as blame: narrow it to the behaviour, disclaim intent, and invite the context you might be missing.",
    },
    {
      day: "Day 6",
      title: "Choose the right tool",
      task: "For five situations (someone distressed, a twice-missed field, unsure if advice is welcome, expressing a need without blame, plain behaviour feedback), decide whether COIN, NURSE, Ask-tell-ask, NVC or validation fits, and why.",
    },
    {
      day: "Day 7",
      title: "Use it live",
      task: "In one real, low-stakes moment, deliver a full COIN note, then score it: specific context, clean observation, concrete impact, workable next step, autonomy preserved.",
    },
  ],
  checklist: [
    "Did I choose one specific context rather than a pile of grievances?",
    "Would a fair person recognise my observation without having to agree with my interpretation?",
    "Did I avoid mind-reading, exaggeration and character labels?",
    "Did I name the impact without turning it into guilt?",
    "Is the next step clear enough to act on, with room to correct it?",
    "Did I stop once the next behaviour was clear, and did this leave dignity intact?",
  ],
  example: {
    without: [
      "A: \"You keep making meetings chaotic. You need to be more professional.\"",
      "B: \"What are you talking about?\"",
      "A: \"You know exactly what I mean.\"",
      "Why it fails: no context, no observation, no specific impact and no workable next step — just a character verdict B can only deny.",
    ],
    with: [
      "A: \"Can I give one specific note from today's meeting?\"",
      "B: \"Sure.\"",
      "A: \"In the planning meeting, the task owner changed before the risk was discussed. The impact was that two people left with different assumptions. Next time, could we pause on the risk before assigning ownership? I may be missing why you moved quickly.\"",
      "B: \"I moved because we were out of time, but yes, the risk should be explicit.\"",
      "A: \"That makes sense. Let's use the last two minutes for risk and owner next time.\"",
      "Why it works: it asks permission, keeps to one clean moment, states impact without blame, invites correction, and turns the note into a shared operating change.",
    ],
    note: "The plainer version drops the permission opener and the invitation to correct — still effective, but the advanced version turns feedback into a joint agreement rather than a verdict.",
  },
  influencePayoff: {
    feeling: "\"I know exactly what to change, and I wasn't put on trial.\"",
    principle:
      "People act on feedback they can actually act on. Clarity and fairness move behaviour where pressure and character verdicts only trigger defence.",
    gains: [
      "Reduced ambiguity — the listener knows which moment, what behaviour, why it mattered and what to do next.",
      "Lower defensiveness, because the focus stays on observable behaviour rather than identity or motive.",
      "Real accountability, because the note ends with a concrete next action, not a vague complaint.",
      "Repairability — the note is narrow enough to correct if you've read it wrong.",
      "Trust, because the feedback is fair enough that a third party could follow it.",
      "Faster resolution, because both people leave able to name the same next step.",
    ],
    whyMostFail: [
      "They stack several old grievances into one note, so it lands as an ambush the structure can't rescue.",
      "They dress an interpretation up as an observation — \"you were dismissive\" instead of \"you spoke over the last two sentences.\"",
      "They make the impact sound like guilt rather than a practical cost.",
      "They skip the next step, leaving a complaint instead of a path.",
      "They over-polish the acronym until it sounds rehearsed and managerial.",
    ],
  },
  fieldTip: {
    headline: "Name the moment, not the person.",
    body: "COIN works when the listener can think, \"I can change that behaviour,\" not, \"I have to defend who I am.\" If you can't make the observation clean enough for a fair stranger to recognise, you're not ready to give feedback yet — ask a question first.",
    dont: "\"You're dismissive and unreliable.\"",
    do: "\"In the risk discussion, I got spoken over before I finished. Next time, can we let each point land?\"",
  },
  method: [
    {
      step: "1",
      title: "Pick one clean moment (Context)",
      body: "Choose a single, recent behaviour that had a real effect, and name where and when it happened. One moment keeps the feedback anchored instead of becoming a pile of grievances.",
      examples: [
        { label: "Vague", text: "\"Lately you've been all over the place.\"" },
        { label: "Context", text: "\"In yesterday's client handoff...\"" },
      ],
    },
    {
      step: "2",
      title: "State what you saw (Observation)",
      body: "Describe only what a camera would have caught — no mind-reading, exaggeration or character labels. If you can't, you're interpreting, not observing, and it's time to ask a question instead.",
      examples: [
        { label: "Interpretation", text: "\"You were dismissive.\"" },
        { label: "Observation", text: "\"...the risk note was missing from the summary...\"" },
      ],
    },
    {
      step: "3",
      title: "Name the effect (Impact)",
      body: "Explain the practical, operational or relational consequence — the cost, not the guilt. Concrete effects are far harder to argue with than accusations of how people felt.",
      examples: [
        { label: "Guilt", text: "\"You made everyone miserable.\"" },
        { label: "Impact", text: "\"...so the next person had to reconstruct the issue under time pressure...\"" },
      ],
    },
    {
      step: "4",
      title: "Agree what changes (Next step)",
      body: "Turn it into a workable action or request. Keep it specific and, where you can, open to a better alternative rather than a flat instruction.",
      examples: [
        { label: "Vague", text: "\"Just be more careful.\"" },
        { label: "Next step", text: "\"Next time, please add the risk note before sending the handoff.\"" },
      ],
    },
    {
      step: "5",
      title: "Invite correction, then calibrate",
      body: "Add a line that opens the door, then watch whether they get clearer or more defensive. If it lands as judgement, narrow it back to the behaviour and separate what you observed from the story you may be adding.",
      examples: [
        { label: "Invite", text: "\"That's how I saw the impact — what am I missing?\"" },
        { label: "Recover", text: "\"Let me narrow that to the behaviour, not your character.\"" },
      ],
    },
  ],
  liveThreadClues: [
    "\"always\" / \"never\" — exaggeration, almost never a clean observation",
    "\"dismissive\", \"lazy\", \"careless\" — character labels, not behaviours",
    "\"you made everyone...\" — impact turned into guilt",
    "\"you know exactly what I mean\" — you've skipped the observation",
    "\"last week and the month before...\" — you're stacking, not naming one moment",
    "\"you clearly didn't care\" — mind-reading motive",
  ],
  depthDial: [
    {
      depth: "Invitation",
      useWhen: "Peer, low stakes, and you might be missing context",
      phrase: "\"Next time, could we...? Or is there a better way?\"",
    },
    {
      depth: "Request",
      useWhen: "Clear cost, collaborative relationship",
      phrase: "\"Next time, can we...?\"",
    },
    {
      depth: "Instruction",
      useWhen: "Repeated issue and the call is yours to make",
      phrase: "\"From now on, please...\"",
    },
    {
      depth: "Boundary",
      useWhen: "Non-negotiable — a safety, quality or standard line",
      phrase: "\"This one isn't optional: it needs to be...\"",
    },
  ],
  commonMistakes: [
    {
      mistake: "Stacking grievances into one note",
      soundsLike: "\"Last week, yesterday and the month before...\"",
      better: "Pick the single cleanest example: \"In yesterday's handoff...\"",
    },
    {
      mistake: "Dressing interpretation up as observation",
      soundsLike: "\"You were dismissive.\"",
      better: "\"You spoke over the last two sentences before I finished.\"",
    },
    {
      mistake: "Making impact sound like guilt",
      soundsLike: "\"You made everyone miserable.\"",
      better: "\"The decision had to be reopened after the meeting.\"",
    },
    {
      mistake: "Skipping the next step",
      soundsLike: "\"...and that really wasn't good enough.\"",
      better: "\"Next time, can we confirm the risk before assigning the owner?\"",
    },
    {
      mistake: "Ambushing after privately building a case",
      soundsLike: "\"I've been keeping track, and...\"",
      better: "Raise one moment close to when it happens, not a dossier weeks later.",
    },
    {
      mistake: "Over-polishing the acronym",
      soundsLike: "\"Per the framework, the observation phase indicates...\"",
      better: "Plain speech: \"In the review, the caveat was missing, so support kept getting the same question.\"",
    },
    {
      mistake: "Using COIN when care should come first",
      soundsLike: "Delivering feedback while they're visibly upset.",
      better: "Validate or use NURSE first, then give the note once it can be heard.",
    },
  ],
  recoveryPhrases: [
    "I made that sound like a character judgement. Let me narrow it to the behaviour.",
    "I'm not saying you intended that impact. I'm saying this was the effect I saw.",
    "Let me separate what I observed from the story I may be adding.",
    "I stacked too much together. The clean example is one moment from yesterday.",
    "That sounded more formal than I intended. The practical request is simple.",
    "I don't want to push this if now is the wrong moment. We can pause and come back to it.",
    "What part of the observation feels off to you?",
    "You may have context I don't have. I want to hear that before we decide the next step.",
  ],
  bestRecoveryLine:
    "I made that sound like a character judgement. Let me narrow it to the behaviour.",
  chains: [
    {
      label: "Warm opening -> COIN",
      sequence: "Warm opening -> COIN",
      example: [
        "\"Good to catch you — I know this week's been full-on.\"",
        "\"In this morning's review, we moved past the risk before Alex finished. The impact was that we had to reopen it. Next time, can we let the owner finish?\"",
      ],
    },
    {
      label: "Validate -> COIN",
      sequence: "Validate the concern -> COIN",
      example: [
        "\"You're right that the timeline was brutal — that part wasn't on you.\"",
        "\"Still, in the handoff the status field was blank, so triage stalled. Next time, can we fill it before closing?\"",
      ],
    },
    {
      label: "Permission -> COIN",
      sequence: "Permission-based advice -> COIN",
      example: [
        "\"Can I share one specific note from the meeting?\"",
        "\"In the planning chat, my estimate changed before I'd explained the constraint. The impact was a plan that looked cleaner than it was. Next time, can we check the constraint first?\"",
      ],
    },
    {
      label: "COIN -> Summary check -> Autonomy release",
      sequence: "COIN -> Summary check -> Autonomy release",
      example: [
        "\"...so next time, can we confirm dependencies before assigning the owner?\"",
        "\"Just to check we're aligned — we lock dependencies first, then assign?\"",
        "\"But if there's a better way to handle it your end, I'm open to that.\"",
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC052",
      reason:
        "The closest sibling. COIN adds an explicit Next step to SBI's Situation-Behaviour-Impact. Choose COIN when the future action must be spelled out; SBI when naming the impact clearly is enough.",
    },
    {
      id: "TC080",
      reason:
        "NURSE handles emotion (Name, Understand, Respect, Support, Explore). If the person is distressed, start with NURSE and only return to COIN once feedback can actually be heard.",
    },
    {
      id: "TC074",
      reason:
        "DESC (Describe, Express, Specify, Consequences) is for a firmer boundary with stated consequences. Use COIN when the next step is collaborative; DESC when non-negotiable consequences are central.",
    },
    {
      id: "TC053",
      reason:
        "NVC / OFNR centres feelings, needs and requests. Use COIN for workplace behaviour and its practical effect; NVC when the core is expressing a need without blame.",
    },
    {
      id: "TC045",
      reason:
        "Ask-tell-ask secures consent and checks understanding around the feedback. If permission is uncertain, open with Ask-tell-ask, then deliver the COIN note.",
    },
    {
      id: "TC014",
      reason:
        "Validate the concern comes first when the other person's own concern or sense of threat is high. Acknowledge that, then use COIN if a behaviour note is still needed.",
    },
  ],
};
