import type { CardData } from "../card-types";

export const TC043: CardData = {
  pdfUrl: "cards/TC043/TC043_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC043/TC043_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC043/TC043_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC043/TC043_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC043/TC043_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC043/TC043_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC043/TC043_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC043/TC043_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC043",
  whyItWorks:
    "OARS is the four core listening moves (Open questions, Affirmations, Reflections and Summaries) used flexibly to help someone think out loud. Rather than jumping to advice, you pick the move the moment needs: an open question to invite, an affirmation to recognise genuine effort, a reflection to show you have heard, a summary to tie it together. It works because people think more clearly and stay more willing when they feel understood first. The structure lowers cognitive load and the warmth earns trust, so any influence comes from clarity and respect rather than pressure.",
  whatItIsNot: [
    "It is not a script to recite line by line: the four letters are options to choose from, not a running order you must complete every time.",
    "It is not a way to avoid listening, or to compress someone's emotion into a neat template.",
    "It is not a tool for steering someone to your conclusion. The affirmations and reflections have to be genuine, not tactical.",
    "It is not a substitute for a straight answer when someone has clearly asked for one.",
    "If the structure is making the conversation less human, that is the signal to drop it, not to push it harder.",
  ],
  overview: {
    coreFormula: [
      "Open → Affirm → Reflect → Summarise: pick the one move the moment needs.",
      'Open: "What matters most to you about this?"',
      'Affirm: "You have clearly put real thought into this."',
      'Reflect: "So it sounds like the timing is the real sticking point."',
      'Summarise: "Let me pull that together and check I have it right."',
    ],
    minimumViableMove:
      "Pick the single OARS move the moment needs (an open question, an affirmation, a reflection or a summary) and say it in plain words, without naming the framework.",
    impact: "Medium",
    difficulty: "Medium",
    misuse:
      "Reciting all four steps mechanically so the person feels processed by a template rather than heard: running the structure even after they are already clear.",
    bestFor: [
      "Coaching and mentoring conversations",
      "Supportive chats where someone is thinking a problem through",
      "Behaviour-change and decision conversations",
      "Autonomy-sensitive moments where advice would land badly",
      "Helping someone who is talking in circles get unstuck",
      "Structuring your own response so it is easier to follow",
      "Feedback, once you know what kind of feedback would help",
    ],
  },
  notFor: [
    "Urgent instruction or a rapid briefing",
    "Someone has directly asked for a straight answer or clear direction",
    "Physical safety or an emergency takes priority",
    "Acute distress, grief or anger, where validation must come first",
    "A power imbalance where the structure could feel like control",
    "You would be running the four steps to look skilled rather than to help",
    "The person is already clear and just needs you to act",
  ],
  phraseBank: [
    {
      id: "open-questions",
      label: "Open questions (O)",
      tag: "Invite them to think",
      tone: "Direct",
      phrases: [
        "What matters most to you about this?",
        "How would you like this to go?",
        "What have you already tried?",
        "What's making this a hard call?",
        "What would a good outcome look like for you?",
        "Where would you like to start?",
        "What's the part you keep coming back to?",
        "What would need to be true for this to work?",
      ],
    },
    {
      id: "affirmations",
      label: "Affirmations (A)",
      tag: "Genuine recognition",
      tone: "Warm",
      phrases: [
        "You have clearly put real thought into this.",
        "That took some courage to raise.",
        "You've handled harder than this before.",
        "You care about getting this right. It shows.",
        "You worked through that carefully before deciding.",
        "It says something that you're even asking the question.",
        "You stuck with it when it got messy.",
      ],
    },
    {
      id: "reflections",
      label: "Reflections (R)",
      tag: "Say back what you heard",
      tone: "Warm",
      phrases: [
        "So it sounds like the timing is the real sticking point.",
        "You're saying the work isn't the problem: the workload is.",
        "It seems like you're keener than you're letting on.",
        "What I'm hearing is that fairness matters more than speed here.",
        "So part of this is excitement and part of it is nerves.",
        "Let me make sure I have it: you want in, just not yet.",
      ],
    },
    {
      id: "summaries",
      label: "Summaries (S)",
      tag: "Tie the threads together",
      tone: "Professional",
      phrases: [
        "Let me pull that together and check I have it right.",
        "So the main things are the cost, the timing and the team, anything missing?",
        "Where we've landed is X. Does that match how you see it?",
        "To sum up before we move on...",
        "So the real question underneath all this is...",
        "Have I got that right?",
      ],
    },
    {
      id: "quick-prompts",
      label: "Quick prompts and encouragers",
      tag: "Keep them going",
      tone: "Quick",
      phrases: [
        "Say more?",
        "Go on.",
        "How so?",
        "And then?",
        "What else?",
        "In what way?",
        "Mm, keep going.",
        "So...?",
      ],
    },
    {
      id: "repair-simplify",
      label: "Simplifying and repairing",
      tag: "When the structure gets in the way",
      tone: "Repair",
      phrases: [
        "Let me say that more simply.",
        "I think I over-structured that. Here's the short version.",
        "Ignore the framework for a second: what do you actually need?",
        "That may not be the right frame. Can we back up?",
        "What part of that helped, and what should we drop?",
        "I don't want the structure to get in the way of the real thing.",
      ],
    },
    {
      id: "high-stakes-moments",
      label: "Emotional or high-stakes moments",
      tag: "Validate before you structure",
      tone: "High-stakes",
      phrases: [
        "That sounds really hard. We don't have to organise it yet.",
        "Take your time. There's no rush to sort this into steps.",
        "Before anything else: how are you doing with it?",
        "I just want to understand it properly before we go anywhere.",
        "We can work out what to do once you've said it all.",
        "You don't have to have this figured out to talk it through.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "They need speed",
      action:
        "Skip to the shortest version: one reflection and a summary, no full loop.",
      phrase: "So the key point is the deadline. What do you want to do?",
    },
    {
      condition: "They are carrying emotion",
      action: "Validate first. Delay the structure until they feel heard.",
      phrase: "That sounds hard. Tell me what's going on.",
    },
    {
      condition: "They want a story or worked example",
      action: "Switch to an example-led neighbour such as STAR or CARL.",
      phrase: "Can I walk you through how it went last time?",
    },
    {
      condition: "They need a decision or action",
      action: "End on one clean next step.",
      phrase: "So the next move is to draft the email. Does that work?",
    },
    {
      condition: "They are already clear",
      action: "Drop OARS: don't run steps they don't need.",
      phrase: "Sounds like you've got it. Anything you need from me?",
    },
  ],
  ladder: [
    {
      weak: "Using OARS as a visible script, so it sounds rehearsed.",
      better: "Using OARS silently to organise a concise response.",
      best: "Using OARS flexibly, then checking whether the person is clearer, more heard and better able to respond.",
    },
    {
      weak: "Only asking questions, back to back, like an interview.",
      better: "Adding a reflection so they feel heard between questions.",
      best: "Letting reflections carry most of the weight, with questions used sparingly.",
    },
    {
      weak: 'Generic praise, "Great job."',
      better: 'Naming what they did: "You worked through that carefully."',
      best: 'Affirming the value behind it: "You clearly care about getting this right for them."',
    },
  ],
  scenarios: [
    {
      situation: "Work meeting",
      move: "Use OARS to make a contribution concise and land it, then check.",
      phrase:
        "Sounds like we agree on the timeline. The open question is budget. Have I read that right?",
    },
    {
      situation: "Email or written message",
      move: "Put each move into a short, scannable line rather than a wall of text.",
      phrase:
        "Quick summary, one question, one suggested next step. Tell me if I've missed anything.",
    },
    {
      situation: "Giving feedback",
      move: "Check what kind of feedback would help before you structure it.",
      phrase:
        "Would it help to talk it through, or would you rather I just gave you my read?",
    },
    {
      situation: "Coaching a decision",
      move: "Open and reflect before offering any view of your own.",
      phrase:
        "What's pulling you each way? ... So it's the risk, not the role, that's the snag.",
    },
    {
      situation: "Difficult conversation",
      move: "One sentence per move, then pause and let them fill the space.",
      phrase:
        "I hear that it has felt unfair. What would make it feel fairer to you?",
    },
    {
      situation: "Someone venting",
      move: "Reflect and affirm. Hold the summary until they are ready for it.",
      phrase: "That sounds exhausting. You've kept it together through a lot.",
    },
  ],
  calibration: {
    working: [
      "They become clearer or more specific.",
      'They say "yes, exactly", or correct a small detail, which also means they feel heard.',
      "They summarise the point back to you accurately.",
      "They move from circling the problem to choosing a next step.",
      "They open up more than they had been.",
      "They ask a sharper question than the one they started with.",
    ],
    adjust: [
      "They look confused or go quieter.",
      "They challenge the framing or seem to resist it.",
      "They clearly need the human context before any structure.",
      "It starts to sound defensive, performative or salesy.",
      "You are doing more of the talking than they are.",
      "You have reflected twice and they still feel unheard. Drop the structure and just listen.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the four moves",
      task: "In a conversation you are part of or overhear, silently label each thing said as an Open question, Affirmation, Reflection, Summary, or none of them.",
    },
    {
      day: "Day 2",
      title: "One open question",
      task: "Replace one closed or leading question you would normally ask with a genuinely open one, and notice how much more you get back.",
    },
    {
      day: "Day 3",
      title: "One honest affirmation",
      task: "Once today, name something specific a person actually did well. Their effort or a value it showed, not generic praise.",
    },
    {
      day: "Day 4",
      title: "One reflection",
      task: "Instead of replying with your own view, say back what you heard the person mean and let them confirm or correct it.",
    },
    {
      day: "Day 5",
      title: "Summarise and check",
      task: 'At the end of a longer chat, pull the threads together in two sentences and ask "Have I got that right?"',
    },
    {
      day: "Day 6",
      title: "Full loop, plain voice",
      task: "Use all four moves in one real conversation without naming the framework, then afterwards cut anything that sounded rehearsed.",
    },
    {
      day: "Day 7",
      title: "Recover on purpose",
      task: "Notice one moment the structure is not helping, and use a recovery phrase to drop it and simplify on the spot.",
    },
  ],
  checklist: [
    "Did I use OARS to serve the person, or to sound polished?",
    "Was the core point clear by the end?",
    "Did I reflect or affirm, or did I only ask questions?",
    "Did I adapt when they needed something different?",
    "Did I keep it concise and drop the structure once it stopped helping?",
    "Did I leave the decision with them?",
  ],
  example: {
    without: [
      'Person: "I\'m not sure I should put myself forward to lead the rollout."',
      'You: "You should definitely do it. It\'s a great opportunity. Just say yes."',
      'Person: "Maybe. There\'s a lot on though."',
      "You: \"Everyone's busy. You'll be fine. I'll tell them you're keen.\"",
      "Why it's weak:",
      "jumps straight to advice",
      "never finds out what's actually holding them back",
      "decides for them instead of with them",
    ],
    with: [
      'Person: "I\'m not sure I should put myself forward to lead the rollout."',
      'You: "What\'s making you hesitate?" (open)',
      'Person: "I want it, but the timing\'s rough with everything else on."',
      'You: "So you\'re drawn to it: the hesitation is the timing, not the role." (reflection)',
      'Person: "Exactly. If it were next quarter I\'d say yes without thinking."',
      'You: "You carried the last two launches really well, so I don\'t doubt you could." (affirmation)',
      'Person: "Thanks. I think I could. I\'d just need to drop something else."',
      'You: "So: you want the role, you can do the role, and the real question is what comes off your plate. Have I got that right?" (summary)',
      'Person: "Yeah, that\'s it. Let me look at what I can hand over."',
      "Why this works:",
      "opens instead of instructing",
      "reflects the real sticking point back to them",
      "affirms a genuine track record, not empty praise",
      "summarises so they own the decision",
    ],
    note: "The four moves are not announced or run in strict order. They are chosen as the moment needs, and the summary hands the decision back to them.",
  },
  influencePayoff: {
    feeling:
      '"They actually understood what I was getting at, and I feel clearer than before we talked."',
    principle:
      "People think and decide better when they feel understood first. Being received makes them more open to what comes next.",
    gains: [
      "A clearer path through their own thinking",
      "Lower cognitive load: they don't have to hold everything at once",
      "The sense of being heard rather than managed",
      "Trust that carries into the harder part of the conversation",
      "Better decisions, because they reached them rather than being pushed",
      "You come across as genuinely attentive rather than merely clever",
      "Room to disagree, which paradoxically makes agreement more likely",
    ],
    whyMostFail: [
      "They run all four steps like a checklist, so it sounds rehearsed.",
      "They reflect and summarise but never change course when the person corrects them.",
      "They reach for structure in an emotional moment when plain validation was needed.",
      "They use affirmations that sound like flattery instead of genuine recognition.",
    ],
  },
  fieldTip: {
    headline: "Scaffolding, not choreography",
    body: "Use the four moves to organise your thinking, then take the scaffolding down before you speak. The other person should feel clarity and warmth, never the sense that they are being walked through a technique.",
    example:
      "\"So it's the timing, not the role. You've handled bigger. What would make room for it?\" That's Open, Affirm and Reflect with not a single seam showing.",
    dont: "Don't announce the steps, and don't run all four when one would do.",
    do: "Do pick the single move the moment needs, and drop the structure the instant it stops helping.",
  },
  method: [
    {
      step: "1",
      title: "Decide if OARS fits",
      body: "Choose the framework only when it will actually help: someone thinking a problem through, not someone who has asked for a straight answer. Don't name it out loud.",
      examples: [
        {
          label: "Fits",
          text: "They're weighing something up and talking in circles.",
        },
        {
          label: "Doesn't fit",
          text: "They've asked \"just tell me what you'd do.\"",
        },
      ],
    },
    {
      step: "2",
      title: "Open",
      body: "Ask a question that invites their thinking rather than a yes or no. Open questions do most of the early work. They hand the floor back to the person.",
      examples: [
        { label: "Open", text: '"What matters most to you about this?"' },
        { label: "Too closed", text: '"So you\'re going to take it, right?"' },
      ],
    },
    {
      step: "3",
      title: "Affirm",
      body: "Notice genuine effort, strength or value: specifically, not with empty praise. Affirmations build the trust that makes reflections and summaries land.",
      examples: [
        {
          label: "Genuine",
          text: '"You worked through that carefully before deciding."',
        },
        { label: "Empty", text: '"Amazing, you\'re the best!"' },
      ],
    },
    {
      step: "4",
      title: "Reflect",
      body: "Say back what you heard them mean, so they feel tracked and can correct you. A reflection is a statement, not a question. It shows understanding rather than testing it.",
      examples: [
        { label: "Simple", text: '"So the timing is the real issue."' },
        {
          label: "Double-sided",
          text: '"Part of you wants it. Part of you isn\'t ready."',
        },
      ],
    },
    {
      step: "5",
      title: "Summarise",
      body: "Pull the threads together, then check. A good summary hands the person a clear map of their own thinking and leaves the decision with them.",
      examples: [
        {
          label: "Summarise",
          text: '"So: you want the role, you can do it, the question is what comes off your plate. Right?"',
        },
      ],
    },
    {
      step: "6",
      title: "Adapt or drop it",
      body: "If they look confused or resistant, don't push the structure harder: summarise, invite correction, or drop the framework and simply listen.",
      examples: [
        {
          label: "Recover",
          text: '"Let me say that more simply. What do you actually need right now?"',
        },
      ],
    },
  ],
  liveThreadClues: [
    '"I don\'t really know where to start..." Reach for an open question.',
    '"I\'ve been trying so hard..." Reach for an affirmation.',
    '"It\'s complicated..." Reach for a reflection.',
    "They have given you a lot at once: reach for a summary.",
    "They are thinking aloud, not asking for an answer.",
    "They keep circling the same worry.",
    "They pause, as if waiting to be understood before they go on.",
  ],
  depthDial: [
    {
      depth: "Simple",
      useWhen: "Early on, or when you just need to confirm the content",
      phrase: "So the deadline is the problem.",
    },
    {
      depth: "Feeling",
      useWhen: "Some rapport, and there is emotion under the words",
      phrase: "Sounds like that has been weighing on you.",
    },
    {
      depth: "Double-sided",
      useWhen: "They are torn between two pulls",
      phrase: "Part of you wants to leave, and part of you isn't ready to.",
    },
    {
      depth: "Meaning",
      useWhen: "Strong trust. Reflect the value beneath the words",
      phrase: "It matters to you to do this properly, not just quickly.",
    },
  ],
  commonMistakes: [
    {
      mistake: "Over-structuring",
      soundsLike:
        '"Okay, open question... now an affirmation... now a reflection..."',
      better:
        '"What matters most to you here?" One move, chosen for the moment.',
    },
    {
      mistake: "Only asking questions",
      soundsLike: '"Why? And then what? And how did that go?"',
      better:
        '"So the hard part was the timing." A reflection between the questions.',
    },
    {
      mistake: "Empty affirmations",
      soundsLike: '"Amazing! You\'re so good at this!"',
      better: '"You worked through that carefully before deciding."',
    },
    {
      mistake: "Structure over emotion",
      soundsLike: '"Let me summarise the key points..." while they\'re upset.',
      better: '"That sounds really hard. Take your time." Validate first.',
    },
    {
      mistake: "Over-explaining after the point has landed",
      soundsLike:
        '"...and just to add a bit more context, the other thing is..."',
      better: "Stop at the summary and let them respond.",
    },
    {
      mistake: "Never checking",
      soundsLike: "moving on as though your reflection was obviously right",
      better: '"Have I got that right?"',
    },
  ],
  recoveryPhrases: [
    "Sorry, that sounded like a checklist. Tell me in your own words.",
    "I've asked a lot of questions. Let me just listen.",
    "Let me stop summarising and hear what you actually think.",
    "Was that summary right, or did I miss something?",
    "Forget the four steps. What do you actually need from me right now?",
    "Let me stop organising and just listen.",
    "I jumped to summarising before I'd really heard you. Say more.",
  ],
  bestRecoveryLine:
    "Forget the four steps. What do you actually need from me right now?",
  chains: [
    {
      label: "Structure then check",
      sequence: "OARS → Summary check (TC011)",
      example: [
        "Move through the moves, then confirm you both heard the same thing.",
        '"So the main point is the timeline slipping. Is that how you\'d put it too?"',
      ],
    },
    {
      label: "Structure then ask",
      sequence: "OARS → Clean request (TC013)",
      example: [
        "Once the issue is clear, make the next ask specific.",
        '"Given all that. Could you send me the revised dates by Thursday?"',
      ],
    },
    {
      label: "Structure then release",
      sequence: "OARS → Autonomy release (TC021)",
      example: [
        "After summarising, hand the choice back.",
        "\"That's how it looks to me, but it's genuinely your call.\"",
      ],
    },
    {
      label: "Validate then structure",
      sequence: "Validate the concern (TC014) → OARS",
      example: [
        "If emotion is high, acknowledge it first, then organise the thinking.",
        "\"That's a lot to carry. When you're ready, what matters most to sort out first?\"",
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC004",
      reason:
        "Reflective listening is the R in OARS on its own. Reach for OARS when you want the full open-affirm-reflect-summarise loop. Use plain reflective listening when a single reflection is all the moment needs.",
    },
    {
      id: "TC011",
      reason:
        "Summary check is the S in OARS as a standalone move. Use OARS to work through the whole conversation. Use a summary check when you only need to confirm you both heard the same thing.",
    },
    {
      id: "TC006",
      reason:
        "Emotional labelling names the feeling directly. Use OARS to organise thinking. Label the emotion first when the feeling is the thing that needs naming before anything else.",
    },
    {
      id: "TC033",
      reason:
        'Minimal encouragers are the lightest possible O: "go on", "say more". Use OARS when you are actively shaping the conversation. Use minimal encouragers when you just need to keep them talking.',
    },
    {
      id: "TC046",
      reason:
        "Elicit-provide-elicit is for when you do need to give information. OARS keeps you in listening mode. EPE is the disciplined way to slot advice in without lecturing. Ask, offer, then ask again.",
    },
  ],
};
