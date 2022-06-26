import Vue from 'vue';
export const EventBus = new Vue({
  data(){
    return{
      edit:{

      }
    }
  },
  methods:{
    editGet(val){
      this.edit=val
    }
  }
});
