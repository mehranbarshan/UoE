"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Coins, ClipboardCheck, Zap, Trophy, ArrowLeftRight, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { useLanguage } from "@/lib/i18n";
import { useNav } from "@/lib/store";
import { leaderboard } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ParticipantOverviewPanel() {
  const { t, locale, formatNumber } = useLanguage();
  const { switchMode } = useNav();
  const [withdrawOpen, setWithdrawOpen] = React.useState(false);

  const stats = [
    { label: t("dash.points"), value: formatNumber(7340), icon: Coins, color: "#f39237" },
    { label: t("dash.level"), value: `Lv ${formatNumber(5)}`, icon: Zap, color: "#1d3b4c" },
    { label: t("dash.completed"), value: formatNumber(47), icon: ClipboardCheck, color: "#2a9d8f" },
    { label: t("dash.rank"), value: `#${formatNumber(412)}`, icon: Trophy, color: "#6a8caf" },
  ];

  const handleConvert = () => {
    toast.success(t("participant.wallet.convert.success"));
    switchMode();
  };

  const handleWithdraw = () => {
    setWithdrawOpen(false);
    toast.success(t("participant.wallet.withdraw.success"));
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Reward wallet summary */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative overflow-hidden rounded-2xl border border-slate-200 bg-[#1a2b49] p-5 text-white shadow-soft"
      >
        <div className="pointer-events-none absolute -top-10 -end-10 size-40 rounded-full bg-[#f39237]/20 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-14 start-1/4 size-52 rounded-full bg-white/5 blur-2xl" />

        <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-xl bg-[#f39237]/20 text-[#f39237]">
              <Coins className="size-5" />
            </div>
            <div>
              <p className="text-xs text-white/60">{t("participant.wallet.total")}</p>
              <p className="text-2xl font-extrabold leading-tight">
                {formatNumber(7340)}{" "}
                <span className="text-sm font-medium text-white/70">{t("dash.points")}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Button className="bg-[#f39237] text-white hover:bg-[#e07f24]" onClick={handleConvert}>
              <ArrowLeftRight className="size-4" />
              {t("participant.wallet.convert")}
            </Button>
            <Button
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              onClick={() => setWithdrawOpen(true)}
            >
              <Gift className="size-4" />
              {t("participant.wallet.withdraw")}
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-card p-4 shadow-soft"
            >
              <div className="grid size-9 place-items-center rounded-lg" style={{ backgroundColor: `${s.color}15`, color: s.color }}>
                <Icon className="size-5" />
              </div>
              <p className="mt-3 text-2xl font-extrabold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Leaderboard */}
      <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
        <h3 className="mb-3 text-sm font-bold text-foreground">{t("gamify.leaderboard")}</h3>
        <div className="space-y-2">
          {leaderboard.map((e) => {
            const isYou = e.nameEn === "You";
            return (
              <div
                key={e.rank}
                className={cn(
                  "flex items-center gap-3 rounded-lg p-2",
                  isYou && "bg-[#f39237]/8"
                )}
              >
                <span
                  className={cn(
                    "grid size-6 shrink-0 place-items-center rounded-full text-[11px] font-bold",
                    e.rank <= 3 ? "bg-[#e9c46a]/20 text-[#b8860b]" : "bg-muted text-muted-foreground"
                  )}
                >
                  {e.rank}
                </span>
                <span className={cn("flex-1 truncate text-sm font-semibold", isYou ? "text-[#f39237]" : "text-foreground")}>
                  {locale === "fa" ? e.nameFa : e.nameEn}
                </span>
                <span className="text-xs text-muted-foreground">{t("dash.level")} {formatNumber(e.level)}</span>
                <span className="w-16 text-end text-sm font-bold text-foreground">
                  {formatNumber(e.points)}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <Dialog open={withdrawOpen} onOpenChange={(open) => !open && setWithdrawOpen(false)}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-lg font-extrabold">{t("participant.wallet.withdraw.title")}</DialogTitle>
            <DialogDescription className="leading-6">{t("participant.wallet.withdraw.desc")}</DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:justify-stretch">
            <Button className="w-full bg-[#f39237] text-white hover:bg-[#e07f24]" onClick={handleWithdraw}>
              <Gift className="size-4" />
              {t("participant.wallet.withdraw.confirm")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
