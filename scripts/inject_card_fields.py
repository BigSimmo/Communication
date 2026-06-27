"""
Injects whyItWorks, example, and notFor fields into each TC card in cards.ts.
Splits the file by card markers, finds the last '],\n  },' in each card's
section, and inserts the new fields before the closing bracket.
"""
import re, sys

NEW_FIELDS = {
  "TC001": (
    '    whyItWorks: "When someone\'s position is acknowledged first, the brain\'s threat response lowers '
    '— they stop defending and start listening. Naming what is valid earns you permission to disagree.",\n'
    '    example: {\n'
    '      without: [\n'
    '        "Colleague: Plan A is the only sensible option.",\n'
    '        "You: I don\'t think so — Plan B has better ROI.",\n'
    '        "Colleague: (digs in, argues harder)",\n'
    '      ],\n'
    '      with: [\n'
    '        "Colleague: Plan A is the only sensible option.",\n'
    '        "You: You are right that speed is the priority here — Plan A does move fastest. And the ROI data for Plan B is worth one look before we lock in.",\n'
    '        "Colleague: Fair — what does the data show?",\n'
    '      ],\n'
    '    },\n'
    '    notFor: [\n'
    '      "When there is nothing genuinely true to agree with — forced agreement sounds manipulative and damages trust more than honest disagreement.",\n'
    '      "In time-critical emergencies where direct commands are needed immediately.",\n'
    '      "When the other person is acting in bad faith and may exploit any concession you offer.",\n'
    '    ],'
  ),

  "TC002": (
    '    whyItWorks: "Memory is the currency of care — when you remember specific things someone told you, '
    'they feel uniquely seen rather than interchangeable. This builds disproportionate trust relative to the effort.",\n'
    '    example: {\n'
    '      without: [\n'
    '        "You: Hey, how are things?",\n'
    '        "Colleague: Fine, busy.",\n'
    '        "You: Yeah, same.",\n'
    '      ],\n'
    '      with: [\n'
    '        "You: Last time we spoke you mentioned the merger review was coming up — how did it land?",\n'
    '        "Colleague: Oh, you remembered that. It actually went really well.",\n'
    '        "You: I\'m glad — I had been curious.",\n'
    '      ],\n'
    '    },\n'
    '    notFor: [\n'
    '      "When referencing something the person has clearly moved on from or would rather forget.",\n'
    '      "When you do not genuinely remember — do not fake specificity, it will be detected.",\n'
    '      "When the reference could feel like surveillance or scorekeeping rather than genuine care.",\n'
    '    ],'
  ),

  "TC003": (
    '    whyItWorks: "People\'s working memory is limited — burying the point forces them to hold context while searching for meaning. '
    'Leading with the conclusion lets them allocate attention correctly and process supporting detail more efficiently.",\n'
    '    example: {\n'
    '      without: [\n'
    '        "You: So we looked at the data, considered three options, ran the projections...",\n'
    '        "(3 minutes later) ...and I think Option B is probably the best approach.",\n'
    '        "Manager: So what\'s the actual ask?",\n'
    '      ],\n'
    '      with: [\n'
    '        "You: My recommendation is Option B. The main reason is lower risk. Want the detail?",\n'
    '        "Manager: Yes — walk me through it.",\n'
    '      ],\n'
    '    },\n'
    '    notFor: [\n'
    '      "When delivering bad news that requires emotional preparation before the conclusion.",\n'
    '      "In high-stakes persuasion where building context first changes how the audience receives your point.",\n'
    '      "When the audience genuinely needs background to evaluate the bottom line — give the bottom line, then immediately offer the context.",\n'
    '    ],'
  ),

  "TC004": (
    '    whyItWorks: "Unacknowledged ruptures become permanent walls — the longer friction goes unnamed, the more interpretation fills the silence. '
    'A repair opening prevents the other person from concluding you do not care.",\n'
    '    example: {\n'
    '      without: [\n'
    '        "(Continuing to work normally after a tense meeting, avoiding eye contact)",\n'
    '        "(Colleague interprets the silence as confirmation that you are dismissive or indifferent)",\n'
    '      ],\n'
    '      with: [\n'
    '        "You: I\'ve been thinking about Tuesday — I don\'t think that went how either of us wanted. I\'d like to come back to it when you have a moment.",\n'
    '        "Colleague: Yeah — I\'m glad you said something.",\n'
    '      ],\n'
    '    },\n'
    '    notFor: [\n'
    '      "When the other person needs space and is not ready to engage — forcing a repair can inflame.",\n'
    '      "When you have no genuine ownership to take — empty apologies make ruptures worse.",\n'
    '      "When the friction was minor and naming it formally elevates it unnecessarily.",\n'
    '    ],'
  ),

  "TC005": (
    '    whyItWorks: "Ambiguous requests create ambiguous responses — when people do not know exactly what is needed, '
    'they either do nothing or do the wrong thing. A clean request removes interpretation and makes it easy to say yes.",\n'
    '    example: {\n'
    '      without: [\n'
    '        "You: It would be great if someone could kind of look at this when they get a chance.",\n'
    '        "(Three days pass with no response.)",\n'
    '      ],\n'
    '      with: [\n'
    '        "You: Can you review section 2 of this doc and give me your feedback by Thursday? Thirty minutes should be enough.",\n'
    '        "Colleague: Sure — I\'ll have it to you Wednesday.",\n'
    '      ],\n'
    '    },\n'
    '    notFor: [\n'
    '      "When the relationship is such that a formal request would feel clinical or cold.",\n'
    '      "In brainstorming contexts where you want open-ended input rather than a specific deliverable.",\n'
    '      "When you genuinely do not know what you need — clarify that first, then make the request.",\n'
    '    ],'
  ),

  "TC006": (
    '    whyItWorks: "Generic praise is so common it no longer registers — specificity signals actual attention. '
    'When you name the exact behaviour you noticed, the person knows the compliment is real and it reinforces precisely what you want to see more of.",\n'
    '    example: {\n'
    '      without: [\n'
    '        "You: Great job on that presentation!",\n'
    '        "Colleague: Thanks. (Uncertain what they did well, compliment fades quickly)",\n'
    '      ],\n'
    '      with: [\n'
    '        "You: The way you handled the pushback on slide 7 — staying calm and going straight to the data — that was exactly the right move.",\n'
    '        "Colleague: That moment was harder than it looked. Thank you for noticing.",\n'
    '      ],\n'
    '    },\n'
    '    notFor: [\n'
    '      "When you are fishing for a reciprocal compliment — the motive will be sensed.",\n'
    '      "In formal performance reviews where specific praise can inadvertently exclude other positive qualities.",\n'
    '      "When the compliment is about something outside the person\'s control rather than their choices or skill.",\n'
    '    ],'
  ),

  "TC007": (
    '    whyItWorks: "Contempt — expressed through eye-rolls, dismissive tone, or sarcastic framing — activates the deepest threat response '
    'and permanently damages credibility. Separating your disagreement from any signal of disrespect keeps the conversation about ideas rather than status.",\n'
    '    example: {\n'
    '      without: [\n'
    '        "You: (sighing) That would never work — I can\'t believe we\'re still discussing this.",\n'
    '        "Colleague: (shuts down, stops contributing to the meeting)",\n'
    '      ],\n'
    '      with: [\n'
    '        "You: I see it differently — I think there\'s a real risk this approach misses. Can I show you what the data suggests?",\n'
    '        "Colleague: Sure — show me.",\n'
    '      ],\n'
    '    },\n'
    '    notFor: [\n'
    '      "When the other person\'s position is genuinely harmful and requires sharp, unambiguous challenge — softness can imply tacit endorsement.",\n'
    '      "In high-stakes negotiations where tactical firmness is operationally necessary.",\n'
    '      "When you have already tried respectful disagreement repeatedly and the priority is clarity over tone.",\n'
    '    ],'
  ),

  "TC008": (
    '    whyItWorks: "Over-explanation signals anxiety or low confidence in your position — it invites challenge by demonstrating uncertainty. '
    'Saying what you mean and stopping signals that you believe it, which paradoxically makes others more receptive.",\n'
    '    example: {\n'
    '      without: [\n'
    '        "You: I was thinking we could maybe try this approach — though obviously there are other ways and I\'m not sure it\'s right and you might know better, but potentially...",\n'
    '        "Manager: (interrupts) So what are you actually recommending?",\n'
    '      ],\n'
    '      with: [\n'
    '        "You: I\'d go with Option A. The main reason is cost. Happy to explain more if useful.",\n'
    '        "Manager: That\'s clear — let\'s go with it.",\n'
    '      ],\n'
    '    },\n'
    '    notFor: [\n'
    '      "When the audience genuinely needs context to evaluate your position — brevity without context can feel dismissive.",\n'
    '      "In teaching situations where the explanation is the entire value.",\n'
    '      "When legal, medical, or safety contexts require thorough disclosure regardless of length.",\n'
    '    ],'
  ),

  "TC009": (
    '    whyItWorks: "Comprehension illusions are common — people nod along without forming a coherent understanding. '
    'Paraphrasing back forces active processing and catches misalignment before it becomes a costly mistake downstream.",\n'
    '    example: {\n'
    '      without: [\n'
    '        "Manager: (30-minute brief) Any questions?",\n'
    '        "You: No, I think I\'ve got it.",\n'
    '        "(You implement the wrong version of the plan.)",\n'
    '      ],\n'
    '      with: [\n'
    '        "You: Let me check I have this right — the priority is Q3 launch, not feature completeness, and you want a weekly Friday update. Is that the key shape?",\n'
    '        "Manager: Exactly — and the Friday update can be just three bullets.",\n'
    '      ],\n'
    '    },\n'
    '    notFor: [\n'
    '      "In casual conversations where paraphrasing would feel clinical or overly formal.",\n'
    '      "When you genuinely understood and a summary check would waste the other person\'s time.",\n'
    '      "In some cultures and relationships where it signals distrust or condescension.",\n'
    '    ],'
  ),

  "TC010": (
    '    whyItWorks: "Questions put people in the role of expert about their own experience — this is intrinsically motivating. '
    'A genuine curiosity question shifts the dynamic from you performing to them contributing, which deepens both rapport and your actual understanding.",\n'
    '    example: {\n'
    '      without: [\n'
    '        "(You share your own view at length for several minutes)",\n'
    '        "(The other person politely waits, contributes little, leaves feeling talked at)",\n'
    '      ],\n'
    '      with: [\n'
    '        "You: What made you decide to take that approach rather than the alternative?",\n'
    '        "Colleague: Honestly, it was a gut call — but here\'s the reasoning behind it.",\n'
    '        "(Conversation opens up; you learn something you would not have otherwise known)",\n'
    '      ],\n'
    '    },\n'
    '    notFor: [\n'
    '      "When the other person has clearly signalled they do not want to discuss the topic further.",\n'
    '      "In time-pressured situations where questions derail rather than deepen.",\n'
    '      "When used to gather information while performing interest — the inauthenticity will eventually surface.",\n'
    '    ],'
  ),

  "TC011": (
    '    whyItWorks: "Unstructured communication forces the listener to organise your thoughts for you — a cognitive tax that creates frustration. '
    'PREP (Point, Reason, Evidence, Point) provides a complete logical arc that is easy to follow and easy to act on.",\n'
    '    example: {\n'
    '      without: [\n'
    '        "You: Well, there\'s a lot to consider. The market is shifting and there\'s competing data and I think on balance, maybe, if conditions hold...",\n'
    '        "Manager: What are you actually recommending?",\n'
    '      ],\n'
    '      with: [\n'
    '        "You: My view is we should delay the launch. The main reason is market timing — Q3 data shows a 20% drop in category engagement. I\'d recommend waiting until Q1.",\n'
    '        "Manager: Good, agreed. Let\'s set a Q1 target.",\n'
    '      ],\n'
    '    },\n'
    '    notFor: [\n'
    '      "In deeply emotional conversations where structure feels cold and clinical.",\n'
    '      "In creative or brainstorming sessions where open-ended flow is more valuable than structured argument.",\n'
    '      "When the relationship and context call for natural conversation rather than presentation mode.",\n'
    '    ],'
  ),

  "TC012": (
    '    whyItWorks: "Boundaries stated as personal needs rather than accusations remove the audience\'s need to defend themselves. '
    'They can hear the boundary as information rather than as an attack on their character.",\n'
    '    example: {\n'
    '      without: [\n'
    '        "You: You always dump extra work on me at the last minute — it\'s really inconsiderate.",\n'
    '        "Colleague: (defensive) I didn\'t mean to, I just assumed you could handle it.",\n'
    '      ],\n'
    '      with: [\n'
    '        "You: When last-minute requests come in on Fridays, I can\'t give them the quality they need. I need 48 hours to do good work. Can we flag things earlier in the week?",\n'
    '        "Colleague: That\'s fair — I\'ll try to get things to you by Wednesday.",\n'
    '      ],\n'
    '    },\n'
    '    notFor: [\n'
    '      "When the behaviour is so serious that a firm objection — not a politely framed boundary — is the right response.",\n'
    '      "In safety-critical situations requiring immediate compliance rather than a collaborative conversation.",\n'
    '      "In significant power imbalances where a boundary will be ignored or punished — escalation through other channels may be needed.",\n'
    '    ],'
  ),

  "TC013": (
    '    whyItWorks: "Effort is often invisible to the people who benefit from it — when you name what you see, you close the recognition gap. '
    'This activates intrinsic motivation more reliably than outcome-based praise alone.",\n'
    '    example: {\n'
    '      without: [\n'
    '        "Team member: (submits thorough, time-intensive analysis)",\n'
    '        "You: Thanks. Can you add one more section?",\n'
    '        "(Team member quietly deflated; effort went unnoticed)",\n'
    '      ],\n'
    '      with: [\n'
    '        "You: Before I ask for the addition — the depth of this analysis is clear. I can see the hours that went into it.",\n'
    '        "Team member: Thank you. That means a lot. What\'s the additional section?",\n'
    '      ],\n'
    '    },\n'
    '    notFor: [\n'
    '      "When the effort was poor and naming it implies the outcome is acceptable.",\n'
    '      "When managing underperformance — naming effort can inadvertently reward the wrong behaviour.",\n'
    '      "When your acknowledgment would be read as performative because no real follow-through is planned.",\n'
    '    ],'
  ),

  "TC014": (
    '    whyItWorks: "People escalate or repeat themselves when they feel unheard — validation lowers this pressure. '
    'When someone knows their concern has been received, they become open to problem-solving rather than stuck on needing to be understood.",\n'
    '    example: {\n'
    '      without: [\n'
    '        "Employee: I\'m really worried about the deadline.",\n'
    '        "You: The deadline is fine — it\'s under control.",\n'
    '        "(Employee remains anxious and raises it again the next day)",\n'
    '      ],\n'
    '      with: [\n'
    '        "You: That concern makes complete sense — this is a tight timeline and I\'m taking it seriously. Here\'s where we stand and what I\'m watching.",\n'
    '        "Employee: Knowing you\'re tracking it helps.",\n'
    '      ],\n'
    '    },\n'
    '    notFor: [\n'
    '      "When the concern is unfounded and validating it would reinforce a false belief.",\n'
    '      "In situations requiring urgent action where pausing to validate delays a critical response.",\n'
    '      "When someone is using the concern manipulatively to avoid accountability.",\n'
    '    ],'
  ),

  "TC015": (
    '    whyItWorks: "Conversations without a defined next step decay into good intentions — the next step is the only thing that survives the meeting. '
    'Naming it while momentum exists converts alignment into commitment.",\n'
    '    example: {\n'
    '      without: [\n'
    '        "You: Great discussion — let\'s pick this up soon.",\n'
    '        "Colleague: Absolutely.",\n'
    '        "(Three weeks pass with no follow-up from either side)",\n'
    '      ],\n'
    '      with: [\n'
    '        "You: Let\'s capture the next step before we close — you\'ll send the draft by Friday and I\'ll review by Monday. Does that work?",\n'
    '        "Colleague: Yes — I\'ll get it to you Friday.",\n'
    '      ],\n'
    '    },\n'
    '    notFor: [\n'
    '      "In open exploratory conversations where closing too early cuts off valuable thinking.",\n'
    '      "When the next step is not yet clear — forcing one prematurely creates false closure.",\n'
    '      "In relationships where over-formalising the dynamic damages it (some close partnerships, personal relationships).",\n'
    '    ],'
  ),

  "TC016": (
    '    whyItWorks: "People conflate being understood with being agreed with — but they are separate. '
    'Showing someone you have genuinely heard their position reduces defensiveness, even before you express a different view.",\n'
    '    example: {\n'
    '      without: [\n'
    '        "Colleague: I think we need to completely restructure the team.",\n'
    '        "You: No — that\'s way too drastic.",\n'
    '        "Colleague: (digs in harder, feels dismissed)",\n'
    '      ],\n'
    '      with: [\n'
    '        "You: I hear why you\'re at that point — the current structure has made things harder than they should be. I want to understand more before I react. Can you walk me through what\'s breaking?",\n'
    '        "Colleague: Yes — here\'s what\'s been happening.",\n'
    '      ],\n'
    '    },\n'
    '    notFor: [\n'
    '      "When validation is impossible to offer genuinely — offering it dishonestly will be detected.",\n'
    '      "When urgency means you need to express your view immediately and pausing to validate would delay a critical decision.",\n'
    '      "When the person\'s position is based on factual errors that your validation might inadvertently reinforce.",\n'
    '    ],'
  ),

  "TC017": (
    '    whyItWorks: "In group settings, expressing agreement first establishes you as collaborative rather than contrarian — this earns more credibility when your disagreement lands. '
    'Group dynamics are more sensitive to tone than a one-on-one exchange.",\n'
    '    example: {\n'
    '      without: [\n'
    '        "You: (in team meeting) I don\'t think this approach works at all.",\n'
    '        "(Room goes quiet; energy drops; people become guarded)",\n'
    '      ],\n'
    '      with: [\n'
    '        "You: The goal here is exactly right — we need faster delivery. I want to offer a different route to get there.",\n'
    '        "Team: OK — what are you thinking?",\n'
    '      ],\n'
    '    },\n'
    '    notFor: [\n'
    '      "When a harmful or unethical direction requires speed of objection over tone.",\n'
    '      "When you have already agreed in principle and additional agreement feels performative.",\n'
    '      "In one-on-one contexts where the group dynamic element is absent — consider TC001 instead.",\n'
    '    ],'
  ),

  "TC018": (
    '    whyItWorks: "Length is a signal of uncertainty — people who are confident in their position say it and stop. '
    'Unnecessary words force the listener to filter for the point, which creates cognitive friction and implies you do not know what your point is.",\n'
    '    example: {\n'
    '      without: [\n'
    '        "You: (3-minute explanation) ...and so essentially the answer would probably be to go with the first option, if that makes sense.",\n'
    '        "Manager: So just Option A?",\n'
    '        "You: Yes.",\n'
    '      ],\n'
    '      with: [\n'
    '        "You: Option A. Faster and lower risk. Happy to go deeper if needed.",\n'
    '        "Manager: That\'s all I need.",\n'
    '      ],\n'
    '    },\n'
    '    notFor: [\n'
    '      "In relationship-building contexts where brevity reads as cold or dismissive.",\n'
    '      "When explaining complex technical topics to non-experts — completeness matters more than brevity.",\n'
    '      "In emotional conversations where being concise can feel uncaring.",\n'
    '    ],'
  ),

  "TC019": (
    '    whyItWorks: "People are more committed to decisions they feel they made themselves — autonomy is a core psychological need. '
    'Releasing autonomy explicitly removes the resistance that comes from feeling told what to do.",\n'
    '    example: {\n'
    '      without: [\n'
    '        "You: You really need to deal with the situation with Marcus soon.",\n'
    '        "Colleague: (nods, feels defensive, does nothing)",\n'
    '      ],\n'
    '      with: [\n'
    '        "You: I\'ve shared what I see. What you do with it is entirely your call — you know the situation better than I do.",\n'
    '        "Colleague: No, you\'re right — I\'ll talk to him this week.",\n'
    '      ],\n'
    '    },\n'
    '    notFor: [\n'
    '      "In situations requiring a directive decision — releasing autonomy when a clear call is needed causes confusion.",\n'
    '      "When the other person genuinely wants and needs your recommendation rather than options.",\n'
    '      "In emergency or safety situations where autonomy is not operationally appropriate.",\n'
    '    ],'
  ),

  "TC020": (
    '    whyItWorks: "Pretending certainty when genuine unknowns exist destroys credibility when the truth emerges — and it always emerges. '
    'Naming your uncertainty explicitly builds trust by signalling intellectual honesty, which makes your certainties more believable.",\n'
    '    example: {\n'
    '      without: [\n'
    '        "Stakeholder: What\'s the delivery date?",\n'
    '        "You: (guessing) March.",\n'
    '        "(In February, you have to revise to May. Trust is damaged.)",\n'
    '      ],\n'
    '      with: [\n'
    '        "You: I don\'t have a reliable number yet — my rough estimate is Q1 but there are two dependencies I haven\'t resolved. I can give you a firm date by Thursday.",\n'
    '        "Stakeholder: Thursday works.",\n'
    '      ],\n'
    '    },\n'
    '    notFor: [\n'
    '      "When the audience needs a definitive answer to proceed and further uncertainty will paralyse decision-making.",\n'
    '      "In contexts where expressing uncertainty is read as incompetence — some cultures and hierarchies require stated confidence.",\n'
    '      "When you actually are certain — false modesty obscures clear information.",\n'
    '    ],'
  ),

  "TC021": (
    '    whyItWorks: "People resist change when it feels like loss — reframing what is at stake shifts the mental model from threat to opportunity. '
    'The same information received through a different lens triggers different decisions.",\n'
    '    example: {\n'
    '      without: [\n'
    '        "You: We need to adopt this new system or we\'ll fall behind.",\n'
    '        "Colleague: (resistant) We\'re managing fine as we are.",\n'
    '      ],\n'
    '      with: [\n'
    '        "You: The question isn\'t whether to change — it\'s whether we lead the change or react to it. This system lets us lead.",\n'
    '        "Colleague: That framing changes how I\'m seeing it.",\n'
    '      ],\n'
    '    },\n'
    '    notFor: [\n'
    '      "When the reframe is dishonest and the actual stakes are as difficult as they appear — manipulation erodes long-term trust.",\n'
    '      "When the audience has already processed the full picture and reframing feels like spin.",\n'
    '      "In situations requiring direct accountability — reframing can deflect necessary ownership.",\n'
    '    ],'
  ),

  "TC022": (
    '    whyItWorks: "Conversations that overstay their welcome lose the goodwill built earlier — ending well preserves the quality of the interaction at its peak. '
    'People remember endings disproportionately, so a graceful exit improves how the whole exchange is recalled.",\n'
    '    example: {\n'
    '      without: [\n'
    '        "(Conversation has naturally concluded but no one ends it)",\n'
    '        "(It drags for ten more awkward minutes)",\n'
    '        "(Both parties leave feeling slightly depleted rather than energised)",\n'
    '      ],\n'
    '      with: [\n'
    '        "You: This has been really useful — I want to be respectful of your time. Let me know if there\'s a next step I should own.",\n'
    '        "Other: Will do — good conversation.",\n'
    '      ],\n'
    '    },\n'
    '    notFor: [\n'
    '      "When the other person is in distress and leaving would feel like abandonment.",\n'
    '      "When there is unfinished critical business that genuinely needs resolution before the conversation closes.",\n'
    '      "When your exit will be read as avoidance of something difficult.",\n'
    '    ],'
  ),

  "TC023": (
    '    whyItWorks: "\'I\'ll think about it\' often reads as a soft no and leaves the other person in limbo — an open loop they have to manage. '
    'A bounded deferment with a specific return date converts an open loop into a closed commitment.",\n'
    '    example: {\n'
    '      without: [\n'
    '        "You: Let me think about it and get back to you.",\n'
    '        "(A week passes. They follow up. You still have not thought about it.)",\n'
    '        "(Trust erodes around your reliability)",\n'
    '      ],\n'
    '      with: [\n'
    '        "You: I want to give this proper thought — I\'ll come back to you by Friday with a clear answer.",\n'
    '        "Other: Perfect — I\'ll wait to hear from you Friday.",\n'
    '      ],\n'
    '    },\n'
    '    notFor: [\n'
    '      "When you know the answer already — deferring when you could decide now signals avoidance.",\n'
    '      "When the other person needs an answer urgently and deferment will cause real harm or delay.",\n'
    '      "When the pattern of deferring to this person is already eroding their trust in your reliability.",\n'
    '    ],'
  ),

  "TC024": (
    '    whyItWorks: "The ask is the most important information in your message — burying it at the end makes the reader work to find it. '
    'Leading with the ask respects their time and dramatically increases the chance of a clear, fast response.",\n'
    '    example: {\n'
    '      without: [\n'
    '        "You: (three paragraphs of context) ...so anyway, if it\'s not too much trouble and you have time, could you maybe take a look at the proposal?",\n'
    '        "Colleague: (misses the ask entirely; does not respond)",\n'
    '      ],\n'
    '      with: [\n'
    '        "You: Quick ask: can you review section 3 of the proposal before Thursday? I\'ve highlighted the parts that matter most.",\n'
    '        "Colleague: Yes — will do.",\n'
    '      ],\n'
    '    },\n'
    '    notFor: [\n'
    '      "When a request without context will be rejected before the person understands what they are agreeing to.",\n'
    '      "In sensitive requests where the relationship needs warming before the ask lands.",\n'
    '      "When the ask is secondary to sharing important information — not every message is primarily a request.",\n'
    '    ],'
  ),

  "TC025": (
    '    whyItWorks: "People who share credit gain more of it — generosity and confidence are more admired than credit-hoarding. '
    'Attributing contributions accurately also builds the loyalty that produces future performance and collaboration.",\n'
    '    example: {\n'
    '      without: [\n'
    '        "You: (presenting) I worked on this for three months and I\'m proud of what I achieved.",\n'
    '        "(Collaborators notice the erasure. Trust drops. They are less invested next time.)",\n'
    '      ],\n'
    '      with: [\n'
    '        "You: The results came from the whole team — Jamie\'s analysis and Sam\'s design work were critical. I steered the project but I did not do this alone.",\n'
    '        "(Collaborators feel seen. They work harder for you next time.)",\n'
    '      ],\n'
    '    },\n'
    '    notFor: [\n'
    '      "When your individual contribution needs to be visible for legitimate reasons — e.g. a performance review where your specific work must be legible.",\n'
    '      "When sharing credit for something that went wrong — ownership of failure is different from shared credit for success.",\n'
    '      "When attributing credit to someone who did not contribute confuses accountability.",\n'
    '    ],'
  ),

  "TC026": (
    '    whyItWorks: "People make better decisions when criteria are named before options are evaluated — anchoring on a shared frame prevents the discussion from becoming a preference competition. '
    'The frame is the agreement beneath the disagreement.",\n'
    '    example: {\n'
    '      without: [\n'
    '        "You: I think we should go with Vendor A.",\n'
    '        "Colleague: I prefer Vendor B.",\n'
    '        "(Debate goes in circles with no resolution)",\n'
    '      ],\n'
    '      with: [\n'
    '        "You: Before we pick — can we agree on the two or three criteria that matter most? Then we apply them to both.",\n'
    '        "Colleague: Sure — speed, cost, and support quality.",\n'
    '        "You: On that basis, here\'s how they compare.",\n'
    '      ],\n'
    '    },\n'
    '    notFor: [\n'
    '      "When the decision is urgent and time spent establishing criteria delays it critically.",\n'
    '      "When criteria are already agreed and restating them is unnecessary overhead.",\n'
    '      "When the decision is a simple preference call with no meaningful trade-offs to evaluate.",\n'
    '    ],'
  ),

  "TC027": (
    '    whyItWorks: "Unsolicited advice activates resistance — even good advice, given uninvited, is often rejected because the receiver\'s autonomy feels bypassed. '
    'Asking permission transforms the relationship from expert-to-recipient into collaborative peers.",\n'
    '    example: {\n'
    '      without: [\n'
    '        "You: Here\'s what you should do — call him directly and be clear about what happened.",\n'
    '        "Friend: (defensive) It\'s more complicated than that.",\n'
    '      ],\n'
    '      with: [\n'
    '        "You: I have a thought on this — do you want advice or just someone to hear you out right now?",\n'
    '        "Friend: Advice would actually be helpful.",\n'
    '        "You: Call him directly and be clear about what happened.",\n'
    '      ],\n'
    '    },\n'
    '    notFor: [\n'
    '      "In emergencies where there is no time for permission — give the critical information immediately.",\n'
    '      "In professional contexts where giving advice is literally your role (consultant, doctor, manager giving direction).",\n'
    '      "When the permission question itself would feel clinical or awkward in a close personal relationship.",\n'
    '    ],'
  ),

  "TC028": (
    '    whyItWorks: "Vocal tone carries emotional information more reliably than words — perceived trustworthiness and competence are substantially shaped by how you sound, not just what you say. '
    'A warm baseline makes your content land better.",\n'
    '    example: {\n'
    '      without: [\n'
    '        "You: (flat, fast, slightly tense) The deadline is Thursday and we need everyone aligned by then.",\n'
    '        "(People hear urgency and anxiety rather than clarity — they tense up)",\n'
    '      ],\n'
    '      with: [\n'
    '        "You: (slower, warmer, with a brief pause) The deadline is Thursday — (pause) — and I want to make sure everyone is set up to hit it.",\n'
    '        "(People hear confidence and care — they lean in rather than tense up)",\n'
    '      ],\n'
    '    },\n'
    '    notFor: [\n'
    '      "In situations where artificial warmth would read as patronising or performative.",\n'
    '      "When speed and information density are paramount and vocal quality is secondary.",\n'
    '      "When your natural energy is genuinely flat — forced warmth that does not match your affect creates incongruence.",\n'
    '    ],'
  ),

  "TC029": (
    '    whyItWorks: "Most people are conditioned to fill silence immediately — silence feels like failure. '
    'But silence creates space for the other person to think, add, or reveal something they would not have otherwise said. '
    'The person comfortable in silence holds power in the conversation.",\n'
    '    example: {\n'
    '      without: [\n'
    '        "Interviewer: What\'s your greatest weakness?",\n'
    '        "You: (immediately) I\'m a perfectionist — which can sometimes... actually it\'s probably more of a strength really...",\n'
    '      ],\n'
    '      with: [\n'
    '        "Interviewer: What\'s your greatest weakness?",\n'
    '        "You: (3-second pause) I move quickly and sometimes need to slow down to bring others with me. I\'ve been working on that deliberately.",\n'
    '      ],\n'
    '    },\n'
    '    notFor: [\n'
    '      "When silence will be read as not knowing the answer rather than thinking.",\n'
    '      "In casual social conversations where silence signals awkwardness rather than composure.",\n'
    '      "When the other person is in distress and silence feels like abandonment.",\n'
    '    ],'
  ),

  "TC030": (
    '    whyItWorks: "Physical movement is unconsciously read as an indicator of internal composure — fast, restless movement signals anxiety, '
    'while measured movement signals confidence and control. Your body communicates your state before you speak.",\n'
    '    example: {\n'
    '      without: [\n'
    '        "(You walk into the presentation room quickly, shuffle papers, adjust your position repeatedly, fidget while speaking)",\n'
    '        "(Audience perceives nervousness, which lowers their confidence in your message)",\n'
    '      ],\n'
    '      with: [\n'
    '        "(You walk in at a steady pace, set materials down deliberately, pause before beginning)",\n'
    '        "(Audience perceives composure — your message lands with more authority before you say a word)",\n'
    '      ],\n'
    '    },\n'
    '    notFor: [\n'
    '      "In casual, high-energy social settings where measured movement reads as stiff or unnatural.",\n'
    '      "When genuine urgency requires rapid physical movement.",\n'
    '      "When your natural movement style is already composed — over-engineering it creates self-consciousness.",\n'
    '    ],'
  ),

  "TC031": (
    '    whyItWorks: "Under pressure, the prefrontal cortex hands control to the amygdala — speech speeds up, thinking narrows, and mistakes happen. '
    'Deliberately slowing your pace reactivates prefrontal processing, restoring the breadth of thinking needed to respond well.",\n'
    '    example: {\n'
    '      without: [\n'
    '        "Interviewer: That\'s not quite what I asked — can you be more specific?",\n'
    '        "You: (speeding up) Yes absolutely, what I meant was essentially if you think about it differently, what I was trying to say was...",\n'
    '      ],\n'
    '      with: [\n'
    '        "Interviewer: That\'s not quite what I asked — can you be more specific?",\n'
    '        "You: (pauses, breathes) You are right. Let me answer directly. (pause) The specific example is...",\n'
    '      ],\n'
    '    },\n'
    '    notFor: [\n'
    '      "In casual conversation where a deliberate slow-down reads as unnatural or aloof.",\n'
    '      "When your pace is already appropriate and slowing further would feel laboured.",\n'
    '      "When the pressure context requires rapid decision-making where slowing creates harmful delay.",\n'
    '    ],'
  ),
}


