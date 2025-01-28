import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { WorkSection } from "@/components/work-section";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
  return (
    <AuroraBackground>
      <main className="relative">
        <Navbar />
        <Hero />
        <WorkSection />
        {/* Add other sections as they are created */}
        {/* <HowItWorks /> */}
        {/* <TestimonialSection /> */}
      </main>
    </AuroraBackground>
  );
}