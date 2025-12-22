import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Mr. S.K. Gupta",
    role: "Managing Director",
    description: "Retired professional from PHED Department, Government of Rajasthan with experience in infrastructure services like Highways, Railways, water resources.",
  },
  {
    name: "Mr. M.K. Gupta",
    role: "Director",
    description: "Over 20 years of experience in infrastructure services like Highways, Railways, water resources with excellent liaising with MoRT&H, NHAI, State PWDs.",
  },
  {
    name: "Mrs. Baby Gupta",
    role: "Director",
    description: "MBA in Human Resource with over 10 years of professional experience. Profound knowledge of HR management and resource planning.",
  },
  {
    name: "Mr. Abhishek",
    role: "Executive Director",
    description: "B.Tech in Civil Engineering with 10 years in Highway sector. Experience with MoRT&H and Externally Aided Projects from World Bank, ADB.",
  },
  {
    name: "Mr. A. K. Gupta",
    role: "General Manager - Projects",
    description: "M.Tech in Transportation Engineering with 12 years of highway sector experience. Expert in contract execution and quantity surveying.",
  },
  {
    name: "Mr. Ashish Kumar",
    role: "Deputy General Manager",
    description: "B.Tech in Civil Engineering with over 10 years in Highway Engineering. Expert in pavement quality standards and materials.",
  },
  {
    name: "Mr. Harinder",
    role: "Sr. Manager",
    description: "B.Tech in Civil Engineering handling Business Development including bid preparation and coordination with HR for resource mobilization.",
  },
  {
    name: "Mr. B. K. Garg",
    role: "Design Engineer",
    description: "B.Tech in Civil Engineering with expertise in highway design/drawings, DPRs, and Feasibility Studies.",
  },
  {
    name: "Mrs. Manisha Gupta",
    role: "General Manager - HR/Business Development",
    description: "MBA in HR with over 15 years of professional experience. Profound knowledge of HR management with MNC exposure.",
  },
  {
    name: "Mr. Bhupendra Tanwar",
    role: "Dy. General Manager - HR/Business Development",
    description: "18+ years in Business Development and Operations Management in Highways consulting. Master's in Commerce.",
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

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
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
              <h3 className="text-lg font-bold text-foreground text-center mb-1">
                {member.name}
              </h3>
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
    </section>
  );
};
