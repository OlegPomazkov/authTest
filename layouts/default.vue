<template>
  <v-app>
    <nuxt/>
  </v-app>
</template>

<script>
  export default {
    created() {
      if( !this.$route.name ) this.$router.push({name: 'index'})      
    }
  }
</script>

