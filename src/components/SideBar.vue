<template>
  <a-layout-sider
    v-model="collapsed"
    class="sidebar"
    breakpoint="md"
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
</template>

<script>
import { auth } from '@/initFirebase';

export default {
  name: 'SideBar',
  props: [
    'collapsed',
  ],
  data: function () {
    return {
      isCollapsed: this.collapsed,
    };
  },
  methods: {
    logout() {
      auth.signOut();
    },
  },
};
</script>

<style lang="scss">
  
</style>
