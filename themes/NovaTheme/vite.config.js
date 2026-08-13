import { defineConfig } from 'vite';
import liveReload from 'vite-plugin-live-reload';
import { resolve } from 'path';

export default defineConfig( {
	plugins: [
		// Перезагрузка страницы при изменении любого PHP-файла в теме
		liveReload( [
			resolve( __dirname, './**/*.php' )
		] )
	],

	// Настройка удобных путей (Алиасов)
	resolve: {
		alias: {
			'@': resolve( __dirname, 'src' )
		}
	},

	css: {
		devSourcemap: true,
	},

	// Настройки сервера разработки (Vite Dev Server)
	server: {
		origin: 'http://localhost:3000',
		cors: true,
		port: 3000,
		strictPort: true,
		host: true, // Позволяет принимать подключения снаружи (актуально для Docker)
		hmr: {
			host: 'localhost',
		},
		watch: {
			usePolling: true, // Гарантирует HMR внутри Docker / контейнеров
		}
	},

	// Настройки production-сборки (npm run build)
	build: {
		outDir: resolve( __dirname, 'assets' ),
		assetsDir: '',
		emptyOutDir: true,
		manifest: true,

		rollupOptions: {
			input: {
				// Если переименуете main.jsx в main.js — поменяйте и тут расширение на .js
				main: resolve( __dirname, 'src/js/main.js' )
			}
		}
	}
} );