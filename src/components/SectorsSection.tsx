import { motion } from "framer-motion";
import { Route, Train, Plane, Droplets, Leaf, Building2, Briefcase } from "lucide-react";
import highwaysImg from "@/assets/sectors/highways.jpg";
import railwaysImg from "@/assets/sectors/railways.jpg";
import airportsImg from "@/assets/sectors/airports.jpg";
import irrigationImg from "@/assets/sectors/irrigation.jpg";
import environmentalImg from "@/assets/sectors/environmental.jpg";
import urbanImg from "@/assets/sectors/urban.jpg";
import pmcImg from "@/assets/sectors/pmc.jpg";

const sectors = [
  {
    icon: Route,
    title: "Highways",
    description: "National and state highways, expressways, and road infrastructure.",
    image: highwaysImg,
  },
  {
    icon: Train,
    title: "Railways",
    description: "Railway infrastructure, stations, and track development projects.",
    image: railwaysImg,
  },
  {
    icon: Plane,
    title: "Airports",
    description: "Airport infrastructure, terminals, and aviation facilities.",
    image: airportsImg,
  },
  {
    icon: Droplets,
    title: "Irrigation & Water Resources",
    description: "Dams, canals, water supply, and irrigation systems.",
    image: irrigationImg,
  },
  {
    icon: Leaf,
    title: "Environmental Engineering",
    description: "Environmental impact assessment and sustainable infrastructure.",
    image: environmentalImg,
  },
  {
    icon: Building2,
    title: "Urban Infrastructure",
    description: "Smart cities, urban development, and municipal infrastructure.",
    image: urbanImg,
  },
  {
    icon: Briefcase,
    title: "Project Management Consultancy",
    description: "End-to-end PMC services for large-scale infrastructure projects.",
    image: pmcImg,
  },
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const SectorsSection = () => {
  return (
    <section id="sectors" className="section-padding bg-navy-dark">
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
            OUR SECTORS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Sectors We Serve
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Delivering expertise across diverse infrastructure sectors 
            with specialized knowledge and proven experience.
          </p>
        </motion.div>

        {/* Sectors Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {sectors.map((sector) => (
            <motion.div
              key={sector.title}
              variants={itemVariants}
              className="group relative rounded-xl overflow-hidden border border-border hover:border-gold/30 transition-all duration-300"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={sector.image} 
                  alt={sector.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/80 to-navy-dark/40" />
              </div>
              
              {/* Content */}
              <div className="relative p-6 min-h-[220px] flex flex-col justify-end">
                <div className="w-14 h-14 bg-gold/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-gold/30 transition-all duration-300">
                  <sector.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-primary-foreground mb-2 group-hover:text-gold transition-colors">
                  {sector.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {sector.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
