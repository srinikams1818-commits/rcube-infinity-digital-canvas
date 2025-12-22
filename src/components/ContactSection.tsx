import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageSquare,
  Building2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      website: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl" />

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
            <MessageSquare className="w-4 h-4 text-brand-purple" />
            <span className="text-sm font-medium text-muted-foreground">Get In Touch</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Let's Start Your{" "}
            <span className="text-gradient">Digital Journey</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Ready to take your business to the next level? Fill out the form below 
            and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="relative">
              {/* Glow Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-orange rounded-3xl opacity-30 blur-sm" />
              
              <form onSubmit={handleSubmit} className="relative glass-strong rounded-3xl p-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="relative group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Full Name"
                      className="w-full px-4 py-4 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email Address"
                      className="w-full px-4 py-4 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative group">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Phone Number"
                      className="w-full px-4 py-4 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-all"
                    />
                  </div>

                  {/* Website */}
                  <div className="relative group">
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="Business Website (optional)"
                      className="w-full px-4 py-4 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-all"
                    />
                  </div>

                  {/* Service Interest */}
                  <div className="sm:col-span-2 relative group">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-muted/50 border border-border rounded-xl text-foreground focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select Service Interest</option>
                      <option value="seo">SEO & Local SEO</option>
                      <option value="social">Social Media Marketing</option>
                      <option value="ads">Google & Meta Ads</option>
                      <option value="web">Web Design & Development</option>
                      <option value="branding">Creative Branding</option>
                      <option value="email">Email & Automation</option>
                      <option value="other">Other / Multiple Services</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2 relative group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-4 bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="xl" 
                  className="w-full mt-6 group"
                >
                  Submit Inquiry
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Office Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-purple to-brand-blue rounded-2xl opacity-30 blur-sm group-hover:opacity-50 transition-opacity" />
              <div className="relative glass-strong rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-purple/20 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Head Office</h3>
                    <p className="text-sm text-muted-foreground">
                      R Cube Infinity Digital Solutions<br />
                      Chennai, Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-orange to-brand-purple rounded-2xl opacity-30 blur-sm group-hover:opacity-50 transition-opacity" />
              <div className="relative glass-strong rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-orange/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Call Us</p>
                    <p className="text-sm font-semibold text-foreground">+91 84389 37733</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email Us</p>
                    <p className="text-sm font-semibold text-foreground">info@rcubeinfinitysolutions.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-purple/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-brand-purple" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Business Hours</p>
                    <p className="text-sm font-semibold text-foreground">Mon - Sat: 9:30 AM - 7 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-blue to-brand-orange rounded-2xl opacity-30 blur-sm" />
              <div className="relative glass-strong rounded-2xl p-6 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-brand-orange mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">
                    Serving all of Tamil Nadu
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
