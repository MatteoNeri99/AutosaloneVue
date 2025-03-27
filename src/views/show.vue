<script>
import MainAutoShow from '../components/MainComponents/MainAutoShow.vue';

export default{
  props:['id'],
    components:{
        MainAutoShow
    },

  data(){
    return{

    }
  }
}

</script>

<template>
  <h1>sho</h1>
  <MainAutoShow :id = 'id'/>

  <a>
      <router-link :to="{ name: 'auto'}" >Torna ad auto</router-link>
  </a>
</template>

<style>

</style>