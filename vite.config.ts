import ReactPlugin from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import { VitePWA as PWAPlugin } from 'vite-plugin-pwa';
import TSConfig from 'vite-tsconfig-paths';

const getAbsolutePath = (pathName: string): string => path.resolve(__dirname, pathName);

export default defineConfig({
	logLevel: 'info',
	build: {
		sourcemap: true,
	},
	plugins: [
		PWAPlugin({
			registerType: 'autoUpdate',
			injectRegister: 'auto',
			workbox: {
				globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
				cleanupOutdatedCaches: true,
			},
		}),
		ReactPlugin(),
		TSConfig({ projects: [getAbsolutePath('tsconfig.json')] }),
	],
	resolve: {
		alias: {
			'@assets': getAbsolutePath('./src/assets/'),
			'@components': getAbsolutePath('./src/components/'),
			'@context': getAbsolutePath('./src/context/'),
			'@data': getAbsolutePath('./src/data/'),
			'@hooks': getAbsolutePath('./src/hooks/'),
			'@pages': getAbsolutePath('./src/pages/'),
			'@styles': getAbsolutePath('./src/styles/'),
			'@typescript': getAbsolutePath('./src/typescript/'),
			'@utils': getAbsolutePath('./src/utils/'),
		},
	},
	server: { open: true },
});
