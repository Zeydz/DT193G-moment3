import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Info from '@/views/Info.vue'
import Tracks from '@/views/Tracks.vue'

// Route definitions
const routes = [
  { path: '/', name: 'Hem', component: Home },
  { path: '/info', name: 'Info', component: Info },
  { path: '/tracks', name: 'Låtar', component: Tracks }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
