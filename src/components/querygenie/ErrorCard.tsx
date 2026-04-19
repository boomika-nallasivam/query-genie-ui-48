import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorCardProps {
  message?: string;
  onRetry?: () => void;
}

export function ErrorCard({ message = "We couldn't translate that query. Try rephrasing or be more specific.", onRetry }: ErrorCardProps) {
  return (
    <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-5 shadow-soft">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-destructive/10">
          <AlertTriangle className="h-4 w-4 text-destructive" />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-destructive">Invalid query</h3>
          <p className="mt-1 text-sm text-muted-foreground">{message}</p>
          {onRetry && (
            <Button onClick={onRetry} variant="outline" size="sm" className="mt-3 h-8 gap-1.5 rounded-full text-xs">
              <RefreshCw className="h-3 w-3" /> Try again
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
