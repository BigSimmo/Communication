// Light catalogue metadata ONLY — this module must never import from ./cards.
// The Library page and app shell import LIBRARY_CATEGORIES, so pulling in the
// heavy card content here would put the ~590 kB `card-data` chunk on the
// landing critical path. Phrase aggregation lives in ./phrases-data (loaded
// lazily by the routes/overlays that need it).

export type CardImpact = "high" | "medium" | "low";
export type CardDifficulty = "Easy" | "Easy-Medium" | "Medium" | "Hard";

interface LibraryCard {
  id: string;
  title: string;
  // One plain line for list rows, condensed from the card's
  // overview.minimumViableMove so the Library never loads card content.
  // A content invariant keeps every summary at 90 characters or fewer.
  summary: string;
  loaded: boolean;
  impact: CardImpact;
  // Mirrors CARD_DATA[id].overview.difficulty. Duplicated here (like impact) so
  // the Library can filter/sort without importing the heavy card content;
  // a content invariant keeps the two in sync.
  difficulty: CardDifficulty;
}

export const LIBRARY_CATEGORIES: Record<string, LibraryCard[]> = {
  "Voice / Presence": [
    {
      id: "TC028",
      title: "Warm vocal baseline",
      summary:
        "Lower the tension, slow slightly, and warm up your first sentence before you respond.",
      loaded: true,
      impact: "high",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC029",
      title: "Strategic silence",
      summary:
        "Say the key sentence or question, then pause warmly for one slow breath.",
      loaded: true,
      impact: "high",
      difficulty: "Medium",
    },
    {
      id: "TC031",
      title: "Slow down under pressure",
      summary:
        "Pause for one beat, drop your pace by a notch, and answer with the simplest true sentence.",
      loaded: true,
      impact: "medium",
      difficulty: "Hard",
    },
    {
      id: "TC035",
      title: "Strategic pause",
      summary:
        "After an important sentence, close your mouth and count one slow beat.",
      loaded: true,
      impact: "medium",
      difficulty: "Medium",
    },
  ],
  "Influence / Framing": [
    {
      id: "TC017",
      title: "Values-based framing",
      summary:
        "Link one value they've stated to the choice, then leave the decision with them.",
      loaded: true,
      impact: "medium",
      difficulty: "Hard",
    },
    {
      id: "TC021",
      title: "Autonomy release",
      summary:
        'Make the ask clearly, then add one genuine freedom line: "No pressure."',
      loaded: true,
      impact: "medium",
      difficulty: "Medium",
    },
    {
      id: "TC026",
      title: "Tactical mirroring",
      summary: "Mirror one to three words, then pause.",
      loaded: true,
      impact: "medium",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC027",
      title: "Permission-based advice",
      summary:
        "Ask before you advise: 'Would it help if I offered one thought?'",
      loaded: true,
      impact: "high",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC106",
      title: "Contrasting (don't/do)",
      summary:
        "When your intent is misread, say what you don't mean, then what you do mean.",
      loaded: true,
      impact: "medium",
      difficulty: "Easy-Medium",
    },
  ],
  "Clarity / Direction": [
    {
      id: "TC011",
      title: "Summary check",
      summary:
        'Reflect back the one thing that matters most, then check: "Have I got that right?"',
      loaded: true,
      impact: "high",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC012",
      title: "Full-attention signal",
      summary: 'Phone away, body toward them, and: "Go on, I\'m with you."',
      loaded: true,
      impact: "high",
      difficulty: "Easy",
    },
    {
      id: "TC013",
      title: "Clean request",
      summary: 'Ask for the exact action and timeframe: "Could you do X by Y?"',
      loaded: true,
      impact: "high",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC014",
      title: "Validate the concern",
      summary:
        'Say "That\'s a fair concern" and name the concern out loud before you respond.',
      loaded: true,
      impact: "high",
      difficulty: "Medium",
    },
    {
      id: "TC015",
      title: "Premature advice restraint",
      summary:
        "Reflect once, then ask whether they want ideas or just to be heard.",
      loaded: true,
      impact: "medium",
      difficulty: "Medium",
    },
    {
      id: "TC019",
      title: "Small ask",
      summary:
        'Ask for only one small, concrete part of what you need: "Could you do just X?"',
      loaded: true,
      impact: "medium",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC020",
      title: "Low-friction ask",
      summary:
        'Add one easing clause ("no worries if not") so a genuine no is as easy as a yes.',
      loaded: true,
      impact: "medium",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC034",
      title: "Two-option questions",
      summary:
        'Offer two clear paths with a way out: "Is it more X, or more Y, or something else?"',
      loaded: true,
      impact: "medium",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC042",
      title: "PREP",
      summary:
        "State your point, give one reason and one example, then land back on the point.",
      loaded: true,
      impact: "medium",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC043",
      title: "OARS",
      summary:
        "Pick the one move the moment needs: open question, affirmation, reflection or summary.",
      loaded: true,
      impact: "medium",
      difficulty: "Medium",
    },
    {
      id: "TC044",
      title: "BLUF",
      summary:
        "Lead with the answer or ask, add one reason, then the next step.",
      loaded: true,
      impact: "high",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC045",
      title: "Ask-tell-ask",
      summary:
        "Ask where they are, tell one clear point, then ask what they make of it.",
      loaded: true,
      impact: "medium",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC046",
      title: "Elicit-provide-elicit",
      summary:
        "Ask if an option would help, give one clear point, then ask what they make of it.",
      loaded: true,
      impact: "medium",
      difficulty: "Medium",
    },
    {
      id: "TC047",
      title: "STAR",
      summary:
        "Order your example as situation, task, action, result, then say it plainly.",
      loaded: true,
      impact: "medium",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC048",
      title: "SCQA",
      summary:
        "Situation, the complication that matters, the question it forces, then your answer.",
      loaded: true,
      impact: "medium",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC049",
      title: "CARL",
      summary:
        "Order your point as context, action, result, learning, in four plain sentences.",
      loaded: true,
      impact: "medium",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC050",
      title: "What? So what? Now what?",
      summary:
        "Say what happened, why it matters, and the next step, in plain language.",
      loaded: true,
      impact: "medium",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC051",
      title: "RASA",
      summary:
        "Reflect the core point back in one line and ask a single useful question.",
      loaded: true,
      impact: "medium",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC052",
      title: "SBI",
      summary:
        "Name the situation, the behaviour you saw and its impact, then ask what they intended.",
      loaded: true,
      impact: "medium",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC053",
      title: "NVC / OFNR",
      summary:
        "One observation, one feeling, the need under it, and one doable request.",
      loaded: true,
      impact: "high",
      difficulty: "Hard",
    },
    {
      id: "TC066",
      title: "BIFF",
      summary:
        "Write three sentences: one civil opening, one factual answer, one firm next step.",
      loaded: true,
      impact: "medium",
      difficulty: "Medium",
    },
    {
      id: "TC068",
      title: "Specific ask",
      summary:
        "Ask for one specific action on one specific object, with one clear output.",
      loaded: true,
      impact: "high",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC074",
      title: "DESC",
      summary:
        "Name the behaviour, its impact, the change you need, and what you'll do if not.",
      loaded: true,
      impact: "medium",
      difficulty: "Hard",
    },
    {
      id: "TC080",
      title: "NURSE",
      summary:
        "It sounds really frustrating. Tell me more about what has been hardest about it.",
      loaded: true,
      impact: "medium",
      difficulty: "Medium",
    },
    {
      id: "TC081",
      title: "COIN",
      summary:
        "Name the context, the behaviour and its impact, then ask for a specific next step.",
      loaded: true,
      impact: "medium",
      difficulty: "Hard",
    },
    {
      id: "TC086",
      title: "LEAP",
      summary:
        "Ask what matters most to them, reflect it, agree on one thing, then plan a next step.",
      loaded: true,
      impact: "medium",
      difficulty: "Hard",
    },
    {
      id: "TC088",
      title: "One-screen message",
      summary:
        "State the purpose, give one context line, make one clear ask, and add an easy reply path.",
      loaded: true,
      impact: "high",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC094",
      title: "Bounded request",
      summary:
        "Ask for one specific action, add one honest boundary, and leave room to say no.",
      loaded: true,
      impact: "medium",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC095",
      title: "DEAR MAN",
      summary:
        "Say what happened and how it affects you, then what you need and why it helps.",
      loaded: true,
      impact: "medium",
      difficulty: "Hard",
    },
    {
      id: "TC102",
      title: "Positive no (Yes! No. Yes?)",
      summary:
        "Name what you're protecting, say no plainly, then offer a genuine way forward.",
      loaded: true,
      impact: "high",
      difficulty: "Medium",
    },
  ],
  "Connection / Warmth": [
    {
      id: "TC001",
      title: "Live thread follow-ups",
      summary:
        "Ask one small follow-up about the detail or feeling that seems most alive.",
      loaded: true,
      impact: "high",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC002",
      title: "Support response over shift response",
      summary:
        'Before "that happened to me too", give one support line: "What happened next?"',
      loaded: true,
      impact: "high",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC003",
      title: "Comment-before-question",
      summary: "Say one honest comment, then ask one clean question.",
      loaded: true,
      impact: "medium",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC004",
      title: "Reflective listening",
      summary:
        'Reflect in one sentence: "So the main thing is..." or "It sounds like..."',
      loaded: true,
      impact: "high",
      difficulty: "Medium",
    },
    {
      id: "TC005",
      title: "Validation without agreement",
      summary:
        'Say "I can see why that landed that way," even if you see it differently.',
      loaded: true,
      impact: "high",
      difficulty: "Hard",
    },
    {
      id: "TC006",
      title: "Emotional labelling",
      summary:
        'Offer one tentative label ("That sounds [emotion]") softly, then stop talking.',
      loaded: true,
      impact: "high",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC010",
      title: "Warm presence",
      summary:
        "Slow down, orient to them, and make one warm comment before your point.",
      loaded: true,
      impact: "high",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC016",
      title: "Active-constructive responding",
      summary:
        'Meet good news with one warm, specific line and a follow-up: "What was the best part?"',
      loaded: true,
      impact: "high",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC018",
      title: "Specific appreciation",
      summary:
        'Name one specific thing they did and its effect: "I appreciated X because it helped Y."',
      loaded: true,
      impact: "high",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC022",
      title: "Status generosity",
      summary:
        'Spot one real contribution and name it specifically: "That was a good call because X."',
      loaded: true,
      impact: "medium",
      difficulty: "Medium",
    },
    {
      id: "TC023",
      title: "Loaded word follow-up",
      summary: 'Pick the most emotionally charged word and ask "[word] how?"',
      loaded: true,
      impact: "medium",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC024",
      title: "Warm opening",
      summary:
        "Offer a greeting plus one warm, relevant line, then bridge to why you are there.",
      loaded: true,
      impact: "medium",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC025",
      title: "Exact word pickup",
      summary:
        "Pick one distinctive word they used and ask '[word] how?' or 'What do you mean by [word]?'",
      loaded: true,
      impact: "medium",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC030",
      title: "Echo plus question",
      summary:
        'Repeat the key word, then ask one short question: "How?" or "What part?"',
      loaded: true,
      impact: "medium",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC032",
      title: "Name and detail memory",
      summary:
        "Use their name once, or one detail they shared, then watch the response.",
      loaded: true,
      impact: "medium",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC033",
      title: "Minimal encouragers",
      summary: 'Say "mm," "yeah," or "go on" once, then keep listening.',
      loaded: true,
      impact: "low",
      difficulty: "Easy",
    },
    {
      id: "TC036",
      title: "Contextual opener",
      summary:
        "Name the shared context in one ordinary line and give them an easy way in.",
      loaded: true,
      impact: "medium",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC037",
      title: "Double-sided reflection",
      summary:
        "Part of you wants one thing, and part of you is worried about the cost.",
      loaded: true,
      impact: "medium",
      difficulty: "Hard",
    },
    {
      id: "TC038",
      title: "Conversation threading",
      summary: "Can I come back to something you said earlier about that part?",
      loaded: true,
      impact: "low",
      difficulty: "Medium",
    },
    {
      id: "TC039",
      title: "Common-ground discovery",
      summary:
        "It sounds like we both care about getting this handled cleanly.",
      loaded: true,
      impact: "medium",
      difficulty: "Medium",
    },
    {
      id: "TC040",
      title: "Meaning reflection",
      summary:
        "It sounds like that mattered because it changed what you could count on.",
      loaded: true,
      impact: "medium",
      difficulty: "Hard",
    },
    {
      id: "TC041",
      title: "Topic energy tracking",
      summary:
        "Notice which topic draws more energy and offer one light follow-up with an easy out.",
      loaded: true,
      impact: "low",
      difficulty: "Hard",
    },
    {
      id: "TC054",
      title: "Similarity signalling",
      summary: "I recognise that part. What has it been like on your side?",
      loaded: true,
      impact: "low",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC056",
      title: "Topic preference detection",
      summary:
        "Softly name the topic that had more energy, and let them choose to stay or move on.",
      loaded: true,
      impact: "low",
      difficulty: "Medium",
    },
    {
      id: "TC057",
      title: "Shared identity language",
      summary:
        'Name one small, true "we": "We both care about [shared outcome]."',
      loaded: true,
      impact: "medium",
      difficulty: "Medium",
    },
    {
      id: "TC058",
      title: "Feeling-plus-need reflection",
      summary:
        "Name one feeling and one likely need tentatively, then let them adjust it.",
      loaded: true,
      impact: "medium",
      difficulty: "Medium",
    },
    {
      id: "TC059",
      title: "Energy-based topic switching",
      summary: "That may be enough on this for now. Want to switch gears?",
      loaded: true,
      impact: "low",
      difficulty: "Medium",
    },
    {
      id: "TC060",
      title: "Positive assumption",
      summary:
        "Assume the most plausible benign reading, ask for the missing context, then respond.",
      loaded: true,
      impact: "high",
      difficulty: "Medium",
    },
    {
      id: "TC061",
      title: "Tone reflection",
      summary: "I might be hearing a bit of [tone] in that. Is that right?",
      loaded: true,
      impact: "medium",
      difficulty: "Medium",
    },
    {
      id: "TC062",
      title: "Thread return",
      summary:
        'Bridge back to an earlier open thread: "Can I come back to the part about X?"',
      loaded: true,
      impact: "low",
      difficulty: "Medium",
    },
    {
      id: "TC063",
      title: "Make them the expert",
      summary:
        'Name where they know more than you, then ask: "What should I notice first?"',
      loaded: true,
      impact: "medium",
      difficulty: "Medium",
    },
    {
      id: "TC064",
      title: "Check before interpreting",
      summary: "Can I check my read before I respond?",
      loaded: true,
      impact: "high",
      difficulty: "Medium",
    },
    {
      id: "TC065",
      title: "Conversation bookmarking",
      summary: "Name the point and say when you'll come back to it.",
      loaded: true,
      impact: "low",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC067",
      title: "Advice request",
      summary:
        "Name one decision, say why their view helps, ask one question, then let them choose.",
      loaded: true,
      impact: "medium",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC070",
      title: "Careful normalising",
      summary:
        "Given [specific context], it makes sense that [reaction] would show up.",
      loaded: true,
      impact: "medium",
      difficulty: "Medium",
    },
    {
      id: "TC071",
      title: "Conversation re-entry after interruption",
      summary:
        "You were saying [X] before we got interrupted: want to pick that back up?",
      loaded: true,
      impact: "low",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC072",
      title: "Low-pressure invitation",
      summary:
        "You're welcome to join if you want, and no problem at all if not.",
      loaded: true,
      impact: "medium",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC075",
      title: "Acknowledge effort",
      summary:
        'Name the one effort you can see before moving on: "That took effort. I see it."',
      loaded: true,
      impact: "medium",
      difficulty: "Medium",
    },
    {
      id: "TC078",
      title: "Callback bridge",
      summary: "Can I come back to the part where you said X?",
      loaded: true,
      impact: "low",
      difficulty: "Medium",
    },
    {
      id: "TC082",
      title: "Turn-toward bids",
      summary:
        "Notice the bid and respond with one small follow-through, or schedule a clean return.",
      loaded: true,
      impact: "high",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC084",
      title: "Listen for values",
      summary:
        "Name one likely value tentatively and leave room for correction.",
      loaded: true,
      impact: "medium",
      difficulty: "Hard",
    },
    {
      id: "TC087",
      title: "Story invitation",
      summary:
        'Offer one warm, low-pressure "What\'s the story behind that?", then stay quiet.',
      loaded: true,
      impact: "medium",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC090",
      title: "Do-not-fix-yet discipline",
      summary:
        "Say you won't fix it yet, then listen and reflect before offering any solution.",
      loaded: true,
      impact: "medium",
      difficulty: "Hard",
    },
    {
      id: "TC093",
      title: "How-so prompt",
      summary:
        'When someone says something compressed, ask one warm "How so?" and stop talking.',
      loaded: true,
      impact: "high",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC096",
      title: "Capitalisation extension",
      summary: "That's worth enjoying. What was the best part?",
      loaded: true,
      impact: "medium",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC098",
      title: "Emotion before facts",
      summary:
        "Start with one short emotion-first sentence before any explanation.",
      loaded: true,
      impact: "high",
      difficulty: "Medium",
    },
    {
      id: "TC100",
      title: "What-did-you-make-of-it question",
      summary:
        'After they describe an event, ask one clean question: "What did you make of it?"',
      loaded: true,
      impact: "medium",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC104",
      title: "Soft start-up",
      summary:
        "Name one feeling and the specific situation, then ask for what you need, positively.",
      loaded: true,
      impact: "high",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC108",
      title: "Graceful exit",
      summary:
        "At a natural pause, say you're heading off, appreciate one detail, then go.",
      loaded: true,
      impact: "medium",
      difficulty: "Easy",
    },
    {
      id: "TC109",
      title: "Looping for understanding",
      summary:
        "Say back what matters most to them in your own words, then ask if you got it right.",
      loaded: true,
      impact: "high",
      difficulty: "Medium",
    },
  ],
  "Resilience / Recovery": [
    {
      id: "TC007",
      title: "No one-upping discipline",
      summary:
        'Before saying "me too", ask one more question about their story.',
      loaded: true,
      impact: "low",
      difficulty: "Medium",
    },
    {
      id: "TC008",
      title: "No-overexplaining discipline",
      summary: "Make the point once, give one reason, then pause.",
      loaded: true,
      impact: "low",
      difficulty: "Medium",
    },
    {
      id: "TC009",
      title: "Anti-boomerasking discipline",
      summary:
        "Ask one real follow-up or reflect before sharing your related story.",
      loaded: true,
      impact: "low",
      difficulty: "Medium",
    },
    {
      id: "TC069",
      title: "Clarify objection",
      summary:
        'When resistance appears, ask "What part of that\'s the main concern?" and listen.',
      loaded: true,
      impact: "high",
      difficulty: "Medium",
    },
    {
      id: "TC073",
      title: "Resistance-as-information",
      summary:
        "Name the resistance neutrally and ask what it's telling you before you persuade.",
      loaded: true,
      impact: "medium",
      difficulty: "Hard",
    },
    {
      id: "TC076",
      title: "Interrogation avoidance",
      summary:
        'One human comment, one soft question, then release the pressure: "You can skip it."',
      loaded: true,
      impact: "low",
      difficulty: "Medium",
    },
    {
      id: "TC077",
      title: "Agreement before disagreement",
      summary:
        'Before you say "I disagree," name one real point of agreement in a single sentence.',
      loaded: true,
      impact: "high",
      difficulty: "Medium",
    },
    {
      id: "TC079",
      title: "Permission to disagree",
      summary:
        'Ask "Can I push back gently on one piece?", keep it to one sentence, then hand back.',
      loaded: true,
      impact: "medium",
      difficulty: "Medium",
    },
    {
      id: "TC083",
      title: "Ask what would make it workable",
      summary:
        'Validate the friction, then ask: "What would make this workable, if anything?"',
      loaded: true,
      impact: "medium",
      difficulty: "Medium",
    },
    {
      id: "TC085",
      title: "Question-stacking restraint",
      summary:
        "I asked too many things at once. One question: what is the main part?",
      loaded: true,
      impact: "low",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC089",
      title: "Risk reduction",
      summary:
        'Cap the next step honestly and offer a real exit: "A quick no is completely fine."',
      loaded: true,
      impact: "medium",
      difficulty: "Hard",
    },
    {
      id: "TC091",
      title: "Forced-humour restraint",
      summary:
        "Before a joke, check it is kind, timely and wanted. If not, be warm instead.",
      loaded: true,
      impact: "low",
      difficulty: "Hard",
    },
    {
      id: "TC092",
      title: "Face-saving disagreement",
      summary:
        "One truthful bridge, then one precise point where you see it differently.",
      loaded: true,
      impact: "high",
      difficulty: "Hard",
    },
    {
      id: "TC099",
      title: "Humblebrag avoidance",
      summary: "I have a win to share: [specific win]. I am pleased about it.",
      loaded: true,
      impact: "low",
      difficulty: "Easy-Medium",
    },
    {
      id: "TC101",
      title: "Effective apology",
      summary:
        "Say sorry, name exactly what you did, offer one concrete fix, then stop and listen.",
      loaded: true,
      impact: "high",
      difficulty: "Medium",
    },
    {
      id: "TC103",
      title: "Receive feedback well",
      summary:
        "Thank them, ask for one example, and listen before you explain or defend.",
      loaded: true,
      impact: "high",
      difficulty: "Medium",
    },
    {
      id: "TC105",
      title: "Take a break, then repair",
      summary:
        "Say you're too worked up to listen, ask for a break and say when you'll come back.",
      loaded: true,
      impact: "high",
      difficulty: "Medium",
    },
    {
      id: "TC107",
      title: "Fogging and broken record",
      summary:
        "Calmly agree with whatever is true, then repeat your short position in the same words.",
      loaded: true,
      impact: "medium",
      difficulty: "Medium",
    },
  ],
};

/**
 * "Start here" core set: the 15 highest-yield everyday moves, in the order
 * a new reader's drill visits them. Every id must exist above (checked in
 * content-invariants). Order matters; it is the new-reader drill order.
 */
export const CORE_CARD_IDS: readonly string[] = [
  "TC004",
  "TC006",
  "TC011",
  "TC009",
  "TC016",
  "TC082",
  "TC013",
  "TC052",
  "TC095",
  "TC066",
  "TC005",
  "TC002",
  "TC101",
  "TC102",
  "TC103",
];

export const CORE_CARD_SET: ReadonlySet<string> = new Set(CORE_CARD_IDS);
