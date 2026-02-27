import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="gradient-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Harikrushn Agro Chemicals" className="h-14 w-auto rounded-full" />
              <div>
                <h3 className="font-display font-bold text-lg">HARIKRUSHN</h3>
                <p className="text-sm opacity-80">Agro Chemicals</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Trusted agro chemical solutions for better farming. Serving farmers and dealers across Gujarat with quality seeds and agricultural products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Gallery", path: "/gallery" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="https://maps.app.goo.gl/XbH35A4xo6icQutaA?g_st=aw" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Paresh Auto Garage Ne Baju, Lathidad – 364710</span>
              </a>
              <a href="tel:9879229489" className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <Phone className="w-4 h-4 shrink-0" />
                9879229489 (Meet)
              </a>
              <a href="tel:9898534401" className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <Phone className="w-4 h-4 shrink-0" />
                9898534401 (Sureshbhai)
              </a>
              <a href="mailto:meetmakana108@gmail.com" className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <Mail className="w-4 h-4 shrink-0" />
                meetmakana108@gmail.com
              </a>
              <a href="https://www.instagram.com/harikrushna_agro_camecal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <Instagram className="w-4 h-4 shrink-0" />
                @harikrushna_agro_camecal
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Harikrushn Agro Chemicals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
