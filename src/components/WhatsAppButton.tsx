import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "919876543210"; // Replace with actual WhatsApp number
  const message = "Hi! I'm interested in your digital marketing services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center"
      >
        {/* Expanded Text */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: 10, width: 0 }}
              animate={{ opacity: 1, x: 0, width: "auto" }}
              exit={{ opacity: 0, x: 10, width: 0 }}
              className="mr-3 overflow-hidden"
            >
              <span className="whitespace-nowrap px-4 py-2 rounded-full bg-[#25D366] text-white text-sm font-medium shadow-lg">
                Message us on WhatsApp
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          {/* Pulse Ring */}
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
          
          {/* Button Background */}
          <div className="relative w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center hover:shadow-xl hover:shadow-[#25D366]/30 transition-shadow">
            <MessageCircle className="w-7 h-7 text-white" />
          </div>
        </motion.div>
      </a>
    </motion.div>
  );
};

export default WhatsAppButton;
