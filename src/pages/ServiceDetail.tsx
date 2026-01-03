import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Building2, FileSearch, FileText, Compass, Search, HardHat, FileCheck, TrainTrack, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import feasibilityImg from "@/assets/services/feasibility.jpg";
import dprImg from "@/assets/services/dpr.jpg";
import designImg from "@/assets/services/design.jpg";
import surveyImg from "@/assets/services/survey.jpg";
import pmcImg from "@/assets/services/pmc.jpg";
import supervisionImg from "@/assets/services/supervision.jpg";
import tenderingImg from "@/assets/services/tendering.jpg";
import metroImg from "@/assets/services/metro.jpg";
import tunnelImg from "@/assets/services/tunnel.jpg";

const serviceDetails = {
  "feasibility-studies": {
    icon: FileSearch,
    title: "Feasibility Studies",
    image: feasibilityImg,
    description: "Comprehensive feasibility analysis and viability assessments for infrastructure projects.",
    overview: "Our feasibility study services provide a thorough evaluation of proposed infrastructure projects to determine their technical, economic, and operational viability. We help stakeholders make informed decisions before committing significant resources.",
    keyFeatures: [
      "Technical feasibility assessment",
      "Economic and financial analysis",
      "Environmental impact evaluation",
      "Social impact assessment",
      "Risk analysis and mitigation strategies",
      "Alternative route/alignment studies",
      "Traffic demand forecasting",
      "Cost-benefit analysis"
    ],
    process: [
      "Initial project scoping and objectives definition",
      "Data collection and field surveys",
      "Technical analysis and engineering assessment",
      "Economic viability evaluation",
      "Environmental and social screening",
      "Report preparation and recommendations"
    ],
    applications: ["Highways & Expressways", "Railways & Metro", "Bridges & Flyovers", "Tunnels", "Airports", "Urban Infrastructure"]
  },
  "dpr-preparation": {
    icon: FileText,
    title: "DPR Preparation",
    image: dprImg,
    description: "Detailed Project Report preparation with thorough technical and financial analysis.",
    overview: "Our DPR (Detailed Project Report) preparation services encompass all aspects of project planning, from preliminary design to detailed cost estimation. We deliver comprehensive reports that serve as blueprints for successful project execution.",
    keyFeatures: [
      "Preliminary and detailed engineering design",
      "Detailed cost estimation and BOQ",
      "Construction methodology planning",
      "Quality assurance protocols",
      "Project scheduling and timelines",
      "Land acquisition details",
      "Utility shifting plans",
      "Environmental clearance documentation"
    ],
    process: [
      "Project inception and baseline studies",
      "Topographical and geotechnical surveys",
      "Design development and optimization",
      "Quantity estimation and costing",
      "Report compilation and review",
      "Stakeholder presentation and finalization"
    ],
    applications: ["National Highways", "State Roads", "Railway Lines", "Metro Projects", "Bridge Structures", "Industrial Infrastructure"]
  },
  "engineering-design": {
    icon: Compass,
    title: "Engineering Design",
    image: designImg,
    description: "Innovative engineering design solutions for highways, bridges, tunnels, and metro systems.",
    overview: "Our engineering design services combine technical expertise with innovative solutions to deliver safe, efficient, and cost-effective infrastructure designs. We use state-of-the-art software and adhere to international design standards.",
    keyFeatures: [
      "Geometric design optimization",
      "Structural design and analysis",
      "Pavement design using latest IRC codes",
      "Drainage and hydrology design",
      "Bridge and flyover design",
      "Traffic engineering solutions",
      "3D modeling and visualization",
      "Value engineering"
    ],
    process: [
      "Design brief and requirements analysis",
      "Conceptual design development",
      "Detailed design calculations",
      "Design review and optimization",
      "Final design documentation",
      "Design support during construction"
    ],
    applications: ["Highway Corridors", "Urban Roads", "Bridges & Culverts", "Interchanges", "Tunnels", "Railway Infrastructure"]
  },
  "survey-investigation": {
    icon: Search,
    title: "Survey & Investigation",
    image: surveyImg,
    description: "Geotechnical, topographical, and environmental surveys with advanced investigation techniques.",
    overview: "Our survey and investigation services provide the foundation for accurate project planning and design. We employ advanced technologies and experienced teams to deliver precise and reliable data.",
    keyFeatures: [
      "Topographical surveys using total station and GPS",
      "LiDAR and aerial photogrammetry",
      "Geotechnical investigations",
      "Hydrological surveys",
      "Traffic surveys and analysis",
      "Environmental baseline studies",
      "Material testing and analysis",
      "Underground utility detection"
    ],
    process: [
      "Survey planning and methodology",
      "Field data collection",
      "Laboratory testing and analysis",
      "Data processing and interpretation",
      "Report preparation with recommendations",
      "Quality assurance and verification"
    ],
    applications: ["Road Projects", "Railway Alignments", "Tunnel Routes", "Bridge Sites", "Urban Development", "Industrial Projects"]
  },
  "project-management-consultancy": {
    icon: HardHat,
    title: "Project Management Consultancy",
    image: pmcImg,
    description: "End-to-end project management services ensuring timely delivery and cost optimization.",
    overview: "Our PMC services provide comprehensive project oversight from inception to completion. We ensure projects are delivered on time, within budget, and to the highest quality standards through systematic management approaches.",
    keyFeatures: [
      "Project planning and scheduling",
      "Cost monitoring and control",
      "Quality management systems",
      "Contract administration",
      "Risk management",
      "Stakeholder coordination",
      "Progress monitoring and reporting",
      "Claims management"
    ],
    process: [
      "Project inception and team mobilization",
      "Planning and baseline establishment",
      "Execution monitoring and control",
      "Quality assurance implementation",
      "Progress review and reporting",
      "Project closure and documentation"
    ],
    applications: ["Highway Projects", "Railway Construction", "Metro Systems", "Bridge Projects", "Tunnel Construction", "Multi-modal Corridors"]
  },
  "construction-supervision": {
    icon: Building2,
    title: "Construction Supervision",
    image: supervisionImg,
    description: "Quality assurance and construction supervision to ensure projects meet highest standards.",
    overview: "Our construction supervision services ensure that projects are executed according to approved designs, specifications, and quality standards. We provide on-site expertise to address challenges and maintain project integrity.",
    keyFeatures: [
      "Site inspection and monitoring",
      "Quality control and testing",
      "Work measurement and certification",
      "Contractor coordination",
      "Safety management",
      "Design clarifications and modifications",
      "Environmental compliance monitoring",
      "Documentation and record keeping"
    ],
    process: [
      "Site establishment and mobilization",
      "Daily supervision and monitoring",
      "Quality testing and verification",
      "Progress measurement and billing",
      "Issue resolution and coordination",
      "Completion certification"
    ],
    applications: ["Road Construction", "Bridge Building", "Tunnel Boring", "Railway Laying", "Metro Infrastructure", "Airport Development"]
  },
  "tendering-contract-services": {
    icon: FileCheck,
    title: "Tendering & Contract Services",
    image: tenderingImg,
    description: "Complete tendering support and contract management for infrastructure projects.",
    overview: "Our tendering and contract services support clients through the entire procurement cycle, from bid document preparation to contract award and management. We ensure transparent and competitive procurement processes.",
    keyFeatures: [
      "Bid document preparation",
      "Technical specifications development",
      "Bill of Quantities preparation",
      "Pre-bid conference support",
      "Bid evaluation assistance",
      "Contract negotiation support",
      "Contract management advisory",
      "Dispute resolution support"
    ],
    process: [
      "Procurement strategy development",
      "Bid document drafting",
      "Pre-bid clarifications management",
      "Bid evaluation and comparison",
      "Recommendation and award",
      "Contract execution support"
    ],
    applications: ["Government Projects", "EPC Contracts", "BOT Projects", "International Bids", "Framework Agreements", "Term Contracts"]
  },
  "metro-rail": {
    icon: TrainTrack,
    title: "Metro Rail",
    image: metroImg,
    description: "Specialized consultancy for metro rail infrastructure, stations, and urban transit systems.",
    overview: "Our metro rail consultancy services cover all aspects of urban mass rapid transit systems. We bring expertise in planning, design, and implementation of metro corridors, stations, and depot facilities.",
    keyFeatures: [
      "Corridor planning and alignment",
      "Station architectural design",
      "Track and signaling design",
      "Depot and workshop planning",
      "Systems integration",
      "Passenger flow analysis",
      "Accessibility compliance",
      "Integration with urban planning"
    ],
    process: [
      "Demand analysis and network planning",
      "Corridor alignment finalization",
      "Detailed design development",
      "Systems engineering coordination",
      "Construction supervision",
      "Testing and commissioning support"
    ],
    applications: ["Metro Lines", "Light Rail Transit", "Monorail Systems", "Metro Stations", "Depot Facilities", "Transit Hubs"]
  },
  "tunnel-engineering": {
    icon: Mountain,
    title: "Tunnel Engineering",
    image: tunnelImg,
    description: "Expert tunnel design and engineering for highways, railways, and underground infrastructure.",
    overview: "Our tunnel engineering services provide specialized expertise for underground construction projects. We handle complex geological conditions and deliver safe, efficient tunnel designs for various applications.",
    keyFeatures: [
      "Geological and geotechnical assessment",
      "Tunnel alignment optimization",
      "Support system design",
      "Ventilation and fire safety design",
      "Electrical and mechanical systems",
      "Portal and approach design",
      "Construction methodology planning",
      "Monitoring and instrumentation"
    ],
    process: [
      "Geological investigation and mapping",
      "Conceptual design and alignment",
      "Detailed design and analysis",
      "Construction planning",
      "Supervision during excavation",
      "Monitoring and safety management"
    ],
    applications: ["Highway Tunnels", "Railway Tunnels", "Metro Tunnels", "Escape Tunnels", "Utility Tunnels", "Hydropower Tunnels"]
  }
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceDetails[slug as keyof typeof serviceDetails];

  if (!service) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container-custom py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services">
            <Button>Back to Services</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px]">
          <div className="absolute inset-0">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          </div>
          <div className="relative container-custom h-full flex flex-col justify-end pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/services" className="inline-flex items-center gap-2 text-gold hover:text-gold/80 mb-6 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to Services
              </Link>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gold/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-gold" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">{service.title}</h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl">{service.description}</p>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{service.overview}</p>
            </motion.div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-8">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {service.keyFeatures.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border"
                  >
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-8">Our Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.process.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative p-6 bg-card rounded-lg border border-border"
                  >
                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-gold rounded-full flex items-center justify-center text-background font-bold">
                      {index + 1}
                    </div>
                    <p className="text-foreground mt-2">{step}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-8">Applications</h2>
              <div className="flex flex-wrap gap-3">
                {service.applications.map((app, index) => (
                  <motion.span
                    key={app}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="px-4 py-2 bg-gold/10 text-gold rounded-full font-medium"
                  >
                    {app}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-navy-dark">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-primary-foreground mb-4">Ready to Get Started?</h2>
              <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
                Contact us today to discuss how our {service.title.toLowerCase()} services can help your project succeed.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold/90 text-background">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
