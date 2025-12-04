import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import ctaBackground from "@/assets/cta-background.png";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={ctaBackground} 
          alt="Digital growth visualization" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background" />
      </div>
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-indigo/60 via-brand-purple/30 to-brand-indigo/60" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      {/* Floating Bubbles */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-brand-purple/30 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-brand-blue/30 rounded-full blur-2xl animate-float animation-delay-400" />
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-brand-orange/30 rounded-full blur-2xl animate-float animation-delay-800" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Glassmorphism Card */}
          <div className="relative">
            {/* Outer Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-orange rounded-3xl opacity-50 blur-xl" />
            
            <div className="relative glass-strong rounded-3xl p-8 md:p-16 text-center">
              {/* Icon */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-purple flex items-center justify-center"
              >
                <Rocket className="w-10 h-10 text-primary-foreground" />
              </motion.div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Ready to{" "}
                <span className="text-gradient">Transform</span>
                {" "}Your{" "}
                <span className="text-gradient-secondary">Digital Presence?</span>
              </h2>

              {/* Description */}
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Let's discuss how we can help your business grow with our proven digital 
                marketing strategies. Get a free consultation and strategy report today.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                  View Our Work
                </Button>
              </div>

              {/* Trust Badge */}
              <div className="mt-10 pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  ⭐ Rated 4.9/5 by 150+ clients across Tamil Nadu
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
