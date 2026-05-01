import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Eye } from 'lucide-react';

export interface CertItem {
  name: string;
  issuer: string;
  year: string;
  image: string;
}

interface CertCardProps extends CertItem {
  onOpen: (cert: CertItem) => void;
  delay: number;
}

/**
 * @component CertCard
 * @description Card representing a certificate or course, allows trigger for modal view.
 * // SEARCH_TAGS: CertCard, component, section, ui
 */
export const CertCard: React.FC<CertCardProps> = ({ name, issuer, year, image, onOpen, delay }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-[var(--surface)] border border-[var(--border-color)] p-4 flex flex-col gap-2 group transition-all duration-300 hover:border-accent hover:translate-y-[-3px] rounded-xl shadow-sm"
  >
    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-1 transition-all duration-300">
      <GraduationCap size={20} />
    </div>
    <div className="flex flex-col flex-1">
      <h3 className="font-heading text-xs font-bold leading-tight mb-1 line-clamp-2 min-h-[2.5em]">{name}</h3>
      <p className="text-accent font-semibold text-[11px] mb-0.5">{issuer}</p>
      <p className="text-[var(--text-muted)] text-[10px] mb-3">{year}</p>
      <button 
        onClick={() => onOpen({ name, issuer, year, image })}
        className="mt-auto w-fit px-6 mx-auto flex items-center justify-center gap-2 py-1.5 rounded-lg border border-[var(--border-color)] text-[var(--text-primary)] text-[11px] font-bold hover:border-accent hover:text-accent transition-all"
      >
        <Eye size={14} /> View
      </button>
    </div>
  </motion.div>
);
