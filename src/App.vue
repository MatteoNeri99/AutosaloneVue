<script>
import FooterApp from './components/FooterApp.vue'
import HeaderApp from './components/HeaderApp.vue';

export default{
  components:{
    HeaderApp,
    FooterApp
  },

  data(){
    return{

    }
  }
}

</script>

<template>
   <HeaderApp/>
   <router-view :key="$route.fullPath"></router-view>
   <FooterApp/>
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
