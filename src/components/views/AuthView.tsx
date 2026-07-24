"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, User, Chrome, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/lib/i18n";
import { useNav, type UserRole } from "@/lib/store";
import { toast } from "sonner";

export function AuthView() {
  const { t, locale } = useLanguage();
  const { login } = useNav();
  const [mode, setMode] = React.useState<"login" | "register">("login");
  const [loading, setLoading] = React.useState(false);
  const [role, setRole] = React.useState<UserRole>("researcher");
  const [name, setName] = React.useState("");
  const Arrow = locale === "fa" ? ArrowLeft : ArrowRight;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success(
        mode === "login"
          ? t("auth.toast.login.success")
          : t("auth.toast.register.success")
      );
      const displayName = mode === "register" ? name : (locale === "fa" ? "پژوهشگر" : "Researcher");
      login(role, displayName || (locale === "fa" ? "پژوهشگر" : "Researcher"));
    }, 1100);
  };

  const onGoogle = () => {
    toast.info(t("auth.toast.google.connecting"));
    setTimeout(() => {
      toast.success(t("auth.toast.google.success"));
      login(role, locale === "fa" ? "کاربر گوگل" : "Google User");
    }, 1200);
  };

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden gradient-hero py-12">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -top-24 start-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-[#f39237]/12 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left: value props */}
        <div className="hidden flex-col justify-center gap-6 lg:flex">
          <div className="flex items-center gap-3">
            <div className="grid size-12 place-items-center rounded-2xl gradient-brand text-white shadow-soft">
              <span className="text-lg font-extrabold">UOE</span>
            </div>
            <div>
              <p className="text-xl font-extrabold text-foreground">{t("brand.full")}</p>
              <p className="text-sm text-muted-foreground">{t("footer.tagline")}</p>
            </div>
          </div>
          <h2 className="text-3xl font-extrabold leading-tight text-foreground">
            {t("auth.join.ecosystem")}
          </h2>
          <ul className="space-y-3">
            {[
              t("auth.feature.researchers"),
              t("auth.feature.assistant"),
              t("auth.feature.matching"),
              t("auth.feature.quality"),
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                <CheckCircle2 className="size-5 text-[#2a9d8f]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: form card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, x: locale === "fa" ? -16 : 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: locale === "fa" ? 16 : -16 }}
              transition={{ duration: 0.25 }}
            >
              <h1 className="text-2xl font-extrabold text-foreground">
                {mode === "login" ? t("auth.login.title") : t("auth.register.title")}
              </h1>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {mode === "login" ? t("auth.login.subtitle") : t("auth.register.subtitle")}
              </p>

              <Button
                variant="outline"
                className="mt-6 w-full border-border hover:bg-muted"
                onClick={onGoogle}
              >
                <Chrome className="size-4" />
                {t("auth.google")}
              </Button>

              <div className="my-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-border" />
                <span className="text-xs text-muted-foreground">{t("auth.or")}</span>
                <div className="h-px flex-1 bg-border" />
              </div>

              <form onSubmit={onSubmit} className="space-y-4">
                {mode === "register" && (
                  <>
                    <div className="space-y-1.5">
                      <Label htmlFor="name">{t("auth.name")}</Label>
                      <div className="relative">
                        <User className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="name"
                          type="text"
                          required
                          className="ps-9"
                          placeholder={t("auth.name.placeholder")}
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label>{t("auth.role.label")}</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {([
                          { value: "researcher" as UserRole, labelKey: "auth.role.researcher" as const },
                          { value: "participant" as UserRole, labelKey: "auth.role.participant" as const },
                        ]).map((r) => (
                          <button
                            key={r.value}
                            type="button"
                            onClick={() => setRole(r.value)}
                            className={`rounded-xl border-2 px-3 py-2.5 text-sm font-medium transition-all ${
                              role === r.value
                                ? "border-[#f39237] bg-[#f39237]/10 text-[#f39237]"
                                : "border-border bg-background text-muted-foreground hover:border-muted-foreground/30"
                            }`}
                          >
                            {t(r.labelKey)}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}
                <div className="space-y-1.5">
                  <Label htmlFor="email">{t("auth.email")}</Label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                    <Input id="email" type="email" required className="ps-9" placeholder="you@example.com" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="password">{t("auth.password")}</Label>
                  <div className="relative">
                    <Lock className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                    <Input id="password" type="password" required className="ps-9" placeholder="••••••••" />
                  </div>
                </div>

                <Button type="submit" className="w-full bg-[#f39237] text-white hover:bg-[#e07f24]" disabled={loading}>
                  {loading
                    ? "..."
                    : mode === "login"
                    ? t("auth.submit.login")
                    : t("auth.submit.register")}
                  {!loading && <Arrow className="size-4" />}
                </Button>
              </form>

              <button
                onClick={() => setMode(mode === "login" ? "register" : "login")}
                className="mt-5 w-full text-center text-sm text-muted-foreground transition-colors hover:text-[#f39237]"
              >
                {mode === "login" ? t("auth.switch.register") : t("auth.switch.login")}
              </button>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
