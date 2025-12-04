import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
  { city: "Chennai", tagline: "Capital of Innovation" },
  { city: "Coimbatore", tagline: "Manchester of South" },
  { city: "Madurai", tagline: "Temple City" },
  { city: "Trichy", tagline: "Rock Fort City" },
  { city: "Salem", tagline: "Steel City" },
  { city: "Tiruppur", tagline: "Knit Wear Hub" },
  { city: "Erode", tagline: "Turmeric City" },
  { city: "Vellore", tagline: "Fort City" },
];

const LocationsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-brand-indigo/20 to-background" />

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

        {/* Map Section */}
        <div className="relative max-w-5xl mx-auto">
          {/* Tamil Nadu Map Silhouette (Stylized) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] glass-strong rounded-3xl p-8 overflow-hidden"
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 via-transparent to-brand-blue/10" />
            
            {/* Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--brand-purple)) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}
            />

            {/* Locations Grid */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4 h-full content-center">
              {locations.map((location, index) => (
                <motion.div
                  key={location.city}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <div className="glass rounded-xl p-4 text-center hover:bg-brand-purple/20 transition-colors cursor-pointer">
                    {/* Glow Dot */}
                    <div className="w-4 h-4 mx-auto mb-3 rounded-full bg-brand-orange animate-pulse-glow" />
                    
                    <h3 className="text-lg font-bold text-foreground group-hover:text-gradient transition-all">
                      {location.city}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {location.tagline}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Connection Lines (Decorative) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" preserveAspectRatio="none">
              <defs>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--brand-purple))" />
                  <stop offset="100%" stopColor="hsl(var(--brand-blue))" />
                </linearGradient>
              </defs>
              <line x1="25%" y1="25%" x2="75%" y2="25%" stroke="url(#line-gradient)" strokeWidth="1" />
              <line x1="25%" y1="75%" x2="75%" y2="75%" stroke="url(#line-gradient)" strokeWidth="1" />
              <line x1="25%" y1="25%" x2="25%" y2="75%" stroke="url(#line-gradient)" strokeWidth="1" />
              <line x1="75%" y1="25%" x2="75%" y2="75%" stroke="url(#line-gradient)" strokeWidth="1" />
              <line x1="50%" y1="25%" x2="50%" y2="75%" stroke="url(#line-gradient)" strokeWidth="1" />
            </svg>
          </motion.div>

          {/* SEO Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto"
          >
            R Cube Infinity provides digital marketing services including SEO, social media marketing, 
            web development, and branding solutions to businesses in Chennai, Coimbatore, Madurai, 
            Trichy, Salem, Tiruppur, Erode, Vellore, and all across Tamil Nadu.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
