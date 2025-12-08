import { motion } from "framer-motion";
import { Sparkles, Gift, Star, Snowflake, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const FestiveOfferSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date to January 1st, 2025
    const targetDate = new Date("2025-01-01T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const countdownItems = [
    { value: String(timeLeft.days).padStart(2, "0"), label: "Days" },
    { value: String(timeLeft.hours).padStart(2, "0"), label: "Hours" },
    { value: String(timeLeft.minutes).padStart(2, "0"), label: "Mins" },
    { value: String(timeLeft.seconds).padStart(2, "0"), label: "Secs" },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Festive Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 via-brand-blue/5 to-brand-orange/5" />
      
      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-10 text-brand-orange/20"
      >
        <Star className="w-16 h-16" fill="currentColor" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 text-brand-blue/20"
      >
        <Snowflake className="w-12 h-12" />
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-1/4 text-brand-purple/20"
      >
        <Snowflake className="w-10 h-10" />
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Glow Border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange via-brand-purple to-brand-blue rounded-3xl opacity-40 blur-lg animate-pulse" />
          
          <div className="relative glass-strong rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Inner Decorative Elements */}
            <div className="absolute top-4 right-4 flex gap-2">
              <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <PartyPopper className="w-8 h-8 text-brand-orange" />
              </motion.div>
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <Gift className="w-8 h-8 text-brand-purple" />
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/30 mb-6"
                >
                  <Sparkles className="w-4 h-4 text-brand-orange" />
                  <span className="text-sm font-semibold text-brand-orange">Christmas & New Year Special</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                >
                  Get <span className="text-gradient-secondary">30% OFF</span>
                  <br />
                  All Services!
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-muted-foreground mb-6"
                >
                  Celebrate the festive season with exclusive discounts on all our digital marketing services. 
                  Limited time offer - kickstart your 2025 growth journey today!
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex flex-wrap gap-3 mb-6"
                >
                  {["SEO Services", "Social Media", "Web Development", "All Packages"].map((item) => (
                    <span 
                      key={item}
                      className="px-3 py-1.5 text-sm font-medium rounded-full bg-brand-purple/10 text-brand-purple border border-brand-purple/20"
                    >
                      {item}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <a href="https://wa.me/919840562374?text=Hi! I'm interested in the FESTIVE30 offer">
                    <Button variant="hero" size="xl" className="group">
                      <Gift className="w-5 h-5 mr-2" />
                      Claim Your Offer
                    </Button>
                  </a>
                </motion.div>
              </div>

              {/* Countdown */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="inline-block">
                  <div className="text-sm text-muted-foreground mb-4">Offer Ends In</div>
                  <div className="grid grid-cols-4 gap-3">
                    {countdownItems.map((item) => (
                      <div key={item.label} className="glass rounded-xl p-4">
                        <div className="text-2xl sm:text-3xl font-bold text-gradient">{item.value}</div>
                        <div className="text-xs text-muted-foreground">{item.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 glass rounded-xl border border-brand-orange/30">
                    <div className="flex items-center justify-center gap-2 text-brand-orange">
                      <Star className="w-5 h-5" fill="currentColor" />
                      <span className="font-semibold">Use Code: FESTIVE30</span>
                      <Star className="w-5 h-5" fill="currentColor" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FestiveOfferSection;
