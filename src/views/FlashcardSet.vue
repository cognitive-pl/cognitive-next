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
      this.$service.fetchSet(this.$route.params.id)
        .then(({ flashcardSet, visibleSet, presentCard }) => {
          this.flashcardSet = flashcardSet;
          this.visibleSet = visibleSet;
          this.presentCard = presentCard;
        })
        .catch((reason) => {
          if (reason == 'wrong user') {
            this.$notification['error']({
              message: 'Something went wrong',
              description: 'It seems like you are not the autor of this unit...',
            });
          } else this.$message.error('Something went wrong with database connection...');
        });
    },
    updateData() {
      this.$service.updateSet()
        .catch(() => this.$message.error('Something went wrong with database connection...'));
    },
    reveal() {
      this.firstSide = false;
    },
    goodAnswear() {
      this.$service.checkGoodAnswer().then(({
        allDone,
        visibleSet,
        presentCard,
        passedNewSection,
      }) => {
        this.allDone = allDone;
        this.visibleSet = visibleSet;
        this.presentCard = presentCard;

        if (passedNewSection) {
          this.$notification['success']({
            message: 'So awesome!',
            description: "You've just finished flashcard session for today! (Better to come back a few days apart)",
          });
        }
        this.firstSide = true;
      });
    },
    badAnswear() {
      this.$service.checkBadAnswer().then(({ visibleSet, presentCard }) => {
        this.visibleSet = visibleSet;
        this.presentCard = presentCard;
        this.firstSide = true;
      });
    },
    restart() {
      this.$service.restartSet().then(({ visibleSet, presentCard }) => {
        this.visibleSet = visibleSet;
        this.presentCard = presentCard;
        this.firstSide = true;
        this.allDone = false;
      });
    },
    deleteDoc() {
      this.$service.deleteSet()
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
