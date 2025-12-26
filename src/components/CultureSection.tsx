import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart, Users, Plane } from "lucide-react";

import jaisalmer1 from "@/assets/culture/jaisalmer-1.jpg";
import jaisalmer2 from "@/assets/culture/jaisalmer-2.jpg";
import jaisalmer3 from "@/assets/culture/jaisalmer-3.jpg";
import jaisalmer4 from "@/assets/culture/jaisalmer-4.jpg";
import jaisalmer5 from "@/assets/culture/jaisalmer-5.jpg";

const cultureImages = [
  { src: jaisalmer1, caption: "Desert Adventure - Jaisalmer 2025" },
  { src: jaisalmer2, caption: "Team Bonding at the Sand Dunes" },
  { src: jaisalmer3, caption: "Exploring Jaisalmer Fort" },
  { src: jaisalmer4, caption: "Road Trip Memories" },
  { src: jaisalmer5, caption: "Journey Together" },
];

const cultureHighlights = [
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "We believe happy employees create the best work",
  },
  {
    icon: Users,
    title: "Team Spirit",
    description: "Together we achieve more and celebrate together",
  },
  {
    icon: Plane,
    title: "Annual Trips",
    description: "Exciting team trips to amazing destinations",
  },
];

export const CultureSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cultureImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + cultureImages.length) % cultureImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cultureImages.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Life at Agroha
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Our Work Culture & Adventures
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We work hard and play harder! Our team enjoys a vibrant culture with exciting trips and memorable experiences together.
          </p>
        </motion.div>

        {/* Culture Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {cultureHighlights.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Image Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Main Image */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={cultureImages[currentIndex].src}
                alt={cultureImages[currentIndex].caption}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Caption */}
            <motion.div
              key={`caption-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="absolute bottom-6 left-6 right-6"
            >
              <span className="inline-block px-4 py-2 bg-primary/90 text-primary-foreground rounded-full text-sm font-medium mb-2">
                Jaisalmer Tour 2025
              </span>
              <h3 className="text-white text-xl md:text-2xl font-semibold">
                {cultureImages[currentIndex].caption}
              </h3>
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Thumbnail Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {cultureImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          {/* Thumbnail Strip */}
          <div className="flex justify-center gap-3 mt-6">
            {cultureImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-20 h-14 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-105"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={image.src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
