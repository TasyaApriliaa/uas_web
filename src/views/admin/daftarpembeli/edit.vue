<template>
    <div>
        <form-data
        :title="'Edit Content'"
        :content="content"
        :action="saveData"></form-data>
    </div>
</template>

<script>
import api from "@/common/api.services"
export default {
    data(){
        return{
            content:{
                name:'',
                description:'',
                // id_user:'',
                rujukan:'',
                // balasan:''
            }
        }
    },
    components:{
        FormData: () => import('@/components/admin/FormContent.vue')
    },
    created(){
      api.getById('/content',this.$route.params.id)
      .then(r=>{
        console.log(r.data)
      this.content.name=r.data.data.name
        this.content.description = r.data.data.description
        // this.content.id_user = r.data.data.id_user
          this.content.image = r.data.data.image
          // this.content.balasan = r.data.data.balasan
      }).catch((e)=>{
        console.log(e)
      })
    },

    methods:{
        saveData(){
          console.log(this.$route.params.id)
          api.updateApi('/content/'+this.$route.params.id,{
             name:this.content.name,
            description:this.content.description,
            // id_user : this.content.id_user,
              image : this.content.image,
              // balasan : this.content.balasan
          })
          .then(r=>{
              console.log(r.statusText)
              this.$router.push('/admin/content')
          }).catch((e)=>{
            console.log(e)
          })
        }
    }

}
</script>

<style>

</style>
