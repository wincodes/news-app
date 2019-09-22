import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import News from './components/News.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import store from './store'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router  = new VueRouter({
  routes: [{
          path: '/',
          name: 'News',
          component: News
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
      }
  ]
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
