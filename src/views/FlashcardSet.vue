<template>
  <div class="flashcardSet">
    <div v-if="visibleSet.length > 0">
      <h2>{{flashcardSet.name}}</h2>
      <h4>{{flashcardSet.description}}</h4>
      <a-popconfirm
        title="Are you sure?"
        ok-text="Yes"
        cancel-text="No"
        @confirm="deleteDoc"
      >
        <a-button type="danger" ghost>Delete</a-button>
      </a-popconfirm>
      <a-card v-if="!allDone" class="flashcardSet__card" :bodyStyle="{padding: '50px 25px', textAlign: 'center'}">
        <template slot="actions">
          <a-icon v-if="firstSide" key="eye" type="eye" style="font-size: 1.5em;" @click="reveal"/>
          <a-icon v-if="!firstSide" key="smile" type="smile" style="font-size: 1.5em; color: #4DBA87" @click="goodAnswear"/>
          <a-icon v-if="!firstSide" key="frown" type="frown" style="font-size: 1.5em; color: #fe463a" @click="badAnswear"/>
        </template>
        <a-card-meta :description="firstSide ? presentCard.firstSide : presentCard.secondSide"></a-card-meta>
      </a-card>

      <a-card v-if="allDone" class="flashcardSet__card" :bodyStyle="{padding: '50px 25px', textAlign: 'center'}">
        <template slot="actions">
          <a-icon key="sync" type="sync" style="font-size: 1.5em;" @click="restart"/>
        </template>
        <a-card-meta description="You revealed all set, you can restart it by clicking button below."></a-card-meta>
      </a-card>
    </div>
  </div>
</template>

<script>
import { db, auth } from '@/initFirebase';

export default {
  name: 'FlashcardSet',
  data: function () {
    return {
      flashcardSetRef: null,
      flashcardSet: [],
      firstSide: true,
      allDone: false,
      visibleSet: [],
      presentCard: {},
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const flashcardSetRef = db.collection('flashcards').doc(this.$route.params.id);
      this.flashcardSetRef = flashcardSetRef;
      flashcardSetRef.get()
        .then((doc) => {
          if (doc.data().uid === auth.currentUser.uid) {
            this.flashcardSet = doc.data();
            this.visibleSet = this.flashcardSet.set;
            this.presentCard = { ...this.visibleSet[0] };
          } else {
            this.$notification['error']({
              message: 'Something went wrong',
              description: 'It seems like you are not the autor of this set...',
            });
          }
        })
        .catch(() => this.$message.error('Something went wrong with database connection...'));
    },
    updateData() {
      this.flashcardSetRef
        .update({ set: this.visibleSet })
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

      this.updateData();

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

      this.updateData();

      this.presentCard = { ...this.visibleSet[0] };
      this.firstSide = true;
    },
    restart() {
      this.visibleSet.forEach((card) => {
        const cardIndex = this.visibleSet.findIndex((cardSearch) => cardSearch === card);
        this.visibleSet[cardIndex] = {
          ...card,
          section: 1,
        };
      });

      this.updateData();

      this.presentCard = { ...this.visibleSet[0] };
      this.firstSide = true;
      this.allDone = false;
    },
    deleteDoc() {
      this.flashcardSetRef.delete()
        .then(() => {
          this.$router.push({ path: '/flashcards' });
        })
        .catch(() => this.$message.error('Something went wrong with database connection...'));
    },
  },
};
</script>

<style lang="scss">

.flashcardSet__card {
  max-width: 80vw;
  margin-top: 50px;
  font-weight: bold;
  font-size: 1.1em;

  @media (min-width: 768px) {
    max-width: 30vw;
  }

    @media (min-width: 1024px) {
    max-width: 20vw;
  }

    @media (min-width: 1440px) {
    max-width: 20vw;
  }
}

</style>
