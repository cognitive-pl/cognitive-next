<template>
  <div class="landing">
    <Header />
    <HeroSection />
    <FeatureSection />
    <ScienceSection />
    <footer class="landing__footer">
      <div class="footer__logo">
        <img src="../assets/logo.png"/>
        <h2>Cognitive</h2>
      </div>
      <div class="footer__links">
        <router-link to="/">Homepage</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/policy">Privacy Policy</router-link>
        <a href="https://alexskubala.gitbook.io/cognitive/" target="_blank">User's Docs</a>
        <p>Copyright © 2020 - {{new Date().getFullYear()}} Aleksander Skubała</p>
      </div>
    </footer>
  </div>
</template>

<script>
import Header from '@/sections/Header.vue';
import HeroSection from '@/sections/HeroSection.vue';
import FeatureSection from '@/sections/FeatureSection.vue';
import ScienceSection from '@/sections/ScienceSection.vue';

export default {
  name: 'Landing',
  components: {
    Header,
    HeroSection,
    FeatureSection,
    ScienceSection,
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
      font-size: 2em;
      font-weight: bold;
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
      margin-top: 8vh;

      &:first-of-type { margin-top: 0; }
    }

    @media (min-width: 768px) {
      h1 {
        font-size: 2.1em;
      }
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

  .landing__footer {
    background: #29465b;
    width: 100%;
    min-height: 20vh;
    padding: 5vw;
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;

    & * {
      color: white;
    }

    .footer__logo {
      h2 {
        font-weight: bold;
      }

      img{
        width: 100px;
        height: 100px;
      }
    }

    .footer__links {
      margin-top: 30px;
      display: flex;
      flex-direction: column;

      a {
        margin-top: 10px;
      }

      p {
        margin-top: 25px;
      }
    }

    @media (min-width: 768px) {
      grid-template-columns: 1fr 3fr;

      .footer__links {
        margin-top: 0;
      }
    }
  }
</style>
