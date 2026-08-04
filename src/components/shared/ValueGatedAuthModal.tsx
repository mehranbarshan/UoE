"use client";

import * as React from "react";
import { Sparkles, Rocket, UserPlus, Chrome, Mail, CheckCircle2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/lib/i18n";
import { useNav } from "@/lib/store";
import { toast } from "sonner";

export type ValueGateVariant = "survey_completed" | "publish_research" | "general_auth";

interface ValueGatedAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoggedIn?: () => void;
  title?: string;
  earnedPoints?: number;
  variant?: ValueGateVariant;
}

const variantIcons: Record<ValueGateVariant, typeof Sparkles> = {
  survey_completed: Sparkles,
  publish_research: Rocket,
  general_auth: UserPlus,
};

export function ValueGatedAuthModal({
  isOpen,
  onClose,
  onLoggedIn,
  title,
  earnedPoints = 50,
  variant = "general_auth",
}: ValueGatedAuthModalProps) {
  const { t, locale, localeDigits } = useLanguage();
  const { login } = useNav();
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const Icon = variantIcons[variant];
  const points = localeDigits(earnedPoints);
  const subtitle =
    variant === "publish_research"
      ? t("valuegate.subtitle.publish")
      : variant === "survey_completed"
      ? t("valuegate.subtitle").replace("{points}", points)
      : t("valuegate.subtitle.general");
  const modalTitle =
    title ??
    (variant === "publish_research"
      ? t("valuegate.title.publish")
      : variant === "survey_completed"
      ? t("valuegate.title.survey")
      : t("valuegate.title.general"));

  const onGoogle = () => {
    toast.info(t("valuegate.toast.google.connecting"));
    setTimeout(() => {
      toast.success(t("valuegate.toast.google.success"));
      login(locale === "fa" ? "کاربر گوگل" : "Google User");
      onLoggedIn?.();
      onClose();
    }, 1200);
  };

  const onEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success(t("valuegate.toast.email.sent"));
      login(email.split("@")[0] || (locale === "fa" ? "کاربر" : "User"));
      onLoggedIn?.();
      setEmail("");
      onClose();
    }, 1100);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        showCloseButton
        overlayClassName="backdrop-blur-sm bg-black/40"
        className="max-w-md gap-0 overflow-hidden rounded-3xl border-border p-0 shadow-soft sm:max-w-md"
      >
        {/* header */}
        <DialogHeader className="flex flex-col items-center gap-3 border-b border-border px-6 py-8 text-center">
          <div className="grid size-14 place-items-center rounded-2xl gradient-brand text-white shadow-glow">
            <Icon className="size-7" />
          </div>
          <DialogTitle className="text-xl font-extrabold leading-relaxed text-foreground sm:text-2xl">
            {modalTitle}
          </DialogTitle>
          <DialogDescription className="max-w-sm text-sm leading-7 text-muted-foreground">
            {subtitle}
          </DialogDescription>
        </DialogHeader>

        {/* actions */}
        <div className="flex flex-col gap-4 px-6 py-6">
          <Button
            size="lg"
            className="h-12 w-full bg-[#f39237] text-white shadow-soft hover:bg-[#e07f24]"
            onClick={onGoogle}
          >
            <Chrome className="size-5" />
            {t("valuegate.google")}
          </Button>

          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs text-muted-foreground">{t("valuegate.or")}</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={onEmail} className="flex flex-col gap-3">
            <div className="relative">
              <Mail className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="email"
                required
                className="h-12 ps-9"
                placeholder={t("valuegate.email.placeholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              size="lg"
              variant="outline"
              className="h-12 w-full border-border hover:bg-muted"
              disabled={loading}
            >
              {loading ? "..." : t("valuegate.email.cta")}
            </Button>
          </form>
        </div>

        {/* value props */}
        <div className="border-t border-border bg-muted/50 px-6 py-5">
          <ul className="space-y-3">
            {[t("valuegate.unlock.1"), t("valuegate.unlock.2"), t("valuegate.unlock.3")].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                <CheckCircle2 className="size-4 shrink-0 text-[#2a9d8f]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
