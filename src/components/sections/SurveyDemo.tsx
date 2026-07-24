"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Sparkles, Check, ArrowRight, ArrowLeft, Star, Zap } from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/lib/i18n";
import { demoQuestions } from "@/lib/content";
import { cn } from "@/lib/utils";

const features: { icon: typeof Clock; key: Parameters<ReturnType<typeof useLanguage>["t"]>[0] }[] = [
  { icon: Sparkles, key: "survey.feature.progress" },
  { icon: Clock, key: "survey.feature.eta" },
  { icon: Check, key: "survey.feature.cards" },
  { icon: Zap, key: "survey.feature.micro" },
  { icon: Star, key: "survey.feature.gamify" },
  { icon: Zap, key: "survey.feature.mobile" },
];

export function SurveyDemo() {
  const { t, locale } = useLanguage();
  const Arrow = locale === "fa" ? ArrowLeft : ArrowRight;

  const [step, setStep] = React.useState(0);
  const [selected, setSelected] = React.useState<number | null>(null);
  const total = demoQuestions.length;
  const progress = ((step + (selected !== null ? 1 : 0)) / total) * 100;

  const next = () => {
    if (step < total - 1) {
      setStep((s) => s + 1);
      setSelected(null);
    } else {
      setStep(0);
      setSelected(null);
    }
  };

  const back = () => {
    if (step > 0) {
      setStep((s) => s - 1);
      setSelected(null);
    }
  };

  const q = demoQuestions[step];
  const options = locale === "fa" ? q.optionsFa : q.optionsEn;

  return (
    <Section className="bg-muted/30">
      <SectionHeading
        badge={t("survey.title")}
        title={t("survey.title")}
        subtitle={t("survey.subtitle")}
      />

      <div className="mt-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        {/* Left: comparison context */}
        <div className="order-2 flex flex-col gap-5 lg:order-1">
          <ComparisonCard
            label={t("survey.before")}
            bad
            example={t("survey.comparison.old")}
          />
          <ComparisonCard
            label={t("survey.after")}
            example={t("survey.q.motivation")}
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.key}
                  className="flex items-center gap-2 rounded-xl border border-border bg-card p-3 text-xs font-medium text-foreground shadow-soft"
                >
                  <Icon className="size-4 shrink-0 text-[#f39237]" />
                  <span className="leading-tight">{t(f.key)}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: interactive UOE survey card */}
        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-glow sm:p-7"
          >
            {/* progress header */}
            <div className="mb-5">
              <div className="mb-2 flex items-center justify-between text-xs font-semibold text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="size-3.5 text-[#f39237]" />
                  {t("survey.progress.label")}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="size-3.5" />
                  {t("survey.eta")}
                </span>
              </div>
              <div className="relative">
                <Progress value={progress} className="h-2 bg-muted" />
                <motion.span
                  className="absolute -top-1 size-4 rounded-full bg-[#f39237] shadow-soft ring-2 ring-white"
                  animate={{ left: `calc(${progress}% - 8px)` }}
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                />
              </div>
              <p className="mt-2 text-xs font-semibold text-[#1d3b4c] dark:text-[#f7ae6a]">
                {Math.round(progress)}% · {t("survey.q.motivation")}
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
                  {locale === "fa" ? q.titleFa : q.titleEn}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {locale === "fa" ? q.descFa : q.descEn}
                </p>

                <div className="mt-5 grid grid-cols-1 gap-2.5">
                  {options.map((opt, i) => {
                    const isSelected = selected === i;
                    return (
                      <button
                        key={i}
                        onClick={() => setSelected(i)}
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
              <Button
                variant="ghost"
                size="sm"
                onClick={back}
                disabled={step === 0}
                className="text-muted-foreground"
              >
                {locale === "fa" ? (
                  <ArrowRight className="size-4" />
                ) : (
                  <ArrowLeft className="size-4" />
                )}
                {t("survey.q.back")}
              </Button>
              <Button
                size="sm"
                className="bg-[#f39237] text-white hover:bg-[#e07f24]"
                onClick={next}
                disabled={selected === null}
              >
                {step === total - 1 ? t("survey.finish") : t("survey.q.next")}
                <Arrow className="size-4" />
              </Button>
            </div>

            {/* decorative glow */}
            <div className="pointer-events-none absolute -end-10 -top-10 size-32 rounded-full bg-[#f39237]/10 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

function ComparisonCard({
  label,
  example,
  bad = false,
}: {
  label: string;
  example: string;
  bad?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-5",
        bad ? "border-destructive/20 bg-destructive/5" : "border-[#2a9d8f]/25 bg-[#2a9d8f]/8"
      )}
    >
      <div className="mb-2 flex items-center gap-2">
        <span
          className={cn(
            "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide",
            bad ? "bg-destructive/15 text-destructive" : "bg-[#2a9d8f]/15 text-[#2a9d8f]"
          )}
        >
          {label}
        </span>
      </div>
      <p className="text-sm font-medium text-foreground">{example}</p>
    </div>
  );
}
