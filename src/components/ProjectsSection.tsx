import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, X } from "lucide-react";
import projectHighway from "@/assets/project-highway.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const projects = [
  {
    image: projectHighway,
    title: "Jhunjhunu to Rajgarh, Neem Ka Thana to Khetri",
    location: "Rajasthan",
    category: "Highway Construction",
    client: "Rajasthan PWD",
    fullDescription: `Independent Engineer Services for Operation/Maintenance of:

(i) Neem Ka Thana – Khetri Section of SH-13 from km 55+300 (at Junction with SH-43 B - Village Sirohi) to km 102+450 (at Junction with NH 311 at Jasrapur Mod near Khetri), total length 45.850 km

(ii) Jhunjhunu – Rajgarh Section of SH-41 from km 49+750 to 83+000 in Jhunjhunu district and 28+000 to 0+000 (Ch 0/0 at Rajgarh) in Churu district, total Length 62.730 km

in the State of Rajasthan under Hybrid Annuity Mode`,
  },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="section-padding bg-navy-dark">
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
            OUR PORTFOLIO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Landmark projects that showcase our commitment to quality, innovation, 
            and timely delivery across India.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 text-gold text-sm font-medium mb-2">
                  <span className="px-2 py-1 bg-gold/20 rounded">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-2 group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-primary-foreground/70 text-sm mb-1">
                  <MapPin className="h-4 w-4" />
                  {project.location}
                </div>
                <div className="text-primary-foreground/70 text-sm">
                  Client: {project.client}
                </div>
                <p className="text-primary-foreground/50 text-xs mt-2">
                  Click for details
                </p>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-gold rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight className="h-5 w-5 text-navy-dark" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-navy-dark transition-all duration-300">
            View All Projects
            <ArrowUpRight className="h-5 w-5" />
          </button>
        </motion.div>
      </div>

      {/* Project Details Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl bg-card">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-foreground">
              {selectedProject?.title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {selectedProject?.category} • {selectedProject?.location}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <img
              src={selectedProject?.image}
              alt={selectedProject?.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Project Details</h4>
                <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                  {selectedProject?.fullDescription}
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium text-foreground">Client:</span>
                <span className="text-muted-foreground">{selectedProject?.client}</span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
