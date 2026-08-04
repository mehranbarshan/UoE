"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, Languages, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Logo } from "@/components/layout/Logo";
import { useLanguage } from "@/lib/i18n";
import { useNav, type ViewId } from "@/lib/store";
import { cn } from "@/lib/utils";

const navItems: { view: ViewId; key: Parameters<ReturnType<typeof useLanguage>["t"]>[0] }[] = [
  { view: "home", key: "nav.home" },
  { view: "about", key: "nav.about" },
  { view: "researchers", key: "nav.researchers" },
  { view: "participants", key: "nav.participants" },
  { view: "marketplace", key: "nav.marketplace" },
  { view: "pricing", key: "nav.pricing" },
  { view: "blog", key: "nav.blog" },
];

export function Header() {
  const { t, locale, toggleLocale } = useLanguage();
  const { view, setView, isLoggedIn, activeMode, openCreateOptions } = useNav();
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    queueMicrotask(() => setMounted(true));
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (v: ViewId) => setView(v);
  const dashboardView: ViewId | null = isLoggedIn
    ? activeMode === "researcher"
      ? "researcher-dashboard"
      : "participant-dashboard"
    : null;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "glass border-b border-border/60 shadow-soft"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => go("home")}
          className="flex items-center transition-opacity hover:opacity-90"
          aria-label={t("brand.full")}
        >
          <Logo />
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => go(item.view)}
              className={cn(
                "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                view === item.view
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {t(item.key)}
              {view === item.view && (
                <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-[#f39237]" />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLocale}
            className="gap-1.5 font-semibold"
            aria-label="Toggle language"
          >
            <Languages className="size-4" />
            <span>{locale === "fa" ? "EN" : "فا"}</span>
          </Button>

          {/* Theme toggle */}
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="size-9"
            >
              {theme === "dark" ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}
            </Button>
          )}

          {/* Login / Dashboard (desktop) */}
          {isLoggedIn && dashboardView ? (
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:inline-flex"
              onClick={() => go(dashboardView)}
            >
              {t("nav.dashboard")}
            </Button>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:inline-flex"
              onClick={() => go("auth")}
            >
              {t("nav.login")}
            </Button>
          )}

          {/* CTA (desktop) */}
          {isLoggedIn && dashboardView ? (
            <Button
              size="sm"
              className="hidden md:inline-flex bg-[#f39237] text-white hover:bg-[#e07f24] shadow-soft"
              onClick={openCreateOptions}
            >
              {t("nav.start")}
            </Button>
          ) : (
            <Button
              size="sm"
              className="hidden md:inline-flex bg-[#f39237] text-white hover:bg-[#e07f24] shadow-soft"
              onClick={openCreateOptions}
            >
              {t("nav.start")}
            </Button>
          )}

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side={locale === "fa" ? "right" : "left"}
              className="w-[280px] p-0"
            >
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex h-16 items-center justify-between border-b px-4">
                <Logo />
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" aria-label="Close">
                    <X className="size-5" />
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col gap-1 p-4">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.view}>
                    <button
                      onClick={() => go(item.view)}
                      className={cn(
                        "rounded-lg px-3 py-2.5 text-start text-sm font-medium transition-colors",
                        view === item.view
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      {t(item.key)}
                    </button>
                  </SheetClose>
                ))}
                <div className="my-2 h-px bg-border" />
                {isLoggedIn && dashboardView ? (
                  <SheetClose asChild>
                    <Button variant="outline" className="justify-start" onClick={() => go(dashboardView)}>
                      {t("nav.dashboard")}
                    </Button>
                  </SheetClose>
                ) : (
                  <SheetClose asChild>
                    <Button variant="outline" className="justify-start" onClick={() => go("auth")}>
                      {t("nav.login")}
                    </Button>
                  </SheetClose>
                )}
                <SheetClose asChild>
                  <Button
                    className="bg-[#f39237] text-white hover:bg-[#e07f24]"
                    onClick={openCreateOptions}
                  >
                    {t("nav.start")}
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
