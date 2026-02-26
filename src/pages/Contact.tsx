import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Contact = () => {
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
                Contact Us
              </h1>
              <p className="text-primary-foreground/80 text-lg">
                Get in touch with us for any enquiries or product information.
              </p>
            </motion.div>
          </div>
          <div className="mt-8">
            <svg viewBox="0 0 1440 60" fill="none" className="w-full">
              <path d="M0,40 C480,0 960,60 1440,20 L1440,60 L0,60 Z" fill="hsl(40, 30%, 97%)" />
            </svg>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-background">
          <div className="container max-w-5xl">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  Get In Touch
                </h2>

                <div className="space-y-5">
                  <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-card">
                    <div className="w-10 h-10 rounded-lg gradient-primary text-primary-foreground flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm mb-1">Address</h3>
                      <p className="text-sm text-muted-foreground">Paresh Auto Garage Ne Baju, Lathidad – 364710</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-card">
                    <div className="w-10 h-10 rounded-lg gradient-primary text-primary-foreground flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm mb-1">Phone Numbers</h3>
                      <a href="tel:9879229489" className="text-sm text-muted-foreground hover:text-primary block transition-colors">
                        Makana Meet – 9879229489
                      </a>
                      <a href="tel:9898534401" className="text-sm text-muted-foreground hover:text-primary block transition-colors">
                        Makana Sureshbhai – 9898534401
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-card">
                    <div className="w-10 h-10 rounded-lg gradient-primary text-primary-foreground flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm mb-1">Email</h3>
                      <a href="mailto:meetmakana108@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        meetmakana108@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-card">
                    <div className="w-10 h-10 rounded-lg gradient-primary text-primary-foreground flex items-center justify-center shrink-0">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm mb-1">Instagram</h3>
                      <a href="https://www.instagram.com/harikrushna_agro_camecal" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        @harikrushna_agro_camecal
                      </a>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/919879229489?text=Hello%20HARIKRUSHN%20AGRO%20CHEMICALS%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[hsl(142,70%,45%)] text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </div>
              </motion.div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  Find Us
                </h2>
                <div className="rounded-xl overflow-hidden border border-border shadow-card h-[400px] md:h-full min-h-[300px]">
                  <iframe
                    title="Harikrushn Agro Chemicals Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.0!2d71.8!3d21.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQ4JzAwLjAiTiA3McKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
