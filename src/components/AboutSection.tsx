import { motion } from "framer-motion";
import { CheckCircle, Zap, Target, TrendingUp } from "lucide-react";
import aboutImage from "@/assets/about-image.png";

const features = [
  { icon: Zap, text: "Data-Driven Strategies" },
  { icon: Target, text: "Precision Marketing" },
  { icon: TrendingUp, text: "Growth Focused" },
  { icon: CheckCircle, text: "Proven Results" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-purple/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Stack */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative Background */}
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 rounded-3xl blur-2xl" />
            
            {/* Main Image Container */}
            <div className="relative">
              {/* Back Layer - Floating Element */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 w-48 h-48 glass rounded-2xl overflow-hidden z-10"
              >
                <div className="w-full h-full bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center">
                  <span className="text-4xl">📊</span>
                </div>
              </motion.div>

              {/* Middle Layer - Floating Element */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 w-40 h-40 glass rounded-2xl overflow-hidden z-10"
              >
                <div className="w-full h-full bg-gradient-to-br from-brand-orange to-brand-purple flex items-center justify-center">
                  <span className="text-4xl">🚀</span>
                </div>
              </motion.div>

              {/* Main Image Card */}
              <div className="relative glass-strong rounded-3xl p-4 ml-8 mt-8 overflow-hidden">
                <img 
                  src={aboutImage} 
                  alt="R Cube Infinity team collaboration with holographic data screens" 
                  className="w-full h-auto rounded-2xl object-cover aspect-square"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-4 rounded-2xl bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Stats Overlay */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="glass rounded-xl px-4 py-3">
                    <h3 className="text-2xl font-bold text-foreground">10+ Years</h3>
                    <p className="text-sm text-muted-foreground">Digital Excellence</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-8 glass rounded-xl px-4 py-2 z-20"
              >
                <span className="text-sm font-semibold text-brand-orange">★ Top Rated</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-purple" />
              <span className="text-sm font-medium text-muted-foreground">About Us</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Empowering{" "}
              <span className="text-gradient">Tamil Nadu</span>
              {" "}Businesses with{" "}
              <span className="text-gradient-secondary">Digital Growth</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              R Cube Infinity helps Tamil Nadu businesses grow through data-backed digital 
              strategies, modern branding, and high-performance marketing execution. 
              We transform your digital presence into a growth engine.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 glass rounded-xl group hover:bg-brand-purple/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-purple/20 flex items-center justify-center group-hover:bg-brand-purple/30 transition-colors">
                    <feature.icon className="w-5 h-5 text-brand-purple" />
                  </div>
                  <span className="font-medium text-foreground">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-bold text-gradient">150+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient-secondary">8+</div>
                <div className="text-sm text-muted-foreground">Tamil Nadu Cities</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient">120%</div>
                <div className="text-sm text-muted-foreground">Avg. Growth</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
