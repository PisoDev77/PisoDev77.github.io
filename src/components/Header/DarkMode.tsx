import { useEffect, useState } from 'react';

import darkModeImg from '../../../public/images/darkmode.svg';
import lightModeImg from '../../../public/images/lightmode.svg';

export default function DarkMode() {
	const [theme, setTheme] = useState('');
	useEffect(() => {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			setTheme('dark');
		} else {
			document.documentElement.classList.remove('dark');
			setTheme('light');
		}
	}, []);

	return (
		<button
			onClick={() => {
				if (theme === 'dark') {
					document.documentElement.classList.remove('dark');
					setTheme('light');
				} else {
					document.documentElement.classList.add('dark');
					setTheme('dark');
				}
			}}
		>
			<img className='sm:h-6' src={theme === 'dark' ? darkModeImg : lightModeImg} alt='' />
		</button>
	);
}
