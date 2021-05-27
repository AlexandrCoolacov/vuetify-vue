<template>
  <v-app xs12>
    <v-navigation-drawer 
    app 
    v-model="drawer"
    temporary>
    <v-list>
      <v-list-item
        v-for="link in links"
        :key="link.title"
        :prepend-icon="link.action"
        v-model="link.action"
        :to="link.url"
      >
        <v-list-item-icon>
          <v-icon
            v-if="link.icon"
          >
            {{link.action}}
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="link.title"></v-list-item-title>
        </v-list-item-content>

        
      </v-list-item>
    </v-list>
    </v-navigation-drawer>
    <v-app-bar 
        app 
        dark
        color="#41D1FF"
        
    >
       <v-app-bar-nav-icon
       

       @click="drawer = !drawer"
       ></v-app-bar-nav-icon>

      <v-toolbar-title >
        <router-link to="/"  tag="span" class="pointer">Облако знаний</router-link>
        </v-toolbar-title>

      <v-spacer></v-spacer>

      
      
        <v-btn 
        
        color="#41D1FF"
        
        class=" hidden-sm-and-down mr-2"
        v-for="link in links"
        :key="link.title"
        :to="link.url"
        ><v-icon>{{link.icon}}</v-icon>
        {{link.title}}
        </v-btn>

        <!-- <v-btn 
        flat
        color="#41D1FF"
        icon
        class=" hidden-sm-and-down mr-2"
        v-for="link in links"
        :key="link.title"
        :to="link.url"
        ><v-icon>{{link.icon}}</v-icon>
        
        </v-btn> -->
          

          
    
        
     
    </v-app-bar>
    <v-main>
        <router-view></router-view>
    </v-main>

     <template v-if="error">
        <v-snackbar
        :timeout="5000"
          @input="closeErrors"
          color="error"
          multi-line
          :value="true"
        >
          {{error}}
    
          <template v-slot:action="{ attrs }">
            <v-btn
              dark
              
              v-bind="attrs"
              @click="closeErrors"
            >
              Close
            </v-btn>
          </template>
        </v-snackbar>
     </template>
  </v-app>
</template>


<script>
export default {
  data () {
      return {
        
        drawer: false,
       
        links: [

          // {
          //   title: 'Ad',
          //   icon: 'list',
          //   url: '/ad/:id',
          //   action: 'article', 
            
          // },

          {
            title: 'AdList',
            icon: 'list',
            url: '/list',
            action: 'list', 
            
          },

          {
            title: 'NewAd',
            icon: 'note_add',
            url: '/new',
            action: 'note_add', 
            
          },

          {
            title: 'Search',
            icon: 'mdi-magnify',
            url: '/search',
            action: 'mdi-magnify', 
            
          },

          {
            title: 'Login', 
            icon: 'login', 
            url: '/login', 
            action: 'login', 
           
          },

           {
            title: 'Registration',
            icon: 'person_add',
            url: '/registration',
            action: 'person_add', 
            
          },

           {
            title: 'Orders',
            icon: 'group',
            url: '/orders',
            action: 'group', 
            
          },

        ],
      }
    },
    computed: {
      error() {
        return this.$store.getters.error
      }
    },
    methods: {
      closeErrors () {
        this.$store.dispatch('clearError')

      }
    },
}
</script>


<style lang="scss" scoped>
  .pointer {
    cursor: pointer;
  }
</style>