<template>
  <div class="main">
    <h1>{{ $t('flashcards.welcome') }}</h1>
      <div class="main__grid" v-if="flashcards.length > 0">
        <a-card :title="flashcardSet.name" v-for="(flashcardSet, index) in flashcards" :key="index">
          <a slot="extra">
            <router-link :to="'/flashcard-set/'+flashcardSet.id">
              {{ $t('flashcards.openButton') }}
              <a-icon type="right" />
            </router-link>
          </a>
          <p>{{flashcardSet.set.length}} {{ $t('flashcards.cards') }}, {{flashcardSet.description}}</p>
        </a-card>
      </div>
      <a-empty size="large" v-if="flashcards.length == 0">
        <span slot="description">Go ahead and make some flashcards!</span>
        <a-button type="primary"><router-link to="/new-set">Add flashcard set</router-link></a-button>
      </a-empty>
  </div>
</template>

<script>
export default {
  name: 'Flashcards',
  data: function () {
    return {
      flashcards: [],
    };
  },
  mounted() {
    this.$store.dispatch('bindFlashcardSets');
    this.flashcards = this.$store.state.flashcards;
  },
};
</script>

<style lang="scss">
  main h1 {
    margin-bottom: 2rem;
  }

  .main__grid {
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 2.5rem 3rem;
  }
</style>
