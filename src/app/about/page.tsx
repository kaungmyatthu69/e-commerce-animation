import AboutHero from "@/components/about/AboutHero";
import MissionSection from "@/components/about/MissionSection";
import AboutCTA from "@/components/about/AboutCTA";
import VelocityText from "@/components/VelocityText";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-[200vh] bg-background">
      <AboutHero />

      <main>
        <MissionSection />
      </main>

      <VelocityText />
      <Team />
      <AboutCTA />

      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
}
