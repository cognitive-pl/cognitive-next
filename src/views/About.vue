<template>
  <div class="about">
    <h1>Hello {{this.$store.state.user.displayName}}</h1>
    <button @click="logout()">Sign out :(</button>
  </div>
</template>

<script>
import { auth } from '@/initFirebase';

export default {
  methods: {
    logout() {
      auth.signOut();
    },
  },
};
</script>
