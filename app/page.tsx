import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { ResidentialSection } from "@/components/residential-section";
import { CommercialSection } from "@/components/commercial-section";
import { PricingSection } from "@/components/pricing-section";
import { ProcessSection } from "@/components/process-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ResidentialSection />
      <CommercialSection />
      <PricingSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
