
<script>
  import { gsap } from 'gsap';
  
  export default {
    mounted() {
      if (localStorage.getItem('introShown')) {
        this.$emit('done');
        return;
      }
  
      // GSAP Animation
      const tl = gsap.timeline({
        onComplete: () => {
          this.$emit('done');
        }
      });
  
      tl.fromTo(this.$refs.container, { opacity: 0 }, { opacity: 1, duration: 0.3 })
        .fromTo(this.$refs.introImg, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" })
        .to(this.$refs.container, { opacity: 0, duration: 0.5, delay: 1 });
    }
  };
</script>

<template>
    <div class="intro-container" ref="container">
      <img ref="introImg" src="/img/Screenshot 2025-04-07 161457.png" class="intro-img" />
    </div>
</template>
  
  
<style scoped>
  .intro-container {
    position: fixed;
    inset: 0;
    background: black;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .intro-img {
    max-width: 100%;
    height: auto;
  }
</style>
  
  
  