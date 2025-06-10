'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'CSS', percentage: 90, color: 'bg-blue-500' },
    { name: 'jQuery', percentage: 85, color: 'bg-green-500' },
    { name: 'HTML5', percentage: 95, color: 'bg-orange-500' },
    { name: 'PHP', percentage: 90, color: 'bg-purple-500' },
    { name: 'Javascript', percentage: 70, color: 'bg-yellow-500' },
    { name: 'Python', percentage: 80, color: 'bg-red-500' },
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
    <section id="skills-section" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-bold text-gray-200 mb-2">Skills</h1>
          <h2 className="text-3xl font-bold text-gray-800 -mt-8 relative z-10">My Skills</h2>
          <p className="text-gray-600 mt-4 text-lg">here&apos;s some my major skill</p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-white p-6 rounded-lg shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                <span className="text-sm font-medium text-gray-600">{skill.percentage}%</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <motion.div
                  className={`h-full ${skill.color} rounded-full relative`}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
                  transition={{ 
                    duration: 1.5, 
                    delay: index * 0.2,
                    ease: "easeOut"
                  }}
                >
                  {/* Animated shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={inView ? { x: '100%' } : { x: '-100%' }}
                    transition={{ 
                      duration: 1.5, 
                      delay: index * 0.2 + 0.5,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Tags */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'React', 'Angular', 'Node.js', 'MySQL', 'PostgreSQL', 
              'Laravel', 'CodeIgniter', 'Git', 'Docker', 'AWS'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 1.2 + index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
