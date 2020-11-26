<template>
  <div class="main">
    <h1>Hello {{$store.state.user.displayName}}</h1>
      <div class="main__grid">
        <a-card v-for="topic in topics" :key="topic.id" :title="topic.name">
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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 3rem;
  }
</style>
