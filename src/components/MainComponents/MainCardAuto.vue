<script>
import { store } from '../../store';
import MainAutoEl from '../MainComponents/MainAutoEl.vue';
export default{
    components:{
        MainAutoEl
    },

  data(){
    return{
        store,
        

    }
  },props:{
      auto:{
        type:Object,
        required:true,
        
      }   
    }
}

</script>

<template>

    

    <div>

        <article v-for="auto in auto">
        <MainAutoEl :auto='auto'/>
        </article>

    </div>
    
  
</template>

<style scoped>
article{
    margin-bottom: 2rem;
    width: calc((100% / 3) - 2rem);
    margin-right: 2rem;
    background-color:  #252525;
    border: transparent;
    border-radius: 10px;
}

div{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

}



</style>