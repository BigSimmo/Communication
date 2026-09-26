import type { CardData } from "../card-types";

export const TC093: CardData = {
  pdfUrl: "cards/TC093/TC093_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet — the designed visual card.",
      href: "cards/TC093/TC093_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC093/TC093_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC093/TC093_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC093/TC093_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC093/TC093_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC093/TC093_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC093/TC093_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC093",
  whyItWorks:
    'The How-so prompt is a compact elaboration question: when someone gives a claim, reaction, preference or vague conclusion, you ask a short, warm "How so?" that invites the mechanism, example or reasoning behind it. It works because it lets the speaker define their own meaning instead of you guessing or debating — a single short prompt often surfaces the real criterion faster than a long explanation or a stack of detailed questions, and the person feels understood rather than cross-examined.',
  whatItIsNot: [
    '"How so?" said with a sceptical tone that really means "prove it."',
    '"How could you possibly think that?" — a challenge dressed up as a question.',
    'Asking "why?" over and over, which tends to sound accusatory or abstract.',
    "A repetitive interrogation after the person has already answered.",
    "A Socratic trap or a disguised objection that makes someone defend themselves.",
  ],
  overview: {
    coreFormula: [
      "You said the second option feels safer. How so?",
      "You are worried the launch will slip. How do you see that happening?",
      "You said the tone felt different. How did it come across?",
      "You think the client is not ready. How are you reading that?",
      "You said this matters more than speed. How does that show up in the decision?",
    ],
    minimumViableMove:
      'When a person says something compressed, ask one warm, neutral "How so?" and then stop talking.',
    impact: "High",
    difficulty: "Easy-Medium",
    misuse:
      'A sceptical, courtroom tone turns "How so?" into a demand for proof, so the speaker hears challenge instead of curiosity.',
    bestFor: [
      'Vague evaluations like "that felt off" or "I am not convinced"',
      'Compressed preferences such as "I like A more than B"',
      "Disagreement that needs understanding before you respond",
      "Coaching, facilitation, customer discovery and team debriefs",
      'Sensitive moments where "why?" would sound too sharp',
      "Conversations where the speaker has more context than you do",
    ],
  },
  notFor: [
    "The person is in acute distress and needs support, not elaboration",
    "They have already explained and you would only be repeating the prompt",
    "The answer is obvious and the question would feel performative",
    "The moment needs a direct answer, decision or boundary",
    "Your tone would carry scepticism, impatience or challenge",
    "They have signalled they do not want to go deeper",
    "Physical safety or an immediate emergency takes priority",
  ],
  phraseBank: [
    {
      id: "everyday",
      label: "Neutral everyday",
      tag: "Everyday openers",
      tone: "Quick",
      phrases: [
        "How so?",
        "How do you mean?",
        "How did that land for you?",
        "How is it showing up?",
        "How are you seeing it?",
        "How does that show up?",
        "How are you reading it?",
        "How would that play out?",
      ],
    },
    {
      id: "professional",
      label: "Work and decisions",
      tag: "Professional prompts",
      tone: "Professional",
      phrases: [
        "How do you see that playing out?",
        "How did you arrive at that read?",
        "How would that affect the next step?",
        "How is that different from the current approach?",
        "How would we notice that risk early?",
        "How do you see it breaking down?",
        "How are you reading readiness?",
        "What would be a small signal that this is improving?",
      ],
    },
    {
      id: "digital",
      label: "Digital / asynchronous",
      tag: "Text and email prompts",
      tone: "Direct",
      phrases: [
        "Can you say how you are reading that?",
        "What makes it feel that way? How is it showing up?",
        "Could you give one example of how that happens?",
        "How would that change the decision from your view?",
        "Can you say how you are seeing the issue — is it audience fit, timing, or execution risk?",
        "How does that pain show up day to day?",
        "What is the main thing pointing you there?",
      ],
    },
    {
      id: "warm-personal",
      label: "Warm personal",
      tag: "Support prompts",
      tone: "Warm",
      phrases: [
        "How has that been for you?",
        "How did you notice it?",
        "How did it shift things?",
        "How does it feel different this time?",
        "How are you making sense of it?",
        "How has that been showing up?",
        "How has that been affecting you day to day?",
      ],
    },
    {
      id: "high-pressure",
      label: "Pressure and disagreement",
      tag: "Before you push back",
      tone: "High-stakes",
      phrases: [
        "I want to understand before I respond. How so?",
        "Can you walk me through how you are seeing it?",
        "What is the path from the issue to that concern?",
        "How would you define the risk here?",
        "What would make that outcome more likely?",
        "Before I push back, can you walk me through how you are seeing it?",
        "I want to understand your read before I respond. How are you seeing it?",
      ],
    },
    {
      id: "softeners",
      label: "Softeners when trust is low",
      tag: "Repair the frame",
      tone: "Repair",
      phrases: [
        "I may not have the full picture — how so?",
        "Help me understand the shape of it. How is it showing up?",
        "I am not challenging it; I am trying to understand how it works.",
        "That sounds important. How is it showing up?",
        "I want to understand before responding. How do you mean?",
        "No pressure to unpack everything — how is that showing up?",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "The statement is emotionally loaded",
      action: "Reflect or validate first, then ask softly.",
      phrase: "That sounds important. How is that showing up?",
    },
    {
      condition: "One word is doing the main work",
      action: "Pick up that exact word first, then ask how.",
      phrase: 'You said "fragile" — how is it fragile?',
    },
    {
      condition: "You need reasoning, mechanism or an example",
      action: "Ask one open How-so prompt, then stop and let it breathe.",
      phrase: "How so?",
    },
    {
      condition: "They expand constructively",
      action: "Reflect, summarise, or chain to the next step.",
      phrase: "So the issue is adoption, not interest.",
    },
    {
      condition: "They tighten or sound defensive",
      action: "Repair the frame before asking again; do not repeat the prompt.",
      phrase: "I am not challenging it — I am trying to understand.",
    },
    {
      condition: "Enough is clear now",
      action: "Stop asking and respond; if not, ask one narrower how-question.",
      phrase: "What is the main thing pointing you there?",
    },
  ],
  ladder: [
    {
      weak: "Why would you say that?",
      better: "How so?",
      best: "I want to understand your read before I respond. How are you seeing it?",
    },
    {
      weak: "What is the problem now?",
      better: "How so?",
      best: "What are you noticing that makes it feel risky?",
    },
    {
      weak: "Why do you prefer that?",
      better: "How does it work better?",
      best: "What about that option fits the situation better?",
    },
    {
      weak: "How is that true?",
      better: "How are you reading it?",
      best: "Before I push back, can you walk me through how you are seeing it?",
    },
  ],
  scenarios: [
    {
      situation: 'Team disagreement — "This timeline is unrealistic."',
      move: "Ask how it breaks down; listen for dependency, capacity or stakeholder timing, then reflect the real blocker.",
      phrase: "How do you see it breaking down?",
    },
    {
      situation: 'Customer discovery — "The old tool is painful."',
      move: "Ask how the pain shows up day to day; listen for frequency, cost and workarounds.",
      phrase: "How does that pain show up day to day?",
    },
    {
      situation: 'Personal support — "I just feel disconnected lately."',
      move: "Soften, then ask how it has been showing up; listen for routine, mood and energy before naming it.",
      phrase: "How has that been showing up?",
    },
    {
      situation: 'Leadership decision — "The team is not ready."',
      move: "Ask how they are reading readiness; listen for skill, confidence and alignment, then look for a small signal.",
      phrase: "How are you reading readiness?",
    },
    {
      situation: 'Digital message — "I am not sure this direction works."',
      move: "Reply with a category-offering how-question so they can name the type of concern, then respond to the category.",
      phrase:
        "Can you say how you are seeing the issue — is it audience fit, timing, or execution risk?",
    },
    {
      situation: 'Sensitive one-to-one where "why?" would sound sharp',
      move: "Cushion first, then ask how, so the question reads as care rather than challenge.",
      phrase: "I want to understand before I respond. How are you seeing it?",
    },
  ],
  calibration: {
    working: [
      "They give an example, mechanism or criterion.",
      "Their tone becomes more thoughtful or precise.",
      'They say things like "What I mean is..." or "The part I am noticing is...".',
      "The conversation eases because the hidden variable is now visible.",
      "They lean in and share more detail.",
      "They move from a vague label to a concrete cause.",
    ],
    adjust: [
      'They answer defensively ("I just think that, okay?") — repair the frame before asking again.',
      'They ask "What do you mean?" or seem unsure how much detail you want — narrow the question.',
      "The answer becomes circular — stop and reflect what you already have.",
      "They look like they feel judged — add warmth or drop the thread.",
      "They give a clear answer and are ready for a response — stop asking and reply.",
      "They signal privacy or fatigue — let it rest.",
      "The moment needs a decision or action — move to the next step instead of exploring.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Notice the compression",
      task: "Through the day, catch three vague statements — a preference, a concern and a reaction — and just note them. Do not respond yet; only practise recognising when something is compressed.",
    },
    {
      day: "Day 2",
      title: "Turn vague into how",
      task: 'Take yesterday\'s three statements and write one neutral How-so prompt for each, under twelve words. Cut any version that really means "why" or "prove it."',
    },
    {
      day: "Day 3",
      title: "Say it warmly",
      task: "Say each prompt aloud twice — once flat, once curious. Keep only the warm version and notice how tone alone changes it from challenge to invitation.",
    },
    {
      day: "Day 4",
      title: "Cushion for high stakes",
      task: 'Rewrite two prompts with a respect signal in front, e.g. "I want to understand before I respond. How are you seeing it?" Use these when tension is likely.',
    },
    {
      day: "Day 5",
      title: "Let silence work",
      task: "In one real conversation, ask a single How-so prompt and count two full breaths before adding anything. Notice what the other person fills the space with.",
    },
    {
      day: "Day 6",
      title: "Catch the mechanism",
      task: 'Use the prompt once and, instead of asking again, reflect the real criterion back: "So the issue is X, not Y." Check whether they say "exactly."',
    },
    {
      day: "Day 7",
      title: "Ask, then move",
      task: "Use How-so to open, reflect what you heard, then chain into a next step — a summary, a bounded request or permission-based advice. Stop asking once enough is clear.",
    },
  ],
  checklist: [
    "Did I ask for understanding rather than proof?",
    "Was the prompt short, with no stacked questions?",
    "Was my tone curious rather than sceptical?",
    "Did I give silence room to work before adding anything?",
    "Did I listen for the mechanism, example or criterion?",
    "Did I stop and reflect once enough was clear, rather than cornering them?",
  ],
  example: {
    without: [
      'A: "I do not think the client is ready for the new proposal."',
      'B: "Why not? They asked for it. We already discussed this."',
      'A: "I know, but I still think it is too early."',
      'B: "That does not make sense."',
      "Why it fails: B treats the concern as a claim to defeat, not a signal to understand.",
    ],
    with: [
      'A: "I do not think the client is ready for the new proposal."',
      'B: "How so?"',
      'A: "They keep asking about basics we covered weeks ago."',
      'B: "So the issue is not interest; it is readiness and retention."',
      'A: "Exactly."',
      'Advanced: "I want to understand that before we decide. How are you reading their readiness?" — then reflect: "So it might land with the sponsor but fail with the users who implement it."',
      'B: "Would a short readiness check before the proposal reduce that risk?"',
      "Why it works: B asks for the mechanism, reflects the real concern, and chains into risk reduction rather than premature persuasion.",
    ],
    note: "The poor version defends against the concern; the strong version treats it as information and asks for the path behind it.",
  },
  influencePayoff: {
    feeling: '"They wanted to understand my thinking, not win against it."',
    principle:
      "A single short prompt often surfaces more useful information than a long explanation or a multi-part question — its power comes from restraint.",
    gains: [
      "Clarity without pressure",
      "The reasoning behind a preference, made visible",
      "Hidden constraints, objections and real criteria surfaced early",
      "Less premature disagreement, because you ask before you argue",
      "Room for the other person to define their own meaning",
      "More accurate advice, decisions and repairs, because you understand the mechanism first",
      "You become easier to think with",
    ],
    whyMostFail: [
      'A sceptical, courtroom tone turns "How so?" into a demand for proof.',
      "Repeating the same prompt makes it feel lazy or interrogative.",
      "Stacking questions overloads the speaker instead of opening one path.",
      "Filling the silence too fast robs the prompt of its power.",
    ],
  },
  fieldTip: {
    headline: 'Put a cushion before "How so?" when the stakes are high.',
    body: 'A bare "How so?" can read as a trap when tension is high. A short respect signal in front tells them the question is not an attack — and the silence after it does the real work.',
    dont: "How so?",
    do: "I want to understand your read before I respond. How are you seeing it?",
  },
  method: [
    {
      step: "1",
      title: "Catch the compressed statement",
      body: 'Listen for a conclusion, reaction, preference or concern that has not been unpacked — "that felt off," "they are not ready," "I like the second one." That is your cue.',
      examples: [{ label: "Cue", text: '"That meeting felt strange."' }],
    },
    {
      step: "2",
      title: "Choose the right level",
      body: "Ask broadly if the whole statement is vague; ask specifically if one word or claim is carrying the weight. Broad opens the door; narrow sharpens the focus.",
      examples: [
        { label: "Broad", text: "How so?" },
        { label: "Narrow", text: "How did it feel strange?" },
      ],
    },
    {
      step: "3",
      title: "Keep the wording short",
      body: "One clean sentence beats a question-stack. The shorter the prompt, the easier it is to answer and the less it feels like an interrogation.",
      examples: [
        {
          label: "Instead of",
          text: "How so, what happened, who said what, and why?",
        },
        { label: "Say", text: "How so?" },
      ],
    },
    {
      step: "4",
      title: "Warm the tone",
      body: 'The same words can feel supportive or adversarial. Curious, low-pressure delivery is what separates "How so?" from "prove it." For sensitive topics, add a softener.',
      examples: [
        {
          label: "Softener",
          text: "I want to understand before responding. How do you mean?",
        },
      ],
    },
    {
      step: "5",
      title: "Stop after asking",
      body: "Give the person room to think and do not rush to fill the silence. The value of the prompt comes from the answer it makes space for, not from the question itself.",
      examples: [
        {
          label: "Then",
          text: "Count two full breaths before adding anything.",
        },
      ],
    },
  ],
  liveThreadClues: [
    '"That felt off."',
    '"This is better."',
    '"I am not convinced."',
    '"I like A more than B."',
    '"I do not think that will work."',
    '"It is not really about the money."',
    '"They are not ready."',
    '"That meeting felt strange."',
  ],
  depthDial: [
    {
      depth: "Broad",
      useWhen: "The whole statement is vague",
      phrase: "How so?",
    },
    {
      depth: "Specific",
      useWhen: "One word or claim is carrying the weight",
      phrase: "How did it feel strange?",
    },
    {
      depth: "Professional",
      useWhen: "You need mechanism or risk in a work setting",
      phrase: "How do you see that playing out?",
    },
    {
      depth: "Cushioned",
      useWhen: "Tension or stakes are high",
      phrase: "I want to understand before I respond. How are you seeing it?",
    },
    {
      depth: "Warm",
      useWhen: "The topic is personal",
      phrase: "How has that been for you?",
    },
  ],
  commonMistakes: [
    {
      mistake: "Using a sceptical tone",
      soundsLike: '"How so?" delivered sharply, meaning "prove it."',
      better:
        '"I want to understand how you are seeing it" — curious and unhurried.',
    },
    {
      mistake: "Overusing the same phrase",
      soundsLike: '"How so?" ... "How so?" ... "How so?"',
      better:
        'Vary it: "How does that show up?" then "What is the main thing pointing you there?"',
    },
    {
      mistake: "Asking too broadly when the issue is specific",
      soundsLike: '"How so?"',
      better: '"How did that show up in the meeting?"',
    },
    {
      mistake: "Stacking questions",
      soundsLike: '"How so, what happened, who said what, and why?"',
      better: 'Ask one: "How so?" — then wait.',
    },
    {
      mistake: "Interrupting the answer",
      soundsLike: "Jumping in before they finish the thought.",
      better: "Let the silence run; the value comes after the question.",
    },
    {
      mistake: "Using it to stall",
      soundsLike: "Asking for more when you already understand.",
      better: "Respond, decide or act instead of asking again.",
    },
    {
      mistake: "Ignoring emotional content",
      soundsLike: '"How so?" straight after something painful.',
      better: 'Reflect first: "That sounds hard. How has it been showing up?"',
    },
    {
      mistake: "Turning every claim into a debate",
      soundsLike: "Using the answer to build a counter-argument.",
      better: "Aim for understanding, not winning.",
    },
  ],
  recoveryPhrases: [
    "I am not challenging it — I am trying to understand the shape of it.",
    "That came out sharper than I meant. How is it showing up from your side?",
    "You do not need to justify it. I am just trying to understand what you are noticing.",
    "Let me soften that — what is the main thing pointing you that way?",
    "I might be missing context. What part should I understand first?",
    "We can pause there if it is not useful to unpack.",
    "Thanks, that gives me the picture. I do not need more detail than you want to share.",
  ],
  bestRecoveryLine:
    "I am not challenging it — I am trying to understand the shape of it.",
  chains: [
    {
      label: "Open then reflect",
      sequence:
        "Comment-before-question → How-so prompt → Reflective listening",
      example: [
        '"That sounds like a real concern. How are you seeing it?"',
        'Then reflect: "So the risk is adoption, not interest."',
      ],
    },
    {
      label: "Mirror then check",
      sequence: "Exact-word pickup → How-so prompt → Summary check",
      example: [
        "\"You said 'fragile.' How is it fragile?\"",
        'Then check: "Have I got that right?"',
      ],
    },
    {
      label: "Open then reduce risk",
      sequence: "How-so prompt → Risk reduction → Bounded request",
      example: [
        '"How do you see the risk playing out?"',
        '"What would reduce that risk?"',
        '"Could we do a ten-minute readiness check before sending it?"',
      ],
    },
    {
      label: "Understand then advise",
      sequence: "How-so prompt → Permission-based advice",
      example: [
        '"How are you seeing the bottleneck?"',
        '"Would it help if I offered one option?"',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC003",
      reason:
        'Add a short observation before the how-question when trust is low, so "How so?" does not feel cold or abrupt. Use How-so alone once rapport is there.',
    },
    {
      id: "TC023",
      reason:
        "If one loaded word is doing the work, pick up that word first. Use How-so when the whole statement needs its mechanism opened.",
    },
    {
      id: "TC025",
      reason:
        "Mirror the exact wording when the phrase itself matters; ask How-so when it is the reasoning behind the words, not the words, that you need.",
    },
    {
      id: "TC034",
      reason:
        "If the person is stuck, offer two bounded options to reduce choice load. Use How-so when they can elaborate openly.",
    },
    {
      id: "TC087",
      reason:
        'Invite a story for sequence and scene ("what happened?"); ask How-so for the mechanism or criterion behind a claim.',
    },
    {
      id: "TC100",
      reason:
        "Ask what they made of an event for their interpretation; ask How-so for the path and mechanics behind the statement.",
    },
  ],
};
