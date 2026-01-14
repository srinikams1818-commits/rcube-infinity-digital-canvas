import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import { motion } from "framer-motion";
import { Stethoscope, Check, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  "Patient Acquisition Campaigns",
  "Healthcare SEO & Local SEO",
  "Reputation Management",
  "Telemedicine Marketing",
  "Google My Business Optimization",
  "Social Media for Healthcare",
  "Patient Testimonial Videos",
  "Healthcare Content Marketing",
];

const HealthcareSector = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Stethoscope className="w-5 h-5 text-brand-blue" />
              <span className="text-sm font-medium text-muted-foreground">Healthcare Industry</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Digital Marketing for{" "}
              <span className="text-gradient">Healthcare</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              Build trust and reach patients effectively with our specialized healthcare 
              digital marketing solutions for hospitals, clinics, and healthcare providers.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/918438937733?text=Hi! I'm interested in Healthcare digital marketing services">
                <Button variant="hero" size="xl">
                  Get Started <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="heroOutline" size="xl">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule a Call
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              What We Offer for <span className="text-gradient">Healthcare</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive digital marketing services tailored for the healthcare industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-strong rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-brand-blue" />
                </div>
                <p className="font-medium text-foreground">{feature}</p>
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
              Ready to Grow Your <span className="text-gradient">Healthcare Business</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can help you reach more patients and build trust online.
            </p>
            <a href="https://wa.me/918438937733?text=Hi! I'm interested in Healthcare digital marketing services">
              <Button variant="hero" size="xl">
                Get Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
};

export default HealthcareSector;
