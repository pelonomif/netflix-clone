import { createRouter, createWebHashHistory } from 'vue-router'
import SignIn from '../views/SignIn.vue'


const routes = [
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