import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Vuetify from 'vuetify/lib'
import firebase from 'firebase/app'
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';


Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  
  router,
  store,
  vuetify,
  
  render: h => h(App),
  created () {
     var config = {
      apiKey: "AIzaSyDhy04zZ-lBy8Soecc55UKns71oFIQnu3I",
      authDomain: "vuetify-vue.firebaseapp.com",
      projectId: "vuetify-vue",
      storageBucket: "vuetify-vue.appspot.com",
      messagingSenderId: "73372477229",
      appId: "1:73372477229:web:ffc3eab20f6d91358ed5a4",
      measurementId: "G-GPKG954JZ0"
    }
    firebase.initializeApp(config)

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser' , user)
      }
    })
    
    
  }
  
}).$mount('#app')




