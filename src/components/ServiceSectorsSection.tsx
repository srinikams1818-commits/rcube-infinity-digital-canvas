import { motion } from "framer-motion";
import { 
  Stethoscope, 
  UtensilsCrossed, 
  GraduationCap, 
  Building2, 
  ShoppingCart, 
  Hotel, 
  Car, 
  Shirt,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const sectors = [
  { 
    icon: Stethoscope, 
    title: "Healthcare", 
    description: "Digital solutions for clinics, hospitals & wellness brands",
    color: "brand-blue",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  { 
    icon: UtensilsCrossed, 
    title: "Food & Restaurant", 
    description: "Grow your restaurant with online ordering & delivery marketing",
    color: "brand-orange",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  { 
    icon: GraduationCap, 
    title: "Education", 
    description: "Attract more students with targeted education marketing",
    color: "brand-purple",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  { 
    icon: Building2, 
    title: "Real Estate", 
    description: "Generate quality leads for properties & developments",
    color: "brand-blue",
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  { 
    icon: ShoppingCart, 
    title: "E-commerce", 
    description: "Scale your online store with performance marketing",
    color: "brand-orange",
    gradient: "from-orange-500/20 to-yellow-500/20",
  },
  { 
    icon: Hotel, 
    title: "Hospitality", 
    description: "Increase bookings for hotels, resorts & travel businesses",
    color: "brand-purple",
    gradient: "from-purple-500/20 to-violet-500/20",
  },
  { 
    icon: Car, 
    title: "Automotive", 
    description: "Drive showroom visits & service bookings",
    color: "brand-blue",
    gradient: "from-blue-500/20 to-sky-500/20",
  },
  { 
    icon: Shirt, 
    title: "Fashion", 
    description: "Build brand awareness for fashion & lifestyle brands",
    color: "brand-orange",
    gradient: "from-orange-500/20 to-pink-500/20",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${sector.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300`} />
              <div className="relative glass-strong rounded-2xl p-6 h-full group-hover:bg-card/90 transition-colors">
                {/* Icon with gradient background */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${sector.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <sector.icon className={`w-7 h-7 text-${sector.color}`} />
                </div>
                
                <h3 className="font-bold text-foreground text-lg mb-2">{sector.title}</h3>
                <p className="text-sm text-muted-foreground">{sector.description}</p>
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
