import type { CardData } from "../card-types";

export const TC046: CardData = {
  pdfUrl: "cards/TC046/TC046_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet — the designed visual card.",
      href: "cards/TC046/TC046_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC046/TC046_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC046/TC046_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC046/TC046_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC046/TC046_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC046/TC046_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC046/TC046_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC046",
  whyItWorks:
    "Elicit-provide-elicit is a three-part way to share information or advice: first you draw out what the person already knows, wants or will allow (elicit), then you offer one clear point briefly (provide), then you ask what they make of it (elicit). It works because people absorb and act on information far better when it lands on ground they helped prepare. The opening elicit earns permission and shows you where to pitch the point; the brief provide respects their attention; the closing elicit hands the meaning back to them rather than imposing it. Its influence comes from clarity and respect, not from pressure.",
  whatItIsNot: [
    "It is not a script to recite mechanically — naming the steps out loud, or forcing every sentence into the pattern, defeats it.",
    "It is not a way to avoid listening, or to compress someone's emotion into a template.",
    "It is not a device for smuggling in advice you had already decided to give — the questions have to be real.",
    "It is not a substitute for validation or repair when the moment needs those first.",
  ],
  overview: {
    coreFormula: [
      "Elicit -> Provide -> Elicit",
      'Elicit: "What do you already know about this?" or "Would it help to hear one option?"',
      'Provide: one clear point, briefly — "The main thing is X."',
      'Elicit: "What do you make of that?" or "How does that fit your situation?"',
      'Minimum viable move: "Would it be useful to hear one option? The option is X. What do you make of that?"',
      "Field rule: use the structure to organise your thinking, then speak like a person.",
    ],
    minimumViableMove:
      "Run one light loop silently: ask whether an option would help, give one clear point, then ask what they make of it — without ever naming the framework.",
    impact: "Medium",
    difficulty: "Medium",
    misuse:
      "Using the questions as decoration around advice you had already decided to impose — or forcing every sentence into the structure until it sounds rehearsed and the person feels processed rather than heard.",
    bestFor: [
      "Autonomy-sensitive advice",
      "Behaviour-change conversations",
      "Coaching and mentoring",
      "Clinical-style or expert explanations",
      "Giving feedback that needs to land",
      "Making a concise, memorable point in a meeting",
      "Offering an option without overriding the person's choice",
    ],
  },
  notFor: [
    "You intend to ignore their response anyway",
    "A brief, direct instruction is what's actually needed",
    "Physical safety or an emergency takes priority",
    "Strong emotion is present and needs validation or repair first",
    "The person has already decided and just wants to be heard",
    "You are using the questions to steer rather than to genuinely ask",
  ],
  phraseBank: [
    {
      id: "opening_elicits",
      label: "Opening elicits",
      tag: "Draw out first",
      tone: "Quick",
      phrases: [
        "What do you already know about this?",
        "Where are you up to with it so far?",
        "Would it help to hear one option?",
        "Want the short version or the full version?",
        "What have you tried already?",
        "What's your read on it so far?",
        "Can I offer one thought?",
        "What would actually be useful from me here?",
      ],
    },
    {
      id: "asking_permission",
      label: "Asking permission",
      tag: "Permission before providing",
      tone: "Warm",
      phrases: [
        "Would it be alright if I shared what I've seen work?",
        "I've got a thought, if you'd like it — no pressure either way.",
        "Happy to leave it, but I could offer one angle if that helps.",
        "Can I share something, and you tell me whether it fits?",
        "Would it help to hear how others have handled this?",
        "I don't want to pile on — is now a good time for a suggestion?",
        "You know this better than I do, but can I add one thing?",
      ],
    },
    {
      id: "providing_briefly",
      label: "Providing briefly",
      tag: "One clear point",
      tone: "Professional",
      phrases: [
        "The main point is this — the rest is just support.",
        "In short: X. I'll keep the detail for if you want it.",
        "Here's the one thing worth knowing: X.",
        "The headline is X; happy to go deeper wherever it's useful.",
        "Let me give you the option first, then the reasoning.",
        "If it helps, the approach I'd suggest is X.",
        "That's the summary — where would you like me to expand?",
      ],
    },
    {
      id: "closing_elicits",
      label: "Closing elicits",
      tag: "Hand the meaning back",
      tone: "Direct",
      phrases: [
        "What do you make of that?",
        "How does that fit your situation?",
        "Does that match what you expected, or not quite?",
        "What lands, and what doesn't?",
        "What would you change about that?",
        "Where does that leave you?",
        "What's the one part worth acting on?",
        "What do you want to do with that?",
      ],
    },
    {
      id: "softening_checking",
      label: "Softening and checking",
      tag: "When the structure over-runs",
      tone: "Repair",
      phrases: [
        "Let me check that was actually useful, not just tidy.",
        "Tell me if I'm over-structuring this.",
        "Say if that was more than you needed.",
        "I can keep this short, and we can adjust it.",
        "If that frame isn't landing, we can drop it.",
        "What part was useful, and what should we lose?",
      ],
    },
    {
      id: "advice_under_pressure",
      label: "Advice under pressure",
      tag: "Sensitive or high-stakes",
      tone: "High-stakes",
      phrases: [
        "This is your call — I'll offer what I know, then step back.",
        "Before I say anything, what matters most to you here?",
        "I'll give you one option, but the decision stays with you.",
        "Would information help right now, or would you rather I just listened?",
        "Here's the risk as I see it — how does that sit with you?",
        "I could be wrong about this, so tell me how it reads from your side.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "The listener needs speed",
      action: "Use the shortest version — one option, one line, one check.",
      phrase: "Quick version: I'd go with X. Does that work for you?",
    },
    {
      condition: "The listener needs support",
      action: "Validate the feeling first and delay the framework.",
      phrase: "That sounds hard. Do you want ideas yet, or not right now?",
    },
    {
      condition: "The listener needs a story or example",
      action: "Switch to an example-led neighbour such as STAR or CARL.",
      phrase: "Let me give you a concrete example of how that played out.",
    },
    {
      condition: "The listener needs to act",
      action: "End on one clean next step rather than more information.",
      phrase: "So the next step is X — shall we start there?",
    },
    {
      condition: "The listener already sounds clear",
      action: "Stop providing; hand it over and let them run with it.",
      phrase: "Sounds like you've got it — what's your first move?",
    },
    {
      condition: "The listener challenges the framing",
      action: "Drop the structure, summarise, and invite correction.",
      phrase: "Fair — tell me where I've got this wrong.",
    },
  ],
  ladder: [
    {
      weak: "Announces the framework and forces every sentence into Elicit -> Provide -> Elicit, sounding rehearsed.",
      better:
        "Uses the structure silently to organise one concise, easy-to-follow response.",
      best: "Uses it flexibly, drops it the moment it stops helping, and checks whether the listener is clearer, more heard, and better able to respond.",
    },
    {
      weak: "Asks a question, ignores the answer, and delivers the advice anyway.",
      better: "Asks, then tailors the information to what the answer revealed.",
      best: "Asks, adapts, and lets the closing question genuinely change what happens next.",
    },
  ],
  scenarios: [
    {
      situation: "Contributing in a work meeting",
      move: "Use one light loop to make the point concise and memorable rather than rambling.",
      phrase:
        "Do we want options or a recommendation? Mine is X — how does that sit?",
    },
    {
      situation: "Advice or an update by email",
      move: "Put each step in short, scannable paragraphs or bullets so the reader can follow at a glance.",
      phrase:
        "Quick question, one suggestion, then over to you — reply with whatever fits.",
    },
    {
      situation: "Giving feedback",
      move: "Elicit what kind of feedback would help before you provide any.",
      phrase:
        "Do you want the headline or the detail? ... Here's the one thing. What's your take?",
    },
    {
      situation: "A difficult or sensitive conversation",
      move: "One sentence per step, then pause and let them fill the space.",
      phrase:
        "Can I offer one thought? ... It's X. ... What do you make of that?",
    },
    {
      situation: "Coaching or mentoring",
      move: "Lead with their own knowledge so your input adds rather than replaces.",
      phrase:
        "What have you already ruled out? ... Then the option left is X. Worth a try?",
    },
    {
      situation: "Explaining something you're the expert on",
      move: "Check what they already understand so you pitch the one point at the right level.",
      phrase:
        "What's your understanding so far? ... The key thing is X. ... Does that clear it up?",
    },
  ],
  calibration: {
    working: [
      "They become clearer or more specific in what they say.",
      "They ask a sharper, more focused question back.",
      "They summarise your point accurately, in their own words.",
      "They move towards choosing a next step.",
      "They sound more able to act, not just more informed.",
      "They pick up the option and start adapting it to themselves.",
    ],
    adjust: [
      "They look confused or go quieter after the provide step.",
      "They challenge the framing or push back on the structure.",
      "They seem to need the human context before any structure.",
      "The loop starts to sound defensive, performative, or salesy.",
      "It is turning into a lecture rather than an exchange.",
      "You realise you have stopped listening and are just running the pattern.",
      "You catch yourself asking questions you don't actually want answered.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Draft one loop",
      task: "Write a 60-second response to a real advice moment using Elicit -> Provide -> Elicit, naming each step to yourself as you go.",
    },
    {
      day: "Day 2",
      title: "Cut it down",
      task: "Cut that response by a third — then again to about 30 seconds — without losing the core point.",
    },
    {
      day: "Day 3",
      title: "Two voices",
      task: "Say it aloud twice: once as a visible structure, once as ordinary speech. Notice which one you'd want to be on the receiving end of.",
    },
    {
      day: "Day 4",
      title: "Test the value",
      task: "Ask of each version: would this actually help the other person understand, decide, or act? Cut anything that only makes you sound polished.",
    },
    {
      day: "Day 5",
      title: "Real opening elicit",
      task: "In one real conversation, use only the opening elicit — draw out what they know or want before you offer anything.",
    },
    {
      day: "Day 6",
      title: "Full loop, hidden",
      task: "Run the whole loop in a live conversation without naming the framework, and watch whether they get clearer or more able to act.",
    },
    {
      day: "Day 7",
      title: "Practise recovery",
      task: "Deliberately over-structure once, then use a recovery line to simplify and hand the point back to the other person.",
    },
  ],
  checklist: [
    "Did I use the structure to serve the listener, or just to sound polished?",
    "Were my questions real, or decoration around advice I'd already decided to give?",
    "Was the core point clear and brief?",
    "Did I adapt the moment the listener needed something else?",
    "Did I preserve their autonomy and dignity?",
    "Did clarity actually improve for them?",
  ],
  example: {
    without: [
      'Colleague: "I\'m stuck on how to open the client presentation."',
      'You: "Okay, I\'m going to use Elicit-provide-elicit here. First, elicit: what do you know about openings?"',
      'Colleague: "A bit, I suppose."',
      'You: "Right, now the provide step. Start with a strong hook, then a roadmap, then your first point, and here\'s why each one matters..."',
      'Colleague: "...okay."',
      'You: "And now the second elicit — what do you make of that?"',
      "Why it is weak:",
      "names the framework out loud and makes it the star",
      'ignores that the answer was "a bit" and lectures anyway',
      "the closing question is a formality, not a real ask",
      "the colleague feels processed, not helped",
    ],
    with: [
      'Colleague: "I\'m stuck on how to open the client presentation."',
      'You: "What have you got so far — a rough idea, or a blank page?"',
      'Colleague: "A rough idea. I want to lead with the problem, I\'m just not sure how hard to hit it."',
      'You: "That\'s most of the decision made, then. One option: open with their number — what the problem is costing them — before you even name it. Keeps it their story, not your pitch."',
      'Colleague: "Oh — so the figure first, then the diagnosis."',
      "You: \"That's it. How does that sit with the room you're presenting to?\"",
      "Colleague: \"They're numbers people, so... yeah, that'll land.\"",
      "Why this works:",
      "the opening question surfaces what they already have",
      "one clear option, offered briefly, not a lecture",
      "the closing question genuinely hands the decision back",
      "the framework stays invisible — it just sounds like good advice",
    ],
    note: "The structure did all the work in the second version precisely because you never mentioned it. Elicit, provide, elicit — organised in your head, spoken like a person.",
  },
  influencePayoff: {
    feeling:
      '"They actually asked what I thought — the advice felt like mine, not something done to me."',
    principle:
      "People absorb and act on information far better when it lands on ground they helped prepare.",
    gains: [
      "A clearer path through the point you are making",
      "Lower cognitive load for the listener",
      "Better sequencing — what matters first comes first",
      "Advice that preserves the other person's autonomy",
      "Trust, because the questions are genuine",
      "A point that is remembered because they helped build it",
    ],
    whyMostFail: [
      "They name the framework or force every sentence into it, so it sounds rehearsed.",
      "They use the questions as decoration around advice they had already decided to impose.",
      "They over-explain after the structure has already done its job.",
      "They reach for structure in an emotional moment that needed listening or repair first.",
    ],
  },
  fieldTip: {
    headline: "Scaffolding, not the conversation.",
    body: "Use Elicit-provide-elicit to organise your own thinking, then take the scaffolding down before you speak. The other person should feel clarity, not choreography. The clearest sign you're doing it well is that they never notice you did anything at all.",
    example:
      '"Would it help to hear one option? ... It\'s X. ... What do you make of that?" — three moves, no labels.',
    dont: "Don't announce the steps, and don't ask questions you don't actually want answered.",
    do: "Do let the closing question genuinely change what happens next.",
  },
  method: [
    {
      step: "1",
      title: "Decide if it fits",
      body: "Choose the framework only if it serves this moment. If strong emotion is present, or a blunt instruction is what's needed, use a simpler move instead — and never name the framework out loud.",
    },
    {
      step: "2",
      title: "Elicit first",
      body: "Draw out what the person already knows, wants, or will allow before you offer anything. This earns permission and tells you where to pitch the one point you're about to make.",
      examples: [
        { label: "Permission", text: '"Would it help to hear one option?"' },
        { label: "Knowledge", text: '"What do you already know about this?"' },
      ],
    },
    {
      step: "3",
      title: "Provide briefly",
      body: "Offer one clear piece of information — the main point, not everything you know. Keep the rest in reserve for if they ask.",
      examples: [
        {
          label: "Headline",
          text: '"The main thing is X; the rest is just support."',
        },
      ],
    },
    {
      step: "4",
      title: "Elicit again",
      body: "Hand the meaning back. Ask what they make of it, how it fits, or what they'd change — and mean it. This closing question is where the move earns trust rather than just delivering information.",
      examples: [
        { label: "Check", text: '"What do you make of that?"' },
        { label: "Fit", text: '"How does that sit with your situation?"' },
      ],
    },
    {
      step: "5",
      title: "Watch and adapt",
      body: "Track whether they become clearer, more engaged, or more able to act. If they look confused or resistant, summarise and invite correction rather than pushing the structure harder.",
    },
  ],
  liveThreadClues: [
    '"What would you do?"',
    '"Any advice?"',
    '"I\'m stuck on..."',
    '"I can\'t decide between..."',
    '"Can you explain how..."',
    '"What am I missing?"',
    '"Talk me through it."',
  ],
  depthDial: [
    {
      depth: "Light",
      useWhen: "They're nearly there, or short on time",
      phrase: '"One thing: X. Sound right?"',
    },
    {
      depth: "Standard",
      useWhen: "A normal advice or explanation moment",
      phrase: '"Would an option help? It\'s X. What do you make of it?"',
    },
    {
      depth: "Full",
      useWhen: "High stakes, and they've asked for depth",
      phrase:
        '"Here\'s the option, the trade-off, and the risk — then I want your read on each."',
    },
  ],
  commonMistakes: [
    {
      mistake: "Announcing the framework",
      soundsLike: '"I\'m going to use Elicit-provide-elicit here."',
      better:
        "Just doing it, quietly — the person should feel clarity, not method.",
    },
    {
      mistake: "Fake questions",
      soundsLike: '"What do you think?" — then ignoring the answer',
      better: '"What do you make of that?" — then actually adapting to it.',
    },
    {
      mistake: "Over-explaining after the point has landed",
      soundsLike: '"...and another thing, and also, and to add to that..."',
      better: '"That\'s the core of it. Want the detail, or is that enough?"',
    },
    {
      mistake: "Structuring over an emotional moment",
      soundsLike: '"Let me give you three options" — to someone who\'s upset',
      better:
        '"That sounds really hard. Do you want ideas yet, or not right now?"',
    },
    {
      mistake: "Never checking it helped",
      soundsLike: "delivering the point and moving straight on",
      better: '"Did that clear it up, or muddy it?"',
    },
    {
      mistake: "Over-structuring",
      soundsLike: "forcing every sentence into elicit, provide, elicit",
      better: "one light loop, then back to ordinary conversation.",
    },
  ],
  recoveryPhrases: [
    "I made that too structured — let me say it more simply.",
    "That may not be the useful frame. Let me back up.",
    "I don't want the structure to override the actual issue.",
    "What part of that was useful, and what should we drop?",
    "Let me stop explaining and just hear your take.",
    "I think I answered a question you didn't ask — what did you actually want to know?",
    "That came out like a lecture, sorry. The one thing that matters is X.",
    "Ignore the scaffolding — what's your read on it?",
  ],
  bestRecoveryLine: "I made that too structured — let me say it more simply.",
  chains: [
    {
      label: "Check it landed",
      sequence: "Elicit-provide-elicit -> Summary check",
      example: [
        'Run the loop, then: "Just so we\'re on the same page — what did you take from that?"',
      ],
    },
    {
      label: "Turn it into action",
      sequence: "Elicit-provide-elicit -> Clean request",
      example: [
        'Once the option is clear: "So, specifically — could you send me the draft by Thursday?"',
      ],
    },
    {
      label: "Hand back the choice",
      sequence: "Elicit-provide-elicit -> Autonomy release",
      example: [
        "After your point: \"That's just one option, though — it's genuinely your call.\"",
      ],
    },
    {
      label: "Emotion first",
      sequence: "Validate the concern -> Elicit-provide-elicit",
      example: [
        "\"That's a lot to carry. When you're ready — would it help to talk through one option?\"",
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC045",
      reason:
        "The closest cousin. Ask-tell-ask is the same three-beat shape aimed at teaching or feedback; reach for Elicit-provide-elicit when drawing out permission and meaning matters more than the 'tell'.",
    },
    {
      id: "TC027",
      reason:
        "Just the opening elicit, isolated: ask before you offer. Use it on its own when a single permission check is all the moment needs.",
    },
    {
      id: "TC043",
      reason:
        "The broader motivational-interviewing toolkit (open questions, affirmations, reflections, summaries). Elicit-provide-elicit is the information-sharing move within that family; use OARS when the work is drawing out, not providing.",
    },
    {
      id: "TC021",
      reason:
        "Hands the choice back explicitly. Use it after your provide step, or on its own when the person mainly needs room to decide.",
    },
    {
      id: "TC015",
      reason:
        "The discipline behind the first elicit: don't provide until you've drawn out. Use it when your instinct is to jump straight to the answer.",
    },
    {
      id: "TC011",
      reason:
        "Pairs with the closing elicit to confirm you both heard the same thing. Use when the risk is mishearing rather than misadvising.",
    },
  ],
};
