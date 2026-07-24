<template>
  <v-app-bar color="primary" height="64">
    <template #prepend>
      <div class="d-flex flex-column justify-center ma-3">
        <img alt="Logo" height="36" :src="logo">
      </div>
    </template>

    <v-app-bar-title />

    <template #append>
      <v-text-field
        class="mt-5 text-white w-100"
        placeholder="Search"
        prepend-inner-icon="mdi-magnify"
        rounded="pill"
        variant="outlined"
      />

      <v-btn
        class="mx-1"
        color="white"
        icon="mdi-bell-outline"
        rounded="pill"
        variant="tonal"
      />

      <v-avatar class="mx-2" color="primary-lighten-1" size="36">
        <span class="text-white text-caption font-weight-bold">JD</span>
      </v-avatar>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import logo from "@/assets/logo.svg";
</script>
