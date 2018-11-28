<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    fixed
    app
    dark
    floating
    persistent
    mobile-break-point="768"
    width="260"
  >
<v-layout align-center justify-space-around>
    <v-icon>fas fa-lock</v-icon>

    <v-icon>fas fa-search</v-icon>

    <v-icon>fas fa-list</v-icon>

    <v-icon>fas fa-edit</v-icon>

    <v-icon>fas fa-tachometer-alt</v-icon>

    <v-icon>fas fa-circle-notch fa-spin</v-icon>
  </v-layout>
    <v-img
      :src="image"
      height="100%"
    >
      <v-layout
        class="fill-height"
        tag="v-list"
        column
      >
        <v-list-tile avatar>
          <v-list-tile-avatar
            color="white"
          >
            <v-img
              :src="logo"
              height="34"
              contain
            />
            <v-img
              height="34"
              contain
            />
          </v-list-tile-avatar>
          <v-list-tile-title class="title">
            Covit
          </v-list-tile-title>
        </v-list-tile>
        <v-divider/>
        <v-list-tile
          v-if="responsive"
        >
          <v-text-field
            class="purple-input search-input"
            label="Search..."
            color="purple"
          />
        </v-list-tile>

        <v-list-tile>
          <v-text-field
            class="purple-input search-input"
            label="Search..."
            color="purple"
          />
        </v-list-tile>
        <v-list-tile
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          :active-class="color"
          avatar
          class="v-list-item"
        >
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>

          <v-expansion-panel>
            <v-expansion-panel-content>
              <div slot="header">{{ link.name }}</div>
              <v-card>
                <v-card-text v-if="link.children">
                  <ul>
                    <li v-for="(child, i) in link.children" :key="i">
                      {{ child.name }}
                    </li>
                  </ul>
                </v-card-text>
                <v-card-text v-else>
                  none
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-list-tile>
      </v-layout>
    </v-img>

    
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapMutations, mapState } from 'vuex'

export default {
  data: () => ({
    logo: '',
    links: [
        {
          // Contabilidad
          icon: "assessment",
          name: "Contabilidad",
          children: [
            {
              icon: "fa fa-dollar",
              name: "Ingresos",
              url: "/contabilidad-ingresos"
            },{
              icon: "fa fa-dollar",
              name: "Egresos",
              url: "/contabilidad-egresos"
            },{
              icon: "icon-puzzle",
              name: "Multas",
              url: "/contabilidad-multas"
            },{
              icon: "icon-puzzle",
              name: "Condonaciones",
              url: "/contabilidad-condonaciones"
            }
          ]
        },{
          // GGCC
          icon: "payment",
          name: "Gastos Comunes",
          url: "/gastos-comunes"
        },{
          // Nómina y Remuneraciones
          icon: "mdi-clipboard-outline",
          name: "Nómina y Remuneraciones",
          children: [{
              icon: "fa fa-dollar",
              name: "Nómina",
              url: "/nomina"
            },{
              icon: "fa fa-dollar",
              name: "Remuneraciones",
              url: "/remuneraciones"
            },{
              icon: "icon-puzzle",
              name: "Horas trabajadas",
              url: "/horas-trabajadas"
          }]
        },{
          // Proveedores y Mantenciones
          icon: "build",
          name: "Proveedores y Mantenciones",
          children: [{
              icon: "fa fa-dollar",
              name: "Proveedores",
              url: "/proveedores"
            },{
              icon: "fa fa-dollar",
              name: "Mantenciones",
              url: "/mantenciones"
            }]
        },{
          // Residentes y Visitas
          icon: "person_pin",
          name: "Residentes y Visitas",
          url: "/residentes",
          children: [{
              icon: "fa fa-dollar",
              name: "Residentes",
              url: "/residentes"
            },{
              icon: "fa fa-dollar",
              name: "Visitas",
              url: "/visitas"
            }]
        },{
          // Mensajes
          icon: "message",
          name: "Mensajes",
          url: "/mensajes"
        },{
          // Seguridad y Alertas
          icon: "warning",
          name: "Seguridad y Alertas",
          url: "/seguridad-y-alertas"
        },{
          // Espacios Comunes
          icon: "place",
          name: "Espacios Comunes",
          url: "/widgets"
        },{
          // Biblioteca
          icon: "library_books",
          name: "Biblioteca",
          url: "/widgets"
        },
      {
        to: '/',
        icon: 'mdi-view-dashboard',
        name: 'Dashboard'
      },
      {
        to: '/user-profile',
        icon: 'mdi-account',
        name: 'User Profile'
      },
      {
        to: '/table-list',
        icon: 'mdi-clipboard-outline',
        name: 'Table List'
      },
      {
        to: '/typography',
        icon: 'mdi-format-font',
        name: 'Typography'
      },
      {
        to: '/icons',
        icon: 'mdi-chart-bubble',
        name: 'Icons'
      },
      {
        to: '/maps',
        icon: 'mdi-map-marker',
        name: 'Maps'
      },
      {
        to: '/notifications',
        icon: 'mdi-bell',
        name: 'Notifications'
      }
    ],

    responsive: false
  }),
  computed: {
    ...mapState('app', ['image', 'color']),
    inputValue: {
      get () {
        return this.$store.state.app.drawer
      },
      set (val) {
        this.setDrawer(val)
      }
    },
    items () {
      return this.$t('Layout.View.items')
    }
  },
  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },
  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
      } else {
        this.responsive = false
      }
    }
  }
}
</script>

<style scoped>
  aside {
    height: auto !important;
  }
  #app-drawer .v-list__tile {
    border-radius: 4px;
  }
  #app-drawer .v-list__tile--buy {
    margin-top: auto;
    margin-bottom: 17px;
  }
  #app-drawer .v-image__image--contain {
    top: 9px;
    height: 60%;
  }
  #app-drawer .search-input {
    margin-bottom: 30px !important;
    padding-left: 15px;
    padding-right: 15px;
  }
  
  .theme--dark.v-card,
  .theme--dark.v-expansion-panel .v-expansion-panel__container {
    background-color: transparent;
  }
  .v-expansion-panel {
    box-shadow: none;
  }
</style>

