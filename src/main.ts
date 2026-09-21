import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

function getTimestamp() {
  const d = new Date()
  return `[${d.toTimeString().split(' ')[0]}.${String(d.getMilliseconds()).padStart(3, '0')}]`
}

console.log(`${getTimestamp()} [Etapa 3.1 - main.ts]: Script principal main.ts executando.`)

const app = createApp(App)
console.log(`${getTimestamp()} [Etapa 3.2 - main.ts]: Instância do Vue App criada de forma síncrona.`)

function mountApp() {
  const mountTarget = document.getElementById('app')
  console.log(`${getTimestamp()} [Etapa 3.3 - main.ts]: Tentando montar o Vue App. querySelector do #app resultou em:`, mountTarget ? "Sucesso (Elemento encontrado)" : "Falha (Elemento nulo)")
  
  if (mountTarget) {
    const mountedInstance = app.mount(mountTarget)
    console.log(`${getTimestamp()} [Etapa 3.4 - main.ts]: app.mount() executado diretamente.`, mountedInstance ? "Sucesso: Instância ativa!" : "Falha: Sem instância retornada.")
  } else {
    console.warn(`${getTimestamp()} [Etapa 3.5 - main.ts]: #app não encontrado no primeiro ciclo. Agendando retry no DOMContentLoaded...`)
    window.addEventListener('DOMContentLoaded', () => {
      const retryTarget = document.getElementById('app')
      console.log(`${getTimestamp()} [Etapa 3.6 - main.ts/DOMContentLoaded]: Executando retry do querySelector do #app. Resultado:`, retryTarget ? "Sucesso" : "Falha")
      if (retryTarget) {
        const mountedInstance = app.mount(retryTarget)
        console.log(`${getTimestamp()} [Etapa 3.7 - main.ts/DOMContentLoaded]: app.mount() executado no retry.`, mountedInstance ? "Sucesso: Instância ativa!" : "Falha")
      } else {
        console.error(`${getTimestamp()} [Etapa 3.8 - Erro Crítico]: O elemento target #app não pôde ser encontrado mesmo após DOMContentLoaded!`)
      }
    })
  }
}

mountApp()
