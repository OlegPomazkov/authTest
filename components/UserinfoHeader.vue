<template>
  <v-app-bar
    :app="true"
    color="deep-purple accent-4"
    dense
    dark
  >
    <v-toolbar-title>
      Personal information
    </v-toolbar-title>

    <v-spacer/>

    <v-btn 
      icon
      title="Close and delete password"
      @click="handleCloseClick"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
  export default {
    methods: {
      handleCloseClick() {
        this.$emit('close-personal-data')
      }
    }
  }
</script>

