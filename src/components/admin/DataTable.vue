<template>
    <div>
        <v-card>
            <v-card-title>
            {{ title }}
            <v-spacer></v-spacer>
            <!-- <v-text-field
                v-model="mutableSearch"
                append-icon="search"
                label="Search"
                single-line
                hide-details
            ></v-text-field> -->
            </v-card-title>
            <v-data-table
            :headers="headers"
            :items="items"
            :search="mutableSearch"           
            >
            <template slot="items" slot-scope="props" >
                <slot name="field" :props="props">

                </slot>
            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
                Your search for "{{ mutableSearch }}" found no results.
            </v-alert>
            </v-data-table>
        </v-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            mutableSearch:this.search
        }
    },
    props:{
        'title':{
            default:''
        },
        'headers':{
            default:[]
        },
        'items':{
            default:[]
        },
        'search':{
            default:''
        }
    },
}
</script>

<style>

</style>
