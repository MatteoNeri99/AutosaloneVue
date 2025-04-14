<script>
import axios from 'axios';
export default{
  props:['id'],

  data(){
    return{
      auto:{},
      currentIndex: 0,
      form: { name: '', email: '', message: '' },
      

    }
  },methods:{
        getAuto(){
          axios.get(`https://autosalone-production.up.railway.app//api/auto/${this.id}`)
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
      imgIncrement(){
        if (this.auto.immagini && this.currentIndex < this.auto.immagini.length - 1) {
          this.currentIndex += 1; // Cambia immagine se non sei all'ultima
        } else {
          this.currentIndex = 0; // Torna alla prima immagine se sei all'ultima
        }

      },
      imgDecrement(){
        if (this.auto.immagini && this.currentIndex > 0) {
          this.currentIndex -= 1; // Cambia immagine se non sei alla prima
        } else {
          this.currentIndex = this.auto.immagini.length - 1; // Torna all'ultima immagine
        }

      },
      formatNumber(value) {
        return value.toLocaleString('it-IT'); // Formatta il numero con i puntini
      },
      async sendMessage() {
      try {
        const response = await axios.post('https://autosalone-production.up.railway.app//api/messages', this.form);
        alert(response.data.message);
        this.form = {
        nome: '',
        email: '',
        messaggio: ''
    };
      } catch (error) {
        console.error("Errore nell'invio del messaggio", error);
      }
    }
      
    },created(){
        this.getAuto();
         
    },
}

</script>

<template>
  <div class="flex">
    <div class="carosello">
      <h1>{{ auto.marca }} {{ auto.modello }}</h1>

      <button class="indietro" @click="imgIncrement"><img src="/img/back-svgrepo-com.svg" alt=""></button>
      <img  v-if="auto.immagini && auto.immagini.length" :src="auto.immagini[currentIndex]" class="car-img" />
      <button class="avanti" @click="imgDecrement"><img src="/img/next-svgrepo-com (3).svg" alt=""></button>

      <div class="miniature-gallery">
        <div v-for="(img, index) in auto.immagini" :key="index" @click="currentIndex = index" class="miniature">
          <img :src="img" class="miniature-img" />
        </div>
      </div>

    </div>

    <div class="caratteristiche">
        <h2>Scheda tecnica</h2>
       
        <p class="car-p">Immatricolazione : <span >{{ auto.anno }}</span></p>
        <hr>
        <p class="car-p">Carburante : <span>{{ auto.carburante_nome }}</span></p>
        <hr>
        <p class="car-p">Chilometri : <span>{{formatNumber( auto.km) }}</span></p>
        <hr>
        <p class="car-p">Tipologia : <span>{{ auto.tipologia_nome }}</span></p>
        <hr>
        <p class="car-p">Cilindrata : <span>{{ auto.cilindrata }}</span></p>
        <hr>
        <p class="car-p">Potenza : <span>{{ auto.cavalli }}cv</span></p>
        <hr>
        <p class="car-p">Cambio : <span>{{ auto.cambio }}</span></p>
        <hr>
        <p class="car-p">Emissionio <span>{{ auto.emissioni }}</span></p>
        <hr>
        <p class="car-p">Numero porte : <span>{{ auto.porte }}</span></p>
        <hr>
        <p class="car-p">Numero Posti : <span>{{ auto.posti }}</span></p>
        <hr>
        <p class="car-p">Colore : <span>{{ auto.colore }}</span></p>

        <p class="prezzo">{{ formatNumber(auto.prezzo )}} €</p>
    </div>

  </div>

  <div class="descrizione">

    <div class="container">

      <h1>Maggiori dettagli</h1>
      <p>
        {{ auto.descrizione }}
      </p>
    </div>
     
    <form @submit.prevent="sendMessage">
      <h1>Inviaci un messaggio</h1>
      <p>Hai trovato l’auto perfetta o vuoi maggiori informazioni? <br>
        Compila il nostro modulo e il nostro team sarà felice di rispondere a tutte le tue domande! Che tu stia cercando un'auto nuova, usata o un consiglio personalizzato, siamo qui per aiutarti. Contattaci oggi stesso e ti risponderemo al più presto!</p>
      <input type="text" v-model="form.name" placeholder="Nome" required />
      <input type="email" v-model="form.email" placeholder="Email" required />
      <textarea v-model="form.message" placeholder="Messaggio" required></textarea>
      <button type="submit">Invia</button>
    </form>

  </div>
 
</template>

<style scoped>

.flex {
  display: flex;
  max-width: 1400px;
  justify-content: center; 
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 5rem auto 0;
  padding: 0 1rem;
}

.caratteristiche {
  color: white;
  margin-top: 6.6rem;
  width: 40%;
  max-width: 500px;
  background-color: #252525;
  padding: 1.5rem;
  border-radius: 20px;
  border: 2px solid #D32F2F;
  position: relative;

  h2 {
    font-weight: bold;
    font-size: 2rem;
  }

  span {
    font-weight: bold;
  }

  .car-p {
    font-size: 1.4rem;
    margin: 0.5rem 0;
    text-transform: uppercase;
  }

  .prezzo {
    text-align: center;
    background-color: #D32F2F;
    width: 200px;
    padding: 0.5rem;
    font-size: 1.8rem;
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: 0 0 15px 0;
  }
}

.carosello {
  color: white;
  margin-top: 2rem;
  position: relative;
  width: 60%;
  max-width: 800px;
  margin-right: 3rem;

  h1 {
    font-weight: bold;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  .car-img {
    width: 100%;
    border-radius: 20px;
    object-fit: cover; 
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    border: 2px solid white;
  }

  .miniature-gallery {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
    overflow-x: auto;
  }

  .miniature {
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 8px;
    transition: border-color 0.3s ease;
  }

  .miniature:hover {
    border-color: #D32F2F; 
  }

  .miniature-img {
    width: 100px;
    height: auto;
    object-fit: cover;
    border-radius: 5px;
    transition: transform 0.3s ease;
  }

  .avanti,
  .indietro {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 7px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    border: none;
    cursor: pointer;
    z-index: 10;
  }

  .avanti img,
  .indietro img {
    width: 40px;
  }

  .avanti {
    right: 5px;
  }

  .indietro {
    left: 5px;
  }

  .avanti:hover,
  .indietro:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
}

.descrizione {
  color: white;
  display: flex;
  max-width: 1400px;
  justify-content: center; 
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 5rem auto;
  padding: 0 1rem;

  h1 {
    font-weight: bold;
    margin-bottom: 1rem;
  }
 
  .container {
    width: 60%;
    max-width: 800px;
  }

  form {
    width: 35%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    margin-left: 3rem;
    color: white;
  }

  form p {
    margin-bottom: 2rem;
  }

  input,
  textarea {
    border: 1px solid #D32F2F;
    background-color: #252525;
    padding: 1rem;
    margin-bottom: 2rem;
    color: white;
    width: 100%;
  }

  button {
    width: 90px;
    background-color: #252525; 
    border-color: #D32F2F;
    color: #FFFFFF;
    padding: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #D32F2F;
  }
}


/* Responsive Design */

@media screen and (max-width: 1400px) and (min-width: 1024px) {

.flex {
  display: flex;
  max-width: 1200px;
  justify-content: center;
  align-items: flex-start;
  margin: 9rem auto 0;
  padding: 0 1rem;
}

.caratteristiche {
  color: white;
  margin-top: 6.3rem;
  width: 37%; /* Mantenuto il 40%, ma ridotto per adattarsi meglio */
  max-width: 450px; /* Ridotto il massimo per una maggiore compatibilità */
  background-color: #252525;
  padding: 1.2rem; /* Ridotto il padding */
  border-radius: 20px;
  border: 2px solid #D32F2F;
  position: relative;
}

.caratteristiche h2 {
  font-weight: bold;
  font-size: 1.8rem; /* Ridotto il font-size */
}

.car-p {
  font-size: 1.2rem; /* Ridotto il font-size */
}

.prezzo {
  text-align: center;
  background-color: #D32F2F;
  width: 180px; /* Ridotto per adattarsi meglio */
  padding: 0.4rem; /* Ridotto il padding */
  font-size: 1.5rem; /* Ridotto il font-size */
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 0 0 15px 0;
}

.carosello {
  color: white;
  margin-top: 2rem;
  position: relative;
  width: 55%;
  max-width: 700px; /* Ridotto per la larghezza del carosello */
  margin-right: 2rem; /* Ridotto il margine destro */
}

.carosello h1 {
  font-weight: bold;
  font-size: 2.2rem; /* Ridotto il font-size */
  margin-bottom: 1.5rem;
}

.carosello .car-img {
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  border: 2px solid white;
}

.miniature-gallery {
  display: flex;
  justify-content: center;
  gap: 8px; /* Ridotto il gap */
  margin-top: 8px;
  overflow-x: auto;
}

.miniature-img {
  width: 80px; /* Ridotto per la visualizzazione delle miniature */
  height: auto;
  object-fit: cover;
  border-radius: 5px;
  transition: transform 0.3s ease;
}

.avanti,
.indietro {
  width: 60px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 6px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  cursor: pointer;
  z-index: 10;
}

.avanti img,
.indietro img {
  width: 30px; /* Ridotto il dimensionamento delle frecce */
}

.avanti {
  right: 5px;
}

.indietro {
  left: 5px;
}

.avanti:hover,
.indietro:hover {
  background-color: rgba(0, 0, 0, 0.9);
}

.descrizione {
  color: white;
  display: flex;
  max-width: 1200px;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 7rem auto;
  padding: 0 3rem;
}

.descrizione h1 {
  font-weight: bold;
  margin-bottom: 1rem;
  font-size: 1.6rem; /* Ridotto il font-size */
}

.container {
  width: 60%;
  max-width: 700px; /* Ridotto per la container */
}

form {
  width: 35%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  color: white;
}

form p {
  margin-bottom: 1.5rem; /* Ridotto il margine inferiore */
}

input,
textarea {
  border: 1px solid #D32F2F;
  background-color: #252525;
  padding: 1rem;
  margin-bottom: 1.5rem; /* Ridotto il margine */
  color: white;
  width: 100%;
}

button {
  width: 100%; /* Il bottone ora occupa tutta la larghezza disponibile */
  background-color: #252525;
  border-color: #D32F2F;
  color: #FFFFFF;
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #D32F2F;
}
}


/* Tablet */
@media (max-width: 1024px) {
  .flex {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }

  .caratteristiche {
    width: 80%;
    max-width: 600px;
  }

  .carosello {
    width: 90%;
    margin-right: 0;
  }

  .miniature-gallery {
    margin-top: 15px;
  }

  .descrizione {
    width: 90%;
  }

  .container,
  form {
    max-width: 800px;
    width: 90% !important;
    margin-left: 0rem !important;
    max-width: 100%;
  }

  form {
    
    max-width: 800px !important;
    margin-left: 0;
    margin-top: 2rem;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .flex {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0;
  }

  .carosello button{
    padding: .5rem;
    width: 40px;
  }

  .carosello .avanti img,
  .carosello .indietro img {
    width: 20px;
  }

  

  .caratteristiche {
    width: 90%;
    height: 650px;
    margin-top: 2rem;
    padding: 1rem;
  }

  .carosello {
    width: 95%;
    margin: 0 auto;
  }

  .descrizione {
    width: 100%;
    margin-top: 2rem ;
    padding: 0;
    flex-direction: column;
  }

  .container,
  form {
    align-items: center;
    width: 90% !important;
    padding: 2rem;
    margin-left: 0rem !important;
    max-width: 100%;
  }



  .miniature-img {
    width: 80px;
  }


  .prezzo {
    width: 150px;
    font-size: 1.5rem;
  }

  input,
  textarea {
    padding: 0.8rem;
  }

}

</style>




