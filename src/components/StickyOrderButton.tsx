import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X, ShoppingCart } from 'lucide-react';

const StickyOrderButton: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactOptions = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      action: () => window.open("https://wa.me/233123456789?text=Hello! I'm interested in Top One Plus Organic Fertilizer", "_blank"),
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700"
    },
    {
      icon: Phone,
      label: "Call Now",
      action: () => window.open("tel:+233123456789", "_self"),
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700"
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="mb-4 space-y-3"
          >
            {contactOptions.map((option, index) => (
              <motion.button
                key={option.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
                onClick={option.action}
                className={`flex items-center space-x-3 px-4 py-3 bg-gradient-to-r ${option.color} ${option.hoverColor} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer`}
              >
                <option.icon className="w-5 h-5" />
                <span className="font-medium whitespace-nowrap">{option.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          rotate: isExpanded ? 45 : 0,
          boxShadow: [
            "0 0 0 0 rgba(34, 197, 94, 0.7)",
            "0 0 0 10px rgba(34, 197, 94, 0)",
            "0 0 0 0 rgba(34, 197, 94, 0)"
          ]
        }}
        transition={{ 
          rotate: { duration: 0.3 },
          boxShadow: { duration: 2, repeat: Infinity }
        }}
        className="w-16 h-16 bg-gradient-to-r from-primary-500 to-emerald-500 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 cursor-pointer"
      >
        {isExpanded ? (
          <X className="w-6 h-6" />
        ) : (
          <ShoppingCart className="w-6 h-6" />
        )}
      </motion.button>

      {/* Pulse Animation */}
      {!isExpanded && (
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-full pointer-events-none"
        />
      )}

      {/* Tooltip */}
      {!isExpanded && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute right-full top-1/2 -translate-y-1/2 mr-4 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg whitespace-nowrap pointer-events-none"
        >
          Order Now
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </motion.div>
      )}
    </div>
  );
};

export default StickyOrderButton;