<template>
  <a-button @click.once="login()" type="primary">Log In with Google</a-button>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    login() {
      this.$service.login((user, err) => {
        if (err) alert('Something went wrong...');
        else this.$store.dispatch('fetchUser', user);
      });
    },
  },
};
</script>

<style lang="scss">

</style>
