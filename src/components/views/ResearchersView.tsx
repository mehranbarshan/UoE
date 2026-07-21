"use client";

import { motion } from "framer-motion";
import {
  FlaskConical,
  Upload,
  Users,
  Brain,
  Activity,
  Download,
  Zap,
  ShieldCheck,
  Layers,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Section, SectionHeading, FadeIn } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import { useNav } from "@/lib/store";
import type { TranslationKey } from "@/lib/translations";

const flow: { icon: typeof FlaskConical; key: TranslationKey; color: string }[] = [
  { icon: FlaskConical, key: "researchers.flow.1", color: "#1d3b4c" },
  { icon: Users, key: "researchers.flow.2", color: "#6a8caf" },
  { icon: Brain, key: "researchers.flow.3", color: "#2a9d8f" },
  { icon: Activity, key: "researchers.flow.4", color: "#f39237" },
  { icon: Download, key: "researchers.flow.5", color: "#e9c46a" },
];

const benefits: { icon: typeof Zap; titleKey: TranslationKey; descKey: TranslationKey; color: string }[] = [
  { icon: Zap, titleKey: "researchers.benefit.1.title", descKey: "researchers.benefit.1.desc", color: "#f39237" },
  { icon: ShieldCheck, titleKey: "researchers.benefit.2.title", descKey: "researchers.benefit.2.desc", color: "#2a9d8f" },
  { icon: Layers, titleKey: "researchers.benefit.3.title", descKey: "researchers.benefit.3.desc", color: "#1d3b4c" },
  { icon: Brain, titleKey: "researchers.benefit.4.title", descKey: "researchers.benefit.4.desc", color: "#6a8caf" },
];

const tools = [
  { icon: FlaskConical, fa: "طراحی پرسشنامه تعاملی", en: "Interactive survey builder" },
  { icon: Upload, fa: "وارد کردن پرسشنامه موجود", en: "Import existing questionnaire" },
  { icon: Users, fa: "تعریف جامعه هدف", en: "Define target population" },
  { icon: Brain, fa: "تطابق هوشمند مخاطب", en: "Smart audience matching" },
  { icon: Activity, fa: "رهگیری لحظه‌ای پاسخ", en: "Real-time response tracking" },
  { icon: ShieldCheck, fa: "تحلیل کیفیت داده", en: "Data quality analysis" },
  { icon: Download, fa: "خروجی CSV / Excel / SPSS", en: "CSV / Excel / SPSS export" },
  { icon: Layers, fa: "همکاری تیمی", en: "Team collaboration" },
];

export function ResearchersView() {
  const { t, locale } = useLanguage();
  const { setView } = useNav();
  const Arrow = locale === "fa" ? ArrowLeft : ArrowRight;

  return (
    <>
      <PageHeader badge={t("researchers.subtitle")} title={t("researchers.title")} subtitle={t("researchers.subtitle")}>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" className="bg-[#f39237] text-white hover:bg-[#e07f24] shadow-soft h-12 px-6" onClick={() => setView("create")}>
            {t("nav.start")}
            <Arrow className="size-4" />
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-6 border-[#1d3b4c]/20" onClick={() => setView("researcher-dashboard")}>
            {t("dashboard.researcher.title")}
          </Button>
        </div>
      </PageHeader>

      {/* Workflow */}
      <Section className="bg-background">
        <SectionHeading title={t("researchers.flow.title")} align="center" />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {flow.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 text-center shadow-soft"
              >
                <span className="absolute -top-2.5 start-1/2 -translate-x-1/2 rounded-full bg-background px-2 text-xs font-bold text-muted-foreground">
                  {i + 1}
                </span>
                <div className="grid size-12 place-items-center rounded-2xl text-white shadow-soft" style={{ backgroundColor: step.color }}>
                  <Icon className="size-6" />
                </div>
                <p className="text-sm font-semibold text-foreground">{t(step.key)}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Tools grid */}
      <Section className="bg-muted/30">
        <SectionHeading badge={t("nav.researchers")} title={locale === "fa" ? "ابزارهای کامل پژوهش" : "A complete research toolkit"} />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft transition-colors hover:border-[#f39237]/40">
                  <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#1d3b4c]/10 text-[#1d3b4c]">
                    <Icon className="size-5" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{locale === "fa" ? tool.fa : tool.en}</span>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* Benefits */}
      <Section className="bg-background">
        <SectionHeading title={t("researchers.benefits.title")} align="center" />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.titleKey}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <div className="grid size-12 shrink-0 place-items-center rounded-xl text-white" style={{ backgroundColor: b.color }}>
                  <Icon className="size-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{t(b.titleKey)}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t(b.descKey)}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
