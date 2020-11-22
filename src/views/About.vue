<template>
  <div class="about">
    <h1>Hello {{this.$store.state.user.displayName}}</h1>
    <button @click="logout()">Sign out :(</button>
    <div v-for="topic in this.topics" :key="topic.id">
      <h1>{{ topic.name }}</h1>
      <h2>{{ topic.description }}</h2>
    </div>
  </div>
</template>

<script>
import { auth } from '@/initFirebase';
import store from '@/store';

export default {
  name: 'About',
  data: function () {
    return {
      topics: [],
    };
  },
  mounted() {
    this.topics = store.state.topics;
  },
  methods: {
    logout() {
      auth.signOut();
    },
  },
};
</script>
