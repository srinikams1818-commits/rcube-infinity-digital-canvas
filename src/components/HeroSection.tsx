import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import heroSlide1 from "@/assets/hero-slide-1.png";
import heroSlide2 from "@/assets/hero-slide-2.png";
import heroSlide3 from "@/assets/hero-slide-3.png";

const heroSlides = [
  {
    background: heroSlide1,
    badge: "Your Partner in Digital Excellence",
    headline: "R Cube Infinity",
    subheadline: "Ignite Your Digital Success",
    description: "We craft powerful digital experiences that captivate audiences, amplify your brand, and drive measurable results.",
    ctaPrimary: { text: "Start Your Journey", link: "/contact" },
    ctaSecondary: { text: "Explore Services", link: "/services" },
  },
  {
    background: heroSlide2,
    badge: "Creative Digital Solutions",
    headline: "R Cube Infinity",
    subheadline: "Transform Your Brand",
    description: "From stunning visuals to strategic campaigns, we help businesses stand out in the digital landscape.",
    ctaPrimary: { text: "Get Started", link: "/contact" },
    ctaSecondary: { text: "Our Services", link: "/services" },
  },
  {
    background: heroSlide3,
    badge: "Results-Driven Marketing",
    headline: "R Cube Infinity",
    subheadline: "Grow Your Business",
    description: "Data-driven strategies and creative excellence to help you reach your target audience and achieve your goals.",
    ctaPrimary: { text: "Contact Us", link: "/contact" },
    ctaSecondary: { text: "Learn More", link: "/about" },
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const slide = heroSlides[currentSlide];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <motion.img 
          key={`bg-${currentSlide}`}
          src={slide.background}
          alt="Digital marketing background" 
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        {/* Stronger overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 bg-background/40" />
      </div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl animate-blob animation-delay-400" />

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
      </button>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            key={`badge-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-background/60 backdrop-blur-md border border-brand-orange/30 mb-8"
          >
            <Sparkles className="w-4 h-4 text-brand-orange" />
            <span className="text-sm font-semibold text-foreground">
              {slide.badge}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            key={`headline-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-lg"
          >
            <span className="text-gradient drop-shadow-md">{slide.headline}</span>
            <br />
            <span className="text-foreground drop-shadow-md">{slide.subheadline.split(" ").slice(0, -1).join(" ")} </span>
            <span className="text-gradient-secondary drop-shadow-md">{slide.subheadline.split(" ").slice(-1)}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            key={`description-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-sm"
          >
            {slide.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            key={`cta-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to={slide.ctaPrimary.link}>
              <Button variant="hero" size="xl" className="group">
                {slide.ctaPrimary.text}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to={slide.ctaSecondary.link}>
              <Button variant="heroOutline" size="xl" className="group">
                <Play className="w-5 h-5" />
                {slide.ctaSecondary.text}
              </Button>
            </Link>
          </motion.div>

          {/* Slide Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center gap-3 mt-10"
          >
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? "w-8 bg-gradient-to-r from-brand-purple to-brand-blue" 
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 pt-10 border-t border-border/50"
          >
            <p className="text-sm text-muted-foreground mb-6">
              Trusted by 45+ businesses to elevate their digital presence
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {["SEO Excellence", "Brand Strategy", "Creative Design", "Performance Marketing", "Web Solutions"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="text-sm font-medium text-muted-foreground flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Curved Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
