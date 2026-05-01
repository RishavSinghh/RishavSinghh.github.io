import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
  activeTab: string;
  smoothScroll: (id: string) => void;
}

/**
 * @component Navbar
 * @description Global navigation bar component. Handles theme toggling, mobile menu state, and section scrolling.
 * // SEARCH_TAGS: Navbar, Navigation, Header, Menu, ThemeToggle
 */
export const Navbar: React.FC<NavbarProps> = ({ 
  isDark, 
  toggleTheme, 
  isMenuOpen, 
  setIsMenuOpen, 
  activeTab, 
  smoothScroll 
}) => {
  return (
    <>
      <nav id="nav" className="fixed top-0 left-0 right-0 h-16 z-[1000] bg-[var(--nav-bg)] backdrop-blur-xl border-b border-[var(--border-color)] flex items-center justify-between px-[5%] transition-colors duration-300">
        <div 
          className="flex items-center gap-0 font-heading font-bold text-lg cursor-pointer select-none text-[var(--text-primary)] whitespace-nowrap"
          onClick={() => smoothScroll('home')}
        >
          <img src="/Chess_Piece_Light_No_BG.png" alt="Logo" className="w-[68px] h-[68px] object-contain flex-shrink-0 mt-1" />
          <span className="hidden lg:inline -ml-2">RISHAV SINGH</span>
          <span className="lg:hidden -ml-2">RS</span>
        </div>

        <div className="flex items-center gap-3">
          <ul className="hidden lg:flex items-center gap-1 list-none">
             {['about', 'education', 'projects', 'skills', 'certifications', 'contact'].map(sec => (
               <li key={sec}>
                 <a 
                   href={`#${sec}`}
                   onClick={(e) => { e.preventDefault(); smoothScroll(sec); }}
                   className={`font-medium text-sm px-3.5 py-1.5 rounded-full transition-all duration-200 border-b-2 hover:bg-accent hover:text-black ${activeTab === sec ? 'text-accent border-accent' : 'text-[var(--text-muted)] border-transparent'}`}
                 >
                   {sec.charAt(0).toUpperCase() + sec.slice(1)}
                 </a>
               </li>
             ))}
          </ul>

          <button 
            id="themeBtn"
            onClick={toggleTheme}
            className={`relative flex items-center w-14 h-8 rounded-full border transition-all duration-500 ${isDark ? 'bg-[#1c2333] border-[#2d333b]' : 'bg-[#e4ddd5] border-[#c0b8b0]'} shadow-inner flex-shrink-0`}
          >
            <motion.div 
               animate={{ x: isDark ? 4 : 26 }}
               transition={{ type: 'spring', stiffness: 500, damping: 30 }}
               className={`w-6 h-6 rounded-full flex items-center justify-center shadow-md z-10 bg-white`}
            >
              {isDark ? <Moon size={12} className="text-black" /> : <Sun size={12} className="text-[#c96a00]" />}
            </motion.div>
          </button>

          <button 
            id="hamburgerBtn"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden bg-[var(--surface2)] border border-[var(--border-color)] w-10 h-10 flex items-center justify-center rounded-lg text-[var(--text-primary)] flex-shrink-0 transition-colors active:bg-accent active:text-black"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
            className="lg:hidden fixed inset-0 z-[998] bg-black/50 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            id="mobile-menu" 
            className="lg:hidden fixed top-0 right-0 bottom-0 w-[280px] z-[999] bg-[var(--bg)] border-l border-[var(--border-color)] flex flex-col p-6 shadow-2xl pt-20"
          >
            {['about', 'education', 'projects', 'skills', 'certifications', 'contact'].map(sec => (
               <a 
                key={sec}
                href={`#${sec}`} 
                onClick={(e) => { e.preventDefault(); smoothScroll(sec); }}
                className={`py-4 font-heading font-medium text-lg border-b border-[var(--border-color)] last:border-none transition-all duration-200 ${activeTab === sec ? 'text-accent' : 'text-[var(--text-primary)]'}`}
               >
                 {sec.charAt(0).toUpperCase() + sec.slice(1)}
               </a>
            ))}
            
            <div className="mt-auto pt-8">
              <p className="text-[10px] text-[var(--text-muted)] text-center leading-relaxed">
                Designed & developed in India, that is भारत 🇮🇳<br />
                © 2026 RISHAV SINGH · सर्वाधिकार सुरक्षित
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
