import { motion } from "framer-motion";
import { Mail, Briefcase, Users, GraduationCap, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import hiringLogo from "@/assets/hiring-logo.jpg";

const openPositions = [
  {
    icon: Building2,
    title: "Civil Engineers",
    description: "Highway, bridge, and infrastructure project execution",
  },
  {
    icon: Briefcase,
    title: "Structural Engineers",
    description: "Design and analysis of complex structures",
  },
  {
    icon: GraduationCap,
    title: "Project Managers",
    description: "End-to-end project planning and delivery",
  },
  {
    icon: Users,
    title: "Site Engineers",
    description: "On-ground supervision and quality control",
  },
];

export const HiringSection = () => {
  const handleApply = () => {
    window.open("https://mail.google.com/mail/?view=cm&to=HR@agrohainfra.com&su=Job%20Application", "_blank");
  };

  return (
    <section id="careers" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <img 
            src={hiringLogo} 
            alt="Join Our Team" 
            className="w-20 h-20 mx-auto mb-4 object-contain"
          />
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Join Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            We're Hiring
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Be part of India's leading infrastructure consultancy. We're looking for talented professionals to join our growing team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {openPositions.map((position, index) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <position.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">{position.title}</h3>
              <p className="text-muted-foreground text-sm">{position.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center bg-card p-8 rounded-lg border border-border"
        >
          <h3 className="text-xl font-semibold mb-4">Ready to Build Your Career?</h3>
          <p className="text-muted-foreground mb-6">
            Send your resume and portfolio to our HR team. We're always looking for passionate professionals in civil engineering, structural design, project management, and site supervision.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={handleApply} className="gap-2">
              <Mail className="h-4 w-4" />
              HR@agrohainfra.com
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
