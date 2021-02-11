<template>
  <div class="newUnit" v-if="unitObject">
    <a-steps :current="stage" style="margin-bottom: 28px">
      <a-step title="Basic info" />
      <a-step title="Material parts" />
      <a-step title="Division over time" />
    </a-steps>
    <FirstStage :basicInfo="basicInfo" @infoSubmit="handleInfoSubmit" v-show="stage === 0"/>
    <SecondStage :parts="parts" @partsSubmit="handlePartsSubmit" @back="prev()" v-show="stage === 1" />
    <ThirdStage update :partsProp="parts" :deadlineProp="basicInfo.deadline" @timelineSubmit="handleTimelineSubmit" @back="prev()" v-if="stage === 2" />
  </div>
</template>
<script>
import { db, auth } from '@/initFirebase';
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
      unitRef: null,
      unitObject: {},
      basicInfo: {},
      parts: [],
      timelineSubmit: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const unitRef = db.collection('units').doc(this.$route.params.id);
      this.unitRef = unitRef;
      unitRef.get()
        .then((doc) => {
          if (doc.data().uid === auth.currentUser.uid) {
            this.unitObject = doc.data();
            this.basicInfo = {
              name: this.unitObject.name,
              description: this.unitObject.description,
              deadline: this.unitObject.deadline,
            };
            console.log(this.basicInfo);
            this.parts = this.unitObject.parts;
          } else {
            this.$notification['error']({
              message: 'Something went wrong',
              description: 'It seems like you are not the autor of this unit...',
            });
          }
        })
        .catch(() => this.$message.error('Something went wrong with database connection...'));
    },
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
      this.updateUnit();
    },
    updateUnit() {
      const dbData = {
        ...this.basicInfo,
        parts: this.timeline,
        uid: this.$store.state.user.uid,
      };

      this.unitRef.update(dbData)
        .then(() => {
          this.$notification['success']({
            message: 'Great!',
            description: 'Unit is updated!',
          });
          this.$router.push({ path: `/unit/${this.$route.params.id}` });
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
