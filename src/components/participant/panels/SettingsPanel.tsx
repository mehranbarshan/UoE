"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { User, Heart, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { TranslationKey } from "@/lib/translations";

const interests: TranslationKey[] = [
  "participant.cat.health",
  "participant.cat.education",
  "participant.cat.tech",
  "participant.cat.social",
  "participant.cat.business",
];

const notifications: { key: TranslationKey; defaultValue: boolean }[] = [
  { key: "participant.settings.notifications.surveys", defaultValue: true },
  { key: "participant.settings.notifications.rewards", defaultValue: true },
  { key: "participant.settings.notifications.reminders", defaultValue: false },
];

export function ParticipantSettingsPanel() {
  const { t, locale } = useLanguage();
  const [name, setName] = React.useState(locale === "fa" ? "نیلوفر محمدی" : "Niloofar Mohammadi");
  const [email, setEmail] = React.useState("niloofar@example.com");
  const [selected, setSelected] = React.useState<TranslationKey[]>([...interests.slice(0, 3)]);
  const [prefs, setPrefs] = React.useState<Record<number, boolean>>(
    Object.fromEntries(notifications.map((n, i) => [i, n.defaultValue]))
  );

  const toggleInterest = (key: TranslationKey) => {
    setSelected((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const handleSave = () => {
    toast.success(t("dash.survey.saved"));
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Profile */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl border border-border bg-card p-5 shadow-soft"
      >
        <h3 className="flex items-center gap-2 text-sm font-bold text-foreground">
          <span className="grid size-8 place-items-center rounded-lg bg-[#f39237]/15 text-[#f39237]">
            <User className="size-4" />
          </span>
          {t("participant.settings.profile")}
        </h3>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs font-medium text-muted-foreground">{t("participant.settings.name")}</label>
            <Input value={name} onChange={(e) => setName(e.target.value)} className="mt-1.5 h-11" />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground">{t("participant.settings.email")}</label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="mt-1.5 h-11" />
          </div>
        </div>
      </motion.div>

      {/* Interests */}
      <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
        <h3 className="flex items-center gap-2 text-sm font-bold text-foreground">
          <span className="grid size-8 place-items-center rounded-lg bg-[#2a9d8f]/15 text-[#2a9d8f]">
            <Heart className="size-4" />
          </span>
          {t("participant.settings.interests")}
        </h3>
        <p className="mt-1 text-xs text-muted-foreground">{t("participant.settings.interests.desc")}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {interests.map((key) => {
            const isSelected = selected.includes(key);
            return (
              <button
                key={key}
                onClick={() => toggleInterest(key)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                  isSelected
                    ? "border-[#f39237] bg-[#f39237] text-white"
                    : "border-border bg-background text-muted-foreground hover:border-[#f39237]/40 hover:text-foreground"
                )}
              >
                {t(key)}
              </button>
            );
          })}
        </div>
      </div>

      {/* Notifications */}
      <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
        <h3 className="flex items-center gap-2 text-sm font-bold text-foreground">
          <span className="grid size-8 place-items-center rounded-lg bg-[#6a8caf]/15 text-[#6a8caf]">
            <Bell className="size-4" />
          </span>
          {t("participant.settings.notifications")}
        </h3>
        <div className="mt-3 divide-y divide-border">
          {notifications.map((n, i) => (
            <div key={n.key} className="flex items-center justify-between gap-3 py-3.5">
              <span className="text-sm font-medium text-foreground">{t(n.key)}</span>
              <Switch
                checked={prefs[i]}
                onCheckedChange={(checked) => setPrefs((p) => ({ ...p, [i]: checked }))}
              />
            </div>
          ))}
        </div>
      </div>

      <Button className="h-11 bg-[#f39237] text-white hover:bg-[#e07f24]" onClick={handleSave}>
        {t("participant.settings.save")}
      </Button>
    </div>
  );
}
