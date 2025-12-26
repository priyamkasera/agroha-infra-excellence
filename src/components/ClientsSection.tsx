import { motion } from "framer-motion";

// Import logos
import morthLogo from "@/assets/clients/morth-logo.png";
import nhaiLogo from "@/assets/clients/nhai-logo.png";
import pwdLogo from "@/assets/clients/pwd-logo.png";
import irLogo from "@/assets/clients/ir-logo.png";
import aaiLogo from "@/assets/clients/aai-logo.png";
import ritesLogo from "@/assets/clients/rites-logo.png";
import irconLogo from "@/assets/clients/ircon-logo.png";
import nhidclLogo from "@/assets/clients/nhidcl-logo.png";
import wapcosLogo from "@/assets/clients/wapcos-logo.png";
import nbccLogo from "@/assets/clients/nbcc-logo.png";
import dmrcLogo from "@/assets/clients/dmrc-logo.png";
import wbLogo from "@/assets/clients/wb-logo.png";
import adbLogo from "@/assets/clients/adb-logo.png";
import jicaLogo from "@/assets/clients/jica-logo.png";
import afdbLogo from "@/assets/clients/afdb-logo.png";
import ndbLogo from "@/assets/clients/ndb-logo.png";
import undpLogo from "@/assets/clients/undp-logo.png";
import kfwLogo from "@/assets/clients/kfw-logo.png";
import afdLogo from "@/assets/clients/afd-logo.png";

// Government Clients
const governmentClients = [
  { name: "Ministry of Road Transport & Highways", shortName: "MoRTH", logo: morthLogo },
  { name: "National Highways Authority of India", shortName: "NHAI", logo: nhaiLogo },
  { name: "State Public Works Department", shortName: "PWD", logo: pwdLogo },
  { name: "Indian Railways", shortName: "IR", logo: irLogo },
  { name: "Airports Authority of India", shortName: "AAI", logo: aaiLogo },
];

// PSU Clients
const psuClients = [
  { name: "RITES Ltd. – Rail India Technical and Economic Service Limited", shortName: "RITES", logo: ritesLogo },
  { name: "IRCON International Ltd. – Indian Railway Construction International Limited", shortName: "IRCON", logo: irconLogo },
  { name: "NHIDCL – National Highways & Infrastructure Development Corporation Limited", shortName: "NHIDCL", logo: nhidclLogo },
  { name: "WAPCOS Ltd. – Water and Power Consultancy Services Limited", shortName: "WAPCOS", logo: wapcosLogo },
  { name: "NBCC – National Buildings Construction Corporation Limited", shortName: "NBCC", logo: nbccLogo },
  { name: "DMRC – Delhi Metro Rail Corporation Limited", shortName: "DMRC", logo: dmrcLogo },
];

// International Clients
const internationalClients = [
  { name: "World Bank", shortName: "WB", logo: wbLogo },
  { name: "Asian Development Bank", shortName: "ADB", logo: adbLogo },
  { name: "Japan International Cooperation Agency", shortName: "JICA", logo: jicaLogo },
  { name: "African Development Bank", shortName: "AfDB", logo: afdbLogo },
  { name: "New Development Bank (BRICS)", shortName: "NDB", logo: ndbLogo },
  { name: "United Nations Development Programme", shortName: "UNDP", logo: undpLogo },
  { name: "KfW Development Bank (Germany)", shortName: "KfW", logo: kfwLogo },
  { name: "Agence Française de Développement", shortName: "AFD", logo: afdLogo },
];

// Combined clients for slider
const clients = [...governmentClients, ...psuClients, ...internationalClients];

export const ClientsSection = () => {
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
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-2 bg-gold/20 text-gold text-sm font-semibold rounded-full mb-4">
            OUR CLIENTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Trusted by <span className="text-gold">Government, PSUs & International Organizations</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            We are proud to serve government bodies, public sector undertakings, 
            and international funding agencies across India and globally.
          </p>
        </motion.div>

        {/* Infinite Logo Slider - Row 1 */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-navy-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-navy-dark to-transparent z-10" />
          
          {/* Sliding Container */}
          <motion.div
            className="flex gap-6 py-6"
            animate={{
              x: [0, -200 * clients.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.shortName}-${index}`}
                className="flex-shrink-0 w-44 h-28 md:w-52 md:h-32 bg-white rounded-xl border border-border/30 flex flex-col items-center justify-center p-3 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/10 transition-all duration-300 group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-2">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-navy-dark text-xs md:text-sm text-center font-medium line-clamp-1">
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
            className="flex gap-6 py-6"
            animate={{
              x: [-200 * clients.length, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 45,
                ease: "linear",
              },
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.shortName}-reverse-${index}`}
                className="flex-shrink-0 w-44 h-28 md:w-52 md:h-32 bg-white rounded-xl border border-border/30 flex flex-col items-center justify-center p-3 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/10 transition-all duration-300 group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-2">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-navy-dark text-xs md:text-sm text-center font-medium line-clamp-1">
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
