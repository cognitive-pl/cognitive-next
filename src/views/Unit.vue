<template>
  <div class="unit">
    <div v-if="unitObject">
      <h2>{{ unitObject.name }}</h2>
      <h3>{{ unitObject.description }}</h3>
      <p>Parts of material:</p>
      <ul>
        <li v-for="({ content, date, done }, index) in unitObject.parts" :key="index">
          <a-badge
            :status="done ? 'success' : (todaySession.content === content ? 'processing' : 'default')"
            :text="`${content}, ${ new Date(date).toLocaleDateString() }`"
          />
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
        this.todaySession = this.unitObject.parts.find((part) => {
          const today = new Date();
          const partDate = new Date(part.date);
          return (
            today.getDate() === partDate.getDate()
            && today.getMonth() === partDate.getMonth()
            && today.getFullYear() === partDate.getFullYear()
          );
        });
      })
      .catch(() => this.$message.error('Something went wrong with database connection...'));
  },
};
</script>

<style lang="scss">

.unit ul {
  list-style-type: none;
  padding: 0;
}

</style>
