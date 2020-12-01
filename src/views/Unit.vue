<template>
  <div>
    <h1>{{ unitObject.name }}</h1>
    <h3>{{ unitObject.description }}</h3>
    <p>Part of material:</p>
    <ul>
      <li v-for="(part, index) in unitObject.parts" :key="index">
        {{ part }}
      </li>
    </ul>
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
  beforeCreate() {
    const unitRef = db.collection('units').doc(this.$route.params.id);
    unitRef.get()
      .then((doc) => { this.unitObject = doc.data(); })
      .catch(() => this.$message.error('Something went wrong with database connection...'));
  },
};
</script>
