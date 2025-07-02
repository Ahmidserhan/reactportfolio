import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaPhp, FaBootstrap } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiSupabase, SiMysql, SiSqlite } from 'react-icons/si';

const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML5", icon: <FaHtml5 data-icon="html5" /> },
        { name: "CSS3", icon: <FaCss3Alt data-icon="css3-alt" /> },
        { name: "JavaScript", icon: <FaJs data-icon="js" /> },
        { name: "TypeScript", icon: <SiTypescript data-icon="typescript" /> },
        { name: "React", icon: <FaReact data-icon="react" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss data-icon="tailwindcss" /> },
        { name: "Bootstrap", icon: <FaBootstrap data-icon="bootstrap" /> }
      ]
    },
    {
      category: "Backend & Database",
      items: [
        { name: "PHP", icon: <FaPhp data-icon="php" /> },
        { name: "Supabase", icon: <SiSupabase data-icon="supabase" /> },
        { name: "MySQL", icon: <SiMysql data-icon="mysql" /> },
        { name: "SQLite", icon: <SiSqlite data-icon="sqlite" /> }
      ]
    }
  ];


  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2>About Me</h2>
        <div className="underline"></div>
      </div>

      <div className="about-container">
        <div className="about-left">
          <img
            src="labrador.jpg"
            alt="Profile"
            loading="lazy"
            srcSet="labrador-small.jpg 300w, labrador.jpg 600w"
            sizes="(max-width: 768px) 300px, 600px"
          />

          <div className="experience-cards">
            <div className="exp-card">
              <span className="number">1+</span>
              <span className="label">Years Experience</span>
            </div>
            <div className="exp-card">
              <span className="number">4+</span>
              <span className="label">Projects Completed</span>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="bio">
            <h3>Web Developer specializing in React, TypeScript & PHP</h3>
            <p>I transform ideas into elegant, responsive web applications. With a keen eye for detail and a passion for clean code, I create seamless user experiences that drive results.</p>
          </div>

          <div className="skills-container">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-group">
                <h4>{skillGroup.category}</h4>
                <div className="skill-tags">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="skill-tag" style={{ background: 'var(--background-light)' }}>
                      {skill.icon}
                      <span className="skill-name">{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
