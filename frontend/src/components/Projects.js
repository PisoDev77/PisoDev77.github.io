import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';

const Projects = ({ data }) => {
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	});

	const [selectedProject, setSelectedProject] = useState(null);
	const [filter, setFilter] = useState('all');

	if (!data) {
		return (
			<section id='projects' className='section-padding'>
				<div className='container-custom'>
					<div className='animate-pulse'>Loading projects...</div>
				</div>
			</section>
		);
	}

	// Get unique technologies for filtering
	const allTechnologies = [...new Set(data.flatMap((project) => project.technologies))];

	// Filter projects based on selected filter
	const filteredProjects = filter === 'all' ? data : data.filter((project) => project.technologies.includes(filter));

	const ProjectModal = ({ project, onClose }) => (
		<motion.div
			className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={onClose}>
			<motion.div
				className='bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto'
				initial={{ scale: 0.8, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				exit={{ scale: 0.8, opacity: 0 }}
				onClick={(e) => e.stopPropagation()}>
				{/* Modal Header */}
				<div className='relative'>
					<img src={project.image} alt={project.title} className='w-full h-64 object-contain rounded-t-2xl' />
					<button
						onClick={onClose}
						className='absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors'>
						<FiX size={20} />
					</button>
				</div>

				{/* Modal Content */}
				<div className='p-8'>
					<h3 className='text-3xl font-bold mb-4 text-gray-900 dark:text-white'>{project.title}</h3>

					<p className='text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed'>{project.description}</p>

					{/* Technologies */}
					<div className='mb-6'>
						<h4 className='text-lg font-semibold mb-3 text-gray-900 dark:text-white'>Technologies Used</h4>
						<div className='flex flex-wrap gap-2'>
							{project.technologies.map((tech) => (
								<span
									key={tech}
									className='px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium'>
									{tech}
								</span>
							))}
						</div>
					</div>

					{/* Links */}
					<div className='flex gap-4'>
						{project.liveUrl && (
							<a href={project.liveUrl} target='_blank' rel='noopener noreferrer' className='btn-primary flex items-center gap-2'>
								<FiExternalLink size={18} />
								Live Demo
							</a>
						)}
						{project.githubUrl && (
							<a href={project.githubUrl} target='_blank' rel='noopener noreferrer' className='btn-secondary flex items-center gap-2'>
								<FiGithub size={18} />
								View Code
							</a>
						)}
					</div>
				</div>
			</motion.div>
		</motion.div>
	);

	return (
		<section id='projects' className='section-padding bg-gray-50 dark:bg-gray-900'>
			<div className='container-custom' ref={ref}>
				<motion.div initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold mb-4'>
						<span className='text-gradient'>Featured Projects</span>
					</h2>
					<p className='text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>A showcase of my recent work and the technologies I love working with</p>
				</motion.div>

				{/* Filter Buttons */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.2 }}
					className='flex flex-wrap justify-center gap-4 mb-12'>
					<button
						onClick={() => setFilter('all')}
						className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
							filter === 'all'
								? 'bg-primary-600 text-white'
								: 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-700'
						}`}>
						All Projects
					</button>
					{allTechnologies.slice(0, 5).map((tech) => (
						<button
							key={tech}
							onClick={() => setFilter(tech)}
							className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
								filter === tech
									? 'bg-primary-600 text-white'
									: 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-700'
							}`}>
							{tech}
						</button>
					))}
				</motion.div>

				{/* Projects Grid */}
				<motion.div layout className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					<AnimatePresence>
						{filteredProjects.map((project, index) => (
							<motion.div
								key={project.id}
								layout
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, scale: 0.8 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className='project-card card overflow-hidden group cursor-pointer'
								onClick={() => setSelectedProject(project)}>
								{/* Project Image */}
								<div className='relative overflow-hidden'>
									<img src={project.image} alt={project.title} className='w-full h-48 object-contain group-hover:scale-110 transition-transform duration-500' />
									<div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

									{/* Featured Badge */}
									{project.featured && (
										<div className='absolute top-4 left-4 px-3 py-1 bg-accent-500 text-white text-sm font-medium rounded-full'>Featured</div>
									)}

									{/* Hover Overlay */}
									<div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
										<div className='flex gap-3'>
											{project.liveUrl && (
												<motion.a
													href={project.liveUrl}
													target='_blank'
													rel='noopener noreferrer'
													className='w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-900 hover:scale-110 transition-all duration-300'
													onClick={(e) => e.stopPropagation()}
													whileHover={{ scale: 1.1 }}
													whileTap={{ scale: 0.9 }}>
													<FiExternalLink size={18} />
												</motion.a>
											)}
											{project.githubUrl && (
												<motion.a
													href={project.githubUrl}
													target='_blank'
													rel='noopener noreferrer'
													className='w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-900 hover:scale-110 transition-all duration-300'
													onClick={(e) => e.stopPropagation()}
													whileHover={{ scale: 1.1 }}
													whileTap={{ scale: 0.9 }}>
													<FiGithub size={18} />
												</motion.a>
											)}
										</div>
									</div>
								</div>

								{/* Project Info */}
								<div className='p-6'>
									<h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors'>
										{project.title}
									</h3>

									<p className='text-gray-600 dark:text-gray-400 mb-4 line-clamp-3'>{project.description}</p>

									{/* Technologies */}
									<div className='flex flex-wrap gap-2'>
										{project.technologies.slice(0, 3).map((tech) => (
											<span
												key={tech}
												className='px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded text-sm font-medium'>
												{tech}
											</span>
										))}
										{project.technologies.length > 3 && (
											<span className='px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-sm font-medium'>
												+{project.technologies.length - 3} more
											</span>
										)}
									</div>
								</div>
							</motion.div>
						))}
					</AnimatePresence>
				</motion.div>

				{/* View All Projects Button */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.8 }}
					className='text-center mt-12'>
					<button className='btn-secondary'>View All Projects on GitHub</button>
				</motion.div>
			</div>

			{/* Project Modal */}
			<AnimatePresence>{selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}</AnimatePresence>
		</section>
	);
};

export default Projects;
