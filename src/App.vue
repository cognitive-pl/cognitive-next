<template>
  <div id="app">
    <a-layout v-if="$router.currentRoute.meta.requiresAuth" style="min-height: 100vh">
      <a-layout-header class="header">
        <a-icon
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => {collapsed = !collapsed}"
        />
      </a-layout-header>
      <a-layout style="position: relative">
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
            <router-link to="/app">Home</router-link>
          </a-menu-item>
          <a-sub-menu key="unit">
            <span slot="title"><a-icon type="book"/>Unit</span>
            <a-menu-item key="unit:1">
              <router-link to="/new-unit">
                <a-icon type="plus-circle" /> Add new unit
              </router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="flashcards">
            <span slot="title"><a-icon type="appstore"/>Flashcards</span>
            <a-menu-item key="flashcards:1">
              <router-link to="/flashcards">
                <a-icon type="container" /> All sets
              </router-link>
            </a-menu-item>
            <a-menu-item key="flashcards:2">
              <router-link to="/new-set">
                <a-icon type="plus-circle" /> Add new set
              </router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="account">
            <span slot="title"><a-icon type="setting"/>Account</span>
            <a-menu-item @click="logout()" key="account:1">
              <a-icon type="logout" /> Logout
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout-content class="contentWrapper">
        <a-breadcrumb class="breadcrumb">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
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

export default {
  name: 'App',
  methods: {
    logout() {
      auth.signOut();
    },
  },
  data: function () {
    return {
      collapsed: false,
    };
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

    @media (min-width: 768px) {
      display: none;
    }
  }

  .menu {
    line-height: 64px;
    padding: 16px;
  }

  .sidebar {

    div {
      display: flex;
      flex-direction: column;
    }

    @media (max-width: 768px) {
      height: 100%;
      position: absolute;
      z-index: 9999;
    }
  }

  .sidebar__logo {
    width: 40px;
    height: 40px;
    margin: 25px auto 0;
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
