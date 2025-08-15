import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const { theme, toggleTheme } = useTheme();

	const menuItems = [
		{ name: 'Home', href: '#home' },
		{ name: 'About', href: '#about' },
		// { name: 'Skills', href: '#skills' },
		{ name: 'Projects', href: '#projects' },
		{ name: 'Contact', href: '#contact' },
	];

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 20;
			setScrolled(isScrolled);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleMenuClick = (href) => {
		setIsMenuOpen(false);
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<motion.nav
			className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}>
			<div className='container-custom section-padding py-4'>
				<div className='flex justify-between items-center'>
					{/* Logo */}
					<motion.div
						className='text-2xl font-bold text-gradient cursor-pointer'
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={() => handleMenuClick('#home')}>
						Piso's Portfolio
					</motion.div>

					{/* Desktop Menu */}
					<div className='hidden md:flex items-center space-x-8'>
						{menuItems.map((item, index) => (
							<motion.button
								key={item.name}
								onClick={() => handleMenuClick(item.href)}
								className='btn-ghost text-sm font-medium relative group'
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ y: -2 }}>
								{item.name}
								<span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-300' />
							</motion.button>
						))}

						{/* Theme Toggle */}
						<motion.button
							onClick={toggleTheme}
							className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}>
							{theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
						</motion.button>
					</div>

					{/* Mobile Menu Button */}
					<div className='md:hidden flex items-center space-x-4'>
						{/* Theme Toggle Mobile */}
						<motion.button
							onClick={toggleTheme}
							className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}>
							{theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
						</motion.button>

						<motion.button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}>
							{isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
						</motion.button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<motion.div
						className='md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-xl rounded-b-2xl border-t border-gray-200 dark:border-gray-700'
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.2 }}>
						<div className='px-4 py-6 space-y-4'>
							{menuItems.map((item, index) => (
								<motion.button
									key={item.name}
									onClick={() => handleMenuClick(item.href)}
									className='block w-full text-left px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: index * 0.05 }}>
									{item.name}
								</motion.button>
							))}
						</div>
					</motion.div>
				)}
			</div>
		</motion.nav>
	);
};

export default Navbar;
