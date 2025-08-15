import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiUser, FiCode, FiStar } from 'react-icons/fi';

const About = ({ data }) => {
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	});

	if (!data) {
		return (
			<section id='about' className='section-padding'>
				<div className='container-custom'>
					<div className='animate-pulse'>Loading about section...</div>
				</div>
			</section>
		);
	}

	const stats = [
		{ label: '경력', value: data.experience, icon: FiUser },
		{ label: '프로젝트', value: data.projects, icon: FiCode },
		{ label: '주요 프로젝트 업체', value: data.clients, icon: FiStar },
		// { label: '배경', value: '2+', icon: FiHeart },
	];

	return (
		<section id='about' className='section-padding bg-gray-50 dark:bg-gray-900'>
			<div className='container-custom' ref={ref}>
				<motion.div initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold mb-4'>
						<span className='text-gradient'>About Me</span>
					</h2>
					<p className='text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>Get to know me better and learn about my journey in web development</p>
				</motion.div>

				<div className='grid lg:grid-cols-2 gap-16 items-center'>
					{/* Left Content */}
					<motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
						<h3 className='text-3xl font-bold mb-6 text-gray-900 dark:text-white'>좋은 가독성과 직관적인 방식으로 소통하는 개발자</h3>

						<p className='text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed'>{data.description}</p>

						<div className='space-y-4 mb-8'>
							{data.background.map((point, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: -20 }}
									animate={inView ? { opacity: 1, x: 0 } : {}}
									transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
									className='flex items-start gap-3'>
									<div className='w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0' />
									<p className='text-gray-600 dark:text-gray-400'>{point}</p>
								</motion.div>
							))}
						</div>

						{/* CTA */}
						<motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.8 }}>
							<button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className='btn-primary'>
								Let's Work Together
							</button>
						</motion.div>
					</motion.div>

					{/* Right Stats */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.4 }}
						className='grid grid-cols-2 gap-6'>
						{stats.map((stat, index) => (
							<motion.div
								key={stat.label}
								initial={{ opacity: 0, y: 30 }}
								animate={inView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
								className='card p-6 text-center group hover:scale-105 transition-transform duration-300'>
								<div className='w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
									<stat.icon className='text-white' size={28} />
								</div>

								<div className='text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2'>{stat.value}</div>

								<div className='text-gray-600 dark:text-gray-400 font-medium'>{stat.label}</div>
							</motion.div>
						))}
					</motion.div>
				</div>

				{/* Skills Preview */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.9 }}
					className='mt-16 text-center'>
					<h3 className='text-2xl font-bold mb-8 text-gray-900 dark:text-white'>Technologies I Love Working With</h3>

					<div className='flex flex-wrap justify-center gap-4'>
						{['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'].map((tech, index) => (
							<motion.span
								key={tech}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={inView ? { opacity: 1, scale: 1 } : {}}
								transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
								className='px-6 py-3 bg-white dark:bg-gray-800 rounded-full border-2 border-primary-200 dark:border-primary-800 text-primary-600 dark:text-primary-400 font-medium hover:border-primary-400 hover:scale-105 transition-all duration-300'>
								{tech}
							</motion.span>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
