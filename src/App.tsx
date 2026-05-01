/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Education } from './components/sections/Education';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';

import { Modal } from './components/ui/Modal';
import { CertItem } from './components/ui/CertCard';

/**
 * @component App
 * @description Main application entry point orchestrating layout, routing (via scrolling), and theme state.
 * Contains global scroll handlers and assembles the full portfolio application.
 * // SEARCH_TAGS: App, Main, Entry, Root
 */
export default function App() {
  // [STATE: Theme] Manages the current light/dark theme preference
  const [isDark, setIsDark] = useState(true);
  
  // [STATE: Menu] Controls the visibility of the mobile navigation overlay
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // [STATE: Navigation] Tracks the currently visible section for highlighting the navbar
  const [activeTab, setActiveTab] = useState('home');
  
  // [STATE: Visibility] Determines if the "Back to top" button should be displayed
  const [showBtt, setShowBtt] = useState(false);
  
  // [STATE: Modal] Controls the certification details modal visibility state
  const [modalOpen, setModalOpen] = useState(false);
  
  // [STATE: Data] Stores the currently selected certification object to display in the modal
  const [selectedCert, setSelectedCert] = useState<CertItem | null>(null);

  // [EFFECT: Theme Sync] Updates the DOM when the theme state changes
  // MAINTAINABILITY: CSS variables depend on data-theme attribute on the root HTML
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // [EFFECT: Body Scroll Lock] Prevents background scrolling when mobile menu is active
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // [EFFECT: Scroll Spy] Monitors scroll position to update active navbar item and back-to-top button
  useEffect(() => {
    const scrollHandler = () => {
      // Show back-to-top button if scrolled past 400px threshold
      setShowBtt(window.scrollY > 400);
      
      // Calculate which section is currently active within view
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top >= -100 && top <= 300) {
          setActiveTab(sec.id);
        }
      });
    };

    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  // [HANDLER: Theme] Toggles application between dark and light modes
  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.setAttribute('data-theme', newDark ? 'dark' : 'light');
  };

  // [HANDLER: Navigation] Performs a smooth ease-in-out scroll to an anchor tag without pushing history
  const smoothScroll = (id: string) => {
    setIsMenuOpen(false); // Close mobile navigation if open
    document.body.style.overflow = ''; // instantly reset if it was hidden

    setTimeout(() => {
      const el = id === 'home' ? document.body : document.getElementById(id);
      if (!el) return;

      // Account for fixed 64px navbar offset
      const targetPosition = id === 'home' ? 0 : el.getBoundingClientRect().top + window.scrollY - 64;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      let startTime: number | null = null;
      const duration = 650; // ms

      // Custom easing function for more fluid layout movement
      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // easeInOutCubic implementation
        const ease = progress < 0.5 
          ? 4 * progress * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, startPosition + distance * ease);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }, 20);
  };

  // [HANDLER: Layout] Opens the certificate display overlay with provided details
  const openCert = (cert: CertItem) => {
    setSelectedCert(cert);
    setModalOpen(true);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-350 bg-[var(--bg)] text-[var(--text-primary)]`}>
      <Navbar 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        activeTab={activeTab} 
        smoothScroll={smoothScroll} 
      />

      <Hero smoothScroll={smoothScroll} />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Certifications openCert={openCert} />
      <Contact />

      <Footer isDark={isDark} smoothScroll={smoothScroll} />

      <AnimatePresence>
        {showBtt && (
          <motion.button 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-[999] w-12 h-12 rounded-xl bg-accent text-black flex items-center justify-center shadow-[0_4px_16px_rgba(255,119,34,0.2)] hover:bg-[#e8891e] hover:translate-y-[-3px] transition-all"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} cert={selectedCert} />
    </div>
  );
}
