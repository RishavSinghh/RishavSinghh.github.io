import React from 'react';
import { motion } from 'motion/react';

interface AboutCardProps {
  icon: any;
  title: string;
  text: string;
  delay: number;
}

/**
 * @component AboutCard
 * @description Card component used within the About section to highlight specific traits or skills with an icon.
 * // SEARCH_TAGS: AboutCard, component, section, ui
 */
export const AboutCard: React.FC<AboutCardProps> = ({ icon: Icon, title, text, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-[var(--surface)] border border-[var(--border-color)] p-8 rounded-2xl flex flex-col gap-4 hover:border-accent group transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_8px_30px_rgba(255,119,34,0.15)]"
  >
    <motion.div 
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="text-accent text-4xl"
    >
      <Icon size={40} />
    </motion.div>
    <h3 className="font-heading text-lg font-bold tracking-wide">{title}</h3>
    <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed" dangerouslySetInnerHTML={{ __html: text }} />
  </motion.div>
);
