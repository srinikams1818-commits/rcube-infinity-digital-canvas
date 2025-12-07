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
  { icon: Stethoscope, title: "Healthcare", color: "brand-blue" },
  { icon: UtensilsCrossed, title: "Food & Restaurant", color: "brand-orange" },
  { icon: GraduationCap, title: "Education", color: "brand-purple" },
  { icon: Building2, title: "Real Estate", color: "brand-blue" },
  { icon: ShoppingCart, title: "E-commerce", color: "brand-orange" },
  { icon: Hotel, title: "Hospitality", color: "brand-purple" },
  { icon: Car, title: "Automotive", color: "brand-blue" },
  { icon: Shirt, title: "Fashion", color: "brand-orange" },
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
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-${sector.color} to-brand-purple rounded-2xl opacity-0 group-hover:opacity-40 blur-sm transition-all duration-300`} />
              <div className="relative glass-strong rounded-2xl p-6 text-center h-full group-hover:bg-card/90 transition-colors">
                <div className={`w-14 h-14 rounded-xl bg-${sector.color}/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <sector.icon className={`w-7 h-7 text-${sector.color}`} />
                </div>
                <h3 className="font-semibold text-foreground text-sm lg:text-base">{sector.title}</h3>
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
