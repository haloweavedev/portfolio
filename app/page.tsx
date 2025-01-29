import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { WorkSection } from "@/components/work-section";
import HowItWorks from "@/components/ui/how-it-works";
import { AuroraBackground } from "@/components/ui/aurora-background";
import TestimonialSection from "@/components/testimonial";
import { RecentWork } from "@/components/recent-work"
import WhoIsItFor from "@/components/who-is-it-for"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <AuroraBackground>
      <main className="relative">
        <Navbar />
        <Hero />
        <WorkSection />
        <HowItWorks />
        <TestimonialSection />
        <RecentWork/>
        <WhoIsItFor/>
        <Footer />
      </main>
    </AuroraBackground>
  );
}