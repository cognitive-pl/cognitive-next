<template>
  <section class="section features">
    <h1>{{ $t('landing.features.title') }}</h1>
    <div class="features__grid">
      <div class="grid__img">
        <Woman1/>
      </div>
      <div class="grid__text">
        <ul>
          <li v-for="(content, index) in $t('landing.features.list')" :key="index" v-html="content"></li>
        </ul>
        <router-link to="/login">
          <CTA>{{ $t('landing.features.cta') }}</CTA>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import CTA from '@/components/CTA.vue';
import Woman1 from '@/assets/peeps/woman1.svg';

export default {
  name: 'FeatureSection',
  components: {
    Woman1,
    CTA,
  },
};
</script>

<style lang="scss">
  .features {
    text-align: center;

    @media (min-width: 768px) {
      h1 {
        margin-bottom: 10vh;
      }
    }

  }

  .features__grid {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .grid__img {
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }

  .grid__text {
    text-align: left;
    padding: 5vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.1em;

    ul {
      list-style-type: none;
      padding: 0 10vw;

      li {
        margin-bottom: 20px;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          z-index: -1;
          top: 0;
          left: -10px;
          width: 20px;
          height: 20px;
          background: cornflowerblue;
          border-radius: 6px;
          transform: translateY(3px) rotate(45deg);
        }
      }
    }

    .cta {
      padding: 10px 20px;
      font-size: 1.1em;
    }

    @media (min-width: 768px) {
      ul {
        padding: 0;
      }

      .cta {
        padding: 15px 25px;
        font-size: 1.2em;
      }
    }
  }
</style>
