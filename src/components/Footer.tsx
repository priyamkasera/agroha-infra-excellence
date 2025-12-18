import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter, Instagram } from "lucide-react";

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Highway Construction",
  "Commercial Buildings",
  "Industrial Facilities",
  "Infrastructure Development",
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export const Footer = () => {
  return (
    <footer className="bg-navy-dark text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                  <span className="text-navy-dark font-bold text-lg">A</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold">AGROHA</h3>
                <p className="text-xs text-primary-foreground/60 uppercase tracking-wider">Infrastructure</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Building India's infrastructure with excellence, innovation, and commitment 
              to quality since 2004.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gold rounded"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gold rounded"></span>
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gold rounded"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                  Sector 44, Gurugram<br />Haryana 122003, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                <a href="tel:+919876543210" className="text-primary-foreground/70 hover:text-gold transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                <a href="mailto:info@agrohainfra.com" className="text-primary-foreground/70 hover:text-gold transition-colors">
                  info@agrohainfra.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} Agroha Infrastructure. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
