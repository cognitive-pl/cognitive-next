<template>
  <div class="flashcardSet">
    <h2>{{flashcardSet.name}}</h2>
    <h4>{{flashcardSet.description}}</h4>
    <a-card v-if="!allDone" style="width: 300px; margin-top: 50px" :bodyStyle="{padding: '50px 30px', textAlign: 'center'}">
      <template slot="actions">
        <a-icon v-if="firstSide" key="eye" type="eye" style="font-size: 1.5em;" @click="reveal"/>
        <a-icon v-if="!firstSide" key="smile" type="smile" style="font-size: 1.5em; color: #4DBA87" @click="goodAnswear"/>
        <a-icon v-if="!firstSide" key="frown" type="frown" style="font-size: 1.5em; color: #fe463a" @click="badAnswear"/>
      </template>
      <a-card-meta :title="firstSide ? presentCard.firstSide : presentCard.secondSide"></a-card-meta>
    </a-card>
  </div>
</template>

<script>
import { db } from '@/initFirebase';

export default {
  name: 'FlashcardSet',
  data: function () {
    return {
      flashcardSet: [],
      firstSide: true,
      allDone: false,
      visibleSet: [
        {
          firstSide: 'firstSide',
          secondSide: 'secondSide',
          section: 1,
        },
        {
          firstSide: 'firstSide2',
          secondSide: 'secondSide2',
          section: 1,
        },
        {
          firstSide: 'firstSide3',
          secondSide: 'secondSide3',
          section: 1,
        },
      ],
      updateSet: [],
      presentCard: {},
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const flashcardSetRef = db.collection('flashcards').doc(this.$route.params.id);
      flashcardSetRef.get()
        .then((doc) => {
          this.flashcardSet = doc.data();
          // this.visibleSet = this.flashcardSet.set;
          // this.visibleSet = this.visibleSet.filter(({ done }) => !done);
          this.updateSet = this.visibleSet;
          this.presentCard = { ...this.visibleSet[0] };
        })
        .catch(() => this.$message.error('Something went wrong with database connection...'));
    },
    reveal() {
      this.firstSide = false;
    },
    goodAnswear() {
      const oldSection = this.presentCard.section;
      if (this.presentCard.section < 5) this.presentCard.section++;

      this.visibleSet.push(this.presentCard);
      this.visibleSet.shift();
      this.visibleSet = this.visibleSet.sort(({ section: sectionA }, { section: sectionB }) => sectionA - sectionB);

      if (this.visibleSet.filter(({ section }) => section < 5).length === 0) this.allDone = true;

      db.collection('flashcards')
        .doc(this.$route.params.id)
        .update({ set: this.visibleSet })
        .catch(() => this.$message.error('Something went wrong with database connection...'));

      this.presentCard = { ...this.visibleSet[0] };

      if (this.presentCard.section > oldSection) {
        this.$notification['success']({
          message: 'So awesome!',
          description: "You've just finished flashcard session for today! (Better to come back a few days apart)",
        });
      }
      this.firstSide = true;
    },
    badAnswear() {
      this.visibleSet.push(this.presentCard);
      this.visibleSet.shift();
      this.visibleSet = this.visibleSet.sort(({ section: sectionA }, { section: sectionB }) => sectionA - sectionB);

      this.visibleSet = this.visibleSet.filter(({ done }) => !done);
      this.presentCard = { ...this.visibleSet[0] };
      this.firstSide = true;
    },
  },
};
</script>
