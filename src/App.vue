<template>
  <v-app>
    <v-app-bar app>
      <router-link to="/">
      <v-toolbar-title class="headline text-uppercase">
          <span>NEWS APP</span>
      </v-toolbar-title>
      </router-link>
      
      <v-spacer></v-spacer>
      
      <div v-if="!$store.state.user">
        <v-btn
          text
        >      
          <router-link to="/login">Log In</router-link>
        </v-btn>
        <v-btn
          text
        >
          <router-link to="/register">Register</router-link>
        </v-btn>
      </div>
      <div v-if="$store.state.user">
        <v-btn
          text
        >      
          Hi {{ $store.state.user.username }}
        </v-btn>

        <v-btn
          text
          @click="logout"
        >
          Log Out
        </v-btn>
      </div>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
    }
  },
  methods:{
    logout(){
      this.$store.dispatch('setUser', null)
    }
  }
};
</script>
<style scoped>
.err-alert{
  color: red;
}
a {
  text-decoration: none;
}
</style>
