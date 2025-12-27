import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CultureSection } from "@/components/CultureSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SectorsSection } from "@/components/SectorsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ClientsSection } from "@/components/ClientsSection";
import { PartnersSection } from "@/components/PartnersSection";
import { AboutSection } from "@/components/AboutSection";
import { TeamSection } from "@/components/TeamSection";
import { HiringSection } from "@/components/HiringSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TeamSection />
        <ProjectsSection />
        <ServicesSection />
        <SectorsSection />
        <ClientsSection />
        <PartnersSection />
        <CultureSection />
        <HiringSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
