"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  Gift,
  ArrowLeftRight,
  Coins,
  CheckCircle2,
  Clock,
  Timer,
  Sparkles,
  Flame,
  BookOpen,
  Banknote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
import { cn } from "@/lib/utils";
import type { TranslationKey } from "@/lib/translations";

const USER_POINTS = 7340;

type TabId = "packages" | "rewards" | "convert";

const tabs: { id: TabId; key: TranslationKey; icon: typeof CreditCard }[] = [
  { id: "packages", key: "exchange.tab.packages", icon: CreditCard },
  { id: "rewards", key: "exchange.tab.rewards", icon: Gift },
  { id: "convert", key: "exchange.tab.convert", icon: ArrowLeftRight },
];

interface PackageTier {
  id: string;
  nameFa: string;
  nameEn: string;
  responses: number;
  price: number;
  originalPrice?: number;
  delivery: number;
  popular?: boolean;
  aiQuality?: boolean;
  features: TranslationKey[];
}

const packages: PackageTier[] = [
  {
    id: "starter",
    nameFa: "پایه",
    nameEn: "Starter",
    responses: 100,
    price: 290000,
    delivery: 2,
    features: ["exchange.package.s1.f1", "exchange.package.s1.f2"],
  },
  {
    id: "pro",
    nameFa: "حرفه‌ای",
    nameEn: "Pro",
    responses: 500,
    price: 1200000,
    delivery: 2,
    popular: true,
    aiQuality: true,
    features: ["exchange.package.feature.ai", "exchange.package.pro.f2", "exchange.package.pro.f3"],
  },
  {
    id: "thesis",
    nameFa: "پایان‌نامه",
    nameEn: "Thesis",
    responses: 1000,
    price: 2100000,
    originalPrice: 2400000,
    delivery: 4,
    features: ["exchange.package.thesis.f1", "exchange.package.thesis.f2", "exchange.package.thesis.f3"],
  },
];

interface RewardItem {
  id: string;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  points: number;
  icon: typeof CreditCard;
  color: string;
  minNote?: boolean;
}

const rewards: RewardItem[] = [
  { id: "charge", titleKey: "exchange.reward.1.title", descKey: "exchange.reward.1.desc", points: 5000, icon: CreditCard, color: "#f39237" },
  { id: "book", titleKey: "exchange.reward.2.title", descKey: "exchange.reward.2.desc", points: 2500, icon: BookOpen, color: "#2a9d8f" },
  { id: "cashout", titleKey: "exchange.reward.3.title", descKey: "exchange.reward.3.desc", points: 10000, icon: Banknote, color: "#1d3b4c", minNote: true },
];

const transactions: {
  id: string;
  dateFa: string;
  dateEn: string;
  typeKey: TranslationKey;
  amountFa: string;
  amountEn: string;
  status: "success" | "pending";
}[] = [
  { id: "t1", dateFa: "۱۴۰۴/۰۲/۱۸", dateEn: "May 8, 2025", typeKey: "exchange.history.type.purchase", amountFa: "بسته ۵۰۰ پاسخ", amountEn: "500-response package", status: "success" },
  { id: "t2", dateFa: "۱۴۰۴/۰۲/۱۰", dateEn: "Apr 30, 2025", typeKey: "exchange.history.type.convert", amountFa: "+۵۰۰ امتیاز", amountEn: "+500 points", status: "success" },
  { id: "t3", dateFa: "۱۴۰۴/۰۱/۲۸", dateEn: "Apr 17, 2025", typeKey: "exchange.history.type.payout", amountFa: "۵,۰۰۰ امتیاز", amountEn: "5,000 points", status: "pending" },
];

const toLatinDigits = (s: string) =>
  s
    .replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
    .replace(/[٠-٩]/g, (d) => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)));

