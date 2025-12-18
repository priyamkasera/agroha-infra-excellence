import { motion } from "framer-motion";
import { Building2, Route, Factory, Home, Wrench, HardHat } from "lucide-react";

const services = [
  {
    icon: Route,
    title: "Highway Construction",
    description: "State-of-the-art highway and expressway construction with modern engineering techniques and durable materials.",
  },
  {
    icon: Building2,
    title: "Commercial Buildings",
    description: "Design and construction of commercial complexes, office spaces, and retail infrastructure with premium finishes.",
  },
  {
    icon: Factory,
    title: "Industrial Facilities",
    description: "Specialized industrial construction including warehouses, manufacturing plants, and logistics centers.",
  },
  {
    icon: Home,
    title: "Residential Projects",
    description: "Quality residential developments from individual homes to large-scale housing societies.",
  },
  {
    icon: Wrench,
    title: "Infrastructure Development",
    description: "Bridges, flyovers, underpasses, and urban infrastructure projects that connect communities.",
  },
  {
    icon: HardHat,
    title: "Project Management",
    description: "End-to-end project management services ensuring timely delivery and cost optimization.",
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

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background geometric-pattern">
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
            OUR SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Infrastructure Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From concept to completion, we deliver excellence in every project with 
            cutting-edge technology and skilled craftsmanship.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group bg-card rounded-xl p-8 shadow-card hover:shadow-gold transition-all duration-500 border border-border hover:border-gold/30"
            >
              <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
