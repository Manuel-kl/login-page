import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomePageView from './views/HomeView.vue'
import LoginViewVue from './views/LoginView.vue'
import RegisterViewVue from './views/RegisterView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: "/",
            name: "Home",
            component: HomePageView
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

    ]
})
createApp(App)
    .use(router)
    .mount('#app')