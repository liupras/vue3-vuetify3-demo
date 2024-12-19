/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
// 初始化 Vuetify 组件库，这样可以在整个应用中使用 Vuetify 提供的 UI 组件。
export default createVuetify({
  theme: {
    defaultTheme: 'light',
  },
})
