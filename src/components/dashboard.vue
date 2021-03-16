<template>
  <div class="flex h-screen  font-roboto">
    <SideBar />

    <div class="flex-1 flex flex-col overflow-hidden">
      <Nav />

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-back">
        <div class="container mx-auto px-6 py-8">
         <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Nav from "./nav/nav.vue"
import SideBar from "./side-bar/side-bar.vue";
export default {
  name: "Dashboard",
  components: { SideBar, Nav },
};
</script>

<style scoped>
.bg-back{
background:#F0F4F6,

}
</style>
