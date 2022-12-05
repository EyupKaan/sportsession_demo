<template>
  <div id="app">
    <nav class="navbar">
      <img src="./assets/sport-session-logo-navy.png" alt="logo" style="width: 20%;">
      <div class="nav a">
      <router-link v-if="userStore.currentUser.role == 'ADMIN'" :to="{ name: 'UserList'}">Users</router-link>
      <router-link to="/">Sessions</router-link> 
      <router-link to="signup">Sign Up!</router-link> 
      <router-link to="Login">Login!</router-link>
    </div>
    <div v-show="userStore.currentUser.userName">
      <b> Logged in as {{ userStore.currentUser.userName}}
        <button class="button-out" @click="userStore.logout">Logout</button>
      </b>
    </div>
  </nav>
  <router-view />
    
    </div>
</template>

<script>
import { useUserStore } from "./store/UserStore";
export default {
  setup() {
    const userStore = useUserStore();

    return {
      userStore,
    };
  },
  data() {
    return {
      accountState: false,
    };
  },
  methods: {
    logout() {
      this.userStore.logout();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

.navbar {
 display:flex;
 align-items: center;
 justify-content: space-between;
 padding: 20px;
 background-color: white;
 color: black;
}
.nav a {
  color: #2c3e50;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  padding: 14px;
  font-size: 17px;
  
}

.nav a:hover {
  background-color: rgb(230, 222, 222);
  color: black;
}

input {
  display: block;
  width: 90%;
  height: 30px;
  margin-bottom: 12px;
}

input[type="text"] {
  padding: 0px 10px;
}

.form-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5%;
}
.button-out {
  align-items: baseline;
  height: 30px;
  margin-bottom: 20px;
  padding: 0 20px;
  background: red;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
}
</style>
