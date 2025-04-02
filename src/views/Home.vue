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

      <h1>- Autosalone Di Fulvio Giaciomo -</h1>

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

    </div>

    <div class="servizi">


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

main{
  background-color: #f5f5f5;

  h2{
    text-align: center;
    font-weight: bold;
    font-size: 3rem;
    margin-top: 2rem;
  }
}
.jumbotron{
  width: 100%;
  height: 670px;

  img{
    width: 100%;
    height: 670px;
    object-fit: cover;
    object-position:top;

    
  }

}

.titolo{
  color: white;
  padding: 2rem;
  background-color:#030303 ;

  h1{
    text-align: center;
    font-size: 2.5rem;
    text-transform: uppercase;
  }
}

.servizi{
    background-color: #BDBDBD;
    color: black;
    display: flex;
    padding: 2rem 15rem;
    justify-content: space-around;

    .meccanico,
    .carrozzeria{
      background-color: white;
      box-shadow: 5px 5px 10px black;
      width: 400px;
      height: 300px;
      border-radius: 20px;
      padding: 2rem;

      h3{
        text-align: center;
        font-size: 3rem;
        align-items: center;
        font-weight: bold;
      }

      img{
          width: 35px;
        }

      p{
        font-size: 1.3rem;
        text-align: center;
        font-weight: bold;
      }

      .flex{
        display: flex;

        
      }
    }
  }

  .contenitore{
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;

  .button{
    margin-top: 1rem;
  }

  h1{
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  a{
    color: #FFFFFF;
    text-decoration: none;
    width: 150px;
    text-align: center;
    background-color: #D32F2F;
    padding: 0.3rem;
    
  }

  .icone{
    display: flex;
    align-items: center;

    .engine{
      width: 35px;
    }

    .km{
      width: 25px;

    }

    img{
      width: 30px;
      margin-right: 0.1rem;
      margin-bottom: 1rem;
    }

    p{
      align-self: center;
      margin-bottom: 0.9rem;
    }


  }

  p{
    margin-right: 0.7rem;
  }


}

.img{
  position: relative;

  .prezzo{
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 1.7rem;
    padding: 0.2rem  0.6rem 0.2rem 0.6rem;
    background-color: #D32F2F;
    
  }
}

img{
  width: 100%;
  border-radius: 10px 10px 0 0;
 
}

.imgAuto{

  border-bottom: 2px solid #FFEB3B;

}

article{
    margin-bottom: 2rem;
    width: calc((100% / 3) - 2rem);
    margin-right: 2rem;
    background-color:  #252525;
    border: transparent;
    border-radius: 10px;
    color: white;
}

.ultimeAuto{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    background-color:  #f5f5f5;
    margin-top: 3rem;

}

</style>