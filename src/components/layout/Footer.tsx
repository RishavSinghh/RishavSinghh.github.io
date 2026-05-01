import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { XLogoIcon } from '../ui/XLogoIcon';

interface FooterProps {
  isDark: boolean;
  smoothScroll: (id: string) => void;
}

/**
 * @component Footer
 * @description Primary footer of the application containing links, social icons, and theme-dependent background decorations.
 * // SEARCH_TAGS: Footer, component, section, ui
 */
export const Footer: React.FC<FooterProps> = ({ isDark, smoothScroll }) => {
  return (
    <footer className="relative bg-[var(--footer-bg)] border-t border-[var(--border-color)] overflow-hidden">
      {!isDark && (
        <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      )}
      
      {isDark && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Top center glow */}
          <div className="absolute -top-[150px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent opacity-[0.08] blur-[100px] rounded-[100%]" />
          
          {/* Bottom radiating light */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,119,34,0.08)_0%,transparent_70%)]" />
          
          {/* Minimal Grid receding into distance */}
          <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-grid-pattern opacity-[0.04] [mask-image:linear-gradient(to_top,black,transparent)]" />
          
          {/* Ambient floating particles */}
          <div className="absolute top-[30%] left-[15%] w-1 h-1 bg-accent rounded-full opacity-60 shadow-[0_0_12px_var(--color-accent)] animate-pulse" />
          <div className="absolute top-[60%] right-[20%] w-1.5 h-1.5 bg-accent rounded-full opacity-40 shadow-[0_0_15px_var(--color-accent)] animate-[pulse_3s_ease-in-out_infinite]" />
          <div className="absolute bottom-[20%] left-[40%] w-2 h-2 bg-accent rounded-full opacity-30 shadow-[0_0_20px_var(--color-accent)] animate-[pulse_4s_ease-in-out_infinite]" />
        </div>
      )}

      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-40" />
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-[5%] py-16 z-10">
        <div>
          <div className="font-heading text-xl font-bold text-[var(--text-primary)] mb-4">Rishav <span className="text-accent">Singh</span></div>
          <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-[300px]">Full-Stack Developer building robust backend systems and modern web applications using the MERN stack.</p>
        </div>
        <div>
          <h4 className="font-heading text-sm font-bold text-[var(--text-primary)] mb-5 uppercase tracking-wide">Quick Links</h4>
          <ul className="flex flex-col gap-3 list-none">
            {['home', 'about', 'education', 'projects', 'skills', 'certifications', 'contact'].map(sec => (
              <li key={sec}><a href={`#${sec}`} onClick={(e) => { e.preventDefault(); smoothScroll(sec); }} className="text-[var(--text-muted)] text-sm hover:text-accent hover:pl-2 transition-all duration-200 inline-block">{sec.charAt(0).toUpperCase() + sec.slice(1)}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-sm font-bold text-[var(--text-primary)] mb-5 uppercase tracking-wide">Connect</h4>
          <div className="flex gap-3">
             {[
               { Icon: Github, href: "https://github.com/RishavSinghh" },
               { Icon: Linkedin, href: "#" },
               { Icon: XLogoIcon, href: "#" },
               { Icon: Mail, href: "mailto:rishavsingh@protonmail.com" }
             ].map(({ Icon, href }, idx) => (
               <a 
                 key={idx} 
                 href={href} 
                 target={href.startsWith("http") ? "_blank" : undefined}
                 rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                 className="w-10 h-10 rounded-full bg-[var(--surface2)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] transition-all duration-200 hover:text-accent hover:border-accent hover:bg-[rgba(255,119,34,0.1)] hover:translate-y-[-2px]"
               >
                 <Icon size={18} />
               </a>
             ))}
          </div>
        </div>
      </div>
      <div className="relative border-t border-[var(--border-color)] py-6 px-[5%] text-center z-10">
        <p className="text-[var(--text-muted)] text-xs">© 2026 Rishav Singh. All rights reserved.</p>
      </div>
    </footer>
  );
};
