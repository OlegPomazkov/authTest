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
                v-text="'Here is name'"
              />

              <v-card-subtitle 
                v-text="'Here is email'"
              />
            </div>

            <v-avatar
              class="ma-3"
              size="125"
              tile
            >
              <v-img :src="imgSrc"/>
            </v-avatar> 
          </div>
        </v-card>
    </v-container>
  </v-main>
</template>

<script>
  export default {
    data() {
      return {
        imgSrc: "logo.png"
      }
    }
  }
</script>

