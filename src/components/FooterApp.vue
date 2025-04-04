<script>
export default{

  data(){
    return{

    }
  }
}

</script>

<template>

  <footer>

    <ul class="indirizzo">
      <h3>Autosalone Di Fulvio Giacomo</h3>
      <li>indirizzo: Via Piane N.20</li>
      <li>Telefono: 0871 79710</li>
    </ul>

    <ul class="orari">
      <h3>Orari:</h3>
      <li>
        Lunedi: 08:30–13, 14:30–19:30
      </li>
      <li>
        Martedi:	08:30–13, 14:30–19:30
      </li>
      <li>
        Mercoledi:	08:30–13, 14:30–19:30
      </li>
      <li>
        Giovedì:	08:30–13, 14:30–19:30
      </li>
      <li>
        Venerdi:	08:30–13, 14:30–19:30
      </li>
      <li>
        Sabato:	08:30–13, 15:30–18:30
      </li>
      <li>
        Domenica:	chiuso
      </li>
    </ul>

    <div class="social">

      <h3>Social Network:</h3>
      <a href="https://www.facebook.com/autosalonedifulviogiacomo/?locale=it_IT">
        <img src="../../public/img/social-facebook-svgrepo-com.svg" alt="" class="facebook">
      </a>
      
      <a href="https://www.instagram.com/autosalone_di_fulvio_giacomo/">
        <img src="../../public/img/social-instagram-svgrepo-com.svg" alt="" class="instagram">
      </a>
      

    </div>

    <hr>
  </footer>
  
</template>

<style scoped>
footer {
  background-color: #252525;
  color: #FFFF;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 3rem 18rem;
}

footer li {
  margin-bottom: 0.5rem;
  
}

footer h3 {
  margin-bottom: 0.5rem;
}

footer .orari {
  word-spacing: 0.5rem;
}

footer .facebook,
footer .instagram {
  width: 45px;
}

footer hr {
  width: 100%;
  margin-top: 2rem;
}

/* Responsive Design */
@media screen and (max-width: 1024px) { /* Tablet */
  footer {
    padding: 2rem 5rem;
    flex-direction: column;
    align-items: center;
    
  }

  footer li {
    margin-left: 1rem;
    
  }
  ul{
    margin-bottom: 1rem;

  }

  footer .facebook,
  footer .instagram {
    width: 40px;
  }
}

@media screen and (max-width: 768px) { /* Mobile */
  footer {
    padding: 2rem 2rem;
  }

  footer .facebook,
  footer .instagram {
    width: 35px;
  }

  .social{
    width: 85%;
    margin-left: 1rem;
  }

}


</style>