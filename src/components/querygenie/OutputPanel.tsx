import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ConfidenceBadge } from "./ConfidenceBadge";
import { ExplanationCard } from "./ExplanationCard";
import { ResultsChart } from "./ResultsChart";
import { ResultsTable } from "./ResultsTable";
import { SqlCard } from "./SqlCard";
import { ViewToggle, type ViewMode } from "./ViewToggle";
import { sampleResults } from "@/lib/mockData";

interface OutputPanelProps {
  sql: string;
  explanation: string;
}

export function OutputPanel({ sql, explanation }: OutputPanelProps) {
  const [view, setView] = useState<ViewMode>("table");
  const [followUp, setFollowUp] = useState("");

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-accent" />
          <h2 className="text-sm font-semibold">AI Output</h2>
        </div>
        <ConfidenceBadge value={94} />
      </div>

      <SqlCard sql={sql} />
      <ExplanationCard text={explanation} />

      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Results</h3>
        <ViewToggle value={view} onChange={setView} />
      </div>

      {view === "table" ? (
        <ResultsTable rows={sampleResults} />
      ) : (
        <ResultsChart rows={sampleResults} type={view} />
      )}

      <div className="rounded-2xl border border-border bg-card p-2 shadow-soft transition-smooth focus-within:border-primary/40 focus-within:shadow-elegant">
        <div className="flex items-center gap-2">
          <input
            value={followUp}
            onChange={(e) => setFollowUp(e.target.value)}
            placeholder="Ask a follow-up… (e.g. group by department)"
            className="flex-1 bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none"
          />
          <Button
            size="icon"
            disabled={!followUp.trim()}
            className="h-9 w-9 shrink-0 rounded-xl bg-gradient-primary text-primary-foreground shadow-elegant transition-smooth hover:opacity-90"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
