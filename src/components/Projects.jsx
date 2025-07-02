import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import labrador from '../assets/images/labrador.jpg';
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiSocketdotio, SiMysql, SiDjango, SiNextdotjs, SiTypescript } from 'react-icons/si';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  
  const projects = [
    {
      title: "Student Information Management System",
      description: "A comprehensive web application for managing student data, courses, and academic records. Features include user authentication, role-based access control, and real-time updates.",
      tech: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JS", icon: <FaJs /> },
        { name: "PHP", icon: <FaPhp /> },
        { name: "MySQL", icon: <SiMysql /> }
      ],
      image: "/halon.jpeg", // Updated to use the correct image path
      liveLink: "https://snhssims.online",
      githubLink: "https://github.com/username/sims",
      category: "Full Stack"
    },
    {
      title: "To-Do List Application",
      description: "A React-based to-do list application with features like task creation, completion tracking, and task filtering. Built with React and Vite for optimal performance.",
      tech: [
        { name: "React", icon: <FaReact /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JS", icon: <FaJs /> }
      ],
      image: "/halon (1).jpeg", // Path to the To-Do List image
      liveLink: "https://todolisthalon.netlify.app/",
      githubLink: "https://github.com/Ahmidserhan/todolist",
      category: "Frontend"
    },
    {
      title: "Pokemon Explorer",
      description: "An interactive Pokemon application that uses the PokeAPI to display Pokemon information, stats, and abilities. Features include search functionality and detailed Pokemon profiles.",
      tech: [
        { name: "React", icon: <FaReact /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JS", icon: <FaJs /> }
      ],
      image: "/halon (2).jpeg", // Path to the Pokemon app image
      liveLink: "https://pokelon.netlify.app/",
      githubLink: "https://github.com/Ahmidserhan/pokelon",
      category: "API Integration"
    },
    {
      title: "Orion Tech Website",
      description: "An ongoing corporate website project for a startup company based in Zamboanga City, Philippines. Features modern design, responsive user interface, and optimized performance for enhanced user experience.",
      tech: [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> }
      ],
      image: "/orion.jpg",
      liveLink: "https://oriontech-pi.vercel.app/", // Ongoing project
      githubLink: "#", // Private repository
      category: "Corporate Website"
    }
  ];
                   
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    
    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
      setTouchStart(null);
    }
  };

  return (
    <section id="projects" className="projects">
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
          <h2>Featured Projects</h2>
          <div className="underline"></div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="section-subtitle"
          >
            A showcase of my recent work and ongoing projects
          </motion.p>
        </motion.div>
      </motion.div>

      <div 
        className="carousel-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <button className="carousel-button prev" onClick={prevSlide}>←</button>
        
        <AnimatePresence mode='wait'>
          <motion.div 
            key={currentIndex}
            className="carousel-slide"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="project-card">
              <div className="project-image">
                <img src={projects[currentIndex].image} alt={projects[currentIndex].title} loading="lazy" />
                <motion.div 
                  className="project-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={projects[currentIndex].liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={projects[currentIndex].githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </motion.a>
                </motion.div>
              </div>
              <div className="project-info">
                <h3>{projects[currentIndex].title}</h3>
                <p>{projects[currentIndex].description}</p>
                <div className="tech-stack">
                  {projects[currentIndex].tech.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech.icon}
                      <span className="tech-name">{tech.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button className="carousel-button next" onClick={nextSlide}>→</button>
      </div>

      <div className="carousel-dots">
        {projects.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
