<script>
import axios from 'axios';
import { store } from '../store.js';
export default{

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
      console.log(response.data);
      store.auto=response
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
  <h1>Main</h1>
</template>

<style>

</style>