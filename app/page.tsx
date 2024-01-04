import HeroSection from "./_components/HeroSection";
import { PageWrapper } from "./pageWrapper";

export default function Home() {
  return (
    <div className="relative">
      <PageWrapper>
        <HeroSection />
      </PageWrapper>
    </div>
  );
}
