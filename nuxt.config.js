export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Sean Grindal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700&display=swap' }
    ]
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/vuex-router-sync.js'
  ],
  generate: {
    routes: [
      '/work/creatives-landing',
      '/work/ricochet-landing',
      '/work/zenfully-landing',
      '/work/zenfully-app'
    ]
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-145065375-1'
  },
  /*
  ** Nuxt.js modules
  */
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: [
      '~/assets/styles/main.scss'
    ]
  }
}
