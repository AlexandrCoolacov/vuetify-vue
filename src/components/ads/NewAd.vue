<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">Create new ad</h1>
                <v-form  v-model="valid" ref="form" lazy-validation>
                        <v-col>
                            <v-col
                              cols="12"
                              md="12"
                            >
                              <v-text-field
                               
                                name="title"
                                label="Ad title"
                                type="text"
                                v-model="title"
                                :rules="[v => !!v || 'Title required']"
                                required
                              ></v-text-field>
                            </v-col>
                    
                            <v-col
                              cols="12"
                              md="12"
                            >
                              <v-textarea
                                
                                outlined
                                multi-line
                                name="description"
                                label="Ad description"
                                type="text"
                                v-model="description"
                                :rules="[v => !!v || 'Description required']"
                                
                                required
                              ></v-textarea>
                            </v-col>

                            <v-layout row>
                                <v-flex xs12>
                                        <v-btn
                                        color="blue-grey"
                                        class="mx-10 white--text"
                                        >
                                        Upload
                                        <v-icon
                                        right 
                                        dark>
                                            mdi-cloud-upload
                                        </v-icon>
                                        </v-btn>
                                </v-flex>
                            </v-layout>
                            <v-layout row  >
                                <v-flex xs12>
                                    <img src="" height=100>
                                </v-flex>
                            </v-layout>
                            <v-layout row class="mt-5 mx-8 " >
                                <v-flex xs12>
                                    <v-switch
                                    color="success"
                                    v-model="promo"
                                    label="Add to promo?"
                                    ></v-switch>
                                </v-flex>
                            </v-layout>
                            <v-layout row class="mt-5 mx-8 " >
                                <v-flex xs12>
                                <v-spacer></v-spacer>
                                <v-btn 
                                :disabled = "!valid"
                                class="success" 
                                @click="createAd" 
                                >Create ad</v-btn>
                                </v-flex>
                            </v-layout>
                        </v-col>
                     
                </v-form>   
            </v-flex>
        </v-layout>
    </v-container>
</template>



<script>
export default {
    data() {
        return {
            title: '',
            description: '',
            promo:  false,
            valid: false,
        }
    },
    methods: {
        createAd() {
            if (this.$refs.form.validate()) {
                const ad = {
                    title: this.title,
                    description: this.description,
                    promo: this.promo,
                    imageSrc: 'https://miro.medium.com/max/1200/1*XV1T1msXsk5CT_hkuNLQDQ.jpeg'
                }
                 this.$store.dispatch ('createAd' , ad)
            }

        }
    }
}
</script>