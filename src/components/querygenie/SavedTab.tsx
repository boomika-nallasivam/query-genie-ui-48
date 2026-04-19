import { Bookmark, Play } from "lucide-react";
import { savedItems } from "@/lib/mockData";
import { Button } from "@/components/ui/button";

interface SavedTabProps {
  onRerun: (q: string) => void;
}

export function SavedTab({ onRerun }: SavedTabProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {savedItems.map((item) => (
        <div
          key={item.id}
          className="group relative overflow-hidden rounded-xl border border-border bg-card p-4 transition-smooth hover:border-primary/30 hover:shadow-elegant"
        >
          <div className="absolute right-0 top-0 h-16 w-16 bg-gradient-glow opacity-60" />
          <Bookmark className="mb-2 h-4 w-4 fill-primary text-primary" />
          <p className="mb-3 text-sm font-medium leading-snug">{item.prompt}</p>
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-muted-foreground">{item.timestamp}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRerun(item.prompt)}
              className="h-7 gap-1 rounded-full px-2.5 text-[11px]"
            >
              <Play className="h-3 w-3" /> Run
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
