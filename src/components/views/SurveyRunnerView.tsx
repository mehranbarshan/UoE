"use client";

import * as React from "react";
import { Coins, Users, ArrowRight, ArrowLeft } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { ValueGatedAuthModal } from "@/components/shared/ValueGatedAuthModal";
import { SurveyRunnerCard } from "@/components/survey/SurveyRunnerCard";
import { useLanguage } from "@/lib/i18n";
import { useNav } from "@/lib/store";
import { surveys, demoQuestions } from "@/lib/content";
import { toast } from "sonner";

export function SurveyRunnerView() {
  const { t, locale } = useLanguage();
  const { setView, isLoggedIn, activeSurveyId } = useNav();
  const [authOpen, setAuthOpen] = React.useState(false);
  const Arrow = locale === "fa" ? ArrowLeft : ArrowRight;

  const survey = surveys.find((s) => s.id === activeSurveyId);

  const questions = React.useMemo(() => {
    if (!survey) return [];
    const count = Math.min(survey.questions, demoQuestions.length);
    return demoQuestions.slice(0, count);
  }, [survey]);

  const submit = () => {
    if (!survey) return;
    if (!isLoggedIn) {
      setAuthOpen(true);
      return;
    }
    toast.success(
      locale === "fa"
        ? `پاسخ‌های شما ثبت شد! +${survey.reward} امتیاز`
        : `Your responses were saved! +${survey.reward} points`
    );
    setView("participant-dashboard");
  };

  const onModalClose = () => setAuthOpen(false);

  const onLoggedIn = () => {
    if (survey) {
      toast.success(
        locale === "fa"
          ? `پاسخ‌های شما ثبت شد! +${survey.reward} امتیاز`
          : `Your responses were saved! +${survey.reward} points`
      );
      setView("participant-dashboard");
    }
  };

  const fmt = (n: number) => n.toLocaleString(locale === "fa" ? "fa-IR" : "en-US");

  if (!survey) {
    return (
      <Section className="bg-background">
        <div className="mx-auto max-w-xl rounded-2xl border border-dashed border-border p-12 text-center text-muted-foreground">
          {t("marketplace.no.results")}
        </div>
      </Section>
    );
  }

  return (
    <>
      {/* Survey header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between gap-3 px-4 sm:px-6">
          <button
            onClick={() => setView("marketplace")}
            className="flex shrink-0 items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-[#f39237]"
          >
            <Arrow className="size-3.5 rotate-180" />
            {t("survey.runner.back")}
          </button>
          <div className="min-w-0 flex-1 text-center">
            <p className="truncate text-sm font-bold text-foreground">
              {locale === "fa" ? survey.titleFa : survey.titleEn}
            </p>
            <p className="truncate text-[11px] text-muted-foreground">
              {locale === "fa" ? survey.orgFa : survey.orgEn}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <span className="flex items-center gap-1 text-sm font-bold text-[#f39237]">
              <Coins className="size-4" />
              {survey.reward} {t("marketplace.reward")}
            </span>
            <span className="flex items-center gap-1 text-xs font-semibold text-muted-foreground">
              <Users className="size-3.5" />
              {fmt(survey.participants)}
            </span>
          </div>
        </div>
      </header>

      <Section className="bg-background">
        <div className="mx-auto max-w-3xl">
          <SurveyRunnerCard
            survey={survey}
            questions={questions}
            onSubmit={submit}
            onBack={() => setView("marketplace")}
            showMeta={false}
          />
        </div>
      </Section>

      <ValueGatedAuthModal
        isOpen={authOpen}
        onClose={onModalClose}
        onLoggedIn={onLoggedIn}
        variant="survey_completed"
        earnedPoints={survey.reward}
      />
    </>
  );
}
