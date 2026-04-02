import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { BrandsSection } from "@/components/BrandsSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AppointmentCTA } from "@/components/AppointmentCTA";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BrandsSection />
        <AboutSection />
        <ServicesSection />
        <AppointmentCTA />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
