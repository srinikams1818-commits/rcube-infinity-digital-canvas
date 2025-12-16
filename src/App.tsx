import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Sectors from "./pages/Sectors";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import SeoService from "./pages/services/SeoService";
import SocialMediaService from "./pages/services/SocialMediaService";
import GoogleAdsService from "./pages/services/GoogleAdsService";
import WebDevelopmentService from "./pages/services/WebDevelopmentService";
import BrandingService from "./pages/services/BrandingService";
import EmailMarketingService from "./pages/services/EmailMarketingService";
import VideoEditingService from "./pages/services/VideoEditingService";
import PhotoEditingService from "./pages/services/PhotoEditingService";
import GraphicDesignService from "./pages/services/GraphicDesignService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/seo" element={<SeoService />} />
          <Route path="/services/social-media" element={<SocialMediaService />} />
          <Route path="/services/google-ads" element={<GoogleAdsService />} />
          <Route path="/services/web-development" element={<WebDevelopmentService />} />
          <Route path="/services/branding" element={<BrandingService />} />
          <Route path="/services/email-marketing" element={<EmailMarketingService />} />
          <Route path="/services/video-editing" element={<VideoEditingService />} />
          <Route path="/services/photo-editing" element={<PhotoEditingService />} />
          <Route path="/services/graphic-design" element={<GraphicDesignService />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
