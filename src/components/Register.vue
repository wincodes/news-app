<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
    <v-flex xs12>
    <v-layout justify-center>
      <p class="title">Register</p>
    </v-layout>
    <v-layout justify-center>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
    <v-text-field
      v-model="username"
      :counter="10"
      label="username"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      label="email"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :rules="emailRules"
      :type="'password'"
      label="Password"
      required
    ></v-text-field>

    <v-btn
      color="success"
      class="mr-4"
      @click="register"
    >
      Register
    </v-btn>
    </v-form>
    </v-layout>
    <v-layout justify-center>
      <div v-if="isRegister === true">
        Registration Successful you can now 
        <router-link to="/login">Log In</router-link>
        </div>
        <v-layout justify-center v-if="error">
            <v-alert type="error">
            {{ error }}
            </v-alert>
        </v-layout>
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
      email: null,
      isRegister: false,
      error: null
    }
  },
  methods: {
      register(){
          this.error = null
          if(this.username
            && this.password
            && this.email
          ){
            //   console.log(this.username, this.password, this.email)
            localStorage.setItem('username', this.username);
            localStorage.setItem('password', this.password);
            localStorage.setItem('email', this.email);
            this.isRegister = true
          }else{
            this.error = 'Please fill required fields'
          }
      }
  }
};
</script>
