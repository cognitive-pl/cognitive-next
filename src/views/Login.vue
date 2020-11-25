<template>
  <a-button @click.once="login()" type="primary">Log In with Google</a-button>
</template>

<script>
import { auth, googleProvider } from '@/initFirebase';

export default {
  name: 'Login',
  methods: {
    login() {
      auth.signInWithPopup(googleProvider)
        .then((result) => {
          this.$store.dispatch('fetchUser', result.user);
        })
        .catch((err) => alert(`Something went wrong: ${err.message}`));
    },
  },
};
</script>

<style lang="scss">

</style>
