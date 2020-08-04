<template>
  <v-app>
    <v-container
      class="d-flex flex-column justify-space-around align-center"
    >
      <v-card
        class="pl-2 pr-2 pt-2 pb-2 mt-10 elevation-3"
        :width="500"
      >
        <form>
          <h3>Authorization</h3> 
          
          <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            :counter="10"
            label="Name"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          />

          <v-text-field
            v-model="password"
            type="password"
            :error-messages="passwordErrors"
            label="Password"
            required
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
          />
          
          <v-checkbox
            v-model="savePassword"
            label="Save password"
          />

          <v-btn 
            @click="handleLoginClicked"
          >
            SIGN IN
          </v-btn>
        </form>
      </v-card>

      <div class="mt-10">
        <p>Two users are available for testing:</p>
        <p>1. name: User_1 / password: pw1</p>
        <p>2. name: User_2 / password: pw2</p>
      </div>

      <v-alert
        v-model="formAlert"
        close-text="close"
        color="orange accent-4"
        dark
        dismissible
      >
        Please, fill form in a right way
      </v-alert>
    </v-container>
  </v-app>

</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      password: { required},
    },

    data(){
      return {
        name: '',
        password: '',
        savePassword: false,
        formAlert: false
      }
    },

    computed: {
      nameErrors() {
        const errors = []

        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        
        return errors
      },
      passwordErrors() {
        const errors = []

        if (!this.$v.password.$dirty) return errors
        !this.$v.password.required && errors.push('Password is required')
        
        return errors
      }
    },

    mounted(){
      if(this.name) this.name = ''
      if(this.password) this.password = ''
    },

    methods: {
      handleLoginClicked() {
        this.$v.$touch()
        if( this.nameErrors.length || this.passwordErrors.length) {
          this.formAlert = true
          setTimeout(()=>{if(this.formAlert) this.formAlert = false}, 3000)

          return
        }
        this.$router.push('/UserInfo')
      }
    }
  }
</script>