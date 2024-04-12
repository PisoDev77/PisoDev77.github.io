import { useState } from 'react';

import Header from './components/Header';
import Heading1 from './components/Headings/Heading1';
import ImageCaption from './components/ImageCaption';
import Menus from './components/Menus';

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);

	return (
		<main className=''>
			<Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
			<Menus isMenuOpen={isMenuOpen} />
			<section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
				<Heading1>About</Heading1>
				<ImageCaption name='communication' />
				<ImageCaption name='readability' />
				<ImageCaption name='user-friendly' />
				<ImageCaption name='intuition' />
			</section>
			<section>
				<Heading1>Experience</Heading1>
			</section>
			<section>
				<Heading1>Projects</Heading1>
			</section>
			<section>
				<Heading1>Blog</Heading1>
			</section>
			<footer>Contact</footer>
		</main>
	);
}

export default App;
