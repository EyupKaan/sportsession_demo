import { createApp, reactive } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import router from './router'
import storeUser from "@/store/UserStore"
import storeSession from "@/store/SessionStore"

const GStore = reactive({flashMessage: ''}) 

createApp(App).use(storeSession, storeUser).provide('GStore', GStore).use(createPinia()).use(router).mount('#app')
