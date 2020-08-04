<template>
  <v-app>
    <userinfo-header/>
    
    <userinfo-content
      :user="userData"
    />
    
    <userinfo-footer/>
  </v-app>
</template>

<script>
  import { mapGetters } from 'vuex'

  import UserinfoHeader from '@/components/UserinfoHeader'
  import UserinfoContent from '@/components/UserinfoContent'
  import UserinfoFooter from '@/components/UserinfoFooter'

  export default {
    components: {
      UserinfoHeader,
      UserinfoContent,
      UserinfoFooter
    },

    computed: {
      ...mapGetters([
        'isAuthorized',
        'userData'
      ])
    },

    async mounted(){
      await this.$store.dispatch('checkToken')
      if(!this.isAuthorized){
        this.$router.push({name: 'index'})
      }
    },
  }
</script>

