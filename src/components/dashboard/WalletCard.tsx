"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Wallet, Coins, CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import { useNav } from "@/lib/store";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const rechargeOptions = [500, 1000, 2500, 5000];

export function WalletCard() {
  const { t, formatNumber } = useLanguage();
  const { setView } = useNav();
  const [balance, setBalance] = React.useState(1250);
  const [rechargeOpen, setRechargeOpen] = React.useState(false);
  const [amount, setAmount] = React.useState<number | null>(null);

  const handleRecharge = () => {
    if (!amount) return;
    setBalance((prev) => prev + amount);
    setAmount(null);
    setRechargeOpen(false);
    toast.success(t("dash.wallet.recharge.success"));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden rounded-2xl border border-slate-200 bg-[#1a2b49] p-5 text-white shadow-soft"
    >
      <div className="pointer-events-none absolute -top-10 -end-10 size-40 rounded-full bg-[#f39237]/20 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-14 start-1/4 size-52 rounded-full bg-white/5 blur-2xl" />

      <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-xl bg-[#f39237]/20 text-[#f39237]">
              <Wallet className="size-5" />
            </div>
            <div>
              <p className="text-xs text-white/60">{t("dash.wallet.balance")}</p>
              <p className="text-2xl font-extrabold leading-tight">
                {formatNumber(balance)}{" "}
                <span className="text-sm font-medium text-white/70">{t("dash.wallet.title")}</span>
              </p>
            </div>
          </div>
          <p className="text-xs text-white/60">{t("dash.wallet.hint")}</p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <Button className="bg-[#f39237] text-white hover:bg-[#e07f24]" onClick={() => setRechargeOpen(true)}>
            <Wallet className="size-4" />
            {t("dash.wallet.charge")}
          </Button>
          <Button
            variant="outline"
            className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            onClick={() => setView("marketplace")}
          >
            <Coins className="size-4" />
            {t("dash.wallet.earn")}
          </Button>
        </div>
      </div>

      <Dialog open={rechargeOpen} onOpenChange={(open) => !open && setRechargeOpen(false)}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-lg font-extrabold">{t("dash.wallet.recharge.title")}</DialogTitle>
            <DialogDescription className="leading-6">{t("dash.wallet.recharge.desc")}</DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-2 gap-2">
            {rechargeOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setAmount(opt)}
                className={cn(
                  "rounded-xl border px-4 py-3 text-sm font-bold transition-colors",
                  amount === opt
                    ? "border-[#f39237] bg-[#f39237]/10 text-[#1a2b49]"
                    : "border-border bg-muted/30 text-muted-foreground hover:border-[#f39237]/50 hover:text-foreground"
                )}
              >
                {formatNumber(opt)} {t("dash.wallet.title")}
              </button>
            ))}
          </div>

          <DialogFooter className="gap-2 sm:justify-stretch">
            <Button className="w-full bg-[#f39237] text-white hover:bg-[#e07f24]" disabled={!amount} onClick={handleRecharge}>
              <CheckCircle2 className="size-4" />
              {t("dash.wallet.recharge.confirm")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
