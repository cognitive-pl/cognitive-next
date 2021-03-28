<template>
  <!-- <v-tour v-if="$router.currentRoute.meta.requiresAuth && $store.state.user" name="tour" :steps="tourSteps" :options="{labels: tourOptions}" :callbacks="tourCallbacks"></v-tour> -->
  <v-tour v-if="$router.currentRoute.meta.requiresAuth" name="tour" :steps="tourSteps" :options="{labels: tourOptions}" :callbacks="tourCallbacks"></v-tour>
</template>

<script>
export default {
  name: 'Tour',
  data: function () {
    return {
      tourOptions: {
        buttonSkip: this.$t('tour.skip'),
        buttonPrevious: this.$t('tour.previous'),
        buttonNext: this.$t('tour.next'),
        buttonStop: this.$t('tour.finish'),
      },
      tourCallbacks: {
        onNextStep: this.nextStep,
        onSkip: this.finishTour,
        onFinish: this.finishTour,
      },
      tourSteps: [
        {
          target: '[data-v-step="welcome"]',
          header: {
            title: this.$t('tour.welcome.title'),
          },
          content: this.$t('tour.welcome.content'),
          params: {
            placement: 'left',
          },
          before: () => this.waitForUser(),
        },
        {
          target: '[data-v-step="home"]',
          content: this.$t('tour.home'),
          params: {
            placement: 'right',
          },
        },
        {
          target: '[data-v-step="addUnit"]',
          content: this.$t('tour.addUnit'),
        },
        {
          target: '[data-v-step="flashcards"]',
          content: this.$t('tour.flashcards'),
          params: {
            placement: 'right',
          },
        },
        {
          target: '[data-v-step="addFlashcards"]',
          content: this.$t('tour.addFlashcards'),
          params: {
            placement: 'right',
          },
        },
        {
          target: '[data-v-step="language"]',
          content: this.$t('tour.language'),
          params: {
            placement: 'right',
          },
        },
        {
          target: '[data-v-step="pwa"]',
          content: this.$t('tour.pwa'),
          params: {
            placement: 'top',
          },
        },
        {
          target: '[data-v-step="support"]',
          content: this.$t('tour.support'),
          params: {
            placement: 'right',
          },
        },
      ],
    };
  },
  mounted() {
    this.isTourDone = this.$service.getTour();
    if (this.isTourDone == 'false') {
      this.$tours['tour'].start();
    }
  },
  methods: {
    async waitForUser() {
      const user = await this.$store.state.user;
      return user;
    },
    nextStep(step) {
      this.$emit('next', step);
    },
    finishTour() {
      this.$emit('finish');
    },
  },
};
</script>
