<template>
  <div class="newUnit">
    <a-steps :current="stage" style="margin-bottom: 28px">
      <a-step :title="$t('newFlashcardSet.firstStage.title')" />
      <a-step :title="$t('newFlashcardSet.secondStage.title')" />
    </a-steps>
    <FlashcardFirstStage @infoSubmit="handleInfoSubmit" v-show="stage === 0"/>
    <FlashcardsSecondStage @flashcardsSubmit="handleFlashcardsSubmit" @back="prev()" v-show="stage === 1" />
  </div>
</template>
<script>
import { db } from '@/initFirebase';
import FlashcardsSecondStage from '@/components/flashcardStages/FlashcardsSecondStage.vue';
import FlashcardFirstStage from '@/components/flashcardStages/FlashcardFirstStage.vue';

export default {
  name: 'NewSet',
  components: {
    FlashcardFirstStage,
    FlashcardsSecondStage,
  },
  data() {
    return {
      stage: 0,
      basicInfo: {},
      flashcardSet: [],
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
    handleFlashcardsSubmit(values) {
      this.flashcardSet = values;
      this.addUnit();
    },
    addUnit() {
      const dbData = {
        ...this.basicInfo,
        set: this.flashcardSet,
        uid: this.$store.state.user.uid,
      };

      db.collection('flashcards').add(dbData)
        .then(() => {
          this.$notification['success']({
            message: this.$t('newFlashcardSet.success.title'),
            description: this.$t('newFlashcardSet.success.description'),
          });
        })
        .catch(() => {
          this.$notification['warning']({
            message: this.$t('newFlashcardSet.warning.title'),
            description: this.$t('newFlashcardSet.warning.description'),
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
