<template>
  <div>
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 9 }" @submit="handleSubmit">
      <!-- Form -->
      <h3>{{ $t('newUnit.thirdStage.description') }}</h3>
      <ol>
        <li v-for="(part, index) in timeline" :key="index">
          {{part.content}}, {{new Date(part.date).toLocaleDateString()}}
        </li>
      </ol>
      <!-- Submit -->
      <a-form-item
        style='display: inline-block; margin-right: 10px'
      >
        <a-button @click.once="$emit('back')">
          {{ $t('newUnit.thirdStage.previousStep') }}
        </a-button>
      </a-form-item>
      <a-form-item
        style='display: inline-block'
      >
        <a-button type="primary" html-type="submit">
          {{ $t('newUnit.thirdStage.addUnit') }}
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import SpreadOverTime from '@/helpers/spreadOverTime';

export default {
  name: 'FirstStage',
  data: function () {
    return {
      deadline: '',
      parts: [],
      timeline: [],
    };
  },
  props: [
    'deadlineProp',
    'partsProp',
  ],
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'time' });
  },
  async mounted() {
    this.deadline = new Date(this.deadlineProp);
    this.parts = this.partsProp;

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    this.timeline = await new SpreadOverTime(tomorrow, this.deadline, this.parts).schedule();
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.$emit('timelineSubmit', this.timeline);
    },
  },
};
</script>

<style lang="scss">
.events {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
