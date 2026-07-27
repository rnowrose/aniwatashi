<template>
  <v-card color="primary">
    <v-card-title>Login</v-card-title>

    <v-card-text>
      <v-text-field v-model="username" label="Username" outlined />
      <v-text-field v-model="password" label="Password" outlined type="password" />
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
  defineProps<{
    username: string
    password: string
  }>()
  const emit = defineEmits<{
    (e: 'login', username: string, password: string): void
  }>()
</script>
