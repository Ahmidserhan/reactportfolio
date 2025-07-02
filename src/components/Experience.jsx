import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "Orion Tech",
      duration: "2025 - Present",
      description: "Designed and implemented responsive user interfaces using HTML, CSS, and JavaScript. Worked with the design team to create visually appealing and user-friendly web applications. Optimized website performance and ensured cross-browser compatibility.",
      type: "work",
      icon: <FaBriefcase />
    },
    {
      id: 2,
      role: "BSIT Student",
      company: "Western Mindanao State University",
      duration: "August 2021 - May 2025",
      description: "Studying Bachelor of Science in Information Technology with a focus on web development and software engineering. Participating in various coding competitions and hackathons. Maintaining a strong academic record.",
      type: "education",
      icon: <FaGraduationCap />
    }
  ];

  return (
    <section id="experience" className="experience">
      <motion.div 
        className="header-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ background: 'rgba(32, 32, 32, 0.7)' }} 
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2>Experience</h2>
          <div className="underline"></div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="section-subtitle"
          >
            My professional journey in the tech industry
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="experience-container">
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              className={`timeline-item ${exp.type}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="timeline-icon">
                {exp.icon}
              </div>
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <p className="timeline-duration">{exp.duration}</p>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
