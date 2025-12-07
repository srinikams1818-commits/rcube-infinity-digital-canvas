import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
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

const sectors = [
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Digital marketing solutions for hospitals, clinics, pharmacies, and healthcare providers. Build trust and reach patients effectively.",
    features: ["Patient Acquisition", "Reputation Management", "Healthcare SEO", "Telemedicine Marketing"],
    color: "brand-blue"
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Restaurant",
    description: "Mouth-watering marketing campaigns for restaurants, cafes, cloud kitchens, and food brands. Drive footfall and online orders.",
    features: ["Social Media", "Food Photography", "Delivery App Marketing", "Local SEO"],
    color: "brand-orange"
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Strategic marketing for schools, colleges, coaching centers, and ed-tech platforms. Attract students and build enrollment.",
    features: ["Lead Generation", "Content Marketing", "Virtual Tours", "Student Engagement"],
    color: "brand-purple"
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "High-impact marketing for builders, agents, and property developers. Showcase properties and generate quality leads.",
    features: ["Virtual Tours", "Lead Generation", "Property Listings", "Targeted Ads"],
    color: "brand-blue"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Complete digital solutions for online stores. Drive traffic, increase conversions, and scale your e-commerce business.",
    features: ["Conversion Optimization", "Product Marketing", "Shopping Ads", "Email Campaigns"],
    color: "brand-orange"
  },
  {
    icon: Hotel,
    title: "Hospitality",
    description: "Marketing excellence for hotels, resorts, and travel businesses. Create memorable experiences and drive bookings.",
    features: ["Booking Optimization", "Review Management", "Travel Marketing", "Social Presence"],
    color: "brand-purple"
  },
  {
    icon: Car,
    title: "Automotive",
    description: "Accelerate growth for dealerships, service centers, and automotive brands. Drive test drives and service bookings.",
    features: ["Inventory Marketing", "Service Campaigns", "Local Targeting", "Video Content"],
    color: "brand-blue"
  },
  {
    icon: Shirt,
    title: "Fashion & Lifestyle",
    description: "Trend-setting marketing for fashion brands, boutiques, and lifestyle businesses. Build brand desire and drive sales.",
    features: ["Influencer Marketing", "Lookbook Creation", "Social Commerce", "Brand Campaigns"],
    color: "brand-orange"
  },
];

const Sectors = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-purple" />
              <span className="text-sm font-medium text-muted-foreground">Industry Expertise</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Specialized{" "}
              <span className="text-gradient">Industry Solutions</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              We understand the unique challenges and opportunities in your industry. 
              Our tailored strategies deliver results that matter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-${sector.color} to-brand-purple rounded-3xl opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300`} />
                <div className="relative glass-strong rounded-3xl p-8 h-full">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-2xl bg-${sector.color}/20 flex items-center justify-center flex-shrink-0`}>
                      <sector.icon className={`w-8 h-8 text-${sector.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3">{sector.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{sector.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {sector.features.map((feature) => (
                          <span 
                            key={feature}
                            className={`px-3 py-1 text-xs font-medium rounded-full bg-${sector.color}/10 text-${sector.color}`}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Don't See Your <span className="text-gradient">Industry</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We work with businesses across all sectors. Let's discuss how we can help your industry thrive.
            </p>
            <Button variant="hero" size="xl">
              Contact Us <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
};

export default Sectors;
