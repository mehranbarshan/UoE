"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Area,
  AreaChart,
} from "recharts";
import {
  LayoutDashboard,
  FlaskConical,
  MessageSquareText,
  Users,
  ShieldCheck,
  FileBarChart,
  Settings,
  Plus,
  TrendingUp,
  Activity,
  Clock,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/lib/i18n";
import { useNav } from "@/lib/store";
import { responseData, qualityData } from "@/lib/content";
import { cn } from "@/lib/utils";
import type { TranslationKey } from "@/lib/translations";

const navItems: { key: TranslationKey; icon: typeof LayoutDashboard }[] = [
  { key: "dashboard.nav.overview", icon: LayoutDashboard },
  { key: "dashboard.nav.surveys", icon: FlaskConical },
  { key: "dashboard.nav.responses", icon: MessageSquareText },
  { key: "dashboard.nav.audience", icon: Users },
  { key: "dashboard.nav.quality", icon: ShieldCheck },
  { key: "dashboard.nav.reports", icon: FileBarChart },
  { key: "dashboard.nav.settings", icon: Settings },
];

const mySurveys = [
  { id: "1", titleFa: "عادات کار از راه دور", titleEn: "Remote work habits", responses: 842, target: 1000, status: "active" },
  { id: "2", titleFa: "تأثیر خواب بر شناخت", titleEn: "Sleep impact on cognition", responses: 531, target: 600, status: "active" },
  { id: "3", titleFa: "یادگیری آنلاین", titleEn: "Online learning", responses: 1203, target: 1200, status: "done" },
  { id: "4", titleFa: "ابزارهای AI در توسعه", titleEn: "AI tools in dev", responses: 678, target: 1000, status: "active" },
];

export function ResearcherDashboardView() {
  const { t, locale } = useLanguage();
  const { setView } = useNav();
  const [active, setActive] = React.useState("dashboard.nav.overview");
  const Arrow = locale === "fa" ? ArrowLeft : ArrowRight;

  const stats = [
    { label: t("dash.stat.active"), value: "4", icon: FlaskConical, color: "#1d3b4c", trend: "+2" },
    { label: t("dash.stat.responses"), value: "3,254", icon: MessageSquareText, color: "#f39237", trend: "+412" },
    { label: t("dash.stat.completion"), value: "87%", icon: TrendingUp, color: "#2a9d8f", trend: "+5%" },
    { label: t("dash.stat.quality"), value: "92%", icon: ShieldCheck, color: "#6a8caf", trend: "+3%" },
  ];

  const chartData = responseData.map((d) => ({
    name: locale === "fa" ? d.fa : d.en,
    responses: d.responses,
  }));

  return (
    <Section className="bg-muted/30 py-8 lg:py-10">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr]">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-20 lg:h-fit">
          <div className="rounded-2xl border border-border bg-card p-3 shadow-soft">
            <div className="mb-3 flex items-center gap-3 px-2 py-2">
              <div className="grid size-10 place-items-center rounded-xl gradient-brand text-sm font-bold text-white">
                {locale === "fa" ? "د.ص" : "DS"}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-foreground">{t("dashboard.researcher.welcome")}</p>
                <p className="truncate text-xs text-muted-foreground">{t("dashboard.researcher.title")}</p>
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
              <h1 className="text-2xl font-extrabold text-foreground">{t("dashboard.researcher.title")}</h1>
              <p className="text-sm text-muted-foreground">{t("dashboard.researcher.welcome")}</p>
            </div>
            <Button className="bg-[#f39237] text-white hover:bg-[#e07f24]" onClick={() => setView("create")}>
              <Plus className="size-4" />
              {t("nav.start")}
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
                  <div className="flex items-center justify-between">
                    <div className="grid size-9 place-items-center rounded-lg" style={{ backgroundColor: `${s.color}15`, color: s.color }}>
                      <Icon className="size-5" />
                    </div>
                    <Badge variant="outline" className="border-0 bg-[#2a9d8f]/10 text-[#2a9d8f]">
                      {s.trend}
                    </Badge>
                  </div>
                  <p className="mt-3 text-2xl font-extrabold text-foreground">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Charts row */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {/* Response chart */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-soft lg:col-span-2">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-bold text-foreground">{t("dash.response.chart")}</h3>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Activity className="size-3.5 text-[#f39237]" />
                  7 {locale === "fa" ? "روز" : "days"}
                </span>
              </div>
              <div className="h-56 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="respGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f39237" stopOpacity={0.35} />
                        <stop offset="100%" stopColor="#f39237" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8ec" vertical={false} />
                    <XAxis dataKey="name" tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
                    <Tooltip
                      contentStyle={{ borderRadius: 12, border: "1px solid #e2e8ec", fontSize: 12 }}
                      cursor={{ stroke: "#f39237", strokeWidth: 1 }}
                    />
                    <Area type="monotone" dataKey="responses" stroke="#f39237" strokeWidth={2.5} fill="url(#respGrad)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Quality pie */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <h3 className="mb-4 text-sm font-bold text-foreground">{t("dash.quality.chart")}</h3>
              <div className="relative h-40 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={qualityData} dataKey="value" nameKey="name" innerRadius={42} outerRadius={64} paddingAngle={3}>
                      {qualityData.map((d) => (
                        <Cell key={d.name} fill={d.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8ec", fontSize: 12 }} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xl font-extrabold text-foreground">92%</span>
                  <span className="text-[10px] text-muted-foreground">{t("dash.stat.quality")}</span>
                </div>
              </div>
              <div className="mt-3 space-y-1.5">
                {qualityData.map((d) => (
                  <div key={d.name} className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <span className="size-2.5 rounded-full" style={{ backgroundColor: d.color }} />
                      {locale === "fa" ? d.label.fa : d.label.en}
                    </span>
                    <span className="font-semibold text-foreground">{d.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* My surveys table */}
          <div className="rounded-2xl border border-border bg-card shadow-soft">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <h3 className="text-sm font-bold text-foreground">{t("dash.my.surveys")}</h3>
              <Button variant="ghost" size="sm" onClick={() => setView("analytics")}>
                {t("dashboard.analytics.title")}
                <Arrow className="size-3.5" />
              </Button>
            </div>
            <div className="divide-y divide-border">
              {mySurveys.map((s) => {
                const pct = Math.min(100, Math.round((s.responses / s.target) * 100));
                return (
                  <div key={s.id} className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:gap-4">
                    <div className="flex flex-1 items-center gap-3">
                      <div className="grid size-9 place-items-center rounded-lg bg-[#1d3b4c]/10 text-[#1d3b4c]">
                        <FlaskConical className="size-[18px]" />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-foreground">
                          {locale === "fa" ? s.titleFa : s.titleEn}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {s.responses.toLocaleString(locale === "fa" ? "fa-IR" : "en-US")} / {s.target.toLocaleString(locale === "fa" ? "fa-IR" : "en-US")}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 sm:w-40">
                      <Progress value={pct} className="h-2 flex-1 bg-muted" />
                      <span className="text-xs font-bold text-foreground">{pct}%</span>
                    </div>
                    <Badge
                      variant="outline"
                      className={cn(
                        "w-fit border-0",
                        s.status === "done" ? "bg-[#2a9d8f]/10 text-[#2a9d8f]" : "bg-[#f39237]/10 text-[#f39237]"
                      )}
                    >
                      {s.status === "done"
                        ? locale === "fa" ? "تکمیل" : "Done"
                        : locale === "fa" ? "فعال" : "Active"}
                    </Badge>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
