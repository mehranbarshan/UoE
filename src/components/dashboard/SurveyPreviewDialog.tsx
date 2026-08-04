"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SurveyRunnerCard } from "@/components/survey/SurveyRunnerCard";
import type { MySurvey } from "@/components/dashboard/types";
import { toast } from "sonner";
import { useLanguage } from "@/lib/i18n";
import { demoQuestions } from "@/lib/content";

const previewRunnerQuestions = demoQuestions.slice(0, 3);

interface SurveyPreviewDialogProps {
  open: boolean;
  onClose: () => void;
  survey: MySurvey | null;
}

export function SurveyPreviewDialog({ open, onClose, survey }: SurveyPreviewDialogProps) {
  const { t } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={(nextOpen) => !nextOpen && onClose()}>
      <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto">
        {survey && (
          <>
            <DialogHeader>
              <DialogTitle className="text-lg font-extrabold">{t("dash.survey.preview.title")}</DialogTitle>
              <DialogDescription className="leading-6">{t("dash.survey.preview.hint")}</DialogDescription>
            </DialogHeader>
            <SurveyRunnerCard
              survey={{
                titleFa: survey.titleFa,
                titleEn: survey.titleEn,
                orgFa: "پیش‌نمایش پرسشنامه",
                orgEn: "Survey preview",
                reward: 50,
                participants: survey.responses,
              }}
              questions={previewRunnerQuestions}
              onSubmit={() => {
                toast.success(t("dash.survey.preview.done"));
                onClose();
              }}
              onBack={onClose}
              backLabel={t("dash.close")}
            />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
