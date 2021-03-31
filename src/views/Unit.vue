<template>
  <div class="unit">
    <div v-if="unitObject">
      <h2>{{ unitObject.name }}</h2>
      <h4>{{ unitObject.description }}</h4>
      <a-popconfirm
        :title='$t("unit.popConfirm.title")'
        :ok-text='$t("unit.popConfirm.ok")'
        :cancel-text='$t("unit.popConfirm.cancel")'
        @confirm="deleteDoc"
      >
        <a-button type="danger" ghost>{{ $t("unit.delete") }}</a-button>
      </a-popconfirm>
      <a-button type="primary" ghost @click="addReminder" style="margin-left: 15px">{{ $t("unit.calendar") }}</a-button>

      <a-row :gutter="[24, { xs: 12, sm: 12, md: 0 }]" style="margin-top: 10px">
        <a-col :xs="{ span: 24 }" :md="{ span: 12 }" :lg="{ span: 8 }">
          <h3>{{ $t("unit.sessionsToday") }}</h3>
          <ol v-if="todaySessions.length > 0">
            <li v-for="({ content }, index) in todaySessions" :key="index">
              {{ content }}
            </li>
          </ol>
          {{todaySessions.length === 0 ? $t('unit.noSession'): null}}
        </a-col>
        <a-col :xs="{ span: 24 }" :md="{ span: 12 }" :lg="{ span: 8 }">
          <h3>{{ $t("unit.lastPart") }}</h3>
          {{notDone ? notDone.content : $t("unit.everythingDone")}}
          <br/>
          <a-button type="primary" style="margin-top: 15px" @click="markAsDone" :disabled="!notDone">{{ $t("unit.markAsDone") }}</a-button>
        </a-col>
      </a-row>
      <p style="margin-top: 25px">{{ $t("unit.material") }}</p>
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
      this.$service.fetchUnit(this.$route.params.id)
        .then(({ unitObject, notDone, todaySessions }) => {
          this.unitObject = unitObject;
          this.notDone = notDone;
          this.todaySessions = todaySessions;
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
    addReminder() {
      this.$service.makeCalendarRemiders(this.unitObject.parts)
        .then(() => {
          this.$notification['success']({
            message: this.$t('unit.reminder.title'),
            description: this.$t('unit.reminder.description'),
          });
        })
        .catch(() => {
          this.$message.error('Something went wrong with database connection...');
        });
    },
    isTodaySession(index) {
      return this.todaySessions.includes(this.unitObject.parts[index]);
    },
    markAsDone() {
      this.$service.markSessionAsDone()
        .then(() => this.fetchData())
        .catch(() => this.$message.error('Something went wrong with database connection...'));
    },
    deleteDoc() {
      this.$service.deleteUnit()
        .then(() => {
          this.$router.push({ path: '/app' });
        })
        .catch(() => this.$message.error('Something went wrong with database connection...'));
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
