import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SectorsSection } from "@/components/SectorsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ClientsSection } from "@/components/ClientsSection";
import { PartnersSection } from "@/components/PartnersSection";
import { AboutSection } from "@/components/AboutSection";
import { TeamSection } from "@/components/TeamSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <SectorsSection />
        <AboutSection />
        <TeamSection />
        <ClientsSection />
        <PartnersSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
