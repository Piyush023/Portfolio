'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';

export const SkillsSection: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: 'Frontend Technologies',
      color: 'from-blue-500/20 to-cyan-500/20',
      skills: [
        { name: 'JavaScript', level: 95, experience: '3+ years' },
        { name: 'TypeScript', level: 90, experience: '2+ years' },
        { name: 'React.js', level: 95, experience: '3+ years' },
        { name: 'Next.js', level: 85, experience: '2+ years' },
        { name: 'HTML5', level: 98, experience: '4+ years' },
        { name: 'CSS3', level: 92, experience: '4+ years' },
        { name: 'Tailwind CSS', level: 90, experience: '2+ years' },
        { name: 'SASS/SCSS', level: 85, experience: '2+ years' },
      ],
    },
    {
      title: 'Mobile Development',
      color: 'from-green-500/20 to-emerald-500/20',
      skills: [
        { name: 'React Native', level: 85, experience: '2+ years' },
        { name: 'Expo', level: 80, experience: '1+ years' },
        { name: 'Mobile UI/UX', level: 88, experience: '2+ years' },
      ],
    },
    {
      title: 'Development Tools',
      color: 'from-purple-500/20 to-pink-500/20',
      skills: [
        { name: 'Git/GitHub', level: 92, experience: '3+ years' },
        { name: 'Webpack', level: 75, experience: '1+ years' },
        { name: 'Vite', level: 85, experience: '1+ years' },
        { name: 'npm/yarn', level: 90, experience: '3+ years' },
        { name: 'VS Code', level: 95, experience: '4+ years' },
      ],
    },
    {
      title: 'Backend & APIs',
      color: 'from-orange-500/20 to-red-500/20',
      skills: [
        { name: 'Node.js', level: 80, experience: '2+ years' },
        { name: 'REST APIs', level: 90, experience: '3+ years' },
        { name: 'GraphQL', level: 75, experience: '1+ years' },
        { name: 'Firebase', level: 82, experience: '2+ years' },
      ],
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='py-24 px-6 bg-muted/5'>
      <div className='container mx-auto max-w-6xl'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className='text-3xl md:text-4xl mb-6'>Skills & Expertise</h2>
          <div className='w-16 h-1 bg-foreground mx-auto mb-8'></div>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            A comprehensive toolkit of modern technologies and frameworks I use
            to build exceptional digital experiences.
          </p>
        </motion.div>

        <motion.div
          className='grid lg:grid-cols-2 gap-8'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className='space-y-6'
              variants={categoryVariants}
            >
              <div
                className={`p-6 rounded-2xl border border-border/50 bg-gradient-to-br ${category.color} backdrop-blur-sm`}
              >
                <h3 className='text-xl mb-6'>{category.title}</h3>
                <div className='space-y-4'>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className='group cursor-pointer'
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className='flex items-center justify-between mb-2'>
                        <span className='group-hover:text-foreground transition-colors'>
                          {skill.name}
                        </span>
                        <Badge variant='secondary' className='text-xs'>
                          {skill.experience}
                        </Badge>
                      </div>
                      <div className='relative h-2 bg-muted/30 rounded-full overflow-hidden'>
                        <motion.div
                          className='absolute top-0 left-0 h-full bg-foreground rounded-full'
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        />
                        {hoveredSkill === skill.name && (
                          <motion.div
                            className='absolute -top-8 left-0 bg-foreground text-background px-2 py-1 rounded text-xs'
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{
                              left: `${skill.level}%`,
                              transform: 'translateX(-50%)',
                            }}
                          >
                            {skill.level}%
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className='mt-16 text-center'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h3 className='text-xl mb-6'>Always Learning</h3>
          <div className='flex flex-wrap items-center justify-center gap-3'>
            {[
              'Vue.js',
              'Svelte',
              'Three.js',
              'WebGL',
              'Rust',
              'Go',
              'Docker',
              'Kubernetes',
            ].map((tech) => (
              <motion.div
                key={tech}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  variant='outline'
                  className='px-3 py-1 border-border/50 hover:border-foreground/50 transition-colors'
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
