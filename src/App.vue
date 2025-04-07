<script>
import FooterApp from './components/FooterApp.vue'
import HeaderApp from './components/HeaderApp.vue';
import IntroApp from "./components/IntroApp.vue";


export default{
  components:{
    HeaderApp,
    FooterApp,
    IntroApp,
  },

  data(){
    return{
      showIntro: !localStorage.getItem("introShown"),
    }
  },methods: {
    handleIntroDone() {
      this.showIntro = false;
      this.$router.push('/home');
    }
  }
}

</script>

<template>
   <HeaderApp  v-if="!showIntro"/>
   <IntroApp v-if="showIntro" @done="handleIntroDone" />
   <router-view  v-if="!showIntro" :key="$route.fullPath"></router-view>
   <FooterApp  v-if="!showIntro"/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Delicious+Handrawn&family=Oswald:wght@200..700&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Red Hat Display";
  font-optical-sizing: auto;
  font-weight: 300;
  
}
body{
  background-color: #030303;
  position: relative;
}

</style>
