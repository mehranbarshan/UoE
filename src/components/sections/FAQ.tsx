"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/Section";
import { useLanguage } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/translations";
import { cn } from "@/lib/utils";

const faqItems: { q: TranslationKey; a: TranslationKey }[] = [
  { q: "faq.q1", a: "faq.a1" },
  { q: "faq.q2", a: "faq.a2" },
  { q: "faq.q3", a: "faq.a3" },
  { q: "faq.q4", a: "faq.a4" },
  { q: "faq.q5", a: "faq.a5" },
];

export function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <Section className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute start-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-[#f39237]/8 blur-3xl" />

      <SectionHeading
        badge={t("faq.badge")}
        title={t("faq.title")}
        subtitle={t("faq.subtitle")}
      />

      <div className="mx-auto mt-12 max-w-3xl space-y-4">
        {faqItems.map((item, i) => {
          const isOpen = openIndex === i;

          return (
            <div
              key={item.q}
              className={cn(
                "overflow-hidden rounded-2xl border bg-card shadow-soft transition-colors duration-300",
                isOpen
                  ? "border-[#f39237]/40"
                  : "border-border hover:border-[#f39237]/25"
              )}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start sm:px-6"
              >
                <span className="text-base font-semibold text-foreground sm:text-lg">
                  {t(item.q)}
                </span>
                <span
                  className={cn(
                    "grid size-8 shrink-0 place-items-center rounded-full border transition-all duration-300",
                    isOpen
                      ? "rotate-180 border-[#f39237] bg-[#f39237]/10 text-[#f39237]"
                      : "border-border text-muted-foreground"
                  )}
                >
                  <ChevronDown className="size-4" />
                </span>
              </button>

              <div
                id={`faq-panel-${i}`}
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-7 text-muted-foreground sm:px-6 sm:text-base sm:leading-8">
                    {t(item.a)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
