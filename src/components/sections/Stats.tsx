"use client";

import { motion } from "framer-motion";
import { Globe, FlaskConical, Building2, MessageSquareText } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { useLanguage } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/translations";

const stats: {
  icon: typeof Globe;
  value: string;
  labelKey: TranslationKey;
}[] = [
  { icon: MessageSquareText, value: "2.4M+", labelKey: "stats.responses" },
  { icon: FlaskConical, value: "12K+", labelKey: "stats.researchers" },
  { icon: Building2, value: "340+", labelKey: "stats.universities" },
  { icon: Globe, value: "48", labelKey: "stats.countries" },
];

export function Stats() {
  const { t } = useLanguage();

  return (
    <Section className="bg-background py-12 sm:py-16">
      <div className="relative overflow-hidden rounded-3xl gradient-brand px-6 py-12 text-white shadow-soft sm:px-12">
        {/* decorative */}
        <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" />
        <div className="pointer-events-none absolute -end-16 -top-16 size-64 rounded-full bg-[#f39237]/20 blur-3xl" />
        <div className="pointer-events-none absolute -start-16 -bottom-16 size-64 rounded-full bg-white/10 blur-3xl" />

        <div className="relative">
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            {t("stats.title")}
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.labelKey}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <div className="grid size-12 place-items-center rounded-2xl bg-white/10 backdrop-blur">
                    <Icon className="size-6 text-[#f7ae6a]" />
                  </div>
                  <span className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                    {s.value}
                  </span>
                  <span className="text-sm text-white/75">{t(s.labelKey)}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
