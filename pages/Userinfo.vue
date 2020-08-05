<template>
  <v-container>
    <userinfo-header
      @close-personal-data="handleClose"
    />
    
    <userinfo-content
      :user="userData"
    />
    
    <userinfo-footer/>
  </v-container>
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

    mounted(){
      if(!this.userData && !this.isAuthorized){
        this.$router.push({name: 'index'})
      }
    },

    methods: {
      handleClose() {
        window.localStorage.removeItem('auth_token')
        this.$router.push({name: 'index'})
      }
    }
  }
</script>

