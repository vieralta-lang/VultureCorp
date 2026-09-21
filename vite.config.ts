import legacy from '@vitejs/plugin-legacy'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    legacy({
      targets: ['ios >= 12', 'defaults', 'not dead'],
      // Garante injeção automática de polyfills essenciais do core-js
      polyfills: true,
      modernPolyfills: true,
    }),
  ],
  build: {
    // Desabilita modulePreload polêmico no Safari/WebKit que causa race conditions no carregamento frio
    modulePreload: false,
  },
})
