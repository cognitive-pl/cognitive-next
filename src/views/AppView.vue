<template>
  <div class="about">
    <router-link to="/new-topic">New Topic</router-link>
    <h1>Hello {{this.$store.state.user.displayName}}</h1>
    <duet-button @click.once="logout()" variation="destructive">Sign out</duet-button>
    <duet-grid responsive distribution="center" breakpoint="large">
      <duet-grid-item v-for="topic in this.topics" :key="topic.id">
        <duet-card :heading="topic.name">
          {{ topic.description }}
        </duet-card>
      </duet-grid-item>
    </duet-grid>
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
