<template>
  <button class="cta">
    <span><slot/></span>
    <svg width="13px" height="10px" viewBox="0 0 13 10">
      <path d="M1,5 L11,5"></path>
      <polyline points="8 1 12 5 8 9"></polyline>
    </svg>
  </button>
</template>

<style lang="scss">
  .cta {
    padding: 15px 25px;
    height: 60px;
    background: none;
    font-size: 1.2em;
    cursor: pointer;
    border: none;
    position: relative;
    z-index: 3;
    font-family: 'Poppins', sans-serif;
    color: #111;
    letter-spacing: .25em;
    font-weight: bold;

    svg {
      margin-left: 10px;
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke: #111;
      stroke-width: 2;
      transform: translateX(-5px);
      transition: transform .3s ease-out;
    }

    &::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 60px;
      height: 100%;
      border-radius: 31px;
      background: cornflowerblue;
      opacity: .7;
      transition: opacity .3s ease-out, width .3s ease-out;
      will-change: width;
    }

    &:hover, &:focus {
      svg {
        transform: translateX(0);
      }

      &::before {
        opacity: 1;
        width: 100%;
      }
    }
  }
</style>
