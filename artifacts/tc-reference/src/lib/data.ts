export type CardImpact = "high" | "medium" | "low";

interface LibraryCard {
  id: string;
  title: string;
  loaded: boolean;
  impact: CardImpact;
}

export const LIBRARY_CATEGORIES: Record<string, LibraryCard[]> = {
  "Voice / Presence": [
    { id: "TC028", title: "Warm Vocal Baseline", loaded: true, impact: "high" },
    { id: "TC029", title: "Strategic Silence", loaded: true, impact: "high" },
    { id: "TC030", title: "Measured Movement", loaded: true, impact: "medium" },
    { id: "TC031", title: "Slow Down Under Pressure", loaded: true, impact: "high" },
  ],
  "Influence / Framing": [
    { id: "TC003", title: "BLUF: Bottom Line Up Front", loaded: true, impact: "high" },
    { id: "TC008", title: "No-Overexplaining Discipline", loaded: true, impact: "high" },
    { id: "TC014", title: "Validate the Concern", loaded: true, impact: "high" },
    { id: "TC017", title: "Agreement Before Disagreement", loaded: true, impact: "medium" },
    { id: "TC021", title: "Reframe the Stakes", loaded: true, impact: "medium" },
    { id: "TC024", title: "Lead With the Ask", loaded: true, impact: "high" },
    { id: "TC027", title: "Permission-Based Advice", loaded: true, impact: "medium" },
  ],
  "Clarity / Direction": [
    { id: "TC005", title: "Clean Request", loaded: true, impact: "high" },
    { id: "TC009", title: "Summary Check", loaded: true, impact: "medium" },
    { id: "TC011", title: "PREP Structure", loaded: true, impact: "high" },
    { id: "TC015", title: "Next-Step Close", loaded: true, impact: "medium" },
    { id: "TC018", title: "Crisp Brevity", loaded: true, impact: "high" },
    { id: "TC023", title: "Bounded Deferment", loaded: true, impact: "high" },
    { id: "TC026", title: "Decision Frame", loaded: true, impact: "medium" },
  ],
  "Connection / Warmth": [
    { id: "TC001", title: "Live Thread Follow-Ups", loaded: true, impact: "high" },
    { id: "TC002", title: "Thread Recall", loaded: true, impact: "medium" },
    { id: "TC006", title: "Genuine Specific Compliment", loaded: true, impact: "medium" },
    { id: "TC010", title: "Curiosity Question", loaded: true, impact: "medium" },
    { id: "TC013", title: "Name the Effort", loaded: true, impact: "medium" },
    { id: "TC016", title: "Validation Without Agreement", loaded: true, impact: "high" },
    { id: "TC019", title: "Autonomy Release", loaded: true, impact: "medium" },
    { id: "TC022", title: "Graceful Exit", loaded: true, impact: "medium" },
    { id: "TC025", title: "Shared Credit", loaded: true, impact: "medium" },
  ],
  "Resilience / Recovery": [
    { id: "TC004", title: "Repair Opening", loaded: true, impact: "high" },
    { id: "TC007", title: "Disagreement Without Contempt", loaded: true, impact: "high" },
    { id: "TC012", title: "Boundary Without Blame", loaded: true, impact: "high" },
    { id: "TC020", title: "Confident Uncertainty", loaded: true, impact: "medium" },
  ],
};
