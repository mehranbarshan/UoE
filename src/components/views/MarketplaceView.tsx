"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Search, Clock, Coins, Users, Target, ArrowRight, ArrowLeft } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Section } from "@/components/shared/Section";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/i18n";
import { useNav } from "@/lib/store";
import { surveys, type SurveyItem } from "@/lib/content";
import { ExchangeCenter, TransactionHistory } from "@/components/marketplace/ExchangeCenter";
import { cn } from "@/lib/utils";

type Category = "all" | "health" | "education" | "social" | "tech" | "business";

const categoryColors: Record<string, string> = {
  health: "#e5484d",
  education: "#2a9d8f",
  social: "#6a8caf",
  tech: "#1d3b4c",
  business: "#f39237",
};

export function MarketplaceView() {
  const { t, locale } = useLanguage();
  const { setView, setActiveSurveyId } = useNav();
  const [filter, setFilter] = React.useState<Category>("all");
  const [query, setQuery] = React.useState("");
  const Arrow = locale === "fa" ? ArrowLeft : ArrowRight;

  const filters: { id: Category; key: Parameters<ReturnType<typeof useLanguage>["t"]>[0] }[] = [
    { id: "all", key: "marketplace.filter.all" },
    { id: "health", key: "marketplace.filter.health" },
    { id: "education", key: "marketplace.filter.education" },
    { id: "social", key: "marketplace.filter.social" },
    { id: "tech", key: "marketplace.filter.tech" },
    { id: "business", key: "marketplace.filter.business" },
  ];

  const filtered = surveys.filter((s) => {
    const matchesCat = filter === "all" || s.category === filter;
    const title = locale === "fa" ? s.titleFa : s.titleEn;
    const matchesQuery = query.trim() === "" || title.toLowerCase().includes(query.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const onJoin = (s: SurveyItem) => {
    setActiveSurveyId(s.id);
    setView("survey-runner");
  };

  const fmt = (n: number) => n.toLocaleString(locale === "fa" ? "fa-IR" : "en-US");

  return (
    <>
      <PageHeader badge={t("marketplace.subtitle")} title={t("marketplace.title")} subtitle={t("marketplace.subtitle")} />

      <Section className="bg-background">
        <ExchangeCenter />

        {/* Search + filters */}
        <div className="mt-10 flex flex-col gap-4">
          <div className="relative max-w-xl">
            <Search className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("marketplace.search.placeholder")}
              className="ps-9 h-11"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-colors",
                  filter === f.id
                    ? "border-[#f39237] bg-[#f39237] text-white"
                    : "border-border bg-background text-muted-foreground hover:border-[#f39237]/40 hover:text-foreground"
                )}
              >
                {t(f.key)}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-dashed border-border p-12 text-center text-muted-foreground">
            {t("marketplace.no.results")}
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s, i) => {
              const color = categoryColors[s.category];
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-glow"
                >
                  <div className="flex items-center justify-between gap-2">
                    <Badge
                      variant="outline"
                      className="border-0 font-semibold text-white"
                      style={{ backgroundColor: color }}
                    >
                      {t(`marketplace.filter.${s.category}` as never)}
                    </Badge>
                    <span className="flex items-center gap-1 text-xs font-bold text-[#2a9d8f]">
                      <Target className="size-3.5" />
                      {s.match}% {t("marketplace.match")}
                    </span>
                  </div>

                  <h3 className="mt-3 text-base font-bold leading-snug text-foreground">
                    {locale === "fa" ? s.titleFa : s.titleEn}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {locale === "fa" ? s.orgFa : s.orgEn}
                  </p>

                  <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-lg bg-muted/50 p-2">
                      <p className="flex items-center justify-center gap-1 text-sm font-bold text-foreground">
                        <Clock className="size-3.5 text-muted-foreground" />
                        {s.minutes}
                      </p>
                      <p className="text-[10px] text-muted-foreground">{t("marketplace.minutes")}</p>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-2">
                      <p className="text-sm font-bold text-foreground">{s.questions}</p>
                      <p className="text-[10px] text-muted-foreground">{t("marketplace.questions")}</p>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-2">
                      <p className="flex items-center justify-center gap-1 text-sm font-bold text-[#f39237]">
                        <Coins className="size-3.5" />
                        {s.reward}
                      </p>
                      <p className="text-[10px] text-muted-foreground">{t("marketplace.reward")}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-2">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Users className="size-3.5" />
                      {fmt(s.participants)} {t("marketplace.participants")}
                    </span>
                  </div>

                  <Button
                    className="mt-4 w-full bg-[#f39237] text-white hover:bg-[#e07f24]"
                    onClick={() => onJoin(s)}
                  >
                    {t("marketplace.join")}
                    <Arrow className="size-4" />
                  </Button>
                </motion.div>
              );
            })}
          </div>
        )}

        <TransactionHistory />

        <div className="mt-10 text-center">
          <Button variant="outline" onClick={() => setView("participant-dashboard")}>
            {t("common.viewAll")}
            <Arrow className="size-4" />
          </Button>
        </div>
      </Section>
    </>
  );
}
