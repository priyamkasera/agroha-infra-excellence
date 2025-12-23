import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

const partners = [
  "Lion Engineering Consultants Pvt. Ltd.",
  "Theme Engineering Services Pvt. Ltd.",
  "Renardet S.A.",
  "Geo Design & Research Pvt. Ltd.",
  "TPF GETINSA EUROESTUDIOS",
  "MARS Consultancy Pvt. Ltd.",
  "ISAN Corporation",
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
              key={partner}
              variants={itemVariants}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-gold transition-all duration-500 border border-border hover:border-gold/30 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Handshake className="h-6 w-6 text-gold" />
              </div>
              <span className="text-foreground font-medium group-hover:text-gold transition-colors">
                {partner}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
