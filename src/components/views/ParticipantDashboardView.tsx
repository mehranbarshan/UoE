"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Compass,
  ClipboardCheck,
  Trophy,
  Award,
  Settings,
  Coins,
  Star,
  Flame,
  Crown,
  ArrowRight,
  ArrowLeft,
  Clock,
  Target,
  Zap,
} from "lucide-react";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/lib/i18n";
import { useNav } from "@/lib/store";
import { surveys, leaderboard } from "@/lib/content";
import { cn } from "@/lib/utils";
import type { TranslationKey } from "@/lib/translations";

const navItems: { key: TranslationKey; icon: typeof LayoutDashboard }[] = [
  { key: "dashboard.nav.overview", icon: LayoutDashboard },
  { key: "dash.available", icon: Compass },
  { key: "dash.completed", icon: ClipboardCheck },
  { key: "gamify.leaderboard", icon: Trophy },
  { key: "dash.badges", icon: Award },
  { key: "dashboard.nav.settings", icon: Settings },
];

const myBadges = [
  { icon: Flame, fa: "۷ روز پیاپی", en: "7-day streak", color: "#e5484d" },
  { icon: Star, fa: "۱۰۰ پاسخ", en: "100 answers", color: "#f39237" },
  { icon: Crown, fa: "نخبگان", en: "Top 1%", color: "#e9c46a" },
  { icon: Award, fa: "متخصص سلامت", en: "Health expert", color: "#2a9d8f" },
];

const completed = [
  { titleFa: "عادات کار از راه دور", titleEn: "Remote work habits", date: "2025-04-12", points: 120 },
  { titleFa: "یادگیری آنلاین", titleEn: "Online learning", date: "2025-04-08", points: 90 },
  { titleFa: "رفتار مصرف‌کننده", titleEn: "Consumer behavior", date: "2025-04-02", points: 110 },
];

