<script>
import axios from 'axios';
export default{

  data(){
    
    return{
      autoList: [], 

    }
  },methods: {
    
    getUltimeAuto() {
      axios.get('https://autosalone-production.up.railway.app/api/ultime-auto') 
        .then(response => {
          this.autoList = response.data; 
          console.log(this.autoList)
          this.$nextTick(() => {
          this.observeVisibility(); // Chiama l'osservatore dopo che Vue ha completato il rendering
          });
        })
        .catch(error => {
          console.error("Errore nel recupero delle auto:", error);
        });
    },
    formatNumber(value) {
      return value.toLocaleString('it-IT'); // Formatta il numero con i puntini
    },
    observeVisibility() {
      const options = {
        root: null, // Usare la finestra di visualizzazione
        rootMargin: '0px',
        threshold: 0.5 // Quando il 50% dell'elemento è visibile
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Aggiungi la classe "visible" quando l'elemento è visibile
            console.log('Elemento visibile', entry.target);
            observer.unobserve(entry.target); // Interrompe l'osservazione dopo l'animazione
          }
        });
      }, options);

      console.log('Osservatore inizializzato');

      // Osserva gli .article
      const articles = document.querySelectorAll('.article');
      console.log('Articoli trovati:', articles);
      articles.forEach(article => {
        observer.observe(article);
      });

      // Osserva .meccanico e .carrozzeria
      const meccanico = document.querySelector('.meccanico');
      const carrozzeria = document.querySelector('.carrozzeria');

      if (meccanico) observer.observe(meccanico);
      if (carrozzeria) observer.observe(carrozzeria);

      const loghi = document.querySelectorAll('.marchi .loghi');
      loghi.forEach(logo => observer.observe(logo)); // 👈 aggiunto
    }

  },created() {
    this.getUltimeAuto();
  },mounted() {
    this.observeVisibility();
  }
}

</script>

<template>
  <main>
    <div class="jumbotron">

      <img src="/img/34EB6D90-9352-41FC-92AF-3753AC2DF978 (1).jpg" alt="">

    </div>

    <div class="titolo">

      <h1>- Autosalone Di Fulvio Giacomo -</h1>

    </div>

    <h2>Ultimi arrivi</h2>

    <div class="ultimeAuto">

      

      <article class="article"  v-for="auto in autoList" :key="auto.id">
    
        <div class="img">
          <p class="prezzo">{{ formatNumber(auto.prezzo)}} €</p>
          <img class="imgAuto" :src="auto.immagini[0]" alt="Auto" />

        </div>



        <div class="contenitore">

          <h1>{{ auto.marca }} {{ auto.modello }}</h1>

          <div class="icone">

            <div class="icone">
              <img src="/img/date-svgrepo-com (1).svg" alt="">
              <p>{{ auto.anno }}</p> 
            </div>

            <div class="icone">
              <img class="engine" src="/img/engine-svgrepo-com (1).svg" alt="">
              <p>{{ formatNumber(auto.cilindrata) }}</p>
            </div>

            <div class="icone">
              <img class="km" src="/img/speed-svgrepo-com (6).svg" alt="">
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

    <div class="marchi">

      <img class="loghi" src="/img/Alfa_Romeo_2015.svg.png" alt="alfa romeo logo">

      <img class="loghi" src="/img/Logo_della_Fiat.svg.png" alt="Fiat logo">

      <img class="loghi" src="/img/Logo_della_Lancia.svg.png" alt="Lancia logo">

      <img class="loghi jeep" src="/img/Jeep_logo.svg" alt="">

      <img class="loghi" src="/img/Abarth_logo.png" alt="">

    </div>

    <div class="servizi">

      <div class="serviziTitolo">
        <h2>I nostri servizi</h2>
      </div>

      <div class="meccanico">

        <h3><img src="/img/wrench-2-svgrepo-com.svg" alt=""> Meccanico</h3>

        <div class="flex">
          
          <p>"Servizio meccanico completo: riparazioni, manutenzione e diagnosi con professionalità e rapidità, per garantire la sicurezza e le performance del tuo veicolo."</p>

        </div>
        

      </div>

      <div class="carrozzeria">

        <h3><img src="/img/spray-can-svgrepo-com.svg" alt=""> Carrozzeria</h3>

        <div class="flex">
          
          <p>"Servizio carrozzeria professionale: riparazioni, verniciatura e restauro, per restituire al tuo veicolo l'aspetto originale e la massima qualità."</p>

        </div>

      </div>

    </div>

  </main>
  
  
</template>

<style scoped>
/* animazioni */
.meccanico,
.carrozzeria {
  opacity: 0;
  transform: translateX(100%);
  transition: opacity 2s ease-out, transform 1s ease-out;
}

.meccanico.visible,
.carrozzeria.visible {
  opacity: 1;
  transform: translateX(0);
}

.meccanico {
  transform: translateX(-100%);
}

