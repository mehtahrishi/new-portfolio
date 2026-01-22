import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Zap, ArrowRight, Rocket, Database, Brain, Server, Shield, Cloud, X, FolderArchive } from 'lucide-react';
import { GoCopilot } from "react-icons/go";
import { FaCss3Alt, FaAws } from "react-icons/fa";
import { IoLogoJavascript, IoFlash } from "react-icons/io5";
import { RiGeminiFill } from "react-icons/ri";
import { SiFirebase, SiGnubash, SiGithubactions, SiDrizzle, SiClaude, SiPostgresql, SiPostman, SiPuppeteer } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { AiOutlineOpenAI } from "react-icons/ai";
import './App.css';

// Components
const CosmicBackground = () => {
  const stars = useMemo(() => {
    return [...Array(200)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${1 + Math.random() * 2.5}px`,
      opacity: 0.2 + Math.random() * 0.8,
      duration: `${3 + Math.random() * 5}s`
    }));
  }, []);

  const nebulae = useMemo(() => {
    return [
      { id: 1, top: '10%', left: '15%', size: '60vw', color: 'radial-gradient(circle, rgba(99, 102, 241, 0.4), transparent 70%)', duration: '50s' },
      { id: 2, top: '60%', left: '50%', size: '70vw', color: 'radial-gradient(circle, rgba(168, 85, 247, 0.3), transparent 70%)', duration: '60s' },
      { id: 3, top: '30%', left: '70%', size: '50vw', color: 'radial-gradient(circle, rgba(34, 211, 238, 0.3), transparent 70%)', duration: '45s' },
      { id: 4, top: '-10%', left: '60%', size: '40vw', color: 'radial-gradient(circle, rgba(244, 114, 182, 0.2), transparent 70%)', duration: '55s' },
    ];
  }, []);

  return (
    <div className="cosmic-bg">
      {/* Nebulae (Background Layer) */}
      {nebulae.map(neb => (
        <div
          key={neb.id}
          className="nebula"
          style={{
            top: neb.top,
            left: neb.left,
            width: neb.size,
            height: neb.size,
            background: neb.color,
            '--duration': neb.duration
          } as any}
        />
      ))}

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
    </div>
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
            {(() => {
              const survivedSecs = Math.floor((missionProgress / 100) * 90);
              const timeLeftSecs = Math.max(0, 90 - survivedSecs);
              return (
                <div className="result-stats" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>SURVIVED: <span style={{ color: 'var(--accent)', fontSize: '1.5rem', fontWeight: 800 }}>{formatTime(survivedSecs)}</span></div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>TIME LEFT: <span style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 800 }}>{formatTime(timeLeftSecs)}</span></div>
                </div>
              );
            })()}
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
  const [isTerminal, setIsTerminal] = useState(false);
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
      setIsHovering(!!target.closest('button, a, .stack-card, .timeline-item, .edu-card, .cert-tag, .skill-icon-wrap'));
      setIsInGame(!!target.closest('.game-wrapper'));
      setIsTerminal(!!target.closest('.terminal-container'));
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
          scale: (isTerminal || isInGame) ? 0 : (isHovering ? 1.4 : 1),
          opacity: (isTerminal || isInGame) ? 0 : 1,
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
          scale: (isTerminal || isInGame) ? 0 : (isMoving ? (isHovering ? 1.2 : 0.9) : 0),
          opacity: (isMoving && !isTerminal && !isInGame) ? 0.8 : 0,
        }}
        transition={{ type: 'spring', damping: 15, stiffness: 80, mass: 0.5 }}
        style={{ pointerEvents: 'none' }}
      >
        <UfoIcon size={20} />
      </motion.div>
    </>
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
            <Zap className="logo-icon" size={24} />
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
            <button className="btn-primary" onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>
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
        <div className="asteroid-arrow">
          <div className="arrow-top-row">
            <div className="asteroid-dot small" />
            <div className="asteroid-dot small" />
          </div>
          <div className="asteroid-dot medium" />
        </div>
      </motion.div>
    </section>
  );
};

const SkillIcon = ({ name, icon: FallbackIcon, color, size = 40, delay = 0 }: { name: string; icon: any; color: string; size?: number, delay?: number }) => {
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
      initial={{ scale: 0, opacity: 0, y: 20, filter: "blur(10px) brightness(0)" }}
      whileInView={{
        scale: [0, 1.3, 1],
        opacity: 1,
        y: 0,
        filter: ["blur(10px) brightness(2)", "blur(0px) brightness(1)"],
        transition: {
          delay: delay,
          duration: 0.8,
          times: [0, 0.6, 1],
          type: "spring",
          stiffness: 260,
          damping: 20
        }
      }}
      viewport={{ once: true }}
      style={{ color } as any}
    >
      <motion.div
        whileHover={{ scale: 1.25 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}
      >
        {renderIcon()}
      </motion.div>
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
                        const baseDelay = i === 1 ? pages[currentPage].categories[0].items.length * 0.1 : 0;

                        return left.map((item, idx) => (
                          <div key={item} style={{ display: 'contents' }}>
                            <SkillIcon
                              name={item}
                              icon={cat.icon}
                              color={cat.color}
                              size={24}
                              delay={baseDelay + (idx * 0.1)}
                            />
                            <motion.span
                              className="skill-label"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: { delay: baseDelay + (idx * 0.1) + 0.1 }
                              }}
                              viewport={{ once: true }}
                            >
                              {item}
                            </motion.span>
                            {right[idx] ? (
                              <>
                                <motion.span
                                  className="skill-label text-right"
                                  initial={{ opacity: 0, x: 10 }}
                                  whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: { delay: baseDelay + ((cat.items.length - 1 - idx) * 0.1) + 0.1 }
                                  }}
                                  viewport={{ once: true }}
                                >
                                  {right[idx]}
                                </motion.span>
                                <SkillIcon
                                  name={right[idx]}
                                  icon={cat.icon}
                                  color={cat.color}
                                  size={24}
                                  delay={baseDelay + ((cat.items.length - 1 - idx) * 0.1)}
                                />
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
                    {cat.items.map((item, idx) => {
                      const baseDelay = i === 1 ? pages[currentPage].categories[0].items.length * 0.1 : 0;
                      return (
                        <div key={item} className="skill-list-item">
                          <SkillIcon
                            name={item}
                            icon={cat.icon}
                            color={cat.color}
                            size={28}
                            delay={baseDelay + (idx * 0.1)}
                          />
                          <motion.span
                            className="skill-label"
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                              transition: { delay: baseDelay + (idx * 0.1) + 0.1 }
                            }}
                            viewport={{ once: true }}
                          >
                            {item}
                          </motion.span>
                        </div>
                      );
                    })}
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
      company: "SDAC",
      role: "Java Software Developer Intern",
      period: "Jul 2024 – Feb 2025",
      desc: "Developed backend services in Java with MySQL and REST APIs. Utilized Apache Tomcat and JSP for server-side programming and supported front-end development."
    },
    {
      company: "Redynox, VaultOfCodes & TechnoHacks",
      role: "Cybersecurity & Ethical Hacking Intern",
      period: "Sep 2024 – July 2025",
      desc: "Performed penetration testing and vulnerability assessments using Nmap, Burp Suite, and SQLMap. Secured web applications and cloud infrastructure against potential exploits."
    },
    {
      company: "INeuBytes & Edunet Foundation",
      role: "Artificial Intelligence Intern",
      period: "Mar 2025 – Apr 2025",
      desc: "Built AI-powered solutions using LLMs, RAG pipelines, and NLP techniques. Utilized Torch and TensorFlow for AI model development and data analysis."
    },
    {
      company: "Codotech & VaultOfCodes",
      role: "Python Developer Intern",
      period: "Mar 2025 – Jun 2025",
      desc: "Developed full-stack web applications using Flask and Django. Implemented Machine Learning models and AI Agents using Pandas, NumPy, and NLTK integrated with responsive front-ends."
    },
    {
      company: "Freelancer",
      role: "Web Developer",
      period: "July 2025 – Present",
      desc: "Engineered end-to-end, high-availability full-stack applications and AI automation agents. Deployed cloud-native solutions across AWS, Azure, and GCP using Docker, Kubernetes, and CI/CD pipelines."
    }
  ];

  const [revealedCount, setRevealedCount] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);

  const pathPoints = useMemo(() => [
    { x: 0, y: 125 },
    { x: 100, y: 175 },
    { x: 300, y: 75 },
    { x: 500, y: 175 },
    { x: 700, y: 75 },
    { x: 900, y: 175 },
    { x: 1000, y: 125 }
  ], []);

  const currentPoint = pathPoints[revealedCount + 1] || pathPoints[0];
  const nextPoint = pathPoints[revealedCount + 2] || currentPoint;

  const shipRotation = useMemo(() => {
    const angle = Math.atan2(nextPoint.y - currentPoint.y, nextPoint.x - currentPoint.x) * (180 / Math.PI);
    return angle + 45; // adjustment for Rocket icon pointing top-right-ish
  }, [currentPoint, nextPoint]);

  useEffect(() => {
    if (isAnimating && revealedCount < experiences.length) {
      const timer = setTimeout(() => {
        setRevealedCount(prev => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [revealedCount, isAnimating, experiences.length]);

  return (
    <section id="experience" className="experience">
      <div className="section-header">
        <h2 className="section-title">Professional <span className="gradient-text">Journey</span></h2>
      </div>

      {/* Desktop Staircase Layout */}
      <motion.div
        className="staircase-wrapper"
        onViewportEnter={() => setIsAnimating(true)}
      >
        <div className="staircase-svg-container">
          <svg width="100%" height="100%" viewBox="0 0 1000 250" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
            <motion.path
              d="M 0 125 L 100 175 L 300 75 L 500 175 L 700 75 L 900 175 L 1000 125"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ opacity: 0.4 }}
              animate={{
                pathLength: Math.min(1, (revealedCount + 1) / experiences.length)
              }}
              transition={{ duration: 1, ease: "linear" }}
            />
            <motion.path
              d="M 0 125 L 100 175 L 300 75 L 500 175 L 700 75 L 900 175 L 1000 125"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="0.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: Math.min(1, (revealedCount + 1) / experiences.length),
                opacity: [0.2, 1, 0.2]
              }}
              transition={{
                pathLength: { duration: 1, ease: "linear" },
                opacity: { repeat: Infinity, duration: 2 }
              }}
              style={{ filter: 'drop-shadow(0 0 10px var(--primary))' }}
            />
            {/* Spaceship */}
            <motion.g
              animate={{
                x: currentPoint.x,
                y: currentPoint.y,
                rotate: shipRotation
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <foreignObject x="-20" y="-20" width="40" height="40">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isAnimating ? 1 : 0 }}
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)'
                  }}
                >
                  <Rocket size={24} style={{ filter: 'drop-shadow(0 0 10px var(--primary))' }} />
                </motion.div>
              </foreignObject>

              {/* Ship Engine Core */}
              <motion.circle
                r="3"
                cx="-12"
                cy="0"
                fill="var(--primary)"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ repeat: Infinity, duration: 0.4 }}
                style={{ filter: 'blur(3px)' }}
              />
            </motion.g>
          </svg>
        </div>

        <div className="staircase-nodes">
          {experiences.map((exp, i) => {
            const isRevealed = i <= revealedCount;
            const isCurrent = i === revealedCount;
            const position = i % 2 === 0 ? 'below' : 'above';

            return (
              <div key={i} className={`stair-node ${position} ${isRevealed ? 'is-revealed' : ''}`}>
                <div className="stair-connector" />
                <AnimatePresence>
                  {isRevealed && (
                    <motion.div
                      className="stair-card-wrap"
                      initial={{ opacity: 0, y: position === 'above' ? -30 : 30, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    >
                      <div className={`stair-card glass-card ${isCurrent ? 'full' : 'mini'}`}>
                        <h3>{exp.role}</h3>
                        <h4>{exp.company}</h4>
                        <p className="stair-desc">{exp.desc}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Mobile Timeline Layout */}
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

const EducationSection = () => {
  const [isLinked, setIsLinked] = useState(false);

  return (
    <section id="education" className="education">
      <div className="section-header">
        <h2 className="section-title">Academic <span className="gradient-text">Roots</span></h2>
      </div>

      <motion.div
        className="edu-uplink-container"
        onViewportEnter={() => setIsLinked(true)}
      >
        {/* Education Card reveal */}
        <div className="edu-content-wrap">
          <motion.div
            className="edu-card glass-card holographic"
            initial={{ opacity: 0, y: 50, scale: 0.9, filter: 'brightness(0) blur(10px)' }}
            animate={isLinked ? { opacity: 1, y: 0, scale: 1, filter: 'brightness(1) blur(0px)' } : {}}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          >
            <div className="hologram-overlay" />

            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isLinked ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              Bachelor of Science in Information Technology (B.Sc IT)
            </motion.h3>

            <motion.p
              className="edu-inst"
              initial={{ opacity: 0 }}
              animate={isLinked ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              University of Mumbai
            </motion.p>

            <motion.div
              className="edu-meta-grid"
              initial={{ opacity: 0, y: 10 }}
              animate={isLinked ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
            >
              <div className="meta-item">
                <span className="label">Grade</span>
                <span className="value">8.7/10 CGPA</span>
              </div>
              <div className="meta-item">
                <span className="label">Period</span>
                <span className="value">2022 – 2025</span>
              </div>
              <div className="meta-item">
                <span className="label">Location</span>
                <span className="value">Mumbai, MH</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const CertsSection = () => {
  const [isScanning, setIsScanning] = useState(false);
  const certs = [
    { name: "ISO/IEC 20000 IT Service Management Associate", issuer: "Skillfront", type: "Security" },
    { name: "ISO/IEC 27001 Information Security Associate", issuer: "Skillfront", type: "Security" },
    { name: "Gemini Certified University Student", issuer: "Google", type: "AI" },
    { name: "Neo4j Certified Professional", issuer: "Neo4j GraphAcademy", type: "Database" },
    { name: "ACCELQ Automation Engineer", issuer: "ACCELQ", type: "Automation" },
    { name: "Postman API Fundamentals", issuer: "Postman", type: "API" },
    { name: "AWS Databricks Platform Architect", issuer: "Databricks", type: "Cloud" },
    { name: "Google Cloud Technical Series", issuer: "Google Cloud", type: "Cloud" },
    { name: "Vaadin 24 Certified Developer", issuer: "Vaadin", type: "Dev" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="certs" className="certs">
      <div className="section-header">
        <h2 className="section-title">Expert <span className="gradient-text">Validations</span></h2>
      </div>

      <motion.div
        className="certs-scanner-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        onViewportEnter={() => setIsScanning(true)}
        onViewportLeave={() => setIsScanning(false)}
        variants={containerVariants}
      >
        {/* Virtual Scanner Line - Uses hardware-accelerated 'y' */}
        <motion.div
          className="scanner-line"
          initial={{ y: 0 }}
          animate={isScanning ? { y: [0, 600, 0] } : {}}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          style={{ top: 0 }}
        />
        <div className="certs-grid">
          {certs.map((cert, i) => {
            const Icon = cert.type === 'Security' ? Shield :
              cert.type === 'AI' ? Brain :
                cert.type === 'Database' ? Database :
                  cert.type === 'Automation' ? Zap :
                    cert.type === 'API' ? Code2 :
                      cert.type === 'Cloud' ? Cloud : Code2;

            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className="cert-tag glass-card holographic-tag fancy-card"
                style={{ perspective: '1200px' }}
              >
                <motion.div
                  className="card-inner"
                  whileHover={{ rotateY: 12, rotateX: -8, translateZ: 20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="cert-header">
                    <div className="cert-category">
                      <span className="cert-type">{cert.type}</span>
                    </div>
                    <Icon className="cert-card-icon" size={20} />
                  </div>

                  <div className="cert-body">
                    <h3 className="cert-name">{cert.name}</h3>
                    <div className="cert-footer">
                      <span className="cert-issuer-label">Issued by</span>
                      <span className="cert-issuer">{cert.issuer}</span>
                    </div>
                  </div>
                  <div className="card-shine" />
                </motion.div>
                <div className="cert-glitch-layer" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

const VolunteerSection = () => {
  const [phase, setPhase] = useState<'idle' | 'approaching' | 'tearing' | 'revealed'>('idle');

  const volunteerXP = [
    {
      id: "LOG-AWS-01",
      org: "AWS Community",
      role: "Community Builder",
      period: "2025 – Present",
      priority: "MEDIUM",
      status: "ACTIVE",
      desc: "Drive community engagement by creating in-depth technical content (blog posts, videos, and tutorials) focused on AWS cloud technologies."
    },
    {
      id: "LOG-GCP-02",
      org: "Google Cloud Skills Boost",
      role: "Innovator",
      period: "2025 – Present",
      priority: "CRITICAL",
      status: "ACTIVE",
      desc: "Focusing on personal growth through innovative problem-solving, learning cutting-edge cloud technologies, and fostering tech community engagement."
    },
    {
      id: "LOG-MU-03",
      org: "DLLE, Mumbai University",
      role: "Member – Dept. of Lifelong Learning",
      period: "2024 – 2025",
      priority: "MEDIUM",
      status: "COMPLETED",
      desc: "Supporting lifelong learning programs by mentoring others and advancing educational accessibility and community development."
    }
  ];

  useEffect(() => {
    if (phase === 'approaching') {
      const timer = setTimeout(() => setPhase('tearing'), 1800);
      return () => clearTimeout(timer);
    }
    if (phase === 'tearing') {
      const timer = setTimeout(() => setPhase('revealed'), 800);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  return (
    <section id="volunteer" className="volunteer">
      <div className="section-header">
        <h2 className="section-title">Community <span className="gradient-text">Logs</span></h2>
      </div>

      <div className="vol-container">
        <AnimatePresence mode="wait">
          {phase !== 'revealed' ? (
            <motion.div
              key="sequence"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="archive-sequence"
              onViewportEnter={() => phase === 'idle' && setPhase('approaching')}
            >
              <div className="sequence-track centered">
                {phase !== 'tearing' ? (
                  <motion.div
                    className={`zip-folder-wrap ${phase === 'approaching' ? 'glitch-shake' : ''}`}
                    animate={phase === 'approaching' ? {
                      scale: [1, 1.3, 1.3, 2],
                      filter: ["blur(0px)", "blur(0px)", "blur(5px)", "blur(10px)"]
                    } : {}}
                    transition={{ duration: 1.8, times: [0, 0.4, 0.6, 1], ease: "easeInOut" }}
                  >
                    <FolderArchive size={100} className="zip-icon" />
                    <span className="zip-label">DECRYPTING_LOGS.EXE</span>
                  </motion.div>
                ) : (
                  <div className="folder-shards">
                    {[
                      { id: 'tl', x: -300, y: -300, r: -45, clip: 'polygon(0 0, 50% 0, 50% 50%, 0 50%)' },
                      { id: 'tr', x: 300, y: -300, r: 45, clip: 'polygon(50% 0, 100% 0, 100% 50%, 50% 50%)' },
                      { id: 'bl', x: -300, y: 300, r: -90, clip: 'polygon(0 50%, 50% 50%, 50% 100%, 0 100%)' },
                      { id: 'br', x: 300, y: 300, r: 90, clip: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)' }
                    ].map(shard => (
                      <motion.div
                        key={shard.id}
                        className="shard"
                        initial={{ x: 0, y: 0, opacity: 1, scale: 2 }}
                        animate={{
                          x: shard.x,
                          y: shard.y,
                          rotate: shard.r,
                          opacity: 0,
                          scale: 0.5
                        }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{ clipPath: shard.clip }}
                      >
                        <FolderArchive size={100} className="zip-icon" />
                      </motion.div>
                    ))}
                    <motion.div
                      className="tear-flash"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: [0, 1, 0], scale: [1, 2] }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="vol-grid"
            >
              {volunteerXP.map((xp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.15 }}
                  className="vol-dossier"
                >
                  <div className="dossier-tab">
                    <span className="file-id">{xp.id}</span>
                    <div className="priority-badge" data-priority={xp.priority}>
                      {xp.priority}
                    </div>
                  </div>
                  <div className="dossier-content glass-card">
                    <div className="dossier-header">
                      <h3>{xp.org}</h3>
                      <span className="dossier-role">{xp.role}</span>
                    </div>
                    <div className="dossier-body">
                      <p className="dossier-desc">{xp.desc}</p>
                    </div>
                    <div className="dossier-footer">
                      <span className="dossier-period">{xp.period}</span>
                      <span className="status-label">FILE: {xp.status}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const GlobalTerminal = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (val: boolean) => void }) => {
  const [messages, setMessages] = useState<{ type: 'user' | 'ai', content: string | React.ReactNode }[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isAITyping, setIsAITyping] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'bash' | 'nav'>('bash');
  const [navSelectedIndex, setNavSelectedIndex] = useState(0);

  const contactOptions = [
    { label: "GMAIL (Official)", url: "mailto:mehtahrishi45@gmail.com?subject=Mission%20Inquiry&body=Greetings%20Rishi,%0D%0AI%20am%20reaching%20out%20to%20discuss..." },
    { label: "LINKEDIN (Professional)", url: "https://www.linkedin.com/in/hrishi-mehta-889732256/" },
    { label: "GITHUB (Engine)", url: "https://github.com/mehtahrishi" }
  ];

  const navOptions = [
    { label: "SUMMARY", targetId: "about" },
    { label: "SKILLS", targetId: "skills" },
    { label: "EXPERIENCE", targetId: "experience" },
    { label: "EDUCATION", targetId: "education" },
    { label: "CERTIFICATIONS", targetId: "certs" }
  ];

  const geminiAscii = `
    ███             █████████  ██████████ ██████   ██████ █████ ██████   █████ █████
    ░░░███         ███░░░░░███░░███░░░░░█░░██████ ██████ ░░███ ░░██████ ░░███ ░░███
      ░░░███      ███     ░░░  ░███  █ ░  ░███░█████░███  ░███  ░███░███ ░███  ░███
        ░░░███   ░███          ░██████    ░███░░███ ░███  ░███  ░███░░███░███  ░███
         ███░    ░███    █████ ░███░░█    ░███ ░░░  ░███  ░███  ░███ ░░██████  ░███
       ███░      ░░███  ░░███  ░███ ░   █ ░███      ░███  ░███  ░███  ░░█████  ░███
     ███░         ░░█████████  ██████████ █████     █████ █████ █████  ░░█████ █████
    ░░░            ░░░░░░░░░  ░░░░░░░░░░ ░░░░░     ░░░░░ ░░░░░ ░░░░░    ░░░░░ ░░░░░
  `;

  const [countdown, setCountdown] = useState<number | null>(null);
  const [redirectInfo, setRedirectInfo] = useState<{ label: string, url: string } | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    if (messages.length === 0) {
      const timer = setTimeout(() => {
        setShowMenu(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (countdown === null || !redirectInfo) return;

    if (countdown === 0) {
      window.open(redirectInfo.url, '_blank');
      setMessages(prev => [...prev, { type: 'ai', content: <span style={{ color: 'var(--primary)', fontWeight: 700 }}>[SYSTEM] Uplink established. Redirecting now...</span> }]);
      setCountdown(null);
      setRedirectInfo(null);
      return;
    }

    const timer = setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'ai',
        content: <span style={{ opacity: 0.5, fontStyle: 'italic' }}>Opening {redirectInfo.label} in {countdown}...</span>
      }]);
      setCountdown(prev => (prev !== null ? prev - 1 : null));
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, redirectInfo]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter') {
          return;
        }
      }

      if (e.ctrlKey && e.key === 'c') {
        e.preventDefault();
        if (countdown !== null) {
          setCountdown(null);
          setRedirectInfo(null);
          setMessages(prev => [...prev, { type: 'user', content: '^C' }, { type: 'ai', content: <span style={{ color: '#ef4444' }}>[ABORTED] Uplink sequence terminated by user.</span> }]);
        } else {
          setMessages(prev => [...prev, { type: 'user', content: '^C' }]);
        }
        setInputValue("");
        setShowMenu(false);
        return;
      }

      // Handle Quick Nav Tab Navigation
      if (activeTab === 'nav') {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setNavSelectedIndex(prev => (prev + 1) % navOptions.length);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setNavSelectedIndex(prev => (prev - 1 + navOptions.length) % navOptions.length);
        } else if (e.key === 'Enter') {
          e.preventDefault();
          const target = navOptions[navSelectedIndex].targetId;
          document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        }
        return;
      }

      if (!showMenu) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % contactOptions.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + contactOptions.length) % contactOptions.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const selected = contactOptions[selectedIndex];
        setMessages(prev => [
          ...prev,
          { type: 'user', content: `select ${selected.label}` }
        ]);
        setRedirectInfo({ label: selected.label, url: selected.url });
        setCountdown(3);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, showMenu, selectedIndex, activeTab, navSelectedIndex, navOptions, contactOptions, countdown]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isAITyping]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const userMessage = inputValue.trim().toLowerCase();
    setMessages(prev => [...prev, { type: 'user', content: inputValue }]);
    setInputValue("");

    if (userMessage === 'clear') {
      setMessages([]);
      return;
    }
    if (userMessage === 'menu' || userMessage === 'contact') {
      setShowMenu(false);
      setMessages(prev => [...prev, { type: 'ai', content: "Re-initializing interactive menu..." }]);
      setTimeout(() => {
        setMessages(prev => [...prev, { type: 'ai', content: <span style={{ color: '#22c55e' }}>[DONE] Re-initialization sequence complete.</span> }]);
        setShowMenu(true);
      }, 500);
      return;
    }
    if (userMessage === 'exit' || userMessage === 'quit') {
      setIsOpen(false);
      return;
    }

    // Direct social commands
    const socialCmd = contactOptions.find(opt =>
      opt.label.toLowerCase().includes(userMessage) ||
      (userMessage === 'mail' && opt.label.toLowerCase().includes('gmail'))
    );

    if (socialCmd) {
      setRedirectInfo({ label: socialCmd.label, url: socialCmd.url });
      setCountdown(3);
      setMessages(prev => [...prev, { type: 'ai', content: `Initiating secure uplink to ${socialCmd.label.split(' ')[0]}...` }]);
      return;
    }

    setIsAITyping(true);
    setTimeout(() => {
      let response = "Manual transmission logged. I have relayed your coordinates to Rishi. Type 'menu' to see direct uplinks.";
      if (userMessage.includes('hello') || userMessage.includes('hi')) {
        response = "Hello! I am ready for your instructions. Type 'menu' to see contact options or 'clear' to reset terminal.";
      }
      setMessages(prev => [...prev, { type: 'ai', content: response }]);
      setIsAITyping(false);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="global-terminal-overlay"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
        >
          <div className="terminal-container global-variant">
            <div className="terminal-header">
              <div className="terminal-tabs">
                <div
                  className={`terminal-tab ${activeTab === 'bash' ? 'active' : ''}`}
                  onClick={() => setActiveTab('bash')}
                >
                  <span className="tab-text">mehta@contact</span>
                  <div className="tab-close" onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}>
                    <X size={12} />
                  </div>
                </div>
                <div
                  className={`terminal-tab ${activeTab === 'nav' ? 'active' : ''}`}
                  onClick={() => setActiveTab('nav')}
                >
                  <span className="tab-text">mehta@navigation</span>
                  <div className="tab-close" onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}>
                    <X size={12} />
                  </div>
                </div>
              </div>
              <div className="terminal-controls">
                <button onClick={() => setIsOpen(false)} className="terminal-close-btn">
                  <X size={16} />
                </button>
              </div>
            </div>
            <div
              className="terminal-body"
              tabIndex={0}
              onClick={() => document.getElementById('global-terminal-input')?.focus()}
            >
              <pre className="terminal-ascii">{geminiAscii}</pre>
              <div className="terminal-welcome">
                <div className="welcome-header">Mission Briefing for Lead Engineer:</div>
                <div className="welcome-list">
                  1. Architect of <span className="highlight">KnowMe CLI</span> - A Bash-native tool for hardware intelligence.
                  <br />2. Recognized <span className="highlight">Google Gen AI Top Performer</span>.
                  <br />3. Winner of the <span className="highlight">AWS Amazon Q CLI Challenge</span>.
                  <br />4. Certified Professional: <span className="highlight">ISO / AI / Neo4j Graph DB</span>.
                  <br />5. Expert in Large Language Models, Full Stack, and Multi-Modal SDKs (Gemini, Claude).
                </div>

                <div className="terminal-warning-content" style={{ marginBottom: '0.5rem', opacity: 0.7 }}>
                  [!] Warning: Running in high-privilege. Cannot be disabled in /settings. Hehe :)
                </div>

                <div className="welcome-footer">
                  {activeTab === 'bash'
                    ? "I've decoded 3 secure transmission channels. Select your uplink."
                    : "Mission-critical modules decrypted. Select a destination coordinate."}
                </div>
              </div>

              {activeTab === 'bash' ? (
                <>
                  {showMenu && (
                    <div className="terminal-menu fzf-style">
                      <div className="menu-header">Transmission channels:</div>
                      {contactOptions.map((opt, i) => (
                        <div
                          key={opt.label}
                          className={`menu-item ${selectedIndex === i ? 'active' : ''}`}
                          onClick={() => {
                            setSelectedIndex(i);
                          }}
                        >
                          <span className="menu-cursor">{selectedIndex === i ? '>' : ' '}</span>
                          <span className="menu-label">{opt.label}</span>
                        </div>
                      ))}
                      <div className="menu-footer">
                        [Total: {contactOptions.length}]
                        <span className="menu-keys"> (Use arrows, enter to select)</span>
                      </div>
                    </div>
                  )}

                  {messages.map((msg, i) => (
                    <div key={i} className={`terminal-line ${msg.type}`}>
                      <span className="prompt gemini-prompt">&gt;</span>
                      <span className="command">{msg.content}</span>
                    </div>
                  ))}

                  {isAITyping && (
                    <div className="terminal-line ai">
                      <span className="prompt gemini-prompt">&gt;</span>
                      <span className="command typing-dots">Typing<span>.</span><span>.</span><span>.</span></span>
                    </div>
                  )}
                  <div ref={terminalEndRef} />

                  <form onSubmit={handleSend} className="terminal-input-wrap">
                    <span className="prompt gemini-prompt">&gt;</span>
                    <input
                      id="global-terminal-input"
                      type="text"
                      className="terminal-input"
                      placeholder="Type command..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      autoFocus
                    />
                    <div className="terminal-cursor"></div>
                  </form>
                </>
              ) : (
                <div className="terminal-menu fzf-style">
                  <div className="menu-header">Quick Navigation:</div>
                  {navOptions.map((opt, i) => (
                    <div
                      key={opt.label}
                      className={`menu-item ${navSelectedIndex === i ? 'active' : ''}`}
                      onClick={() => {
                        setNavSelectedIndex(i);
                        document.getElementById(opt.targetId)?.scrollIntoView({ behavior: 'smooth' });
                        setIsOpen(false);
                      }}
                    >
                      <span className="menu-cursor">{navSelectedIndex === i ? '>' : ' '}</span>
                      <span className="menu-label">{opt.label}</span>
                    </div>
                  ))}
                  <div className="menu-footer">
                    [Total: {navOptions.length}]
                    <span className="menu-keys"> (Jump to section)</span>
                  </div>
                </div>
              )}
            </div>
            <div className="terminal-glow"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


const GlitchText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+';

  const scramble = useCallback(() => {
    let iterations = 0;
    setIsGlitching(true);

    const interval = setInterval(() => {
      setDisplayText(prev =>
        prev.split('').map((_, index) => {
          if (index < iterations) return text[index];
          return characters[Math.floor(Math.random() * characters.length)];
        }).join('')
      );

      if (iterations >= text.length) {
        clearInterval(interval);
        setIsGlitching(false);
      }
      iterations += 1 / 3;
    }, 30);
  }, [text]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isGlitching) scramble();
    }, 5000);
    return () => clearInterval(timer);
  }, [scramble, isGlitching]);

  return (
    <h2
      className={`glitch-text ${isGlitching ? 'active' : ''}`}
      data-text={text}
      onMouseEnter={scramble}
    >
      {displayText}
    </h2>
  );
};

const ContactSection = ({ onOpenTerminal }: { onOpenTerminal: () => void }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="contact" className="contact">
      <div className="contact-card luxury-contact">
        <div className="contact-info">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="illuminate-header"
          >
            <GlitchText text="READY TO ILLUMINATE?" />
            <div className="illuminate-bar"></div>
          </motion.div>

          <p className="contact-desc">
            Bridge the gap between vision and reality. Initialize a secure shell
            to established high-bandwidth transmission directly to my lead engineer.
          </p>

        </div>

        <div
          className={`terminal-activation-zone ${!isMobile ? 'desktop-only' : ''}`}
          onClick={onOpenTerminal}
        >
          <div className="activation-glow"></div>
          <div className="activation-content">
            <div className="activation-icon-wrap">
              <div className="radar-ping"></div>
              <Rocket className="activation-icon" />
            </div>

            <div className="activation-tags">
              <span className="tag">SECURE_ID: GEMINI_SHELL</span>
              <span className="tag status">STATUS: IDLE</span>
            </div>

            <div className="shortcut-display">
              <div className="step">
                <span className="step-num">01</span>
                <span className="step-text">PRESS</span>
                <div className="shortcut-keys">
                  <span className="key-cap">CTRL</span>
                  <span className="key-plus">+</span>
                  <span className="key-cap highlight-key">G</span>
                </div>
              </div>
              <div className="step-divider"></div>
              <div className="step">
                <span className="step-num">02</span>
                <span className="step-text">EXECUTE</span>
                <span className="action-label">COMMANDS</span>
              </div>
            </div>

            {isMobile && (
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mobile-tap-prompt"
              >
                INITIALIZE UPLINK [TAP]
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const [startTyping, setStartTyping] = useState(false);

  return (
    <section id="about" className="about">
      <div className="about-grid">
        <motion.div
          className="about-text"
          onViewportEnter={() => setStartTyping(true)}
        >
          <h2 className="section-title">Behind the <span className="gradient-text">Screen</span></h2>
          <p style={{ minHeight: '100px' }}>
            {startTyping && (
              <Typewriter
                text="I'm a Versatile DevSecOps Engineer with hands-on experience in secure full-stack development, cloud infrastructure (AWS, GCP), and CI/CD automation using Docker, Nginx, Cloudflare and Kubernetes. Proficient in Python, Node.js, and Next.js with strengths in automation testing (Selenium, Postman) and AI/ML workflows using PyTorch and TensorFlow. Seeking impactful roles in software development, cloud devops or aiml engineer."
                delay={20}
              />
            )}
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
        </motion.div>
        <div className="about-visual glass-card">
          <SpaceGame />
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-logo">
        <Zap className="logo-icon" size={24} />
        <span>HRISHI'S SPACE</span>
      </div>
      <p>&copy; 2026 Crafted with precision by <span className="text-white">Hrishi</span>.</p>
    </div>
  </footer>
);

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'obsidian');
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Global Ctrl+G handler
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key.toLowerCase() === 'g') {
        e.preventDefault();
        setIsTerminalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

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
          <Navbar />
          <Hero />
          <div className="content-wrap">
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <EducationSection />
            <CertsSection />
            <VolunteerSection />
            <ContactSection onOpenTerminal={() => setIsTerminalOpen(true)} />
          </div>
          <Footer />
          <GlobalTerminal isOpen={isTerminalOpen} setIsOpen={setIsTerminalOpen} />
        </>
      )}
    </div>
  );
};

export default App;
