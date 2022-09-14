import { createRouter, createWebHashHistory } from 'vue-router'
import Navbar from '../views/Navbar.vue'
import SignIn from '../views/SignIn.vue'


const routes = [
  {
    path: '/navbar',
    name: 'navbar',
    component: Navbar
  },

  {
    path: '/signIn',
    name: 'signIn',
    component: SignIn
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
