<template>
  <a-button @click.once="login()" type="primary">Log In with Google</a-button>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    login() {
      this.$service.login(this.$gapi)
        .then((user) => {
          this.$store.dispatch('fetchUser', user);
        })
        .catch(() => alert('Something went wrong'));
    },
  },
};
</script>

<style lang="scss">

</style>
