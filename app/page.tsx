import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { WorkSection } from "@/components/work-section";
import HowItWorks from "@/components/ui/how-it-works";
import { AuroraBackground } from "@/components/ui/aurora-background";
import TestimonialSection from "@/components/testimonial";
import WhoIsItFor from "@/components/who-is-it-for"

export default function Home() {
  return (
    <AuroraBackground>
      <main className="relative">
        <Navbar />
        <Hero />
        <WorkSection />
        <HowItWorks />
        <TestimonialSection />
        <WhoIsItFor/>
      </main>
    </AuroraBackground>
  );
}