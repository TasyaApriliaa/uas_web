<template>
    <navbar>
        <template slot="content">
            <v-content>
                <v-container fluid fill-height>
                    <v-layout row wrap>
                        <v-flex md12 lg12 xs12>
                            <v-card>
                                <v-card-text>
                                    <v-slide-x-transition mode='out-in'>
                                    <router-view/>
                                    </v-slide-x-transition>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-content>
        </template>
    </navbar>
</template>

<script>
export default {
    components:{
        'Navbar' : () => import('@/components/admin/Navbar.vue'),
    }
}
</script>

<style>

</style>
