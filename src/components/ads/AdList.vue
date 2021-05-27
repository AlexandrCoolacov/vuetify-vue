<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">My ads</h1>

                <v-card
                v-for="ad in myAds"
                :key="ad.id"
                class="elevation-15 mb-7"
                 elevation = 15 mb-3>
                    <v-layout row mx-auto>
                        <v-flex xs4>
                            <v-img
                            :src="ad.imageSrc"
                            height="160px">

                            </v-img>
                        </v-flex>
                        <v-flex xs8>
                            <v-card-text>
                                <h1 
                                class="text--primary mb-3"
                                
                                >{{ ad.title}}</h1>
                                <p>{{ad.description}}</p>
                            </v-card-text>
                            <v-card-actions >
                                <v-spacer></v-spacer>
                                <v-btn 
                                class="info"
                                :to="'/ad/' + ad.id"
                                >Open</v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>



<script>
export default {
   computed: {
       myAds () {
           return this.$store.getters.myAds
       }
   }
}
</script>