import { motion } from "framer-motion";
import { Sparkles, Gift, Star, Check, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const packages = [
  {
    name: "Website & SEO",
    features: [
      "Website Design & Development",
      "Corporate, Business & Portfolio Sites",
      "Responsive Design",
      "SEO Audit & Keyword Research",
      "Competitor Analysis",
      "On-Page & Technical SEO",
      "Performance Optimization",
    ],
    worth: "₹15,000",
  },
  {
    name: "Creative Branding",
    features: [
      "Creative Design",
      "Social Media Creatives",
      "Brand Posters & Banners",
      "Reels & Thumbnails",
      "Brand Identity",
      "Content Planning",
      "Visual Consistency",
    ],
    worth: "₹17,000+",
  },
  {
    name: "Ads & Lead Generation",
    popular: true,
    features: [
      "Google Ads Management",
      "Facebook & Instagram Ads",
      "Audience Targeting",
      "Lead Generation",
      "Campaign Optimization",
      "Performance Reports",
      "Budget Planning",
      "Conversion Tracking",
    ],
    worth: "₹2,000+/month",
  },
];

const FestiveOfferSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date to January 10th, 2026
    const targetDate = new Date("2026-01-10T23:59:59").getTime();

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
    <section className="py-16 relative overflow-hidden bg-gradient-to-br from-brand-indigo/10 via-background to-brand-purple/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,hsl(var(--brand-purple)/0.3),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,hsl(var(--brand-blue)/0.3),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Sparkles className="w-4 h-4 text-brand-orange" />
            <span className="text-sm font-medium text-muted-foreground">Special Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">ALL-IN-ONE</span>{" "}
            <span className="text-gradient-secondary">DIGITAL COMBO</span>
          </h2>
          <p className="text-lg text-muted-foreground">Grow Your Business Online</p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1 bg-brand-orange text-primary-foreground text-xs font-bold rounded-full uppercase">
                    Most Popular
                  </span>
                </div>
              )}
              <div className={`glass-strong rounded-2xl p-6 h-full ${pkg.popular ? 'ring-2 ring-brand-orange' : ''}`}>
                <h3 className="text-xl font-bold text-foreground mb-4 text-center uppercase tracking-wide">
                  {pkg.name}
                </h3>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center pt-4 border-t border-border/50">
                  <span className="text-sm text-muted-foreground">Worth </span>
                  <span className="text-lg font-bold text-foreground">{pkg.worth}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Discount Badge */}
          <div className="inline-block mb-4">
            <span className="px-6 py-2 bg-gradient-to-r from-brand-orange to-brand-purple text-primary-foreground text-lg font-bold rounded-lg">
              65% OFF
            </span>
          </div>

          {/* Price */}
          <div className="mb-4">
            <span className="text-5xl sm:text-6xl font-bold text-gradient">₹12,999</span>
            <span className="text-2xl font-bold text-foreground ml-2">ONLY</span>
          </div>
          <p className="text-muted-foreground mb-6">(Actual ₹34,000+)</p>

          {/* Countdown */}
          <div className="glass rounded-xl p-4 inline-block mb-8">
            <p className="text-sm text-brand-orange font-semibold mb-3 flex items-center justify-center gap-2">
              <Star className="w-4 h-4" fill="currentColor" />
              Combo Offer Ends On Jan 10
              <Star className="w-4 h-4" fill="currentColor" />
            </p>
            <div className="flex gap-3 justify-center">
              {countdownItems.map((item) => (
                <div key={item.label} className="glass rounded-lg p-3 min-w-[60px]">
                  <div className="text-2xl font-bold text-gradient">{item.value}</div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <a href="https://wa.me/918438937733?text=Hi! I'm interested in the ALL-IN-ONE Digital Combo offer">
              <Button variant="hero" size="xl" className="group">
                <Gift className="w-5 h-5 mr-2" />
                Claim Your Offer Now
              </Button>
            </a>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <a href="tel:+918438937733" className="flex items-center gap-2 text-foreground hover:text-brand-orange transition-colors">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">Call / WhatsApp: 84389 37733</span>
              </a>
              <a href="https://rcubeinfintysolutions.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-brand-orange transition-colors">
                <Globe className="w-5 h-5" />
                <span className="font-semibold">rcubeinfinitysolutions.com</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FestiveOfferSection;
