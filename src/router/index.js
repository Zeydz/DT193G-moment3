import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Tracks from '@/views/Tracks.vue'

// Route definitions
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/tracks', component: Tracks }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
})

export default router
