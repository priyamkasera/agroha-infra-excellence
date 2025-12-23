import { motion } from "framer-motion";
import { Building, Landmark, Globe } from "lucide-react";

const governmentClients = [
  "Ministry of Road Transport & Highways (MoRTH)",
  "National Highways Authority of India (NHAI)",
  "State Public Works Department (PWD)",
  "Indian Railways",
  "Metro Rail Corporations",
  "Airports Authority of India (AAI)",
  "State Irrigation Departments",
  "Water Resources Department (WRD)",
  "Urban Development Authorities",
  "Municipal Corporations",
  "Smart City SPVs",
];

const psus = [
  "RITES Ltd. – Rail India Technical and Economic Service Limited",
  "IRCON International Ltd. – Indian Railway Construction International Limited",
  "NHIDCL – National Highways & Infrastructure Development Corporation Limited",
  "WAPCOS Ltd. – Water and Power Consultancy Services Limited",
  "NBCC – National Buildings Construction Corporation Limited",
  "DMRC – Delhi Metro Rail Corporation Limited",
];

const fundingAgencies = [
  "World Bank",
  "Asian Development Bank (ADB)",
  "JICA – Japan International Cooperation Agency",
  "State / Central Govt Funded Projects",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export const ClientsSection = () => {
  return (
    <section id="clients" className="section-padding bg-navy-dark">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gold/20 text-gold text-sm font-semibold rounded-full mb-4">
            OUR CLIENTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            We are proud to serve government bodies, public sector undertakings, 
            and international funding agencies across India.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Government Clients */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                <Landmark className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground">Government Clients</h3>
            </div>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {governmentClients.map((client) => (
                <motion.li
                  key={client}
                  variants={itemVariants}
                  className="text-primary-foreground/80 text-sm flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  {client}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* PSUs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                <Building className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground">Public Sector Undertakings</h3>
            </div>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {psus.map((psu) => (
                <motion.li
                  key={psu}
                  variants={itemVariants}
                  className="text-primary-foreground/80 text-sm flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  {psu}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* International / Funding Agencies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                <Globe className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground">International / Funding Agencies</h3>
            </div>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {fundingAgencies.map((agency) => (
                <motion.li
                  key={agency}
                  variants={itemVariants}
                  className="text-primary-foreground/80 text-sm flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  {agency}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
