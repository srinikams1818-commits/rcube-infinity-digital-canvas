import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const FloatingLogoSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center">
          {/* 3D Floating Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mb-10"
          >
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-purple via-brand-blue to-brand-orange opacity-20 blur-2xl animate-pulse-slow" />
            
            {/* Glass Container */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Neon Border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand-purple via-brand-blue to-brand-orange opacity-40 blur-sm" />
              
              {/* Main Card */}
              <div className="relative glass-strong rounded-3xl p-8 w-72 h-72 flex items-center justify-center">
                {/* Inner Glow */}
                <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-brand-purple/10 to-brand-blue/10" />
                
                {/* Logo */}
                <img 
                  src={logo} 
                  alt="R Cube Infinity Solutions" 
                  className="relative z-10 w-48 h-auto object-contain"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center max-w-3xl"
          >
            Where{" "}
            <span className="text-gradient">Creative Intelligence</span>
            {" "}Meets{" "}
            <span className="text-gradient-secondary">Digital Excellence</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-muted-foreground text-center max-w-2xl"
          >
            We don't just deliver services—we build partnerships that empower your brand to thrive in the digital age.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 w-32 h-1 rounded-full bg-gradient-to-r from-brand-purple via-brand-blue to-brand-orange"
          />
        </div>
      </div>
    </section>
  );
};

export default FloatingLogoSection;
