import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactMapSection from "@/components/contact/ContactMapSection";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="relative z-10 bg-background mb-[60vh] rounded-b-[3rem] shadow-2xl">
        <ContactHero />
        <main>
          <ContactFormSection />
        </main>
      </div>

      <ContactMapSection />

      <div className="relative z-20 bg-background">
        <Footer />
      </div>
    </div>
  );
}
