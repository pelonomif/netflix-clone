import Home from './components/Home.vue'
import SignIn from './components/SignIn.vue'
import Headers from './components/Headers.vue'
import Movies from './components/Movies.vue'
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
    },
    {
        path: '/movies',
        name: 'Movies',
        component: Movies,
    },
    {
        path: '/movies/:id ',
        name: 'Movies',
        component: Movies,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;