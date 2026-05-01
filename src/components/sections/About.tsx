import React from 'react';
import { Terminal, Backpack, Globe, Cpu, Shield, BookOpen } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { AboutCard } from '../ui/AboutCard';

/**
 * @component About
 * @description About me section detailing skills, background, and personal interests using card components.
 * // SEARCH_TAGS: About, component, section, ui
 */
export const About: React.FC = () => {
  return (
    <section id="about" className="bg-[var(--surface)] bg-dot-pattern border-t border-[var(--border-color)] scroll-mt-16">
      <div className="max-w-6xl mx-auto py-12">
        <SectionHeader title="About Me" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 md:px-0">
          <AboutCard delay={0.1} icon={Terminal} title="Backend-Focused Developer" text="I specialise in <strong>backend development</strong> — building RESTful APIs, designing database schemas, and architecting server-side systems using <strong>Node.js</strong>, <strong>Express.js</strong> and <strong>Flask</strong>." />
          <AboutCard delay={0.2} icon={Backpack} title="Academic Background" text="I hold both a <strong>BCA and MCA</strong> from a reputed national university in India, covering core CS theory and advanced software engineering." />
          <AboutCard delay={0.3} icon={Globe} title="MERN Stack Expertise" text="I build complete web applications using <strong>MongoDB, Express.js, React JS and Node.js</strong>. I enjoy connecting the dots seamlessly." />
          <AboutCard delay={0.4} icon={Cpu} title="Problem Solver" text="I love solving algorithmic challenges on <strong>HackerRank</strong> and exploring cybersecurity on <strong>TryHackMe</strong>. Logic problems are my thing." />
          <AboutCard delay={0.5} icon={Shield} title="Cybersecurity Interest" text="Beyond development, I have a growing interest in <strong>cybersecurity</strong>, actively learning through labs and network security concepts." />
          <AboutCard delay={0.6} icon={BookOpen} title="Lifelong Learner" text="Learning is core to my life. I'm always picking up new technologies, frameworks and tools to stay current and curious." />
        </div>
      </div>
    </section>
  );
};
