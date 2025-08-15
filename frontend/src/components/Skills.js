import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = ({ data }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  const [animatedSkills, setAnimatedSkills] = useState([]);

  useEffect(() => {
    if (inView && data) {
      // Animate skill bars with delay
      data.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedSkills(prev => [...prev, index]);
        }, index * 200);
      });
    }
  }, [inView, data]);

  if (!data) {
    return (
      <section id="skills" className="section-padding">
        <div className="container-custom">
          <div className="animate-pulse">Loading skills...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-800">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6 group hover:scale-105 transition-all duration-300 glow-on-hover"
            >
              {/* Skill Icon & Name */}
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    {skill.level}% Proficiency
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="skill-bar mb-4">
                <motion.div
                  className="skill-progress"
                  initial={{ width: 0 }}
                  animate={animatedSkills.includes(index) ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>

              {/* Skill Description */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                  <span>Experience Level</span>
                  <span className="font-semibold">
                    {skill.level >= 90 ? 'Expert' : 
                     skill.level >= 75 ? 'Advanced' : 
                     skill.level >= 60 ? 'Intermediate' : 'Beginner'}
                  </span>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Other Tools & Technologies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Git & GitHub', 'Webpack', 'Vite', 'NPM/Yarn', 'Figma', 
              'Adobe XD', 'Responsive Design', 'REST APIs', 'GraphQL', 
              'Testing (Jest)', 'Agile/Scrum', 'Performance Optimization'
            ].map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 font-medium hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:scale-105 cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 grid md:grid-cols-3 gap-8 text-center"
        >
          {[
            {
              title: 'Frontend Focus',
              description: 'Specialized in modern React development with TypeScript and cutting-edge CSS frameworks',
              icon: '💻'
            },
            {
              title: 'Modern Tooling',
              description: 'Proficient with latest build tools, testing frameworks, and development workflows',
              icon: '🛠️'
            },
            {
              title: 'Best Practices',
              description: 'Committed to clean code, performance optimization, and accessible user interfaces',
              icon: '✨'
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border border-primary-100 dark:border-primary-800"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                {item.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;