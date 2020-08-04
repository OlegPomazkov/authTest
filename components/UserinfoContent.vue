<template>
  <v-main>
    <v-container class="d-flex justify-center align-center">
       <v-card
          class="m-t-50"
          width="450"
          outlined
        >
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title
                class="headline"
                v-text="user.name"
              />

              <v-card-subtitle 
                v-text="user.email"
              />
            </div>

            <v-avatar
              class="ma-3"
              size="125"
              tile
            >
              <v-img :src="user.image"/>
            </v-avatar> 
          </div>
        </v-card>
    </v-container>
  </v-main>
</template>

<script>
  export default {
    props: {
      user:{
        type: Object,
        required: true
      }
    }
  }
</script>

