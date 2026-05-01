import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { CertItem } from './CertCard';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  cert: CertItem | null;
}

/**
 * @component Modal
 * @description Reusable overlay modal for viewing certificate details.
 * // SEARCH_TAGS: Modal, component, section, ui
 */
export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, cert }) => {
  if (!isOpen || !cert) return null;
  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.97, opacity: 0, y: 16 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.97, opacity: 0, y: 16 }}
          className="bg-[var(--surface)] border border-[var(--border-color)] rounded-2xl md:max-w-[95vw] md:h-[90vh] w-full flex flex-col overflow-hidden shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-3 md:px-8 md:py-3 border-b border-[var(--border-color)]">
            <div className="flex flex-col gap-0">
              <h3 className="font-heading text-sm md:text-base font-bold text-[var(--text-primary)] leading-tight">{cert.name}</h3>
              <p className="text-accent text-[10px] md:text-xs font-medium tracking-wide">
                {cert.issuer} <span className="text-[var(--text-muted)] mx-1">·</span> {cert.year}
              </p>
            </div>
            <button 
              onClick={onClose}
              className="bg-[var(--surface2)] border border-[var(--border-color)] rounded-lg w-8 h-8 flex items-center justify-center text-[var(--text-primary)] hover:bg-accent/10 hover:border-accent transition-all shrink-0 ml-4"
            >
              <X size={16} />
            </button>
          </div>

          {/* Viewer */}
          <div className="flex-1 p-4 md:p-10 flex items-center justify-center bg-[var(--bg)] min-h-[300px] overflow-hidden">
            <div className="relative h-full w-full flex items-center justify-center">
              <img 
                src={cert.image || `https://via.placeholder.com/800x570?text=${encodeURIComponent(cert.name)}`} 
                alt="Certificate" 
                className="max-w-full max-h-full w-auto h-auto object-contain shadow-lg border border-[var(--border-color)] rounded-lg select-none pointer-events-none"
                draggable={false}
                onContextMenu={e => e.preventDefault()}
              />
              {/* Copy Protection Shield */}
              <div 
                className="absolute inset-0 z-10 cursor-default" 
                onContextMenu={e => e.preventDefault()} 
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
