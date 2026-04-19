import { Settings, Sparkles } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "./ThemeToggle";

interface TopBarProps {
  advanced: boolean;
  onAdvancedChange: (v: boolean) => void;
}

export function TopBar({ advanced, onAdvancedChange }: TopBarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border/60 bg-background/80 px-4 backdrop-blur-xl md:px-6">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="md:hidden" />
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-elegant">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="hidden flex-col leading-tight sm:flex">
            <h1 className="text-base font-bold tracking-tight">
              <span className="text-gradient">QueryGenie</span>
            </h1>
            <p className="text-[11px] text-muted-foreground">Ask your database in plain English</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-3">
        <div className="hidden items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1.5 sm:flex">
          <Label htmlFor="mode-switch" className="cursor-pointer text-xs font-medium text-muted-foreground">
            Simple
          </Label>
          <Switch id="mode-switch" checked={advanced} onCheckedChange={onAdvancedChange} />
          <Label htmlFor="mode-switch" className="cursor-pointer text-xs font-medium text-muted-foreground">
            Advanced
          </Label>
        </div>
        <ThemeToggle />
        <Button variant="ghost" size="icon" className="rounded-full" aria-label="Settings">
          <Settings className="h-[18px] w-[18px]" />
        </Button>
        <Avatar className="h-9 w-9 ring-2 ring-border">
          <AvatarFallback className="bg-gradient-primary text-sm font-semibold text-primary-foreground">
            AK
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
