<script>
import axios from 'axios';
export default{

  data(){
    return{
      form: { name: '', email: '', message: '' },
    }
  },methods:{
    async sendMessage() {
      try {
        const response = await axios.post('https://autosalone-production.up.railway.app/api/messages', this.form);
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
  }
}

</script>

<template>

  <main>
    <h1 class="titolo">I nostri contatti</h1>
    <div class="flex">

      

      <form @submit.prevent="sendMessage">

        <h1>Inviaci un messaggio</h1>
        <p>Hai trovato l’auto perfetta o vuoi maggiori informazioni? <br>
          Compila il nostro modulo e il nostro team sarà felice di rispondere a tutte le tue domande! Che tu stia cercando un'auto nuova, usata o un consiglio personalizzato, siamo qui per aiutarti. Contattaci oggi stesso e ti risponderemo al più presto!</p>
        <input type="text" v-model="form.name" placeholder="Nome" required />
        <input type="email" v-model="form.email" placeholder="Email" required />
        <textarea v-model="form.message" placeholder="Messaggio" required></textarea>
        <button type="submit">Invia</button>

      </form>

      <div class="map-container">

        <h1>Dove siamo?</h1>
        <p>Puoi trovarci in Via Piane, 20. <br> -66010 Fara Filiorum Petri</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2953.289463227177!2d14.18593947657567!3d42.250990641984544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1330537f504abfaf%3A0xeae8f80bc34f7f26!2sAutosalone%20Di%20Fulvio%20Giacomo!5e0!3m2!1sit!2sit!4v1743754355572!5m2!1sit!2sit" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>

    </div>

  </main>

  

  
</template>

<style scoped>

main{
  padding:10rem 15rem;
  color: black;
  background: linear-gradient(to right, #ffffff, #d3d3d3);
}

input::placeholder{
  color: black;
}
textarea::placeholder{
  color: black;
}

.titolo{
  font-weight: bold;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 4rem;
}

iframe{
  width: 700px;
  height: 500px;
}

.flex{
  display: flex;
  justify-content: space-around;

}

.map-container {
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}

h1{
  width: 100%;
}

form{
  display: flex;
  flex-direction: column;
  margin-right: 10rem;

}

p{
  margin-bottom: 2rem;
}

textarea,
input{
  margin-bottom:2rem;
  padding: 1.5rem;
  background-color:  #f5f5f5;
  border:2px solid #D32F2F;
}

button{
  color: black;
  margin-bottom:2rem;
  padding: 1.4rem;
  width: 180px;
  background-color:  #f5f5f5;
  border:2px solid #D32F2F;

}

@media screen and (min-width: 1024px) and (max-width: 1440px) {

main {
  padding: 10rem 4rem; /* Ridotto il padding per dare più spazio sugli schermi più piccoli */
  background-color: #f5f5f5;
}

.titolo {
  font-weight: bold;
  font-size: 2rem; /* Ridotto il font per adattarsi meglio */
  text-align: center;
  margin-bottom: 3rem;
}

iframe {
  width: 100%; /* Rende l'iframe responsive */
  max-width: 600px; /* Impostato un massimo per non espandersi troppo */
  height: 400px; /* Ridotto per adattarsi meglio */
  margin-bottom: 2rem; /* Spazio tra iframe e altri elementi */
}

.flex {
  display: flex;
  justify-content: space-between; /* Gli elementi saranno disposti uno accanto all'altro */
  flex-wrap: wrap; /* Consente agli elementi di andare a capo se non ci sta più spazio */
  gap: 1.5rem; /* Spazio tra gli elementi */
}

.map-container {
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}

h1 {
  width: 100%;
  font-size: 2rem; /* Ridotto per migliorare la leggibilità */
}

form {
  display: flex;
  flex-direction: column;
  margin-right: 4rem; /* Ridotto il margine destro per ottimizzare lo spazio */
}

p {
  margin-bottom: 1.5rem; /* Ridotto il margine inferiore */
}

textarea,
input {
  margin-bottom: 1.5rem; /* Ridotto il margine per adattarsi meglio */
  padding: 1.2rem; /* Ridotto il padding per non occupare troppo spazio */
  background-color: #f5f5f5;
  border: 2px solid #D32F2F;
  font-size: 1rem; /* Ridotto il font */
}

button {
  margin-bottom: 1.5rem; /* Ridotto il margine inferiore */
  padding: 1.2rem; /* Ridotto il padding */
  width: 150px; /* Larghezza ridotta per meglio adattarsi */
  background-color: #f5f5f5;
  border: 2px solid #D32F2F;
  font-size: 1rem; /* Ridotto il font */
}

.flex > * {
  flex: 1 1 45%; /* Ogni elemento si occupa del 45% della larghezza e va a capo se necessario */
}
}

@media (max-width: 1024px) {
  main {
    padding: 8rem 7rem;
  }

  .flex {
    flex-direction: column;
    align-items: center;
  }

  form {
    margin-right: 0;
    width: 100%;
  }

  .titolo {
    font-size: 2.5rem;
    text-align: left;
  }
}

/* MEDIA QUERY PER MOBILE */
@media (max-width: 768px) {
  main {
    padding: 8rem 2rem;
  }

  .titolo {
    font-size: 2rem;
  }

  iframe{
    width: 400px;
    height: 500px;
  }

  input,
  textarea,
  button {
    width: 100%;
  }

  form {
    width: 100%;
  }
}

</style>