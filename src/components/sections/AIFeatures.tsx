"use client";

import { motion } from "framer-motion";
import { Brain, ShieldCheck, Waypoints, Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/Section";
import { useLanguage } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/translations";

interface AIBlock {
  icon: typeof Brain;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  features: TranslationKey[];
  color: string;
  accent: string;
}

const blocks: AIBlock[] = [
  {
    icon: Brain,
    titleKey: "ai.assistant.title",
    descKey: "ai.assistant.desc",
    features: [
      "ai.assistant.f1",
      "ai.assistant.f2",
      "ai.assistant.f3",
      "ai.assistant.f4",
    ],
    color: "#1d3b4c",
    accent: "#6a8caf",
  },
  {
    icon: ShieldCheck,
    titleKey: "ai.quality.title",
    descKey: "ai.quality.desc",
    features: ["ai.quality.f1", "ai.quality.f2", "ai.quality.f3"],
    color: "#2a9d8f",
    accent: "#2a9d8f",
  },
  {
    icon: Waypoints,
    titleKey: "ai.matching.title",
    descKey: "ai.matching.desc",
    features: ["ai.matching.f1", "ai.matching.f2", "ai.matching.f3", "ai.matching.f4"],
    color: "#f39237",
    accent: "#f39237",
  },
];

export function AIFeatures() {
  const { t } = useLanguage();

  return (
    <Section className="relative overflow-hidden bg-background">
      {/* bg glow */}
      <div className="pointer-events-none absolute start-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-[#1d3b4c]/8 blur-3xl" />

      <SectionHeading
        badge={t("ai.title")}
        title={t("ai.title")}
        subtitle={t("ai.subtitle")}
      />

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {blocks.map((b, i) => {
          const Icon = b.icon;
          return (
            <motion.div
              key={b.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              {/* corner glow */}
              <div
                className="pointer-events-none absolute -end-12 -top-12 size-40 rounded-full opacity-15 blur-3xl transition-opacity group-hover:opacity-30"
                style={{ backgroundColor: b.color }}
              />
              <div
                className="mb-5 grid size-14 place-items-center rounded-2xl text-white shadow-soft"
                style={{ background: `linear-gradient(135deg, ${b.color}, ${b.accent})` }}
              >
                <Icon className="size-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{t(b.titleKey)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(b.descKey)}</p>

              <ul className="mt-5 space-y-2.5">
                {b.features.map((fKey) => (
                  <li key={fKey} className="flex items-center gap-2.5 text-sm text-foreground">
                    <span
                      className="grid size-5 shrink-0 place-items-center rounded-full text-white"
                      style={{ backgroundColor: b.color }}
                    >
                      <Check className="size-3" />
                    </span>
                    {t(fKey)}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
