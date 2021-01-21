<template>
  <div class="main">
    <h1>Your flashcard sets</h1>
      <div class="main__grid" v-if="flashcards.length > 0">
        <a-card :title="flashcardSet.name" v-for="(flashcardSet, index) in flashcards" :key="index">
          <a slot="extra">
            <router-link :to="'/flashcard-set/'+flashcardSet.id">
              Open
              <a-icon type="right" />
            </router-link>
          </a>
          <p>{{getCardsNum(flashcardSet)}} card(s), {{flashcardSet.description}}</p>
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
  methods: {
    getCardsNum(flashcardSet) {
      return [
        ...flashcardSet.section1,
        ...flashcardSet.section2,
        ...flashcardSet.section3,
        ...flashcardSet.section4,
        ...flashcardSet.section5,
      ].length;
    },
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
