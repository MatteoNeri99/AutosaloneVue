<script>
import axios from 'axios';
export default{

  data(){
    
    return{
      autoList: [], 

    }
  },methods: {
    
    getUltimeAuto() {
      axios.get('http://127.0.0.1:8000/api/ultime-auto') 
        .then(response => {
          this.autoList = response.data; 
          console.log(this.autoList)
        })
        .catch(error => {
          console.error("Errore nel recupero delle auto:", error);
        });
    },
    formatNumber(value) {
      return value.toLocaleString('it-IT'); // Formatta il numero con i puntini
    }
  },created() {
    this.getUltimeAuto();
  },
}

</script>

<template>
  <main>
    <div class="jumbotron">

      <img src="../../public/img/34EB6D90-9352-41FC-92AF-3753AC2DF978.jpg" alt="">

    </div>

    <div class="titolo">

      <h1>- Autosalone Di Fulvio Giacomo -</h1>

    </div>

    <h2>Ultimi arrivi</h2>

    <div class="ultimeAuto">

      

      <article  v-for="auto in autoList" :key="auto.id">
    
        <div class="img">
          <p class="prezzo">{{ formatNumber(auto.prezzo)}} €</p>
          <img class="imgAuto" :src="auto.immagini[0]" alt="Auto" />

        </div>



        <div class="contenitore">

          <h1>{{ auto.marca }} {{ auto.modello }}</h1>

          <div class="icone">

            <div class="icone">
              <img src="../../../public/img/date-svgrepo-com (1).svg" alt="">
              <p>{{ auto.anno }}</p> 
            </div>

            <div class="icone">
              <img class="engine" src="../../../public/img/engine-svgrepo-com (1).svg" alt="">
              <p>{{ formatNumber(auto.cilindrata) }}</p>
            </div>

            <div class="icone">
              <img class="km" src="../../../public/img/speed-svgrepo-com (6).svg" alt="">
              <p>{{ formatNumber(auto.km) }}</p> 
            </div>
        
      
          </div>

          <h4> Carburante: {{ auto.carburante.nome }}</h4>
          <p> Emissioni: {{ auto.emissioni }}</p>
          <div>
            <div class="button">
              <router-link :to="{ name: 'auto-dettagli', params: { id: auto.id } }" >Mostra dettagli</router-link>
            </div>

          </div>
          
        </div>
      </article>

      <div class="button">
        <router-link :to="{ name: 'auto'}" >Mostra tutte le auto</router-link>
      </div>

    </div>

    <div class="servizi">

      <div class="serviziTitolo">
        <h2>I nostri servizi</h2>
      </div>

      <div class="meccanico">

        <h3><img src="../../public/img/wrench-2-svgrepo-com.svg" alt=""> Meccanico</h3>

        <div class="flex">
          
          <p>"Servizio meccanico completo: riparazioni, manutenzione e diagnosi con professionalità e rapidità, per garantire la sicurezza e le performance del tuo veicolo."</p>

        </div>
        

      </div>

      <div class="carrozzeria">

        <h3><img src="../../public/img/spray-can-svgrepo-com.svg" alt=""> Carrozzeria</h3>

        <div class="flex">
          
          <p>"Servizio carrozzeria professionale: riparazioni, verniciatura e restauro, per restituire al tuo veicolo l'aspetto originale e la massima qualità."</p>

        </div>

      </div>

    </div>

  </main>
  
  
</template>

<style scoped>

main {
  background-color: #f5f5f5;
}

main h2 {
  text-align: center;
  font-weight: bold;
  font-size: 2.7rem;
  margin-top: 2rem;
  text-transform: uppercase;
}

.jumbotron {
  width: 100%;
  height: 670px;
}

.jumbotron img {
  width: 100%;
  height: 670px;
  object-fit: cover;
  object-position: top;
}

.titolo {
  color: white;
  padding: 2rem;
  background-color: #030303;
  box-shadow: 0px 7px 4px #D32F2F, 0px 4px 1px #FFEB3B inset;
}

.titolo h1 {
  text-align: center;
  font-size: 2.5rem;
  text-transform: uppercase;
  word-spacing: 1rem;
}

