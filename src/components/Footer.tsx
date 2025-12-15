import { motion } from "framer-motion";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  Phone,
  Clock,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const footerLinks = {
  services: [
    { name: "SEO & Local SEO", href: "/services" },
    { name: "Social Media Marketing", href: "/services" },
    { name: "Google & Meta Ads", href: "/services" },
    { name: "Web Development", href: "/services" },
    { name: "Creative Branding", href: "/services" },
    { name: "Video Editing", href: "/services" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Sectors", href: "/sectors" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/rcubeinfinitysolutions", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Phone, href: "https://wa.me/918438937733", label: "WhatsApp" },
];

const Footer = () => {
  return (
    <footer className="relative pt-24 pb-8 overflow-hidden">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-orange" />
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-brand-indigo/30" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img 
                src={logo} 
                alt="R Cube Infinity Solutions" 
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Top digital marketing agency in Tamil Nadu, helping businesses grow with 
              data-driven SEO, social media, and web development solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="tel:+918438937733" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-brand-purple" />
                +91 84389 37733
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-brand-purple" />
                9:30 AM - 7:00 PM
              </div>
              <a href="mailto:info@rcubeinfinity.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-brand-purple" />
                info@rcubeinfinity.com
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-brand-purple hover:bg-brand-purple/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground animated-underline transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground animated-underline transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6">
              Contact Us
            </h3>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Ready to grow your business? Get in touch with our team today.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-brand-purple/20 text-brand-purple rounded-lg hover:bg-brand-purple/30 transition-colors text-sm font-medium"
              >
                Get Free Consultation
              </Link>
              <div className="pt-4">
                <p className="text-xs text-muted-foreground">
                  <strong className="text-foreground">Happy Clients:</strong> 45+
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  <strong className="text-foreground">Business Hours:</strong> 9:30 AM - 7:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} R Cube Infinity Digital Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;