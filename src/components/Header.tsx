import { useEffect, useState, Dispatch, SetStateAction } from 'react';

import darkModeImg from '../../public/images/darkmode.svg';
import lightModeImg from '../../public/images/lightmode.svg';
import { MenuOpenIcon, MenuCloseIcon } from '../components/Svg';

type HeaderProps = {
	isMenuOpen: boolean;
	setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
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
		<header className='p-4 grid grid-cols-2 md:grid-cols-1'>
			<button onClick={handleDarkmode}>
				<img className='sm:h-6' src={isDarkmode ? darkModeImg : lightModeImg} alt='' />
			</button>
			<button className='justify-self-end md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
				{isMenuOpen ? MenuOpenIcon : MenuCloseIcon}
			</button>
		</header>
	);
}