export function ExchangeCenter() {
  const { t, locale, formatNumber } = useLanguage();
  const [tab, setTab] = React.useState<TabId>("packages");
  const [checkout, setCheckout] = React.useState<PackageTier | null>(null);
  const [points, setPoints] = React.useState("");

  const n = parseInt(toLatinDigits(points), 10);
  const responses = Number.isFinite(n) && n > 0 ? Math.floor(n / 50) : 0;

  const confirmCheckout = () => {
    setCheckout(null);
    toast.success(t("exchange.checkout.success"));
  };

  const redeem = (reward: RewardItem) => {
    if (USER_POINTS < reward.points) return;
    toast.success(t("exchange.reward.success"));
  };

  const confirmConvert = () => {
    if (!Number.isFinite(n) || n <= 0) {
      toast.error(t("exchange.convert.error.amount"));
      return;
    }
    if (n > USER_POINTS) {
      toast.error(t("exchange.convert.error.balance"));
      return;
    }
    toast.success(t("exchange.convert.success"));
    setPoints("");
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-card p-4 shadow-sm sm:p-6">
      {/* Tab bar */}
      <div className="flex gap-1.5 overflow-x-auto rounded-2xl border border-slate-200 bg-background p-1.5">
        {tabs.map((tabItem) => {
          const Icon = tabItem.icon;
          const isActive = tab === tabItem.id;
          return (
            <button
              key={tabItem.id}
              onClick={() => setTab(tabItem.id)}
              className={cn(
                "flex shrink-0 items-center gap-1.5 rounded-xl px-3.5 py-2.5 text-xs font-bold transition-colors sm:text-sm",
                isActive
                  ? "bg-[#1a2b49] text-white shadow-sm"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
            >
              <Icon className="size-4 text-[#f39237]" />
              {t(tabItem.key)}
            </button>
          );
        })}
      </div>

      {/* Panels */}
      <motion.div
        key={tab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-6"
      >
        {tab === "packages" && (
          <div>
            <p className="text-sm text-muted-foreground">{t("exchange.packages.subtitle")}</p>
            <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
              {packages.map((p) => {
                const name = locale === "fa" ? p.nameFa : p.nameEn;
                return (
                  <div
                    key={p.id}
                    className={cn(
                      "relative flex flex-col rounded-2xl border border-slate-200 bg-card p-5 shadow-sm transition-shadow hover:shadow-md",
                      p.popular && "border-[#f39237] ring-1 ring-[#f39237]/20"
                    )}
                  >
                    {p.popular && (
                      <Badge className="absolute -top-3 inset-x-0 mx-auto w-fit border-transparent bg-[#f39237] text-white shadow-sm">
                        <Flame className="size-3" />
                        {t("exchange.package.badge.popular")}
                      </Badge>
                    )}
                    {p.originalPrice && (
                      <Badge variant="outline" className="absolute -top-3 end-0 border-emerald-200 bg-emerald-50 font-semibold text-emerald-700">
                        {t("exchange.package.badge.discount")}
                      </Badge>
                    )}
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-base font-extrabold text-foreground">{name}</h4>
                      {p.aiQuality && (
                        <Badge variant="outline" className="border-transparent bg-emerald-500/10 font-semibold text-emerald-700">
                          <Sparkles className="size-3" />
                          {t("exchange.package.feature.ai")}
                        </Badge>
                      )}
                    </div>
                    <p className="mt-2 text-2xl font-extrabold text-[#1a2b49]">
                      {formatNumber(p.responses)}{" "}
                      <span className="text-sm font-medium text-muted-foreground">{t("exchange.package.responses")}</span>
                    </p>

                    <div className="mt-4 flex items-end justify-between gap-2">
                      <div>
                        {p.originalPrice && (
                          <p className="text-xs text-muted-foreground line-through">
                            {formatNumber(p.originalPrice)} {t("exchange.toman")}
                          </p>
                        )}
                        <p className="text-lg font-extrabold text-[#f39237]">
                          {formatNumber(p.price)} <span className="text-xs font-medium">{t("exchange.toman")}</span>
                        </p>
                      </div>
                      <span className="flex items-center gap-1 text-xs font-semibold text-muted-foreground">
                        <Timer className="size-3.5 text-[#2a9d8f]" />
                        {formatNumber(p.delivery)} {t("exchange.package.days")}
                      </span>
                    </div>

                    <ul className="mt-4 space-y-2 border-t border-border pt-4">
                      {p.features.map((fk) => (
                        <li key={fk} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-[#2a9d8f]" />
                          {t(fk)}
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="mt-5 w-full bg-[#f39237] text-white hover:bg-[#e07f24]"
                      onClick={() => setCheckout(p)}
                    >
                      <CreditCard className="size-4" />
                      {t("exchange.package.order")}
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {tab === "rewards" && (
          <div>
            <p className="text-sm text-muted-foreground">{t("exchange.rewards.subtitle")}</p>
            <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
              {rewards.map((r) => {
                const Icon = r.icon;
                const enough = USER_POINTS >= r.points;
                return (
                  <div
                    key={r.id}
                    className={cn(
                      "flex flex-col rounded-2xl border border-slate-200 bg-card p-5 shadow-sm transition-shadow hover:shadow-md",
                      !enough && "opacity-90"
                    )}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="grid size-11 place-items-center rounded-xl" style={{ backgroundColor: `${r.color}15`, color: r.color }}>
                        <Icon className="size-5" />
                      </div>
                      <span className="flex items-center gap-1 rounded-full bg-[#f39237]/10 px-2.5 py-1 text-xs font-bold text-[#c97020]">
                        <Coins className="size-3.5" />
                        {formatNumber(r.points)} {t("exchange.reward.points")}
                      </span>
                    </div>
                    <h4 className="mt-3 text-sm font-bold leading-snug text-foreground">{t(r.titleKey)}</h4>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">{t(r.descKey)}</p>
                    {r.minNote && (
                      <p className="mt-2 text-[11px] font-semibold text-[#6a8caf]">
                        {t("exchange.reward.min")}: {formatNumber(10000)} {t("exchange.reward.points")}
                      </p>
                    )}
                    <div className="mt-4 flex-1" />
                    <Button
                      size="sm"
                      disabled={!enough}
                      className={cn(
                        "w-full",
                        enough ? "bg-[#f39237] text-white hover:bg-[#e07f24]" : ""
                      )}
                      onClick={() => redeem(r)}
                    >
                      <Gift className="size-4" />
                      {t("exchange.reward.redeem")}
                    </Button>
                    {!enough && (
                      <p className="mt-2 text-center text-[11px] font-semibold text-amber-600">
                        {t("exchange.reward.insufficient")}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {tab === "convert" && (
          <div className="mx-auto max-w-xl">
            <p className="text-sm text-muted-foreground">{t("exchange.convert.subtitle")}</p>
            <div className="mt-5 rounded-2xl border border-slate-200 bg-background p-5 shadow-sm sm:p-6">
              <div className="flex items-center justify-between rounded-xl bg-[#1a2b49]/5 px-3.5 py-2.5 text-xs font-semibold text-[#1a2b49]">
                <span className="flex items-center gap-1.5">
                  <Coins className="size-4 text-[#f39237]" />
                  {t("exchange.balance")}
                </span>
                <span className="font-extrabold">{formatNumber(USER_POINTS)} {t("exchange.reward.points")}</span>
              </div>

              <label className="mt-5 block text-sm font-bold text-foreground">
                {t("exchange.convert.input.label")}
              </label>
              <Input
                value={points}
                onChange={(e) => setPoints(e.target.value)}
                placeholder={formatNumber(500)}
                inputMode="numeric"
                className="mt-2 h-12 text-center text-lg font-bold"
              />

              <div className="mt-4 flex flex-col items-center gap-1.5 rounded-2xl border border-dashed border-[#f39237]/50 bg-[#f39237]/5 px-4 py-5 text-center">
                <span className="flex items-center gap-1 text-xs font-semibold text-muted-foreground">
                  <ArrowLeftRight className="size-3.5 text-[#f39237]" />
                  {t("exchange.convert.ratio")}
                </span>
                <p className="text-3xl font-extrabold text-[#1a2b49]">{formatNumber(responses)}</p>
                <p className="text-xs font-medium text-muted-foreground">{t("exchange.convert.output.responses")}</p>
              </div>

              <Button className="mt-5 w-full bg-[#f39237] text-white hover:bg-[#e07f24]" onClick={confirmConvert}>
                <CheckCircle2 className="size-4" />
                {t("exchange.convert.confirm")}
              </Button>
            </div>
          </div>
        )}
      </motion.div>

      {/* Checkout modal */}
      <Dialog open={checkout !== null} onOpenChange={(open) => !open && setCheckout(null)}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-lg font-extrabold">{t("exchange.checkout.title")}</DialogTitle>
            <DialogDescription className="leading-6">{t("exchange.checkout.desc")}</DialogDescription>
          </DialogHeader>
          {checkout && (
            <div className="space-y-2.5 rounded-2xl border border-slate-200 bg-background p-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">{t("exchange.checkout.package")}</span>
                <span className="font-bold text-foreground">{locale === "fa" ? checkout.nameFa : checkout.nameEn}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">{t("exchange.package.responses")}</span>
                <span className="font-bold text-foreground">{formatNumber(checkout.responses)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">{t("exchange.checkout.delivery")}</span>
                <span className="font-bold text-foreground">
                  {formatNumber(checkout.delivery)} {t("exchange.package.days")}
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-border pt-2.5">
                <span className="text-muted-foreground">{t("exchange.checkout.price")}</span>
                <span className="text-base font-extrabold text-[#f39237]">
                  {formatNumber(checkout.price)} {t("exchange.toman")}
                </span>
              </div>
            </div>
          )}
          <DialogFooter className="gap-2 sm:justify-stretch">
            <Button className="w-full bg-[#f39237] text-white hover:bg-[#e07f24]" onClick={confirmCheckout}>
              <CreditCard className="size-4" />
              {t("exchange.checkout.confirm")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export function TransactionHistory() {
  const { t, locale } = useLanguage();
  return (
    <div className="mt-6 rounded-2xl border border-slate-200 bg-card p-5 shadow-sm">
      <h3 className="text-sm font-bold text-foreground">{t("exchange.history.title")}</h3>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[560px] text-sm">
          <thead>
            <tr className="border-b border-border text-xs text-muted-foreground">
              <th className="px-3 py-2.5 text-start font-semibold">{t("exchange.history.date")}</th>
              <th className="px-3 py-2.5 text-start font-semibold">{t("exchange.history.type")}</th>
              <th className="px-3 py-2.5 text-start font-semibold">{t("exchange.history.amount")}</th>
              <th className="px-3 py-2.5 text-start font-semibold">{t("exchange.history.status")}</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => {
              const success = tx.status === "success";
              return (
                <tr key={tx.id} className="border-b border-border/60 last:border-0">
                  <td className="px-3 py-3 text-muted-foreground">{locale === "fa" ? tx.dateFa : tx.dateEn}</td>
                  <td className="px-3 py-3 font-semibold text-foreground">{t(tx.typeKey)}</td>
                  <td className="px-3 py-3 font-bold text-[#1a2b49]">{locale === "fa" ? tx.amountFa : tx.amountEn}</td>
                  <td className="px-3 py-3">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold",
                        success
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-amber-50 text-amber-700"
                      )}
                    >
                      {success ? <CheckCircle2 className="size-3.5" /> : <Clock className="size-3.5" />}
                      {success ? t("exchange.history.status.success") : t("exchange.history.status.pending")}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
