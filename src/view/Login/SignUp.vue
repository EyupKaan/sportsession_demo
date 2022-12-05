<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <h1>Sign Up!</h1>
    <div class="form-container">
  <form @submit.prevent="signUp">
    <label for="username">Username</label>
    <input name="username" v-model="user.username" type="text" placeholder="Username" required="required"/><br>

    <label for="password">Password</label>
    <input name="password" v-model="user.password" type="password" required="required"/><br>
    
    <label for="name">Name</label>
    <input name="name" v-model="user.name" type="text" placeholder="Name" required="required"/><br>
    
    <label for="surname">Surname</label>
    <input name="surname" v-model="user.surname" type="text" placeholder="Surname" required="required"/><br>
    <hr>
    
    <label for="role">Role</label>
    <select v-model="user.role">
      <option
      v-for="role in roles"
      :key="role"
      :value="role"
      :selected="role === user.role"
      >
      {{ role }}
      </option>
    </select>
    <br/>


    <button type="submit">Register</button>

  </form>
  </div>

  <div v-if="GStore.flashMessage">
    {{ GStore.flashMessage }}
  </div>
</template>

<script>
import { useUserStore } from "@/store/UserStore";

export default {
  inject: ['GStore'],
  setup() {
    const userStore = useUserStore();

    return {
      userStore,
    };
  },
  data() {
    return {
      roles: [
        'ADMIN',
        'COACH',
        'USER'
      ],
      user: {
        username: "",
        password: "",
        role: "",
        name: "",
        surname: "",
      },
    };
  },
  methods: {
    signUp() {
      const newUser = {
        userName: this.user.username,
        password: this.user.password,
        name: this.user.name,
        role: this.user.role,
        surname: this.user.surname,
      };
      console.log(newUser.userName + " " + newUser.surname);
      this.userStore.createUser(newUser).then(() => {
        this.$router.push({
          name: "UserDetails",
          params: { id: newUser.id },
        });
      }).catch(error => {
        console.log(error)
      });
      this.GStore.flashMessage = 'You are successfully registred '

      setTimeout(() => {
        this.GStore.flashMessage = ''
      }, 3000)
    },
  },
};
</script>

<style>
</style>