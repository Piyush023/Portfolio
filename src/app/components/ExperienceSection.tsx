import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2023 - Present',
      type: 'Full-time',
      description: 'Leading frontend development initiatives for multiple client projects, mentoring junior developers, and implementing modern React architectures.',
      achievements: [
        'Improved application performance by 40% through code optimization',
        'Led migration from JavaScript to TypeScript across 5 major projects',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored 3 junior developers and conducted code reviews'
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'AWS'],
      website: 'https://techcorp.example.com'
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Innovations Inc',
      location: 'Remote',
      period: '2022 - 2023',
      type: 'Full-time',
      description: 'Developed responsive web applications and mobile apps using React and React Native, collaborated with design teams to create exceptional user experiences.',
      achievements: [
        'Built 3 React Native apps with 50k+ downloads each',
        'Reduced bundle size by 30% through webpack optimization',
        'Implemented responsive designs for 10+ client websites',
        'Integrated 15+ third-party APIs and services'
      ],
      technologies: ['React', 'React Native', 'JavaScript', 'Redux', 'Firebase'],
      website: 'https://digitalinnovations.example.com'
    },
    {
      title: 'Junior Frontend Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      period: '2021 - 2022',
      type: 'Full-time',
      description: 'Started my professional journey building user interfaces with React, learning best practices, and contributing to the companys main product.',
      achievements: [
        'Developed 20+ reusable React components',
        'Improved page load times by 25% through optimization',
        'Collaborated with UX team to implement pixel-perfect designs',
        'Maintained 98% test coverage for frontend components'
      ],
      technologies: ['React', 'JavaScript', 'CSS3', 'Jest', 'Git'],
      website: 'https://startupxyz.example.com'
    },
    {
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2020 - 2021',
      type: 'Freelance',
      description: 'Built websites and web applications for small businesses and startups, gaining experience with various technologies and client communication.',
      achievements: [
        'Completed 15+ client projects with 100% satisfaction rate',
        'Learned React, Node.js, and modern development workflows',
        'Built responsive websites for diverse industries',
        'Managed project timelines and client communications'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js'],
      website: null
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="py-24 px-6 bg-muted/5">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl mb-6">Experience</h2>
          <div className="w-16 h-1 bg-foreground mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in frontend development, showcasing growth, achievements, and contributions to various projects and teams.
          </p>
        </motion.div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border/50"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${experience.period}`}
                className="relative flex items-start space-x-8"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="flex-shrink-0 w-16 h-16 rounded-full bg-background border-4 border-foreground flex items-center justify-center relative z-10"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-xl">
                    {index === 0 ? '🚀' : index === 1 ? '💻' : index === 2 ? '⭐' : '🌱'}
                  </span>
                </motion.div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <Card className="p-6 border-border/50 hover:border-foreground/20 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl mb-1">{experience.title}</h3>
                        <div className="flex items-center space-x-4 text-muted-foreground mb-2">
                          <span className="flex items-center space-x-1">
                            <span>{experience.company}</span>
                            {experience.website && (
                              <a
                                href={experience.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-1 hover:text-foreground transition-colors"
                              >
                                <ExternalLink size={14} />
                              </a>
                            )}
                          </span>
                          <span className="flex items-center space-x-1">
                            <MapPin size={14} />
                            <span>{experience.location}</span>
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end space-y-2">
                        <div className="flex items-center space-x-1 text-muted-foreground">
                          <Calendar size={14} />
                          <span>{experience.period}</span>
                        </div>
                        <Badge variant="secondary">{experience.type}</Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start space-x-2 text-muted-foreground"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-foreground mt-2"></span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <motion.div
                            key={tech}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Badge variant="outline" className="px-3 py-1">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};