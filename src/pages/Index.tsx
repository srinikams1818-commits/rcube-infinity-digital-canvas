import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FloatingLogoSection from "@/components/FloatingLogoSection";
import FestiveOfferSection from "@/components/FestiveOfferSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ServiceSectorsSection from "@/components/ServiceSectorsSection";
import StatsSection from "@/components/StatsSection";
import LocationsSection from "@/components/LocationsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FloatingLogoSection />
      <FestiveOfferSection />
      <AboutSection />
      <ServicesSection />
      <ServiceSectorsSection />
      <StatsSection />
      <LocationsSection />
      <CTASection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
};

export default Index;
