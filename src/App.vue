<template>
  <div id="app">
    <Dashboard />
  </div>
</template>

<script>

import Dashboard from "./components/dashboard.vue";

export default {
  name: "App",
  components: {
    Dashboard,
  },
};
</script>


<style>
 @import url('https://fonts.googleapis.com/css?family=Karla:400,700&display=swap');
* {
   font-family: karla;
}
#app {

  /*text-align: center;*/
  color: #2c3e50;
background:#F0F4F6;
/* overflow: hidden; */
}
</style>
