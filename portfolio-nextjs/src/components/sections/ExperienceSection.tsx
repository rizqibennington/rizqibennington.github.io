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
      position: "Highschool of Science",
      description: "The first experience when I'm falling in love with IT Things."
    },
    {
      period: "2017 - 2021",
      title: "University of Singaperbangsa Karawang",
      position: "Bachelor's Degree of Computer Science",
      description: "My first step to begin my journey to be a developer. I started my coding journey here and graduated with a cum laude predicate with a GPA of 3.71."
    },
    {
      period: "January - June (2020)",
      title: "PT Telekomunikasi Indonesia (WITEL Karawang)",
      position: "Chatbot Developer",
      description: "My first working experience as an intern. Here, I developed a chatbot on Telegram to analyze, monitor, and count the jobs already done by technicians."
    },
    {
      period: "January 2022 - February 2023",
      title: "Topkarir Indonesia",
      position: "Fullstack Web Developer",
      description: "My first Working Experience in the professional field was in Topkarir, a startup company in Human Resource field, in this place my responsibility is Develop and Maintenance Website, Frontend, Backend, API and connect to third party API for Topkarir Website and Microsite there are Jaknaker.id, Jatimcerdas, jabarjawara, TopKarir, AUA Topkarir, CDC BPSDMI. Topkarir. often using MySQL and PostgreSQL ,PHP, Javascript, Jquery, CSS, HTML and GO. often using framework Codeigniter and Laravel"
    },
    {
      period: "March 2023 - March 2024",
      title: "Katadata Indonesia",
      position: "Web Developer",
      description: "Responsible for developing, maintaining, and testing the Katadata website, API, and client-side applications using frameworks like Laravel, CodeIgniter, and React JS, with programming languages such as PHP and JavaScript. Also involved in data scraping using Python to support the data engineering team. Katadata is a startup in the online media industry."
    },
    {
      period: "July 2024 - Now",
      title: "RS Nasional Kanker Dharmais",
      position: "Programmer",
      description: "Developed and maintained hospital management software, optimizing workflows and enhancing patient data management. Collaborated with medical staff to create custom applications for scheduling, electronic medical records (EMR), and reporting tools. Ensured data security and compliance with health regulations by implementing robust cybersecurity measures. Improved system performance and user experience through continuous code optimization and feature updates."
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
    <section id="resume-section" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-bold text-gray-200 mb-2">Life Experience</h1>
          <h2 className="text-3xl font-bold text-gray-800 -mt-8 relative z-10">Life Experience</h2>
          <p className="text-gray-600 mt-4 text-lg">Experience is the most valuable lesson from God</p>
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
                className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
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
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                <h4 className="text-blue-600 font-semibold mb-3">{exp.position}</h4>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
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
