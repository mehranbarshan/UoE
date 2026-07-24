"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from "recharts";
import {
  TrendingUp,
  Users,
  ShieldCheck,
  Clock,
  Globe,
  GraduationCap,
  MapPin,
  Activity,
  ArrowRight,
  ArrowLeft,
  Download,
} from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/i18n";
import { useNav } from "@/lib/store";
import { responseData, qualityData } from "@/lib/content";
import { toast } from "sonner";

const ageData = [
  { range: "18-24", value: 32 },
  { range: "25-34", value: 41 },
  { range: "35-44", value: 18 },
  { range: "45-54", value: 7 },
  { range: "55+", value: 2 },
];

const eduData: { name: string; labelKey: "create.edu.bachelor" | "create.edu.master" | "create.edu.phd" | "create.edu.highschool"; value: number; color: string }[] = [
  { name: "bachelor", labelKey: "create.edu.bachelor", value: 44, color: "#1d3b4c" },
  { name: "master", labelKey: "create.edu.master", value: 28, color: "#f39237" },
  { name: "phd", labelKey: "create.edu.phd", value: 16, color: "#2a9d8f" },
  { name: "highschool", labelKey: "create.edu.highschool", value: 12, color: "#6a8caf" },
];

export function AnalyticsView() {
  const { t, locale, formatNumber, formatPercent } = useLanguage();
  const { setView } = useNav();
  const Arrow = locale === "fa" ? ArrowLeft : ArrowRight;

  const responseChart = responseData.map((d) => ({ name: locale === "fa" ? d.fa : d.en, responses: d.responses }));

  const qualityScore = 92;

  const stats = [
    { label: t("dash.stat.responses"), value: formatNumber(3254), icon: Activity, color: "#f39237", trend: "+412" },
    { label: t("dash.stat.completion"), value: formatPercent(87), icon: TrendingUp, color: "#2a9d8f", trend: "+5%" },
    { label: t("dash.stat.quality"), value: formatPercent(92), icon: ShieldCheck, color: "#1d3b4c", trend: "+3%" },
    { label: t("dash.stat.active"), value: formatNumber(4), icon: Clock, color: "#6a8caf", trend: "+1" },
  ];

  return (
    <>
      <PageHeader badge={t("dashboard.analytics.title")} title={t("dashboard.analytics.title")} subtitle={t("analytics.subtitle")}>
        <Button variant="outline" className="border-[#1d3b4c]/20" onClick={() => toast.success(t("analytics.export.toast"))}>
          <Download className="size-4" />
          {t("analytics.export.report")}
        </Button>
      </PageHeader>

      <Section className="bg-background py-10">
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

        {/* Response trend */}
        <div className="mt-6 rounded-2xl border border-border bg-card p-5 shadow-soft">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-bold text-foreground">{t("dash.response.chart")}</h3>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Activity className="size-3.5 text-[#f39237]" />
              {t("analytics.weekly")}
            </span>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={responseChart} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8ec" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
                <YAxis tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8ec", fontSize: 12 }} />
                <Line type="monotone" dataKey="responses" stroke="#f39237" strokeWidth={2.5} dot={{ fill: "#f39237", r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Demographics row */}
        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Age bar */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-foreground">
              <Users className="size-4 text-[#1d3b4c]" />
              {t("analytics.age.distribution")}
            </h3>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ageData} margin={{ top: 4, right: 4, left: -24, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8ec" vertical={false} />
                  <XAxis dataKey="range" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
                  <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8ec", fontSize: 12 }} cursor={{ fill: "#f3923710" }} />
                  <Bar dataKey="value" fill="#1d3b4c" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Education pie */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-foreground">
              <GraduationCap className="size-4 text-[#2a9d8f]" />
              {t("create.audience.education")}
            </h3>
            <div className="relative h-36 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={eduData} dataKey="value" nameKey="name" innerRadius={38} outerRadius={58} paddingAngle={3}>
                    {eduData.map((d) => (
                      <Cell key={d.name} fill={d.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8ec", fontSize: 12 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-1.5">
              {eduData.map((d) => (
                <div key={d.name} className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <span className="size-2 rounded-full" style={{ backgroundColor: d.color }} />
                    {t(d.labelKey)}
                  </span>
                  <span className="font-semibold text-foreground">{d.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quality radial */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-foreground">
              <ShieldCheck className="size-4 text-[#f39237]" />
              {t("dash.stat.quality")}
            </h3>
            <div className="relative h-36 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart innerRadius="62%" outerRadius="100%" data={[{ value: qualityScore, fill: "#2a9d8f" }]} startAngle={90} endAngle={-270}>
                  <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                  <RadialBar background={{ fill: "#e2e8ec" }} dataKey="value" cornerRadius={20} />
                </RadialBarChart>
              </ResponsiveContainer>
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-extrabold text-foreground">{qualityScore}%</span>
                <span className="text-[10px] text-muted-foreground">{t("analytics.quality.excellent")}</span>
              </div>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-1.5">
              {qualityData.map((d) => (
                <div key={d.name} className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <span className="size-2 rounded-full" style={{ backgroundColor: d.color }} />
                    {locale === "fa" ? d.label.fa : d.label.en}
                  </span>
                  <span className="font-semibold text-foreground">{d.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Geography + quality flags */}
        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-foreground">
              <MapPin className="size-4 text-[#6a8caf]" />
              {t("analytics.geographic")}
            </h3>
            <div className="space-y-3">
              {[
                { fa: "تهران", en: "Tehran", pct: 38 },
                { fa: "اصفهان", en: "Isfahan", pct: 18 },
                { fa: "مشهد", en: "Mashhad", pct: 14 },
                { fa: "شیراز", en: "Shiraz", pct: 10 },
                { fa: "تبریز", en: "Tabriz", pct: 7 },
                { fa: "سایر", en: "Others", pct: 13 },
              ].map((g) => (
                <div key={g.en} className="flex items-center gap-3">
                  <span className="w-16 shrink-0 text-xs font-medium text-foreground">{locale === "fa" ? g.fa : g.en}</span>
                  <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-muted">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${g.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-[#1d3b4c] to-[#f39237]"
                    />
                  </div>
                  <span className="w-8 text-end text-xs font-bold text-foreground">{g.pct}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-foreground">
              <Globe className="size-4 text-[#2a9d8f]" />
              {t("analytics.quality.flags")}
            </h3>
            <div className="space-y-3">
              {[
                { key: "analytics.flag.random" as const, value: "23", color: "#e5484d" },
                { key: "analytics.flag.suspicious" as const, value: "11", color: "#e9c46a" },
                { key: "analytics.flag.speeders" as const, value: "8", color: "#f39237" },
                { key: "analytics.flag.verified" as const, value: "3,212", color: "#2a9d8f" },
              ].map((f, i) => (
                <div key={i} className="flex items-center justify-between rounded-xl border border-border bg-background p-3">
                  <span className="flex items-center gap-2 text-sm text-foreground">
                    <span className="size-2.5 rounded-full" style={{ backgroundColor: f.color }} />
                    {t(f.key)}
                  </span>
                  <span className="text-sm font-bold" style={{ color: f.color }}>
                    {f.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" onClick={() => setView("researcher-dashboard")}>
            {locale === "fa" ? <ArrowRight className="size-4" /> : <ArrowLeft className="size-4" />}
            {t("dashboard.researcher.title")}
          </Button>
        </div>
      </Section>
    </>
  );
}
