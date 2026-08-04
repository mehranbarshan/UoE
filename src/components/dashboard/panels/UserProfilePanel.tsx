"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Camera,
  BadgeCheck,
  GraduationCap,
  User,
  Wallet,
  ShieldCheck,
  KeyRound,
  Monitor,
  Smartphone,
  Globe,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { TranslationKey } from "@/lib/translations";

type ProfileTab = "personal" | "financial" | "security";

const tabs: { id: ProfileTab; key: TranslationKey; icon: typeof User }[] = [
  { id: "personal", key: "profile.tab.personal", icon: User },
  { id: "financial", key: "profile.tab.financial", icon: Wallet },
  { id: "security", key: "profile.tab.security", icon: ShieldCheck },
];

const degrees: { value: string; key: TranslationKey }[] = [
  { value: "highschool", key: "profile.degree.highschool" },
  { value: "bachelor", key: "profile.degree.bachelor" },
  { value: "master", key: "profile.degree.master" },
  { value: "phd", key: "profile.degree.phd" },
  { value: "postdoc", key: "profile.degree.postdoc" },
  { value: "other", key: "profile.degree.other" },
];

const sessions: { id: number; icon: typeof Monitor; deviceFa: string; deviceEn: string; locationFa: string; locationEn: string; current: boolean }[] = [
  { id: 1, icon: Monitor, deviceFa: "کروم — ویندوز ۱۱", deviceEn: "Chrome — Windows 11", locationFa: "تهران، ایران", locationEn: "Tehran, Iran", current: true },
  { id: 2, icon: Smartphone, deviceFa: "سفاری — آیفون ۱۵", deviceEn: "Safari — iPhone 15", locationFa: "اصفهان، ایران", locationEn: "Isfahan, Iran", current: false },
  { id: 3, icon: Globe, deviceFa: "فایرفاکس — لینوکس", deviceEn: "Firefox — Linux", locationFa: "تهران، ایران", locationEn: "Tehran, Iran", current: false },
];

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

