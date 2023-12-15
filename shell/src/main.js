// In your ShellVue component or style file
// import "remote/main"

import "./assets/main.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
