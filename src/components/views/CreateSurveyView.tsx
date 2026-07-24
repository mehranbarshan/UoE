"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FlaskConical,
  ListChecks,
  Users,
  CheckCircle2,
  Sparkles,
  Wand2,
  AlertTriangle,
  TrendingUp,
  Layers,
  Plus,
  Trash2,
  ArrowRight,
  ArrowLeft,
  Loader2,
} from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/lib/i18n";
import { useNav } from "@/lib/store";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const steps = [
  { id: 0, key: "create.step.basics", icon: FlaskConical },
  { id: 1, key: "create.step.questions", icon: ListChecks },
  { id: 2, key: "create.step.audience", icon: Users },
  { id: 3, key: "create.step.review", icon: CheckCircle2 },
] as const;

const categories = [
  { value: "health", key: "marketplace.filter.health" },
  { value: "education", key: "marketplace.filter.education" },
  { value: "social", key: "marketplace.filter.social" },
  { value: "tech", key: "marketplace.filter.tech" },
  { value: "business", key: "marketplace.filter.business" },
] as const;

interface QuestionDraft {
  id: string;
  type: "single" | "multi" | "text" | "scale" | "likert" | "matrix" | "ranking" | "demographic" | "openended" | "file" | "consent";
  text: string;
}

export function CreateSurveyView() {
  const { t, locale } = useLanguage();
  const { setView } = useNav();
  const [step, setStep] = React.useState(0);
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [category, setCategory] = React.useState("tech");
  const [eta, setEta] = React.useState(5);
  const [questions, setQuestions] = React.useState<QuestionDraft[]>([
    { id: "q1", type: "single", text: "" },
  ]);
  const [ageRange, setAgeRange] = React.useState<[number, number]>([18, 45]);
  const [education, setEducation] = React.useState("any");
  const [sample, setSample] = React.useState(200);
  const [aiRunning, setAiRunning] = React.useState(false);
  const [aiResult, setAiResult] = React.useState<null | {
    score: number;
    ambiguity: number;
    completion: number;
    suggestions: { fa: string; en: string }[];
  }>(null);
  const Arrow = locale === "fa" ? ArrowLeft : ArrowRight;

  const addQuestion = () =>
    setQuestions((qs) => [...qs, { id: `q${qs.length + 1}`, type: "single", text: "" }]);
  const removeQuestion = (id: string) =>
    setQuestions((qs) => qs.filter((q) => q.id !== id));
  const updateQuestion = (id: string, text: string) =>
    setQuestions((qs) => qs.map((q) => (q.id === id ? { ...q, text } : q)));
  const updateType = (id: string, type: QuestionDraft["type"]) =>
    setQuestions((qs) => qs.map((q) => (q.id === id ? { ...q, type } : q)));

  const runAI = () => {
    setAiRunning(true);
    setAiResult(null);
    setTimeout(() => {
      setAiRunning(false);
      const filled = questions.filter((q) => q.text.trim().length > 0).length;
      const score = Math.min(96, 70 + filled * 6);
      setAiResult({
        score,
        ambiguity: filled > 2 ? 1 : 2,
        completion: Math.min(92, 60 + filled * 8),
        suggestions: [
          { fa: "سؤال ۲ کمی مبهم است؛ گزینه‌ها را مشخص‌تر کنید.", en: "Question 2 is slightly ambiguous; clarify the options." },
          { fa: "افزودن سؤال دموگرافیک نرخ تکمیل را بالا می‌برد.", en: "Adding a demographic question would boost completion." },
          { fa: "ترتیب سؤالات را از عمومی به خاص مرتب کنید.", en: "Order questions from general to specific." },
        ],
      });
      toast.success(t("create.toast.ai.complete"));
    }, 1800);
  };

  const next = () => setStep((s) => Math.min(3, s + 1));
  const prev = () => setStep((s) => Math.max(0, s - 1));

  const publish = () => {
    toast.success(t("create.toast.published"));
    setView("researcher-dashboard");
  };

  const stepProgress = ((step + 1) / steps.length) * 100;

  return (
    <>
      <PageHeader badge={t("create.subtitle")} title={t("create.title")} subtitle={t("create.subtitle")} />

      <Section className="bg-background">
        <div className="mx-auto max-w-4xl">
          {/* Stepper */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((s, i) => {
                const Icon = s.icon;
                const isActive = i === step;
                const isDone = i < step;
                return (
                  <React.Fragment key={s.id}>
                    <button
                      onClick={() => i < step && setStep(i)}
                      className={cn(
                        "flex flex-col items-center gap-2 text-center",
                        i < step && "cursor-pointer"
                      )}
                    >
                      <div
                        className={cn(
                          "grid size-11 place-items-center rounded-2xl border-2 transition-all",
                          isActive
                            ? "border-[#f39237] bg-[#f39237] text-white shadow-glow"
                            : isDone
                            ? "border-[#2a9d8f] bg-[#2a9d8f] text-white"
                            : "border-border bg-background text-muted-foreground"
                        )}
                      >
                        <Icon className="size-5" />
                      </div>
                      <span className={cn("text-xs font-semibold", isActive ? "text-foreground" : "text-muted-foreground")}>
                        {t(s.key)}
                      </span>
                    </button>
                    {i < steps.length - 1 && (
                      <div className="mx-2 h-0.5 flex-1 rounded-full bg-border">
                        <div
                          className="h-full rounded-full bg-[#f39237] transition-all duration-500"
                          style={{ width: isDone ? "100%" : "0%" }}
                        />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
            <Progress value={stepProgress} className="mt-5 h-1.5 bg-muted" />
          </div>

          {/* Step content */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <AnimatePresence mode="wait">
              {/* Step 0: Basics */}
              {step === 0 && (
                <motion.div
                  key="basics"
                  initial={{ opacity: 0, x: locale === "fa" ? -16 : 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: locale === "fa" ? 16 : -16 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-5"
                >
                  <h2 className="text-xl font-bold text-foreground">{t("create.step.basics")}</h2>
                  <div className="space-y-1.5">
                    <Label htmlFor="title">{t("create.field.title.label")}</Label>
                    <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder={t("create.field.title.ph")} className="h-11" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="desc">{t("create.field.desc.label")}</Label>
                    <Textarea id="desc" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder={t("create.field.desc.ph")} rows={4} />
                  </div>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label>{t("create.field.category")}</Label>
                      <Select value={category} onValueChange={setCategory}>
                        <SelectTrigger className="h-11">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((c) => (
                            <SelectItem key={c.value} value={c.value}>
                              {t(c.key)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <Label>
                        {t("create.field.eta")}: {eta} {t("create.field.eta.suffix")}
                      </Label>
                      <Slider value={[eta]} onValueChange={(v) => setEta(v[0])} min={1} max={20} step={1} />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 1: Questions + AI */}
              {step === 1 && (
                <motion.div
                  key="questions"
                  initial={{ opacity: 0, x: locale === "fa" ? -16 : 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: locale === "fa" ? 16 : -16 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-xl font-bold text-foreground">{t("create.questions.label")}</h2>
                    <Button variant="outline" size="sm" onClick={addQuestion}>
                      <Plus className="size-4" />
                      {t("create.questions.add")}
                    </Button>
                  </div>

                  <div className="space-y-3">
                    {questions.map((q, i) => (
                      <div key={q.id} className="rounded-2xl border border-border bg-background p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-xs font-bold text-muted-foreground">#{i + 1}</span>
                          <div className="flex items-center gap-2">
                            <Select value={q.type} onValueChange={(v) => updateType(q.id, v as QuestionDraft["type"])}>
                              <SelectTrigger className="h-8 w-36 text-xs">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="single">{t("create.qtype.single")}</SelectItem>
                                <SelectItem value="multi">{t("create.qtype.multi")}</SelectItem>
                                <SelectItem value="text">{t("create.qtype.text")}</SelectItem>
                                <SelectItem value="scale">{t("create.qtype.scale")}</SelectItem>
                                <SelectItem value="likert">{t("create.qtype.likert")}</SelectItem>
                                <SelectItem value="matrix">{t("create.qtype.matrix")}</SelectItem>
                                <SelectItem value="ranking">{t("create.qtype.ranking")}</SelectItem>
                                <SelectItem value="demographic">{t("create.qtype.demographic")}</SelectItem>
                                <SelectItem value="openended">{t("create.qtype.openended")}</SelectItem>
                                <SelectItem value="file">{t("create.qtype.file")}</SelectItem>
                                <SelectItem value="consent">{t("create.qtype.consent")}</SelectItem>
                              </SelectContent>
                            </Select>
                            {questions.length > 1 && (
                              <Button variant="ghost" size="icon" className="size-8 text-muted-foreground hover:text-destructive" onClick={() => removeQuestion(q.id)}>
                                <Trash2 className="size-4" />
                              </Button>
                            )}
                          </div>
                        </div>
                        <Input value={q.text} onChange={(e) => updateQuestion(q.id, e.target.value)} placeholder={t("create.q.placeholder")} />
                      </div>
                    ))}
                  </div>

                  {/* AI Assistant */}
                  <div className="rounded-2xl border border-[#f39237]/30 bg-[#f39237]/5 p-5">
                    <div className="flex items-center gap-2">
                      <div className="grid size-9 place-items-center rounded-xl gradient-orange text-white">
                        <Sparkles className="size-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-foreground">{t("create.ai.title")}</h3>
                        <p className="text-xs text-muted-foreground">{t("create.ai.desc")}</p>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {[
                        { icon: Wand2, key: "create.ai.improve" },
                        { icon: AlertTriangle, key: "create.ai.detect" },
                        { icon: TrendingUp, key: "create.ai.predict" },
                        { icon: Layers, key: "create.ai.suggest" },
                      ].map((f) => {
                        const Icon = f.icon;
                        return (
                          <div key={f.key} className="flex items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-2 text-xs font-medium text-foreground">
                            <Icon className="size-3.5 text-[#f39237]" />
                            {t(f.key as never)}
                          </div>
                        );
                      })}
                    </div>

                    <Button className="mt-4 w-full bg-[#f39237] text-white hover:bg-[#e07f24]" onClick={runAI} disabled={aiRunning}>
                      {aiRunning ? (
                        <>
                          <Loader2 className="size-4 animate-spin" />
                          {t("create.ai.running")}
                        </>
                      ) : (
                        <>
                          <Sparkles className="size-4" />
                          {t("create.ai.run")}
                        </>
                      )}
                    </Button>

                    <AnimatePresence>
                      {aiResult && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 space-y-3 overflow-hidden"
                        >
                          <div className="grid grid-cols-3 gap-2 text-center">
                            <div className="rounded-lg bg-background p-2.5">
                              <p className="text-lg font-extrabold text-[#2a9d8f]">{aiResult.score}%</p>
                              <p className="text-[10px] text-muted-foreground">{t("create.ai.score")}</p>
                            </div>
                            <div className="rounded-lg bg-background p-2.5">
                              <p className="text-lg font-extrabold text-[#f39237]">{aiResult.ambiguity}</p>
                              <p className="text-[10px] text-muted-foreground">{t("create.ai.ambiguity")}</p>
                            </div>
                            <div className="rounded-lg bg-background p-2.5">
                              <p className="text-lg font-extrabold text-[#1d3b4c]">{aiResult.completion}%</p>
                              <p className="text-[10px] text-muted-foreground">{t("create.ai.completion.label")}</p>
                            </div>
                          </div>
                          <ul className="space-y-1.5">
                            {aiResult.suggestions.map((s, idx) => (
                              <li key={idx} className="flex items-start gap-2 rounded-lg bg-background p-2.5 text-xs text-foreground">
                                <Sparkles className="mt-0.5 size-3.5 shrink-0 text-[#f39237]" />
                                {locale === "fa" ? s.fa : s.en}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Audience */}
              {step === 2 && (
                <motion.div
                  key="audience"
                  initial={{ opacity: 0, x: locale === "fa" ? -16 : 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: locale === "fa" ? 16 : -16 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-5"
                >
                  <h2 className="text-xl font-bold text-foreground">{t("create.audience.label")}</h2>

                  <div className="space-y-1.5">
                    <Label>
                      {t("create.audience.age")}: {ageRange[0]} – {ageRange[1]}
                    </Label>
                    <Slider value={ageRange} onValueChange={(v) => setAgeRange([v[0], v[1]] as [number, number])} min={13} max={80} step={1} />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label>{t("create.audience.education")}</Label>
                      <Select value={education} onValueChange={setEducation}>
                        <SelectTrigger className="h-11">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">{t("create.edu.any")}</SelectItem>
                          <SelectItem value="highschool">{t("create.edu.highschool")}</SelectItem>
                          <SelectItem value="bachelor">{t("create.edu.bachelor")}</SelectItem>
                          <SelectItem value="master">{t("create.edu.master")}</SelectItem>
                          <SelectItem value="phd">{t("create.edu.phd")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <Label>{t("create.audience.location")}</Label>
                      <Input placeholder={t("create.location.placeholder")} className="h-11" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label>{t("create.audience.interests")}</Label>
                    <Input placeholder={t("create.interests.placeholder")} className="h-11" />
                  </div>

                  <div className="space-y-1.5">
                    <Label>
                      {t("create.audience.sample")}: {sample}
                    </Label>
                    <Slider value={[sample]} onValueChange={(v) => setSample(v[0])} min={50} max={2000} step={50} />
                    <p className="text-xs text-muted-foreground">
                      {t("create.time.estimate")}: ~{Math.ceil(sample / 80)} {t("dashboard.days.label")}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Review */}
              {step === 3 && (
                <motion.div
                  key="review"
                  initial={{ opacity: 0, x: locale === "fa" ? -16 : 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: locale === "fa" ? 16 : -16 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-5"
                >
                  <h2 className="text-xl font-bold text-foreground">{t("create.review.title")}</h2>
                  <div className="rounded-2xl border border-border bg-background p-5">
                    <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <ReviewItem label={t("create.field.title.label")} value={title || t("create.review.untitled")} />
                      <ReviewItem label={t("create.field.category")} value={t(`marketplace.filter.${category}` as never)} />
                      <ReviewItem label={t("create.field.eta")} value={`${eta} ${t("create.field.eta.suffix")}`} />
                      <ReviewItem label={t("create.questions.label")} value={`${questions.length}`} />
                      <ReviewItem label={t("create.audience.age")} value={`${ageRange[0]} – ${ageRange[1]}`} />
                      <ReviewItem label={t("create.audience.sample")} value={`${sample}`} />
                    </dl>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button className="flex-1 bg-[#f39237] text-white hover:bg-[#e07f24]" onClick={publish}>
                      <CheckCircle2 className="size-4" />
                      {t("create.review.publish")}
                    </Button>
                    <Button variant="outline" className="flex-1" onClick={() => toast.info(t("create.toast.draft"))}>
                      {t("create.review.draft")}
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Nav buttons */}
            <div className="mt-8 flex items-center justify-between gap-3">
              <Button variant="ghost" onClick={prev} disabled={step === 0}>
                {locale === "fa" ? <ArrowRight className="size-4" /> : <ArrowLeft className="size-4" />}
                {t("survey.q.back")}
              </Button>
              {step < 3 ? (
                <Button className="bg-[#1d3b4c] text-white hover:bg-[#142a37]" onClick={next}>
                  {t("survey.q.next")}
                  <Arrow className="size-4" />
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function ReviewItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <dt className="text-xs text-muted-foreground">{label}</dt>
      <dd className="text-sm font-semibold text-foreground">{value}</dd>
    </div>
  );
}
