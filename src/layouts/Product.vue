<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <navbar></navbar>
        <div class="d-flex justify-between align-center mb-3">
            <v-btn @click="all">All</v-btn>
            <v-btn @click="none">None</v-btn>
        </div>
        <v-expansion-panel v-model="panel" expand>
            <v-expansion-panel-content
                    v-for="(item,i) in items" :key="i">
                <template v-slot:header>
                    <div>Item</div>
                </template>
                <v-card>
                    <v-card-text>
                        Desc
                        <v-container
                            fluid
                            grid-list-lg
                            fill-height
                            style="min-height: 434px">
                        <v-fade-transition mode="out-in">
                            <v-layout v-if="show" key="0" wrap>
                                <v-card>
                                    <v-img
                                            src="https://picsum.photos/350/165?random"
                                            height="125"
                                            class="grey darken-4">
                                    </v-img>
                                </v-card>
                            </v-layout>
                        </v-fade-transition>
                        </v-container>
                    </v-card-text>

                </v-card>
            </v-expansion-panel-content>
        </v-expansion-panel>
        <footer-comp></footer-comp>
    </div>

</template>
<script>
    import VContent from "vuetify/lib/components/VGrid/VContent";

    export default {
        data () {

            return{
                show : false,
                panel:[],
                items:5,
            }
        },
        methods : {
          all (){
              this.panel = [...Array(this.items).keys()].map(_=>true)
          },
            none(){
              this.panel = []
            }
        },
        components:{
            VContent,
            'Navbar' : () => import('@/components/user/Navbar.vue'),
            'FooterComp' : () => import('@/components/user/Footer.vue'),
        }
    }

</script>
<style>

</style>