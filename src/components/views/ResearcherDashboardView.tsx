"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, FlaskConical, FileBarChart, Settings, UserCircle, Coins, Plus } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { CreditsPanel } from "@/components/dashboard/panels/CreditsPanel";
import { UserProfilePanel } from "@/components/dashboard/panels/UserProfilePanel";
import { OverviewPanel } from "@/components/dashboard/panels/OverviewPanel";
import { SurveysPanel } from "@/components/dashboard/panels/SurveysPanel";
import { ReportsPanel } from "@/components/dashboard/panels/ReportsPanel";
import { SurveyDetailWorkspace } from "@/components/dashboard/panels/SurveyDetailWorkspace";
import type { MySurvey } from "@/components/dashboard/types";
import { toast } from "sonner";
import { useLanguage } from "@/lib/i18n";
import { useNav } from "@/lib/store";
import { cn } from "@/lib/utils";
import type { TranslationKey } from "@/lib/translations";

const navItems: { key: TranslationKey; icon: typeof LayoutDashboard }[] = [
  { key: "dashboard.nav.overview", icon: LayoutDashboard },
  { key: "dashboard.nav.surveys", icon: FlaskConical },
  { key: "dashboard.nav.reports", icon: FileBarChart },
  { key: "dashboard.nav.credits", icon: Coins },
  { key: "dashboard.nav.profile", icon: UserCircle },
  { key: "dashboard.nav.settings", icon: Settings },
];

const initialSurveys: MySurvey[] = [
  { id: "1", titleFa: "عادات کار از راه دور", titleEn: "Remote work habits", responses: 842, target: 1000, status: "active", link: "https://uoe.app/s/remote-work" },
  { id: "2", titleFa: "تأثیر خواب بر شناخت", titleEn: "Sleep impact on cognition", responses: 531, target: 600, status: "paused", link: "https://uoe.app/s/sleep-cognition" },
  { id: "3", titleFa: "یادگیری آنلاین", titleEn: "Online learning", responses: 1203, target: 1200, status: "done", link: "https://uoe.app/s/online-learning" },
  { id: "4", titleFa: "ابزارهای AI در توسعه", titleEn: "AI tools in dev", responses: 0, target: 500, status: "draft", link: "https://uoe.app/s/ai-tools" },
];

function PlaceholderPanel({ title }: { title: string }) {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border bg-card px-6 py-16 text-center">
      <div className="grid size-12 place-items-center rounded-2xl bg-muted text-muted-foreground">
        <Settings className="size-6" />
      </div>
      <h3 className="text-sm font-bold text-foreground">{title}</h3>
      <p className="max-w-sm text-xs leading-5 text-muted-foreground">{t("dash.placeholder")}</p>
    </div>
  );
}

export function ResearcherDashboardView() {
  const { t, locale } = useLanguage();
  const { userName, openCreateOptions } = useNav();
  const [active, setActive] = React.useState<TranslationKey>("dashboard.nav.overview");
  const [surveys, setSurveys] = React.useState<MySurvey[]>(initialSurveys);
  const [selectedSurveyId, setSelectedSurveyId] = React.useState<string | null>(null);

  const selectedSurvey = selectedSurveyId ? surveys.find((s) => s.id === selectedSurveyId) ?? null : null;

  const handleTogglePause = (id: string) => {
    const target = surveys.find((s) => s.id === id);
    if (!target) return;
    const pausing = target.status === "active";
    setSurveys((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: pausing ? "paused" : "active" } : s))
    );
    toast.success(pausing ? t("dash.pause.toast") : t("dash.resume.toast"));
  };

  const handleDuplicate = (id: string) => {
    const source = surveys.find((s) => s.id === id);
    if (!source) return;
    const copy: MySurvey = {
      ...source,
      id: `${id}-copy-${Date.now()}`,
      titleFa: `${source.titleFa} (کپی)`,
      titleEn: `${source.titleEn} (Copy)`,
      responses: 0,
      status: "draft",
    };
    setSurveys((prev) => [copy, ...prev]);
    toast.success(t("dash.survey.duplicate.success"));
  };

  const handleDelete = (id: string) => {
    setSurveys((prev) => prev.filter((s) => s.id !== id));
    setSelectedSurveyId(null);
    toast.success(t("dash.survey.delete.success"));
  };

  const handleUpdate = (id: string, patch: Partial<MySurvey>) => {
    setSurveys((prev) => prev.map((s) => (s.id === id ? { ...s, ...patch } : s)));
  };

  const openSurvey = (survey: MySurvey) => {
    setActive("dashboard.nav.surveys");
    setSelectedSurveyId(survey.id);
  };

  const renderPanel = () => {
    if (selectedSurvey) {
      return (
        <SurveyDetailWorkspace
          survey={selectedSurvey}
          onBack={() => setSelectedSurveyId(null)}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
          onDuplicate={handleDuplicate}
          onTogglePause={handleTogglePause}
        />
      );
    }
    switch (active) {
      case "dashboard.nav.profile":
        return <UserProfilePanel />;
      case "dashboard.nav.overview":
        return <OverviewPanel />;
      case "dashboard.nav.surveys":
        return <SurveysPanel surveys={surveys} onSelect={openSurvey} onTogglePause={handleTogglePause} />;
      case "dashboard.nav.reports":
        return <ReportsPanel />;
      case "dashboard.nav.credits":
        return <CreditsPanel />;
      default:
        return <PlaceholderPanel title={t(active)} />;
    }
  };

  return (
    <Section className="bg-muted/30 py-8 lg:py-10">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr]">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-20 lg:h-fit">
          <div className="rounded-2xl border border-border bg-card p-3 shadow-soft">
            <div className="mb-3 flex items-center gap-3 px-2 py-2">
              <div className="grid size-10 place-items-center rounded-xl gradient-brand text-sm font-bold text-white">
                {userName ? userName.charAt(0).toUpperCase() : (locale === "fa" ? "د" : "U")}
              </div>
              <div className="min-w-0">
                <p className="truncate text-xs text-muted-foreground">{t("dashboard.welcome")}</p>
                <p className="truncate text-sm font-bold text-foreground">
                  {userName || (locale === "fa" ? "کاربر" : "User")}
                </p>
              </div>
            </div>
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => {
                      setActive(item.key);
                      setSelectedSurveyId(null);
                    }}
                    className={cn(
                      "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors text-start",
                      isActive
                        ? "bg-[#1d3b4c] text-white"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    )}
                  >
                    <Icon className="size-4 shrink-0" />
                    {t(item.key)}
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Main */}
        <div className="flex flex-col gap-6">
          {/* Header row */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-extrabold text-foreground">
                {selectedSurvey
                  ? (locale === "fa" ? selectedSurvey.titleFa : selectedSurvey.titleEn)
                  : t(active)}
              </h1>
              <p className="text-sm text-muted-foreground">
                {locale === "fa" ? `خوش آمدید، ${userName || "کاربر"}` : `Welcome, ${userName || "User"}`}
              </p>
            </div>
            <Button className="bg-[#f39237] text-white hover:bg-[#e07f24]" onClick={openCreateOptions}>
              <Plus className="size-4" />
              {t("nav.start")}
            </Button>
          </div>

          <motion.div
            key={`${active}-${selectedSurveyId ?? "list"}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderPanel()}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
