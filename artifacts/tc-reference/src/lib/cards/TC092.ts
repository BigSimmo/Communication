import type { CardData } from "../card-types";

export const TC092: CardData = {
  pdfUrl: "cards/TC092/TC092_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC092/TC092_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC092/TC092_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC092/TC092_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC092/TC092_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC092/TC092_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC092/TC092_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC092/TC092_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC092",
  whyItWorks:
    "Face-saving disagreement protects the other person's standing while still naming a real difference. It has three parts: a truthful bridge (something reasonable or valid in their view), a precise disagreement (the exact claim, plan or criterion you see differently), and a collaborative landing that lets them revise without a public climbdown. Many disagreements stick not because the content is impossible but because changing position feels like losing face. The move does not remove the disagreement, only the unnecessary humiliation, so people can inspect the facts calmly instead of defending harder.",
  whatItIsNot: [
    "It is not fake agreement. You never pretend to accept a claim you think is wrong.",
    "It is not flattery: the bridge has to be grounded in something real: a shared goal, a valid concern, a legitimate constraint or a plausible reading.",
    "It is not conflict avoidance: the disagreement still appears. If you only say kind things and never name the difference, you have dodged the conversation, not had it.",
    "It is not a compliment sandwich: the shape is dignity, precise difference, workable next step, not praise-criticism-praise.",
    "It is not a softer way to steer someone: the aim is to make the conversation safe enough for both people to think, not to make the other person easier to move.",
  ],
  overview: {
    coreFormula: [
      "Face bridge + specific difference + shared criterion + dignified next step.",
      "I can see why speed is the priority. I see the launch date differently because the support load is still unresolved. Could we separate the launch decision from the demo decision?",
      "That concern makes sense. I disagree with the conclusion that we should pause everything. Could we name the specific risk and reduce just that part?",
      "I agree with the goal of keeping it simple. I don't think this version is simpler for the user. Could we test it against the first-time-user path?",
      "Boundary version: I understand why you'd ask. I can't agree to that. What I can do is send the first version by Friday.",
    ],
    minimumViableMove:
      'One truthful bridge, then one precise point: "I can see why that read makes sense. I see one part differently: the timing, not the demand."',
    impact: "High",
    difficulty: "Hard",
    misuse:
      "Over-cushioning: protecting face so hard that the actual disagreement disappears. The sharper failure is using dignity language as a wrapper for pressure. If the other person can no longer say no, slow down or keep their own view, the move has turned coercive.",
    bestFor: [
      "Disagreeing with someone in front of others.",
      "Correcting a mistaken claim without humiliating the speaker.",
      "Challenging a senior person or client while keeping the relationship.",
      "Naming a concern about a plan the other person is invested in.",
      "Disagreeing with a friend or partner who may feel criticised.",
      "Setting a boundary without implying the other person is unreasonable.",
      "Redirecting a meeting after someone has argued hard for a weak option.",
      "Repairing after you have already sounded too blunt.",
    ],
  },
  notFor: [
    "There is immediate danger or a required safety escalation.",
    "The other person is acting in bad faith and using your politeness as a shield.",
    "A clear policy, legal, medical, safeguarding or compliance line has to be stated plainly.",
    "You would be using face-saving language to dodge a hard decision of your own.",
    "You cannot find a truthful bridge and would have to invent praise.",
    "They have explicitly asked for the direct version, without cushioning.",
    "The disagreement is trivial and the added ceremony would come across as patronising.",
  ],
  phraseBank: [
    {
      id: "everyday",
      label: "Everyday / relational",
      tag: "Social phrases",
      tone: "Warm",
      phrases: [
        "I get why that would be your read. I see one part differently.",
        "That's a fair concern. I don't land on the same conclusion.",
        "I'm with you on the goal. I'm not with you on this path.",
        "I don't think you're wrong to ask. I do need to say no to that version.",
        "There's something real in what you're saying. I'd separate it from the blame part.",
        "I understand why you're hurt. I'm not sure the fairest read is that they did it on purpose.",
        "I think we both care about the same thing here. I just differ on what it needs.",
      ],
    },
    {
      id: "work-meetings",
      label: "Work / meetings",
      tag: "Professional phrases",
      tone: "Professional",
      phrases: [
        "I agree with the objective. I differ on the risk assessment.",
        "The constraint you're naming is real. I don't think the proposed response solves it.",
        "I can see the logic. My concern is the second assumption.",
        "I wouldn't frame it as a bad idea. I'd frame it as a fit issue for this use case.",
        "I think we're aligned on the outcome and misaligned on the method.",
        "There's a useful point in that. I'd separate it from one conclusion.",
      ],
    },
    {
      id: "digital-written",
      label: "Digital / written",
      tag: "Digital / written phrases",
      tone: "Direct",
      phrases: [
        "I see the rationale. I'd push back on one part: the timeline assumes approvals we don't have yet.",
        "Agree on the goal. Different view on the timing.",
        "This may be a weighting difference rather than a values difference. I'm weighting cost more heavily.",
        "Useful direction. I don't think this version is ready, because the onboarding path still breaks.",
        "I'd separate two things here: the goal, which is right, and the method, which I'd change.",
      ],
    },
    {
      id: "under-pressure",
      label: "Under pressure",
      tag: "High-pressure phrases",
      tone: "High-stakes",
      phrases: [
        "I know we need to move quickly. I still need to challenge this assumption.",
        "I hear the urgency. I can't support that decision as it stands.",
        "The pressure is real. My disagreement is with the shortcut, not with the need for speed.",
        "I don't want to slow us down unnecessarily. I do want to prevent a bigger problem.",
        "Before we lock it in, I need to flag one disagreement.",
        "You're not saying stop. You're saying limit the exposure. Same momentum, smaller blast radius.",
      ],
    },
    {
      id: "upward",
      label: "Disagreeing upward",
      tag: "Upward phrases",
      tone: "Professional",
      phrases: [
        "Could I offer a different read without derailing the decision?",
        "I see the direction. One risk I may be weighting differently is customer confusion.",
        "I understand why that's attractive. My concern is that it creates rework later.",
        "I see the same urgency. I'm just weighting the downside more heavily.",
      ],
    },
    {
      id: "downward",
      label: "Disagreeing downward",
      tag: "Downward phrases",
      tone: "Warm",
      phrases: [
        "I like that you're thinking ahead. I don't think this version is the right call yet.",
        "You raised the right issue. I want to redirect the solution.",
        "The concern is valid. The recommendation just needs more evidence.",
        "Easy detail to mix up: the date I have is Thursday, not Tuesday.",
      ],
    },
    {
      id: "boundaries",
      label: "Holding a boundary",
      tag: "Boundary phrases",
      tone: "Direct",
      phrases: [
        "I understand the need. I can't agree to that timeline.",
        "I respect why you're asking. I'm not available for that.",
        "I can work with the goal, but not with that condition.",
        "That matters. I still need to keep this boundary.",
        "I understand the ask. I can't do that. What I can do is send the first version by Friday.",
      ],
    },
    {
      id: "micro",
      label: "Micro-phrases",
      tag: "Short lines for tense moments",
      tone: "Quick",
      phrases: [
        "Fair concern. Different conclusion.",
        "Same goal. Different path.",
        "Valid issue. Not that solution.",
        "I see the logic. I challenge the assumption.",
        "Respectfully, I read that differently.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "You do not actually disagree",
      action:
        "Do not manufacture a difference: validate, reflect or stay curious instead.",
      phrase: "That makes sense. Say more about how you're seeing it.",
    },
    {
      condition: "There is danger, misconduct, legal or safety risk",
      action:
        "State the boundary or escalation plainly. Face-saving comes second to safety.",
      phrase: "I have to stop us here. This crosses a line we can't step over.",
    },
    {
      condition: "The disagreement could threaten someone's dignity or status",
      action:
        "Use the face-saving move: one true bridge, one precise point, one dignified next step.",
      phrase:
        "I can see why that read makes sense. I see one part differently: the support load.",
    },
    {
      condition: "You cannot find a truthful bridge",
      action: "Do not invent praise. Use respectful directness instead.",
      phrase:
        "I see this differently, and I'd rather be straight with you than pad it.",
    },
    {
      condition: "They stay engaged after your point",
      action:
        "Continue into a trade-off, a clean request or the decision itself.",
      phrase:
        "Could we test that against the first-week workload before we commit?",
    },
    {
      condition: "They turn defensive or embarrassed",
      action:
        "Separate respect from the disagreement, shrink the target, or move it private.",
      phrase:
        "I'm challenging this one part, not your intent. Can we take the detail offline?",
    },
  ],
  ladder: [
    {
      weak: "No, that's wrong.",
      better: "I don't think that's right.",
      best: "I can see why that would be the first read. I see one part differently: the issue is timing, not demand.",
    },
    {
      weak: "This plan won't work.",
      better: "I have concerns about this plan.",
      best: "The goal is right. I don't think this plan protects the support team. Could we test it against the first-week workload?",
    },
    {
      weak: "That's unreasonable.",
      better: "I can't do that.",
      best: "I understand why you'd ask. I can't do that timeline. What I can do is send the first version by Friday.",
    },
    {
      weak: "You're reading too much into it.",
      better: "I read it differently.",
      best: "I get why it landed that way. I'd separate the impact from the intent until we've asked one clarifying question.",
    },
  ],
  scenarios: [
    {
      situation: "A plan is proposed publicly in a meeting",
      move: "Protect the goal, challenge the plan.",
      phrase:
        "The goal is right. I see one risk differently: the support load. Could we test that before committing?",
    },
    {
      situation: "A client wants an approach you think will fail",
      move: "Respect the business goal, disagree with the method.",
      phrase:
        "I understand why that feels faster. My concern is it creates rework later. I'd recommend a smaller first step.",
    },
    {
      situation: "A senior person states a conclusion confidently",
      move: "Ask permission lightly, then name the alternate read.",
      phrase:
        "Could I offer a different read? I see the same urgency, but I'm weighting customer confusion more heavily.",
    },
    {
      situation: "A friend reads someone's intent harshly",
      move: "Validate the hurt, separate impact from intent.",
      phrase:
        "I get why that hurt. I'm not sure the fairest read is that they meant to leave you out.",
    },
    {
      situation: "Someone asks for something you cannot do",
      move: "Acknowledge the need, keep the no, offer an alternative.",
      phrase:
        "I know this would help. I can't take it on this week. I can look at it next Tuesday.",
    },
    {
      situation: "A written thread is turning adversarial",
      move: "Use short, non-performative wording.",
      phrase:
        "I see the rationale. I'd push back on one part: the timeline assumes approvals we don't have yet.",
    },
  ],
  calibration: {
    working: [
      "They ask about the specific point instead of defending their identity.",
      "They clarify, refine or narrow their claim.",
      "Their posture or tone softens.",
      "They can repeat your disagreement back without caricaturing it.",
      "They offer a next step, alternative, test or trade-off.",
    ],
    adjust: [
      'They say, "So you think I\'m wrong?"',
      "They turn sarcastic or performative.",
      "They repeat credentials, status or past effort instead of discussing the point.",
      "They go quiet in a way that reads as embarrassment, not reflection.",
      "Others in the room start watching the status clash rather than the substance.",
      "You catch yourself piling on evidence after they have already heard the point: stop.",
      "The setting is too public and the person needs a private route.",
      "Diagnostic: are we discussing the point, or now managing the embarrassment the point created? If it is embarrassment, repair before adding evidence.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the face threat",
      task: "Pick five real disagreements from your week. For each, write down what the other person would feel they are losing: competence, status, being right or belonging.",
    },
    {
      day: "Day 2",
      title: "Build the bridge",
      task: "For the same five, write one truthful bridge each: a goal, concern, constraint or intention you genuinely share. No invented praise. If you cannot find a real one, mark it 'direct instead'.",
    },
    {
      day: "Day 3",
      title: "Name the exact difference",
      task: "For each, write the specific point you disagree with in a single sentence, aimed at the claim, plan, timing or criterion: never at the person.",
    },
    {
      day: "Day 4",
      title: "Add a dignified next step",
      task: "Finish each into the three-line rep (bridge, difference, next step) then say all five aloud once in a normal voice.",
    },
    {
      day: "Day 5",
      title: "Flex the register",
      task: "Take your strongest rep and rewrite it four ways: shorter, warmer, more direct, and as a written message. Notice which the moment would actually need.",
    },
    {
      day: "Day 6",
      title: "Practise the recovery",
      task: "Out loud or with a partner, deliver a disagreement, imagine a defensive reply, and recover with: 'I am not challenging your intent or effort. I am challenging this specific point.'",
    },
    {
      day: "Day 7",
      title: "Use it live",
      task: "In a real conversation with a senior or invested person, run the full move once. Afterwards check: did they engage with the substance, and did their dignity stay intact?",
    },
  ],
  checklist: [
    "What exactly do I disagree with, and can I say it in one sentence?",
    "What part of their view is genuinely reasonable enough to bridge from?",
    "Is this the right setting, or should it be private?",
    "Did I name the specific point without attacking identity, competence or intent?",
    "Did I offer a dignified next step and then stop talking?",
    "Am I preserving dignity or just avoiding my own discomfort, and would I be fine if my wording were repeated back to them later?",
  ],
  example: {
    without: [
      "Colleague: We should launch next week. We've waited long enough.",
      "You: No, that's not realistic. You're ignoring support again.",
      "Colleague: I'm not ignoring anything. We already discussed this.",
      "You: The plan is just not ready.",
      "Colleague: Then why did no one say that earlier?",
      "Why it fails: the disagreement attacks competence and creates a public face threat. The colleague now has to defend themselves before they can even look at the plan.",
    ],
    with: [
      "Colleague: We should launch next week. We've waited long enough.",
      "You: I'm with you on the cost of waiting. The team needs a visible milestone. I'd separate that from one conclusion, though: full launch next week. My worry isn't the feature quality. It's the support load in the first 72 hours. Could we keep the milestone with a limited release and decide full launch once we've seen the triage volume?",
      "Colleague: So you're not saying stop. You're saying limit the exposure?",
      "You: Exactly. Same momentum, smaller blast radius.",
      "Colleague: That seems workable.",
      "Why it works: it affirms the goal, protects the colleague's competence, and reframes the disagreement as a trade-off rather than a rejection. So they can move without a public climbdown.",
    ],
    note: "The difference is not softness. The advanced version is just as clear that a full launch next week is off the table. It simply leaves the colleague a route to stay in the conversation with their standing intact.",
  },
  influencePayoff: {
    feeling: '"They can tell me I\'m wrong without making me look foolish."',
    principle:
      "A disagreement that attacks face produces self-protection: denial, counterattack, humour, withdrawal, status games, rigid certainty. A disagreement that protects face lets the other person weigh new information without feeling socially defeated.",
    gains: [
      "More accurate decisions, because the disagreement is easy to inspect rather than defend against.",
      "Less escalation, because no one has to protect their dignity before addressing the substance.",
      "Faster correction, because a person can shift position without a public climbdown.",
      "More trust, because directness and respect show up together.",
      "Cleaner boundaries, because the no stays clear without turning contemptuous.",
      "Healthier teams, because people can disagree upward, sideways and downward without status injury.",
    ],
    whyMostFail: [
      "They over-cushion until the actual disagreement disappears and nothing changes.",
      "They use dignity language as a wrapper for pressure, so the other person can no longer say no.",
      "They deliver the spine mechanically, so the bridge reads as a scripted tactic rather than real respect.",
      "They hijack the moment to relitigate everything instead of naming one precise point.",
    ],
  },
  fieldTip: {
    headline: "Save the person before you challenge the point.",
    body: "Use one truthful bridge, one precise disagreement and one workable next step, then stop. The strongest face-saving disagreement is not the softest one. It is the clearest one that does not require the other person to lose dignity in order to hear it.",
    example:
      "I see why that makes sense. I see one part differently: the timeline assumes approvals we don't have yet. Could we confirm those first?",
    dont: "Do not bury the point under so much reassurance that they never hear it, and do not invent praise you do not mean.",
    do: "Keep the respect real and the difference unmistakable: respect the person, narrow the difference, keep the next step workable.",
  },
  method: [
    {
      step: "1",
      title: "Read the face threat",
      body: "Notice whether disagreeing here could cost the other person dignity. Signals: a public setting, a big status gap, a confident claim just made, visible embarrassment, nervous humour, or a decision already tied to their identity. If face is at risk, this is the move.",
      examples: [
        {
          label: "Cue",
          text: "They've just advocated hard for a plan in front of the team.",
        },
      ],
    },
    {
      step: "2",
      title: "Find a true bridge",
      body: "Before you touch the content, name one thing genuinely reasonable in their view: a shared goal, a valid concern, a real constraint, an honest intention. If you cannot find one truthfully, do not invent it. Switch to respectful directness instead.",
      examples: [
        { label: "Bridge", text: "I agree that waiting has a real cost." },
      ],
    },
    {
      step: "3",
      title: "Name the exact difference",
      body: "State the specific point you see differently, and keep it narrow: the claim, the plan, the timing, the interpretation or the criterion. One precise disagreement lands better than a broad verdict.",
      examples: [
        { label: "Broad", text: "This won't work." },
        {
          label: "Precise",
          text: "I don't think support is ready for the first-week volume.",
        },
      ],
    },
    {
      step: "4",
      title: "Move it off their identity",
      body: "Anchor the disagreement to something impersonal (data, a trade-off, timing, scope or the decision criteria) so it is about the point, not their competence or character.",
      examples: [
        {
          label: "Reframe",
          text: "My concern isn't the feature quality. It's the support load in the first 72 hours.",
        },
      ],
    },
    {
      step: "5",
      title: "Offer a dignified path",
      body: "Give them a way to revise or continue without a public defeat: a smaller version, a test against a criterion, a clarifying question, or a split of two issues.",
      examples: [
        {
          label: "Path",
          text: "Could we keep the milestone with a limited release and decide full launch after we see the volume?",
        },
      ],
    },
    {
      step: "6",
      title: "Let them respond",
      body: "Stop talking. Do not force an immediate concession: leave room for them to think, ask or adjust while keeping their standing. The silence after your point is part of the technique.",
      examples: [
        {
          label: "Give room",
          text: "No rush, I just wanted the risk on the table before we lock it in.",
        },
      ],
    },
  ],
  liveThreadClues: [
    "a public setting",
    "a big status gap",
    "a confident claim just made",
    "visible embarrassment",
    "nervous humour",
    "defensiveness",
    "a decision already tied to their identity",
  ],
  depthDial: [
    {
      depth: "Micro",
      useWhen: "close relationship, low stakes, keep it moving",
      phrase: "Fair concern. Different conclusion.",
    },
    {
      depth: "Short",
      useWhen: "an everyday disagreement that needs a nudge, not a case",
      phrase: "Same goal, different path. Could we test the timing first?",
    },
    {
      depth: "Full spine",
      useWhen: "a public setting or someone invested in being right",
      phrase:
        "I can see why speed is the priority. I see the launch date differently because support isn't ready. Could we separate the two decisions?",
    },
    {
      depth: "Boundary",
      useWhen: "you have to hold a clear no",
      phrase:
        "I understand the ask. I can't agree to that. What I can do is send the first version by Friday.",
    },
    {
      depth: "Final decision",
      useWhen: "discussion has happened and the difference remains",
      phrase:
        "I understand the argument. My decision is still to hold the launch until the triage path is ready.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Hiding the disagreement",
      soundsLike:
        "So many validating things that the point of difference never actually lands.",
      better: "One bridge, then the specific disagreement. Said plainly.",
    },
    {
      mistake: "False agreement",
      soundsLike: "Saying 'I agree' when you don't.",
      better:
        "Agree only with the part you genuinely endorse: the goal, the concern, the pressure.",
    },
    {
      mistake: "Compliment sandwiching",
      soundsLike: "Generic praise, criticism, generic praise.",
      better: "A truthful bridge and a clear difference. No filler praise.",
    },
    {
      mistake: "Patronising tone",
      soundsLike: "'I see why you might think that...' said down your nose.",
      better:
        "Neutral wording: 'I can see the logic,' or 'That concern makes sense.'",
    },
    {
      mistake: "The delayed no",
      soundsLike: "So much face-saving that your boundary sounds negotiable.",
      better: "State the no clearly: 'I understand the ask. I can't do that.'",
    },
    {
      mistake: "Public over-correction",
      soundsLike:
        "Making the person wrong in front of others when a quiet adjustment would do.",
      better:
        "Challenge the claim, not the person, and move it private if you can.",
    },
    {
      mistake: "Softening real harm",
      soundsLike:
        "Turning misconduct or a safety issue into 'just different views.'",
      better:
        "When harm or safety is present, name the behaviour and consequence plainly.",
    },
    {
      mistake: "Explaining too much",
      soundsLike: "A long case that sounds like a prosecution brief.",
      better: "One reason, one next step.",
    },
  ],
  recoveryPhrases: [
    "I think I made that sound more dismissive than I meant. I respect the concern. My disagreement is with the conclusion.",
    "Let me restate that more fairly. The issue you raised is real. I just differ on what follows from it.",
    "I'm not questioning your intent or your effort. I'm challenging this one part of the plan.",
    "This isn't a criticism of you for raising it. I'm glad it's on the table.",
    "I may have softened that too much. My clear view is that we shouldn't proceed with this version.",
    "Let me be direct while keeping the respect: I disagree with that recommendation.",
    "I don't want this to become a public win-lose. The real question is which risk we're willing to carry.",
    "I want to keep the relationship and be clear at the same time. I can't support this decision as it stands.",
  ],
  bestRecoveryLine:
    "I'm not challenging your intent or your effort. I'm challenging this one specific point.",
  chains: [
    {
      label: "Attention first",
      sequence: "TC012 Full-attention signal → TC092 Face-saving disagreement",
      example: [
        "When someone already feels exposed, give full attention before you introduce the difference.",
        "'I've got you. Say the whole thing.' Then: 'I'm with you on the goal. I see the timing differently.'",
      ],
    },
    {
      label: "Validate, then differ",
      sequence:
        "TC014 Validate the concern → TC092 Face-saving disagreement → TC013 Clean request",
      example: [
        "Recognise the worry, name the disagreement, then make one clear ask.",
        "'The risk you're flagging is real. I don't think a full launch answers it. Could we test a limited release against the first-week volume?'",
      ],
    },
    {
      label: "Reflect both sides, then add yours",
      sequence:
        "TC037 Double-sided reflection → TC092 Face-saving disagreement",
      example: [
        "Reflect the tension they're already holding, then add your point of difference.",
        "'Part of you wants to ship, part of you knows support isn't ready. I lean towards the second for now.'",
      ],
    },
    {
      label: "Disagree, then release",
      sequence:
        "TC092 Face-saving disagreement → TC021 Autonomy release → TC029 Strategic silence",
      example: [
        "Name the disagreement, hand the decision back, then stop talking.",
        "'I've said where I land. It's genuinely your call. I just wanted the risk visible.' Then silence.",
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC005",
      reason:
        "Both can sound like 'I hear you.' Use TC005 when you only need to acknowledge a feeling or experience without endorsing the claim. Use TC092 when you actually have to state a difference.",
    },
    {
      id: "TC014",
      reason:
        "Use TC014 when recognising the worry is the whole job. Use TC092 when the concern is fair but the conclusion is the problem you have to name.",
    },
    {
      id: "TC037",
      reason:
        "Use TC037 when the other person is torn between two sides of their own view. Use TC092 when you are the one taking a different position.",
    },
    {
      id: "TC052",
      reason:
        "Use SBI when the issue is feedback about specific behaviour. Use TC092 when the issue is a disagreement about a claim, plan or judgement and the face threat is high.",
    },
    {
      id: "TC053",
      reason:
        "Use NVC / OFNR when relational strain is the centre of it. Use TC092 when a concrete decision point is the centre and you need a concise disagreement that keeps face.",
    },
    {
      id: "TC089",
      reason:
        "Both lower defensiveness. Use TC089 when resistance comes from fear of consequences. Use TC092 when it comes from embarrassment or threatened status.",
    },
  ],
};
