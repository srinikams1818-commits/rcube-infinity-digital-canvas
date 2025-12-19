import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import { motion } from "framer-motion";
import { ArrowRight, Search, MapPin, Link2, TrendingUp, CheckCircle, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import serviceSeo from "@/assets/service-seo.png";

const faqs = [
  {
    question: "How long does it take to see SEO results?",
    answer: "SEO is a long-term strategy. Typically, you can start seeing initial improvements within 3-6 months, with more significant results appearing after 6-12 months of consistent optimization efforts."
  },
  {
    question: "What is Local SEO and why is it important?",
    answer: "Local SEO focuses on optimizing your online presence to attract customers from local searches. It's crucial for businesses serving specific geographic areas, helping you appear in 'near me' searches and Google Maps results."
  },
  {
    question: "Do you guarantee first page rankings?",
    answer: "While we don't guarantee specific rankings (as no ethical SEO company can), we guarantee our best efforts using proven strategies that have consistently delivered results for our clients across various industries."
  },
  {
    question: "What's included in your SEO services?",
    answer: "Our comprehensive SEO services include keyword research, on-page optimization, technical SEO, content strategy, link building, local SEO optimization, and regular performance reporting."
  },
];

const features = [
  { icon: Search, title: "Keyword Research", description: "In-depth analysis to identify high-value keywords for your business" },
  { icon: TrendingUp, title: "On-Page Optimization", description: "Optimize content, meta tags, and site structure for search engines" },
  { icon: MapPin, title: "Local Listings", description: "Manage and optimize your Google My Business and local citations" },
  { icon: Link2, title: "Link Building", description: "Build high-quality backlinks to increase domain authority" },
];

const SeoService = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-purple" />
                <span className="text-sm font-medium text-muted-foreground">SEO Services</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                SEO & <span className="text-gradient">Local SEO</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Dominate search results with our data-driven SEO strategies. We optimize your online presence to attract local customers and drive organic growth for sustainable business success.
              </p>
              
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Get Free SEO Audit <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-purple/20 to-brand-blue/20 rounded-3xl blur-2xl" />
              <img 
                src={serviceSeo} 
                alt="SEO & Local SEO Services"
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
              Our comprehensive SEO services cover everything you need to rank higher and attract more customers.
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
                <div className="w-14 h-14 rounded-xl bg-brand-purple/20 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-brand-purple" />
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
                Why Choose Our <span className="text-gradient">SEO Services</span>?
              </h2>
              <div className="space-y-4">
                {[
                  "Proven track record of improving search rankings",
                  "Transparent reporting and regular updates",
                  "Customized strategies for your industry",
                  "Focus on ROI-driven results",
                  "Ethical white-hat SEO practices",
                  "Dedicated SEO specialist for your account"
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-brand-purple flex-shrink-0" />
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
              <h3 className="text-2xl font-bold mb-6">Our SEO Process</h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Audit & Analysis", desc: "We analyze your current SEO status and competitors" },
                  { step: "02", title: "Strategy Development", desc: "Create a customized SEO roadmap for your goals" },
                  { step: "03", title: "Implementation", desc: "Execute on-page and off-page optimization" },
                  { step: "04", title: "Monitor & Optimize", desc: "Track results and continuously improve" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="text-3xl font-bold text-brand-purple/30">{item.step}</span>
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
                    <Minus className="w-5 h-5 text-brand-purple flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-brand-purple flex-shrink-0" />
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
              Ready to <span className="text-gradient">Rank Higher</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how our SEO services can help your business dominate search results.
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

export default SeoService;