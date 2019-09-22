<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
    <v-flex xs12>
    <v-layout justify-center>
      <p class="title">Log In</p>
    </v-layout>
    <v-layout justify-center>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
    <v-text-field
      v-model="username"
      label="username"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :type="'password'"
      label="Password"
      required
    ></v-text-field>

    <v-btn
      color="success"
      class="mr-4"
      @click="login"
    >
      Log In
    </v-btn>
    </v-form>
    </v-layout>
    <v-layout justify-center v-if="error">
        <v-alert type="error">
          {{ error }}
        </v-alert>
    </v-layout>
    </v-flex>
      
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null,
      error: null
    }
  },
  methods: {
      login(){
          this.error = null
        //   console.log('hi')
          if(this.username
            && this.password
          ){
            const usernameFromStorage = localStorage.getItem('username')
            const passwordFromStorage = localStorage.getItem('password')
            const emailFromStorage = localStorage.getItem('email')

            if(usernameFromStorage !== this.username){
            this.error = 'User Not Found';
            return
            }else if(passwordFromStorage !== this.password){
                this.error = 'password does not match';
            return 
            }

            const user = {
                username: usernameFromStorage,
                email: emailFromStorage
            }

            this.$store.dispatch('setUser', user)

            alert("Login Successful");

            this.$router.push({ name: 'News'})

          }else{
              this.error = 'Please Fill Required Filds';
          }
      }
  }
};
</script>