.servizi {
  opacity: 0.8;
  background-image: url('../../public/img/pexels-cottonbro-7019377.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: black;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 15rem;
  justify-content: space-around;
}

.servizi .serviziTitolo {
  width: 100%;
  margin-bottom: 2rem;
  color: white;
}

.meccanico,
.carrozzeria {
  background-color: white;
  box-shadow: 5px 5px 10px black;
  width: 400px;
  height: 300px;
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.meccanico h3,
.carrozzeria h3 {
  text-align: center;
  font-size: 3rem;
  align-items: center;
  font-weight: bold;
}

.meccanico img,
.carrozzeria img {
  width: 35px;
}

.meccanico p,
.carrozzeria p {
  font-size: 1.3rem;
  text-align: center;
  font-weight: bold;
}

.meccanico .flex,
.carrozzeria .flex {
  display: flex;
}

.contenitore {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
}

.contenitore .button {
  margin-top: 1rem;
}

.contenitore h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.contenitore a {
  color: #FFFFFF;
  text-decoration: none;
  width: 150px;
  text-align: center;
  background-color: #D32F2F;
  padding: 0.3rem;
}

.contenitore .icone {
  display: flex;
  align-items: center;
}

.contenitore .icone .engine {
  width: 35px;
}

.contenitore .icone .km {
  width: 25px;
}

.contenitore .icone img {
  width: 30px;
  margin-right: 0.1rem;
  margin-bottom: 1rem;
}

.contenitore .icone p {
  align-self: center;
  margin-bottom: 0.9rem;
}

.contenitore p {
  margin-right: 0.7rem;
}

.img {
  position: relative;
}

.img .prezzo {
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 1.7rem;
  padding: 0.2rem 0.6rem;
  background-color: #D32F2F;
}

img {
  width: 100%;
 
}

.imgAuto {
  border-bottom: 2px solid #FFEB3B;
  border-radius: 10px 10px 0 0;
}

article {
  margin-bottom: 2rem;
  width: calc((100% / 3) - 2rem);
  margin-right: 2rem;
  background-color: #252525;
  border: transparent;
  border-radius: 10px;
  color: white;
  box-shadow: 7px 7px 10px black;
}

.ultimeAuto {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  background-color: #f5f5f5;
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.ultimeAuto .button {
  margin: 0 auto;
  margin-top: 3rem;
}

.ultimeAuto a {
  color: #FFFFFF;
  text-decoration: none;
  width: 150px;
  text-align: center;
  background-color: #D32F2F;
  padding: 0.7rem;
  box-shadow: 5px 5px 10px black;
}

/* Responsive Design */
@media screen and (max-width: 1024px) { /* Tablet */
  .servizi {
    padding: 1rem 4rem;
  }

  .titolo h1 {
    font-size: 2.2rem;
    word-spacing: 0;
  }

  .meccanico,
  .carrozzeria {
    width: 400px;
    height: 280px;
  }


  .meccanico h3,
  .carrozzeria h3 {
    font-size: 2rem;
  }

  article {
    width: 100% ;
    margin-right: 0;
    
  }

  .ultimeAuto {
    width: 100%;
    padding: 1rem;
  }
}

@media screen and (max-width: 768px) { /* Mobile */

  main h2{
    font-size: 2rem;
  }

  .jumbotron {
    width: 100%; /* dimensione visibile */
    height: 360px; /* altezza del pezzo che vuoi vedere */
    overflow: hidden;
    position: relative;
  }

  .jumbotron img {
    position: absolute;
    top: 0; /* spinge l'immagine verso il basso */
    width: 100%; /* oppure una larghezza fissa */
  }

  .titolo h1 {
    font-size: 1.5rem;
    word-spacing: 0;
  }

  .servizi {
    padding: 1rem;
    flex-direction: column;
    align-items: center;
  }

  .meccanico,
  .carrozzeria {
    width: 90%;
    height: auto;
  }

  article {
    width: 100%;
    margin-right: 0;
  }

  .ultimeAuto {
    flex-direction: column;
    align-items: center;
  }
}

</style>