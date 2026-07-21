"use client";

import { motion } from "framer-motion";
import {
  Users2,
  FileQuestion,
  AlertTriangle,
  Clock,
  Wand2,
  Sparkles,
  ShieldCheck,
  Trophy,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/Section";
import { useLanguage } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/translations";

const problems: {
  icon: typeof Users2;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  color: string;
}[] = [
  { icon: Users2, titleKey: "problem.1.title", descKey: "problem.1.desc", color: "#1d3b4c" },
  { icon: FileQuestion, titleKey: "problem.2.title", descKey: "problem.2.desc", color: "#6a8caf" },
  { icon: AlertTriangle, titleKey: "problem.3.title", descKey: "problem.3.desc", color: "#e9c46a" },
  { icon: Clock, titleKey: "problem.4.title", descKey: "problem.4.desc", color: "#e5484d" },
];

const solutions: {
  icon: typeof Wand2;
  titleKey: TranslationKey;
  descKey: TranslationKey;
}[] = [
  { icon: Wand2, titleKey: "solution.1.title", descKey: "solution.1.desc" },
  { icon: Sparkles, titleKey: "solution.2.title", descKey: "solution.2.desc" },
  { icon: ShieldCheck, titleKey: "solution.3.title", descKey: "solution.3.desc" },
  { icon: Trophy, titleKey: "solution.4.title", descKey: "solution.4.desc" },
];

export function ProblemSolution() {
  const { t } = useLanguage();

  return (
    <>
      {/* Problem */}
      <Section className="bg-background">
        <SectionHeading
          badge={t("problem.subtitle")}
          title={t("problem.title")}
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.titleKey}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-glow"
              >
                <div
                  className="mb-4 grid size-11 place-items-center rounded-xl"
                  style={{ backgroundColor: `${p.color}15`, color: p.color }}
                >
                  <Icon className="size-5" />
                </div>
                <h3 className="text-base font-bold text-foreground">{t(p.titleKey)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(p.descKey)}</p>
                <span className="pointer-events-none absolute -end-6 -top-6 text-7xl font-black text-foreground/5">
                  {i + 1}
                </span>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Solution */}
      <Section className="bg-muted/30">
        <SectionHeading
          badge={t("solution.title")}
          title={t("solution.title")}
          subtitle={t("solution.subtitle")}
        />
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {solutions.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.titleKey}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:border-[#f39237]/40"
              >
                <div className="grid size-12 shrink-0 place-items-center rounded-xl gradient-orange text-white shadow-soft">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{t(s.titleKey)}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t(s.descKey)}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
