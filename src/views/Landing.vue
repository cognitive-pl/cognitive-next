<template>
  <div class="landing">
    <!-- <header class="landing__header">
      <h2>Cognitive</h2>
    </header> -->
    <HeroSection />
    <!-- <footer class="landing__footer">
      <a href="/policy">Privacy Policy</a>
    </footer> -->
  </div>
</template>

<script>
import HeroSection from '@/sections/HeroSection.vue';

export default {
  name: 'Landing',
  components: {
    HeroSection,
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  .landing {
    width: 100%;
    min-height: 100%;
    font-family: 'Noto Sans', sans-serif;
    font-size: 16px;
    line-height: 1.55;
    color: #333;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Poppins', sans-serif;
    }

    h1 {
      font-size: 1.9em;
    }

    h2 {
      font-size: 1.4em;
    }

    .underline {
      text-decoration: underline;
      text-decoration-color: cornflowerblue;
      text-decoration-thickness: .15em;
    }

    .section {
      min-height: 55vh;
    }
  }
</style>
