import type { CardData } from "../card-types";

export const TC078: CardData = {
  pdfUrl: "cards/TC078/TC078_TwoCard_Combined.pdf",
  resources: [
    {
      label: "Two-card (combined)",
      description:
        "Front and back study cards on one sheet: the designed visual card.",
      href: "cards/TC078/TC078_TwoCard_Combined.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "One-card summary",
      description: "The whole technique on a single designed card.",
      href: "cards/TC078/TC078_OneCard.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Quick card",
      description: "One-page glance card for fast recall.",
      href: "cards/TC078/TC078_Quick_Card.pdf",
      type: "pdf",
      group: "Visual Cards",
    },
    {
      label: "Detailed guide",
      description: "The full written guide with every section.",
      href: "cards/TC078/TC078_Detailed_Guide.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Reference sheet",
      description: "Dense one-page reference of the key moves.",
      href: "cards/TC078/TC078_Reference.pdf",
      type: "pdf",
      group: "Written Guides",
    },
    {
      label: "Phrase bank (CSV)",
      description: "Every phrase, ready to import or drill.",
      href: "cards/TC078/TC078_Phrase_Bank.csv",
      type: "csv",
      group: "Practice Tools",
    },
    {
      label: "Anki flashcards",
      description: "Import into Anki for spaced-repetition practice.",
      href: "cards/TC078/TC078_Anki_Flashcards.csv",
      type: "csv",
      group: "Practice Tools",
    },
  ],
  id: "TC078",
  whyItWorks:
    "A callback bridge returns to an earlier detail, feeling, unfinished thread, or promised topic after the conversation has moved on, using a short bridge that makes the return feel natural rather than abrupt. It usually has four parts: a light marker, the earlier thread, a reason for returning, and a small invitation. It works because it shows continuity. You did not merely hear a line, you held it in mind and cared enough to come back to it.",
  whatItIsNot: [
    "It is not a gotcha, trap, cross-examination, or proof that you were keeping score.",
    "It is not dragging someone back to a topic they clearly released.",
    "It is not forcing emotional disclosure because you noticed something interesting.",
    "It is not a memory trick performed to impress someone.",
    "It is not interrupting the current topic: a clean callback waits for a natural pause, transition, or permission point.",
  ],
  overview: {
    coreFormula: [
      "Callback marker + earlier thread + light reason + small invitation",
      "Can I go back to something you said earlier, X? I didn't want to lose that. What was behind it?",
      "You mentioned X before. That sounded important. Do you want to say more about it?",
      "Looping back to X for a second: what should I understand there?",
      "Before we move on, I want to return to X. Is that still worth unpacking?",
      "Short version: Quick callback to X. What did you mean by that?",
    ],
    minimumViableMove: "Can I come back to the part where you said X?",
    impact: "Low",
    difficulty: "Medium",
    misuse:
      "It fails when you return abruptly with no bridge, recite every earlier detail, or use the callback to corner, expose, sell, or score a point rather than to serve the other person's clarity.",
    bestFor: [
      "A meaningful detail was skipped because the conversation moved quickly.",
      "Someone mentioned a concern, value, plan, or feeling that deserves later attention.",
      "A meeting or group conversation left an important thread unresolved.",
      "A digital conversation has several points and one needs a clear return.",
      "You promised to come back to something and want to honour that promise.",
    ],
  },
  notFor: [
    "The person has clearly signalled that the topic is closed.",
    "The earlier point was sensitive and the relationship does not support returning to it.",
    "You would be using the callback to corner, expose, sell, pressure, or win an argument.",
    "The current topic is urgent and should not be displaced.",
    "You have already returned to several earlier points and the conversation feels over-managed.",
  ],
  phraseBank: [
    {
      id: "quick",
      label: "Quick callbacks",
      tag: "Short one-line returns",
      tone: "Quick",
      phrases: [
        "Quick callback to X. What did you mean by that?",
        "Can I come back to X for a second?",
        "Small thing, you mentioned X earlier.",
        "Before I forget, can we loop back to X?",
        "Can I go back to something you said earlier?",
        "Looping back to X. What was behind it?",
        "Circling back to X for a moment.",
        "One quick return: you said X.",
      ],
    },
    {
      id: "social-warm",
      label: "Social / personal",
      tag: "Warm returns to a personal thread",
      tone: "Warm",
      phrases: [
        "You said earlier the trip was a weird reset. Can I come back to that? Weird in what way?",
        "I keep thinking about the part where you said you almost quit. What changed?",
        "Before I forget, you mentioned your brother was involved in that. What role did he play?",
        "You mentioned it felt like a reset. I didn't want to lose that. What shifted?",
        "You said moving was harder than expected. What made it hard?",
        "Earlier you lit up when you talked about the course. Can we go back to that?",
        "I didn't want to lose the thread about the new place. How is it actually feeling?",
        "You said something earlier about starting over. I've been sitting with it. Say more?",
      ],
    },
    {
      id: "professional",
      label: "Meetings / decisions",
      tag: "Work returns to a skipped point",
      tone: "Professional",
      phrases: [
        "Can I loop back to the risk you named earlier? I don't want it to disappear under the timeline discussion.",
        "Earlier you mentioned adoption was uneven. What are you seeing there?",
        "Before we close, I want to return to the customer issue you raised. What's the cleanest next step?",
        "Can I go back to the concern you flagged at the start? It sounded unresolved.",
        "Looping back to the ownership point. What would good look like there?",
        "You said the timeline was tight earlier. Does that change what we decide here?",
        "Before we move on, can we return to the number you mentioned? I want to get it right.",
        "You raised a support risk earlier. Is now the moment, or should we park it?",
      ],
    },
    {
      id: "digital",
      label: "Digital / threaded",
      tag: "Clear written returns",
      tone: "Direct",
      phrases: [
        "Threading back to your point about onboarding. What was the main friction?",
        "Quick callback to your second point: I think that's the key one. What would make it easier?",
        "Callback to your earlier message, onboarding seems like the real bottleneck. Is that right?",
        "You mentioned unexpected pushback above. Want to unpack that, or leave it for later?",
        "Returning to your first point, since it's the one that affects the deadline.",
        "On the thread you started earlier about scope. What's the one thing to fix?",
        "Bringing your earlier question back up: what should I understand there?",
        "You flagged X a few messages ago. Still worth a proper answer?",
      ],
    },
    {
      id: "release",
      label: "Careful / release",
      tag: "Soft returns with an easy exit",
      tone: "Repair",
      phrases: [
        "No need to go there if it's not useful.",
        "Only if you want to. Can we return to X for a moment?",
        "We can leave this alone, but I noticed X came up earlier. Is that still part of the picture?",
        "Let me put that more lightly: is X still relevant, or should we leave it?",
        "Tell me if this isn't useful, but I didn't want to ignore what you said about X.",
        "I might be over-weighting this. Is the earlier point still live, or done?",
        "We can keep it light. I was just curious about the shift you mentioned.",
        "Happy to leave this for later. I only wanted to make sure it didn't get lost.",
      ],
    },
    {
      id: "sensitive-conflict",
      label: "Sensitive / conflict",
      tag: "Guarded or high-pressure returns",
      tone: "High-stakes",
      phrases: [
        "I want to be careful here. You mentioned X earlier. Is it useful to return to that, or should we stay with the current issue?",
        "There was one thread I don't want to ignore, but only if it's okay to revisit. You said X.",
        "Earlier you said the apology felt late. Is timing the part that still matters?",
        "You said the timing mattered more than the content. Is that still the key point?",
        "I don't want to reopen this to score a point, but the thing you named earlier still seems to matter.",
        "Only if it helps: you mentioned feeling ignored earlier. Do you want to say more, or leave it?",
        "Quick callback to X. Does that change the next step, or should we stay with the plan?",
        "I hear the current issue is urgent. Can I hold the earlier point for later rather than lose it?",
      ],
    },
  ],
  decisionTree: [
    {
      condition:
        "Someone mentioned an earlier detail, concern, value, emotion, or unanswered question that got skipped.",
      action:
        "If nothing was left hanging, stay with the current thread. Otherwise consider a callback.",
      phrase: "Can I come back to something you said earlier?",
    },
    {
      condition:
        "The current thread has reached a natural pause or transition.",
      action:
        "If it is still active, wait or bookmark it. Return only at a clean break.",
      phrase: "Before we move on, can I go back to X?",
    },
    {
      condition: "The earlier point is safe and appropriate to revisit.",
      action:
        "If it is sensitive or the relationship does not support it, release it.",
      phrase: "Only if it's useful. Is X still worth returning to?",
    },
    {
      condition:
        "Returning would serve their clarity or the shared task, not just your curiosity.",
      action: "If it mostly serves you, let it go.",
      phrase: "I didn't want that to get lost. What should I understand there?",
    },
    {
      condition: "You can phrase it as an invitation, not a summons.",
      action: "If it sounds like a demand, soften it or ask permission first.",
      phrase: "Can I loop back to X, or would you rather stay here?",
    },
    {
      condition: "They respond with more detail or warmth.",
      action:
        "Follow one step. If they answer briefly or hesitate, release. If they set a boundary, respect it immediately.",
      phrase: "No need to go there if it's not useful.",
    },
  ],
  ladder: [
    {
      weak: '"Anyway, you said you were angry before. Why?" Abrupt return, no bridge. Sounds like cross-examination.',
      better:
        '"Can I go back to what you said about being angry?" A soft marker, but still no reason or invitation.',
      best: '"Can I go back to what you said about being angry? I don\'t want to overdo it, but it sounded important. What part is still live for you?" Marker, thread, reason, invitation, and an easy exit.',
    },
    {
      weak: '"You never answered my question about the risk." Returns as an accusation and makes them feel caught out.',
      better:
        '"Can we come back to the risk point?" Clean, but bare and reasonless.',
      best: "\"Before we close, can I loop back to the risk you named? I didn't want it to vanish under the timeline. What's the cleanest next step?\" Acknowledges the present, returns with a reason, stays practical.",
    },
  ],
  scenarios: [
    {
      situation: "Social catch-up",
      move: "You said earlier that moving was harder than expected. What made it hard?",
      phrase: "Only if you want to go there. What made it hard?",
    },
    {
      situation: "Networking",
      move: "Looping back to your career-shift comment. What pulled you in that direction?",
      phrase:
        "We can keep it light, but I was curious about the shift you mentioned.",
    },
    {
      situation: "Team meeting",
      move: "Before we close, can we return to the support-risk point? It sounded unresolved.",
      phrase: "Is this the right moment to return to it, or should we park it?",
    },
    {
      situation: "Coaching",
      move: "You mentioned confidence at the start. I want to come back to that because it links to the goal.",
      phrase:
        "Tell me if this isn't useful, but I hear confidence underneath this.",
    },
    {
      situation: "Digital thread",
      move: "Callback to your second point: onboarding seems like the real bottleneck. Is that right?",
      phrase: "Could be wrong, but onboarding sounded like the live issue.",
    },
    {
      situation: "Conflict",
      move: "Earlier you said the apology felt late. Is timing the part that still matters?",
      phrase:
        "We don't need to unpack it now, but I don't want to ignore the timing point.",
    },
  ],
  calibration: {
    working: [
      "Their tone warms, speeds up, or becomes more specific.",
      'They say "yes", "actually", or "that\'s the thing".',
      "They connect the earlier thread to the current issue.",
      "They seem relieved the point was not lost.",
      "They add detail you had not asked for.",
      "They pick the thread back up themselves.",
    ],
    adjust: [
      "They answer briefly and do not expand.",
      "They seem surprised by the return.",
      "They look for why you are bringing it up.",
      "The callback pulls focus from a more urgent current issue.",
      'They say "not important", "leave that", or "not now".',
      "Their body language closes down.",
      "You realise the callback serves your agenda more than their clarity.",
      "You have already returned to several threads and it feels over-managed.",
    ],
  },
  drill: [
    {
      day: "Day 1",
      title: "Spot missed threads",
      task: "Read a transcript, email thread, or meeting note and mark three details that were mentioned and then passed over.",
    },
    {
      day: "Day 2",
      title: "Triage each one",
      task: "For the three threads, decide whether each deserves a callback, a bookmark for later, or no return at all.",
    },
    {
      day: "Day 3",
      title: "Build the bridge",
      task: "Write one callback for the strongest thread using the full pattern: marker + earlier thread + light reason + small invitation.",
    },
    {
      day: "Day 4",
      title: "Shift the tone",
      task: "Rewrite that same callback in four tones (social, professional, digital, and careful/sensitive) and read each aloud.",
    },
    {
      day: "Day 5",
      title: "Add the exit",
      task: "Add a release phrase to each version so the other person can always decline without friction.",
    },
    {
      day: "Day 6",
      title: "Score and fix",
      task: "Check each bridge against five points (marker present, thread named accurately, reason light, invitation small, release available) and repair any that miss one.",
    },
    {
      day: "Day 7",
      title: "One real rep",
      task: "In a real conversation, make exactly one callback bridge at a natural pause, then notice whether they expanded, corrected, deferred, or declined.",
    },
  ],
  checklist: [
    "What earlier thread did I return to, and did I name it accurately?",
    "Was the timing natural, or did I interrupt the current flow?",
    "Did I make the return feel optional rather than demanded?",
    "Did my reason sound helpful, or like I was keeping score?",
    "Did I release pressure the moment they hesitated or set a boundary?",
    "Did the callback serve connection, clarity, or the shared task, or just my curiosity?",
  ],
  example: {
    without: [
      'Them: "The project is fine now, but the first month was a mess. Anyway, the new dashboard is live."',
      'You: "Why was it a mess? Who caused that?"',
      'Them: "That\'s not really what I meant."',
      "Why it's weak: you pounce on the earlier word with no bridge and turn it into an investigation.",
      "There's no marker, no reason, and no way out. So it reads as blame rather than interest.",
    ],
    with: [
      'Them: "The project is fine now, but the first month was a mess. Anyway, the new dashboard is live."',
      'You: "The dashboard going live is good news. Before we move on, can I loop back to your first-month comment?"',
      'Them: "Sure."',
      'You: "I don\'t want to make a big thing of it, but unclear beginnings can repeat. What should we learn from it?"',
      "Them: \"That's exactly my worry. We didn't have a clear owner until week three.\"",
      'You: "That\'s worth fixing early next time. Thanks for going back to it."',
      "Why it works: you acknowledge the current topic, bridge back with a light reason, keep the question practical, and leave an easy exit.",
    ],
    note: "The poor version returns like a prosecutor. The advanced version returns like someone who was still listening.",
  },
  influencePayoff: {
    feeling:
      '"They actually remembered what I said, and it mattered enough to come back to."',
    principle:
      "People become more receptive when they feel their earlier signals were not discarded.",
    gains: [
      "Perceived attentiveness",
      "Trust",
      "Conversational depth",
      "Continuity: important points stop vanishing mid-conversation",
      "Dignity and autonomy: the person can re-enter, clarify, defer, or decline",
      "A reputation for tracking meaning over time, not just the last thing said",
    ],
    whyMostFail: [
      "They return abruptly, with no bridge, so it feels like being grabbed.",
      "They recite every earlier detail, which feels performative or surveillance-like.",
      "They reopen a topic the person deliberately closed.",
      "They use the callback to score a point instead of to serve clarity.",
    ],
  },
  fieldTip: {
    headline: "The best callback bridge sounds like care, not control.",
    body: "Use it once, at a pause, with a small invitation. If they pick the thread up, follow it one step. If they do not, let it go without a second attempt.",
    example: "Can I come back to X? I didn't want to lose that thread.",
    dont: "You never actually answered: earlier you said X.",
    do: "I didn't want to lose the X thread. Is it still worth a moment?",
  },
  method: [
    {
      step: "1",
      title: "Notice the missed thread",
      body: "Listen for a detail, concern, value, plan, contradiction, question, or emotion that was left hanging. Hold it in mind without breaking the current flow.",
    },
    {
      step: "2",
      title: "Wait for a transition",
      body: "Do not yank the conversation backward while the current point is still alive. Return at a pause, a topic change, or a natural break, or bookmark it until one arrives.",
    },
    {
      step: "3",
      title: "Signal the callback",
      body: "Use a short bridge so the return does not feel abrupt. The marker tells them you are stepping back on purpose, not interrupting.",
      examples: [
        {
          label: "Bridge",
          text: "Can I go back to something you said earlier?",
        },
        {
          label: "Bridge",
          text: "Before we move on, I want to return to one thing.",
        },
      ],
    },
    {
      step: "4",
      title: "Name the thread cleanly",
      body: "Use the person's own wording or a faithful paraphrase, so they recognise it instantly and do not feel misquoted or set up.",
      examples: [
        {
          label: "Their words",
          text: "You said the first week felt unusually intense.",
        },
        {
          label: "Faithful paraphrase",
          text: "You mentioned the start was harder than you expected.",
        },
      ],
    },
    {
      step: "5",
      title: "Give a light reason, then invite",
      body: "Say why it stuck, then ask one small question or offer an easy way to leave it. The reason should sound like care, not scorekeeping.",
      examples: [
        { label: "Reason", text: "I didn't want to lose that thread." },
        {
          label: "Invitation",
          text: "What was behind it, or would you rather leave it?",
        },
      ],
    },
    {
      step: "6",
      title: "Follow or release",
      body: 'If they re-engage, follow one step. If they hesitate or set a boundary, release the pressure immediately and stay with the current topic. Minimum viable move: "Can I come back to the part where you said X?"',
    },
  ],
  liveThreadClues: [
    '"anyway..." Someone skipping past their own point',
    '"but that\'s another story"',
    '"we can talk about that later"',
    '"I\'ll come back to that" that never got come back to',
    "a concern raised once, then buried under logistics",
    "a feeling word dropped in passing, then moved on from",
    "an unanswered question left hanging when the topic changed",
  ],
  commonMistakes: [
    {
      mistake: "No bridge: returning abruptly",
      soundsLike: "Anyway, why were you angry?",
      better:
        "Can I go back to the angry part for a second? It sounded important.",
    },
    {
      mistake: "Too much memory display",
      soundsLike: "You said three things earlier. First X, then Y, then Z...",
      better: "There was one thing I didn't want to lose: you mentioned X.",
    },
    {
      mistake: "Returning to a closed topic",
      soundsLike: "I know you moved on, but let's get back to it.",
      better: "Only if it's still useful. Is X worth a moment, or is it done?",
    },
    {
      mistake: "Using the callback as a trap",
      soundsLike: "Earlier you said X, but now you say Y.",
      better:
        "I want to understand, earlier X sounded key. How does it fit with this?",
    },
    {
      mistake: "Stacking callbacks",
      soundsLike: "And another thing you said... and also earlier...",
      better: "I'll pick just one: the X point. Can we return to that?",
    },
    {
      mistake: "Overclaiming importance",
      soundsLike: "Clearly this is the real issue.",
      better: "It sounded important, but I may be wrong. Is it?",
    },
    {
      mistake: "Ignoring the current thread",
      soundsLike: "jumping back before they've finished the point",
      better: "That makes sense, and before we move on, can I loop back to X?",
    },
  ],
  recoveryPhrases: [
    "No need to go there if it's not useful.",
    "I may have over-weighted that point. We can stay with the current topic.",
    "That came out more intense than I meant. I was trying to keep the thread from getting lost.",
    "Let me put that more lightly: is X still relevant, or should we leave it?",
    "Fair, we don't need to unpack that.",
    "Thanks for clarifying. I'll not force that thread.",
    "I realise I jumped back too suddenly. Please finish the point you were making.",
    "You're right. The current decision matters more. Let's stay here.",
  ],
  bestRecoveryLine:
    "I realise I jumped back too suddenly. Please finish the point you were making.",
  chains: [
    {
      label: "Rapport chain",
      sequence:
        "Warm opening → live-thread follow-up → callback bridge → specific appreciation",
      example: [
        "Good to see you.",
        "What has been the best part?",
        "You mentioned earlier it felt like a reset. I didn't want to lose that.",
        "I like how clearly you noticed what changed.",
      ],
    },
    {
      label: "Meeting chain",
      sequence:
        "Summary check → callback bridge → clean request → autonomy release",
      example: [
        "So we have two options.",
        "Can I loop back to the risk Priya named earlier?",
        "Could we assign one owner for that by Friday?",
        "If that's too soon, we can choose a lighter next step.",
      ],
    },
    {
      label: "Conflict chain",
      sequence:
        "Validate the concern → callback bridge → permission to disagree → recovery phrase",
      example: [
        "I can see why that felt ignored.",
        "Earlier you said the timing mattered more than the content.",
        "Can I offer a different read?",
        "I may be missing part of it. Correct me.",
      ],
    },
  ],
  relatedTechniques: [
    {
      id: "TC001",
      reason:
        "Live thread follow-ups catch the thread that is alive right now. The callback bridge returns to one that was missed earlier. If the cue is current, follow live. If it is earlier, bridge back.",
    },
    {
      id: "TC065",
      reason:
        "Conversation bookmarking marks a thread for later without opening it. The callback bridge is the promised return. Bookmark when the timing is wrong, callback when it is right.",
    },
    {
      id: "TC071",
      reason:
        "Conversation re-entry after interruption restores a speaker or topic that was cut off. The callback bridge returns to a point that simply drifted or was passed over. Interruption calls for re-entry. Drift calls for a callback.",
    },
    {
      id: "TC038",
      reason:
        "Conversation threading manages several threads across a whole conversation. The callback bridge cleanly re-opens just one. One return means bridge. Map-level management means thread.",
    },
    {
      id: "TC025",
      reason:
        "Exact word pickup reuses the person's precise word as the doorway. The callback bridge returns because of timing and meaning, even if you paraphrase. Wording as the cue means pickup. The return itself as the cue means bridge.",
    },
    {
      id: "TC041",
      reason:
        "Topic energy tracking is still testing where energy rises or drops. The callback bridge is used once you already know an earlier point mattered enough to revisit.",
    },
  ],
};
