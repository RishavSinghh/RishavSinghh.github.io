import React from 'react';
import { motion } from 'motion/react';
import { Laptop, Github, ExternalLink } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

/**
 * @component Projects
 * @description Projects section showcasing portfolio applications.
 * // SEARCH_TAGS: Projects, component, section, ui
 */
export const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative bg-[var(--surface)] border-t border-[var(--border-color)] scroll-mt-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_5%,black_95%,transparent)]" />
      <div className="relative max-w-6xl mx-auto py-12 px-4 z-10">
        <SectionHeader title="Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[var(--surface)] border border-[var(--border-color)] p-7 rounded-2xl flex flex-col group transition-all duration-300 hover:border-accent hover:translate-y-[-4px] hover:shadow-[0_10px_36px_rgba(255,119,34,0.1)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <Laptop size={20} />
                </div>
                <h3 className="font-heading text-lg font-bold text-[var(--text-primary)]">Project {i}</h3>
              </div>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-5 flex-1">A high-performance full-stack web application built with modern architecture and secure authentication.</p>
              <div className="flex gap-2 flex-wrap mb-5">
                <span className="px-2.5 py-1 rounded-md bg-[var(--surface2)] border border-[var(--border-color)] text-[var(--text-muted)] text-[10px] font-bold">React</span>
                <span className="px-2.5 py-1 rounded-md bg-[var(--surface2)] border border-[var(--border-color)] text-[var(--text-muted)] text-[10px] font-bold">Node.js</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="flex items-center gap-1.5 text-[var(--text-muted)] text-xs font-bold hover:text-accent transition-colors"><Github size={14} /> GitHub</a>
                <a href="#" className="flex items-center gap-1.5 text-[var(--text-muted)] text-xs font-bold hover:text-accent transition-colors"><ExternalLink size={14} /> Live</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
