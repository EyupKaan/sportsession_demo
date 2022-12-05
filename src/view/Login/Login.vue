<!-- eslint-disable vue/multi-word-component-names -->
<template>
  
  <h1>Login</h1>
  <div class="form-container">
  <form @submit.prevent="loginUser">
    <label for="username">Username</label>
    <input name="username" v-model="user.username" type="text" placeholder="Username" required="required"/><br>

    <label for="password">Password</label>
    <input name="password" v-model="user.password" type="password" required="required"/><br>

    <button class="button" type="submit">Login</button>
  </form>
</div>
<div v-if="GStore.flashMessage">
  {{ GStore.flashMessage }}
</div>
</template>

<script>
import { useUserStore } from "@/store/UserStore";

export default {
  inject: ["GStore"],
  setup() {
    const userStore = useUserStore();

    return {
      userStore,
    };
  },
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    loginUser() {
      const userObjectt = {
        userName: this.user.username,
        password: this.user.password,
      };
      this.userStore
        .loginUser(userObjectt)
        .then(() => {
          this.$router.push("/");
        })
        .catch(error => {
          if(error.code == 'ERR_BAD_REQUEST'){
            this.GStore.flashMessage = 'User not found!'
          }
        });
    },
  },
};
</script>

<style>

.button {
  align-items: center;
  height: 50px;
  padding: 0 40px;
  background: green;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s linear;
}
</style>