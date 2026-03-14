'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      period: "2014 - 2017",
      title: "SMAN 2 Tambun Selatan",
      position: "High School of Science",
      description: "My first encounter with the world of IT, where my passion for technology began."
    },
    {
      period: "2017 - 2021",
      title: "University of Singaperbangsa Karawang",
      position: "Bachelor's Degree in Computer Science",
      description: "My first step in becoming a developer. I started my coding journey here and graduated cum laude with a GPA of 3.71."
    },
    {
      period: "January - June (2020)",
      title: "PT Telekomunikasi Indonesia (WITEL Karawang)",
      position: "Chatbot Developer Intern",
      description: "My first professional experience as an intern. I developed a Telegram chatbot to analyze, monitor, and track technicians' completed tasks."
    },
    {
      period: "January 2022 - February 2023",
      title: "Topkarir Indonesia",
      position: "Fullstack Web Developer",
      description: "My first full-time professional role at a Human Resources startup. I was responsible for developing and maintaining the main website and microsites, including Jaknaker.id, Jatimcerdas, Jabarjawara, TopKarir, AUA Topkarir, and CDC BPSDMI. My work involved Frontend, Backend, and API integration using MySQL, PostgreSQL, PHP, JavaScript, jQuery, CSS, HTML, Go, CodeIgniter, and Laravel."
    },
    {
      period: "March 2023 - March 2024",
      title: "Katadata Indonesia",
      position: "Web Developer",
      description: "Responsible for developing, maintaining, and testing the Katadata website, APIs, and client-side applications using Laravel, CodeIgniter, React.js, PHP, and JavaScript. I also contributed to data scraping efforts using Python to support the data engineering team at this online media startup."
    },
    {
      period: "July 2024 - Present",
      title: "RS Nasional Kanker Dharmais",
      position: "Programmer",
      description: "Developing and maintaining hospital management software to optimize workflows and enhance patient data management. Collaborating with medical staff to create custom applications for scheduling, Electronic Medical Records (EMR), and reporting tools. Ensuring data security and compliance with health regulations through robust cybersecurity measures, while improving system performance and user experience via continuous code optimization."
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="resume-section" className="py-20 bg-white dark:bg-gray-950" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-bold text-gray-200 dark:text-gray-800 mb-2">Life Experience</h1>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white -mt-8 relative z-10">Life Experience</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">Experience is the most valuable lesson from God</p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={itemVariants}
            >
              <motion.div
                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {exp.period}
                </motion.span>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{exp.title}</h3>
                <h4 className="text-blue-600 font-semibold mb-3">{exp.position}</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Download CV Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
