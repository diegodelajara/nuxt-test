module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Covit',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  plugins: [
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/chartist' },
    { src: '~/plugins/theme.js' },
    { src: '~/plugins/vuetify.js' }
  ],
  css: [
    '~/assets/style/style.css',
    '~/styles/index.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { 
    color: '#3B8070' 
  },
  
  manifest: {
    theme_color: '#00aeef'
  },
  /*
  ** Build configuration
  */
  modules: [
      ['@nuxtjs/pwa', { icon: true }],
      ['nuxt-material-design-icons']
  ]
}
