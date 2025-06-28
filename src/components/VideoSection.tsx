import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X, Volume2, VolumeX } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section id="video-section" className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-heading font-black text-white mb-6">
            See Top One Plus
            <br />
            <span className="bg-gradient-to-r from-primary-400 to-emerald-400 bg-clip-text text-transparent">
              In Action
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Watch how our organic liquid fertilizer transforms crops and delivers 
            incredible results for farmers across Ghana.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-r from-primary-500/20 to-emerald-500/20 rounded-3xl p-2 backdrop-blur-sm border border-white/10">
            <div className="relative aspect-video bg-gray-800 rounded-2xl overflow-hidden group cursor-pointer">
              {/* Video Thumbnail */}
              <img
                src="https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
              
              {/* Play Button */}
              <motion.button
                onClick={() => setIsVideoOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 group-hover:bg-white/30 transition-all duration-300">
                  <Play className="w-8 h-8 lg:w-10 lg:h-10 text-white ml-1" />
                </div>
              </motion.button>

              {/* Video Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <h3 className="text-white font-bold text-lg mb-2">Application Demonstration</h3>
                  <p className="text-gray-300 text-sm">Learn the proper application techniques for maximum results</p>
                  <div className="flex items-center space-x-4 mt-3 text-sm text-gray-400">
                    <span>Duration: 2:30</span>
                    <span>•</span>
                    <span>Step-by-step guide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Application Methods",
                description: "Learn foliar spray, root application, and seed treatment techniques",
                icon: "🌱"
              },
              {
                title: "Dosage Guidelines",
                description: "Proper mixing ratios for different crops and growth stages",
                icon: "⚖️"
              },
              {
                title: "Best Practices",
                description: "Timing, weather conditions, and safety measures for optimal results",
                icon: "✅"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video Modal */}
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Mute Button */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute top-4 left-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>

              {/* Video Player */}
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted={isMuted}
                poster="https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=1200"
              >
                <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;