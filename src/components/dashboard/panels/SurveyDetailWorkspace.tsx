"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip as ChartTooltip,
  Area,
  AreaChart,
  Bar,
  BarChart,
} from "recharts";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  Copy,
  Trash2,
  FlaskConical,
  Users,
  MessageSquareText,
  TrendingUp,
  Table2,
  BarChart3,
  Settings2,
  Download,
  AlertTriangle,
  CheckCircle2,
  Zap,
  Shuffle,
  UserX,
  Activity,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { SurveyPreviewDialog } from "@/components/dashboard/SurveyPreviewDialog";
import type { MySurvey } from "@/components/dashboard/types";
import { toast } from "sonner";
import { useLanguage } from "@/lib/i18n";
import { responseData } from "@/lib/content";
import { cn } from "@/lib/utils";
import type { TranslationKey } from "@/lib/translations";

const previewQuestions: {
  textFa: string;
  textEn: string;
  optionsFa: string[];
  optionsEn: string[];
  distribution: number[];
}[] = [
  {
    textFa: "هر چند وقت یک‌بار از راه دور کار می‌کنید؟",
    textEn: "How often do you work remotely?",
    optionsFa: ["همیشه", "اغلب", "گاهی", "هرگز"],
    optionsEn: ["Always", "Often", "Sometimes", "Never"],
    distribution: [38, 32, 21, 9],
  },
  {
    textFa: "مهم‌ترین مزیت کار از راه دور چیست؟",
    textEn: "What is the biggest benefit of remote work?",
    optionsFa: ["صرفه‌جویی در زمان", "انعطاف‌پذیری", "تمرکز بیشتر", "هزینه کمتر"],
    optionsEn: ["Time saving", "Flexibility", "Better focus", "Lower cost"],
    distribution: [34, 41, 18, 7],
  },
  {
    textFa: "احتمال ادامه کار از راه دور را چگونه ارزیابی می‌کنید؟",
    textEn: "How likely are you to keep working remotely?",
    optionsFa: ["بسیار محتمل", "محتمل", "کمی محتمل", "غیرمحتمل"],
    optionsEn: ["Very likely", "Likely", "Somewhat likely", "Unlikely"],
    distribution: [45, 33, 14, 8],
  },
];

const tableRows: {
  id: number;
  nameFa: string;
  nameEn: string;
  dateFa: string;
  dateEn: string;
  durationFa: string;
  durationEn: string;
  quality: "valid" | "suspect";
}[] = [
  { id: 124, nameFa: "پاسخ‌دهنده ۱۲۴", nameEn: "Respondent 124", dateFa: "۱۴۰۴/۰۲/۱۸", dateEn: "May 8, 2025", durationFa: "۳ دقیقه", durationEn: "3 min", quality: "valid" },
  { id: 123, nameFa: "پاسخ‌دهنده ۱۲۳", nameEn: "Respondent 123", dateFa: "۱۴۰۴/۰۲/۱۸", dateEn: "May 8, 2025", durationFa: "۴۵ ثانیه", durationEn: "45 sec", quality: "suspect" },
  { id: 122, nameFa: "پاسخ‌دهنده ۱۲۲", nameEn: "Respondent 122", dateFa: "۱۴۰۴/۰۲/۱۷", dateEn: "May 7, 2025", durationFa: "۴ دقیقه", durationEn: "4 min", quality: "valid" },
  { id: 121, nameFa: "پاسخ‌دهنده ۱۲۱", nameEn: "Respondent 121", dateFa: "۱۴۰۴/۰۲/۱۷", dateEn: "May 7, 2025", durationFa: "۵ دقیقه", durationEn: "5 min", quality: "valid" },
  { id: 120, nameFa: "پاسخ‌دهنده ۱۲۰", nameEn: "Respondent 120", dateFa: "۱۴۰۴/۰۲/۱۶", dateEn: "May 6, 2025", durationFa: "۵۰ ثانیه", durationEn: "50 sec", quality: "suspect" },
  { id: 119, nameFa: "پاسخ‌دهنده ۱۱۹", nameEn: "Respondent 119", dateFa: "۱۴۰۴/۰۲/۱۶", dateEn: "May 6, 2025", durationFa: "۳ دقیقه", durationEn: "3 min", quality: "valid" },
];

