"use client";

import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { SurveyStatus } from "@/components/dashboard/types";
import type { TranslationKey } from "@/lib/translations";

export const statusConfig: Record<SurveyStatus, { key: TranslationKey; className: string; dot: string }> = {
  active: { key: "dash.status.live", className: "border-emerald-200 bg-emerald-500/10 text-emerald-600", dot: "bg-emerald-500" },
  paused: { key: "dash.status.paused", className: "border-slate-200 bg-slate-100 text-slate-600", dot: "bg-slate-400" },
  done: { key: "dash.status.completed", className: "border-[#2a9d8f]/20 bg-[#2a9d8f]/10 text-[#2a9d8f]", dot: "bg-[#2a9d8f]" },
  draft: { key: "dash.status.draft", className: "border-amber-200 bg-amber-50 text-amber-600", dot: "bg-amber-500" },
};

export function StatusBadge({ status }: { status: SurveyStatus }) {
  const { t } = useLanguage();
  const cfg = statusConfig[status];
  return (
    <Badge variant="outline" className={cn("w-fit gap-1.5 border font-medium", cfg.className)}>
      <span className={cn("size-1.5 rounded-full", cfg.dot, status === "active" && "animate-pulse")} />
      {t(cfg.key)}
    </Badge>
  );
}
