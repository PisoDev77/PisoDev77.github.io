/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	// 현재 tailwind 버전으로는 class 3.41이후는 selector
	darkMode: 'class',
	theme: {
		colors: {
			lightFont: '#000000',
			lightBg: '#F0F0F0',
			darkFont: '#E0E0E0',
			darkBg: '#121212',
			bgTest1: 'red',
			bgTest2: 'blue',
		},
		screens: {
			sm: '480px',
			md: '768px',
		},
		fontFamily: {
			ibm: ['IBM', 'sans-serif'],
		},
		extend: {},
	},

	plugins: [],
};
