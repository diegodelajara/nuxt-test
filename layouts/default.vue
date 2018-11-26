<template>
  <v-app>
    <core-filter />

    <core-toolbar />

    <core-drawer />

    <core-view />


  </v-app>
</template>

<script>
  import CoreFilter  from '../components/core/Filter'
  import CoreToolbar  from '../components/core/Toolbar'
  import CoreDrawer  from '../components/core/Drawer.vue'
  import CoreView  from '../components/core/View.vue'

  export default {
    components: {
      CoreFilter,
      CoreToolbar,
      CoreDrawer,
      CoreView
    }
  }
</script>

<style>
  .theme--dark.v-list {
    background-color: rgba(0,0,0,.5) !important;
    color: #fff;
  }
</style>
