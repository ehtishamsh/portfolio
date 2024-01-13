"use client";
import React, { useEffect, useState } from "react";
import AboutMe from "./_components/AboutMe";
import HeroSection from "./_components/HeroSection";
import MySkills from "./_components/MySkills";
import { PageWrapper } from "./pageWrapper";
import Preloader from "./_components/_animation/Preloader";
import Projects from "./_components/Projects";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4300);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="relative">
          <PageWrapper>
            <HeroSection />
          </PageWrapper>
          <MySkills />
          <AboutMe />
          <Projects />
        </div>
      )}
    </>
  );
}
