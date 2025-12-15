import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutCTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 via-brand-blue/10 to-brand-orange/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient">Transform</span> Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Let's discuss how we can help you achieve your digital marketing goals. 
            Our team is ready to create a customized strategy for your success.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="https://wa.me/918438937733">
              <Button variant="heroOutline" size="xl" className="group">
                <Phone className="w-5 h-5" />
                Call Us Now
              </Button>
            </a>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            📞 +91 84389 37733 | 📧 rcubeinfinitysolutions@gmail.com
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTASection;
