<template>
    <div>
        <v-btn color="primary" to="/admin/content/add">
            <v-icon>add</v-icon>
            Tambah Stok Obat
        </v-btn>
        <br/><br/>
        <div>
        <data-table :headers='headers' :items='datas' :search.sync='cari'>
            <template slot="field" slot-scope="props" height="300px" width="500px">
                <td class="text-md-left">{{ props.props.item.nama_obat }}</td>
                <td class="text-md-left">{{ props.props.item.gambar_obat }}</td>
                <td class="text-md-left">{{ props.props.item.harga_jual }}</td>
                <td class="text-md-left">{{ props.props.item.harga_beli }}</td>
                <td class="text-md-left">{{ props.props.item.stok }}</td>
                <td>
                   <v-tooltip left>
                        <v-btn fab dark small color="cyan" slot="activator"
                        :to='"/admin/content/"+props.props.item.id+"/edit"'>
                            <v-icon small dark>edit</v-icon>
                        </v-btn>
                        <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip right>
                        <v-btn fab dark small color="red" slot="activator" @click="del(props.props.item)">
                            <v-icon small dark>delete</v-icon>
                        </v-btn>
                        <span>Delete</span>
                    </v-tooltip>
                </td>
            </template>
        </data-table>
        </div>
    </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js"></script>


<script>

import api from '@/common/api.services' 
import pdf from 'vue-pdf'


export default {
  
 data(){
        return{
            cari: '',
            headers: [
                { text: 'Nama Obat', value: 'Nama Obat' },
                { text: 'Gambar', value: 'Gambar' },
                { text: 'Harga Jual', value: 'Harga Jual' },
                { text: 'Harga Beli', value: 'Harga Beli' },
                { text: 'Stok', value: 'Stok' },
                { text: 'Aksi', value: 'Aksi' },

            ],
            items:[],
            datas: [],

            breadItems:[
                {
                    text: 'Dashboard',
                    disabled: false,
                    href: '/admin/dashboard'
                },
                {
                    text: 'Content',
                    disabled: true,
                    href: '/admin/content'
                },
            ]
        }
    },
    created(){
      // api.getApi(`/datacontent/${ this.$auth.getUser()}`)
      api.getApi('/obat/read.php')
      .then(r=>{
        this.datas = r.data.data
        console.log(r)
      }).catch((e)=>{
        console.log(e)
      })
    },
    components:{
        DataTable : () => import('@/components/admin/DataTable.vue'),
        pdf
    },
    methods:{
         del(val){
        console.log("hapus")
        api.deleteApi('/content',val.id)
        .then(
          this.getAll()
        )
        .catch((ex)=>
          console.log(ex)
        )
      },
      getAll(){
      // api.getApi(`/datacontent/${ this.$auth.getUser()}`)
        api.getApi('/obat/read.php')
        .then(r=>{
          this.datas = r.data.data
          // this.datas = r.data
          console.log(r)
        }).catch((e)=>{
          console.log(e)
        })
      },
      getPdf(img){
        console.log(img)
        api.getApi('/getPdf?img='+img)
        .then(function(r){
          var url = r.config.url
          console.log(url)
          window.open(url)
        })
      }
    }
}
</script>

<style>
.nameOfTheClass {
   width: 1000px;
   height: 300px;
}

</style>
