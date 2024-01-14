import React from "react";
import AboutMe from "./_components/AboutMe";
import HeroSection from "./_components/HeroSection";
import MySkills from "./_components/MySkills";
import { PageWrapper } from "./pageWrapper";
import Projects from "./_components/Projects";

export default function Home() {
  return (
    <div className="relative">
      <PageWrapper>
        <HeroSection />
      </PageWrapper>
      <MySkills />
      <AboutMe />
      <Projects />
    </div>
  );
}
