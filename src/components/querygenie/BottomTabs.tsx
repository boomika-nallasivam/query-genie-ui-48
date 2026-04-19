import { Bookmark, Database, History } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HistoryTab } from "./HistoryTab";
import { SavedTab } from "./SavedTab";
import { SchemaExplorer } from "./SchemaExplorer";

interface BottomTabsProps {
  onRerun: (q: string) => void;
}

export function BottomTabs({ onRerun }: BottomTabsProps) {
  return (
    <section className="rounded-2xl border border-border bg-card p-4 shadow-soft sm:p-5">
      <Tabs defaultValue="history" className="w-full">
        <TabsList className="h-10 rounded-full bg-muted/60 p-1">
          <TabsTrigger value="history" className="gap-1.5 rounded-full text-xs data-[state=active]:bg-background data-[state=active]:shadow-soft">
            <History className="h-3.5 w-3.5" /> History
          </TabsTrigger>
          <TabsTrigger value="saved" className="gap-1.5 rounded-full text-xs data-[state=active]:bg-background data-[state=active]:shadow-soft">
            <Bookmark className="h-3.5 w-3.5" /> Saved
          </TabsTrigger>
          <TabsTrigger value="schema" className="gap-1.5 rounded-full text-xs data-[state=active]:bg-background data-[state=active]:shadow-soft">
            <Database className="h-3.5 w-3.5" /> Schema
          </TabsTrigger>
        </TabsList>
        <TabsContent value="history" className="mt-4">
          <HistoryTab onRerun={onRerun} />
        </TabsContent>
        <TabsContent value="saved" className="mt-4">
          <SavedTab onRerun={onRerun} />
        </TabsContent>
        <TabsContent value="schema" className="mt-4">
          <SchemaExplorer />
        </TabsContent>
      </Tabs>
    </section>
  );
}
