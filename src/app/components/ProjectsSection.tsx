'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce platform built with React and Next.js, featuring real-time inventory management, payment processing, and admin dashboard.',
      longDescription:
        'This comprehensive e-commerce solution includes user authentication, shopping cart functionality, order tracking, payment integration with Stripe, and a complete admin panel for inventory management. Built with modern React patterns and optimized for performance.',
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Stripe',
        'Prisma',
      ],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/username/ecommerce',
      category: 'Web Application',
    },
    {
      title: 'Social Media Dashboard',
      description:
        'A comprehensive social media management dashboard with analytics, scheduling, and multi-platform integration capabilities.',
      longDescription:
        'Advanced dashboard for managing multiple social media accounts with features like post scheduling, analytics visualization, engagement tracking, and team collaboration tools. Includes dark/light mode and responsive design.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: [
        'React',
        'TypeScript',
        'Chart.js',
        'Framer Motion',
        'Tailwind CSS',
      ],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/username/social-dashboard',
      category: 'Dashboard',
    },
    {
      title: 'Task Management App',
      description:
        'A modern task management application with real-time collaboration, drag-and-drop functionality, and advanced filtering.',
      longDescription:
        'Feature-rich task management solution with real-time updates, team collaboration, project organization, time tracking, and detailed analytics. Includes mobile app built with React Native.',
      image:
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: [
        'React',
        'React Native',
        'Node.js',
        'Socket.io',
        'MongoDB',
      ],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/username/task-manager',
      category: 'Mobile App',
    },
    {
      title: 'Learning Management System',
      description:
        'Educational platform with course creation, video streaming, progress tracking, and interactive quizzes.',
      longDescription:
        'Complete LMS solution with course authoring tools, video streaming capabilities, student progress tracking, interactive assessments, and certification system. Supports multiple learning formats and mobile learning.',
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      technologies: [
        'Next.js',
        'TypeScript',
        'Prisma',
        'NextAuth.js',
        'AWS S3',
      ],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/username/lms',
      category: 'Web Platform',
    },
  ];

  const nextProject = () => {
    setSelectedProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setSelectedProject(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
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
          <h2 className='text-3xl md:text-4xl mb-6'>Featured Projects</h2>
          <div className='w-16 h-1 bg-foreground mx-auto mb-8'></div>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            A selection of projects that showcase my skills in frontend
            development, user experience design, and modern web technologies.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-3 gap-8'>
          {/* Project Cards */}
          <motion.div
            className='lg:col-span-1 space-y-4'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  className={`p-4 cursor-pointer transition-all duration-300 border-border/50 ${
                    selectedProject === index
                      ? 'border-foreground/50 bg-muted/20'
                      : 'hover:border-foreground/30'
                  }`}
                  onClick={() => setSelectedProject(index)}
                >
                  <div className='flex items-start space-x-3'>
                    <div className='flex-shrink-0'>
                      <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-muted/20 to-muted/5 border border-border/50 flex items-center justify-center'>
                        <span className='text-lg'>
                          {index === 0
                            ? '🛒'
                            : index === 1
                              ? '📊'
                              : index === 2
                                ? '✅'
                                : '📚'}
                        </span>
                      </div>
                    </div>
                    <div className='flex-1 min-w-0'>
                      <h3 className='text-base mb-1 truncate'>
                        {project.title}
                      </h3>
                      <p className='text-sm text-muted-foreground line-clamp-2'>
                        {project.description}
                      </p>
                      <Badge variant='secondary' className='mt-2 text-xs'>
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Selected Project Detail */}
          <motion.div
            className='lg:col-span-2'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <Card className='p-0 overflow-hidden border-border/50'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={selectedProject}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className='relative h-64 md:h-80 overflow-hidden'>
                    <ImageWithFallback
                      src={projects[selectedProject].image}
                      alt={projects[selectedProject].title}
                      className='w-full h-full object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-background/80 to-transparent'></div>
                    <div className='absolute top-4 right-4 flex space-x-2'>
                      <Button
                        size='sm'
                        variant='secondary'
                        className='bg-background/80 backdrop-blur-sm'
                        onClick={prevProject}
                      >
                        <ChevronLeft size={16} />
                      </Button>
                      <Button
                        size='sm'
                        variant='secondary'
                        className='bg-background/80 backdrop-blur-sm'
                        onClick={nextProject}
                      >
                        <ChevronRight size={16} />
                      </Button>
                    </div>
                  </div>

                  <div className='p-6'>
                    <div className='flex items-start justify-between mb-4'>
                      <div>
                        <h3 className='text-2xl mb-2'>
                          {projects[selectedProject].title}
                        </h3>
                        <Badge variant='outline'>
                          {projects[selectedProject].category}
                        </Badge>
                      </div>
                      <div className='flex space-x-2'>
                        <Button size='sm' variant='outline' asChild>
                          <a
                            href={projects[selectedProject].demoUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <ExternalLink size={16} className='mr-2' />
                            Demo
                          </a>
                        </Button>
                        <Button size='sm' variant='outline' asChild>
                          <a
                            href={projects[selectedProject].githubUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <Github size={16} className='mr-2' />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>

                    <p className='text-muted-foreground mb-6 leading-relaxed'>
                      {projects[selectedProject].longDescription}
                    </p>

                    <div>
                      <h4 className='mb-3'>Technologies Used</h4>
                      <div className='flex flex-wrap gap-2'>
                        {projects[selectedProject].technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant='secondary'
                            className='px-3 py-1'
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Card>
          </motion.div>
        </div>

        <motion.div
          className='text-center mt-12'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <Button variant='outline' size='lg' asChild>
            <a
              href='https://github.com/username'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Github size={20} className='mr-2' />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
