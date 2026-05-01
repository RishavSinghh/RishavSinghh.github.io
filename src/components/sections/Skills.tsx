import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../ui/SectionHeader';

/**
 * @component Skills
 * @description Skills overview section categorized by technical domains.
 * // SEARCH_TAGS: Skills, component, section, ui
 */
export const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-[var(--bg)] border-t border-[var(--border-color)] scroll-mt-16">
      <div className="max-w-5xl mx-auto py-12 px-4">
        <SectionHeader title="Skills" />
        <div className="flex flex-col gap-10">
          {[{ cat: 'Backend', skills: ['Node.js', 'Express.js', 'Flask', 'Python', 'REST APIs'] },
            { cat: 'Frontend', skills: ['React JS', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'] },
            { cat: 'Databases', skills: ['MongoDB', 'MySQL', 'MS SQL Server'] },
            { cat: 'Tools & DevOps', skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Vercel'] }].map((item, idx) => (
            <motion.div 
              key={item.cat}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="font-heading text-[11px] font-bold text-accent uppercase tracking-[3px] mb-4">{item.cat}</h4>
              <div className="flex flex-wrap gap-3">
                {item.skills.map(s => (
                  <span key={s} className="px-5 py-2.5 rounded-full bg-[var(--surface)] border border-[var(--border-color)] text-sm font-medium text-[var(--text-primary)] hover:bg-[rgba(255,119,34,0.1)] hover:border-accent hover:text-accent transition-all duration-200 hover:translate-y-[-2px] select-none">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
