<template>
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
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .menu {
      line-height: 64px;
  }

  .divider {
    display: none;

    @media (min-width: 475px) {
      display: inline-block;
    }
  }
</style>