const flags: { key: TranslationKey; icon: typeof Zap; count: number; color: string }[] = [
  { key: "dash.quality.speed", icon: Zap, count: 12, color: "#e5484d" },
  { key: "dash.quality.random", icon: Shuffle, count: 8, color: "#f39237" },
  { key: "dash.quality.suspect", icon: UserX, count: 5, color: "#6a8caf" },
];

const demographicsTemplates: {
  populationFa: string;
  populationEn: string;
  ageFa: string;
  ageEn: string;
  genderFa: string;
  genderEn: string;
  educationFa: string;
  educationEn: string;
  regionFa: string;
  regionEn: string;
  periodFa: string;
  periodEn: string;
}[] = [
  {
    populationFa: "کارمندان دورکار؛ ۲۵ تا ۴۵ سال؛ شهرهای بزرگ",
    populationEn: "Remote workers; 25–45; major cities",
    ageFa: "۲۵ تا ۴۵ سال",
    ageEn: "25–45",
    genderFa: "۵۸٪ زن، ۴۲٪ مرد",
    genderEn: "58% female, 42% male",
    educationFa: "کارشناسی و بالاتر",
    educationEn: "Bachelor's or higher",
    regionFa: "تهران، اصفهان، شیراز",
    regionEn: "Tehran, Isfahan, Shiraz",
    periodFa: "۱۴۰۴/۰۲/۰۱ تا ۱۴۰۴/۰۴/۳۰",
    periodEn: "Apr 21 – Jul 21, 2025",
  },
  {
    populationFa: "بزرگسالان ۲۰ تا ۵۰ سال؛ همه مناطق",
    populationEn: "Adults 20–50; all regions",
    ageFa: "۲۰ تا ۵۰ سال",
    ageEn: "20–50",
    genderFa: "۵۲٪ زن، ۴۸٪ مرد",
    genderEn: "52% female, 48% male",
    educationFa: "دیپلم و بالاتر",
    educationEn: "High school diploma or higher",
    regionFa: "سراسر کشور",
    regionEn: "Nationwide",
    periodFa: "۱۴۰۴/۰۱/۱۵ تا ۱۴۰۴/۰۳/۱۵",
    periodEn: "Apr 4 – Jun 5, 2025",
  },
  {
    populationFa: "دانشجویان و فارغ‌التحصیلان دانشگاهی",
    populationEn: "University students & graduates",
    ageFa: "۱۸ تا ۳۵ سال",
    ageEn: "18–35",
    genderFa: "۵۵٪ زن، ۴۵٪ مرد",
    genderEn: "55% female, 45% male",
    educationFa: "دانشجویی و بالاتر",
    educationEn: "Undergraduate or higher",
    regionFa: "دانشگاه‌های کلان‌شهرها",
    regionEn: "Universities in major cities",
    periodFa: "۱۴۰۴/۰۲/۰۵ تا ۱۴۰۴/۰۵/۰۵",
    periodEn: "Apr 25 – Jul 27, 2025",
  },
];

type InnerTab = "data" | "charts" | "settings";

const innerTabs: { id: InnerTab; key: TranslationKey; icon: typeof Table2 }[] = [
  { id: "data", key: "dash.survey.tab.data", icon: Table2 },
  { id: "charts", key: "dash.survey.tab.charts", icon: BarChart3 },
  { id: "settings", key: "dash.survey.tab.settings", icon: Settings2 },
];

interface SurveyDetailWorkspaceProps {
  survey: MySurvey;
  onBack: () => void;
  onUpdate: (id: string, patch: Partial<MySurvey>) => void;
  onDelete: (id: string) => void;
  onDuplicate: (id: string) => void;
  onTogglePause: (id: string) => void;
}

