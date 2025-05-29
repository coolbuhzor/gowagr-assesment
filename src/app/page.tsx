import { HeroSection } from "@/components/home-page/hero-section";
import { SectionTwo } from "@/components/home-page/section-two";
import { SectionThree } from "@/components/home-page/section-three";
import { SectionFour } from "@/components/home-page/section-four";
import { SectionFive } from "@/components/home-page/section-five";
import { SectionSix } from "@/components/home-page/section-six";
import { SectionSeven } from "@/components/home-page/section-seven";
import { SectionEight } from "@/components/home-page/section-eight";
import { SectionNine } from "@/components/home-page/section-nine";

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
