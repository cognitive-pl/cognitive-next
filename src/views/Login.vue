<template>
  <div>
    <button @click.once="login()">Sign In</button>
  </div>
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
