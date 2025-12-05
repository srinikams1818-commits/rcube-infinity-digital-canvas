import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const services = [
  { name: "SEO & Local SEO", href: "#services" },
  { name: "Social Media Marketing", href: "#services" },
  { name: "Google & Meta Ads", href: "#services" },
  { name: "Web Development", href: "#services" },
  { name: "Creative Branding", href: "#services" },
  { name: "Video Editing", href: "#services" },
  { name: "Photo Editing", href: "#services" },
  { name: "Graphic Design", href: "#services" },
];

const sectors = [
  { name: "Healthcare", href: "#services" },
  { name: "Food & Restaurant", href: "#services" },
  { name: "Education", href: "#services" },
  { name: "Real Estate", href: "#services" },
  { name: "E-commerce", href: "#services" },
  { name: "Hospitality", href: "#services" },
  { name: "Automotive", href: "#services" },
  { name: "Fashion & Lifestyle", href: "#services" },
];

const areas = [
  { name: "Chennai", href: "#locations" },
  { name: "Coimbatore", href: "#locations" },
  { name: "Madurai", href: "#locations" },
  { name: "Trichy", href: "#locations" },
  { name: "Salem", href: "#locations" },
  { name: "Tiruppur", href: "#locations" },
  { name: "Erode", href: "#locations" },
  { name: "Vellore", href: "#locations" },
];

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const DropdownMenu = ({ 
    label, 
    items, 
    isOpen, 
    onToggle 
  }: { 
    label: string; 
    items: { name: string; href: string }[]; 
    isOpen: boolean;
    onToggle: () => void;
  }) => (
    <div className="relative">
      <button
        onClick={onToggle}
        onMouseEnter={() => setActiveDropdown(label)}
        className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            onMouseLeave={() => setActiveDropdown(null)}
            className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-xl z-50 overflow-hidden"
          >
            <div className="py-2 max-h-80 overflow-y-auto">
              {items.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveDropdown(null)}
                  className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-strong py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="R Cube Infinity Solutions" 
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground animated-underline transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* Dropdowns */}
            <DropdownMenu
              label="Services"
              items={services}
              isOpen={activeDropdown === "Services"}
              onToggle={() => setActiveDropdown(activeDropdown === "Services" ? null : "Services")}
            />
            <DropdownMenu
              label="Sectors"
              items={sectors}
              isOpen={activeDropdown === "Sectors"}
              onToggle={() => setActiveDropdown(activeDropdown === "Sectors" ? null : "Sectors")}
            />
            <DropdownMenu
              label="Areas"
              items={areas}
              isOpen={activeDropdown === "Areas"}
              onToggle={() => setActiveDropdown(activeDropdown === "Areas" ? null : "Areas")}
            />
            
            <a
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground animated-underline transition-colors"
            >
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="hero" size="default">
              Get Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 glass rounded-2xl p-6"
            >
              <div className="flex flex-col gap-4">
                <a
                  href="#home"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-foreground py-2 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-foreground py-2 transition-colors"
                >
                  About
                </a>
                
                {/* Mobile Dropdowns */}
                <div className="border-t border-border pt-4">
                  <p className="text-xs uppercase text-muted-foreground mb-2">Services</p>
                  {services.slice(0, 4).map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-sm text-muted-foreground hover:text-foreground py-1.5"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                
                <div className="border-t border-border pt-4">
                  <p className="text-xs uppercase text-muted-foreground mb-2">Sectors</p>
                  {sectors.slice(0, 4).map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-sm text-muted-foreground hover:text-foreground py-1.5"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-foreground py-2 transition-colors border-t border-border pt-4"
                >
                  Contact
                </a>
                
                <Button variant="hero" className="mt-4 w-full">
                  Get Free Consultation
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
