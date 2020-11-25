<template>
  <div class="container">
    <h1>Hello {{$store.state.user.displayName}}</h1>
  </div>
</template>

<script>
import { auth } from '@/initFirebase';

export default {
  name: 'App',
  data: function () {
    return {
      topics: [],
      name: '',
      description: '',
    };
  },
  mounted() {
    this.$store.dispatch('bindTopics');
    this.topics = this.$store.state.topics;
  },
  methods: {
    logout() {
      auth.signOut();
    },
  },
};
</script>
