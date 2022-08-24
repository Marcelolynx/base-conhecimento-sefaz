const pkg = require('./package')

module.exports = {
  target: 'static',
  ssr: false,
  // change router for github pages
  router: { mode: 'hash' },
  generate: {
    dir: 'dist'
  },
  /*
  ** Headers of the page
  */

  head: {
    title: 'Base de Conhecimento',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Base de Conhecimento - Organograma SEFAZ-MS'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'Secretaria de Estado de Fazenda de Mato Grosso do Sul, SEFAZ-MS, Organograma, Base de Conhecimento'
      }
    ],
    script: [
      {
        src: 'data.js'
      },
      { src: 'config.js' },
      { src: 'translate.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  loadingIndicator: {
    name: 'circle',
    color: '#05668d',
    background: 'white'
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/AsyncComputed'],

  /*
  ** Nuxt.js modules
  */

  modules: ['nuxt-material-design-icons'],

  /*
  ** Build configuration
  */
  build: {},
  builder: {
    /*
    ** You can extend webpack config here
    */

    plugins: [],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
