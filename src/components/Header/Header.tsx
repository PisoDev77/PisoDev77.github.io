import { useEffect, useState, RefObject } from 'react';

import { MenuOpenIcon, MenuCloseIcon } from '../../components/Svg';
import Menus from './Menus';
import DarkMode from './DarkMode';

type refsTypes = {
	attitudeRef: RefObject<HTMLInputElement>;
	experienceRef: RefObject<HTMLInputElement>;
	projectRef: RefObject<HTMLInputElement>;
	blogRef: RefObject<HTMLInputElement>;
};

export default function Header(props: refsTypes) {
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
			className={`sticky top-0 dark:bg-darkBg  bg-lightBg p-4 shadow-neumorphismLight dark:shadow-neumorphismDark flex gap-4 ${
				isMenuOpen ? 'justify-between' : 'justify-end'
			}`}
		>
			{isMenuOpen ? <Menus {...props} /> : ''}
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
