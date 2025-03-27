<script>
import axios from 'axios';
export default{
  props:['id'],

  data(){
    return{
      auto:{},
      currentIndex: 0,
      

    }
  },methods:{
        getAuto(){
          axios.get(`http://127.0.0.1:8000/api/auto/${this.id}`)
        .then((response) => {
          this.auto = response.data;
          console.log(response.data)

        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          // always executed
        });  

      },
      
    },created(){
        this.getAuto();
         
    },
}

</script>

<template>
   <div class="carousel-container">
      <p>{{ auto.marca }}</p>
      <p>{{ auto.modello }}</p>

    </div>
</template>

<style>

</style>