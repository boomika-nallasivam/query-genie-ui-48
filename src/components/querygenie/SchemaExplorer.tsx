import { ChevronRight, Database, KeyRound, Link2, Table as TableIcon } from "lucide-react";
import { useState } from "react";
import { schemaTables, type SchemaTable } from "@/lib/mockData";
import { cn } from "@/lib/utils";

function TableNode({ table }: { table: SchemaTable }) {
  const [open, setOpen] = useState(table.name === "employees");
  return (
    <div className="rounded-xl border border-border bg-card transition-smooth hover:border-primary/30">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-2 px-3 py-2.5 text-left"
      >
        <div className="flex items-center gap-2">
          <ChevronRight className={cn("h-3.5 w-3.5 text-muted-foreground transition-transform", open && "rotate-90")} />
          <TableIcon className="h-4 w-4 text-primary" />
          <span className="text-sm font-semibold">{table.name}</span>
          <span className="text-[10px] text-muted-foreground">{table.rowCount.toLocaleString()} rows</span>
        </div>
      </button>
      {open && (
        <ul className="space-y-0.5 border-t border-border/60 px-3 py-2">
          {table.fields.map((f) => (
            <li key={f.name} className="flex items-center justify-between gap-2 rounded-md px-2 py-1.5 text-xs hover:bg-muted/50">
              <div className="flex items-center gap-2">
                {f.pk ? (
                  <KeyRound className="h-3 w-3 text-warning" />
                ) : f.fk ? (
                  <Link2 className="h-3 w-3 text-accent" />
                ) : (
                  <span className="h-3 w-3" />
                )}
                <span className="font-mono">{f.name}</span>
              </div>
              <span className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                {f.type}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function SchemaExplorer() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Database className="h-3.5 w-3.5" />
        <span className="font-mono">production_db</span>
        <span className="ml-auto rounded-full bg-success/10 px-2 py-0.5 text-[10px] font-medium text-success">Connected</span>
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        {schemaTables.map((t) => (
          <TableNode key={t.name} table={t} />
        ))}
      </div>
    </div>
  );
}
