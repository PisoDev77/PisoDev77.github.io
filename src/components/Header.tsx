import { useEffect, useState } from 'react';

import darkModeImg from '../../public/images/darkmode.svg';
import lightModeImg from '../../public/images/lightmode.svg';

export default function Header() {
	const [isDarkmode, setIsDarkmode] = useState(false);

	useEffect(() => {
		const storedDarkmode = JSON.parse(localStorage.getItem('dark') ?? 'false');
		setIsDarkmode(storedDarkmode);
		const htmlElement = document.querySelector('html');
		if (htmlElement) {
			htmlElement.classList.toggle('dark', storedDarkmode);
		}
	}, []);

	const handleDarkmode = () => {
		localStorage.setItem('dark', JSON.stringify(!isDarkmode));
		setIsDarkmode(!isDarkmode);
		const htmlElement = document.querySelector('html');
		if (htmlElement) {
			htmlElement.classList.toggle('dark', !isDarkmode);
		}
	};

	return (
		<header className='p-4'>
			<button onClick={handleDarkmode}>
				<img className='sm:h-6' src={isDarkmode ? darkModeImg : lightModeImg} alt='' />
			</button>
		</header>
	);
}
