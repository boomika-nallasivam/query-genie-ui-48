import { cn } from "@/lib/utils";
import { ShieldCheck } from "lucide-react";

interface ConfidenceBadgeProps {
  value: number; // 0..100
  className?: string;
}

export function ConfidenceBadge({ value, className }: ConfidenceBadgeProps) {
  const tone =
    value >= 80 ? "text-success" : value >= 60 ? "text-warning" : "text-destructive";
  return (
    <div className={cn("inline-flex items-center gap-2 rounded-full border border-border bg-card px-2.5 py-1 text-[11px] font-medium", className)}>
      <ShieldCheck className={cn("h-3.5 w-3.5", tone)} />
      <span className="text-muted-foreground">Confidence</span>
      <span className={cn("font-semibold", tone)}>{value}%</span>
      <div className="ml-1 h-1.5 w-16 overflow-hidden rounded-full bg-muted">
        <div className="h-full rounded-full bg-gradient-primary transition-smooth" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
