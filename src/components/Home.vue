<template>
    <v-container class="container mx-auto">
        <v-layout row class="mainTitle mb-5">
            <v-flex xs12 sm3 offset-sm3 class="mx-5">
               <h1 >Резюме Кулакова Александра</h1>
             
            </v-flex>
            <v-flex xs12 sm3 offset-sm3 class="mx-5">
               
             
            </v-flex>
              <h2 class="mx-3">Здравствуйте, на данном сайте вы можете узнать общую информацию обо мне, а так же ознакомиться с моими навыками в веб разработке. </h2>
        </v-layout>
         <v-layout row xs12 sm6 offset-sm3 mx-auto >
             <v-card class="mx-5 mb-5" >
               <div class="wrapperAbout mx-5">
                   <p>Мне 32 года. Родился 16 июля 1988 года. </p>
                   <p>Работал несколько лет на космическую промышленность,время от времени читал документацию по html, всегда был на ты с компами и хотел создавать что-то интересное и нужное . В том году решил полностью сменить сферу деятельности и уйти , наконец, в веб-разработки. Процесс изучения был не совсем простым, но дикий интерес узнавать азы кодинга намного упрощали понимание.</p>
                   <p> На данном этапе активно пользуюсь vue, vuetify ,на них , собственно, и запилен данный сайт. начал с изучения реакта, но потом перешел на vue и на его углубленном изучении решил пока остановиться</p>
               </div>
            </v-card>
            <v-spacer></v-spacer>
            <v-card 
            class="mx-5 mb-5 elevation-15" >
            
                
               <v-img 
               max-width="260px"
               contain
               
               
               src="@/img/photo.jpg"
               ></v-img>
               
            </v-card>
            <v-spacer></v-spacer>
         </v-layout>
         <v-layout row xs12 sm6 offset-sm3 mx-auto >
             
            <v-card class="mx-5 mb-5" >
                 <h1 class="scill mx-10">Опыт работы на данный момент </h1>
               <ul>
                   <li>Уверенное знание HTML</li>
                   <li>Уверенное знание CSS</li>
                   <li>Уверенное знание JS</li>
                   <li>адаптивная отзывчивая кроссбраузерная верстка ( в основном верстаю на гридах, т.к. считаю, что за ними будущее, но могу и пофлексить</li>
                   <li>использую scss</li>
                   <li>работаю с Node.js , для сборки использую webpack</li>
                   <li>навыки работы с canvas, svg </li>
                   <li>владею английским необходимым для поиска и чтения необходимой информации.</li>
                   
               </ul>
            </v-card>
            <v-spacer></v-spacer>
            <v-card  
            class="mx-5 mb-5 number"
            width="500px"  >
                <div class="wrapperContact ml-5">
                    <h2>Контакты</h2>
                    <h3>E-mail: alexandr.coolacov@gmail.com </h3>
                    <h3>Github : github.com/AlexandrCoolacov </h3>
                    <h3>VK:
                        <a href="https://vk.com/id10939241">https://vk.com/id10939241</a>
                         
                    </h3>
                    <h3>Телефон: <a href="tel:+79279072224">8(927)-907-222-4</a></h3>
                    
                    <h3>Рабочий проект лежит по адресу  
                        <a href="https://designsite16112020smr.000webhostapp.com/">designsite16112020smr.000webhostapp.com</a> 
                        . Не пугайтесь, обычный бесплатный хостинг.
                    </h3>
                </div>
               
            </v-card>
          
         </v-layout>
          <v-layout row class="mainTitle mb-5 mx-10">
              
            
               <h3>Для полной навигации по данному сайту необходима регистрация. В качестве сервера авторизации используется сервис Firebase. ПОдтверждения никакого не требуется, поэтому регимся на левый акк и логинимся. Далее можете ознакомится с созданием карточек, списком, взаимодействием со сторониим API, фильтрацией списков и прочее. ВО вкладке Фильтры идет динамическое построение большого кол-ва карточек со стороннего сервера. Подождите.</h3>

            
        </v-layout>
    </v-container>
</template>



<script>
export default {
    
}
</script>


<style lang="scss" scoped>
    .container {
        font-family: 'Indie Flower', cursive;
         background: radial-gradient(circle farthest-corner at 100px 50px, #FBF2EB, #c1bbc5);
    }
    .mx-5 {
        max-width: 500px;
        p {text-indent: 20px;}
    }
    .number {
        a {
        text-decoration: none;
        }

    }

    .wrapperContact {
        overflow: hidden;
        h3{
            overflow: hidden;
            a{
                overflow: hidden;
                text-overflow: ellipsis;
            }
            text-overflow: ellipsis;
        }
    }

    

    
</style>
