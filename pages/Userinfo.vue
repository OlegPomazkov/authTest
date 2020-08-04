<template>
  <v-app>
    <userinfo-header/>
    <userinfo-content/>
    <userinfo-footer/>
  </v-app>
</template>

<script>
  import UserinfoHeader from '@/components/UserinfoHeader'
  import UserinfoContent from '@/components/UserinfoContent'
  import UserinfoFooter from '@/components/UserinfoFooter'

  export default {
    components: {
      UserinfoHeader,
      UserinfoContent,
      UserinfoFooter
    }
  }
</script>

