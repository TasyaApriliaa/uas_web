<template>
    <div>
        <v-btn color="primary" @click="print('tampil-print')">
            <v-icon>print   </v-icon>
            Print 
        </v-btn>
          <v-autocomplete @change="kirim" 
        v-model="bulan"
        :items="prodi"
        :label="'Pilih Bulan'"
      />
        <v-text-field label="Input Tahun" @change="kirim" v-model="tahun"></v-text-field>
   
        <div id="tampil-print">
            <v-card>
                <p align="center" ><h1>Daftar Pasien Tergigit Hewan Rabies</h1>
                <br>

            <table border="1">
                    
                <tr>
                    <th>Nama Pasien</th>
                    <th>Umur Pasien</th>
                    <th>Jenis Kelamin</th>
                    <th>Alamat Pasien</th>
                    <th>Hewan Yang Menggigit</th>
                    <th>Lokasi Gigitan</th>
                    <th>Tanggal Tergigit</th>
                    <th>Status Hewan</th>
                    <th>Detail Kejadian</th>
                    <th>Jenis Penanggulangan</th>
                </tr>
                <tr v-for="item in dataall" 
                :key=item.id
                >
                    <td>{{item.namapasien}}</td>
                    <td>{{item.umur}}</td>
                    <td>{{item.jeniskelamin}}</td>
                    <td>{{item.alamat}}</td>
                    <td>{{item.hewan}}</td>
                    <td>{{item.lokasi}}</td>
                    <td>{{item.tanggaltergigit}}</td>
                    <td>{{item.status}}</td>
                    <td>{{item.description}}</td>
                    <td>{{item.aksi}}</td>

                </tr>
            </table>
            </v-card>
        </div>
    </div>
</template>

<script>
import api from "@/common/api.services";

export default {
    data(){
        return{
            items:[],
            datas: [],
             prodi:['1','2','3','4','5','6','7','8','9','10','11','12'],
             tahun:[],
             dataall:[],
                kode:"",
            

            breadItems: [
                {
                    text: 'Dashboard',
                    disable: false,
                    href: '/admin/dashboard'
                },
                {
                    text: 'ti',
                    disable: false,
                    href: '/kajur/ti'
                }
            ]
        }
    },

    created () {
        
    //   api.getApi('/allprodi')
    //   .then(r=>{
    //        r.data.forEach(item => {
    //            this.prodi.push({value:item.kode,text:item.nama_prodi})
    //        })
    //       console.log(r.data)
    //   }).catch((e)=>{
    //       console.log(e)
    //   });
    //   api.getApi('/content')
      api.getApi(`/datacontent/${ this.$auth.getUser()}`)
      .then(r=>{
           this.dataall = r.data
          console.log(r.data)
      }).catch((e)=>{
          console.log(e)
      });
    },
        components:{
    },
    methods: {
        print(el) {
            var restorepage = document.body.innerHTML;
            var printcontent = document.getElementById(el).innerHTML;
            document.body.innerHTML = printcontent;
            window.print();
            document.body.innerHTML = restorepage;

        },
        kirim(){
            // api.getApi('/content/'+this.kode)
            api.getApi(`/reportpuskesmas/${ this.$auth.getUser()}/`+this.bulan +`/`+ this.tahun)

            // api.getApi('/report/'+this.bulan +'/'+ this.tahun)
            .then(
               this.getAll(),
            )
            console.log(this.kode)
        },
       
        getAll(){
            api.getApi(`/reportpuskesmas/${ this.$auth.getUser()}/`+this.bulan +`/`+ this.tahun)
            // api.getApi('/content')
                .then(r=>{
                    this.dataall = r.data
                    console.log(r)
                }).catch((e)=>{
                    console.log(e)
            })
        } ,
    },
    computed:{
        filterdata(){
            let val = this;
            return val.dataall.filter(post=>{
                let sameprodi = post.kode_jur
                .toLowerCase()
                .includes(val.kode.toLowerCase());
                return sameprodi;
            });

        }
    }
}
</script>

<style>
td{
    padding: 0 10px
}
</style>
