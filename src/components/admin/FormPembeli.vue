<template>
    <div>
        <v-card>
            <v-card-title>
                <span class="headline">{{ title }}</span>
            </v-card-title>
            <v-form>
            <v-card-text>
                    <v-text-field label="Nama Pembeli" v-model="mutableContent.nama_pembeli"></v-text-field>                 
                    <v-text-field label="Alamat" v-model="mutableContent.alamat"></v-text-field>
                    <v-text-field label="Nomor HP" v-model="mutableContent.no_hp"></v-text-field>
                     <v-autocomplete v-model="mutableContent.jenis_kelamin" :items="itemss" label="Jenis Kelamin"></v-autocomplete>
                     <v-date-picker label="Tanggal Lahir" v-model="mutableContent.tanggal_lahir"></v-date-picker>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success" @click="action">Save</v-btn>
                <v-btn color="warning" to="/admin/daftarPembeli">Cancel</v-btn>
            </v-card-actions>
            </v-form>
        </v-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            'mutableContent' : this.content,
            selectedFile : null,
            itemss: ['Laki-Laki', 'Perempuan'],
        }
    },
    props:[
        'title',
        'content',
        'action'
    ],
    methods:{
        upload(e){
            let img = e.target.files[0]
            let fd = new FormData()

            fd.append('gambar_obat',img)
        },
        onFilePicked(e){
            const files = e.target.files
            if(files[0] !==undefined){
                this.$root.imageName = files[0].name
                if(this.$root.imageName.lastIndexOf('.')<=0){
                    return
                }
                const fr = new FileReader()
                fr.readAsDataURL(files[0])
                fr.addEventListener('load',()=>{
                    this.$root.imageUrl = fr.result
                    this.$root.imageFile = files[0]
                })
            } else{
                this.$root.imageName='';
                this.$root.imageFile='';
                this.$root.imageUrl='';
            }
        },
        imageChanged(e){
            console.log(e.target.files[0])
            var fileReader = new FileReader()
            fileReader.readAsDataURL(e.target.files[0])
            fileReader.onload = (e) => {
                this.mutableContent.gambar_obat = e.target.result
            }
            // console.log(this.mutableContent
        },
    }
}
</script>

<style>

</style>
