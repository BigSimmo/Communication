import type { CardData } from "../card-types";

export const TC006: CardData = {
  pdfUrl: "cards/TC006/TC006_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet — the designed visual card.",
      href: "cards/TC006/TC006_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC006/TC006_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC006/TC006_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC006/TC006_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC006/TC006_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC006/TC006_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC006/TC006_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC006",
  whyItWorks:
    "Emotional labelling means tentatively naming the feeling, concern or emotional tone under what someone is saying, then letting them accept, correct or expand it. It is not mind-reading, diagnosing, or telling someone how they feel. It works because people lower their guard and argue less once they sense the emotion has been heard: naming the feeling out loud, gently, turns vague tension into something you can both look at together, and makes any advice, disagreement or boundary that follows far easier to receive.",
  whatItIsNot: [
    "Not mind-reading, diagnosing, or telling someone how they feel.",
    "Not a script, trick, dominance move, interrogation or flattery.",
    "Not something to repeat mechanically once you notice it works.",
    "Not a shortcut around consent, and not a substitute for direct action when action is what is needed.",
  ],
  overview: {
    coreFormula: [
      "Tentative cue + emotion or concern + optional reason, then pause.",
      "It sounds like this felt pretty unfair.",
      "I might be off, but part of this sounds disappointing.",
      "Not just stressful - more like exhausting?",
      "There seems to be a fairness piece here.",
      "You sound excited, but also a bit unsure.",
    ],
    minimumViableMove:
      "Offer one tentative label - 'That sounds [emotion]' or just '[emotion]?' - in a soft tone, then stop talking.",
    impact: "High",
    difficulty: "Easy-Medium",
    misuse:
      "It fails when you over-label, overstate, diagnose, or sound like you are interpreting the person from above.",
    bestFor: [
      "Someone sounds frustrated, disappointed, worried, excited, proud, embarrassed or conflicted.",
      "Softening a conflict before you explain your own view.",
      "When the words say one thing but the tone suggests another.",
      "Helping someone open up without interrogating them.",
      "Showing warmth quickly in social, work, dating, family or leadership conversations.",
      "Naming the emotion under a complaint, objection or piece of resistance.",
    ],
  },
  notFor: [
    "You are guessing too confidently, or using the label as a tactic to steer them.",
    "The person dislikes being analysed, or is already feeling exposed.",
    "The label would embarrass them in front of others.",
    "The word you would use is too intense for how close you actually are.",
    "They need a direct answer, an action or a boundary more than emotional exploration.",
    "You keep labelling instead of listening or doing something useful.",
  ],
  phraseBank: [
    {
      id: "quick-labels",
      label: "Quick labels",
      tag: "One-line labels",
      tone: "Quick",
      phrases: [
        "That sounds frustrating.",
        "That sounds like a lot.",
        "That sounds disappointing.",
        "That sounds exhausting.",
        "That sounds pretty intense.",
        "That sounds like it caught you off guard.",
      ],
    },
    {
      id: "soft-tentative",
      label: "Soft / tentative",
      tag: "Low-pressure openers",
      tone: "Warm",
      phrases: [
        "I might be reading this wrong, but it sounds like...",
        "Part of this seems to be...",
        "It sounds like there is some...",
        "I may be off, but that seems...",
        "Not angry exactly - more worn down?",
      ],
    },
    {
      id: "two-emotion",
      label: "Two-emotion labels",
      tag: "Naming mixed feelings",
      tone: "Direct",
      phrases: [
        "Exciting and unsettling?",
        "Relieved, but still annoyed?",
        "Proud and exhausted?",
        "Angry, but also hurt?",
        "Interested, but cautious?",
        "Hopeful, but not fully convinced?",
      ],
    },
    {
      id: "warm-connecting",
      label: "Warm / connecting",
      tag: "A little deeper",
      tone: "Warm",
      phrases: [
        "That sounds like it hit harder than expected.",
        "No wonder you were cautious after that.",
        "That sounds like the kind of thing that stays with you.",
        "That sounds less like inconvenience and more like feeling let down.",
        "I can see why that would feel heavy.",
      ],
    },
    {
      id: "professional",
      label: "Professional",
      tag: "Work and decisions",
      tone: "Professional",
      phrases: [
        "It sounds like the main frustration is uncertainty.",
        "It seems the concern is reliability.",
        "Sounds like the issue is less the workload and more the lack of clarity.",
        "It sounds like timing is the pressure point.",
        "There seems to be a trust piece here.",
      ],
    },
    {
      id: "conflict-softening",
      label: "Conflict-softening",
      tag: "Before you give your view",
      tone: "Repair",
      phrases: [
        "It sounds like that felt unfair.",
        "I can hear why that landed badly.",
        "It sounds like the hard part was not being consulted.",
        "There seems to be a respect piece here.",
        "It sounds like this felt dismissive from your side.",
      ],
    },
    {
      id: "social-dating",
      label: "Social / dating",
      tag: "Reading positive feeling",
      tone: "Warm",
      phrases: [
        "You sound genuinely excited about that.",
        "That sounds like it mattered more than you are making it sound.",
        "There is a bit of pride in that, no?",
        "That sounds like a good kind of nervous.",
        "You sound like you are still deciding how you feel about it.",
      ],
    },
    {
      id: "digital-text",
      label: "Digital / text",
      tag: "Short messages",
      tone: "Quick",
      phrases: [
        "That sounds like a draining day.",
        "Oof, that sounds frustrating.",
        "That sounds exciting but a bit much.",
        "Sounds like you are over it.",
        "That seems like it landed badly.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "There is a visible feeling they have not named yet.",
      action: "Offer one tentative label, then stop and let them respond.",
      phrase: "That sounds frustrating.",
    },
    {
      condition: "They confirm the label or add detail.",
      action: "Stay with it once and reflect the meaning underneath.",
      phrase:
        "So the sting is more about not being consulted than the change itself.",
    },
    {
      condition: "They correct the label.",
      action: "Accept it cleanly and hand them the word.",
      phrase: "Fair - what word fits better?",
    },
    {
      condition: "They go flat or guarded after the label.",
      action: "Drop the label, switch to facts, and give them an exit.",
      phrase: "No need to get into it if it is not useful.",
    },
    {
      condition:
        "The feeling is escalating and needs action, not more exploration.",
      action: "Stop labelling and move to a boundary or a next step.",
      phrase: "Let's work out what actually happens next.",
    },
    {
      condition: "You have already labelled once.",
      action:
        "Do not repeat it mechanically - move to summary, action or an ordinary contribution.",
      phrase: "Okay - so where do you want to take it from here?",
    },
  ],
  ladder: [
    {
      weak: "You're angry.",
      better: "That sounds frustrating.",
      best: "It sounds like this felt unfair more than anything.",
    },
    {
      weak: "Calm down.",
      better: "I can see this is frustrating.",
      best: "I can hear how strongly this landed. Let's slow it down and work out the real issue.",
    },
    {
      weak: "Why are you upset?",
      better: "What part bothered you?",
      best: "It sounds like the main sting was not feeling consulted. Is that right?",
    },
    {
      weak: "Don't worry.",
      better: "That sounds worrying.",
      best: "That sounds worrying, because there is still a lot you can't predict.",
    },
  ],
  scenarios: [
    {
      situation: "Social conversation",
      move: "Use the smallest natural version so they feel heard without feeling analysed.",
      phrase: "That sounds like it mattered more than you're letting on.",
    },
    {
      situation: "Professional discussion",
      move: "Keep it concise and tie the label to the task, decision or concern.",
      phrase:
        "It sounds like the real issue is the lack of clarity, not the workload.",
    },
    {
      situation: "Conflict or objection",
      move: "Add validation and slow the pace; do not weaponise the label.",
      phrase:
        "It sounds like that landed as unfair - let's slow down and get to the real issue.",
    },
    {
      situation: "Digital message",
      move: "One sentence, no stacked questions or long explanations.",
      phrase: "Oof, that sounds like a draining day.",
    },
    {
      situation: "Shy or guarded person",
      move: "Make it lighter, more tentative and lower pressure.",
      phrase: "I might be off, but that seemed to catch you off guard?",
    },
    {
      situation: "High-status or busy person",
      move: "Keep the wording brief, grounded and useful.",
      phrase: "Sounds like timing is the pressure point.",
    },
  ],
  calibration: {
    working: [
      "They say 'Exactly', 'Yes' or 'That's it' - or correct the label and add detail.",
      "Their tone softens or slows down.",
      "They elaborate on what happened or why it mattered.",
      "They move from blaming to explaining.",
      "They seem relieved that someone named the feeling.",
      "They become more willing to talk about next steps.",
    ],
    adjust: [
      "They say 'Don't psychoanalyse me' or go guarded - stop labelling and just listen.",
      "They wave off several labels in a row - ask what word they would use instead.",
      "They give short, flat answers after the label - switch to facts or next steps.",
      "You are in public and the label might embarrass them - drop it.",
      "The feeling is escalating and needs a boundary or action, not more exploration.",
      "You notice you are labelling to steer the conversation rather than understand it.",
      "Go one shade softer on the intensity of the label.",
      "Offer an exit: 'No need to get into it if it's not useful.'",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the signal",
      task: "In three conversations, just notice one emotional tone sitting under the words - the tone, a repeated word, a change of pace. Do not label it out loud yet; only practise catching it.",
    },
    {
      day: "Day 2",
      title: "One soft label",
      task: "Offer a single tentative label once - 'That sounds...', 'It seems like...', or 'Part of this might be...' - then let the conversation carry on. One label, that's all.",
    },
    {
      day: "Day 3",
      title: "Hold the pause",
      task: "Use a label, then deliberately stay silent for two seconds. Do not advise, fix or explain. Watch what the pause makes room for.",
    },
    {
      day: "Day 4",
      title: "Read the response",
      task: "After each label, notice whether they confirm, correct, soften or elaborate. Jot down which cue told you to stay with it or to back off.",
    },
    {
      day: "Day 5",
      title: "Accept the correction",
      task: "When someone corrects your label, accept it cleanly - 'Fair, what word fits better?' - and use their word from there. Practise being corrected well.",
    },
    {
      day: "Day 6",
      title: "Widen the range",
      task: "Try a two-emotion label ('proud, but also a bit tired?') or a values label ('sounds like fairness is the real issue'), and label a positive feeling for once, not only a negative one.",
    },
    {
      day: "Day 7",
      title: "Recover and chain",
      task: "Practise one recovery line for when a label lands awkwardly, then run a short chain in a real conversation: label the emotion, pause, reflect the meaning, then move to a next step.",
    },
  ],
  checklist: [
    "Did I label the emotion, not the person's identity?",
    "Was my label tentative rather than certain?",
    "Did I pick a word one shade softer than my first instinct?",
    "Did I pause after the label instead of rushing to fix it?",
    "Did I accept their correction cleanly?",
    "Did the label help the person, or just add pressure?",
  ],
  example: {
    without: [
      "Person: They just changed the plan again. Typical.",
      "You: You're angry.",
      "Person: I'm not angry. I'm just sick of it.",
      "You: Well, you sound angry.",
    ],
    with: [
      "Person: They just changed the plan again. Typical.",
      "You: That sounds really frustrating.",
      "Person: It is. It keeps happening.",
      "You: So it's partly the change, but mostly that it feels like a pattern?",
      "Person: Exactly. No one tells me until the last second.",
      "You: It sounds less like the change itself and more like feeling out of the loop.",
      "Person: Yes. That's exactly it.",
      "You: So the thing that matters is being consulted early enough to have some control.",
      "Person: Yes. I just want to know what's happening before it happens.",
    ],
    note: "The poor version labels identity ('you're angry'), argues when corrected, and pushes the person to defend themselves. The strong version offers a soft label, takes the steer when it's nudged, and follows the feeling down to the real issue - being out of the loop - without ever diagnosing.",
  },
  influencePayoff: {
    feeling:
      "They noticed the real thing I was feeling, not just the words I used.",
    principle:
      "People become more open to you once they feel the emotion underneath has been heard, not only the facts.",
    gains: [
      "Makes people feel seen without having to explain everything from scratch.",
      "Lowers defensiveness, because the emotion is acknowledged before the facts are argued.",
      "Turns vague tension into something you can actually discuss.",
      "Builds rapport by showing you are tracking the feeling, not just the content.",
      "Makes later advice, disagreement, boundary-setting or persuasion easier to receive.",
    ],
    whyMostFail: [
      "They over-label - piling on interpretation instead of offering one gentle guess.",
      "They sound certain, so the label lands as a verdict the person has to argue with.",
      "They diagnose or reach for therapy-speak instead of plain, human words.",
      "They label and then keep talking, never leaving the pause that does the real work.",
    ],
  },
  fieldTip: {
    headline: "Go one shade softer.",
    body: "Reach for a label a notch gentler than the emotion you think you're seeing, keep it tentative, then stop talking. An under-shot label is easy for someone to nudge upward; an over-shot one just makes them defend themselves instead of opening up.",
    example:
      "'That sounds like it hit harder than you expected' invites them in; 'you must have been devastated' backs them into a corner.",
    dont: "You must have been devastated.",
    do: "That sounds like it hit harder than you expected.",
  },
  method: [
    {
      step: "1",
      title: "Notice the emotional signal",
      body: "Listen past the facts for the feeling underneath. The signal usually lives in tone, intensity, repeated words, contrast words, a change of pace, or the detail they keep circling back to. You're looking for the thing that seems to matter more than the words admit.",
      examples: [
        { label: "They say", text: "It's fine, it's just... typical." },
        {
          label: "The signal",
          text: "The flat 'typical' is carrying more than 'fine' is.",
        },
      ],
    },
    {
      step: "2",
      title: "Choose a gentle label",
      body: "Pick a word one shade softer than your first instinct. An under-shot label is easy for them to nudge upward; an over-shot one makes them defend themselves.",
      examples: [
        { label: "Softer", text: "frustrated before furious" },
        { label: "Softer", text: "disappointed before devastated" },
        { label: "Softer", text: "cautious before scared" },
      ],
    },
    {
      step: "3",
      title: "Make it tentative",
      body: "Wrap the label in a soft opener so it's an offer, not a verdict. Tentativeness leaves them room to correct you, which is the whole point.",
      examples: [
        { label: "Opener", text: "It sounds like..." },
        { label: "Opener", text: "Part of this might be..." },
        { label: "Opener", text: "I may be off, but..." },
      ],
    },
    {
      step: "4",
      title: "Label the feeling, not the identity",
      body: "Name the moment, not the person. Keep it about the situation, so there's nothing for them to argue with.",
      examples: [
        { label: "Avoid", text: "You're a frustrated person." },
        { label: "Better", text: "That sounds frustrating." },
      ],
    },
    {
      step: "5",
      title: "Pause and let them respond",
      body: "After the label, stop talking. Don't rush into fixing, explaining or reassuring. The silence is what lets them confirm, soften, correct or elaborate - and that's where the trust is built.",
    },
    {
      step: "6",
      title: "Follow their correction",
      body: "If they disagree, treat it as useful information, not a miss. Accept it straight away and hand them the pen. Being corrected well often builds more rapport than being right.",
      examples: [
        { label: "Say", text: "That's helpful - what word would fit better?" },
      ],
    },
    {
      step: "7",
      title: "Move to meaning or action",
      body: "Once they feel heard, shift gears: ask what matters most, clarify the real concern, or suggest a next step. Labelling opens the door; it isn't meant to be the whole conversation.",
    },
  ],
  liveThreadClues: [
    "'It's fine, just...'",
    "'Typical.'",
    "'Again.'",
    "'Whatever.'",
    "'To be honest...'",
    "'I guess.'",
    "'Not gonna lie...'",
    "A sigh, or a flat, clipped tone",
    "The same detail repeated more than once",
    "One word said with extra weight",
  ],
  depthDial: [
    {
      depth: "Soft",
      useWhen: "early, public, or with a guarded person",
      phrase: "That sounds like a lot.",
    },
    {
      depth: "Warm",
      useWhen: "rapport is forming",
      phrase: "That sounds really frustrating.",
    },
    {
      depth: "Named concern",
      useWhen: "some trust is present",
      phrase: "It sounds like the sting was not being consulted.",
    },
    {
      depth: "Two-sided",
      useWhen: "the feeling is genuinely mixed",
      phrase: "Proud, but also a bit exhausted?",
    },
    {
      depth: "Values / meaning",
      useWhen: "the facts keep repeating",
      phrase: "Sounds like fairness is the real issue here.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Over-certainty",
      soundsLike: "You're angry.",
      better: "It sounds frustrating.",
    },
    {
      mistake: "Too intense too early",
      soundsLike: "That must have been devastating.",
      better: "That sounds heavy.",
    },
    {
      mistake: "Labelling the identity, not the moment",
      soundsLike: "You're an anxious person.",
      better: "This seems anxiety-provoking.",
    },
    {
      mistake: "Arguing when you're corrected",
      soundsLike: "No, you are angry.",
      better: "Fair - what word fits better?",
    },
    {
      mistake: "Therapy-speak",
      soundsLike: "I'm hearing some affective dysregulation.",
      better: "This sounds like a lot to manage.",
    },
    {
      mistake: "No pause",
      soundsLike: "That sounds frustrating - so what you should do is...",
      better: "That sounds frustrating. (Then stop, and let them respond.)",
    },
    {
      mistake: "Using the label to pacify",
      soundsLike: "You're upset, but...",
      better: "That sounds upsetting. Tell me the part that stings most.",
    },
    {
      mistake: "Only ever naming the negative",
      soundsLike: "(Skating past the pride or relief in what they said.)",
      better: "You sound genuinely proud of that.",
    },
  ],
  recoveryPhrases: [
    "I may have put the wrong word on it.",
    "I don't want to psychoanalyse you - what word would fit better?",
    "Fair. Let me say that differently.",
    "I might be reading it wrong.",
    "Thanks for correcting me.",
    "Let's just stay with the facts for a moment.",
    "I meant that as curiosity, not a judgement.",
  ],
  bestRecoveryLine:
    "I may have put the wrong word on it - what word would fit better?",
  chains: [
    {
      label: "Rapport chain",
      sequence:
        "Label emotion -> pause -> reflect the meaning -> live-thread follow-up -> light self-disclosure",
      example: [
        "You: That sounds like it really got under your skin.",
        "Them: Yeah. It's been building for weeks.",
        "You: So it's less this one thing and more the pattern.",
        "You: I get that - the drip-drip is harder to shake than one big blow-up.",
      ],
    },
    {
      label: "Conflict chain",
      sequence:
        "Validate the concern -> label the emotion -> name the shared goal -> ask what would make it workable",
      example: [
        "You: It sounds like that landed as unfair.",
        "Them: It did.",
        "You: We both want this to actually stick this time.",
        "You: What would make it feel workable from your side?",
      ],
    },
    {
      label: "Influence chain",
      sequence:
        "Ask before you tell -> label the concern -> permission-based advice -> values-based framing -> release the decision",
      example: [
        "You: Can I offer one angle, or do you want to vent first?",
        "You: Sounds like the worry is being left to carry it alone.",
        "You: If it helps, here's what I'd try - but it's your call.",
      ],
    },
    {
      label: "Good-news chain",
      sequence:
        "Label the positive emotion -> active-constructive question -> specific appreciation",
      example: [
        "You: You sound genuinely proud of this.",
        "You: What was the part that finally clicked?",
        "You: Honestly, the way you stuck with it is impressive.",
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC004",
      reason:
        "Reflective listening reflects the content or meaning back accurately. Reach for it instead when the person mainly needs to feel heard and clarified, not to have a feeling named.",
    },
    {
      id: "TC033",
      reason:
        "Minimal encouragers are small continuers - a nod, 'go on', 'mm'. Use them instead when the person just needs space to keep talking, not a label placed on the feeling.",
    },
    {
      id: "TC037",
      reason:
        "Double-sided reflection holds both sides of an inner conflict fairly. Use it instead when they are genuinely torn between two competing wants or values.",
    },
    {
      id: "TC040",
      reason:
        "Meaning reflection names what the event means for identity, trust, autonomy or belonging. Use it instead when the facts keep repeating because the significance, not the emotion, has gone unheard.",
    },
    {
      id: "TC058",
      reason:
        "Feeling-plus-need Reflection names the feeling and the unmet need behind it. Use it instead when the emotion is already clear and the useful move is to surface what they actually need.",
    },
    {
      id: "TC061",
      reason:
        "Tone Reflection mirrors the vocal or emotional tone rather than a specific emotion word. Use it instead when a feeling is clearly present but still too vague to name cleanly.",
    },
  ],
};
