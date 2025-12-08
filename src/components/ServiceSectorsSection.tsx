import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import sectorHealthcare from "@/assets/sector-healthcare.png";
import sectorFood from "@/assets/sector-food.png";
import sectorEducation from "@/assets/sector-education.png";
import sectorRealestate from "@/assets/sector-realestate.png";
import sectorEcommerce from "@/assets/sector-ecommerce.png";
import sectorHospitality from "@/assets/sector-hospitality.png";
import sectorAutomotive from "@/assets/sector-automotive.png";
import sectorFashion from "@/assets/sector-fashion.png";

const sectors = [
  { 
    title: "Healthcare", 
    description: "Digital solutions for clinics & hospitals",
    image: sectorHealthcare,
  },
  { 
    title: "Food & Restaurant", 
    description: "Grow with online ordering & delivery",
    image: sectorFood,
  },
  { 
    title: "Education", 
    description: "Attract more students online",
    image: sectorEducation,
  },
  { 
    title: "Real Estate", 
    description: "Generate quality property leads",
    image: sectorRealestate,
  },
  { 
    title: "E-commerce", 
    description: "Scale your online store",
    image: sectorEcommerce,
  },
  { 
    title: "Hospitality", 
    description: "Increase hotel bookings",
    image: sectorHospitality,
  },
  { 
    title: "Automotive", 
    description: "Drive showroom visits",
    image: sectorAutomotive,
  },
  { 
    title: "Fashion", 
    description: "Build brand awareness",
    image: sectorFashion,
  },
];

const ServiceSectorsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-muted/30">
      {/* Background Elements */}
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
            <span className="w-2 h-2 rounded-full bg-brand-orange" />
            <span className="text-sm font-medium text-muted-foreground">Industry Expertise</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Specialized Solutions for{" "}
            <span className="text-gradient">Every Industry</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            We understand the unique challenges and opportunities in your industry. 
            Our tailored strategies deliver results that matter.
          </p>
        </motion.div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-purple to-brand-blue rounded-2xl opacity-0 group-hover:opacity-40 blur-sm transition-all duration-300" />
              <div className="relative glass-strong rounded-2xl overflow-hidden h-full group-hover:bg-card/90 transition-colors">
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={sector.image} 
                    alt={sector.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold text-foreground text-lg mb-1">{sector.title}</h3>
                  <p className="text-sm text-muted-foreground">{sector.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link to="/sectors">
            <Button variant="heroOutline" size="lg" className="group">
              Explore All Industries
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSectorsSection;
