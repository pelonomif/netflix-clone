import Home from './components/Home.vue'
import SignIn from './components/SignIn.vue'
import Headers from './components/Headers.vue'
import {createRouter, createWebHashHistory} from 'vue-router'

const routes= [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/signIn',
        name: 'SignIn',
        component: SignIn,
    },
    {
        path: '/headers',
        name: 'Headers',
        component: Headers,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;