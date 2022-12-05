<template>
  <div v-if="session">
    <h2>{{ session.title }}</h2>
    <p>Coach: {{ session.user }}</p>
    <p>Sport: {{ session.sport }}</p>
    <p>{{ session.price }} £ per hour</p>
    <b>Location: {{ session.location }}</b>
    
  </div>
  <div v-show="userStore.currentUser.role == 'COACH'">
      <button  @click="deleteSession">Delete</button>
  </div>
</template>

<script>
import { useSessionStore } from '@/store/SessionStore'
import { useUserStore } from '@/store/UserStore'
import SessionService from '@/services/SessionService'

export default {
    props: ['id'],
    data() {
        return {
            detailSport: SessionService.getSport()
        }
    },
    setup() {
        const sessionStore = useSessionStore()
        const userStore = useUserStore()

        return {
            sessionStore, userStore
        }
    },
    created() {
        this.sessionStore.fetchSession(this.id)
    }, 
    methods: {
        deleteSession() {
            SessionService.deleteSession(this.id).then(() => {
                this.$router.push('/')
            })
        }
    },
    computed: {
        session() {
            return this.sessionStore.session
        }
    }

}
</script>

<style>

</style>