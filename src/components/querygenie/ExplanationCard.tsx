import { MessageSquareText } from "lucide-react";

interface ExplanationCardProps {
  text: string;
}

export function ExplanationCard({ text }: ExplanationCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-gradient-subtle p-4 shadow-soft">
      <div className="mb-2 flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-primary shadow-elegant">
          <MessageSquareText className="h-3.5 w-3.5 text-primary-foreground" />
        </div>
        <h3 className="text-sm font-semibold">Explanation</h3>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}
