import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sprout, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Check } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    // Mock subscription - comment out the actual backend code
    try {
      // Mock delay to simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful subscription
      setMessage('Thank you for subscribing!');
      setSubscribed(true);
      
      // If you want to keep the email for later use when backend is ready
      console.log('Mock subscription with email:', email);
      
    } catch (error) {
      setMessage('Subscription failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }

    /* Comment out the actual backend code for now
    try {
      const response = await fetch(
        `https://${import.meta.env.VITE_MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${import.meta.env.VITE_MAILCHIMP_LIST_ID}/members`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_MAILCHIMP_API_KEY}`,
          },
          body: JSON.stringify({
            email_address: email,
            status: 'subscribed',
              merge_fields: {
            FNAME: 'Subscriber', 
          },
          }),
        }
      );

      const data = await response.json();
       console.log('Mailchimp response:', data);
      if (response.ok) {
        setMessage('Success! Check your email to confirm.');
        setEmail('');
      } else {
        throw new Error(data.title || 'Subscription failed');
      }
    } catch (error) {
        console.error('Subscription error:', error);
      setMessage(error instanceof Error ? error.message : 'Failed to subscribe.');
    } finally {
      setIsSubmitting(false);
    }
    */
  };

  const quickLinks = [
    { label: 'Benefits', href: '#benefits' },
    { label: 'Application Guide', href: '#application' },
    { label: 'Target Crops', href: '#crops' },
    { label: 'Science', href: '#science' },
  ];

  const contactInfo = [
    { icon: Phone, label: '+233 20 798 3775', href: 'tel:+233207983775' },
    { icon: Mail, label: 'karikarimark0248@gmail.com', href: 'mailto:karikarimark0248@gmail.com' },
    { icon: MapPin, label: 'Kumasi, Ghana', href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
         <div className="flex items-center space-x-3 mb-6">
  <img
    src="/logo.png"
    alt="Top One Plus Logo"
    className="w-12 h-12 rounded-full object-cover shadow-lg"
  />
  <div>
    <h3 className="text-2xl font-heading font-bold">TOP ONE PLUS</h3>
    <p className="text-gray-400 text-sm"> Asaase nua</p>
  </div>
</div>
            
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Transforming agriculture through innovative organic fertilizer solutions. 
              Top One Plus delivers scientifically proven results that boost crop yields 
              while maintaining environmental sustainability.
            </p>
            
            {/* Quality Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Sprout className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-gray-300">100% Organic</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="w-3 h-3 border-2 border-white border-t-transparent rounded-full"
                  />
                </div>
                <span className="text-sm text-gray-300">Certified Quality</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-heading font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-heading font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    className="flex items-center space-x-3 text-gray-400 hover:text-primary-400 transition-colors duration-200 group"
                  >
                    <contact.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                    <span>{contact.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-8">
              <h5 className="text-sm font-semibold mb-4 text-gray-300">Follow Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
     <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="bg-gray-800 dark:bg-gray-800/50 rounded-2xl p-6 lg:p-8 mb-12"
>
  <div className="grid lg:grid-cols-2 gap-6 items-center">
    <div>
      <h4 className="text-xl font-heading font-semibold mb-2">Stay Updated</h4>
      <p className="text-gray-400 mb-2">
        Get the latest agricultural tips, product updates, and exclusive offers.
      </p>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-3 rounded-lg text-sm ${
            message.includes('Thank you') || message.includes('Success')
              ? 'bg-green-900/30 text-green-400'
              : 'bg-red-900/30 text-red-400'
          }`}
        >
          {message}
        </motion.div>
      )}
    </div>
    
    {subscribed ? (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full"
      >
        <button
          className="w-full px-6 py-3 bg-green-500 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <Check className="w-5 h-5" />
          Subscribed
        </button>
      </motion.div>
    ) : (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (message) setMessage(''); // Clear error message when typing
          }}
          placeholder="Your best email"
          className="flex-1 px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
          required
          disabled={isSubmitting}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors duration-200 whitespace-nowrap flex items-center justify-center gap-2 ${
            isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            'Subscribe'
          )}
        </button>
      </form>
    )}
  </div>
</motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} ASAASE NUA. All rights reserved. Top One Plus Organic Liquid Fertilizer.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;