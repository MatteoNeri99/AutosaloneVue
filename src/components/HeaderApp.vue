<script>
export default{

  data(){
    return{

    }
  }
}

</script>

<template>

  <header>
    <div>
      <img src="../../public/img/Screenshot_2025-03-28_113325-removebg-preview.png" alt="">
    </div>

    <ul>
      <li>
        <a>
        <router-link :to="{ name: 'home'}"  exact-active-class="active">Home</router-link>
        </a>
      </li>
      <li>
        <a>
        <router-link :to="{ name: 'auto'}"  exact-active-class="active">Auto</router-link>
        </a>
      </li>
      <li>
        <a>
        <router-link :to="{ name: 'contatti'}"  exact-active-class="active">Contatti</router-link>
        </a>
      </li>
      <li>
        <a>
        <router-link :to="{ name: 'chi-siamo'}"  exact-active-class="active">Chi siamo</router-link>
        </a>
      </li>
    </ul>
    
  </header>

  
</template>

<style scoped>

header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  padding-left: 15rem;
  padding-right: 15rem;
  background-color:rgba(3, 3, 3, 0.6);
  color: white;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  

  a{
    font-size: 1.5rem;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
   
  }

  a:hover{
    
    border-bottom: 3px solid #D32F2F;
    font-weight: bold;

  }

  ul{
    display: flex;
    list-style: none;
    li{
      margin-right: 1rem;
    }
  }

  img{
    width: 250px;
    
  }

  .active{
    border-bottom: 3px solid #D32F2F;
    font-weight: bold;
  }
}



</style>