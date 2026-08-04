"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Coins, Trophy, ArrowLeftRight, ShoppingCart, CheckCircle2, Zap, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { TranslationKey } from "@/lib/translations";

let audioContext: AudioContext | null = null;

function playRewardSound() {
  const Ctx = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctx) return;
  if (!audioContext) audioContext = new Ctx();
  const ctx = audioContext;
  if (ctx.state === "suspended") ctx.resume();
  const now = ctx.currentTime;

  const playNote = (freq: number, start: number, duration: number) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    osc.connect(gain);
    gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0.0001, now + start);
    gain.gain.exponentialRampToValueAtTime(0.18, now + start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + start + duration);
    osc.start(now + start);
    osc.stop(now + start + duration + 0.05);
  };

  playNote(659.25, 0, 0.12);
  playNote(783.99, 0.09, 0.16);
  playNote(1046.5, 0.18, 0.22);
}

const packages: { id: number; nameKey: TranslationKey; credit: number; price: number; originalPrice?: number; badge?: TranslationKey }[] = [
  { id: 1, nameKey: "profile.credits.package.100", credit: 100, price: 290000 },
  { id: 2, nameKey: "profile.credits.package.500", credit: 500, price: 1200000, badge: "profile.credits.recommended" },
  { id: 3, nameKey: "profile.credits.package.1000", credit: 1000, price: 2000000, originalPrice: 2500000, badge: "profile.credits.discount" },
];

const historyRows: { id: number; dateFa: string; dateEn: string; type: "convert" | "purchase"; amountFa: string; amountEn: string }[] = [
  { id: 1, dateFa: "۱۴۰۴/۰۲/۱۵", dateEn: "May 5, 2025", type: "convert", amountFa: "۲۵۰ امتیاز", amountEn: "250 points" },
  { id: 2, dateFa: "۱۴۰۴/۰۱/۲۸", dateEn: "Apr 17, 2025", type: "purchase", amountFa: "۵۰۰ پاسخ", amountEn: "500 responses" },
  { id: 3, dateFa: "۱۴۰۴/۰۱/۱۰", dateEn: "Mar 30, 2025", type: "convert", amountFa: "۱۵۰ امتیاز", amountEn: "150 points" },
  { id: 4, dateFa: "۱۴۰۳/۱۲/۲۲", dateEn: "Mar 12, 2025", type: "purchase", amountFa: "۱۰۰ پاسخ", amountEn: "100 responses" },
];