def inject_fields(content, card_id, fields):
    """
    Find this card's section by locating '  TCxxx: {' and finding the
    last occurrence of '    ],\n  },' before the next card comment or EOF.
    Insert new fields before that closing bracket.
    """
    # Find start of this card's section
    card_start = content.find(f'\n  {card_id}: {{')
    if card_start == -1:
        print(f"WARNING: Could not find {card_id}: {{", file=sys.stderr)
        return content

    # Find where this card's section ends (next card comment or EOF)
    # Card comments look like: '\n\n  /* ───'
    next_card_start = content.find('\n\n  /* ─', card_start + 1)
    if next_card_start == -1:
        # This is the last card (TC031)
        card_section = content[card_start:]
        rest = ''
    else:
        card_section = content[card_start:next_card_start]
        rest = content[next_card_start:]

    # Find last '    ],\n  },' in this section (that's the checklist closing + card closing)
    close_pattern = '    ],\n  },'
    last_pos = card_section.rfind(close_pattern)
    if last_pos == -1:
        print(f"WARNING: Could not find closing pattern for {card_id}", file=sys.stderr)
        return content

    # Replace: insert new fields between '],' and '\n  },'
    # Transform: '    ],\n  },' -> '    ],\n' + fields + '\n  },'
    new_section = (
        card_section[:last_pos + 6]  # up to and including '    ],'
        + '\n'
        + fields
        + '\n  },'
        + card_section[last_pos + len(close_pattern):]
    )

    return content[:card_start] + new_section + rest


def main():
    path = 'artifacts/tc-reference/src/lib/cards.ts'
    with open(path, 'r') as f:
        content = f.read()

    for card_id, fields in NEW_FIELDS.items():
        content = inject_fields(content, card_id, fields)

    with open(path, 'w') as f:
        f.write(content)

    print(f"Done. Injected fields for {len(NEW_FIELDS)} cards.")


if __name__ == '__main__':
    main()
