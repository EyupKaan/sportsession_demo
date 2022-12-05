<template>
  <div v-if="user">
    <h1>{{ user.name }}  {{ user.surname }}</h1>
    <p><b>Username: </b> {{ user.userName }} | <b>Password: </b>  {{ user.password }}</p>
    <P>Role({{ user.role }})</P>
  </div>
  <button @click="deleteUser">Delete</button>
</template>

<script>
import { useUserStore } from '@/store/UserStore'
import UserService from '@/services/UserService'
export default {
    props: ['id'],
    setup() {
        const userStore = useUserStore()

        return {
            userStore
        }
    },
    created() {
        this.userStore.fetchUser(this.id)
    },
    computed: {
        user() {
            return this.userStore.user
        }
    },
    methods: {
        deleteUser() {
            UserService.deleteUser(this.id).then(() => {
                this.$router.push('/user')
            })
        }
    }

}
</script>

<style>

</style>