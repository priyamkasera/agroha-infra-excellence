import { motion } from "framer-motion";

// Import partner logos
import lionEngineeringLogo from "@/assets/partners/lion-engineering-logo.png";
import themeEngineeringLogo from "@/assets/partners/theme-engineering-logo.png";
import renardetLogo from "@/assets/partners/renardet-logo.png";
import geoDesignLogo from "@/assets/partners/geo-design-logo.png";
import tpfGetinsaLogo from "@/assets/partners/tpf-getinsa-logo.png";
import marsConsultancyLogo from "@/assets/partners/mars-consultancy-logo.png";
import isanCorporationLogo from "@/assets/partners/isan-corporation-logo.png";

const partners = [
  { name: "Lion Engineering Consultants Pvt. Ltd.", logo: lionEngineeringLogo },
  { name: "Theme Engineering Services Pvt. Ltd.", logo: themeEngineeringLogo },
  { name: "Renardet S.A.", logo: renardetLogo },
  { name: "Geo Design & Research Pvt. Ltd.", logo: geoDesignLogo },
  { name: "TPF GETINSA EUROESTUDIOS", logo: tpfGetinsaLogo },
  { name: "MARS Consultancy Pvt. Ltd.", logo: marsConsultancyLogo },
  { name: "ISAN Corporation", logo: isanCorporationLogo },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export const PartnersSection = () => {
  return (
    <section id="partners" className="section-padding bg-background geometric-pattern">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gold/10 text-gold text-sm font-semibold rounded-full mb-4">
            OUR PARTNERS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Strategic Partnerships
          </h2>
          <p className="text-muted-foreground text-lg">
            We collaborate with leading national and international engineering consultancies 
            to deliver world-class infrastructure solutions.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              variants={itemVariants}
              className="group bg-white rounded-xl p-6 shadow-card hover:shadow-gold transition-all duration-500 border border-border hover:border-gold/30 flex flex-col items-center gap-4"
            >
              <div className="w-24 h-24 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <span className="text-foreground font-medium text-center text-sm group-hover:text-gold transition-colors">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
