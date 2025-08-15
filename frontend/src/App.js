import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
// import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';
import ThemeProvider from './context/ThemeContext';
import './App.css';

function App() {
	const [loading, setLoading] = useState(true);
	const [portfolioData, setPortfolioData] = useState(null);

	useEffect(() => {
		const loadPortfolio = async () => {
			try {
				// Load static JSON data from public folder
				const response = await fetch('/data/portfolio.json', { cache: 'no-store' });
				const data = await response.json();
				setPortfolioData(data);

				// Minimum loading time for smooth UX
				setTimeout(() => {
					setLoading(false);
				}, 1200);
			} catch (error) {
				console.error('Error loading portfolio data:', error);
				setTimeout(() => {
					setLoading(false);
				}, 800);
			}
		};

		loadPortfolio();
	}, []);

	if (loading) {
		return <LoadingScreen />;
	}

	return (
		<ThemeProvider>
			<div className='App'>
				<AnimatePresence mode='wait'>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
						className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white dark-transition'>
						<Navbar />
						<main>
							<Hero data={portfolioData?.hero} />
							<About data={portfolioData?.about} />
							{/* <Skills data={portfolioData?.skills} /> */}
							<Projects data={portfolioData?.projects} />
							<Contact data={portfolioData?.contact} />
						</main>
						<Footer data={portfolioData?.contact} />
						<ScrollToTop />
					</motion.div>
				</AnimatePresence>
			</div>
		</ThemeProvider>
	);
}

export default App;
