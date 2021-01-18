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
            v-if="todaySession"
          />
          <a-badge
            :status="done ? 'success' : 'default'"
            :text="`${content}, ${ new Date(date).toLocaleDateString() }`"
            v-if="!todaySession"
          />
        </li>
      </ul>
      <h3>Session for today:</h3>
      {{todaySession ? todaySession.content : 'No session for today'}}
      <br/>
      <br/>
      <h3>Last not done part</h3>
      {{notDone ? notDone.content : "Everything's done!"}}
      <br/>
      <a-button type="primary" @click="markAsDone">Mark session as done</a-button>
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
      notDone: '',
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const unitRef = db.collection('units').doc(this.$route.params.id);
      unitRef.get()
        .then((doc) => {
          this.unitObject = doc.data();
          this.todaySession = this.unitObject.parts.find(({ date }) => {
            const today = new Date();
            const partDate = new Date(date);
            return (
              today.getDate() === partDate.getDate()
              && today.getMonth() === partDate.getMonth()
              && today.getFullYear() === partDate.getFullYear()
            );
          });
          this.notDone = this.unitObject.parts.find(({ done }) => !done);
        })
        .catch(() => this.$message.error('Something went wrong with database connection...'));
    },
    markAsDone() {
      const notDoneIndex = this.unitObject.parts.findIndex(({ content }) => content === this.notDone.content);
      const newParts = [...this.unitObject.parts];
      newParts[notDoneIndex] = {
        ...this.notDone,
        done: true,
      };

      db.collection('units')
        .doc(this.$route.params.id)
        .update({ parts: newParts })
        .then(() => this.fetchData())
        .catch(() => this.$message.error('Something went wrong with database connection...'));
    },
  },
};
</script>

<style lang="scss">

.unit ul {
  list-style-type: none;
  padding: 0;
}

</style>
