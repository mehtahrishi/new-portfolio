import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Code2, Cpu, Globe, Zap, ArrowRight, ChevronDown, Palette, Rocket, Orbit } from 'lucide-react';
import confetti from 'canvas-confetti';
import './App.css';

// Components
const CosmicBackground = () => {
  const stars = useMemo(() => {
    return [...Array(100)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${1 + Math.random() * 3}px`,
      opacity: 0.3 + Math.random() * 0.7,
      duration: `${2 + Math.random() * 4}s`
    }));
  }, []);

  return (
    <div className="cosmic-bg">
      {/* Stars */}
      {
        stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
              '--duration': star.duration
            } as any}
          />
        ))
      }

      {/* Constellations */}
      <svg className="constellation-wrapper">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Constellation Alpha */}
        <g stroke="white" strokeWidth="0.8" strokeOpacity="0.4">
          <line x1="10%" y1="20%" x2="15%" y2="25%" />
          <line x1="15%" y1="25%" x2="12%" y2="35%" />
          <line x1="12%" y1="35%" x2="5%" y2="40%" />
        </g>
        <g fill="white" filter="url(#glow)">
          <circle cx="10%" cy="20%" r="2" />
          <circle cx="15%" cy="25%" r="2.5" />
          <circle cx="12%" cy="35%" r="1.8" />
          <circle cx="5%" cy="40%" r="1.5" />
        </g>

        {/* Constellation Beta */}
        <g stroke="white" strokeWidth="0.8" strokeOpacity="0.4">
          <line x1="80%" y1="60%" x2="85%" y2="70%" />
          <line x1="85%" y1="70%" x2="78%" y2="75%" />
          <line x1="78%" y1="75%" x2="70%" y2="65%" />
        </g>
        <g fill="white" filter="url(#glow)">
          <circle cx="80%" cy="60%" r="2.2" />
          <circle cx="85%" cy="70%" r="2" />
          <circle cx="78%" cy="75%" r="2.5" />
          <circle cx="70%" cy="65%" r="1.8" />
        </g>

        {/* Constellation Gamma */}
        <g stroke="white" strokeWidth="0.8" strokeOpacity="0.4">
          <line x1="40%" y1="10%" x2="45%" y2="5%" />
          <line x1="45%" y1="5%" x2="52%" y2="8%" />
          <line x1="52%" y1="8%" x2="48%" y2="15%" />
        </g>
        <g fill="white" filter="url(#glow)">
          <circle cx="40%" cy="10%" r="1.5" />
          <circle cx="45%" cy="5%" r="2" />
          <circle cx="52%" cy="8%" r="2.2" />
          <circle cx="48%" cy="15%" r="1.8" />
        </g>

        {/* Constellation Delta - New */}
        <g stroke="white" strokeWidth="0.8" strokeOpacity="0.4">
          <line x1="20%" y1="80%" x2="25%" y2="85%" />
          <line x1="25%" y1="85%" x2="30%" y2="80%" />
          <line x1="30%" y1="80%" x2="28%" y2="72%" />
        </g>
        <g fill="white" filter="url(#glow)">
          <circle cx="20%" cy="80%" r="2" />
          <circle cx="25%" cy="85%" r="2.2" />
          <circle cx="30%" cy="80%" r="1.8" />
          <circle cx="28%" cy="72%" r="2" />
        </g>
      </svg>

      {/* Smaller Planets */}
      <div
        className="planet"
        style={{
          width: '60px', height: '60px',
          background: 'radial-gradient(circle at 30% 30%, #4f46e5, #000)',
          top: '10%',
          '--rev-duration': '120s',
          '--rev-delay': '-5s'
        } as any}
      />
      <div
        className="planet"
        style={{
          width: '100px', height: '100px',
          background: 'radial-gradient(circle at 30% 30%, #a855f7, #000)',
          top: '65%',
          '--rev-duration': '120s',
          '--rev-delay': '-20s'
        } as any}
      >
        <div className="planet-ring" style={{ width: '160%', height: '40%' }} />
      </div>
      <div
        className="planet"
        style={{
          width: '40px', height: '40px',
          background: 'radial-gradient(circle at 30% 30%, #22d3ee, #000)',
          top: '35%',
          '--rev-duration': '100s',
          '--rev-delay': '-35s'
        } as any}
      />

      {/* Mini Mars */}
      <div
        className="planet"
        style={{
          width: '25px', height: '25px',
          background: 'radial-gradient(circle at 30% 30%, #ef4444, #7f1d1d)',
          top: '50%',
          '--rev-duration': '100s',
          '--rev-delay': '-15s'
        } as any}
      />

      {/* Mini Jupiter */}
      <div
        className="planet"
        style={{
          width: '50px', height: '50px',
          background: 'radial-gradient(circle at 30% 30%, #fcd34d, #92400e, #451a03)',
          top: '25%',
          '--rev-duration': '150s',
          '--rev-delay': '-45s'
        } as any}
      />

      {/* Mini Neptune */}
      <div
        className="planet"
        style={{
          width: '35px', height: '35px',
          background: 'radial-gradient(circle at 30% 30%, #3b82f6, #1e3a8a, #000)',
          top: '80%',
          '--rev-duration': '180s',
          '--rev-delay': '-60s'
        } as any}
      />

      {/* Mini Earth */}
      <div
        className="planet"
        style={{
          width: '40px', height: '40px',
          background: 'radial-gradient(circle at 30% 30%, #4ade80, #3b82f6, #1e3a8a)',
          top: '45%',
          boxShadow: '0 0 15px rgba(34, 211, 238, 0.4), inset -8px -8px 15px rgba(0,0,0,0.6)',
          '--rev-duration': '130s',
          '--rev-delay': '-10s'
        } as any}
      />

      {/* Saturn-like Planet */}
      <div
        className="planet"
        style={{
          width: '80px', height: '80px',
          background: 'radial-gradient(circle at 30% 30%, #fde68a, #92400e, #000)',
          top: '20%',
          '--rev-duration': '220s',
          '--rev-delay': '-30s'
        } as any}
      >
        <div className="planet-ring" style={{
          width: '220%',
          height: '50%',
          borderWidth: '8px',
          borderColor: 'rgba(253, 230, 138, 0.2)',
          boxShadow: '0 0 15px rgba(253, 230, 138, 0.1)'
        }} />
        <div className="planet-ring" style={{
          width: '180%',
          height: '40%',
          borderWidth: '2px',
          borderColor: 'rgba(253, 230, 138, 0.4)'
        }} />
      </div>

      {/* Rare Falling Asteroid (Every 5 Minutes) */}
      <div
        className="asteroid"
        style={{
          '--start-x': '30vw',
          '--end-x': '70vw',
          '--duration': '300s',
          '--trail-angle': '-20deg'
        } as any}
      >
        <div className="asteroid-trail" />
      </div>
    </div >
  );
};

const UfoIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4c-3.3 0-6 1.8-6 4 0 2.2 2.7 4 6 4s6-1.8 6-4c0-2.2-2.7-4-6-4z" />
    <path d="M2 13c0-2.8 4.5-5 10-5s10 2.2 10 5-4.5 5-10 5-10-2.2-10-5z" />
    <path d="M7 16v2" />
    <path d="M12 17v2" />
    <path d="M17 16v2" />
  </svg>
);

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPos, setTrailPos] = useState({ x: window.innerWidth - 60, y: window.innerHeight - 60 });
  const [isHovering, setIsHovering] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const dx = e.clientX - position.x;
      const dy = e.clientY - position.y;

      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
        setRotation(angle);
      }

      setPosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      // Reset moving state after movement stops
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setIsMoving(false), 1000);

      // Follower trail lag if moving
      setTrailPos({ x: e.clientX, y: e.clientY });
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
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [position]);

  return (
    <>
      <motion.div
        className="cursor-spaceship"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          rotate: rotation,
          scale: isHovering ? 1.4 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 500, mass: 0.2 }}
      >
        <Rocket size={24} fill="currentColor" />
      </motion.div>

      <motion.div
        className="cursor-alien-trail"
        animate={{
          x: isMoving ? trailPos.x - 10 : window.innerWidth - 60,
          y: isMoving ? trailPos.y + 20 : window.innerHeight - 60,
          scale: isMoving ? (isHovering ? 1.2 : 0.9) : 0,
          opacity: isMoving ? 0.8 : 0,
        }}
        transition={{ type: 'spring', damping: 15, stiffness: 80, mass: 0.5 }}
      >
        <UfoIcon size={20} />
      </motion.div>
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
        <motion.div
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            whileHover={{ rotate: 360, transition: { duration: 8, repeat: Infinity, ease: "linear" } }}
            className="logo-icon-container"
          >
            <Orbit className="logo-icon" size={24} />
          </motion.div>
          <motion.span
            whileHover={{ x: 5, color: 'var(--primary)' }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            HRISHI'S SPACE
          </motion.span>
        </motion.div>
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
            I build <span className="gradient-text">cosmic magic</span> <br />
            in the deep void.
          </h1>
          <p className="hero-description">
            Hey, I'm <span className="text-white">Hrishi</span>. I turn complex ideas into elegant, interactive experiences.
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
          <img src="/assets/personal_image.png" alt="Hrishi" className="hero-personal-img" />
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
          <img src="/assets/personal_image.png" alt="Hrishi" className="avatar-img" />
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-logo">
        <Orbit className="logo-icon" size={24} />
        <span>HRISHI'S SPACE</span>
      </div>
      <p>&copy; 2026 Crafted with precision by <span className="text-white">Hrishi</span>.</p>
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
          <CosmicBackground />
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
