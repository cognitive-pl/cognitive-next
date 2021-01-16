<template>
  <div class="timer">
    <a-progress
      type="circle"
      :percent="percent"
      :format="() => `${minutes}:${seconds}`"
    />
    <a-button-group>
      <a-button icon="step-forward" @click="start" />
      <a-button icon="pause" @click="stop" />
    </a-button-group>
  </div>
</template>

<script>
export default {
  name: 'Timer',
  data() {
    return {
      interval: '',
      startTime: 10,
      time: 0,
      percent: 100,
      minutes: 0,
      seconds: 10,
    };
  },
  methods: {
    start() {
      this.time = this.startTime;
      this.percent = (this.time / this.startTime) * 100;
      this.minutes = Math.floor(this.time / 60);
      this.seconds = this.time % 60;

      this.interval = window.setInterval(() => {
        if (this.time != 0) {
          this.time--;
          this.percent = (this.time / this.startTime) * 100;
          this.minutes = Math.floor(this.time / 60);
          this.seconds = this.time % 60;
        } else window.clearInterval(this.interval);
      }, 1000);
    },
    stop() {
      window.clearInterval(this.interval);
    },
  },
};
</script>

<style lang="scss">
  .timer {
    display: flex;
    flex-direction: column;
  }
</style>
