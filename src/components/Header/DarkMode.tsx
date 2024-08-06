import { useEffect, useState } from 'react';

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
			{theme}
		</button>
	);
}
