<template>
  <section class="section">
    <h1>We care about how much you remember</h1>
    <p>Start your journey with effective learning and head to the free app.</p>
    <router-link to="/login">
      <CTA>Get the app</CTA>
    </router-link>
  </section>
</template>

<script>
import CTA from '@/components/CTA.vue';

export default {
  name: 'HeroSection',
  components: {
    CTA,
  },
};
</script>

<style lang="scss"></style>
