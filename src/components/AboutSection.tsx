import { motion } from "framer-motion";
import { CheckCircle, Target, Eye } from "lucide-react";
import founderImage from "@/assets/founder-portrait.jpg";

const highlights = [
  "ISO 9001:2015 Certified",
  "Government Approved Contractor",
  "Pan India Operations",
  "Safety First Approach",
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
              Agroha Infrastructure, under the visionary leadership of <strong className="text-foreground">Mr. Mukesh Gupta</strong>, 
              has established itself as a premier construction and infrastructure development company in India. 
              With over 20 years of experience, we specialize in delivering world-class infrastructure 
              projects that drive economic growth and improve lives.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our expertise spans across highway construction, commercial developments, industrial 
              facilities, and urban infrastructure projects. We work alongside Sterling Indo Tech, 
              sharing resources and expertise to deliver comprehensive solutions to our clients.
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
            className="relative"
          >
            <div className="relative">
              {/* Background Decoration */}
              <div className="absolute -top-6 -right-6 w-full h-full bg-gold/20 rounded-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-navy rounded-2xl"></div>
              
              {/* Main Card */}
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-card">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={founderImage}
                    alt="Mr. Mukesh Gupta - Founder & Chairman"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-dark via-navy-dark/90 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-primary-foreground">Mr. Mukesh Gupta</h3>
                  <p className="text-gold font-medium">Founder & Chairman</p>
                  <p className="text-primary-foreground/70 text-sm mt-2">
                    "Our commitment to quality and client satisfaction has been the cornerstone of Agroha's success."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
