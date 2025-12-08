import { motion } from "framer-motion";
import { MapPin, Building2, Users, TrendingUp } from "lucide-react";

const locations = [
  { 
    city: "Chennai", 
    tagline: "Capital of Innovation",
    stats: "50+ Clients",
    icon: Building2,
  },
  { 
    city: "Coimbatore", 
    tagline: "Manchester of South",
    stats: "30+ Clients",
    icon: TrendingUp,
  },
  { 
    city: "Madurai", 
    tagline: "Temple City",
    stats: "25+ Clients",
    icon: Users,
  },
  { 
    city: "Trichy", 
    tagline: "Rock Fort City",
    stats: "20+ Clients",
    icon: Building2,
  },
  { 
    city: "Salem", 
    tagline: "Steel City",
    stats: "15+ Clients",
    icon: TrendingUp,
  },
  { 
    city: "Tiruppur", 
    tagline: "Knit Wear Hub",
    stats: "18+ Clients",
    icon: Users,
  },
  { 
    city: "Erode", 
    tagline: "Turmeric City",
    stats: "12+ Clients",
    icon: Building2,
  },
  { 
    city: "Vellore", 
    tagline: "Fort City",
    stats: "10+ Clients",
    icon: TrendingUp,
  },
];

const LocationsSection = () => {
  return (
    <section id="locations" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-brand-indigo/10 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl" />

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
            <MapPin className="w-4 h-4 text-brand-orange" />
            <span className="text-sm font-medium text-muted-foreground">Our Presence</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Serving Across{" "}
            <span className="text-gradient-secondary">Tamil Nadu</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            From bustling Chennai to the industrial hubs of Coimbatore, we're powering 
            digital growth for businesses across the state
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="relative h-full">
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-purple to-brand-blue rounded-2xl opacity-0 group-hover:opacity-40 blur-sm transition-all duration-300" />
                
                <div className="relative glass-strong rounded-2xl p-6 h-full hover:bg-card/90 transition-all">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <location.icon className="w-6 h-6 text-brand-purple" />
                  </div>
                  
                  {/* Location Pin */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-brand-orange animate-pulse" />
                    <h3 className="text-lg font-bold text-foreground group-hover:text-gradient transition-all">
                      {location.city}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    {location.tagline}
                  </p>
                  
                  <div className="text-xs font-semibold text-brand-purple">
                    {location.stats}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SEO Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-12 max-w-2xl mx-auto"
        >
          R Cube Infinity provides digital marketing services including SEO, social media marketing, 
          web development, and branding solutions to businesses in Chennai, Coimbatore, Madurai, 
          Trichy, Salem, Tiruppur, Erode, Vellore, and all across Tamil Nadu.
        </motion.p>
      </div>
    </section>
  );
};

export default LocationsSection;
