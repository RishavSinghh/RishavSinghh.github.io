import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Mail } from 'lucide-react';

interface HeroProps {
  smoothScroll: (id: string) => void;
}

/**
 * @component Hero
 * @description The hero section displaying the main introduction, animated avatar, and call to action buttons.
 * // SEARCH_TAGS: Hero, component, section, ui
 */
export const Hero: React.FC<HeroProps> = ({ smoothScroll }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['A.I. Engineer', 'MERN Stack Developer', 'Problem Solver', 'Full-Stack Developer'];

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(roleInterval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-[100svh] pt-24 pb-32 md:py-16 px-4 flex items-center justify-center border-none overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(255,119,34,0.15)_0%,transparent_65%)] pointer-events-none" />
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative max-w-4xl mx-auto flex flex-col items-center text-center z-10"
      >
        {/* Avatar Area */}
        <div className="mb-8 mt-10 md:mt-12 relative group flex justify-center items-center">
          {/* Outer Glow Decor */}
          <div className="absolute w-[220px] h-[220px] bg-accent/20 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-1000" />
          
          <motion.div 
            animate={{ 
              y: [0, -10, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative w-[190px] h-[190px] rounded-full p-1 border-2 border-accent z-10"
          >
            <div className="w-full h-full rounded-full bg-[var(--surface2)] flex items-center justify-center overflow-hidden ring-1 ring-[var(--border-color)]">
               <img 
                 src="avatar.png" 
                 alt="Rishav Singh" 
                 className="w-full h-full object-cover select-none pointer-events-none transform group-hover:scale-105 transition-transform duration-700" 
                 onError={(e) => {
                   (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rishav&backgroundColor=ffbdad';
                 }}
               />
            </div>
          </motion.div>
        </div>

        <h1 className="font-satoshi text-[clamp(2.1rem,11vw,4.5rem)] sm:text-6xl md:text-8xl font-bold leading-tight text-[var(--text-primary)] mb-6 whitespace-nowrap tracking-[-0.03em] w-full max-w-full px-2 overflow-visible">
          I'm <span className="text-accent underline decoration-accent/30 decoration-4 underline-offset-8">Rishav Singh</span>
        </h1>

        <div className="h-8 overflow-hidden mb-6">
          <AnimatePresence mode="wait">
            <motion.span 
              key={roles[roleIndex]}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              className="block font-heading text-xl md:text-2xl font-semibold text-[var(--text-muted)]"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <p className="max-w-lg text-[var(--text-muted)] text-base leading-relaxed mb-10">
          Full-stack developer with a strong <strong className="text-[var(--text-primary)]">backend focus</strong>, 
          building web apps with the <strong className="text-[var(--text-primary)]">MERN Stack</strong>. 
          Passionate about clean APIs, databases, and always learning new technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="assets/resume.pdf" 
            download 
            className="group inline-flex items-center justify-center gap-2 bg-accent text-black px-8 py-3.5 rounded-xl font-medium text-sm shadow-[0_4px_18px_rgba(255,119,34,0.2)] border-2 border-accent transition-all duration-300 hover:bg-[#e8891e] hover:translate-y-[-2px] hover:shadow-[0_6px_22px_rgba(255,119,34,0.3)]"
          >
            <Download size={18} className="transition-transform group-hover:scale-110" />
            Download CV
          </a>
          <button 
            onClick={() => smoothScroll('contact')}
            className="group inline-flex items-center justify-center gap-2 bg-transparent text-accent px-8 py-3.5 rounded-xl font-medium text-sm border-2 border-accent transition-all duration-300 hover:bg-[rgba(255,119,34,0.1)] hover:translate-y-[-2px]"
          >
            <Mail size={18} className="transition-transform group-hover:scale-110" />
            Get In Touch
          </button>
        </div>
      </motion.div>
    </section>
  );
};
