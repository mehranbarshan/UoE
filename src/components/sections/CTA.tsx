"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import { useNav } from "@/lib/store";

export function CTA() {
  const { t, locale } = useLanguage();
  const { setView, openCreateOptions } = useNav();
  const Arrow = locale === "fa" ? ArrowLeft : ArrowRight;

  return (
    <Section className="bg-background">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#fff3e6] via-background to-background p-8 shadow-soft sm:p-14 dark:from-[#1a3444]/40"
      >
        <div className="pointer-events-none absolute -end-20 -top-20 size-72 rounded-full bg-[#f39237]/15 blur-3xl" />
        <div className="pointer-events-none absolute -start-20 -bottom-20 size-72 rounded-full bg-[#1d3b4c]/10 blur-3xl" />

        <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-semibold text-primary shadow-soft backdrop-blur dark:bg-secondary/30">
            <Sparkles className="size-3.5" />
            UOE
          </span>
          <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t("cta.title")}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("cta.subtitle")}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="bg-[#f39237] text-white hover:bg-[#e07f24] shadow-soft h-12 px-6 text-base"
              onClick={openCreateOptions}
            >
              {t("cta.primary")}
              <Arrow className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-6 text-base border-border hover:bg-secondary/50"
              onClick={() => setView("marketplace")}
            >
              {t("cta.secondary")}
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
