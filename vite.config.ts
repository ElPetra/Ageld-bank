import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            src: '/src'
        }
    },
    build: {
        outDir: 'dist'
    }
    // server: { host: true } // раскоментировать, чтобы раздавать по локальной сети приложение
});
