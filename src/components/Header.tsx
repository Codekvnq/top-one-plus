import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Monitor,  ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
  const themeMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Application', href: '#application' },
    { label: 'Crops', href: '#crops' },
    { label: 'Science', href: '#science' },
  ];

  const themeOptions = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor },
  ];

 useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // Enhanced scroll function that works for both desktop and mobile
  const handleNavigation = (href: string, isMobile: boolean = false) => {
    console.log('Navigation clicked:', href, 'Mobile:', isMobile);
    
    // Close mobile menu immediately if it's a mobile click
    if (isMobile) {
      setIsMenuOpen(false);
    }
    
    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      
      console.log('Looking for element with ID:', targetId);
      console.log('Element found:', element);
      
      if (element) {
        // Calculate offset for fixed header
        const headerHeight = 80; // Adjust based on your header height
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        console.log('Scrolling to position:', offsetPosition);
      } else {
        // Fallback: try querySelector
        const fallbackElement = document.querySelector(href);
        console.log('Fallback element found:', fallbackElement);
        
        if (fallbackElement) {
          fallbackElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    }, isMobile ? 100 : 0);
  };

    const getCurrentThemeIcon = () => {
    return themeOptions.find(option => option.value === theme)?.icon || Monitor;
  };

  const CurrentThemeIcon = getCurrentThemeIcon();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-xl border-b border-gray-200/20 dark:border-gray-700/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Group */}
          <motion.div 
            className="flex items-center space-x-1 sm:space-x-2 cursor-pointer min-w-0"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleNavigation('#home')}
          >
            {/* First Logo */}
            <div className="flex-shrink-0">
              <img
                src="/logo.png"
                alt="ASAASE NUA Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl object-cover"
              />
            </div>

            {/* Text Group */}
            <div className="flex flex-col min-w-0 ml-1 sm:ml-2">
              <h1 className="text-xs xs:text-sm sm:text-base font-bold text-gray-900 dark:text-white truncate">
                TOP ONE PLUS
              </h1>
              <p className="text-[9px] xs:text-[10px] sm:text-xs text-primary-600 dark:text-primary-400 font-medium -mt-0.5 truncate">
                Organic Fertilizer
              </p>
            </div>

            {/* Second Logo */}
            <div className="flex-shrink-0 ml-1 sm:ml-2">
              <img
                src="/logo1.png"
                alt="Secondary Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl object-cover"
              />
            </div>
          </motion.div>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavigation(item.href)}
                className="relative text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-semibold transition-colors duration-300 py-2 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-emerald-500 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
           <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Theme Selector */}
            <div className="relative">
              <button
                onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
                title={`Current theme: ${theme}`}
              >
                <CurrentThemeIcon className="w-5 h-5" />
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isThemeMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isThemeMenuOpen && (
                  <motion.div
                    ref={themeMenuRef}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden min-w-[140px]"
                  >
                    {themeOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setTheme(option.value as 'light' | 'dark' | 'system');
                          setIsThemeMenuOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left flex items-center space-x-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 ${
                          theme === option.value ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        <option.icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{option.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/20 dark:border-gray-700/20"
            >
              <nav className="py-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mx-4"
                  >
                    <div
                      onClick={() => handleNavigation(item.href, true)}
                      className="block w-full text-left px-6 py-4 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 font-semibold transition-all duration-300 rounded-xl cursor-pointer select-none active:bg-gray-100 dark:active:bg-gray-700"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleNavigation(item.href, true);
                        }
                      }}
                    >
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Click outside to close theme menu */}
      {isThemeMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsThemeMenuOpen(false)}
        />
      )}
    </motion.header>
  );
};

export default Header;