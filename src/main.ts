import App from './App.vue'
import { createApp } from 'vue'

import '@/styles/common.css'
import '@varlet/touch-emulator'
import 'virtual:uno.css'

const app = createApp(App)

app.mount('#app')
