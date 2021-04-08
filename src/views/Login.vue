<template>
  <div class="login">
    <div class="login__img">
      <LoginSVG1 class="svg1"/>
      <LoginSVG2 class="svg2"/>
      <Blob class="blob"/>
    </div>
    <div class="login__form">
      <router-link to="/" class="link">
        <a-button type="link">
          <a-icon type="left" />{{ $t('login.goBack') }}
        </a-button>
      </router-link>
      <h1 class="title">Cognitive</h1>
      <a-button @click.once="login()" type="primary">{{ $t('login.button') }}</a-button>
    </div>
  </div>
</template>

<script>
import LoginSVG1 from '@/assets/svgs/login-illustration1.svg';
import LoginSVG2 from '@/assets/svgs/login-illustration2.svg';
import Blob from '@/assets/svgs/blob.svg';

export default {
  name: 'Login',
  components: {
    LoginSVG1,
    LoginSVG2,
    Blob,
  },
  methods: {
    login() {
      this.$service.login((user, err) => {
        if (err) alert('Something went wrong...');
        else this.$store.dispatch('fetchUser', user);
      });
    },
  },
  mounted() {
    const h = this.$createElement;
    this.$warning({
      centered: true,
      title: this.$t('login.modal.title'),
      content: h('div', {}, [
        h('p', [this.$t('login.modal.content1'), h('b', this.$t('login.modal.alert'))]),
        h('p', this.$t('login.modal.content2')),
      ]),
    });
  },
};
</script>

<style src="../assets/svgs/login-illustration1.css"></style>
<style src="../assets/svgs/login-illustration2.css"></style>

<style lang="scss">
  .login {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr 2fr;

    @media (min-width: 768px) {
      grid-template-rows: unset;
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1024px) {
      grid-template-columns: 1.5fr 1fr;
    }
  }

  .login__img {
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .svg1 {
      display: none;
    }

    .blob {
      display: none;
    }

    @media (min-width: 768px) {
      .svg1 {
        display: unset;
      }

      .svg2 {
        display: none;
      }

      .blob {
        display: unset;
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: -1;
        transform: translateX(-50%) translateY(-50%) scale(2.3);
      }
    }
  }

  .login__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;

    .title {
      font-size: 2.4em;
      margin: 1.2em 0 .9em;
      color: black;
      text-decoration: underline;
      text-decoration-color: cornflowerblue;
      text-decoration-thickness: 3px;
    }

    @media (min-width: 768px) {
      justify-content: center;
    }
  }
</style>
