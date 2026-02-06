
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[var(--background)]">
      {/* Loading Screen */}
      <LoadingScreen />



      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Features / Why Choose Us */}
      <FeaturesSection />

      {/* Process - ScrollStack Cards */}
      <ProcessSection />

      {/* Projects Portfolio */}
      <ProjectsSection />

      {/* About Cloudora */}
      <AboutSection />

      {/* Team */}
      <TeamSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Contact Form */}
      <ContactSection />

      <Navbar />

      {/* Footer */}
      <Footer />
    </main>
  );
}
