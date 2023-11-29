/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        colors: {
            primary: '#FEFFDE',
            secondary: '#52734D',
            netural: colors.sky,
        },
        extend: {},
        fontFamily: {
            ibm: ['IBM', 'sans-serif'],
        },
    },
    plugins: [],
};
