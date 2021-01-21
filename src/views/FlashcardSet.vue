<template>
  <div class="flashcardSet">
    <h2>{{flashcardSet.name}}</h2>
    <h4>{{flashcardSet.description}}</h4>
    <a-card style="width: 300px; margin-top: 50px" :bodyStyle="{padding: '50px 30px', textAlign: 'center'}">
      <template slot="actions">
        <a-icon key="smile" type="smile" style="font-size: 1.5em; color: #4DBA87"/>
        <a-icon key="frown" type="frown" style="font-size: 1.5em; color: #fe463a"/>
      </template>
      <a-card-meta :title="presentCard.firstSide"></a-card-meta>
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
      flashcardSetRef.get()
        .then((doc) => {
          this.flashcardSet = doc.data();
          this.visibleSet = [
            ...this.flashcardSet.section1,
            ...this.flashcardSet.section2,
            ...this.flashcardSet.section3,
            ...this.flashcardSet.section4,
            ...this.flashcardSet.section5,
          ];
          this.visibleSet = this.visibleSet.filter(({ done }) => !done);
          this.presentCard = { ...this.visibleSet[0] };
          console.log(this.presentCard);
        })
        .catch(() => this.$message.error('Something went wrong with database connection...'));

      /* const dbData = {
        name: 'typical cards set',
        description: 'that is description',
        section1: [
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
        ],
        section2: [],
        section3: [],
        section4: [],
        section5: [],
      };

      db.collection('flashcards').add(dbData); */
    },
  },
};
</script>
