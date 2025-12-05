import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
    image: serviceSeo,
    title: "SEO & Local SEO",
    description: "Dominate search rankings with data-driven strategies that attract high-intent customers and establish your authority online.",
    gradient: "from-brand-purple to-brand-blue",
  },
  {
    image: serviceSocial,
    title: "Social Media Marketing",
    description: "Build meaningful connections with your audience through compelling content that sparks engagement and drives loyalty.",
    gradient: "from-brand-orange to-brand-purple",
  },
  {
    image: serviceAds,
    title: "Google & Meta Ads",
    description: "Maximize every rupee with precision-targeted campaigns that reach the right people at the right moment.",
    gradient: "from-brand-blue to-brand-purple",
  },
  {
    image: serviceWeb,
    title: "Web Design & Development",
    description: "Create stunning, lightning-fast websites that captivate visitors and convert them into loyal customers.",
    gradient: "from-brand-purple to-brand-orange",
  },
  {
    image: serviceBranding,
    title: "Creative Branding",
    description: "Develop a distinctive brand identity that tells your unique story and resonates deeply with your audience.",
    gradient: "from-brand-orange to-brand-blue",
  },
  {
    image: serviceEmail,
    title: "Email & Automation",
    description: "Nurture leads and boost retention with intelligent workflows that deliver the right message at the perfect time.",
    gradient: "from-brand-blue to-brand-orange",
  },
  {
    image: serviceVideo,
    title: "Video Editing",
    description: "Transform raw footage into cinematic masterpieces that captivate audiences and amplify your brand story.",
    gradient: "from-brand-purple to-brand-blue",
  },
  {
    image: servicePhoto,
    title: "Photo Editing",
    description: "Elevate your visuals with professional retouching and color grading that makes every image unforgettable.",
    gradient: "from-brand-orange to-brand-purple",
  },
  {
    image: serviceGraphic,
    title: "Graphic Design",
    description: "Create eye-catching designs that communicate your message clearly and leave a lasting visual impression.",
    gradient: "from-brand-blue to-brand-orange",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-orange" />
            <span className="text-sm font-medium text-muted-foreground">Our Services</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive{" "}
            <span className="text-gradient">Digital Solutions</span>
            {" "}for Your Success
          </h2>
          
          <p className="text-lg text-muted-foreground">
            From strategy to execution, we offer end-to-end digital services 
            tailored to help your business stand out and achieve measurable growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />
              
              {/* Card */}
              <div className="relative glass-strong rounded-2xl overflow-hidden h-full border border-border/50 group-hover:border-border transition-colors">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 pt-2">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-brand-purple group-hover:text-brand-orange transition-colors">
                    Learn More
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
