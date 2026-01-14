import { motion } from "framer-motion";
import { Sparkles, Gift, Star, Check, Phone, Globe, Zap, Target, Camera, Code, Search, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const offers = [
  {
    id: "seo",
    icon: Search,
    name: "SEO Services",
    badge: "LIMITED TIME PONGAL OFFER",
    badgeColor: "bg-gradient-to-r from-amber-500 to-orange-500",
    originalPrice: "₹12,000",
    offerPrice: "₹4,500",
    features: [
      "Keyword Research",
      "On-Page & Off-Page SEO",
      "Technical SEO",
      "Google My Business Setup",
      "Local SEO",
      "Competitor Analysis",
      "Content Optimization",
      "Monthly Performance Reports",
      "24/7 Support",
    ],
    cta: "Get Pongal SEO Offer",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: "ads",
    icon: Megaphone,
    name: "Ad Creation & Paid Campaigns",
    badge: null,
    originalPrice: "₹5,000",
    offerPrice: "₹2,000",
    features: [
      "Google Ads",
      "Instagram & Facebook Ads",
      "Lead Generation Campaigns",
      "Audience Targeting",
      "Brand Awareness Ads",
      "A/B Testing & Optimization",
      "Conversion Tracking & Reporting",
      "24/7 Support",
    ],
    cta: "Launch Pongal Ads",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    id: "web",
    icon: Code,
    name: "Website Development",
    badge: null,
    originalPrice: "₹15,000",
    offerPrice: "₹5,500",
    features: [
      "Custom Website Design (7-9 pages)",
      "Dynamic Website",
      "WhatsApp Chat Integration",
      "Free Domain",
      "SSL Certificate",
      "Secure Hosting",
      "Mobile Responsive Design",
      "Fast Loading Speed",
      "SEO-Friendly Structure",
      "Maintenance Support",
      "Future Upgrade Friendly",
    ],
    cta: "Build My Pongal Website",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "advanced-ads",
    icon: Target,
    name: "Advanced Ad Campaign Management",
    badge: "High Conversion Offer",
    badgeColor: "bg-gradient-to-r from-rose-500 to-red-500",
    originalPrice: "₹5,000",
    offerPrice: "₹2,000",
    features: [
      "Google Ads",
      "Instagram & Facebook Ads",
      "Lead Generation Campaigns",
      "Audience Targeting",
      "Brand Awareness Ads",
      "Detailed Targeting Enhancement",
      "Ad Copywriting",
      "Monthly Performance Reports",
      "Competitor Analysis",
      "24/7 Support",
    ],
    cta: "Boost Sales This Pongal",
    gradient: "from-orange-500 to-rose-500",
  },
  {
    id: "creative",
    icon: Camera,
    name: "Photo & Creative Services",
    badge: null,
    originalPrice: "₹5,000",
    offerPrice: "₹2,000",
    features: [
      "Professional Photo Editing",
      "Social Media Creatives",
      "Festival & Event Posters",
      "Brand Design",
      "Reels & Cover Designs",
      "Instagram Reel Thumbnails",
      "Carousel Post Designs",
      "Story Highlight Covers",
      "Instagram Feed Layout Design",
      "Reel Cover Optimization",
    ],
    cta: "Get Creative Pongal Pack",
    gradient: "from-amber-500 to-yellow-500",
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
    // Set target date to January 20th, 2025
    const targetDate = new Date("2025-01-20T23:59:59").getTime();

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
    <section className="py-16 relative overflow-hidden bg-gradient-to-br from-amber-50/30 via-background to-green-50/30 dark:from-amber-900/10 dark:via-background dark:to-green-900/10">
      {/* Pongal-themed Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,hsl(45,100%,50%,0.3),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,hsl(120,60%,40%,0.3),transparent_50%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,hsl(30,100%,50%,0.2),transparent_60%)]" />
      </div>

      {/* Decorative Kolam-inspired patterns */}
      <div className="absolute top-10 left-10 w-32 h-32 border-4 border-amber-400/20 rounded-full" />
      <div className="absolute top-10 left-10 w-24 h-24 border-4 border-green-500/20 rounded-full translate-x-4 translate-y-4" />
      <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-orange-400/20 rounded-full" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-amber-500/20 rounded-full translate-x-4 translate-y-4" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-100 to-green-100 dark:from-amber-900/30 dark:to-green-900/30 border border-amber-300/50 mb-6">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <span className="text-sm font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wide">🎉 Pongal Special Offers 🎉</span>
            <Sparkles className="w-5 h-5 text-amber-600" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-green-600 bg-clip-text text-transparent">
              Pongal Special
            </span>{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Digital Growth Offers!
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Celebrate this Pongal by growing your business with powerful and affordable digital marketing solutions.
          </p>

          {/* Countdown Timer */}
          <div className="inline-block bg-gradient-to-r from-amber-100 via-orange-100 to-green-100 dark:from-amber-900/40 dark:via-orange-900/40 dark:to-green-900/40 rounded-2xl p-6 border border-amber-300/50">
            <p className="text-sm text-amber-700 dark:text-amber-400 font-bold mb-4 flex items-center justify-center gap-2 uppercase tracking-wide">
              <Star className="w-4 h-4" fill="currentColor" />
              Limited Time Offer – Valid Till January 20, 2025
              <Star className="w-4 h-4" fill="currentColor" />
            </p>
            <div className="flex gap-3 justify-center">
              {countdownItems.map((item, index) => (
                <motion.div 
                  key={item.label} 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-4 min-w-[70px] shadow-lg"
                >
                  <div className="text-3xl font-bold text-white">{item.value}</div>
                  <div className="text-xs text-amber-100 uppercase tracking-wide">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Offer Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Badge */}
              {offer.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className={`px-4 py-1.5 ${offer.badgeColor} text-white text-xs font-bold rounded-full uppercase tracking-wide shadow-lg`}>
                    {offer.badge}
                  </span>
                </div>
              )}
              
              {/* Card */}
              <div className={`bg-card border border-border rounded-2xl overflow-hidden h-full transition-all duration-300 group-hover:shadow-xl group-hover:border-amber-400/50 ${offer.badge ? 'ring-2 ring-amber-400/50' : ''}`}>
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${offer.gradient} p-5`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <offer.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {offer.name}
                    </h3>
                  </div>
                  
                  {/* Pricing */}
                  <div className="flex items-center gap-3">
                    <span className="text-white/70 line-through text-lg">{offer.originalPrice}</span>
                    <span className="text-3xl font-bold text-white">{offer.offerPrice}</span>
                    <span className="px-2 py-1 bg-white/20 rounded-lg text-white text-xs font-bold uppercase">Save Big!</span>
                  </div>
                </div>
                
                {/* Features */}
                <div className="p-5">
                  <ul className="space-y-2.5 mb-6">
                    {offer.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <a 
                    href={`https://wa.me/918438937733?text=Hi! I'm interested in the ${offer.name} Pongal offer at ${offer.offerPrice}`}
                    className="block"
                  >
                    <Button 
                      variant="hero" 
                      className="w-full group/btn bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      {offer.cta}
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-amber-100 via-orange-100 to-green-100 dark:from-amber-900/30 dark:via-orange-900/30 dark:to-green-900/30 rounded-2xl p-8 border border-amber-300/50">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Grow Your Business This Pongal? 🌾
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Don't miss these exclusive Pongal offers! Contact us now and take your business to the next level.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a href="https://wa.me/918438937733?text=Hi! I'm interested in the Pongal Special offers">
                <Button variant="hero" size="xl" className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600">
                  <Gift className="w-5 h-5 mr-2" />
                  Claim Pongal Offer
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" size="xl" className="border-amber-500 text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/20">
                  Get Free Consultation
                </Button>
              </Link>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 border-t border-amber-300/30">
              <a href="tel:+918438937733" className="flex items-center gap-2 text-foreground hover:text-amber-600 transition-colors">
                <Phone className="w-5 h-5 text-amber-500" />
                <span className="font-semibold">Call / WhatsApp: 84389 37733</span>
              </a>
              <a href="https://rcubeinfintysolutions.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-amber-600 transition-colors">
                <Globe className="w-5 h-5 text-amber-500" />
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