export function UserProfilePanel() {
  const { t, locale } = useLanguage();
  const fileRef = React.useRef<HTMLInputElement>(null);
  const [tab, setTab] = React.useState<ProfileTab>("personal");

  const [name, setName] = React.useState(locale === "fa" ? "دکتر صادقی" : "Dr. Sadeghi");
  const [username, setUsername] = React.useState("@dr.sadeghi");
  const [email, setEmail] = React.useState("sadeghi@example.com");
  const [phone, setPhone] = React.useState("+98 912 345 6789");
  const [university, setUniversity] = React.useState(locale === "fa" ? "دانشگاه تهران" : "University of Tehran");
  const [field, setField] = React.useState(locale === "fa" ? "روانشناسی شناختی" : "Cognitive Psychology");
  const [bank, setBank] = React.useState(locale === "fa" ? "بانک ملت" : "Mellat Bank");
  const [sheba, setSheba] = React.useState("IR290120000000000000000001");
  const [degree, setDegree] = React.useState("master");

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) toast.success(t("profile.avatar.updated"));
    e.target.value = "";
  };

  const handleSave = () => toast.success(t("dash.survey.saved"));

  const handleRevoke = (id: number) => {
    const target = sessions.find((s) => s.id === id);
    if (target?.current) return;
    toast.success(t("profile.security.revoked"));
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Identity card */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft"
      >
        <div className="pointer-events-none absolute -top-20 -end-20 size-64 rounded-full bg-gradient-to-br from-[#f39237]/20 to-[#2a9d8f]/10 blur-2xl" />
        <div className="relative flex flex-col items-center gap-5 sm:flex-row">
          <div className="relative shrink-0">
            <div className="grid size-24 place-items-center rounded-2xl gradient-brand text-3xl font-black text-white">
              {locale === "fa" ? "ص" : "D"}
            </div>
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              aria-label={t("profile.avatar.updated")}
              className="absolute -bottom-2 -end-2 grid size-8 place-items-center rounded-full border border-border bg-background text-muted-foreground shadow-sm transition-colors hover:text-[#f39237]"
            >
              <Camera className="size-4" />
            </button>
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
          </div>
          <div className="min-w-0 text-center sm:text-start">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
              <h2 className="text-xl font-extrabold text-foreground">{name}</h2>
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                <BadgeCheck className="size-3.5" />
                {t("profile.verified")}
              </span>
            </div>
            <p className="mt-0.5 text-sm font-medium text-muted-foreground">{username}</p>
            <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
              <GraduationCap className="size-4 text-[#f39237]" />
              {locale === "fa" ? "دانشجوی ارشد روانشناسی" : "M.A. student in Psychology"}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-1.5 overflow-x-auto rounded-2xl border border-border bg-card p-1.5">
        {tabs.map((tabItem) => {
          const Icon = tabItem.icon;
          const isActive = tab === tabItem.id;
          return (
            <button
              key={tabItem.id}
              onClick={() => setTab(tabItem.id)}
              className={cn(
                "flex shrink-0 items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold transition-colors",
                isActive ? "bg-[#f39237] text-white shadow-sm" : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
            >
              <Icon className="size-4" />
              {t(tabItem.key)}
            </button>
          );
        })}
      </div>

      <motion.div
        key={tab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {tab === "personal" && (
          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-muted-foreground">{t("profile.personal.name")}</label>
                <Input value={name} onChange={(e) => setName(e.target.value)} className="mt-1.5 h-11" />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">{t("profile.personal.username")}</label>
                <Input value={username} onChange={(e) => setUsername(e.target.value)} className="mt-1.5 h-11" />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">{t("profile.personal.email")}</label>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="mt-1.5 h-11" />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">{t("profile.personal.phone")}</label>
                <Input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" className="mt-1.5 h-11" />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">{t("profile.personal.university")}</label>
                <Input value={university} onChange={(e) => setUniversity(e.target.value)} className="mt-1.5 h-11" />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">{t("profile.personal.field")}</label>
                <Input value={field} onChange={(e) => setField(e.target.value)} className="mt-1.5 h-11" />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">{t("profile.personal.degree")}</label>
                <Select value={degree} onValueChange={setDegree}>
                  <SelectTrigger className="mt-1.5 h-11 w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {degrees.map((d) => (
                      <SelectItem key={d.value} value={d.value}>
                        {t(d.key)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button className="mt-5 h-11 bg-[#f39237] text-white hover:bg-[#e07f24]" onClick={handleSave}>
              {t("profile.save")}
            </Button>
          </div>
        )}

        {tab === "financial" && (
          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <div className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-lg bg-[#2a9d8f]/15 text-[#2a9d8f]">
                <Wallet className="size-4" />
              </span>
              <h3 className="text-sm font-bold text-foreground">{t("profile.tab.financial")}</h3>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">{t("profile.financial.desc")}</p>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-muted-foreground">{t("profile.financial.sheba")}</label>
                <Input value={sheba} onChange={(e) => setSheba(e.target.value)} dir="ltr" className="mt-1.5 h-11 text-start" />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">{t("profile.financial.bank")}</label>
                <Input value={bank} onChange={(e) => setBank(e.target.value)} className="mt-1.5 h-11" />
              </div>
            </div>
            <Button className="mt-5 h-11 bg-[#f39237] text-white hover:bg-[#e07f24]" onClick={handleSave}>
              {t("profile.save")}
            </Button>
          </div>
        )}

        {tab === "security" && (
          <div className="flex flex-col gap-5">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <h3 className="flex items-center gap-2 text-sm font-bold text-foreground">
                <span className="grid size-8 place-items-center rounded-lg bg-[#e5484d]/15 text-[#e5484d]">
                  <KeyRound className="size-4" />
                </span>
                {t("profile.security.password")}
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <label className="text-xs font-medium text-muted-foreground">{t("profile.security.current")}</label>
                  <Input type="password" className="mt-1.5 h-11" />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground">{t("profile.security.new")}</label>
                  <Input type="password" className="mt-1.5 h-11" />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground">{t("profile.security.confirm")}</label>
                  <Input type="password" className="mt-1.5 h-11" />
                </div>
              </div>
              <Button className="mt-5 h-11 bg-[#f39237] text-white hover:bg-[#e07f24]" onClick={() => toast.success(t("profile.security.updated"))}>
                {t("profile.security.password")}
              </Button>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <h3 className="flex items-center gap-2 text-sm font-bold text-foreground">
                <span className="grid size-8 place-items-center rounded-lg bg-[#1d3b4c]/10 text-[#1d3b4c]">
                  <ShieldCheck className="size-4" />
                </span>
                {t("profile.security.sessions")}
              </h3>
              <div className="mt-3 divide-y divide-border">
                {sessions.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.id} className="flex items-center gap-3 py-3.5">
                      <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-accent text-muted-foreground">
                        <Icon className="size-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-foreground">{locale === "fa" ? s.deviceFa : s.deviceEn}</p>
                        <p className="truncate text-xs text-muted-foreground">{locale === "fa" ? s.locationFa : s.locationEn}</p>
                      </div>
                      {s.current ? (
                        <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                          {t("profile.security.currentSession")}
                        </span>
                      ) : (
                        <Button variant="outline" size="sm" className="shrink-0 text-red-600 hover:border-red-200 hover:bg-red-50 hover:text-red-700" onClick={() => handleRevoke(s.id)}>
                          <LogOut className="size-4" />
                          {t("profile.security.revoke")}
                        </Button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
