import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Users, TrendingUp, MapPin, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 45,
    suffix: "+",
    label: "Happy Clients",
    description: "Businesses transformed",
  },
  {
    icon: TrendingUp,
    value: 120,
    suffix: "%",
    label: "Growth Boost",
    description: "Average client growth",
  },
  {
    icon: Award,
    value: 4,
    suffix: "x",
    label: "ROI Increase",
    description: "Return on investment",
  },
  {
    icon: MapPin,
    value: 8,
    suffix: "+",
    label: "Tamil Nadu Cities",
    description: "Serving businesses across",
  },
];

const StatsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Holographic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-indigo/30 to-background" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      
      {/* Glow Strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-orange" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Numbers That{" "}
            <span className="text-gradient">Speak</span>
            {" "}for Themselves
          </h2>
          <p className="text-lg text-muted-foreground">
            Our track record of delivering exceptional results for businesses across Tamil Nadu
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Holographic Card Effect */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-brand-purple via-brand-blue to-brand-orange opacity-30 blur-sm group-hover:opacity-60 transition-opacity" />
              
              <div className="relative glass-strong rounded-2xl p-8 text-center h-full">
                {/* Icon Shadow */}
                <div className="absolute top-4 right-4 opacity-10">
                  <stat.icon className="w-20 h-20" />
                </div>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-brand-purple" />
                </div>

                {/* Counter */}
                <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">
                  {inView && (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      suffix={stat.suffix}
                    />
                  )}
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
