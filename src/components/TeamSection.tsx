import { motion } from "framer-motion";
import chairmanFormal from "@/assets/chairman-formal.jpg";
import chairmanProfessional from "@/assets/chairman-professional.jpg";
import managingDirector from "@/assets/managing-director.jpg";
import directorBaby from "@/assets/director-baby.jpg";

const leadershipTeam = [
  {
    name: "Mr. Suresh Gupta",
    role: "Chairman & Founder",
    description: "Visionary leader and founder of Agroha Infrastructure with decades of experience in infrastructure development across India.",
    images: [chairmanFormal, chairmanProfessional],
  },
  {
    name: "Mr. Mukesh Gupta",
    role: "Managing Director",
    description: "Over 20 years of experience in infrastructure services like Highways, Railways, water resources with excellent coordination with MoRT&H, NHAI, State PWDs.",
    images: [managingDirector],
  },
  {
    name: "Mrs. Baby Gupta",
    role: "Director",
    description: "MBA in Human Resource with over 10 years of professional experience. Profound knowledge of HR management and resource planning.",
    images: [directorBaby],
  },
];

const seniorManagement = [
  {
    name: "Mr. Abhishek",
    role: "General Manager – Projects",
    description: "B.Tech in Civil Engineering with 10 years in Highway sector. Experience with MoRT&H and Externally Aided Projects from World Bank, ADB.",
  },
  {
    name: "Mr. A. K. Gupta",
    role: "General Manager – Projects",
    description: "M.Tech in Transportation Engineering with 12 years of highway sector experience. Expert in contract execution and quantity surveying.",
  },
  {
    name: "Mr. Ashish Kumar",
    role: "Deputy General Manager",
    description: "B.Tech in Civil Engineering with over 10 years in Highway Engineering. Expert in pavement quality standards and materials.",
  },
  {
    name: "Mr. Harinder",
    role: "Senior Manager",
    description: "B.Tech in Civil Engineering handling Business Development including bid preparation and coordination with HR for resource mobilization.",
  },
  {
    name: "Mr. Bhavishya Kumar Garg",
    role: "Manager – Technical",
    description: "B.Tech in Civil Engineering with expertise in highway design/drawings, DPRs, and Feasibility Studies.",
  },
];

const hrBusinessTeam = [
  {
    name: "Mrs. Manisha Gupta",
    role: "Chief General Manager – HR / Business Development",
    description: "MBA in HR with over 15 years of professional experience. Profound knowledge of HR management with MNC exposure.",
  },
  {
    name: "Mr. Raunak Gupta",
    role: "IT Consultant",
    description: "Technology expert handling IT infrastructure and digital solutions for the organization.",
  },
  {
    name: "Mr. Rohit Solanki",
    role: "Manager – HR / Business Development",
    description: "Experienced professional in HR operations and business development activities.",
  },
  {
    name: "Ms. Dhairya Gupta",
    role: "Manager – HR / Business Development",
    description: "Skilled in human resources and business development with focus on organizational growth.",
  },
  {
    name: "Ms. Sakshi Sharma",
    role: "Assistant Manager – Human Resources",
    description: "HR professional managing recruitment, employee relations and administrative functions.",
  },
];

export const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-muted">
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
            OUR TEAM
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our <span className="text-gold">Leadership</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A team of experienced professionals dedicated to delivering excellence in infrastructure consulting.
          </p>
        </motion.div>

        {/* Leadership Team with Photos */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-foreground mb-8 text-center"
          >
            Leadership Team
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl overflow-hidden shadow-soft border border-border hover:border-gold/30 hover:shadow-card transition-all duration-300"
              >
                {/* Photos */}
                <div className={`grid ${member.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-1`}>
                  {member.images.map((img, imgIndex) => (
                    <div key={imgIndex} className="aspect-square overflow-hidden">
                      <img
                        src={img}
                        alt={`${member.name} - ${imgIndex + 1}`}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  ))}
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h4>
                  <p className="text-gold text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Senior Management Team */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-foreground mb-8 text-center"
          >
            Senior Management Team
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {seniorManagement.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-soft border border-border hover:border-gold/30 hover:shadow-card transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-gold font-bold text-xl">
                    {member.name.split(' ').slice(-1)[0].charAt(0)}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-foreground text-center mb-1">
                  {member.name}
                </h4>
                <p className="text-gold text-sm font-medium text-center mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm text-center leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Operation Team */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-foreground mb-8 text-center"
          >
            Operation Team
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {hrBusinessTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-soft border border-border hover:border-gold/30 hover:shadow-card transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-gold font-bold text-xl">
                    {member.name.split(' ').slice(-1)[0].charAt(0)}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-foreground text-center mb-1">
                  {member.name}
                </h4>
                <p className="text-gold text-sm font-medium text-center mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm text-center leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
