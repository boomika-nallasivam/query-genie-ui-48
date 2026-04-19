import { Lightbulb, Loader2, Mic, Send, Sparkles, Wand2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { suggestedQueries } from "@/lib/mockData";
import { SuggestedChips } from "./SuggestedChips";

interface QueryInputPanelProps {
  value: string;
  onChange: (v: string) => void;
  onGenerate: () => void;
  onClear: () => void;
  loading: boolean;
  advanced: boolean;
}

export function QueryInputPanel({ value, onChange, onGenerate, onClear, loading, advanced }: QueryInputPanelProps) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 280) + "px";
  }, [value]);

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Wand2 className="h-4 w-4 text-primary" />
          <h2 className="text-sm font-semibold">Ask in plain English</h2>
        </div>
        <span className="rounded-full bg-gradient-subtle px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary">
          {advanced ? "Advanced" : "Simple"} mode
        </span>
      </div>

      <div className="group relative flex-1 rounded-2xl border border-border bg-card p-4 shadow-soft transition-smooth focus-within:border-primary/50 focus-within:shadow-elegant">
        <Textarea
          ref={ref}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type your query (e.g., Show all employees with salary above 50000)"
          className="min-h-[140px] w-full resize-none border-0 bg-transparent p-0 text-base leading-relaxed shadow-none focus-visible:ring-0 md:text-base"
          onKeyDown={(e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "Enter") onGenerate();
          }}
        />

        <div className="mt-3 flex items-center justify-between border-t border-border/60 pt-3">
          <div className="flex items-center gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground hover:text-primary">
                  <Mic className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Voice input</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground hover:text-primary">
                  <Sparkles className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Improve prompt</TooltipContent>
            </Tooltip>
            <span className="ml-2 hidden text-[11px] text-muted-foreground sm:inline">
              ⌘ + Enter to generate
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={onClear} disabled={loading || !value} className="h-8 rounded-full px-3 text-xs">
              Clear
            </Button>
            <Button
              size="sm"
              onClick={onGenerate}
              disabled={loading || !value.trim()}
              className="h-9 gap-1.5 rounded-full bg-gradient-primary px-4 text-xs font-semibold text-primary-foreground shadow-elegant transition-smooth hover:opacity-90 hover:shadow-glow disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  Generating
                </>
              ) : (
                <>
                  <Send className="h-3.5 w-3.5" />
                  Generate SQL
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-2 rounded-xl border border-warning/30 bg-warning/5 px-3 py-2 text-xs">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-warning" />
        <p className="text-muted-foreground">
          Did you mean <span className="font-semibold text-foreground">salary</span> instead of <span className="line-through">salry</span>?
        </p>
      </div>

      <div>
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Suggested queries
        </p>
        <SuggestedChips items={suggestedQueries} onPick={onChange} />
      </div>
    </div>
  );
}
