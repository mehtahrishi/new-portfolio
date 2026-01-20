import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Code2, Globe, Zap, ArrowRight, ChevronDown, Rocket, Orbit, Database, Brain, Server, Palette } from 'lucide-react';
import { GoCopilot } from "react-icons/go";
import { FaCss3Alt, FaAws } from "react-icons/fa";
import { IoLogoJavascript, IoFlash } from "react-icons/io5";
import { RiGeminiFill } from "react-icons/ri";
import { SiFirebase, SiGnubash, SiGithubactions, SiDrizzle, SiClaude, SiPostgresql, SiPostman, SiPuppeteer } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { AiOutlineOpenAI } from "react-icons/ai";
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
      >
        <div className="moon" />
      </div>

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

const Typewriter = ({ text, delay = 50, onComplete }: { text: string; delay?: number; onComplete?: () => void }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [index, text, delay, onComplete]);

  return <>{displayedText}</>;
};

const SpaceGame = () => {
  const [ufos, setUfos] = useState<any[]>([]);
  const [bullets, setBullets] = useState<any[]>([]);
  const [ufoBullets, setUfoBullets] = useState<any[]>([]);
  const [explosions, setExplosions] = useState<any[]>([]);
  const [shipX, setShipX] = useState(50); // Percentage
  const [shipHealth, setShipHealth] = useState(100);
  const [missionProgress, setMissionProgress] = useState(0);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'ended'>('idle');
  const [finalSecret, setFinalSecret] = useState("");
  const [isHit, setIsHit] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [showLockNotice, setShowLockNotice] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const gameLoopRef = useRef<number | null>(null);
  const lastFiredRef = useRef<number>(0);
  const lastSpawnIntervalRef = useRef<number>(-1);
  const startTimeRef = useRef<number>(0);
  const [isShaking, setIsShaking] = useState(false);

  const secrets = [
    "Why did the developer go broke? Because he used up all his cache.",
    "There are 10 types of people in the world: those who understand binary, and those who don't.",
    "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'",
    "I'm not lazy, I'm just in energy-saving mode.",
    "Programmer: A machine that turns caffeine into code.",
    "The best thing about a boolean is even if you are wrong, you are only off by a bit."
  ];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const resetGame = useCallback(() => {
    setIsLocked(false);
    setShowLockNotice(false);
    setUfos([]);
    setBullets([]);
    setUfoBullets([]);
    setMissionProgress(0);
    setShipHealth(100);
    setGameState('idle');
    lastSpawnIntervalRef.current = -1;
    startTimeRef.current = 0;
    setIsShaking(false);
    if (document.pointerLockElement) {
      document.exitPointerLock?.();
    }
  }, []);

  const endGame = useCallback(() => {
    setGameState('ended');
    setFinalSecret(secrets[Math.floor(Math.random() * secrets.length)]);
    if (document.pointerLockElement) {
      document.exitPointerLock?.();
    }
  }, [secrets]);

  const fireBullet = useCallback(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setBullets(prev => [...prev, {
        id: Math.random(),
        x: `${shipX}%`,
        y: rect.height - 40
      }]);
    }
  }, [shipX]);

  const handleClick = useCallback(() => {
    if (containerRef.current && !isLocked && gameState !== 'ended') {
      containerRef.current.requestPointerLock();
      setIsLocked(true);
      setShowLockNotice(true);
      setGameState('playing');
      setTimeout(() => setShowLockNotice(false), 3000);
    }
    if (gameState === 'playing') fireBullet();
  }, [isLocked, gameState, fireBullet]);

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setShipX(prev => Math.max(5, prev - 5));
    if (e.key === 'ArrowRight') setShipX(prev => Math.min(95, prev + 5));
    if (e.key === ' ') fireBullet();

    if (e.ctrlKey && e.key.toLowerCase() === 'l') {
      e.preventDefault();
      resetGame();
    }
  }, [fireBullet, resetGame]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (containerRef.current) {
      if (isLocked) {
        setShipX(prev => {
          const move = (e.movementX / containerRef.current!.clientWidth) * 100;
          return Math.max(5, Math.min(95, prev + move));
        });
      } else {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        setShipX(Math.max(5, Math.min(95, x)));
      }
    }
  }, [isLocked]);

  const handleTouch = useCallback((e: any) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const touch = e.touches ? e.touches[0] : e;
      const x = ((touch.clientX - rect.left) / rect.width) * 100;
      setShipX(Math.max(5, Math.min(95, x)));
    }
  }, []);

  useEffect(() => {
    const lockChange = () => {
      if (document.pointerLockElement !== containerRef.current) {
        setIsLocked(false);
      }
    };

    if (isLocked) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    window.addEventListener('keydown', handleKey);
    document.addEventListener('pointerlockchange', lockChange);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKey);
      document.removeEventListener('pointerlockchange', lockChange);
    };
  }, [isLocked, handleKey, handleMouseMove]);

  useEffect(() => {
    const loop = () => {
      if (!containerRef.current || !isLocked || gameState !== 'playing') {
        gameLoopRef.current = requestAnimationFrame(loop);
        return;
      }

      if (startTimeRef.current === 0) startTimeRef.current = Date.now();
      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      const progress = (elapsed / 90) * 100;

      if (progress >= 100) {
        setMissionProgress(100);
        endGame();
        return;
      }
      setMissionProgress(progress);

      const rect = containerRef.current.getBoundingClientRect();

      // Auto Shooting
      if (Date.now() - lastFiredRef.current > 150) {
        setBullets(prev => [...prev, {
          id: Math.random(),
          x: `${shipX}%`,
          y: rect.height - 40
        }]);
        lastFiredRef.current = Date.now();
      }

      // Update UFOs
      const currentSec = (missionProgress / 100) * 90;
      const intervalIndex = Math.floor(currentSec / 5);

      if (intervalIndex > lastSpawnIntervalRef.current) {
        lastSpawnIntervalRef.current = intervalIndex;
        const ufoCount = currentSec >= 60 ? 4 : 2;

        const newBorns: any[] = [];
        for (let i = 0; i < ufoCount; i++) {
          newBorns.push({
            id: Math.random() + i,
            x: `${Math.random() * 80 + 10}%`,
            y: -30,
            health: 3,
            lastShot: 0
          });
        }
        setUfos(prev => [...prev, ...newBorns]);
      }

      setUfos(prev => {
        let newUfos = prev.map(u => ({ ...u, y: u.y + 1.2 }));

        newUfos.forEach(ufo => {
          if (Math.random() < 0.01 && (!ufo.lastShot || Date.now() - ufo.lastShot > 2000)) {
            setUfoBullets(pb => [...pb, { id: Math.random(), x: ufo.x, y: ufo.y + 20 }]);
            ufo.lastShot = Date.now();
          }
        });

        return newUfos.filter(u => u.y < rect.height + 50);
      });

      setBullets(prev => prev.map(b => ({ ...b, y: b.y - 20 })).filter(b => b.y > -20));
      setUfoBullets(prev => prev.map(b => ({ ...b, y: b.y + 4 })).filter(b => b.y < rect.height + 20));

      // Player Collisions
      setUfoBullets(prev => {
        let remaining = [...prev];
        remaining = remaining.filter(bullet => {
          const bX = parseFloat(bullet.x) * rect.width / 100;
          const sX = shipX * rect.width / 100;
          const dist = Math.sqrt(Math.pow(bX - sX, 2) + Math.pow(bullet.y - (rect.height - 40), 2));
          if (dist < 30) {
            setIsHit(true);
            setIsShaking(true);
            setTimeout(() => setIsShaking(false), 200);
            setShipHealth(h => {
              if (h <= 10) {
                endGame();
                return 0;
              }
              return h - 10;
            });
            setTimeout(() => setIsHit(false), 200);
            return false;
          }
          return true;
        });
        return remaining;
      });

      // Enemy Collisions
      setUfos(prevUfos => {
        const currentUfos = [...prevUfos];
        setBullets(currBullets => {
          let updatedBullets = [...currBullets];
          currentUfos.forEach(ufo => {
            updatedBullets = updatedBullets.filter(bullet => {
              const uX = parseFloat(ufo.x) * rect.width / 100;
              const bX = parseFloat(bullet.x) * rect.width / 100;
              const dist = Math.sqrt(Math.pow(bX - uX, 2) + Math.pow(bullet.y - ufo.y, 2));
              if (dist < 35) {
                ufo.health -= 1;
                if (ufo.health <= 0) {
                  setExplosions(ex => [...ex, { id: Date.now(), x: ufo.x, y: ufo.y }]);
                  setTimeout(() => setExplosions(ex => ex.slice(1)), 400);
                }
                return false;
              }
              return true;
            });
          });
          return updatedBullets;
        });
        return currentUfos.filter(u => u.health > 0);
      });

      gameLoopRef.current = requestAnimationFrame(loop);
    };

    gameLoopRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(gameLoopRef.current!);
  }, [shipX, isLocked, gameState, endGame, fireBullet]);

  return (
    <div className="space-game-root">
      <div className="mission-timer">
        <span>Time Remaining</span>
        {formatTime(Math.max(0, 90 - (missionProgress / 100 * 90)))}
      </div>
      <div
        className={`game-wrapper ${isShaking ? 'shake' : ''}`}
        ref={containerRef}
        onMouseDown={handleClick}
        onMouseMove={(e) => !isLocked && handleMouseMove(e as any)}
        onTouchStart={handleTouch}
        onTouchMove={handleTouch}
      >
        {showLockNotice && (
          <div className="lock-warning">
            <p style={{ fontWeight: 600, color: 'var(--primary)' }}>CURSOR LOCKED</p>
            <p style={{ fontSize: '12px', marginTop: '8px', opacity: 0.9 }}>
              Press <kbd>Ctrl</kbd> + <kbd>L</kbd> to unlock and end mission.
            </p>
          </div>
        )}

        {gameState === 'ended' && (
          <div className="game-results">
            <h2 className="result-title">
              <Typewriter text="Mission Results" delay={70} />
            </h2>
            <div className="result-stats" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>SURVIVED: <span style={{ color: 'var(--accent)', fontSize: '1.5rem', fontWeight: 800 }}>{formatTime(missionProgress / 100 * 90)}</span></div>
              <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>TIME LEFT: <span style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 800 }}>{formatTime(Math.max(0, 90 - (missionProgress / 100 * 90)))}</span></div>
            </div>
            <div className="result-secret">
              "<Typewriter text={finalSecret} delay={30} />"
            </div>
            <button className="restart-btn" onClick={resetGame}>Try Again</button>
          </div>
        )}

        <div className="game-container">
          {ufos.map(ufo => (
            <div key={ufo.id} className="game-ufo" style={{ left: ufo.x, top: ufo.y }}>
              <div className="game-ufo-health"><div className="health-bar" style={{ width: `${(ufo.health / 3) * 100}%` }} /></div>
              <UfoIcon size={35} />
            </div>
          ))}
          {bullets.map(bullet => (
            <div key={bullet.id} className="game-bullet" style={{ left: bullet.x, top: bullet.y }} />
          ))}
          {ufoBullets.map(bullet => (
            <div key={bullet.id} className="game-bullet ufo-bullet" style={{ left: bullet.x, top: bullet.y }} />
          ))}
          {explosions.map(ex => (
            <div key={ex.id} className="explosion" style={{ left: ex.x, top: ex.y }} />
          ))}
          <div className="player-health-container" style={{ left: `${shipX}%` }}>
            <div className="health-bar" style={{ width: `${shipHealth}%`, borderRadius: '2px' }} />
          </div>
          <div className={`game-ship ${isHit ? 'ship-hit' : ''}`} style={{ left: `${shipX}%` }}>
            <Rocket size={40} style={{ transform: 'rotate(-45deg)' }} />
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 10, left: 10, fontSize: '10px', color: 'rgba(255,255,255,0.4)', pointerEvents: 'none' }}>
          {isLocked ? 'MISSION ACTIVE • CTRL+L TO EXIT' : 'CLICK TO ENTER BATTLE STATION'}
        </div>
      </div>
    </div>
  );
};

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPos, setTrailPos] = useState({ x: window.innerWidth - 60, y: window.innerHeight - 60 });
  const [isHovering, setIsHovering] = useState(false);
  const [isInGame, setIsInGame] = useState(false);
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

      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setIsMoving(false), 1000);

      setTrailPos({ x: e.clientX, y: e.clientY });
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest('button, a, .stack-card, .timeline-item, .edu-card, .cert-tag'));
      setIsInGame(!!target.closest('.game-wrapper'));
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
          opacity: isInGame ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 500, mass: 0.2 }}
        style={{ pointerEvents: 'none' }}
      >
        <Rocket size={24} fill="currentColor" />
      </motion.div>

      <motion.div
        className="cursor-alien-trail"
        animate={{
          x: isMoving ? trailPos.x - 10 : window.innerWidth - 60,
          y: isMoving ? trailPos.y + 20 : window.innerHeight - 60,
          scale: isMoving ? (isHovering ? 1.2 : 0.9) : 0,
          opacity: (isMoving && !isInGame) ? 0.8 : 0,
        }}
        transition={{ type: 'spring', damping: 15, stiffness: 80, mass: 0.5 }}
        style={{ pointerEvents: 'none' }}
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
          <span className="hero-badge">DevSecOps & Cloud Engineer</span>
          <h1 className="hero-title">
            I build <span className="gradient-text">secure systems</span> <br />
            in the digital void.
          </h1>
          <p className="hero-description">
            Hey, I'm <span className="text-white">Hrishi</span>. A versatile DevSecOps Engineer specializing in secure full-stack development,
            cloud infrastructure, and AI/ML workflows.
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

