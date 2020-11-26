<template>
  <div class="main">
    <h1>Hello {{$store.state.user.displayName}}</h1>
      <div class="main__grid">
        <a-card :title="unit.name" v-for="unit in units" :key="unit.id">
          <a slot="extra" href="#">
            Open
            <a-icon type="right" />
          </a>
          <p>{{unit.description}}</p>
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
      units: [],
    };
  },
  mounted() {
    this.$store.dispatch('bindUnits');
    this.units = this.$store.state.units;
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
