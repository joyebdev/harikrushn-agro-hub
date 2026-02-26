import { motion } from "framer-motion";
import { Shield, Users, HeadphonesIcon, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Quality Agro Products",
    description: "Every product undergoes strict quality checks to ensure your crops get the best.",
  },
  {
    icon: Users,
    title: "Trusted by Farmers",
    description: "Hundreds of farmers across Gujarat rely on us for their agricultural needs.",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    description: "Our experienced team provides guidance to help you choose the right products.",
  },
  {
    icon: Award,
    title: "Reliable Service",
    description: "Timely delivery and consistent quality you can always count on.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Why Choose <span className="text-gradient">Harikrushn</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We go beyond just selling products — we build lasting relationships with the farming community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-6 rounded-xl shadow-card border border-border text-center group hover:shadow-premium transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl gradient-primary text-primary-foreground mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
