"use client";

import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Heart, Globe2, Unlock, Users2 } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Section } from "@/components/shared/Section";
import { FadeIn } from "@/components/shared/Section";
import { useLanguage } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/translations";

const values: { icon: typeof ShieldCheck; titleKey: TranslationKey; descKey: TranslationKey; color: string }[] = [
  { icon: ShieldCheck, titleKey: "about.value.1.title", descKey: "about.value.1.desc", color: "#1d3b4c" },
  { icon: Heart, titleKey: "about.value.2.title", descKey: "about.value.2.desc", color: "#f39237" },
  { icon: Unlock, titleKey: "about.value.3.title", descKey: "about.value.3.desc", color: "#2a9d8f" },
  { icon: Globe2, titleKey: "about.value.4.title", descKey: "about.value.4.desc", color: "#6a8caf" },
];

const team = [
  { nameKey: "about.team.mehran.name" as TranslationKey, roleKey: "about.team.mehran.role" as TranslationKey, color: "#1d3b4c" },
  { nameKey: "about.team.alireza.name" as TranslationKey, roleKey: "about.team.alireza.role" as TranslationKey, color: "#f39237" },
];

export function AboutView() {
  const { t, locale } = useLanguage();

  return (
    <>
      <PageHeader badge={t("about.subtitle")} title={t("about.title")} subtitle={t("about.subtitle")} />

      {/* Mission & Vision */}
      <Section className="bg-background">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FadeIn>
            <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-soft">
              <div className="mb-4 grid size-12 place-items-center rounded-2xl bg-[#1d3b4c]/10 text-[#1d3b4c]">
                <Target className="size-6" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">{t("about.mission.title")}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {t("about.mission.desc")}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-soft">
              <div className="mb-4 grid size-12 place-items-center rounded-2xl bg-[#f39237]/10 text-[#f39237]">
                <Eye className="size-6" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">{t("about.vision.title")}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {t("about.vision.desc")}
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-muted/30">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {t("about.values.title")}
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.titleKey}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <div
                  className="mb-4 grid size-11 place-items-center rounded-xl"
                  style={{ backgroundColor: `${v.color}15`, color: v.color }}
                >
                  <Icon className="size-5" />
                </div>
                <h3 className="text-base font-bold text-foreground">{t(v.titleKey)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(v.descKey)}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Story */}
      <Section className="bg-background">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              {t("about.story.title")}
            </h2>
            <div className="mt-6 space-y-4">
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {t("about.story.p1")}
              </p>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {t("about.story.p2")}
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Team */}
      <Section className="bg-muted/30">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {t("about.team.title")}
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {team.map((member, i) => (
            <motion.div
              key={member.nameKey}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center shadow-soft"
            >
              <div
                className="grid size-16 place-items-center rounded-full text-xl font-bold text-white"
                style={{ backgroundColor: member.color }}
              >
                {t(member.nameKey).charAt(0)}
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">
                  {t(member.nameKey)}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {t(member.roleKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
