"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { FlaskConical, Download, Share2, FileSpreadsheet, FileText, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ShareSurveyModal } from "@/components/dashboard/ShareSurveyModal";
import { SurveyPreviewDialog } from "@/components/dashboard/SurveyPreviewDialog";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import type { MySurvey } from "@/components/dashboard/types";
import { toast } from "sonner";
import { useLanguage } from "@/lib/i18n";

function ExportMenu({ onExport }: { onExport: (format: "SPSS" | "Excel" | "CSV") => void }) {
  const { t } = useLanguage();
  return (
    <Tooltip>
      <DropdownMenu>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              <Download className="size-4" />
              {t("dash.export")}
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <DropdownMenuContent align="end" className="min-w-[10.5rem]">
          <DropdownMenuLabel>{t("dash.export")}</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => onExport("SPSS")}>
            <span className="grid size-6 shrink-0 place-items-center rounded bg-[#1a2b49] text-[8px] font-extrabold text-white">SPSS</span>
            {t("dash.export.spss")}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onExport("Excel")}>
            <FileSpreadsheet className="size-4 text-emerald-600" />
            {t("dash.export.excel")}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onExport("CSV")}>
            <FileText className="size-4 text-slate-500" />
            {t("dash.export.csv")}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <TooltipContent className="bg-[#1a2b49] text-white">{t("dash.export.tooltip")}</TooltipContent>
    </Tooltip>
  );
}

interface SurveysPanelProps {
  surveys: MySurvey[];
  onSelect: (survey: MySurvey) => void;
  onTogglePause: (id: string) => void;
}

export function SurveysPanel({ surveys, onSelect, onTogglePause }: SurveysPanelProps) {
  const { t, locale, formatNumber } = useLanguage();
  const [shareSurvey, setShareSurvey] = React.useState<MySurvey | null>(null);
  const [previewSurvey, setPreviewSurvey] = React.useState<MySurvey | null>(null);

  const handleExport = (format: "SPSS" | "Excel" | "CSV") => {
    toast.success(`${t("dash.export.toast")} · ${format}`);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-foreground">{t("dash.my.surveys")}</h3>
        <span className="rounded-full bg-[#f39237]/10 px-2.5 py-1 text-xs font-bold text-[#c97020]">
          {formatNumber(surveys.length)}
        </span>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {surveys.map((s, i) => {
          const pct = Math.min(100, Math.round((s.responses / s.target) * 100));
          const live = s.status === "active" || s.status === "paused";
          return (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => onSelect(s)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelect(s);
                }
              }}
              role="button"
              tabIndex={0}
              className="group cursor-pointer rounded-2xl border border-border bg-card p-4 shadow-soft transition-colors hover:border-[#f39237]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f39237]/40"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#1d3b4c]/10 text-[#1d3b4c]">
                    <FlaskConical className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-foreground">
                      {locale === "fa" ? s.titleFa : s.titleEn}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t("dash.stat.responses")}: {formatNumber(s.responses)} / {formatNumber(s.target)}
                    </p>
                  </div>
                </div>
                <StatusBadge status={s.status} />
              </div>

              <div className="mt-4 flex items-center gap-3">
                <Progress value={pct} className="h-2 flex-1 bg-muted" />
                <span className="text-xs font-bold text-foreground">{pct}%</span>
              </div>
              <div className="mt-1.5 text-xs text-muted-foreground">
                {s.status === "done"
                  ? t("dash.status.completed")
                  : `${formatNumber(Math.max(0, s.target - s.responses))} ${t("dash.remaining")}`}
              </div>

              <div
                className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-3"
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              >
                <div className="flex items-center gap-1.5">
                  <ExportMenu onExport={handleExport} />
                  <Button variant="outline" size="sm" onClick={() => setShareSurvey(s)}>
                    <Share2 className="size-4" />
                    {t("dash.share")}
                  </Button>
                </div>
                {live && (
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={s.status === "active"}
                      onCheckedChange={() => onTogglePause(s.id)}
                      aria-label={s.status === "active" ? t("dash.pause") : t("dash.resume")}
                    />
                    <span className="text-xs font-medium text-muted-foreground">
                      {s.status === "active" ? t("dash.pause") : t("dash.resume")}
                    </span>
                  </div>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground group-hover:text-[#f39237]"
                  onClick={() => setPreviewSurvey(s)}
                >
                  <Eye className="size-4" />
                  <span className="hidden lg:inline">{t("dash.survey.preview")}</span>
                </Button>
              </div>
            </motion.div>
          );
        })}
      </div>
      <ShareSurveyModal open={shareSurvey !== null} onClose={() => setShareSurvey(null)} survey={shareSurvey} />
      <SurveyPreviewDialog open={previewSurvey !== null} onClose={() => setPreviewSurvey(null)} survey={previewSurvey} />
    </div>
  );
}
