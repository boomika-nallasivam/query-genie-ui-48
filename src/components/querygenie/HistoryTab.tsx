import { Clock, Play } from "lucide-react";
import { historyItems } from "@/lib/mockData";
import { Button } from "@/components/ui/button";

interface HistoryTabProps {
  onRerun: (q: string) => void;
}

export function HistoryTab({ onRerun }: HistoryTabProps) {
  return (
    <div className="space-y-2">
      {historyItems.map((item) => (
        <div
          key={item.id}
          className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-smooth hover:border-primary/30 hover:bg-gradient-subtle hover:shadow-soft"
        >
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted">
              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{item.prompt}</p>
              <p className="text-[11px] text-muted-foreground">{item.timestamp}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onRerun(item.prompt)}
            className="h-8 shrink-0 gap-1.5 rounded-full text-xs opacity-0 transition-smooth group-hover:opacity-100"
          >
            <Play className="h-3 w-3" /> Rerun
          </Button>
        </div>
      ))}
    </div>
  );
}
