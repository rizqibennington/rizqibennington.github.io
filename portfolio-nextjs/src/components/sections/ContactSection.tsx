'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, MessageCircle, Mail } from 'lucide-react';

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Bekasi, West Java 17520',
      link: null
    },
    {
      icon: MessageCircle,
      title: 'Contact Number',
      content: '+6281293062103',
      link: 'https://wa.me/6281293062103?text=Hi%20Rizqi,%20i%20need%20your%20help'
    },
    {
      icon: Mail,
      title: 'Email Address',
      content: 'rizqirahmansyah98@gmail.com',
      link: 'mailto:rizqirahmansyah98@gmail.com?subject=Need%20Help&body=Hi%20Rizqi,%20i%20need%20your%20help'
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
    <section id="contact-section" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-bold text-gray-200 mb-2">Contact</h1>
          <h2 className="text-3xl font-bold text-gray-800 -mt-8 relative z-10">Contact Me</h2>
          <p className="text-gray-600 mt-4 text-lg">Need some help with your website? feel free to contact me! :)</p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {contactInfo.map((info) => {
            const IconComponent = info.icon;
            
            return (
              <motion.div
                key={info.title}
                className="text-center"
                variants={itemVariants}
              >
                <motion.div
                  className="bg-gray-50 hover:bg-blue-50 p-8 rounded-lg transition-all duration-300"
                  whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent size={32} className="text-blue-600" />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {info.title}
                  </h3>
                  
                  {info.link ? (
                    <motion.a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {info.content}
                    </motion.a>
                  ) : (
                    <p className="text-gray-600">{info.content}</p>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Hire Me Section */}
        <motion.div
          className="relative bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url(/images/bg_1.jpg)' }}
          />
          
          <div className="relative z-10 text-center py-16 px-8">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              I&apos;m <span className="text-yellow-300">Available</span> for freelancing
            </motion.h2>
            
            <motion.p
              className="text-xl text-blue-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Feel Free to contact me
            </motion.p>
            
            <motion.a
              href="https://wa.me/6281293062103?text=Hi%20Rizqi,%20i%20need%20your%20help"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium text-lg transition-colors inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
