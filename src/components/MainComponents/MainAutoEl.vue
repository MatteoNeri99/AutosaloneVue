<script>
import { store } from '../../store';

export default{

  data(){
    return{
        store,
        currentIndex: 0,

    }
  },
  methods:{

    formatNumber(value) {
      return value.toLocaleString('it-IT'); // Formatta il numero con i puntini
    }

  },
  props:{
    auto:{
        type:Object,
        required:true,
        
    }   
  }
}

</script>

<template>


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
      <h4> Emissioni: {{ auto.emissioni }}</h4>
      <div>
        <div class="button">
          <router-link :to="{ name: 'auto-dettagli', params: { id: auto.id } } " exact-active-class="active" >Mostra dettagli</router-link>
        </div>

      </div>
      
    </div>
   
  </template>

<style scoped>

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

/* Solo per dispositivi mobili e tablet */
@media screen and (max-width: 1024px) {

.contenitore {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
}

.button {
  margin-top: 1rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

a {
  color: #FFFFFF;
  text-decoration: none;
  width: 150px;
  text-align: center;
  background-color: #D32F2F;
  padding: 0.3rem;
}

.icone {
  display: flex;
  align-items: center;
}

.engine {
  width: 35px;
}

.km {
  width: 25px;
}

img {
  width: 30px;
  margin-right: 0.1rem;
  margin-bottom: 1rem;
}

p {
  align-self: center;
  margin-bottom: 0.9rem;
}

p {
  margin-right: 0.7rem;
}

.img {
  position: relative;
}

.prezzo {
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 1.7rem;
  padding: 0.2rem 0.6rem 0.2rem 0.6rem;
  background-color: #D32F2F;
}

img {
  width: 100%;
  border-radius: 10px 10px 0 0;
}

.imgAuto {
  border-bottom: 2px solid #FFEB3B;
}
}

</style>