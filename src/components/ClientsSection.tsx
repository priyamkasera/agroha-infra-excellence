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
const governmentClients = [{
  name: "Ministry of Road Transport & Highways",
  shortName: "MoRTH",
  logo: morthLogo
}, {
  name: "National Highways Authority of India",
  shortName: "NHAI",
  logo: nhaiLogo
}, {
  name: "State Public Works Department",
  shortName: "PWD",
  logo: pwdLogo
}, {
  name: "Indian Railways",
  shortName: "IR",
  logo: irLogo
}, {
  name: "Airports Authority of India",
  shortName: "AAI",
  logo: aaiLogo
}];

// PSU Clients
const psuClients = [{
  name: "RITES Ltd.",
  shortName: "RITES",
  logo: ritesLogo
}, {
  name: "IRCON International Ltd.",
  shortName: "IRCON",
  logo: irconLogo
}, {
  name: "NHIDCL",
  shortName: "NHIDCL",
  logo: nhidclLogo
}, {
  name: "WAPCOS Ltd.",
  shortName: "WAPCOS",
  logo: wapcosLogo
}, {
  name: "NBCC India Ltd.",
  shortName: "NBCC",
  logo: nbccLogo
}, {
  name: "Delhi Metro Rail Corporation",
  shortName: "DMRC",
  logo: dmrcLogo
}];

// International Clients
const internationalClients = [{
  name: "World Bank",
  shortName: "World Bank",
  logo: wbLogo
}, {
  name: "Asian Development Bank",
  shortName: "ADB",
  logo: adbLogo
}, {
  name: "Japan International Cooperation Agency",
  shortName: "JICA",
  logo: jicaLogo
}, {
  name: "African Development Bank",
  shortName: "AfDB",
  logo: afdbLogo
}, {
  name: "New Development Bank (BRICS)",
  shortName: "NDB",
  logo: ndbLogo
}, {
  name: "United Nations Development Programme",
  shortName: "UNDP",
  logo: undpLogo
}, {
  name: "KfW Development Bank",
  shortName: "KfW",
  logo: kfwLogo
}, {
  name: "Agence Française de Développement",
  shortName: "AFD",
  logo: afdLogo
}];
interface ClientSliderProps {
  clients: typeof governmentClients;
  direction?: "left" | "right";
  duration?: number;
}
const ClientSlider = ({
  clients,
  direction = "left",
  duration = 30
}: ClientSliderProps) => {
  const duplicatedClients = [...clients, ...clients, ...clients];
  const totalWidth = 220 * clients.length;
  return <div className="relative overflow-hidden">
      <motion.div className="flex gap-5 py-4" animate={{
      x: direction === "left" ? [0, -totalWidth] : [-totalWidth, 0]
    }} transition={{
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration,
        ease: "linear"
      }
    }}>
        {duplicatedClients.map((client, index) => <div key={`${client.shortName}-${index}`} className="flex-shrink-0 w-40 h-24 md:w-48 md:h-28 bg-white rounded-xl border border-border/30 flex flex-col items-center justify-center p-3 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/10 transition-all duration-300 group">
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-1">
              <img src={client.logo} alt={`${client.name} logo`} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300" />
            </div>
            <span className="text-navy-dark text-[10px] md:text-xs text-center font-medium line-clamp-1">
              {client.shortName}
            </span>
          </div>)}
      </motion.div>
    </div>;
};
export const ClientsSection = () => {
  return <section id="clients" className="section-padding bg-navy-dark overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-gold/20 text-gold text-sm font-semibold rounded-full mb-4">
            OUR CLIENTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Trusted by <span className="text-gold">Leading Organizations</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            We are proud to serve government bodies, public sector undertakings, 
            and international funding agencies across India and globally.
          </p>
        </motion.div>

        {/* Government Clients */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }} className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <h3 className="text-lg md:text-xl font-semibold text-gold whitespace-nowrap">
              Government Clients
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          </div>
          <ClientSlider clients={governmentClients} direction="left" duration={25} />
        </motion.div>

        {/* PSU Clients */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.1
      }} className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <h3 className="text-lg md:text-xl font-semibold text-gold whitespace-nowrap">
              PSU Clients
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          </div>
          <ClientSlider clients={psuClients} direction="right" duration={28} />
        </motion.div>

        {/* International Clients */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <h3 className="text-lg md:text-xl font-semibold text-gold whitespace-nowrap">
              Multilateral Funding Agencies
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          </div>
          <ClientSlider clients={internationalClients} direction="left" duration={32} />
        </motion.div>
      </div>
    </section>;
};