import Button from '@/components/Button.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: "/", component: Button}
    
  ]
})

export default router
