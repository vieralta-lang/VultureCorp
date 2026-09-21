import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

function mountApp() {
  const mountTarget = document.getElementById('app')
  if (mountTarget) {
    app.mount(mountTarget)
  } else {
    window.addEventListener('DOMContentLoaded', () => {
      const retryTarget = document.getElementById('app')
      if (retryTarget) {
        app.mount(retryTarget)
      } else {
        console.error('Target #app element not found even after DOMContentLoaded')
      }
    })
  }
}

mountApp()
