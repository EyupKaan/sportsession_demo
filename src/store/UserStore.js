import UserService from "@/services/UserService";
import { defineStore } from "pinia";
import router from "@/router";
export const useUserStore = defineStore('UserStore', {
    state: () => ({
        users: [],
        user: {},
        currentUser: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : '',
    }),
    getters: {
        numberOfUsers: state => state.users.length,
    },
    actions: {
        fetchUsers() {
            return UserService.getUsers()
                .then(response => {
                    console.log(response.data)
                    this.users = response.data
                })
                .catch(error => {
                    throw error
                })
        },
        fetchUser(id) {
            return UserService.getUser(id)
                .then(response => {
                    this.user = response.data
                })
        },
        createUser(user) {
            return UserService.postUser(user)
                .then(() => {
                    this.user = user
                })
        },
        loginUser(userObject) {
            return UserService.loginUser(userObject)
                .then(
                    response => {
                        const user = response.data
                        this.currentUser = user
                        localStorage.setItem('user', JSON.stringify(user))

                        console.log(this.currentUser)
                    })
        },
        isLoggedin() {
            if (this.currentUser != null) {
                return true
            }

            return false


        },
        logout() {
            if (this.currentUser != null) {
                    this.currentUser = ''
                    localStorage.removeItem('user')
                router.push('/')
            }
            return this.currentUser = ''
        }
    }

})