const SkillIcon = ({ name, icon: FallbackIcon, color, size = 40 }: { name: string; icon: any; color: string; size?: number }) => {
  const [imgError, setImgError] = useState(false);

  // Mapping names to Simple Icons slugs
  const iconMap: Record<string, string> = {
    "Git": "git", "Docker": "docker", "Kubernetes": "kubernetes", "AWS": "amazonwebservices",
    "Nginx": "nginx", "GCP": "googlecloud", "Apache": "apache", "Linux": "linux",
    "Prometheus": "prometheus", "Redis": "redis", "Python": "python", "NodeJS": "nodedotjs",
    "ExpressJS": "express", "Flask": "flask", "Selenium": "selenium", "Postman": "postman",
    "Neo4j": "neo4j", "MongoDB": "mongodb", "Appwrite": "appwrite", "ReactJS": "react",
    "NextJS": "nextdotjs", "HTML": "html5", "CSS": "css3", "JavaScript": "javascript",
    "TypeScript": "typescript", "Tailwind CSS": "tailwindcss", "Framer Motion": "framer",
    "GitHub": "github", "Jenkins": "jenkins", "Ansible": "ansible",
    "n8n": "n8n", "Make": "make", "Zapier": "zapier", "Claude": "anthropic"
  };

  const slug = iconMap[name] || name.toLowerCase().replace(/\s+/g, '');
  const iconUrl = `https://cdn.simpleicons.org/${slug}/${color.replace('#', '')}`;

  const renderIcon = () => {
    if (name === "Copilot") return <GoCopilot className="skill-brand-icon" size={size} />;
    if (name === "CSS") return <FaCss3Alt className="skill-brand-icon" size={size} />;
    if (name === "JavaScript" || name === "JS") return <IoLogoJavascript className="skill-brand-icon" size={size} />;
    if (name === "Gemini") return <RiGeminiFill className="skill-brand-icon" size={size} />;
    if (name === "Firebase Studio") return <SiFirebase className="skill-brand-icon" size={size} />;
    if (name === "Bash") return <SiGnubash className="skill-brand-icon" size={size} />;
    if (name === "SQL") return <TbBrandMysql className="skill-brand-icon" size={size} />;
    if (name === "CI/CD") return <SiGithubactions className="skill-brand-icon" size={size} />;
    if (name === "AWS") return <FaAws className="skill-brand-icon" size={size} />;
    if (name === "Drizzle ORM" || name === "Drizzle") return <SiDrizzle className="skill-brand-icon" size={size} />;
    if (name === "OpenAI") return <AiOutlineOpenAI className="skill-brand-icon" size={size} />;
    if (name === "Claude") return <SiClaude className="skill-brand-icon" size={size} />;
    if (name === "PostgreSQL" || name === "Postgres") return <SiPostgresql className="skill-brand-icon" size={size} />;
    if (name === "Postman") return <SiPostman className="skill-brand-icon" size={size} />;
    if (name === "Puppeteer") return <SiPuppeteer className="skill-brand-icon" size={size} />;
    if (name === "Groq") return <IoFlash className="skill-brand-icon" size={size} />;

    if (!imgError) {
      return (
        <img
          src={iconUrl}
          alt={name}
          className="skill-brand-icon"
          style={{ width: `${size}px`, height: `${size}px`, objectFit: 'contain' }}
          onError={() => setImgError(true)}
        />
      );
    }
    return <FallbackIcon className="skill-brand-icon" size={size} />;
  };

  return (
    <motion.div
      className="skill-icon-wrap"
      whileHover={{ scale: 1.2 }}
      style={{ color } as any}
    >
      {renderIcon()}
    </motion.div>
  );
};

const SkillsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      id: 0,
      categories: [
        {
          title: "Dev Operations",
          items: ["Git", "Docker", "Kubernetes", "AWS", "CI/CD", "Nginx", "GCP", "Apache", "Bash", "Linux", "Prometheus", "Redis"],
          icon: Server,
          color: "#6366f1",
          layout: "mirrored" as const
        },
        {
          title: "Databases",
          items: ["Neo4j", "MongoDB", "PostgreSQL", "SQL", "Appwrite", "Drizzle ORM"],
          icon: Database,
          color: "#ec4899",
          layout: "list" as const
        }
      ],
      grid: "1.4fr 0.6fr"
    },
    {
      id: 1,
      categories: [
        {
          title: "AI Tools",
          items: ["Copilot", "Claude", "Gemini", "Groq", "n8n", "Firebase Studio", "OpenAI"],
          icon: Brain,
          color: "#10b981",
          layout: "list" as const
        },
        {
          title: "Full Stack Development",
          items: ["ReactJS", "NextJS", "TypeScript", "NodeJS", "ExpressJS", "Tailwind CSS", "Framer Motion", "Python", "Flask", "JS", "HTML", "CSS", "Postman", "Puppeteer"],
          icon: Code2,
          color: "#22d3ee",
          layout: "mirrored" as const
        }
      ],
      grid: "0.6fr 1.4fr"
    }
  ];

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x > 100 && currentPage > 0) setCurrentPage(0);
    else if (info.offset.x < -100 && currentPage < 1) setCurrentPage(1);
  };

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2 className="section-title">Technical <span className="gradient-text">Engine</span></h2>
        <p>A categorized asteroid field of expertise.</p>
      </div>
      <div className="skills-carousel-viewport">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentPage}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            initial={{ rotateY: currentPage === 0 ? 45 : -45, z: -150, opacity: 0 }}
            animate={{ rotateY: 0, z: 0, opacity: 1 }}
            exit={{ rotateY: currentPage === 0 ? -45 : 45, z: -150, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="skills-grid-bento swiper-page"
            style={{
              gridTemplateColumns: pages[currentPage].grid,
              perspective: "1000px",
              cursor: "grab"
            }}
          >
            {pages[currentPage].categories.map((cat, i) => (
              <div key={i} className={`skill-category-box glass-card ${cat.layout === 'mirrored' ? 'mirrored-card' : ''}`}>
                <div className="category-header" style={{ color: cat.color }}>
                  <cat.icon size={20} />
                  <span>{cat.title}</span>
                </div>
                {cat.layout === 'mirrored' ? (
                  <div className="asteroid-cluster mirrored-cluster">
                    <div className="devops-special-grid">
                      {(() => {
                        const half = Math.ceil(cat.items.length / 2);
                        const left = cat.items.slice(0, half);
                        const right = cat.items.slice(half);
                        return left.map((item, idx) => (
                          <div key={item} style={{ display: 'contents' }}>
                            <SkillIcon name={item} icon={cat.icon} color={cat.color} size={24} />
                            <span className="skill-label">{item}</span>
                            {right[idx] ? (
                              <>
                                <span className="skill-label text-right">{right[idx]}</span>
                                <SkillIcon name={right[idx]} icon={cat.icon} color={cat.color} size={24} />
                              </>
                            ) : (
                              <><div /><div /></>
                            )}
                          </div>
                        ));
                      })()}
                    </div>
                  </div>
                ) : (
                  <div className="asteroid-cluster list-cluster">
                    {cat.items.map((item) => (
                      <div key={item} className="skill-list-item">
                        <SkillIcon name={item} icon={cat.icon} color={cat.color} size={28} />
                        <span className="skill-label">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
        <div className="pagination-dots">
          {pages.map((_, i) => (
            <div key={i} className={`dot ${currentPage === i ? 'active' : ''}`} onClick={() => setCurrentPage(i)} />
          ))}
        </div>
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
          I'm a Versatile DevSecOps Engineer with hands-on experience in secure full-stack development,
          cloud infrastructure (AWS, GCP), and CI/CD automation using Docker, Nginx, Cloudflare and Kubernetes.
          Proficient in Python, Node.js, and Next.js with strengths in automation testing (Selenium, Postman)
          and AI/ML workflows using PyTorch and TensorFlow. Seeking impactful roles in software development,
          cloud devops or aiml engineer.
        </p>
        <div className="about-stats">
          <div className="stat">
            <motion.span
              className="stat-num"
              initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              1+
            </motion.span>
            <span className="stat-label">Year XP</span>
          </div>
          <div className="stat">
            <motion.span
              className="stat-num"
              initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              10+
            </motion.span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat">
            <div className="stat-num curiosity-stat">
              <svg width="40" height="24" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M7.5 3C10.5 3 13.5 9 16.5 9C19.5 9 21 7.5 21 6C21 4.5 19.5 3 16.5 3C13.5 3 10.5 9 7.5 9C4.5 9 3 7.5 3 6C3 4.5 4.5 3 7.5 3Z"
                  stroke="var(--primary)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </svg>
            </div>
            <span className="stat-label">Curiosity</span>
          </div>
        </div>
      </div>
      <div className="about-visual glass-card">
        <SpaceGame />
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
