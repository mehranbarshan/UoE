"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Zap,
  Flame,
  Target,
  Coins,
  Clock,
  ClipboardCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { useLanguage } from "@/lib/i18n";
import { useNav } from "@/lib/store";
import { surveys, type SurveyItem } from "@/lib/content";
import { cn } from "@/lib/utils";
import type { TranslationKey } from "@/lib/translations";

type FilterId = "all" | "fastest" | "reward" | "matched";

const filters: { key: TranslationKey; value: FilterId; icon: typeof Zap }[] = [
  { key: "participant.filter.all", value: "all", icon: Compass },
  { key: "participant.filter.fastest", value: "fastest", icon: Zap },
  { key: "participant.filter.reward", value: "reward", icon: Flame },
  { key: "participant.filter.matched", value: "matched", icon: Target },
];

const categoryKey: Record<SurveyItem["category"], TranslationKey> = {
  health: "participant.cat.health",
  education: "participant.cat.education",
  social: "participant.cat.social",
  tech: "participant.cat.tech",
  business: "participant.cat.business",
};

const completed = [
  { titleFa: "عادات کار از راه دور", titleEn: "Remote work habits", date: "2025-04-12", points: 120 },
  { titleFa: "یادگیری آنلاین", titleEn: "Online learning", date: "2025-04-08", points: 90 },
  { titleFa: "رفتار مصرف‌کننده", titleEn: "Consumer behavior", date: "2025-04-02", points: 110 },
];

export function ParticipantSurveysPanel() {
  const { t, locale, formatNumber } = useLanguage();
  const { setView } = useNav();
  const [filter, setFilter] = React.useState<FilterId>("all");
  const Arrow = locale === "fa" ? ArrowLeft : ArrowRight;

  const filteredSurveys = React.useMemo(() => {
    const items = [...surveys];
    if (filter === "fastest") items.sort((a, b) => a.minutes - b.minutes);
    if (filter === "reward") items.sort((a, b) => b.reward - a.reward);
    if (filter === "matched") items.sort((a, b) => b.match - a.match);
    return items;
  }, [filter]);

  const handleReport = () => {
    toast.info(t("participant.history.report.success"));
  };

  const fmtDate = (d: string) => {
    try {
      return new Intl.DateTimeFormat(locale === "fa" ? "fa-IR" : "en-US", { month: "short", day: "numeric" }).format(new Date(d));
    } catch {
      return d;
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Recommended surveys */}
      <div className="rounded-2xl border border-border bg-card shadow-soft">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h3 className="text-sm font-bold text-foreground">{t("dash.recommended")}</h3>
          <Button variant="ghost" size="sm" onClick={() => setView("marketplace")}>
            {t("common.viewAll")}
            <Arrow className="size-3.5" />
          </Button>
        </div>

        {/* Quick filter bar */}
        <div className="flex gap-2 overflow-x-auto px-4 pt-4 pb-1">
          {filters.map((f) => {
            const Icon = f.icon;
            const isActive = filter === f.value;
            return (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={cn(
                  "flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-semibold transition-colors",
                  isActive
                    ? "border-[#f39237] bg-[#f39237] text-white"
                    : "border-border bg-background text-muted-foreground hover:border-[#f39237]/50 hover:text-foreground"
                )}
              >
                <Icon className={cn("size-3.5", isActive ? "text-white" : "text-[#f39237]")} />
                {t(f.key)}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-3">
          {filteredSurveys.map((s) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col rounded-2xl border border-slate-200 bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-2.5 flex flex-wrap items-center gap-1.5">
                <Badge className="border-emerald-200 bg-emerald-50 font-bold text-emerald-700">
                  <Coins className="size-3" /> +{formatNumber(s.reward)} {t("dash.points")}
                </Badge>
                <Badge variant="outline" className="border-slate-200 bg-slate-50 font-semibold text-slate-600">
                  <Clock className="size-3" /> {formatNumber(s.minutes)} {t("marketplace.minutes")}
                </Badge>
                <Badge variant="outline" className="border-[#1a2b49]/10 bg-[#1a2b49]/5 font-semibold text-[#1a2b49]">
                  {t(categoryKey[s.category])}
                </Badge>
              </div>
              <p className="text-sm font-semibold text-foreground">
                {locale === "fa" ? s.titleFa : s.titleEn}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {locale === "fa" ? s.orgFa : s.orgEn}
              </p>
              <div className="mt-3 flex items-center justify-between">
                <Badge variant="outline" className="border-0 bg-[#2a9d8f]/10 text-[#2a9d8f]">
                  <Target className="size-3" />
                  {formatNumber(s.match)}%
                </Badge>
                <Button size="sm" className="h-7 bg-[#f39237] px-3 text-xs text-white hover:bg-[#e07f24]" onClick={() => setView("marketplace")}>
                  {t("marketplace.join")}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Participation history */}
      <div className="rounded-2xl border border-border bg-card shadow-soft">
        <div className="border-b border-border px-5 py-4">
          <h3 className="text-sm font-bold text-foreground">{t("participant.history.title")}</h3>
        </div>
        <div className="divide-y divide-border">
          {completed.map((c, i) => (
            <div key={i} className="flex flex-wrap items-center gap-3 px-5 py-3.5">
              <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-[#2a9d8f]/10 text-[#2a9d8f]">
                <ClipboardCheck className="size-[18px]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-foreground">{locale === "fa" ? c.titleFa : c.titleEn}</p>
                <p className="text-xs text-muted-foreground">{fmtDate(c.date)}</p>
              </div>
              <span className="flex items-center gap-1 text-sm font-bold text-[#2a9d8f]">
                <Coins className="size-3.5" />+{formatNumber(c.points)}
              </span>
              <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                <CheckCircle2 className="size-3.5" />
                {t("participant.history.earned")}
              </span>
              <button
                onClick={handleReport}
                className="text-xs font-medium text-muted-foreground underline-offset-2 transition-colors hover:text-[#f39237] hover:underline"
              >
                {t("participant.history.report")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
