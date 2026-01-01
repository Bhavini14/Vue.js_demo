import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
import Dashboard from '@/components/Dashboard.vue'
import Login from '@/components/Login.vue'
import Registration from '@/components/Registration.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/dashboard' },
  {
    path: '/Registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
   {
    path: '/Login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
