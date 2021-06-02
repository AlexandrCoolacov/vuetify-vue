<template>
     <v-container grid-list-lg>
         <h1>Фильтрация еще не прикручена, как и картинки. Их url-ов нет в ответе, нужно пилить каждую вручную. В процессе</h1>
             <v-layout row wrap>
                <v-flex 
                class="mt-12"
                xs12 
                sm6 
                md4
                v-for="(item) in itemsFrom"
                :key="item.id"
                >
                    <v-card
                        class="mx-auto"
                        max-width="400" 
                        height="400px"
                    >
                        <v-img
                        height="200px"
                        
                        class="white--text align-end"
                        >
                        
                        </v-img>
                        <v-card-title>{{item.title}}</v-card-title>
                        <v-card-subtitle class="pb-0">
                        {{item.genre}}
                        </v-card-subtitle>

                        <v-card-text class="text--primary">
                        <!-- <div>Whitehaven Beach</div> -->

                        <div>{{item.price}}</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                
                                text
                            >
                                Share
                            </v-btn>

                            <v-btn
                                :to="'/' + item.courseHash"
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
</template>



<script>


export default {
    data() {
        return {
           itemsFrom: []
            
        }
    },
    components: {
        // items
    },
    methods: {
       
        	 
			
    },
    mounted() {
        (
        async () => {
					"use strict";
	                let data = undefined;

	                function getData() {
	    
	                    return new Promise(function (resolve, reject) {
	                      const url = "https://krapipl.imumk.ru:8443/api/mobilev1/update";
	                        const xhr = new XMLHttpRequest();
	    
	                        xhr.open('POST', url, true);
	    
	                        xhr.onload = function () {
	                            const status = xhr.status;
	    
	                            if ( status == 200 ) {
	                                resolve(JSON.parse(xhr.response));
	                            } else {
	                                reject(status);
	                            }
	                        };
	    
	                        xhr.send();
	                    });
	                }
	    
	                data = await getData();
	                const { items } = data;
                    console.log(items);
                    items.forEach((item) => {
	                	this.itemsFrom.push(item)
	                });
                   
                   
	               
				}
			        ) ()
    }
            //   axios
            // .post('https://krapipl.imumk.ru:8443/api/mobilev1/update')
            // // .then(response => JSON.parse(response))
            // .then(response =>(this.info = response))
            

        
      
    }
    
    

</script>