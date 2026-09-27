import type { CardData } from "../card-types";

export const TC002: CardData = {
  pdfUrl: "cards/TC002/TC002_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC002/TC002_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC002/TC002_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC002/TC002_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC002/TC002_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC002/TC002_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC002/TC002_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC002/TC002_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC002",
  whyItWorks:
    "Support response over shift response is the habit of responding to the other person's experience before shifting to your own related story or idea. When a self-reference comes to mind, you first support their thread with acknowledgement, curiosity or appreciation, and only then decide whether your own point still adds anything. It works because people become receptive to you once they feel heard: a support response keeps their moment intact, while a shift response quietly tells them the floor was never really theirs.",
  whatItIsNot: [
    "It is not never talking about yourself, suppressing reciprocity, or performing endless questions. It is a sequencing discipline: their moment first, your contribution second if it still serves the conversation.",
    "It is not self-erasure or false modesty. Your story can still come. It just comes after theirs has landed.",
    "If the other person resists, shortens answers or redirects, release the technique and follow the person.",
  ],
  overview: {
    coreFormula: [
      "Notice the shift impulse → support their thread → invite one more detail → share only if it adds value → return to them.",
      "Short form: notice → respond → invite → calibrate → release.",
      '"That sounds rough. What part went wrong?" then actually listen before you relate.',
      '"I\'ve been there too, but yours sounds like the bigger story. What happened?"',
      '"That\'s a big one. What was the best bit?" Support the win before you match it.',
    ],
    minimumViableMove:
      'Before saying "That happened to me too", say one support line first: "That sounds like a lot. What happened next?"',
    impact: "High",
    difficulty: "Easy-Medium",
    misuse:
      "The main failure mode is hijacking their moment with your own story and then calling it connection. The opposite failure is never sharing back at all, turning the conversation into an interview.",
    bestFor: [
      "Someone shares news, stress, an achievement, disappointment or story",
      'You feel a strong urge to say "me too"',
      "You want reciprocity without taking over",
      "A friend is venting and you want to help without redirecting",
      "Responding to good or bad news without competing",
      "Group conversations where quick hijacks are common",
    ],
  },
  notFor: [
    "The other person directly asks about your experience",
    "The conversation has clearly moved into mutual exchange",
    "Your own disclosure is urgent or safety-relevant",
    "You are using support lines to stall or avoid saying what you actually mean",
    "Physical safety or an emergency needs a direct response first",
    "You have nothing genuine to relate and a support line would sound hollow",
  ],
  phraseBank: [
    {
      id: "quick",
      label: "Quick and digital",
      tag: "Short, text-length support",
      tone: "Quick",
      phrases: [
        "What happened next?",
        "How did that land?",
        "That makes sense.",
        "Tell me the key bit.",
        "What was that like?",
        "Go on, I'm listening.",
        "That's a lot.",
        "Oof, that's rough. What happened?",
        "Nice one. What made it work?",
        "Say more?",
      ],
    },
    {
      id: "warm",
      label: "Warmth and acknowledgement",
      tag: "Social / support / validation",
      tone: "Warm",
      phrases: [
        "That sounds intense. What was that like?",
        "That's a big one. What happened next?",
        "I can see why that stuck with you.",
        "Before I jump in with my version, tell me the best part.",
        "That sounds like a lot to carry.",
        "No wonder that stayed with you.",
        "I'm really glad that worked out. What was the best of it?",
        "That sounds like it mattered to you.",
        "Take your time. I want to hear it.",
      ],
    },
    {
      id: "professional",
      label: "Work and meetings",
      tag: "Professional / client / decision",
      tone: "Professional",
      phrases: [
        "That sounds like it took real effort. What was the key obstacle?",
        "That's useful context. What did you decide from there?",
        "Before I add my experience, what mattered most in your case?",
        "That's a real result. What made the difference?",
        "Sounds like a tough call. What tipped it?",
        "I've seen something similar, but I'd rather hear your read first.",
        "That's helpful background. What did you weigh up?",
      ],
    },
    {
      id: "invite",
      label: "Invite one more detail",
      tag: "Draw the thread out",
      tone: "Direct",
      phrases: [
        "What part went wrong?",
        "What was the hardest bit?",
        "What made it work?",
        "What was the turning point?",
        "What mattered most to you in that?",
        "What happened after that?",
        "What are you making of it now?",
        "What's the part you're still turning over?",
      ],
    },
    {
      id: "handback",
      label: "Hand the floor back",
      tag: "Recovery / return the thread",
      tone: "Repair",
      phrases: [
        "Actually, your bit is the important one here.",
        "Let me stay with your point for a second.",
        "Before I jump in with mine, tell me the rest.",
        "I'll tell my version later. What happened with yours?",
        "Sorry, that was me taking over. Go on.",
        "I don't want to bulldoze your story. Keep going.",
        "I meant to relate, not take over.",
      ],
    },
    {
      id: "high-stakes",
      label: "When it's tense or raw",
      tag: "Distress or high pressure",
      tone: "High-stakes",
      phrases: [
        "That sounds genuinely hard. I'm here. What do you need right now?",
        "Let's stay with what happened to you first.",
        "I'm not going to make this about me. Go on.",
        "That's a lot to hold. Take your time.",
        "You don't have to rush it. What happened?",
        "I hear how much this got to you.",
        "Whatever I've been through can wait. This is about you.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "You feel a self-story rising",
      action: "Pause and support their thread first.",
      phrase: '"That sounds like a lot. What happened next?"',
    },
    {
      condition: "They asked about your experience",
      action: "Share briefly, then return the floor to them.",
      phrase: '"I\'ve had something like it, but tell me how yours ended."',
    },
    {
      condition: "They are giving short answers",
      action:
        "Stop probing. Offer a reciprocal contribution or a graceful exit.",
      phrase: '"No pressure to get into it. I just wanted to check in."',
    },
    {
      condition: "Your story is bigger than theirs",
      action: "Hold it back unless it clearly helps them.",
      phrase:
        '"Yours is the one that matters here. What was the turning point?"',
    },
    {
      condition: "They have finished and turned to you",
      action: "Share your related bit, then hand the thread back.",
      phrase:
        '"That reminds me of something similar, but first, how are you feeling about it?"',
    },
  ],
  ladder: [
    {
      weak: "Same thing happened to me. (Shifts straight to yourself and can feel like a hijack.)",
      better:
        "That sounds familiar. What happened next? (Acknowledges the link but keeps their thread alive.)",
      best: "I've got a related story, but yours sounds like the important bit. What was the turning point? (Names the reciprocity while protecting their moment.)",
    },
    {
      weak: "Oh, I did that last year. (Turns their win into your anecdote.)",
      better:
        "That's a great result. How did you pull it off? (Celebrates before relating.)",
      best: "That's brilliant. What was the best part for you? I've done something similar, but I want to hear yours first. (Support, invite, then reciprocity.)",
    },
    {
      weak: "You think that's bad, let me tell you about my week. (Competes with their stress.)",
      better:
        "That sounds draining. What was the worst of it? (Stays on their thread.)",
      best: "That sounds genuinely hard. Talk me through it. I won't turn it into my own saga. (Support with a light, honest reassurance.)",
    },
  ],
  scenarios: [
    {
      situation: "A friend shares a stressful day",
      move: "Support the stress thread before mentioning your own day.",
      phrase: '"That sounds exhausting. What was the worst part?"',
    },
    {
      situation: "A colleague shares a win",
      move: "Ask what made it work before offering your similar project.",
      phrase: '"That\'s a great result. What made the difference?"',
    },
    {
      situation: "Text or DM exchange",
      move: "Send one support line before any related anecdote.",
      phrase: '"Oof, that\'s rough. What happened?"',
    },
    {
      situation: "Group conversation after a pile-on",
      move: "Hand the floor back to the original speaker once others have jumped in.",
      phrase: '"Wait, I want to hear how yours actually ended."',
    },
    {
      situation: "Someone shares bad news",
      move: "Acknowledge and slow down before relating anything of your own.",
      phrase: '"I\'m really sorry. How are you holding up?"',
    },
    {
      situation: 'You genuinely have a strong "me too"',
      move: "Support and invite first, then offer your version briefly and hand back.",
      phrase:
        '"I\'ve been through something like that. But tell me yours first. What happened?"',
    },
  ],
  calibration: {
    working: [
      "They add more detail after your support line.",
      "Their tone relaxes rather than tightens.",
      "They keep going on the same thread instead of trailing off.",
      "They eventually ask for your related experience.",
      "They move from bare facts into how it actually felt.",
      'They say "exactly", "yeah", or "that\'s the thing".',
      "The exchange feels easier, not more self-conscious.",
    ],
    adjust: [
      "Answers get shorter or more clipped.",
      "They correct the frame or the facts you reflected.",
      "Their body tenses or they glance away.",
      "They go quiet after you speak instead of opening up.",
      "You realise you've asked several questions without offering anything.",
      "They seem to be waiting for you to stop, not to continue.",
      "If any of these show, lower the intensity, share something small yourself, or give them an easy exit.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot the impulse",
      task: "Through one ordinary day, silently tally each time you feel the urge to jump in with your own story. Change nothing else, just notice how often the shift impulse fires.",
    },
    {
      day: "Day 2",
      title: "Name three moments",
      task: "Write three real situations from the past week where a shift response would have hijacked the moment. For each, note what a single support line could have been instead.",
    },
    {
      day: "Day 3",
      title: "Build the ladder",
      task: "For each of the three, write a weak line, a better line and a best line: support first, then invite, then optional reciprocity that still hands the floor back.",
    },
    {
      day: "Day 4",
      title: "Say it short",
      task: "Say each best line aloud twice, then cut it by about a third so it sounds like ordinary speech rather than a script. Bin any line that sounds clever or coached.",
    },
    {
      day: "Day 5",
      title: "Field test, low stakes",
      task: 'In one easy conversation, use the minimum viable move once: one support line before any "me too". Afterwards, record what the other person did in response.',
    },
    {
      day: "Day 6",
      title: "Invite one more detail",
      task: "In two conversations, add exactly one invite question after your support line, then genuinely wait. No relating anything of your own until they've fully answered.",
    },
    {
      day: "Day 7",
      title: "Reciprocity, then hand back",
      task: "Use the full move once: support, invite, share your related bit briefly, then return the floor with a question. Note where it felt natural and where it felt forced.",
    },
  ],
  checklist: [
    "Did I support their thread before reaching for my own story?",
    "Did I use plain language rather than a script?",
    "Did I keep their autonomy intact, no pressure, no steering?",
    "Did I stop after one move instead of overusing it?",
    "Did I use a recovery line if I jumped in too fast?",
    "Did the exchange feel easier afterwards, or more self-conscious?",
  ],
  example: {
    without: [
      'Them: "The presentation went badly."',
      'You: "Oh, I had a disaster presentation once: the projector died and I froze."',
      'Them: "Right."',
      'You: "Yeah, mine was a nightmare. Anyway."',
      "Why it falls flat:",
      "the floor is taken before they've said what happened",
      "their bad moment becomes the setup for your anecdote",
      '"Right" is the sound of someone giving up the thread',
    ],
    with: [
      'Them: "The presentation went badly."',
      'You: "That sounds rough. Before I tell you my similar story, what actually happened in the room?"',
      'Them: "The senior person challenged the premise in front of everyone."',
      'You: "So it wasn\'t just a bad talk. It turned into a public pressure moment."',
      "Them: \"Exactly. That's the part that's been eating at me.\"",
      'You: "I\'ve had one of those too. But first, what would have made it feel survivable in the moment?"',
      "Why this works:",
      'supports the thread before any "me too"',
      "the invite question keeps them inside their own experience",
      "reciprocity is named, but the floor goes back to them",
    ],
    note: 'The "better" version ("That sounds rough. What part went wrong?") is already fine for most conversations. The explicit "before I tell my story" hand-back is only worth adding when your own experience is genuinely relevant.',
  },
  influencePayoff: {
    feeling: '"They actually stayed with what I was saying."',
    principle:
      "People become more receptive to you once they feel you were receptive to them first.",
    gains: [
      "Warmth: the other person feels heard before you relate.",
      "Reciprocity without the conversation revolving around you.",
      "Reduced friction: they don't have to defend, decode or rescue the exchange.",
      "Trust, because you showed their moment was safe with you.",
      "Relevance. When your story does come, it lands better.",
      "Conversational ease, with no exaggeration or performance.",
      "A quiet reputation as someone who is genuinely good to talk to.",
    ],
    whyMostFail: [
      "They hijack the moment with their own story and call it connection.",
      "They use support lines mechanically and never share anything back, so it turns into an interview.",
      "They compete with the other person's emotion or achievement instead of supporting it.",
      'They treat "me too" as a shortcut for empathy rather than actually acknowledging.',
    ],
  },
  fieldTip: {
    headline: "Support first, relate second, return the floor.",
    body: "The order is the whole technique. Almost anyone can produce a warm line and a good story. The skill is putting them in the right sequence so the other person's moment survives contact with yours.",
    example:
      '"That sounds rough. What part went wrong?" ... then, later, "I\'ve had one like that too."',
    dont: 'Don\'t open with "the same thing happened to me". That is the shift response wearing a friendly voice.',
    do: "Do let one support line and one honest question land before you reach for anything of your own.",
  },
  method: [
    {
      step: "1",
      title: "Catch the shift impulse",
      body: "The cue for this technique is internal: the little pull to say the same thing happened to me. That pull is not bad. It usually means you relate. The move is to notice it before it becomes the first thing out of your mouth.",
      examples: [
        {
          label: "The impulse",
          text: "They mention a rough flight. You instantly think of your worse one.",
        },
        {
          label: "The catch",
          text: "Notice the pull, let it wait, and put their thread first.",
        },
      ],
    },
    {
      step: "2",
      title: "Support the thread first",
      body: "Lead with acknowledgement, curiosity or appreciation: whichever fits. One honest line that shows you registered what they said is enough.",
      examples: [
        { label: "Acknowledge", text: "That sounds like a lot." },
        { label: "Be curious", text: "What was the worst part?" },
        { label: "Appreciate", text: "That took real nerve." },
      ],
    },
    {
      step: "3",
      title: "Say it in plain language",
      body: "Choose the smallest useful move, not the cleverest one. It should sound like ordinary speech, not a technique being performed.",
      examples: [
        { label: "Too clinical", text: "How did that impact you emotionally?" },
        { label: "Natural", text: "Did that throw you a bit?" },
      ],
    },
    {
      step: "4",
      title: "Invite one more detail",
      body: "Add one short question that keeps them inside their own experience. One is usually enough: more than two starts to feel like an interview.",
      examples: [
        { label: "Invite", text: "What happened next?" },
        { label: "Invite", text: "What mattered most to you in that?" },
      ],
    },
    {
      step: "5",
      title: "Share only if it still adds value, then hand back",
      body: "Once they have been heard, your related bit is welcome, but keep it brief and return the floor with a question. If your story would dwarf theirs, hold it.",
      examples: [
        {
          label: "Named reciprocity",
          text: "I've had something like that too, but yours sounds bigger. What was the turning point?",
        },
      ],
    },
    {
      step: "6",
      title: "Release the technique",
      body: "Stop the moment they have answered, corrected the frame, or moved on. Support-before-self is a sequence you run once, not a loop to keep looping.",
    },
  ],
  liveThreadClues: [
    "the same thing happened to me...",
    "oh, I...",
    "that reminds me of when I...",
    "you think that's bad...",
    "I did that once...",
    "wait till you hear mine...",
  ],
  depthDial: [
    {
      depth: "Pure support",
      useWhen: "they are mid-story or clearly upset",
      phrase: '"That sounds rough. What happened?"',
    },
    {
      depth: "Support + invite",
      useWhen: "they have paused but there is clearly more",
      phrase: '"What was the hardest part?"',
    },
    {
      depth: "Named reciprocity",
      useWhen: "they have finished and it feels mutual",
      phrase:
        '"I\'ve had something like that, but yours first. What happened?"',
    },
    {
      depth: "Full exchange",
      useWhen: "they ask, or clearly want your take",
      phrase: '"Here\'s what worked for me..." then hand the floor back.',
    },
  ],
  commonMistakes: [
    {
      mistake: "Opening with your own similar story",
      soundsLike: '"Oh, the same thing happened to me..."',
      better: '"That sounds rough. What happened?" (your story can come later)',
    },
    {
      mistake: "Support lines on autopilot, never sharing back",
      soundsLike: '"Mm. And then? ... And then?" with nothing of your own',
      better:
        "\"That makes sense. I've had a version of that too. Here's the bit that helped.\"",
    },
    {
      mistake: "Too many follow-ups after the point is clear",
      soundsLike: '"Where? Who? Why? And then what?"',
      better:
        '"Sounds like the Q&A was the real problem." (reflect rather than interrogate)',
    },
    {
      mistake: "Competing with their emotion or achievement",
      soundsLike: '"You think that\'s bad..." / "That\'s nothing, when I..."',
      better: '"That\'s a lot. What was the worst of it?"',
    },
    {
      mistake: 'Using "me too" as a shortcut for empathy',
      soundsLike: '"Same!" and moving straight on',
      better: '"I get why that hit you. What made it land so hard?"',
    },
    {
      mistake: "Holding your story back so long it feels withholding",
      soundsLike: "endless questions, zero disclosure",
      better:
        "\"I've been there too. Happy to share what worked once you're done.\"",
    },
  ],
  recoveryPhrases: [
    "I jumped to my version too fast. What happened with yours?",
    "Let me stay with your point for a second.",
    "I meant to relate, not take over.",
    "Actually, your bit is the important one here.",
    "Sorry, I ran off with that. Back to you.",
    "That turned into my story fast. What were you saying?",
    "Let me not make this about me. Go on.",
    "I'll park mine. Finish yours first.",
  ],
  bestRecoveryLine:
    "Actually, your bit is the important one here. What happened next?",
  chains: [
    {
      label: "Support → comment before question",
      sequence: "TC002 → TC003",
      example: [
        'Them: "We finally shipped it."',
        'You (support): "That\'s a real milestone."',
        'You (comment-before-question): "Shipping is the hard part. What nearly held it up?"',
      ],
    },
    {
      label: "Support → summary check",
      sequence: "TC002 → TC011",
      example: [
        "They vent about a tangled week.",
        'You (support): "That sounds like a lot at once."',
        "You (summary): \"So it's less the workload and more that no one's deciding. Have I got that right?\"",
      ],
    },
    {
      label: "Support → specific appreciation",
      sequence: "TC002 → TC018",
      example: [
        "They share a win.",
        'You (support): "What made it click?"',
        'You (appreciation): "The way you kept the client calm is the part I\'d not have managed."',
      ],
    },
    {
      label: "Support → echo plus question",
      sequence: "TC002 → TC030",
      example: [
        'Them: "It was fine, just weirdly tense."',
        'You (echo): "Weirdly tense..."',
        'You (question): "What made it tense?"',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC007",
      reason:
        "No one-upping discipline: TC007 stops you topping their story to win. TC002 is the wider habit of sequencing support before any self-reference, competitive or not.",
    },
    {
      id: "TC009",
      reason:
        "Anti-boomerasking discipline: TC009 stops fake questions asked only so you can talk about yourself. TC002 handles genuine, relevant self-disclosure by putting it second.",
    },
    {
      id: "TC016",
      reason:
        "Active-constructive responding: TC016 is the enthusiastic response to good news specifically. TC002 is broader and applies to any shared experience, good or bad.",
    },
    {
      id: "TC018",
      reason:
        "Specific appreciation: TC018 names the value in what they did. TC002 protects their floor before you shift the focus at all.",
    },
    {
      id: "TC003",
      reason:
        "Comment-before-question: TC003 warms a single question with a short comment. TC002 governs the larger order of support before self-reference.",
    },
    {
      id: "TC090",
      reason:
        "Do-not-fix-yet discipline: TC090 withholds solutions so the person feels heard. TC002 withholds your own story for the same reason.",
    },
  ],
};
