<template>
  <div class="main">
    <h1>Hello {{$store.state.user.displayName}}</h1>
      <div class="main__grid" v-if="units.length > 0">
        <a-card :title="unit.name" v-for="unit in units" :key="unit.id">
          <a slot="extra" :href="'/unit/'+unit.id">
            Open
            <a-icon type="right" />
          </a>
          <p>{{unit.description}}</p>
        </a-card>
      </div>
      <h1 v-if="units.length == 0">Go on and add new unit!</h1>
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
