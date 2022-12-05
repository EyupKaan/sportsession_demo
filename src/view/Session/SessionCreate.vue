<template>
  <div id="session" v-if="userStore.currentUser.role == 'COACH'">
    <form @submit.prevent="saveSession">
        <label for="title"> Title </label>
        <input type="text" v-model="session.title" name="title" placeholder="Title...">
        
        <label for="location"> Location </label>
        <input type="text" v-model="session.location" name="location" placeholder="Location">
        
        <label for="price"> £ per hour </label>
        <input type="number" name="price">
        
        <label for="sport"> Sport </label>
        <select v-model="session.sport">
            <option 
            v-for="sport in sessionStore.sports"
            :value="sport"
            :key="sport"
            :selected="sport === sessionStore.sport"
            >
            {{ sport.name }}
            </option>
        </select><br>

        <button type="submit">Save</button>
    </form>
  </div>
  <div v-if="userStore.currentUser.role != 'COACH'">
    <p>Only Coaches able to create session!</p>
  </div>
</template>

<script>
import { useSessionStore } from "@/store/SessionStore";
import { useUserStore } from "@/store/UserStore";
export default {
  data() {
    return {
      session: {
        title: "",
        location: "",
        price: 0,
        sport: null,
        user: null,
      },
    };
  },
  setup() {
    const sessionStore = useSessionStore();
    const userStore = useUserStore();

    return {
      sessionStore,
      userStore,
    };
  },
  created() {
    this.sessionStore.fetchSports();
  },
  methods: {
    saveSession() {
      const newSession = {
        title: this.session.title,
        location: this.session.location,
        price: this.session.price,
        sport: this.session.sport,
        user: this.userStore.currentUser,
      };

      console.log('user = ' + newSession.user.userName)
      console.log('sport = ' + newSession.sport)

      this.sessionStore.createSession(newSession).then(() => {
        this.$router.push('/session');
      });
    },
  },
};
</script>

<style>
#session {
  padding: 20px;
  width: 350px;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  margin-top: 18px;
}
</style>