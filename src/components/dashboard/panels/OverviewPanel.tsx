"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  FlaskConical,
  MessageSquareText,
  TrendingUp,
  ShieldCheck,
  Plus,
  Download,
  Target,
} from "lucide-react";
import { WalletCard } from "@/components/dashboard/WalletCard";
import { useLanguage } from "@/lib/i18n";

const activity: {
  icon: typeof Plus;
  textFa: string;
  textEn: string;
  timeFa: string;
  timeEn: string;
  color: string;
}[] = [
  {
    icon: MessageSquareText,
    textFa: "پاسخ جدید در «عادات کار از راه دور»",
    textEn: "New response in “Remote work habits”",
    timeFa: "۱۰ دقیقه پیش",
    timeEn: "10 min ago",
    color: "#2a9d8f",
  },
  {
    icon: ShieldCheck,
    textFa: "۱۲ پاسخ مشکوک شناسایی شد",
    textEn: "12 suspicious responses flagged",
    timeFa: "۱ ساعت پیش",
    timeEn: "1 hour ago",
    color: "#e5484d",
  },
  {
    icon: Download,
    textFa: "خروجی Excel دانلود شد",
    textEn: "Excel export downloaded",
    timeFa: "دیروز",
    timeEn: "Yesterday",
    color: "#f39237",
  },
  {
    icon: Target,
    textFa: "پرسشنامه «یادگیری آنلاین» به هدف رسید",
    textEn: "“Online learning” reached its target",
    timeFa: "۲ روز پیش",
    timeEn: "2 days ago",
    color: "#6a8caf",
  },
];

export function OverviewPanel() {
  const { t, locale, formatNumber, formatPercent } = useLanguage();

  const stats = [
    { label: t("dash.stat.active"), value: formatNumber(4), icon: FlaskConical, color: "#1d3b4c", trend: "+2" },
    { label: t("dash.stat.responses"), value: formatNumber(3254), icon: MessageSquareText, color: "#f39237", trend: "+412" },
    { label: t("dash.stat.completion"), value: formatPercent(87), icon: TrendingUp, color: "#2a9d8f", trend: "+5%" },
    { label: t("dash.stat.quality"), value: formatPercent(92), icon: ShieldCheck, color: "#6a8caf", trend: "+3%" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <WalletCard />

      {/* KPI cards */}
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
                <span className="rounded-full bg-[#2a9d8f]/10 px-2 py-0.5 text-xs font-semibold text-[#2a9d8f]">
                  {s.trend}
                </span>
              </div>
              <p className="mt-3 text-2xl font-extrabold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Recent activity */}
      <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
        <h3 className="text-sm font-bold text-foreground">{t("dash.overview.recent")}</h3>
        <div className="mt-3 divide-y divide-border">
          {activity.map((a, i) => {
            const Icon = a.icon;
            return (
              <div key={i} className="flex items-center gap-3 py-3">
                <div className="grid size-9 shrink-0 place-items-center rounded-lg" style={{ backgroundColor: `${a.color}15`, color: a.color }}>
                  <Icon className="size-4" />
                </div>
                <p className="min-w-0 flex-1 truncate text-sm font-medium text-foreground">
                  {locale === "fa" ? a.textFa : a.textEn}
                </p>
                <span className="shrink-0 text-xs text-muted-foreground">
                  {locale === "fa" ? a.timeFa : a.timeEn}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
