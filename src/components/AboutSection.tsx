import { motion } from "framer-motion";
import { CheckCircle, Target, Eye } from "lucide-react";
import founderImage from "@/assets/founder-suresh.jpg";

const companyInfo = {
  crn: "U42204RJ2024PTC096168",
  pan: "ABBCA0780E",
  gst: "08ABBCA0780E1Z0",
};

const highlights = [
  "CRN: U42204RJ2024PTC096168",
  "PAN: ABBCA0780E",
  "GST: 08ABBCA0780E1Z0",
  "Pan India Operations",
  "Sustainable Practices",
  "On-Time Delivery",
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold text-sm font-semibold rounded-full mb-4">
              ABOUT US
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Two Decades of Excellence in
              <span className="text-gold"> Infrastructure Development</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              AGROHA Infrastructure Consulting Engineers Pvt. Ltd. (AICEPL) is a Civil Engineering multi-disciplinary 
              consultancy organization with the aim of participating in the infrastructure development of the Nation 
              by providing professional engineering services. The firm is structured to fulfill the specific needs of 
              National programmes related to public utilities, community services, and industrial facilities and infrastructure projects.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team consists of specialists in design, project preparation, documentation, survey, geo-tech investigations 
              in roads and bridges projects, construction management, quality control, and expertise in financial and economic 
              analysis for highway & bridge works. We also have experts in Architecture & Town Planning, Water Resources and 
              Irrigation, Sewerage and Water Supply.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-muted rounded-lg p-4 border-l-4 border-gold">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="h-5 w-5 text-gold" />
                  <h4 className="font-bold text-foreground">Vision</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  To be India's most trusted infrastructure partner, building sustainable projects that stand the test of time.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-4 border-l-4 border-navy">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-5 w-5 text-navy" />
                  <h4 className="font-bold text-foreground">Mission</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  Delivering excellence through innovation, safety, and commitment to quality in every project.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Founder Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-card">
              <img
                src={founderImage}
                alt="Mr. Suresh Gupta - Founder & Chairman"
                className="w-full max-w-md object-contain"
              />
            </div>
            <div className="text-center mt-6">
              <h3 className="text-2xl font-bold text-foreground">Mr. Suresh Gupta</h3>
              <p className="text-gold font-medium">Founder & Chairman</p>
              <p className="text-muted-foreground text-sm mt-2 max-w-md italic">
                "Our commitment to quality and client satisfaction has been the cornerstone of Agroha's success."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
