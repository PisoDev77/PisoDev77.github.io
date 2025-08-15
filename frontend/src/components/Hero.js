import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowDown } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Hero = ({ data }) => {
  const handleDownloadResume = async () => {
    // For static site: open a static file if present, otherwise show a helpful message
    try {
      const res = await fetch('/resume.pdf', { method: 'HEAD' });
      if (res.ok) {
        window.open('/resume.pdf', '_blank');
      } else {
        alert('Resume will be added soon.');
      }
    } catch (e) {
      alert('Resume will be added soon.');
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!data) {
    return (
      <section
        id='home'
        className='min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800'
      >
        <div className='animate-pulse'>Loading...</div>
      </section>
    );
  }

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'
    >
      {/* Background Animation */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-32 w-80 h-80 bg-primary-100 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-pulse-slow' />
        <div className='absolute -bottom-40 -left-32 w-80 h-80 bg-secondary-100 dark:bg-secondary-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-pulse-slow' />
        <div className='absolute top-40 left-1/2 w-80 h-80 bg-accent-100 dark:bg-accent-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-pulse-slow' />
      </div>

      <div className='container-custom section-padding relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Content */}
          <motion.div
            className='text-center lg:text-left'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className='text-primary-600 dark:text-primary-400 font-medium mb-4'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              안녕하세요.
            </motion.p>

            <motion.h1
              className='text-5xl md:text-6xl lg:text-7xl font-bold mb-4'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className='text-gradient'>{data.name}</span>
            </motion.h1>

            <motion.h2
              className='text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {data.title}
            </motion.h2>

            <motion.p
              className='text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {data.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className='flex flex-col sm:flex-row gap-4 mb-12'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.button onClick={scrollToAbout} className='btn-primary' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                View My Work
              </motion.button>

              <motion.button
                onClick={handleDownloadResume}
                className='btn-secondary flex items-center justify-center gap-2'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload />
                Download Resume
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className='flex justify-center lg:justify-start gap-6'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {[
                { Icon: FaGithub, href: 'https://github.com/PisoDev77', label: 'GitHub' },
                { Icon: FaXTwitter, href: 'https://x.com/pisodev0427', label: 'X' },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-300'
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div className='relative' initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className='relative mx-auto w-80 h-80 lg:w-96 lg:h-96'>
              {/* Animated rings */}
              <motion.div
                className='absolute inset-0 rounded-full border-4 border-primary-200 dark:border-primary-800'
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className='absolute inset-4 rounded-full border-2 border-secondary-200 dark:border-secondary-800'
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />

              {/* Profile Image */}
              <motion.div
                className='absolute inset-8 rounded-full overflow-hidden bg-gradient-to-br from-primary-400 to-secondary-400 p-1'
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={data.image} alt={data.name} className='w-full h-full object-cover rounded-full' />
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className='absolute top-4 right-4 w-4 h-4 bg-accent-400 rounded-full'
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className='absolute bottom-8 left-4 w-6 h-6 bg-primary-400 rounded-full'
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.button
          onClick={scrollToAbout}
          className='flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className='text-sm mb-2'>Scroll down</span>
          <FiArrowDown />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;