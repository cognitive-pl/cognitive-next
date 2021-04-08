<template>
  <section class="section science">
    <div class="science__content">
      <h1 v-html="$t('landing.science.title')"></h1>
      <p>{{ $t('landing.science.paragraph') }}</p>
      <a href="https://alexskubala.gitbook.io/cognitive/" target="_blank">
        <a-button type="link">{{ $t('landing.science.link') }} <a-icon type="right" /></a-button>
      </a>
    </div>
    <BlobScene class="science__blob" />
  </section>
</template>

<script>
import BlobScene from '@/assets/svgs/blobs-group2.svg';

export default {
  name: 'ScieneSection',
  components: {
    BlobScene,
  },
};
</script>

<style lang="scss">
  .science {
    display: flex;
    width: 100%;
    height: 70vh;
    position: relative;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .science__content {
    display: flex;
    width: 85%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    p, button {
      font-size: 1.1em;
    }

    p { margin-top: 10px; }
  }

  .science__blob {
    position: absolute;
    display: none;
    opacity: .3;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;

    @media (min-width: 768px) {
      display: block;
    }
  }
</style>
