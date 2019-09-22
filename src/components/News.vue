<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
    <v-flex xs12>
      <v-layout justify-center>
        <p class="title">News App</p>
      </v-layout>
      <v-layout justify-center>
        <v-btn
          text
          @click="switchView('list')"
          v-if="view === 'card'"
        >      
          Switch to List View
        </v-btn>
        <v-btn
          text
          @click="switchView('card')"
          v-if="view === 'list'"
        >      
          Switch to card View
        </v-btn>
      </v-layout>
      <div v-if="$store.state.user">
        <div v-if="view === 'card'">
          <card />
        </div>
        <div v-else-if="view === 'list'">
          <list />
        </div>
      </div>
      <div v-else>
        <v-alert type="error">
          You Must be Loged In to See News
        </v-alert>
      </div>

      </v-flex>



    </v-layout>
  </v-container>
</template>

<script>
import card from './Card'
import list from './List'
export default {
  components:{
    card,
    list
  },
  data() {
    return {
      view: 'card',
    }
  },
  methods:{
    switchView(type){
      this.view = type;
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>
