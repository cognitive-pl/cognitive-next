<template>
  <div id="app">
    <a-layout>
      <a-layout-header>
        <a-menu
          theme="dark"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1">
            <router-link to="/app">Home</router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/new-topic">New topic</router-link>
          </a-menu-item>
          <a-popconfirm
            title="Are you sure you want to logout?"
            ok-text="Imma head out"
            cancel-text="I'll stay"
            @confirm="logout"
            style="cursor: pointer"
          >
          <a-menu-item key="3" style="float: right">
              <a-icon type="unlock" /> Logout
          </a-menu-item>
          </a-popconfirm>
        </a-menu>
      </a-layout-header>
      <a-layout-content class="contentWrapper">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>{{this.$router.currentRoute.name}}</a-breadcrumb-item>
        </a-breadcrumb>
        <div class="contentWrapper__inner">
          <a-empty v-if="!$store.state.user"/>
          <router-view v-if="$store.state.user"/>
          <!-- <router-view /> -->
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Copyright © {{new Date().getFullYear()}} Aleksander Skubała
      </a-layout-footer>
    </a-layout>
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
};
</script>

<style lang="scss">
  body, html {
    margin: 0;
  }

  .contentWrapper {
    padding: 0 25px;

    @media (min-width: 435px) {
      padding: 0 50px;
    }
  }

  .contentWrapper__inner {
    background-color: #fff;
    padding: 24px;
    min-height: 280px;
  }
</style>
