import type { CardData } from "../card-types";

export const TC047: CardData = {
  pdfUrl: "cards/TC047/TC047_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC047/TC047_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC047/TC047_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC047/TC047_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC047/TC047_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC047/TC047_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC047/TC047_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC047/TC047_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC047",
  whyItWorks:
    "STAR organises an example into four quick beats (Situation, Task, Action, Result) so a listener can follow what happened, what you were responsible for, what you did and what changed, without having to reassemble it themselves. Told in that order, a concrete example lands as clear, credible and memorable. The structure does the sequencing in the background so you can sound like a person telling a real story rather than someone reciting a template.",
  whatItIsNot: [
    "It is not a script to recite mechanically, label by label.",
    "It is not a way to avoid listening, compress emotion into a template, or force the other person into your structure.",
    "It is not a set-piece answer. If the structure makes the conversation less humane, slow down and use a simpler move.",
  ],
  overview: {
    coreFormula: [
      "Situation → Task → Action → Result",
      'Situation: what was going on. "Two weeks from launch, our main supplier pulled out."',
      'Task: what you were responsible for. "I owned delivery, so it was on me to hold the date."',
      'Action: what you actually did. "I called three vendors, negotiated a rush order, and re-sequenced the build."',
      'Result: what changed. "We shipped on time and the client renewed."',
    ],
    minimumViableMove:
      "Silently order your example as Situation, Task, Action, Result, then say it in plain language. Keep the scene to a sentence and never name the framework out loud.",
    impact: "Medium",
    difficulty: "Easy-Medium",
    misuse:
      "It fails when you overstuff the scene with background and run out of airtime for the action and result, or when you announce the labels and it sounds rehearsed. In emotional moments it can feel like structuring past the person instead of hearing them.",
    bestFor: [
      "Interviews and competency questions",
      "Performance reviews and self-assessments",
      "Telling a concise, concrete story",
      "Giving evidence for a skill you have claimed",
      "Sharing a lesson learnt from experience",
      "Making a meeting contribution land clearly",
      "Written updates someone needs to scan",
    ],
  },
  notFor: [
    "Live conflict, where a tidy structure can feel cold",
    "Vulnerable disclosure that needs listening, not a framework",
    "When the person needs a direct answer, not a story",
    "Emotionally charged moments: distress, shame, grief or anger",
    "A real power imbalance, where a set-piece answer can feel evasive",
    "High-stakes decisions that need open discussion, not a rehearsed case",
    "Physical safety or an emergency, where structure wastes time",
  ],
  phraseBank: [
    {
      id: "quick-frames",
      label: "Quick",
      tag: "Quick openers",
      tone: "Quick",
      phrases: [
        "Let me give you a quick example.",
        "Short version: here's what happened and how it turned out.",
        "Can I walk you through one specific case?",
        "Let me make this concrete.",
        "Give me thirty seconds and I'll show you what I mean.",
        "Here's the example rather than the theory.",
        "One story shows this best.",
      ],
    },
    {
      id: "the-four-beats",
      label: "The four beats",
      tag: "Step signposts",
      tone: "Direct",
      phrases: [
        "The situation was...",
        "What I had to do was...",
        "So what I did was...",
        "And the result was...",
        "Where this started...",
        "The upshot was...",
        "Context first, then what I did, then how it landed.",
      ],
    },
    {
      id: "interview-review",
      label: "Interview & review",
      tag: "Evidence of skill",
      tone: "Professional",
      phrases: [
        "You asked for a time I handled that. Here's one.",
        "In my last role I owned a problem end to end.",
        "The measurable result was...",
        "What I took from that was...",
        "That's the clearest example I can give of that skill.",
        "Happy to go deeper on any part of that.",
        "When I say I improved that, here's the specific case.",
      ],
    },
    {
      id: "human-framing",
      label: "Keep it human",
      tag: "So it isn't robotic",
      tone: "Warm",
      phrases: [
        "I'll keep this human, not a case study.",
        "Bear with me. There's a little context first.",
        "The part I'm proud of is what came out of it.",
        "It mattered to me because...",
        "Stop me once you've heard enough detail.",
        "Here's the short version if you're pressed for time.",
      ],
    },
    {
      id: "written-scan",
      label: "Email & written",
      tag: "Scannable layout",
      tone: "Professional",
      phrases: [
        "I've laid it out as context, action and outcome so it's easy to scan.",
        "Headline first, then the detail underneath.",
        "Two lines of background, three bullets on what I did, one line on the result.",
        "The outcome is in the first line. The rest is supporting detail.",
        "Each paragraph is labelled so you can jump to what you need.",
      ],
    },
    {
      id: "recover-simplify",
      label: "Recover & simplify",
      tag: "When it lands badly",
      tone: "Repair",
      phrases: [
        "That was a long setup. Short version: here's what I did and how it turned out.",
        "Let me skip to the result.",
        "Let me skip the background and get to what actually happened.",
        "I over-explained there: the key point is the result.",
        "That came out rehearsed. Here's the honest version.",
        "Tell me if you'd rather I just gave you the short answer.",
      ],
    },
    {
      id: "under-pressure",
      label: "Under pressure",
      tag: "Difficult conversations",
      tone: "High-stakes",
      phrases: [
        "Let me lay out what happened plainly, then you can respond.",
        "One sentence on the situation, then what I did, then where it stands.",
        "Here's the context, the call I made, and the outcome. No spin.",
        "Before we react, can I set out how this unfolded?",
        "I'll stick to the sequence so we're working from the same facts.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "The listener needs speed",
      action: "Use the shortest one-line version and drop the detail.",
      phrase:
        '"Short version: the supplier fell through, I found three alternatives, we shipped on time."',
    },
    {
      condition: "The listener is upset or needs support",
      action: "Validate first and delay the framework.",
      phrase:
        '"That sounds hard. Do you want to talk it through, or hear how I\'d approach it?"',
    },
    {
      condition: "The listener wants a story or evidence",
      action: "Give the full STAR example: scene brief, result concrete.",
      phrase: '"Let me walk you through one specific case."',
    },
    {
      condition: "The listener needs a decision or action",
      action: "End on one clean next step.",
      phrase: '"So the next step is to keep one backup supplier on file."',
    },
    {
      condition: "The listener is already clear",
      action: "Stop: don't finish the structure for its own sake.",
      phrase:
        "\"Sounds like you've got what you need, so I'll leave it there.\"",
    },
  ],
  ladder: [
    {
      weak: "Recites STAR as a visible script and sounds rehearsed.",
      better: "Uses STAR silently to organise a concise answer.",
      best: "Uses STAR flexibly, then checks the listener is clearer, more heard and better able to respond.",
    },
    {
      weak: "Front-loads endless situation and background.",
      better: "Trims the scene to a sentence or two.",
      best: "Spends most of the airtime on action and result, where the value is.",
    },
    {
      weak: "Forces a structured story into an emotional moment.",
      better: "Notices the emotion and pauses the framework.",
      best: "Validates first, then offers structure only if it still helps.",
    },
  ],
  scenarios: [
    {
      situation: "Work meeting",
      move: "Compress it to one sentence per step so the contribution stays concise and memorable.",
      phrase:
        '"Quick example: supplier pulled out, I owned delivery, I lined up three alternatives, we shipped on time."',
    },
    {
      situation: "Job interview",
      move: "Lead with a real example, keep the scene short, and land a concrete result.",
      phrase: '"You asked for a time I handled pressure. Here\'s one."',
    },
    {
      situation: "Email or written update",
      move: "Lay it out as labelled or bulleted paragraphs so it can be scanned.",
      phrase:
        '"Context, what I did, and the outcome are in the three short paragraphs below."',
    },
    {
      situation: "Giving feedback",
      move: "Check what kind of feedback is wanted before you structure it.",
      phrase:
        '"Would a specific example be useful here, or do you want the headline first?"',
    },
    {
      situation: "Difficult conversation",
      move: "One sentence per step, then pause and let them respond.",
      phrase:
        "\"Here's what happened and what I did, then I'll stop and hear you.\"",
    },
    {
      situation: "Performance review",
      move: "Use STAR to give evidence for a claim about your work.",
      phrase:
        '"When I say I improved retention, here\'s the specific example."',
    },
  ],
  calibration: {
    working: [
      "They become clearer and ask a more specific question.",
      "They summarise your point back accurately.",
      "They can choose a next step.",
      "They follow along without needing you to repeat.",
      "They pick up a detail you gave and build on it.",
      "They react to the content of the example, not to your delivery.",
    ],
    adjust: [
      "They look confused or ask you to start again.",
      "They go quiet or lose interest partway through.",
      "They challenge the framing rather than the content.",
      "They seem to need the human context before any structure.",
      "You notice yourself announcing the labels out loud.",
      "The scene is running long and you still haven't reached the action.",
      "It starts to sound defensive, performative or like a lecture: stop and simplify.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Pick a story",
      task: "Choose one real experience that shows a skill you want to evidence, and jot down its four parts: Situation, Task, Action, Result.",
    },
    {
      day: "Day 2",
      title: "Write it out",
      task: "Draft a 60-second STAR response for that example in full sentences.",
    },
    {
      day: "Day 3",
      title: "Cut by a third",
      task: "Trim it hard: shrink the situation to a sentence, protect the action and result, and remove anything that isn't carrying weight.",
    },
    {
      day: "Day 4",
      title: "Say it two ways",
      task: "Read it aloud once with the labels announced, once as plain speech. Keep whichever sounds like a person, not a template.",
    },
    {
      day: "Day 5",
      title: "Make it scannable",
      task: "Rewrite the same example as a short email, labelled or bulleted, so a reader could skim it in ten seconds.",
    },
    {
      day: "Day 6",
      title: "Use it live",
      task: "Drop the example into a real conversation and watch whether the listener gets clearer, asks a sharper question, or can act.",
    },
    {
      day: "Day 7",
      title: "Recover and set a default",
      task: "Practise one recovery line for when it lands too structured, and pick your default length: one-line, 30-second, or two-minute.",
    },
  ],
  checklist: [
    "Did I use STAR to serve the listener, not to sound polished?",
    "Was the core point clear by the end?",
    "Did I keep the scene short and spend most of the time on action and result?",
    "Did I adapt when the listener needed something else?",
    "Did I preserve the other person's autonomy and dignity?",
    "Did it sound like me, or like a memorised template?",
  ],
  example: {
    without: [
      'Interviewer: "Tell me about a time you dealt with a tight deadline."',
      'You: "Situation. The situation was that we had a project. Task. My task was to complete it. Action. The action I took was to work hard. Result. The result was that it got done."',
      "Why it's weak:",
      "announces each label like a checklist",
      "the scene, task and action are all vague",
      "no concrete detail, so nothing is memorable",
      "sounds rehearsed rather than like a real experience",
    ],
    with: [
      'Interviewer: "Tell me about a time you dealt with a tight deadline."',
      'You: "Sure. Two weeks before a product launch, our main supplier pulled out."',
      'You: "I owned delivery, so holding the launch date was on me."',
      'You: "I called three alternative vendors that afternoon, negotiated a rush order, and re-sequenced the build so the critical parts came first."',
      'You: "We shipped on the original date, and the client renewed for another year."',
      'Interviewer: "What would you do differently?"',
      'You: "Keep a backup supplier on file. That\'s the habit I took from it."',
      "Why this works:",
      "one line of scene, then straight to what mattered",
      "the action is specific and shows judgement",
      "the result is concrete and easy to remember",
      "it never names the framework, yet follows it exactly",
    ],
    note: "The structure stays invisible. The listener just hears a clear, well-told example and comes away able to picture what you actually did.",
  },
  influencePayoff: {
    feeling: '"I can see exactly what you did and what came of it."',
    principle:
      "People trust and remember a point more when it arrives in a clear order: sequence carries as much weight as content.",
    gains: [
      "Clarity: the listener follows without effort",
      "Lower cognitive load: nothing has to be reassembled",
      "Credibility: a concrete result reads as evidence, not a claim",
      "Memorability: a well-ordered story sticks",
      "Concision: you say more in less time",
      "Readiness to act: the listener can decide or respond straight away",
    ],
    whyMostFail: [
      "They recite the labels mechanically, so it sounds like a script.",
      "They overstuff the situation and run out of room for the action and result.",
      "They reach for it in emotional moments where listening should come first.",
      "They never check whether the listener actually became clearer.",
    ],
  },
  fieldTip: {
    headline: "Spend most of the story on what you did.",
    body: "Use STAR to organise your thinking, then let the wording sound like an ordinary story. The other person should feel clarity, not choreography. Keep the order in your head and the labels out of your mouth.",
    example:
      '"Two weeks out, our supplier pulled out. I owned delivery, so I lined up three alternatives that afternoon, negotiated a rush order, and we still shipped on time."',
    dont: 'Don\'t announce "Situation, Task, Action, Result" like headings.',
    do: "Do keep the order in your head and let it come out as a natural story.",
  },
  method: [
    {
      step: "1",
      title: "Decide whether an example helps",
      body: "Choose the framework only if a concrete story is what this moment needs. If the person wants a direct answer, or needs to be heard first, a story is the wrong move. Reach for STAR when someone asks you to show, prove or recount something.",
    },
    {
      step: "2",
      title: "Situation: set a brief scene",
      body: 'Give just enough context for the rest to make sense: one or two sentences, no more. This is the part that runs long if you let it.\nWeak:\n"So, going back a bit, the company had recently restructured and there were a few teams involved..."\nBetter:\n"Two weeks before launch, our main supplier pulled out."',
    },
    {
      step: "3",
      title: "Task: name what you were responsible for",
      body: 'Say what was on you specifically. This is what separates your contribution from the team\'s.\nExample:\n"I owned delivery, so holding the date was my problem to solve."',
    },
    {
      step: "4",
      title: "Action: say what you actually did",
      body: 'This is the heart of it. Be specific and show judgement: the verbs should be yours.\nVague:\n"I sorted it out."\nSpecific:\n"I called three vendors, negotiated a rush order, and re-sequenced the build so the critical parts came first."',
    },
    {
      step: "5",
      title: "Result: show what changed",
      body: 'Land a concrete outcome, ideally something measurable. Don\'t trail off before you get here.\nExample:\n"We shipped on the original date, and the client renewed for another year."\nIf there\'s a lesson, one line is enough:\n"The habit I took from it was keeping a backup supplier on file."',
    },
    {
      step: "6",
      title: "Check and adapt",
      body: 'Watch whether the listener is clearer, more engaged or more able to act. If they look confused or resistant, summarise and invite correction rather than pushing the structure harder.\n"Does that answer it, or do you want more on any part?"',
    },
  ],
  liveThreadClues: [
    "Tell me about a time...",
    "Give me an example...",
    "Walk me through how you...",
    "How did you handle...?",
    "What did you do when...?",
    "Have you dealt with this kind of thing before?",
    "Can you show me where you've done this?",
  ],
  depthDial: [
    {
      depth: "One-line",
      useWhen: "They need speed or it's a passing point",
      phrase:
        '"Supplier pulled out. I found three alternatives. We shipped on time."',
    },
    {
      depth: "30-second",
      useWhen: "A meeting contribution or a quick interview answer",
      phrase:
        '"Two weeks out our supplier pulled out. I owned delivery, lined up three vendors, negotiated a rush order, and we hit the date."',
    },
    {
      depth: "Two-minute",
      useWhen: "They want the full example and your judgement",
      phrase:
        '"Let me walk you through what happened, what I decided, and how it turned out."',
    },
    {
      depth: "Written",
      useWhen: "Email or a document they'll scan",
      phrase:
        '"Context, action and outcome in three short labelled paragraphs."',
    },
  ],
  commonMistakes: [
    {
      mistake: "Over-structuring",
      soundsLike: '"Situation. Task. Action. Result." announced like headings.',
      better: "Tell the story in that order without labelling any of it.",
    },
    {
      mistake: "Endless situation",
      soundsLike: "A minute of background before anything actually happens.",
      better: "One or two sentences of scene, then move to what you did.",
    },
    {
      mistake: "Losing the result",
      soundsLike: '"...and that\'s basically what I did."',
      better: '"...and the result was we shipped on time and kept the client."',
    },
    {
      mistake: "Vague action",
      soundsLike: '"I handled it."',
      better: '"I called three vendors and re-sequenced the plan."',
    },
    {
      mistake: "Structuring an emotional moment",
      soundsLike: "A tidy four-part answer to someone who needs to be heard.",
      better: "Validate first. Offer structure only if it still helps.",
    },
    {
      mistake: "Never checking",
      soundsLike: "Moving on without a glance at whether they followed.",
      better: '"Does that answer it, or do you want more on any part?"',
    },
    {
      mistake: "Reciting mechanically",
      soundsLike: "The same memorised, sing-song answer every time.",
      better: "Let the wording change with the room and the person.",
    },
  ],
  recoveryPhrases: [
    "That was a long setup. Short version: here's what I did and how it turned out.",
    "Let me skip to the result.",
    "Too much background there. Here's the bit that matters.",
    "Do you want the detail on what I did, or just the outcome?",
    "Let me skip the background and get to what actually happened.",
    "I over-explained there. The one thing that matters is the result.",
    "That came out like a rehearsed answer. Here's the honest version.",
    "Tell me if you'd rather I just gave you the short answer.",
  ],
  bestRecoveryLine:
    "That was a long setup. Short version: here's what I did and how it turned out.",
  chains: [
    {
      label: "Clarity chain",
      sequence: "STAR → Summary check",
      example: [
        '"So that\'s the situation, what I did, and where it landed."',
        '"Does that match what you were asking, or have I missed the point?"',
      ],
    },
    {
      label: "Action chain",
      sequence: "STAR → Clean request",
      example: [
        '"...and that\'s how we shipped on time."',
        '"So my ask is simple: can we keep one backup supplier on the books?"',
      ],
    },
    {
      label: "Autonomy chain",
      sequence: "STAR → Autonomy release",
      example: [
        '"That\'s what worked for us last time."',
        '"But you know this context better than I do. Your call."',
      ],
    },
    {
      label: "Emotion-first chain",
      sequence: "Validate → STAR",
      example: [
        '"That sounds genuinely stressful. I get why it\'s frustrating."',
        "\"When you're ready, here's what happened and what I did about it.\"",
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC049",
      reason:
        "Closest cousin: STAR ends on the Result. CARL (Context, Action, Result, Learning) adds an explicit lesson. Use CARL when the reflection or what you learnt is the point.",
    },
    {
      id: "TC042",
      reason:
        "Both organise a point. PREP (Point, Reason, Example, Point) leads with the conclusion. STAR builds up to the result. Use PREP when the listener needs the headline first.",
    },
    {
      id: "TC048",
      reason:
        "SCQA (Situation, Complication, Question, Answer) frames a problem to solve. STAR evidences something you already did. Use SCQA to open an argument, STAR to prove a track record.",
    },
    {
      id: "TC050",
      reason:
        "What? So what? Now what? is a reflection frame for meaning and next steps. STAR recounts a concrete example. Use it when the point is what you learnt, not what you did.",
    },
    {
      id: "TC044",
      reason:
        "When the listener only needs speed, drop the story and lead with the bottom line (BLUF). Return to STAR when they want the evidence behind it.",
    },
  ],
};
