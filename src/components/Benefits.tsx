import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Shield, Leaf, Droplets, 
  Zap, Heart, Sun, CheckCircle,
  ArrowRight, Star, Target
} from 'lucide-react';

const Benefits: React.FC = () => {
  const primaryBenefits = [
    {
      icon: TrendingUp,
      title: "Double Your Harvest",
      description: "Scientifically proven to increase crop yields by up to 100% through enhanced nutrient absorption and plant metabolism.",
      stat: "100%",
      statLabel: "Yield Increase",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      icon: Shield,
      title: "Natural Protection",
      description: "Strengthens plant immune systems, providing natural resistance against diseases, pests, and environmental stress.",
      stat: "85%",
      statLabel: "Disease Reduction",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: Heart,
      title: "Enhanced Quality",
      description: "Improves taste, nutritional content, and shelf life of fruits and vegetables through optimized plant health.",
      stat: "90%",
      statLabel: "Quality Improvement",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50 dark:bg-red-900/20"
    }
  ];

  const secondaryBenefits = [
    {
      icon: Droplets,
      title: "Water Efficiency",
      description: "Reduces water requirements while maintaining optimal hydration",
      color: "text-cyan-500"
    },
    {
      icon: Zap,
      title: "Fast Acting",
      description: "Quick absorption with visible results within 7-14 days",
      color: "text-yellow-500"
    },
    {
      icon: Leaf,
      title: "100% Organic",
      description: "Pure seaweed extract with no harmful chemicals",
      color: "text-emerald-500"
    },
    {
      icon: Sun,
      title: "All Weather",
      description: "Effective in all climatic conditions year-round",
      color: "text-orange-500"
    },
    {
      icon: CheckCircle,
      title: "Soil Health",
      description: "Improves soil structure and beneficial microorganisms",
      color: "text-purple-500"
    },
    {
      icon: Target,
      title: "Precision Formula",
      description: "Scientifically balanced for optimal plant nutrition",
      color: "text-indigo-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="benefits" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            <span>Proven Results</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-heading font-black text-gray-900 dark:text-white mb-6">
            Why Farmers Choose
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent">
              Top One Plus
            </span>
            <br/>
             <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Organic Fertilizer
              </p>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Experience the revolutionary power of premium seaweed extract that transforms 
            agricultural productivity while maintaining complete environmental sustainability.
          </p>
        </motion.div>

        {/* Primary Benefits */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-20"
        >
          {primaryBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className={`group relative ${benefit.bgColor} rounded-3xl p-8 lg:p-10 hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 overflow-hidden`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`relative w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <benefit.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-lg">
                  {benefit.description}
                </p>

                {/* Stat */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className={`text-4xl font-black bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                      {benefit.stat}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {benefit.statLabel}
                    </div>
                  </div>
                  <ArrowRight className={`w-6 h-6 text-gray-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all duration-300`} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Secondary Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20"
        >
          {secondaryBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              {/* Icon */}
              <div className={`w-12 h-12 lg:w-14 lg:h-14 ${benefit.color} bg-opacity-10 dark:bg-opacity-20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className={`w-6 h-6 lg:w-7 lg:h-7 ${benefit.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-lg lg:text-xl font-heading font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <div className="relative bg-gradient-to-r from-primary-500 via-emerald-500 to-green-500 rounded-3xl p-12 lg:p-16 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.4%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
            </div>
            
            <div className="relative">
              <h3 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                Ready to Transform Your Harvest?
              </h3>
              <p className="text-xl lg:text-2xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
                Join over 10,000 farmers who have already experienced incredible results. 
                Start your journey to higher yields and healthier crops today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group px-10 py-4 bg-white text-primary-600 font-bold rounded-2xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
                >
                  <span>Get Application Guide</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button 
                  onClick={() => document.getElementById('science')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  Learn the Science
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;