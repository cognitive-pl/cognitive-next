<template>
  <div id="app">
    <a-layout v-if="$router.currentRoute.meta.requiresAuth" style="min-height: 100vh;">
      <a-layout-header class="header">
        <a-icon
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => {collapsed = !collapsed}"
        />
      </a-layout-header>
      <a-layout>
      <a-layout-sider
        v-model="collapsed"
        class="sidebar"
        breakpoint="md"
        :collapsedWidth="0"
        :trigger="null"
      >
        <img class="sidebar__logo" src="@/assets/logo.png" alt="Cognitive"/>
        <a-menu
          theme="dark"
          mode="vertical"
          :selectable="false"
          class="menu"
        >
          <a-menu-item key="home">
            <router-link to="/app">{{ $t("appWrapper.home") }}</router-link>
          </a-menu-item>
          <a-sub-menu key="unit">
            <span slot="title"><a-icon type="book"/>{{ $t("appWrapper.unit") }}</span>
            <a-menu-item key="unit:1">
              <router-link to="/new-unit">
                <a-icon type="plus-circle" /> {{ $t("appWrapper.addUnit") }}
              </router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="flashcards">
            <span slot="title"><a-icon type="appstore"/>{{ $t("appWrapper.flashcards") }}</span>
            <a-menu-item key="flashcards:1">
              <router-link to="/flashcards">
                <a-icon type="container" /> {{ $t("appWrapper.allSets") }}
              </router-link>
            </a-menu-item>
            <a-menu-item key="flashcards:2">
              <router-link to="/new-set">
                <a-icon type="plus-circle" /> {{ $t("appWrapper.addSet") }}
              </router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="account">
            <span slot="title"><a-icon type="setting"/>{{ $t("appWrapper.account") }}</span>
            <a-menu-item @click="logout()" key="account:1">
              <a-icon type="logout" /> {{ $t("appWrapper.logout") }}
            </a-menu-item>
            <a-menu-item key="account:2">
              <router-link to="/support">
                <dollar-icon type="icon-dollar1" :style="{color: 'green'}"/> {{ $t("appWrapper.support") }}
              </router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item key="language" class="languageItem">
            <a-button type="primary" v-if="this.language != 'pl'" @click="setLanguage('pl')">Polski</a-button>
            <a-button type="primary" v-if="this.language === 'pl'" @click="setLanguage('en')">English</a-button>
          </a-menu-item>
        </a-menu>
        <div v-if="showDownload" class="sider__download">
          <p>{{ $t("appWrapper.installPWA") }}</p>
          <button @click="download">
            <a-icon type="cloud-download"/>
          </button>
        </div>
      </a-layout-sider>
      <a-layout-content class="contentWrapper">
        <a-breadcrumb class="breadcrumb">
          <a-breadcrumb-item>{{ $t("appWrapper.breadcrumb") }}</a-breadcrumb-item>
          <a-breadcrumb-item>{{this.$router.currentRoute.name}}</a-breadcrumb-item>
        </a-breadcrumb>
        <div class="contentWrapper__inner">
          <transition
            name="fade"
            mode="out-in"
          >
            <router-view v-if="$store.state.user"/>
          </transition>
        </div>
      <a-layout-footer style="text-align: center">
        Copyright © {{new Date().getFullYear()}} Aleksander Skubała
      </a-layout-footer>
      </a-layout-content>
      </a-layout>
    </a-layout>
    <router-view v-if="!$router.currentRoute.meta.requiresAuth"/>
  </div>
</template>

<script>
import { auth } from '@/initFirebase';
import { Icon } from 'ant-design-vue';

const DollarIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2445976_dcplbpjao9.js',
});

export default {
  name: 'App',
  data: function () {
    return {
      collapsed: false,
      installPrompt: null,
      showDownload: false,
      language: '',
    };
  },
  components: {
    'dollar-icon': DollarIcon,
  },
  beforeCreate() {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.installPrompt = e;
      // Update UI notify the user they can install the PWA
      this.showDownload = true;
    });
  },
  mounted() {
    this.language = this.$service.getLanguage();
  },
  methods: {
    setLanguage(languageProp) {
      this.$service.setLanguage(languageProp);
      window.location.reload();
    },
    logout() {
      auth.signOut();
    },
    download() {
      // Checking is installation available (it could be production mode too)
      if (this.installPrompt) {
        // Show the install prompt
        this.installPrompt.prompt();
        // Wait for the user to respond to the prompt
        this.installPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            this.$notification['success']({
              message: 'So happy to have you here',
              description: 'App should be installed on your device',
            });
            // Hide the app provided install promotion
            this.showDownload = false;
          } else {
            this.$notification['warning']({
              message: 'Ouch',
              description: "We're sorry to see that you don't want our app.",
            });
          }
        });
      } else {
        this.$notification['warning']({
          message: "Something isn't right",
          description: "Right now it isn't possible to install the app, try again later",
        });
      }
    },
  },
};
</script>

<style lang="scss">
  html {
    font-size: 100%;
    line-height: 1.3;
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: .6em 0 0;
  }

  h1 { font-size: 2em; }
  h2 { font-size: 1.5em; }
  h3 { font-size: 1.17em; }
  h4 { font-size: 1.12em; }
  h5 { font-size: .83em; }
  h6 { font-size: .75em; }

  .header {
    color: white;
    padding: 0 32px;

    position: sticky;
    z-index: 1000;
    top: 0;
    left: 0;

    @media (min-width: 768px) {
      display: none;
    }
  }

  .menu {
    line-height: 64px;
    padding: 16px;
  }

  .sidebar {
    height: 100vh;
    position: sticky;
    top: 0;
    left: 0;

    .languageItem {
      margin-top: 40px;
    }

    div {
      display: flex;
      flex-direction: column;
    }

    @media (max-width: 768px) {
      height: calc(100% - 64px);
      position: fixed;
      z-index: 1000;
      top: 64px;
    }
  }

  .sidebar__logo {
    width: 40px;
    height: 40px;
    margin: 25px auto 0;
  }

  .sider__download {
    color: white;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;

    button {
      font-size: 1.5em;
      background-color: #002140;
      border: none;
      outline: none;
      cursor: pointer;
      padding: 20px 0;
    }
  }

  .breadcrumb {
    margin: 16px 0;

    @media (max-width: 435px) {
      margin: 16px 16px;
    }
  }

  .contentWrapper {
    @media (min-width: 435px) {
      padding: 0 40px;
    }
  }

  .contentWrapper__inner {
    background-color: #fff;
    padding: 28px;
    min-height: 280px;

    * {
      transition: opacity 0.3s ease-out;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0;
  }

  .fade-enter-to,
  .fade-leave-to {
    opacity: 0;
  }

</style>
