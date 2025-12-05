import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "CEO, TechCorp Chennai",
    initials: "RK",
    rating: 5,
    text: "R Cube Infinity transformed our digital presence completely. Our organic traffic increased by 300% within 6 months. Their SEO expertise is unmatched in Tamil Nadu.",
    location: "Chennai",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Founder, StyleHub",
    initials: "PS",
    rating: 5,
    text: "The social media strategy they developed for our fashion brand was brilliant. We saw a 4x increase in engagement and our sales doubled in just 3 months.",
    location: "Coimbatore",
  },
  {
    id: 3,
    name: "Arun Venkatesh",
    role: "Director, AutoParts Plus",
    initials: "AV",
    rating: 5,
    text: "Their Google Ads management is exceptional. We're getting quality leads at 50% lower cost compared to our previous agency. Highly recommended!",
    location: "Madurai",
  },
  {
    id: 4,
    name: "Lakshmi Narayanan",
    role: "Owner, Heritage Hotels",
    initials: "LN",
    rating: 5,
    text: "The website they designed for our hotel chain is stunning. Bookings have increased by 200% since launch. True professionals!",
    location: "Trichy",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-3xl" />

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
            <span className="w-2 h-2 rounded-full bg-brand-blue" />
            <span className="text-sm font-medium text-muted-foreground">Testimonials</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What Our{" "}
            <span className="text-gradient">Clients</span>
            {" "}Say
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Success stories from businesses across Tamil Nadu who trusted us with their digital growth
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 z-10 w-12 h-12 rounded-full glass hover:bg-brand-purple/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 z-10 w-12 h-12 rounded-full glass hover:bg-brand-purple/20"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Testimonial Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-orange rounded-3xl opacity-20 blur-xl" />
                
                <div className="relative glass-strong rounded-3xl p-8 md:p-12">
                  {/* Quote Icon */}
                  <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-brand-purple flex items-center justify-center">
                    <Quote className="w-6 h-6 text-primary-foreground" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-brand-orange text-brand-orange" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                    "{testimonials[currentIndex].text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center">
                      <span className="text-xl font-bold text-primary-foreground">
                        {testimonials[currentIndex].initials}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-xs text-brand-orange mt-1">
                        📍 {testimonials[currentIndex].location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-brand-purple w-8"
                    : "bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
