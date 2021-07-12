<template>
  <header class="landing__header">
    <div class="header__branding">
      <h2>Cognitive</h2>
    </div>
    <button :class="['header__button', { 'header__button--open': menuOpen }]" @click="menuOpen = !menuOpen">
      <div class="button__line"></div>
    </button>
    <div :class="['header__links', { 'header__links--open': menuOpen }]">
      <button class="landing__button landing__button--ghost" v-if="language == 'pl'" @click="setLanguage('en')">English</button>
      <button class="landing__button landing__button--ghost" v-if="language == 'en'" @click="setLanguage('pl')">Polski</button>
      <router-link to="/app">
        <button class="landing__button">{{ $t('landing.signIn') }}</button>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data: function () {
    return {
      menuOpen: false,
    };
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
.landing__header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  position: sticky;
  z-index: 8999;
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
}

.header__button {
  display: flex;
  position: relative;
  z-index: 9999;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: none;
  border: none;

  .button__line {
    width: 25px;
    height: 3px;
    background: cornflowerblue;
    transition: opacity .3s ease;
  }

  &::before, &::after {
    content: '';
    width: 25px;
    height: 3px;
    position: absolute;
    display: block;
    background: cornflowerblue;
    transition: transform .3s ease;
  }

  &::before {
    transform: translateY(-8px);
  }

  &::after {
    transform: translateY(8px);
  }

  @media (min-width: 768px) {
    display: none;
  }
}

.header__button--open {
  .button__line {
    opacity: 0;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
}

.header__links {
  & * {
    margin-left: 5px;
  }

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9000;
    background: #f5f5f5;
    /* background: white; */
    display: none;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    a {
      margin: 0;
    }

    & * {
      margin-left: 5px;
      margin-bottom: 20px;
    }
  }
}

.header__links--open {
  @media screen and (max-width: 768px) {
    display: flex;
  }
}

</style>
