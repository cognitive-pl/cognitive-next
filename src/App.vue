<template>
  <div id="app">
    <a-layout v-if="$router.currentRoute.meta.requiresAuth">
      <a-layout-header class="header">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout>
      <a-layout-sider
        v-model="collapsed"
        className="sidebar"
        breakpoint="lg"
        :collapsedWidth="0"
        :trigger="null"
      >
        <a-menu
          theme="dark"
          mode="vertical"
          :selectable="false"
          class="menu"
        >
          <a-menu-item key="1">
            <router-link to="/app">Home</router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/new-unit">Add new unit</router-link>
          </a-menu-item>
          <a-sub-menu>
            <span slot="title"><a-icon type="setting" />Account</span>
            <a-menu-item @click="logout()" key="account:1">
                <a-icon type="unlock" /> Logout
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout-content class="contentWrapper">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>{{this.$router.currentRoute.name}}</a-breadcrumb-item>
        </a-breadcrumb>
        <div class="contentWrapper__inner">
          <transition
            name="fade"
            mode="out-in"
          >
            <router-view/>
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
  }

  body {
    margin: 0;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  .header {
    color: white;
    padding: 0 32px;

    @media (min-width: 966px) {
      display: none;
    }
  }

  .contentWrapper {
    padding: 0 25px;

    @media (min-width: 435px) {
      padding: 0 40px;
    }
  }

  .contentWrapper__inner {
    background-color: #fff;
    padding: 28px;
    min-height: 280px;

    * {
      transition: opacity 0.35s ease-out;
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
