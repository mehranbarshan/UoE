"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Flame, Star, Crown, Award, Coins, Trophy, Zap, Lock } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { TranslationKey } from "@/lib/translations";

const badges: { icon: typeof Flame; key: TranslationKey; color: string; earned: boolean }[] = [
  { icon: Flame, key: "gamify.badge.streak", color: "#e5484d", earned: true },
  { icon: Star, key: "gamify.badge.answers", color: "#f39237", earned: true },
  { icon: Crown, key: "gamify.badge.elite", color: "#e9c46a", earned: true },
  { icon: Award, key: "gamify.badge.health", color: "#2a9d8f", earned: true },
  { icon: Coins, key: "gamify.badge.points", color: "#1d3b4c", earned: false },
  { icon: Trophy, key: "gamify.badge.champion", color: "#6a8caf", earned: false },
];

export function ParticipantAchievementsPanel() {
  const { t, locale, formatNumber } = useLanguage();

  return (
    <div className="flex flex-col gap-6">
      {/* Level progress hero */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft"
      >
        <div className="pointer-events-none absolute -top-12 -end-12 size-40 rounded-full bg-[#f39237]/12 blur-3xl" />
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-[#f39237]/15 text-[#f39237]">
              <Zap className="size-7" />
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground">{t("participant.level.current")}</p>
              <p className="text-3xl font-extrabold text-foreground">
                {t("dash.level")} {formatNumber(5)}
              </p>
            </div>
            <div className="mx-2 hidden h-10 w-px bg-border sm:block" />
            <div>
              <p className="text-xs font-semibold text-muted-foreground">{t("participant.level.next")}</p>
              <p className="text-3xl font-extrabold text-[#f39237]">
                {t("dash.level")} {formatNumber(6)}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm font-bold text-[#2a9d8f]">
            <span className="grid size-8 place-items-center rounded-lg bg-[#2a9d8f]/10">
              <Trophy className="size-4" />
            </span>
            {formatNumber(250)} {t("participant.level.remaining")}
          </div>
        </div>

        <div className="relative mt-5">
          <Progress value={75} className="h-3 bg-muted" />
          <div className="mt-1.5 flex justify-between text-xs text-muted-foreground">
            <span>{formatNumber(750)} / {formatNumber(1000)}</span>
            <span>{t("participant.level.toNext")}</span>
          </div>
        </div>
      </motion.div>

      {/* Badges */}
      <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
        <h3 className="text-sm font-bold text-foreground">{t("dashboard.nav.achievements")}</h3>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {badges.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.key}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className={cn(
                  "relative flex flex-col items-center gap-2 rounded-xl border border-border p-4 text-center",
                  b.earned ? "bg-background" : "bg-muted/40 opacity-70"
                )}
              >
                <div
                  className={cn(
                    "relative grid size-12 place-items-center rounded-full text-white",
                    b.earned ? "" : "grayscale"
                  )}
                  style={{ backgroundColor: b.earned ? b.color : "#94a3b8" }}
                >
                  <Icon className="size-6" />
                  {!b.earned && (
                    <span className="absolute -bottom-1 -end-1 grid size-5 place-items-center rounded-full bg-foreground/10 text-foreground/50">
                      <Lock className="size-3" />
                    </span>
                  )}
                </div>
                <span
                  className={cn(
                    "text-xs font-semibold leading-tight",
                    b.earned ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {t(b.key)}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
