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
    "Not leaving someone who is waiting on you without saying what happens next.",
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
      "At a natural pause, say you're heading off, appreciate one detail, then go.",
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
      "Ending a long call with a patient, client or family member when others are waiting.",
      "Closing a chat with a colleague during a busy shift.",
    ],
  },
  notFor: [
    "Someone is upset and needs you to stay.",
    "A serious conversation you haven't finished. Agree when to continue instead.",
    "You're responsible for a decision or task they're waiting on. Finish it, or hand over clearly first.",
    "They've just shared bad news. Stay with it before you go.",
    "A goodbye that deserves time, such as the end of a long working relationship.",
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
        "I'm going to keep moving. Thanks for the chat.",
        "I'd better get going. Lovely catching up.",
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
        "Thanks for sharing that. It's given me a lot to think about.",
        "I really enjoyed hearing how the project came together.",
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
        "Have you met Jo? You'd have lots to talk about.",
        "I'll leave you with Alex. He knows far more about this than I do.",
        "Let me introduce you to Lee before I head off.",
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
        "I need to get to my next appointment. I'll email you the details this afternoon.",
        "I'll let you get back to it. Thanks for your time today.",
        "I'm going to wrap up here so we both stay on time.",
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
        "I'm going to have to go, but I'll call you back tomorrow at ten.",
        "I'll let you get on with your evening. Thanks for ringing.",
        "I need to finish up, but I'm glad you called.",
      ],
    },
    {
      id: "care-settings",
      label: "Patients, clients and families",
      tag: "Closing kindly when others are waiting",
      tone: "Professional",
      phrases: [
        "I need to see someone else now. Before I go, is there anything we haven't covered that can't wait?",
        "I'm going to finish up here. Thanks for talking it through with me. The team know how to reach me.",
        "I have to head off, but I'll be back this afternoon. If you think of something, jot it down.",
        "Thanks for your patience today. I'll let you rest now.",
        "I'm going to wrap up our call there. You'll get the letter by Friday, and you can ring the main number if anything changes.",
      ],
    },
    {
      id: "in-writing",
      label: "Ending a thread",
      tag: "Messages and email",
      tone: "Quick",
      phrases: [
        "Thanks, that's everything I needed. Have a good weekend.",
        "Great, I'll leave it there for now. Talk next week.",
        "I'll sign off here. Thanks for the quick replies.",
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
    {
      condition: "Others are waiting for you",
      action:
        "Check nothing urgent is left, then close and say what happens next.",
      phrase:
        "Before I go, is there anything that can't wait until this afternoon?",
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
    {
      weak: '"Sorry, I really have to run." (already turning away)',
      better: '"I\'ve got to go, sorry."',
      best: '"I need to see someone else now. Thanks for telling me that. I\'ll be back after lunch."',
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
    {
      situation: "A long call with a family member when others are waiting",
      move: "Check for anything urgent, close warmly, give the next step.",
      phrase:
        "\"I'm going to wrap up our call there. Thanks for filling me in. I'll ring you tomorrow with the update.\"",
    },
    {
      situation: "A colleague chatting during a busy shift",
      move: "Kind and brief, with a later thread.",
      phrase:
        '"I\'d love to hear the rest. I need to get back to it now. Tell me at lunch?"',
    },
  ],
  calibration: {
    working: [
      "They smile and say goodbye easily.",
      "They take the thread you offered.",
      "You leave feeling good.",
      "They seem relieved too.",
      "Nobody is left unsure what happens next.",
      "They're happy to talk to you again.",
    ],
    adjust: [
      "They look hurt: you may have cut in too soon.",
      "They keep talking: repeat the close and move.",
      "You're lingering: say it and go.",
      "Your thread wasn't genuine: drop it next time.",
      "They start something new as you leave: name a later time.",
      "They look unsettled: check in before you go.",
      "You leave with open jobs from the chat: send a quick follow-up.",
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
    "Did they know what happens next?",
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
    note: "In the second version the exit comes at a pause, names something specific and offers a real follow-up, so both people leave on a good note.",
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
    "You keep glancing at the clock",
  ],
  depthDial: [
    {
      depth: "Light exit",
      useWhen: "a casual chat that has run its course",
      phrase: "Lovely to chat. I'll let you get on.",
    },
    {
      depth: "Warm exit",
      useWhen: "you want to leave a good last impression",
      phrase: "I've really enjoyed this. Good luck with the move.",
    },
    {
      depth: "Exit with a thread",
      useWhen: "you genuinely want to follow up",
      phrase: "Let's pick this up next week. I'll send you a time.",
    },
    {
      depth: "Firm repeat",
      useWhen: "they keep talking after your first close",
      phrase: "I really do need to go now. Take care.",
    },
    {
      depth: "Hold the exit",
      useWhen: "they seem upset or something important comes up",
      phrase:
        "Actually, that sounds important. I've got a few more minutes. Tell me.",
    },
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
    {
      mistake: "No next step",
      soundsLike: "Leaving a patient or client unsure when they'll hear back.",
      better: '"I\'ll ring you tomorrow with the update."',
    },
    {
      mistake: "Over-apologising",
      soundsLike: '"Sorry, sorry, I\'m so sorry, I have to go."',
      better: '"I need to head off. Thanks for this."',
    },
    {
      mistake: "Leaving when they need you",
      soundsLike: "Closing just after they've shared bad news.",
      better: "Stay a little longer, or set a time to come back.",
    },
  ],
  recoveryPhrases: [
    "Sorry, I cut you off. Finish your story, then I'll head off.",
    "That was abrupt of me. It really was great to chat.",
    "I said I'd message you. Here's that link.",
    "I left that a bit suddenly earlier. I'm sorry. I'd like to hear the rest.",
    "I said I'd call you back and didn't. I'm sorry. Is now a good time?",
    "I didn't tell you what happens next before I left. Here's the plan.",
    "I rushed off. Thanks for your patience. Is there anything you still need?",
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
    {
      label: "Summary check, then graceful exit",
      sequence: "Sum up what you agreed, then close.",
      example: [
        "\"So you'll send the form, and I'll ring on Friday. Is that right?\"",
        '"Great. I\'ll let you get on. Thanks for your time."',
      ],
    },
    {
      label: "Conversation bookmarking, then graceful exit",
      sequence: "Park the unfinished topic with a time, then go.",
      example: [
        '"I\'d love to hear more about that. Can we pick it up on Thursday?"',
        '"Lovely to see you. Talk then."',
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
    {
      id: "TC011",
      reason: "Sum up what you've agreed before you close.",
    },
    {
      id: "TC065",
      reason: "Park an unfinished topic with a time to come back to it.",
    },
    {
      id: "TC105",
      reason:
        "If the talk is heated rather than finished, take a break with a return time instead.",
    },
    {
      id: "TC010",
      reason:
        "Keep the last moment warm and unhurried, even when you're leaving.",
    },
  ],
};