export function ParticipantDashboardView() {
  const { t, locale } = useLanguage();
  const { setView } = useNav();
  const [active, setActive] = React.useState("dashboard.nav.overview");
  const Arrow = locale === "fa" ? ArrowLeft : ArrowRight;

  const stats = [
    { label: t("dash.points"), value: "7,340", icon: Coins, color: "#f39237" },
    { label: t("dash.level"), value: "Lv 5", icon: Zap, color: "#1d3b4c" },
    { label: t("dash.completed"), value: "47", icon: ClipboardCheck, color: "#2a9d8f" },
    { label: t("dash.rank"), value: "#412", icon: Trophy, color: "#6a8caf" },
  ];

  const recommended = surveys.slice(0, 3);
  const fmtDate = (d: string) => {
    try {
      return new Intl.DateTimeFormat(locale === "fa" ? "fa-IR" : "en-US", { month: "short", day: "numeric" }).format(new Date(d));
    } catch {
      return d;
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
                N
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-foreground">{t("dashboard.participant.welcome")}</p>
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
              <h1 className="text-2xl font-extrabold text-foreground">{t("dashboard.participant.title")}</h1>
              <p className="text-sm text-muted-foreground">{t("dashboard.participant.welcome")}</p>
            </div>
            <Button className="bg-[#f39237] text-white hover:bg-[#e07f24]" onClick={() => setView("marketplace")}>
              <Compass className="size-4" />
              {t("hero.cta.secondary")}
            </Button>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-2xl border border-border bg-card p-4 shadow-soft"
                >
                  <div className="grid size-9 place-items-center rounded-lg" style={{ backgroundColor: `${s.color}15`, color: s.color }}>
                    <Icon className="size-5" />
                  </div>
                  <p className="mt-3 text-2xl font-extrabold text-foreground">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Level progress + badges */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-soft lg:col-span-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-foreground">{t("gamify.level.label")}</h3>
                <span className="text-xs font-semibold text-[#f39237]">{t("gamify.next.level")}</span>
              </div>
              <div className="mt-4">
                <Progress value={71} className="h-3 bg-muted" />
                <div className="mt-1.5 flex justify-between text-xs text-muted-foreground">
                  <span>7,340 / 8,500</span>
                  <span>71%</span>
                </div>
              </div>

              <h4 className="mt-6 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                {t("dash.badges")} (4)
              </h4>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {myBadges.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.06 }}
                      className="flex flex-col items-center gap-1.5 rounded-xl border border-border bg-background p-2.5 text-center"
                    >
                      <div className="grid size-9 place-items-center rounded-full text-white" style={{ backgroundColor: b.color }}>
                        <Icon className="size-[18px]" />
                      </div>
                      <span className="text-[10px] font-medium leading-tight text-muted-foreground">
                        {locale === "fa" ? b.fa : b.en}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Mini leaderboard */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <h3 className="mb-3 text-sm font-bold text-foreground">{t("gamify.leaderboard")}</h3>
              <div className="space-y-2.5">
                {leaderboard.slice(0, 4).map((e) => {
                  const isYou = e.nameEn === "You";
                  return (
                    <div key={e.rank} className={cn("flex items-center gap-2.5 rounded-lg p-2", isYou && "bg-[#f39237]/8")}>
                      <span className={cn("grid size-6 place-items-center rounded-full text-[11px] font-bold", e.rank <= 3 ? "bg-[#e9c46a]/20 text-[#b8860b]" : "bg-muted text-muted-foreground")}>
                        {e.rank}
                      </span>
                      <span className={cn("flex-1 truncate text-xs font-semibold", isYou ? "text-[#f39237]" : "text-foreground")}>
                        {locale === "fa" ? e.nameFa : e.nameEn}
                      </span>
                      <span className="text-xs font-bold text-foreground">
                        {e.points.toLocaleString(locale === "fa" ? "fa-IR" : "en-US")}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Recommended surveys */}
          <div className="rounded-2xl border border-border bg-card shadow-soft">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <h3 className="text-sm font-bold text-foreground">{t("dash.recommended")}</h3>
              <Button variant="ghost" size="sm" onClick={() => setView("marketplace")}>
                {t("common.viewAll")}
                <Arrow className="size-3.5" />
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-3">
              {recommended.map((s) => (
                <div key={s.id} className="flex flex-col rounded-xl border border-border bg-background p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <Badge variant="outline" className="border-0 bg-[#2a9d8f]/10 text-[#2a9d8f]">
                      <Target className="size-3" />
                      {s.match}%
                    </Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="size-3" />
                      {s.minutes} {t("marketplace.minutes")}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    {locale === "fa" ? s.titleFa : s.titleEn}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {locale === "fa" ? s.orgFa : s.orgEn}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="flex items-center gap-1 text-sm font-bold text-[#f39237]">
                      <Coins className="size-3.5" />+{s.reward}
                    </span>
                    <Button size="sm" className="bg-[#f39237] text-white hover:bg-[#e07f24] h-7 px-3 text-xs" onClick={() => setView("marketplace")}>
                      {t("marketplace.join")}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Completed */}
          <div className="rounded-2xl border border-border bg-card shadow-soft">
            <div className="border-b border-border px-5 py-4">
              <h3 className="text-sm font-bold text-foreground">{t("dash.completed")}</h3>
            </div>
            <div className="divide-y divide-border">
              {completed.map((c, i) => (
                <div key={i} className="flex items-center gap-3 px-5 py-3.5">
                  <div className="grid size-9 place-items-center rounded-lg bg-[#2a9d8f]/10 text-[#2a9d8f]">
                    <ClipboardCheck className="size-[18px]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">{locale === "fa" ? c.titleFa : c.titleEn}</p>
                    <p className="text-xs text-muted-foreground">{fmtDate(c.date)}</p>
                  </div>
                  <span className="flex items-center gap-1 text-sm font-bold text-[#f39237]">
                    <Coins className="size-3.5" />+{c.points}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
