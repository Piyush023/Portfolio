import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

export const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const title =
    'Crafting Scalable, Beautiful, and Performant Digital Experiences';
  const subtitle =
    'Frontend Engineer specializing in React, Next.js & React Native — turning ideas into high-impact products.';

  return (
    <div className='min-h-screen flex items-center justify-center relative px-4 sm:px-6'>
      {/* Diagonal gradient overlay */}
      <div className='pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-background via-background/80 to-foreground/10' />

      <div className='text-center max-w-4xl mx-auto py-24 sm:py-32'>
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-muted/20 rounded-full border border-border/50 backdrop-blur-sm">
            Available for new opportunities
          </span>
        </motion.div> */}

        <motion.h1
          className='text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight'
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className='text-lg md:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {subtitle}
        </motion.p>

        <motion.p
          className='text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Turning product vision into pixel-perfect, performant code using
          JavaScript, TypeScript, and the React ecosystem \u2014 backed by 3+ years
          of building production-grade web and mobile experiences.
        </motion.p>

        <motion.div
          className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-16'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <Button
            size='lg'
            className='group px-8 py-3 w-full sm:w-auto'
            onClick={() =>
              document
                .getElementById('projects')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Explore Projects
            <motion.span
              className='ml-2 inline-block'
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              →
            </motion.span>
          </Button>

          <Button
            variant='outline'
            size='lg'
            className='px-8 py-3 w-full sm:w-auto'
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Let&apos;s Connect
          </Button>
        </motion.div>

        <motion.div
          className='flex items-center justify-center gap-6'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          {[
            {
              Icon: Github,
              href: 'https://github.com/piyush023',
              label: 'GitHub',
            },
            {
              Icon: Linkedin,
              href: 'https://www.linkedin.com/in/piyush-khurana-98338b167/',
              label: 'LinkedIn',
            },
            {
              Icon: Mail,
              href: 'mailto:piyushkhurana.dev@gmail.com',
              label: 'Email',
            },
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 rounded-full border border-border/50 hover:border-foreground/50 transition-colors'
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={20} />
              <span className='sr-only'>{label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.button
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full border border-border/50 hover:border-foreground/50 transition-colors'
        onClick={scrollToAbout}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.1 }}
      >
        <ChevronDown size={24} />
      </motion.button>
    </div>
  );
};
