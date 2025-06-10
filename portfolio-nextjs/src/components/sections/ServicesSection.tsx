'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Camera, 
  Lightbulb, 
  BarChart3, 
  Palette, 
  Target 
} from 'lucide-react';

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Code,
      title: 'Web Design',
      description: 'Creating beautiful and functional web designs that engage users and drive results.'
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Professional photography services for events, portraits, and commercial projects.'
    },
    {
      icon: Lightbulb,
      title: 'Web Developer',
      description: 'Full-stack web development using modern technologies and best practices.'
    },
    {
      icon: BarChart3,
      title: 'App Developing',
      description: 'Mobile and web application development with focus on user experience.'
    },
    {
      icon: Palette,
      title: 'Branding',
      description: 'Complete branding solutions including logo design and brand identity.'
    },
    {
      icon: Target,
      title: 'Product Strategy',
      description: 'Strategic planning and consultation for digital product development.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services-section" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-bold text-gray-200 mb-2">Services</h1>
          <h2 className="text-3xl font-bold text-gray-800 -mt-8 relative z-10">Services</h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={service.title}
                className="group"
                variants={itemVariants}
              >
                <motion.div
                  className="bg-gray-50 hover:bg-blue-50 p-8 rounded-lg text-center transition-all duration-300 cursor-pointer h-full"
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 group-hover:bg-blue-200 rounded-full mb-6 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent 
                      size={32} 
                      className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300" 
                    />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.a
            href="https://wa.me/6281293062103?text=Hi%20Rizqi,%20i%20need%20your%20help"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
