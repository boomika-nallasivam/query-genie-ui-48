import { ArrowDown, ArrowUp, ArrowUpDown, ChevronLeft, ChevronRight, Download, FileSpreadsheet } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { type ResultRow } from "@/lib/mockData";

type SortKey = keyof ResultRow;

interface ResultsTableProps {
  rows: ResultRow[];
}

export function ResultsTable({ rows }: ResultsTableProps) {
  const [sort, setSort] = useState<{ key: SortKey; dir: "asc" | "desc" } | null>(null);
  const [page, setPage] = useState(1);
  const pageSize = 6;

  const sorted = useMemo(() => {
    if (!sort) return rows;
    return [...rows].sort((a, b) => {
      const va = a[sort.key];
      const vb = b[sort.key];
      if (va < vb) return sort.dir === "asc" ? -1 : 1;
      if (va > vb) return sort.dir === "asc" ? 1 : -1;
      return 0;
    });
  }, [rows, sort]);

  const pageCount = Math.max(1, Math.ceil(sorted.length / pageSize));
  const paged = sorted.slice((page - 1) * pageSize, page * pageSize);

  const toggleSort = (key: SortKey) => {
    setSort((s) => {
      if (!s || s.key !== key) return { key, dir: "asc" };
      if (s.dir === "asc") return { key, dir: "desc" };
      return null;
    });
  };

  const sortIcon = (key: SortKey) => {
    if (sort?.key !== key) return <ArrowUpDown className="h-3 w-3 opacity-40" />;
    return sort.dir === "asc" ? <ArrowUp className="h-3 w-3 text-primary" /> : <ArrowDown className="h-3 w-3 text-primary" />;
  };

  const cols: { key: SortKey; label: string; align?: string }[] = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "department", label: "Department" },
    { key: "salary", label: "Salary", align: "text-right" },
    { key: "hire_date", label: "Hire Date" },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div>
          <p className="text-sm font-semibold">{rows.length} rows returned</p>
          <p className="text-[11px] text-muted-foreground">Query executed in 142ms</p>
        </div>
        <div className="flex items-center gap-1.5">
          <Button variant="outline" size="sm" className="h-8 gap-1.5 rounded-full text-xs">
            <FileSpreadsheet className="h-3.5 w-3.5" /> Excel
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-1.5 rounded-full text-xs">
            <Download className="h-3.5 w-3.5" /> CSV
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-border bg-muted/30 hover:bg-muted/30">
              {cols.map((c) => (
                <TableHead key={c.key} className={`h-10 ${c.align ?? ""}`}>
                  <button
                    onClick={() => toggleSort(c.key)}
                    className={`inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground ${c.align === "text-right" ? "ml-auto" : ""}`}
                  >
                    {c.label} {sortIcon(c.key)}
                  </button>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {paged.map((row) => (
              <TableRow key={row.id} className="border-border/60 transition-smooth hover:bg-gradient-subtle">
                <TableCell className="font-mono text-xs text-muted-foreground">{row.id}</TableCell>
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell>
                  <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium">{row.department}</span>
                </TableCell>
                <TableCell className="text-right font-mono text-sm font-semibold">
                  ${row.salary.toLocaleString()}
                </TableCell>
                <TableCell className="text-muted-foreground">{row.hire_date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between border-t border-border px-4 py-2.5">
        <p className="text-[11px] text-muted-foreground">
          Page <span className="font-semibold text-foreground">{page}</span> of {pageCount}
        </p>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" className="h-7 w-7 rounded-md" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7 rounded-md" onClick={() => setPage((p) => Math.min(pageCount, p + 1))} disabled={page === pageCount}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
