'use client';

import { motion } from 'framer-motion';
import { 
  Twitter, 
  Facebook, 
  Instagram, 
  ArrowRight, 
  MessageCircle, 
  Mail,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Twitter,
      href: 'https://twitter.com/rizqibennington',
      label: 'Twitter'
    },
    {
      icon: Facebook,
      href: 'https://facebook.com/rizqirahmansyah10',
      label: 'Facebook'
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/rizqibennington',
      label: 'Instagram'
    }
  ];

  const quickLinks = [
    { href: '#home-section', label: 'Home' },
    { href: '#about-section', label: 'About' },
    { href: '#services-section', label: 'Services' },
    { href: '#projects-section', label: 'Projects' },
    { href: '#contact-section', label: 'Contact' }
  ];

  const services = [
    'Web Design',
    'Web Development',
    'Business Strategy',
    'Data Analysis',
    'Graphic Design'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">About</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Want to connect with me? feel free to follow my social media
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <IconComponent size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight size={16} className="mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href="#services-section"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('#services-section');
                    }}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight size={16} className="mr-2 group-hover:translate-x-1 transition-transform" />
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Have a Questions?</h3>
            <div className="space-y-4">
              <motion.a
                href="https://wa.me/6281293062103?text=Hi%20Rizqi,%20i%20need%20your%20help"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors group"
                whileHover={{ x: 5 }}
              >
                <MessageCircle size={20} className="mr-3 text-green-500" />
                <span>+6281293062103</span>
              </motion.a>
              
              <motion.a
                href="mailto:rizqirahmansyah98@gmail.com?subject=Need%20Help&body=Hi%20Rizqi,%20i%20need%20your%20help"
                className="flex items-center text-gray-400 hover:text-white transition-colors group"
                whileHover={{ x: 5 }}
              >
                <Mail size={20} className="mr-3 text-blue-500" />
                <span>rizqirahmansyah98@gmail.com</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">
            Copyright &copy; {currentYear} All rights reserved | This template is made with{' '}
            <Heart size={16} className="inline text-red-500 mx-1" /> by{' '}
            <a 
              href="https://colorlib.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Colorlib
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
