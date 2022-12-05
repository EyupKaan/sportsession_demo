<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <router-link :to="{ name: 'SessionDetails', params: {id: session.id}}">
    <div class="session-card">
      
      <div v-if="session.imgUrl">
        <img v-bind:src="session.imgUrl" style="width: 100%; height: 180px;">
      </div>
      <h4 style="text-align:center; font-family: 'Lucida Sans'; margin: auto;">
        {{ session.title }}</h4>
        <hr>
      <i class="fa fa-map-marker">{{ session.location }}</i>
      <br><br>
      <i class='fas fa-tags'>{{ session.price }}£ per hour </i>
        
    </div>
  </router-link>  
</template>

<script>
export default {
  props: {
    session: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
  
.session-card {
  padding: 10px;
  max-width: 300px;
  height: 300px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 3px;
  background-color: antiquewhite;
  border-radius: 5px;
  text-align: left;
}

.session-card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  scale: 1.02;
}

</style>