<template>
  <div class="main">
    <h1>Hello {{$store.state.user.displayName}}</h1>
      <div class="main__grid">
        <a-card :title="topic.name" v-for="topic in topics" :key="topic.id">
          <a slot="extra" href="#">
            Open
            <a-icon type="right" />
          </a>
          <p>{{topic.description}}</p>
        </a-card>
      </div>
  </div>
</template>

<script>
import { auth } from '@/initFirebase';

export default {
  name: 'App',
  data: function () {
    return {
      topics: [],
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

<style lang="scss">
  main h1 {
    margin-bottom: 2rem;
  }

  .main__grid {
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 2.5rem 3rem;
  }
</style>
