import Vue from "vue";
import Card from "../components/material/Card";
import StatsCard from "../components/material/StatsCard";
import ChartCard from "../components/material/ChartCard";
import Notification from "../components/material/Notification";
import Helper from "../components/helper/Offset";

Vue.component("material-card", Card);
Vue.component("material-stats-card", StatsCard);
Vue.component("material-chart-card", ChartCard);
Vue.component("material-notification", Notification);
Vue.component("helper-offset", Helper);
