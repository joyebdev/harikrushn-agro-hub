import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 gradient-primary relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary-foreground/5" />
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-primary-foreground/5" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Ready to Grow Better?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
            Whether you're a farmer looking for premium seeds or a dealer seeking reliable supply — we're here to help you succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full gradient-gold text-accent-foreground font-semibold text-sm hover:scale-105 transition-transform shadow-lg"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:9879229489"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
