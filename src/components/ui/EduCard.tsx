import React from 'react';
import { motion } from 'motion/react';
import { School } from 'lucide-react';

interface EduCardProps {
  year: string;
  degree: string;
  school: string;
  desc: string;
  delay: number;
}

/**
 * @component EduCard
 * @description Representation of a single educational achievement or timeline point.
 * // SEARCH_TAGS: EduCard, component, section, ui
 */
export const EduCard: React.FC<EduCardProps> = ({ year, degree, school, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-[var(--surface)] border border-[var(--border-color)] p-8 rounded-2xl hover:border-accent group transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_10px_38px_rgba(255,119,34,0.15)]"
  >
    <motion.div 
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6"
    >
      <School size={24} />
    </motion.div>
    <span className="inline-block px-3 py-1 rounded-full bg-[rgba(255,119,34,0.1)] text-accent font-bold text-xs mb-4 tracking-wider">
      {year}
    </span>
    <h3 className="font-heading text-xl font-bold mb-2">{degree}</h3>
    <h4 className="text-accent font-semibold text-sm mb-4">{school}</h4>
    <p className="text-[var(--text-muted)] text-sm leading-relaxed">{desc}</p>
  </motion.div>
);
