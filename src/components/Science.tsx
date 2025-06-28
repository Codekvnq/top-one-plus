import React from "react";
import { motion } from "framer-motion";
import {
  Microscope,
  Atom,
  Dna,
  Leaf,
  Zap,
  Shield,
  TrendingUp,
  Beaker,
} from "lucide-react";

const Science: React.FC = () => {
  const nutrients = [
    {
      icon: Atom,
      title: "Essential Minerals",
      items: [
        "Nitrogen",
        "Phosphorus",
        "Potassium",
        "Calcium",
        "Magnesium",
        "Sulfur",
      ],
      description:
        "Critical macro and micronutrients for plant growth and development",
      color: "text-blue-500",
    },
    {
      icon: Zap,
      title: "Growth Hormones",
      items: ["Auxins", "Cytokinins", "Gibberellins", "Abscisic Acid"],
      description:
        "Natural plant hormones that regulate growth, flowering, and fruiting",
      color: "text-green-500",
    },
    {
      icon: Dna,
      title: "Bioactive Compounds",
      items: ["Alginates", "Laminarin", "Fucoidan", "Mannitol"],
      description:
        "Unique seaweed compounds that enhance plant resistance and vitality",
      color: "text-purple-500",
    },
    {
      icon: Shield,
      title: "Protective Elements",
      items: ["Antioxidants", "Polyphenols", "Amino Acids", "Vitamins"],
      description:
        "Natural compounds that boost plant immunity and stress tolerance",
      color: "text-red-500",
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Enhanced Photosynthesis",
      description:
        "Seaweed extracts improve chlorophyll content and light absorption efficiency",
    },
    {
      icon: Leaf,
      title: "Improved Root Development",
      description:
        "Growth hormones stimulate root branching and nutrient uptake capacity",
    },
    {
      icon: Shield,
      title: "Stress Resistance",
      description:
        "Bioactive compounds help plants withstand drought, heat, and disease pressure",
    },
    {
      icon: Beaker,
      title: "Soil Enhancement",
      description:
        "Organic matter improves soil structure and beneficial microorganism activity",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="science"
      className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800"
    >
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
            The <span className="text-primary-500">Science</span> Behind Top One
            Plus
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our organic liquid fertilizer harnesses the power of premium seaweed
            extracts, delivering scientifically proven nutrients that
            revolutionize plant growth and productivity.
          </p>
        </motion.div>

        {/* Seaweed Extract Composition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center">
                    <Microscope className="w-6 h-6 text-primary-500" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 dark:text-white">
                    Premium Seaweed Extract
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                  Top One Plus Organic Fertilizer is a pure natural fertilizer
                  mixed with NPK which contains natural fermented seaweed
                  extract and total organic matter. Fermented seaweed extract
                  contains natural plant hormones (auxins, cytokinin,
                  giberellins), protein amino acids, carbohydrates, vitamins,
                  nucleotides, humic acids and counter-stresses genes etc as
                  well as macro elements and microelements, which can be easily
                  absorbed by plants, and bioactive substances which can
                  stimulate plant growth.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      100% Natural Marine Source
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      Cold-Pressed Extraction Method
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      Concentrated Bioactive Formula
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      Environmentally Sustainable
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/showcase.png"
                  alt="Seaweed extract research"
                  className="mx-auto h-96 w-auto max-h-[32rem] object-contain rounded-2xl shadow-lg bg-white dark:bg-gray-900"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Nutrient Composition */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16"
        >
          {nutrients.map((nutrient, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group hover:border-primary-200 dark:hover:border-primary-800"
            >
              <div
                className={`w-12 h-12 lg:w-16 lg:h-16 ${nutrient.color} bg-opacity-10 dark:bg-opacity-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <nutrient.icon
                  className={`w-6 h-6 lg:w-8 lg:h-8 ${nutrient.color}`}
                />
              </div>

              <h3 className="text-lg lg:text-xl font-heading font-semibold text-gray-900 dark:text-white mb-3">
                {nutrient.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {nutrient.description}
              </p>

              <div className="space-y-2">
                {nutrient.items.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div
                      className={`w-1.5 h-1.5 ${nutrient.color} bg-opacity-60 rounded-full`}
                    ></div>
                    <span className="text-xs text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scientific Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary-500 to-green-600 rounded-3xl p-8 lg:p-12 text-white mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-4">
              Scientifically Proven Benefits
            </h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Independent research and field trials demonstrate the
              effectiveness of seaweed-based fertilizers in improving crop
              performance across multiple parameters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group hover:bg-white/10 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <h4 className="text-lg font-heading font-semibold mb-3">
                  {benefit.title}
                </h4>
                <p className="text-sm opacity-90 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Research Data */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-8">
              Research-Backed Results
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary-500 mb-2">
                  87%
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Average Yield Increase
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                  Across 12 field trials
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary-500 mb-2">
                  65%
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Disease Resistance Improvement
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                  Compared to control groups
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary-500 mb-2">
                  45%
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Faster Root Development
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                  In greenhouse studies
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Science;
