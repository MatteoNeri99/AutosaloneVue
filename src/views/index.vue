<script>
import axios from 'axios';
import { store } from '../store.js';
import MainCardAuto from '../components/MainComponents/MainCardAuto.vue';


export default{
  components:{
    MainCardAuto,
  },

  data(){
    
    return{
      store,
      nome:'',
      marca:'',
      km:'',
      nuovaUsata:'',
      prezzo:'',
      carburante:''



    }
  },methods: {
    getAuto(){
      axios.get('http://127.0.0.1:8000/api/auto', {
    params: {
      marca : this.marca ,
      modello : this.nome,
      km : this.km,
      nuova : this.nuovaUsata,
      prezzo : this.prezzo,
      carburante_id : this.carburante
      
    }
    })
    .then( (response) =>  {
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

  <main>

    <div class="ricerca">

      <label  for="marca">Marca</label>
      <input type="text" v-model="marca" name="marca" id="marca" placeholder="Marca...">

      <label  for="modello">Modello</label>
      <input type="text" v-model="nome" name="modello" id="modello" placeholder="Modello...">

      <label for="carburante">Carburante</label>
      <select name="carburante" id="" v-model="carburante" >
        <option value="">Tutti</option>
        <option value="1">Benzina</option>
        <option value="2" >Diesel</option>
        <option value="6">Ibrido Benzina</option>
        <option value="7">Ibrido Diesel</option>
        <option value="3" >Gpl</option>
        <option value="4">Metano</option>
        <option value="5">Elettrica</option>

      </select>

      <label  for="km">Km max</label>
      <input type="number" v-model="km" name="km" placeholder="100000...">

      <label  for="prezzo">Prezzo max</label>
      <input type="number" v-model="prezzo" name="prezzo" placeholder="5000...">

      <button @click="getAuto">Cerca</button>
    
    </div>
    
    <div class="index">

      <div class="flex">

        <h1>Le Nostre Auto</h1>

        <select class="condizione" name="condizione" id="condizione-select" v-model="nuovaUsata"  @change="getAuto">
          <option value="">Tutte le auto</option>
          <option :value="false" >Nuove</option>
          <option :value="true">Usate</option>
        </select>

      </div>

      <hr>
      
      <MainCardAuto :auto='store.auto'/>

    </div>
    
   
  </main>

  

</template>

<style scoped>
main{
  color:#FFFFFF;
  display: flex;
  max-width: 1200px;
  padding-top:10rem ;

  h1{
    font-size: 2.5rem;
    text-transform: uppercase;

  }

  hr{
    width: 1170px;
    margin-bottom: 2rem;

  }


  .condizione{
    margin-right: 30px;
    background-color: #030303; 
    color: white;
    font-size: 1.5rem;
    border-color: #D32F2F;
    padding-left: 1rem;
    padding-right: 1rem;
    align-self: center;
    

  }

  .index{
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .flex{
    max-width: 1200px;
    display: flex;
    justify-content:space-between;
    margin-bottom: 2rem;
  }


}

.ricerca{
  padding:8rem 3rem;
  color: #FFFFFF;
  font-size: 1.2rem;

  input{
    width: 300px;
    background-color: #030303;  
    border-color: #D32F2F;
    padding: 0.7rem;
    color: #FFFFFF;
    margin-bottom: 0.9rem;
  }

  select{

    width: 300px;
    background-color: #030303; 
    border-color: #D32F2F;
    padding: 0.5rem;
    color: #FFFFFF;
    margin-bottom: 0.9rem;

  }

  button{
    width: 90px;
    background-color: #030303; 
    border-color: #D32F2F;
    color: #FFFFFF;
    padding: 0.5rem;
  }
}

</style>