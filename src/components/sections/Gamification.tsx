"use client";

import { motion } from "framer-motion";
import { Coins, TrendingUp, Award, Trophy, Crown, Flame, Star } from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/Section";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/lib/i18n";
import { leaderboard } from "@/lib/content";
import type { TranslationKey } from "@/lib/translations";
import { cn } from "@/lib/utils";

const pillars: { icon: typeof Coins; titleKey: TranslationKey; descKey: TranslationKey; color: string }[] = [
  { icon: Coins, titleKey: "gamify.points", descKey: "gamify.points.desc", color: "#f39237" },
  { icon: TrendingUp, titleKey: "gamify.levels", descKey: "gamify.levels.desc", color: "#1d3b4c" },
  { icon: Award, titleKey: "gamify.badges", descKey: "gamify.badges.desc", color: "#2a9d8f" },
  { icon: Trophy, titleKey: "gamify.leaderboard", descKey: "gamify.leaderboard.desc", color: "#e9c46a" },
];

const badges = [
  { icon: Flame, key: "gamify.badge.streak" as TranslationKey, color: "#e5484d" },
  { icon: Star, key: "gamify.badge.answers" as TranslationKey, color: "#f39237" },
  { icon: Crown, key: "gamify.badge.elite" as TranslationKey, color: "#e9c46a" },
  { icon: Award, key: "gamify.badge.health" as TranslationKey, color: "#2a9d8f" },
];

export function Gamification() {
  const { t, locale, formatNumber } = useLanguage();

  return (
    <Section className="relative overflow-hidden bg-muted/30">
      <div className="pointer-events-none absolute end-0 top-20 h-72 w-72 rounded-full bg-[#f39237]/10 blur-3xl" />

      <SectionHeading
        badge={t("gamify.title")}
        title={t("gamify.title")}
        subtitle={t("gamify.subtitle")}
      />

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Left: pillars + profile card */}
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.titleKey}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="rounded-2xl border border-border bg-card p-5 shadow-soft"
                >
                  <div
                    className="mb-3 grid size-10 place-items-center rounded-xl text-white"
                    style={{ backgroundColor: p.color }}
                  >
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">{t(p.titleKey)}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t(p.descKey)}</p>
                </motion.div>
              );
            })}
          </div>

          {/* profile / level progress card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="grid size-12 place-items-center rounded-2xl gradient-orange text-white shadow-soft">
                  <Trophy className="size-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {t("gamify.level.label")}
                  </p>
                  <p className="text-lg font-bold text-foreground">
                    {t("gamify.player.name")}
                  </p>
                </div>
              </div>
              <div className="text-end">
                <p className="text-2xl font-extrabold text-[#f39237]">{formatNumber(7340)}</p>
                <p className="text-xs text-muted-foreground">{t("dash.points")}</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="mb-1.5 flex items-center justify-between text-xs font-medium text-muted-foreground">
                <span>{t("gamify.level.label")}</span>
                <span>{t("gamify.next.level")}</span>
              </div>
              <Progress value={71} className="h-2 bg-muted" />
            </div>

            {/* badges row */}
            <div className="mt-5 grid grid-cols-4 gap-2">
              {badges.map((b, i) => {
                const Icon = b.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
                    className="flex flex-col items-center gap-1.5 rounded-xl border border-border bg-background p-2.5"
                  >
                    <div
                      className="grid size-9 place-items-center rounded-full text-white"
                      style={{ backgroundColor: b.color }}
                    >
                      <Icon className="size-[18px]" />
                    </div>
                    <span className="text-center text-[10px] font-medium leading-tight text-muted-foreground">
                      {t(b.key)}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Right: leaderboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
        >
          <div className="flex items-center justify-between border-b border-border bg-muted/40 px-6 py-4">
            <div className="flex items-center gap-2">
              <Trophy className="size-5 text-[#f39237]" />
              <h3 className="font-bold text-foreground">{t("gamify.leaderboard")}</h3>
            </div>
            <span className="text-xs text-muted-foreground">{t("dash.rank")}</span>
          </div>
          <div className="divide-y divide-border">
            {leaderboard.map((entry, i) => {
              const isYou = entry.nameEn === "You";
              return (
                <motion.div
                  key={entry.rank}
                  initial={{ opacity: 0, x: locale === "fa" ? 12 : -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className={cn(
                    "flex items-center gap-4 px-6 py-3.5 transition-colors",
                    isYou && "bg-[#f39237]/8"
                  )}
                >
                  <div
                    className={cn(
                      "grid size-8 shrink-0 place-items-center rounded-full text-sm font-bold",
                      entry.rank === 1
                        ? "bg-[#e9c46a]/20 text-[#b8860b]"
                        : entry.rank === 2
                        ? "bg-[#6a8caf]/20 text-[#6a8caf]"
                        : entry.rank === 3
                        ? "bg-[#cd7f32]/20 text-[#cd7f32]"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {entry.rank <= 3 ? <Crown className="size-4" /> : entry.rank}
                  </div>
                  <div className="flex flex-1 items-center justify-between gap-3">
                    <div>
                      <p className={cn("text-sm font-semibold", isYou ? "text-[#f39237]" : "text-foreground")}>
                        {locale === "fa" ? entry.nameFa : entry.nameEn}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t("gamify.level.label").replace(/\d/, String(entry.level))} · Lv {entry.level}
                      </p>
                    </div>
                    <span className="text-sm font-bold text-foreground">
                      {formatNumber(entry.points)}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
