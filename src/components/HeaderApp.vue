<script>
export default {
  data() {
    return {
      menuOpen: false, // Stato del menu mobile
    };
  },
  computed: {
    isAutoActive() {
      return this.$route.name === "auto"; // "Auto" attivo SOLO se la rotta è ESATTAMENTE "auto"
    },
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    }
  },
};
</script>

<template>
  <header>
    <div class="logo">

      <router-link :to="{ name: 'home' }" >
        <img src="/img/Screenshot_2025-03-28_113325-removebg-preview.png" alt="Logo" ></img>
      </router-link>

      

    </div>

    <!-- Icona Menu per Mobile -->
    <button class="menu-btn" @click="toggleMenu">
      ☰
    </button>

    <!-- Menu -->
    <ul :class="{ 'menu-open': menuOpen }">
      <li>
        <router-link :to="{ name: 'home' }" :class="{ active: $route.name === 'home' }" @click="closeMenu"  class="link">
          Home
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'auto' }" :class="{ active: isAutoActive }" @click="closeMenu" class="link">
          Auto
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'contatti' }" :class="{ active: $route.name === 'contatti' }" @click="closeMenu" class="link">
          Contatti
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'chi-siamo' }" :class="{ active: $route.name === 'chi-siamo' }" @click="closeMenu" class="link">
          Chi siamo
        </router-link>
      </li>
    </ul>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 15rem;
  background-color: rgba(3, 3, 3, 0.6);
  color: white;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
}

.logo img {
  width: 250px;
}

.menu-btn {
  display: none;
  font-size: 2rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

/* Menu sempre visibile su desktop */
header ul {
  display: flex;
  list-style: none;
  align-items: center;
}

header ul li {
  margin-right: 1rem;
}

header a {
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
}

header .link:hover,
header .active {
  border-bottom: 3px solid #D32F2F;
  font-weight: bold;
}

/* Tablet */
@media screen and (max-width: 1024px) {
  header {
    padding: 1rem 5rem;
  }

  .logo img {
    width: 200px;
  }

  header a {
    font-size: 1.3rem;
  }
}

/* Mobile */
@media screen and (max-width: 768px) {
  header {
    padding: 1rem 2rem;
    text-align: center;
  }

  .menu-btn {
    display: block;
    margin-left: auto;
  }


  header ul {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 250px;
    background-color: rgba(3, 3, 3, 0.9);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    transition: right 0.3s ease-in-out;
  }

  .menu-open {
    right: 0;
  }

  header ul li {
    margin: 1rem 0;
  }

  .logo img {
    width: 150px;
  }

  header a {
    font-size: 1.2rem;
  }
}
</style>
