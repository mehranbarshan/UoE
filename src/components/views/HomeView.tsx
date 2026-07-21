"use client";

import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Personas } from "@/components/sections/Personas";
import { SurveyDemo } from "@/components/sections/SurveyDemo";
import { AIFeatures } from "@/components/sections/AIFeatures";
import { Gamification } from "@/components/sections/Gamification";
import { Stats } from "@/components/sections/Stats";
import { CTA } from "@/components/sections/CTA";

export function HomeView() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <Personas />
      <SurveyDemo />
      <AIFeatures />
      <Gamification />
      <Stats />
      <CTA />
    </>
  );
}
