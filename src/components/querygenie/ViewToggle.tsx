import { BarChart3, LineChart, Table2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type ViewMode = "table" | "bar" | "line";

interface ViewToggleProps {
  value: ViewMode;
  onChange: (v: ViewMode) => void;
}

const opts: { id: ViewMode; label: string; icon: typeof Table2 }[] = [
  { id: "table", label: "Table", icon: Table2 },
  { id: "bar", label: "Bar", icon: BarChart3 },
  { id: "line", label: "Line", icon: LineChart },
];

export function ViewToggle({ value, onChange }: ViewToggleProps) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1 shadow-soft">
      {opts.map((o) => {
        const active = value === o.id;
        return (
          <button
            key={o.id}
            onClick={() => onChange(o.id)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-smooth",
              active
                ? "bg-gradient-primary text-primary-foreground shadow-elegant"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <o.icon className="h-3.5 w-3.5" />
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
