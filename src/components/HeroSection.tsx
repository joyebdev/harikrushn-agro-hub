import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sprout } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroBanner} alt="Lush farmland" className="w-full h-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      <div className="container relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-6 border border-primary-foreground/20"
          >
            <Sprout className="w-4 h-4 inline-block mr-1" /> Trusted by Farmers Across Gujarat
          </motion.span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
            Trusted Agro Chemical Solutions for{" "}
            <span className="text-gold">Better Farming</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/85 font-body leading-relaxed mb-8 max-w-xl">
            Quality seeds and agricultural products to help your farm thrive. Your success is our commitment.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full gradient-gold text-accent-foreground font-semibold text-sm hover:scale-105 transition-transform shadow-lg"
            >
              View Products
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-colors backdrop-blur-sm"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path d="M0,60 C360,0 1080,80 1440,30 L1440,80 L0,80 Z" fill="hsl(40, 30%, 97%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
