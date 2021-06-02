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
       <v-list-item
       v-if="isUserLoggedIn"
       @click="onLogout"
       >
          <v-list-item-icon>
            <v-icon>logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
             <v-list-item-title v-text="'Logout'"></v-list-item-title>
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
        <router-link to="/main"  tag="span" class="pointer">Сайт- резюме Кулакова Александра</router-link>
      </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class=" hidden-sm-and-down mr-2">
          
          <v-btn 
          color="#41D1FF"
          
          v-for="link in links"
          :key="link.title"
          :to="link.url"
          ><v-icon>{{link.icon}}</v-icon>
          {{link.title}}
          </v-btn>

          <v-btn
          v-if="isUserLoggedIn"
          @click="onLogout"
          text
          > <v-icon >logout</v-icon>
          Выйти
          
          </v-btn>
        </v-toolbar-items>

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
    
        
        </v-snackbar>
     </template>
  </v-app>
</template>


<script>
export default {
  data () {
      return {
        
        drawer: false,
       

      }
    },
    computed: {
      error() {
        return this.$store.getters.error
      },
      isUserLoggedIn () {
        return this.$store.getters.isUserLoggedIn
      },
      links () {
        if (this.isUserLoggedIn) {
          return [
            
               {
            title: 'Список',
            icon: 'list',
            url: '/list',
            action: 'list', 
            
          },

          {
            title: 'Создать',
            icon: 'note_add',
            url: '/new',
            action: 'note_add', 
            
          },

          {
            title: 'Фильтры',
            icon: 'mdi-magnify',
            url: '/search',
            action: 'mdi-magnify', 
            
          },

          {
            title: 'Заказы',
            icon: 'group',
            url: '/orders',
            action: 'group', 
            
          },

              {
            title: 'Главная',
            icon: 'engineering',
            url: '/main',
            action: 'engineering', 
            
          },

          ]
        }

          return [
              {
            title: 'Главная',
            icon: 'engineering',
            url: '/main',
            action: 'engineering', 
            
          },
            {
            title: 'Войти', 
            icon: 'login', 
            url: '/login', 
            action: 'login', 
           
          },

           {
            title: 'Регистрация',
            icon: 'person_add',
            url: '/registration',
            action: 'person_add', 
            
          },
          ]
      }
    },
    methods: {
      closeErrors () {
        this.$store.dispatch('clearError')
      },
      onLogout () {
        this.$store.dispatch('logoutUser')
        this.$router.push('/')
      },
      
    },
}
</script>


<style lang="scss" scoped>
  .pointer {
    cursor: pointer;
  }
</style>