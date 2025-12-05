import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const combos = [
  {
    icon: Sparkles,
    name: "Starter Growth Pack",
    description: "Perfect for small businesses ready to establish their digital presence.",
    price: "Custom Quote",
    features: [
      "Social Media Marketing (2 platforms)",
      "Basic SEO Setup",
      "5 Graphic Designs/month",
      "Monthly Performance Report",
    ],
    gradient: "from-brand-blue to-brand-purple",
    popular: false,
  },
  {
    icon: Zap,
    name: "Business Accelerator",
    description: "Comprehensive package for businesses ready to scale their growth.",
    price: "Custom Quote",
    features: [
      "Social Media Marketing (4 platforms)",
      "Advanced SEO & Local SEO",
      "Google & Meta Ads Management",
      "10 Graphic Designs/month",
      "Video Editing (2 videos/month)",
      "Email Marketing Setup",
      "Bi-weekly Strategy Calls",
    ],
    gradient: "from-brand-purple to-brand-orange",
    popular: true,
  },
  {
    icon: Crown,
    name: "Enterprise Elite",
    description: "Full-service digital transformation for established brands.",
    price: "Custom Quote",
    features: [
      "Complete Social Media Management",
      "Enterprise SEO Strategy",
      "Full PPC Campaign Management",
      "Unlimited Graphic Designs",
      "Professional Video Production",
      "Photo Editing & Retouching",
      "Custom Web Development",
      "Brand Strategy & Identity",
      "Dedicated Account Manager",
      "Priority Support 24/7",
    ],
    gradient: "from-brand-orange to-brand-blue",
    popular: false,
  },
];

const ComboServicesSection = () => {
  return (
    <section id="combos" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-purple" />
            <span className="text-sm font-medium text-muted-foreground">Combo Packages</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Value-Packed{" "}
            <span className="text-gradient">Combo Services</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Get more value with our carefully curated service bundles designed to maximize 
            your ROI and accelerate your business growth.
          </p>
        </motion.div>

        {/* Combo Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {combos.map((combo, index) => (
            <motion.div
              key={combo.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative group ${combo.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {/* Popular Badge */}
              {combo.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-purple to-brand-orange text-white text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${combo.gradient} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 ${combo.popular ? 'opacity-20' : ''}`} />
              
              {/* Card */}
              <div className={`relative glass-strong rounded-3xl p-8 h-full border transition-all ${combo.popular ? 'border-brand-purple/50' : 'border-border/50 group-hover:border-border'}`}>
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${combo.gradient} flex items-center justify-center mb-6`}>
                  <combo.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Name & Description */}
                <h3 className="text-2xl font-bold text-foreground mb-2">{combo.name}</h3>
                <p className="text-muted-foreground mb-6">{combo.description}</p>
                
                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gradient">{combo.price}</span>
                </div>
                
                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {combo.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${combo.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA */}
                <Button 
                  variant={combo.popular ? "hero" : "heroOutline"} 
                  className="w-full"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-muted-foreground mt-12"
        >
          Need a custom package? <a href="#contact" className="text-brand-purple hover:text-brand-orange transition-colors font-semibold">Contact us</a> for a tailored solution.
        </motion.p>
      </div>
    </section>
  );
};

export default ComboServicesSection;
