'use client';
import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ParticleBackground } from './ParticleBackground';
import { Navigation } from './Navigation';
import { HeroSection } from './HeroSection';
import { AboutSection } from './AboutSection';
import { SkillsSection } from './SkillsSection';
import { ProjectsSection } from './ProjectsSection';
import { ExperienceSection } from './ExperienceSection';
import { ContactSection } from './ContactSection';
import { LoadingScreen } from './LoadingScreen';
// import { AnimateClick } from './AnimateClick.jsx';

export const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [click, setClick] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'skills',
        'projects',
        'experience',
        'contact',
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setClick({ x: e.pageX, y: e.pageY });
  };

  return (
    <div className='min-h-screen text-foreground overflow-x-hidden'>
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>

      {!isLoading && (
        <div className='relative' onClick={(e) => handleClick(e)}>
          <ParticleBackground />
          {/* <AnimateClick position={click} /> */}
          <Navigation activeSection={activeSection} />

          <main className='relative z-10'>
            <section id='home'>
              <HeroSection />
            </section>

            <section id='about'>
              <AboutSection />
            </section>

            <section id='skills'>
              <SkillsSection />
            </section>

            <section id='experience'>
              <ExperienceSection />
            </section>

            <section id='projects'>
              <ProjectsSection />
            </section>

            <section id='contact'>
              <ContactSection />
            </section>
          </main>
        </div>
      )}
    </div>
  );
};
