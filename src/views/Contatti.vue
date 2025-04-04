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
        const response = await axios.post('http://localhost:8000/api/messages', this.form);
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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2953.289463227177!2d14.18593947657567!3d42.250990641984544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1330537f504abfaf%3A0xeae8f80bc34f7f26!2sAutosalone%20Di%20Fulvio%20Giacomo!5e0!3m2!1sit!2sit!4v1743754355572!5m2!1sit!2sit" width="700" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>

    </div>

  </main>

  

  
</template>

<style scoped>

main{
  padding:10rem 15rem;
  background-color: rgb(170, 170, 170);
}

.titolo{
  font-weight: bold;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 4rem;
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
  margin-bottom:2rem;
  padding: 1.4rem;
  width: 180px;
  background-color:  #f5f5f5;
  border:2px solid #D32F2F;

}

</style>