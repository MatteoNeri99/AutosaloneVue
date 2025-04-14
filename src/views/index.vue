<script>
import axios from 'axios';
import { store } from '../store.js';
import MainCardAuto from '../components/MainComponents/MainCardAuto.vue';

export default {
  components: {
    MainCardAuto,
  },

  data() {
    return {
      store,
      nome: '',
      marca: '',
      km: '',
      nuovaUsata: '',
      prezzo: '',
      carburante: '',
      currentPage: 1,
      lastPage: 1,
      loading: true,
    };
  },

  methods: {
      getAuto(page = 1) {
      this.loading = true;
      const startTime = Date.now();

      axios.get('https://autosalone-production.up.railway.app/api/auto', {
        params: {
          marca: this.marca,
          modello: this.nome,
          km: this.km,
          nuova: this.nuovaUsata,
          prezzo: this.prezzo,
          carburante_id: this.carburante,
          page: page,
        },
      })
      .then((response) => {
        store.auto = response.data.data;
        this.currentPage = response.data.current_page;
        this.lastPage = response.data.last_page;
        this.total = response.data.total;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        const elapsed = Date.now() - startTime;
        const remaining = 1000 - elapsed;
        setTimeout(() => {
          this.loading = false;
        }, remaining > 0 ? remaining : 0);
      });
    },

    changePage(page) {
      if (page >= 1 && page <= this.lastPage) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.getAuto(page);
      }
    },
    
  },

  created() {
    this.getAuto();
  },
};
</script>


<template>

  <div v-if="loading" class="page-overlay">
    <div class="dot-loader">
      <span></span><span></span><span></span>
    </div>
  </div>


  <main>

    <div v-if="loading" class="loader-container">
      <div class="dot-loader">
        <span></span><span></span><span></span>
      </div>
    </div>

    <div class="ricerca">

      <h2>Cerca per :</h2>

      <label  for="marca">Marca</label>
      <input type="text" v-model="marca" name="marca" id="marca" placeholder="Marca...">

      <label  for="modello">Modello</label>
      <input type="text" v-model="nome" name="modello" id="modello" placeholder="Modello...">

      <label for="carburante">Carburante</label>

      <select name="carburante" id="carburante" v-model="carburante" >
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
/* animazione */
.page-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black; 
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dot-loader span {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin: 6px;
  background-color: #ffffff;
  border-radius: 50%;
  animation: bounce 1s infinite ease-in-out both;
}

.dot-loader span:nth-child(1) {
  animation-delay: -0.32s;
}
.dot-loader span:nth-child(2) {
  animation-delay: -0.16s;
}
.dot-loader span:nth-child(3) {
  animation-delay: 0s;
}

@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}

/* animazione */

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
    align-self: center;

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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-bottom: 2rem;
 

  button{
    background-color: #FFEB3B;
    border-color: transparent;
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

/* schermi medio-grandi */
@media screen and (min-width: 1024px) and (max-width: 1440px) {
  main {
    color: #FFFFFF;
    display: flex; 
    max-width: 1200px;
    padding: 9rem 0rem;
    margin: 0 auto;
    margin-bottom: 3rem;
    justify-content: space-between;
  }


  .ricerca {
    padding: 7rem 0rem;
    background-color: #030303;
    border-radius: 8px;
  }

  .index{
    max-width: 900px;
  }

  hr{
    width: 900px !important;
    margin-bottom: 2rem;

  }


  .index {
    width: 900px;
    margin-left: 2rem;
  }


  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin-bottom: 2rem;
  }

  .pagination button {
    background-color: #FFEB3B;
    border-color: transparent;
    padding: 1rem;
    font-weight: bold;
    font-size: 1.3rem;
    border-radius: 20px;
  }

  .pagination span {
    margin: 0 1rem;
  }

 
  .ricerca input,
  .ricerca select {
    width: 270px ; 
    background-color: #030303;
    border: 2px solid #D32F2F;
    padding: 0.7rem;
    color: #FFFFFF;
    margin-bottom: 0.9rem;
    font-size: 1rem;
  }


  .ricerca button {
    width: 100%;
    background-color: #030303;
    border: 2px solid #D32F2F;
    color: #FFFFFF;
    padding: 0.7rem;
    font-size: 1rem;
    border-radius: 5px;
  }
}



/* tablet */
@media screen and (max-width: 1024px) {
  main {
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    max-width: 100%; /* Utilizza tutta la larghezza disponibile */
    padding-top: 10rem;
    margin: 0 auto;
    margin-bottom: 3rem;
    justify-content: center;
    align-items: center; /* Centra il contenuto orizzontalmente */

    h1 {
      font-size: 1rem;
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
      width: 100%; /* Fa sì che gli elementi flessibili si adattino alla larghezza */
      display: flex;
      flex-direction: column;
      align-items: start;
      margin-bottom: 2rem;
    }
  }

  .ricerca {
    width: 100%; /* Occupa tutta la larghezza disponibile */
    padding: 2rem;
    color: #FFFFFF;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem; /* Aggiungi spazio tra gli input */

    h2 {
      margin-bottom: 1rem;
      font-weight: bold;
    }

    input, select {
      width: 100%;
      background-color: #030303;
      border: 2px solid #D32F2F;
      padding: 0.7rem;
      color: #FFFFFF;
      margin-bottom: 0.9rem;
      display: block;
      font-size: 1rem;
    }

    button {
      background-color: #030303;
      border: 2px solid #D32F2F;
      color: #FFFFFF;
      padding: 0.7rem;
      font-size: 1rem;
      border-radius: 5px;
    }
  }
}


/* mobile*/
@media screen and (max-width: 768px) {
  main {
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    max-width: 100%;
    padding-top: 10rem;
    margin-bottom: 3rem;
    justify-content: center;
  }

  main h1 {
    font-size: 1.7rem;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
  }

  main hr {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 2rem;
  }

  main .condizione {
    background-color: #030303;
    color: white;
    font-size: 1.2rem;
    border-color: #D32F2F;
    padding: 0 1rem;
    align-self: center;
    margin: 1rem 1rem 0 1rem;
  }

  main .index {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  main .flex {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }

  .ricerca {
    padding: 1.5rem;
    color: #FFFFFF;
    font-size: 1rem;
  }

  .ricerca h2 {
    margin-bottom: 1rem;
    font-weight: bold;
  }

  .ricerca input,
  .ricerca select {
    width: 100%;
    background-color: #030303;
    border: 2px solid #D32F2F;
    padding: 0.7rem;
    color: #FFFFFF;
    margin-bottom: 0.9rem;
  }

  .ricerca button {
    width: 100%;
    background-color: #030303;
    border: 2px solid #D32F2F;
    color: #FFFFFF;
    padding: 0.5rem;
  }
}

</style>