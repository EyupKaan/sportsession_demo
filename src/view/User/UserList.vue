<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/no-unused-components -->
<template>
    <h1>{{ userStore.numberOfUsers }} Users</h1>
  <div class="users">
    <td>
        <tr>
            <User 
            v-for="user in userStore.users"
            :key="user"
            :user="user"
            />
        </tr>
    </td>
    
  </div>
</template>

<script>
import { useUserStore } from "@/store/UserStore";
import User from "@/components/User.vue";

export default {
  components: {
    User,
  },
  setup() {
    const userStore = useUserStore();

    return {
      userStore,
    };
  },
  created() {
    this.userStore.fetchUsers().catch((error) => {
      this.$router.push({
        name: "ErrorDisplay",
        params: { error: error },
      });
    });
  },
};
</script>

<style>
.users {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>