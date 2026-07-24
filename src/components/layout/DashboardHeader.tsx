"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Languages, LogOut, LifeBuoy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/Logo";
import { useLanguage } from "@/lib/i18n";
import { useNav } from "@/lib/store";

export function DashboardHeader() {
  const { t, locale, toggleLocale } = useLanguage();
  const { setView, userRole, logout } = useNav();
  const { theme, setTheme } = useTheme();

  const dashboardView = userRole === "researcher" ? "researcher-dashboard" : "participant-dashboard";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => setView(dashboardView)}
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <Logo size="sm" showText={false} />
          <span className="text-sm font-bold text-foreground">{t("brand.name")}</span>
        </button>

        <div className="flex items-center gap-1.5">
          <Button
            variant="ghost"
            size="sm"
            className="gap-1.5 text-xs text-muted-foreground"
            onClick={() => setView("home")}
          >
            <LifeBuoy className="size-3.5" />
            <span className="hidden sm:inline">{t("dash.header.support")}</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="size-8 text-muted-foreground"
            onClick={toggleLocale}
            title={locale === "fa" ? "English" : "فارسی"}
          >
            <Languages className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="size-8 text-muted-foreground"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="gap-1.5 text-xs text-muted-foreground hover:text-destructive"
            onClick={logout}
          >
            <LogOut className="size-3.5" />
            <span className="hidden sm:inline">{t("dash.header.logout")}</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
