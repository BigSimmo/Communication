import type { CardData } from "../card-types";

export const TC108: CardData = {
  id: "TC108",
  resources: [
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC108/TC108_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC108/TC108_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC108/TC108_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC108/TC108_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC108/TC108_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  sources: [
    {
      label:
        "Mastroianni et al. (2021), Do conversations end when people want them to? PNAS",
      url: "https://www.pnas.org/doi/10.1073/pnas.2011809118",
    },
    {
      label: "Adam Mastroianni, research summary",
      url: "https://www.adammastroianni.com/research/2021/1/31/do-conversations-end-when-people-want-them-to",
    },
  ],
  whyItWorks:
    "Adam Mastroianni and colleagues (PNAS, 2021) found that conversations almost never end when both people want them to, and that people are poor at guessing when the other person wants to stop. So a kind, clear exit doesn't have to feel rude. It can be a relief for both of you. Ending on a warm, specific note (what you enjoyed, a reason to reconnect) leaves a good final impression, and saying you're going rather than drifting off avoids awkwardness.",
  whatItIsNot: [
    "Not ghosting or slowly turning away.",
    "Not a fake emergency.",
    "Not cutting someone off mid-story.",
    "Not a way to escape someone who needs help.",
  ],
  overview: {
    coreFormula: [
      "Wait for a natural pause, not mid-sentence.",
      'Signal the close: "I\'m going to head off..."',
      'Appreciate something specific: "...but I loved hearing about your trip."',
      'Leave a thread if you mean it: "Send me that recipe."',
      "Go. Don't linger.",
    ],
    minimumViableMove:
      "\"I've really enjoyed this. I'll let you get on, and I hope the move goes well.\"",
    impact: "Medium",
    difficulty: "Easy",
    misuse:
      'It turns insincere if the warm line is fake or the "let\'s catch up soon" is never meant.',
    bestFor: [
      "Parties and networking events.",
      "A neighbour chat that's running long.",
      "Phone calls you need to finish.",
      "Moving on to speak to someone else.",
      "Ending a date or catch-up on a high.",
    ],
  },
  notFor: [
    "Someone is upset and needs you to stay.",
    "A serious conversation you haven't finished. Agree when to continue instead.",
  ],
  phraseBank: [
    {
      id: "quick",
      label: "Quick exits",
      tag: "Warm and short",
      tone: "Quick",
      phrases: [
        "I'll let you get on. Great to see you.",
        "I'm going to grab a drink. Lovely to meet you.",
        "I need to head off, but this was fun.",
        "I'll let you go. Talk soon.",
      ],
    },
    {
      id: "specific",
      label: "Specific appreciation",
      tag: "End on a real detail",
      tone: "Warm",
      phrases: [
        "I loved hearing about your trip. Good luck with the move.",
        "Thanks for the restaurant tip. I'll let you know how it goes.",
        "That story about your dog made my night.",
        "It was great to finally meet you after all those emails.",
      ],
    },
    {
      id: "introduce",
      label: "Hand over",
      tag: "Leave them in good company",
      tone: "Warm",
      phrases: [
        "Have you met Sam? You two should talk about cycling.",
        "I'll introduce you to Priya before I go. She's in your industry.",
      ],
    },
    {
      id: "work",
      label: "Events and work",
      tag: "Professional close",
      tone: "Professional",
      phrases: [
        "I won't keep you. Shall I send you that link tomorrow?",
        "I want to say hi to a few people, but let's connect next week.",
        "I've got to jump on another call. Thanks, this was really useful.",
      ],
    },
    {
      id: "phone",
      label: "Calls and messages",
      tag: "Ending remotely",
      tone: "Quick",
      phrases: [
        "I'll let you go. Thanks for calling.",
        "I need to run, but it was so good to hear your voice.",
        "Let's pick this up on the weekend. Talk then.",
      ],
    },
  ],
  decisionTree: [
    {
      condition: "They're mid-story",
      action: "Wait for the end, then close.",
      phrase: "That's brilliant. I'm going to head off, but I loved that.",
    },
    {
      condition: "You want to stay in touch",
      action: "Leave a real thread.",
      phrase: "Let's grab coffee. I'll message you.",
    },
    {
      condition: "You don't want to stay in touch",
      action: "Close warmly without a fake promise.",
      phrase: "Lovely to meet you. Enjoy the rest of the night.",
    },
    {
      condition: "They keep talking",
      action: "Repeat the close kindly and move.",
      phrase: "I really do need to go. Take care.",
    },
    {
      condition: "They seem upset",
      action: "Stay or check in before you go.",
      phrase: "Before I go, are you okay?",
    },
  ],
  ladder: [
    {
      weak: "(Edging away mid-sentence)",
      better: '"Anyway, I\'d better go."',
      best: "\"I've really enjoyed this. I'll let you get on, and good luck with the interview.\"",
    },
    {
      weak: "\"Oh, I think someone's calling me.\" (they aren't)",
      better: '"I need to go."',
      best: '"I\'m going to say hi to a few people. Lovely to meet you."',
    },
    {
      weak: '"Let\'s catch up soon!" (never meant)',
      better: '"See you around."',
      best: '"Great to see you. Enjoy the rest of the night."',
    },
  ],
  scenarios: [
    {
      situation: "Networking event",
      move: "Specific appreciation and a thread.",
      phrase: '"I loved your take on hiring. Can I send you that article?"',
    },
    {
      situation: "Neighbour chat",
      move: "Warm and brief.",
      phrase: "\"I'll let you get back to the garden. It's looking great.\"",
    },
    {
      situation: "Long phone call",
      move: "Clear, kind close.",
      phrase: '"I need to get dinner on, but this was lovely. Talk Sunday?"',
    },
    {
      situation: "End of a date",
      move: "Leave on a high.",
      phrase: "\"I've had a really good time. I'd like to do this again.\"",
    },
  ],
  calibration: {
    working: [
      "They smile and say goodbye easily.",
      "They take the thread you offered.",
      "You leave feeling good.",
      "They seem relieved too.",
    ],
    adjust: [
      "They look hurt: you may have cut in too soon.",
      "They keep talking: repeat the close and move.",
      "You're lingering: say it and go.",
      "Your thread wasn't genuine: drop it next time.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Notice endings",
      task: "Watch how three conversations end today. Who ended them, and how?",
    },
    {
      day: "Day 2",
      title: "Write your line",
      task: "Write two exit lines that sound like you.",
    },
    {
      day: "Day 3",
      title: "Add a specific",
      task: "For each, add one specific detail you could appreciate.",
    },
    {
      day: "Day 4",
      title: "Practise on the phone",
      task: "End one phone call warmly and clearly.",
    },
    {
      day: "Day 5",
      title: "Use it at an event",
      task: "Leave one conversation on purpose, kindly.",
    },
    {
      day: "Day 6",
      title: "Hand over",
      task: "Introduce someone to another person before you move on.",
    },
    {
      day: "Day 7",
      title: "Review",
      task: "Did you leave on a high? Did you linger?",
    },
  ],
  checklist: [
    "Did I wait for a pause?",
    "Did I say I was going, clearly?",
    "Did I appreciate something specific?",
    "Was any follow-up genuine?",
    "Did I actually leave?",
  ],
  example: {
    without: [
      "A: ...and that's why I switched teams.",
      "B: Uh huh. (Looks around the room.)",
      "A: Sorry, am I keeping you?",
      "B: No, no. (Stays for another awkward ten minutes.)",
    ],
    with: [
      "A: ...and that's why I switched teams.",
      "B: That sounds like a great move. I'm going to grab some food, but I loved hearing about it.",
      "A: Thanks, good to meet you.",
      "B: You too. I'll send you that podcast.",
    ],
  },
  influencePayoff: {
    feeling: '"That was a nice chat, and they left on a high."',
    principle:
      "Most conversations end at the wrong time for someone. A warm, clear exit respects both people's time and leaves a good last impression.",
    gains: [
      "Less awkwardness at events.",
      "People remember you warmly.",
      "You meet more people.",
      "No fake excuses needed.",
    ],
    whyMostFail: [
      "They drift away without saying anything.",
      "They invent excuses.",
      "They promise follow-ups they don't mean.",
      "They wait for the other person to end it.",
    ],
  },
  fieldTip: {
    headline: "Warm, specific, gone.",
    body: "Research suggests the other person is often as ready to stop as you are, but neither of you knows it. Wait for a pause, say one specific nice thing, and go.",
    example: '"I loved hearing about the trip. I\'ll let you get on."',
    dont: "Glancing at your phone and edging away.",
    do: '"I\'m going to head off, but it was great to meet you."',
  },
  method: [
    {
      step: "1",
      title: "Wait for a pause",
      body: "Let them finish their thought.",
    },
    {
      step: "2",
      title: "Signal the close",
      body: "Say you're going, kindly and clearly.",
      examples: [
        {
          label: "Say",
          text: '"I\'m going to head off."',
        },
        {
          label: "Avoid",
          text: "Slowly backing away mid-sentence.",
        },
      ],
    },
    {
      step: "3",
      title: "Appreciate something specific",
      body: "Name a detail from the chat.",
    },
    {
      step: "4",
      title: "Leave a thread if you mean it",
      body: "A link, a coffee, an introduction.",
    },
    {
      step: "5",
      title: "Go",
      body: "Leave within a few seconds of saying it.",
    },
  ],
  liveThreadClues: [
    "The topic has run out",
    "You're both looking around",
    "Long pauses",
    "You need to be somewhere",
    "Someone else is waiting to talk to them",
  ],
  commonMistakes: [
    {
      mistake: "The fade",
      soundsLike: "Edging away silently.",
      better: '"I\'ll let you get on. Lovely chat."',
    },
    {
      mistake: "The fake excuse",
      soundsLike: '"My friend\'s waving at me."',
      better: '"I want to say hi to a few people."',
    },
    {
      mistake: "The empty promise",
      soundsLike: '"Let\'s catch up soon!"',
      better: "Only offer a follow-up you'll do.",
    },
    {
      mistake: "The long goodbye",
      soundsLike: "Saying bye, then staying ten minutes.",
      better: "Say it, then go.",
    },
  ],
  recoveryPhrases: [
    "Sorry, I cut you off. Finish your story, then I'll head off.",
    "That was abrupt of me. It really was great to chat.",
    "I said I'd message you. Here's that link.",
  ],
  bestRecoveryLine:
    "Sorry, I cut you off. Finish your story, then I'll head off.",
  chains: [
    {
      label: "Graceful exit, then introduction",
      sequence: "Hand them to someone before you leave.",
      example: [
        '"Have you met Sam?"',
        '"I\'ll leave you two to it. Great to meet you."',
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC016",
      reason: "Respond warmly to their good news before you head off.",
    },
    {
      id: "TC107",
      reason: "With pushy people, fog and exit politely.",
    },
  ],
};
