import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import serviceSeo from "@/assets/service-seo.png";
import serviceSocial from "@/assets/service-social.png";
import serviceAds from "@/assets/service-ads.png";
import serviceWeb from "@/assets/service-web.png";
import serviceBranding from "@/assets/service-branding.png";
import serviceEmail from "@/assets/service-email.png";
import serviceVideo from "@/assets/service-video.png";
import servicePhoto from "@/assets/service-photo.png";
import serviceGraphic from "@/assets/service-graphic.png";

const services = [
  {
    title: "SEO & Local SEO",
    description: "Dominate search results with our data-driven SEO strategies. We optimize your online presence to attract local customers and drive organic growth.",
    image: serviceSeo,
    features: ["Keyword Research", "On-Page Optimization", "Local Listings", "Link Building"],
  },
  {
    title: "Social Media Marketing",
    description: "Build meaningful connections with your audience across all social platforms. Our creative campaigns drive engagement and brand loyalty.",
    image: serviceSocial,
    features: ["Content Strategy", "Community Management", "Influencer Marketing", "Analytics"],
  },
  {
    title: "Google & Meta Ads",
    description: "Maximize your ROI with precision-targeted advertising campaigns. We create compelling ads that convert visitors into customers.",
    image: serviceAds,
    features: ["Campaign Strategy", "A/B Testing", "Retargeting", "Performance Tracking"],
  },
  {
    title: "Web Development",
    description: "Create stunning, high-performance websites that captivate visitors and drive conversions. Modern design meets cutting-edge technology.",
    image: serviceWeb,
    features: ["Responsive Design", "E-commerce", "CMS Integration", "Speed Optimization"],
  },
  {
    title: "Creative Branding",
    description: "Build a memorable brand identity that resonates with your audience. From logos to complete brand guidelines, we craft your visual story.",
    image: serviceBranding,
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
  },
  {
    title: "Email Marketing",
    description: "Nurture leads and drive sales with personalized email campaigns. Our automation strategies keep your audience engaged.",
    image: serviceEmail,
    features: ["Email Automation", "Newsletter Design", "Segmentation", "Analytics"],
  },
  {
    title: "Video Editing",
    description: "Transform raw footage into compelling visual stories. Professional video editing that captivates and converts your audience.",
    image: serviceVideo,
    features: ["Commercial Videos", "Social Media Content", "Motion Graphics", "Color Grading"],
  },
  {
    title: "Photo Editing",
    description: "Elevate your visual content with professional photo editing. From product photography to creative retouching.",
    image: servicePhoto,
    features: ["Product Photography", "Retouching", "Background Removal", "Color Correction"],
  },
  {
    title: "Graphic Design",
    description: "Eye-catching designs that communicate your message effectively. From marketing materials to digital assets.",
    image: serviceGraphic,
    features: ["Marketing Materials", "Social Graphics", "Presentations", "Print Design"],
  },
];

const Services = () => {
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
              <span className="text-sm font-medium text-muted-foreground">Our Services</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Comprehensive{" "}
              <span className="text-gradient">Digital Solutions</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              From strategy to execution, we offer end-to-end digital marketing services 
              tailored to help your business thrive in the digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-purple to-brand-blue rounded-3xl opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300" />
                <div className="relative glass-strong rounded-3xl overflow-hidden h-full">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature) => (
                        <span 
                          key={feature}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-brand-purple/10 text-brand-purple"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="group/btn p-0 h-auto text-brand-purple hover:text-brand-purple/80">
                      Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
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
              Ready to <span className="text-gradient">Transform</span> Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how our services can help you achieve your digital marketing goals.
            </p>
            <Button variant="hero" size="xl">
              Get Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
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

export default Services;
