import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Government Clients
const governmentClients = [
  { name: "Ministry of Road Transport & Highways", shortName: "MoRTH" },
  { name: "National Highways Authority of India", shortName: "NHAI" },
  { name: "State Public Works Department", shortName: "PWD" },
  { name: "Indian Railways", shortName: "IR" },
  { name: "Airports Authority of India", shortName: "AAI" },
];

// PSU Clients
const psuClients = [
  { name: "RITES Ltd. – Rail India Technical and Economic Service Limited", shortName: "RITES" },
  { name: "IRCON International Ltd. – Indian Railway Construction International Limited", shortName: "IRCON" },
  { name: "NHIDCL – National Highways & Infrastructure Development Corporation Limited", shortName: "NHIDCL" },
  { name: "WAPCOS Ltd. – Water and Power Consultancy Services Limited", shortName: "WAPCOS" },
  { name: "NBCC – National Buildings Construction Corporation Limited", shortName: "NBCC" },
  { name: "DMRC – Delhi Metro Rail Corporation Limited", shortName: "DMRC" },
];

// International Clients
const internationalClients = [
  { name: "World Bank", shortName: "WB" },
  { name: "Asian Development Bank", shortName: "ADB" },
  { name: "Japan International Cooperation Agency", shortName: "JICA" },
  { name: "African Development Bank", shortName: "AfDB" },
  { name: "New Development Bank (BRICS)", shortName: "NDB" },
  { name: "United Nations Development Programme", shortName: "UNDP" },
  { name: "KfW Development Bank (Germany)", shortName: "KfW" },
  { name: "Agence Française de Développement", shortName: "AFD" },
];

// Combined clients for slider
const clients = [...governmentClients, ...psuClients, ...internationalClients];

export const ClientsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Create a duplicated array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="clients" className="section-padding bg-navy-dark overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-2 bg-gold/20 text-gold text-sm font-semibold rounded-full mb-4">
            OUR CLIENTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Trusted by <span className="text-gold">Government Organizations</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            We are proud to serve government bodies, public sector undertakings, 
            and international funding agencies across India.
          </p>
        </motion.div>

        {/* Infinite Logo Slider */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-navy-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-navy-dark to-transparent z-10" />
          
          {/* Sliding Container */}
          <motion.div
            className="flex gap-8 py-8"
            animate={{
              x: [0, -50 * clients.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.shortName}-${index}`}
                className="flex-shrink-0 w-40 h-24 md:w-48 md:h-28 bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 flex flex-col items-center justify-center p-4 hover:border-gold/50 hover:bg-card/50 transition-all duration-300"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-hero rounded-full flex items-center justify-center mb-2">
                  <span className="text-gold font-bold text-sm md:text-base">
                    {client.shortName.slice(0, 2)}
                  </span>
                </div>
                <span className="text-primary-foreground/80 text-xs md:text-sm text-center font-medium line-clamp-2">
                  {client.shortName}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Reverse Direction */}
        <div className="relative mt-4">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-navy-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-navy-dark to-transparent z-10" />
          
          {/* Sliding Container - Reverse */}
          <motion.div
            className="flex gap-8 py-8"
            animate={{
              x: [-50 * clients.length, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.shortName}-reverse-${index}`}
                className="flex-shrink-0 w-40 h-24 md:w-48 md:h-28 bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 flex flex-col items-center justify-center p-4 hover:border-gold/50 hover:bg-card/50 transition-all duration-300"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-hero rounded-full flex items-center justify-center mb-2">
                  <span className="text-gold font-bold text-sm md:text-base">
                    {client.shortName.slice(0, 2)}
                  </span>
                </div>
                <span className="text-primary-foreground/80 text-xs md:text-sm text-center font-medium line-clamp-2">
                  {client.shortName}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
