import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/',
	// optimizeDeps: {
	//     exclude: ['js-big-decimal'],
	// },
	server: {
		proxy: {
			'/testNotion': 'https://api.notion.com/v1/databases/e543782682fe480db5f4ffe78a11148e/query',
			changeOrigin: true,
		},
	},
});
