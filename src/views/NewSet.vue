<template>
  <div class="newUnit">
    <a-steps :current="stage" style="margin-bottom: 28px">
      <a-step title="Basic info" />
      <a-step title="Material parts" />
      <a-step title="Division over time" />
    </a-steps>
    <FirstStage @infoSubmit="handleInfoSubmit" v-show="stage === 0"/>
    <SecondStage @partsSubmit="handlePartsSubmit" @back="prev()" v-show="stage === 1" />
    <ThirdStage :partsProp="parts" :deadlineProp="basicInfo.deadline" @timelineSubmit="handleTimelineSubmit" @back="prev()" v-if="stage === 2" />
  </div>
</template>
<script>
import { db } from '@/initFirebase';
import ThirdStage from '@/components/stages/ThirdStage.vue';
import SecondStage from '@/components/stages/SecondStage.vue';
import FirstStage from '@/components/stages/FirstStage.vue';

export default {
  name: 'NewSet',
  components: {
    FirstStage,
    SecondStage,
    ThirdStage,
  },
  data() {
    return {
      stage: 0,
      basicInfo: {},
      parts: [],
      timelineSubmit: [],
    };
  },
  methods: {
    prev() {
      this.stage--;
    },
    handleInfoSubmit(values) {
      this.stage++;
      this.basicInfo = values;
    },
    handlePartsSubmit(values) {
      this.parts = values;
      this.stage++;
    },
    handleTimelineSubmit(values) {
      this.timeline = values;
      this.addUnit();
    },
    addUnit() {
      const dbData = {
        ...this.basicInfo,
        parts: this.timeline,
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
