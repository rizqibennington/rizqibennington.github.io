'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Katadata ESG Index',
      subtitle: 'Katadata Green',
      image: '/images/katadata-esg-index.png',
      description: 'Environmental, Social, and Governance index platform for sustainable business evaluation.',
      link: '#'
    },
    {
      title: 'Sistem Informasi Komite Etik dan Hukum Dharmais',
      subtitle: 'SIKETIK',
      image: '/images/siketik.png',
      description: 'Ethics and Legal Committee Information System for hospital management.',
      link: '#'
    },
    {
      title: 'Indeks Saham',
      subtitle: 'Databoks Katadata',
      image: '/images/marketdata.png',
      description: 'Stock market index tracking and analysis platform.',
      link: '#'
    },
    {
      title: 'Analisis Sentimen Debat Pilpres 2024',
      subtitle: 'Katadata Pemilu 2024',
      image: '/images/analisis-sentimen.png',
      description: 'Sentiment analysis platform for 2024 presidential election debates.',
      link: '#'
    },
    {
      title: 'Career Development Center BPSDMI',
      subtitle: 'TopKarir x Kemenperin',
      image: '/images/bpsdmi.png',
      description: 'Career development platform for industrial workforce.',
      link: '#'
    },
    {
      title: 'Jabar Jawara Career Center',
      subtitle: 'Disnakertrans Jabar X TopKarir',
      image: '/images/jabarjawara.png',
      description: 'West Java career center platform for job seekers and employers.',
      link: '#'
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
    <section id="projects-section" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-bold text-gray-200 mb-2">Projects</h1>
          <h2 className="text-3xl font-bold text-gray-800 -mt-8 relative z-10">My Projects</h2>
          <p className="text-gray-600 mt-4 text-lg">Here&apos;s Some of My Project that already done</p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="group relative overflow-hidden rounded-lg shadow-lg bg-white"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-semibold mb-1 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-gray-200 line-clamp-2 mb-3">
                      {project.description}
                    </p>
                    
                    <motion.a
                      href={project.link}
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Project
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </div>
              </div>
              
              {/* Content (visible on mobile) */}
              <div className="p-6 md:hidden">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-blue-600 mb-2">
                  {project.subtitle}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  View Project
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.a
            href="#contact-section"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact-section')?.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
              });
            }}
          >
            Let&apos;s Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
