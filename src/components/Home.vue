<template>
    <div>
        <v-container fluid>
            <v-layout row>
                <v-flex xs12>
                    <v-carousel>
                        <v-carousel-item
                        v-for="ad in promoAds"
                        :key="ad.id"
                        :src="ad.imageSrc"
                        reverse-transition="fade-transition"
                        transition="fade-transition"
                        >
                        <div class="carouselLink">
                            <v-btn
                            class="error"
                            :to="'/ad/' + ad.id"
                            >
                            {{ad.title}}
                            </v-btn>
                        </div>
                        </v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container grid-list-lg>
             <v-layout row wrap>
                <v-flex 
                class="mt-12"
                xs12 
                sm6 
                md4
                v-for="(ad,i) in ads"
                :key="ad.id"
                >
                    <v-card
                        class="mx-auto"
                        max-width="400" 
                        height="400px"
                    >
                        <v-img
                        height="200px"
                        :src="ad.imageSrc"
                        class="white--text align-end"
                        >
                        <v-card-title>{{ad.title}}</v-card-title>
                        </v-img>

                        <v-card-subtitle class="pb-0">
                        {{i+1}}
                        </v-card-subtitle>

                        <v-card-text class="text--primary">
                        <!-- <div>Whitehaven Beach</div> -->

                        <div>{{ad.description}}</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                
                                text
                            >
                                Share
                            </v-btn>

                            <v-btn
                                :to="'/ad/' + ad.id"
                                raised
                                class="primary"
                                elevation="10"
                            >
                                Open
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>   
            </v-layout>
        </v-container>
    </div>

</template>



<script>
export default {
  computed: {
      promoAds () {
          return this.$store.getters.promoAds
      },
      ads () {
          return this.$store.getters.ads
      },

   }
}
</script>

<style lang="scss" scoped>
.carouselLink {
    position: absolute;
    bottom: 55px;
    left: 50%;
    background: rgba(0,0,0, .5);
    transform: translate(-50%,0);
    padding: 5px 5px;
    border-radius: 3px;
}

</style>