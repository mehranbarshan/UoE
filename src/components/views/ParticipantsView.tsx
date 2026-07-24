"use client";

import { motion } from "framer-motion";
import {
  UserCircle,
  Compass,
  ClipboardCheck,
  Coins,
  Trophy,
  ArrowRight,
  ArrowLeft,
  Star,
  Flame,
  Award,
  Crown,
} from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Section, SectionHeading } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/lib/i18n";
import { useNav } from "@/lib/store";
import type { TranslationKey } from "@/lib/translations";

const steps: { icon: typeof UserCircle; key: TranslationKey; color: string }[] = [
  { icon: UserCircle, key: "participants.how.1", color: "#1d3b4c" },
  { icon: Compass, key: "participants.how.2", color: "#6a8caf" },
  { icon: ClipboardCheck, key: "participants.how.3", color: "#f39237" },
  { icon: Trophy, key: "participants.how.4", color: "#2a9d8f" },
];

const badges = [
  { icon: Flame, key: "gamify.badge.streak" as TranslationKey, color: "#e5484d" },
  { icon: Star, key: "gamify.badge.answers" as TranslationKey, color: "#f39237" },
  { icon: Crown, key: "gamify.badge.elite" as TranslationKey, color: "#e9c46a" },
  { icon: Award, key: "gamify.badge.health" as TranslationKey, color: "#2a9d8f" },
  { icon: Coins, key: "gamify.badge.points" as TranslationKey, color: "#1d3b4c" },
  { icon: Trophy, key: "gamify.badge.champion" as TranslationKey, color: "#6a8caf" },
];

export function ParticipantsView() {
  const { t, locale, formatNumber } = useLanguage();
  const { setView } = useNav();
  const Arrow = locale === "fa" ? ArrowLeft : ArrowRight;

  return (
    <>
      <PageHeader badge={t("participants.subtitle")} title={t("participants.title")} subtitle={t("participants.subtitle")}>
        <Button size="lg" className="bg-[#f39237] text-white hover:bg-[#e07f24] shadow-soft h-12 px-6" onClick={() => setView("marketplace")}>
          {t("hero.cta.secondary")}
          <Arrow className="size-4" />
        </Button>
      </PageHeader>

      {/* How it works */}
      <Section className="bg-background">
        <SectionHeading title={t("participants.how.title")} align="center" />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <span className="absolute end-4 top-4 text-3xl font-black text-foreground/5">
                  {i + 1}
                </span>
                <div className="grid size-12 place-items-center rounded-2xl text-white shadow-soft" style={{ backgroundColor: step.color }}>
                  <Icon className="size-6" />
                </div>
                <p className="mt-4 text-sm font-semibold text-foreground">{t(step.key)}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Rewards / profile preview */}
      <Section className="bg-muted/30">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              title={t("participants.rewards.title")}
              subtitle={t("participants.rewards.desc")}
              align="start"
            />
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {badges.map((b, i) => {
                const Icon = b.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                    className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-4 text-center shadow-soft"
                  >
                    <div className="grid size-12 place-items-center rounded-full text-white" style={{ backgroundColor: b.color }}>
                      <Icon className="size-6" />
                    </div>
                    <span className="text-xs font-medium leading-tight text-muted-foreground">
                      {t(b.key)}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Profile card mock */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-border bg-card p-7 shadow-glow"
          >
            <div className="flex items-center gap-4">
              <div className="grid size-16 place-items-center rounded-2xl gradient-orange text-2xl font-extrabold text-white shadow-soft">
                N
              </div>
              <div>
                <p className="text-lg font-bold text-foreground">{t("participants.profile.name")}</p>
                <p className="text-sm text-muted-foreground">{t("gamify.level.label")}</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { value: formatNumber(7340), label: t("dash.points") },
                { value: `Lv ${formatNumber(5)}`, label: t("dash.level") },
                { value: `#${formatNumber(412)}`, label: t("dash.rank") },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-border bg-background p-3 text-center">
                  <p className="text-lg font-extrabold text-[#f39237]">{s.value}</p>
                  <p className="text-[11px] text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <div className="mb-1.5 flex justify-between text-xs font-medium text-muted-foreground">
                <span>{t("gamify.level.label")}</span>
                <span>{t("gamify.next.level")}</span>
              </div>
              <Progress value={71} className="h-2 bg-muted" />
            </div>

            <div className="mt-5 flex items-center gap-2 rounded-xl border border-[#2a9d8f]/25 bg-[#2a9d8f]/8 p-3">
              <Award className="size-5 text-[#2a9d8f]" />
              <p className="text-xs font-medium text-foreground">
                {t("participants.next.level.hint")}
              </p>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
