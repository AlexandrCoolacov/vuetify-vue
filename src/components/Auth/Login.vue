<template>
    <v-container>
      <v-layout align-center justify-center>
         <v-flex xs12 sm10 md8>
             <v-card elevation="10" >
                  <v-card-text>
                     <v-form v-model="valid" ref="form" lazy-validation>
                          <v-col>
                            <v-col
                              cols="12"
                              md="12"
                            >
                              <v-text-field
                                prepend-icon="person"
                                name="email"
                                label="Email"
                                type="Email"
                                v-model="email"
                                :rules="emailRules"
                                required
                              ></v-text-field>
                            </v-col>
                    
                            <v-col
                              cols="12"
                              md="12"
                            >
                              <v-text-field
                                prepend-icon="lock"
                                name="password"
                                label="Password"
                                type="password"
                                counter="7"
                                v-model="password"
                                :rules="passwordRules"
                                required
                              ></v-text-field>
                            </v-col>
                  
                          </v-col>
                     </v-form>
                  </v-card-text>
                  <v-card-actions>
                      
                        <v-spacer></v-spacer>
                        <v-btn
                        :loading="loading"
                        :disabled="!valid || loading"
                        @click="validate" 
                        color="info">Confirm</v-btn>
                    </v-card-actions>
                  
                  
             </v-card>
            
         </v-flex>
      </v-layout>
    </v-container>
</template>



<script>
export default {
    data() {
        return {
            
            password: '',
            valid: false,
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            passwordRules: [
                  v => !!v || 'Password is required',
                    v => (v && v.length >= 7) || 'Password must be more than 7 chars',
            ],
            // confirmPasswordRules: [
            //       v => !this.password || 'Confirm password',
               
            // ],
            
        }
    },
    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                const user = {
                    email: this.email,
                    password: this.password,
                }

                this.$store.dispatch('loginUser', user)
                .then(() => this.$router.push('/'))
                .catch(() => {})
            }
        }
    },
    computed: {
      loading() {
        return this.$store.getters.loading
      }
    }
}
</script>