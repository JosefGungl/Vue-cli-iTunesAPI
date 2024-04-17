import 'bootstrap/dist/js/bootstrap.js'
import '@/scss/app.scss'
//we use this instead of importing bootstrap.css

import { createApp } from 'vue'
import App from './App.vue'

//only add global stuff here like bootstrap, routers, quasar, vuetify, etc.

createApp(App).mount('#app')
