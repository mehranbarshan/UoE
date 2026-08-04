"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, Compass, Award, Settings } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { ParticipantOverviewPanel } from "@/components/participant/panels/OverviewPanel";
import { ParticipantSurveysPanel } from "@/components/participant/panels/SurveysPanel";
import { ParticipantAchievementsPanel } from "@/components/participant/panels/AchievementsPanel";
import { ParticipantSettingsPanel } from "@/components/participant/panels/SettingsPanel";
import { useLanguage } from "@/lib/i18n";
import { useNav } from "@/lib/store";
import { cn } from "@/lib/utils";
import type { TranslationKey } from "@/lib/translations";

const navItems: { key: TranslationKey; icon: typeof LayoutDashboard }[] = [
  { key: "dashboard.nav.overview", icon: LayoutDashboard },
  { key: "dashboard.nav.surveys", icon: Compass },
  { key: "dashboard.nav.achievements", icon: Award },
  { key: "dashboard.nav.settings", icon: Settings },
];

export function ParticipantDashboardView() {
  const { t, locale } = useLanguage();
  const { setView, userName } = useNav();
  const [active, setActive] = React.useState<TranslationKey>("dashboard.nav.overview");

  const renderPanel = () => {
    switch (active) {
      case "dashboard.nav.surveys":
        return <ParticipantSurveysPanel />;
      case "dashboard.nav.achievements":
        return <ParticipantAchievementsPanel />;
      case "dashboard.nav.settings":
        return <ParticipantSettingsPanel />;
      default:
        return <ParticipantOverviewPanel />;
    }
  };

  return (
    <Section className="bg-muted/30 py-8 lg:py-10">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr]">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-20 lg:h-fit">
          <div className="rounded-2xl border border-border bg-card p-3 shadow-soft">
            <div className="mb-3 flex items-center gap-3 px-2 py-2">
              <div className="grid size-10 place-items-center rounded-xl gradient-orange text-sm font-bold text-white">
                {userName ? userName.charAt(0).toUpperCase() : "U"}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-foreground">
                  {locale === "fa" ? `خوش آمدید، ${userName || "کاربر"}` : `Welcome, ${userName || "User"}`}
                </p>
                <p className="truncate text-xs text-muted-foreground">{t("dashboard.participant.title")}</p>
              </div>
            </div>
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => setActive(item.key)}
                    className={cn(
                      "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors text-start",
                      isActive
                        ? "bg-[#f39237] text-white"
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
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-extrabold text-foreground">{t(active)}</h1>
              <p className="text-sm text-muted-foreground">
                {locale === "fa" ? `خوش آمدید، ${userName || "کاربر"}` : `Welcome, ${userName || "User"}`}
              </p>
            </div>
            <Button className="bg-[#f39237] text-white hover:bg-[#e07f24]" onClick={() => setView("marketplace")}>
              <Compass className="size-4" />
              {t("hero.cta.secondary")}
            </Button>
          </div>

          <motion.div
            key={active}
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
