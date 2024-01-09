import AboutMe from "./_components/AboutMe";
import HeroSection from "./_components/HeroSection";
import MySkills from "./_components/MySkills";
import { PageWrapper } from "./pageWrapper";

export default function Home() {
  return (
    <div className="relative">
      <PageWrapper>
        <HeroSection />
      </PageWrapper>
      <MySkills />
      <AboutMe />
    </div>
  );
}
