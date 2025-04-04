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
    box-shadow: 7px 7px 10px #252525;
}

div{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

}

@media screen and (max-width: 1024px) {
  article {
    margin-bottom: 2rem;
    width: 90%; /* Occupa tutta la larghezza disponibile */
    margin-right: 0; /* Rimuovi il margine destro */
    background-color: #252525;
    border: transparent;
    border-radius: 10px;
    box-shadow: 7px 7px 10px #252525;
  }

  div {
    width: 100%; /* Occupa tutta la larghezza disponibile */
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }
}



</style>