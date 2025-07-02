import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'hero-stars';

    for (let i = 0; i < 150; i++) {
      const star = document.createElement('div');
      star.className = 'hero-star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animation = `twinkle ${Math.random() * 4 + 2}s infinite`;
      starsContainer.appendChild(star);
    }

    for (let i = 0; i < 5; i++) {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'hero-shooting-star';
      shootingStar.style.left = `${Math.random() * 100}%`;
      shootingStar.style.top = `${Math.random() * 100}%`;
      shootingStar.style.animation = `twinkle ${Math.random() * 2 + 1}s infinite`;
      starsContainer.appendChild(shootingStar);
    }

    document.querySelector('.hero').appendChild(starsContainer);

    return () => {
      document.querySelector('.hero')?.removeChild(starsContainer);
    };
  }, []);

  return (
    <section id="hero" className="hero" style={{ background: 'linear-gradient(135deg, var(--background-light) 0%, var(--background-white) 100%)' }}>
      <div className="hero-content">
        <span className="greeting">Welcome, I'm</span>
        <h1>Ahmidserhan Halon</h1>
        <h2 className="role">Web Developer</h2>
        <p className="bio">Passionate about building web applications using PHP, JavaScript, React, and more. Still learning and growing every day!</p>
        <div className="cta-group">
          <a href="#projects" className="cta-button primary">View Projects</a>
          <a href="/Halon_Ahmidserhan (2).pdf" download="Ahmidserhan_Halon_CV.pdf" className="cta-button secondary">Download CV</a>
        </div>
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
      <div className="hero-image">
        <div className="image-wrapper">
          <img
            src="labrador.jpg"
            alt="Profile"
            loading="lazy"
            srcSet="labrador-small.jpg 300w, labrador.jpg 600w"
            sizes="(max-width: 768px) 300px, 600px"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
