import { motion } from "framer-motion";
import { 
  Search, 
  Share2, 
  Target, 
  Globe, 
  Palette, 
  Mail,
  ArrowUpRight
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO & Local SEO",
    description: "Dominate search results in Tamil Nadu with our data-driven SEO strategies that drive organic traffic and leads.",
    color: "brand-purple",
    gradient: "from-brand-purple to-brand-blue",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build a powerful social presence that engages your audience and converts followers into customers.",
    color: "brand-orange",
    gradient: "from-brand-orange to-brand-purple",
  },
  {
    icon: Target,
    title: "Google & Meta Ads",
    description: "Maximize ROI with precision-targeted advertising campaigns that reach your ideal customers.",
    color: "brand-blue",
    gradient: "from-brand-blue to-brand-purple",
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Create stunning, high-performance websites that captivate visitors and drive conversions.",
    color: "brand-purple",
    gradient: "from-brand-purple to-brand-orange",
  },
  {
    icon: Palette,
    title: "Creative Branding",
    description: "Develop a distinctive brand identity that sets you apart and resonates with your target audience.",
    color: "brand-orange",
    gradient: "from-brand-orange to-brand-blue",
  },
  {
    icon: Mail,
    title: "Email & Automation",
    description: "Nurture leads and boost retention with intelligent email marketing and automation workflows.",
    color: "brand-blue",
    gradient: "from-brand-blue to-brand-orange",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
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
            From strategy to execution, we offer end-to-end digital marketing services 
            tailored to grow your business in Tamil Nadu and beyond.
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
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500`} />
              
              {/* Card */}
              <div className="relative glass-strong rounded-2xl p-8 h-full border border-border/50 group-hover:border-border transition-colors">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Link */}
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-purple group-hover:text-brand-orange transition-colors">
                  Learn More
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>

                {/* Floating Icon Background */}
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <service.icon className="w-32 h-32" />
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
