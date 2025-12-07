import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "10 SEO Strategies That Will Boost Your Rankings in 2025",
    excerpt: "Discover the latest SEO techniques that are proven to improve your search engine visibility and drive organic traffic.",
    category: "SEO",
    author: "Marketing Team",
    date: "Dec 5, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop",
  },
  {
    title: "The Ultimate Guide to Social Media Marketing for Small Businesses",
    excerpt: "Learn how to leverage social media platforms to grow your small business and connect with your target audience.",
    category: "Social Media",
    author: "Marketing Team",
    date: "Dec 3, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
  },
  {
    title: "How to Create High-Converting Landing Pages",
    excerpt: "Master the art of creating landing pages that convert visitors into customers with these proven strategies.",
    category: "Web Design",
    author: "Design Team",
    date: "Dec 1, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    title: "Google Ads vs Meta Ads: Which is Right for Your Business?",
    excerpt: "A comprehensive comparison of the two major advertising platforms to help you make informed marketing decisions.",
    category: "Paid Ads",
    author: "Marketing Team",
    date: "Nov 28, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
  },
  {
    title: "Building a Strong Brand Identity: A Step-by-Step Guide",
    excerpt: "Create a memorable brand that resonates with your audience and sets you apart from the competition.",
    category: "Branding",
    author: "Design Team",
    date: "Nov 25, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop",
  },
  {
    title: "Video Marketing Trends to Watch in 2025",
    excerpt: "Stay ahead of the curve with these emerging video marketing trends that are shaping the industry.",
    category: "Video",
    author: "Creative Team",
    date: "Nov 22, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&h=400&fit=crop",
  },
];

const Blog = () => {
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
              <span className="text-sm font-medium text-muted-foreground">Our Blog</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Insights & <span className="text-gradient">Resources</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest digital marketing trends, tips, and strategies 
              to help your business grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
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
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-brand-purple text-white">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-brand-purple transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-xs text-muted-foreground">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                      <Button variant="ghost" size="sm" className="group/btn p-0 h-auto text-brand-purple hover:text-brand-purple/80">
                        Read More <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <Button variant="heroOutline" size="lg">
              Load More Articles
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

export default Blog;
