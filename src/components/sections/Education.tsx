import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { EduCard } from '../ui/EduCard';

/**
 * @component Education
 * @description Education timeline section displaying academic history.
 * // SEARCH_TAGS: Education, component, section, ui
 */
export const Education: React.FC = () => {
  return (
    <section id="education" className="bg-[var(--bg)] border-t border-[var(--border-color)] scroll-mt-16">
      <div className="max-w-5xl mx-auto py-12 px-4">
        <SectionHeader title="Education" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
           <EduCard delay={0.1} year="2020 – 2022" degree="Master of Computer Applications (MCA)" school="Your University Name" desc="Advanced coursework in software engineering, distributed systems, algorithms and database design." />
           <EduCard delay={0.2} year="2017 – 2020" degree="Bachelor of Computer Applications (BCA)" school="Your University Name" desc="Core CS fundamentals, web technologies, programming languages, and data structures." />
           <EduCard delay={0.3} year="2015 – 2017" degree="Higher Secondary (10+2)" school="Placeholder School Name" desc="Placeholder description for high school education and foundational studies." />
           <EduCard delay={0.4} year="2013 – 2015" degree="Secondary School (10th)" school="Placeholder School Name" desc="Placeholder description for secondary school education and early academics." />
        </div>
      </div>
    </section>
  );
};
