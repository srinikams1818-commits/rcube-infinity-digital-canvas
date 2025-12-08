import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import TeamSection from "@/components/TeamSection";
import AboutCTASection from "@/components/AboutCTASection";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Target, TrendingUp, Users, Award, Globe, Heart } from "lucide-react";
import aboutImage from "@/assets/about-image.png";

const features = [
  { icon: Zap, text: "Data-Driven Strategies" },
  { icon: Target, text: "Precision Marketing" },
  { icon: TrendingUp, text: "Growth Focused" },
  { icon: CheckCircle, text: "Proven Results" },
];

const values = [
  { icon: Heart, title: "Client First", description: "Your success is our priority. We treat every project as if it were our own." },
  { icon: Award, title: "Excellence", description: "We deliver exceptional quality in everything we do, from strategy to execution." },
  { icon: Globe, title: "Innovation", description: "We stay ahead of digital trends to keep your business at the cutting edge." },
  { icon: Users, title: "Partnership", description: "We believe in long-term relationships built on trust and transparency." },
];

const About = () => {
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
              <span className="text-sm font-medium text-muted-foreground">About Us</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Your Trusted{" "}
              <span className="text-gradient">Digital Partner</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              We're a passionate team of digital strategists, designers, and developers 
              dedicated to transforming businesses through innovative digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 rounded-3xl blur-2xl" />
              <div className="relative glass-strong rounded-3xl p-4 overflow-hidden">
                <img 
                  src={aboutImage} 
                  alt="R Cube Infinity team" 
                  className="w-full h-auto rounded-2xl object-cover aspect-square"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Empowering Businesses with{" "}
                <span className="text-gradient-secondary">Digital Excellence</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                R Cube Infinity helps businesses grow through data-backed digital 
                strategies, modern branding, and high-performance marketing execution. 
                We transform your digital presence into a powerful growth engine.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 glass rounded-xl"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-purple/20 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-brand-purple" />
                    </div>
                    <span className="font-medium text-foreground">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-3xl font-bold text-gradient">150+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient-secondary">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
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

      {/* Our Values */}
      <section className="py-24 relative overflow-hidden bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Our <span className="text-gradient">Core Values</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              These principles guide everything we do and define who we are as a company.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-strong rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-purple/20 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-brand-purple" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <AboutCTASection />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
};

export default About;
