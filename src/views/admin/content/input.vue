<template>
    <div>
        <form-data
        :title="'Tambah Stok Obat'"
        :content="content"
        :action="saveData"></form-data>
    </div>
</template>

<script>
import api from '@/common/api.services'

export default {
    data(){
        return{
            'content':{
                'nama_obat':'',
                'gambar_obat':'',
                'harga_jual':'',
                'harga_beli':'',
                'stok':'',
            }
        }
    },
    components:{
        FormData: () => import('@/components/admin/FormContent.vue')
    },
    methods:{
        saveData(){
          api.postApi('obat/create.php',{
            nama_obat:this.content.nama_obat,
            gambar_obat:this.content.gambar_obat,
            harga_jual:this.content.harga_jual,
            harga_beli:this.content.harga_beli,
            stok:this.content.stok,
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