.carrozzeria {
  transform: translateX(100%);
}

.meccanico.visible {
  transform: translateX(0);
}

.carrozzeria.visible {
  transform: translateX(0);
}

.article {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.article.visible {
  opacity: 1;
  transform: translateY(0);
}

.marchi .loghi {
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.marchi .loghi.visible {
  opacity: 1;
  transform: scale(1);
}

.marchi .loghi:nth-child(1).visible { transition-delay: 0.2s; }
.marchi .loghi:nth-child(2).visible { transition-delay: 0.4s; }
.marchi .loghi:nth-child(3).visible { transition-delay: 0.6s; }
.marchi .loghi:nth-child(4).visible { transition-delay: 0.8s; }
.marchi .loghi:nth-child(5).visible { transition-delay: 1s; }


/* page */
main {
 background: linear-gradient(to right, #ffffff, #d3d3d3);
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
  width: 45px;
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

.ultimeAuto .article:nth-child(2) { 
  margin-left: 2rem; 
  margin-right: 2rem;
}
.ultimeAuto .article:nth-child(5) { 
  margin-left: 2rem;
  margin-right: 2rem;
}
.ultimeAuto .article:nth-child(8) { 
  margin-left: 2rem;
  margin-right: 2rem;
}

article {
  margin-bottom: 2rem;
  width: calc((100% / 3) - 2rem);
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

.marchi{
  background: linear-gradient(to right, #ffffff, #e9e9e9);
  display: flex;
  padding: 5rem;
  justify-content: center;
  
}

.loghi{
  width: 140px;
  height: 140px;
}

.marchi .loghi:nth-child(2) { 
  margin-left: 3rem;
  margin-right: 3rem;
}
.marchi .loghi:nth-child(4) { 
  margin-left: 3rem;
  margin-right: 3rem;
}

.marchi .jeep{
  width: 160px;
  height: 90px;
  align-self: center;
}

@media screen and (min-width: 1024px) and (max-width: 1440px) {
  .servizi {
    padding: 1rem 4rem;  /* Aggiusta i margini laterali */
  }

  .jumbotron{
    height: 500px;
    overflow: hidden;
    position: relative;
  }

  .titolo h1 {
    font-size: 2.5rem;
    word-spacing: 0;
  }

  .meccanico {
    transform: translateX(-50%); /* Sposta leggermente meno verso sinistra */
  }

  .carrozzeria {
    transform: translateX(50%); /* Sposta leggermente meno verso destra */
  }

  .meccanico.visible {
    transform: translateX(0); /* Visibile al suo posto */
  }

  .carrozzeria.visible {
    transform: translateX(0); /* Visibile al suo posto */
  }


}

/* Responsive Design */
@media screen and (max-width: 1024px) { /* Tablet */
  .servizi {
    padding: 1rem 4rem;
  }

  .ultimeAuto .article:nth-child(2) { 
    margin-left: 0; 
    margin-right: 0;
  }
  .ultimeAuto .article:nth-child(5) { 
    margin-left: 0;
    margin-right: 0;
  }
  .ultimeAuto .article:nth-child(8) { 
    margin-left: 0;
    margin-right: 0;
  }


  .titolo h1 {
    font-size: 2.2rem;
    word-spacing: 0;
  }

  .jumbotron{
    height: 400px;
    overflow: hidden;
    position: relative;
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
    width: 100%;
    margin-right: 0;
  }

  .ultimeAuto {
    width: 100%;
    padding: 3rem;
  }

  .meccanico,
  .carrozzeria {
    width: 90%;
    max-width: 400px;
    height: auto;
    margin: 0 auto;
    margin-bottom: 2rem;
    opacity: 1;  /* Aggiungi questa regola per garantire che l'elemento sia visibile */
    transform: translateX(0); /* Imposta la posizione iniziale per l'animazione */
  }
}

@media screen and (max-width: 768px) { /* Mobile */
  main h2 {
    font-size: 2rem;
  }

  .marchi{
    padding: 2rem;
    margin-bottom: 1rem;
  }

  .loghi{
    width: 60px;
    height: 60px;
  }

  .marchi .loghi:nth-child(2) { 
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .marchi .loghi:nth-child(4) { 
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }


  .jumbotron {
    width: 100%;
    height: 360px;
    overflow: hidden;
    position: relative;
  }

  .jumbotron img {
    position: absolute;
    top: 0;
    width: 100%;
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
    max-width: 400px;
    height: auto;
    margin: 0 auto;
    margin-bottom: 2rem;
    opacity: 1;  /* Aggiungi questa regola per garantire che l'elemento sia visibile */
    transform: translateX(0); /* Imposta la posizione iniziale per l'animazione */
  }

  article {
    width: 100%;
   
  }


  .ultimeAuto {
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
  }

  .marchi .jeep{
  width: 60px;
  height: 30px;
  align-self: center;
}

}
</style>
