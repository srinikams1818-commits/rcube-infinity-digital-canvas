import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import { motion } from "framer-motion";
import { ArrowRight, Target, FlaskConical, RefreshCcw, LineChart, CheckCircle, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import serviceAds from "@/assets/service-ads.png";

const faqs = [
  {
    question: "How much should I budget for Google Ads?",
    answer: "Budget depends on your industry, competition, and goals. We recommend starting with a minimum of ₹15,000-30,000/month for meaningful results. We'll help you optimize spending for maximum ROI."
  },
  {
    question: "How quickly will I see results from paid ads?",
    answer: "Unlike SEO, paid ads can generate traffic immediately. You can expect to see initial results within the first week, with campaigns typically optimizing for peak performance within 2-4 weeks."
  },
  {
    question: "Do you manage both Google and Meta (Facebook/Instagram) Ads?",
    answer: "Yes! We manage advertising across Google (Search, Display, YouTube, Shopping) and Meta platforms (Facebook, Instagram). We'll recommend the best mix based on your target audience."
  },
  {
    question: "What's included in your ad management services?",
    answer: "Our services include campaign strategy, ad creation, audience targeting, bid management, A/B testing, conversion tracking setup, landing page recommendations, and detailed performance reporting."
  },
];

const features = [
  { icon: Target, title: "Campaign Strategy", description: "Data-driven strategies tailored to your business goals" },
  { icon: FlaskConical, title: "A/B Testing", description: "Continuous testing to optimize ad performance" },
  { icon: RefreshCcw, title: "Retargeting", description: "Re-engage visitors who showed interest in your business" },
  { icon: LineChart, title: "Performance Tracking", description: "Real-time monitoring and detailed reporting" },
];

const GoogleAdsService = () => {
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
                <span className="text-sm font-medium text-muted-foreground">Paid Advertising</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Google & <span className="text-gradient">Meta Ads</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Maximize your ROI with precision-targeted advertising campaigns. We create compelling ads that convert visitors into customers and drive measurable business growth.
              </p>
              
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Start Advertising <ArrowRight className="w-5 h-5 ml-2" />
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
                src={serviceAds} 
                alt="Google & Meta Ads Services"
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
              Full-service paid advertising management for maximum return on your ad spend.
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
                Why Choose Our <span className="text-gradient">Paid Ads Services</span>?
              </h2>
              <div className="space-y-4">
                {[
                  "Google Ads & Meta certified professionals",
                  "Transparent reporting with no hidden fees",
                  "Proven track record of high ROAS campaigns",
                  "Custom landing page optimization",
                  "Advanced audience targeting and segmentation",
                  "Continuous optimization for better results"
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
                  { step: "01", title: "Discovery & Research", desc: "Analyze your market, competitors, and opportunities" },
                  { step: "02", title: "Campaign Setup", desc: "Create optimized campaigns with targeted ads" },
                  { step: "03", title: "Launch & Monitor", desc: "Go live with real-time performance tracking" },
                  { step: "04", title: "Optimize & Scale", desc: "Refine campaigns for maximum ROI" },
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
              Ready to <span className="text-gradient">Boost Your Sales</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's create high-converting ad campaigns that drive real business results.
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

export default GoogleAdsService;