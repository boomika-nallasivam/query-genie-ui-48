import { Sparkles } from "lucide-react";

interface SuggestedChipsProps {
  items: string[];
  onPick: (q: string) => void;
}

export function SuggestedChips({ items, onPick }: SuggestedChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((q) => (
        <button
          key={q}
          onClick={() => onPick(q)}
          className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-smooth hover:border-primary/40 hover:bg-gradient-subtle hover:text-foreground hover:shadow-soft"
        >
          <Sparkles className="h-3 w-3 text-primary group-hover:text-accent" />
          {q}
        </button>
      ))}
    </div>
  );
}
