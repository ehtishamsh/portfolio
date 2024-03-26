import React from "react";
import AboutMe from "./_components/AboutMe";
import HeroSection from "./_components/HeroSection";
import MySkills from "./_components/MySkills";
import { PageWrapper } from "./pageWrapper";
import Projects from "./_components/Projects";
import ContactMe from "./_components/ContactMe";
import MyTestimonials from "./_components/MyTestimonials";

export default function Home() {
  return (
    <div className="relative">
      <PageWrapper>
        <HeroSection />
      </PageWrapper>
      <MySkills />
      <AboutMe />
      <Projects />
      <MyTestimonials />
      <ContactMe />
    </div>
  );
}
