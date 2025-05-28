import { HeroSection } from "@/components/homepage/hero-section";
import { SectionTwo } from "@/components/homepage/section-two";
import { SectionThree } from "@/components/homepage/section-three";
import { SectionFour } from "@/components/homepage/section-four";
import { SectionFive } from "@/components/homepage/section-five";
import { SectionSix } from "@/components/homepage/section-six";
import { SectionSeven } from "@/components/homepage/section-seven";
import { SectionEight } from "@/components/homepage/section-eight";
import { SectionNine } from "@/components/homepage/section-nine";

export default function Home() {
  return (
    <main className="bg-primary">
      <HeroSection />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
    </main>
  );
}
