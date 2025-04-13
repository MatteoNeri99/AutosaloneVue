<script>
export default{

  data(){
    return{

    }
  }
}

</script>

<template>
  <main>

    
    <div class="storia">
      <h1>la nostra storia</h1>

      <div class="flex">

        <img src="../../public/img/C487914F-36DB-48D9-8265-9FE137948C61.jpg" alt="">

        <p>Buongiorno,oggi vogliamo raccontarvi la storia di un emigrante abruzzese che è riuscito a costruire qualcosa di grande con impegno e passione: Nicola Di Fulvio, il fondatore di tutto.<br>

          Nel 1961, Nicola decise di lasciare la sua terra, l’Abruzzo, per cercare un futuro migliore in Svizzera. Arrivò nel Cantone tedesco senza conoscere una sola parola della lingua, con tanti sogni e il desiderio di lavorare. I primi tempi non furono facili, ma grazie alla sua determinazione riuscì a trovare lavoro come meccanico in un’officina e a farsi apprezzare per la sua serietà. <br>


          Dopo qualche tempo si trasferì a Vevey, nel Cantone francese, dove continuò a lavorare come operaio per diversi anni. Fu lì, nel 1969, che vendette la sua prima automobile, una Fiat – un marchio che da allora è rimasto un punto fermo nella storia dell’azienda.
        </p>

      </div>

      
      <div class="flex">
        <p>In quegli anni, insieme alla moglie Marianna e con tanti sacrifici, Nicola riuscì ad aprire il Garage Di Fulvio proprio a Vevey. Nel frattempo, cresceva anche la famiglia: arrivarono Angelo, Giacomo e Patrizia. <br>
      

        Quando Angelo e Giacomo erano ormai adolescenti, Nicola decise di tornare nella sua città natale, Fara Filiorum Petri, e lì aprì un autosalone. Fu un momento importante per tutta la famiglia. Giacomo, che fino a quel momento aveva vissuto in Svizzera, si trasferì in Abruzzo per frequentare le scuole superiori.<br>
      

        Terminati gli studi, il 15 settembre 1990 – una data simbolica per l’intera famiglia – Giacomo Di Fulvio inaugura ufficialmente l’Autosalone Di Fulvio Giacomo. Nonostante la giovane età, aveva già una buona esperienza alle spalle: durante gli anni scolastici, tra una lezione e l’altra, si dedicava con entusiasmo alla vendita di auto. È in questo stesso periodo che conosce Claudia, che diventerà sua moglie.
        </p>

        <img src="../../public/img/3D0DD4D5-6B09-4CFF-B710-E1F1657271AB.jpg" alt="" class="imgDx" >

      </div>
     
      <div class="flex">

        <img class="salone-nuovo" src="../../public/img/34EB6D90-9352-41FC-92AF-3753AC2DF978.jpg" alt="">

        <p>Il 15 settembre 2002, esattamente dodici anni dopo l’apertura dell’autosalone, nasce il loro primo figlio, Nicola, e qualche anno più tardi arriva anche Chiara. <br>
        Nel 2021, dopo il diploma, Nicola sceglie di entrare nell’azienda di famiglia, seguendo le orme del padre e del nonno. Come lo zio Angelo, anche lui ha una grande passione per le automobili, ed è pronto a portare avanti questa storia fatta di lavoro, famiglia e cuore.</p>


      </div>
     
    </div>

    

  </main>
</template>

<style scoped>
main{
  background-color: #fafae9;
  padding:10rem 0 ;
}

h1{
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  margin-bottom: 3rem;
  
}

p{
  line-height: 2;
  margin-bottom: 2rem;
  font-size: 1.3rem;
  opacity: 1;
  align-self: center;
}

.storia{
  padding: 0 15rem;
}

img{
  width: 500px;
  height: 300px;
  margin-right: 4rem;
  align-self: center;
 
}

.flex{
  display: flex;
  margin-bottom: 2rem;
}


.salone-nuovo{

  object-fit: cover;
  object-position: top;

}

.imgDx{
  margin-left: 4rem;
}

@media screen and (max-width: 1024px) {
  .storia {
    padding: 0 5rem;
  }

  .imgDx{
  margin-left: 0;
  }

  img {
    width: 100%;
    height: auto;
    margin: 0 auto 2rem;
  }

  .flex {
    flex-direction: column;
    align-items: center;
  }

  p {
    font-size: 1.2rem;
    text-align: center;
  }
}

/* Mobile (es. smartphone, sotto i 768px) */
@media screen and (max-width: 768px) {
  .storia {
    padding: 0 2rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  img {
    width: 100%;
    height: auto;
    margin: 0 auto 1.5rem;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1440px) {
  .storia {
    padding: 0 10rem;
  }
  .imgDx{
    margin-left: 0;
  }

  .flex {
    display: flex;
    flex-direction: column; /* imposta la disposizione in colonna */
    align-items: center;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    margin: 0 0 2rem 0; /* margine solo sotto */
  }

  p {
    font-size: 1.2rem;
    text-align: center;
    max-width: 800px;
  }

  h1 {
    font-size: 2rem;
  }
}





</style>