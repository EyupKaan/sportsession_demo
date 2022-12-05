<template>
  <h1>{{ sessionStore.numberOfSessions }} Sessions
    <button class="button-create" v-show="userStore.currentUser.role == 'COACH'" @click="goCreate">Create</button>
  </h1>
  <div>
    <div class="wrapper">
      <Session
      class="box"
      v-for="session in sessionStore.sessions"
      :key="session"
      :session="session"
      />
    </div>
  </div>
</template>

<script>
import { useSessionStore } from "@/store/SessionStore";
import Session from "@/components/Session.vue";
import { useUserStore } from "@/store/UserStore";
export default {
  components: { Session },
  setup() {
    const sessionStore = useSessionStore();
    const userStore = useUserStore();

    return {
      sessionStore,
      userStore,
    };
  },
  created() {
    this.sessionStore.fetchSessions();
  },
  methods: {
    goCreate() {
      this.$router.push("/session-create");
    },
  },
};
</script>

<style scoped>
/*
.sessions {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#session-link {
  color: #2c3e50;
  text-decoration: none;

}*/

body {
  margin: 40px;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  background-color: #fff;
}

.box {
  background-color: gray;
  color: rgba(22, 22, 22, 0.374);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  border-radius: 5px;
  padding: 20px;
  font-size: 18px;
  height: 320px;
  max-width: 320px;
}

.button-create {
  border-radius: 6px;
  font-size: 12px;
  font-weight: 200;
  cursor: pointer;
  background-color: navy;
  color: #fff;
  height: 30px;
}
</style>