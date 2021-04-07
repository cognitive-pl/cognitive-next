<template>
  <div class="landing">
    <header class="landing__header">
      <div class="header__branding">
        <h2>Cognitive</h2>
      </div>
      <div class="header__links">
        <router-link to="/policy">
          <a-button type="link">{{ $t('landing.policy') }}</a-button>
        </router-link>
        <button class="landing__button landing__button--ghost" v-if="language == 'pl'" @click="setLanguage('en')">English</button>
        <button class="landing__button landing__button--ghost" v-if="language == 'en'" @click="setLanguage('pl')">Polski</button>
        <router-link to="/app">
          <button class="landing__button">{{ $t('landing.signIn') }}</button>
        </router-link>
      </div>
    </header>
    <HeroSection />
    <FeatureSection />
    <!-- <footer class="landing__footer">
      <a href="/policy">Privacy Policy</a>
    </footer> -->
  </div>
</template>

<script>
import HeroSection from '@/sections/HeroSection.vue';
import FeatureSection from '@/sections/FeatureSection.vue';

export default {
  name: 'Landing',
  components: {
    HeroSection,
    FeatureSection,
  },
  created() {
    this.language = this.$service.getLanguage();
  },
  methods: {
    setLanguage(languageProp) {
      this.$service.setLanguage(languageProp);
      window.location.reload();
    },
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  .landing {
    width: 100%;
    min-height: 100vh;
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

  .landing__button {
    background: cornflowerblue;
    border: none;
    position: relative;
    z-index: 3;
    z-index: inherit;
    border-radius: 4px;
    color: white;
    padding: 7px 12px;
    cursor: pointer;
    font-weight: bold;
    letter-spacing: 1px;
    transition: transform .3s ease-out;

    &::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      background: none;
      box-shadow: 0 0 10px -4px #000;
      opacity: 0;
      transition: opacity .3s ease-out;
    }

    &:hover, &:focus {
      transform: translateY(-3px);

      &::before {
        opacity: 1;
      }
    }

    &.landing__button--ghost {
      background: white !important;
      border: 1px solid cornflowerblue;
      color: cornflowerblue;
    }
  }

  .landing__header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    position: sticky;
    z-index: 9999;
    top: 0;
    left: 0;

    &::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: white;
      opacity: .9;
    }

    .header__links * {
      margin-left: 5px;
    }
  }
</style>
