/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        colors: {
            primary: colors.lime,
            secondary: colors.amber,
            netural: colors.sky,
        },
        extend: {},
        fontFamily: {
            ibm: ['IBM', 'sans-serif'],
        },
    },
    plugins: [],
};
