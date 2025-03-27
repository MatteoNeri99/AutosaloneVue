<script>
import FooterApp from './components/FooterApp.vue'
import HeaderApp from './components/HeaderApp.vue'
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
   <router-view></router-view>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
