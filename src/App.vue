<template>
  <v-app>
    <NavBar />
    <Menu />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  import Menu from "@/components/Menu.vue";
  import NavBar from "@/components/NavBar.vue";
  
</script>
