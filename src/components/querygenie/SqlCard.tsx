import { Bookmark, Check, Copy, Download } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const SQL_KEYWORDS = new Set([
  "SELECT", "FROM", "WHERE", "AS", "AND", "OR", "NOT", "ORDER", "BY", "GROUP",
  "HAVING", "LIMIT", "JOIN", "LEFT", "RIGHT", "INNER", "OUTER", "ON", "IN",
  "DESC", "ASC", "INSERT", "UPDATE", "DELETE", "INTO", "VALUES", "SET", "NULL",
  "IS", "LIKE", "BETWEEN", "DISTINCT", "COUNT", "SUM", "AVG", "MIN", "MAX",
]);

function highlight(sql: string) {
  // Tokenize keeping delimiters
  const parts = sql.split(/(\s+|[(),;])/g);
  return parts.map((p, i) => {
    if (/^\s+$/.test(p) || /^[(),;]$/.test(p)) return <span key={i}>{p}</span>;
    if (SQL_KEYWORDS.has(p.toUpperCase())) {
      return <span key={i} className="font-semibold text-code-keyword">{p}</span>;
    }
    if (/^['"`].*['"`]$/.test(p)) {
      return <span key={i} className="text-code-string">{p}</span>;
    }
    if (/^\d+(\.\d+)?$/.test(p)) {
      return <span key={i} className="text-code-number">{p}</span>;
    }
    if (p.startsWith("--")) {
      return <span key={i} className="italic text-code-comment">{p}</span>;
    }
    return <span key={i} className="text-code-fg">{p}</span>;
  });
}

interface SqlCardProps {
  sql: string;
}

export function SqlCard({ sql }: SqlCardProps) {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(sql);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <div className="flex items-center justify-between border-b border-border bg-muted/30 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
          </div>
          <span className="ml-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Generated SQL
          </span>
        </div>
        <div className="flex items-center gap-0.5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-7 w-7 rounded-md" onClick={() => setSaved(!saved)}>
                <Bookmark className={`h-3.5 w-3.5 ${saved ? "fill-primary text-primary" : ""}`} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>{saved ? "Saved" : "Save query"}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-7 w-7 rounded-md">
                <Download className="h-3.5 w-3.5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Download .sql</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-7 w-7 rounded-md" onClick={copy}>
                {copied ? <Check className="h-3.5 w-3.5 text-success" /> : <Copy className="h-3.5 w-3.5" />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>{copied ? "Copied!" : "Copy"}</TooltipContent>
          </Tooltip>
        </div>
      </div>
      <pre className="scrollbar-thin overflow-x-auto bg-code-bg p-4 font-mono text-[13px] leading-relaxed">
        <code className="text-code-fg">{highlight(sql)}</code>
      </pre>
    </div>
  );
}
