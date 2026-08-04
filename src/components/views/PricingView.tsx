"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import { useNav } from "@/lib/store";
import { cn } from "@/lib/utils";

interface Plan {
  nameKey: Parameters<ReturnType<typeof useLanguage>["t"]>[0];
  descKey: Parameters<ReturnType<typeof useLanguage>["t"]>[0];
  monthly: number;
  popular?: boolean;
  features: { fa: string; en: string }[];
  ctaKey: Parameters<ReturnType<typeof useLanguage>["t"]>[0];
  ctaView: "create" | "auth";
  accent: string;
}

const plans: Plan[] = [
  {
    nameKey: "pricing.researcher.name",
    descKey: "pricing.researcher.desc",
    monthly: 0,
    ctaKey: "pricing.cta",
    ctaView: "create",
    accent: "#1d3b4c",
    features: [
      { fa: "تا ۳ پرسشنامه فعال", en: "Up to 3 active surveys" },
      { fa: "۲۰۰ پاسخ در ماه", en: "200 responses / month" },
      { fa: "دستیار هوش مصنوعی پایه", en: "Basic AI assistant" },
      { fa: "تحلیل کیفیت داده", en: "Data quality analysis" },
      { fa: "خروجی CSV", en: "CSV export" },
    ],
  },
  {
    nameKey: "pricing.team.name",
    descKey: "pricing.team.desc",
    monthly: 49,
    popular: true,
    ctaKey: "pricing.cta",
    ctaView: "auth",
    accent: "#f39237",
    features: [
      { fa: "پرسشنامه نامحدود", en: "Unlimited surveys" },
      { fa: "۱۰٬۰۰۰ پاسخ در ماه", en: "10,000 responses / month" },
      { fa: "دستیار هوش مصنوعی پیشرفته", en: "Advanced AI assistant" },
      { fa: "تطابق هوشمند مخاطب", en: "Smart audience matching" },
      { fa: "همکاری تیمی تا ۱۰ نفر", en: "Team collaboration (10 seats)" },
      { fa: "خروجی CSV، Excel، SPSS", en: "CSV, Excel, SPSS export" },
      { fa: "گزارش‌های سفارشی", en: "Custom reports" },
    ],
  },
  {
    nameKey: "pricing.enterprise.name",
    descKey: "pricing.enterprise.desc",
    monthly: -1,
    ctaKey: "pricing.cta",
    ctaView: "auth",
    accent: "#2a9d8f",
    features: [
      { fa: "پرسشنامه و پاسخ نامحدود", en: "Unlimited surveys & responses" },
      { fa: "داشبورد نهادی", en: "Institutional dashboard" },
      { fa: "تطابق اختصاصی مخاطب", en: "Dedicated audience matching" },
      { fa: "API و یکپارچه‌سازی", en: "API & integrations" },
      { fa: "مدیر حساب اختصاصی", en: "Dedicated account manager" },
      { fa: "SSO و امنیت سازمانی", en: "SSO & enterprise security" },
      { fa: "پشتیبانی ۲۴/۷", en: "24/7 support" },
    ],
  },
];

export function PricingView() {
  const { t, locale } = useLanguage();
  const { setView, openCreateOptions } = useNav();
  const [yearly, setYearly] = React.useState(false);

  return (
    <>
      <PageHeader badge={t("pricing.subtitle")} title={t("pricing.title")} subtitle={t("pricing.subtitle")} />

      <Section className="bg-background">
        {/* billing toggle */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setYearly(false)}
            className={cn(
              "text-sm font-semibold transition-colors",
              !yearly ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {t("pricing.monthly")}
          </button>
          <button
            onClick={() => setYearly((v) => !v)}
            className={cn(
              "relative h-7 w-12 rounded-full transition-colors",
              yearly ? "bg-[#f39237]" : "bg-muted"
            )}
            aria-label="Toggle billing period"
          >
            <span
              className={cn(
                "absolute top-1 size-5 rounded-full bg-white shadow transition-all",
                yearly ? "start-6" : "start-1"
              )}
            />
          </button>
          <button
            onClick={() => setYearly(true)}
            className={cn(
              "text-sm font-semibold transition-colors",
              yearly ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {t("pricing.yearly")}
          </button>
          <span className="rounded-full bg-[#2a9d8f]/15 px-2 py-0.5 text-xs font-bold text-[#2a9d8f]">
            {t("pricing.save")}
          </span>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => {
            const price = plan.monthly === -1 ? null : plan.monthly === 0 ? 0 : yearly ? Math.round(plan.monthly * 0.8) : plan.monthly;
            return (
              <motion.div
                key={plan.nameKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn(
                  "relative flex flex-col rounded-3xl border-2 bg-card p-7 shadow-soft",
                  plan.popular ? "border-[#f39237] shadow-glow" : "border-border"
                )}
              >
                {plan.popular && (
                  <span className="absolute -top-3 start-1/2 -translate-x-1/2 rounded-full bg-[#f39237] px-3 py-1 text-xs font-bold text-white shadow-soft">
                    {t("pricing.popular")}
                  </span>
                )}
                <h3 className="text-lg font-bold" style={{ color: plan.accent }}>
                  {t(plan.nameKey)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(plan.descKey)}</p>

                <div className="mt-5 flex items-end gap-1">
                  {price === null ? (
                    <span className="text-4xl font-extrabold text-foreground">{t("pricing.custom")}</span>
                  ) : price === 0 ? (
                    <span className="text-4xl font-extrabold text-foreground">{t("pricing.free")}</span>
                  ) : (
                    <>
                      <span className="text-4xl font-extrabold text-foreground">${price}</span>
                      <span className="mb-1 text-sm text-muted-foreground">{t("pricing.mo")}</span>
                    </>
                  )}
                </div>

                <Button
                  className={cn(
                    "mt-6 w-full text-white",
                    plan.popular ? "bg-[#f39237] hover:bg-[#e07f24]" : "bg-[#1d3b4c] hover:bg-[#142a37]"
                  )}
                  onClick={() => (plan.ctaView === "create" ? openCreateOptions() : setView(plan.ctaView))}
                >
                  {t(plan.ctaKey)}
                </Button>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-foreground">
                      <span
                        className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full text-white"
                        style={{ backgroundColor: plan.accent }}
                      >
                        <Check className="size-3" />
                      </span>
                      {locale === "fa" ? f.fa : f.en}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-2 rounded-2xl border border-border bg-muted/30 p-4 text-center text-sm text-muted-foreground">
          <Sparkles className="size-4 shrink-0 text-[#f39237]" />
          {t("pricing.trial.note")}
        </div>
      </Section>
    </>
  );
}
