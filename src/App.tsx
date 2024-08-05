import { ReactElement, useState } from 'react';

import Header from './components/Header';
import Heading1 from './components/Headings/Heading1';
import ImageCaption from './components/ImageCaption';
import Menus from './components/Menus';
import ExperienceSection from './components/ExperienceSection';
import Modal from './components/Modal/Modal';

import { experiences } from './mock/experience';

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [currentModalContent, setCurrentModalContent] = useState<ReactElement>(<h1>Error</h1>);

	const openModalWithContent = (element: ReactElement) => {
		setIsModalOpen(true);
		setCurrentModalContent(element);
	};

	return (
		<main className='bg-gradient-to-b dark:from-darkBg dark:to-darkFont"'>
			{isModalOpen ? <Modal currentModalContent={currentModalContent} setIsModalOpen={setIsModalOpen} /> : ''}
			<Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
			<Menus isMenuOpen={isMenuOpen} />
			<article className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
				<Heading1>About</Heading1>
				<ImageCaption name='communication' openModalWithContent={openModalWithContent} />
				<ImageCaption name='readability' openModalWithContent={openModalWithContent} />
				<ImageCaption name='user-friendly' openModalWithContent={openModalWithContent} />
				<ImageCaption name='intuition' openModalWithContent={openModalWithContent} />
			</article>
			<article className='px-8 py-2'>
				<Heading1>Experience</Heading1>
				{experiences.map((experience) => (
					<ExperienceSection experiences={experience} openModalWithContent={openModalWithContent} />
				))}
			</article>
			<article>
				<Heading1>Projects</Heading1>
			</article>
			<article>
				<Heading1>Blog</Heading1>
			</article>
			<footer>Contact</footer>
		</main>
	);
}

export default App;
