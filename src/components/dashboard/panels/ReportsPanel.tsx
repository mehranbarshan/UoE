"use client";

import * as React from "react";
import { Brain, TrendingUp, Smartphone, FileSpreadsheet, FileText, Download, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { useLanguage } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/translations";

const crossTab: {
  rowFa: string;
  rowEn: string;
  c1: number;
  c2: number;
  c3: number;
  c4: number;
}[] = [
  { rowFa: "میزان تکمیل", rowEn: "Completion rate", c1: 82, c2: 91, c3: 87, c4: 74 },
  { rowFa: "رضایت کلی", rowEn: "Overall satisfaction", c1: 68, c2: 74, c3: 71, c4: 63 },
  { rowFa: "میزان انصراف", rowEn: "Drop-off rate", c1: 18, c2: 9, c3: 13, c4: 26 },
];

const ageGroups: { fa: string; en: string }[] = [
  { fa: "۱۸-۲۵", en: "18–25" },
  { fa: "۲۶-۳۵", en: "26–35" },
  { fa: "۳۶-۵۰", en: "36–50" },
  { fa: "۵۰+", en: "50+" },
];

const insights: { key: TranslationKey; icon: typeof Brain; color: string }[] = [
  { key: "dash.reports.insight.1", icon: Brain, color: "#2a9d8f" },
  { key: "dash.reports.insight.2", icon: TrendingUp, color: "#f39237" },
  { key: "dash.reports.insight.3", icon: Smartphone, color: "#6a8caf" },
];

export function ReportsPanel() {
  const { t, locale, formatNumber } = useLanguage();

  const handleExport = (format: "SPSS" | "Excel" | "CSV") => {
    toast.success(`${t("dash.export.toast")} · ${format}`);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Cross-tabulation */}
      <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
        <h3 className="text-sm font-bold text-foreground">{t("dash.reports.tabulation")}</h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="border-b border-border text-xs text-muted-foreground">
                <th className="px-3 py-2.5 text-start font-semibold">{t("dash.reports.variable")}</th>
                {ageGroups.map((g) => (
                  <th key={g.en} className="px-3 py-2.5 text-center font-semibold">
                    {locale === "fa" ? g.fa : g.en}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {crossTab.map((row) => (
                <tr key={row.rowEn} className="border-b border-border/60 last:border-0">
                  <td className="px-3 py-3 font-semibold text-foreground">
                    {locale === "fa" ? row.rowFa : row.rowEn}
                  </td>
                  {[row.c1, row.c2, row.c3, row.c4].map((v, i) => (
                    <td key={i} className="px-3 py-3 text-center font-bold text-[#1a2b49]">
                      {formatNumber(v)}%
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-[11px] text-muted-foreground">
          {locale === "fa" ? "گروه سنی × شاخص‌های کلیدی (درصد)" : "Age group × key metrics (%)"}
        </p>
      </div>

      {/* AI insights */}
      <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-foreground">{t("dash.reports.insights")}</h3>
          <Badge variant="outline" className="border-[#2a9d8f]/20 bg-[#2a9d8f]/10 font-semibold text-[#2a9d8f]">
            <Brain className="size-3" />
            AI
          </Badge>
        </div>
        <div className="mt-4 space-y-3">
          {insights.map((ins) => {
            const Icon = ins.icon;
            return (
              <div key={ins.key} className="flex items-start gap-3 rounded-xl border border-border bg-background p-3.5">
                <div className="grid size-9 shrink-0 place-items-center rounded-lg" style={{ backgroundColor: `${ins.color}15`, color: ins.color }}>
                  <Icon className="size-4" />
                </div>
                <p className="text-xs leading-5 text-muted-foreground">{t(ins.key)}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Batch export */}
      <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
        <h3 className="text-sm font-bold text-foreground">{t("dash.reports.exportTitle")}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{t("dash.reports.exportDesc")}</p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Button variant="outline" className="flex-1" onClick={() => handleExport("SPSS")}>
            <span className="grid size-6 shrink-0 place-items-center rounded bg-[#1a2b49] text-[8px] font-extrabold text-white">SPSS</span>
            {t("dash.export.spss")}
          </Button>
          <Button variant="outline" className="flex-1" onClick={() => handleExport("Excel")}>
            <FileSpreadsheet className="size-4 text-emerald-600" />
            {t("dash.export.excel")}
          </Button>
          <Button variant="outline" className="flex-1" onClick={() => handleExport("CSV")}>
            <FileText className="size-4 text-slate-500" />
            {t("dash.export.csv")}
          </Button>
        </div>
        <Button className="mt-3 w-full bg-[#f39237] text-white hover:bg-[#e07f24]" onClick={() => handleExport("CSV")}>
          <Download className="size-4" />
          {t("dash.reports.exportAll")}
        </Button>
      </div>
    </div>
  );
}
