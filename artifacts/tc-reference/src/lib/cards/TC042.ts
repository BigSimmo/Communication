import type { CardData } from "../card-types";

export const TC042: CardData = {
  pdfUrl: "cards/TC042/TC042_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC042/TC042_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC042/TC042_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC042/TC042_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC042/TC042_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC042/TC042_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC042/TC042_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC042/TC042_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC042",
  whyItWorks:
    "PREP is a structured way to make a point clearly: state the point, give one reason, show one example, then return to the point. It works because it hands the listener the thing that matters first, then the support for it, so they spend no effort decoding where you are going. That lowers cognitive load, keeps the reason and example in a sensible order, and lets the person understand, decide or act without wading through everything in your head. Used lightly, it organises your thinking while you still sound human, responsive and respectful.",
  whatItIsNot: [
    "PREP is not a script to recite mechanically, and you never name the framework out loud.",
    "It is not a way to avoid listening, or to compress someone's emotion into a template.",
    "It is not a tool for forcing the other person into your structure.",
    "If the structure makes the conversation less humane, it is the wrong move: slow down and say it plainly.",
  ],
  overview: {
    coreFormula: [
      "Point → Reason → Example → Point",
      "My point is X. The reason is Y. For example, Z. So the short answer is X.",
      "Point: lead with the one thing that matters.",
      "Reason: give the single strongest why, not every why.",
      "Example: make it concrete with one case, not three.",
      "Best field rule: use the structure to organise thought, then speak like a person.",
    ],
    minimumViableMove:
      "State your point in one sentence, give one reason, offer one concrete example, then land back on the point, without ever naming the framework.",
    impact: "Medium",
    difficulty: "Easy-Medium",
    misuse:
      "The move fails when you turn a concise structure into a rigid mini-speech: announcing the framework, forcing every sentence into it, and carrying on after the listener is already clear.",
    bestFor: [
      "Concise recommendations",
      "Explaining a decision or your reasoning",
      "Meeting contributions",
      "Interview answers",
      "Making a scannable point in an email",
      'Answering "what do you think?" without rambling',
    ],
  },
  notFor: [
    "High-emotion moments",
    "Active conflict",
    "Exploratory listening, where you should be drawing them out",
    "When the other person needs validation first",
    "Sensitive material: shame, grief, anger or distress",
    "Real power imbalance or a high-stakes decision, where care matters more than tidiness",
    "When physical safety or an immediate emergency takes priority",
  ],
  phraseBank: [
    {
      id: "quick-openers",
      label: "Quick openers",
      tag: "One-line starters",
      tone: "Quick",
      phrases: [
        "Short version?",
        "My point is this.",
        "Here's the one thing that matters.",
        "Bottom line first, then the why.",
        "Let me keep this to a sentence.",
        "One point, one reason, one example.",
        "The headline is X.",
        "Quick answer: X. Want the reasoning?",
      ],
    },
    {
      id: "meetings-recommendations",
      label: "Meetings & recommendations",
      tag: "Work contexts",
      tone: "Professional",
      phrases: [
        "My recommendation is X. The reason is Y. For example, Z. So my vote is X.",
        "The point is we should move the deadline. Testing isn't ready. Staging failed twice this week. So I'd push it a week.",
        "In short, I'd go with option B: it's cheaper to run, and the March trial proved that out.",
        "My read is we're aligned on scope, just not on timing.",
        "One point for the record: the risk sits in the handover, not the build.",
        "Here's my answer, the reason behind it, and one example, then I'll stop.",
        "I'll give you a recommendation and a reason, and leave the decision with you.",
        "The main point is X. Everything else is just support for it.",
      ],
    },
    {
      id: "clear-point-clear-ask",
      label: "Clear point, clear ask",
      tag: "Firm and plain",
      tone: "Direct",
      phrases: [
        "My point is I can't take this on this week.",
        "Short answer: no. Here's the one reason why.",
        "Let me give you the point before the detail.",
        "Here's what I think, and the single reason I think it.",
        "I'll make the point once, clearly, then it's yours.",
        "The point stands on one example. Here it is.",
        "That's my position. Reason and example if you want them.",
      ],
    },
    {
      id: "collaborative-framing",
      label: "Collaborative framing",
      tag: "Open and easy",
      tone: "Warm",
      phrases: [
        "Can I give you the short version, then fill in whatever's useful?",
        "I'll keep this simple and we can dig into any part of it.",
        "Here's where I've landed. Tell me if I've missed something.",
        "Let me lay it out plainly, then it's over to you.",
        "I want to be clear, not to lecture. Pull me up if I overdo it.",
        "Short and rough first, then we refine it together.",
      ],
    },
    {
      id: "when-it-lands-as-a-speech",
      label: "When it lands as a speech",
      tag: "Soften and simplify",
      tone: "Repair",
      phrases: [
        "I made that too structured. Let me say it more simply.",
        "That came out like a mini-speech. The real point is just X.",
        "Let me back up. I don't think that was the useful frame.",
        "I don't want the structure to bury the actual issue.",
        "Which part of that was useful, and what should we drop?",
        "Sorry, I over-explained. Short version: X.",
      ],
    },
    {
      id: "under-pressure",
      label: "Under pressure",
      tag: "Check before you structure",
      tone: "High-stakes",
      phrases: [
        "Before I lay this out. Is now the moment, or do you need something else first?",
        "I can give you the clean version, but say if you'd rather just talk it through.",
        "Let me check this frame is useful before I run with it.",
        "I'll make one point and stop, because I know this matters.",
        "If the tidy answer feels cold here, tell me and I'll drop it.",
        "One point, then I'll listen. I don't want to talk over this.",
      ],
    },
  ],
  method: [
    {
      step: "1",
      title: "Choose the moment",
      body: "Decide whether structure serves this moment at all. If emotion is high, or the person needs to be heard first, skip the framework and listen. PREP is for when someone wants a clear point, a recommendation or an answer, not when they want comfort.",
    },
    {
      step: "2",
      title: "Point",
      body: 'Lead with the single thing that matters, in one plain sentence. Say it before the reasoning, not after. "I\'d move the launch a week", not three minutes of background that finally arrives at the point.',
    },
    {
      step: "3",
      title: "Reason",
      body: 'Give the one strongest why, not every why. A single clear reason is more persuasive than five stacked ones, and it keeps the listener with you. "Testing is a step behind."',
    },
    {
      step: "4",
      title: "Example",
      body: 'Make it concrete with one example, not three. One vivid case does the work. A pile of examples buries the point. "Staging failed twice this week."',
    },
    {
      step: "5",
      title: "Return to the point, then check",
      body: "Land back on the point in a few words, then stop and watch. Are they clearer, more engaged, able to act? If they look confused or resistant, summarise and invite correction rather than pushing the structure harder.",
    },
  ],
  liveThreadClues: [
    '"What do you think?"',
    '"So what\'s your recommendation?"',
    '"Can you keep it short?"',
    '"Give me the headline."',
    '"Why do you say that?"',
    '"What should we do?"',
    '"Can you summarise where we\'ve got to?"',
  ],
  depthDial: [
    {
      depth: "Headline only",
      useWhen: "They need speed",
      phrase: "Short answer: move it a week.",
    },
    {
      depth: "Point + reason",
      useWhen: "They need the why",
      phrase: "Move it a week. Testing's a step behind.",
    },
    {
      depth: "Full PREP",
      useWhen: "They need convincing",
      phrase:
        "Move it a week. Testing's behind. Staging failed twice. So: a week.",
    },
    {
      depth: "PREP + next step",
      useWhen: "They need action",
      phrase: "...so let's re-test payments today and hold the date.",
    },
  ],
  decisionTree: [
    {
      condition: "The listener needs speed",
      action: "Use the shortest version: the point alone, BLUF-level brevity.",
      phrase: "Short answer: move it a week. Detail if you want it.",
    },
    {
      condition: "The listener needs convincing",
      action: "Use the full Point → Reason → Example → Point.",
      phrase:
        "Move it a week. Testing's behind, staging failed twice. So a week.",
    },
    {
      condition: "The listener needs support",
      action: "Validate first and delay the framework.",
      phrase: "This deadline's brutal, I know. Can I say what I think we do?",
    },
    {
      condition: "The listener needs a story",
      action: "Switch to an example-led neighbour such as STAR or CARL.",
      phrase: "Let me walk you through what actually happened last time.",
    },
    {
      condition: "The listener needs action",
      action: "End with one clean next step.",
      phrase: "So the next step is: re-test payments today, hold the date.",
    },
  ],
  ladder: [
    {
      weak: "Recites PREP as a visible script and sounds rehearsed.",
      better: "Uses PREP silently to organise a concise response.",
      best: "Uses PREP flexibly, then checks whether the listener is clearer, more heard, or better able to respond.",
    },
    {
      weak: 'Announces "I\'ll use PREP here" out loud.',
      better: "Drops the label and just makes the point cleanly.",
      best: "Structure is invisible. It sounds like a clear person thinking well.",
    },
    {
      weak: "Piles on three examples and loses the point.",
      better: "Gives one example that fits.",
      best: "Picks the single example that makes the point land, then returns to it.",
    },
  ],
  scenarios: [
    {
      situation: "Work meeting",
      move: "Make your contribution concise and memorable: one point, one reason, one example, then hand back.",
      phrase:
        "I'd hold the date. The risk is only in payments, and we can re-test that today.",
    },
    {
      situation: "Email",
      move: "Put the framework into short, scannable paragraphs or bullets so the reader gets the point on first pass.",
      phrase:
        "Recommendation: push a week. Reason: testing's behind. Example: staging failed twice. Net: a week.",
    },
    {
      situation: "Giving feedback",
      move: "Check what kind of feedback would help before you structure it. Don't lead with a tidy framework into an open wound.",
      phrase: "Want the quick version or the full picture? Either's fine.",
    },
    {
      situation: "Difficult conversation",
      move: "Use one sentence per step, then pause. Let the structure hold you steady without turning it into a wall.",
      phrase:
        "My point is I need to change how we split this. Here's why, then I'll stop.",
    },
    {
      situation: "Interview answer",
      move: "Answer the question, give your reason, offer one concrete example, then close on the answer. Don't drift.",
      phrase:
        "Yes. My strength is untangling messy problems (for instance, the migration last year) so that's where I'd add value.",
    },
    {
      situation: "Quick update to a busy manager",
      move: "Lead with the point and the one thing they need to know. Skip the build-up entirely.",
      phrase:
        "We're on track bar one risk, payments testing, and I've got a plan for it.",
    },
  ],
  calibration: {
    working: [
      "They become clearer or more decisive.",
      "They ask a sharper, more specific question.",
      "They summarise your point back accurately.",
      "They can choose a next step.",
      "They relax because they can see where you're going.",
      "The exchange gets shorter, not longer.",
    ],
    adjust: [
      "They look confused or go quiet.",
      "They challenge the framing itself.",
      "They seem to need the human context before the structure.",
      "You're still talking after the point has landed.",
      "It starts to sound defensive, performative or salesy.",
      "It's tipping into a lecture: stop and hand back.",
      "Emotion is rising and the tidiness feels cold: validate first.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Draft it",
      task: "Take a real topic and write a 60-second answer using Point → Reason → Example → Point.",
    },
    {
      day: "Day 2",
      title: "Cut it",
      task: "Trim yesterday's answer by a third without losing the core point.",
    },
    {
      day: "Day 3",
      title: "Say it two ways",
      task: "Read it aloud once as visible structure, once as plain speech, and keep the plain one.",
    },
    {
      day: "Day 4",
      title: "Strip the labels",
      task: 'Remove any "my point is / the reason is / for example" scaffolding and check it still holds together.',
    },
    {
      day: "Day 5",
      title: "One example only",
      task: "Swap in the single strongest example and delete every other one.",
    },
    {
      day: "Day 6",
      title: "Use it live",
      task: "Use it once in a real conversation and watch whether the listener actually gets clearer.",
    },
    {
      day: "Day 7",
      title: "Practise the recovery",
      task: "Rehearse one recovery line for when it lands as a mini-speech, and use it if it does.",
    },
  ],
  checklist: [
    "Did I use PREP to serve the listener, not to sound polished?",
    "Was the core point clear in one sentence?",
    "Did I keep it concise?",
    "Did I adapt when the listener needed something else?",
    "Did I preserve their autonomy and dignity?",
    "Did clarity actually improve, or did I just sound tidy?",
  ],
  example: {
    without: [
      'Manager: "What do you think. Should we move the launch?"',
      'You: "My point is we should move the launch. The reason is the build isn\'t ready. For example, testing is behind. So my point is we should move the launch."',
      'Manager: "...Right. You said that twice."',
      'You: "To structure it: Point, Reason, Example, Point. The reason again is testing..."',
      "Why it's weak:",
      "announces and repeats the framework",
      "forces every sentence into the template",
      "keeps going after the point has clearly landed",
      "sounds rehearsed instead of thought-through",
    ],
    with: [
      'Manager: "What do you think. Should we move the launch?"',
      "You: \"I'd move it a week. The build's solid but testing's a step behind. Staging failed twice this week. A week buys us a clean run.\"",
      'Manager: "A week\'s a lot. Can we do less?"',
      'You: "Fair. The real risk is the payment flow, not the whole build. If we just re-test that, we could hold the date."',
      'Manager: "Let\'s do that."',
      "Why this works:",
      "leads with the point, then one reason, one example",
      "never names the framework",
      "drops the structure the moment the manager needs something different",
      "stays a conversation, not a presentation",
    ],
    note: "The structure is doing its job when you can abandon it mid-answer and the point still stands.",
  },
  influencePayoff: {
    feeling: '"I know exactly what they\'re saying, and why."',
    principle:
      "People follow a point more easily when they are handed the point first and the support second, not the other way around.",
    gains: [
      "Clarity: the listener knows what matters first.",
      "Lower cognitive load: less to hold in their head.",
      "Better sequencing: reason and example arrive in order.",
      "Faster decisions: they can act without decoding you.",
      "Credibility: you sound organised, not rehearsed.",
      "Respect: you're not making them dig for the point.",
    ],
    whyMostFail: [
      "They name the framework out loud and it sounds like a technique.",
      "They deliver it mechanically, forcing every sentence into the template.",
      "They keep talking after the point has landed.",
      "They reach for structure when the moment actually needed listening or validation.",
    ],
  },
  commonMistakes: [
    {
      mistake:
        "Over-structuring: making the framework more important than the point.",
      soundsLike: '"Point one. Reason. Example. And back to my point..."',
      better: "\"I'd move the launch. Testing's behind.\"",
    },
    {
      mistake: "Naming the framework out loud.",
      soundsLike: '"Let me PREP this for you."',
      better: "Just make the point cleanly and drop the label.",
    },
    {
      mistake: "Over-explaining after the point has landed.",
      soundsLike: '"...and also, for context, back in Q1..."',
      better: "Stop once they're clear and hand it back.",
    },
    {
      mistake: "Repeating the point when nobody needed it repeated.",
      soundsLike: '"So, again, my point is..."',
      better: "Say it once, well, and let it sit.",
    },
    {
      mistake: "Structuring when emotion or listening should come first.",
      soundsLike: '"Let me lay this out clearly:" (to someone upset)',
      better: '"That sounds hard. Tell me what happened."',
    },
    {
      mistake: "Piling on examples to prove the point.",
      soundsLike: '"For example... and another example... and also..."',
      better: "Pick the one example that lands.",
    },
    {
      mistake: "Skipping the check that the listener is actually clearer.",
      soundsLike: "Delivering the point and moving straight on.",
      better: '"Does that answer it, or have I missed the bit you care about?"',
    },
  ],
  recoveryPhrases: [
    "I made that too structured. Let me say it more simply.",
    "That may not be the useful frame. Let me back up.",
    "I don't want the structure to override the actual issue.",
    "What part of that was useful, and what should we drop?",
    "That came out like a mini-speech: the real point is just X.",
    "Sorry, I over-explained. Short version: X.",
    "Let me stop structuring and just listen for a minute.",
  ],
  bestRecoveryLine:
    "That came out like a mini-speech: the real point is just X.",
  chains: [
    {
      label: "Clarity check",
      sequence: "PREP → Summary check",
      example: [
        "Make the point cleanly.",
        '"Just so we\'re aligned. What did you take from that?"',
        "Fix any gap before moving on.",
      ],
    },
    {
      label: "Point into ask",
      sequence: "PREP → Clean request",
      example: [
        "\"I'd move the launch a week. Testing's behind.\"",
        '"So, concretely: can you push the announce date to the 14th?"',
      ],
    },
    {
      label: "Point then room",
      sequence: "PREP → Autonomy release",
      example: [
        "Make the point and give the reason.",
        "\"That's my read, but it's your call.\"",
      ],
    },
    {
      label: "Feelings first",
      sequence: "Validation → PREP",
      example: [
        '"Yeah, this deadline\'s brutal. I get it."',
        'Then: "Here\'s what I think we do, and why..."',
      ],
    },
  ],
  fieldTip: {
    headline: "Scaffolding, not the conversation.",
    body: "Use PREP to organise your thinking before you speak, then let it disappear. The other person should feel clarity, not choreography. If they can't tell you used a framework, you used it well.",
    example:
      "\"I'd move the launch a week. Testing's a step behind and staging failed twice. A week gives us a clean run.\"",
    dont: 'Announce "I\'ll use PREP here," or repeat the point once it has clearly landed.',
    do: "Lead with the point, back it with one reason and one example, then stop.",
  },
  relatedTechniques: [
    {
      id: "TC044",
      reason:
        "BLUF: both lead with the point. Use PREP when you also need a reason and an example to convince. Use BLUF when the bottom line alone is enough.",
    },
    {
      id: "TC047",
      reason:
        "STAR structures a story (Situation, Task, Action, Result). Use PREP for a crisp recommendation. Use STAR when the listener needs the narrative behind a result.",
    },
    {
      id: "TC048",
      reason:
        "SCQA frames a problem before the answer (Situation, Complication, Question, Answer). Use PREP to make a point. Use SCQA when you first need to set up why the question matters.",
    },
    {
      id: "TC049",
      reason:
        "CARL is another story structure (Context, Action, Result, Learning). Use PREP for a concise point. Use CARL when reflection or the lesson is the focus.",
    },
    {
      id: "TC013",
      reason:
        "Clean request: use PREP when making and supporting a point is the need. Use Clean request when the moment really calls for a single specific ask.",
    },
  ],
};
