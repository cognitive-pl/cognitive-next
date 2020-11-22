<template>
  <div>
    <input type="text" v-model="name" placeholder="name"/><br/>
    <input type="text" v-model="description" placeholder="description"/><br/>
    <button @click="addTopic()">Add topic</button><br/>
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
