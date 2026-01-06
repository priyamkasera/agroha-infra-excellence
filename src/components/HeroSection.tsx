import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Award, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-video-1.mp4";

const heroContent = {
  title: "Building India's",
  highlight: "Infrastructure Legacy",
  description: "Agroha Infrastructure delivers world-class construction solutions for highways, commercial complexes, industrial facilities, and urban development projects across India.",
};

const stats = [
  { icon: Building2, value: 250, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 1000, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 20, suffix: "+", label: "Years Experience" },
];

// Counter hook for rolling number animation
const useCounter = (end: number, duration: number = 2000, isInView: boolean = false) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isInView) {
      setCount(0); // Reset when out of view
      return;
    }
    
    let startTime: number | null = null;
    let animationFrame: number;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);
  
  return count;
};

const StatCounter = ({ stat, isInView }: { stat: typeof stats[0]; isInView: boolean }) => {
  const count = useCounter(stat.value, 2000, isInView);
  
  return (
    <div
      className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4"
      style={{ isolation: 'isolate' }}
    >
      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
        <stat.icon className="h-6 w-6 text-gold" />
      </div>
      <div>
        <div className="text-2xl font-bold text-white">
          {count}{stat.suffix}
        </div>
        <div className="text-sm text-white/70">{stat.label}</div>
      </div>
    </div>
  );
};

export const HeroSection = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: false, amount: 0.5 });

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 geometric-pattern opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-gold/20 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6">
              ISO 9001:2015 Certified Company
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
              {heroContent.title}
              <span className="block text-gold">{heroContent.highlight}</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl">
              {heroContent.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="hero-outline" 
              size="xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl"
        >
          {stats.map((stat) => (
            <StatCounter key={stat.label} stat={stat} isInView={isInView} />
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-gold rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};
