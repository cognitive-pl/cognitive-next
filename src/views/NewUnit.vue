<template>
  <div class="newUnit">
    <a-steps :current="stage" style="margin-bottom: 28px">
      <a-step :title='$t("newUnit.firstStage.title")' />
      <a-step :title='$t("newUnit.secondStage.title")' />
      <a-step :title='$t("newUnit.thirdStage.title")' />
    </a-steps>
    <FirstStage @infoSubmit="handleInfoSubmit" v-show="stage === 0"/>
    <SecondStage @partsSubmit="handlePartsSubmit" @back="prev()" v-show="stage === 1" />
    <ThirdStage :partsProp="parts" :deadlineProp="basicInfo.deadline" @timelineSubmit="handleTimelineSubmit" @back="prev()" v-if="stage === 2" />
  </div>
</template>
<script>
import ThirdStage from '@/components/stages/ThirdStage.vue';
import SecondStage from '@/components/stages/SecondStage.vue';
import FirstStage from '@/components/stages/FirstStage.vue';

export default {
  name: 'NewUnit',
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

      this.$service.newUnit(dbData)
        .then(() => {
          this.$notification['success']({
            message: this.$t('newUnit.messages.success.title'),
            description: this.$t('newUnit.messages.success.description'),
          });
        })
        .catch(() => {
          this.$notification['warning']({
            message: this.$t('newUnit.messages.warning.title'),
            description: this.$t('newUnit.messages.warning.description'),
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
