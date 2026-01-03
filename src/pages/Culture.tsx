import { Header } from "@/components/Header";
import { CultureSection } from "@/components/CultureSection";
import { Footer } from "@/components/Footer";

const Culture = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CultureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Culture;
