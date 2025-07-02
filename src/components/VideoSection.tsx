import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, X, Volume2, VolumeX, Pause, Fullscreen } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVideoOpen && videoRef.current) {
      const sources = videoRef.current.querySelectorAll('source');
      sources.forEach((source: HTMLSourceElement) => {
        if (source.dataset.src) {
          source.src = source.dataset.src;
        }
      });
      videoRef.current.load();
    }
  }, [isVideoOpen]);


  
 const videoSources = {
  mp4: "/videos/cornfieldVid.mp4",
  webm: "/videos/confieldWeb.webm",
  poster: "/images/cornfield.png"
};

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && modalRef.current) {
      modalRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setProgress((videoRef.current.currentTime / duration) * 100);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * duration;
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      const handleLoadedMetadata = () => setDuration(video.duration);
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      return () => video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    }
  }, [isVideoOpen]);

  return (
    <section id="video-section" className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            See Top One Plus
            <br />
            <span className="bg-gradient-to-r from-primary-400 to-emerald-400 bg-clip-text text-transparent">
              In Action
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
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
          <div className="relative bg-gradient-to-r from-primary-500/20 to-emerald-500/20 rounded-2xl lg:rounded-3xl p-1 lg:p-2 backdrop-blur-sm border border-white/10">
            <div className="relative aspect-video bg-gray-800 rounded-xl lg:rounded-2xl overflow-hidden group cursor-pointer">
              {/* Video Thumbnail */}
              <img
                src={videoSources.poster}
                alt="Top One Plus fertilizer application"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
              
              {/* Play Button */}
              <motion.button
                onClick={() => setIsVideoOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute inset-0 flex items-center justify-center"
                aria-label="Play video"
              >
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 group-hover:bg-white/30 transition-all duration-300">
                  <Play className="w-6 h-6 lg:w-8 lg:h-8 text-white ml-1" />
                </div>
              </motion.button>

              {/* Video Info Overlay */}
              <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6">
                <div className="bg-black/50 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-white/20">
                  <h3 className="text-white font-bold text-base lg:text-lg mb-1 lg:mb-2">Application Demonstration</h3>
                  <p className="text-gray-300 text-xs lg:text-sm">Learn the proper application techniques for maximum results</p>
                  <div className="flex items-center space-x-3 lg:space-x-4 mt-2 lg:mt-3 text-xs lg:text-sm text-gray-400">
                    <span>Duration: 2:30</span>
                    <span>•</span>
                    <span>Step-by-step guide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mt-8 lg:mt-12">
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
                className="text-center bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/10"
              >
                <div className="text-3xl lg:text-4xl mb-3 lg:mb-4">{feature.icon}</div>
                <h3 className="text-white font-semibold text-base lg:text-lg mb-1 lg:mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-xs lg:text-sm">{feature.description}</p>
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
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4"
            onClick={() => {
              setIsVideoOpen(false);
              setIsPlaying(false);
            }}
            ref={modalRef}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-lg lg:rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Video Player */}
            <div className="relative w-full h-full">
              <video
                ref={videoRef}
                className="w-full h-full object-contain"
                controls={false}
                autoPlay
                muted={isMuted}
                poster={videoSources.poster}
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
                onWaiting={() => setIsLoading(true)}
                onCanPlay={() => setIsLoading(false)}
                preload="metadata"
              >
                <source data-src={videoSources.mp4} type="video/mp4" />
                <source data-src={videoSources.webm} type="video/webm" />
                Your browser does not support the video tag.
              </video>

              {/* Loading Spinner */}
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
                </div>
              )}
            </div>

              {/* Video Controls */}
              <div className="absolute inset-0 flex flex-col justify-between z-10">
                {/* Top Controls */}
                <div className="flex justify-between items-start p-3 bg-gradient-to-b from-black/70 to-transparent">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                  </button>
                  
                  <button
                    onClick={() => {
                      setIsVideoOpen(false);
                      setIsPlaying(false);
                    }}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
                    aria-label="Close video"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>

                {/* Bottom Controls */}
                <div className="bg-gradient-to-t from-black/70 to-transparent p-3">
                  {/* Progress Bar */}
                  <div 
                    className="relative w-full h-1.5 sm:h-2 bg-white/20 rounded-full mb-3 cursor-pointer"
                    onClick={handleSeek}
                  >
                    <div 
                      className="absolute top-0 left-0 h-full bg-primary-400 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <button
                        onClick={togglePlay}
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
                        aria-label={isPlaying ? "Pause" : "Play"}
                      >
                        {isPlaying ? (
                          <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
                        ) : (
                          <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" />
                        )}
                      </button>
                      
                      <div className="text-xs sm:text-sm text-white">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </div>
                    </div>

                    <button
        onClick={toggleFullscreen}
        className="w-8 h-8 sm:w-10 sm:h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
        aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
      >
        <Fullscreen className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${isFullscreen ? 'rotate-180' : ''}`} />
      </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;