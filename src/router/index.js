import SessionListVue from "@/view/Session/SessionList.vue";
import UserListVue from "@/view/User/UserList.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import UserDetailsVue from "@/view/User/UserDetails.vue";
import SignUpVue from "@/view/Login/SignUp.vue";
import LoginVue from "@/view/Login/Login.vue";
import SessionDetailsVue from "@/view/Session/SessionDetails.vue";
import SessionCreateVue from "@/view/Session/SessionCreate.vue";

// eslint-disable-next-line no-unused-vars

const routes = [
    {
        path: '/user',
        name: 'UserList',
        component: UserListVue,
        meta: {}
    },
    {
        path: '/',
        name: 'SessionList',
        component: SessionListVue
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUpVue
    },
    {
        path: '/user/:id',
        name: 'UserDetails',
        props: true,
        component: UserDetailsVue
    },
    {
        
        path: '/login',
        name: 'Login',
        props: true,
        component: LoginVue
    },
    {
        path: '/session/:id',
        name: 'SessionDetails',
        props: true,
        component: SessionDetailsVue
    },
    {
        path: '/session-create',
        name: 'SessionCreate',
        component: SessionCreateVue
    }

]
const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})


export default router