import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Code2, Cpu, Globe, Zap, ArrowRight, ChevronDown, Palette } from 'lucide-react';
import confetti from 'canvas-confetti';
import './App.css';

// Components

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest('button, a, .stack-card, .timeline-item, .edu-card, .cert-tag'));
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 400, mass: 0.5 }}
      />
      <motion.div
        className="cursor-ring"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isHovering ? 2.5 : 1,
          borderColor: isHovering ? 'var(--primary)' : 'var(--text-muted)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.8 }}
      />
    </>
  );
};

const ThemeSwitcher = ({ currentTheme, setTheme }: { currentTheme: string, setTheme: (t: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const themes = ['obsidian', 'nebula', 'blueprint'];

  return (
    <div className="theme-switcher">
      <motion.button
        whileHover={{ rotate: 180 }}
        onClick={() => setIsOpen(!isOpen)}
        className="theme-btn glass-card"
      >
        <Palette size={20} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="theme-options glass-card"
          >
            {themes.map(t => (
              <button
                key={t}
                className={`theme-option ${currentTheme === t ? 'active' : ''}`}
                onClick={() => {
                  setTheme(t);
                  setIsOpen(false);
                  confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: t === 'nebula' ? ['#a855f7', '#ec4899'] : t === 'blueprint' ? ['#22d3ee', '#3b82f6'] : ['#6366f1', '#4f46e5']
                  });
                }}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-initial">A</span>
          <span>ANTIGRAVITY</span>
        </div>
        <div className="nav-links">
          <a href="#about">Story</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#certs">Certs</a>
          <a href="#volunteer">Volunteer</a>
          <a href="#contact" className="nav-cta">Connect</a>
        </div>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-badge">Creative Developer & Problem Solver</span>
          <h1 className="hero-title">
            I build <span className="gradient-text">digital magic</span> <br />
            one pixel at a time.
          </h1>
          <p className="hero-description">
            Hey, I'm <span className="text-white">Antigravity</span>. I turn complex ideas into elegant, interactive experiences.
            Obsessed with the "how" and "why" behind every line of code.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>
              See my work <ArrowRight size={18} />
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Let's chat
            </button>
          </div>
        </motion.div>
      </div>

      <div className="hero-visual">
        <div className="hero-image-container glass-card">
          <img src="/assets/personal_image.png" alt="Antigravity" className="hero-personal-img" />
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="hero-scroll"
      >
        <ChevronDown />
      </motion.div>
    </section>
  );
};

interface StackCardProps {
  icon: any;
  title: string;
  items: string[];
  color: string;
}

const StackCard = ({ icon: Icon, title, items, color }: StackCardProps) => (
  <motion.div
    whileHover={{ y: -10, scale: 1.02 }}
    className="stack-card glass-card"
  >
    <div className="stack-icon-wrapper" style={{ background: `${color}20`, color: color }}>
      <Icon size={24} />
    </div>
    <h3>{title}</h3>
    <ul className="stack-list">
      {items.map((item: string, i: number) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </motion.div>
);

const SkillsSection = () => {
  const categories = [
    {
      title: "Core Tech",
      items: ["React", "TypeScript", "Node.js", "GraphQL"],
      icon: Code2,
      color: "#6366f1"
    },
    {
      title: "Systems",
      items: ["Docker", "AWS", "PostgreSQL", "Redis"],
      icon: Cpu,
      color: "#a855f7"
    },
    {
      title: "Creative",
      items: ["Three.js", "Framer", "Figma", "Blender"],
      icon: Palette,
      color: "#22d3ee"
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2 className="section-title">Technical <span className="gradient-text">Engine</span></h2>
        <p>A blend of modern frameworks and low-level engineering.</p>
      </div>
      <div className="stack-grid">
        {categories.map((cat, i) => (
          <StackCard key={i} icon={cat.icon} title={cat.title} items={cat.items} color={cat.color} />
        ))}
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Quantum Solutions",
      role: "Lead Interface Architect",
      period: "2023 - Present",
      desc: "Architecting complex visualization engines using React and WebGL."
    },
    {
      company: "Stellar Labs",
      role: "Full Stack Engineer",
      period: "2021 - 2023",
      desc: "Developed distributed systems handling millions of daily requests."
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="section-header">
        <h2 className="section-title">Professional <span className="gradient-text">Journey</span></h2>
      </div>
      <div className="timeline">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="timeline-item glass-card"
          >
            <span className="timeline-period">{exp.period}</span>
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <p>{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const EducationSection = () => (
  <section id="education" className="education">
    <div className="section-header">
      <h2 className="section-title">Academic <span className="gradient-text">Roots</span></h2>
    </div>
    <div className="edu-grid">
      <div className="edu-card glass-card">
        <h3>B.S. Computer Science</h3>
        <p className="edu-inst">Imperial Tech University</p>
        <p className="edu-grade">GPA 3.9/4.0</p>
      </div>
      <div className="edu-card glass-card">
        <h3>Adv. Software Engineering</h3>
        <p className="edu-inst">Digital Polytech Institute</p>
        <p className="edu-grade">Honors Certificate</p>
      </div>
    </div>
  </section>
);

const CertsSection = () => {
  const certs = ["AWS Solutions Architect", "TensorFlow Developer", "Google Cloud Lead Engineer"];
  return (
    <section id="certs" className="certs">
      <div className="section-header">
        <h2 className="section-title">Expert <span className="gradient-text">Validations</span></h2>
      </div>
      <div className="certs-grid">
        {certs.map((cert, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }} className="cert-tag glass-card">
            <Globe className="cert-icon" size={16} />
            <span>{cert}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const VolunteerSection = () => (
  <section id="volunteer" className="volunteer">
    <div className="section-header">
      <h2 className="section-title">Community <span className="gradient-text">Impact</span></h2>
    </div>
    <div className="vol-card glass-card">
      <h3>Tech for Humanity</h3>
      <p>Mentored 20+ aspiring developers from underrepresented communities in building their first applications.</p>
    </div>
  </section>
);

const ContactSection = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-card glass-card">
        <div className="contact-info">
          <h2>Ready to <span className="gradient-text">Illuminate</span> your next project?</h2>
          <p>I'm always open to discussing innovative ideas, partnership opportunities, or mentorship.</p>
          <div className="social-links">
            <a href="#"><Github /></a>
            <a href="#"><Linkedin /></a>
            <a href="#"><Twitter /></a>
            <a href="#"><Mail /></a>
          </div>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Full Name" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows={4}></textarea>
          </div>
          <button type="submit" className="btn-primary w-full">Send Transmission</button>
        </form>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section id="about" className="about">
    <div className="about-grid">
      <div className="about-text">
        <h2 className="section-title">Behind the <span className="gradient-text">Screen</span></h2>
        <p>
          I'm a developer who believes that code is a form of craftsmanship.
          When I'm not pushing pixels or debugging async functions, you'll find me
          exploring generative art, drinking too much coffee, and thinking about
          how to make the web a more beautiful place.
        </p>
        <div className="about-stats">
          <div className="stat">
            <span className="stat-num">4+</span>
            <span className="stat-label">Years XP</span>
          </div>
          <div className="stat">
            <span className="stat-num">50+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat">
            <span className="stat-num">∞</span>
            <span className="stat-label">Curiosity</span>
          </div>
        </div>
      </div>
      <div className="about-visual glass-card">
        <div className="personal-avatar">
          <img src="/assets/personal_image.png" alt="Antigravity" className="avatar-img" />
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-logo">
        <span className="logo-initial">A</span>
        <span>ANTIGRAVITY</span>
      </div>
      <p>&copy; 2026 Crafted with precision by <span className="text-white">Antigravity</span>.</p>
    </div>
  </footer>
);

const App = () => {
  const [theme, setTheme] = useState('obsidian');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [theme]);

  return (
    <div className="app">
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0, scale: 1.1 }}
            className="loader"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="loader-icon"
            >
              <Zap size={40} />
            </motion.div>
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              Initializing Flux...
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <CustomCursor />
          <div className="grain-overlay"></div>
          <ThemeSwitcher currentTheme={theme} setTheme={setTheme} />
          <Navbar />
          <Hero />
          <div className="content-wrap">
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <EducationSection />
            <CertsSection />
            <VolunteerSection />
            <ContactSection />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
