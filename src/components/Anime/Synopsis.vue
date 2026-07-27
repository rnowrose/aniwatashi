<template>
  <v-card>
    <v-card-title color="primary">Synopsis</v-card-title>

    <v-card-text>
      {{ synopsis }}
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
  defineProps<{
    synopsis: string;
  }>();
</script>
