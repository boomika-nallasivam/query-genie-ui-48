import { Database, Sparkles } from "lucide-react";

export function EmptyState() {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-gradient-subtle p-10 text-center">
      <div className="relative mb-5">
        <div className="absolute inset-0 animate-pulse rounded-2xl bg-gradient-primary opacity-30 blur-2xl" />
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary shadow-elegant">
          <Database className="h-8 w-8 text-primary-foreground" />
        </div>
      </div>
      <h3 className="mb-1.5 text-lg font-bold">Your AI SQL workspace</h3>
      <p className="mb-4 max-w-sm text-sm text-muted-foreground">
        Describe what you want in plain English — QueryGenie will translate it into clean, optimized SQL with explanations and live results.
      </p>
      <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-card px-3 py-1.5 text-xs font-medium text-primary">
        <Sparkles className="h-3.5 w-3.5" />
        Powered by AI
      </div>
    </div>
  );
}
