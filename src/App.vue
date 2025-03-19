<script>
import MainApp from './components/MainApp.vue'
import FooterApp from './components/FooterApp.vue'
import HeaderApp from './components/HeaderApp.vue'
export default{
  components:{
    HeaderApp,
    MainApp,
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
  <MainApp/>
  <FooterApp/>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
