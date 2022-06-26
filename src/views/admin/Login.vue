<template>
    <div>
      <loading :value="loading"></loading>
        <v-container>
         <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="email" label="Email" type="text"
                  v-model="email" @input="alert = false"
                  ></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"
                  v-model="password" @input="alert = false" @keyup.enter="login"></v-text-field>
                </v-form>
                <v-alert
                  :value="alert"
                  type="error"
                  transition="scale-transition"
                >
                  Email or password doesn't match
                </v-alert>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
        </v-container>
    </div>
</template>

<script>
// import { CLIENT_SECRET } from "@/common/config"
import api from '@/common/api.services'
// import config from '@/config'
/*eslint-disable*/
import { setToken } from '@/common/token.services'
import Loading from '@/components/Loading.vue'
import axios from 'axios'
import { close } from 'fs';
export default {
  data(){
    return{
      email :'',
      password : '',
      key:'',
      alert: false,
      loading:false
    }
  },

  components:{
    'Loading': Loading
  },

  created(){
    api.getApi('/secretkeys')
    .then(res => {
      this.key = res.data.data.secret
      // console.log(this.key);
    })
    .catch(ex => {
      
    })
  },

  methods:{
    // login(){
    //   this.loading=true
    //   this.$router.push("/admin/")

          
    //   var data = {
    //     client_id: 2,
    //     client_secret : config.clientSecret,
    //     grant_type : 'password',
    //     username : this.email,
    //     password : this.password
    //   }

    //   axios.post(`${config.serverUrl}oauth/token`, data)
    //   .then(res => {
    //     setToken(res.data)
    //     this.$auth.setToken(res.data.access_token,res.data.expires_in + Date.now())
    //     api.getApi('/datauser/'+ this.email)
    //     .then(r=>{
    //       if(r.data[0].roles==="puskesmas"){
    //     this.$router.push("/admin/")

    //       }
    //        else if(r.data[0].roles==="keswan"){
    //     this.$router.push("/keswan/")
    //     }else if(r.data[0].roles==="superadmin")
    //     {
    //     this.$router.push("/superadmin/")

    //       }else if(r.data[0].roles==="gudang")
    //     {
    //     this.$router.push("/gudang/")

    //       }
    //       else if(r.data[0].roles==="dinkes")
    //     {
    //     this.$router.push("/dinkes/")

    //       }
    //     })
    //     // console.log(res.data)
    //     this.alert=false
    //     this.loading = false
    //   })
    //   .catch(ex => {
    //     // console.log(ex.message)
    //     this.loading = false
    //     this.alert=true
    //   })

    // }
    
  }
  
}
</script>

<style>

</style>
