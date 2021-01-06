<template>
  <div id="app">
    <a-layout v-if="$router.currentRoute.meta.requiresAuth">
      <a-layout-header>
        <a-menu
          theme="dark"
          mode="horizontal"
          :selectable="false"
          class="menu"
        >
          <a-menu-item key="1">
            <router-link to="/app">Home</router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/new-unit">Add new unit</router-link>
          </a-menu-item>
          <a-divider class="divider" type="vertical" />
          <a-sub-menu>
            <span slot="title"><a-icon type="setting" />Account</span>
            <a-menu-item @click="logout()" key="account:1">
                <a-icon type="unlock" /> Logout
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-header>
      <a-layout-content class="contentWrapper">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>{{this.$router.currentRoute.name}}</a-breadcrumb-item>
        </a-breadcrumb>
        <div class="contentWrapper__inner">
          <!-- <a-empty :description="false" v-if="!$store.state.user"/> -->
          <transition
            name="fade"
            mode="out-in"
          >
            <router-view/>
          </transition>
          <!-- <router-view v-if="$store.state.user"/> -->
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Copyright © {{new Date().getFullYear()}} Aleksander Skubała
      </a-layout-footer>
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
      toggle: true,
    };
  },
};
</script>

<style lang="scss">
  body, html {
    margin: 0;
  }

  .menu {
    line-height: 64px;
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
    transition: opacity 0.3s ease;

    * {
      transition: opacity 0.3s ease;
    }
  }

  .divider {
    display: none;

    @media (min-width: 475px) {
      display: inline-block;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.1s ease;
  }

  .fade-enter-to,
  .fade-leave-to {
    opacity: 0;
  }
</style>
