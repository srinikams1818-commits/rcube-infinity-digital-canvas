import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const services = [
  { name: "SEO & Local SEO", href: "/services#seo" },
  { name: "Social Media Marketing", href: "/services#social-media" },
  { name: "Google & Meta Ads", href: "/services#ads" },
  { name: "Web Development", href: "/services#web" },
  { name: "Creative Branding", href: "/services#branding" },
  { name: "Video Editing", href: "/services#video" },
  { name: "Photo Editing", href: "/services#photo" },
  { name: "Graphic Design", href: "/services#graphic" },
];

const sectors = [
  { name: "Healthcare", href: "/sectors#healthcare" },
  { name: "Food & Restaurant", href: "/sectors#food" },
  { name: "Education", href: "/sectors#education" },
  { name: "Real Estate", href: "/sectors#realestate" },
  { name: "E-commerce", href: "/sectors#ecommerce" },
  { name: "Hospitality", href: "/sectors#hospitality" },
  { name: "Automotive", href: "/sectors#automotive" },
  { name: "Fashion & Lifestyle", href: "/sectors#fashion" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownClick = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const DropdownMenu = ({ 
    label, 
    items,
    viewAllLink,
  }: { 
    label: string; 
    items: { name: string; href: string }[]; 
    viewAllLink: string;
  }) => {
    const isOpen = activeDropdown === label;
    
    return (
      <div 
        className="relative"
        onMouseEnter={() => setActiveDropdown(label)}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <button
          onClick={() => handleDropdownClick(label)}
          className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
        >
          {label}
        </button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute top-full left-0 mt-1 w-64 z-[100]"
            >
              <div className="relative bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
                {/* Gradient header */}
                <div className="px-4 py-3 bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 border-b border-border">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{label}</span>
                </div>
                
                <div className="py-2 max-h-72 overflow-y-auto">
                  {items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setActiveDropdown(null)}
                      className="group flex items-center gap-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all cursor-pointer"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-purple/50 group-hover:bg-brand-purple group-hover:scale-125 transition-all" />
                      {item.name}
                    </Link>
                  ))}
                </div>
                
                {/* View All Link */}
                <Link
                  to={viewAllLink}
                  onClick={() => setActiveDropdown(null)}
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-brand-purple hover:text-brand-purple/80 bg-muted/30 border-t border-border transition-colors cursor-pointer"
                >
                  View All {label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="R Cube Infinity Solutions" 
              className="h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${location.pathname === '/about' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              About
            </Link>
            
            {/* Dropdowns */}
            <DropdownMenu label="Services" items={services} viewAllLink="/services" />
            <DropdownMenu label="Sectors" items={sectors} viewAllLink="/sectors" />
            
            <Link
              to="/blog"
              className={`text-sm font-medium transition-colors ${location.pathname === '/blog' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${location.pathname === '/contact' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact">
              <Button variant="hero" size="default">
                Get Free Consultation
              </Button>
            </Link>
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
              className="lg:hidden mt-4 bg-card border border-border rounded-2xl p-6 shadow-lg"
            >
              <div className="flex flex-col gap-4">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-muted-foreground hover:text-foreground py-2">Home</Link>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-muted-foreground hover:text-foreground py-2">About</Link>
                <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-muted-foreground hover:text-foreground py-2">Services</Link>
                <Link to="/sectors" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-muted-foreground hover:text-foreground py-2">Sectors</Link>
                <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-muted-foreground hover:text-foreground py-2">Blog</Link>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-muted-foreground hover:text-foreground py-2">Contact</Link>
                
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="hero" className="mt-4 w-full">Get Free Consultation</Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;