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
      carburante:'',
      currentPage: 1, // Pagina iniziale
      lastPage: 1, // Ultima pagina



    }
  },methods: {
    getAuto(page = 1) {
      axios.get('http://127.0.0.1:8000/api/auto', {
        params: {
          marca: this.marca,
          modello: this.nome,
          km: this.km,
          nuova: this.nuovaUsata,
          prezzo: this.prezzo,
          carburante_id: this.carburante,
          page: page // Passa il numero della pagina
        }
      })
      .then((response) => {
        store.auto = response.data.data; 
        this.currentPage = response.data.current_page; 
        this.lastPage = response.data.last_page; 
        this.total = response.data.total; 
        console.log(this.autoList);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        // Always executed
      });
    },changePage(page) {
      if (page >= 1 && page <= this.lastPage) {
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
        this.getAuto(page); 
      }
    }
  },created(){
    this.getAuto();
  }
}

</script>


<template>

  <main>

    <div class="ricerca">

      <h2>Cerca per :</h2>

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
  <div class="pagination">
    <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">Indietro</button>

    <span>Pagina {{ currentPage }} di {{ lastPage }}</span>

    <button @click="changePage(currentPage + 1)" :disabled="currentPage === lastPage">Avanti</button>
  </div>
  

</template>

<style scoped>
main{
  color:#FFFFFF;
  display: flex;
  max-width: 1200px;
  padding-top:10rem ;
  margin-bottom: 3rem;

  h1{
    font-size: 2.5rem;
    text-transform: uppercase;
    font-weight: bold;

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

.pagination{
  justify-self: center;
  color: white;
  margin-bottom: 2rem;

  button{
    background-color: #FFEB3B;
    padding: 1rem;
    font-weight: bold;
    font-size: 1.3rem;
    border-radius: 20px;

  }

  span{
    margin:0 1rem
  }
}

.ricerca{
  padding:8rem 3rem;
  color: #FFFFFF;
  font-size: 1.2rem;

  h2{
    margin-bottom: 1rem;
    font-weight: bold;
  }

  input{
    width: 300px;
    background-color: #030303;  
    border: 2px solid #D32F2F;
    padding: 0.7rem;
    color: #FFFFFF;
    margin-bottom: 0.9rem;
  }

  select{

    width: 300px;
    background-color: #030303; 
    border: 2px solid #D32F2F;
    padding: 0.7rem;
    color: #FFFFFF;
    margin-bottom: 0.9rem;

  }

  button{
    width: 90px;
    background-color: #030303; 
    border: 2px solid #D32F2F;
    color: #FFFFFF;
    padding: 0.5rem;
  }
}

/* Solo per dispositivi mobili e tablet */
@media screen and (max-width: 1024px) {

  main {
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    padding-top: 10rem;
    margin-bottom: 3rem;
    justify-content: center;

    h1 {
      font-size: 1.7rem;
      text-transform: uppercase;
      font-weight: bold;
      text-align: center;
    }

    hr {
      width: 90%;
      margin: 0 auto;
      margin-bottom: 2rem;
    }

    .condizione {
      background-color: #030303;
      color: white;
      font-size: 1.5rem;
      border-color: #D32F2F;
      padding-left: 1rem;
      padding-right: 1rem;
      align-self: center;
      margin-top: 1rem;
      margin-left: 1rem;
    }

    .index {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .flex {
      max-width: 1200px;
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;
    }
  }

  .ricerca {
    padding: 2rem;
    color: #FFFFFF;
    font-size: 1.2rem;

    h2 {
      margin-bottom: 1rem;
      font-weight: bold;
    }

    input {
      width: 300px;
      background-color: #030303;
      border: 2px solid #D32F2F;
      padding: 0.7rem;
      color: #FFFFFF;
      margin-bottom: 0.9rem;
    }

    select {
      width: 300px;
      background-color: #030303;
      border: 2px solid #D32F2F;
      padding: 0.7rem;
      color: #FFFFFF;
      margin-bottom: 0.9rem;
    }

    button {
      width: 90px;
      background-color: #030303;
      border: 2px solid #D32F2F;
      color: #FFFFFF;
      padding: 0.5rem;
    }
  }
}


</style>