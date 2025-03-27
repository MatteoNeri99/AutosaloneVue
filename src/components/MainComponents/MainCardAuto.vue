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

    <h1>Card auto</h1>

    <div class="container">

        <article v-for="auto in auto">
        <MainAutoEl :auto='auto'/>

        <a>
            <router-link :to="{ name: 'auto-dettagli', params: { id: auto.id } }" >Mostra dettagli</router-link>
        </a>
        </article>

    </div>
    
  
</template>

<style scoped>
article{
    margin-bottom: 1rem;
}

div{
    width: 700px;
    margin: 0 auto;
}



</style>