/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// 创建 Vue 实例
const app = createApp(App)

registerPlugins(app)

// 将 Vue 实例挂载到 DOM 上的 #app 元素上
app.mount('#app')
