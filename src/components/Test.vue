<template>
  <v-app>
    <v-app-bar app color="white" row wrap>
      <div class="d-flex align-center">
        <div class="headerTitle d-none d-sm-flex mr-3"   >
          <h2>Облако знаний</h2>
        </div>
        <div class="text-center">
              <v-menu transition="fab-transition">
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon
                          large
                          dark
                          color="#41D1FF"
                          v-bind="attrs"
                          v-on="on"
                        >
                          mdi-home
                        </v-icon>
                    </template>
                    <v-list>
                <v-list-item
                  v-for="item in headerMenuItems"
                  :key="item.title"
                    >
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                  </v-list-item>
                    </v-list>
              </v-menu>
        </div>
      </div>
      <v-spacer></v-spacer>
      <v-btn  medium color="#41D1FF" class="mr-2 leftMenu"><h5>Каталог</h5></v-btn>
      <v-btn  color="#41D1FF" class="mr-2 leftMenu"><h5>Регистрация</h5></v-btn>
      <v-btn  color="#41D1FF" class="mr-2 leftMenu"><h5>Вход</h5></v-btn>
    </v-app-bar>
    <v-main>
     
     
    </v-main>
    
    
  </v-app>
</template>

<script>



export default {

  name: 'App',
  components: {

  },

  data () {
    return {
                      headerMenuItems: [
                          {title: 'О проекте'},
                          {title: 'Новости'},
                          {title: 'Помощь'},
                          {title: 'Скачать'},
                          
        ],
        
    }
  },
  
  
};
</script>

<style lang="scss" scoped>
   .leftMenu {
     h5{
         color: white;
     }
     
      border-radius: 11px;
       &:hover {background: linear-gradient(#00BBEB, #004fe5) ;}
  }
  .headerTitle{
    h2 {
      color:#41D1FF;
    }
    
  }
</style>
 