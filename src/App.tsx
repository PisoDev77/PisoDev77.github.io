import Header from './components/Header';
import Heading1 from './components/Headings/Heading1';
import ImageCaption from './components/ImageCaption';

function App() {
	return (
		<main>
			<Header />
			<section className='grid grid-cols-1 sm:grid-cols-2'>
				<Heading1>About</Heading1>
				<ImageCaption name='communication' />
				<ImageCaption name='readability' />
				<ImageCaption name='user-friendly' />
				<ImageCaption name='intuition' />
			</section>
		</main>
	);
}

export default App;
