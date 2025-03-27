<script>
import { store } from '../../store';

export default{

  data(){
    return{
        store,
        currentIndex: 0,

    }
  },
  props:{
    auto:{
        type:Object,
        required:true,
        
    }   
  },computed: {
    // Ottieni l'immagine corrente basata sull'indice
    currentImage() {
      return this.auto.immagini[this.currentIndex];
    }
  }, methods: {
    // Passa all'immagine precedente
    prevImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.auto.immagini.length - 1; // Torna all'ultima immagine
      }
    },
    // Passa all'immagine successiva
    nextImage() {
      if (this.currentIndex < this.auto.immagini.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0; // Torna alla prima immagine
      }
    }
  }
}

</script>

<template>
    <div class="carousel-container">
      <!-- Mostra l'immagine corrente -->
      <div class="carousel-image">
        <img :src="currentImage" alt="Auto" />
      </div>
  
      <!-- Pagine di descrizione dell'auto -->
      <p>{{ auto.marca }}</p>
      <p>{{ auto.modello }}</p>
      <p>Cilindrata:{{ auto.cilindrata }}</p>
  
      <!-- Navigazione con frecce -->
      <div class="carousel-nav">
        <button @click="prevImage">←</button>
        <button @click="nextImage">→</button>
      </div>
    </div>
  </template>

<style scoped>
img{
    width: 100%;
}
.carousel-container {
  max-width: 700px;
  margin: auto;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 1s ease-in-out;
}

.description {
  text-align: center;
  padding: 15px;
}

.car-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.carousel-nav {
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
}

.nav-button {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 24px;
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
}

.nav-button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}

/* Transizione fade */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>