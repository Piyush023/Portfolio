import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users } from 'lucide-react';
import { Card } from './ui/card';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'End-to-End Development',
      description:
        'Building features across the stack — from frontend architecture and state management to backend APIs and integrations.',
    },
    {
      icon: Palette,
      title: 'Product-Focused UI/UX',
      description:
        'Designing clean, intuitive interfaces with strong attention to usability, accessibility, and real user behavior.',
    },
    {
      icon: Zap,
      title: 'Performance & Scalability',
      description:
        'Optimizing applications for speed, scalability, and reliability across web and mobile platforms.',
    },
    {
      icon: Users,
      title: 'Team & Ownership Mindset',
      description:
        'Collaborating closely with product, design, and engineering teams while taking ownership of features from idea to production.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='py-24 px-6'>
      <div className='container mx-auto max-w-6xl'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className='text-3xl md:text-4xl mb-4'>About Me</h2>
          <p className='text-muted-foreground max-w-xl mx-auto text-sm md:text-base'>
            Turning complex product ideas into scalable, user-focused solutions
            using modern web and mobile technologies.
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-10 lg:gap-12 items-center mb-16'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h3 className='text-2xl mb-6'>Frontend-Led Full-Stack Engineer</h3>
            <div className='space-y-4 text-muted-foreground text-sm md:text-base'>
              <p>
                With over three years of experience building real-world
                products, I work as a frontend-led full-stack engineer focused
                on creating scalable, high-performance web and mobile
                applications. My core expertise lies in JavaScript, TypeScript,
                React, Next.js, and React Native, complemented by hands-on
                backend experience using Node.js, Express, REST APIs, and
                real-time systems.
              </p>

              <p>
                I’ve worked extensively in product-driven startup environments,
                where I owned features end-to-end — from UI/UX implementation
                and state management to API integration, performance
                optimization, and production debugging. I enjoy building systems
                that are not just functional, but reliable, maintainable, and
                scalable as user traffic grows.
              </p>

              <p>
                Beyond writing code, I focus on problem-solving, clean
                architecture, and collaboration with designers, backend
                engineers, and product teams. I care deeply about performance,
                developer experience, and delivering features that create
                measurable business impact.
              </p>
            </div>
          </motion.div>

          <motion.div
            className='relative'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className='aspect-square bg-gradient-to-br from-muted/20 to-muted/5 rounded-2xl border border-border/50 flex items-center justify-center'>
              {/* <Lottie
                animationData={assetsIndex.aboutMeAnimation}
                loop={true}
                style={{ width: '100%', height: '100%' }}
              /> */}
              <video
                src='https://assets.artistfirst.in/uploads/1767790506245-tmpczt1icm6_comp.mp4'
                autoPlay
                loop
                muted
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '16px',
                  objectFit: 'cover',
                }}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
        >
          {highlights.map((highlight) => (
            <motion.div key={highlight.title} variants={itemVariants}>
              <Card className='p-3 h-full border-border/50 hover:border-foreground/20 transition-colors group'>
                <motion.div
                  className='flex items-center justify-center w-12 h-12 rounded-xl bg-muted/20 mb-2 group-hover:bg-muted/30 transition-colors'
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <highlight.icon size={30} />
                </motion.div>
                <h3 className='text-lg font-semibold text-foreground'>
                  {highlight.title}
                </h3>
                <p className='text-muted-foreground text-sm'>
                  {highlight.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
