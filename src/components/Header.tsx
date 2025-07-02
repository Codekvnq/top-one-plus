import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Monitor, ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

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
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const getCurrentThemeIcon = () => {
    const currentTheme = themeOptions.find(option => option.value === theme);
    return currentTheme ? currentTheme.icon : Monitor;
  };

  const CurrentThemeIcon = getCurrentThemeIcon();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md border-b border-gray-200/20 dark:border-gray-700/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo Group - Optimized for mobile */}
          <motion.div 
            className="flex items-center space-x-1 sm:space-x-2 cursor-pointer min-w-0"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('#home')}
          >
            {/* First Logo */}
            <div className="flex-shrink-0">
              <img
                src="/logo.png"
                alt="TOP ONE PLUS Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl object-cover"
              />
            </div>

            {/* Text Group - Now properly truncated on small screens */}
            <div className="flex flex-col min-w-0 ml-1 sm:ml-2">
              <h1 className="text-xs xs:text-sm sm:text-base font-bold text-gray-900 dark:text-white truncate">
                TOP ONE PLUS
              </h1>
              <p className="text-[9px] xs:text-[10px] sm:text-xs text-primary-600 dark:text-primary-400 font-medium -mt-0.5 truncate">
                Organic Liquid Fertilizer
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

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="relative text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium text-sm transition-colors duration-300 py-2"
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Controls */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Theme Toggle - Simplified for mobile */}
            <motion.button
              onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
              className="p-2 sm:p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm"
              whileTap={{ scale: 0.9 }}
            >
              <CurrentThemeIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 sm:p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm"
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-t border-gray-200/20 dark:border-gray-700/20"
            >
              <nav className="py-4 space-y-1">
                {navItems.map((item) => (
                  <motion.button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-all duration-200 rounded-lg mx-2"
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Theme Menu */}
        <AnimatePresence>
          {isThemeMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-3 top-12 sm:top-14 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden w-40 z-50"
            >
              {themeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setTheme(option.value as 'light' | 'dark' | 'system');
                    setIsThemeMenuOpen(false);
                  }}
                  className={`w-full px-4 py-2.5 text-left flex items-center space-x-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150 text-sm ${
                    theme === option.value 
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' 
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <option.icon className="w-4 h-4" />
                  <span>{option.label}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Click outside to close menus */}
      {(isMenuOpen || isThemeMenuOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setIsMenuOpen(false);
            setIsThemeMenuOpen(false);
          }}
        />
      )}
    </motion.header>
  );
};

export default Header;