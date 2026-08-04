"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  Sparkles,
  Check,
  ArrowRight,
  ArrowLeft,
  Coins,
  Users,
  ListChecks,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/lib/i18n";
import type { DemoQuestion } from "@/lib/content";
import { cn } from "@/lib/utils";

export interface SurveyRunnerMeta {
  titleFa: string;
  titleEn: string;
  orgFa: string;
  orgEn: string;
  reward: number;
  participants: number;
}

interface SurveyRunnerCardProps {
  survey: SurveyRunnerMeta;
  questions: DemoQuestion[];
  onSubmit: () => void;
  onBack: () => void;
  backLabel?: string;
  submitLabel?: string;
  showMeta?: boolean;
}

export function SurveyRunnerCard({
  survey,
  questions,
  onSubmit,
  onBack,
  backLabel,
  submitLabel,
  showMeta = true,
}: SurveyRunnerCardProps) {
  const { t, locale } = useLanguage();
  const Arrow = locale === "fa" ? ArrowLeft : ArrowRight;

  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<number, number>>({});
  const selected = answers[step] ?? null;
  const isLast = step === questions.length - 1;
  const progress = questions.length === 0 ? 0 : ((step + (selected !== null ? 1 : 0)) / questions.length) * 100;

  const q: DemoQuestion | undefined = questions[step];
  const options = q ? (locale === "fa" ? q.optionsFa : q.optionsEn) : [];

  const next = () => {
    if (!isLast) {
      setStep((s) => s + 1);
    } else {
      onSubmit();
    }
  };

  const back = () => {
    if (step > 0) {
      setStep((s) => s - 1);
    } else {
      onBack();
    }
  };

  const fmt = (n: number) => n.toLocaleString(locale === "fa" ? "fa-IR" : "en-US");

  if (questions.length === 0) return null;

  return (
    <div className="flex flex-col gap-5">
      {/* survey meta */}
      {showMeta && (
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 rounded-2xl border border-border bg-card p-4 shadow-soft">
          <div className="flex flex-1 flex-col">
            <h2 className="text-lg font-bold leading-snug text-foreground">
              {locale === "fa" ? survey.titleFa : survey.titleEn}
            </h2>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {locale === "fa" ? survey.orgFa : survey.orgEn}
            </p>
          </div>
          <span className="flex items-center gap-1 text-sm font-bold text-[#f39237]">
            <Coins className="size-4" />
            {survey.reward} {t("marketplace.reward")}
          </span>
          <span className="flex items-center gap-1 text-sm font-semibold text-muted-foreground">
            <Users className="size-4" />
            {fmt(survey.participants)}
          </span>
        </div>
      )}

      {/* runner card */}
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-glow sm:p-7">
        {/* progress header */}
        <div className="mb-5">
          <div className="mb-2 flex items-center justify-between text-xs font-semibold text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Sparkles className="size-3.5 text-[#f39237]" />
              {t("survey.progress.label")}
            </span>
            <span className="flex items-center gap-1.5">
              <ListChecks className="size-3.5" />
              {step + 1} / {questions.length}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5" />
              {t("survey.eta")}
            </span>
          </div>
          <Progress value={progress} className="h-2 bg-muted" />
          <p className="mt-2 text-xs font-semibold text-[#1d3b4c] dark:text-[#f7ae6a]">
            {Math.round(progress)}%
          </p>
        </div>

        {/* question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: locale === "fa" ? -24 : 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: locale === "fa" ? 24 : -24 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-bold leading-snug text-foreground">
              {locale === "fa" ? q?.titleFa : q?.titleEn}
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              {locale === "fa" ? q?.descFa : q?.descEn}
            </p>

            <div className="mt-5 grid grid-cols-1 gap-2.5">
              {options.map((opt, i) => {
                const isSelected = selected === i;
                return (
                  <button
                    key={i}
                    onClick={() => setAnswers((a) => ({ ...a, [step]: i }))}
                    className={cn(
                      "group flex items-center justify-between gap-3 rounded-xl border-2 px-4 py-3 text-start text-sm font-medium transition-all",
                      isSelected
                        ? "border-[#f39237] bg-[#f39237]/8 text-foreground shadow-soft"
                        : "border-border bg-background text-muted-foreground hover:border-[#f39237]/40 hover:text-foreground"
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={cn(
                          "grid size-6 shrink-0 place-items-center rounded-full border-2 transition-colors",
                          isSelected
                            ? "border-[#f39237] bg-[#f39237] text-white"
                            : "border-border text-transparent"
                        )}
                      >
                        <Check className="size-3.5" />
                      </span>
                      {opt}
                    </span>
                    {isSelected && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-xs font-bold text-[#f39237]"
                      >
                        +10
                      </motion.span>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* controls */}
        <div className="mt-6 flex items-center justify-between gap-3">
          <Button variant="ghost" size="sm" onClick={back} className="text-muted-foreground">
            {locale === "fa" ? (
              <ArrowRight className="size-4" />
            ) : (
              <ArrowLeft className="size-4" />
            )}
            {step === 0 ? (backLabel ?? t("survey.runner.back")) : t("survey.q.back")}
          </Button>
          <Button
            size="sm"
            className={cn(
              "text-white",
              isLast ? "bg-[#2a9d8f] hover:bg-[#238579]" : "bg-[#f39237] hover:bg-[#e07f24]"
            )}
            onClick={next}
            disabled={selected === null}
          >
            {isLast ? (
              <>
                {submitLabel ?? t("survey.submit")}
                <ChevronRight className="size-4 rtl:rotate-180" />
              </>
            ) : (
              <>
                {t("survey.q.next")}
                <Arrow className="size-4" />
              </>
            )}
          </Button>
        </div>

        {/* decorative glow */}
        <div className="pointer-events-none absolute -end-10 -top-10 size-32 rounded-full bg-[#f39237]/10 blur-3xl" />
      </div>
    </div>
  );
}
