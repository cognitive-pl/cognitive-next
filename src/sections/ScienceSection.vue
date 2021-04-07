<template>
  <div class="section science">
    <div class="science__box">
      <h1 v-html="$t('landing.science.title')"></h1>
      <p>{{ $t('landing.science.paragraph') }}</p>
      <a href="https://alexskubala.gitbook.io/cognitive/" target="_blank">
        <a-button type="link">{{ $t('landing.science.link') }} <a-icon type="right" /></a-button>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
  .science {
    display: flex;
    align-items: center;
    justify-content: center;

    .science__box {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 5vw;

      p, button {
        font-size: 1.1em;
      }

      p { margin-top: 10px; }

      @media (min-width: 768px) {
        width: 75%;
        box-shadow: 0 0 120px -70px #000;
        border-radius: 10px;
      }
    }
  }
</style>
