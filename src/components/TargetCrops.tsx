import React from 'react';
import { motion } from 'framer-motion';

const TargetCrops: React.FC = () => {
  const crops = [
    {
      category: "Cereals",
      items: ["Rice", "Maize", "Wheat", "Millet", "Sorghum"],
      image: "https://images.pexels.com/photos/221016/pexels-photo-221016.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-yellow-400 to-orange-500"
    },
    {
      category: "Vegetables",
      items: ["Tomatoes", "Pepper", "Onions", "Cabbage", "Lettuce"],
      image: "https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-green-400 to-emerald-500"
    },
    {
      category: "Fruits",
      items: ["Mango", "Citrus", "Banana", "Papaya", "Avocado"],
      image: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-orange-400 to-red-500"
    },
    {
      category: "Cash Crops",
      items: ["Cocoa", "Coffee", "Oil Palm", "Cotton", "Sugarcane"],
      image: "/cash-crop.jpg", 
      color: "from-purple-400 to-pink-500"
    },
    {
      category: "Legumes",
      items: ["Beans", "Cowpea", "Groundnuts", "Soybeans", "Peas"],
      image: "https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-emerald-400 to-teal-500"
    },
    {
      category: "Root Crops",
      items: ["Cassava", "Yam", "Sweet Potato", "Potato", "Ginger"],
      image: "https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-amber-400 to-yellow-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="crops" className="py-20 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
            Suitable for <span className="text-primary-500">All Crops</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Top One Plus is specially formulated to work effectively across a wide range of crops, 
            making it the perfect choice for diverse farming operations.
          </p>
        </motion.div>

        {/* Crops Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {crops.map((crop, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              {/* Image Container */}
              <div className="relative h-48 lg:h-56 overflow-hidden">
                <img
                  src={crop.image}
                  alt={crop.category}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${crop.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-4 py-2 bg-gradient-to-r ${crop.color} text-white font-semibold rounded-full shadow-lg`}>
                  {crop.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {crop.category}
                </h3>
                
                {/* Crop Items */}
                <div className="flex flex-wrap gap-2">
                  {crop.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Benefits Preview */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Expected Yield Increase:</span>
                    <span className="font-bold text-primary-500">50-100%</span>
                  </div>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-primary-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 lg:p-12 border border-green-200 dark:border-green-800">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Universal Application
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto">
              Our scientifically formulated organic fertilizer is safe and effective for all crop types. 
              Whether you're growing food crops, cash crops, or ornamental plants, Top One Plus delivers 
              consistent results across the board.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-400">Crop Varieties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">100%</div>
                <div className="text-gray-600 dark:text-gray-400">Organic Formula</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">24/7</div>
                <div className="text-gray-600 dark:text-gray-400">Crop Protection</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetCrops;