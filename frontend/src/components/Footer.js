import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaHeart } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';

const Footer = ({ data }) => {
	const currentYear = new Date().getFullYear();

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const quickLinks = [
		{ name: 'Home', href: '#home' },
		{ name: 'About', href: '#about' },
		{ name: 'Skills', href: '#skills' },
		{ name: 'Projects', href: '#projects' },
		{ name: 'Contact', href: '#contact' },
	];

	const socialLinks = data?.social
		? [
				{
					icon: FaGithub,
					href: data.social.github,
					label: 'GitHub',
					color: 'hover:text-gray-300',
				},
				{
					icon: FaTwitter,
					href: data.social.x,
					label: 'X',
					color: 'hover:text-blue-300',
				},
		  ]
		: [];

	return (
		<footer className='bg-gray-900 dark:bg-black text-white'>
			<div className='container-custom'>
				{/* Main Footer Content */}
				<div className='py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{/* Brand Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className='lg:col-span-2'>
						<div className='text-3xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-4'>Piso</div>
						<p className='text-gray-400 text-md mb-6 max-w-md'>
							궁극적인 목표는 사용자 중심의 직관적이고 편리한 웹 / 앱 서비스를 만드는 것입니다 . 이를 위해 사용자 경험을 계속 고민하고 개선해 나가겠습니다 .
							열정적이고 성실한 자세로 프론트 엔드 개발자로 성장해 나가겠습니다 .
						</p>

						{/* Social Links */}
						<div className='flex gap-4'>
							{socialLinks.map((social) => (
								<motion.a
									key={social.label}
									href={social.href}
									target='_blank'
									rel='noopener noreferrer'
									className={`w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`}
									whileHover={{ scale: 1.1, y: -2 }}
									whileTap={{ scale: 0.9 }}>
									<social.icon size={18} />
								</motion.a>
							))}
						</div>
					</motion.div>

					{/* Quick Links */}
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
						<h3 className='text-xl font-bold mb-6'>Quick Links</h3>
						<ul className='space-y-3'>
							{quickLinks.map((link) => (
								<li key={link.name}>
									<button
										onClick={() => {
											const element = document.querySelector(link.href);
											if (element) {
												element.scrollIntoView({ behavior: 'smooth' });
											}
										}}
										className='text-gray-400 hover:text-primary-400 transition-colors duration-300 block'>
										{link.name}
									</button>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Contact Info */}
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
						<h3 className='text-xl font-bold mb-6'>Get In Touch</h3>
						<div className='space-y-3'>
							{data?.email && (
								<a href={`mailto:${data.email}`} className='text-gray-400 hover:text-primary-400 transition-colors duration-300 block'>
									{data.email}
								</a>
							)}
							{data?.phone && (
								<a href={`tel:${data.phone}`} className='text-gray-400 hover:text-primary-400 transition-colors duration-300 block'>
									{data.phone}
								</a>
							)}
							{data?.location && <p className='text-gray-400'>{data.location}</p>}
						</div>
					</motion.div>
				</div>

				{/* Newsletter Section
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					viewport={{ once: true }}
					className='py-8 border-t border-gray-800'>
					<div className='text-center'>
						<h3 className='text-2xl font-bold mb-4'>Stay Updated</h3>
						<p className='text-gray-400 mb-6 max-w-md mx-auto'>Subscribe to get notified about new projects and blog posts</p>
						<div className='flex max-w-md mx-auto gap-2'>
							<input
								type='email'
								placeholder='Enter your email'
								className='flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500'
							/>
							<button className='px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors duration-300'>
								Subscribe
							</button>
						</div>
					</div>
				</motion.div> */}

				{/* Bottom Footer */}
				{false ?? (
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						viewport={{ once: true }}
						className='py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4'>
						<div className='flex items-center gap-2 text-gray-400'>
							<span>&copy; {currentYear} Alex Thompson. Made with</span>
							<FaHeart className='text-red-500 animate-pulse' size={16} />
							<span>and lots of coffee</span>
						</div>

						<div className='flex items-center gap-6 text-sm text-gray-400'>
							<button className='hover:text-primary-400 transition-colors'>Privacy Policy</button>
							<button className='hover:text-primary-400 transition-colors'>Terms of Service</button>
						</div>

						{/* Back to Top */}
						<motion.button
							onClick={scrollToTop}
							className='w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center text-white transition-colors duration-300'
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}>
							<FiArrowUp size={18} />
						</motion.button>
					</motion.div>
				)}
			</div>

			{/* Decorative Elements */}
			<div className='absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50' />
		</footer>
	);
};

export default Footer;
