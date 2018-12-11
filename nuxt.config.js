module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "Covit",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "{{ description }}" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      }
    ]
  },
  plugins: [
    { src: "~/plugins/components.js" },
    { src: "~/plugins/highcharts.js" },
    { src: "~/plugins/vuetify.js" },
    { src: "~/plugins/axios.js" }
  ],
  css: ["~/assets/style/style.css", "~/styles/index.scss"],
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: "#3B8070"
  },

  manifest: {
    theme_color: "#00aeef"
  },
  /*
   ** Build configuration
   */
  modules: ["@nuxtjs/pwa", "@nuxtjs/axios", "nuxt-material-design-icons"],
  proxy: {
    "/api/": "https://dog.ceo"
  },
  axios: {
    proxy: true
  }
};
