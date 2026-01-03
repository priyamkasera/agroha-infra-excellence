import { Header } from "@/components/Header";
import { ServicesSection } from "@/components/ServicesSection";
import { SectorsSection } from "@/components/SectorsSection";
import { Footer } from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServicesSection />
        <SectorsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
