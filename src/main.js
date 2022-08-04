import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomeViewVue from './views/HomeView.vue'
import LoginViewVue from './views/LoginView.vue'
import RegisterViewVue from './views/RegisterView.vue'

const routes = [{
        path: "/",
        name: "Home",
        component: HomeViewVue
    },
    {
        path: "/login",
        name: "Login",
        component: LoginViewVue
    },
    {
        path: "/register",
        name: "Register",
        component: RegisterViewVue
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () =>
            import ('@/views/NotFound.vue')
    },


];
const router = createRouter({
    history: createWebHistory(),
    routes,
})
router.beforeEach((to, from, next) => {
    //to and from are Route Object,next() must be called to resolve the hook}
    next()
    return false
})

createApp(App)

.use(router)
    .mount('#app')