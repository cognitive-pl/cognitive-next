<template>
  <div class="newUnit">
    <a-steps :current="stage" style="margin-bottom: 28px">
      <a-step title="Basic info" />
      <a-step title="Material parts" />
    </a-steps>
    <FirstStage @nextStage="next" v-if="stage === 0" />
    <SecondStage @handleSubmit="handleAddUnit" @back="prev()" v-if="stage === 1" />
  </div>
</template>
<script>
import { db } from '@/initFirebase';
import FirstStage from '@/components/FirstStage.vue';
import SecondStage from '@/components/SecondStage.vue';

export default {
  name: 'NewUnit',
  components: {
    FirstStage,
    SecondStage,
  },
  data() {
    return {
      stage: 0,
      basicInfo: {},
      parts: [],
      steps: [
        {
          title: 'First',
        },
        {
          title: 'Second',
        },
        {
          title: 'Last',
        },
      ],
    };
  },
  methods: {
    next(values) {
      this.stage++;
      this.basicInfo = values;
    },
    prev() {
      this.stage--;
    },
    handleAddUnit(values) {
      this.parts = values;

      const dbData = {
        ...this.basicInfo,
        parts: this.parts,
        uid: this.$store.state.user.uid,
      };

      db.collection('units').add(dbData)
        .then(() => {
          this.$notification['success']({
            message: 'Great!',
            description: 'You just made new unit, happy learning!',
          });
        })
        .catch(() => {
          this.$notification['warning']({
            message: 'Oh, something went wrong...',
            description: 'It looks like there are some problems with databse, please try again later...',
          });
        });
    },
  },
};
</script>
<style scoped>
  .steps-action {
    margin-top: 28px;
  }
</style>
