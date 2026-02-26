import { motion } from "framer-motion";
import { Leaf, Target, Eye, Heart, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 gradient-primary">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
                About Us
              </h1>
              <p className="text-primary-foreground/80 text-lg">
                Learn about our journey, mission, and commitment to the farming community.
              </p>
            </motion.div>
          </div>
          <div className="mt-8">
            <svg viewBox="0 0 1440 60" fill="none" className="w-full">
              <path d="M0,40 C480,0 960,60 1440,20 L1440,60 L0,60 Z" fill="hsl(40, 30%, 97%)" />
            </svg>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
                <Leaf className="w-4 h-4" />
                Our Story
              </div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Growing Together with <span className="text-gradient">Gujarat's Farmers</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Harikrushn Agro Chemicals was founded with a simple yet powerful vision — to empower farmers with access to the best agricultural products available. Located in the heart of Lathidad, Gujarat, we have grown from a small local supplier to a trusted name in the agro chemicals and seeds industry.
                </p>
                <p>
                  Our deep understanding of the local soil conditions, climate patterns, and farming practices allows us to recommend the most suitable products for each farmer's unique needs. We believe that every farmer deserves access to quality inputs that can transform their yields and livelihoods.
                </p>
                <p>
                  Led by the Makana family, our business combines traditional agricultural wisdom with modern farming solutions to deliver results that our customers can count on, season after season.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-earth-light">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: Target,
                  title: "Our Mission",
                  text: "To provide farmers and agricultural dealers with the highest quality seeds and agro chemicals, backed by expert guidance and dedicated support, helping them achieve sustainable and profitable farming.",
                },
                {
                  icon: Eye,
                  title: "Our Vision",
                  text: "To be the most trusted agricultural solutions provider in Gujarat, recognized for our unwavering commitment to quality, innovation, and the success of every farmer we serve.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-card p-8 rounded-xl shadow-card border border-border"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl gradient-primary text-primary-foreground mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                What Drives Us
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Heart, title: "Farmer First", desc: "Every decision we make is guided by how it benefits the farmer." },
                { icon: Leaf, title: "Quality Commitment", desc: "We never compromise on the quality of our products." },
                { icon: MapPin, title: "Local Dedication", desc: "Proudly serving the Lathidad community and beyond." },
              ].map((val, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary text-primary mb-4">
                    <val.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{val.title}</h3>
                  <p className="text-sm text-muted-foreground">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
