import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, Sparkles, Award, Users, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "Increased my tomato yield by 85% in just one season!",
      author: "John Mensah",
      role: "Commercial Farmer",
      location: "Ashanti Region"
    },
    {
      text: "Best organic fertilizer I've ever used for my cocoa farm.",
      author: "Mary Asante",
      role: "Cocoa Farmer",
      location: "Western Region"
    },
    {
      text: "My vegetables are healthier and taste much better now.",
      author: "Kwame Osei",
      role: "Vegetable Farmer",
      location: "Greater Accra"
    }
  ];

  const carouselImages = [
    {
      background: "https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Transform Your Harvest",
      subtitle: "Premium Organic Fertilizer"
    },
    {
      background: "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "100% Natural Solution",
      subtitle: "Seaweed-Based Formula"
    },
    {
      background: "https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Double Your Yields",
      subtitle: "Proven Results"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000); // Reduced from 6000ms to 3000ms
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Image Carousel Background */}
      <div className="absolute inset-0">
        {/* Render all images with opacity transitions */}
        {carouselImages.map((image, index) => (
          <motion.div
            key={index}
            initial={false}
            animate={{
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.05,
            }}
            transition={{ 
              duration: 0.8,
              ease: "easeInOut"
            }}
            className="absolute inset-0"
            style={{ zIndex: currentSlide === index ? 1 : 0 }}
          >
            <img
              src={image.background}
              alt="Farm background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
          </motion.div>
        ))}

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-6 text-sm"
            >
              <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <Award className="w-4 h-4 text-yellow-500" />
                <span className="text-gray-700 font-medium">Certified Organic</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <Users className="w-4 h-4 text-blue-500" />
                <span className="text-gray-700 font-medium">10,000+ Farmers</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-gray-700 font-medium">100% Yield Boost</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-2"
              >
                <h1 className="text-5xl lg:text-7xl xl:text-8xl font-heading font-black text-white leading-none">
                  <span className="bg-gradient-to-r from-primary-400 to-emerald-400 bg-clip-text text-transparent">
                    TOP ONE
                  </span>
                  <br />
                  <span className="text-white">PLUS</span>
                   <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Organic Fertilizer
              </p>
                </h1>
    
                 
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                  <motion.p
                    key={currentSlide}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl lg:text-2xl text-gray-200 font-medium"
                  >
                    {carouselImages[currentSlide].subtitle}
                  </motion.p>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl"
              >
                Transform your harvest with our revolutionary 
                <span className="font-bold text-primary-400"> seaweed-based formula</span> that 
                <span className="font-bold text-emerald-400"> doubles your crop yields</span> naturally.
              </motion.p>
            </div>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "100% Organic", value: "Natural" },
                { label: "Yield Increase", value: "Up to 100%" },
                { label: "Disease Protection", value: "Enhanced" },
                { label: "Faster Growth", value: "7-14 Days" }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-primary-400">{item.value}</div>
                  <div className="text-sm text-gray-300">{item.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Animated CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button 
                onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  boxShadow: [
                    "0 0 0 0 rgba(34, 197, 94, 0.7)",
                    "0 0 0 10px rgba(34, 197, 94, 0)",
                    "0 0 0 0 rgba(34, 197, 94, 0)"
                  ]
                }}
                transition={{ 
                  boxShadow: { duration: 2, repeat: Infinity },
                  scale: { duration: 0.2 }
                }}
                className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-emerald-500 text-white font-bold rounded-2xl hover:from-primary-600 hover:to-emerald-600 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
              
              <motion.button 
                onClick={() => document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 border-2 border-white/50 text-white font-bold rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>

            {/* Testimonial Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-r from-primary-500/90 to-emerald-500/90 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/20"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTestimonial}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <p className="text-lg font-medium mb-2">"{testimonials[currentTestimonial].text}"</p>
                      <div className="text-sm opacity-90">
                        <span className="font-semibold">{testimonials[currentTestimonial].author}</span>
                        <span className="mx-2">•</span>
                        <span>{testimonials[currentTestimonial].role}</span>
                        <span className="mx-2">•</span>
                        <span>{testimonials[currentTestimonial].location}</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              
              {/* Testimonial Indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentTestimonial === index ? 'bg-white w-8' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Static Floating Product */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Static Floating Product Container */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400/30 to-emerald-400/30 rounded-3xl blur-3xl scale-110"></div>
              
              {/* Product Image */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotateZ: [0, 2, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl"
              >
                {/* Fixed image for mobile devices */}
                <div className="w-full flex justify-center">
                  <img
                    src="/product.png"
                    alt="Top One Plus Product"
                    className="w-auto max-w-full h-auto max-h-[40vh] md:max-h-96 object-contain rounded-2xl shadow-xl"
                  />
                </div>
                
                {/* Product Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  Premium Quality
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center shadow-xl"
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </motion.div>

                {/* Product Info */}
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">ASAASE NUA</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.8 + i * 0.1 }}
                          className="w-4 h-4 bg-yellow-400 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-green-500/20 backdrop-blur-sm rounded-xl p-3 border border-green-400/30">
                      <div className="text-lg font-bold text-green-400">100%</div>
                      <div className="text-xs text-white/80">Organic</div>
                    </div>
                    <div className="bg-blue-500/20 backdrop-blur-sm rounded-xl p-3 border border-blue-400/30">
                      <div className="text-lg font-bold text-blue-400">Fast</div>
                      <div className="text-xs text-white/80">Acting</div>
                    </div>
                    <div className="bg-purple-500/20 backdrop-blur-sm rounded-xl p-3 border border-purple-400/30">
                      <div className="text-lg font-bold text-purple-400">Safe</div>
                      <div className="text-xs text-white/80">Natural</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Shadow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-64 h-8 bg-black/30 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;