"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { User, CalendarDays, VenusAndMars, GraduationCap, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useLanguage } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/translations";

const genderOptions: { value: string; key: TranslationKey }[] = [
  { value: "female", key: "participant.profile.gender.female" },
  { value: "male", key: "participant.profile.gender.male" },
];

const degreeOptions: { value: string; key: TranslationKey }[] = [
  { value: "highschool", key: "profile.degree.highschool" },
  { value: "bachelor", key: "profile.degree.bachelor" },
  { value: "master", key: "profile.degree.master" },
  { value: "phd", key: "profile.degree.phd" },
  { value: "other", key: "profile.degree.other" },
];

const cityOptions: { value: string; key: TranslationKey }[] = [
  { value: "tehran", key: "participant.profile.city.tehran" },
  { value: "isfahan", key: "participant.profile.city.isfahan" },
  { value: "shiraz", key: "participant.profile.city.shiraz" },
  { value: "mashhad", key: "participant.profile.city.mashhad" },
  { value: "tabriz", key: "participant.profile.city.tabriz" },
  { value: "other", key: "participant.profile.city.other" },
];

const jobOptions: { value: string; key: TranslationKey }[] = [
  { value: "student", key: "participant.profile.job.student" },
  { value: "employee", key: "participant.profile.job.employee" },
  { value: "freelancer", key: "participant.profile.job.freelancer" },
  { value: "teacher", key: "participant.profile.job.teacher" },
  { value: "researcher", key: "participant.profile.job.researcher" },
  { value: "other", key: "participant.profile.job.other" },
];

const fields: { key: TranslationKey; icon: typeof User }[] = [
  { key: "participant.profile.name", icon: User },
  { key: "participant.profile.birthdate", icon: CalendarDays },
  { key: "participant.profile.gender", icon: VenusAndMars },
  { key: "participant.profile.degree", icon: GraduationCap },
  { key: "participant.profile.city", icon: MapPin },
  { key: "participant.profile.job", icon: Briefcase },
];

export function ParticipantProfilePanel() {
  const { t, locale } = useLanguage();
  const [name, setName] = React.useState(locale === "fa" ? "نیلوفر محمدی" : "Niloofar Mohammadi");
  const [birthdate, setBirthdate] = React.useState("2000-05-15");
  const [gender, setGender] = React.useState("female");
  const [degree, setDegree] = React.useState("master");
  const [city, setCity] = React.useState("tehran");
  const [job, setJob] = React.useState("student");

  const handleSave = () => toast.success(t("dash.survey.saved"));

  return (
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
        {t("dashboard.nav.profile")}
      </h3>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="text-xs font-medium text-muted-foreground">{t("participant.profile.name")}</label>
          <Input value={name} onChange={(e) => setName(e.target.value)} className="mt-1.5 h-11" />
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground">{t("participant.profile.birthdate")}</label>
          <Input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} className="mt-1.5 h-11" />
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground">{t("participant.profile.gender")}</label>
          <Select value={gender} onValueChange={setGender}>
            <SelectTrigger className="mt-1.5 h-11 w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {genderOptions.map((g) => (
                <SelectItem key={g.value} value={g.value}>
                  {t(g.key)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground">{t("participant.profile.degree")}</label>
          <Select value={degree} onValueChange={setDegree}>
            <SelectTrigger className="mt-1.5 h-11 w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {degreeOptions.map((d) => (
                <SelectItem key={d.value} value={d.value}>
                  {t(d.key)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground">{t("participant.profile.city")}</label>
          <Select value={city} onValueChange={setCity}>
            <SelectTrigger className="mt-1.5 h-11 w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {cityOptions.map((c) => (
                <SelectItem key={c.value} value={c.value}>
                  {t(c.key)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground">{t("participant.profile.job")}</label>
          <Select value={job} onValueChange={setJob}>
            <SelectTrigger className="mt-1.5 h-11 w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {jobOptions.map((j) => (
                <SelectItem key={j.value} value={j.value}>
                  {t(j.key)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button className="mt-5 h-11 bg-[#f39237] text-white hover:bg-[#e07f24]" onClick={handleSave}>
        {t("participant.settings.save")}
      </Button>
    </motion.div>
  );
}
