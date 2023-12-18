import ButtonComponentVue from '@/components/ButtonComponent.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: "/", component: ButtonComponentVue}
    
  ]
})

export default router
