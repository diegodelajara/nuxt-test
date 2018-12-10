<template>
  <v-app>
    <no-ssr>
      <core-filter/>
    </no-ssr>

    <no-ssr>
      <core-toolbar/>
    </no-ssr>
    <no-ssr>
      <core-drawer/>
    </no-ssr>
    <no-ssr>
      <core-view/>
    </no-ssr>
  </v-app>
</template>

<script>
import CoreFilter from "../components/core/Filter";
import CoreToolbar from "../components/core/Toolbar";
import CoreDrawer from "../components/core/Drawer";
import CoreView from "../components/core/View";

import MaterialCard from "../components/material/Card";
import MaterialStatsCard from "../components/material/StatsCard";
import MaterialChartCard from "../components/material/ChartCard";
import MaterialNotification from "../components/material/Notification";

export default {
  components: {
    CoreFilter,
    CoreToolbar,
    CoreDrawer,
    CoreView,
    MaterialCard,
    MaterialStatsCard,
    MaterialChartCard,
    MaterialNotification
  }
};
</script>

<style>
.theme--dark.v-list {
  background-color: rgba(0, 0, 0, 0.5) !important;
  color: #fff;
}

.v-navigation-drawer .v-list .v-list-item > .v-list__tile {
  padding: 5px;
}
.v-list__tile__action {
  position: absolute !important;
  top: 10px !important;
  display: block !important;
}
.v-expansion-panel__header,
.no-expansion-item {
  padding: 5px 0 5px 30px !important;
  min-height: 20px !important;
}
ol,
ul {
  list-style: none;
}
.v-list-item {
    margin: 0 5px !important;
}
@media (max-width: 768px) {
  nav#core-toolbar {
    position: fixed;
    z-index: 9;
  }
  .v-content {
    padding-top: 65px !important;
  }
}
@media (min-width: 768px) {
  .v-image__image.v-image__image--contain {
    background-size: 200px;
  }
}
</style>
