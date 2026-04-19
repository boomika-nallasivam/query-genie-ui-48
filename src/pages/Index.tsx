import { useState } from "react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/querygenie/AppSidebar";
import { BottomTabs } from "@/components/querygenie/BottomTabs";
import { OutputPanel } from "@/components/querygenie/OutputPanel";
import { QueryInputPanel } from "@/components/querygenie/QueryInputPanel";
import { TopBar } from "@/components/querygenie/TopBar";
import { sampleExplanation, sampleSql } from "@/lib/mockData";

const Index = () => {
  const [prompt, setPrompt] = useState("Show all employees with salary above 50000");
  const [generated, setGenerated] = useState(true);
  const [loading, setLoading] = useState(false);
  const [advanced, setAdvanced] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setGenerated(true);
    }, 1100);
  };

  const handleClear = () => {
    setPrompt("");
    setGenerated(false);
  };

  const handleRerun = (q: string) => {
    setPrompt(q);
    handleGenerate();
  };

  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <SidebarInset className="flex min-w-0 flex-1 flex-col">
          <TopBar advanced={advanced} onAdvancedChange={setAdvanced} />

          <main className="relative flex-1 overflow-x-hidden">
            <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-glow" />

            <div className="mx-auto w-full max-w-[1600px] space-y-5 p-4 md:p-6 lg:p-8">
              <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
                <section className="animate-fade-in">
                  <QueryInputPanel
                    value={prompt}
                    onChange={setPrompt}
                    onGenerate={handleGenerate}
                    onClear={handleClear}
                    loading={loading}
                    advanced={advanced}
                  />
                </section>

                <section className="animate-fade-in" style={{ animationDelay: "60ms" }}>
                  {generated ? (
                    <OutputPanel sql={sampleSql} explanation={sampleExplanation} />
                  ) : (
                    <div className="flex h-full min-h-[500px] items-center justify-center">
                      <EmptyOrLoading loading={loading} />
                    </div>
                  )}
                </section>
              </div>

              <section className="animate-fade-in" style={{ animationDelay: "120ms" }}>
                <BottomTabs onRerun={handleRerun} />
              </section>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

import { EmptyState } from "@/components/querygenie/EmptyState";
import { Loader2 } from "lucide-react";

function EmptyOrLoading({ loading }: { loading: boolean }) {
  if (loading) {
    return (
      <div className="flex h-full min-h-[500px] w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-gradient-subtle">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-sm font-medium text-muted-foreground">Generating SQL with AI…</p>
      </div>
    );
  }
  return <EmptyState />;
}

export default Index;
