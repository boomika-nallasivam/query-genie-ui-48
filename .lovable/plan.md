
# QueryGenie — Premium SaaS UI

A polished, ChatGPT-meets-Notion interface for an AI tool that turns natural language into SQL. Frontend-only, React + Tailwind, fully component-based and ready to wire to a MERN backend later.

## Design language
- **Palette:** Blue → Purple gradient as the signature accent. Light mode base `#f8fafc`, dark mode base `#0f172a`. Neutral slate surfaces, soft shadows, generous whitespace.
- **Typography:** Inter (clean sans-serif). Strong hierarchy — bold headings, medium labels, relaxed body.
- **Shape:** `rounded-2xl` cards, subtle borders, soft elevation. Smooth hover/transition states.
- **Theming:** Dark/light toggle wired through CSS variables in `index.css` so every component reacts instantly.

## Layout

**1. Top Navigation Bar**
- Left: gradient "QueryGenie" wordmark + small tagline "Ask your database in plain English".
- Right: Simple/Advanced mode switch, theme toggle, settings icon, user avatar with dropdown.

**2. Collapsible Left Sidebar** (shadcn sidebar, icon-collapse)
- Dashboard · Query Editor · Analytics · History · Saved · Settings.
- Active route highlighted with gradient pill.

**3. Main Workspace — Split Screen**

*Left panel — Query Input*
- Large auto-grow textarea with placeholder "Show all employees with salary above 50000".
- Inline microphone icon (UI only).
- Primary "Generate SQL" button (gradient, with loading spinner state) + Secondary "Clear".
- Suggested query chips: "Top 5 students by marks", "Employees in IT department", "Average salary per department".
- Helper row: confidence badge placeholder, "Did you mean…" suggestion line, tooltips on icons.

*Right panel — Output*
- **SQL Query Card:** dark code block with syntax-highlighted keywords, copy + download icons, save/bookmark icons.
- **Explanation Card:** soft-tinted card with plain-English summary.
- **Results Section:** view toggle (Table / Bar Chart / Line Chart).
  - Table: sortable headers, hover rows, pagination, export CSV/Excel buttons.
  - Charts: clean Recharts bar + line using theme colors.
- **Error state card** and empty state illustration when no query yet.

**4. Bottom Tabbed Panel**
- **History** — list of previous queries with timestamp + rerun button.
- **Saved Queries** — bookmark-style cards.
- **Schema Explorer** — collapsible tree of tables → fields with type badges.

**5. Smart Touches**
- Follow-up query input bar (conversational feel) under output.
- Query confidence shown as gradient progress bar + badge.
- Tooltips across icons for guidance.

## Responsiveness
- Desktop: split view as described.
- Tablet: sidebar collapses to icons, panels stack at lg breakpoint.
- Mobile: panels fully stack, bottom tab bar replaces tabs, sidebar becomes off-canvas sheet.

## Component breakdown (all under `src/components/querygenie/`)
- `TopBar.tsx`, `AppSidebar.tsx`, `ThemeToggle.tsx`
- `QueryInputPanel.tsx`, `SuggestedChips.tsx`, `ConfidenceBadge.tsx`
- `OutputPanel.tsx`, `SqlCard.tsx`, `ExplanationCard.tsx`, `ResultsTable.tsx`, `ResultsChart.tsx`, `ViewToggle.tsx`
- `BottomTabs.tsx` with `HistoryTab.tsx`, `SavedTab.tsx`, `SchemaExplorer.tsx`
- `EmptyState.tsx`, `ErrorCard.tsx`
- Mock data file `lib/mockData.ts` so the UI feels alive (sample queries, results, schema).

## Design system updates
- Extend `index.css` with semantic tokens: `--primary` (blue), `--accent` (purple), gradient utility, code-block surface, success/warning/danger tints — both light and dark.
- Add `bg-gradient-primary`, `text-gradient`, `shadow-soft`, `shadow-glow` utilities in `tailwind.config.ts`.
- Use shadcn primitives already in the project (Button, Card, Tabs, Table, Tooltip, Switch, Sidebar, Sheet, Dropdown).

## Pages & routing
- `/` → main QueryGenie workspace (replaces placeholder Index).
- Sidebar routes are visual-only stubs for now (Dashboard/Analytics/Settings render simple placeholder pages) so the nav feels real.

Outcome: a production-feel, premium SaaS frontend ready to drop into a MERN stack — purely UI, no backend code.
