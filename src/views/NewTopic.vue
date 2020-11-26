<template>
  <div>
    <a-space direction="vertical" size="small">
    <a-input v-model="name" placeholder="Title" />
    <a-input v-model="description" placeholder="Description" />
    <a-button @click="addTopic()" type="primary" icon="plus">
      Add Topic
    </a-button>
    </a-space>
  </div>
</template>

<script>
import { db } from '@/initFirebase';

export default {
  name: 'App',
  data: function () {
    return {
      name: '',
      description: '',
    };
  },
  methods: {
    addTopic() {
      db.collection('topics').add({
        name: this.name,
        description: this.description,
      });
    },
  },
};
</script>
