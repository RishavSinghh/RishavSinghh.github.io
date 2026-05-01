import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { CertCard, CertItem } from '../ui/CertCard';

interface CertificationsProps {
  openCert: (cert: CertItem) => void;
}

/**
 * @component Certifications
 * @description Certifications gallery allowing users to view credentials.
 * // SEARCH_TAGS: Certifications, component, section, ui
 */
export const Certifications: React.FC<CertificationsProps> = ({ openCert }) => {
  return (
    <section id="certifications" className="bg-[var(--surface)] bg-dot-pattern border-t border-[var(--border-color)] scroll-mt-16">
      <div className="max-w-6xl mx-auto py-12 px-4">
        <SectionHeader title="Certifications" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {[
            { name: 'Python for Everybody', issuer: 'Coursera', year: '2021', image: '' },
            { name: 'Complete Node.js Dev Course', issuer: 'Udemy', year: '2021', image: '' },
            { name: 'Pre Security Path', issuer: 'TryHackMe', year: '2022', image: '' },
            { name: 'MongoDB Basics', issuer: 'MongoDB University', year: '2022', image: '' },
            { name: 'React Developer Course', issuer: 'Udemy', year: '2022', image: '' },
            { name: 'Intro to Cybersecurity', issuer: 'Cisco', year: '2022', image: '' },
            { name: 'Data Visualization with D3', issuer: 'freeCodeCamp', year: '2023', image: '' },
            { name: 'Next.js 14 Fundamentals', issuer: 'Vercel', year: '2023', image: '' },
            { name: 'Firebase Masterclass', issuer: 'Udemy', year: '2023', image: '' },
            { name: 'Testing React Apps', issuer: 'Testing Library', year: '2023', image: '' }
          ].map((cert, idx) => (
            <CertCard 
              key={idx}
              delay={idx * 0.05}
              name={cert.name}
              issuer={cert.issuer}
              year={cert.year}
              image={cert.image}
              onOpen={openCert}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
