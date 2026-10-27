// Starter playbooks: short, ordered sequences of existing technique cards for
// common hospital and workplace conversations. They are communication practice
// prompts only. Local policy and clinical procedures still apply.

export interface PlaybookTemplate {
  id: string;
  name: string;
  description: string;
  context: "Clinical" | "Workplace";
  /** Everyday communication and charisma playbooks are the main list. Medical
      and clinical ones are kept, but shown in their own separate section. */
  section: "everyday" | "medical";
  cardIds: string[];
  /** Where the named framework in the description comes from. Every claim in
      a template description should be traceable to one of these. */
  sources?: { label: string; url: string }[];
}

export const PLAYBOOK_TEMPLATES: PlaybookTemplate[] = [
  {
    id: "clinical-handover-isbar",
    name: "Clinical handover",
    description:
      "Lead with the bottom line in a calm, even voice, then walk through your local structure (iSoBAR in WA Health: identify, situation, observations, background, agree a plan, read-back). Make one clean request and ask them to read it back.",
    context: "Clinical",
    section: "medical",
    cardIds: ["TC044", "TC048", "TC013", "TC011"],
    sources: [
      {
        label: "WA Health: Clinical handover (iSoBAR)",
        url: "https://www.health.wa.gov.au/Articles/A_E/Clinical-handover",
      },
    ],
  },
  {
    id: "breaking-bad-news-spikes",
    name: "Breaking bad news",
    description:
      "Give them your full attention and ask what they already understand. Ask how much detail they want, share the news in small plain pieces, then name the emotion and let silence work before you summarise next steps (the SPIKES shape).",
    context: "Clinical",
    section: "medical",
    cardIds: ["TC012", "TC045", "TC029", "TC080", "TC011"],
    sources: [
      {
        label: "Baile et al. 2000, SPIKES",
        url: "https://pubmed.ncbi.nlm.nih.gov/10964998/",
      },
    ],
  },
  {
    id: "open-disclosure",
    name: "Open disclosure conversation",
    description:
      "Lead with the emotion and a plain sorry, then explain the facts simply. Invite them to tell you their experience and listen fully. Then talk through what it may mean for them and the steps being taken (the Open Disclosure elements).",
    context: "Clinical",
    section: "medical",
    cardIds: ["TC098", "TC045", "TC004", "TC050"],
    sources: [
      {
        label: "ACSQHC: Open disclosure",
        url: "https://www.safetyandquality.gov.au/open-disclosure",
      },
    ],
  },
  {
    id: "distressed-relative",
    name: "De-escalating a distressed relative",
    description:
      "Slow down, name the emotion and acknowledge the concern before explaining anything. Check your understanding, then agree one clear next step.",
    context: "Clinical",
    section: "medical",
    cardIds: ["TC031", "TC006", "TC014", "TC011", "TC013"],
  },
  {
    id: "goals-of-care",
    name: "Family meeting or goals of care",
    description:
      "Find out what the family already understands, then listen for what matters most to the patient. Reflect any mixed feelings and frame the options around those values.",
    context: "Clinical",
    section: "medical",
    cardIds: ["TC045", "TC084", "TC037", "TC017", "TC011"],
  },
  {
    id: "escalating-concern",
    name: "Escalating a concern to a senior",
    description:
      "Use graded assertiveness. State the concern and your request up front, and if it is not landing, ask to disagree and name the specific risk plainly.",
    context: "Clinical",
    section: "medical",
    cardIds: ["TC044", "TC013", "TC079", "TC092"],
  },
  {
    id: "feedback-junior-colleague",
    name: "Feedback to a junior colleague",
    description:
      "Recognise the effort, then describe the situation, behaviour and impact with SBI. Ask what they make of it and agree the next step together.",
    context: "Workplace",
    section: "everyday",
    cardIds: ["TC075", "TC052", "TC046", "TC011"],
    sources: [
      {
        label: "Center for Creative Leadership: SBI feedback model",
        url: "https://www.ccl.org/articles/leading-effectively-articles/sbi-feedback-model-a-quick-win-to-improve-talent-conversations-development/",
      },
    ],
  },
  {
    id: "declining-a-request",
    name: "Declining a request",
    description:
      "Acknowledge the need behind the request, say no clearly with DEAR MAN and resist over-explaining. Offer a smaller, bounded alternative only if you genuinely can.",
    context: "Workplace",
    section: "everyday",
    cardIds: ["TC005", "TC095", "TC008", "TC094"],
    sources: [
      {
        label: "DBT interpersonal effectiveness: DEAR MAN",
        url: "https://dbt.tools/interpersonal_effectiveness/dear-man.php",
      },
    ],
  },
];
