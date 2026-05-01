import React from 'react';
import { motion } from 'motion/react';

/**
 * @component SectionHeader
 * @description Animated section header with a title and an animated underline.
 * // SEARCH_TAGS: SectionHeader, component, section, ui
 */
export const SectionHeader = ({ title }: { title: string }) => (
  <div className="text-center mb-16 relative">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="font-heading text-3xl md:text-5xl font-bold mb-4 tracking-tight"
    >
      {title}
    </motion.h2>
    <div className="flex justify-center">
      <motion.div 
        animate={{ 
          width: [50, 100, 50],
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="h-1 rounded-full bg-accent"
      />
    </div>
  </div>
);
