<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <router-link
  class="user-link"
  :to="{ name : 'UserDetails', params: { id: user.id} }"
  >
  <div class="user-card">
    <span>{{ user.name }} {{ user.surname }}</span>
  </div>
</router-link>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.user-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 6px;
  background-color: cadetblue;
}
.user-card:hover {
  transform: scale(1.1);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.user-link {
  color: #2c3e50;
  text-decoration: none;
}


</style>