export function SurveyDetailWorkspace({
  survey,
  onBack,
  onUpdate,
  onDelete,
  onDuplicate,
  onTogglePause,
}: SurveyDetailWorkspaceProps) {
  const { t, locale, formatNumber } = useLanguage();
  const [innerTab, setInnerTab] = React.useState<InnerTab>("data");
  const [title, setTitle] = React.useState<string | null>(null);
  const [previewOpen, setPreviewOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const Arrow = locale === "fa" ? ArrowLeft : ArrowRight;

  const displayTitle = title ?? (locale === "fa" ? survey.titleFa : survey.titleEn);

  const d = demographicsTemplates[(parseInt(survey.id, 10) - 1) % demographicsTemplates.length];
  const views = Math.round(survey.responses * 2.3) + 86;
  const completion =
    survey.status === "done" ? 96 : survey.status === "draft" ? 0 : Math.min(94, Math.round((survey.responses / Math.max(1, views)) * 190));
  const live = survey.status === "active" || survey.status === "paused";

  const commitTitle = () => {
    const trimmed = (title ?? displayTitle).trim();
    if (!trimmed) {
      setTitle(null);
      return;
    }
    const changed =
      trimmed !== (locale === "fa" ? survey.titleFa : survey.titleEn);
    setTitle(null);
    if (changed) {
      onUpdate(survey.id, locale === "fa" ? { titleFa: trimmed } : { titleEn: trimmed });
      toast.success(t("dash.survey.saved"));
    }
  };

  const chartData = responseData.map((r) => ({
    name: locale === "fa" ? r.fa : r.en,
    responses: r.responses,
  }));

  const barData = previewQuestions[0].optionsFa.map((_, i) => ({
    name: locale === "fa" ? previewQuestions[0].optionsFa[i] : previewQuestions[0].optionsEn[i],
    pct: previewQuestions[0].distribution[i],
  }));

  const metrics = [
    { label: t("dash.survey.metric.population"), value: locale === "fa" ? d.populationFa : d.populationEn, icon: Users, color: "#1d3b4c" },
    { label: t("dash.survey.metric.responses"), value: formatNumber(survey.responses), icon: MessageSquareText, color: "#f39237" },
    { label: t("dash.survey.metric.views"), value: formatNumber(views), icon: Eye, color: "#6a8caf" },
    { label: t("dash.survey.metric.completion"), value: `${formatNumber(completion)}%`, icon: TrendingUp, color: "#2a9d8f" },
  ];

  return (
    <div className="flex flex-col gap-5">
      {/* Back */}
      <button
        onClick={onBack}
        className="flex w-fit items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-[#f39237]"
      >
        <Arrow className="size-3.5 rotate-180" />
        {t("dash.survey.back")}
      </button>

      {/* Header & quick actions */}
      <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#1d3b4c]/10 text-[#1d3b4c]">
              <FlaskConical className="size-5" />
            </div>
            <Input
              value={displayTitle}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={commitTitle}
              className="h-11 flex-1 border-transparent bg-transparent text-base font-extrabold text-foreground focus:border-[#f39237]/50 focus:bg-background"
            />
          </div>
          <div className="flex items-center gap-2">
            <Switch
              checked={survey.status === "active"}
              onCheckedChange={() => onTogglePause(survey.id)}
              aria-label={survey.status === "active" ? t("dash.pause") : t("dash.resume")}
              disabled={!live}
            />
            <span className="text-xs font-medium text-muted-foreground">
              {survey.status === "active" ? t("dash.pause") : t("dash.resume")}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge status={survey.status} />
          <div className="ms-auto flex flex-wrap items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => setPreviewOpen(true)}>
              <Eye className="size-4 text-[#2a9d8f]" />
              {t("dash.survey.preview")}
            </Button>
            <Button variant="outline" size="sm" onClick={() => onDuplicate(survey.id)}>
              <Copy className="size-4 text-[#6a8caf]" />
              {t("dash.survey.duplicate")}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-red-600 hover:border-red-200 hover:bg-red-50 hover:text-red-700"
              onClick={() => setDeleteOpen(true)}
            >
              <Trash2 className="size-4" />
              {t("dash.survey.delete")}
            </Button>
          </div>
        </div>
      </div>

      {/* Metrics banner */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((m, i) => {
          const Icon = m.icon;
          return (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft"
            >
              <div className="grid size-10 shrink-0 place-items-center rounded-lg" style={{ backgroundColor: `${m.color}15`, color: m.color }}>
                <Icon className="size-5" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-foreground">{m.value}</p>
                <p className="text-xs text-muted-foreground">{m.label}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Internal tabs */}
      <div className="flex gap-1.5 overflow-x-auto rounded-2xl border border-border bg-card p-1.5">
        {innerTabs.map((tabItem) => {
          const Icon = tabItem.icon;
          const isActive = innerTab === tabItem.id;
          return (
            <button
              key={tabItem.id}
              onClick={() => setInnerTab(tabItem.id)}
              className={cn(
                "flex shrink-0 items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold transition-colors",
                isActive ? "bg-[#f39237] text-white shadow-sm" : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
            >
              <Icon className="size-4" />
              {t(tabItem.key)}
            </button>
          );
        })}
      </div>

      <motion.div
        key={innerTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {innerTab === "data" && (
          <div className="flex flex-col gap-5">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-foreground">{t("dash.survey.tab.data")}</h3>
                <Button variant="outline" size="sm" onClick={() => toast.success(`${t("dash.export.toast")} · CSV`)}>
                  <Download className="size-4" />
                  {t("dash.survey.data.export")}
                </Button>
              </div>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[560px] text-sm">
                  <thead>
                    <tr className="border-b border-border text-xs text-muted-foreground">
                      <th className="px-3 py-2.5 text-start font-semibold">#</th>
                      <th className="px-3 py-2.5 text-start font-semibold">{t("dash.survey.data.respondent")}</th>
                      <th className="px-3 py-2.5 text-start font-semibold">{t("dash.survey.data.date")}</th>
                      <th className="px-3 py-2.5 text-start font-semibold">{t("dash.survey.data.duration")}</th>
                      <th className="px-3 py-2.5 text-start font-semibold">{t("dash.survey.data.quality")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableRows.map((row) => {
                      const valid = row.quality === "valid";
                      return (
                        <tr key={row.id} className="border-b border-border/60 last:border-0">
                          <td className="px-3 py-3 text-muted-foreground">{formatNumber(row.id)}</td>
                          <td className="px-3 py-3 font-semibold text-foreground">{locale === "fa" ? row.nameFa : row.nameEn}</td>
                          <td className="px-3 py-3 text-muted-foreground">{locale === "fa" ? row.dateFa : row.dateEn}</td>
                          <td className="px-3 py-3 text-muted-foreground">{locale === "fa" ? row.durationFa : row.durationEn}</td>
                          <td className="px-3 py-3">
                            <span
                              className={cn(
                                "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold",
                                valid ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                              )}
                            >
                              {valid ? <CheckCircle2 className="size-3.5" /> : <AlertTriangle className="size-3.5" />}
                              {valid ? t("dash.responses.valid") : t("dash.responses.suspect")}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <h3 className="text-sm font-bold text-foreground">{t("dash.quality.flags")}</h3>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {flags.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div key={f.key} className="flex flex-col gap-2 rounded-xl border border-border bg-background p-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className="grid size-9 shrink-0 place-items-center rounded-lg" style={{ backgroundColor: `${f.color}15`, color: f.color }}>
                          <Icon className="size-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-xs font-semibold text-foreground">{t(f.key)}</p>
                          <p className="text-[11px] text-muted-foreground">{formatNumber(f.count)}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => toast.info(t("dash.quality.aiNote"))}>
                        {t("dash.quality.review")}
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {innerTab === "charts" && (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-bold text-foreground">{t("dash.response.chart")}</h3>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Activity className="size-3.5 text-[#f39237]" />
                  7 {t("dashboard.days.label")}
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
                    <ChartTooltip
                      contentStyle={{ borderRadius: 12, border: "1px solid #e2e8ec", fontSize: 12 }}
                      cursor={{ stroke: "#f39237", strokeWidth: 1 }}
                    />
                    <Area type="monotone" dataKey="responses" stroke="#f39237" strokeWidth={2.5} fill="url(#respGrad)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <h3 className="text-sm font-bold text-foreground">{t("dash.survey.charts.distribution")}</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {t("dash.survey.charts.question")}: {locale === "fa" ? previewQuestions[0].textFa : previewQuestions[0].textEn}
              </p>
              <div className="mt-3 h-56 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8ec" vertical={false} />
                    <XAxis dataKey="name" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} interval={0} />
                    <YAxis tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
                    <ChartTooltip
                      contentStyle={{ borderRadius: 12, border: "1px solid #e2e8ec", fontSize: 12 }}
                      cursor={{ fill: "#f39237", opacity: 0.08 }}
                    />
                    <Bar dataKey="pct" name="%" fill="#f39237" radius={[6, 6, 0, 0]} maxBarSize={44} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {innerTab === "settings" && (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <h3 className="text-sm font-bold text-foreground">{t("dash.survey.settings.audience")}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{locale === "fa" ? d.populationFa : d.populationEn}</p>
              <div className="mt-4 space-y-1">
                {[
                  { key: "dash.survey.settings.age", fa: d.ageFa, en: d.ageEn },
                  { key: "dash.survey.settings.gender", fa: d.genderFa, en: d.genderEn },
                  { key: "dash.survey.settings.education", fa: d.educationFa, en: d.educationEn },
                  { key: "dash.survey.settings.region", fa: d.regionFa, en: d.regionEn },
                ].map((row) => (
                  <div key={row.key} className="flex items-center justify-between border-b border-border/60 py-2.5 last:border-0">
                    <span className="text-xs font-medium text-muted-foreground">{t(row.key as TranslationKey)}</span>
                    <span className="text-xs font-semibold text-foreground">{locale === "fa" ? row.fa : row.en}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <h3 className="text-sm font-bold text-foreground">{t("dash.survey.settings.params")}</h3>
              <div className="mt-4 space-y-1">
                <div className="flex items-center justify-between border-b border-border/60 py-2.5">
                  <span className="text-xs font-medium text-muted-foreground">{t("dash.survey.settings.questions")}</span>
                  <span className="text-xs font-semibold text-foreground">{formatNumber(12)}</span>
                </div>
                <div className="flex items-center justify-between border-b border-border/60 py-2.5">
                  <span className="text-xs font-medium text-muted-foreground">{t("dash.survey.settings.target")}</span>
                  <span className="text-xs font-semibold text-foreground">{formatNumber(survey.target)}</span>
                </div>
                <div className="flex items-center justify-between border-b border-border/60 py-2.5">
                  <span className="text-xs font-medium text-muted-foreground">{t("dash.survey.settings.period")}</span>
                  <span className="text-xs font-semibold text-foreground">{locale === "fa" ? d.periodFa : d.periodEn}</span>
                </div>
                <div className="flex items-center justify-between py-2.5">
                  <span className="text-xs font-medium text-muted-foreground">{t("dash.status.label")}</span>
                  <StatusBadge status={survey.status} />
                </div>
              </div>
              <Button
                className="mt-4 w-full bg-[#f39237] text-white hover:bg-[#e07f24]"
                onClick={() => toast.success(t("dash.survey.saved"))}
              >
                {t("dash.survey.settings.save")}
              </Button>
            </div>
          </div>
        )}
      </motion.div>

      {/* Preview modal */}
      <SurveyPreviewDialog
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        survey={survey}
      />

      {/* Delete confirm */}
      <AlertDialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-lg font-extrabold">{t("dash.survey.delete.confirm.title")}</AlertDialogTitle>
            <AlertDialogDescription className="leading-6">{t("dash.survey.delete.confirm.desc")}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="gap-2">
            <AlertDialogCancel>{t("dash.close")}</AlertDialogCancel>
            <AlertDialogAction className="bg-red-600 text-white hover:bg-red-700" onClick={() => onDelete(survey.id)}>
              <Trash2 className="size-4" />
              {t("dash.survey.delete.confirm.btn")}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
