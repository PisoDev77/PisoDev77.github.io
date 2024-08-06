import { ReactElement, useState } from 'react';

import Header from './components/Header/Header.tsx';
import Heading1 from './components/Headings/Heading1';
import ImageCaption from './components/ImageCaption';
import ExperienceSection from './components/Sections/ExperienceSection';
import ProjectSection from './components/Sections/ProjectSection';
import BlogSection from './components/Sections/BlogSection';
import Modal from './components/Modal/Modal';

import { experiences } from './mock/experience';
import { projects } from './mock/project';
import { blogs } from './mock/blogs.ts';

function App() {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [currentModalContent, setCurrentModalContent] = useState<ReactElement>(<h1>Error</h1>);

	const openModalWithContent = (element: ReactElement) => {
		setIsModalOpen(true);
		setCurrentModalContent(element);
	};

	return (
		<main>
			{isModalOpen ? <Modal currentModalContent={currentModalContent} setIsModalOpen={setIsModalOpen} /> : ''}
			<Header />
			<article className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-8 py-2'>
				<Heading1 isBox={true}>Attitude</Heading1>
				<ImageCaption name='communication' openModalWithContent={openModalWithContent} />
				<ImageCaption name='readability' openModalWithContent={openModalWithContent} />
				<ImageCaption name='user-friendly' openModalWithContent={openModalWithContent} />
				<ImageCaption name='intuition' openModalWithContent={openModalWithContent} />
			</article>
			<article className='px-8 py-2'>
				<Heading1 isBox={true}>Experience</Heading1>
				{experiences.map((experience, idx) => (
					<ExperienceSection
						key={'experience' + idx}
						experiences={experience}
						openModalWithContent={openModalWithContent}
					/>
				))}
			</article>
			<article className='px-8 py-2'>
				<Heading1 isBox={true}>Projects</Heading1>
				{projects.map((project, idx) => (
					<ProjectSection key={'project' + idx} {...project} />
				))}
			</article>
			<article className='px-8 py-2'>
				<Heading1 isBox={true}>Blog</Heading1>
				<BlogSection blogs={blogs} openModalWithContent={openModalWithContent} />
			</article>
			<footer className='flex flex-col p-6 border-4'>
				<b>Contact</b>
				<a href='mailto:pisodev0427@gmail.com'>pisodev0427@gmail.com</a>
			</footer>
		</main>
	);
}

export default App;
