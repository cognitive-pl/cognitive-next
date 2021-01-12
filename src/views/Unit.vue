<template>
  <div class="unit">
    <div v-if="unitObject">
      <h1>{{ unitObject.name }}</h1>
      <h3>{{ unitObject.description }}</h3>
      <p>Parts of material:</p>
      <ul>
        <li v-for="(part, index) in unitObject.parts" :key="index">
          {{ part.content }}, {{ new Date(part.date).toLocaleDateString() }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { db } from '@/initFirebase';

export default {
  name: 'Unit',
  data: function () {
    return {
      unitObject: {},
    };
  },
  mounted() {
    const unitRef = db.collection('units').doc(this.$route.params.id);
    unitRef.get()
      .then((doc) => { this.unitObject = doc.data(); })
      .catch(() => this.$message.error('Something went wrong with database connection...'));
  },
};
</script>
