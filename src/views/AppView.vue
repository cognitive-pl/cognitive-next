<template>
  <div class="about">
    <router-link to="/new-topic">New Topic</router-link>
    <h1>Hello {{this.$store.state.user.displayName}}</h1>
    <button @click="logout()">Sign out :(</button><br/>
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
  name: 'App',
  data: function () {
    return {
      topics: [],
      name: '',
      description: '',
    };
  },
  mounted() {
    store.dispatch('bindTopics');
    this.topics = store.state.topics;
  },
  methods: {
    logout() {
      auth.signOut();
    },
  },
};
</script>
