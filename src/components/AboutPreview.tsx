import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf } from "lucide-react";

const AboutPreview = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
              <Leaf className="w-4 h-4" />
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
              Empowering Farmers with{" "}
              <span className="text-gradient">Quality Solutions</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Harikrushn Agro Chemicals has been dedicated to serving the farming community with premium agricultural products. Based in Lathidad, Gujarat, we take pride in providing reliable seeds and agro chemicals that help farmers achieve better yields.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our commitment to quality, combined with personalized service and expert guidance, makes us a trusted partner for farmers and dealers across the region.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { number: "500+", label: "Happy Farmers" },
              { number: "50+", label: "Product Varieties" },
              { number: "10+", label: "Years Experience" },
              { number: "100%", label: "Quality Assured" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-card p-6 rounded-xl shadow-card border border-border text-center"
              >
                <div className="text-2xl md:text-3xl font-display font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
