export type SurveyStatus = "active" | "paused" | "done" | "draft";

export interface MySurvey {
  id: string;
  titleFa: string;
  titleEn: string;
  responses: number;
  target: number;
  status: SurveyStatus;
  link: string;
}
