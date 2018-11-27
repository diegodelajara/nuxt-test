<template>
  <v-app>
    <no-ssr>
      <core-filter />
    </no-ssr>
    
    <no-ssr>
        <core-toolbar />
    </no-ssr>
    <no-ssr>
        <core-drawer />
    </no-ssr>
    <no-ssr>
      <core-view />
    </no-ssr>


  </v-app>
</template>

<script>
  import CoreFilter  from '../components/core/Filter'
  import CoreToolbar  from '../components/core/Toolbar'
  import CoreDrawer  from '../components/core/Drawer'
  import CoreView  from '../components/core/View'


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
