import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import { motion } from "framer-motion";
import { ArrowRight, PenTool, Users, Star, BarChart3, CheckCircle, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import serviceSocial from "@/assets/service-social.png";

const faqs = [
  {
    question: "Which social media platforms do you manage?",
    answer: "We manage all major platforms including Facebook, Instagram, LinkedIn, Twitter/X, YouTube, and Pinterest. We'll recommend the best platforms based on your target audience and business goals."
  },
  {
    question: "How often will you post on my social media?",
    answer: "Posting frequency depends on your package and platform. Typically, we recommend 3-5 posts per week for most platforms, with daily engagement and community management."
  },
  {
    question: "Do you create the content or do I need to provide it?",
    answer: "We handle everything! Our team creates engaging content including graphics, captions, and hashtag strategies. We'll work with you to understand your brand voice and messaging."
  },
  {
    question: "How do you measure social media success?",
    answer: "We track key metrics including engagement rate, follower growth, reach, website traffic from social, and conversions. You'll receive monthly reports with insights and recommendations."
  },
];

const features = [
  { icon: PenTool, title: "Content Strategy", description: "Custom content calendars aligned with your brand and goals" },
  { icon: Users, title: "Community Management", description: "Active engagement with your audience to build loyalty" },
  { icon: Star, title: "Influencer Marketing", description: "Connect with relevant influencers to expand reach" },
  { icon: BarChart3, title: "Analytics & Reporting", description: "Detailed insights on performance and growth" },
];

const SocialMediaService = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-blue" />
                <span className="text-sm font-medium text-muted-foreground">Social Media Services</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Social Media <span className="text-gradient">Marketing</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Build meaningful connections with your audience across all social platforms. Our creative campaigns drive engagement, grow your following, and build lasting brand loyalty.
              </p>
              
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Boost Your Social Presence <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-blue/20 to-brand-purple/20 rounded-3xl blur-2xl" />
              <img 
                src={serviceSocial} 
                alt="Social Media Marketing Services"
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
              Comprehensive social media management to grow your brand and engage your audience.
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
                <div className="w-14 h-14 rounded-xl bg-brand-blue/20 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-brand-blue" />
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
                Why Choose Our <span className="text-gradient">Social Media Services</span>?
              </h2>
              <div className="space-y-4">
                {[
                  "Dedicated social media manager for your brand",
                  "Custom content creation and curation",
                  "Strategic posting schedule optimization",
                  "Real-time engagement and response management",
                  "Monthly performance reports and insights",
                  "Continuous strategy optimization"
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0" />
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
                  { step: "01", title: "Brand Discovery", desc: "Understand your brand voice and target audience" },
                  { step: "02", title: "Strategy Creation", desc: "Develop a tailored social media strategy" },
                  { step: "03", title: "Content Production", desc: "Create engaging content for all platforms" },
                  { step: "04", title: "Growth & Optimization", desc: "Monitor, engage, and optimize for results" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="text-3xl font-bold text-brand-blue/30">{item.step}</span>
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
                    <Minus className="w-5 h-5 text-brand-blue flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-brand-blue flex-shrink-0" />
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
              Ready to <span className="text-gradient">Go Viral</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's create a social media strategy that gets your brand noticed and loved.
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

export default SocialMediaService;