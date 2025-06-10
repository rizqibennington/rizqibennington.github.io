'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [counters, setCounters] = useState({
    certifications: 0,
    experience: 0,
    projects: 0,
    industries: 0,
  });

  const stats = [
    {
      key: 'certifications',
      target: 4,
      label: 'Certification',
    },
    {
      key: 'experience',
      target: 3,
      label: 'Years Working Experience',
    },
    {
      key: 'projects',
      target: 20,
      label: 'Projects Completed',
    },
    {
      key: 'industries',
      target: 3,
      label: 'Industry Fields',
    },
  ];

  useEffect(() => {
    if (inView) {
      stats.forEach((stat) => {
        let start = 0;
        const end = stat.target;
        const duration = 2000; // 2 seconds
        const increment = end / (duration / 16); // 60fps

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCounters(prev => ({ ...prev, [stat.key]: end }));
            clearInterval(timer);
          } else {
            setCounters(prev => ({ ...prev, [stat.key]: Math.floor(start) }));
          }
        }, 16);
      });
    }
  }, [inView, stats]);

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
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              className="text-center text-white"
              variants={itemVariants}
            >
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(255,255,255,0.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  {counters[stat.key as keyof typeof counters]}
                </motion.div>
                
                <motion.div
                  className="text-blue-100 font-medium text-sm md:text-base"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional decorative elements */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};

export default StatsSection;
