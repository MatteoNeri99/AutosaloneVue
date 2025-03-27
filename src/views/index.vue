<script>
import axios from 'axios';
import { store } from '../store.js';
import MainCardAuto from '../components/MainComponents/MainCardAuto.vue';
export default{
  components:{
    MainCardAuto
  },

  data(){
    
    return{
      store,

    }
  },methods:{
    getAuto(){
      axios.get('http://127.0.0.1:8000/api/auto', {
    params: {
      
    }
    })
    .then(function (response) {
      store.auto=response.data
      console.log(store.auto);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
    }
  },created(){
    this.getAuto();
  }
}

</script>


<template>
  
  <h1>indx</h1>

  <MainCardAuto :auto='store.auto'/>

</template>

<style>

</style>