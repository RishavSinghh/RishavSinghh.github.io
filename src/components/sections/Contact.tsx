import React from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { XLogoIcon } from '../ui/XLogoIcon';

/**
 * @component Contact
 * @description Contact section with email and social media links.
 * // SEARCH_TAGS: Contact, component, section, ui
 */
export const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-[var(--bg)] border-t border-[var(--border-color)] scroll-mt-16">
      <div className="max-w-2xl mx-auto py-12 px-4 text-center">
        <SectionHeader title="Get In Touch" />
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <p className="text-[var(--text-muted)] text-base leading-relaxed mb-10">I'd love to hear from you! Whether it's a project, job opportunity, or just a friendly chat — my inbox is always open.</p>
          <a 
            href="mailto:rishavsingh@protonmail.com" 
            className="flex items-center gap-3 bg-accent text-black px-9 py-4 rounded-2xl font-heading font-medium text-lg shadow-[0_6px_24px_rgba(255,119,34,0.2)] transition-all duration-300 hover:bg-[#e8891e] hover:translate-y-[-3px] mb-12"
          >
            <Mail size={22} />
            rishavsingh@protonmail.com
          </a>
          
          <div className="flex gap-4 justify-center">
            {[
              { Icon: Github, href: "https://github.com/RishavSinghh" },
              { Icon: Linkedin, href: "#" },
              { Icon: XLogoIcon, href: "https://x.com/rishavsinghh9" }
            ].map(({ Icon, href }, idx) => (
              <a 
                key={idx}
                href={href} 
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-13 h-13 rounded-xl bg-[var(--surface)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] transition-all duration-300 hover:text-accent hover:border-accent hover:translate-y-[-4px] hover:bg-[rgba(255,119,34,0.1)] shadow-sm"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
