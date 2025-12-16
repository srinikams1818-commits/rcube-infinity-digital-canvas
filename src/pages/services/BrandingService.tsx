import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import { motion } from "framer-motion";
import { ArrowRight, Palette, BookOpen, Eye, Lightbulb, CheckCircle, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import serviceBranding from "@/assets/service-branding.png";

const faqs = [
  {
    question: "What's included in a brand identity package?",
    answer: "Our brand identity package includes logo design, color palette, typography selection, brand guidelines document, business card design, letterhead, and social media profile designs."
  },
  {
    question: "How many logo concepts will you provide?",
    answer: "We typically provide 3-5 initial logo concepts based on our discovery phase. After your feedback, we refine your chosen concept with unlimited revisions until you're completely satisfied."
  },
  {
    question: "Do you help with brand strategy?",
    answer: "Yes! Brand strategy is the foundation of our branding services. We help define your brand positioning, target audience, brand voice, messaging, and competitive differentiation."
  },
  {
    question: "Can you rebrand an existing business?",
    answer: "Absolutely! We specialize in both new brand creation and rebranding existing businesses. We'll carefully evolve your brand while maintaining recognition with your existing customers."
  },
];

const features = [
  { icon: Palette, title: "Logo Design", description: "Unique, memorable logos that represent your brand essence" },
  { icon: BookOpen, title: "Brand Guidelines", description: "Comprehensive guidelines for consistent brand application" },
  { icon: Eye, title: "Visual Identity", description: "Complete visual system including colors, typography, imagery" },
  { icon: Lightbulb, title: "Brand Strategy", description: "Strategic positioning and messaging for market success" },
];

const BrandingService = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-orange" />
                <span className="text-sm font-medium text-muted-foreground">Branding Services</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Creative <span className="text-gradient">Branding</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Build a memorable brand identity that resonates with your audience. From logos to complete brand guidelines, we craft your visual story that stands out in the market.
              </p>
              
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Build Your Brand <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-orange/20 to-brand-purple/20 rounded-3xl blur-2xl" />
              <img 
                src={serviceBranding} 
                alt="Creative Branding Services"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What's <span className="text-gradient">Included</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete branding solutions to establish a powerful brand presence.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-strong rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-orange/20 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-brand-orange" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Why Choose Our <span className="text-gradient">Branding Services</span>?
              </h2>
              <div className="space-y-4">
                {[
                  "Strategic approach to brand development",
                  "Unique designs that stand out from competition",
                  "Comprehensive brand identity systems",
                  "Unlimited revisions until you're satisfied",
                  "Quick turnaround times",
                  "Expertise across all industries"
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-strong rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Our Process</h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Discovery", desc: "Deep dive into your business, audience, and goals" },
                  { step: "02", title: "Strategy", desc: "Define brand positioning and messaging" },
                  { step: "03", title: "Design", desc: "Create visual identity concepts" },
                  { step: "04", title: "Delivery", desc: "Finalize and deliver complete brand package" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="text-3xl font-bold text-brand-orange/30">{item.step}</span>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-strong rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <span className="font-semibold pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Build a <span className="text-gradient">Memorable Brand</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's create a brand identity that sets you apart from the competition.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Get Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
};

export default BrandingService;