<template>
  <div class="main">
    <h1>Hi {{$store.state.user.displayName}}!</h1>
      <div class="main__grid" v-if="units.length > 0">
        <a-card :title="unit.name" v-for="unit in units" :key="unit.id">
          <a slot="extra">
            <router-link :to="'/unit/'+unit.id">
              Open
              <a-icon type="right" />
            </router-link>
          </a>
          <p>{{unit.description}}</p>
        </a-card>
      </div>
      <a-empty size="large" v-if="units.length == 0">
        <span slot="description">Start your adventure with learning!</span>
        <a-button type="primary"><router-link to="/new-unit">Add unit</router-link></a-button>
      </a-empty>
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
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 2.5rem 3rem;
  }
</style>
