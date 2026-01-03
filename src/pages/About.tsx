import { Header } from "@/components/Header";
import { AboutSection } from "@/components/AboutSection";
import { TeamSection } from "@/components/TeamSection";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
