<template>
  <div class="unit">
    <div v-if="unitObject">
      <h2>{{ unitObject.name }}</h2>
      <h3>{{ unitObject.description }}</h3>
      <p>Parts of material:</p>
      <ul>
        <li v-for="({ content, date }, index) in unitObject.parts" :key="index">
          {{ content }}, {{ new Date(date).toLocaleDateString() }}
        </li>
      </ul>
      <h3>Session for today:</h3>
      {{todaySession ? todaySession.content : 'No session for today'}}
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
      todaySession: '',
    };
  },
  mounted() {
    const unitRef = db.collection('units').doc(this.$route.params.id);
    unitRef.get()
      .then((doc) => {
        this.unitObject = doc.data();
        this.todaySession = this.unitObject.parts.find(({ date }) => {
          const today = new Date().setHours(0, 0, 0);
          const partDate = new Date(date).setHours(0, 0, 0);
          return today === partDate;
        });
      })
      .catch(() => this.$message.error('Something went wrong with database connection...'));
  },
};
</script>
