'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [workingDays, setWorkingDays] = useState(0);

  useEffect(() => {
    if (inView) {
      // Animate counter from 0 to 730
      let start = 0;
      const end = 730;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setWorkingDays(end);
          clearInterval(timer);
        } else {
          setWorkingDays(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView]);

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
    <section id="about-section" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Image */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/aboutme.png"
                  alt="About Rizqi Rahmansyah"
                  width={400}
                  height={500}
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </motion.div>
              
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-lg"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6"
            variants={itemVariants}
          >
            <div>
              <motion.h1
                className="text-6xl font-bold text-gray-200 mb-2"
                variants={itemVariants}
              >
                About
              </motion.h1>
              <motion.h2
                className="text-3xl font-bold text-gray-800 -mt-8 relative z-10"
                variants={itemVariants}
              >
                About Me
              </motion.h2>
            </div>

            <motion.p
              className="text-gray-600 leading-relaxed text-lg"
              variants={itemVariants}
            >
              My journey into web development started with a fascination for how the web works,
              leading me to master technologies like HTML, CSS, JavaScript, and frameworks such as
              React and Angular on the front end. On the server side, I&apos;m skilled in PHP, Node.js,
              and MySQL, with a particular focus on building scalable and secure web applications.
            </motion.p>

            <motion.ul
              className="space-y-3"
              variants={containerVariants}
            >
              {[
                { label: 'Name:', value: 'Rizqi Rahmansyah' },
                { label: 'Date of birth:', value: 'December 10, 1998' },
                { label: 'Address:', value: 'Bekasi' },
                { label: 'Phone:', value: '+6281293062103' },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex text-gray-700"
                  variants={itemVariants}
                >
                  <span className="font-semibold w-32">{item.label}</span>
                  <span>{item.value}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Counter */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              variants={itemVariants}
            >
              <div className="text-center">
                <motion.div
                  className="text-4xl font-bold text-blue-600 mb-2"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {workingDays}
                </motion.div>
                <div className="text-gray-600 font-medium">Days Working Experience</div>
              </div>
              
              <motion.div
                className="mt-6"
                variants={itemVariants}
              >
                <motion.a
                  href="#"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download CV
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
