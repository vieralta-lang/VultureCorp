import legacy from '@vitejs/plugin-legacy'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig, type Plugin } from 'vite'

function inlineCssPlugin(): Plugin {
  return {
    name: 'inline-css-plugin',
    enforce: 'post',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        if (!ctx.bundle) return html

        let transformedHtml = html
        for (const [fileName, asset] of Object.entries(ctx.bundle)) {
          if (fileName.endsWith('.css') && asset.type === 'asset') {
            const cssContent = typeof asset.source === 'string'
              ? asset.source
              : Buffer.from(asset.source).toString('utf-8')

            // Substitui o <link rel="stylesheet" crossorigin href="/assets/..."> pelo <style> inline
            const linkRegex = new RegExp(`<link[^>]*?href="[^"]*?${fileName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*?>`, 'i')
            if (linkRegex.test(transformedHtml)) {
              transformedHtml = transformedHtml.replace(linkRegex, `<style>${cssContent}</style>`)
            } else {
              transformedHtml = transformedHtml.replace('</head>', `<style>${cssContent}</style></head>`)
            }
          }
        }
        return transformedHtml
      },
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    legacy({
      targets: ['ios >= 12', 'defaults', 'not dead'],
      // Garante injeção automática de polyfills essenciais do core-js no bundle legacy
      polyfills: true,
      modernPolyfills: false,
    }),
    inlineCssPlugin(),
  ],
  build: {
    // Desabilita modulePreload polêmico no Safari/WebKit que causa race conditions no carregamento frio
    modulePreload: false,
  },
})
