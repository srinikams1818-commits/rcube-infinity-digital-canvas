import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

import locationChennai from "@/assets/location-chennai.png";
import locationCoimbatore from "@/assets/location-coimbatore.png";
import locationMadurai from "@/assets/location-madurai.png";
import locationTrichy from "@/assets/location-trichy.png";
import locationSalem from "@/assets/location-salem.png";
import locationTiruppur from "@/assets/location-tiruppur.png";
import locationErode from "@/assets/location-erode.png";
import locationVellore from "@/assets/location-vellore.png";

const locations = [
  { 
    city: "Chennai", 
    tagline: "Capital of Innovation",
    stats: "50+ Clients",
    image: locationChennai,
  },
  { 
    city: "Coimbatore", 
    tagline: "Manchester of South",
    stats: "30+ Clients",
    image: locationCoimbatore,
  },
  { 
    city: "Madurai", 
    tagline: "Temple City",
    stats: "25+ Clients",
    image: locationMadurai,
  },
  { 
    city: "Trichy", 
    tagline: "Rock Fort City",
    stats: "20+ Clients",
    image: locationTrichy,
  },
  { 
    city: "Salem", 
    tagline: "Steel City",
    stats: "15+ Clients",
    image: locationSalem,
  },
  { 
    city: "Tiruppur", 
    tagline: "Knit Wear Hub",
    stats: "18+ Clients",
    image: locationTiruppur,
  },
  { 
    city: "Erode", 
    tagline: "Turmeric City",
    stats: "12+ Clients",
    image: locationErode,
  },
  { 
    city: "Vellore", 
    tagline: "Fort City",
    stats: "10+ Clients",
    image: locationVellore,
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
                
                <div className="relative glass-strong rounded-2xl overflow-hidden h-full hover:bg-card/90 transition-all">
                  {/* Image */}
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src={location.image} 
                      alt={location.city}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                    
                    {/* Location Pin Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm">
                      <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                      <span className="text-xs font-medium text-foreground">{location.stats}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-gradient transition-all mb-1">
                      {location.city}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {location.tagline}
                    </p>
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
