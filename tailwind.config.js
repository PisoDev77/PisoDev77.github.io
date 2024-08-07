/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	// 현재 tailwind 버전으로는 class 3.41이후는 selector
	darkMode: 'class',
	theme: {
		colors: {
			lightFont: '#213547',
			lightBg: '#fbfff4',
			darkFont: '#f8f7f4',
			darkBg: '#352f36',
			spaceFrom: '#F0F0F0',
			spaceVia: '#00FFFF',
			spaceTo: '#EEEEE',
		},
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1280px',
		},
		fontFamily: {
			ibm: ['IBM', 'sans-serif'],
		},
		boxShadow: {
			neumorphismLight: '8px 8px 16px #d9e2ce, -8px -8px 16px #ffffff',
			neumorphismDark: '8px 8px 16px #2b272d, -8px -8px 16px #3f3945',
		},
		extend: {},
	},

	plugins: [],
};
