<template>
  <div class="support">
    <h1>Support <span class="title">Cognitive</span></h1>
    <p>It's awesome that you want to support my project 😻<br/> I prepared two ways for doing that: </p>
    <a-row :gutter="[16, 20]" style="margin-top: 30px">
      <a-col :xs="{ span: 20, offset: 1 }" :lg="{ span: 7, offset: 4 }" :xl="{ span: 5, offset: 6 }" >
        <a-card class="card" title="Subscription">
          <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=Y7VCYA25JRYS4" target="_blank">
            <button>5 PLN / month</button>
          </a>
        </a-card>
      </a-col>
      <a-col :xs="{ span: 20, offset: 1 }" :lg="{ span: 7, offset: 2 }" :xl="{ span: 5, offset: 2 }">
        <a-card class="card" title="Support once">
          <a href="https://buymeacoffee.com/askubala" target="_blank">
            <button>Buy a coffe ☕</button>
          </a>
          <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=HCSTEPKKGVJ3J" target="_blank">
            <button>10 PLN / once</button>
          </a>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'Support',
};
</script>

<style lang="scss">
  .support {
    text-align: center;

    .title {
      text-decoration: underline;
      text-decoration-color: cornflowerblue;
      text-decoration-thickness: 3px;
    }

    p {
      font-size: 18px;
    }

    .card {
      .ant-card-head {
        background: cornflowerblue;
        color: white;
        font-size: 1.2em;
      }

      .ant-card-body a {
        display: block;
        margin-top: 25px;

        &:first-child {
          margin-top: 0;
        }
      }

      button {
        color: black;
        font-size: 16px;
        padding: 10px 15px;
        border: none;
        outline: none;
        cursor: pointer;
        border-radius: 5px;
        transition: transform .3s ease-out;

        &:hover {
          transform: translateY(-3px);
        }
      }
    }
  }
</style>
