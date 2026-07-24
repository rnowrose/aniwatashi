<template>
  <v-navigation-drawer color="primary" permanent>
    <v-list nav>
      <v-list-item
        color="white"
        prepend-icon="mdi-heart-outline"
        rounded="lg"
        title="For You"
        value="for-you"
        variant="tonal"
      />

      <v-list-item
        color="white"
        prepend-icon="mdi-compass-outline"
        rounded="lg"
        title="Discover"
        value="discover"
        variant="tonal"
      />

      <v-list-item
        color="white"
        prepend-icon="mdi-cog-outline"
        rounded="lg"
        title="Settings"
        value="settings"
        variant="tonal"
      />
    </v-list>

    <template #append>
      <v-list nav>
        <v-list-item
          color="white"
          prepend-icon="mdi-help-circle-outline"
          rounded="lg"
          title="Help & Support"
          value="help"
          variant="tonal"
        />
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts"></script>

<style scoped>
  .v-list {
    background-color: var(--v-primary-base) !important;
    color: white !important;
  }
</style>
