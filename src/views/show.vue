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

 
    <MainAutoShow :id = 'id'/>

  
  

 
</template>

<style scoped>


</style>