export function CreditsPanel() {
  const { t, locale, formatNumber } = useLanguage();
  const [balance, setBalance] = React.useState(1250);
  const [points, setPoints] = React.useState(750);
  const [responses, setResponses] = React.useState(0);

  const maxResponses = Math.floor(points / 50);

  const handleConvert = () => {
    if (responses <= 0 || responses * 50 > points) {
      toast.error(t("profile.credits.convert.insufficient"));
      return;
    }
    const needed = responses * 50;
    setPoints((p) => p - needed);
    setBalance((b) => b + responses);
    setResponses(0);
    playRewardSound();
    toast.success(`${formatNumber(responses)} ${t("profile.credits.validResponse")} · ${t("profile.credits.convert.success")}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-5"
    >
      {/* Summary cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl bg-[#1d3b4c] p-5 text-white shadow-soft">
          <div className="pointer-events-none absolute -top-10 -end-10 size-40 rounded-full bg-white/5" />
          <div className="flex items-center gap-2 text-xs font-medium text-white/70">
            <Coins className="size-4" />
            {t("profile.credits.balance")}
          </div>
          <p className="mt-3 text-3xl font-extrabold">
            {formatNumber(balance)}{" "}
            <span className="text-base font-semibold text-white/80">{t("profile.credits.validResponse")}</span>
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Trophy className="size-4 text-[#f39237]" />
            {t("profile.credits.earned")}
          </div>
          <p className="mt-3 text-3xl font-extrabold text-foreground">
            {formatNumber(points)}{" "}
            <span className="text-base font-semibold text-muted-foreground">{t("profile.credits.points")}</span>
          </p>
        </div>
      </div>

      {/* Convert widget */}
      <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
        <h3 className="flex items-center gap-2 text-sm font-bold text-foreground">
          <span className="grid size-8 place-items-center rounded-lg bg-[#2a9d8f]/15 text-[#2a9d8f]">
            <ArrowLeftRight className="size-4" />
          </span>
          {t("profile.credits.convert.title")}
        </h3>
        <p className="mt-2 text-xs text-muted-foreground">{t("profile.credits.convert.rate")}</p>
        <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-end">
          <div className="flex-1">
            <label className="text-xs font-medium text-muted-foreground">{t("profile.credits.convert.pointsLabel")}</label>
            <div className="mt-1.5 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setResponses((r) => Math.min(maxResponses, r + 1))}
                disabled={responses >= maxResponses}
                aria-label={t("profile.credits.convert.increment")}
                className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#2a9d8f] text-white transition-colors hover:bg-[#23837a] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Plus className="size-5" />
              </button>
              <Input
                type="number"
                min={0}
                max={maxResponses}
                value={responses}
                onChange={(e) => setResponses(Math.min(Math.max(0, Number(e.target.value) || 0), maxResponses))}
                className="h-11 w-full text-center"
              />
              <button
                type="button"
                onClick={() => setResponses((r) => Math.max(0, r - 1))}
                disabled={responses <= 0}
                aria-label={t("profile.credits.convert.decrement")}
                className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#f39237] text-white transition-colors hover:bg-[#e07f24] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Minus className="size-5" />
              </button>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-background px-4 py-2.5">
            <p className="text-[11px] text-muted-foreground">{t("profile.credits.convert.equivalent")}</p>
            <p className="text-sm font-bold text-foreground">
              {formatNumber(responses * 50)} {t("profile.credits.points")}
            </p>
          </div>
          <Button className="h-11 bg-[#2a9d8f] text-white hover:bg-[#23837a]" onClick={handleConvert}>
            <Zap className="size-4" />
            {t("profile.credits.convert.cta")}
          </Button>
        </div>
      </div>

      {/* Purchase packages */}
      <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
        <h3 className="flex items-center gap-2 text-sm font-bold text-foreground">
          <span className="grid size-8 place-items-center rounded-lg bg-[#f39237]/15 text-[#f39237]">
            <ShoppingCart className="size-4" />
          </span>
          {t("profile.credits.purchase.title")}
        </h3>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={cn(
                "relative flex flex-col gap-2 rounded-xl border p-4",
                pkg.badge === "profile.credits.recommended" ? "border-[#f39237]/50 bg-[#f39237]/5" : "border-border bg-background"
              )}
            >
              {pkg.badge && (
                <span
                  className={cn(
                    "absolute -top-2.5 inset-x-0 mx-auto w-fit rounded-full px-2.5 py-0.5 text-[10px] font-bold text-white",
                    pkg.badge === "profile.credits.recommended" ? "bg-[#f39237]" : "bg-[#2a9d8f]"
                  )}
                >
                  {t(pkg.badge)}
                </span>
              )}
              <p className="text-sm font-bold text-foreground">{t(pkg.nameKey)}</p>
              <div className="mt-auto">
                {pkg.originalPrice && (
                  <p className="text-xs text-muted-foreground line-through">
                    {formatNumber(pkg.originalPrice)} {t("profile.credits.currency")}
                  </p>
                )}
                <p className="text-base font-extrabold text-foreground">
                  {formatNumber(pkg.price)}{" "}
                  <span className="text-xs font-medium text-muted-foreground">{t("profile.credits.currency")}</span>
                </p>
              </div>
              <Button variant="outline" size="sm" className="w-full" onClick={() => toast.success(t("profile.credits.purchase.toast"))}>
                {t("profile.credits.purchase.cta")}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* History table */}
      <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
        <h3 className="text-sm font-bold text-foreground">{t("profile.credits.history")}</h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="border-b border-border text-xs text-muted-foreground">
                <th className="px-3 py-2.5 text-start font-semibold">{t("profile.credits.history.date")}</th>
                <th className="px-3 py-2.5 text-start font-semibold">{t("profile.credits.history.type")}</th>
                <th className="px-3 py-2.5 text-start font-semibold">{t("profile.credits.history.amount")}</th>
                <th className="px-3 py-2.5 text-start font-semibold">{t("profile.credits.history.status")}</th>
              </tr>
            </thead>
            <tbody>
              {historyRows.map((row) => (
                <tr key={row.id} className="border-b border-border/60 last:border-0">
                  <td className="px-3 py-3 text-muted-foreground">{locale === "fa" ? row.dateFa : row.dateEn}</td>
                  <td className="px-3 py-3 font-semibold text-foreground">
                    {row.type === "convert" ? t("profile.credits.history.convert") : t("profile.credits.history.purchase")}
                  </td>
                  <td className="px-3 py-3 text-muted-foreground">{locale === "fa" ? row.amountFa : row.amountEn}</td>
                  <td className="px-3 py-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      <CheckCircle2 className="size-3.5" />
                      {t("profile.credits.history.success")}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
