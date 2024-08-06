import { useEffect, useState, Dispatch, SetStateAction } from 'react';

import { MenuOpenIcon, MenuCloseIcon } from '../../components/Svg';
import Menus from './Menus';
import DarkMode from './DarkMode';

export default function Header() {
	const [isMobile, setIsMobile] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setIsMobile(true);
				setIsMenuOpen(false);
			} else {
				setIsMobile(false);
				setIsMenuOpen(true);
			}
		};

		window.addEventListener('resize', handleResize);

		// 초기 사이즈 체크
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<header
			className={`p-4 shadow-neumorphismLight dark:shadow-neumorphismDark flex ${
				isMenuOpen ? 'justify-between' : 'justify-end'
			}`}
		>
			{isMenuOpen ? <Menus /> : ''}
			{isMobile ? (
				<button className={'justify-self-end'} onClick={() => setIsMenuOpen(!isMenuOpen)}>
					{isMenuOpen ? MenuCloseIcon : MenuOpenIcon}
				</button>
			) : (
				''
			)}
			<DarkMode />
		</header>
	);
}
