<template>
  <v-dialog v-model="authDialog" max-width="500">
    <v-card color="primary">
      <v-card-title>Login</v-card-title>

      <v-card-text>
        <v-text-field label="Username" outlined />
        <v-text-field label="Password" outlined type="password" />
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const authDialog = ref<boolean>(false)
</script>
