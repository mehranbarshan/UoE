"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FlaskConical,
  Upload,
  Users,
  SlidersHorizontal,
  Calculator,
  Activity,
  ShieldCheck,
  Download,
  Compass,
  Coins,
  ClipboardCheck,
  UserCircle,
  History,
  Building2,
  FolderKanban,
  UserPlus,
  FileBarChart,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import { useNav, type ViewId } from "@/lib/store";
import type { TranslationKey } from "@/lib/translations";
import { cn } from "@/lib/utils";

type PersonaId = "researcher" | "participant" | "org";

interface Persona {
  id: PersonaId;
  titleKey: TranslationKey;
  tagKey: TranslationKey;
  descKey: TranslationKey;
  features: TranslationKey[];
  ctaKey: TranslationKey;
  ctaView: ViewId;
  icon: typeof FlaskConical;
  color: string;
  gradient: string;
}

const personas: Persona[] = [
  {
    id: "researcher",
    titleKey: "persona.researcher.title",
    tagKey: "persona.researcher.tag",
    descKey: "persona.researcher.desc",
    features: [
      "persona.researcher.f1",
      "persona.researcher.f2",
      "persona.researcher.f3",
      "persona.researcher.f4",
      "persona.researcher.f5",
      "persona.researcher.f6",
      "persona.researcher.f7",
      "persona.researcher.f8",
    ],
    ctaKey: "persona.researcher.cta",
    ctaView: "researcher-dashboard",
    icon: FlaskConical,
    color: "#1d3b4c",
    gradient: "from-[#1d3b4c] to-[#2a5266]",
  },
  {
    id: "participant",
    titleKey: "persona.participant.title",
    tagKey: "persona.participant.tag",
    descKey: "persona.participant.desc",
    features: [
      "persona.participant.f1",
      "persona.participant.f2",
      "persona.participant.f3",
      "persona.participant.f4",
      "persona.participant.f5",
    ],
    ctaKey: "persona.participant.cta",
    ctaView: "marketplace",
    icon: UserCircle,
    color: "#f39237",
    gradient: "from-[#f39237] to-[#f7ae6a]",
  },
  {
    id: "org",
    titleKey: "persona.org.title",
    tagKey: "persona.org.tag",
    descKey: "persona.org.desc",
    features: ["persona.org.f1", "persona.org.f2", "persona.org.f3", "persona.org.f4"],
    ctaKey: "persona.org.cta",
    ctaView: "about",
    icon: Building2,
    color: "#2a9d8f",
    gradient: "from-[#2a9d8f] to-[#1d3b4c]",
  },
];

const featureIcons: Record<string, typeof FlaskConical> = {
  "persona.researcher.f1": FlaskConical,
  "persona.researcher.f2": Upload,
  "persona.researcher.f3": Users,
  "persona.researcher.f4": SlidersHorizontal,
  "persona.researcher.f5": Calculator,
  "persona.researcher.f6": Activity,
  "persona.researcher.f7": ShieldCheck,
  "persona.researcher.f8": Download,
  "persona.participant.f1": Compass,
  "persona.participant.f2": Coins,
  "persona.participant.f3": ClipboardCheck,
  "persona.participant.f4": UserCircle,
  "persona.participant.f5": History,
  "persona.org.f1": Building2,
  "persona.org.f2": FolderKanban,
  "persona.org.f3": UserPlus,
  "persona.org.f4": FileBarChart,
};

export function Personas() {
  const { t, locale } = useLanguage();
  const { setView } = useNav();
  const [active, setActive] = React.useState<PersonaId>("researcher");
  const Arrow = locale === "fa" ? ArrowLeft : ArrowRight;
  const persona = personas.find((p) => p.id === active)!;

  return (
    <Section className="bg-background">
      <SectionHeading
        badge={t("personas.title")}
        title={t("personas.title")}
        subtitle={t("personas.subtitle")}
      />

      {/* Tabs */}
      <div className="mt-10 flex justify-center">
        <div className="inline-flex rounded-xl border border-border bg-muted/40 p-1">
          {personas.map((p) => {
            const Icon = p.icon;
            const isActive = active === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={cn(
                  "relative flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors sm:px-5",
                  isActive ? "text-white" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="personaPill"
                    className="absolute inset-0 -z-10 rounded-lg"
                    style={{ backgroundColor: p.color }}
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <Icon className="size-4" />
                <span className="hidden sm:inline">{t(p.titleKey)}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active persona card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={persona.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
          className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Left visual */}
            <div className={cn("relative flex flex-col justify-between gap-6 p-8 text-white lg:col-span-2 bg-gradient-to-br", persona.gradient)}>
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
                  {t(persona.tagKey)}
                </span>
                <h3 className="mt-4 text-3xl font-extrabold tracking-tight">
                  {t(persona.titleKey)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/85">
                  {t(persona.descKey)}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="grid size-16 place-items-center rounded-2xl bg-white/15 backdrop-blur">
                  <persona.icon className="size-8" />
                </div>
                <div className="text-sm text-white/80">
                  <PersonaStat id={persona.id} locale={locale} />
                </div>
              </div>
              {/* decorative dots */}
              <div className="pointer-events-none absolute -bottom-8 -end-8 size-40 rounded-full bg-white/10 blur-2xl" />
            </div>

            {/* Right features */}
            <div className="p-8 lg:col-span-3">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {persona.features.map((fKey, i) => {
                  const Icon = featureIcons[fKey] ?? ClipboardCheck;
                  return (
                    <motion.div
                      key={fKey}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="flex items-center gap-3 rounded-xl border border-border bg-background p-3 transition-colors hover:border-[#f39237]/40"
                    >
                      <div
                        className="grid size-9 shrink-0 place-items-center rounded-lg"
                        style={{ backgroundColor: `${persona.color}15`, color: persona.color }}
                      >
                        <Icon className="size-[18px]" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{t(fKey)}</span>
                    </motion.div>
                  );
                })}
              </div>

              <Button
                className={cn("mt-6 w-full sm:w-auto text-white")}
                style={{ backgroundColor: persona.color }}
                onClick={() => setView(persona.ctaView)}
              >
                {t(persona.ctaKey)}
                <Arrow className="size-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}

function PersonaStat({ id, locale }: { id: PersonaId; locale: string }) {
  if (id === "researcher")
    return (
      <p>
        {locale === "fa" ? "۱۰٬۰۰۰+ پژوهشگر فعال" : "10,000+ active researchers"}
      </p>
    );
  if (id === "participant")
    return (
      <p>{locale === "fa" ? "۸۵٬۰۰۰+ شرکت‌کننده" : "85,000+ participants"}</p>
    );
  return (
    <p>{locale === "fa" ? "۳۴۰+ دانشگاه همکار" : "340+ partner universities"}</p>
  );
}
