import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sprout, Droplets, Clock, Target, Info, ChevronDown, ChevronRight } from 'lucide-react';

const ApplicationGuide: React.FC = () => {
  const [activeMethod, setActiveMethod] = useState(0);
  const [expandedCrop, setExpandedCrop] = useState<number | null>(null);

  const applications = [
    {
      crop: "Rice",
      dosage: "30-15 ml/L",
      period: "Vegetative & Reproductive",
      method: "knap sack spray",
      notes: "Apply early morning or evening for best results",
      icon: "🌾",
      expectedIncrease: "70-90%",
      frequency: "Every 2 weeks",
      bestTime: "Early morning (6-8 AM)"
    },
    {
      crop: "Tomatoes",
      dosage: "3-4 ml/L",
      period: "Flowering & Fruiting",
      method: "Foliar + Root",
      notes: "Increases fruit size and vitamin content",
      icon: "🍅",
      expectedIncrease: "80-100%",
      frequency: "Weekly during fruiting",
      bestTime: "Evening (5-7 PM)"
    },
    {
      crop: "Maize/Corn",
      dosage: "30-15 ml/L",
      period: "V6 to Tasseling",
      method: "knap sack spray",
      notes: "Enhances kernel development",
      icon: "🌽",
      expectedIncrease: "60-85%",
      frequency: "Bi-weekly",
      bestTime: "Early morning"
    },
    {
      crop: "Cocoa",
      dosage: "30-40 ml/L",
      period: "Year Round",
      method: "Knap sack / motorized machine",
      notes: "Improves pod quality and yield",
      icon: "🍫",
      expectedIncrease: "50-75%",
      frequency: "Monthly",
      bestTime: "Morning or evening"
    },
    {
      crop: "Vegetables",
      dosage: "20-30 ml/L",
      period: "Weekly",
      method: "knap sack spray",
      notes: "Safe for all vegetable types",
      icon: "🥬",
      expectedIncrease: "70-95%",
      frequency: "Weekly",
      bestTime: "Early morning"
    },
    {
      crop: "Fruits",
      dosage: "3-5 ml/L",
      period: "Pre & Post Bloom",
      method: "Foliar + Root",
      notes: "Enhances sweetness and shelf life",
      icon: "🍎",
      expectedIncrease: "65-90%",
      frequency: "Bi-weekly",
      bestTime: "Evening preferred"
    }
  ];

  const methods = [
    {
      icon: Droplets,
      title: "Foliar Spray",
      description: "Direct leaf application for rapid nutrient absorption",
      color: "from-blue-500 to-cyan-500",
      instructions: [
        "Mix 2-5 ml per liter of clean water",
        "Spray during cool hours (early morning/evening)",
        "Ensure complete coverage of both leaf surfaces",
        
      ],
      tips: [
        "Use fine mist nozzle for better coverage",
        "Add surfactant for improved adhesion",
        "Check weather forecast before application"
      ]
    },
    {
      icon: Target,
      title: "Root Application",
      description: "Soil application for sustained nutrition and root development",
      color: "from-green-500 to-emerald-500",
      instructions: [
        "Dilute 3-6 ml per liter of water",
        "Apply to soil around root zone",
        "Water thoroughly after application",
        "Best during active growing season"
      ],
      tips: [
        "Apply to moist soil for better absorption",
        "Create shallow furrows around plants",
        "Combine with regular irrigation schedule"
      ]
    },
    {
      icon: Sprout,
      title: "Seed Treatment",
      description: "Pre-planting enhancement for improved germination",
      color: "from-purple-500 to-pink-500",
      instructions: [
        "Mix 1-2 ml per liter of water",
        "Soak seeds for 2-4 hours",
        "Dry seeds before planting",
        "Improves germination rate by 20-30%"
      ],
      tips: [
        "Use room temperature water",
        "Ensure seeds are completely dry before storage",
        "Treat seeds just before planting"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="application" className="py-20 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            <span>Application Guide</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-heading font-black text-gray-900 dark:text-white mb-6">
            How to Apply
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Top One Plus
            </span>
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Organic Fertilizer
              </p>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Follow our comprehensive application guide to maximize the benefits and achieve 
            optimal results for different crops and growing conditions.
          </p>
        </motion.div>

        {/* Application Methods */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          {/* Method Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {methods.map((method, index) => (
              <button
                key={index}
                onClick={() => setActiveMethod(index)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeMethod === index
                    ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {method.title}
              </button>
            ))}
          </div>

          {/* Active Method Details */}
          <motion.div
            key={activeMethod}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 lg:p-12 border border-gray-200 dark:border-gray-700"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${methods[activeMethod].color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    {(() => {
                      const IconComponent = methods[activeMethod].icon;
                      return <IconComponent className="w-8 h-8 text-white" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 dark:text-white">
                      {methods[activeMethod].title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {methods[activeMethod].description}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Instructions:</h4>
                    <ul className="space-y-3">
                      {methods[activeMethod].instructions.map((instruction, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-emerald-600 dark:text-emerald-400 text-sm font-bold">{idx + 1}</span>
                          </div>
                          <span className="text-gray-700 dark:text-gray-300">{instruction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Pro Tips:</h4>
                    <ul className="space-y-2">
                      {methods[activeMethod].tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-400 text-sm">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/sprayer.jpg"
                  alt={methods[activeMethod].title}
                  className="w-full h-80 object-cover rounded-2xl shadow-xl"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${methods[activeMethod].color} opacity-20 rounded-2xl`}></div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Crop-Specific Guide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 dark:text-white text-center mb-12">
            Crop-Specific Dosage Guide
          </h3>
          
          <div className="grid gap-4">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => setExpandedCrop(expandedCrop === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{app.icon}</div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{app.crop}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{app.dosage} • {app.method}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{app.expectedIncrease}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Expected Increase</div>
                    </div>
                    {expandedCrop === index ? (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>

                {expandedCrop === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200 dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-700/50"
                  >
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Application Period</h5>
                        <p className="text-gray-600 dark:text-gray-400">{app.period}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Frequency</h5>
                        <p className="text-gray-600 dark:text-gray-400">{app.frequency}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Best Time</h5>
                        <p className="text-gray-600 dark:text-gray-400">{app.bestTime}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Special Notes</h5>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{app.notes}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-3xl p-8 lg:p-12 border border-amber-200 dark:border-amber-800"
        >
          <div className="flex items-start space-x-6">
            <div className="w-12 h-12 bg-amber-400 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-amber-800" />
            </div>
            <div className="flex-1">
              <h4 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                Important Application Guidelines
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Apply during cool hours to prevent leaf burn and maximize absorption</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Avoid application during rain or when rain is expected within 4 hours</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Store in a cool, dry place away from direct sunlight</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Shake well before each use to ensure proper mixing</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Compatible with most pesticides and fungicides</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Results typically visible within 7-14 days of first application</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationGuide;