<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3 mt-3">
                    Orders
                </h1>
                 <v-list
                    subheader
                    two-line
                    >
                    
                    <v-list-item-group
                        
                        multiple
                    >
                        <v-list-item
                        v-for="order in orders"
                        :key="order.id"
                        >
                            <v-list-item-action>
                            <v-checkbox
                                :input-value="order.done"
                                @click="change(order)"
                                color="indigo darken-3"
                            ></v-checkbox>
                            </v-list-item-action>

                            <v-list-item-content>
                            <v-list-item-title>{{order.name}}</v-list-item-title>
                            <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-btn 
                                :to="'/ad/' + order.adId"
                                class="primary">Open</v-btn>
                            </v-list-item-action>
                        </v-list-item>

                       
                    </v-list-item-group>
                    </v-list>
            </v-flex>
        </v-layout>
    </v-container>
</template>



<script>
export default {
    data() {
        return {
            orders: [
                {
                    id: '34sd',
                    name: 'Sasha',
                    phone: '8934234235235',
                    adId: '444',
                    done: false
                }
            ]
        }
    },
    methods: {
        change(order) {
            order.done= true
        }
    }
}
</script>