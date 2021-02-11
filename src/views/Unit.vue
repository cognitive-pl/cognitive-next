<template>
  <div class="unit">
    <div v-if="unitObject">
      <h2>{{ unitObject.name }}</h2>
      <h4>{{ unitObject.description }}</h4>
      <a-popconfirm
        title="Are you sure?"
        ok-text="Yes"
        cancel-text="No"
        @confirm="deleteDoc"
      >
        <a-button type="danger" ghost>Delete</a-button>
      </a-popconfirm>
      <a-row :gutter="[24, { xs: 12, sm: 12, md: 0 }]" style="margin-top: 10px">
        <a-col :xs="{ span: 24 }" :md="{ span: 12 }" :lg="{ span: 8 }">
          <h3>Sessions for today:</h3>
          <ol v-if="todaySessions.length > 0">
            <li v-for="({ content }, index) in todaySessions" :key="index">
              {{ content }}
            </li>
          </ol>
          {{todaySessions.length === 0 ? 'No sessions for today': null}}
        </a-col>
        <a-col :xs="{ span: 24 }" :md="{ span: 12 }" :lg="{ span: 8 }">
          <h3>Last not done part</h3>
          {{notDone ? notDone.content : "Everything's done!"}}
          <br/>
          <a-button type="primary" style="margin-top: 15px" @click="markAsDone" :disabled="!notDone">Mark session as done</a-button>
        </a-col>
      </a-row>
      <p style="margin-top: 25px">Parts of material:</p>
      <ul>
        <li v-for="({ content, date, done }, index) in unitObject.parts" :key="index">
          <a-badge
            :status="done ? 'success' : (isTodaySession(index) ? 'processing' : 'default')"
            :text="`${content}, ${ new Date(date).toLocaleDateString() }`"
            v-if="todaySessions"
          />
          <a-badge
            :status="done ? 'success' : 'default'"
            :text="`${content}, ${ new Date(date).toLocaleDateString() }`"
            v-if="!todaySessions"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { db, auth } from '@/initFirebase';

export default {
  name: 'Unit',
  data: function () {
    return {
      unitObject: {},
      todaySessions: '',
      notDone: '',
      unitRef: null,
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
            this.todaySessions = this.unitObject.parts.filter(({ date }) => {
              const today = new Date();
              const partDate = new Date(date);
              return (
                today.getDate() === partDate.getDate()
                && today.getMonth() === partDate.getMonth()
                && today.getFullYear() === partDate.getFullYear()
              );
            });
            this.notDone = this.unitObject.parts.find(({ done }) => !done);
          } else {
            this.$notification['error']({
              message: 'Something went wrong',
              description: 'It seems like you are not the autor of this unit...',
            });
          }
        })
        .catch(() => this.$message.error('Something went wrong with database connection...'));
    },
    isTodaySession(index) {
      return this.todaySessions.includes(this.unitObject.parts[index]);
    },
    markAsDone() {
      const notDoneIndex = this.unitObject.parts.findIndex((part) => part === this.notDone);
      const newParts = [...this.unitObject.parts];
      newParts[notDoneIndex] = {
        ...this.notDone,
        done: true,
      };

      this.unitRef
        .update({ parts: newParts })
        .then(() => this.fetchData())
        .catch(() => this.$message.error('Something went wrong with database connection...'));
    },
    deleteDoc() {
      this.unitRef.delete()
        .then(() => {
          this.$router.push({ path: '/app' });
        })
        .catch(() => this.$message.error('Something went wrong with database connection...'));
    },
    updateDoc() {
      this.$router.push({ path: `/update-unit/${this.$route.params.id}` });
    },
  },
};
</script>

<style lang="scss">

.unit ul {
  list-style-type: none;
  padding: 0;
}

.unit ol {
  padding-left: 20px;
}

.unit .sessionInfo {
  display: flex;
  flex-direction: column;
  width: 100%;

  * {
    width: 100%;
  }

  .notDone button {
    display: block;
    width: auto;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    * {
      width: 50%;
    }
  }
}

</style>
